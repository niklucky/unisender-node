import { configureClient } from "./client";
import { APIOptions, UnisenderLang } from "./types";

const { UNISENDER_API_KEY, UNISENDER_LANG } = process.env

export default class UnisenderBase {
  protected options: APIOptions

  constructor(options?: APIOptions) {
    this.options = this.validateOptions(options)

    configureClient(this.options)
  }

  private validateOptions(options?: APIOptions): APIOptions {
    if (!options)
      options = {
        apiKey: '',
        lang: 'en'
      }

    if (UNISENDER_API_KEY) {
      options.apiKey = UNISENDER_API_KEY
    }
    if (UNISENDER_LANG) {
      options.lang = UNISENDER_LANG as UnisenderLang
    }
    if (options.apiKey === '') {
      throw new Error('API key is empty')
    }
    return options
  }
}