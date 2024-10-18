import axios, { AxiosRequestHeaders } from 'axios';
import { isEmpty } from 'lodash';

import { API_URL_ANDROID, API_URL_IOS, TOKEN } from '@constants';
import { createFormData, isIOS, storage } from '@utils';

export * from './auth';
export * from './customer';
export * from './user';

export const axiosBase = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosBase.defaults.baseURL = 'http://50.16.210.223/api';
console.log("API_URL_ANDROID", axiosBase.defaults.baseURL);
axiosBase.defaults.transformRequest = function (data = {}, headers) {
  const { isJson = true, isWithImage = false, ...body } = data;

  if (isEmpty(body)) return;

  if (!isJson) {
    (headers as AxiosRequestHeaders)['Content-Type'] =
      'application/x-www-form-urlencoded';
    const str = [];
    for (const key in body) {
      str.push(encodeURIComponent(key) + '=' + encodeURIComponent(body[key]));
    }

    return str.join('&');
  }
  if (isWithImage) {
    return createFormData(body.photo, body);
  }

  return JSON.stringify(body);
};

axiosBase.interceptors.request.use(config => {
  const getToken = storage.getItem(TOKEN);

  getToken.then((token?: string) => {
    const auth = token ? `Bearer ${token}` : '';
    config.headers = {
      ...config.headers,
      Authorization: auth,
    };
  });

  return config;
});
