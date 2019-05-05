import React from './node_modules/react';
import styled from './node_modules/styled-components';
import { Container } from 'react-grid-system';

const Bar = styled.div`
    width: 100vw;
    background-color: white;
    box-shadow: 0px 0px 5px 0px #bbb8b8;
    padding: 20px 7%;
    position: absolute;
`;

class NavbarContainer extends React.Component {
    render() {
        return (
            <Bar>
                <Container>
                        {this.props.children}
                </Container>
            </Bar>
        )
    }
}
export default NavbarContainer
