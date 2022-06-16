import cron from 'node-cron';

import config from './common/config';
import { prepareDataForSlack, printData } from './common/utils';
import { sendMessage } from './src/slack';
import { youtubeSearch } from './src/youtube';

cron.schedule(config.SCHEDULE_FREQUENCE, async () => {
  try {
    const videos: any = await youtubeSearch();
    if (videos.items) {
      printData(videos.items);
      const message = prepareDataForSlack(videos.items);
      await sendMessage(message);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
});
