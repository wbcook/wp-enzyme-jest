import {combineReducers} from 'redux';
import * as fromDemo from './redux/redux-demo';
import * as fromPayees from './payees/payees-reducer';

export const getValue = state => fromDemo.getValue(state.demo);
export const getPayees = state => fromPayees.getPayees(state.payees);
export const getSortedPayees = state => fromPayees.getSortedPayees(state.payees);
export const getSelectedPayee = state => fromPayees.getSelectedPayee(state.payees);

export const reducer = combineReducers({
  demo: fromDemo.reducer,
  payees: fromPayees.reducer,
});
