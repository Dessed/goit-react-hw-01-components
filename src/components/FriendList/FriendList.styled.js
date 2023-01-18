import styled from 'styled-components';

export const CardsList = styled.ul`
   width: 450px;
   margin-left: 20px;
   padding: 0;
   box-shadow: 0 2px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const CardItem = styled.li`
    display: flex;
    align-items: center;
    padding: 10px;
`;

const bgColor = props => {
    return props.eventType ?  'green' :  'red';
    
    // switch (props.eventType) {
    //         case true:
    //             return 'green';         
    //         default:
    //             return 'red';
    //       }
}

export const StatusUser = styled.span`
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: ${bgColor};
`; 
   
export const ImgUser = styled.img`
    border-radius: 5px;
    margin-left: 20px;
`;

export const UserName = styled.p`
    font-size: 25px;
    font-weight: 500;
    margin-left: 20px;
`;
