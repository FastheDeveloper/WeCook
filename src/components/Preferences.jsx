import { View, Text,FlatList, Image,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Preferences = () => {

    const [prefData, setPrefData] =useState([
        {
            id:1,
            name:'Nini Cho',
            title:'Chief chef, Nini pastries',
            image:require('../../assets/img/p.jpg')
        },
        {
            id:2,
            name:'Usman Ali',
            title:'Sous chef, Al-amir',
            image:require('../../assets/img/z.jpg')

        },
        {
            id:3,
            name:'Farouq Seriki',
            title:'Chief chef, Fas pastries',
            image:require('../../assets/img/v.jpg')

        },
        {
            id:4,
            name:'Musa Florentina',
            title:'Sous chef, Fly pastries',
            image:require('../../assets/img/n.jpg')

        },
        {
            id:5,
            name:'Rachael Diablo',
            title:'Sous chef, Mom\'s Spaghetti ',
            image:require('../../assets/img/m.jpg')

        }, 
    ])
    const handleItemClose = (itemId) => {
        setPrefData((prevData) => prevData.filter((item) => item.id !== itemId));
      };
  return (
    <FlatList
    data={prefData}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>{
        return(
          <View style={styles.prefView}>
            <Image source={item.image} style={{height:104,width:164}}/>
            <View style={styles.closeUp} >
            <Ionicons name="close" size={24} color="black" onPress={() => handleItemClose(item.id)} />
            </View>
            <View style={styles.details}>
                <Text style={styles.detailName}>{item.name}</Text>
                <Text style={styles.detailTitle}>{item.title}</Text>
            </View>
            <View style={styles.sendButton}>
                <Text style={styles.sendText}>Send friend request</Text>
            </View>
        </View>
        )
    }}
    />
  )
}

export default Preferences

const styles = StyleSheet.create({
    prefView:{
        marginTop:16,
        height:200,
        width:164,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'white',
        marginRight:10,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,
marginBottom:20,
elevation: 4,
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
        marginTop:10
    },
    detailName:{
        fontFamily:'EuclidSemiBold',
        color:'#272727',
        fontSize:14

    },
    detailTitle:{
        fontFamily:'EuclidRegular',
        color:'#272727',
        fontSize:10
    },
    sendButton:{
        alignItems:'center',
    },
    sendText:{
        fontFamily:'EuclidSemiBold',
        color:'white',
        fontSize:10,
        padding:5,
        backgroundColor:'#E10BF4',
        borderRadius:8,
        paddingVertical:6,
        paddingHorizontal:12,
        marginTop:12
    }
})