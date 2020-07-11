import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(0),
    },
    links: {
        margin: theme.spacing(1),
        position: 'relative',
        float: 'right',
        cursor: 'pointer'
    }
}));

export default function AlertDialogSlide() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    return (
        <div>
            <IconButton
                color="primary"
                className={classes.button}
                onClick={handleClickOpen}
            >
                <KeyboardArrowUpRoundedIcon fontSize="large"/>
            </IconButton>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Crypt iT"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        when you click on decrypt or encrypt you are using an algorithm that
                        can only be understood here
                        <br></br><br></br>
                        by clicking copy you are saving the created text to your clipboard for
                        a faster paste, wherever you need it
                        <br></br><br></br>
                        my goals are only to creat something fun, useful and keep learning new stuff,
                        hope you enjoy
                        <br></br><br></br>
                        Alexandre Oliveira
                        <div className={classes.links}>
                            <LinkedInIcon onClick={handleClickLinkedIn} color="primary" display="inline-flex"/>
                            <span>     </span>
                            <GitHubIcon onClick={handleClickGitHub} color="primary" display="inline-flex"/>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}

const handleClickLinkedIn = () => {
    return window.open('https://www.linkedin.com/in/alexandreoliveira-softdev/', '_blank')
}

const handleClickGitHub = () => {
    return window.open('https://github.com/alexandreoliveiradev', '_blank')
}