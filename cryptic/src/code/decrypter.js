import {reverse} from "./encrypter";

export function decryptText(text) {

    if (text === undefined || text.trim() === "") {
        alert("Nothing to decrypt.");
        return "Nothing to decrypt.";
    }

    let input = replaceEverySix(text);

    input = reverse(input);

    let output = "";

    const chars = input.split('');
    for (let i = 0; i < chars.length; i++) {
        const c = chars[i];

        output = output.concat((String(replaceChar(c)).toString()));

    }

    console.log(output);
    return output.replace(/´/g, " ").replace(/`/g, " ")
        .replace(/'/g, " ").replace(/§/g, ":");
}


function replaceEverySix(text) {
    return text.replace(/»/g, "")
        .replace(/«/g, "")
        .replace(/=/g, "")
        .replace(/£/g, "")
        .replace(/º/g, "")
        .replace(/#/g, "")
        .replace(/!/g, "")
        .replace(/;/g, "");
}


function replaceChar(character) {
    let option = " ";
    switch ((character.toLowerCase()).charCodeAt(0)) {
        case 57 /* '9' */
        :
            option = 'a';
            break;
        case 108 /* 'l' */
        :
            option = 'b';
            break;
        case 113 /* 'q' */
        :
            option = 'c';
            break;
        case 56 /* '8' */
        :
            option = 'd';
            break;
        case 99 /* 'c' */
        :
            option = 'e';
            break;
        case 50 /* '2' */
        :
            option = 'f';
            break;
        case 55 /* '7' */
        :
            option = 'g';
            break;
        case 120 /* 'x' */
        :
            option = 'h';
            break;
        case 54 /* '6' */
        :
            option = 'i';
            break;
        case 126 /* '~' */
        :
            option = 'j';
            break;
        case 38 /* '&' */
        :
            option = 'k';
            break;
        case 53 /* '5' */
        :
            option = 'l';
            break;
        case 112 /* 'p' */
        :
            option = 'm';
            break;
        case 98 /* 'b' */
        :
            option = 'n';
            break;
        case 105 /* 'i' */
        :
            option = 'o';
            break;
        case 52 /* '4' */
        :
            option = 'p';
            break;
        case 109 /* 'm' */
        :
            option = 'q';
            break;
        case 51 /* '3' */
        :
            option = 'r';
            break;
        case 100 /* 'd' */
        :
            option = 's';
            break;
        case 122 /* 'z' */
        :
            option = 't';
            break;
        case 106 /* 'j' */
        :
            option = 'u';
            break;
        case 101 /* 'e' */
        :
            option = 'v';
            break;
        case 110 /* 'n' */
        :
            option = 'x';
            break;
        case 49 /* '1' */
        :
            option = 'y';
            break;
        case 48 /* '0' */
        :
            option = 'w';
            break;
        case 114 /* 'r' */
        :
            option = 'z';
            break;
        case 40 /* '(' */
        :
            option = '0';
            break;
        case 97 /* 'a' */
        :
            option = '1';
            break;
        case 103 /* 'g' */
        :
            option = '2';
            break;
        case 42 /* '*' */
        :
            option = '3';
            break;
        case 125 /* '}' */
        :
            option = '4';
            break;
        case 37 /* '%' */
        :
            option = '5';
            break;
        case 36 /* '$' */
        :
            option = '6';
            break;
        case 58 /* ':' */
        :
            option = '7';
            break;
        case 117 /* 'u' */
        :
            option = '8';
            break;
        case 102 /* 'f' */
        :
            option = '9';
            break;
        case 115 /* 's' */
        :
            option = '@';
            break;
        case 116 /* 't' */
        :
            option = '@';
            break;
        case 118 /* 'v' */
        :
            option = '.';
            break;
        case 62 /* '>' */
        :
            option = '.';
            break;
        case 95 /* '_' */
        :
            option = '_';
            break;
        case 'ª'
        :
            option = '_';
            break;
        case '['
        :
            option = ',';
            break;
        case ']'
        :
            option = ',';
        break;
        case "{"
        :
            option = ',';
            break;
        default:
            option = character;
            break;
    }
    console.log(option)
    return option;
}