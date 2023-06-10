import styled from "styled-components";

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`

export const Button = styled.button`
    text-transform: uppercase;
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 18px;
    border: 3px solid;
    border-radius: 16px;
    cursor: pointer;
    color: white;
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
    transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
    ${(props) => {
        switch (props.feedbackType) {
            case 'good':
                return 'background-color: #73bf9d; border-color: #518a70';
            case 'bad':
                return 'background-color: #cc9376; border-color: #9e6e55';
            case 'neutral':
                return ' background-color:#a1d3d6; border-color: #5c8587';
            default: 
                return 'background-color: transparent';
        }
    }};
    &:hover, &:focus {
        opacity: 0.6;
    }
`;