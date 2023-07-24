import { View, Text,StyleSheet, TextInput, Image, TouchableOpacity, Modal } from 'react-native'
import React,{useState,useRef} from 'react'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DiscoverList from '../components/DiscoverList';
import PostList from '../components/PostList';
import { FlatList } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Octicons,Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import HeaderTop from '../components/HeaderTop';
import Preferences from '../components/Preferences';
import Live from '../components/Live';
import TabContainer from '../components/TabContainer';
const statusBarHeight = getStatusBarHeight();
const Post=[
    {
        id:1,
        userName:'lagatha_24',
        image:require('../../assets/img/y.jpg'),
        location:'New York',
        time:'12:14pm',
        date:'Jun 24th',
        action:'Follow',
        likes:12,
        comments:12,
        views:123,
        downloads:2000,
        postText:"My process for making birthday cakes, take a look, my recipe is attached to this post.",
        type:'isVideo',
        url:require('../../assets/img/Cook.mp4') ,
        thumbnail:'https://picsum.photos/id/292/3852/2556',
        isActive:true
    },
    {
        id:2,
        userName:'Fas_Dev',
        image:require('../../assets/img/c.jpg'),
        location:'Lagos',
        time:'05:14pm',
        date:'Mar 24th',
        action:'Unfollow',
        likes:12,
        comments:12,
        views:123,
        downloads:2000,
        postText:"A picture of my codebase, I'm working on a new project, I'll be sharing the link soon.",
        type:'isImage',
        url:'https://picsum.photos/id/0/5000/3333',
        thumbnail:'https://picsum.photos/id/0/5000/3333',
        isActive:true

    },
    {
        id:3,
        userName:'Wazobia.tech',
        image:require('../../assets/img/f.jpg'),
        location:'Lagos',
        time:'05:14pm',
        date:'Mar 24th',
        action:'Follow',
        likes:12,
        comments:12,
        views:123,
        downloads:2000,
        postText:"A video of our last meetup, we had a lot of fun, we'll be having another meetup soon, stay tuned.",
        type:'isVideo',
        url:require('../../assets/img/meet.mp4') ,
        thumbnail:'https://picsum.photos/id/348/3872/2592',
        isActive:false

    },
]
const HomeScreen = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [activeVideoId, setActiveVideoId] = useState(null);
    const [likedItems, setLikedItems] = useState([]);
    const [liked, setLiked] = useState(false);
    const handlePlayPause = (videoId) => {
      setActiveVideoId((prevActiveId) =>
        prevActiveId === videoId ? null : videoId
      );
    };
    const handleLike = (itemId) => {
        setLikedItems((prevLikedItems) =>
          prevLikedItems.includes(itemId)
            ? prevLikedItems.filter((id) => id !== itemId)
            : [...prevLikedItems, itemId]
        );
        if (likedItems.includes(itemId)) {
            setModalContent('Unliked');
          } else {
            setModalContent('Liked');
          }
        setLiked(true);
        setTimeout(() => setLiked(false), 1000);
      };
  
      const isItemLiked = (itemId) => likedItems.includes(itemId);
    const video = useRef(null);

    const FooterComp=()=>{
        return(
       <TabContainer>
        <View style={{ marginBottom:40}}>
                <View style={styles.discoverHeader}>
                    <Text style={styles.discoverHeaderText}>Based on your preferences</Text>
                    <Text style={styles.discoverHeaderSubText}>See All</Text>
                </View>
                <Preferences/>
                <View style={styles.discoverHeader}>
                    <Text style={styles.discoverHeaderText}>Currently Live</Text>
                    <Text style={styles.discoverHeaderSubText}>See All</Text>
                </View>
                <Live/>
            </View>
        </TabContainer>
        )
    }

  return (
    <View style={styles.container}>
        <Modal visible={liked} transparent={true} animationType='fade'>
            <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center'}}>
           <View style={{backgroundColor:'white',padding:40,borderRadius:20}}>
                <AntDesign 
                            name={modalContent==='Liked'? 'heart':'hearto' }
                            size={24} 
                            
                            color={modalContent==='Liked'? "#E10BF4" : "#525252"}
                        
                />
            </View>
            </View>
        </Modal>
      <FlatList
        data={Post}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item)=>item.id.toString()}
        ListHeaderComponent={HeaderTop}
        renderItem={({item})=>(
            <View style={{marginVertical:16}}>
                <View style={styles.userDetails}>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Image source={item.image} style={{width:34,height:34,borderRadius:100}} />
                            <View  style={[styles.isActive,{backgroundColor:item.isActive ? '#36F855' : 'red'}]}/>
                        </View>
                        <View style={{marginLeft:12}}>
                            <Text style={styles.useNmae}>{item.userName}</Text>
                                <View style={[styles.detailsView]}>
                                    <Text style={[styles.detailsText,{marginLeft:0}]}>{item.location}</Text>
                                    <View style={{width:5,height:5,backgroundColor:'black',borderRadius:100}}/>
                                    <Text style={styles.detailsText}>{item.date}, {item.time}</Text>
                                </View>
                        </View>
                    </View>
                    
                    <View style={[styles.createdTag,{backgroundColor: item.action === 'Follow' ? '#E10BF4' : 'green' }]}>
                        <Text style={styles.createdText}>{item.action}</Text>
                    </View>
                </View>

                <View style={styles.content}>
                    <Text style={styles.postContent}>{item.postText}</Text>
                    {item.type === 'isVideo' ? (
                        <View style={{borderRadius:8,overflow:'hidden'}}>
                          <Video
                          videoStyle={{borderRadius:80}}
                       source={item.url}
                       shouldPlay={activeVideoId === item.id}
                       style={{ height:241 }}
                       isMuted={true}
                       posterSource={{uri:item.thumbnail}}
                       resizeMode='contain'
                       
                     /> 
                     <TouchableOpacity  onPress={() => handlePlayPause(item.id)} style={{position:'absolute',top:100,right:170,backgroundColor:"#E10BF4",padding:8,borderRadius:50}}>
                            
                     {activeVideoId === item.id ? (
                    <Ionicons name="ios-pause" size={24} color="#fff" />
                  ) : (
                    <Ionicons name="ios-play" size={24} color="#fff" />
                  )}
                            </TouchableOpacity>
                        </View>
                      
                    ):(
                        <Image source={{uri:item.url}} style={{width:'100%',height:200,borderRadius:8}}  />
                    )}
                </View>

                <View style={styles.activity}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.postText}>{item.views} <Text style={{color:'#6E6E6E'}}>Views</Text></Text>
                        <View style={{width:5,height:5,backgroundColor:'black',borderRadius:100}}/>
                        <Text style={styles.postText}>{item.likes} <Text style={{color:'#6E6E6E'}}>Likes</Text></Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.postText}>{item.comments} <Text style={{color:'#6E6E6E'}}>Comments</Text></Text>
                        <View style={{width:5,height:5,backgroundColor:'black',borderRadius:100}}/>
                        <Text style={styles.postText}>{item.downloads} <Text style={{color:'#6E6E6E'}}>Downloads</Text></Text>
                    </View>

                </View>
                                   
                <View style={styles.activityButtons}>
                        <AntDesign 
                        name={isItemLiked(item.id) ? 'heart' : 'hearto'}
                         size={24} 
                         
                         color={isItemLiked(item.id) ? "#E10BF4" : "#525252"}
                         onPress={() =>handleLike(item.id)}
                         />
                        <MaterialCommunityIcons name="comment-processing-outline" size={24} color="#525252" />
                        <Octicons name="download" size={24} color="#525252" />
                        <EvilIcons name="share-google" size={24} color="#525252" />
                        <Octicons name="bookmark" size={24} color="#525252" />
                    </View>
            </View>
        )
        }
        ListFooterComponent={FooterComp}
        />
    </View>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: statusBarHeight,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    headerText: {
        fontFamily:'EuclidSemiBold',
        fontSize:16,
        color:'#272727'
    },
    headerSubTitle: {
        fontFamily:'EuclidRegular',
        fontSize:12,
        color:'#272727'
    },
    notiBell: {
        borderColor: '#E0E0E0',
        padding: 10,
        borderRadius: 6,
        borderWidth: 1,
        
    },
    searchBarView: {
        marginTop: 20,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor:'#E0E0E0',
        borderWidth:1,
        padding: 10,
        borderRadius: 6,
    },
    searchBarText: {
        flex:1,
        padding:2,
        borderRightWidth:1,
        borderRightColor:'#BCBCBC',
        marginRight: 10,
        color:'#BCBCBC',
        fontFamily:'EuclidRegular',
        fontSize:12,
        marginLeft: 8,
    },
    discoverHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    discoverHeaderText: {
        fontFamily:'EuclidSemiBold',
        fontSize:14,
        color:'#272727'
    },
    discoverHeaderSubText: {
        fontFamily:'EuclidRegular',
        fontSize:12,
        color:'#EB5CF8'
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
    userDetails:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
      
    },
    createdTag:{
        backgroundColor:'#E10BF4',
        // alignSelf:'flex-end',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:8,
        borderWidth:1,
        borderColor:'#fff'

    },
    isActive:{
        width:12,
        height:12,
        backgroundColor:'#36F855',
        borderRadius:100,
        borderWidth:2,
        flex:1,
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
    createdText:{
        color:'#fff',
        fontFamily:'EuclidRegular',
        fontSize:14
    },
    activity:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:16

    },
    postText:{
        fontFamily:'EuclidSemiBold',
        fontSize:10,
        color:'#232323',
        marginHorizontal:4
    },
    postContent:{
        fontFamily:'EuclidRegular',
        fontSize:12,
        color:'#272727',
        marginHorizontal:4,
        marginBottom:16
    },
    activityButtons:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        marginTop:16
    },
});