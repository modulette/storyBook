import React, { Component } from 'react';
import styled from 'styled-components';
import api from '../../../utils/api';
import crypto from '../../../utils/crypto';
import StandardInput from '../../../atoms/forms/textinput-field';
import ModuletteButton from '../../../atoms/standard-button';

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

class SigninForm extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (event)=> {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (event)=>{
        event.preventDefault();
        const { email, password } = this.state;
        const hash = await crypto.hashPassword(password)
        const spki = await api.getPublicKey();
        const encryptedPW = await crypto.encryptHash(hash, spki);
        await api.login({ email, auth: encryptedPW });
    }

    render() {
        const { email, password } = this.state;
        const { handleChange, handleSubmit } = this;

        return (
            <form onSubmit={handleSubmit}>
                <StandardInput name="email" type="text" label="Email address" value={email} onChange={handleChange} />
                <StandardInput name="password" type="password" label="Password" value={password} onChange={handleChange} />
                <SubmitButton glow width="100%" type="submit" mainColor="secondaryColor" textColor="lightText" label="Sign in" />
                <PasswordForget>Forgot your password?</PasswordForget>
            </form>
        )
    }
}

export default SigninForm;