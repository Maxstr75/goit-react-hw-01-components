import { randomColor } from 'helpers/randomColor';
import PropTypes from 'prop-types';
import {
  StatisticsCard,
  Title,
  StatList,
  StatItem,
  LineText,
} from './Statistics.styled';

const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <StatisticsCard>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} backgroundColor={randomColor()}>
            <LineText>{label}</LineText>
            <LineText>{percentage}</LineText>
          </StatItem>
        ))}
      </StatList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Statistics;
