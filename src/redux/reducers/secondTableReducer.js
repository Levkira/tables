import _ from 'lodash'
import {
    FETCH_SECOND_TABLE_REQUEST, FETCH_SECOND_TABLE_SUCCESS, FETCH_SECOND_TABLE_ERROR,
    CHANGE_SORT_SECOND, RESET_SECOND_TABLE, SEARCH_VALUE_SECOND, FILTER_SECOND_TABLE
} from "../actions/secondTableActions";


export default function secondTableReducer(state = {
    isLoading: false,
    items: [],
    rawData: [],
    sortColumn: null,
    sortDirection: null,
    searchValue: '',
    error: null
}, action) {
    switch (action.type) {
        case FETCH_SECOND_TABLE_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true
            }
        case FETCH_SECOND_TABLE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload,
                rawData: action.payload
            }
        case FETCH_SECOND_TABLE_ERROR:
            return {
                isLoading: false,
                items: [],
                error: action.payload
            }
        case CHANGE_SORT_SECOND:
            if (state.sortColumn === action.payload) {
                return {
                    ...state,
                    items: state.items.reverse(),
                    sortDirection:
                        state.sortDirection === 'ascending' ? 'descending' : 'ascending',
                }
            }
            return {
                ...state,
                sortColumn: action.payload,
                items: _.sortBy(state.items, [action.payload]),
                sortDirection: 'ascending',
            }
        case SEARCH_VALUE_SECOND:
            return {
                ...state,
                searchValue: action.payload
            }
        case FILTER_SECOND_TABLE:
            return {
                ...state,
                items: state.items.filter(item => item.email.toLowerCase().trim() === state.searchValue.toLowerCase().trim())
            }
        case RESET_SECOND_TABLE:
            return {
                ...state,
                items: state.rawData,
                searchValue: ''
            }
        default: return state;
    }
}