import PropTypes from 'prop-types';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { SectionWrapper, Title } from './Section.styled';

export const Section = ({
  title,
  good,
  neutral,
  bad,
  options,
  onLeaveFeedback,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <>
        {title === 'Please leave feedback' && (
          <SectionWrapper>
            <Title>{title}</Title>
            <FeedbackOptions
              options={options}
              onLeaveFeedback={onLeaveFeedback}
            />
          </SectionWrapper>
        )}
      </>
      <>
        {title === 'Statistics' && (
          <SectionWrapper>
            <Title>{title}</Title>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </SectionWrapper>
        )}
      </>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
