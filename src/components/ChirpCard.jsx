import React from 'react';

class ChirpCard extends React.Component {

    state = {
        clicked: false,
        counter: 0
    };

    render() {
        return (
            <div>
                <form className="d-flex justify-content-center">
                    <div className="form-group p-4" id="messageBoard">
                        <label htmlFor="nameDisplay">Username</label>
                        <p className="bg-primary p-3 text-white border rounded" onClick={() => this.setState({ clicked: true })}>@{this.props.userName}</p>
                        <label htmlFor="messageDisplay">Message</label>
                        <p className="bg-primary p-3 text-white border rounded"> {this.props.userMessage}</p>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary fa fa-thumbs-up" onClick={ e => {
                                e.preventDefault();
                                this.setState({ counter: this.state.counter + 1})
                                this.setState({ clicked: true });
                            }}>{this.state.counter}</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ChirpCard;