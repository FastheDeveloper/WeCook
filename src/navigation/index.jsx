import React, { useContext, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ChatList from '../screens/ChatList';
import Convo from '../screens/Convo';
import Live from '../screens/Live';
import BottomTabs from './bottomTabs';
import { TabContextProvider } from '../context/TabContext';
const Stack = createNativeStackNavigator();

const Nvigation = () => {


  return (



   <TabContextProvider>

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabs} />
       <Stack.Screen name="Convo" component={Convo} />
       <Stack.Screen name="Live" component={Live} />

    </Stack.Navigator>
    </TabContextProvider>

  );
};
export default Nvigation
