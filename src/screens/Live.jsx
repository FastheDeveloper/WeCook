import { StyleSheet, Text, View,ImageBackground,TextInput, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons,Entypo,MaterialCommunityIcons,Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const ComData=[
    {
        id:1,
        message:'Hey, how are you?',
        userName:'John Doe',
        image:require('../../assets/img/y.jpg'),
    },
    {
        id:2,
        message:'Hey, how are you?',
        userName:'John Doe',
        image:require('../../assets/img/e.jpg'),
    },
    {
        id:3,
        message:'Hey, how are you?',
        userName:'John Doe',
        image:require('../../assets/img/f.jpg'),
    },
    {
        id:4,
        message:'Hey, how are you?',
        userName:'John Doe',
        image:require('../../assets/img/g.jpg'),
    },

]

const Live = () => {
    const navigation = useNavigation();
  return (
    <ImageBackground source={require('../../assets/img/Live.png')} style={{width: '100%', height: '100%',}}>
   <View style={{marginTop:40,flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image source={require('../../assets/img/LiveDp.png')} style={{width: 30, height: 30,}}/>
        <View style={{marginLeft:5}}>
            <Text style={styles.BigT}>You</Text>
            <Text style={{fontFamily:'EuclidRegular',color:'white',fontSize:10}}>1.3k Viewers</Text>
        </View>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#F44747',alignSelf:'center',paddingVertical:4,paddingHorizontal:8,borderRadius:15}}>
        <Text style={styles.BigT}>LIVE</Text>
        <Octicons name="dot-fill" size={14} color="white" style={{marginHorizontal:8}} />
        <Text style={styles.BigT}>00:24</Text>
    </View>
    <Ionicons name="ios-close-sharp" size={24} color="black" onPress={()=>navigation.goBack()}/>
   </View>
    <View style={{flex:1,justifyContent:'flex-end',paddingHorizontal:16}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <View style={styles.searchBar}>
                      <TextInput placeholder="Drop a comment" placeholderTextColor={'#272727'} style={styles.searchBarText} />
                  </View>
           <View style={{backgroundColor:'#FDEBFE',padding:8, borderRadius:100}}>
           <Ionicons name="md-paper-plane" size={24} color="#E10BF4" style={{}}/>

           </View>

             
    </View>
    </View>
    <Image source={require('../../assets/img/h2.png')} style={{width: 30, height: 30,position:'absolute',bottom:75,right:15}}/>
    <Image source={require('../../assets/img/h1.png')} style={{width: 30, height: 30,position:'absolute',bottom:70,right:40}}/>
    <Image source={require('../../assets/img/h4.png')} style={{width: 25, height: 25,position:'absolute',bottom:110,right:20}}/>
    <Image source={require('../../assets/img/h3.png')} style={{width: 25, height: 25,position:'absolute',bottom:100,right:45}}/>
    <Image source={require('../../assets/img/h6.png')} style={{width: 20, height: 20,position:'absolute',bottom:140,right:30}}/>
    <Image source={require('../../assets/img/h5.png')} style={{width: 20, height: 20,position:'absolute',bottom:135,right:47}}/>
   
    <View style={{flexDirection:'row',alignItems:'center',position:'absolute',bottom:115,left:20}}>
        <Image source={require('../../assets/img/an.png')} style={{width: 40, height: 40,}}/>
        <View style={{marginLeft:5}}>
            <Text style={styles.BigT}>crazyelephant681</Text>
            <Text style={{fontFamily:'EuclidRegular',color:'white',fontSize:10}}>Florida</Text>
        </View>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',position:'absolute',bottom:175,left:20,opacity:0.8}}>
        <Image source={require('../../assets/img/as.png')} style={{width: 40, height: 40,}}/>
        <View style={{marginLeft:5}}>
            <Text style={styles.BigT}>yellowmouse215</Text>
            <Text style={{fontFamily:'EuclidRegular',color:'white',fontSize:10}}>Fresh Lemon Fruit</Text>
        </View>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',position:'absolute',bottom:225,left:20,opacity:0.5}}>
        <Image source={require('../../assets/img/mn.png')} style={{width: 40, height: 40,}}/>
        <View style={{marginLeft:5}}>
            <Text style={styles.BigT}>silverfrog195</Text>
            <Text style={{fontFamily:'EuclidRegular',color:'white',fontSize:10}}>Macadamia Chocola </Text>
        </View>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',position:'absolute',bottom:285,left:20,opacity:0.3}}>
        <Image source={require('../../assets/img/ani.png')} style={{width: 40, height: 40,}}/>
        <View style={{marginLeft:5}}>
            <Text style={styles.BigT}>whitegoose497</Text>
            <Text style={{fontFamily:'EuclidRegular',color:'white',fontSize:10}}>Ice Lemon Tea </Text>
        </View>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',position:'absolute',bottom:335,left:20,opacity:0.2}}>
        <Image source={require('../../assets/img/vg.png')} style={{width: 40, height: 40,}}/>
        <View style={{marginLeft:5}}>
            <Text style={styles.BigT}>whitegoose497</Text>
            <Text style={{fontFamily:'EuclidRegular',color:'white',fontSize:10}}>Ice Lemon Tea </Text>
        </View>
    </View>
   <View>
   
   </View>
    </ImageBackground>
  )
}

export default Live

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor:'#E0E0E0',
        borderWidth:1,
        padding: 10,
        borderRadius: 100,
        marginTop: 20,
        marginBottom: 16,
       backgroundColor:'#EBEBEB',
       borderRadius: 100, 
       width:'85%',
      },
      searchBarText: {
        flex:1,
        padding:2,
        marginRight: 10,
        color:'#BCBCBC',
        fontFamily:'EuclidRegular',
        fontSize:12,
        marginLeft: 8,
      },
        BigT:{
            fontFamily:'EuclidBold',
            fontSize:14,
            color:'white',
        }
})