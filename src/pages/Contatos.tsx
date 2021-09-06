import React, { FormEvent, useState } from 'react';
import { Button } from '../components/Button';
import '../styles/contatos.scss';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Input } from '../components/Input';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,  
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export function Contatos() {

    const [formValues, setFormValues] = useState({
        celular: '',
        sobrenome: '',
        email: '',
        nome: '',
        obs: '',
        telefone: ''    
    });''

    const changeHandler = (e: any) => {
        console.log("passou aq");
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value 
        });
        console.log(formValues);
    };

    function handleFormSubmission(event: FormEvent){
        event.preventDefault();
        console.log(changeHandler);
    }

    const classes = useStyles();

    return (
        <div className="container">
            <div className="top">
                <h1>Agenda</h1>
                <Button>Ver todos</Button>
            </div>
            <div className="conteudo">
                <div className={classes.root}>
                    <form>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>
                                    <span> Nome: </span>
                                        <Input
                                            name="nome"
                                            id="nome"
                                            //value={nome}
                                            onChange={changeHandler}
                                        />
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>
                                    <span>Sobrenome: </span>
                                    <Input
                                       name="sobrenome"
                                       id="sobrenome"
                                       //value={formValues.sobrenome}
                                       onChange={changeHandler}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.paper}>
                                    <span>Tel.: </span>
                                    <Input
                                        name="telefone"
                                        id="telefone"
                                        //value={formValues.telefone}
                                        onChange={changeHandler}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.paper}>
                                    <span>Cel.: </span>
                                    <Input
                                        name="celular"
                                        id="celular"
                                        //value={formValues.celular}
                                        onChange={changeHandler}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.paper}>
                                    <span>E-mail: </span>
                                    <Input
                                        name="email"
                                        id="email"
                                        //value={formValues.email}
                                        onChange={changeHandler}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.paper}>
                                    <span>Obs.: </span>
                                    <Input
                                        name="obs"
                                        id="obs"
                                        //value={formValues.obs}
                                        onChange={changeHandler}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper} id="botaoPOs">   
                                    <Button onClick={handleFormSubmission}>Salvar Contato</Button>
                            </Paper>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>            
        </div>
    
    );
}