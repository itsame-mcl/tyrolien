import { Dialog } from '@capacitor/dialog';
import React from 'react';
import {
  Page,
  Icon,
  Navbar,
  NavTitle,
  Block,
  Row,
  Col,
  Button,
} from 'framework7-react';

const HomePage = () => {
  const showNotImplementedAlert = async () => {
    await Dialog.alert({
      title: 'Fonctionnalité non implémentée',
      message: 'Cette fonctionnalité sera prochainement disponible',
    });
  };

  return(
      <Page name="home">
        {/* Top Navbar */}
        <Navbar sliding="{false}">
          <NavTitle>Tyrolien</NavTitle>
        </Navbar>
        {/* Toolbar */}
        {/* Page content */}

        <Block>
          <Row nogap>
            <Col width="25"></Col>
            <Col width="50">
              <Button fill raised href="/new_game/"><Icon ios="f7:play_circle_fill" aurora="f7:play_circle_fill" md="material:play_circle_fill"></Icon>Jouer</Button>
            </Col>
            <Col width="25"></Col>
          </Row>
          <Row nogap>
            <Col width="25"></Col>
            <Col width="50">
              <Button fill raised onClick={showNotImplementedAlert}><Icon ios="f7:sort_up" aurora="f7:sort_up" md="material:leaderboard"></Icon>Meilleurs Scores</Button>
            </Col>
            <Col width="25"></Col>
          </Row>
          <Row nogap>
            <Col width="25"></Col>
            <Col width="50">
              <Button fill raised href="/options/"><Icon ios="f7:gear" aurora="f7:gear" md="material:settings"></Icon>Options</Button>
            </Col>
            <Col width="25"></Col>
          </Row>
        </Block>
      </Page>
  )
}
export default HomePage;