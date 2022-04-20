import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';


import Homescreen from "../screens/HomeScreen/Homescreen"
import Chatroom from '../screens/HomeScreen/Chatroomscreen';
import Community from '../screens/HomeScreen/Comunityscreen';
import Userlist from '../screens/HomeScreen/Userlistscreen';
import Profile from '../screens/HomeScreen/Profilescreen';



const TabStack = createBottomTabNavigator ();

const tabstackscreen = () => {
    return(
        <TabStack.Navigator  screenOptions={({ route  }) => ({
           headerShown: false,
           
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name
  
              if (rn === 'home') {
                iconName = focused  ? 'home' : 'home-outline';
              } else if (rn === 'Community') {
                iconName = focused ? 'ios-list' : 'ios-list';
              }else if (rn === 'Chat') {
                iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              }else if (rn === 'Userlist') {
                iconName = focused ? 'people' : 'people-outline';
              }else if (rn === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              }
  
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#b7b4df',
            inactiveTintColor: '#9b59b6',
            style : {
              position : 'absolute',
              bottom : 25,
              left : 20,
              right : 20,
              elevation : 0,
              backgroundcolor : '#ffffff',
              borderRadius : 15,
              height : 90,
              
            }
            
          }}>
         <TabStack.Screen name="Community" component={Community}/>
            <TabStack.Screen name="Chat" component={Chatroom}/>
            <TabStack.Screen name="home" component={Homescreen}/>
            <TabStack.Screen name="Userlist" component={Userlist}/>
            <TabStack.Screen name="Profile" component={Profile}/>
        </TabStack.Navigator>
    );
};
export default tabstackscreen
