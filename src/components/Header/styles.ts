import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width:1128px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items:center;
    justify-content: space-between;

    .logoContent{

        display:flex;
        flex-direction:row;
        align-items:center;
        font-size:30px;
        margin-left:10px;
        font-weight:500;
        color:#fff;

        img{
            max-height:60px;
            margin-right:10px
        }
    }

    button{
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height:3rem;

        transition: filter 0.2;

        &:hover{
            filter: brightness(0.9);
        }
    }
`