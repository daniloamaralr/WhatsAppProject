import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {checkLogin} from './actions/AuthActions';

export class Conversations extends Component{

    static navigationOptions = {
        title:'',
        header: null
    }

    constructor(props){
        super(props)
        this.state = {}

    }

    render(){
        return (
            <View style={styles.container}>
                <Text> Conversations Page {this.props.status}</Text>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:40,
        margin:10
    }
})

const mapStateToProps = (state) => {
    return{
        status:state.auth.status
    }
}

const ConversationsConnect = connect(mapStateToProps,{checkLogin})(Conversations)
export default ConversationsConnect
