import React from 'react';
import { useUsers } from '../../hooks/UserContext';

import { SelectItensPerPage, SearchingUsers, WrapperSearchinMenu} from './styles';

function SearchingUserMenu({itensPerPage, setItensPerPage}) {
    const {initialUsers, setUsers} = useUsers();

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

    return (
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
    );
}

export default SearchingUserMenu;