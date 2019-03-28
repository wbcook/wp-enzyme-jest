
const initialState = {
  sortField: 'unsorted',
  sortDirection: 'asc'
};

export const sortDirections = {
  asc: 'asc',
  desc: 'desc'
};

export function sortReducer (state={}, sortField='') {
  let sortDirection = sortDirections.asc;
  if (state.sortField === sortField && state.sortDirection === sortDirections.asc) {
    sortDirection = sortDirections.desc;
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





