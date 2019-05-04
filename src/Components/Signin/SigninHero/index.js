import React from 'react';
import styled from 'styled-components';

const Hero = styled.div`
    width: auto;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(http://civicagroup.com/wp-content/uploads/2017/01/2Pinecrest-Glades-Academy-RF-1349x900.jpg);
    background-color: #add4f5;
    background-blend-mode: multiply;
}
`;

class SigninHero extends React.Component {
    render() {
        return (
           <Hero></Hero>
        )
    }
}
export default SigninHero
