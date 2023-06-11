import { useState } from 'react';

import {Section} from './Section/Section'
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification.styled";


export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onLeaveFeedback = option => {
    if (option === 'good') {
      setGood(good + 1);
    } else if (option === 'bad') {
      setBad(bad + 1);
    } else if (option === 'neutral') {
      setNeutral(neutral + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    if (total === 0) {
      return 0;
    } else {
      return Math.round(good * 100 / total);
    }
  }

  let options = {good, bad, neutral};

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (<Notification message="There is no feedback" />) :
          <Statistics
            options={options}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} />}
      </Section>
    </>
  )
}