import { request } from "./Client";
import { CreateListPayload, DeleteListPayload, ImportContacts, ImportContactsResponse, List } from "./DTO";

export default class UnisenderContacts {
  constructor() {
  }
  public async getLists() {
    return await request<List[]>('getLists')
  }
  public async createList(payload: CreateListPayload) {
    return await request<{ id: number }>('createList', payload)
  }
  public async deleteList(payload: DeleteListPayload) {
    return await request<void>('deleteList', payload)
  }
  public async importContacts(payload: ImportContacts) {
    return await request<ImportContactsResponse>('importContacts', payload)
  }
}