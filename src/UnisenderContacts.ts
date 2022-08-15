import * as qs from 'qs'
import { request } from "./client";
import { CreateListPayload, DeleteListPayload, ExcludePayload, ImportContacts, ImportContactsResponse, List, SubscribePayload, UpdateListPayload } from "./DTO";
import { stringifyArray } from "./utils";

export default class UnisenderContacts {
  constructor() {
  }
  public async getLists() {
    return await request<List[]>('getLists')
  }
  public async createList(payload: CreateListPayload) {
    return await request<{ id: number }>('createList', payload)
  }
  public async updateList(payload: UpdateListPayload) {
    return await request<void>('updateList', payload)
  }
  public async deleteList(payload: DeleteListPayload) {
    return await request<void>('deleteList', payload)
  }
  public async subscribe(payload: SubscribePayload) {
    payload.list_ids = stringifyArray(payload.list_ids)

    if (payload.tags)
      payload.tags = stringifyArray(payload.tags)

    return await request<{ person_id: number }>('subscribe', payload)
  }
  public async unsubscribe(payload: ExcludePayload) {
    if (payload.list_ids)
      payload.list_ids = stringifyArray(payload.list_ids)

    return await request<void>('unsubscribe', payload)
  }
  public async exclude(payload: ExcludePayload) {
    if (payload.list_ids)
      payload.list_ids = stringifyArray(payload.list_ids)

    return await request<void>('exclude', payload)
  }
  public async importContacts(payload: ImportContacts) {
    return await request<ImportContactsResponse>('importContacts', payload)
  }

}