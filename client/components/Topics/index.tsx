import * as React from 'react';
import TopicListItem from './list-item';
import { frontloadConnect } from 'react-frontload';
import { Container, List, Tabs, Tab, withStyles } from '@material-ui/core';
import { ITopic } from '../../DTOs/ITopic';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchTopic, fetchTopicSuccess, fetchTopicFailure } from '../../store/actions';
import axios from 'axios';
import { createSelector } from 'reselect';
import Helmet from 'react-helmet';
import { tabs } from '../../config/variables';
import * as queryString from 'query-string';
import ContentLoader from 'react-content-loader';
import { topicListStyle } from './styles';
import { get } from '../../config/http';

const PlaceHolder = () => (
  <ContentLoader
    height={140}
    speed={1}
    primaryColor={'#f0f0f0'}
    secondaryColor={'#e0e0e0'}
  >
    <circle cx="10" cy="20" r="8" />
    <rect x="25" y="15" rx="5" ry="5" width="80%" height="10" />
    <circle cx="10" cy="50" r="8" />
    <rect x="25" y="45" rx="5" ry="5" width="80%" height="10" />
    <circle cx="10" cy="80" r="8" />
    <rect x="25" y="75" rx="5" ry="5" width="80%" height="10" />
    <circle cx="10" cy="110" r="8" />
    <rect x="25" y="105" rx="5" ry="5" width="80%" height="10" />
  </ContentLoader>
);

class Topics extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }
  public UNSAFE_componentWillReceiveProps = (nextProps: any) => {
    if (nextProps.location.search !== this.props.location.search) {
      const { dispatch } = this.props;
      const tab = this.getTab(nextProps.location.search);
      dispatch(fetchTopic(tab as string));
    }
  }
  public componentDidMount = () => {
    const { topicState, dispatch } = this.props;
    if (topicState.topics.length === 0) {
      const tab = this.getTab();
      dispatch(fetchTopic(tab as string));
    }
  }
  public onTabChange = (e: React.ChangeEvent<{}>, value: string) => {
    this.props.history.push({
      pathname: '/list',
      search: `?tab=${value}`,
    });
  }
  public getTab = (search?: string) => {
    const searchString = search || this.props.location.search;
    const { tab } = queryString.parse(searchString);
    return tab || 'all';
  }
  public onListItemClick = (topic: ITopic) => {
    return (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      this.props.history.push(`/detail/${topic.id}`);
    };
  }
  public render() {
    const { topicState, classes } = this.props;
    const { topics, loading } = topicState;
    const tab = this.getTab();
    return (
      <Container className={classes.root}>
        <Helmet>
          <title>Topic List</title>
        </Helmet>
        <Tabs value={tab} onChange={this.onTabChange}>
          {
            Object.keys(tabs).map((key: string, index: number) => {
              return <Tab key={index} label={tabs[key]} value={key} />;
            })
          }
        </Tabs>
        {
          loading ? <PlaceHolder /> : <List>
            {
              topics.map((topic: ITopic) => (
                <TopicListItem
                  key={topic.id}
                  topic={topic}
                  onClick={this.onListItemClick}
                />
              ))
            }
          </List>
        }
      </Container>
    );
  }
}

const loadTopics = async (props: any) => {
  const { dispatch } = props;
  const { tab } = queryString.parse(props.location.search);
  try {
    const response = await get('/topics', { tab: tab || 'all' });
    const { data } = response;
    dispatch(fetchTopicSuccess(data));
  } catch (e) {
    dispatch(fetchTopicFailure(e));
  }
};

const getTopicListState = createSelector(
  (state: any) => state.topics,
  (topicState: any) => topicState,
);

const mapStateToProps = (state: any) => {
  return {
    topicState: getTopicListState(state),
  };
};

const TopicsList = compose(
  withRouter,
  withStyles(topicListStyle),
  connect(mapStateToProps),
  frontloadConnect(loadTopics),
)(Topics);

export {
  TopicListItem,
  TopicsList,
};
