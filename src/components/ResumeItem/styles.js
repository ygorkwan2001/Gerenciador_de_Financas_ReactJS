import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1120px;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 15px
    width: 30%;

    @media(max-width: 750px){
        width: 20px

        p {
            font-size: 12px;
        }
    
        span{
            font-size: 20px;
        }
    
        svg{
            display: none;
        }
    }
`;

export const Header = styled.header`
    display: flex: flex;
    allign-items: center;
    justify-content: space-around;
    widht: 100%
    gap: 10px
    margin: 20px auto;

    svg{
        width: 25px;
        height: 25px;
    }
`;

export const HeaderTitle = styled.p`
    font-size: 20px;
`;

export const Total = styled.span`
    font-size: 30px;
    font-weight: bold;
`;