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

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    border: black solid 1px;
    width: 45px;
    padding: 10px;
    background-color: ${random_bg_color()};

    :nth-of-type() {
        background-color: ${random_bg_color()};
    };  
`;

function random_bg_color() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
    return bgColor;
    }

    // function getRandomColor() {
    //     var letters = '0123456789ABCDEF';
    //     var color = '#';
    //     for (var i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }

export const StatLabel = styled.span`
    font-size: 12px;
    color: #fff;
    margin-bottom: 5px;
`;

export const Statpercentage = styled.span`
    font-size: 18px;
    color: #fff;
`;

