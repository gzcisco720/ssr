import axios from 'axios';
import { NextFunction, Request, Response } from 'express';
const baseUrl = process.env.BASE_URL;

export default (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  axios.post(`${baseUrl}/accesstoken`, {
    accesstoken: req.body.accesstoken,
  })
    .then((resp) => {
      if (resp.status === 200 && resp.data.success) {
        req.session.user = {
          accessToken: req.body.accessToken,
          loginname: resp.data.loginname,
          id: resp.data.id,
          avatar_url: resp.data.avatar_url,
        };
        res.json({
          success: true,
          data: resp.data,
        });
      }
    }).catch((err) => {
      if (err.response) {
        res.json({
          success: false,
          data: err.response.data,
        });
      } else {
        next(err);
      }
    });
};
