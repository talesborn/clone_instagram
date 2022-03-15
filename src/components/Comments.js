import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

class Comments extends Component {

    state = {};

    render() {
        let view = null;
        if(this.props.comments){
            view = this.props.comments.map((item,index)=> {
                return (
                    <View style={styles.commentContainer} key={index}>
                        <Text style={styles.nickname}>{item.nickname}</Text>
                        <Text style={styles.comment}>{item.comment}</Text>
                    </View>
                )
            })
        }
        return (
            <View style={styles.container}>
                {view}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 10,
        marginLeft: 20
    },
    commentContainer:{
        flexDirection: 'row',
        marginTop: 5,
        flexWrap: 'wrap',
    },
    nickname:{
        paddingRight:5,
        fontWeight: 'bold',
        color: '#444',
    },
    comment:{
        color: '#555',
    }
})

export default Comments;
