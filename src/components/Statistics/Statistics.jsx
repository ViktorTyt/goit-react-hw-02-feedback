// import PropTypes from 'prop-types';
import { Component } from 'react';

export class Statistics extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Good: {this.props.good}</li>
          <li>Neutral: {this.props.neutral} </li>
          <li>Bad: {this.props.bad} </li>
        </ul>
        <p>Total: {this.props.countTotalFeedback()}</p>
        <p>
          Positive feedback: {''}
          {this.props.countTotalFeedback() &&
            this.props.countPositiveFeedbackPercentage()}
          %
        </p>
      </div>
    );
  }
}
