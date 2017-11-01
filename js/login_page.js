import React, { Component } from 'react';
import {
    Image,
    View,
    Dimensions,
    StyleSheet,
    AppRegistry,
    Platform,
} from 'react-native';

import { NavigationActions } from 'react-navigation'

import STRING from './const_string_zh_CN';

import { Container, Content, Footer, FooterTab, Button, Icon, Text, Form, Item, Label, Input } from 'native-base';
const { width, height } = Dimensions.get('window');
const marginTop = Platform.OS === 'ios' ? 20 : 0;

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Tab'})
    ]
});


export default class page_login extends Component {
      render() {
          const { navigate } = this.props.navigation;
          return (
              <Container>
                  <Content>
                 
                      <Form style={StyleSheet.flatten(styles.form_style)}>
                          <Item floatingLabel>
                              <Label>{STRING.username}</Label>
                              <Input />
                          </Item>
                          <Item floatingLabel last>
                              <Label>{STRING.password}</Label>
                              <Input secureTextEntry/>
                          </Item>
                       </Form>
                       <Button block light style={StyleSheet.flatten(styles.button_default)}
                       onPress={() => {navigate('Tab');
                                       this.props.navigation.dispatch(resetAction);}
                                   }>
                            <Text>{STRING.login}</Text>
                       </Button>
                   </Content>
               </Container>
          );
      }
  }

const styles = StyleSheet.create({
    button_default: {
        marginTop: 60,
        width: width / 2,
        alignSelf: 'center',
    },
    form_style: {
        width: width / 2,
        alignItems: 'center',
        alignSelf: 'center',
    }
  });
