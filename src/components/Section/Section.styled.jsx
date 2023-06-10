import styled from "styled-components";

export const SectionStyle = styled.section`
    padding-top: 20px;
    padding-bottom: 20px;
    &:first-of-type {
        padding-bottom: 0;
        padding-top: 100px;
    }
`
export const Container = styled.div`
    max-width: 300px;
    min-width: 300px;
    min-height: 140px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0px 15px 100px 0px rgba(0,0,0,0.38);
    background-color: #fcf3f0;
    padding: 10px;
    border-radius: 18px;
    border: 3px solid #756153;
    @media screen and (min-width: 768px) {
        max-width: 500px;
    }
`

export const SectionTitle = styled.h1`
  font-size: 25px;
  margin-bottom: 20px;
  color: #695359;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 36px;
  }
`