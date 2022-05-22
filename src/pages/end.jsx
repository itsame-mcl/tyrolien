import React from 'react';
import { Page, Navbar, Row, Col, Block, Button } from 'framework7-react';
import store from '../js/store';

const EndPage = () => {
    const win = store.getters.erreur_actuelle.value <= store.getters.erreur_maximum.value;
    return (
      <Page>
          <Navbar title={win ? "Victoire !" : "Défaite !"} backLink="Back" backLinkUrl="/" backLinkForce={true} />
          <Button fill raised href="/">Quitter</Button>
      </Page>
    );
}

export default EndPage;