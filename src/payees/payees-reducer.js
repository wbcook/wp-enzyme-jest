import { payeeActions } from './payees-actions';
import * as lodash from 'lodash';

export const initialState = {
  allIds: [],
  byId: {},
  criteria: {},
  selectedPayee: 0,
  sortDirection: 'asc',
  sortField: '',
  isLoading: false,
};

// Selectors, all start with 'get'
export const getPayees = state => Object.values(state.byId);
export const getSortedPayees = state =>
  lodash.orderBy(getPayees(state), state.sortField, state.sortDirection);
export const getSelectedPayee = state => state.byId[state.selectedPayee];

export const reducer = (state = initialState, { type, payload, data }) => {
  switch (type) {
    case 'AXIOS_LOAD':
    case 'AXIOS_LOAD_SUCCESS':
    case 'AXIOS_LOAD_FAIL':
    case payeeActions.LOAD_PAYEES:
    case payeeActions.LOAD_PAYEES_SUCCESS:
    case payeeActions.LOAD_PAYEES_ERROR:
    case payeeActions.SELECT_PAYEE:
    case payeeActions.SEARCH_PAYEES:
      return { ...state, ...payload };

    case payeeActions.SORT_PAYEES:
      let sortField = payload.sortField,
        sortDirection = 'asc';
      if (payload.sortDirection) {
        sortDirection = payload.sortDirection;
      } else if (
        payload.sortField === state.sortField &&
        state.sortDirection === 'asc'
      ) {
        sortDirection = 'desc';
      }

      return { ...state, sortField, sortDirection };

    default:
      return state;
  }
};
