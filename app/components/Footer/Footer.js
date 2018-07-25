import React from 'react';
import styles from './styles';
import {Button, Footer,FooterTab} from "native-base";
import Image from 'react-native-remote-svg';
// import Dashboard from '../../components/CustomSvgs/Add';
import { Add, Dashboard} from '../../components/CustomSvgs/index';

export default class CustomFooter extends React.Component {


    render() {

        return (
            <Footer>
                <FooterTab style={styles.container}>
                    <Button vertical>
                        {/*<Icon name="apps" />*/}
                        <Image source={require('../../../assets/Dashboard.svg')}/>
                    </Button>
                    <Button vertical>
                        <Image source={require('../../../assets/AllClients.svg')}/>
                    </Button>
                    <Button vertical>
                        {/*<Image source={require('../../../assets/Add.svg')}/>*/}
                        <Add />
                    </Button>
                    <Button vertical>
                        <Image source={require('../../../assets/Notifications.svg')}/>
                    </Button>
                    <Button vertical>
                        <Image source={require('../../../assets/Messages.svg')}/>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}