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
                { title: "Логин", field: "login" },
                { title: "Активность", field: "active" },
                { title: "Заблокировано", field: "block" },
                { title: "Последняя активность", field: "lastActive" },
                { title: "Организация", field: "organisation" },
              ],
              data: [],
            }, //+
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
            }, //+
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
                { title: "Наименование", field: "name" },
              ],
              data: [],
            },
          },
          {
            id: 2,
            label: "Цены",
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
            label: "Классификаторы",
            path: "manufactors",
            table: {
              columns: [
                { title: "Наименование", field: "name" },
              ],
              data: [],
            },
          },
        ], //+
      },
      {
        id: 2,
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
    ],
  },
  {
    id: 1,
    pic: purchase,
    note: "Закупки",
    mainList: [
      {
        id: 0,
        label: "Закупки",
        childrenList: [
          {
            id: 0,
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
                { title: "Код", field: "number" },
                { title: "Наименование", field: "seria" },
                { title: "Дата заказа", field: "dateOfStart" },
                { title: "Дата конца", field: "dateOfFinish" },
                { title: "Цена", field: "price" },
                { title: "Номер заказа", field: "numberOfOrder" },
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
        ],
      },
    ]
  },
  {
    id: 2,
    pic: stock,
    note: "Склад",
    mainList: [
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
        id: 8,
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
                { title: "Наименование", field: "label" },
              ],
              data: [],
            },
          },
        ],
      },
    ],
  },
];
