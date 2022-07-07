import PropTypes from 'prop-types';
import {
  StatisticsBox,
  StatisticsList,
  StatisticsItem,
  Total,
  Percentage,
  Value,
} from './Statistics.styled';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  message,
}) => {
  return total() ? (
    <StatisticsBox>
      <StatisticsList>
        <StatisticsItem>
          Good:<Value>{good}</Value>
        </StatisticsItem>
        <StatisticsItem>
          Neutral:<Value>{neutral}</Value>{' '}
        </StatisticsItem>
        <StatisticsItem>
          Bad:<Value>{bad} </Value>
        </StatisticsItem>
      </StatisticsList>
      <Total>
        Total:<Value>{total()}</Value>
      </Total>
      <Percentage>
        Positive feedback:<Value>{total() && positivePercentage()} %</Value>
      </Percentage>
    </StatisticsBox>
  ) : (
    <Notification message={'There is no feedback'} />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
