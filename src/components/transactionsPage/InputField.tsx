import TableInput from './TableInput'

import search from '../../assets/svg/search.svg'

type InputFieldProps = {
    searchString?: string,
    setSearchString?: React.Dispatch<React.SetStateAction<string>>,
    sortString?: string,
    setSortString?: React.Dispatch<React.SetStateAction<string>>,
    categoryString?: string,
    setCategoryString?: React.Dispatch<React.SetStateAction<string>>,
    onSearch?: () => void,
}

export default function InputField({
    searchString,
    setSearchString,
    sortString,
    setSortString,
    categoryString,
    setCategoryString,
    onSearch
}: InputFieldProps) {



    return(
            <div className='transactions-page_input-field'>
                <search className='transactions-page_search-box'>
                    <TableInput
                                 type='search'
                                 id="search"
                                 placeholder='Search transaction'
                                 icon={search}
                                 value={searchString}
                                 setValue={setSearchString}
                                 onSearch={onSearch}
                                  />
                </search>


                <div className='transactions-page_sort-wrapper'>
                        <TableInput
                                 type='select'
                                 id="sort"
                                 placeholder='Latest'
                                 options={['Latest', 'Oldest', 'A to Z', 'Z to A', 'Highest', 'Lowest']}
                                 label='Sort by'
                                 value={sortString}
                                 setValue={setSortString}
                                  />
                        <TableInput
                                type='select'
                                id="category"
                                placeholder='All Transactions'
                                options={['All Transactions', 'General', 'Dining Out', 'Groceries', 'Shopping', 'Entertainment']}
                                label='Category'
                                value={categoryString}
                                setValue={setCategoryString}
                                />

                </div>
            </div>

    )
}