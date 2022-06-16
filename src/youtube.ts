import { google } from 'googleapis';

import config from '../common/config';
import { subtractHours } from '../common/utils';
const youtubeSearch = async () => {
  try {
    const res = await google.youtube('v3').search.list({
      key: config.YOUTUBE_TOKEN,
      maxResults: 100,
      part: ['snippet'],
      order: 'date',
      publishedAfter: new Date(subtractHours(Number(config.YOUTUBE_RELEASED_HOURS_AGO))).toISOString(),
      q: config.YOUTUBE_QUERY,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export { youtubeSearch };
