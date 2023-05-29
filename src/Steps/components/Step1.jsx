import React, { useMemo } from 'react';
import {FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import Typography from "@mui/material/Typography";
import { Card } from '@mui/joy';

export const Step1 = ({formState, onInputChange}) => {
    

    const {TipoAlianza, Codigo, Eje, ProductoIntermedio, ObjetivoEstrategico, ObjetivosEspecificos, TituloBorrador, InstitucionConvenio, ObjetoConvenio, DuracionConvenio, CantidadBeneficiario, CostoTotal, ResultadosEsperados, Indicadores   } = formState ?? {};

    
    return (
        <Card sx={{ padding: '20px', marginTop:'20px', maxWidth:'1100px' }}>
        <form >
            <b>
                <Typography sx={{ mt: 2, mb: 1, fontWeight:'bold' }}>Información POA</Typography>
            </b>
            <Grid container spacing={-1} columns={12} sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                <Grid item  xs={4} >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Tipo de Alianza</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="TipoAlianza"
                            name='TipoAlianza'
                            label="Tipo de Alianza"
                            onChange={onInputChange}
                            value={ TipoAlianza }
                        >
                            <MenuItem value="Convenio Marco">Convenio Marco</MenuItem>
                            <MenuItem value="Agenda Marco">Agenda Marco</MenuItem>
                            <MenuItem value="Enmienda Marco"> Enmienda Marco</MenuItem>
                            <MenuItem value="Renovación Marco"> Renovación Marco</MenuItem>
                            <MenuItem value="Convenio Específico"> Convenio Específico</MenuItem>
                            <MenuItem value="Renovación Específico"> Renovación Específico</MenuItem>
                            <MenuItem value="Enmienda Específico">Enmienda Específico</MenuItem>
                            <MenuItem value="Agenda Específico">Agenda Específico</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={3} > 
                    <TextField
                      style={{margirRight: 10}}
                        className="form-control shadow"
                        id="Codigo"
                        name='Codigo'
                        fullWidth label="Codigo"
                        onChange={onInputChange}
                        value={ Codigo }
                    />
                </Grid>

                <Grid item xs={4}>
                    <TextField
                        className="form-control shadow"
                        id="Eje"
                        name='Eje'
                        fullWidth label="Eje"
                        onChange={onInputChange}
                        value={ Eje }
                    />
                </Grid>

            </Grid>

             <Grid container columns={12} marginTop={5} sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                <Grid item xs={4} >
                    <Textarea
                        minRows={4}
                        size="lg"
                        name="ProductoIntermedio"
                        placeholder="Producto Intermedio"
                        id="ProductoIntermedio"
                        onChange={onInputChange}
                        value={ ProductoIntermedio }
                    />
                </Grid>

                <Grid item xs={3} >
                    <Textarea
                        minRows={4}
                        size="lg"
                        name="ObjetivoEstrategico"
                        placeholder="Objetivo Estratégico"
                        id="ObjetivoEstrategico"
                        onChange={onInputChange}
                        value={ ObjetivoEstrategico }
                    />
                </Grid>

                <Grid item xs={4}>
                <Textarea
                    minRows={4}
                    size="lg"
                    name="ObjetivosEspecificos"
                    placeholder="Objetivos Especificos"
                    id="ObjetivosEspecificos"
                    onChange={onInputChange}
                    value={ ObjetivosEspecificos }
                />
                </Grid>
             </Grid>

            <b>
                <Typography sx={{ mt: 2, mb: 1, fontWeight:'bold' }}>Información del convenio propuesto</Typography>
            </b>
            <Grid container columns={12} marginTop={5} sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                <Grid item xs={4} >
                    <TextField
                        style={{margirRight: 10}}
                        className="form-control shadow"
                        id="TituloBorrador"
                        fullWidth
                        name='TituloBorrador'
                        label="Titulo del Borrador"
                        onChange={onInputChange}
                        value={ TituloBorrador }
                    />
                </Grid>

                <Grid item xs={3} >
                    <TextField
                        style={{margirRight: 10}}
                        className="form-control shadow"
                        id="InstitucionConvenio"
                        name='InstitucionConvenio'
                        fullWidth label="Institución de convenio"
                        onChange={onInputChange}
                        value={ InstitucionConvenio }
                    />
                </Grid>

                <Grid item xs={4}>
                    <TextField
                        style={{margirRight: 10}}
                        className="form-control shadow"
                        id="ObjetoConvenio"
                        name='ObjetoConvenio'
                        fullWidth label="Objeto del convenio"
                        onChange={onInputChange}
                        value={ ObjetoConvenio }
                    />
                </Grid>
             </Grid>

            <Grid container columns={12} marginTop={5} sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                <Grid item xs={4} >
                    <TextField
                        style={{margirRight: 10}}
                        className="form-control shadow"
                        id="DuracionConvenio"
                        name='DuracionConvenio'
                        fullWidth
                        label="Duración del convenio"
                        onChange={onInputChange}
                        value={ DuracionConvenio }
                    />
                </Grid>

                <Grid item xs={3} >
                    <TextField
                        style={{margirRight: 10}}
                        className="form-control shadow"
                        id="CantidadBeneficiario"
                        name='CantidadBeneficiario'
                        fullWidth  label="Cantidad de Beneficiario"
                        onChange={onInputChange}
                        value={ CantidadBeneficiario }
                    />
                </Grid>

                <Grid item xs={4}>
                    <TextField
                        style={{margirRight: 10}}
                        className="form-control shadow"
                        id="CostoTotal"
                        name='CostoTotal'
                        fullWidth label="Costo Total"
                        onChange={onInputChange}
                        value={ CostoTotal }
                        type="number" 
                    />
                    
                </Grid>
             </Grid>

            <Grid container columns={8} marginTop={5} sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                <Grid item xs={3.7} >
                    <Textarea
                        minRows={3}
                        size="lg"
                        name="ResultadosEsperados"
                        placeholder="Resultados Esperados"
                        id="ResultadosEsperados"
                        onChange={onInputChange}
                        value={ ResultadosEsperados }
                    />
                </Grid>

                <Grid item xs={3.8} >
                    <Textarea
                        minRows={3}
                        size="lg"
                        name="Indicadores"
                        placeholder="Indicadores"
                        id="Indicadores"
                        onChange={onInputChange}
                        value={ Indicadores }
                    />
                </Grid>
            </Grid>
        </form>
        </Card>

    );
};


