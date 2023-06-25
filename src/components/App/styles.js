import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;

    @media (max-width: 700px) {
        align-items: center;

    }
`;

export const InputSearchContainer = styled.div`
    width: 100%;
    margin-top: 41px;

    input {
        width: 100%;
        background: #fff;
        border: none;
        border-radius: 15px;
        height: 50px;
        box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.04);
        outline: 0;
        padding: 0 16px;

        &::placeholder {
            color: #9A9A9A;
        }
    }
    @media (max-width: 700px) {
        align-items: center;

    }
`;

export const GamesList = styled.div`
    margin-top: 32px;

        hr {
            color: '#fff'
        }
`;

export const HeaderGameList = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

    strong {
        font-size: 24px;
        color: #222;
    }

    select {
        font-size: 16px;
        color: ${({ theme }) => theme.colors.primary.main};
        border: none;
        font-weight: 700;
        background: transparent;
    }
`;

export const ListContainer = styled.div`
    justify-items: center;
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    grid-column-gap: 32px;
    grid-row-gap: 2em;


    @media (max-width: 880px) {
        align-items: center;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
    }

    @media (max-width: 600px) {
        align-items: center;
        display: flex;
        flex-direction: column;
    }

`;

export const Card = styled.div`
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    padding: 16px;
    border-radius: 10px;
    width: 280px;
    height: 208;
    display: flex;
    align-items: center;
    justify-content: center;

    .info {

    }

    img {
        border-radius: 6px;
    }

    .game-name-category {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 5px;

        small {
            background: ${({ theme }) => theme.colors.primary.lighter};
            color: ${({ theme }) => theme.colors.primary.main};
            font-weight: bold;
            text-transform: uppercase;
            padding: 3px;
            border-radius: 4px;
            margin-top: 3px;
        }
    }
`;
