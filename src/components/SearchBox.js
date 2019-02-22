import React from 'react';

const SearchBox = ({searchField}) => {
    return(
        <div>
            <input type="search" 
                className='pa3 ba b--green bg-lightest-blue'
                onChange={searchField}
                placeholder="search robot"/>
        </div>
    )
}

export default SearchBox;