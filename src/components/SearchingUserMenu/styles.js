import styled from "styled-components";

export const WrapperSearchinMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 2rem;
`;

export const SearchingUsers = styled.input`
    width: 30rem;
    height: 3.5rem;

    padding: 1rem;
    
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const SelectItensPerPage = styled.div`
    margin-left: 2rem;

    span{
        font-size: 0.875rem;
        line-height: 1.125rem;
        font-weight: 700;
        
    }
    
    select{
        font-size: 0.875rem;
        line-height: 1.5rem;
        background: var(--shape);
        border-radius: 0.25rem;
        padding: 0.75rem 3rem 0.75rem 1rem;
        margin-left: 0.5rem;
        border: none;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }
`;





