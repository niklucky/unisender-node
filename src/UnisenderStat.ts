import { request } from "./client";
import { AsyncTaskResult } from "./DTO";

export type CampaignInput = {
  campaign_id: number
}

export type GetCampaignCommonStatsResult = {
  total: number //	Общее количество контактов в рассылке, планировавшейся для отправки.
  sent: number //	Количество отправленных сообщений.
  delivered: number //	Количество доставленных сообщений.
  read_unique: number //	Количество уникальных прочтений. Уникальные прочтения - это количество уникальных контактов, которые прочитали письмо или перешли по ссылке.
  read_all: number //	Общее количество прочтений.
  clicked_unique: number //	Количество уникальных переходов по ссылке. Уникальные переходы - это количество уникальных контактов, которые перешли по ссылкам в письме.
  clicked_all: number //	Общее количество переходов.
  unsubscribed: number //	Количество отписавшихся контактов (нажавших кнопку «отписаться» из этого письма).
  spam: number //	Количество контактов, пожаловавшихся на спам (нажавших на кнопку «это спам» в своем почтовом клиенте).
}

export type GetCampaignDeliveryStats = {
  campaign_id: number // *	Идентификатор кампании, полученный при вызове метода createCampaign.
  notify_url?: string //	URL, на который будет отправлен ответ после того, как отчет будет сформирован.
  changed_since?: string //	Возвращать все статусы адресов, изменившиеся начиная с указанного времени включительно (в формате «ГГГГ-ММ-ДД чч:мм:сс», часовой пояс UTC). Если аргумент отсутствует, то возвращаются все статусы.
  field_ids?: number[] //	Массив id дополнительных полей. Способ передачи с помощью HTTP: field_ids[]=1&field_ids[]=2. Значения id можно получить используя метод getFields. Если указан, в результат добавляются значения дополнительных полей, связанных с контактом.
}

export type GetCampaignStatusResult = {
  status: //	Статус рассылки. Возможные варианты:
  'waits_censor' | // — рассылка ожидает проверки.
  'censor_hold' | // — фактически эквивалентна waits_censor: рассмотрена администратором, но отложена для дальнейшей проверки.
  'declined' | // — рассылка отклонена администратором.
  'waits_schedule' | // — задание на постановку рассылки в очередь получено и рассылка ждёт постановки в очередь. Обычно рассылка в этом состоянии находится одну-две минуты перед тем, как перейти в состояние scheduled.
  'scheduled' | // — рассылка запланирована к запуску. Как только настанет время отправки, она будет запущена.
  'in_progress' | // — рассылка выполняется.
  'analysed' | // — все сообщения отправлены, идёт анализ результатов.
  'completed' | // — все сообщения отправлены и анализ результатов закончен.
  'stopped' | // — рассылка поставлена «на паузу».
  'canceled' // — рассылка отменена (обычно из-за нехватки денег или по желанию пользователя).
  creation_time: string //	Дата и время создания рассылки в формате «ГГГГ-ММ-ДД чч:мм:сс», в часовом поясе UTC.
  start_time: string //	Дата и время запуска рассылки в формате «ГГГГ-ММ-ДД чч:мм:сс», в часовом поясе UTC.  
}

export type GetMessages = {
  date_from: string // * - дата создания больше чем, формат yyyy-mm-dd hh:mm UTC.
  date_to: string // * - дата создания меньше чем, формат yyyy-mm-dd hh:mm UTC.
  format?: 'html' | 'json' //  - формат вывода принимает значения html | json, по умолчанию json.
  limit?: number //  - количество  записей в ответе на один запрос, должен быть целое число в диапазоне 1 - 100 , по умолчанию 50.
  offset?: number //  - с какой позиции начинать выборку, должен быть 0 или больше (позиция первой записи начинается с 0), по умолчанию 0.  
}
export type GetMessagesResult = {
  id: number // - идентификатор письма в системе.
  sub_user_login: string // - либо логин субпользователя, который создал письмо, либо NULL, если письмо создал мастер-пользователь.
  list_id: number // - идентификатор списка рассылки.
  segment_id: string // - идентификатор фильтра ели письмо создано по сегменту.
  created: string // - дата и время создания сообщения UTC.
  updated: string // - дата и время обновления сообщения UTC.
  service_type: string // - тип письма (email или sms).
  active_version_id: string | number | null // - если активное то здесь будет null, ели есть версии и письмо не последняя ревизия то здесь будет идентификатор активного письма.
  lang_code: string // - двухбуквенный код языка для автоматического добавления к письму формы отписки (например, 'ru', 'en').
  body: string // - тело письма.
  message_format: 'block' | 'raw_html' | 'text' // - возвращает способ создания сообщения: block - блочный редактор, raw_html - html редактор, text - текстовая версия письма.
  // - возвращает приложенные к письму файлы массивом, где:
  // Если вложений в письмо нет, возвращается пустой массив «attachments»:
  attachments: {
    isInline: boolean // - является ли вложение встроенным (может принимать значение true и false).
    name: string // - название вложения.
    size: string // - размер вложения.
    url: string // - путь к вложению.
  }[]
  sender_email: string // (только если сообщение - email) - email отправителя.
  sender_name: string // (только если сообщение - email) - имя отправителя.
  subject: string // (только если сообщение - email) - тема письма.
  sender: string // (только если сообщение - sms) - имя отправителя.
}

export type GetVisitedLinks = {
  campaign_id: number // *	Идентификатор кампании, полученный при вызове метода createCampaign.
  group: number //	Группировать результаты по посещенным ссылкам. Если пользователь посетил ссылку несколько раз, в результатах это будет представлено одной записью, с указанием количества посещений в поле count.
}

export type GetVisitedLinksResult = {
  fields: string[] //	Массив имен полей. Включает поля email (адрес пользователя), url (посещённая ссылка), request_time (время посещения), ip (ip адрес пользователя) и count (количество посещений ссылки, если указан параметр group).
  data: any[][] //	Массив результатов посещенных ссылок. Каждый результат представляет собой массив полей, описанный в fields.  
}

export default class UnisenderStat {
  constructor() {
  }
  public async getCampaignCommonStats(payload: CampaignInput) {
    return await request<GetCampaignCommonStatsResult>('getCampaignCommonStats', payload)
  }
  public async getCampaignDeliveryStats(payload: GetCampaignDeliveryStats) {
    return await request<AsyncTaskResult>('getCampaignDeliveryStats', payload)
  }
  public async getCampaignStatus(payload: CampaignInput) {
    return await request<GetCampaignStatusResult>('getCampaignStatus', payload)
  }
  public async getMessages(payload: GetMessages) {
    return await request<GetCampaignStatusResult>('getMessages', payload)
  }
  public async getVisitedLinks(payload: GetVisitedLinks) {
    return await request<GetVisitedLinksResult>('getVisitedLinks', payload)
  }

}