import { APIOptions, CreateListPayload, DeleteListPayload, ImportContacts } from "./DTO"
import UnisenderContacts from "./UnisenderContacts"

class Unisender {
  private contacts: UnisenderContacts

  constructor(options?: APIOptions) {
    this.contacts = new UnisenderContacts(options)
  }

  public async getLists() {
    return this.contacts.getLists()
  }
  public async createList(payload: CreateListPayload) {
    return this.contacts.createList(payload)
  }
  public async deleteList(payload: DeleteListPayload) {
    return this.contacts.deleteList(payload)
  }
  public async importContacts(payload: ImportContacts) {
    return this.contacts.importContacts(payload)
  }
}

export default Unisender