const fetch = require('node-fetch');
const {URL, URLSearchParams} = require('url');
let version = require("./package.json").version;

class OpenRobotAPI {
    constructor (token) {
        let baseURL = 'https://api.openrobot.xyz/api';
        this.baseURL = baseURL;
        this.token = token;
    }

    async request(url) {
        try {
            const res = await fetch(url, {
                headers: {
                    'Authorization': this.token
                }
            });
            return await res.json();
        }
        catch (e) {
            return `Error: ${e}`;
        }
    }

    async lyrics(query) {
        let final_url = this.baseURL + `/lyrics/${encodeURIComponent(query)}`;
        return await this.request(final_url);
    }

    async celebrities(url) {
        let final_url = this.baseURL + `/celebrity?url=${encodeURIComponent(url)}`;
        return await this.request(final_url);
    }

    async ocr(url) {
        let final_uri = this.baseURL + `/ocr?url=${encodeURIComponent(url)}`;
        return await this.request(final_uri);
    }

    async translate(text, to_lang, from_lang = 'auto') {
        let from_lang = from_lang || 'auto';
        let final_uri = this.baseURL + `/translate?text=${encodeURIComponent(text)}&to_lang=${to_lang}&from_lang=${from_lang}`;
        return await this.request(final_uri);
    }

    async translate_languages() {
        let final_uri = this.baseURL + '/translate/languages'
        return await this.request(final_uri)
    }
}