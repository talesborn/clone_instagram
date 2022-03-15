import React from 'react';
import {Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default props => {
    return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.visible}
                onRequestClose={props.onCancel}
                style={{backgroundColor:'green'}}
            >
                <TouchableWithoutFeedback onPress={props.onCancel}>
                    <View style={styles.modalSpaceTop}/>
                </TouchableWithoutFeedback>
                <View style={styles.modal}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={()=>props.onPickImageFont('gallery')}>
                            <View style={styles.buttonContainer}>
                                <Icon name='image' size={20} style={styles.buttonIcon}/>
                                <Text style={styles.buttonLabel}>Galeria</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={()=>props.onPickImageFont('camera')}>
                            <View style={styles.buttonContainer}>
                                <Icon name='camera' size={20} style={styles.buttonIcon}/>
                                <Text style={styles.buttonLabel}>Tirar Foto</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
    );
};

const styles = StyleSheet.create({
    modalSpaceTop:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modal:{
        backgroundColor: 'rgba(0,0,0,0.7)',
        width: Dimensions.get('window').width,
    },
    modalContainer:{
        backgroundColor:'#fff',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },
    modalTitle:{
        padding:20,
        borderBottomWidth:1,
        borderBottomColor:'rgba(0,0,0,0.2)',
        fontSize: 20,
        textAlign: 'center',
    },
    button:{
        padding:20,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    buttonIcon:{
        paddingHorizontal:5
    },
    buttonLabel:{
        fontSize:20,
    }
})
