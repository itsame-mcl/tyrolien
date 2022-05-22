import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';

const NotFoundPage = () => (
  <Page>
    <Navbar title="Not found" backLink="Back" />
    <Block strong>
      <p>Erreur</p>
      <p>Impossible d'accéder à la fonctionnalité demandée.</p>
    </Block>
  </Page>
);

export default NotFoundPage;
