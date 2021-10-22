import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    fab: {
      position: 'absolute',
      bottom: theme.spacing(4),
      right: theme.spacing(4),
    },
  }));

export default function App(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const bull = <span className={classes.bullet}>•</span>;
    const fopen = ()=>setOpen(true);
    const fclose = ()=>setOpen(false);
    return(
        <React.Fragment>
            <Fab color="primary" onClick={fopen} className={classes.fab}>
                <EditIcon />
            </Fab>
            <Dialog onClose={fclose} open={open}>
                <DialogTitle>Editar</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Olá, a edição in-real-time está desabilitada até o Andreis conseguir pagar um servidor. Para adicionar alguém, fale diretamente com ele.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        disabled
                        id="name"
                        label="Nome"
                        type="text"
                        fullWidth
                    />
                    <FormControl fullWidth disabled>
                        <InputLabel>Parrains</InputLabel>
                        <Select />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={fclose} color="primary">
                        Voltar
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}
