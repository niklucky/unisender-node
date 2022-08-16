import { request } from "./client";
import { CreateEmailMessage } from "./DTO";

export default class UnisenderMessaging {
  constructor() {
  }
  public async createEmailMessage(payload: CreateEmailMessage) {
    return await request<{ message_id: number }>('createEmailMessage', payload)
   }
}