import {
    SET_ID_TOP_BAR,
    SET_ID_LEFT_BAR,
    SET_ID_LEFT_FIELD
} from '../../constants'

export const setIdTopBar = (newId) => ({
    type: SET_ID_TOP_BAR,
    value: newId
})

export const setIdLeftBar = (newId) => ({
    type: SET_ID_LEFT_BAR,
    value: newId
})

export const setIdLeftField = (newId) => ({
    type: SET_ID_LEFT_FIELD,
    value: newId
})