import React from 'react';
import SigninForm from '../../Components/Signin/SigninForm';
import SigninHeader from '../../Components/Signin/SigninHeader';
import SigninHero from '../../Components/Signin/SigninHero';
import { Container, Hidden, Row, Col } from 'react-grid-system';
import styled from 'styled-components';

const Logo = styled.div`
    position: absolute;
    z-index: 1;
    padding-left: 10%;
    margin-top: 25px;

    img {
        height: 40px;
    }
    img + span {
        margin-left: 10px;
        font-size: 1.5em;
        vertical-align: middle;
    }
}
`;
class Signin extends React.Component {
    render() {
        return (
                <Container fluid style={{ height: "100%" }}>
                <Logo> 
                <img src="/Tim.svg" alt="Tim" /> 
                <span>Modulette</span>
                </Logo>
                    <Row align="center" style={{ height: "100%" }}>
                        <Col lg={6} md={7} sm={12} style={{ padding: "0 10%" }}>
                            <SigninHeader></SigninHeader>
                            <SigninForm></SigninForm>
                        </Col>
                        <Col style={{ alignSelf: 'normal', padding: '0px' }} lg={6} md={5}>
                            <Hidden sm xs>
                                <SigninHero></SigninHero>
                            </Hidden>

                        </Col>
                    </Row>
                </Container>
        )
    }
}
export default Signin;