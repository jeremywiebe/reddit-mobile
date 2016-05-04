import { models } from '@r/api-client';
import session from './session';
import { apiResponseReducerMaker } from './apiResponse';

const { ModelTypes } = models;

// todo, handle the plurarlity in api-client maybe?
const COMMENTS = `${ModelTypes.COMMENT}s`
const POSTS = `${ModelTypes.POST}s`;
const SUBREDDITS = `${ModelTypes.SUBREDDIT}s`;

export default {
  session,
  [COMMENTS]: apiResponseReducerMaker(COMMENTS),
  [POSTS]: apiResponseReducerMaker(POSTS),
  [SUBREDDITS]: apiResponseReducerMaker(SUBREDDITS),
};