import React, { Component } from 'react';
import { WebView,View} from 'react-native';
import Config from '@assets/config';

export default class GiftFragment extends Component {

    render() {
        return (

            <WebView  source={{uri: Config.paypalme}}/>
                
        );
    }

 
}