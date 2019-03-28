
import { sortReducer } from './reduce-sortfield';


it('First sort click', () => {
  const sortField = 'firstName';
  const state = sortReducer({}, sortField);
  
  expect(state.sortField).toBe(sortField);
  expect(state.sortDirection).toBe('asc');
}); 

it('should preserve sort field but flip sort direction', () => {
  const sortField = 'firstName';
  const state1 = sortReducer({}, sortField);

  const state2 = sortReducer(state1, sortField);

  expect(state2.sortField).toBe(sortField);
  expect(state2.sortDirection).toBe('desc');
  expect(state2.sortDirection).not.toBe(state1.sortDirection);
});

it('should change the sortField', () => {
  const sortField = 'firstName';
  const state1 = sortReducer({}, sortField);

  const sortFieldLater = 'lastName';
  const state2 = sortReducer(state1, sortFieldLater);
  expect(state1.sortField).toBe(sortField);
  expect(state2.sortField).toBe(sortFieldLater);
  expect(state1.sortField).not.toBe(state2.sortField);
  expect(state1.sortDirection).toBe(state2.sortDirection);
});

describe('sort direction', () => {
  let state1;

  beforeEach(() => {
    state1 = {
      sortField: 'firstName',
      sortDirection: 'asc'
    }
  });

  it('should change from asc to desc on second click of the same column', () => {
    const state2 = sortReducer(state1, state1.sortField);

    expect(state2.sortDirection).not.toBe(state1.sortDirection);
    expect(state2.sortDirection).toBe('desc');
    
  });

  it('should not change sortDirection if sortField changes', () => {
    const sortField = 'lastName'
    const state2 = sortReducer(state1, sortField);

    expect(state1.sortDirection).toBe('asc');
    expect(state2.sortDirection).toBe('asc');
    expect(state2.sortDirection).toBe(state1.sortDirection);

    const state3 = sortReducer(state2, sortField);
    const state4 = sortReducer(state3, 'firstName');

  })

})