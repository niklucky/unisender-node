import { APIOptions, CreateEmailMessage, CreateListPayload, DeleteMessage, DeleteListPayload, ExcludePayload, ExportContacts, GetContact, GetContactCount, GetTaskResult, GetTotalContactsCount, ImportContacts, IsContactInLists, SubscribePayload, UpdateEmailMessage, UpdateListPayload, GetActualMessageVersion, SendTestEmail, SendEmail, CheckEmail, CreateSmsMessage, SendSms, CheckSms } from "./DTO"
import UnisenderBase from "./UnisenderBase"
import UnisenderContacts from "./UnisenderContacts"
import UnisenderMessaging from "./UnisenderMessaging"

class Unisender extends UnisenderBase {
  private contacts: UnisenderContacts
  private messaging: UnisenderMessaging

  constructor(options?: APIOptions) {
    super(options)

    this.contacts = new UnisenderContacts()
    this.messaging = new UnisenderMessaging()
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
  public async importContactsBatch(payload: ImportContacts) {
    return this.contacts.importContactsBatch(payload)
  }
  public async exportContacts(payload: ExportContacts) {
    return this.contacts.exportContacts(payload)
  }
  public async getTaskResult(payload: GetTaskResult) {
    return this.contacts.getTaskResult(payload)
  }
  public async getContact(payload: GetContact) {
    return this.contacts.getContact(payload)
  }
  public async getContactCount(payload: GetContactCount) {
    return this.contacts.getContactCount(payload)
  }
  public async getTotalContactsCount(payload: GetTotalContactsCount) {
    return this.contacts.getTotalContactsCount(payload)
  }
  public async isContactInLists(payload: IsContactInLists) {
    return this.contacts.isContactInLists(payload)
  }
  /* 
    Methods for sending messages
  */
  public async createEmailMessage(payload: CreateEmailMessage) {
    return this.messaging.createEmailMessage(payload);
  }
  public async updateEmailMessage(payload: UpdateEmailMessage) {
    return this.messaging.updateEmailMessage(payload);
  }
  public async deleteMessage(payload: DeleteMessage) {
    return this.messaging.deleteMessage(payload);
  }
  public async getActualMessageVersion(payload: GetActualMessageVersion) {
    return this.messaging.getActualMessageVersion(payload);
  }
  public async sendTestEmail(payload: SendTestEmail) {
    return this.messaging.sendTestEmail(payload);
  }
  public async sendEmail(payload: SendEmail) {
    return this.messaging.sendEmail(payload);
  }
  public async checkEmail(payload: CheckEmail) {
    return this.messaging.checkEmail(payload);
  }
  public async createSmsMessage(payload: CreateSmsMessage) {
    return this.messaging.createSmsMessage(payload);
  }
  public async sendSms(payload: SendSms) {
    return this.messaging.sendSms(payload);
  }
  public async checkSms(payload: CheckSms) {
    return this.messaging.checkSms(payload);
  }
}

export default Unisender