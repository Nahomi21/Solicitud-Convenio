import React from 'react';
import Typography from "@mui/material/Typography";
import {Grid, TextField} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import { Card } from '@mui/joy';


export const Step2 = ({formState, onInputChange}) => {
    const { NombreSolicitante, Posicion, MedioConvenio, OrigenMotivacionConvenio } = formState ?? {};
    return (
        <Card sx={{ padding: '20px', marginTop:'20px', maxWidth:'1100px' }}>

        <form>
            <b>
                <Typography sx={{ mt: 2, mb: 1, fontWeight:'bold' }}>Información del Solicitante</Typography>
            </b>
            <Grid container columns={12} marginTop={5} sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                <Grid item xs={4} >
                    <TextField
                        style={{margirRight: 10}}
                        className="form-control shadow"
                        id="NombreSolicitante"
                        fullWidth
                        label="Nombre del solicitante"
                        name='NombreSolicitante'
                        onChange={onInputChange}
                        value={NombreSolicitante}
                    />
                </Grid>

                <Grid item xs={3} >
                    <TextField
                        style={{margirRight: 10}}
                        className="form-control shadow"
                        id="Posicion"
                        fullWidth  label="Posición"
                        name='Posicion'
                        onChange={onInputChange}
                        value={Posicion}
                    />
                </Grid>

                <Grid item xs={4}>
                    <TextField
                        style={{margirRight: 10}}
                        className="form-control shadow"
                        id="MedioConvenio"
                        fullWidth label="Medio por el que llega el convenio"
                        name='MedioConvenio'
                        onChange={onInputChange}
                        value={MedioConvenio}
                    />
                </Grid>
            </Grid>

            <Grid container columns={12} marginTop={5} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', gap: 3 }}>
                <Grid item xs={6} >
                    <Textarea
                        minRows={3}
                        size="lg"
                        placeholder="Ingrese el origen o motivación del convenio propuesto y cualquier información de interés."
                        id="Informacion"
                        name='OrigenMotivacionConvenio'
                        onChange={onInputChange}
                        value={OrigenMotivacionConvenio}
                    />
                </Grid>
            </Grid>
        </form>
        </Card>
    );
};


