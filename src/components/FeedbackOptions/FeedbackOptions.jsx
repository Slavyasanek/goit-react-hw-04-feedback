import { Button, ButtonWrapper } from './FeedbackOptions.styled';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { BsEmojiNeutral } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addBad, addGood, addNeutral } from 'redux/statisticsSlice';
import { getStatistics } from 'redux/selectors';

export const FeedbackOptions = () => {
    const dispatch = useDispatch();
    const statistics = useSelector(getStatistics);
    const options = Object.keys(statistics);

    const onLeaveFeedback = option => {
        if (option === 'good') {
            dispatch(addGood());
        } else if (option === 'bad') {
            dispatch(addBad());
        } else if (option === 'neutral') {
            dispatch(addNeutral());
        }
    };

    let icon = null;
    return (
        <ButtonWrapper>
            {options.map(option => {
                switch (option) {
                    case 'good':
                        icon = <AiFillLike />
                        break;
                    case 'bad':
                        icon = <AiFillDislike />
                        break;
                    case 'neutral':
                        icon = <BsEmojiNeutral />
                        break;
                    default:
                        icon = null;
                        break;
                }
                return (
                    <Button
                        type='button'
                        onClick={() => onLeaveFeedback(option)}
                        key={option}
                        feedbackType={option}
                    >{icon}{option}</Button>
                )
            })}
        </ButtonWrapper>
    )
}