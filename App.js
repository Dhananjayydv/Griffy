import {Dimensions, StyleSheet,Image,Button,Pressable,Text, TextInput,View, ScrollView,Icon } from 'react-native';


export default function App() {
  return (
    <ScrollView>
    <View style={{marginTop:30,marginLeft:20}}>
     <Text style={{fontWeight:'bold',fontSize:20}}>SignIn</Text>
    </View>
    <View style={{height:400,width:Dimensions.get('window').width,marginLeft:20}}>
      <Image style={styles.loginBgImg} source={require('./assets/loginBg.png')} />
    </View>
    <View style={{ width:Dimensions.get('window').width/1.15,height:Dimensions.get('window').height/2.9,backgroundColor:'#1B1A19',marginLeft:20}}>
        <View style={{marginLeft:28,width:260,backgroundColor:'#2B2A29',color:'white',height:50,display:'flex',alignContent:'center',justifyContent:'center',borderRadius:10,flexDirection:'column'}}>
         <Text style={{color:'white',textAlign:'center',}}>Sign In with Facebook</Text>
        </View>
        <View style={{marginLeft:28,marginTop:20,width:260,backgroundColor:'#2B2A29',color:'white',height:50,display:'flex',alignContent:'center',justifyContent:'center',borderRadius:10}}>
         <Text style={{color:'white',textAlign:'center',}}>Sign In with Google</Text>
        </View>
        <View style={{marginLeft:28,marginTop:20,width:260,backgroundColor:'#2B2A29',color:'white',height:50,display:'flex',alignContent:'center',justifyContent:'center',borderRadius:10}}>

         <Text style={{color:'white',textAlign:'center',}}>Sign In with Instagram</Text>
        </View>

    </View>
     

    {/* page3 */}
    <View style={{marginTop:30,marginLeft:20}}>
      <Text style={{fontSize:20}}>Home</Text>
    </View>

    <View style={{height:Dimensions.get('window').height/1.11,backgroundColor:'black',width:Dimensions.get('window').width/1.11,marginLeft:20}}>
      <Text style={{color:'white',fontSize:23,marginTop:20,marginLeft:20}}>Explore</Text>
      <TextInput type="text" placeholder='Search' style={{backgroundColor:"#42403F",width:250,marginLeft:21,marginTop:20,borderRadius:10,paddingLeft:10}}/>
      <View>
        <Text style={{color:'white',marginVertical:10,marginLeft:20}}>Griffy Stars</Text>
        <View style={{height:100,width:400,display:'flex',flexDirection:'row',marginLeft:20}}>
        <Image source={require('./assets/person1.jpg')} style={{height:100,width:90,borderRadius:10,marginRight:10}} />
        <Image source={require('./assets/Person2.jpg')} style={{height:100,width:90,borderRadius:10,marginRight:10}} />
        <Image source={require('./assets/person3.jpg')} style={{height:100,width:90,borderRadius:10,marginRight:10}} />
        </View>
      </View>
      <View style={{overflow:'hidden'}}>
        <Text style={{color:'white',marginVertical:10,marginLeft:20}}>Hot Topics</Text>
        <View style={{display:'flex',flexDirection:'row'}}>
        <View style={{backgroundColor:'#42403F',width:70,marginLeft:20,padding:5}}>
          <Text style={{textAlign:'center'}}>Celebrity</Text>
        </View>
        <View style={{backgroundColor:'#42403F',width:60,marginLeft:5,padding:5}}>
          <Text style={{textAlign:'center'}}>Politics</Text>
        </View>
        <View style={{backgroundColor:'#42403F',width:60,marginLeft:5,padding:5}}>
          <Text style={{textAlign:'center'}}>Fashion</Text>
        </View>
        <View style={{backgroundColor:'#42403F',width:90,marginLeft:5,padding:5}}>
          <Text style={{textAlign:'center'}}>Technology</Text>
        </View>
        </View>
      </View>

      <View>
        <Text style={{color:'white',marginVertical:10,marginLeft:20}}>Your News</Text>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{color:'white',marginVertical:10,marginLeft:20}}>Trending</Text>
          <Text style={{color:'white',marginVertical:10}}>Popular</Text>
          <Text style={{color:'white',marginVertical:10,marginRight:10}}>Latest</Text>
        </View>
        <View style={{height:100,marginLeft:20,width:200,marginTop:4,display:'flex',flexDirection:'row'}}>
          <Image source={require('./assets/kim.jpg')} style={{height:100,width:100,borderRadius:10}}/>
          <View >
          <Text style={{color:'white',marginVertical:10,marginLeft:20}}>"Painful but worth it"- Kim kardashian</Text>
          <Text style={{color:'#F2E5D7',marginLeft:20}}>Celebrity-fashion</Text>
          <Text style={{color:'#F2E5D7',marginTop:10,fontSize:10,marginLeft:20}}>330 Views  899 Likes</Text>
          </View>
        </View>
        <View style={{height:100,marginLeft:20,width:200,marginVertical:10,display:'flex',flexDirection:'row'}}>
          <Image source={require('./assets/kim1.jpg')} style={{height:100,width:100,borderRadius:10}}/>
          <View >
          <Text style={{color:'white',marginVertical:10,marginLeft:20}}>"Painful but worth it"- Kim kardashian</Text>
          <Text style={{color:'#F2E5D7',marginLeft:20}}>Celebrity-fashion</Text>
          <Text style={{color:'#F2E5D7',marginTop:10,fontSize:10,marginLeft:20}}>330 Views  899 Likes</Text>
          </View>
        </View>
      </View>
    </View>
    
    
     {/* page2 */}

     <View >
      <Text style={{paddingTop:40,marginLeft:20,fontWeight:'bold', fontSize:20}}>Interests</Text>
      <View style={styles.container} showsVerticalScrollIndicator={true}>
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
      
      
    </View>
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loginBgImg:{
    width:Dimensions.get('window').width/1.15,
    height:400
  },
  container: {
    height:Dimensions.get('window').height,
    width:320,
    marginLeft:20,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    position:'absolute',
    top:570,
    paddingVertical: 12,
    paddingHorizontal: 82,
    borderRadius: 4,
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
