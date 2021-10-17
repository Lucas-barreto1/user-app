import styled from "styled-components";

export const WrapperTable = styled.div`

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

