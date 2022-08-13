import { APIOptions, UnisenderLang } from "./DTO";
import { Client, KeyValue, Response } from "./Client";

const { UNISENDER_API_KEY, UNISENDER_LANG } = process.env

export default class UnisenderBase {

  protected client: Client
  protected APIKey: string = ''
  protected lang: UnisenderLang = 'en'

  constructor(protected options?: APIOptions) {
    this.checkOptions()

    this.client = new Client()
  }

  protected async request<T>(method: string, params?: KeyValue): Promise<Response<T>> {
    return this.client.post(this.buildUrl(method), undefined, params)
  }

  private buildUrl(method: string): string {
    return `https://api.unisender.com/${this.lang}/api/${method}?format=json&api_key=${this.APIKey}`
  }
  private checkOptions() {
    if (UNISENDER_API_KEY) {
      this.APIKey = UNISENDER_API_KEY
    }
    if (UNISENDER_LANG) {
      this.lang = UNISENDER_LANG as UnisenderLang
    }
    if (this.options !== undefined) {
      if (this.options.APIKey === '') {
        throw new Error('API key is empty')
      }
    }
  }
}