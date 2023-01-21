import axios from 'axios'
import * as qs from 'qs'

import { APIOptions, UnisenderLang } from './types'

export type KeyValue = Record<string, any>
export type Response<T> = {
  result?: T
  error?: string
  code?: string
  message?: string
  failed_email_id?: KeyValue[]
}

let lang: UnisenderLang = 'en'
let apiKey: string = ''


function buildURL(method: string) {
  return 'https://api.unisender.com' + buildPath(method)
}
function buildPath(method: string): string {
  return `/${lang}/api/${method}?api_key=${apiKey}`
}

function debug(...args: any[]) {
  console.log(...args)
}

export function configureClient(options: APIOptions) {
  lang = options.lang
  apiKey = options.apiKey
}

export async function request<T>(method: string, payload?: KeyValue, headers?: KeyValue): Promise<Response<T>> {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(payload),
    url: buildURL(method),
  };
  const response = await axios(options);
  return response.data
}
