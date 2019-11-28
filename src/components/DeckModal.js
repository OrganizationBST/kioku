import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class DeckModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.createDeck(this.state.name);
        this.toggle();
    }

    render () {
        return (
            <div>
                <Button style={{backgroundColor: '#db9989', marginBottom: '2rem', border: 'none'}} onClick={this.toggle}>Create Deck</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Create Deck</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="deck">Name for deck:</Label>
                                <Input 
                                    type="text" 
                                    name="name" 
                                    id="deckName"
                                    onChange={this.onChange}
                                />
                                <Button style={{backgroundColor: '#db9989', marginTop: '2rem', border: 'none'}} block >Add</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default DeckModal;