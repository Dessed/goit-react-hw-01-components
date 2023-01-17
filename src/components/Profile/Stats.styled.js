import styled from 'styled-components';

export const Stats = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding-left: 0px;
`;

export const StatsList = styled.li`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 30px;
    
`;

export const StatsLabel = styled.span`
    font-size: 14px;
    margin-bottom: 5px;
    color: gray;
`;

export const StatsQuantity = styled.span`
    font-weight: bold;
`;