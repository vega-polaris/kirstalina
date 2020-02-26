import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SingleTransaction from './singleTransaction';
import { getUserTransactionsThunkCreator } from '../store';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
export class UnconnectedTransactionsWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUserTransactions(this.props.user.id);
  }
  render() {
    const classes = {
      table: {
        minWidth: 650
      }
    };
    console.log(this.props, 'props in transactions wrapper');
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
              <TableCell align="right">Total paid</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.transactions ? (
              this.props.transactions.map((row, idx) => (
                <SingleTransaction key={idx} row={row} />
              ))
            ) : (
              <TableRow />
            )}
          </TableBody>
        </Table>
        <hr />
      </div>
    );
  }
}

// once the fetch transactions thunk has been created, put its result into this component's props
const mapStateToProps = function(state) {
  return {
    transactions: state.transactions.transactions,
    user: state.user
  };
};

// make thunk creator accessible and trigger it on component did mount
const mapDispatchToProps = function(dispatch) {
  return {
    getUserTransactions: userId =>
      dispatch(getUserTransactionsThunkCreator(userId))
  };
};

const connectedTransactionsWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedTransactionsWrapper);

export default connectedTransactionsWrapper;
