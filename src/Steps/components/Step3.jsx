import React from 'react';
import {Grid} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import Typography from '@mui/material/Typography';
import { Card } from '@mui/joy';


export const Step3 = ({formState, onInputChange}) => {
    const { ObservacionesComentarios } = formState ?? {};
    return (
        <Card sx={{ padding: '20px', marginTop:'20px', maxWidth:'1100px' }}>

        <form>
            <b>
                <Typography sx={{ mt: 2, mb: 1, fontWeight:'bold' }}>Relaciones Interinstitucionales</Typography>
            </b>
            <Grid container columns={12} marginTop={5} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', gap: 3 }}>
                <Grid item xs={6} >
                    <Textarea
                        minRows={6}
                        size="lg"
                        name="ObservacionesComentarios"
                        placeholder="Ingrese sus Observaciones y Comentarios."
                        id="Relaciones"
                        onChange={onInputChange}
                        value={ ObservacionesComentarios }
                    />
                </Grid>
            </Grid>
        </form>
        </Card>
    );
};


