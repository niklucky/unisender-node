import { APIOptions, CreateListPayload, ImportContacts, ImportContactsResponse, List } from "./types"
import UnisenderBase from "./UnisenderBase"

class Unisender extends UnisenderBase {

  constructor(protected readonly options: APIOptions) {
    super(options)
  }

  public async getLists() {
    return await this.request<List[]>('getLists', undefined)
  }
  public async createList(payload: CreateListPayload) {
    return await this.request<{ id: number }>('createList', payload)
  }
  public async deleteList(payload: CreateListPayload) {
    return await this.request<void>('deleteList', payload)
  }

  public async importContacts(payload: ImportContacts) {
    return await this.request<ImportContactsResponse>('importContacts', payload)
  }
}

export default Unisender