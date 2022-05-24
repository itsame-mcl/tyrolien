import React, { useState } from 'react';
import { Page, Navbar, Row, Col, Block, Stepper, Button } from 'framework7-react';
import store from '../js/store';

const QuestionPage = () => {
    const question = store.getters.article_actuel.value;
    const [answer, setAnswer] = useState(10);

    return (
        <Page>
            <Navbar title={"Objet " + store.getters.question_actuelle.value + " / " + store.getters.nombre_questions.value}
                backLink="Back" backLinkUrl="/" backLinkForce={true} />
            <Block strong>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Row nogap>
                        {question.title}
                    </Row>
                </div>
            </Block>
            <Block>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Row nogap>
                    <Col width="100" medium="55" large="50">
                        <img src={"images/" + question._id.$oid + ".jpg"} width={'50%'} />
                    </Col>
                    <Col width="100" medium="35" large="40" style={{ marginLeft: '10%' }}>
                        <Stepper value={answer} min={10} max={99} step={1} autorepeat={true}
                            manualInputMode={true} decimalPoint={0} onStepperChange={(e) => setAnswer(e)} />
                        <span style={{ fontSize: "large" }}>{"." + (question.price.amount % 1).toFixed(2).slice(-2) + " €"}</span>
                        <Button fill raised href={"/answer/" + answer + "/"}>Valider</Button>
                    </Col>
                    </Row>
                </div>
            </Block>
        </Page>
    );
}

export default QuestionPage;
