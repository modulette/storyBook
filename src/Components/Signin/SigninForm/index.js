import React from 'react';
import StandardInput from '../../../Atoms/Forms/TextInputField';
import ModuletteButton from '../../../Atoms/StandardButton';
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
        const pw = this.state.password;
        this.hashPassword(pw)
            .then(hash => {
                console.log('RAW HASH')
                console.log(this.hashToHex(hash));
                this.encryptHash(hash)
            })
            .catch(err => {
                console.error(err);
            });

    }

    hashPassword(str) {
        const encoder = new TextEncoder();
        const pwArrayBuffer = encoder.encode(str);
        return window.crypto.subtle.digest('SHA-256', pwArrayBuffer)
    }

    hashToHex(buff) {
        const byteArray = new Uint8Array(buff);
        const hexCodes = [...byteArray].map(value => {
            const hexCode = value.toString(16);
            const paddedHexCode = hexCode.padStart(2, '0');
            return paddedHexCode;
        });
        return hexCodes.join('');
    }

    str2ab() {
        const byteStr = window.atob("MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAnomv/EVvXTDKoT3ZqU8wk3d2X9+71ChO9EVS/B8+3qwMiaRvfEpfWJd5QE5s4quA3A1scJ8iYvZnnBiPUWs4m/RCqt4fx4AvsZrE+rHX7psF1NoLOlxhwL8n7/SePBsqPvHSRPopXreXyqK2yNJw4FKJjDlhbskOh8v7nwIkf6QFm6rSQw3nUS8ACnzh38tfr0DLoWeFX5TZOyHVcxOWhQ9O5AEJqPMrJwMi2wT9XypnPfbHLif01/nyzZg4EPeD6y2FDWuigFnQ0P9dYdXMSKX1I2JO7XnLbwa1VXMU2o9wjJa3VG5Qlcj7y9xwkk61NRz+OTm3+UMhV7BoF2r/k9R6BjBzX1ur9UtTjfHmPxyDz2Mw4f5BU2LI0oI8NeqDdZtTAx4FkOAVUDfx88K0VV/Vwk1OOvfIx6C/MbgWTICo8sTVJW0Tc0RXNupK/yiovjxYmhGMaJ9bcqTA7GwLDO8rDdSJLXUZKEjjRSKdT9gA4Pug3imtVkxualTkxKxiibBHvGdtASrAOTJhsjubgYLV0NzlNovEX+aNlRqgtTGYpwIuSHKoMEA3xCpWMeLp1p5aecjasU3PAOtzXjjvU10P/jYXVycUvlIgSPbjuzO6hTqdjGl9t67AJlc6iQV/WsQHA1hB2S43iucqrq8xNOt+rT41gURK9PdDxucsX18CAwEAAQ==");
        const bytes = new Uint8Array(byteStr.length);
        for (let i = 0; i < byteStr.length; i++) {
            bytes[i] = byteStr.charCodeAt(i);
        }
        return bytes.buffer;
    }

    importKey() {
        const binaryDer = this.str2ab();
        console.log(binaryDer);
        return window.crypto.subtle.importKey(
            "spki",
            binaryDer,
            {
                name: "RSASSA-PKCS8-v1_5",
                hash: {
                    name: "SHA-256"
                },
                modulusLength: 4096,
                extractable: false,
                publicExponent: new Uint8Array([1, 0, 1])
            },
            true,
            ["encrypt", "sign", "verify"]
        );
    }

    async encryptHash() {
        this.importKey()
            .then(key => {
                console.log(key)
            })
            .catch(err => {
                console.error(err);
            });
        // window.crypto.subtle.encrypt(
        //     {
        //         name: "AES-GCM",
        //         iv: window.crypto.getRandomValues(new Uint8Array(12)),
        //     },
        //     key, 
        //     hash
        // )
        // .then(encrypted => {
        //     console.log("ENCRYPTED HASH")
        //     console.log(this.hashToHex(encrypted));
        //     this.decryptHash(encrypted)
        // })
        // .catch(err => {
        //     console.error(err);
        // });
    }

    decryptHash(encryptedData) {
        window.crypto.subtle.decrypt(
            {
                name: "AES-GCM",
                iv: ArrayBuffer(12)
            },
            "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAnomv/EVvXTDKoT3ZqU8wk3d2X9+71ChO9EVS/B8+3qwMiaRvfEpfWJd5QE5s4quA3A1scJ8iYvZnnBiPUWs4m/RCqt4fx4AvsZrE+rHX7psF1NoLOlxhwL8n7/SePBsqPvHSRPopXreXyqK2yNJw4FKJjDlhbskOh8v7nwIkf6QFm6rSQw3nUS8ACnzh38tfr0DLoWeFX5TZOyHVcxOWhQ9O5AEJqPMrJwMi2wT9XypnPfbHLif01/nyzZg4EPeD6y2FDWuigFnQ0P9dYdXMSKX1I2JO7XnLbwa1VXMU2o9wjJa3VG5Qlcj7y9xwkk61NRz+OTm3+UMhV7BoF2r/k9R6BjBzX1ur9UtTjfHmPxyDz2Mw4f5BU2LI0oI8NeqDdZtTAx4FkOAVUDfx88K0VV/Vwk1OOvfIx6C/MbgWTICo8sTVJW0Tc0RXNupK/yiovjxYmhGMaJ9bcqTA7GwLDO8rDdSJLXUZKEjjRSKdT9gA4Pug3imtVkxualTkxKxiibBHvGdtASrAOTJhsjubgYLV0NzlNovEX+aNlRqgtTGYpwIuSHKoMEA3xCpWMeLp1p5aecjasU3PAOtzXjjvU10P/jYXVycUvlIgSPbjuzO6hTqdjGl9t67AJlc6iQV/WsQHA1hB2S43iucqrq8xNOt+rT41gURK9PdDxucsX18CAwEAAQ==",
            encryptedData
        )
            .then(decrypted => {
                console.log("HASH AGAIN")
                console.log(this.hashToHex(decrypted));
            })
            .catch(err => {
                console.error(err);
            });
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