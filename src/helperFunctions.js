export const trimURL = url => {
    let trimmedWebsite = "";
    let http = /http:\/\//;
    let https = /https:\/\//;

    if (https.test(url)) {
        trimmedWebsite = url.split(https)[1];
    } else if (http.test(url)) {
        trimmedWebsite = url.split(http)[1];
    }

    if (trimmedWebsite[trimmedWebsite.length - 1] == "/") {
        trimmedWebsite = trimmedWebsite.slice(0, trimmedWebsite.length - 1);
    }

    return trimmedWebsite;
}

export const formatNameForLink = name => {
    let newName = name.toLowerCase();
    let test = /[^a-zA-Z0-9\s]/;
    let newNameArray = newName.split("");
    let filteredNameArray = newNameArray.filter(l => {
        if (test.test(l)) {
            return false;
        }
        return true;
    })
    let hyphenatedNameArray = filteredNameArray.map(l => {
        if (/^[\s]/.test(l)) {
            return "-";
        }
        return l;
    })
    return hyphenatedNameArray.join("");
}