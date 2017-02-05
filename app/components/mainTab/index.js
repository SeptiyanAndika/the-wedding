import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Header,Title,View,Text } from 'native-base';
import appTheme from '../../themes/appTheme';
import HomeFragment from '../home'
import MapFragment from '../map'
import GiftFragment from '../gift'
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  StyleSheet
} from 'react-native';

export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {currentFragment: 'home'};

    }

    _renderFragment() { // eslint-disable-line class-methods-use-this
        switch (this.state.currentFragment) {
        case 'map':
            return <MapFragment />;
        case 'home':
            return <HomeFragment />;
        case 'gift':
            return <GiftFragment />;
        default :
            return <HomeFragment />;
        }
    }

    replaceFragment(name) {
        this.setState({currentFragment:name})
     }


    render() {
        return (
            <Container theme={appTheme}>
                <Header>
                    <Title>The Wedding</Title>
                </Header>
                    <Content contentContainerStyle={{flex: 1}} style={{backgroundColor:'#E3F2FD'}}>
                        { this._renderFragment()}
                    </Content>

                <Footer >
                    <FooterTab>
                        <Button onPress={() => this.replaceFragment('home')}>
                            Home
                             <Icon name='ios-apps-outline' />
                        </Button>
                        <Button onPress={() => this.replaceFragment('map')}>
                            <Icon name='ios-pin-outline' />
                            Location
                        </Button>
                        <Button onPress={() => this.replaceFragment('gift')}>
                            <Icon name='ios-pizza-outline' />
                             Gift
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});