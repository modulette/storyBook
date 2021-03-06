import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Card } from 'react-rainbow-components/components';
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

class StudentSignin extends React.Component {
    render() {
        return (
            <div style={{height: '100%'}}>
                <NavbarStyle1></NavbarStyle1>
                <Container style={{height: '100%'}}>
                    <Row style={{height: '100%'}} align="center">
                        <Col style={{marginTop: '70px'}}>
                            <StyledCard title='Student Sign in'>
                                <Container>
                                    <Row align="center">
                                        <Col>
                                            <StyledForm>
                                                <StandardInput type="text" width="100%" label="Student ID Number" required ref={input => input && input.focus()}/>
                                                <CheckInButton glow width="75%" type="submit" mainColor="secondaryColor" textColor="lightText" label="Check in" ></CheckInButton>
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
export default StudentSignin;
