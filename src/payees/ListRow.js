import React from 'react';
import * as lodash from 'lodash';

export default function ListRow({fields, row, selectRow}) {
  const cells = fields.map(field => (
    <td key={field}>{lodash.get(row, field)}</td>
  ));
  return (
    <tr onClick={() => selectRow(row)}>
      {cells}
    </tr>
  )
}


