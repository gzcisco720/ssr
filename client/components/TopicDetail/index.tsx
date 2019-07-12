import * as React from 'react';
import { compose, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { withRouter } from 'react-router';
import { fetchDetail, fetchDetailSuccess, fetchDetailFailure } from '../../store/actions';
import { Container, Paper, withStyles, CircularProgress } from '@material-ui/core';
import Helmet from 'react-helmet';
import * as marked from 'marked';
import { detailStyles } from './styles';
import axios from 'axios';
import { IReply } from '../../DTOs/IReply';
import Reply from './reply';
import { frontloadConnect } from 'react-frontload';
class Detail extends React.Component<any, any> {
  public article: any;
  constructor(props: any) {
    super(props);
    this.article = React.createRef();
  }
  public updateContent = () => {
    const { detailState } = this.props;
    const { detail } = detailState;
    if (detail.content) {
      this.article.current.innerHTML = marked(detail.content);
    }
  }
  public componentDidUpdate = () => {
    this.updateContent();
  }
  public componentDidMount = () => {
    const { match, detailState } = this.props;
    const { id } = match.params;
    if (id) {
      if (Object.keys(detailState.detail).length === 0) {
        this.props.dispatch(fetchDetail(id));
      } else {
        this.updateContent();
      }
    }
  }
  public renderMainContetn = () => {
    const { detailState, classes } = this.props;
    const { detail } = detailState;
    return (
      <>
        <Helmet>
          <title>{detail.title}</title>
        </Helmet>
        <Paper className={classes.content}>
          <header>
            <h3>{detail.title}</h3>
          </header>
          <section className={classes.article} ref={this.article} />
        </Paper>
        <Paper className={classes.reply}>
          {
            detail.replies && detail.replies.map((reply: IReply) =>
              <Reply reply={reply} key={reply.id} />,
            )
          }
        </Paper>
      </>
    );
  }
  public render() {
    const { detailState, classes } = this.props;
    const { loading } = detailState;
    return <>
      <Container className={classes.root}>
        {
          loading ?
            <CircularProgress
              className={classes.progress}
              size={150}
            />
            :
            this.renderMainContetn()
        }
      </Container>
    </>;
  }
}

const loadDetail = async (props: any) => {
  const { dispatch, match } = props;
  const { id } = match.params;
  try {
    const response = await axios(`https://cnodejs.org/api/v1/topic/${id}`);
    const { data } = response;
    dispatch(fetchDetailSuccess(data.data));
  } catch (e) {
    dispatch(fetchDetailFailure(e));
  }
};

const getDetailState = createSelector(
  (state: any) => state.detail,
  (detailState: any) => detailState,
);

const mapStateToProps = (state: any) => {
  return {
    detailState: getDetailState(state),
  };
};

const TopicDetail = compose(
  withRouter,
  withStyles(detailStyles),
  connect(mapStateToProps),
  frontloadConnect(loadDetail),
)(Detail);

export default TopicDetail;
