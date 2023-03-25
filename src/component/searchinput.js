import { useState } from 'react'

import useDebounce from './useDebounce';

import '../index.css'

export default function Searchinput({value, onChange}) {

    const [displayvalue, setDisplayvalue] = useState(value);
    const debouncedChange = useDebounce(onChange, 500);

    function handleChange(e){
        setDisplayvalue(e.target.value);
        debouncedChange(e.target.value);
    }

  return (
    <div className='search'>

        <input type="search" placeholder='Anime Name...' value={displayvalue} onChange={handleChange} />
        
    </div>
  )
};
