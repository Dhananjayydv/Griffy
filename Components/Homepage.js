import React, { Component } from 'react'
import { StyleSheet,Image,Button,Pressable, Text, ScrollScrollView } from 'react-native';

// export class Homepage extends Component {
    const Homepage = ({navigation})=>{
    return (
        <View >
        {/* <Text>Interest</Text> */}
        <Text style={{paddingTop:40,marginLeft:20,fontWeight:'bold', fontSize:20}}>Interests</Text>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
        <Text style={{position:'absolute',top:20,left:20,fontWeight:'bold',fontSize:20,color:'white'}}>What are</Text>
        <Text style={{position:'absolute',top:40,left:20,fontWeight:'bold',fontSize:20,color:'green'}}>your Interests?</Text>
        <View style={{position:'absolute',top:90,left:20,display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
           <View style={styles.itemView}><Image style={styles.img} source={{uri:'https://cdn.vectorstock.com/i/1000x1000/53/54/avatar-star-celebrity-icon-simple-style-vector-30115354.webp'}}/>
           <Text style={{color:'white',paddingHorizontal:20}}>Celebrity</Text>
           </View>
           <View style={styles.itemView}><Image style={styles.img} source={{uri:'https://static.thenounproject.com/png/955295-200.png'}}/>
           <Text style={{color:'white',paddingHorizontal:30}}>Politics</Text>
           </View>
           <View style={styles.itemView}><Image style={styles.img} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7Ypk4tgY35qz0ppFYAaCB7Z-lu5GlAWyF0XRTZs&s'}}/>
           <Text style={{color:'white',paddingHorizontal:20}}>Finance</Text>
           </View>
           <View style={styles.itemView}><Image style={styles.img} source={{uri:'https://cdn-icons-png.flaticon.com/512/4257/4257483.png'}}/>
           <Text style={{color:'white',paddingHorizontal:20}}>Technology</Text>
           </View>
           <View style={styles.itemView}><Image style={styles.img} source={{uri:'https://static.vecteezy.com/system/resources/thumbnails/000/509/014/small/fashion.jpg'}}/>
           <Text style={{color:'white',paddingHorizontal:20}}>Fashion</Text>
           </View>
           <View style={styles.itemView}><Image style={styles.img} source={{uri:'https://cdn-icons-png.flaticon.com/512/44/44386.png'}}/>
           <Text style={{color:'white',paddingHorizontal:30}}>World</Text>
           </View>
           <View style={styles.itemView}><Image style={styles.img} source={{uri:'https://www.freeiconspng.com/thumbs/travel-icon/travel-guide-icon-map-ticket-travel-icon-17.png'}}/>
           <Text style={{color:'white',paddingHorizontal:30}}>Travel</Text>
           </View>
           <View style={styles.itemView}><Image style={styles.img} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFxAsvqk05CsHpxKWA-VQtxRMMB5NIoPyYCg2G0E&s'}}/>
           <Text style={{color:'white',paddingHorizontal:20}}>Medicine</Text>
           </View>
          
        </View>
          <Pressable style={styles.button}>
              <Text style={styles.text}>Next</Text>
           </Pressable>
        
        
      </ScrollView>
      
  
        {/* <StatusBar style="auto" /> */}
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
      height:1200,
      width:320,
      marginLeft:20,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      alignItems: 'center',
      // position:'absolute',
      // top:100,
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 82,
      // marginHorizontal:40,
      borderRadius: 4,
      // elevation: 3,
      backgroundColor: 'green',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
    },
    img:{
      width:100,height:80,borderRadius:20,backgroundColor:'white'
    },
    itemView:{
      width:130,height:100,margin:7,backgroundColor:'black'
    }
  });
  
export default Homepage