import React, { useState } from 'react';
import { useStore, Page, Navbar, Block, BlockTitle, List, Stepper, ListItem } from 'framework7-react';
import store from '../js/store';

const OptionsPage = () => {
    const nombre_questions = useStore("nombre_questions");
    const erreur_maximum = useStore("erreur_maximum");
    const articles_ordonnes = useStore("articles_ordonnes");
    const [mode_perso_visible, setModePersoVisible] = useState(false);

    const onModeChange = (e) => {
        const value = e.target.value;
        if (value === "mode_classique") {
            store.dispatch("setNombreQuestions", {value: 3});
            store.dispatch("setErreurMaximum", {value: 25});
            store.dispatch("setArticlesOrdonnes", {value: true});
            setModePersoVisible(false);
        } else if (value === "mode_difficile") {
            store.dispatch("setNombreQuestions", {value: 3});
            store.dispatch("setErreurMaximum", {value: 20});
            store.dispatch("setArticlesOrdonnes", {value: false});
            setModePersoVisible(false);
        } else if (value === "mode_personnalise") {
            setModePersoVisible(true);
        }
    }
    return(
    <Page>
        <Navbar title="Options" backLink="Back" />
        <Block strong>
            <BlockTitle>Mode de jeu</BlockTitle>
            <List mediaList>
                <ListItem radio value="mode_classique" title="Mode classique"
                          subtitle="3 articles par ordre croissant de prix, 25 € d'erreur maximum"
                          name = "choix-mode"
                          onChange={(e) => onModeChange(e)} defaultChecked></ListItem>
                <ListItem radio value="mode_difficile" title="Mode difficile"
                          subtitle="3 articles en ordre aléatoire, 20 € d'erreur maximum"
                          name = "choix-mode"
                          onChange={(e) => onModeChange(e)}></ListItem>
                <ListItem radio value="mode_personnalise" title="Mode personnalisé"
                          name = "choix-mode"
                          onChange={(e) => onModeChange(e)}></ListItem>
            </List>
        </Block>
        <Block strong style={{display: mode_perso_visible ? "block": "none"}}>
            <BlockTitle>Options du mode personnalisé</BlockTitle>
            <List>
                <ListItem title="Nombre d'articles">
                    <Stepper fill value={nombre_questions} min={1} max={9} step={1} autorepeat={true}
                    onStepperChange={(e) => store.dispatch("setNombreQuestions", {value: e})}/>
                </ListItem>
                <ListItem title="Erreur maximum autorisée">
                    <Stepper fill value={erreur_maximum} min={10} max={99} step={1} autorepeat={true}
                             onStepperChange={(e) => store.dispatch("setErreurMaximum", {value: e})}/>
                </ListItem>
                <ListItem checkbox
                          value="articles_ordonnes"
                          checked={articles_ordonnes}
                          title="Ordonner les articles par prix croissant"
                          onChange={(e) => store.dispatch("setArticlesOrdonnes", {value: e.target.checked})}></ListItem>
            </List>
        </Block>
    </Page>);
};

export default OptionsPage;