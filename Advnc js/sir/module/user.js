export let name = 'seema';
let age = '27';

export const code = () => console.log('coding..');

const cook = () => console.log('cooking...');

// importing account function in this file.
import { deposit } from "./account.js";
deposit();