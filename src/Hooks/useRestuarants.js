import {useEffect,useState} from 'react'
import yelp from '../API/yelp'


export default function useRestuarants() {
    
    
    // state for the API call
const [restuarants, setRestuarants] = useState([])
//state for error
 const [errorMessage, seterrorMessage] = useState('')



// API call to show data when the application first loads
 const SearchAPI=async (searchTerm)=>{

    try{
   const response = await yelp.get('/search', {
     params:{
       limit:50,
       term: searchTerm,
       location: 'san jose'
      }
   })
  setRestuarants(response.data.businesses) 
 } catch(err){
   seterrorMessage('Something went wrong')
}
 } 
     // call searchApi when component is first rendered
     useEffect(() => {
      SearchAPI('egg')
      
    }, [])
    
    
    
    
    
    return [SearchAPI, restuarants, errorMessage]
       
}
