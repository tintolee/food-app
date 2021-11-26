import React ,{useState}from 'react';
import { Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestuarants from '../Hooks/useRestuarants'
import RestuarantsList from '../components/RestuarantsList';




const SearchScreen = () => {
// state for the search term
const [term, setTerm] = useState('')
 const [SearchAPI, restuarants, errorMessage] = useRestuarants()
   
 // to filter the restuarants into categories
 const filterRestuarantsByPrice=(price)=>{
    //price==='$' || '$$' || '$$$'

    
   return restuarants.filter(restuarant=> {
        return restuarant.price=== price

   })

 }


  return (
     <>
       <SearchBar term={term} 
         onTermSubmit={()=>SearchAPI(term)}
       onTermChange={setTerm}/>
       { errorMessage ?  <Text> {errorMessage}</Text>  :  null }
      
       
       <ScrollView>
       <RestuarantsList   restuarants= {filterRestuarantsByPrice('$')} title ='Cost Effective'/>
       <RestuarantsList    restuarants= {filterRestuarantsByPrice('$$')} title ='Bit Pricier'/>
       <RestuarantsList   restuarants= {filterRestuarantsByPrice('$$$')} title ='Big Spender' />
      
         </ScrollView>
      </>
      
      
  )
 
  
};

const styles = StyleSheet.create({
 
});

export default SearchScreen;
