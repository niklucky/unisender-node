import { APIOptions, CreateListPayload, DeleteListPayload, ExcludePayload, ImportContacts, SubscribePayload, UpdateListPayload } from "./DTO"
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
  public async updateList(payload: UpdateListPayload) {
    return this.contacts.updateList(payload)
  }
  public async deleteList(payload: DeleteListPayload) {
    return this.contacts.deleteList(payload)
  }
  public async subscribe(payload: SubscribePayload) {
    return this.contacts.subscribe(payload)
  }
  public async unsubscribe(payload: ExcludePayload) {
    return this.contacts.unsubscribe(payload)
  }
  public async exclude(payload: ExcludePayload) {
    return this.contacts.exclude(payload)
  }
  public async importContacts(payload: ImportContacts) {
    return this.contacts.importContacts(payload)
  }
}

export default Unisender