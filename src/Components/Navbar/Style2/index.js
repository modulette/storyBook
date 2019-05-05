import React from './node_modules/react';
import NavbarContainer from '../../../Atoms/Navbar'
import styled from './node_modules/styled-components';
import { Row, Col } from 'react-grid-system';
import { FontAwesomeIcon } from './node_modules/@fortawesome/react-fontawesome'
import { faArrowLeft} from './node_modules/@fortawesome/free-solid-svg-icons';
import { ButtonIcon } from './node_modules/react-rainbow-components/components';

const StyledRow = styled(Row)`
    .logo {
        max-height: 2.5em;
        margin-left: 10px;
    }

    .logoName {
        font-weight: 600;
        font-size: 1.5em;
        vertical-align: middle;
    }

    .backArrow {
        max-height: 2.5em;
        margin-right: 10px;
    }
`;

class Navbar1 extends React.Component {
    render() {
        return (
            <NavbarContainer >
                <StyledRow align="center">
                    <Col sm={2} >
                        <ButtonIcon size="medium" icon={<FontAwesomeIcon icon={faArrowLeft} />} />
                    </Col>
                    <Col sm={8}>
                    </Col>
                    <Col sm={2} >
                        <img className="logo" alt="Logo" src="/Tim.svg"></img>
                        <span className="logoName">modulette</span>
                    </Col>
                </StyledRow>
            </NavbarContainer>
        )
    }
}
export default Navbar1;