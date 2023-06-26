import { StatisticsItem } from './StatisticsItem';
import { StatisticsList } from './Statistics.styled';
import { useSelector } from 'react-redux';
import { getPositivePercentage, getStatistics, getSum} from 'redux/selectors';

export const Statistics = () => {
    const options = useSelector(getStatistics);
    const total = useSelector(getSum);
    const positivePercentage = useSelector(getPositivePercentage); 

    return (
        <StatisticsList>
                {Object.entries(options).map(([key, value]) => {
                    return (<StatisticsItem key={key} option={key} value={value} />)
                })}
                <StatisticsItem
                key="total"
                option="total"
                value={total}
                />
                <StatisticsItem
                key="positivePrcentage"
                option="Positive percentage"
                value={`${positivePercentage}%`}/>
            </StatisticsList>
    )
}
