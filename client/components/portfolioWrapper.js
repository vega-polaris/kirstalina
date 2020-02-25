import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SinglePortfolioRow from './singlePortfolioRow';

const portfolioDummy = [
  {amount: 2, curPrice: 6000, ticker: 'AAPL'},
  {amount: 5, curPrice: 5000, ticker: 'MSFT'},
  {amount: 37, curPrice: 7800, ticker: 'GOOGL'}
];
/**
 * COMPONENT
 */
export default class PortfolioWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('portfolio wrapper mounted');
  }
  render() {
    const classes = {
      table: {
        minWidth: 650
      }
    };
    return (
      <div id="portfolio-list-wrapper">
        <div id="portfolio-list-header">
          <h1>Portfolio</h1>
        </div>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ticker symbol</TableCell>
              <TableCell align="right">Number of stocks</TableCell>
              <TableCell align="right">Total worth</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {portfolioDummy.map((row, idx) => (
              <SinglePortfolioRow key={idx} row={row} />
            ))}
          </TableBody>
        </Table>
        <hr />
      </div>
    );
  }
}

/*
            {portfolioDummy.map((row, idx) => (
              <SingleTransaction key={idx} row={row} />
            ))}
            */
