import React , {useState, useEffect}from 'react'
import { View, Text , StyleSheet, FlatList, Image} from 'react-native'
import yelp from '../API/yelp'




export default function RestuarantShowScreen({navigation}) {
       
    const [restuarant, setRestuarant] = useState(null)
   
     //passing the id of the business from the navigation
    const id = navigation.getParam('id')

   // Api call to get the business and its id 
   const getRestuarant= async(id)=>{
      const response= await yelp.get(`/${id}`)
      setRestuarant(response.data)
   }

   useEffect(() => {
    getRestuarant(id)
   
}, [])

      if (!restuarant){
          return null
      }
   
    return (
        <View style={styles.container}>
            <Text style={styles.nameStyle}> {restuarant.name}</Text>

            < FlatList   
               
               data={restuarant.photos}
               keyExtractor={(photo)=> photo}
               renderItem = {({item})=>{

                return <Image style={styles.image} source={{uri: item}}  />
               }}
            
            
            
            />
            
        </View>
    )
}




const styles = StyleSheet.create({
    image:{

        height: 200,
        width:300
    },
    nameStyle:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    }, 
    container:{
     marginBottom:10 ,
     marginLeft:15,
  },
 
})


