import React from 'react';
import StandardInput  from '../../../Atoms/Forms/TextInputField';
import ModuletteButton  from '../../../Atoms/StandardButton';
import styled from 'styled-components';

const SubmitButton = styled(ModuletteButton)`
    margin-top: 10px;
    &:hover, :active, :focus {
        background-color: #ff677e;
        border-color: #ff677e;
    }
`;

const PasswordForget = styled.span`
    color: ${props => props.theme.inputLabel};
    font-weight: 500;
    padding: 5px 0;
    display: block;
    text-align: center;
    padding-top: 19px;
`;

class SigninForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
      }
    
      handleSubmit(event) {
        event.preventDefault();
      }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <StandardInput name="email" type="text" width="100%" label="Email address" value={this.state.email} onChange={this.handleChange}></StandardInput>
                <StandardInput name="password" type="password" width="100%" label="Password" value={this.state.password} onChange={this.handleChange}></StandardInput>
                <SubmitButton glow width="100%" type="submit" mainColor="secondaryColor" textColor="lightText" label="Sign in" ></SubmitButton>
                <PasswordForget>Forgot your password?</PasswordForget>
            </form>
        )
    }
}
export default SigninForm