import React from 'react';
import {v4 as uuidv4} from 'uuid';
import ChirpCard from './components/ChirpCard';
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            chirps: [{
                userName: "Fitz",
                userMessage: "I want food right meow!",
                id: uuidv4()
            }]
        }
    }

    nameInput = e => {
        this.setState({ name: e.target.value });
    }
    messageInput = e => {
        this.setState({ message: e.target.value });
    }
    render() {
        return <>
            <div className="navBar">
                <nav >
                    Chirper |
                    Birdhouse |
                    Birdbath |
                    Birdfeed |
                    Flyin |
                    Flyout
                </nav>
            </div>
            <form className="d-flex justify-content-center p-2"  >
                <div className="form-group p-4" id="chirperForm">
                    <label htmlFor="nameDisplay">Username</label>
                    <input className="form-control" value={this.state.name} onChange={this.nameInput} id="displayMessage" cols="30" rows="10"></input>

                    <label htmlFor="messageDisplay">Message</label>
                    <textarea className="form-control p-2" value={this.state.message} onChange={this.messageInput} id="chirpMessage" cols="30" rows="4"></textarea>
                    <div className="d-flex justify-content-end m-2">
                        <button className="btn btn-primary"
                            onClick={e => {
                                e.preventDefault();
                                let chirpCopy = this.state.chirps.slice();
                                chirpCopy.unshift({
                                    userName: this.state.name,
                                    userMessage: this.state.message,
                                    id: uuidv4()
                                });
                                this.setState({ chirps: chirpCopy });
                                this.setState({
                                    name: '',
                                    message: ''
                                })
                            }}>Chirp!</button>
                    </div>
                </div>
            </form>
            {this.state.chirps.map((element) => {
                return (
                    <ChirpCard key={element.id} userName={element.userName} userMessage={element.userMessage} />
                )
            })}
        </>
    }
}

export default App;