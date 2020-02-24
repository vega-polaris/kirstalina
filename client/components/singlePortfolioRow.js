import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const SinglePortfolioRow = props => {
  const { row } = props;
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {row.ticker}
      </TableCell>
      <TableCell align="right">{row.amount}</TableCell>
      <TableCell align="right">{row.curPrice * 0.001 * row.amount}</TableCell>
    </TableRow>
  );
};

export default SinglePortfolioRow;
