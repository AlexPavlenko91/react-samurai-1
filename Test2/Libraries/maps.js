import openYandex from './yandex.js';
import openGoogle from './../google.js';

let openAllMaps = () => {
    openGoogle();
    openYandex();
}

export default openAllMaps;