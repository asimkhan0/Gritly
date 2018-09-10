import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import { Container, Content, Header} from 'native-base';
import Text from '../components/CustomText';
import Footer from "../components/Footer";
import Input from '../components/Input';

export default class Search extends React.Component {

    static navigationOptions = {
        header: null
    };
    render() {
        return (
          <Container style={styles.container}>

              <Header style={styles.searchHeader}>
                  <Input
                      placeholder="Search"
                      style={styles.inputSearch}
                      onSubmitEditing={() => this.props.navigation.navigate('searchResults')}
                  />
                  <TouchableOpacity>
                      <Text regular style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
              </Header>

              <Content></Content>
              <Footer type={'action'} {...this.props} />
          </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF5FD'
    },
    searchHeader: {
        backgroundColor: '#F7F7F7',
        alignItems: 'center'
    },
    cancelText: {
        color:'#253851',
        fontSize: 12
    },
    inputSearch: {
        height: 40,
        paddingLeft:10,
        marginRight: 7
    }
});