# Youtube monitor application
## Usage

This application monitors YouTube content and notifies users through the slack application about the newest videos based on selected keywords and the timeframe. 
####  How to set up the application:
- First, you need to know what search phrase you would like to use. For example, I'm very interested in surfing, and I would like to get notifications about all new videos about surfing. For that case in the `.env` file, you should set `YOUTUBE_QUERY=surfing`. 
- Next, you also need to set how frequently you would like to receive notifications. For example, I would like to get all the latest videos from the last hour every hour. For that case in the `.env` file I should set `YOUTUBE_RELEASED_HOURS_AGO=1` and `SCHEDULE_FREQUENCE='0 * * * *'` (more about cron schedule expressions: [link](https://crontab.guru)) 
for every two hours set `YOUTUBE_RELEASED_HOURS_AGO=2` and `SCHEDULE_FREQUENCE='0 */2 * * *'`. 
- Then you need to create a YouTube API token and set the value in the `.env` file to the `YOUTUBE_TOKEN` value. 
- If you want to receive notifications in the slack, then you need to create a slack webhook token and slack application (more information: [link](https://api.slack.com/messaging/webhooks)) and set `SLACK_WEBHOOK_URL` to your Webhook URL.
- Your .env file should look similar to this:

<img width="820" alt="env file" src="https://user-images.githubusercontent.com/35199948/174612158-40c2954f-2e33-45f6-a70a-bd69dbe51043.png">

## Application screens
#### Results in the console:
<img width="659" alt="console" src="https://user-images.githubusercontent.com/35199948/174599475-610ae85a-1188-4136-8d5c-e17a240564eb.png">

#### Results in the Slack:
<img width="1516" alt="slack" src="https://user-images.githubusercontent.com/35199948/174599460-0651fbed-ac32-4973-ac88-1a91868d5b71.png">


## Start project localy
  - Clone git repository: 
  ```sh
 git clone https://github.com/ValdasT/youtube-monitor.git
  ```
  - Install the dependencies:
```sh
cd youtubeMonitor
npm install
```
  - Create a `.env` file to hold environment variables and create values:
  >YOUTUBE_TOKEN=
  >
  >YOUTUBE_QUERY=surf
  >
  >YOUTUBE_RELEASED_HOURS_AGO=1
  >
  >SCHEDULE_FREQUENCE='0 * * * *'
  >
  >SLACK_WEBHOOK_URL=

- To start the development server run:
```sh
npm run watch
```

