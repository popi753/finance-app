import reactIcon from '../../assets/react.svg'

import {type transaction} from '../../model/transactions'

import formatCurrency from '../../utils/formatCurrency';

export default function TransactionsTable({data}: {data: transaction[]}){

    return(
                    <table className='transactions-page_table'>
                        <thead>
                           
                            <tr className='text-5 text-light'>
                                <th>Recipient/Sender</th>
                                <th>Category</th>
                                <th>Transaction Date</th>
                                <th>Amount</th>
                            </tr>
                        </thead>

                        <tbody>
                             {data.map((item, index) => (
                                <TableRow key={index} transaction={item} />
                            ))}
                        </tbody>
                    </table>

    )
}


function TableRow({transaction}: {transaction: transaction}){

    const {name,category,date,amount} = transaction || {};

    return(
        <tr>
            <td>
                <span className="icon-wrapper-xl">
                    <img src={reactIcon} alt="picture" />   
                </span> 

                <span className='text-4 text-bold text-dark'>{name}</span>
            </td>

            <td><span className="text-5 text-light">{category}</span></td>
            <td><span className="text-5 text-light">{date}</span></td>
            <td><span className={`text-5 ${amount > 0 ? 'text-green' : 'text-dark'}`}>{formatCurrency(amount)}</span></td>
        </tr>
    )
}