import React from 'react';
import {connect} from 'react-redux';

const transactionsDummy = [
  {action: 'SELL', amount: 2, paidPerShare: 6000},
  {action: 'BUY', amount: 5, paidPerShare: 5000},
  {action: 'BUY', amount: 37, paidPerShare: 7800}
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
    return (
      <div id="transactions-list-wrapper">
        <div id="transactions-list-header">
          <h1>Transactions</h1>
        </div>
        <hr />
        <div className="transactions-div-wrapper">
          {transactionsDummy.map((transaction, index) => (
            <div>transaction {index}</div>
          ))}
        </div>
      </div>
    );
  }
}

/*



            ))}
          </div>

        </div>
      </div>
      */
