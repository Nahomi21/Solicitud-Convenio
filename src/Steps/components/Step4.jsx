import React, {forwardRef} from 'react'
import { Card, Grid, Typography, Checkbox } from '@mui/material'
import escudo from '../../assets/Escudo.jpg'
import '@fontsource/roboto/300.css';
import { TableStep4 } from './'

export const Step4 = forwardRef ( (props, ref) => {

  const {formState} = props;

  return (
    <div ref = {ref} >
      <Card sx={{ padding: '20px', marginTop:'20px', maxWidth:'1100px' }}>
     <form style={{ marginTop: '30px' }}>
         
          <div>
            <img src={escudo} alt="escudo" style={{width: '50px', height: '50px'}} />
            <Typography sx={{ mt: 2, mb: 1, fontWeight:'bold' }}>Instituto Superior de Formación Docente Salomé Ureña</Typography>
          </div>
        
         <Grid container columns={3}>
           <Grid item container columns={2} xs={2} sx={{marginTop:'25px'}}>
            <Grid item xs={ 1 }>
              <Typography className = "DatosConfirmacion" sx={{ fontWeight:'bold' }}>Tipo de Alianza: {formState.TipoAlianza}</Typography>  
            </Grid>
            <Grid item xs={ 1 }>
              <Typography className = "DatosConfirmacion" sx={{ fontWeight:'bold' }}>Código del Convenio relacionado: {formState.Codigo}</Typography>    
            </Grid>
           </Grid>

          <Grid item xs={1} sx={{marginTop:'25px'}}>
            <Typography className = "DatosConfirmacion" sx={{ fontWeight:'bold' }}> Eje: {formState.Eje}</Typography>
            <Typography className = "DatosConfirmacion" sx={{ marginTop:'10px', fontWeight:'bold' }}>Producto Intermedio: {formState.ProductoIntermedio}</Typography>  
            <Typography className = "DatosConfirmacion" sx={{ marginTop:'10px', fontWeight:'bold' }}>Objetivo Estratégico: {formState.ObjetivoEstrategico}</Typography>  
            <Typography className = "DatosConfirmacion" sx={{ marginTop:'10px', fontWeight:'bold' }}>Objetivos Especificos: {formState.ObjetivosEspecificos}</Typography> 
          </Grid>
        </Grid>
        
        <Typography sx={{fontWeight:'bold'}}>Información del Convenio Propuesto</Typography>
          
        <Grid container columns={3} sx={{marginTop:'20px'}}>
          <Grid item container columns={3} xs={3} sx={{marginTop:'25px'}}>
            <Grid item xs={ 1 }>
              <Typography className = "DatosConfirmacion" sx={{ fontWeight:'bold' }}>Titulo del Borrador: {formState.TituloBorrador}</Typography>  
            </Grid>
            <Grid item xs={ 1 }>
              <Typography className = "DatosConfirmacion" sx={{ fontWeight:'bold' }}>Institución de Convenio: {formState.InstitucionConvenio}</Typography>    
            </Grid>
            <Grid item xs={ 1 }>
              <Typography className = "DatosConfirmacion" sx={{ fontWeight:'bold' }} >Objetivo del Convenio: {formState.ObjetoConvenio}</Typography>    
            </Grid>
          </Grid>

          <Grid item container columns={3} xs={3} sx={{marginTop:'35px'}}>
            <Grid item xs={ 1 }>
              <Typography className = "DatosConfirmacion" sx={{ fontWeight:'bold' }} >Duración del Convenio: {formState.DuracionConvenio}</Typography>  
            </Grid>
            <Grid item xs={ 1 }>
              <Typography className = "DatosConfirmacion" sx={{ fontWeight:'bold' }}>Cantidad de Beneficiarios: {formState.CantidadBeneficiario}</Typography>    
            </Grid>
            <Grid item xs={ 1 }>
              <Typography className = "DatosConfirmacion" sx={{ fontWeight:'bold' }}>Costo Total: {formState.CostoTotal} DOP</Typography>    
            </Grid>
          </Grid>

          <Grid item container columns={2} xs={2} sx={{marginTop:'35px'}}>
            <Grid item xs={ 1 }>
              <Typography className = "DatosConfirmacion" sx={{ fontWeight:'bold' }}>Resultados Esperados: {formState.ResultadosEsperados}</Typography>  
            </Grid>
            <Grid item xs={ 1 }>
              <Typography className = "DatosConfirmacion" sx={{ fontWeight:'bold' }}>Indicadores: {formState.Indicadores}</Typography>    
            </Grid>
          </Grid>    
        </Grid>

        <Typography sx={{ marginTop:'40px', fontWeight:'bold' }}>Información del Solicitante</Typography>
        
        <Grid container columns={3} sx={{marginTop:'20px'}}>
          <Grid item container columns={3} xs={3} sx={{marginTop:'35px'}}>
              <Grid item xs={ 1 }>
                <Typography className = "DatosConfirmacion" sx={{ fontWeight:'bold' }}>Nombre del Solicitante: {formState.NombreSolicitante}</Typography>  
              </Grid>
              <Grid item xs={ 1 }>
                <Typography className = "DatosConfirmacion"sx={{ fontWeight:'bold' }}>Posición: {formState.Posicion}</Typography>    
              </Grid>
              <Grid item xs={ 1 }>
                <Typography className = "DatosConfirmacion"sx={{ fontWeight:'bold' }}>Medio por el que llega el convenio: {formState.MedioConvenio}</Typography>    
              </Grid>
            </Grid>
        </Grid>

        <Grid container columns={3} sx={{marginTop:'40px'}}>
          <Grid item xs={ 3 }>
            <Typography sx={{fontWeight:'bold'}}>Origen o motivación del convenido propuesto y cualquier informacion de interés:</Typography>
            <Grid container columns={1} sx={{marginTop:'10px'}}>
              <Grid item xs={ 1 }>
                <div style={{ maxWidth:'900px', paddingLeft:'10px', minHeight:'100px', border:'1px solid black', textAlign:'start', margin:'auto' }}>
                  <Typography>{formState.OrigenMotivacionConvenio}</Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container columns={3} sx={{marginTop:'0px'}}>
          <Grid item xs={ 3 }>
            <Typography sx={{fontWeight:'bold'}}>Observaciones o Comentarios - Departamento de Relaciones Interinstitucionales:</Typography>
            <Grid container columns={1} sx={{marginTop:'10px'}}>
              <Grid item xs={ 1 }>
                <div style={{ maxWidth:'900px', paddingLeft:'10px', minHeight:'100px', border:'1px solid black', textAlign:'start', margin:'auto' }}>
                  <Typography> {formState.ObservacionesComentarios}</Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container columns={3} sx={{marginTop:'0px'}}>
          <Grid item xs={ 3 }>
            <Typography sx={{fontWeight:'bold'}}>Observaciones y Comentarios-Rector(a):</Typography>
            <Grid container columns={1} sx={{marginTop:'10px'}}>
              <Grid item xs={ 1 }>
                <div style={{ maxWidth:'900px', minHeight:'100px', border:'1px solid black', margin:'auto' }}></div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container columns={3} sx={{marginTop:'40px'}}>
          <Grid item xs={ 0.5 }>
            <Typography sx={{fontWeight:'bold'}}>Respuesta del Rector(a)</Typography>
          </Grid>
          <Grid item xs={ 0.5 }>
            <Typography sx={{fontWeight:'bold'}} > Aceptado<Checkbox disabled/></Typography>
          </Grid>

          <Grid item xs={ 1 }>
            <Typography sx={{fontWeight:'bold'}} >Aceptado con Observaciones<Checkbox disabled /></Typography>
          </Grid>

          <Grid item xs={ 1 }>
            <Typography sx={{fontWeight:'bold'}} >Rechazado<Checkbox disabled /></Typography>
          </Grid>
        </Grid>

        <Typography sx={{ marginTop:'40px', fontWeight:'bold' }}>Nota - Rector(a)</Typography>

        <Grid container columns={1} sx={{marginTop:'10px'}}>
          <Grid item xs={ 1 }>
              <div style={{ maxWidth:'650px', height:'100px', border:'1px solid black', margin:'auto' }}></div>
          </Grid>
        </Grid>
        <TableStep4/>
     </form>
   </Card>
    </div>
   
  )
}
)