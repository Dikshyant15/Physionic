import React, { useState } from 'react'
import Table  from './Table'
import { Doctors } from './Doctors'


const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const keys = ["first_name","last_name","email"]

   const searchValues=(data)=>{
    return data.filter(
        (item)=>keys.some((key)=>item[key].toLowerCase().includes(searchQuery))
    )
   }
    function handleSearchQueryChange(e) {
        setSearchQuery(e.target.value)
    }

    return (
        <div>               
            <input
            placeholder="Search for doctors"
            className="border-8"
            //className="search__input"
            type="text"
            id="search"
            onChange={handleSearchQueryChange}
        />
           
            <Table data={searchValues(Doctors)}/>
            
        </div>

    )
}
export default SearchBar