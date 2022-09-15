import * as qs from 'qs'
import { request } from "./client";
import { Contact, ContactCount, CreateListPayload, DeleteListPayload, ExcludePayload, ExportContacts, ExportContactsResponse, GetContact, GetContactCount, GetTaskResult, GetTotalContactsCount, ImportContacts, ImportContactsResponse, IsContactInLists, List, SubscribePayload, UpdateListPayload } from "./DTO";
import { stringifyArray } from "./utils";

export type FieldType =
  'string' | // - строка;
  'text' | // - одна или несколько строк;
  'number' | // - целое число или число с десятичной точкой;
  'date' | // - дата (поддерживается формат ДД.ММ.ГГГГ, ДД-ММ-ГГГГ, ГГГГ.ММ.ДД, ГГГГ-ММ-ДД);
  'bool' // - 1/0, да/нет.

export type Field = {
  id: number // 21575
  name: string // "Name"
  type: FieldType
  is_visible: 0 | 1
  view_pos: 0 | 1
}

export type CreateFieldInput = {
  // *	Переменная для подстановки. Должно быть уникальным с учётом регистра. Также не рекомендуется создавать поле с именем, совпадающим с одним из имён стандартных полей (tags, email, phone, email_status, phone_status и пр.) - будет некорректно работать метод importContacts.
  // Допустимые символы: буквы латинского алфавита, цифры и "_". Первым символом может быть только буква. Использование пробелов не допускается.
  name: string
  type: FieldType
  public_name?: string //	Название поля. Если не использовать, то будет проведена автоматическая генерация по полю "name". 
}
export type UpdateFieldInput = {
  id: number | string
  name: string
  public_name?: string //	Название поля. Если не использовать, то будет проведена автоматическая генерация по полю "name". 
}

export default class UnisenderFields {
  constructor() {
  }
  public async getFields() {
    return await request<Field[]>('getFields')
  }
  public async createField(payload: CreateFieldInput) {
    return await request<{ id: number }>('createField', payload)
  }
  public async updateField(payload: UpdateFieldInput) {
    return await request<void>('updateField', payload)
  }
  public async deleteField(id: string | number) {
    return await request<void>('deleteField', { id })
  }

}