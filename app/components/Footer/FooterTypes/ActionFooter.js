import React from 'react';
import {Button, Footer,FooterTab} from "native-base";
import Image from 'react-native-remote-svg';
import { Add } from '../../../components/CustomSvgs/index';
import ModalSelector from '../../ModalSelector';
import {StyleSheet} from "react-native";
import PropTypes from 'prop-types';

export default class CustomFooter extends React.Component {


    render() {
        const { onAdd } = this.props;
        let index = 0;
        const data = [
            { key: index++, section: true, label: 'Options' },
            { key: index++, label: 'Feed' },
            { key: index++, label: 'Programs' },
            { key: index++, label: 'About', accessibilityLabel: 'Tap here for cranberries' },
            // etc...
            // Can also add additional custom keys which are passed to the onChange callback
            { key: index++, label: 'Metrics', customKey: 'Not a fruit' },
            { key: index++, label: 'Notes' },
            { key: index++, label: 'Messages' },
            { key: index++, label: 'Delete' }
        ];
        return (
            <Footer>
                <FooterTab style={styles.container}>
                    <Button vertical>
                        {/*<Icon name="apps" />*/}
                        <Image source={require('../../../../assets/Dashboard.svg')}/>
                    </Button>
                    <Button vertical>
                        <Image source={require('../../../../assets/AllClients.svg')}/>
                    </Button>
                    {!onAdd?<ModalSelector
                            style={styles.modalSelector}
                            data={data}
                            supportedOrientations={['landscape']}
                            accessible={true}
                            scrollViewAccessibilityLabel={'Scrollable options'}
                            cancelText={'Cancel'}
                            onChange={(option)=>{ alert(`${option.label} (${option.key})`) }}


                        >
                            <Add />
                        </ModalSelector>:
                        <Button onPress={onAdd}>
                            <Add />
                        </Button>
                    }
                    <Button vertical>
                        <Image source={require('../../../../assets/Notifications.svg')}/>
                    </Button>
                    <Button vertical>
                        <Image source={require('../../../../assets/Messages.svg')}/>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#253851'
    },
    modalSelector: {
        justifyContent: 'center'
    }
})
