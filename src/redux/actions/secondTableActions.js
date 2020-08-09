import axios from 'axios';

export const FETCH_SECOND_TABLE_REQUEST = 'FETCH_SECOND_TABLE_REQUEST';
export const FETCH_SECOND_TABLE_SUCCESS = 'FETCH_SECOND_TABLE_SUCCESS';
export const FETCH_SECOND_TABLE_ERROR = 'FETCH_SECOND_TABLE_ERROR';
export const CHANGE_SORT_SECOND = 'CHANGE_SORT_SECOND';
export const SEARCH_VALUE_SECOND = 'SEARCH_VALUE_SECOND';
export const FILTER_SECOND_TABLE = 'FILTER_SECOND_TABLE';
export const RESET_SECOND_TABLE = 'RESET_SECOND_TABLE';

const fetchSecondTableRequest = () => ({
    type: FETCH_SECOND_TABLE_REQUEST
})

const fetchSecondTableSuccess = (response) => ({
    type: FETCH_SECOND_TABLE_SUCCESS,
    payload: response.data
})

const fetchSecondTableError = error => ({
    type: FETCH_SECOND_TABLE_ERROR,
    payload: error.response
})

export function fetchSecondTableData() {
    return dispatch => {
        dispatch(fetchSecondTableRequest())
        axios.get('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&adress=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
            .then(response => dispatch(fetchSecondTableSuccess(response)))
            .catch(error => dispatch(fetchSecondTableError(error)))
    }
}

export const sortColumnActionSecond = (column) => ({
    type: CHANGE_SORT_SECOND,
    payload: column
})

export const searchActionSecond = (value) => ({
    type: SEARCH_VALUE_SECOND,
    payload: value
})

export const filterSecondTable = () => ({
    type: FILTER_SECOND_TABLE
})

export const resetSecondTable = () => ({
    type: RESET_SECOND_TABLE
})