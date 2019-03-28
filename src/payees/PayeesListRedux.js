import React from 'react';
import { connect } from 'react-redux';
import { getPayees } from '../app-reducer';
import PayeesList from './PayeesList';
import { selectPayee } from './payees-actions';
import Spinner from '../common/Spinner';

const PayeesListRedux = (props) => {
  const {data} = props;
  let component = <div className="text-center"><Spinner size="6x"/></div>;

  if (data.length > 0) {
    component = <PayeesList {...props} />
  }

  return component;
}

const mapStateToProps = (state, ownProps) => ({
  data: getPayees(state),
  columnConfig: ownProps.columnConfig
});

const mapDispatchToProps = dispatch => ({
  selectRow: payee => dispatch(selectPayee(payee))
})

export default connect(mapStateToProps, mapDispatchToProps)(PayeesListRedux);
