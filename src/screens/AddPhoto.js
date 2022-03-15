import React, {Component} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
    Alert,
    Dimensions,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import ModalPicker from '../components/ModalPicker';
import {addPost} from '../store/actions/posts';
import {connect} from 'react-redux';

const noUser = 'Você precisa estar logado para adicionar imagens!';

class AddPhoto extends Component {

    state = {
        image: null,
        comment: '',
        modalVisible:false,
    };

    componentDidUpdate = prevProps =>  {
        if(prevProps.loading && !this.props.loading){
            this.setState({image: null, comment:''});
            this.props.navigation.navigate('Feed');
        }
    }

    pickImage = () => {
        if(!this.props.name) {
            return Alert.alert('Falha!', noUser);
        }

        this.setState({modalVisible:true});
    }

    onPickImageFont = (pick) => {
        switch (pick) {
            case 'gallery':
                launchImageLibrary({maxHeight: 600, maxWidth: 800, includeBase64: true}, this.retornoPickImage);
                break;
            case 'camera':
                launchCamera({maxHeight: 600, maxWidth: 800, includeBase64: true}, this.retornoPickImage);
                break;
            default:
                break;
        }

        this.onCancel();
    }

    retornoPickImage = (res) => {
        if(!res.didCancel){
            this.setState({image:{uri:res.assets[0].uri, base64:res.assets[0].base64}})
        }
    }

    save = async () => {
        if(!this.props.name) {
            return Alert.alert('Falha!', noUser);
        }

        this.props.onAddPost({
            id: Math.random(),
            nickname:this.props.name,
            email: this.props.email,
            image:this.state.image,
            comments:[{
                nickname:this.props.name,
                comment:this.state.comment
            }]
        });

        this.setState({image:null, comment:''});
        // this.props.navigation.navigate('Feed');
    }

    onCancel = () => {
        this.setState({modalVisible:false});
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe uma imagem</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.button}>
                        <Text style={styles.buttonText}>Escolha a foto</Text>
                    </TouchableOpacity>
                    <TextInput placeholder='Algum comentário para a foto?'
                               style={styles.input} value={this.state.comment}
                               onChangeText={comment => this.setState({comment})}/>
                    <TouchableOpacity onPress={this.save} style={[styles.button, this.props.loading ? styles.buttonDisabled : null]} disabled={this.props.loading}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
                <ModalPicker visible={this.state.modalVisible} onCancel={this.onCancel} onPickImageFont={this.onPickImageFont}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold',
    },
    imageContainer:{
        width: '90%',
        height: Dimensions.get('window').width * 3 / 4,
        backgroundColor: '#EEE',
        marginTop: 10,
    },
    image:{
        width: '100%',
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'center',
    },
    button:{
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
    },
    buttonText:{
        fontSize: 20,
        color: '#FFF',
    },
    input: {
        marginTop: 20,
        width: '90%',
    },
    buttonDisabled:{
        backgroundColor:'#AAA'
    }
})

const mapStateToProps = ({user, posts}) => {
    return {
        name: user.name,
        email: user.email,
        loading: posts.isUploading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto);
