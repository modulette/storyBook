import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Card, Textarea } from 'react-rainbow-components/components';
import styled from 'styled-components';
import StandardInput from '../../atoms/forms/textinput-field';
import ModuletteButton from '../../atoms/standard-button';
import NavbarStyle1 from '../../components/navbar/style1'


const CheckInButton = styled(ModuletteButton)`
margin-top: 10px;
&:hover, :active, :focus {
    background-color: #ff677e;
    border-color: #ff677e;
}
`;

const StyledForm = styled.form`
    padding: 15% 25%;
    text-align: center;
`;

const StyledCard = styled(Card)`
    padding: 15px;
    & h2 a {
        text-decoration: none;
        cursor: text;
    }
`;

class VisitorSignin extends React.Component {
    render() {
        return (
            <div style={{height: '100%'}}>
                <NavbarStyle1></NavbarStyle1>
                <Container style={{height: '100%'}}>
                    <Row style={{height: '100%'}} align="center">
                        <Col style={{marginTop: '70px'}}>
                            <StyledCard title='Visitor Sign in'>
                                <Container>
                                    <Row align="center">
                                        <Col>
                                            <StyledForm>
                                                <Row>
                                                    <Col>
                                                    <StandardInput type="text" width="100%" label="First Name" required ref={input => input && input.focus()}/>
                                                    </Col>
                                                    <Col>
                                                    <StandardInput type="text" width="100%" label="Last Name" required/>
                                                    </Col>
                                                </Row> 
                                                <Row>
                                                    <Col>
                                                    <Textarea label="Reason for visit" required placeholder="Meeting with John Smith at 11AM" />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                    <CheckInButton glow width="75%" type="submit" mainColor="secondaryColor" textColor="lightText" label="Check in" ></CheckInButton>
                                                    </Col>
                                                </Row>
                                            </StyledForm>
                                        </Col>
                                    </Row>
                                </Container>
                            </StyledCard>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default VisitorSignin;
