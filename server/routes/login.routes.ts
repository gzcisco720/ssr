import * as express from 'express';
import loginService from '../services/login.service';
const router = express.Router();

router.post('/login', loginService);

export default router;
