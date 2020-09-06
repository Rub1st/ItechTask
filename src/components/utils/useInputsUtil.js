import {useState} from 'react'

export const useCheckBox = (initialState) => {
    const [value, setValue] = useState(initialState);
    const handleChange = (e) => {
        setValue(e.target.checked);
    }
    return ({
        value,
        onChange: handleChange
    })
}

export const useInputText = (initialState) => {
    const [value, setValue] = useState();
    const handleChange = (e) => setValue(e.target.value);
    return ({
        value,
        onChange: handleChange
    })
}

export const useDateTime= (initialState) => {
    const [value, setValue] = useState();
    const handleChange = (e) => setValue(e.target.value);
    return ({
        value,
        onChange: handleChange
    })
}

export const useSelectBox = (initialState) => {
    const [value, setValue] = useState(initialState);
    const handleChange = (e) => setValue(e.target.value);
    return ({
        value,
        onChange: handleChange
    })
}