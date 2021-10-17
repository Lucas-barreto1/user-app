import { useState } from 'react';

import { WrapperPagination } from './styles';

function Pagination({onChangeCurrentPage, totalPages}) {
    const [pages, setPages] = useState([1, 2, 3]);

    const onChange = (page) => {
        if(page === 1){
            setPages([1, 2, 3])
            }else if(page  === totalPages){
            setPages([totalPages - 2, totalPages - 1, totalPages])
            }else{
    
            const handleCurrentPage = page;
    
            const lastPage = handleCurrentPage - 1;
            const nextPage = handleCurrentPage + 1;
    
            setPages([lastPage, handleCurrentPage, nextPage ])
            onChangeCurrentPage(handleCurrentPage)
        }
    }
    return(
    <WrapperPagination>
        {pages.map((page, index) => {
            return <button value={index} onClick={() => onChange(page)}>{page}</button>
        })}
    </WrapperPagination>
    );
}

export default Pagination;