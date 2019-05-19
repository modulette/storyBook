import React, { useState } from 'react';
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

function SigninForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const [hash, spki] = await Promise.all([
            crypto.hashPassword(password),
            api.getPublicKey()
        ]);
        const encryptedPW = await crypto.encryptHash(hash, spki);
        await api.login({ email, auth: encryptedPW });
    }

    return (
        <form onSubmit={handleSubmit}>
            <StandardInput name="email" type="text" label="Email address" value={email} onChange={e => setEmail(e.target.value)} />
            <StandardInput name="password" type="password" label="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <SubmitButton glow width="100%" type="submit" mainColor="secondaryColor" textColor="lightText" label="Sign in" />
            <PasswordForget>Forgot your password?</PasswordForget>
        </form>
    )
}

export default SigninForm;