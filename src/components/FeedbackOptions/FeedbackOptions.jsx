import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './FeedbackOptions.styled';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { BsEmojiNeutral } from 'react-icons/bs';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}