import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListRow from './ListRow';
import * as lodash from 'lodash';

export default class PayeesList extends Component {
  render() {
    const { columnConfig, data, selectRow } = this.props;
    const fields = columnConfig.map(config => config.field);

    return (
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            {columnConfig.map(config => {
              const label = config.label || lodash.startCase(config.field);
              return <th key={label}>{label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {
            data.map(payee => <ListRow 
                                fields={fields} 
                                row={payee} 
                                selectRow={selectRow}
                                key={payee.id}/>)
          }
        </tbody>
      </table>
    );
  }
}

PayeesList.propTypes = {
  data: PropTypes.array.isRequired,
  // columnConfig: PropTypes.object.isRequired,
  columnConfig: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      label: PropTypes.string,
      sortable: PropTypes.bool,
    })
  ).isRequired,
  selectRow: PropTypes.func,
  sortData: PropTypes.func,
};

