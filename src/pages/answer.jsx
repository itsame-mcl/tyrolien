import React, { useRef, useState, useEffect } from 'react';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Howl, Howler } from 'howler';
import {
    Page,
    Navbar,
    Block,
    Row,
    Col,
    Button,
    useStore
} from 'framework7-react';
import Tyrolien from '../components/tyrolien';
import store from '../js/store';

const AnswerPage = (props) => {
    const question = store.getters.article_actuel.value;
    const erreur_maximum = useStore("erreur_maximum");
    const [erreur_affichee, setErreurAffichee] = useState(store.getters.erreur_actuelle.value);
    const [reponse_affichee, setReponseAffichee] = useState(parseInt(props.proposition) + (question.price.amount % 1));
    const [iterations, setIterations] = useState(-1);
    const [ready, setReady] = useState(false);
    const isInitialMount = useRef(true);

    const correctSound = new Howl({ src: ["/sounds/correct.wav"] });
    const erreurSound = new Howl({ src: ["/sounds/erreur.wav"] });
    const criSound = new Howl({ src: ["/sounds/cri.wav"] });
    const tyrolienSong = new Howl({ src: ["/music/yodel-long.mp3"] });
    const tyrolienShortSong = new Howl({ src: ["/music/yodel-court.mp3"] });

    const hapticsImpactHeavy = async () => {
        await Haptics.impact({ style: ImpactStyle.Heavy });
    };
    const hapticsImpactMedium = async () => {
        await Haptics.impact({ style: ImpactStyle.Medium });
    };
    const hapticsVibrate = async () => {
        await Haptics.vibrate();
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            const erreur = Math.abs(Math.floor(question.price.amount) - parseInt(props.proposition));
            setIterations(Math.min(erreur, erreur_maximum - erreur_affichee + 1));
            store.dispatch("setErreurActuelle", { value: store.getters.erreur_actuelle.value + erreur });
            if (erreur > 0) {
                erreurSound.play();
                if (erreur_maximum - erreur_affichee > 10) {
                    tyrolienSong.play();
                } else {
                    tyrolienShortSong.play();
                }
            }
        }, 2000);
        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            if (iterations > 0) {
                const timer = setTimeout(() => {
                    if (reponse_affichee < question.price.amount) {
                        setReponseAffichee(reponse_affichee + 1);
                    } else {
                        setReponseAffichee(reponse_affichee - 1);
                    }

                    setErreurAffichee(erreur_affichee + 1);
                    if (erreur_maximum - erreur_affichee > 10) {
                        hapticsImpactMedium();
                    } else {
                        hapticsImpactHeavy();
                    }
                    setIterations(iterations - 1);
                }, 1000);
                return () => clearTimeout(timer);
            }
            else {
                Howler.stop();
                if (erreur_affichee <= erreur_maximum) {
                    correctSound.play();
                }
                else {
                    criSound.play();
                    hapticsVibrate();
                    setReponseAffichee(question.price.amount);
                }
                setReady(true);
            }
        }
    }, [iterations])

    return (
        <Page>
            <Navbar title={"Objet " + store.getters.question_actuelle.value + " / " + store.getters.nombre_questions.value}
                backLink="Back" backLinkUrl="/" backLinkForce={true} />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Row nogap>
                <Col width="100" medium="100" large="50" style={{textAlign:'center'}}>
                    <Tyrolien actuel={erreur_affichee} max={erreur_maximum} />
                </Col>
                    <Col width="100" medium="100" large="35">
                        <Block strong>
                            <Row style={{ justifyContent: 'center' }}>{question.title}</Row>
                            <Row style={{ justifyContent: 'center' }}><span style={{ fontSize: "x-large" }}>{reponse_affichee.toFixed(2) + " €"}</span></Row>
                        </Block>
                    </Col>
                </Row>
            </div>
            <Button small fill round raised href="/next/" style={{ display: ready ? "block" : "none" }}>Continuer</Button>
        </Page>
    );
}

export default AnswerPage;
