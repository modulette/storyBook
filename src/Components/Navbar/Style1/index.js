import React from 'react';
import NavbarContainer from '../../../Atoms/Navbar'
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';

const StyledRow = styled(Row)`
    .logo {
        max-height: 2.5em;
        margin-right: 10px;
    }

    .logoName {
        font-weight: 600;
        font-size: 1.5em;
        vertical-align: middle;
    }
`;

class Navbar1 extends React.Component {
    render() {
        return (
            <NavbarContainer >
                <StyledRow align="center">
                    <Col sm={2} >
                        <img className="logo" alt="Logo" src="/Tim.svg"></img>
                        <span className="logoName">modulette</span>
                    </Col>
                    <Col sm={this.props.spacer || 10}>
                    </Col>
                    <Col>
                        {this.props.children}
                    </Col>
                </StyledRow>
            </NavbarContainer>
        )
    }
}
export default Navbar1;