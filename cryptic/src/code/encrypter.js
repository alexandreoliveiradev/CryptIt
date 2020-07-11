export function encryptText(text) {

    if (text === undefined || text.trim() === "") {
        alert("Nothing to decrypt.");
        return "Nothing to encrypt.";
    }
    let output = "";
    {
        const chars = text.split('');

        for (let i = 0; i < chars.length; i++) {
            const c = chars[i];

            output = output.concat((String(replaceChar(c)).toString()));
        }
    }
    output = everySix(output);
    output = reverse(output);
    return output;
}

function everySix(text) {
    let output = "";
    const c = (text).split('');
    for (let i = 0; i < c.length; i++) {

        const chr = String(c[i]).toString();
        if (i > 4 && i % 3 === 0) {
            output = output.concat(every());
        }
        if (i === 0) {
            output = output.concat(begOrEnd());
        }
        output = output.concat(chr);
    }
    return output.concat(begOrEnd());
}

function begOrEnd() {
    const x = ((Math.random() * 10) | 0);
    if (x < 2) {
        return "»";
    } else if (x < 4) {
        return "«";
    } else if (x < 6) {
        return "=";
    } else if (x < 8) {
        return "£";
    } else {
        return "º";
    }
}


export function reverse(toReverse) {


    let string = toReverse.split('');

    const result = (function (s) {
        const a = [];
        while (s-- > 0)
            a.push(null);
        return a;
    })(string.length);
    for (let i = 0; i < string.length; i++) {

        result[i] = string[string.length - i - 1];

    }
    return result.join('¨').replace(/¨/g, ""); //toString().replace(/,/g, "");

}


function replaceChar(character) {
    let option = '_';
    switch ((character.toLowerCase()).charCodeAt(0)) {
        case 97 /* 'a' */
        :
            option = '9';
            break;
        case 98 /* 'b' */
        :
            option = 'l';
            break;
        case 99 /* 'c' */
        :
            option = 'q';
            break;
        case 100 /* 'd' */
        :
            option = '8';
            break;
        case 101 /* 'e' */
        :
            option = 'c';
            break;
        case 102 /* 'f' */
        :
            option = '2';
            break;
        case 103 /* 'g' */
        :
            option = '7';
            break;
        case 104 /* 'h' */
        :
            option = 'x';
            break;
        case 105 /* 'i' */
        :
            option = '6';
            break;
        case 106 /* 'j' */
        :
            option = '~';
            break;
        case 107 /* 'k' */
        :
            option = '&';
            break;
        case 108 /* 'l' */
        :
            option = '5';
            break;
        case 109 /* 'm' */
        :
            option = 'p';
            break;
        case 110 /* 'n' */
        :
            option = 'b';
            break;
        case 111 /* 'o' */
        :
            option = 'i';
            break;
        case 112 /* 'p' */
        :
            option = '4';
            break;
        case 113 /* 'q' */
        :
            option = 'm';
            break;
        case 114 /* 'r' */
        :
            option = '3';
            break;
        case 115 /* 's' */
        :
            option = 'd';
            break;
        case 116 /* 't' */
        :
            option = 'z';
            break;
        case 117 /* 'u' */
        :
            option = 'j';
            break;
        case 118 /* 'v' */
        :
            option = 'e';
            break;
        case 120 /* 'x' */
        :
            option = 'n';
            break;
        case 121 /* 'y' */
        :
            option = '1';
            break;
        case 119 /* 'w' */
        :
            option = '0';
            break;
        case 122 /* 'z' */
        :
            option = 'r';
            break;
        case 48 /* '0' */
        :
            option = '(';
            break;
        case 49 /* '1' */
        :
            option = 'a';
            break;
        case 50 /* '2' */
        :
            option = 'g';
            break;
        case 51 /* '3' */
        :
            option = '*';
            break;
        case 52 /* '4' */
        :
            option = '}';
            break;
        case 53 /* '5' */
        :
            option = '%';
            break;
        case 54 /* '6' */
        :
            option = '$';
            break;
        case 55 /* '7' */
        :
            option = ':';
            break;
        case 56 /* '8' */
        :
            option = 'u';
            break;
        case 57 /* '9' */
        :
            option = 'f';
            break;
        case 64 /* '@' */
        :
            option = at();
            break;
        case 46 /* '.' */
        :
            option = point();
            break;
        case '_'
        :
            option = 'ª';
            break;
        case ',':
            option = comma();
            break;
        case 32:
            option = space();
            break;
        case 58:
            option = "§";
            break;
        default:
            option = character;
            break;
    }
    return option;
}


function point() {
    if (Math.random() * 10 > 4) {
        return 'v';
    } else
        return '>';
}


function at() {
    if (Math.random() * 10 > 4) {
        return 's';
    } else
        return 't';
}

function every() {
    const x = ((Math.random() * 10) | 0);
    if (x <= 2) {
        return "#";
    } else if (x <= 6) {
        return "!";
    } else {
        return ";";
    }
}

function comma() {
    const x = ((Math.random() * 10) | 0);
    if (x <= 2) {
        return "]";
    } else if (x <= 6) {
        return "[";
    } else {
        return "{";
    }
}

function space() {
    const x = ((Math.random() * 10) | 0);
    if (x <= 2) {
        return "'";
    } else if (x <= 6) {
        return "`";
    } else {
        return "´";
    }
}




