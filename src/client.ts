import * as https from 'https'

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
    'Content-Type': 'application/json; charset=UTF-8'
  }
};

function buildPath(method: string): string {
  return `/${lang}/api/${method}?format=json&api_key=${apiKey}`
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
      path: buildPath(method),
      
    }
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
    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();

    req.on('error', (err: Error) => {
      reject(err)
    });
  })
}
