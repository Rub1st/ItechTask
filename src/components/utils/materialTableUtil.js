import React, { forwardRef } from 'react'
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { connect } from "react-redux";

import { destroyData, AddToData } from "../../reduxMain/actions/dataActions";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

const MaterialTables = (props) => {
    const {state,isAdd = false} = props
    const checkIdes = (first,second,thrid) => props.ID.idTop === first && props.ID.idLeftField === second && props.ID.idLeft === thrid
    const add = isAdd ? {
        onRowAdd: (newData) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            {
              props.add(newData, state.path);
            }
            resolve();
          }, 1000);
        }),onRowUpdate:(newData, oldData) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            {
              props.destroy(oldData, state.path);
              props.add(newData, state.path);
            }
            resolve();
          }, 1000);
        }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
              setTimeout(() => {
                {
                  props.destroy(oldData, state.path);
                }
              resolve();
            }, 600);
        }),
      } : null
    const sumPretier = (data) => {
      return checkIdes(1,0,0) ?
      data.map(el => (
        {...el,
          summa_nds: createPrettySum(el.summa_nds),
          summa: createPrettySum(el.summa),
          summa_with_nds: createPrettySum(el.summa_with_nds),
          retail_summa: createPrettySum(el.retail_summa),
          record_summa: createPrettySum(el.record_summa),
          pre_assessment_summa: createPrettySum(el.pre_assessment_summa),
          write_down_summa: createPrettySum(el.write_down_summa),
        })) : checkIdes(1,1,0) ? data.map(el => (
          {...el,
            summa_with_nds: createPrettySum(el.summa_with_nds),
            summa_nds: createPrettySum(el.summa_nds),
          }
        )) : checkIdes(0,1,0) ? data.map(el => (
          {...el,
            price: createPrettySum(el.price),
            summa_nds: createPrettySum(el.summa_nds),
            cost: createPrettySum(el.cost),
            invoice_date: el.invoice_date == null ? '-' : el.invoice_date,
            }
        )) : checkIdes(0,1,5) ? data.map(el => (
          {...el,
           price: createPrettySum(el.invoice_product.price),
           wholesale_percent: createPrettySum(el.wholesale_percent),
           wholesale_value: createPrettySum(el.wholesale_value),
           commercial_percent: createPrettySum(el.commercial_percent),
           commercial_value: createPrettySum(el.commercial_value),
           nds_percent: createPrettySum(el.nds_percent),
           nds_value: createPrettySum(el.nds_value),
           retail_price: createPrettySum(el.retail_price),
           cost: createPrettySum(el.cost),
          }
        ))
        : data
    }

    return(
        <MaterialTable
            icons={tableIcons}
            title={state.label}
            columns={state.table.columns}
            data={sumPretier(props.ID.data)}
            editable={{...add}}
          />
    )
}

const createPrettySum = (num) => {
  let number = num.toString().split('.')
  number[1] = number.length > 1 ? number[1].length > 2 ? number[1].slice(0,2) :
              number[1].length < 2 ? number[1] + '0' : number[1] : '00'
  return number[0] + '.' + number[1]
}



export default connect(
    state => ({
        ID: state.idReducer,
    }),
    dispatch => ({
        add: (data, path) => dispatch(AddToData(data, path)),
        destroy: (data, path) => dispatch(destroyData(data, path)),
    })
)(MaterialTables);