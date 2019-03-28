import { dao } from './payees-dao';

export const payeeActions = {
  LOAD_PAYEES: 'LOAD_PAYEES',
  LOAD_PAYEES_SUCCESS: 'LOAD_PAYEES_SUCCESS',
  LOAD_PAYEES_ERROR: 'LOAD_PAYEES_ERROR',
  SELECT_PAYEE: 'SELECT_PAYEE',
  SEARCH_PAYEES: 'SEARCH_PAYEES',
  SORT_PAYEES: 'SORT_PAYEES',
};

export const requestPayees = () => ({
  type: payeeActions.LOAD_PAYEES,
  payload: {
    isLoading: true,
    error: null,
  },
});

export const receivePayees = payees => {
  const byId = {};
  const allIds = [];
  payees.forEach(payee => {
    byId[payee.id] = payee;
    allIds.push(payee.id);
  });
  return {
    type: payeeActions.LOAD_PAYEES_SUCCESS,
    payload: {
      isLoading: false,
      byId,
      allIds,
    },
  };
};

export const errorPayees = error => ({
  type: payeeActions.LOAD_PAYEES_ERROR,
  payload: {
    isLoading: false,
    error,
  },
});

export const fetchWithThunk = () => {
  return dispatch => {
    dispatch(requestPayees());
    return dao
      .search()
      .then(payees => dispatch(receivePayees(payees)))
      .catch(error => dispatch(errorPayees(error)));
  };
};

export const fetchWithAxios = () => ({
  type: 'AXIOS_LOAD',
  payload: {
    request: {
      url: '/payees'
    }
  }
});

export const selectPayee = id => ({
  type: payeeActions.SELECT_PAYEE,
  payload: {
    selectedPayee: id,
  },
});

export const searchPayees = criteria => ({
  type: payeeActions.SEARCH_PAYEES,
  payload: { criteria },
});

export const sortPayees = (sortField, sortDirection) => ({
  type: payeeActions.SORT_PAYEES,
  payload: {
    sortField,
    sortDirection,
  },
});
