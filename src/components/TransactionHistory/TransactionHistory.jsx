import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.headerCol}>Type</th>
          <th className={css.headerCol}>Amount</th>
          <th className={css.headerCol}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id} className={css.row}>
            <td className={css.col}>{transaction.type}</td>
            <td className={css.col}>{transaction.amount}</td>
            <td className={css.col}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
