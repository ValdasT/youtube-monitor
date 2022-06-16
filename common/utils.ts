import config from './config';

const subtractHours = (numOfHours: number, date = new Date()) => {
  date.setHours(date.getHours() - numOfHours);

  return date;
};

const printData = (data: any[]) => {
  // eslint-disable-next-line no-console
  console.log(`I found ${data.length} new videos on youtube with the word "${config.YOUTUBE_QUERY}":`);
  data.map((e: any) =>
    // eslint-disable-next-line no-console
    console.log({
      id: e.id.videoId,
      title: e.snippet.title,
    })
  );
};

const prepareDataForSlack = (data: any[]) => {
  const numberOfVideos = 30;
  const blocks: any[] = [];
  blocks.push({
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: `I found ${data.length} new videos on youtube with the word *${config.YOUTUBE_QUERY}*: `,
    },
  }),
    data.map((e: any, i) => {
      if (i < numberOfVideos) {
        blocks.push({
          type: 'section',
          block_id: e.id.videoId,
          fields: [
            {
              type: 'mrkdwn',
              text: e.snippet.title.length > 20 ? `${e.snippet.title.substring(0, 20)}...` : e.snippet.title,
            },
            {
              type: 'mrkdwn',
              text: `<https://www.youtube.com/watch?v=${e.id.videoId}|Watch video>`,
            },
          ],
          accessory: {
            type: 'image',
            image_url: e.snippet.thumbnails.default.url,
            alt_text: e.snippet.title,
          },
        });
      }
    });
  if (data.length > numberOfVideos) {
    blocks.push({
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `And other ${data.length - numberOfVideos} ...`,
      },
    });
  }

  return { attachments: [{ blocks }] };
};

export { prepareDataForSlack, printData, subtractHours };
