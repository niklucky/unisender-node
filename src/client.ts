import * as https from 'https'
import * as qs from 'qs'

import { APIOptions, UnisenderLang } from './DTO'

export type KeyValue = Record<string, any>
export type Response<T> = {
  result?: T
  error?: string
  code?: string
}

let lang: UnisenderLang = 'en'
let apiKey: string = ''

const defaultOptions = {
  host: 'api.unisender.com',
  path: '',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'Content-type: application/x-www-form-urlencoded'
  }
};

function buildPath(method: string, data?: KeyValue): string {
  let url = `/${lang}/api/${method}?format=json&api_key=${apiKey}`
  if (data) {
    url += '&' + qs.stringify(data)
  }

  return url
}

function debug(...args: any[]) {
  console.log(...args)
}

export function configureClient(options: APIOptions) {
  lang = options.lang
  apiKey = options.apiKey
}

export async function request<T>(method: string, data?: KeyValue, headers?: KeyValue): Promise<Response<T>> {
  return new Promise((resolve, reject) => {
    const options: https.RequestOptions = {
      ...defaultOptions,
      path: buildPath(method, data),
    }
    console.log('data', data);
    debug('options', options);
    const req = https.request(options, (res) => {
      debug('res.statusCode', res.statusCode);
      if (res.statusCode !== 200) {
        console.error(`Did not get a Created from the server. Code: ${res.statusCode}`);
        res.resume();
        return;
      }

      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('close', () => {
        resolve(JSON.parse(data))
      });
    });

    req.end();

    req.on('error', (err: Error) => {
      reject(err)
    });
  })
}
