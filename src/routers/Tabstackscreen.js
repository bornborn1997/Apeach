import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Homescreen from "../screens/HomeScreen/Homescreen"
import Chatroom from '../screens/HomeScreen/Chatroomscreen';
import Community from '../screens/HomeScreen/Comunityscreen';
import Userlist from '../screens/HomeScreen/Userlistscreen';
import Profile from '../screens/HomeScreen/Profilescreen';



const TabStack = createBottomTabNavigator ();

const tabstackscreen = () => {
    return(
        <TabStack.Navigator screenOptions={{headerShown : false}}>
         <TabStack.Screen name="Community" component={Community}/>
            <TabStack.Screen name="Chat" component={Chatroom}/>
            <TabStack.Screen name="home" component={Homescreen}/>
            <TabStack.Screen name="Userlist" component={Userlist}/>
            <TabStack.Screen name="Profile" component={Profile}/>
        </TabStack.Navigator>
    );
};
export default tabstackscreen
