import { KeyValue } from "./client"

export type UnisenderLang = 'ru' | 'en' | 'ua'

export type APIOptions = {
  lang: UnisenderLang,
  apiKey: string
}

export type List = {
  id: number
  title: string
}
export type CreateListPayload = {
  title: string
  before_subscribe_url?: string
  after_subscribe_url?: string
}
export type UpdateListPayload = CreateListPayload & {
  list_id: List['id']
}
export type DeleteListPayload = {
  list_id: number
}

export type ImportContactsData = {
  email: string   //	Адрес электронной почты контакта
  phone?: string

  delete?: 1 | 0, //	Если поле с этим названием содержит 1, то указанные контакты списка удаляются.
  tags?: string[] | string //	Через запятую можно указать метки, присваемые контакту. Максимально допустимое количество - 10 меток.

  email_status?: 'new' | 'active' | 'inactive' | 'unsubscribed' //	Статус email, один из: 'new' (новый), 'active' (активный), 'inactive'(временно отключённый), 'unsubscribed' (отписался от всех настоящих и будущих рассылок). Если статус не указан, то для новых адресов подразумевается 'new'. Для уже существующих адресов с текущим статусом, не совпадающим с 'active' или 'inactive', значение статуса поменять нельзя.
  email_availability?: number //	Доступность адреса.
  email_list_ids?: number[] | string //	Перечисленные через запятую коды списков, на которые будет подписан email-адрес.
  email_subscribe_times?: string[] | string | Date[] | Date //	Перечисленные через запятую дата и время подписки, количество и порядок дат должен соответствовать количеству и порядку кодов списков в email_list_ids. Даты указаны в UTC, в формате "ГГГГ-ММ-ДД чч:мм:сс" или "ГГГГ-ММ-ДД".
  email_unsubscribed_list_ids?: number[] | string //	Перечисленные через запятую коды списков, в которые email входит, но от которых контакт отписался. Может показаться, что это поле избыточно, ведь можно просто в поле email_status указать unsubscribed. Но если у вас несколько списков, контакт может быть отписанным, например, только от одного, и тогда только этот список указывается в email_unsubscribed_list_ids, а остальные - в email_list_ids. Поле же email_status относится к адресу в целом и может быть при этом равно 'active'.
  email_excluded_list_ids?: number[] | string //	Перечисленные через запятую коды списков, в которые email входит, но из которых контакт будет исключен.
  // Смысл полей совпадает с аналогичными полями для email. Ещё одно отличие — по умолчанию для новых телефонов phone_status устанавливается в 'active'. Также обратите внимание, что значение поля «phone» должно передаваться в международном формате (пример: +79261232323)  
  phone_status?: 'new' | 'active' | 'inactive' | 'unsubscribed'
  phone_availability?: number
  phone_list_ids?: number[] | string
  phone_subscribe_times?: string[] | string | Date[] | Date
  phone_unsubscribed_list_ids?: number[] | string
  phone_excluded_list_ids?: number[] | string
}
export type ImportContacts = {
  data: (ImportContactsData & Record<string, any>)[] | any[][]
  field_names?: string[]
  overwrite_tags?: 0 | 1
  overwrite_lists?: 0 | 1
}

export type ImportContactsResponse = {
  total: number //	Целое десятичное неотрицательное число — общее количество контактов во входном массиве data. Сумма inserted+updated+deleted может оказаться меньше, чем total, если были ошибки или дубликаты.
  inserted: number //	Целое десятичное неотрицательное число — количество успешно добавленных контактов, ни один из контактов которых ранее не встречался.
  updated: number //	Целое десятичное неотрицательное число — количество обновлённых данных контактов (e-mail или телефон уже был в базе).
  deleted: number //	Целое десятичное неотрицательное число — количество успешно удалённых контактов как новых, так и уже существующих, а также успешно удалённых.
  new_emails: number //	Целое десятичное неотрицательное число, меньшее или равное total. Сколько среди импортированных e-mail адресов получили статус 'new'. Причём в это число входят и существовавшие ранее адреса, статус которых был 'new'.
  invalid: number //	Целое десятичное неотрицательное число, больше или равное нулю. Сколько среди e-mail адресов не было импортировано.
  log: ImportContactsResponseLog[]
}

// Массив ошибок и предупреждений импорта, каждый элемент — объект со следующими свойствами:
// Поля параметра log
export type ImportContactsResponseLog = {
  index: number	// Целое десятичное неотрицательное число — номер контакта в массиве data.
  code: string	// Код ошибки или предупреждения
  message: string //	Сообщение об ошибке/предупреждении.  
}
export type EmailStatus =
  'new' | // - новый.
  'invited' | // - отправлено приглашение со ссылкой подтверждения подписки, ждём ответа, рассылка по такому адресу пока невозможна.
  'active' | // - активный адрес, возможна рассылка.
  'inactive' | // - адрес отключён через веб-интерфейс, никакие рассылки невозможны, но можно снова включить через веб-интерфейс.
  'unsubscribed' | // - адресат отписался от всех рассылок.
  'blocked' | // - адрес заблокирован администрацией нашего сервиса (например, по жалобе адресата), рассылка по нему невозможна. Разблокировка возможна только по просьбе самого адресата.
  'activation_requested' // - запрошена активация адреса у администрации UniSender, рассылка пока невозможна.{

