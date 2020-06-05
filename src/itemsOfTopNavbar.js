import dashboard from "./icons/dashboard.png";
import catalog from "./icons/catalog.png";
import purchase from "./icons/purchase.png";
import stock from "./icons/stock.png";
import sale from "./icons/sale.png";
import retail from "./icons/retail.png";
import finance from "./icons/finance.png";
import priceList from "./icons/priceList.png";
import machinery from "./icons/machinery.png";
import transport from "./icons/transport.png";
import customs from "./icons/customs.png";
import manufacturing from "./icons/manufacturing.png";
import wms from "./icons/wms.png";
import chat from "./icons/chat.png";
import lock from "./icons/lock.png";
import search from "./icons/search.png";
import bi from "./icons/bi.png";

export default [
  {
    id: 0,
    pic: dashboard,
    note: "Рабочий стол",
    mainList: [
      {
        id: 0,
        label: "Продажа",
        childrenList: [
          {
            id: 0,
            label: "Выписка накладных",
            table: {
              columns: [
                { title: "Водитель", field: "driver" },
                { title: "Дата вызова", field: "dateOfCall" },
                { title: "Номер рейса", field: "numberOfReis" },
                { title: "Номер заказа", field: "numberOfOrder" },
                { title: "Дата заказа", field: "dateOfOrder" },
                { title: "Дата поставки", field: "dateOfShipment" },
                { title: "Склад отправителя", field: "warehouseOfSender" },
                { title: "Получатель", field: "recipient" },
                { title: "Склад получателя", field: "warehouseOfRecipient" },
                { title: "Адрес получателя", field: "adressOfRecipient" },
                { title: "Кол-во (всего)", field: "count" },
                { title: "Примечание", field: "note" },
              ],
              data: [
                {
                  driver: "Попов",
                  dateOfCall: "23.02.2020",
                  numberOfReis: "545665",
                  numberOfOrder: "00007",
                  dateOfOrder: "18.03.20",
                  dateOfShipment: "19.03.20",
                  warehouseOfSender: "Магазин 2",
                  recipient: "БАБУШКИНА КРЫНКА ОАО",
                  warehouseOfRecipient: "Склад БАБУШКИНА КРЫНКА ОАО",
                  adressOfRecipient: "Адмиралтийская 23",
                  count: 4,
                  note: "-",
                },
                {
                  driver: "Лисицин",
                  dateOfCall: "20.02.2020",
                  numberOfReis: "245225",
                  numberOfOrder: "00009",
                  dateOfOrder: "18.03.20",
                  dateOfShipment: "19.03.20",
                  warehouseOfSender: "Магазин 1",
                  recipient: "ДАНОН БЕЛ ИООО",
                  warehouseOfRecipient: "Склад ДАНОН БЕЛ ИООО",
                  adressOfRecipient: "Романовская 67",
                  count: 3,
                  note: "-",
                },
              ],
            },
          },
          {
            id: 1,
            label: "Обработка внутренних заказов",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 1,
        label: "Розничная торговля",
        childrenList: [
          {
            id: 0,
            label: "Кассовые операции",
            table: {
              columns: [
                { title: "Класс объекта", field: "classOfObject" },
                { title: "Номер", field: "number" },
                { title: "Дата документации", field: "dateOfDocumentation" },
                { title: "Время", field: "time" },
                { title: "Касса", field: "till" },
                { title: "Z-отчет", field: "zReport" },
                { title: "Сумма", field: "amount" },
                { title: "Основание", field: "footing" },
                { title: "фискализировано", field: "fiscalized" },
                { title: "Адрес получателя", field: "adressOfRecipient" },
                { title: "Кол-во (всего)", field: "count" },
                { title: "Примечание", field: "note" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "POS",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Печать ценников ТСД",
            table: {
              columns: [
                { title: "Код", field: "code" },
                { title: "Номер", field: "number" },
                { title: "Дата документа", field: "dateOfDocument" },
                { title: "Время документа", field: "timeOfDocument" },
                { title: "Склад", field: "warehouse" },
                { title: "Группа ТСД", field: "groupTSD" },
                { title: "Тип документа", field: "typeOfDocument" },
                {
                  title: "Код в справочнике 1",
                  field: "CodeInTheReferenceList1",
                },
                {
                  title: "Код в справочнике 2",
                  field: "CodeInTheReferenceList2",
                },
                { title: "Имя", field: "name" },
                { title: "Количество", field: "count" },
                { title: "Кол-во строк", field: "countOfStrings" },
                { title: "Примечание", field: "note" },
                { title: "Кол-во (всего)", field: "countAll" },
                {
                  title: "Статус печати ценника",
                  field: "statusOfPriceTagPrint",
                },
              ],
              data: [],
            },
          },
          {
            id: 3,
            label: "Обработка Z-отчетов",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 4,
            label: "Переоценка",
            table: {
              columns: [
                { title: "Штрихкод", field: "barcode" },
                { title: "Код", field: "code" },
                { title: "Наименование", field: "label" },
                { title: "Единица измерения", field: "unit" },
                { title: "Время последнего", field: "timeOfLast" },
                { title: "Время последней партии", field: "timeOfLastBatch" },
                {
                  title: "Поставщик последней партии",
                  field: "senderOfLastBatch",
                },
                { title: "Страна", field: "country" },
                { title: "Текущий остаток", field: "currentRemains" },
                { title: "Цена (управленческая)", field: "controlPrice" },
                { title: "Цена (текущая)", field: "currentPrice" },
              ],
              data: [],
            },
          },
          {
            id: 5,
            label: "Подарочные сертификаты",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 6,
            label: "Выписка подарочных сертификатов",
            table: {
              columns: [
                { title: "Закрыто", field: "close" },
                { title: "Переведено", field: "given" },
                { title: "Номер", field: "number" },
                { title: "Серия", field: "seria" },
                { title: "Дата документа", field: "dateOfDocument" },
                { title: "Время документа", field: "timeOfDocument" },
                { title: "Статус выписки", field: "statusOfNote" },
                { title: "Поставщик", field: "sender" },
                { title: "Склад поставщика", field: "warehouseOfSender" },
                { title: "Покупатель", field: "buyer" },
                { title: "Склад покупателя", field: "warehouseOfBuyer" },
                { title: "Валюта", field: "currency" },
                { title: "Кол-во строк", field: "countOfString" },
                { title: "Кол-во (всего)", field: "countAll" },
                { title: "Сумма", field: "summary" },
                { title: "Сумма НДС", field: "summaryNDS" },
                { title: "Сумма с НДС", field: "summaryWithNDS" },
                { title: "Примечание", field: "note" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 2,
        label: "Закупка",
        childrenList: [
          {
            id: 0,
            label: "Заказы по потребностям",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Графики заказов",
            table: {
              columns: [
                { title: "Дата начала", field: "dateOfStart" },
                { title: "Время окончания", field: "timeOfFinish" },
                { title: "Поставщик", field: "sender" },
                { title: "Склад поставщика", field: "warehouseOfSender" },
                { title: "Покупатель", field: "buyer" },
                { title: "Склады", field: "warehouses" },
                { title: "Номер договора", field: "numberOfContract" },
                {
                  title: "Тип генерации графика",
                  field: "typeOfGraphicsGenerate",
                },
                { title: "Примечание", field: "note" },
                { title: "Кол-во оставшихся", field: "countOfLost" },
                { title: "Признак разделения", field: "countOfDepart" },
              ],
              data: [],
            },
          },
          {
            id: 2,
            label: "Заказы по графику",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 3,
            label: "Приемка по заказам",
            table: {
              columns: [
                { title: "Закрыто", field: "close" },
                { title: "Переведено", field: "given" },
                { title: "Номер", field: "number" },
                { title: "Серия", field: "seria" },
                { title: "Дата документа", field: "dateOfDocument" },
                { title: "Отправитель", field: "Sender" },
                { title: "Склад отправителя", field: "warehouseOfSender" },
                { title: "Получатель", field: "getter" },
                { title: "Склад получателя", field: "warehouseOfGetter" },
                { title: "Операция", field: "operation" },
                { title: "Кол-во (всего)", field: "countAll" },
                { title: "Сумма", field: "summary" },
                { title: "Сумма НДС", field: "summaryNDS" },
                { title: "Сумма с НДС", field: "summaryWithNDS" },
                { title: "Примечание", field: "note" },
              ],
              data: [],
            },
          },
          {
            id: 4,
            label: "Обновление розничных цен",
            table: {
              columns: [
                { title: "Штрихкод", field: "barcode" },
                { title: "Код", field: "code" },
                { title: "Наименование", field: "label" },
                { title: "Единица измерения", field: "unit" },
                { title: "Текущий остаток", field: "currentRemains" },
                { title: "Остаток до", field: "remainsFor" },
                { title: "Описание", field: "description" },
                { title: "Дата/Время с", field: "datetimeFrom" },
                { title: "Розничная цена", field: "retailPrice" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 3,
        label: "Цены",
        childrenList: [
          {
            id: 0,
            label: "Управление ценами",
            table: {
              columns: [
                { title: "Наименование", field: "label" },
                { title: "Код", field: "code" },
                { title: "Штрихкод", field: "barcode" },
                { title: "Ассортименты матрицы", field: "matrixAssortiments" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Текущие цены",
            table: {
              columns: [
                { title: "Наименование", field: "label" },
                { title: "Код", field: "code" },
                { title: "Штрихкод", field: "barcode" },
                { title: "Остаток(после)", field: "balanceAfter" },
                { title: "Цена", field: "price" },
                { title: "Организация", field: "organisation" },
                { title: "Описание", field: "description" },
              ],
              data: [],
            },
          },
          {
            id: 2,
            label: "Розничные цены",
            table: {
              columns: [
                { title: "Наименование", field: "label" },
                { title: "Код", field: "code" },
                { title: "Штрихкод", field: "barcode" },
                { title: "Страна", field: "country" },
                { title: "Текущий остаток", field: "currentRemains" },
                { title: "НДС %", field: "VAT" },
                { title: "Поставщик", field: "sender" },
                { title: "Вход. цена", field: "enterPrice" },
                { title: "% ТН товар (основная)", field: "commodityAllowance" },
                { title: "% ТН группа (основная)", field: "griupAllowance" },
                { title: "РЦ, над надбавка", field: "retailPriceAllowance" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 4,
        label: "Задолжности",
        childrenList: [
          {
            id: 0,
            label: "Управление задолжностями",
            table: {
              columns: [
                { title: "Тип договора", field: "contractType" },
                { title: "Серия/номер", field: "serialNumber" },
                {
                  title: "Организация(поставщик)",
                  field: "organizationSender",
                },
                {
                  title: "Организация(покупатель)",
                  field: "organizationCustomer",
                },
                { title: "Валюта взаиморасчетов", field: "settlementCurrency" },
                {
                  title: "Задолженость на конец дня (упр.)",
                  field: "debtEndDayManag",
                },
                {
                  title: "Задолженость на конец дня (бух.)",
                  field: "debtEndDayAccounting",
                },
                { title: "Долг по документам", field: "debtByContracts" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Разнесение документов",
            table: {
              columns: [
                { title: "Дата", field: "Date" },
                { title: "Название документа", field: "documentName" },
                { title: "Сумма", field: "sum" },
                { title: "Расписано из документа", field: "wroteFromDoc" },
              ],
              data: [],
            },
          },
          {
            id: 2,
            label: "Неоплаченные документы",
            table: {
              columns: [
                { title: "Номер", field: "number" },
                { title: "Серия", field: "seria" },
                { title: "Дата", field: "date" },
                {
                  title: "Организация(поставщик)",
                  field: "organizationSender",
                },
                { title: "Склад покупателя", field: "customerStorage" },
                { title: "Валюта договора", field: "contractCurrency" },
                { title: "Серия/Номер", field: "number" },
                { title: "Сумма документа", field: "contractSum" },
                { title: "Оплачено по", field: "paidBy" },
                { title: "Долг по документу", field: "debtByDocument" },
                { title: "Название документа", field: "docName" },
                { title: "Расписано из документа", field: "wroteFromDoc" },
              ],
              data: [],
            },
          },
        ],
      },
    ],
  },
  {
    id: 1,
    pic: catalog,
    note: "Справочники",
    mainList: [
      {
        id: 0,
        label: "Основные сущности",
        childrenList: [
          {
            id: 0,
            label: "Сотрудники",
            path: "employers",
            table: {
              columns: [
                { title: "Фамилия", field: "surname" },
                { title: "Имя", field: "name" },
                { title: "Инициалы (И.О.)", field: "initials" },
                { title: "Код", field: "code" },
                { title: "Должность сотрудника", field: "workposition" },
                { title: "Логин", field: "login" },
                { title: "Главная роль", field: "mainRole" },
                { title: "Доп. роли", field: "secondRoles" },
                { title: "Заблокировано", field: "blocked" },
                { title: "Последняя активность", field: "lastActivity" },
                { title: "Организация", field: "organisation" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Организации",
            path: "companies",
            table: {
              columns: [
                { title: "Наименование", field: "name" },
                { title: "УНП", field: "PAN" },
                { title: "Форма собственности", field: "ownerType" },
                { title: "Группа организаций", field: "organizationGroup" },
                { title: "Юридический адрес", field: "address" },
                { title: "Телефон/факс", field: "telephone" },
                { title: "E-mail", field: "email" },
                {
                  title: "Явл. поставшиком",
                  field: "isProvider",
                  type: "boolean",
                },
                {
                  title: "Явл. компанией",
                  field: "isOrganization",
                  type: "boolean",
                },
                {
                  title: "Явл. покупателем",
                  field: "isCustomer",
                  type: "boolean",
                },
              ],
              data: [],
            },
          },
          {
            id: 2,
            label: "Нумераторы",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Серия", field: "given" },
                { title: "Мин. значение", field: "number" },
                { title: "Макс. значение", field: "seria" },
                { title: "Длина", field: "dateOfDocument" },
                { title: "Тек. значение", field: "Sender" },
                { title: "Тек. значение (строка)", field: "warehouseOfSender" },
              ],
              data: [],
            },
          },
          {
            id: 3,
            label: "Тип подакции",
            table: {
              columns: [
                { title: "Код", field: "close" },
                { title: "Наименование", field: "given" },
              ],
              data: [],
            },
          },
          {
            id: 4,
            label: "Тип промо",
            table: {
              columns: [
                { title: "Код", field: "close" },
                { title: "Наименование", field: "given" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 1,
        label: "Товар",
        childrenList: [
          {
            id: 0,
            label: "Товары",
            path: "products",
            table: {
              columns: [
                { title: "Штрихкод", field: "barcode" },
                { title: "Наименование", field: "name" },
                { title: "Код группы товаров", field: "productGroupId" },
                { title: "Единица измерения", field: "unitId" },
                { title: "Бренд", field: "manufactorName" },
                { title: "Страна", field: "country" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Товарные группы",
            path: "productGroups",
            table: {
              columns: [
                { title: "Дерево", field: "close" },
                { title: "Отменено", field: "given" },
                { title: "Код", field: "number" },
                { title: "Наименование", field: "name" },
                { title: "Категорийный менеджер", field: "dateOfDocument" },
                { title: "Неактивная", field: "Sender" },
                { title: "Полное имя", field: "warehouseOfSender" },
                {
                  title: "Нумератор штрихкода для штучного товара",
                  field: "getter",
                },
                {
                  title: "Нумератор штрихкода для весового товара",
                  field: "warehouseOfGetter",
                },
                {
                  title: "Учитывать продажи в наличие товара",
                  field: "operation",
                },
              ],
              data: [],
            },
          },
          {
            id: 2,
            label: "Единицы измерений",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Код", field: "given" },
                { title: "Краткое наименование", field: "number" },
                { title: "Базовая ед. изм.", field: "seria" },
                { title: "Родительная ед. изм.", field: "dateOfDocument" },
                { title: "Коэффицент пересчета в баз. ед.", field: "Sender" },
                { title: "Дробный", field: "warehouseOfSender" },
                { title: "Вес нетто, кг", field: "getter" },
                { title: "Вес брутто, кг", field: "warehouseOfGetter" },
                {
                  title: "Учитывать продажи в наличие товара",
                  field: "operation",
                },
                { title: "Передавать на весы", field: "countAll" },
              ],
              data: [],
            },
          },
          {
            id: 3,
            label: "Типы дополнительных групп",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Код", field: "given" },
              ],
              data: [],
            },
          },
          {
            id: 4,
            label: "Дополнительные группы",
            table: {
              columns: [
                { title: "Дерево", field: "close" },
                { title: "Отм.", field: "given" },
                { title: "Код", field: "number" },
                { title: "Наименование", field: "seria" },
                { title: "Полное имя", field: "dateOfDocument" },
              ],
              data: [],
            },
          },
          {
            id: 5,
            label: "Настройка атрибутов",
            table: {
              columns: [
                { title: "Статический заголовок", field: "close" },
                { title: "Префикс", field: "given" },
                { title: "Постфикс", field: "number" },
                { title: "Порядковый номер в наименовании", field: "seria" },
                {
                  title: "Порядковый номер в наименовании (кассы)",
                  field: "dateOfDocument",
                },
                {
                  title: "Порядковый номер в наименовании (весы)",
                  field: "Sender",
                },
              ],
              data: [],
            },
          },
          {
            id: 6,
            label: "Атрибуты товаров",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Код", field: "given" },
                { title: "Краткое наименование", field: "number" },
                { title: "Базовая ед. изм.", field: "seria" },
                { title: "Родительная ед. изм.", field: "dateOfDocument" },
                { title: "Коэффицент пересчета в баз. ед.", field: "Sender" },
                { title: "Дробный", field: "warehouseOfSender" },
                { title: "Вес нетто, кг", field: "getter" },
                { title: "Вес брутто, кг", field: "warehouseOfGetter" },
              ],
              data: [],
            },
          },
          {
            id: 7,
            label: "Списки SKU",
            table: {
              columns: [{ title: "Полное имя", field: "close" }],
              data: [],
            },
          },
          {
            id: 8,
            label: "Бренды",
            path: "manufactors",
            table: {
              columns: [
                { title: "Наименование", field: "name" },
                { title: "Код", field: "given" },
                { title: "Группа бренда", field: "number" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 2,
        label: "Региональные параметры",
        childrenList: [
          {
            id: 0,
            label: "Языки",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Locale", field: "given" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Перевод",
            table: {
              columns: [
                { title: "Текст для перевода", field: "close" },
                { title: "Переведенный текст", field: "given" },
              ],
              data: [],
            },
          },
          {
            id: 2,
            label: "Словари",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Нечувствительный к регистру", field: "given" },
                { title: "С языка", field: "number" },
                { title: "На язык", field: "seria" },
              ],
              data: [],
            },
          },
          {
            id: 3,
            label: "Страны",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Код", field: "given" },
                { title: "Отечественный производитель", field: "number" },
                { title: "Входит в ЕАЭС", field: "seria" },
                { title: "Валюта", field: "dateOfDocument" },
                { title: "Язык", field: "Sender" },
                { title: "Таможенная зона", field: "warehouseOfSender" },
              ],
              data: [],
            },
          },
          {
            id: 4,
            label: "Выходные дни",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Код страны", field: "given" },
                { title: "Отечественный производитель", field: "number" },
                { title: "Валюта", field: "seria" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 3,
        label: "Шаблоны",
        childrenList: [
          {
            id: 0,
            label: "Шаблоны Excel",
            table: {
              columns: [
                { title: "Имя", field: "close" },
                { title: "Идентификатор", field: "given" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Шаблоны Word",
            table: {
              columns: [
                { title: "Имя", field: "close" },
                { title: "Идентификатор", field: "given" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 4,
        label: "Валюты и курсы",
        childrenList: [
          {
            id: 0,
            label: "Валюты",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Код валюты", field: "given" },
                { title: "Краткое наименование", field: "number" },
                { title: "Символ", field: "seria" },
                { title: "Наименование в документах", field: "dateOfDocument" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Курсы валют",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Валюта типа обмена", field: "given" },
                { title: "Родительский", field: "number" },
                { title: "Обратный", field: "seria" },
              ],
              data: [],
            },
          },
        ],
      },
    ],
  },
  {
    id: 2,
    pic: purchase,
    note: "Закупки",
    mainList: [
      {
        id: 0,
        label: "Закупки",
        childrenList: [
          {
            id: 0,
            label: "Заказы",
            table: {
              columns: [
                { title: "Номер строки", field: "close" },
                { title: "Штрихкод", field: "given" },
                { title: "Код", field: "number" },
                { title: "Наименование", field: "seria" },
                { title: "ед. изм.", field: "dateOfDocument" },
                { title: "Партия", field: "Sender" },
                { title: "Штриихкод упаковки", field: "warehouseOfSender" },
                { title: "Кол-во упаковок", field: "getter" },
                { title: "Вид цен", field: "warehouseOfGetter" },
                { title: "Цена", field: "operation" },
                { title: "Сумма", field: "countAll" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Параметры автозаказа",
            table: {
              columns: [
                { title: "Дерево", field: "close" },
                { title: "Наименование", field: "given" },
                { title: "Порядок", field: "number" },
                {
                  title: "Кол-во дней для расчета однодневных",
                  field: "seria",
                },
                {
                  title: "Кол-во дней для расчета сезонного",
                  field: "dateOfDocument",
                },
                { title: "Коэффицент сезонности", field: "Sender" },
                { title: "Z-оценка", field: "warehouseOfSender" },
                { title: "Акц. оценка", field: "getter" },
              ],
              data: [],
            },
          },
          {
            id: 2,
            label: "Накладные",
            table: {
              columns: [
                { title: "Номер строки", field: "close" },
                { title: "Штрихкод", field: "given" },
                { title: "Код", field: "number" },
                { title: "Наименование", field: "seria" },
                { title: "ед. изм.", field: "dateOfDocument" },
                { title: "Партия", field: "Sender" },
                { title: "Штриихкод упаковки", field: "warehouseOfSender" },
                { title: "Кол-во упаковок", field: "getter" },
                { title: "Вид цен", field: "warehouseOfGetter" },
                { title: "Цена", field: "operation" },
                { title: "Сумма", field: "countAll" },
              ],
              data: [],
            },
          },
          {
            id: 3,
            label: "Акты расхождений",
            table: {
              columns: [
                { title: "Номер строки", field: "close" },
                { title: "Штрихкод", field: "given" },
                { title: "Код", field: "number" },
                { title: "Наименование", field: "seria" },
                { title: "ед. изм.", field: "dateOfDocument" },
                { title: "Партия", field: "Sender" },
                { title: "Штриихкод упаковки", field: "warehouseOfSender" },
                { title: "Кол-во упаковок", field: "getter" },
                { title: "Вид цен", field: "warehouseOfGetter" },
                { title: "Цена", field: "operation" },
                { title: "Сумма", field: "countAll" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 1,
        label: "Возвраты",
        childrenList: [
          {
            id: 0,
            label: "Заказы",
            table: {
              columns: [
                { title: "Закрыто", field: "close" },
                { title: "Переведено", field: "given" },
                { title: "Номер", field: "number" },
                { title: "Серия", field: "seria" },
                { title: "Дата документа", field: "dateOfDocument" },
                { title: "Время документа", field: "timeOfDocument" },
                { title: "Статус выписки", field: "statusOfNote" },
                { title: "Поставщик", field: "sender" },
                { title: "Склад поставщика", field: "warehouseOfSender" },
                { title: "Покупатель", field: "buyer" },
                { title: "Склад покупателя", field: "warehouseOfBuyer" },
                { title: "Валюта", field: "currency" },
                { title: "Кол-во строк", field: "countOfString" },
                { title: "Кол-во (всего)", field: "countAll" },
                { title: "Сумма", field: "summary" },
                { title: "Сумма НДС", field: "summaryNDS" },
                { title: "Сумма с НДС", field: "summaryWithNDS" },
                { title: "Примечание", field: "note" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Накладные",
            table: {
              columns: [
                { title: "Закрыто", field: "close" },
                { title: "Переведено", field: "given" },
                { title: "Номер", field: "number" },
                { title: "Серия", field: "seria" },
                { title: "Дата документа", field: "dateOfDocument" },
                { title: "Время документа", field: "timeOfDocument" },
                { title: "Статус выписки", field: "statusOfNote" },
                { title: "Поставщик", field: "sender" },
                { title: "Склад поставщика", field: "warehouseOfSender" },
                { title: "Покупатель", field: "buyer" },
                { title: "Склад покупателя", field: "warehouseOfBuyer" },
                { title: "Валюта", field: "currency" },
                { title: "Кол-во строк", field: "countOfString" },
                { title: "Кол-во (всего)", field: "countAll" },
                { title: "Сумма", field: "summary" },
                { title: "Сумма НДС", field: "summaryNDS" },
                { title: "Сумма с НДС", field: "summaryWithNDS" },
                { title: "Примечание", field: "note" },
              ],
              data: [],
            },
          },
          {
            id: 2,
            label: "Акты расхождений",
            table: {
              columns: [
                { title: "Закрыто", field: "close" },
                { title: "Переведено", field: "given" },
                { title: "Номер", field: "number" },
                { title: "Серия", field: "seria" },
                { title: "Дата документа", field: "dateOfDocument" },
                { title: "Время документа", field: "timeOfDocument" },
                { title: "Статус выписки", field: "statusOfNote" },
                { title: "Поставщик", field: "sender" },
                { title: "Склад поставщика", field: "warehouseOfSender" },
                { title: "Покупатель", field: "buyer" },
                { title: "Склад покупателя", field: "warehouseOfBuyer" },
                { title: "Валюта", field: "currency" },
                { title: "Кол-во строк", field: "countOfString" },
                { title: "Кол-во (всего)", field: "countAll" },
                { title: "Сумма", field: "summary" },
                { title: "Сумма НДС", field: "summaryNDS" },
                { title: "Сумма с НДС", field: "summaryWithNDS" },
                { title: "Примечание", field: "note" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 2,
        label: "Справочники",
        childrenList: [
          {
            id: 0,
            label: "Операции",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "ID", field: "given" },
                { title: "Время создания", field: "number" },
                { title: "Создан на компьютере", field: "seria" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 3,
        label: "Отчеты",
        childrenList: [
          {
            id: 0,
            label: "Регистр поступлений",
            table: {
              columns: [
                { title: "Дата", field: "close" },
                { title: "Дата/Время", field: "given" },
                { title: "Номер документа", field: "number" },
                { title: "Дата поставки", field: "seria" },
                { title: "Дата/Время поставки", field: "dateOfDocument" },
                { title: "Склад", field: "timeOfDocument" },
                { title: "Поставщик", field: "sender" },
                { title: "Склад поставщика", field: "warehouseOfSender" },
                { title: "Операция", field: "buyer" },
                { title: "Каноничное имя", field: "warehouseOfBuyer" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Исполнение заявок",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "% исп. заявки (кол-во)", field: "given" },
                { title: "% исп. заявки (позиции)", field: "number" },
                { title: "% исп. заявки (сумма)", field: "seria" },
              ],
              data: [],
            },
          },
          {
            id: 2,
            label: "Отчет по поступлениям",
            table: {
              columns: [
                { title: "Отм.", field: "close" },
                { title: "Наименование", field: "given" },
                { title: "Код", field: "number" },
                { title: "Производитель", field: "seria" },
                { title: "Количество", field: "dateOfDocument" },
                { title: "Сумма НДС", field: "timeOfDocument" },
                { title: "Сумма", field: "statusOfNote" },
              ],
              data: [],
            },
          },
          {
            id: 3,
            label: "Поступления по неделям",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Наименование", field: "given" },
                { title: "Остаток на начало дня", field: "number" },
                { title: "12", field: "seria" },
                {
                  title: "Закуплено за интервал (кол-во)",
                  field: "dateOfDocument",
                },
                { title: "Остаток на конец дня", field: "timeOfDocument" },
                {
                  title: "Закуплено за интервал (сумма)",
                  field: "statusOfNote",
                },
                {
                  title: "Закуплено за интервал (сумма-валюта)",
                  field: "sender",
                },
              ],
              data: [],
            },
          },
        ],
      },
    ],
  },
  {
    id: 3,
    pic: stock,
    note: "Склад",
    mainList: [
      {
        id: 0,
        label: "Поступления",
        childrenList: [
          {
            id: 0,
            label: "Поставки",
            table: {
              columns: [
                { title: "Номер", field: "close" },
                { title: "Серия", field: "given" },
                { title: "Дата документа", field: "number" },
                { title: "Время документа", field: "seria" },
                { title: "Поставщик", field: "dateOfDocument" },
                { title: "Склад поставщика", field: "timeOfDocument" },
                { title: "Покупатель", field: "statusOfNote" },
                { title: "Склад покупателя", field: "sender" },
                { title: "Операция", field: "close" },
                { title: "Валюта", field: "given" },
                { title: "Кол-во строк", field: "number" },
                { title: "Кол-во (всего)", field: "seria" },
                { title: "Сумма", field: "dateOfDocument" },
                { title: "Сумма (Списания)", field: "timeOfDocument" },
                { title: "Примечание", field: "statusOfNote" },
                { title: "Заказы", field: "sender" },
                { title: "Накладные", field: "statusOfNote" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Возвраты",
            table: {
              columns: [
                { title: "Номер", field: "close" },
                { title: "Серия", field: "given" },
                { title: "Дата документа", field: "number" },
                { title: "Время документа", field: "seria" },
                { title: "Поставщик", field: "dateOfDocument" },
                { title: "Склад поставщика", field: "timeOfDocument" },
                { title: "Покупатель", field: "statusOfNote" },
                { title: "Склад покупателя", field: "sender" },
                { title: "Операция", field: "close" },
                { title: "Валюта", field: "given" },
                { title: "Кол-во строк", field: "number" },
                { title: "Кол-во (всего)", field: "seria" },
                { title: "Сумма", field: "dateOfDocument" },
                { title: "Сумма (Списания)", field: "timeOfDocument" },
                { title: "Примечание", field: "statusOfNote" },
                { title: "Заказы", field: "sender" },
                { title: "Накладные", field: "statusOfNote" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 1,
        label: "Отгрузки",
        childrenList: [
          {
            id: 0,
            label: "Поставки",
            table: {
              columns: [
                { title: "Номер", field: "close" },
                { title: "Серия", field: "given" },
                { title: "Дата документа", field: "number" },
                { title: "Время документа", field: "seria" },
                { title: "Поставщик", field: "dateOfDocument" },
                { title: "Склад поставщика", field: "timeOfDocument" },
                { title: "Покупатель", field: "statusOfNote" },
                { title: "Склад покупателя", field: "sender" },
                { title: "Операция", field: "close" },
                { title: "Валюта", field: "given" },
                { title: "Кол-во строк", field: "number" },
                { title: "Кол-во (всего)", field: "seria" },
                { title: "Сумма", field: "dateOfDocument" },
                { title: "Сумма (Списания)", field: "timeOfDocument" },
                { title: "Примечание", field: "statusOfNote" },
                { title: "Заказы", field: "sender" },
                { title: "Накладные", field: "statusOfNote" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Возвраты",
            table: {
              columns: [
                { title: "Номер", field: "close" },
                { title: "Серия", field: "given" },
                { title: "Дата документа", field: "number" },
                { title: "Время документа", field: "seria" },
                { title: "Поставщик", field: "dateOfDocument" },
                { title: "Склад поставщика", field: "timeOfDocument" },
                { title: "Покупатель", field: "statusOfNote" },
                { title: "Склад покупателя", field: "sender" },
                { title: "Операция", field: "close" },
                { title: "Валюта", field: "given" },
                { title: "Кол-во строк", field: "number" },
                { title: "Кол-во (всего)", field: "seria" },
                { title: "Сумма", field: "dateOfDocument" },
                { title: "Сумма (Списания)", field: "timeOfDocument" },
                { title: "Примечание", field: "statusOfNote" },
                { title: "Заказы", field: "sender" },
                { title: "Накладные", field: "statusOfNote" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 2,
        label: "Списания",
        childrenList: [
          {
            id: 0,
            label: "Списания",
            table: {
              columns: [
                { title: "Номер", field: "close" },
                { title: "Серия", field: "given" },
                { title: "Дата документа", field: "number" },
                { title: "Время документа", field: "seria" },
                { title: "Склад", field: "timeOfDocument" },
                { title: "Операция", field: "satusOfNote" },
                { title: "Причина списания", field: "ender" },
                { title: "Кол-во строк", field: "nmber" },
                { title: "Кол-во (всего)", field: "eria" },
                { title: "Сумма", field: "daeOfDocument" },
                { title: "Сумма розничная", field: "timeOfocument" },
                { title: "Примечание", field: "statsOfNote" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Комиссии для списания товаров",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Председатель", field: "given" },
                { title: "Должность", field: "number" },
                { title: "Подразделения", field: "seria" },
                { title: "Члены комиссии", field: "ceria" },
              ],
              data: [],
            },
          },
          {
            id: 2,
            label: "Причины списания",
            table: {
              columns: [{ title: "Наименование", field: "close" }],
              data: [],
            },
          },
          {
            id: 3,
            label: "Операции",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "ID", field: "given" },
                { title: "Создан пользователем", field: "number" },
                { title: "Время создания", field: "seria" },
                { title: "Создан на компьютере", field: "ceria" },
              ],
              data: [],
            },
          },
          {
            id: 4,
            label: "Нормы отходов",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Норма,%", field: "given" },
                { title: "Страна", field: "number" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 3,
        label: "Изменение остатков",
        childrenList: [
          {
            id: 0,
            label: "Изменение остатков",
            table: {
              columns: [
                { title: "Номер", field: "close" },
                { title: "Серия", field: "given" },
                { title: "Дата документа", field: "number" },
                { title: "Время документа", field: "seria" },
                { title: "Склад", field: "timeOfDocument" },
                { title: "Операция", field: "satusOfNote" },
                { title: "Валюта", field: "ender" },
                { title: "Кол-во строк", field: "nmber" },
                { title: "Кол-во (всего)", field: "eria" },
                { title: "Сумма", field: "daeOfDocument" },
                { title: "Примечание", field: "statsOfNote" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Операции",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "ID", field: "given" },
                { title: "Создан пользователем", field: "number" },
                { title: "Время создания", field: "seria" },
                { title: "Создан на компьютере", field: "ceria" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 4,
        label: "Изменение сортности",
        childrenList: [
          {
            id: 0,
            label: "Изменения сортности",
            table: {
              columns: [
                { title: "Номер", field: "close" },
                { title: "Серия", field: "given" },
                { title: "Дата документа", field: "number" },
                { title: "Время документа", field: "seria" },
                { title: "Склад", field: "timeOfDocument" },
                { title: "Операция", field: "satusOfNote" },
                { title: "Кол-во строк", field: "nmber" },
                { title: "Кол-во (всего)", field: "eria" },
                { title: "Сумма учетная", field: "daeOfDocument" },
                { title: "Сумма переоценки", field: "ender" },
                { title: "Примечание", field: "statsOfNote" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Операции",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "ID", field: "given" },
                { title: "Создан пользователем", field: "number" },
                { title: "Время создания", field: "seria" },
                { title: "Создан на компьютере", field: "ceria" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 5,
        label: "Инвентаризация",
        childrenList: [
          {
            id: 0,
            label: "Операции",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "ID", field: "given" },
                { title: "Создан пользователем", field: "number" },
                { title: "Время создания", field: "seria" },
                { title: "Создан на компьютере", field: "ceria" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Инвентаризации",
            table: {
              columns: [
                { title: "Номер", field: "close" },
                { title: "Серия", field: "given" },
                { title: "Дата документа", field: "number" },
                { title: "Время документа", field: "seria" },
                { title: "Склады", field: "timeOfDocument" },
                { title: "Операция", field: "satusOfNote" },
                { title: "Название инвентаризации", field: "ender" },
                { title: "Примечание", field: "statsOfNote" },
                { title: "Кол-во недостачи", field: "nmber" },
                { title: "Сумма недостачи", field: "eria" },
              ],
              data: [],
            },
          },
          {
            id: 2, ///
            label: "Комиссии для инвентаризации",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Председатель", field: "given" },
                { title: "Подразделения", field: "seria" },
                { title: "Члены комиссии", field: "ceria" },
              ],
              data: [],
            },
          },
          {
            id: 3,
            label: "Зоны",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Код", field: "given" },
              ],
              data: [],
            },
          },
          {
            id: 4,
            label: "Комиссии",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Код", field: "given" },
                { title: "Примечание", field: "statsOfNote" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 6,
        label: "Естественная убыль",
        childrenList: [
          {
            id: 0,
            label: "Ведомости естественной убыли",
            table: {
              columns: [
                { title: "Номер", field: "close" },
                { title: "Серия", field: "given" },
                { title: "Дата документа", field: "number" },
                { title: "Время документа", field: "seria" },
                { title: "Код склада", field: "timeOfDocument" },
                { title: "Склад", field: "satusOfNote" },
                { title: "Дата с", field: "ender" },
                { title: "Дата по", field: "statsOfNote" },
                { title: "Кол-во (всего)", field: "nmber" },
                { title: "Сумма", field: "eria" },
                { title: "Примечание", field: "statsOfNote" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Справочник норм естественной убыли",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Страна", field: "given" },
                { title: "Родительская группа", field: "seria" },
                { title: "Код нормы естественной убыли", field: "ceria" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 7,
        label: "Остатки по товару",
        childrenList: [
          {
            id: 0,
            label: "Текущие остатки",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Штрихкод", field: "given" },
                { title: "Код", field: "number" },
                { title: "Страна", field: "seria" },
                { title: "Ед. Измерения", field: "timeOfDocument" },
                { title: "Текущий остаток", field: "satusOfNote" },
                { title: "Текущий резерв", field: "ender" },
                { title: "Доступное кол-во (всего)", field: "nmber" },
                { title: "Цена (средневзв.)", field: "eria" },
                { title: "Сумма остатка", field: "daeOfDocument" },
                { title: "Время последнего", field: "timeOfocument" },
                { title: "Поставщик последней партии", field: "statsOfNote" },
                { title: "Группа", field: "nber" },
                { title: "Полное имя", field: "era" },
                { title: "Продаж в день", field: "daeOfocument" },
                { title: "Закупок в день", field: "tmeOfocument" },
                { title: "Розничная цена", field: "tatsOfNote" },
                { title: "Розничная сумма", field: "er" },
                { title: "Учетная цена", field: "daeOocument" },
                { title: "Сумма учетная", field: "tmefocument" },
                { title: "Разница", field: "tatsfNote" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Остатки на дату",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Штрихкод", field: "given" },
                { title: "Код", field: "number" },
                { title: "Страна", field: "seria" },
                { title: "Ед. Измерения", field: "timeOfDocument" },
                { title: "Остаток (до)", field: "satusOfNote" },
                { title: "Резерв (после)", field: "ender" },
                { title: "Доступное кол-во (всего)", field: "nmber" },
                { title: "Цена (средневзв.)", field: "eria" },
                { title: "Сумма (до)", field: "daeOfDocument" },
                { title: "Время последнего", field: "timeOfocument" },
                { title: "Продаж в день", field: "daeOfocument" },
                { title: "Закупок в день", field: "tmeOfocument" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 8,
        label: "Остатки по партиям",
        childrenList: [
          {
            id: 0,
            label: "Текущие остатки по партиям",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Штрихкод", field: "given" },
                { title: "Текущий остаток", field: "satusOfNote" },
                { title: "Текущий резерв", field: "ender" },
                { title: "Доступное кол-во (всего)", field: "nmber" },
                { title: "Номер документа", field: "eria" },
                { title: "Серия документа", field: "daeOfDocument" },
                { title: "Дата/Время", field: "timeOfocument" },
                { title: "Поставщик", field: "statsOfNote" },
                { title: "Название", field: "nber" },
                { title: "Код", field: "era" },
                { title: "Кол-во в партии", field: "daeOfocument" },
                { title: "Себестоимость", field: "tmeOfocument" },
                { title: "Годен до", field: "tatsOfNote" },
                { title: "Учетная цена", field: "daeOocument" },
                { title: "Сумма учетная", field: "tmefocument" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Остатки по партиям на дату",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Штрихкод", field: "given" },
                { title: "Остаток (до)", field: "satusOfNote" },
                { title: "Резерв (после)", field: "ender" },
                { title: "Доступное кол-во (всего)", field: "nmber" },
                { title: "Номер документа", field: "eria" },
                { title: "Серия документа", field: "daeOfDocument" },
                { title: "Дата/Время", field: "timeOfocument" },
                { title: "Поставщик", field: "statsOfNote" },
                { title: "Название", field: "nber" },
                { title: "Код", field: "era" },
                { title: "Кол-во в партии", field: "daeOfocument" },
                { title: "Себестоимость", field: "tmeOfocument" },
                { title: "Годен до", field: "tatsOfNote" },
                { title: "Учетная цена", field: "daeOocument" },
                { title: "Сумма учетная", field: "tmefocument" },
                { title: "Сертификат соответствия", field: "tmefocent" },
              ],
              data: [],
            },
          },
          {
            id: 2,
            label: "Партии",
            table: {
              columns: [
                { title: "Наименование", field: "close" },
                { title: "Штрихкод", field: "given" },
                { title: "Номер документа", field: "eria" },
                { title: "Серия документа", field: "daeOfDocument" },
                { title: "Дата/Время", field: "timeOfocument" },
                { title: "Поставщик", field: "statsOfNote" },
                { title: "Название", field: "nber" },
                { title: "Код", field: "era" },
                { title: "Склад", field: "satusOfNote" },
                { title: "НДС,%", field: "ender" },
                { title: "Цена закупки", field: "nmber" },
                { title: "Кол-во в партии", field: "daeOfocument" },
                { title: "Себестоимость", field: "tmeOfocument" },
                { title: "Годен до", field: "tatsOfNote" },
                { title: "Остаток (всего)", field: "daeOocument" },
                { title: "Название", field: "tmefocument" },
                { title: "Ед. Измерения", field: "tmefocent" },
                { title: "Бренд", field: "ener" },
                { title: "Страна", field: "nmbr" },
                { title: "Производитель", field: "daeOfocumen" },
                { title: "Вес нетто, кг", field: "tmeOfocuent" },
                { title: "Вес брутто, кг", field: "tatsfNote" },
                { title: "НДС партии, шкала", field: "daeocument" },
                { title: "НДС партии, %", field: "tmefocumnt" },
                { title: "Вид", field: "tmefcent" },
                { title: "Сорт", field: "daeOfocumn" },
                { title: "Особенность", field: "tmeOfocunt" },
                { title: "Упаковка", field: "tatsfNte" },
                { title: "Фасовка", field: "daecument" },
                { title: "Описание", field: "tmefcumnt" },
                { title: "Упаковка", field: "tatsfN" },
                { title: "Штрихкод упаковки", field: "tmefcent" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 9,
        label: "Себестоимость",
        childrenList: [
          {
            id: 0,
            label: "Себестоимость (операции)",
            table: {
              columns: [
                { title: "Номер документа", field: "eria" },
                { title: "Серия документа", field: "daeOfDocument" },
                { title: "Дата/Время", field: "timeOfocument" },
                { title: "Дата", field: "statsOfNote" },
                { title: "Описание", field: "nber" },
                { title: "ИД Sku", field: "era" },
                { title: "SKU", field: "satusOfNote" },
                { title: "Склад", field: "close" },
                { title: "Штрихкод", field: "given" },
                { title: "Контрагент", field: "ender" },
                { title: "Склад контргента", field: "nmber" },
                { title: "Кол-во", field: "daeOfocument" },
                { title: "Расписано", field: "tmeOfocument" },
                { title: "Сумма", field: "tatsOfNote" },
                { title: "Сумма по партиям", field: "daeOocument" },
                { title: "Перерассчитать себестоимость", field: "tmefocument" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Себестоимость (партии)",
            table: {
              columns: [
                { title: "Номер документа", field: "eria" },
                { title: "Серия документа", field: "daeOfDocument" },
                { title: "Дата/Время", field: "timeOfocument" },
                { title: "Поставщик", field: "statsOfNote" },
                { title: "Название", field: "nber" },
                { title: "Кол-во в партии (всего)", field: "era" },
                { title: "Себестоимость", field: "satusOfNote" },
                { title: "Остаток (всего)", field: "close" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 10,
        label: "Изменение товарного счета",
        childrenList: [
          {
            id: 0,
            label: "Учетный документ",
            table: {
              columns: [
                { title: "Номер документа", field: "eria" },
                { title: "Серия документа", field: "daeOfDocument" },
                { title: "Дата документа", field: "timeOfocument" },
                { title: "Время документа", field: "statsOfNote" },
                { title: "Склад", field: "nber" },
                { title: "Кол-во строк", field: "era" },
                { title: "Сумма, тара", field: "satusOfNote" },
                { title: "Сумма, товар", field: "close" },
                { title: "Суммы (всего)", field: "given" },
                { title: "Номер справки", field: "ender" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 11,
        label: "Отчеты",
        childrenList: [
          {
            id: 0,
            label: "Регистр движений",
            table: {
              columns: [
                { title: "Номер документа", field: "eria" },
                { title: "Серия документа", field: "daeOfDocument" },
                { title: "Дата", field: "timeOfocument" },
                { title: "Дата/Время", field: "statsOfNote" },
                { title: "Группа", field: "nber" },
                { title: "SKU", field: "era" },
                { title: "Штрихкод", field: "satusOfNote" },
                { title: "Описание", field: "close" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Товарный отчет",
            table: {
              columns: [
                { title: "Дата", field: "eria" },
                { title: "Класс объекта", field: "daeOfDocument" },
                { title: "Название документа", field: "timeOfocument" },
                { title: "Операция", field: "statsOfNote" },
                { title: "Контрагент", field: "nber" },
                { title: "Склад контрагента", field: "era" },
              ],
              data: [],
            },
          },
          {
            id: 2,
            label: "Суммы остатков",
            table: {
              columns: [
                { title: "Наименование", field: "eria" },
                {
                  title: "Сумма на конец дня (по товарному счету)",
                  field: "daeOfDocument",
                },
                { title: "Разница 1 и 2", field: "timeOfocument" },
                { title: "% разницы 1 и 2", field: "statsOfNote" },
                { title: "Сумма на конец дня (по товарам)", field: "nber" },
                { title: "Разница 1 и 3", field: "era" },
                { title: "% разницы 1 и 3", field: "satusOfNote" },
                {
                  title: "Сумма на конец дня (в учетных ценах)",
                  field: "close",
                },
                { title: "Разница 2 и 3", field: "given" },
                { title: "% разницы 2 и 3", field: "ender" },
              ],
              data: [],
            },
          },
          {
            id: 3,
            label: "Отчет по таре",
            table: {
              columns: [
                { title: "Штрихкод", field: "eria" },
                { title: "Наименование", field: "daeOfDocument" },
                { title: "Поставщик", field: "timeOfocument" },
                { title: "Цена", field: "statsOfNote" },
                { title: "Остаток на начало", field: "nber" },
                { title: "Сумма на начало", field: "era" },
                { title: "Остаток на конец", field: "satusOfNote" },
                { title: "Сумма на конец", field: "close" },
                { title: "Приход", field: "given" },
                { title: "Сумма прихода", field: "ender" },
                { title: "Расход", field: "nmber" },
                { title: "Сумма расхода", field: "daeOfocument" },
              ],
              data: [],
            },
          },
          {
            id: 4,
            label: "Отчет по остаткам",
            table: {
              columns: [
                { title: "Код", field: "eria" },
                { title: "Штрихкод", field: "daeOfDocument" },
                { title: "Наименование", field: "timeOfocument" },
                { title: "Ед. измерения", field: "statsOfNote" },
                { title: "Остаток на начало", field: "nber" },
                { title: "Сумма на начало", field: "era" },
              ],
              data: [],
            },
          },
          {
            id: 5,
            label: "Отчет по товарообороту",
            table: {
              columns: [
                { title: "Штрихкод", field: "eria" },
                { title: "Наименование", field: "daeOfDocument" },
                { title: "Ед. измерения", field: "timeOfocument" },
                { title: "Остаток на начало", field: "nber" },
                { title: "Сумма на начало", field: "era" },
                { title: "Кол-во пришедшего", field: "satusOfNote" },
                { title: "Сумма пришедшего", field: "close" },
                { title: "Кол-во ушедшего", field: "given" },
                { title: "Сумма ушедшего", field: "ender" },
                { title: "Остаток на конец", field: "nmber" },
                { title: "Сумма на конец", field: "daeOfocument" },
              ],
              data: [],
            },
          },
          {
            id: 6,
            label: "По поставщикам",
            table: {
              columns: [
                { title: "Дерево", field: "eria" },
                { title: "Порядок", field: "daeOfDocument" },
                { title: "Наименование", field: "timeOfocument" },
                { title: "Код", field: "statsOfNote" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 12,
        label: "Справочники",
        childrenList: [
          {
            id: 0,
            path: "contracts",
            label: "Договоры",
            table: {
              columns: [
                { title: "Организация (поставщик)", field: "provider" },
                { title: "Адрес поставщика", field: "providerAddress"},
                { title: "Огранизация (покупатель)", field: "customer" },
                { title: "Адрес покупателя", field: "customerAddress"},
                { title: "Код", field: "number" },
                { title: "Серия/Номер", field: "seria" },
                { title: "Дата создания", field: "createdAt"} 
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Склады",
            table: {
              columns: [
                { title: "Наименование", field: "eria" },
                { title: "Наименование полное", field: "daeOfDocument" },
                { title: "Код", field: "timeOfocument" },
                { title: "Группа складов", field: "statsOfNote" },
                { title: "Адрес", field: "nber" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 13,
        label: "Переоценка",
        childrenList: [
          {
            id: 0,
            label: "Комиссии для переоценки",
            table: {
              columns: [
                { title: "Наименование", field: "eria" },
                { title: "Подразделения", field: "daeOfDocument" },
                { title: "Члены комиссии", field: "timeOfocument" },
                { title: "Председатель", field: "statsOfNote" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 14,
        label: "Аналитика",
        childrenList: [
          {
            id: 0,
            label: "Типы аналитических отчетов",
            table: {
              columns: [
                { title: "Код", field: "eria" },
                { title: "Наименование", field: "daeOfDocument" },
                { title: "Дни недели", field: "timeOfocument" },
                { title: "Числа", field: "nber" },
                { title: "По партиям", field: "era" },
                { title: "Количество", field: "satusOfNote" },
                { title: "Сумма", field: "close" },
                { title: "Остаток начало", field: "given" },
                { title: "Приход", field: "ender" },
                { title: "Расход", field: "nmber" },
                { title: "Остаток конец", field: "daeOfocument" },
                { title: "Себестоимость", field: "nmbe" },
                { title: "НДС поставщика", field: "deOfoument" },
                { title: "Себестоимость с НДС", field: "eia" },
                { title: "Вес, кг", field: "daeocument" },
                { title: "Закупка", field: "timefocment" },
                { title: "Продажа", field: "ber" },
                { title: "Товарооборачиваемость", field: "ea" },
                { title: "Дней на складе", field: "satusONote" },
                { title: "Списание", field: "clse" },
                { title: "Скидка", field: "gven" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Аналитические отчеты",
            table: {
              columns: [
                { title: "Номер", field: "eria" },
                { title: "Серия", field: "daeOfDocument" },
                { title: "Дата документа", field: "timeOfocument" },
                { title: "Время документа", field: "nber" },
                { title: "Дата с", field: "era" },
                { title: "Дата по", field: "satusOfNote" },
                { title: "Тип отчета", field: "close" },
                { title: "Статус отчета", field: "given" },
                { title: "Время начала формирования", field: "ender" },
                { title: "Время окончания формирования", field: "nmber" },
                { title: "Примечание", field: "daeOfocument" },
                { title: "Группы складов, склады (все)", field: "nmbe" },
                { title: "Группы товаров (все)", field: "deOfoument" },
              ],
              data: [],
            },
          },
        ],
      },
    ],
  },
  {
    id: 4,
    pic: sale,
    note: "Продажи",
    mainList: [
      {
        id: 0,
        label: "Продажи",
        childrenList: [
          {
            id: 0,
            label: "Предварительные заказы",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Резервы",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Заказы",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 3,
            label: "Накладные",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 4,
            label: "Акты расхождений",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 1,
        label: "Возвраты",
        childrenList: [
          {
            id: 0,
            label: "Заказы",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Накладные",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Акты расхождений",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 2,
        label: "Статистика",
        childrenList: [
          {
            id: 0,
            label: "Типы статистических групп",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Статистические группы",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Конвертация статистических ед. изм.",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 3,
            label: "Статистический отчет",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 3,
        label: "Отчеты",
        childrenList: [
          {
            id: 0,
            label: "Типы статистических отчетов",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Статистические отчеты",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 4,
        label: "Справочники",
        childrenList: [
          {
            id: 0,
            label: "Операции",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 5,
        label: "Отчеты",
        childrenList: [
          {
            id: 0,
            label: "Регистр продаж",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Исполнение заявок",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Продажи по неделям",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 3,
            label: "Отчет по продажам",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 4,
            label: "Продажи клиентам по неделям",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 5,
            label: "Товарооборачиваемость по поставщикам",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
    ],
  },
  {
    id: 5,
    pic: retail,
    note: "Розничная торговля",
    mainList: [
      {
        id: 0,
        label: "Касса",
        childrenList: [
          {
            id: 0,
            label: "Z-отчеты",
            table: {
              columns: [
                { title: "Номер", field: "eria" },
                { title: "Дата документа", field: "timeOfocument" },
                { title: "Время документа", field: "nber" },
                { title: "Отдел магазина", field: "era" },
                { title: "Касса Z-отчета", field: "satusOfNote" },
                { title: "Основание", field: "close" },
                { title: "Кол-во строк", field: "given" },
                { title: "Кол-во аннулированных чеков", field: "ender" },
                { title: "Кол-во (всего)", field: "nmber" },
                { title: "Сумма Z-отчета", field: "daeOfocument" },
                { title: "Сумма продажа (наличные)", field: "nmbe" },
                { title: "Сумма продажа (карточка)", field: "deOfoument" },
                { title: "Сумма продаж (сертификат)", field: "cloe" },
                { title: "Сумма возврата (наличные)", field: "givn" },
                { title: "Сумма возврата (карточка)", field: "eder" },
                { title: "Сумма НДС", field: "nmbr" },
                { title: "Сумма скидок Z-отчета", field: "daeOfocumnt" },
                { title: "Время первого чека", field: "nme" },
                { title: "Время последнего чека", field: "deOoumnt" },
                { title: "Начислено бонусов", field: "satusOfte" },
                { title: "Оплачено бонусами", field: "lose" },
                { title: "Сумма бонусов Z-отчета", field: "ven" },
                { title: "Сумма проданных сертификтов", field: "ede" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 1,
        label: "CRM",
        childrenList: [
          {
            id: 0,
            label: "Акции",
            table: {
              columns: [
                { title: "Номер", field: "eria" },
                { title: "Порядок", field: "timeOfocument" },
                { title: "Наименование", field: "nber" },
                { title: "Серия", field: "era" },
                { title: "ДАТА ОТ", field: "satusOfNote" },
                { title: "ДАТА ДО", field: "close" },
                { title: "Порядок применения", field: "given" },
                { title: "Магазины", field: "ender" },
                { title: "ВРЕМЯ ОТ", field: "nmber" },
                { title: "ВРЕМЯ ДО", field: "daeOfocument" },
                { title: "Сумма чека (от)", field: "nmbe" },
                { title: "Сумма чека (до)", field: "deOfoument" },
                { title: "Накоп. сумма (от)", field: "cloe" },
                { title: "Накоп. сумма (до)", field: "givn" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Группы акций",
            table: {
              columns: [
                { title: "Порядок", field: "timeOfocument" },
                { title: "Наименование", field: "nber" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 2,
        label: "Справочники",
        childrenList: [
          {
            id: 0,
            label: "Магазины",
            table: {
              columns: [
                { title: "Код", field: "eria" },
                { title: "Адрес", field: "timeOfocument" },
                { title: "Наименование", field: "nber" },
                { title: "E-mail", field: "era" },
                { title: "Телефон магазина", field: "satusOfNote" },
                { title: "Формат", field: "close" },
                { title: "Компания", field: "given" },
                { title: "Регион", field: "ender" },
                { title: "Порядковый номер", field: "nmber" },
                { title: "Кол-во касс", field: "daeOfocument" },
                { title: "Розничная цена (управленческая)", field: "nmbe" },
                { title: "Розничная цена (расчетная)", field: "deOfoument" },
                { title: "Вид цен (предельные надбавки)", field: "cloe" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Типы дисконтных карт",
            table: {
              columns: [
                { title: "Тип карты", field: "timeOfocument" },
                { title: "Код", field: "nber" },
              ],
              data: [],
            },
          },
          {
            id: 2,
            label: "Дисконтные карты",
            table: {
              columns: [
                { title: "Номер", field: "eria" },
                { title: "Тип карты", field: "timeOfocument" },
                { title: "Код", field: "nber" },
                { title: "Серия", field: "era" },
                { title: "Держатель дисконтной карты", field: "satusOfNote" },
                { title: "Имя", field: "close" },
                { title: "Фамилия", field: "given" },
                { title: "Телефон", field: "ender" },
                { title: "E-mail", field: "nmber" },
                { title: "Адрес", field: "daeOfocument" },
                { title: "День рождения", field: "nmbe" },
                { title: "Дата выдачи", field: "deOfoument" },
                { title: "Дата первого использования", field: "cloe" },
                { title: "Дата окончания действия", field: "givn" },
                { title: "Наименование", field: "edfria" },
                { title: "Начальная сумма", field: "timsdsfeOfocument" },
                { title: "Сумма продаж", field: "nbeadsr" },
                { title: "Сумма возвратов", field: "erasdsa" },
                {
                  title: "Накопленная сумма",
                  field: "satuadssOfNote",
                },
                { title: "Дополнительные накопления", field: "closadae" },
                { title: "Сумма переводов", field: "givdaden" },
                { title: "Накопленная сумма", field: "endaader" },
                { title: "Процент скидки", field: "nmbeasr" },
                { title: "Сумма переводов", field: "daeOfocaaument" },
                { title: "Номер дисконтной карты", field: "nmasasbe" },
                { title: "Сумма переводов", field: "deOfasaoument" },
                { title: "Вид цен для дисконтных карт", field: "clasasoe" },
                { title: "Накоплено бонусов", field: "giasassvn" },
                { title: "Оплачено бонусами", field: "clsdfdgfosadae" },
                { title: "Доступно бонусов", field: "givdasfdgden" },
                { title: "Дополнительные бонусы", field: "ensfdgdaader" },
                { title: "Доступно бонусов", field: "nmbsfdgeasr" },
                { title: "Начислено бонусов", field: "daefdgOfocaaument" },
                { title: "Заблокировано бонусов", field: "nmafdgsasbe" },
                {
                  title: "Дополнительные заблокированные бонусы",
                  field: "deOfasfdgaoument",
                },
                {
                  title: "Всего заблокированных бонусов",
                  field: "clasfdgasoe",
                },
              ],
              data: [],
            },
          },
          {
            id: 3,
            label: "Подарочные сертификаты",
            table: {
              columns: [
                { title: "Номер", field: "eria" },
                { title: "Штрихкод SKU", field: "timeOfocument" },
                { title: "Код", field: "nber" },
                { title: "Серия", field: "era" },
                { title: "SKU", field: "satusOfNote" },
                { title: "Дата", field: "close" },
                { title: "Дата продажи", field: "given" },
                { title: "Где продан", field: "ender" },
                { title: "Номер чека (продажа)", field: "nmber" },
                {
                  title: "Дата последнего использования",
                  field: "daeOfocument",
                },
                { title: "Где использован последний раз", field: "nmbe" },
                {
                  title: "Компания (последнее использование)",
                  field: "deOfoument",
                },
                {
                  title: "Номер чека (последнее использование)",
                  field: "cloe",
                },
                { title: "Срок действия", field: "givn" },
                { title: "Дата истечения", field: "edfria" },

                { title: "Цена", field: "timsdsfeOfocument" },
                { title: "Дата порчи", field: "nbeadsr" },
                { title: "Где испорчен", field: "erasdsa" },
                {
                  title: "Номер (списания исп.)",
                  field: "satuadssOfNote",
                },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 3,
        label: "Отчеты",
        childrenList: [
          {
            id: 0,
            label: "Отчет по магазинам",
            table: {
              columns: [
                { title: "Наименование", field: "eria" },
                { title: "Код", field: "daeOfDocument" },
                { title: "Компания", field: "timeOfocument" },
                { title: "Торговая площадь", field: "statsOfNote" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Реестр чеков",
            table: {
              columns: [
                { title: "Отдел магазина", field: "eria" },
                { title: "Номер Z-отчета", field: "timeOfocument" },
                { title: "Номер чека", field: "nber" },
                { title: "Дата документа", field: "era" },
                { title: "Время", field: "satusOfNote" },
                { title: "Час", field: "close" },
                { title: "Номер кассы", field: "given" },
                { title: "Кассир", field: "ender" },
                { title: "Номер дисконтной карты", field: "nmber" },
                { title: "Держатель дисконтной карты", field: "daeOfocument" },
                { title: "Наименование дисконтной карты", field: "nmbe" },
                { title: "Сумма чека по товарам", field: "deOfoument" },
                { title: "Сумма чека", field: "cloe" },
                { title: "Сумма скидки", field: "givn" },
                { title: "Сумма скидки по чеку", field: "edfria" },

                { title: "Сумма НДС", field: "timsdsfeOfocument" },
                { title: "Кол-во строк", field: "nbeadsr" },
                { title: "Кол-во всего", field: "erasdsa" },
                {
                  title: "Сумма продажа",
                  field: "satuadssOfNote",
                },
                { title: "Сумма продажа", field: "closadae" },

                {
                  title: "Аннулированные дисконтные карты",
                  field: "deOfasfdgaoument",
                },
              ],
              data: [],
            },
          },
          {
            id: 2,
            label: "Списания испорченных ПС",
            table: {
              columns: [
                { title: "Склад", field: "eria" },
                { title: "Номер", field: "timeOfocument" },
                { title: "Серия", field: "nber" },
                { title: "Дата документа", field: "era" },
                { title: "Время документа", field: "satusOfNote" },
                { title: "Примечание", field: "close" },
                { title: "Дата с", field: "given" },
                { title: "Дата по", field: "ender" },
                { title: "Кол-во строк", field: "nmber" },
              ],
              data: [],
            },
          },
          {
            id: 3,
            label: "Очет по ПС",
            table: {
              columns: [
                { title: "Серия/Номер", field: "eria" },
                { title: "Дата", field: "timeOfocument" },
                { title: "Дата продажи", field: "nber" },
                { title: "Где продан", field: "era" },
                { title: "Цена", field: "satusOfNote" },
                { title: "Дата истечения", field: "close" },
                { title: "Дата последнего использования", field: "given" },
                { title: "Где использован последний раз", field: "ender" },
              ],
              data: [],
            },
          },
          {
            id: 4,
            label: "Отчеты по чекам",
            table: {
              columns: [
                { title: "Номер", field: "timeOfocument" },
                { title: "Серия", field: "nber" },
                { title: "Дата документа", field: "era" },
                { title: "Время документа", field: "satusOfNote" },
                { title: "Время c", field: "sadNote" },
                { title: "Время по", field: "cloese" },
                { title: "Дата с", field: "giythven" },
                { title: "Дата по", field: "enyhtder" },
                { title: "Классификатор", field: "nmerber" },
                { title: "Кол-во чеков", field: "dretrument" },
                { title: "Ср. кол-во позиций в чеке", field: "nhtmbe" },
                {
                  title: "Ср. кол-во выб. позиций в чеке",
                  field: "deOfoument",
                },
                { title: "Ср. сумма чека", field: "cloe" },
                { title: "Ср. сумма выб. позиций в чеке", field: "givn" },
                { title: "Кол-во строк", field: "edfria" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 4,
        label: "Управление ассортиментом",
        childrenList: [
          {
            id: 0,
            label: "Ассортиментные матрицы",
            table: {
              columns: [
                { title: "Название", field: "timeOfocument" },
                { title: "Дата пересмотра", field: "nber" },
                { title: "Включенные группы", field: "era" },
                { title: "Глубина матрицы", field: "satusOfNote" },
                { title: "Кол-во товаров", field: "sadNote" },

                { title: "A", field: "cloese" },
                { title: "B", field: "giythven" },
                { title: "C", field: "enyhtder" },
                { title: "D", field: "nmerber" },
                { title: "E", field: "dretrument" },
                { title: "F", field: "nhtmbe" },
                {
                  title: "G",
                  field: "deOfoument",
                },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Ассортимент магазинов",
            table: {
              columns: [
                { title: "Название", field: "timeOfocument" },
                { title: "LS Маркет Бейз", field: "nber" },
                { title: "LS Маркет Лайт", field: "era" },
                { title: "LS Маркет Макси", field: "satusOfNote" },
                { title: "LS Маркет Эконом", field: "sadNote" },
                { title: "LS Маркет Бейз", field: "nbsdfr" },
                { title: "LS Маркет Лайт", field: "eradsfdfa" },
                { title: "LS Маркет Макси", field: "satsdfdOfNote" },
                { title: "LS Маркет Эконом", field: "sadste" },
              ],
              data: [],
            },
          },
          {
            id: 2,
            label: "Уровни ассортимента",
            table: {
              columns: [{ title: "Название", field: "timeOfocument" }],
              data: [],
            },
          },
          {
            id: 3,
            label: "Места продаж",
            table: {
              columns: [
                { title: "Наименование", field: "timeOfocument" },
                { title: "Дата с", field: "nber" },
                { title: "Дата по", field: "era" },
                { title: "Магазины", field: "satusOfNote" },
              ],
              data: [],
            },
          },
          {
            id: 4,
            label: "Исполнения ассортимента",
            table: {
              columns: [
                { title: "Номер", field: "timeOfocument" },
                { title: "Серия", field: "nber" },
                { title: "Дата документа", field: "era" },
                { title: "Время документа", field: "satusOfNote" },
                { title: "Дата с", field: "sadNote" },
                { title: "Дата по", field: "nbsdfr" },
                { title: "Магазины", field: "eradsfdfa" },
                { title: "Группы товаров", field: "satsdfdOfNote" },
                { title: "Примечание", field: "sadste" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 5,
        label: "Ценники",
        childrenList: [
          {
            id: 0,
            label: "Печать ценников",
            table: {
              columns: [
                { title: "Тип ценника", field: "timeOfocument" },
                { title: "Основание загрузки", field: "nber" },
                { title: "Дата", field: "era" },
                { title: "Время", field: "satusOfNote" },
                { title: "Создан пользователем", field: "sadNote" },
                { title: "Время создания", field: "nbsdfr" },
                { title: "Создан на компьютере", field: "eradsfdfa" },
                { title: "Адрес магазина", field: "satsdfdOfNote" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Типы ценников",
            table: {
              columns: [
                { title: "Код", field: "timeOfocument" },
                { title: "Наименование", field: "nber" },
                { title: "Ширина", field: "era" },
                { title: "Высота", field: "satusOfNote" },
                { title: "Ориентация", field: "sadNote" },
                { title: "Файл шаблона", field: "nbsdfr" },
                { title: "Вид цен", field: "eradsfdfa" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 6,
        label: "Расценка",
        childrenList: [
          {
            id: 0,
            label: "Акты расценки",
            table: {
              columns: [
                { title: "Номер", field: "timeOfocument" },
                { title: "Серия", field: "nber" },
                { title: "Дата документа", field: "era" },
                { title: "Время документа", field: "satusOfNote" },
                { title: "Склад", field: "sadNote" },
                { title: "Операция", field: "cloese" },
                { title: "Валюта", field: "giythven" },

                { title: "Вид цен (управленческий)", field: "enyhtder" },
                { title: "Вид цен (надбавка)", field: "nmerber" },
                { title: "Кол-во строк", field: "dretrument" },
                { title: "Примечание", field: "nhtmbe" },
                {
                  title: "Поставщик",
                  field: "qewrtqewr",
                },
                { title: "Кол-во всего", field: "sdgfsdf" },
                { title: "Сумма поставщика", field: "cloe" },
                { title: "Сумма розничная", field: "givn" },
                { title: "Накладные", field: "edfria" },
                { title: "Документы-основания", field: "edffghjsfdgfga" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Операции расценки",
            table: {
              columns: [
                { title: "ID", field: "timeOfocument" },
                { title: "Наименование", field: "nber" },
                { title: "Создан пользователем", field: "era" },
                { title: "Время создания", field: "satusOfNote" },
                { title: "Создан на компьютере", field: "sadNote" },
              ],
              data: [],
            },
          },
          {
            id: 2,
            label: "Комиссии для акта расценки",
            table: {
              columns: [
                { title: "Наименование", field: "nber" },
                { title: "Подразделения", field: "era" },
                { title: "Цены сформировал", field: "satusOfNote" },
                { title: "Реестр проверил", field: "sadNote" },
                { title: "Товар промаркеровал", field: "satussaNote" },
                { title: "Бухгалтер", field: "dsdfgf" },
              ],
              data: [],
            },
          },
          {
            id: 3,
            label: "Акты переоценки",
            table: {
              columns: [
                { title: "Номер", field: "timeOfocument" },
                { title: "Серия", field: "nber" },
                { title: "Дата документа", field: "era" },
                { title: "Время документа", field: "satusOfNote" },
                { title: "Дата документа (до)", field: "sadNote" },
                { title: "Операция", field: "cloese" },
                { title: "Склад", field: "giythven" },
                { title: "Кол-во строк", field: "dretrument" },
                { title: "Сумма изменения поставщика", field: "enyhtder" },
                { title: "Сумма изменения надбавки", field: "nmerber" },
                { title: "Сумма изменения НДС", field: "nhtmbe" },
                {
                  title: "Сумма изменения розничной",
                  field: "dfdg",
                },
                { title: "№ распоряжения на переоценку", field: "cloe" },
                { title: "Статус загрузки в оборудование", field: "givn" },
                { title: "Статус печати ценника", field: "edfria" },
                { title: "Примечание", field: "edffghjsfdgfga" },
              ],
              data: [],
            },
          },
          {
            id: 4,
            label: "Операции переоценки",
            table: {
              columns: [
                { title: "ID", field: "timeOfocument" },
                { title: "Наименование", field: "nber" },
                { title: "Создан пользователем", field: "era" },
                { title: "Время создания", field: "satusOfNote" },
                { title: "Создан на компьютере", field: "sadNote" },
              ],
              data: [],
            },
          },
        ],
      },
      {
        id: 7,
        label: "ABC анализ",
        childrenList: [
          {
            id: 0,
            label: "Операции ABC-отчет",
            table: {
              columns: [
                { title: "Код", field: "timeOfocument" },
                { title: "Наименование", field: "nber" },
                { title: "Дни недели", field: "era" },
                { title: "Числа", field: "satusOfNote" },
                { title: "Тип классификатора SKU", field: "sadNote" },
                { title: "Уровень групп товаров", field: "cloese" },
                { title: "A, %", field: "giythven" },
                { title: "B, %", field: "dretrument" },
                { title: "C, %", field: "enyhtder" },
                { title: "Приоритет рейтинга ABC", field: "nmerber" },
                { title: "X, коэф-т", field: "nhtmbe" },
                { title: "Y, коэф-т", field: "dfdg" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "ABC-отчеты",
            table: {
              columns: [
                { title: "Номер", field: "timeOfocument" },
                { title: "Серия", field: "nber" },
                { title: "Дата документа", field: "era" },
                { title: "Время документа", field: "satusOfNote" },
                { title: "Дата с", field: "sadNote" },
                { title: "Дата по", field: "cloese" },
                { title: "Операция отчета", field: "giythven" },
                { title: "Статус отчета", field: "dretrument" },
                { title: "Время начала формирования", field: "enyhtder" },
                { title: "Время окончания", field: "nmerber" },
                { title: "Примечание", field: "nhtmbe" },
                { title: "Группы складов, склады (все)", field: "dfdg" },
                { title: "Группы товаров (все)", field: "cloe" },
                { title: "Тип классификатора SKU", field: "givn" },
                { title: "Уровень групп товаров", field: "edfria" },
                { title: "A, %", field: "likku" },
                { title: "B, %", field: "hgmhgj" },
                { title: "C, %", field: "yuyu" },
                { title: "X, коэф-т", field: "gfdf" },
                { title: "Y, коэф-т", field: "dghhhh" },
              ],
              data: [],
            },
          },
        ],
      },
    ],
  },
  {
    id: 6,
    pic: finance,
    note: "Финансы",
    mainList: [
      {
        id: 0,
        label: "Задолженности",
        childrenList: [
          {
            id: 0,
            label: "Условия оплаты",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 1,
        label: "Справочники",
        childrenList: [
          {
            id: 0,
            label: "Налоги",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Банки",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Операции",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 2,
        label: "Движение денежных средств",
        childrenList: [
          {
            id: 0,
            label: "Движение денег",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Платежи",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 3,
        label: "Бухгалтерский учет",
        childrenList: [
          {
            id: 0,
            label: "Планы счетов",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Счета",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Проводки",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 3,
            label: "Тип субконто",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 4,
            label: "Субконто (польз.)",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
    ],
  },
  {
    id: 7,
    pic: priceList,
    note: "Цены",
    mainList: [
      {
        id: 0,
        label: "Документы",
        childrenList: [
          {
            id: 0,
            label: "Соглашения",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Прайсы",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Торговые надбавки",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 3,
            label: "Акции",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 4,
            label: "Акции (магазин)",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 1,
        label: "Справочники",
        childrenList: [
          {
            id: 0,
            label: "Виды цен",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Округления цен",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Операции",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 3,
            label: "Тип акции",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 4,
            label: "Листовки",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 2,
        label: "Отчеты",
        childrenList: [
          {
            id: 0,
            label: "Регистр цен",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 3,
        label: "Цены конкурентов",
        childrenList: [
          {
            id: 0,
            label: "Конкуренты",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Типы прайса",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Проводки",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 3,
            label: "Прайсы конкурентов",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 4,
            label: "Анализ цен конкурентов",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
    ],
  },
  {
    id: 8,
    pic: machinery,
    note: "Оборудование",
    mainList: [
      {
        id: 0,
        label: "Экспорт",
        childrenList: [
          {
            id: 0,
            label: "Загрузки прайса в оборудование",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Запросы обмена данными",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Запрет на применение скидок",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 1,
        label: "Справочники",
        childrenList: [
          {
            id: 0,
            label: "Серверы оборудования",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 2,
        label: "Кассы",
        childrenList: [
          {
            id: 0,
            label: "Модели касс",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Группы касс",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Модели платёжных терминалов",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 3,
            label: "Секции",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 3,
        label: "Терминалы сбора данных",
        childrenList: [
          {
            id: 0,
            label: "Документы ТСД",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Группы ТСД",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Модели ТСД",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 3,
            label: "Группы типов документов",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 4,
            label: "Виды справочников ТСД",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 4,
        label: "Весы",
        childrenList: [
          {
            id: 0,
            label: "Группы весов",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Модели весов",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Форматы этикеток весов",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 3,
            label: "Ячейки весов",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 5,
        label: "Прайс-чекеры",
        childrenList: [
          {
            id: 0,
            label: "Группы прайс чекеров",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Модели прайс чекеров",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
    ],
  },
  {
    id: 9,
    pic: transport,
    note: "Транспорт",
    mainList: [
      {
        id: 0,
        label: "Документы",
        childrenList: [
          {
            id: 0,
            label: "Рейсы",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Маршруты",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 1,
        label: "Справочники",
        childrenList: [
          {
            id: 0,
            label: "Машины",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Модели машин",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Водители",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
    ],
  },
  {
    id: 10,
    pic: customs,
    note: "ВЭД",
    mainList: [
      {
        id: 0,
        label: "Документы",
        childrenList: [
          {
            id: 0,
            label: "Сертификаты соответствия",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Таможенные декларации",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 1,
        label: "Справочники",
        childrenList: [
          {
            id: 0,
            label: "Таможенная зона",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Позиции ТН ВЭД",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
    ],
  },
  {
    id: 11,
    pic: manufacturing,
    note: "Производство",
    mainList: [
      {
        id: 0,
        label: "Документы",
        childrenList: [
          {
            id: 0,
            label: "Производственные заказы",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Производство",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Списания сырья",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 1,
        label: "Справочники",
        childrenList: [
          {
            id: 0,
            label: "Спецификации",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Комиссии производства",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Замена",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 3,
            label: "Операции",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 4,
            label: "Технологии",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
    ],
  },
  {
    id: 12,
    pic: wms,
    note: "WMS",
    mainList: [
      {
        id: 0,
        label: "Документы",
        childrenList: [
          {
            id: 0,
            label: "Заказы на перемещение по ячейкам",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Перемещения по ячейкам",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 1,
        label: "Отчеты",
        childrenList: [
          {
            id: 0,
            label: "Регистр изменения остатков по ячейкам",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Остатки по ячейкам",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 2,
        label: "Рампа",
        childrenList: [
          {
            id: 0,
            label: "Типы интервала",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Группы рамп",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Рампы",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 3,
        label: "Ячейки",
        childrenList: [
          {
            id: 0,
            label: "Группы ячеек",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Ячейки",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
      {
        id: 4,
        label: "Справочники",
        childrenList: [
          {
            id: 0,
            label: "Операции",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
    ],
  },
  { id: 13, pic: chat, note: "Чат" },
  {
    id: 14,
    pic: lock,
    note: "Учетная запись",
    mainList: [
      {
        id: 0,
        label: "Сменить пользователя",
        childrenList: [
          {
            id: 0,
            label: "Выйти",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
    ],
  },
  { id: 15, pic: search, note: "Поиск" },
  {
    id: 16,
    pic: bi,
    note: "BI",
    mainList: [
      {
        id: 0,
        label: "Разделы",
        childrenList: [
          {
            id: 0,
            label: "Оборочиваемость",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 1,
            label: "Продажа (по чекам)",
            table: {
              columns: [],
              data: [],
            },
          },
          {
            id: 2,
            label: "Продажа (по строкам чеков)",
            table: {
              columns: [],
              data: [],
            },
          },
        ],
      },
    ],
  },
];
