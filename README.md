# Unisender SDK

> 💥 Work in progress!
## API documentation

* [Документация API на русском](https://www.unisender.com/ru/support/category/api/)

* [English API docs](https://selzy.com/en/support/category/api/)

## Usage example

### Installation

```bash
yarn add unisender-node
```

or

```bash
npm i unisender-node
```

### Basic usage

```javascript
import Unisender from 'unisender-node'


const sdk = new Unisender({ apiKey: 'my-secret-key', lang: 'en' })

// Getting lists
const lists = sdk.getLists()

```

All responses are typed and mirroring Unisender API responses

### Using environment variables

SDK will check for these ENV variables:

* `UNISENDER_API_KEY`
* `UNISENDER_LANG`

If you provide these variables, you don't need to provide in constructor.

```javascript
import Unisender from 'unisender-node'

const sdk = new Unisender()
```

## Examples

### Import contacts

```javascript

// Two ways to pass data
// 1. Unisender way - CSV-style array of arrays with field_names
const result = await sdk.importContacts({
    field_names: ['email', 'Name'],
    data: [
      ['test1@example.com', 'Test name'],
      ['test2@example.com', 'Test name2']
    ]
  })
// 2. Simple object
const result = await sdk.importContacts({
  data: [
    { email: 'test1@example.com', Name: 'Test name' },
    { email: 'test2@example.com', Name: 'Test2 name' },
  ]
})
```

## Implementation progress

## Contacts

| Method | Status |
|--------|--------|
| getLists  | ✅ |
| createList  | ✅  | 
| updateList  | ✅  |
| deleteList  | ✅  |
| subscribe | ✅ |
| unsubscribe | ✅  |
| exclude | ✅  |
| importContacts  | ✅   |
| importContactsBatch *  | ✅  |
| exportContacts  | ✅ |
| getTaskResult  | ✅  |
| getContact  | ✅  |
| getContactCount | ✅ |
| getTotalContactsCount | ✅ |
| isContactInLists  | ✅  |

* `importContactsBatch` - simple helper will divide importContacts in chunks with 500 items. Will return array of results of importContacts
## Messaging
| Method | Status |
|--------|--------|
| createEmailMessage | ✅ |
| updateEmailMessage | ✅ |
| deleteMessage | ✅ |
| getActualMessageVersion | ✅ |
| sendTestEmail | ✅ |
| sendEmail | ✅ |
| checkEmail | ✅ |
| createSmsMessage | ✅ |
| sendSms | ✅ |
| checkSms | ✅ |
| createCampaign | ✅ |
| cancelCampaign | ✅ |
| getWebVersion | ✅ |
| updateOptInEmail | ✅  |
| getSenderDomainList | ✅  |

## Statistics
| Method | Status |
|--------|--------|
| getCampaignCommonStats | ✅ |
| getCampaignDeliveryStats | ✅ |
| getCampaignStatus | ✅ |
| getMessages | ✅ |
| getVisitedLinks | ✅|
| listMessages | 🚧 |
| getCampaigns | 🚧 |
| getMessage | 🚧 |

## Templates
| Method | Status |
|--------|--------|
| createEmailTemplate | 🚧 |
| deleteTemplate | 🚧 |
| getTemplate | 🚧 |
| getTemplates | 🚧 |
| listTemplates | 🚧 |
| updateEmailTemplate | 🚧 |

## Fields
| Method | Status |
|--------|--------|
| createField | ✅ |
| deleteField | ✅ |
| deleteTag | ✅ |
| getFields | ✅ |
| getTags | ✅ |
| updateField | ✅ |
| getContactFieldValues | ✅ |