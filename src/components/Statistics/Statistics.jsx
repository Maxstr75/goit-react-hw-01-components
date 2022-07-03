import { StatisticItem } from 'components';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <statisticTitle>{title}</statisticTitle>}
      <statistics>
        {stats.map(({ label, percentage, id }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </statistics>
    </>
  );
};
