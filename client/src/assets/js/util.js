
function getCookie(key) {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
}

function greet() {
    let currentTime = new Date();
    let greet = Math.floor(currentTime.getHours() / 3);
    switch (greet) {
        case 7:
        case 8:
        case 0:
        case 1:
            return ('Good night!');
        case 2:
        case 3:
            return ('Good morning!');
        case 4:
        case 5:
            return ('Good afternoon!');
        case 6:
            return ('Good evening!');
        default:
            return ('Hello!')
    }
}

export { getCookie, greet }