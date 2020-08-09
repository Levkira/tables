import axios from 'axios';

export const FETCH_FIRST_TABLE_REQUEST = 'FETCH_FIRST_TABLE_REQUEST';
export const FETCH_FIRST_TABLE_SUCCESS = 'FETCH_FIRST_TABLE_SUCCESS';
export const FETCH_FIRST_TABLE_ERROR = 'FETCH_FIRST_TABLE_ERROR';
export const CHANGE_SORT_FIRST = 'CHANGE_SORT_FIRST';
export const SEARCH_VALUE_FIRST = 'SEARCH_VALUE_FIRST';
export const FILTER_FIRST_TABLE = 'FILTER_FIRST_TABLE';
export const RESET_FIRST_TABLE = 'RESET_FIRST_TABLE';
export const SELECT_PAGE = 'SELECT_PAGE';

const fetchFirstTableRequest = () => ({
    type: FETCH_FIRST_TABLE_REQUEST
})

const fetchFirstTableSuccess = (response) => ({
    type: FETCH_FIRST_TABLE_SUCCESS,
    payload: response.data
})

const fetchFirstTableError = error => ({
    type: FETCH_FIRST_TABLE_ERROR,
    payload: error.response
})

export function fetchFirstTableData() {
    return dispatch => {
        dispatch(fetchFirstTableRequest())
        axios.get('http://www.filltext.com/?rows=300&projectId=%7Bnumber%7C1000%7D&title=%7Bbusiness%7D&description=%7Blorem%7C32%7D&authorId=%7Bnumber%7C1000%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&billing=%7BccNumber%7CDISC%7D')
            .then(response => dispatch(fetchFirstTableSuccess(response)))
            .catch(error => dispatch(fetchFirstTableError(error)))
    }
}

export const sortColumnActionFirst = (column) => ({
    type: CHANGE_SORT_FIRST,
    payload: column
})

export const searchActionFirst = (value) => ({
    type: SEARCH_VALUE_FIRST,
    payload: value
})

export const filterFirstTable = () => ({
    type: FILTER_FIRST_TABLE
})

export const resetFirstTable = () => ({
    type: RESET_FIRST_TABLE
})

export const selectPage = (page) => ({
    type: SELECT_PAGE,
    payload: page
})