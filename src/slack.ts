import axios, { AxiosRequestConfig } from 'axios';

import config from '../common/config';

const sendMessage = async (data: any) => {
  try {
    const options: AxiosRequestConfig<any> = {
      method: 'post',
      baseURL: config.SLACK_WEBHOOK_URL,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      data: data,
    };
    await axios.request(options);
  } catch (error: any) {
    return error;
  }
};

export { sendMessage };