export type ExportContacts = {
  notify_url?: string
  list_id?: number
  field_names?: string[]
  email?: string
  phone?: string
  tag?: string
  email_status?: EmailStatus

  phone_status?:
  'new' | // - новый.
  'active' | // - активный телефон, возможна рассылка. При добавлении этот статус телефон получает по умолчанию.
  'inactive' | // - номер отключён через веб-интерфейс, никакие рассылки невозможны, но можно снова включить через веб-интерфейс.
  'unsubscribed' | // - адресат отписался от всех рассылок.
  'blocked' // - адресат заблокирован администрацией нашего сервиса (например, по жалобе адресата), рассылка по нему невозможна. Разблокировка возможна только по просьбе самого адресата.
}

export type ExportContactsResponse = {
  task_uuid: string //  "ff719cf2-4ed9-11e9-8647-d663bd873d93",
  status: string // "new"
}

export type GetTaskResult = {
  task_uuid: string
}

export type ExcludePayload = {
  contact_type: 'email' | 'phone'
  contact: string
  list_ids?: string | number[]
}
export type SubscribePayload = {
  list_ids: string | number[]
  fields: KeyValue
  tags?: string[] | string
  double_optin?: 0 | 3 | 4
  overwrite?: 0 | 1 | 2
}

export type GetContact = {
  email: string //	E-mail адрес. Возвращает данные контакта по заданному значению этого параметра.
  include_lists?: 0 | 1 //	Вывод информации о списках, в которые добавлен контакт. Параметр принимает значение 1 или 0.
  include_fields?: 0 | 1	// Вывод информации о дополнительных полях контакта. Параметр принимает значение 1 или 0.
  include_details?: 0 | 1	// Вывод дополнительной информации о контакте. Параметр принимает значение 1 или 0.
}

export type ContactEmail = {
  email: string
  added_at: string //	Время создания контакта в формате «ГГГГ-ММ-ДД чч:мм:сс» в UTC.
  status: EmailStatus
  availability:
  'available' | // — адрес доступен.
  'unreachable' | // — адрес недоступен.
  'temp_unreachable' | // — адрес временно недоступен.
  'mailbox_full' | // — почтовый ящик переполнен.
  'spam_rejected' | // — письмо сочтено спамом сервером получателя. Через несколько дней этот статус будет снят.
  'spam_folder' // — письмо помещено в спам самим получателем.

  // Значение возвращается при использовании параметра inlcude_details.
  last_send_datetime?: string //	Время последней отправки письма на данный email адрес в формате «ГГГГ-ММ-ДД чч:мм:сс» в UTC. Если данного события еще не было, значение будет - null.
  last_delivery_datetime?: string	// Время последней доставки письма на данный email адрес в формате «ГГГГ-ММ-ДД чч:мм:сс» в UTC. Если данного события еще не было, значение будет - null.
  // Если данного события еще не было, значение будет - null.
  last_read_datetime?: string | null //	Время последнего прочтения письма данным email адресом в формате «ГГГГ-ММ-ДД чч:мм:сс» в UTC.
  last_click_datetime?: string | null //	Время последнего перехода по ссылке из письма данным email адресом в формате «ГГГГ-ММ-ДД чч:мм:сс» в UTC.
  rating: number | null //	Рейтинг имейл адреса, показывающий активность контакта. Значение принимает вид от “0.0” до “5.0”. Если не было ни одной отправки, значение будет - null.
}
export type ContactList = {
  id: number //	Идентификатор списка.
  status: string //	Статус email-адреса в списке. Перечень статусов
  added_at: string //	Время добавления контакта в список в формате «ГГГГ-ММ-ДД чч:мм:сс» в UTC.  
}
export type Contact = {
  email: ContactEmail
  // Данные по спискам, вызванные параметром include_lists
  lists?: ContactList[]
  // 	Перечень дополнительных полей и их значения, вызванные параметром include_fields.
  fields?: KeyValue
}

export type GetContactCount = {
  list_id: number
  params: {
    tagId?: number
    type?: 'address' | 'phone'
    search?: string
  }
}

export type ContactCount = {
  listId: number
  searchParams: {
    tagIds: string,
    type: GetContactCount['params']['type']
  }
  count: string
}

export type GetTotalContactsCount = {
  login: string
}