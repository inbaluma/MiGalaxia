import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Feedback extends React.Component {

    constructor(props) {
        super();

        this.item = props.item;

        this.state = {
            userFeedback: this.item.getUserFeedback()
        }
    }

    giveFeedback = (e) => {
        let element = e.target;
        let type = element.nodeName;

        let i = 0; // Por seguridad
        while (i < 10 && type !== "BUTTON") {
            element = element.parentNode;
            type = element.nodeName;
            i++;
        }

        if (type !== "BUTTON") {
            return;
        }

        if (element.getAttribute("data-like") === "1") { // Like
            this.item.like();        
        }
        else {
            this.item.dislike();
        }
        
        this.setState({userFeedback: this.item.getUserFeedback()})
    }

    render() {
        let botonLike;
        let botonDislike;

        if (this.state.userFeedback > 0) { // Like
            botonLike = <button className="btn btn-success mx-2" onClick={this.giveFeedback} data-like="1" aria-pressed="true" data-toggle="tooltip" title="Me gusta">
                {this.item.getLikes()}
                &nbsp;
                <span aria-label="me gusta">
                    <FontAwesomeIcon icon="fas fa-thumbs-up"/>
                </span>
            </button>

            botonDislike = <button className="btn btn-danger mx-2" onClick={this.giveFeedback} data-like="-1" aria-pressed="false" data-toggle="tooltip" title="No me gusta">
                {this.item.getDislikes()}
                &nbsp;
                <span aria-label="no me gusta">
                    <FontAwesomeIcon icon="far fa-thumbs-down"/>
                </span>
            </button>
        }
        else if (this.state.userFeedback < 0) { // Dislike
            botonLike = <button className="btn btn-success mx-2" onClick={this.giveFeedback} data-like="1" aria-pressed="false" data-toggle="tooltip" title="Me gusta">
                {this.item.getLikes()}
                &nbsp;
                <span aria-label="me gusta">
                    <FontAwesomeIcon icon="far fa-thumbs-up"/>
                </span>
            </button>

            botonDislike = <button className="btn btn-danger mx-2" onClick={this.giveFeedback} data-like="-1" aria-pressed="true" data-toggle="tooltip" title="No me gusta">
                {this.item.getDislikes()}
                &nbsp;
                <span aria-label="no me gusta">
                    <FontAwesomeIcon icon="fas fa-thumbs-down"/>
                </span>
            </button>
        }
        else { // Neutral
            botonLike = <button className="btn btn-success mx-2" onClick={this.giveFeedback} data-like="1" aria-pressed="false" data-toggle="tooltip" title="Me gusta">
                {this.item.getLikes()}
                &nbsp;
                <span aria-label="me gusta">
                    <FontAwesomeIcon icon="far fa-thumbs-up"/>
                </span>
            </button>

            botonDislike = <button className="btn btn-danger mx-2" onClick={this.giveFeedback} data-like="-1" aria-pressed="false" data-toggle="tooltip" title="No me gusta">
                {this.item.getDislikes()}
                &nbsp;
                <span aria-label="no me gusta">
                    <FontAwesomeIcon icon="far fa-thumbs-down"/>
                </span>
            </button>
        }

        return (
            <div id="feedback" className="text-center">
                {botonLike}
                {botonDislike}
            </div>
        )
    }

}
export default Feedback;