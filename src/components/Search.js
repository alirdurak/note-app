import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { searchMethod } from '../redux/slices/noteSlice';
function Search() {
  const [search, setSearch] = useState("")
 
    const dispatch = useDispatch();
    const handleSearch = (e)=> {
      setSearch(e.target.value)
      dispatch(searchMethod(search))    
    }

  return (
    <div>
      <TextField  onChange={handleSearch} label="Search"  variant='filled' />
      
    </div>
  )
}

export default Search
