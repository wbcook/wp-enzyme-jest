
const initialState = {
  sortField: 'unsorted',
  sortDirection: 'asc'
};

export function sortReducer (state={}, sortField='') {
  let sortDirection = 'asc';
  if (state.sortField === sortField) {
    sortDirection = 'desc';
  }
  return {...state, sortField, sortDirection};
}


/* const state1 = sortReducer(initialState);

// Click on firstName
const state2 = sortReducer(state1, 'firstName');

// Click on lastName
const state3 = sortReducer(state2, 'firstName');
const state4 = sortReducer(state3, 'lastName');
 */





