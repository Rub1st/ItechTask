import React, {useState} from 'react'

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const Inputs = ({type, name, collection = []}) => {
    switch(type){
        case "input": {
            return <TextInput name={name}/>
        }
        case "select": {
            return <SelectInput name={name} collection={collection}/>
        }
        case "boolean": {
            return <CheckInput name={name}/>
        }
        default:
            return null
    }
}

export default Inputs;

class TextInput extends React.Component {
    state = {
        value: ''
    }

    onChangeValue = (e) => this.setState({value: e.targer.value})

    render() {
        const name = this.props;
        return(
            <>
                <InputLabel id="demo-simple-select-label">{name}</InputLabel>
                <input value={this.state.value} onChange={this.onChangeValue}/>
            </>
        )
    }
  }
  
  class SelectInput extends React.Component {
    state = {
        value: this.props.collection[0].value
    }

    onChangeValue = (value) => this.setState({value: value});

    render(){
        const {name, collection} = this.props;
        return(
            <div>
              <FormControl>
              <InputLabel id="demo-simple-select-label">{name}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.value}
                  onChange={this.onChangeValue}
                >
                  {collection.map((el) => (
                    <MenuItem value={el}>{el.value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
        )
    }
  }
  
  class CheckInput extends React.Component {
      state = {
          value: false
      };

      onChangeValue = (value) => this.setState({value: value}); 

      render(){
          const {name} = this.props;
        return (
            <>
                <InputLabel id="demo-simple-select-label">{name}</InputLabel>
                <input type="checkbox" value={this.state.value} onChange={this.onChangeValue}/>
            </>
        )
      }
  }