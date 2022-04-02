import './SearchBar.css' ;
import { useState } from 'react';
import axios from "axios" ;
import { Link } from 'react-router-dom';

export const SearchBar = () => {
    const [filterData , setfilterData] = useState([]) ;

    const [search_Dropdown , setSearch_Dropdown] = useState(true) ;
    const Show_Dropdown = () => {
        setSearch_Dropdown(true) ; 
    }
    const hide_Dropdown = () => {
        setSearch_Dropdown(false) ; 
    }

    const handleChange = (event) => {
     const searchWord = event.target.value ;
    axios.get(`https://apg-saavn-api.herokuapp.com/result/?q=${searchWord}`).then(res => {
        setfilterData (res.data) ;
    })
    }
    const Storage = (value) => {
        console.log(value.image) ;
        var obj =  {"img" : value.image,
        "name" : value.song,
        "hindiName" : value.lyrics_snippet,
        "singer" : value.primary_artists,
        "time" : value.duration,
        "play" : value.media_preview_url, 
        }
        localStorage.setItem('data',JSON.stringify(obj)) ; 
    }


    return(
        <div className='search'>
             <div className="search-box flex-div" onClick={Show_Dropdown} >  
                  <img src="https://img.icons8.com/fluency-systems-regular/2x/search.png" id="searchButton" />
                  <input type="text" placeholder="Search Artists, Songs, Albums" id="video" onChange={handleChange}/>
             </div>

             
            {filterData.length !=0 && (      
            <div className={search_Dropdown ? 'dataResult' : 'dataResult_Hide'}>
               {filterData.map((value,key) => {
                   return(
                       <Link to={`/play/${value.song}`}>
                       <div className='smallDiv' onClick={hide_Dropdown}>
                       <img src={value.image} className='smallImg'
                        onClick={() => {
                              Storage(value)}}/>
                       <p className='smallName'>{value.song}</p>
                       </div>
                       </Link>
                   )
               })}
            </div>
            )}

        </div>
    )
}