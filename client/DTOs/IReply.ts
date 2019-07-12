import { IAuthor } from './IAuthor';

export interface IReply {
  id: string;
  author: IAuthor;
  content: string;
  ups: string[];
  create_at: string;
  reply_id: null | string;
  is_uped: boolean;
}
