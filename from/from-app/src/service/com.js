//const dotenv = require('dotenv').config();
let URL_API = process.env.URL_API


const get = async ( ) => {
    var options = {
        method: 'GET',
        headers: {Accept: 'application/json', 'User-Agent': 'Thunder Client (https://www.thunderclient.com)'}
    }
    return await fetch(URL_API + '/get', options);
}

const set = async (name, area) => {
    var options = {
        method: "post",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({ "name": name, "content": area})
    }
    return await fetch(URL_API + '/set', options);
}

export {
    get,
    set
}
