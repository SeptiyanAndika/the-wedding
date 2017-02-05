import React, { Component } from 'react';
import { Linking, StyleSheet,Image,PixelRatio,View} from 'react-native';
import { Button } from 'native-base';
import Config from '@assets/config';
import GoogleStaticMap from 'react-native-google-static-map';

const defaultMapScale = ()=> {
  const isRetina = PixelRatio.get() >= 2;
  return isRetina ? 2 : 1;
};

export default class MapFragment extends Component {

    static RootUrl = 'https://maps.googleapis.com/maps/api/staticmap';

    static defaultProps = {
        scale: defaultMapScale(),
        format: 'png',
        mapType: 'roadmap',
        hasCenterMarker: true,
        size:{
            width:300,
            height:300,
        },
        latitude:-6.266799,
        longitude:106.813716,
        zoom:18
    };

    get staticMapUrl() {
        const {
        latitude,
        longitude,
        zoom,
        size,
        scale,
        format,
        mapType
        } = this.props;

        const {width, height} = size;
        const rootUrl = this.constructor.RootUrl;

        return `${rootUrl}?center=${latitude},${longitude}&zoom=${zoom}&scale=${scale}&size=${width}x${height}&maptype=${mapType}&format=${format}&${this.markerParams}&${this.apiKeyParam}`;
    }

    get markerParams() {
        const {
        latitude,
        longitude,
        hasCenterMarker
        } = this.props;

        const markerParams = `markers=${latitude},${longitude}`;
        return hasCenterMarker ? markerParams : '';
    }

    render() {
        return (
                <View style={{alignItems:'center',marginTop:50, flex: 1}}>
                    <Image style={[this.props.size]} source={{uri: this.staticMapUrl}}/>
                    <Button style={{  marginTop: 20, alignSelf: 'center',width:300}}    
                        onPress={() => this.showDirection()}>
                        Show Direction
                    </Button>
                </View>
                
        );
    }

  showDirection() {
       Linking.openURL(`http://maps.apple.com/?ll=${this.props.latitude},${this.props.longitude}`)
  }
}