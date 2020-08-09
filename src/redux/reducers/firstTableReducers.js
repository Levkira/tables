import _ from 'lodash'
import {
    FETCH_FIRST_TABLE_REQUEST, FETCH_FIRST_TABLE_SUCCESS, FETCH_FIRST_TABLE_ERROR,
    CHANGE_SORT_FIRST, SEARCH_VALUE_FIRST, FILTER_FIRST_TABLE, RESET_FIRST_TABLE, SELECT_PAGE
} from "../actions/firstTableActions";


export default function firstTableReducer(state = {
    isLoading: false,
    items: [],
    rawData: [],
    sortColumn: null,
    sortDirection: null,
    searchValue: '',
    error: null,
    currentPage: 1,
    perPage: 20
}, action) {
    switch (action.type) {
        case FETCH_FIRST_TABLE_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true
            }
        case FETCH_FIRST_TABLE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload,
                rawData: action.payload
            }
        case FETCH_FIRST_TABLE_ERROR:
            return {
                isLoading: false,
                items: [],
                error: action.payload
            }
        case CHANGE_SORT_FIRST:
            if (state.sortColumn === action.payload) {
                return {
                    ...state,
                    items: state.items.reverse(),
                    currentPage: 1,
                    sortDirection:
                        state.sortDirection === 'ascending' ? 'descending' : 'ascending',
                }
            }
            return {
                ...state,
                sortColumn: action.payload,
                items: _.sortBy(state.items, [action.payload]),
                sortDirection: 'ascending',
                currentPage: 1
            }
        case SEARCH_VALUE_FIRST:
            return {
                ...state,
                searchValue: action.payload
            }
        case FILTER_FIRST_TABLE:
            return {
                ...state,
                currentPage: 1,
                items: state.items.filter(item => item.title.toLowerCase().trim() === state.searchValue.toLowerCase().trim())
            }
        case RESET_FIRST_TABLE:
            return {
                ...state,
                items: state.rawData,
                searchValue: '',
                currentPage: 1
            }
        case SELECT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default: return state;
    }
}