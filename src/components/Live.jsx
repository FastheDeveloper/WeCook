import { View, Text,FlatList, Image,StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Live = () => {
    PrefData=[
        {
            id:1,
            name:'Nini Cho',
            title:'Outdoor Cooking',
            image:require('../../assets/img/p.jpg'),
            userName:'lagatha_24',
            Profileimage:require('../../assets/img/y.jpg'),
            location:'New York',
            postText:"My process for making birthday cakes, take a look, my recipe is attached to this post.",
            isActive:true
        },
        {
            id:2,
            name:'Usman Ali',
            title:'Veggie Fries',
            image:require('../../assets/img/z.jpg'),
            userName:'Wazobia.tech',
            Profileimage:require('../../assets/img/f.jpg'),
            location:'Lagos',
            postText:"I'll be showing how I prepare outdoor meals at home with my friends..",
            isActive:true

        },
        {
            id:3,
            name:'Farouq Seriki',
            title:'Chief chef, Fas pastries',
            image:require('../../assets/img/v.jpg'),
            userName:'Fas_Dev',
            Profileimage:require('../../assets/img/c.jpg'),
            location:'Lagos',
            postText:"Lilly and Tina shows us a secret recipe on fried veggies",
            isActive:true


        },
        {
            id:4,
            name:'Musa Florentina',
            title:'Sous chef, Fly pastries',
            image:require('../../assets/img/n.jpg'),
             userName:'FryAgba001',
            Profileimage:require('../../assets/img/f.jpg'),
            location:'Lagos',
            postText:"Lillian shows us a secret recipe on  boiled eggs",
            isActive:true
        },
        {
            id:5,
            name:'Rachael Diablo',
            title:'Sous chef, Mom\'s Spaghetti ',
            image:require('../../assets/img/m.jpg'),
            userName:'Asa_Kemi',
            Profileimage:require('../../assets/img/x.jpg'),
            location:'Lagos',
            postText:"Lilly and Tina shows us a secret recipe on fried veggies",
            isActive:true,

        },
    ]
  return (
    <FlatList
    data={PrefData}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>{
        return(
          <View style={styles.prefView}>
            <View style={styles.userDetails}>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Image source={item.Profileimage} style={{width:34,height:34,borderRadius:100}} />
                            <View  style={[styles.isActive,{backgroundColor:item.isActive ? '#36F855' : 'red'}]}/>
                        </View>
                        <View style={{marginLeft:12}}>
                            <Text style={styles.useNmae}>{item.userName}</Text>
                                <View style={[styles.detailsView]}>
                                    <Text style={[styles.detailsText,{marginLeft:0}]}>{item.location}</Text>
                                    <View style={{width:5,height:5,backgroundColor:'black',borderRadius:100}}/>
                                    <Text style={styles.detailsText}>Currently Live</Text>
                                </View>
                        </View>
                    </View>
                    
                    <View style={[styles.createdTag]}>
                        <Text style={styles.createdText}>{'  '}</Text>
                    </View>
                </View>
            <View style={{marginTop:16}}>
                <Image source={item.image} style={{height:180,width:264}}/>       
                <View style={{marginHorizontal:16}}>
                    <View style={styles.details}>
                        <Text style={styles.detailTitle}>{item.postText}</Text>
                    </View>
                    <View style={styles.sendButton}>
                        <Text style={styles.sendText}>Request to join</Text>
                    </View>
                </View>
                
            </View>
            
        </View>
        )
    }}
    />
  )
}

export default Live

const styles = StyleSheet.create({
    prefView:{
        marginTop:16,
        paddingTop:16,
        height:356,
        width:264,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'white',
        marginRight:10,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
marginBottom:16
    },
    closeUp:{
        position:'absolute',
        top:10,
        right:10,
        backgroundColor:'white',
        height:32,
        width:32,
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center'
    },
    details:{
        
        alignItems:'center',
        marginTop:10,
    },
    detailName:{
        fontFamily:'EuclidSemiBold',
        color:'#272727',
        fontSize:14,
        textAlign:'center'

    },
    detailTitle:{
        fontFamily:'EuclidRegular',
        color:'#272727',
        fontSize:10,
        textAlign:'center',

    },
    sendButton:{
        alignItems:'center',
        backgroundColor:'#E10BF4',
        justifyContent:'center',
        alignContent:'center',
        borderRadius:8,
        paddingVertical:6,
        paddingHorizontal:12,
        marginTop:12,
    },
    sendText:{
        fontFamily:'EuclidSemiBold',
        color:'white',
        fontSize:10,
        padding:5,
        
        
    },
    userDetails:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:8
      
    },
    isActive:{
        width:12,
        height:12,
        backgroundColor:'#36F855',
        borderRadius:100,
        borderWidth:2,
        alignSelf:'flex-end',
        bottom:13,
        left:3,
        borderColor:'#fff'
    },
    useNmae:{
        fontFamily:'EuclidSemiBold',
        fontSize:14,
        color:'#272727'

    },
    detailsView:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:0

    },
    detailsText:{
        fontFamily:'EuclidRegular',
        fontSize:12,
        color:'#6E6E6E',
        marginHorizontal:8
    },
})