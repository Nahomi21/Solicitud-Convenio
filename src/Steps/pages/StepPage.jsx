import React, { useEffect } from 'react';
import { Box, Button, Typography, Card } from '@mui/material';
import {Step1, Step2, Step3, Example, StepperC, useForm, useStep} from "./";


const steps = ['', '', '', ''];


const InitialForm = {
    TipoAlianza: '',
    Codigo: '',
    Eje: '',
    ProductoIntermedio: '',
    ObjetivoEstrategico: '', 
    ObjetivosEspecificos: '',
    TituloBorrador: '',
    InstitucionConvenio: '',
    ObjetoConvenio: '',
    DuracionConvenio: '',
    CantidadBeneficiario: '',
    CostoTotal: 0,
    ResultadosEsperados: '',
    Indicadores: '',
    NombreSolicitante: '',
    Posicion: '',
    MedioConvenio: '',
    OrigenMotivacionConvenio: '',
    ObservacionesComentarios: ''
}

const StepPage = () => {
    
    const { activeStep, handleNext, handleBack, handleReset } = useStep();
    const { formState, onInputChange, onResetForm } = useForm(InitialForm);

    const handleResetFormState = () => {
        handleReset();
        onResetForm();
    }

    return (
        <Card variant='outlined' style={{padding: '40px', backgroundColor: '#EEFDFF'}}>
            <Box  sx={{ width: '100%' }} >

                <StepperC activeStep={activeStep}  />
            
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Card sx={{ padding: '20px', marginTop:'20px', maxWidth:'1100px' }}>

                        <Typography sx={{ mt: 2, mb: 1 }}>
                            Solicitud de convenio enviada correctamente
                        </Typography>
                        </Card>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleResetFormState} variant="contained">Regresar</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
            
                        {
                            activeStep === 0 ? <Step1 formState={formState} onInputChange={onInputChange} /> :  
                            activeStep === 1 ? <Step2 formState={formState} onInputChange={onInputChange} /> :
                            activeStep === 2 ? <Step3 formState={formState} onInputChange={onInputChange} /> : 
                            activeStep === 3 ? <Example formState={formState} /> : null
                        }
                        
                        
            
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
            
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                                variant="contained"
                            >
                                Anterior
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button
                                onClick={handleNext}
                                variant="contained"
                            >
                                {activeStep === steps.length - 1 ? 'Enviar' : 'Siguiente'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </Card >
    );
};

export default StepPage;