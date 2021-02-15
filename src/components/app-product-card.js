import React from "react";
import styled from 'styled-components';

const StyledCard = styled.div`
    background-color: white;
    border-radius:0.3rem;
`
const StyledSection = styled.article`
    border-radius: 0.3rem; 
    padding: 0.2rem 0rem 0.5rem;
    background-color: honeydew;
    &:not(:first-child){
        margin-top:0.5rem;
    }
`
const StyledTitle = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
    margin: 0;
    padding: 0.8rem;
`

const StyledImage = styled.img`
    max-width: 100%;
    width: 100%;
    max-height: 300px;
    object-fit: cover;
`
const StyledDescription = styled.p`
    padding: 0.8rem;
    margin: 0;
`
export const AppProductCard = (props) => {
    return (
        <StyledSection>
            <StyledCard>
                <StyledTitle>{props.title}</StyledTitle>
                <StyledImage src={props.img} />
                <StyledDescription>{props.text}</StyledDescription>
            </StyledCard>
        </StyledSection>
    );
}
