import { APIOptions } from "./types";
import { Client, KeyValue, Response } from "./Client";

export default class UnisenderBase {

  protected client: Client

  constructor(protected readonly options: APIOptions) {
    this.checkOptions()

    this.client = new Client()
  }

  protected async request<T>(method: string, params?: KeyValue): Promise<Response<T>> {
    return this.client.post(this.buildUrl(method), undefined, params)
  }

  private buildUrl(method: string): string {
    return  `https://api.unisender.com/${this.options.lang}/api/${method}?format=json&api_key=${this.options.APIKey}`
  }
  private checkOptions() {
    if (this.options.APIKey === '') {
      throw new Error('API key is empty')
    }
  }
}