import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import makeStyles from "@material-ui/core/styles/makeStyles";
import LockIcon from '@material-ui/icons/Lock';
import Button from "@material-ui/core/Button";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {decryptText} from "./code/decrypter";
import {encryptText} from "./code/encrypter";
import InputBase from "@material-ui/core/InputBase";
import AlertDialogSlide from "./SlideHelp";

let output;

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        textTransform: 'lowercase',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    answer: {
        margin: theme.spacing(1),
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    copy: {
        margin: theme.spacing(0),
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: "bold",
    }
}));

function App() {

    const classes = useStyles();

    return (

        <div className="App">
            <header className="App-header">
                <h1>Crypt iT</h1>
                <p>encrypt your text</p>
                <form noValidate autoComplete="off">
                    <TextField
                        id="encrypt"
                        label="write here"
                        style={{width: '35%'}}
                        multiline
                        rowsMax={5}
                        color="primary"/>
                </form>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<LockOpenIcon/>}
                    onClick={handleClickEnc}
                >encrypt</Button>
                <InputBase
                    id="outputEnc"
                    className={classes.answer}
                    multiline
                    readOnly={true}
                    rows = {1}
                    style={{width: '35%'}}
                    defaultValue=""
                    rowsMax={5}
                    inputProps={{'aria-label': 'naked'}}
                    onClick={clickTextEnc}
                />
                <InputBase
                    id="copyEnc"
                    className={classes.copy}
                    readOnly={true}
                    style={{width: '35%'}}
                    defaultValue=""
                    inputProps={{'aria-label': 'naked'}}
                    onClick={clickCopyEnc}
                />
                <p>decrypt your text</p>
                <form noValidate autoComplete="off">
                    <TextField
                        id="decrypt"
                        multiline
                        style={{width: '35%'}}
                        rowsMax={5}
                        label="write here"
                        color="primary"/>
                </form>
                <Button
                    align="center"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<LockIcon/>}
                    onClick={handleClickDec}
                >decrypt</Button>
                <InputBase
                    id="outputDec"
                    className={classes.answer}
                    multiline
                    rowsMax={5}
                    rows = {1}
                    readOnly={true}
                    style={{width: '35%'}}
                    defaultValue=""
                    inputProps={{'aria-label': 'naked'}}
                    onClick={clickTextDec}
                />
                <InputBase
                    id="copyDec"
                    className={classes.copy}
                    readOnly={true}
                    style={{width: '35%'}}
                    defaultValue=""
                    inputProps={{'aria-label': 'naked'}}
                    onClick={clickCopyDec}
                />
                <AlertDialogSlide />
            </header>
        </div>
    );
}

function handleClickDec() {

    output = document.getElementById("decrypt").value;
    output = decryptText(output.toString());
    if (output !== "Nothing to decrypt.") {
        document.getElementById("encrypt").value = "";
        document.getElementById("outputEnc").value = "";
        document.getElementById("copyEnc").value = "";
        if (isMultiLineDec(output)) {
            if (isMultiLineDec("click me to read entire text\n")){
                output = "read more\n".concat(output);
            } else {
                output = "click me to read entire text\n".concat(output);
            }
        } else {
            document.getElementById("copyDec").value = "copy";
        }
        document.getElementById("outputDec").value = output.toString();
    }
}



function handleClickEnc() {
    output = document.getElementById("encrypt").value;
    output = encryptText(output.toString());
    if (output !== "Nothing to encrypt.") {
        document.getElementById("decrypt").value = "";
        document.getElementById("outputDec").value = "";
        document.getElementById("copyDec").value = "";
        if (isMultiLineEnc(output)) {
            if (isMultiLineDec("click me to read entire text\n")) {
                output = "read more\n".concat(output);
            } else {
                output = "click me to read entire text\n".concat(output);
            }
        } else {
            document.getElementById("copyEnc").value = "copy";
        }
        document.getElementById("outputEnc").value = output.toString();
    }
}

function getTextWidth(text, font) {
    let canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    let context = canvas.getContext("2d");
    context.font = font;
    let metrics = context.measureText(text);
    return metrics.width;
}

function isMultiLineDec(text){
    let font = document.getElementById("outputDec").style.font;
    let textSize = getTextWidth(text, font);
    let textArea = document.getElementById("outputDec").offsetWidth;
    let ratio = textSize/textArea;
    return (ratio > 0.61);
}

function isMultiLineEnc(text){
    let font = document.getElementById("outputEnc").style.font;
    let textSize = getTextWidth(text, font);
    let textArea = document.getElementById("outputEnc").offsetWidth;
    let ratio = textSize/textArea;
    return (ratio > 0.61);
}

function clickTextDec() {
    let text = document.getElementById("outputDec").value;
    if (text.toString().includes("read more\n")){
        document.getElementById("outputDec").value =
            text.replace("read more\n", "");
    } else {
        document.getElementById("outputDec").value =
            text.replace("click me to read entire text\n", "");
    }
    document.getElementById("copyDec").value = "copy";
}

function clickTextEnc() {
    let text = document.getElementById("outputEnc").value;
    if (text.toString().includes("read more\n")){
        document.getElementById("outputEnc").value =
            text.replace("read more\n", "");
    } else {
        document.getElementById("outputEnc").value =
            text.replace("click me to read entire text\n", "");
    }
    document.getElementById("copyEnc").value = "copy";
}

function clickCopyEnc(){
    let copyText = document.getElementById("outputEnc");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

}

function clickCopyDec(){
    let copyText = document.getElementById("outputDec");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}



export default App;
