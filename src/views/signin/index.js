import React from 'react';
import SigninForm from '../../components/signin/signin-form';
import SigninHeader from '../../components/signin/signin-header';
import SigninHero from '../../components/signin/signin-hero';
import { Container, Hidden, Row, Col } from 'react-grid-system';
import styled from 'styled-components';

const Logo = styled.div`
    position: absolute;
    background: ${props => props.theme.pageColor};
    z-index: 1;
    padding-left: 10%;
    padding-top: 25px;

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
function Signin(props) {
    return (
        <Container fluid style={{ height: "100%" }}>
            <Logo>
                <img src="/Tim.svg" alt="Tim" />
                <span>Modulette</span>
            </Logo>
            <Row align="center" style={{ height: "100%" }}>
                <Col lg={6} md={7} sm={12} style={{ padding: "0 10%", marginTop: '70px'}}>
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
export default Signin;
