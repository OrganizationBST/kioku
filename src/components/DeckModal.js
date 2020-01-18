import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    CustomInput
} from 'reactstrap';
import * as convert from 'wanakana';

class DeckModal extends Component {
    state = {
        modal: false,
        addCards: false,
        name: ''
    }

    toggle = () => {
        const { modal } = this.state;
        this.setState({
            modal: !modal,
        });
        if(modal === false) {
            this.setState({ addCards: false});
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    toggleAddCards = () => {
        this.setState({ addCards: !this.state.addCards });
    }

    focusInputField = () => {
        const frontCard = document.getElementById("frontCard");
        const backCard = document.getElementById("backCard");
        
        frontCard.focus();
        if(document.getElementById("kana").checked) {
            frontCard.placeholder = "Type lowercase for Hiragana or uppercase for Katakana";
            frontCard.value = convert.toKana(frontCard.value);
            backCard.value = convert.toRomaji(frontCard.value, { upcaseKatakana: true });
        }
        else if(document.getElementById("romaji").checked) {
            frontCard.placeholder = "Type Romaji";
            frontCard.value = convert.toRomaji(frontCard.value, { upcaseKatakana: true });
            backCard.value = convert.toKana(frontCard.value);
        }
    }

    convertToKana = (e) => {
        const backCard = document.getElementById("backCard");

        if(document.getElementById("kana").checked) {
            e.target.value = convert.toKana(e.target.value, { IMEMode: true });
            backCard.value = convert.toRomaji(e.target.value, { upcaseKatakana: true });
        }
        else if(document.getElementById("romaji").checked){
            backCard.value = convert.toKana(e.target.value);
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        //this.props.createDeck(this.state.name);
        //this.toggle();
    }

    render () {
        if(this.state.addCards) {
            return (
                <div>
                    <Button style={{backgroundColor: '#db9989', marginBottom: '2rem', border: 'none'}} onClick={this.toggle}>Create Deck</Button>
    
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Add Card</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                        <div style={{display: 'flex'}}>
                                            <Label for="front">Front:</Label>
                                            <div className="custom-radio" style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                                                <CustomInput type="radio" id="kana" name="customRadio1" label="Kana" onClick={this.focusInputField}/>
                                                <CustomInput type="radio" id="romaji" name="customRadio1" label="Romaji" onClick={this.focusInputField}/>
                                            </div>
                                        </div>
                                        <Input 
                                            type="text" 
                                            name="front" 
                                            id="frontCard"
                                            style={{marginBottom: '1rem'}}
                                            onChange={this.convertToKana}
                                        />
                                        <Label for="back">Back:</Label>
                                        <Input 
                                            type="text" 
                                            name="back" 
                                            id="backCard"
                                        />
                                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                            <Button
                                                style={{backgroundColor: '#db9989', marginTop: '2rem', marginRight: '.25rem', width: '30%', border: 'none'}}
                                            >Done</Button>{' '}
                                            <Button
                                                style={{backgroundColor: '#db9989', marginTop: '2rem', marginLeft: '.25rem', width: '30%',border: 'none'}} 
                                            >Add</Button>
                                        </div>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
            );
        }
        else {
            return (
                <div>
                    <Button style={{backgroundColor: '#db9989', marginBottom: '2rem', border: 'none'}} onClick={this.toggle}>Create Deck</Button>
    
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Create Deck</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                        <Label for="deck" id="deckNameLabel">Name for deck:</Label>
                                        <Input 
                                            type="text" 
                                            name="name" 
                                            id="deckName"
                                            onChange={this.onChange}
                                        />
                                    <Button
                                        onClick={this.toggleAddCards} 
                                        style={{backgroundColor: '#db9989', marginTop: '2rem', border: 'none'}}
                                        block 
                                    >Add Cards</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
            );
        }
    }
}

export default DeckModal;