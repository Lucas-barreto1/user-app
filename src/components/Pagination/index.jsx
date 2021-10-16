import { useState, useEffect } from 'react';
import  api from '../../services/api';

import {Container, ButtonPagination, SelectItensPerPage, SearchingUsers, WrapperSearchinMenu} from './styles';

const Pagination = () => {
    const [users, setUsers] = useState([]);
    const [initialUsers, setInitialUsers] = useState([]);

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

    const searchingUsers = () => {
        api.get('users')
        .then(response => {setUsers(response.data.data); setInitialUsers(response.data.data)})
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }

    const isNumber = (n) => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    const handleFindByUser = ({target}) => {
        const isAge =  isNumber(target.value);
        let filter = null;
        
        if(isAge){
            filter =  initialUsers.filter(({age}) => age.toString().includes(target.value))
        }else{
            filter = initialUsers.filter(({name}) => name.includes(target.value))
        }
        setUsers(filter)
    }

    useEffect(() => {
        searchingUsers()
    }, [])

    useEffect(() => {
        setCurrentPage(0)
    }, [itensPerPage])

    return (
    <Container>
    
    <WrapperSearchinMenu>
        <SearchingUsers 
            type="text"
            placeholder='Search'
            onChange={handleFindByUser}
        />

        <SelectItensPerPage> 
            <span>Exibir</span>
            <select value={itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))}>
                <option value={15}>15 por página</option>
                <option value={30}>30 por página</option>
                <option value={40}>40 por página</option>
                <option value={50}>50 por página</option>
            </select>
        </SelectItensPerPage>
    </WrapperSearchinMenu>

    <table>
        <thead>
            <tr>
                <th>Idade</th>
                <th>Nome</th>
            </tr>
        </thead>
        <tbody>
        {currentItens.length > 0 && currentItens.map((user, index) => (
            <tr key={index + user.name}>
                <td>{user.age}</td>
                <td>{user.name}</td>
            </tr>
        ))}
        </tbody>
    </table>

    <ButtonPagination>
        {pages.map((page, index) => {
            return <button value={index} onClick={() => onChangeCurrentPage(page)}>{page}</button>
        })}
    </ButtonPagination>
</Container>
    );
}

export default Pagination