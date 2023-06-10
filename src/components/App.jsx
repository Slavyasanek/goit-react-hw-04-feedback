import { Component } from "react";
import Section from './Section/Section'
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification.styled";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = state => {
    this.setState(prevState => {
      return { [state]: prevState[state] + 1 }
    });
  };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    } else {
      return Math.round(good * 100 / total)
    }
  }
  render() {
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (<Notification message="There is no feedback"/>) : 
          <Statistics
          options={this.state}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}/>}
        </Section>
      </>
    )
  }
}