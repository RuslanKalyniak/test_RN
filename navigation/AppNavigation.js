import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '../screens/MainScreen';
import {FeedScreen} from '../screens/FeedScreen';
import {UserScreen} from '../screens/UserScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  const items = useSelector(state => state.items);
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{title: 'Main'}}
      />
      <Stack.Screen
        name="News"
        component={FeedScreen}
        options={{title: 'News'}}
      />
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{title: 'User'}}
      />
      <Stack.Screen
        name="Profile"
        component={items ? ProfileScreen : UserScreen}
        options={{title: 'Profile'}}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};
