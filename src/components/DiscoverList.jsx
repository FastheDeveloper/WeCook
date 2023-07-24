import { View, Text,FlatList, ImageBackground,StyleSheet } from 'react-native'
import React from 'react'

const DiscoverList = () => {
    catData=[
        {
            id:1,
            name:'Sammy Zayn',
            age:'24',
            address:'SOUTHAMPTON',
            image:require('../../assets/img/g.jpg'),
            createdAt:'NEW'
        },
        {
            id:2,
            name:'Clara Simps',
            age:'25',
            address:'LONDON',
            image:require('../../assets/img/y.jpg'),
            createdAt:'NEW'
        },
        {
            id:3,
            name:'Joshsy',
            age:'19',
            address:'FLORIDA',
            image:require('../../assets/img/b.jpg'),
            createdAt:'NEW'
        },
        {
            id:4,
            name:'Samantha',
            age:'21',
            address:'SAN DIEGO',
            image:require('../../assets/img/d.jpg'),
            createdAt:'OLD'
        },
        {
            id:5,
            name:'Aryan',
            age:'27',
            address:'INDIA',
            image:require('../../assets/img/h.jpg'),
            createdAt:'OLD'
        },
        {
            id:6,
            name:'Gretha',
            age:'23',
            address:'CAPE TOWN',
            image:require('../../assets/img/a.jpg'),
            createdAt:'NEW'
        },
    ]
  return (
    <FlatList
    data={catData}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>{
        return(
            <ImageBackground source={item.image} style={styles.imageBG}>
               <View style={[styles.createdTag,{backgroundColor: item.createdAt === 'NEW' ? '#E10BF4' : 'green' }]}>
                <Text style={styles.createdText}>{item.createdAt}</Text>
               </View>
               <View style={styles.detailTags}>
                <View style={styles.nameAge}>
                    <Text style={styles.name}>{item.name} • {item.age}</Text>
                    <Text style={styles.age}></Text>
                </View>
                <View style={styles.address}>
                    <Text style={styles.addressText}>{item.address}</Text>
                    </View>
               </View>
            </ImageBackground>
        )
    }}
    />
  )
}

export default DiscoverList

const styles = StyleSheet.create({
    imageBG:{
        width:150,
        height:200,
        marginRight:10,
        // justifyContent:'flex-end',
        padding:10,
        borderRadius:8,
        overflow:'hidden'
    },
    createdTag:{
        backgroundColor:'#E10BF4',
        alignSelf:'flex-end',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:8,
        borderWidth:1,
        borderColor:'#fff'

    },
    createdText:{
        color:'#fff',
        fontFamily:'EuclidRegular',
        fontSize:14
    },
    nameAge:{
        flexDirection:'row',

    },
    detailTags:{
        justifyContent:'flex-end',
        flex:1,
        paddingBottom:10,
        alignItems:'center'
 },
    name:{
        color:'#fff',
        fontFamily:'EuclidSemiBold',
        fontSize:14,
        marginRight:5
    },
    addressText:{
        color:'#fff',
        fontFamily:'EuclidRegular',
        fontSize:14,


    }
})