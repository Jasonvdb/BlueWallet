/* global alert */
import React, { Component } from 'react';
import { View, InteractionManager } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import bip21 from 'bip21';
import {
  BlueLoading,
  SafeBlueArea,
  BlueCopyTextToClipboard,
  BlueButton,
  BlueButtonLink,
  BlueNavigationStyle,
  is,
} from '../../BlueComponents';
import PropTypes from 'prop-types';
import Privacy from '../../Privacy';
import Share from 'react-native-share';
/** @type {AppStorage} */
let BlueApp = require('../../BlueApp');
let loc = require('../../loc');

export default class ReceiveDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    ...BlueNavigationStyle(navigation, true),
    title: loc.receive.header,
    headerLeft: null,
  });

  constructor(props) {
    super(props);
    let address = props.navigation.state.params.address;
    let secret = props.navigation.state.params.secret;

    this.state = {
      address: address,
      secret: secret,
      addressText: '',
      bip21encoded: undefined,
    };
  }

  async componentDidMount() {
    Privacy.enableBlur();
    console.log('receive/details - componentDidMount');

    /**  @type {AbstractWallet}   */
    let wallet;
    let address = this.state.address;
    for (let w of BlueApp.getWallets()) {
      if ((address && w.getAddress() === this.state.address) || w.getSecret() === this.state.secret) {
        // found our wallet
        wallet = w;
      }
    }
    if (wallet) {
      if (wallet.getAddressAsync) {
        try {
          address = await Promise.race([wallet.getAddressAsync(), BlueApp.sleep(1000)]);
        } catch (_) {}
        if (!address) {
          // either sleep expired or getAddressAsync threw an exception
          console.warn('either sleep expired or getAddressAsync threw an exception');
          address = wallet._getExternalAddressByIndex(wallet.next_free_address_index);
        } else {
          BlueApp.saveToDisk(); // caching whatever getAddressAsync() generated internally
        }
      }
      this.setState({
        address: address,
        addressText: address,
      });
    } else {
      alert('There was a problem obtaining your receive address. Please, try again.');
      this.props.navigation.goBack();
      this.setState({
        address,
        addressText: address,
      });
    }

    InteractionManager.runAfterInteractions(async () => {
      const bip21encoded = bip21.encode(this.state.address);
      this.setState({ bip21encoded });
    });
  }

  componentWillUnmount() {
    Privacy.disableBlur();
  }

  render() {
    return (
      <SafeBlueArea style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View style={{ marginTop: 32, alignItems: 'center', paddingHorizontal: 16 }}>
            {this.state.bip21encoded === undefined ? (
              <View style={{ alignItems: 'center', width: 300, height: 300 }}>
                <BlueLoading />
              </View>
            ) : (
              <QRCode
                value={this.state.bip21encoded}
                logo={require('../../img/qr-code.png')}
                size={(is.ipad() && 300) || 300}
                logoSize={90}
                color={BlueApp.settings.foregroundColor}
                logoBackgroundColor={BlueApp.settings.brandingColor}
                ecl={'H'}
                getRef={c => (this.qrCodeSVG = c)}
              />
            )}
            <BlueCopyTextToClipboard text={this.state.addressText} />
          </View>
          <View style={{ alignItems: 'center', alignContent: 'flex-end', marginBottom: 24 }}>
            <BlueButtonLink
              title={loc.receive.details.setAmount}
              onPress={() => {
                this.props.navigation.navigate('ReceiveAmount', {
                  address: this.state.address,
                });
              }}
            />
            <View>
              <BlueButton
                icon={{
                  name: 'share-alternative',
                  type: 'entypo',
                  color: BlueApp.settings.buttonTextColor,
                }}
                onPress={async () => {
                  if (this.qrCodeSVG === undefined) {
                    Share.open({ message: `bitcoin:${this.state.address}` }).catch(error => console.log(error));
                  } else {
                    InteractionManager.runAfterInteractions(async () => {
                      this.qrCodeSVG.toDataURL(data => {
                        let shareImageBase64 = {
                          message: `bitcoin:${this.state.address}`,
                          url: `data:image/png;base64,${data}`,
                        };
                        Share.open(shareImageBase64).catch(error => console.log(error));
                      });
                    });
                  }
                }}
                title={loc.receive.details.share}
              />
            </View>
          </View>
        </View>
      </SafeBlueArea>
    );
  }
}

ReceiveDetails.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func,
    state: PropTypes.shape({
      params: PropTypes.shape({
        address: PropTypes.string,
        secret: PropTypes.string,
      }),
    }),
  }),
};
