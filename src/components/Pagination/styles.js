import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table{
        width:50%;
        margin: 0 auto;
        border-spacing: 0 0.5rem;

        th{ 
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }


        td{
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);

            &:first-child{
                width: 2%;
                text-align: center;
                color: var(--text-title);
                border-radius: 0.25rem;
            }

        }
    }
`

export const ButtonPagination = styled.div`
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

export const WrapperSearchinMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 2rem;
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
    }
`;

export const SearchingUsers = styled.input`
    width: 30rem;
    height: 3.5rem;

    padding: 1rem;
    
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;