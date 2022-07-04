// import PropTypes from 'prop-types';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Component } from 'react';
import { SectionWrapper, Title } from './Section.styled';

export class Section extends Component {
  render() {
    return (
      <>
        {this.props.title === 'Statistics' && (
          <SectionWrapper>
            <Title>{this.props.title}</Title>
            <Statistics props={this.props} />
          </SectionWrapper>
        )}

        {this.props.title === 'Please leave feedback' && (
          <SectionWrapper>
            <Title>{this.props.title}</Title>
            <FeedbackOptions props={this.props} />
          </SectionWrapper>
        )}
      </>
    );
  }
}
