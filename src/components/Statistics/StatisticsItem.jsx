import { StatisticsInfo, StatisticsOption, StatisticsValue } from "./Statistics.styled"

export const StatisticsItem = ({option, value}) => {
    return (
        <StatisticsOption>
            <StatisticsValue>{option}</StatisticsValue>
            <StatisticsInfo>{value}</StatisticsInfo>
        </StatisticsOption>
    )
}