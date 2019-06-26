import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            show: 0
        }
    }
    onClickButton = () => {
        this.setState({
            show: 1
        })
    }

    onSubmitForm =(event) => {
        event.preventDefault();
        var text = event.target.text.value;
        this.setState({
            text: text,
            show: 0
        })
    }

    render() {
        return (
            <div className="border">
                <h4>{this.state.text}</h4>
                <button onClick={this.onClickButton}>Edit</button>
                <form onSubmit={(event) => this.onSubmitForm(event)} className={this.state.show === 0 ? 'd-none' : 'd-block'}>
                    <input name="text" type="text"/>
                    <input type="submit" value="update"/>
                </form>
            </div>
        )
    }
}
