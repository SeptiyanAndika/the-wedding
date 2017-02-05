import React, { Component } from 'react';
import { View  } from 'native-base';
import {Text, StyleSheet } from 'react-native';
import Config from '@assets/config';
export default class HomeFragment extends Component {

    render() {
        return (
                <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                    <Text style={{ fontFamily: 'Zapfino',fontSize:28 }}>{Config.groom}</Text>
                     <Text style={{ fontFamily: 'Zapfino',fontSize:24,marginTop:-40 }}>&</Text>
                     <Text style={{ fontFamily: 'Zapfino',fontSize:28,marginTop:-25  }}>{Config.bride}</Text>
                     <Text style={{ fontFamily: 'Iowan Old Style',fontSize:20 }}>{Config.date}</Text>
                     <Text style={{ fontFamily: 'Iowan Old Style',fontSize:20 }}>{Config.time}</Text>
                     <Text style={{ fontFamily: 'Iowan Old Style',fontSize:20 }}>{Config.location.location}</Text>
                     <Text style={{ fontFamily: 'Iowan Old Style',fontSize:20 }}>{Config.location.address}</Text>
                      <Text style={{ fontFamily: 'Iowan Old Style',fontSize:20 }}>{Config.location.city}</Text>
                </View>
                
        );
    }
}