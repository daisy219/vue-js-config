import axios from 'axios'
import qs from 'qs'
import { BASE_API_ROOT } from '@/config';


export function http_post(config) {
  const _data = config.data;
  if (config.format) {
    return new Promise((resolve) => {
      axios.post(config.api,
        qs.stringify(_data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })).then((res) => {
          resolve(res);
        });
    });
  } else {
    return new Promise((resolve) => {
      axios.post(config.api, _data).then((res) => {
        resolve(res);
      });
    });
  }
}


export function http_get(config) {
  let _data = null;
  if (config.params) {
    _data = config.params;
  }
  return new Promise((resolve) => {
    axios.get(config.api, _data).then((res) => {
      // console.table(data)
      resolve(res);
    });
  });
}