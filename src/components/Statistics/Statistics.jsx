import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import { StatisticsList } from './Statistics.styled';
class Statistics extends Component {

    static propTypes = {
        options: PropTypes.shape({
            good: PropTypes.number.isRequired,
            bad: PropTypes.number.isRequired,
            neutral: PropTypes.number.isRequired,
        }).isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
    }

    render() {
        let { options, total, positivePercentage } = this.props;
        positivePercentage = positivePercentage + "%";
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
                value={positivePercentage}/>
            </StatisticsList>
        )
    }
}

export default Statistics;