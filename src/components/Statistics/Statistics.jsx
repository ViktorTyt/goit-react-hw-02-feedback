import PropTypes from 'prop-types';
import {
  StatisticsBox,
  StatisticsList,
  StatisticsItem,
  Total,
  Percentage,
  Value,
  Message,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
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
    <Message>No feedback messages</Message>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
