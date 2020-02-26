import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SinglePortfolioRow from './singlePortfolioRow';
import BuyStocksWrapper from './buyStocksWrapper';
import { connect } from 'react-redux';
import { getPortfolioThunkCreator } from '../store';

// const portfolioDummy = [
//   { amount: 2, curPrice: 6000, ticker: "AAPL" },
//   { amount: 5, curPrice: 5000, ticker: "MSFT" },
//   { amount: 37, curPrice: 7800, ticker: "GOOGL" }
// ];

/**
 * COMPONENT
 */
export class UnconnectedPortfolioWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getPortfolio(this.props.user.id);
  }

  render() {
    return (
      <div id="portfolio-page-wrapper">
        <div id="buy-stocks-placeholder">
          <BuyStocksWrapper />
        </div>
        <div id="portfolio-list-header">
          <h1>Portfolio</h1>
        </div>
        <Table className="table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ticker symbol</TableCell>
              <TableCell align="right">Number of stocks</TableCell>
              <TableCell align="right">Total worth</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.portfolio ? (
              this.props.portfolio.map((row, idx) => (
                <SinglePortfolioRow key={idx} row={row} />
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
    portfolio: state.portfolio.portfolio,
    user: state.user
  };
};

// make thunk creator accessible and trigger it on component did mount
const mapDispatchToProps = function(dispatch) {
  return {
    getPortfolio: userId => dispatch(getPortfolioThunkCreator(userId))
  };
};

const connectedPortfolioWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedPortfolioWrapper);

export default connectedPortfolioWrapper;
