import apiCreate from './api';

const SPECIFIED_CATEGORY_ID = '63bd141d93836272216d324a';

export const getSpecifiedReviewPoster = () =>
  apiCreate.get(`/api/posts/channel/${SPECIFIED_CATEGORY_ID}`);

export const getAllReviewPoster = (channelId: string) =>
  apiCreate.get(`/api/posts/channel/${channelId}`);
