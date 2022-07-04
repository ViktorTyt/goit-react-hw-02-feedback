// import { render } from '@testing-library/react';
import { Component } from 'react';
import { ButtonBox, Button } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props.props;
    return (
      <ButtonBox>
        {Object.keys(options).map(key => (
          <Button type="button" key={key} onClick={() => onLeaveFeedback(key)}>
            {key}
          </Button>
        ))}
      </ButtonBox>
    );
  }
}
