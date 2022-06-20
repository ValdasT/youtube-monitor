# Youtube monitor application
## Usage

<img width="659" alt="console" src="https://user-images.githubusercontent.com/35199948/174599475-610ae85a-1188-4136-8d5c-e17a240564eb.png">

<img width="1516" alt="slack" src="https://user-images.githubusercontent.com/35199948/174599460-0651fbed-ac32-4973-ac88-1a91868d5b71.png">


## Start project localy
  - Clone git repository: 
  ```sh
 git clone https://github.com/ValdasT/youtubeMonitor.git
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

