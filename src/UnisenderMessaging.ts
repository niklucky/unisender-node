import { request } from "./client";
import { CreateEmailMessage, DeleteMessage, UpdateEmailMessage } from "./DTO";

export default class UnisenderMessaging {
  constructor() {
  }
  public async createEmailMessage(payload: CreateEmailMessage) {
    return await request<{ message_id: number }>('createEmailMessage', payload)
  }
  public async updateEmailMessage(payload: UpdateEmailMessage) {
    return await request<{ message_id: number }>('updateEmailMessage', payload)
  }
  public async deleteMessage(payload: DeleteMessage) {
    return await request<{ message_id: number }>('deleteMessage', payload)
  }
}