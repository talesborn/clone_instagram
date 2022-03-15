import React from 'react';
import {NavigationContainer, } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed from './screens/Feed';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';
import Splash from './screens/Splash';

const stackOptionsAuth = ({
    initialRouteName: 'Login',
    // headerShown:false,
})

const StackAuth = createNativeStackNavigator();

const StackNavigatorAuth = () => {
    return (
        <StackAuth.Navigator screenOptions={stackOptionsAuth}>
            <StackAuth.Screen name='Login' component={Login}/>
            <StackAuth.Screen name='Register' component={Register}/>
        </StackAuth.Navigator>
    )
}

const stackOptions = ({
    headerShown:false,
})

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackOptions}>
            <Stack.Screen name='Auth' component={StackNavigatorAuth}/>
            <Stack.Screen name='Profile' component={Profile}/>
        </Stack.Navigator>
    )
}

const screenOptions = ({route})=> ({
    initialRouteName:'Feed',
    tabBarShowLabel: false,
    headerShown:false,
    tabBarIcon: ({color}) => {
        let icon = '';
        if(route.name === 'Feed'){
            icon = <Icon name='home' size={30} color={color}/>;
        }else if(route.name === 'AddPhoto'){
            icon = <Icon name='camera' size={30} color={color}/>;
        } else if(route.name === 'LoginOrProfile'){
            icon = <Icon name='user' size={30} color={color}/>;
        }

        return icon;
    }
})

const Tab = createBottomTabNavigator();

const TabNavigator = ()=>{
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="AddPhoto" component={AddPhoto}/>
            <Tab.Screen name="LoginOrProfile" component={StackNavigator}/>
        </Tab.Navigator>
    );
}

const SplashStack = createNativeStackNavigator();

const splashStackOptions = ({
    headerShown:false,
    initialRouteName: 'Splash'
})

const SplashRouter = () => {
    return (
        <NavigationContainer>
            <SplashStack.Navigator screenOptions={splashStackOptions}>
                <SplashStack.Screen name='Splash' component={Splash}/>
                <SplashStack.Screen name='App' component={TabNavigator}/>
            </SplashStack.Navigator>
        </NavigationContainer>
    )
}

export default SplashRouter;

// export default TabNavigator;
