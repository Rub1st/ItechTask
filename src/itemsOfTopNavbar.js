//import dashboard from "./icons/dashboard.png";
import catalog from "./icons/catalog.png";
import purchase from "./icons/purchase.png";
import stock from "./icons/stock.png";
// import sale from "./icons/sale.png";
// import retail from "./icons/retail.png";
// import finance from "./icons/finance.png";
// import priceList from "./icons/priceList.png";
// import machinery from "./icons/machinery.png";
// import transport from "./icons/transport.png";
// import customs from "./icons/customs.png";
// import manufacturing from "./icons/manufacturing.png";
// import wms from "./icons/wms.png";
// import chat from "./icons/chat.png";
// import lock from "./icons/lock.png";
// import search from "./icons/search.png";
// import bi from "./icons/bi.png";

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
            label: "Товары прихода",
            path: "guides/invoice_products",
            table: {
              columns: [
                {title: "Подгруппа", field: "p_subgroup.name"},
                {title: "Номер накладной ", field: "invoice.series_and_number"},
                {title: "Полное имя", field: "full_name"},
                {title: "Короткое имя", field: "short_name"},
                {title: "Код", field: "code"},
                {title: "Цена", field: "price"},
                {title: "Сумма НДС", field: "summa_nds"},
                {title: "Стоимость", field: "cost"},
                {title: "Рейтинг НДС", field: "rate_vat.rate"},
                {title: "Ед. измерения", field: "unit.short_name"},
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Акты расхождения товары",
            path: "guides/act_of_discrepancies_products",
            table: {
              columns: [
                {title: "Код", field: "code"},
                {title: "Акт расхождения", field: "act_of_discrepancy.series_and_number"},
                {title: "Продукт", field: "invoice_product.full_name"},
              ],
              data: []
            }
          },
          {
            id: 2,
            label: "Товарные группы",
            path: "guides/p_groups",
            table: {
              columns: [{ title: "Наименование", field: "name" }],
              data: [],
            },
          },
          {
            id: 3,
            label: "Дополнительные группы",
            path: "guides/p_subgroups",
            table: {
              columns: [{ title: "Наименование", field: "name" },
                        { title: "Группа", field: "p_group.id"}],
              data: [],
            },
          },
          {
            id: 4,
            label: "Eдиницы измерения",
            path: "guides/units",
            table: {
              columns: [{ title: "Короткое наименование", field: "short_name" },
                        { title: "Полное наименование", field: "full_name"},
                        { title: "Граммы", field: "gramms"}
                      ],
              data: [],
            },
          },
          {
            id: 5,
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
            id: 6,
            label: "Рейтинги НДС",
            path: "guides/rate_vats",
            table: {
              columns: [
                { title: "Значение", field: "rate" },
              ],
              data: [],
            },
          }
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
                { title: "Сумма НДС", field: "summa_nds" },
                { title: "Сумма с НДС", field: "summa_with_nds" },
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
                  field: "contract.series_and_number",
                },
                { title: "Поставщик", field: "contract.provider.full_name" },
                { title: "Покупатель", field: "contract.customer.full_name" },
                { title: "Кол-во строк", field: "strings_count" },
                { title: "Кол-во (всего)", field: "total_count" },
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
            label: "Акты расхождений",
            path: 'customs/act_of_discrepancies',
            table: {
              columns: [
                { title: "Закрыто", field: "is_closed", type: "boolean" },
                { title: "Проведен", field: "is_conducted", type: "boolean" },
                { title: "Серия/Номер", field: "series_and_number" },
                { title: "Дата и время", field: "date_and_time" },
                { title: "Кол-во строк", field: "strings_count" },
                { title: "Кол-во (всего)", field: "total_count" },
                { title: "Сумма НДС", field: "summa_nds" },
                { title: "Сумма с НДС", field: "summa_with_nds" },
                { title: "Примечание", field: "note" },
                { title: "Поставщик", field: "contract.provider_id" },
                { title: "Склад поставщика", field: "provider_warehouse.address" },
                { title: "Склад покупателя", field: "customer_warehouse.address" },
                { title: "Покупатель", field: "contract.customer_id" },
                { title: "Операция", field: "operation.name" },
                { title: "Валюта", field: "currency.full_name" },
                { title: "Направление документа", field: "invoice_type.name"},
                {
                  title: "Номер ТТН",
                  field: "invoice.series_and_number",
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
          {
            id: 5,
            label: "Направления документа",
            path: 'utils/invoice_types',
            table: {
              columns: [
                { title: "Наименование", field: "name"}
              ],
              data: []
            }
          }
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
                { title: "Серия/Номер", field: "series_and_number" },
                { title: "Организация (поставщик)", field: "provider.full_name" },
                { title: "Адрес поставщика", field: "provider.legal_address" },
                { title: "Огранизация (покупатель)", field: "customer.full_name" },
                { title: "Адрес покупателя", field: "customer.legal_address" },
                { title: "Действует с", field: "valid_from" },
                { title: "Действует по", field: "valid_for" },
                { title: "Валюта", field: "currency.full_name" },
                { title: "Примечание", field: "note" },
                { title: "Тип оплаты", field: "type_of_payment.name" },
                { title: "Тип обмена", field: "type_of_exchange.name" },
                { title: "Тип договора", field: "type_of_contract.name" },
              ],
              data: [],
            },
          },
          {
            id: 1,
            label: "Склады",
            path: 'warehouses/warehouses',
            table: {
              columns: [{ title: "Организация", field: "organization.full_name" },
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
