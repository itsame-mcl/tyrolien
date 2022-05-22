import React from 'react';
import { Page, Navbar, Block, List, ListItem } from 'framework7-react';
import store from '../js/store';

const QuestionPage = () => {
    const question = store.getters.article_actuel.value;

    return (
        <Page>
            <Navbar title={"Objet " + store.getters.question_actuelle.value + " / " + store.getters.nombre_questions.value}
                    backLink="Back" />
            <Block strong>
                {question.title}
            </Block>
        </Page>
    );
}

export default QuestionPage;
