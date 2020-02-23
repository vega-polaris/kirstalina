import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Tab} from '@material-ui/core';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

const transactionsDummy = [
  {action: 'SELL', amount: 2, paidPerShare: 6000, ticker: 'AAPL'},
  {action: 'BUY', amount: 5, paidPerShare: 5000, ticker: 'MSFT'},
  {action: 'BUY', amount: 37, paidPerShare: 7800, ticker: 'GOOGL'}
];
/**
 * COMPONENT
 */
export default class TransactionsWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('transactions wrapper mounted');
  }
  render() {
    const classes = {
      table: {
        minWidth: 650
      }
    };
    return (
      <div id="transactions-list-wrapper">
        <div id="transactions-list-header">
          <h1>Transactions</h1>
        </div>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ticker symbol</TableCell>
              <TableCell align="right">Action</TableCell>
              <TableCell align="right">Number of stocks</TableCell>
              <TableCell align="right">Total price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionsDummy.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {row.ticker}
                </TableCell>
                <TableCell align="right">{row.action}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">
                  {row.paidPerShare * 0.001 * row.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <hr />
      </div>
    );
  }
}

/*


<div className="transactions-div-wrapper">
          {transactionsDummy.map((transaction, index) => (
            <div>transaction {index}</div>
          ))}
        </div>
      */
