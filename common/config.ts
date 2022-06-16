export default {
  SCHEDULE_FREQUENCE: process.env.SCHEDULE_FREQUENCE || '* * * * *',

  YOUTUBE_TOKEN: process.env.YOUTUBE_TOKEN as string,
  YOUTUBE_QUERY: process.env.YOUTUBE_QUERY as string,
  YOUTUBE_RELEASED_HOURS_AGO: process.env.YOUTUBE_RELEASED_HOURS_AGO || 1,

  SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL as string,
};
