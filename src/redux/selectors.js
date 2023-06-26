export const getStatistics = state => state.statistics;

export const getSum = ({statistics: {good, neutral, bad}}) => good + bad + neutral

export const getPositivePercentage = state => {
    const total = getSum(state)
    if (total === 0) {
        return 0;
      } else {
        return Math.round(state.statistics.good * 100 / total);
      }
}


