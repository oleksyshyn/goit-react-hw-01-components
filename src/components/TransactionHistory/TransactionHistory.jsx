import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transaction_history}>
            <thead>
                <tr className={css.table_title}>
                    <th className={css.table_title_cell}>Type</th>
                    <th className={css.table_title_cell}>Amount</th>
                    <th className={css.table_title_cell}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr className={css.table_row} key={id}>
                        <td className={css.table_cell}>{type}</td>
                        <td className={css.table_cell}>{amount}</td>
                        <td className={css.table_cell}>{currency}</td>
                    </tr>
                ))}
    
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
}