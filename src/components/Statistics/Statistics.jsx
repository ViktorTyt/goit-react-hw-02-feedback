// import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  StatisticsBox,
  StatisticsList,
  StatisticsItem,
  Total,
  Percentage,
  Value,
} from './Statistics.styled';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props.props;
    return (
      <StatisticsBox>
        <StatisticsList>
          <StatisticsItem>
            Good: <Value>{good}</Value>
          </StatisticsItem>
          <StatisticsItem>
            Neutral: <Value>{neutral}</Value>{' '}
          </StatisticsItem>
          <StatisticsItem>
            Bad: <Value>{bad} </Value>
          </StatisticsItem>
        </StatisticsList>
        <Total>
          Total: <Value>{total()}</Value>
        </Total>
        <Percentage>
          Positive feedback: <Value>{total() && positivePercentage()} %</Value>
        </Percentage>
      </StatisticsBox>
    );
  }
}
