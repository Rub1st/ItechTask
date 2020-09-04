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
    path: 'guides',
    mainList: [
      {
        id: 0,
        label: "Основные сущности",
        childrenList: [
          {
            id: 0,
            label: "Организации",
            path: "guides/organizations",
            table: {
              columns: [
                { title: "Наименование", field: "full_name" },
                { title: "Короткое имя", field: "short_name" },
                { title: "УНП", field: "unp" },
                { title: "Форма собственности", field: "ownership_form.name" },
                { title: "Группа организаций", field: "organization_group" },
                { title: "Юридический адрес", field: "legal_address" },
                { title: "Телефон/факс", field: "phone_or_fax" },
                { title: "E-mail", field: "email" },
                {
                  title: "Явл. поставшиком",
                  field: "is_provider",
                  type: "boolean",
                },
                {
                  title: "Явл. компанией",
                  field: "is_company",
                  type: "boolean",
                },
                {
                  title: "Явл. покупателем",
                  field: "is_buyer",
                  type: "boolean",
                },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Формы собственности",
            path: "guides/ownership_forms",
            table: {
              columns: [
                { title: "Наименование", field: "name" },
              ],
              data: [],
            },
          }
        ],
      },
      {
        id: 1,
        label: "Товар",
        childrenList: [
          {
            id: 0,
            label: "Товары",
            path: "guides/products",
            table: {
              columns: [
                { title: "Штрихкод", field: "code" },
                { title: "Наименование", field: "full_name" },
                { title: "Короткое имя", field: "short_name" },
                { title: "Единица измерения", field: "unit.full_name" },
                { title: "Цена", field: "price" },
                { title: "Рейтинг НДС", field: "rate_nds" },
                { title: "Сумма НДС", field: "summa_nds" },
                { title: "Стоимость", field: "cost" }
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Товарные группы",
            path: "guides/p_groups",
            table: {
              columns: [{ title: "Наименование", field: "name" }],
              data: [],
            },
          },
          {
            id: 2,
            label: "Дополнительные группы",
            path: "guides/p_subgroups",
            table: {
              columns: [{ title: "Наименование", field: "name" },
                        { title: "Группа", field: "groupName"}],
              data: [],
            },
          },
          {
            id: 3,
            label: "Eдиницы измерения",
            path: "guides/units",
            table: {
              columns: [{ title: "Короткое наименование", field: "short_name" },
                        { title: "Полное наименование", field: "full_name"}],
              data: [],
            },
          },
          {
            id: 4,
            label: "Цены",
            path: 'Nujno razobratsya',
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
            table1: {
              columns: [],
              data: [],
            },
          },
          {
            id: 5,
            label: "Классификаторы",
            path: 'Nujno razobratsya',
            table: {
              columns: [{ title: "Подгруппа", field: "ProductSubgroupName" },
                        { title: "Продукт", field: "productName"}],
              data: [],
            },
          },
        ],
      },
      {
        id: 2,
        label: "Валюты и курсы",
        childrenList: [
          {
            id: 0,
            label: "Валюты",
            path: 'guides/currencies',
            table: {
              columns: [{ title: "Короткое наименование", field: "short_name" },
                        { title: "Полное наименование", field: "full_name"}],
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
    path: 'customs',
    mainList: [
      {
        id: 0,
        label: "Закупки",
        childrenList: [
          {
            id: 0,
            label: "Накладные",
            path: 'customs/invoices',
            table: {
              columns: [
                { title: "Закрыт", field: "is_closed", type: "boolean" },
                { title: "Проведен", field: "is_conducted", type: "boolean" },
                { title: "Серия/Номер", field: "series_and_number" },
                { title: "Дата и время", field: "date_and_time" },
                {
                  title: "Продажа на комиссию",
                  field: "selling_on_commission",
                },
                { title: "Сумма", field: "summa" },
                { title: "Сумма НДС", field: "summa_ndc" },
                { title: "Сумма с НДС", field: "summa_with_ndc" },
                { title: "Сумма (учетная)", field: "record_summa" },
                { title: "Сумма розничная", field: "retail_summa" },
                { title: "Сумма дооценки", field: "pre_assessment_summa" },
                { title: "Сумма списания", field: "write_down_summa" },
                { title: "Примечание", field: "note" },
                { title: "Операция", field: "operation.name" },
                { title: "Валюта", field: "currency.full_name" },
                { title: "Соглашение", field: "agreement.name" },
                {
                  title: "Статус печати чека",
                  field: "status_of_price_tag_printing.name",
                },
                { title: "Статус приемки", field: "status_of_acceptance.name" },
                {
                  title: "Статус загрузки оборудования",
                  field: "status_of_booting_in_equipment.name",
                },
                {
                  title: "Номер договора",
                  field: "contract_series_and.number",
                },
                { title: "Поставщик", field: "provider.full_name" },
                { title: "Покупатель", field: "customer.full_name" },
                { title: "Склад поставщика", field: "warehouse.address" },
                { title: "Склад покупателя", field: "warehouse.address" },
                { title: "Кол-во строк", field: "strings_count" },
                { title: "Кол-во (всего)", field: "total_count" },
                { title: "Сумма", field: "count_all" },
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
            label: "Накладные",
            path: 'invoices',
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
            label: "Акты расхождений",
            path: 'act_of_discrepancies',
            table: {
              columns: [
                { title: "Закрыто", field: "close", type: "boolean" },
                { title: "Проведен", field: "is_conducted", type: "boolean" },
                { title: "Серия/Номер", field: "series_and_number" },
                { title: "Дата и время", field: "date_and_time" },
                { title: "Кол-во строк", field: "strings_count" },
                { title: "Кол-во (всего)", field: "total_count" },
                { title: "Сумма НДС", field: "summa_ndc" },
                { title: "Сумма с НДС", field: "summa_with_ndc" },
                { title: "Примечание", field: "note" },
                { title: "Поставщик", field: "provider" },
                { title: "Покупатель", field: "customer" },
                { title: "Операция", field: "operation_name" },
                { title: "Валюта", field: "currency_name" },
                {
                  title: "Номер договора",
                  field: "contract_series_and_number",
                },
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
            label: "Типы соглашений",
          
            path: 'customs/agreements',
            table: {
              columns: [
                { title: "Наименование", field: "name" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Виды операций",
            path: 'customs/operations',
            table: {
              columns: [
                { title: "Наименование", field: "name" },
              ],
              data: [],
            },
          },
          {
            id: 2,
            label: "Статусы приемки",
            path: 'customs/status_of_acceptances',
            table: {
              columns: [
                { title: "Наименование", field: "name" },
              ],
              data: [],
            },
          },
          {
            id: 3,
            label: "Статусы загрузки в оборудование",
            path: 'customs/status_of_booting_in_equipments',
            table: {
              columns: [
                { title: "Наименование", field: "name" },
              ],
              data: [],
            },
          },
          {
            id: 4,
            label: "Статусы печати чека",
            path: 'customs/status_of_price_tag_printings',
            table: {
              columns: [
                { title: "Наименование", field: "name" },
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
    pic: stock,
    note: "Склад",
    path: 'warehouses',
    mainList: [
      {
        id: 0,
        label: "Отгрузки",
        childrenList: [
          {
            id: 0,
            label: "Поставки",
            path: 'Nujno produmat chto-to',
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
            path: 'Nujno produmat chto-to',
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
        label: "Справочники",
        childrenList: [
          {
            id: 0,
            label: "Договоры",
            path: "warehouses/contracts",
            table: {
              columns: [
                { title: "Организация (поставщик)", field: "provider" },
                { title: "Адрес поставщика", field: "providerAddress" },
                { title: "Огранизация (покупатель)", field: "customer" },
                { title: "Адрес покупателя", field: "customerAddress" },
                { title: "Код", field: "number" },
                { title: "Серия/Номер", field: "series_and_number" },
                { title: "Дата создания", field: "created_at" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Склады",
            path: 'warehouses/warehouses',
            table: {
              columns: [{ title: "Организация", field: "organizationName" },
                        { title: "Адрес", field: "address"}],
              data: [],
            },
          },
          {
            id: 2,
            label: "Тип договора",
            path: 'warehouses/type_of_contracts',
            table: {
              columns: [{ title: "Наименование", field: "name" }],
              data: [],
            },
          },
          {
            id: 3,
            label: "Вид обмена",
            path: 'warehouses/type_of_exchanges',
            table: {
              columns: [{ title: "Наименование", field: "name" }],
              data: [],
            },
          },
          {
            id: 4,
            label: "Условия оплаты",
            path: 'warehouses/type_of_payments',
            table: {
              columns: [{ title: "Наименование", field: "name" }],
              data: [],
            },
          },
        ],
      },
    ],
  },
];
