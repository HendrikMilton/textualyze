import * as deepl from 'deepl-node';

const authKey = process.env.DEEPL_AUTH_KEY ?? '';

export const translator = new deepl.Translator(authKey);
