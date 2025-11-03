import { useState,useEffect,useCallback, useMemo } from 'react'
import { useSearchParams, useNavigate } from "react-router-dom";


import {onFetchTransactions, type transaction, type meta} from '../model/transactions'

import InputField from '../components/transactionsPage/InputField'
import TransactionsTable from '../components/transactionsPage/TransactionsTable'
import Pagination from '../components/transactionsPage/Pagination'

import '../styles/transactions.css'

export default function Transactions() {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();


    const [loading, setLoading] = useState<boolean>(true);
    const [error,setError] = useState("");

    const [transactions, setTransactions] = useState<transaction[]>([]);
    const [meta, setMeta] = useState<meta>();

    const [searchString, setSearchString] = useState('')
    const [sortString, setSortString] = useState('Latest')
    const [categoryString, setCategoryString] = useState('All Transactions')
    const [page, setPage] = useState<string>(searchParams.get("page") || "");

    const onSearch = useCallback( () => {
        setLoading(true);
        onFetchTransactions({ page: 1, search: searchString, sort: sortString, category: categoryString })
                            .then((result) => {
                                if (result.meta.last_page < Number(page)) {
                                    setPage(String(result.meta.last_page));
                                    navigate(`?page=${result.meta.last_page}`, { replace: true });
                                }

                                setTransactions(result.transactions);
                                setMeta(result.meta);
                                setLoading(false);
                            }).catch( (error) => {
                                    setError("Failed to fetch transactions" + error);
                                    setLoading(false);
                            });
    }, [page,searchString, sortString, categoryString]);  
    
    const pageArr: (number | string)[] = useMemo(() => {
        const currentPage = meta?.current_page || 1;
        const totalPages = meta?.last_page || 1;
        const pages = [];
        // Always show first 2 pages
        for (let i = 1; i <= Math.min(2, totalPages); i++) {
            pages.push(i);
        }

        // Add dots if gap exists
        if (currentPage > 4) {
            pages.push('...');
        }

        // Add neighbors (current page and adjacent pages)
        const start = Math.max(3, currentPage - 1);
        const end = Math.min(totalPages - 2, currentPage + 1);

        for (let i = start; i <= end; i++) {
            if (!pages.includes(i)) {
                pages.push(i);
            }
        }

        // Add dots if gap exists
        if (currentPage < totalPages - 3) {
            pages.push('...');
        }

        // Always show last 2 pages
        for (let i = Math.max(totalPages - 1, 3); i <= totalPages; i++) {
            if (!pages.includes(i)) {
                pages.push(i);
            }
        }

        return pages;
    }, [meta?.current_page, meta?.last_page]);

    useEffect(() => {
        onSearch();
    }, [page,sortString, categoryString]);

    return(
        <>
            <section className='transactions-page'>
                <h1 className="text-1">Transactions</h1>
                <div className="transactions-page_content">
                    <InputField 
                        searchString={searchString}
                        setSearchString={setSearchString}
                        sortString={sortString}
                        setSortString={setSortString}
                        categoryString={categoryString}
                        setCategoryString={setCategoryString}
                        onSearch={onSearch}
                    />
                    {loading ? <div className='loader'></div> : 
                     !transactions.length ? <span className='text-4'>No transactions found</span> :
                      error ? <span className='text-4'>{error}</span> :
                            <>
                                <TransactionsTable data={transactions}/>
                                <Pagination page={page || "1"} setPage={setPage} pageArr={pageArr} />
                            </>}
                </div>
            </section>
        </>
    )
}




