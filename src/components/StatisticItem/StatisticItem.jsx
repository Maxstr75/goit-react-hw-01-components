import PropTypes from 'prop-types';
import css from './StatisticItem.module.css';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">.{label}</span>
          <span class="percentage">{percentage}</span>
        </li>
        <li class="item">
          <span class="label">.{label}</span>
          <span class="percentage">{percentage}</span>
        </li>
        <li class="item">
          <span class="label">.{label}</span>
          <span class="percentage">{percentage}</span>
        </li>
        <li class="item">
          <span class="label">.{label}</span>
          <span class="percentage">{percentage}</span>
        </li>
      </ul>
    </section>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
