export type KeyValue = Record<string, any>
export type Response<T> = {
  result?: T
  error?: string
  code?: string
}

export class Client {

  constructor(){}

  public async get(url: string, query?: KeyValue, headers?: KeyValue ) {
    return this.request(url, query, undefined, headers)
  }
  public async post<T>(url: string, query?: KeyValue, data?: any, headers?: KeyValue ): Promise<Response<T>> {
    return this.request(url, query, data, headers)
  }
  public async request<T>(url: string, query?: KeyValue, data?: any, headers?: KeyValue ): Promise<Response<T>> {
    return {
      result: undefined,
      error: 'test',
      code: '123'
    }
  }
}