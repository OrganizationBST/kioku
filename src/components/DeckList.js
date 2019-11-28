import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from '../App.css';
import uuid from 'uuid';
import DeckModal from './DeckModal';

class DeckList extends Component {
    state = {
        decks: [
            { id: uuid(), name: 'Hiragana' },
            { id: uuid(), name: 'Katakana' },
        ]
    }

    createDeck = (name) => {
        if(name) {
            this.setState(state => ({
                decks: [...state.decks, {id: uuid(), name}]
            }))
        }
    }

    render() {
        const { decks } = this.state;
        return(
            <Container>
                <DeckModal createDeck={this.createDeck}></DeckModal>

                <ListGroup>
                    <TransitionGroup className="deck-list">
                        {decks.map(({ id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem className="item">
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default DeckList;