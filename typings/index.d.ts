// List all the functions
declare class OpenRobotAPI {
    private token: string;
    constructor(token: string);

    request(object: {url: string}):Promise<JSON>;
    lyrics(object: {query: string}):Promise<JSON>;
    celebrities(object: {url: string}):Promise<JSON>;
    ocr(object: {url: string}):Promise<JSON>;
    translate(object: {text: string, to_lang: string, from_lang: string}):Promise<JSON>;
    translate_languages():Promise<JSON>;
}

export = OpenRobotAPI;