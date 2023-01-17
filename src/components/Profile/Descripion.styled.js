import styled from 'styled-components';

export const Descripion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`;

export const Image = styled.img`
    width: 100px;
    border-radius: 50px;
    margin-bottom: 30px;
`;

export const UserName = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 10px 0;
    `;

export const UserData = styled.p`
    color: gray;
    margin: 0 0 10px 0;

:last-child {
    margin: 0;
}
`;

