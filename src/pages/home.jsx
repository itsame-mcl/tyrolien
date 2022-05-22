import React from 'react';
import {
    Page,
    Navbar,
    NavTitle,
    Block,
    Row,
    Col,
    Button
} from 'framework7-react';

const HomePage = () => (
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
                <Button fill raised href="/new_game/">Jouer</Button>
            </Col>
            <Col width="25"></Col>
        </Row>
        <Row nogap>
            <Col width="25"></Col>
            <Col width="50">
                <Button fill raised href="/high_scores/">Meilleurs Scores</Button>
            </Col>
            <Col width="25"></Col>
        </Row>
        <Row nogap>
            <Col width="25"></Col>
            <Col width="50">
                <Button fill raised href="/options/">Options</Button>
            </Col>
            <Col width="25"></Col>
        </Row>
    </Block>
  </Page>
);
export default HomePage;