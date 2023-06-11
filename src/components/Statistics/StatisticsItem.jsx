import PropTypes from 'prop-types';
import { StatisticsInfo, StatisticsOption, StatisticsValue } from "./Statistics.styled"

export const StatisticsItem = ({option, value}) => {
    return (
        <StatisticsOption>
            <StatisticsValue>{option}</StatisticsValue>
            <StatisticsInfo>{value}</StatisticsInfo>
        </StatisticsOption>
    )
}

StatisticsItem.propTypes = {
    option: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}