import React, { useState, useEffect } from 'react';
import { getDevice }  from 'framework7/lite-bundle';
import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';

import capacitorApp from '../js/capacitor-app';
import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {
  const device = getDevice();
  // Framework7 Parameters
  const f7params = {
    name: 'Tyrolien', // App name
      theme: 'auto', // Automatic theme detection


      id: 'fr.ensai.eleve.tyrolien', // App bundle ID
      // App store
      store: store,
      // App routes
      routes: routes,

      // Input settings
      input: {
        scrollIntoViewOnFocus: device.capacitor,
        scrollIntoViewCentered: device.capacitor,
      },
      // Capacitor Statusbar settings
      statusbar: {
        iosOverlaysWebView: true,
        androidOverlaysWebView: false,
      },
  };

  f7ready(() => {

    // Init capacitor APIs (see capacitor-app.js)
    if (f7.device.capacitor) {
      capacitorApp.init(f7);
    }
    // Call F7 APIs here
    store.dispatch("loadCatalogue", {path: "../assets/data/articles.json"});
  });

  return (
    <App { ...f7params } >

        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas" url="/" />

    </App>
  )
}
export default MyApp;
