import { APIOptions, CreateListPayload, DeleteListPayload, ImportContacts } from "./DTO"
import UnisenderBase from "./UnisenderBase"
import UnisenderContacts from "./UnisenderContacts"

class Unisender extends UnisenderBase {
  private contacts: UnisenderContacts

  constructor(options?: APIOptions) {
    super(options)

    this.contacts = new UnisenderContacts()
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