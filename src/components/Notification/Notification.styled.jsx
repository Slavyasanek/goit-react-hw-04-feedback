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

export const Notification = () => {
    return (
        <>
            <NotificationMessage>There is no feedback</NotificationMessage>
        </>
    )
}

