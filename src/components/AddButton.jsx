import { StyleSheet, Text, View,TouchableWithoutFeedback,Animated } from 'react-native'
import React,{useState,useRef,useEffect} from 'react'
import { AntDesign,FontAwesome,FontAwesome5,Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AddButton = ({opened,toggleOpened}) => {
    const navigation = useNavigation();

    const animation= useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(animation, {
          toValue: opened ? 1 : 0,
          duration: 300,
          friction: 2,
          useNativeDriver: false,
        }).start();
      }, [opened, animation]);
      const opacity = {
        opacity: animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, 0, 1],
        }),
      };
  return  <View style={styles.container}>
    
    <TouchableWithoutFeedback>
        <Animated.View style={[styles.item,
        opacity,
         {
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -60],
                }),
              },
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -50],
                }),
              },
              {
                scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                    }),
              }
            ],
          },
        ]}>
            <FontAwesome name="video-camera" size={24} color="#E10BF4" />
        </Animated.View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback>
        <Animated.View style={[styles.item,
          opacity,
         {
            transform: [
              
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -80],
                }),
              },
              {
                scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                    }),
              }
            ],
          },
        ]}>
            <FontAwesome5 name="pencil-alt" size={24} color="#E10BF4" />
        </Animated.View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={()=>navigation.navigate("Live")}>
        <Animated.View style={[styles.item,
          opacity,
         {
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 60],
                }),
              },
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -50],
                }),
              },
              {
                scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                    }),
              }
            ],
          },
        ]}>
            <Entypo name="video" size={24} color="#E10BF4" />
        </Animated.View>
    </TouchableWithoutFeedback>
  <TouchableWithoutFeedback onPress={toggleOpened}  >
    <Animated.View style={[styles.addButton,{transform:[{rotate:animation.interpolate({
        inputRange:[0,1],
        outputRange:['0deg','45deg']
    })}]}
    ]}>
        <View>
        <AntDesign name="plus" size={24} color="#E10BF4" />

        </View>
    </Animated.View>
  </TouchableWithoutFeedback>
</View>
   
  
}

export default AddButton

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        height:0,
    },
    addButton:{
        position:'relative',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#E10BF4',
        width:48,
        height:48,
        borderRadius:50,
        borderWidth:1
    },
    item:{
        position:'absolute',
       
        width:48,
        height:48,
        borderRadius:50,
        borderColor:'#E10BF4',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1
    }
})