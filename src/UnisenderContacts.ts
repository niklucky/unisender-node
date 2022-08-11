import { APIOptions, CreateListPayload, DeleteListPayload, ImportContacts, ImportContactsResponse, List } from "./types";
import UnisenderBase from "./UnisenderBase";

export default class UnisenderContacts extends UnisenderBase {
  constructor(protected readonly options: APIOptions) {
    super(options)
  }
  public async getLists() {
    return await this.request<List[]>('getLists')
  }
  public async createList(payload: CreateListPayload) {
    return await this.request<{ id: number }>('createList', payload)
  }
  public async deleteList(payload: DeleteListPayload) {
    return await this.request<void>('deleteList', payload)
  }
  public async importContacts(payload: ImportContacts) {
    return await this.request<ImportContactsResponse>('importContacts', payload)
  }
}