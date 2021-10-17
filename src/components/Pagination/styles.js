import styled from "styled-components";

export const WrapperPagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        width: 5rem;
        height: 3rem;
        margin: 1.5rem 0 1.5rem 0;

        font-size: 1.1rem;
        font-weight: 600;

        background: var(--shape);
        border: solid 1px var(--shape);
        border-radius: 0.5rem;
        
        transition: filter 1s;

        & + button{
            margin-left: 1rem;
        }

        &:hover{
            filter: brightness(0.8);
        }
    }
`;
