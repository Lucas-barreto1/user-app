import { useState, useEffect } from 'react';
import { useUsers } from '../../hooks/UserContext';
import SearchingUserMenu from '../../components/SearchingUserMenu';
import UsersTable from '../../components/UsersTable';
import Pagination from '../../components/Pagination';


import { Container } from './styles';

const HomePage = () => {
    const { users } = useUsers();

    const [itensPerPage, setItensPerPage] = useState(15);
    const [currentPage, setCurrentPage]= useState(0);
    const totalPages = Math.ceil(users.length / itensPerPage);


    const getItensPerPage = () => {
        const startIndex = currentPage * itensPerPage;
        const endIndex = startIndex + itensPerPage;
        const itens = users.slice(startIndex, endIndex)

        return itens;
    }

    const currentItens = getItensPerPage()

    const onChangeCurrentPage = (handleCurrentPage) => {
        setCurrentPage(handleCurrentPage)
    }

    useEffect(() => {
        setCurrentPage(0)
    }, [itensPerPage])

    return (
    
        <Container>

        <SearchingUserMenu itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />

        <hr />

        <UsersTable currentItens={currentItens}/>

        <Pagination onChangeCurrentPage={onChangeCurrentPage} totalPages={totalPages}/>
    </Container>

    );
}

export default HomePage