import {
  APIOptions, CreateEmailMessage, CreateListPayload, DeleteMessage, DeleteListPayload, ExcludePayload,
  ExportContacts, GetContact, GetContactCount, GetTaskResult, GetTotalContactsCount, ImportContacts,
  IsContactInLists, SubscribePayload, UpdateEmailMessage, UpdateListPayload, GetActualMessageVersion,
  SendTestEmail, SendEmail, CheckEmail, CreateSmsMessage, SendSms, CheckSms, CreateCampaign, CancelCampaign,
  GetWebVersion,
  UpdateOptInEmail,
  GetSenderDomainList
} from "./DTO"
import UnisenderBase from "./UnisenderBase"
import UnisenderContacts from "./UnisenderContacts"
import UnisenderFields, { CreateFieldInput, GetContactFieldValuesInput, UpdateFieldInput } from "./UnisenderFields"
import UnisenderMessaging from "./UnisenderMessaging"
import UnisenderStat, { CampaignInput, GetCampaignDeliveryStats, GetMessages, GetVisitedLinks } from "./UnisenderStat"

class Unisender extends UnisenderBase {
  private contacts: UnisenderContacts
  private messaging: UnisenderMessaging
  private stat: UnisenderStat
  private fields: UnisenderFields

  constructor(options?: APIOptions) {
    super(options)

    this.contacts = new UnisenderContacts()
    this.messaging = new UnisenderMessaging()
    this.stat = new UnisenderStat()
    this.fields = new UnisenderFields()
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
  public async createCampaign(payload: CreateCampaign) {
    return this.messaging.createCampaign(payload);
  }
  public async cancelCampaign(payload: CancelCampaign) {
    return this.messaging.cancelCampaign(payload);
  }
  public async getWebVersion(payload: GetWebVersion) {
    return this.messaging.getWebVersion(payload);
  }
  public async updateOptInEmail(payload: UpdateOptInEmail) {
    return this.messaging.updateOptInEmail(payload);
  }
  public async getSenderDomainList(payload: GetSenderDomainList) {
    return this.messaging.getSenderDomainList(payload);
  }

  /* 
    Statistics
  */
  public async getCampaignCommonStats(payload: CampaignInput) {
    return this.stat.getCampaignCommonStats(payload);
  }
  public async getCampaignDeliveryStats(payload: GetCampaignDeliveryStats) {
    return this.stat.getCampaignDeliveryStats(payload);
  }
  public async getCampaignStatus(payload: CampaignInput) {
    return this.stat.getCampaignStatus(payload);
  }
  public async getMessages(payload: GetMessages) {
    return this.stat.getMessages(payload);
  }
  public async getVisitedLinks(payload: GetVisitedLinks) {
    return this.stat.getVisitedLinks(payload);
  }

  /* 
    Fields
  */
  public async getFields() {
    return this.fields.getFields();
  }
  public async createField(input: CreateFieldInput) {
    return this.fields.createField(input);
  }
  public async updateField(input: UpdateFieldInput) {
    return this.fields.updateField(input);
  }
  public async deleteField(id: number | string) {
    return this.fields.deleteField(id);
  }
  public async getTags() {
    return this.fields.getTags();
  }
  public async deleteTag(id: number | string) {
    return this.fields.deleteTag(id);
  }
  public async getContactFieldValues(input: GetContactFieldValuesInput) {
    return this.fields.getContactFieldValues(input);
  }
}

export default Unisender