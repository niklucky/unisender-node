import Unisender from './Unisender'

export type APIOptions = {
  lang: 'ru' | 'en' | 'ua',
  APIKey: string
}

export type List = {
  id: number
  title: string
}
export type CreateListPayload = {
  title: string
  before_subscribe_url?: string
  after_subscribe_url?: string
}
export type DeleteListPayload = {
  list_id: string
}

export default Unisender