/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Initial from '../pages/Initial';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
// import Volunteer from '../pages/Volunteer';
// import Donate from '../pages/Donate';
import Gallery from '../pages/Gallery';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          //   position: 'absolute',
          //   bottom: 25,
          //   left: 20,
          //   right: 20,
          //   elevation: 0,
          //   borderRadius: 15,
          //   height: 50,
          //   backgroundColor: '#ab82ff',
        },
      }}>
      {/* <Tab.Screen name="Initial" component={Initial} /> */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={require('../assets/logo/botao-home.png')}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? '#ab82ff' : '#748c94',
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: focused ? '#ab82ff' : '#748c94',
                }}>
                Home
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Projects"
        component={Projects}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={require('../assets/logo/blueprint.png')}
                style={{
                  height: 21,
                  width: 21,
                  tintColor: focused ? '#ab82ff' : '#748c94',
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: focused ? '#ab82ff' : '#748c94',
                }}>
                Projects
              </Text>
            </>
          ),
        }}
      />
      {/* <Tab.Screen name="Contact" component={Contact} /> */}
      <Tab.Screen
        name="Gallery"
        component={Gallery}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={require('../assets/logo/gallery.png')}
                style={{
                  height: 21,
                  width: 21,
                  tintColor: focused ? '#ab82ff' : '#748c94',
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: focused ? '#ab82ff' : '#748c94',
                }}>
                Gallery
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={require('../assets/logo/contact-mail.png')}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? '#ab82ff' : '#748c94',
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: focused ? '#ab82ff' : '#748c94',
                }}>
                Contact
              </Text>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Initial">
        <Stack.Screen name="Main" component={Tabs} />
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        {/* <Stack.Screen name="Main" component={Tabs} /> */}
        <Stack.Screen name="Projects" component={Projects} />
        {/* <Stack.Screen name="Contact" component={Contact} /> */}
        {/* <Stack.Screen name="Volunteer" component={Volunteer} /> */}
        {/* <Stack.Screen name="Donate" component={Donate} /> */}
        <Stack.Screen name="Gallery" component={Gallery} />
      </Stack.Navigator>
      {/* <Tabs /> */}
    </NavigationContainer>
  );
}
