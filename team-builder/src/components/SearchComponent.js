import React, { useState, useEffect } from 'react';


const SearchComponent = (props) => {
    console.log("PROPS", props)

const [searchTerm, setSearchTerm] = useState(''); // state for searching
const [searchResults, setSearchResults] = useState([]); // state for search results. Empty array which will later populate with search results.

const handleChange = event => { // this variable records what I'm typing into the input bar. it is connected to the onChange prop. 
    setSearchTerm(event.target.value); // value is anything that is being typed into the input as I type.
}

useEffect(() => { //I want this function to run everytime searchTerm is altered. By typing anything in it will trigger. 
    const results = props.members.filter(person => {
        person.name.toLowerCase().includes(searchTerm); // this function changes all searches to lowercase. 
    })

    console.log("RESULTS", results) 
    setSearchResults(results);
    // my results after running are then passed to setSearchResults which is how I update the search results.
    
}, [searchTerm]); // dependency array is ONLY watching the search term. 

    return (
        <div>
            <form>
                <label htmlFor="search">
                    <input type="text" name="search" placeholder="enter your query" onChange={handleChange} value={searchTerm}/>
                </label> 
            </form>

            {searchResults.map(item => (
                
                    <div key={item.id}>

                        <h3>{item.name}</h3>
                        <p>{item.role}</p>
                        <p>{item.email}</p>

                    </div>
                
            ))}
        </div>
    )

}

export default SearchComponent;