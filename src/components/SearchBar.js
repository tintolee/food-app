import React from 'react';
import { TextInput, StyleSheet, View, } from 'react-native';
import { Feather } from '@expo/vector-icons';



const SearchBar = ({term,onTermChange,onTermSubmit}) => {
  return (
     <View  style={styles.backgroundStyle}>
       <Feather name="search"  style={styles.iconStyle} color="black" />
      <TextInput 
      autoCapitalize="none" 
      autoCorrect={false}
      value={term}
      onChangeText={onTermChange}
      style={styles.inputStyle}
       placeholder='search'
       onEndEditing={onTermSubmit}
       />
      </View>
      

  )
 
  
};

const styles = StyleSheet.create({
  
   backgroundStyle: {
   backgroundColor: 'purple',
   height:50,
   borderRadius:40,
   marginHorizontal:15,
   flexDirection:'row', 
   marginTop:15,
   marginBottom:10
  },

  inputStyle:{
    fontSize:18,
    flex: 1
  },
  iconStyle:{
    fontSize:35,
    alignSelf:'center',
    marginHorizontal:15
  }
});

export default SearchBar;
