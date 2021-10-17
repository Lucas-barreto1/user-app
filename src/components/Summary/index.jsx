import { useState, useEffect } from 'react';
import { useUsers } from '../../hooks/UserContext';
import SearchingUserMenu from '../SearchingUserMenu';
import UsersTable from '../UsersTable';

import {Container, ButtonPagination} from './styles';

const Summary = () => {
    const { users } = useUsers();

    const [itensPerPage, setItensPerPage] = useState(15);
    const [currentPage, setCurrentPage]= useState(0);
    const [pages, setPages] = useState([1, 2, 3]);

    const totalPages = Math.ceil(users.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = users.slice(startIndex, endIndex)

    const onChangeCurrentPage = (page) => {
        if(page === 1){
        setPages([1, 2, 3])
        }else if(page  === totalPages){
        setPages([totalPages - 2, totalPages - 1, totalPages])
        }else{

        const handleCurrentPage = page;

        const lastPage = handleCurrentPage - 1;
        const nextPage = handleCurrentPage + 1;

        setPages([lastPage, handleCurrentPage, nextPage ])
        setCurrentPage(handleCurrentPage)
        }
        }

    useEffect(() => {
        setCurrentPage(0)
    }, [itensPerPage])

    return (
    
        <Container>

        <SearchingUserMenu itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />

        <hr />

        <UsersTable currentItens={currentItens}/>

        <ButtonPagination>
            {pages.map((page, index) => {
                return <button value={index} onClick={() => onChangeCurrentPage(page)}>{page}</button>
            })}
        </ButtonPagination>
    </Container>

    );
}

export default Summary