import PropTypes from 'prop-types';
import css from './StatisticItem.module.css';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className={css.class__List}>
        <li className="item">
          <span className={css.label}>.{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li>
        <li className="item">
          <span className="label">.{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li className="item">
          <span className="label">.{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li className="item">
          <span className="label">.{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
      </ul>
    </section>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
