import axios from 'axios';

const getTemplate = () =>
  axios.get('http://localhost:8888/public/server.ejs')
    .then((res) => {
      return res.data;
    }).catch((error) => {
      return error;
    });

export default {
  getTemplate,
};
