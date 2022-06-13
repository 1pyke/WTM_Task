import axios from "axios";

interface Token {
    token: string;
}
const BASS_URL = 'https://wtm-sample-apis.staging.wtmsrv.com/api/'
const Token = '' 


export const publicRequest = axios.create({
    baseURL: BASS_URL,
});
export const userRequest = axios.create({
    baseURL: BASS_URL,
    headers: { token: `Bearer ${Token}` }
});