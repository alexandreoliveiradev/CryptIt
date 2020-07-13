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
                    style={{width: '35%'}}
                    defaultValue=""
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
        if (output.length >= 50) {
            output = "click me to read entire text\n".concat(output);
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
        if (output.length >= 50) {
            output = "click me to read entire text\n".concat(output);
        } else {
            document.getElementById("copyEnc").value = "copy";
        }
        document.getElementById("outputEnc").value = output.toString();
    }
}

function clickTextDec() {
    let text = document.getElementById("outputDec").value;
    document.getElementById("outputDec").value =
        text.replace("click me to read entire text\n", "");
    document.getElementById("copyDec").value = "copy";
}

function clickTextEnc() {
    let text = document.getElementById("outputEnc").value;
    document.getElementById("outputEnc").value =
        text.replace("click me to read entire text\n", "");
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
