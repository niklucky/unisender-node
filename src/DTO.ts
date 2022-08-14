
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
  data: ImportContactsData[]
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
export type ImportContactsResponseLog	 = {
  index: number	// Целое десятичное неотрицательное число — номер контакта в массиве data.
  code: string	// Код ошибки или предупреждения
  message: string //	Сообщение об ошибке/предупреждении.  
}