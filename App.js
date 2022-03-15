import React, {Component} from 'react';
import {View} from 'react-native';
import Feed from './src/screens/Feed';

class App extends Component {

    state = {};

    render() {

        const comments = [{
            nickname:'Teilor H. Born',
            comment: 'Que lindo cara!',
        },{
            nickname:'Junior Figueiredo',
            comment: 'Onde fica esse lugar?',
        }];

        return (
            <View style={{flex:1}}>
                <Feed/>
            </View>
        );
    }
}

export default App;
