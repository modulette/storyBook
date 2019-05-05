import React from './node_modules/react';
import styled from './node_modules/styled-components';

const Header = styled.h1`
   color: ${props => props.theme.darkText};
   font-size: 3em;
   font-weight: 500;
`;
const SubHeader = styled.h3`
   color: ${props => props.theme.subText};
   font-size: 1.5em;
   font-weight: 400;
`;
const Spacer = styled.div`
    padding: 25px 0;
`;
class SigninHeader extends React.Component {
    render() {
        return (
            <div>
                <Header>Sign in</Header>
                <SubHeader>Please enter your creditials to proceed</SubHeader>
                <Spacer></Spacer>
            </div>
        )
    }
}
export default SigninHeader
