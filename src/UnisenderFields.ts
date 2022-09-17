import { request } from "./client";

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

export type Tag = {
  id: number
  name: string
}

export type GetContactFieldValuesInput = {
  email: string // *	Валидный email адрес.
  field_ids: (number | string)[] // *	Набор id доп. полей через запятую (напр. "1,2,3,4").  
}

export type FieldValues = {
  fieldValues: Record<string, string>
}
export default class UnisenderFields {
  constructor() {
  }
  public async getFields() {
    return await request<Field[]>('getFields')
  }
  public async createField(input: CreateFieldInput) {
    return await request<{ id: number }>('createField', input)
  }
  public async updateField(payload: UpdateFieldInput) {
    return await request<void>('updateField', payload)
  }
  public async deleteField(id: string | number) {
    return await request<void>('deleteField', { id })
  }
  public async getTags() {
    return await request<Tag[]>('getTags')
  }
  public async deleteTag(id: string | number) {
    return await request<void>('deleteTag', { id })
  }
  public async getContactFieldValues(input: GetContactFieldValuesInput) {
    return await request<FieldValues>('getContactFieldValues', input)
  }
}