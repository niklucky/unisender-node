# Unisender SDK

> 💥 Work in progress!
## API documentation

* [Документация API на русском](https://www.unisender.com/ru/support/category/api/)

* [English API docs](https://selzy.com/en/support/category/api/)

## Usage example

### Installation

```bash
yarn add unisender-node-sdk
```

or

```bash
node i unisender-node-sdk
```

### Basic usage

```javascript
import Unisender from 'unisender-node-sdk'


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
import Unisender from 'unisender-node-sdk'

const sdk = new Unisender()
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
| importContacts  | 🚧  |
| exportContacts  | 🚧  |
| getContact  | 🚧  |
| getContactCount | 🚧  |
| getTotalContactsCount | 🚧  |
| isContactInLists  | 🚧  |

## Messaging
| Method | Status |
|--------|--------|
| cancelCampaign | 🚧 |
| checkEmail | 🚧 |
| checkSms | 🚧 |
| createCampaign | 🚧 |
| createEmailMessage | 🚧 |
| createSmsMessage | 🚧 |
| deleteMessage | 🚧 |
| getActualMessageVersion | 🚧 |
| getWebVersion | 🚧 |
| sendEmail | 🚧 |
| sendSms | 🚧 |
| sendTestEmail | 🚧 |
| updateEmailMessage | 🚧 |
| updateOptInEmail | 🚧 |
| getSenderDomainList | 🚧 |

## Statistics
| Method | Status |
|--------|--------|
| getCampaignCommonStats | 🚧 |
| getCampaignDeliveryStats | 🚧 |
| getCampaignStatus | 🚧 |
| getMessages | 🚧 |
| getVisitedLinks | 🚧 |
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
| createField | 🚧 |
| deleteField | 🚧 |
| deleteTag | 🚧 |
| getFields | 🚧 |
| getTags | 🚧 |
| updateField | 🚧 |
| getContactFieldValues | 🚧 |