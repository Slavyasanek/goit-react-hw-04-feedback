import { Section } from './Section/Section'
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification.styled";
import { useSelector } from 'react-redux';
import { getSum } from 'redux/selectors';


export const App = () => {
  const total = useSelector(getSum);
  
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions/>
      </Section>
      <Section title="Statistics">
        {total === 0 ? (<Notification/>) : <Statistics/>}
      </Section>
    </>
  )
}