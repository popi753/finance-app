import { Link } from "react-router-dom";

import arrowLeft from '../../assets/svg/arrow-left.svg'
import arrowRight from '../../assets/svg/arrow-right.svg'

type paginationProps = {
    page: string,
    setPage: React.Dispatch<React.SetStateAction<string>>;
    pageArr: (string | number)[];
}

export default function Pagination({ page, setPage, pageArr }: paginationProps){

    const isFirstPage = page === '1';
    const isLastPage = Number(page) === pageArr[pageArr.length - 1];


    return(
                    <div className='transactions-page_pagination'>

                        <Link to={"?page=" + (isFirstPage ? 1 : Number(page) - 1)} onClick={() => {isFirstPage ? null : setPage((Number(page) - 1).toString()) }} className={"transactions-page_pagination-left"+ (isFirstPage ? " transactions-page_pagination-disabled" : "")}>
                                <span className="icon-wrapper-s">
                                    <img src={arrowLeft} alt="prev" />
                                </span>
                                <span className="text-4 text-dark">Prev</span>
                        </Link>
                        <div className="transactions-page_pagination-numbers">

                                {pageArr.map((pageNum, index) => {
                                    if (pageNum === '...') {
                                        return <button key={index} className="transactions-page_pagination-placeholder">...</button>;
                                    }
                                    return (
                                            <Link key={index} to={`?page=${pageNum}`} onClick={() => setPage(String(pageNum))} className={'transactions-page_pagination-btn' + (page === String(pageNum) ? " transactions-page_pagination-active-btn" : "")}>
                                                <span className='text-4 text-dark'>{pageNum}</span>
                                            </Link>
                                    );
                                })}
                        </div>
                        <Link to={"?page=" + (isLastPage ? page : Number(page) + 1)} onClick={() => {isLastPage ? null : setPage((Number(page) + 1).toString()) }} className={'transactions-page_pagination-right'+ (isLastPage ? " transactions-page_pagination-disabled" : "")}>
                            <span className="text-4 text-dark">Next</span>
                            <span className="icon-wrapper-s">
                                <img src={arrowRight} alt="next" />
                            </span>
                        </Link>
                    </div>

    )
}
