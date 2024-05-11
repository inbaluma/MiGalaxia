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
        let iconLike;
        let iconDislike;
        if (this.state.userFeedback > 0) { // Like
            iconLike = <FontAwesomeIcon icon="fas fa-thumbs-up" />;
            iconDislike = <FontAwesomeIcon icon="far fa-thumbs-down" />;
        }
        else if (this.state.userFeedback < 0) { // Dislike
            iconLike = <FontAwesomeIcon icon="far fa-thumbs-up" />;
            iconDislike = <FontAwesomeIcon icon="fas fa-thumbs-down" />;
        }
        else { // Neutral
            iconLike = <FontAwesomeIcon icon="far fa-thumbs-up" />;
            iconDislike = <FontAwesomeIcon icon="far fa-thumbs-down" />;
        }

        return (
            <div id="feedback" className="text-center">
                <button className="btn btn-success mx-2" onClick={this.giveFeedback} data-like="1">
                    {this.item.getLikes()}
                    &nbsp;
                    {iconLike}
                </button>
    
                <button className="btn btn-danger mx-2" onClick={this.giveFeedback} data-like="0">
                    {this.item.getDislikes()}
                    &nbsp;
                    {iconDislike}
                </button>
            </div>
        )
    }

}
export default Feedback;