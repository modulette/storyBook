import React from './node_modules/react';
import StandardInput from '../../../atoms/forms/textinput-field';
import ModuletteButton from '../../../atoms/standard-button';
import styled from './node_modules/styled-components';
import crypto from '../../../utils/crypto';
import axios from './node_modules/axios';

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

    async handleSubmit(event) {
        event.preventDefault();
        const pw = this.state.password;
        const hash = await crypto.hashPassword(pw)
        const spki = await axios.get('/nonce');
        const encryption = await crypto.encryptHash(hash, spki);
        axios.post('/login', encryption);
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