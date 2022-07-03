// import { render } from '@testing-library/react';
import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        <ul>
          {Object.keys(this.props).map(key => (
            <li key={key}>
              <button type="button" onClick={() => this.props.onChange(key)}>
                {key}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
