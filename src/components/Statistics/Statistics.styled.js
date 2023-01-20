import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    padding: 10px;
    border: black solid 2px;
`;

export const Title = styled.h2`
    color: gray;
`;

export const StatList = styled.ul`
    display: flex;
    text-align: center;
    margin: 0;
    padding: 0;
`;


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
  }

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 45px;
    padding: 10px;
    background-color: ${getRandomColor};
`;

export const StatLabel = styled.span`
    font-size: 12px;
    color: #fff;
    margin-bottom: 5px;
`;

export const Statpercentage = styled.span`
    font-size: 18px;
    color: #fff;
`;



