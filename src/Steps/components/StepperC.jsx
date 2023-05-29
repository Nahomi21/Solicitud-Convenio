import { Stepper, StepLabel, Step } from "@mui/material"

export const StepperC = ({activeStep}) => {
  return (
    <Stepper activeStep={activeStep}>
      <Step>
          <StepLabel>Información del Convenio</StepLabel>
      </Step>

      <Step>
          <StepLabel >Información del Solicitante</StepLabel>
      </Step>

      <Step  >
          <StepLabel >Relaciones Interinstitucionales</StepLabel>
      </Step>

      <Step >
          <StepLabel>Confirmación</StepLabel>
      </Step>
    </Stepper>
  )
}
