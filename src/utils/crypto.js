export default {
    hashPassword: (str) => {
        const encoder = new TextEncoder();
        const pwArrayBuffer = encoder.encode(str);
        return window.crypto.subtle.digest('SHA-256', pwArrayBuffer)
    },

    hashToHex: (buff) => {
        const byteArray = new Uint8Array(buff);
        const hexCodes = [...byteArray].map(value => {
            const hexCode = value.toString(16);
            const paddedHexCode = hexCode.padStart(2, '0');
            return paddedHexCode;
        });
        return hexCodes.join('');
    },

    strToArrBuff: (str) => {
        const b64 = window.atob(str);
        const buf = new ArrayBuffer(b64.length);
        const bufView = new Uint8Array(buf);
        for (let i = 0, b64Len = b64.length; i < b64Len; i++) {
            bufView[i] = b64.charCodeAt(i);
        }
        return buf;
    },

    importPublicKey: (spki) => {
        const binaryDer = this.strToArrBuff(spki);
        return window.crypto.subtle.importKey(
            "spki",
            binaryDer,
            {
                name: "RSA-OAEP",
                hash: "SHA-256"
            },
            false,
            ["encrypt"]
        );
    },

    importPrivateKey: function (pkcs8) {
        const binaryDer = this.strToArrBuff(pkcs8);
        return window.crypto.subtle.importKey(
            "pkcs8",
            binaryDer,
            {
                name: "RSA-OAEP",
                modulusLength: 4096,
                publicExponent: new Uint8Array([1, 0, 1]),
                hash: "SHA-256",
            },
            false,
            ["decrypt"]
        );
    },

    encryptHash: async (hash, spki) => {
        try {
            const key = await this.importPublicKey(spki)
            const iv = window.crypto.getRandomValues(new Uint8Array(12));
            try {
                const encryptedHash = await window.crypto.subtle.encrypt(
                    {
                        name: "RSA-OAEP",
                        iv: iv,
                    },
                    key,
                    hash
                );
                return { encryptedHash, iv };
            }
            catch (encryptError) {
                console.log(encryptError)
                Promise.reject(new Error(encryptError));
            }
        }
        catch (importError) {
            console.log(importError)
            Promise.reject(new Error(importError));
        }
    },

    decryptHash: async (vector, pkcs8, data) => {
        try {
            const key = await this.importPrivateKey(pkcs8);
            const decrypted = await crypto.subtle.decrypt(
                {
                    name: "RSA-OAEP",
                    iv: vector
                },
                key,
                data
            );
            return decrypted;
        }
        catch (err) {
            console.log(err)
            Promise.reject(new Error(err));
        }
    }
};