import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import RestuarantsDetails from './RestuarantsDetails'
import { withNavigation } from 'react-navigation'




 function RestuarantsList({title, navigation,restuarants}) {

      // to hide categories that doest have any results when the application loads or when a search is made
    if (!restuarants.length){

      return null
    }


    return (
        <View    style={styles.container}>   
            <Text style={styles.titleStyle}>
               {title}
            </Text>
           <FlatList
           //to remove the horizonatl scrolling
           showsHorizontalScrollIndicator={false}
           // to make the items align horizontally
           horizontal
           data={restuarants}
        keyExtractor= {(restuarants)=> restuarants.id}
        renderItem={({item}) =>{
           return (
           <TouchableOpacity 
            onPress={()=> navigation.navigate('RestuarantShow' , {id:item.id})}>
           <RestuarantsDetails restuarants={item}/>
           </TouchableOpacity>
           )
        }}

           />
        </View>
    )
}



 const styles= StyleSheet.create({
   titleStyle:{
       fontSize:18,
       fontWeight:'bold',
       marginLeft:15,
       marginBottom:5
   }, 
   container:{
    marginBottom:10 
 },


 })




 export default withNavigation(RestuarantsList)