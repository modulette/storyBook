import crypto from '../crypto';
import { testPW, testHash, publicKey, privateKey} from './fixtures';

// @TODO - add mock implementations to all of the methods that use dom APIs

describe('Crypto Utils', () => {
    let testIv;
    let encryptedHash;

	it('Should hash password', async () => {
        const hash = await crypto.hashPassword(testPW);
        expect(hash instanceof ArrayBuffer).toEqual(true);
        expect(hash.byteLength).toEqual(32);
    });
    it('Should convert array buffer to hex string', () => {
        const hexStr = crypto.hashToHex(testHash);
        expect(hexStr).toBe(testHash);
        expect(typeof hexStr).toEqual("string");
    });
    it('Should encrypt a string', async () => {
        const encryption = await crypto.encryptHash(testHash, publicKey);
        testIv = encryption.iv;
        encryptedHash = encryption.encryptedHash;
        expect(encryption).toEqual(expect.objectContaining({
            encryptedHash: expect.anything(),
            iv: expect.anything(),
        }));
    });
    it('Should decrypt encrypted data', async () => {
        const decryption = await crypto.decryptHash(testIv, privateKey,encryptedHash)
        const hash = crypto.hashToHex(decryption)
        expect(hash).toEqual(testHash)
    });
});