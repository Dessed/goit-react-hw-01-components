import styled from 'styled-components';

export const Section = styled.section`
    margin: 10px;
    padding: 10px;
    border: black solid 2px;
`;

export const TableHeader = styled.th`
    width: 200px;
    padding: 10px;
    text-transform: uppercase;
    font-size: 12px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    color: white;
    background-color: aqua;
`;

export const TableBody = styled.tbody`
    box-shadow: -1px 1px  0 rgba(0, 0, 0, 0.2), 1px 0 1px rgba(0, 0, 0, 0.2);
`;

export const TableString = styled.td`
    text-align: center;
    color: gray;
    box-shadow: 1px 0 0 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
`;