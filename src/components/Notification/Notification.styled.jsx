import { Component } from "react";
import styled from "styled-components";

const NotificationMessage = styled.p`
    background-color: #b2bcbf;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 8px;
    padding: 10px;
    color: #444444;
    margin-bottom: 10px;
`;

class Notification extends Component {
    render() {
        return (
            <>
            <NotificationMessage>{this.props.message}</NotificationMessage>
            </>
        )
    }
}

export default Notification;