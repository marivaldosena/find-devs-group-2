import { Platform } from 'react-native';
import { Linking } from 'expo-linking'

import * as WebBrowser from 'expo-web-browser';

export default async function urlOpener(url, redirectURL) {

    const { type, url: newURL } = await WebBrowser.openAuthSessionAsync(
        url,
        redirectURL
    );

    if (type === 'success' && Platform.OS === 'ios') {
        WebBrowser.dismissBrowser();
        return Linking.openURL(newURL)
    }
}