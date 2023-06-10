import styled from "styled-components"

export const StatisticsList = styled.ul`
display: flex;
flex-direction: row;
gap: 20px;
align-items: center;
justify-content: center;
`;

export const StatisticsOption = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 8px;
`

export const StatisticsValue = styled.p`
    text-transform: capitalize;
    font-size: 20px;
`

export const StatisticsInfo = styled.p`
border-radius: 50%;
background-color: #cfe2f3;
padding: 5px 10px;
`