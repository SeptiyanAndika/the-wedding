import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import { Container} from 'native-base';

import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import Images from '@assets/images';

const {
  replaceAt,
} = actions;


class SplashPage extends Component {

  static propTypes = {
  replaceAt: React.PropTypes.func,
   navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceRoute(route) {
    this.props.replaceAt('splashscreen', { key: route }, this.props.navigation.key);
  }

  componentWillMount() {
    setTimeout(() => {
     this.replaceRoute('home')
    }, 1500);
  }
  
  render() {
    return (
      <Container style={styles.container}>
        <View style={{width:400,height:400}} >
          <Image source={Images.splashImage} 
            style={styles.imageFitView}/>
         </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  imageFitView: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }
});


function bindActions(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key))
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});


export default connect(mapStateToProps, bindActions)(SplashPage);