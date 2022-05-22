import React, { useState, useEffect } from 'react';
import { Page, Navbar, Block, Progressbar, Row, Button } from 'framework7-react';
import store from '../js/store';

const AnswerPage = (props) => {
    const question = store.getters.article_actuel.value;
    const [tauxErreur, setTauxErreur] = useState(store.getters.erreur_actuelle.value * 100/store.getters.erreur_maximum.value);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const erreur = Math.abs(Math.floor(question.price.amount) - parseInt(props.proposition));
            setTauxErreur((store.getters.erreur_actuelle.value + erreur) * 100/store.getters.erreur_maximum.value);
            store.dispatch("setErreurActuelle", {value: store.getters.erreur_actuelle.value + erreur});
            setReady(true);
        },2000);
        return () => clearTimeout(timer);
    }, [])

  return (
    <Page>
        <Navbar title={"Objet " + store.getters.question_actuelle.value + " / " + store.getters.nombre_questions.value}
                backLink="Back" backLinkUrl="/" backLinkForce={true} />
        <Block>
            <Progressbar progress={tauxErreur}/>
        </Block>
        <Block strong>
            <Row>{question.title}</Row>
            <Row>{"Votre proposition : " + props.proposition + "." + (question.price.amount * 100) % 100 + " €"}</Row>
            <Row>{"Bonne réponse : " + question.price.amount + " €"}</Row>
        </Block>
        <Button fill raised href="/next/" style={{display: ready ? "block": "none"}}>Continuer</Button>
    </Page>
  );
}

export default AnswerPage;
