

function normalizeURL(urlString){
    const myURL = new URL(urlString)
    let normalURL = /* myUrl.auth + */ myURL.host + myURL.pathname + myURL.search + myURL.hash
    if (normalURL.slice(-1) == '/'){
        normalURL = normalURL.slice(0, -1)
    }
    return normalURL
}

export {normalizeURL}