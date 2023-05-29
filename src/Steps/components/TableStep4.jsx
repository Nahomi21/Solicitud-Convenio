import { Typography } from '@mui/joy'
import './TableStep4.css'

export const TableStep4 = () => {
  return (
    <table>
     <thead>
       <tr >
         <td className='firma'><Typography>Firma del Solicitante</Typography></td>
         <td className='firma'><Typography>Firma del evaluador</Typography></td>
         <td className='aprovacion'><Typography>Firma del rector/a para aprobación</Typography></td>
       </tr>
     </thead>
      <tbody>
        <tr>
          <td className='cargo'><Typography>Cargo</Typography></td>
          <td className='firma'><Typography>Encargada de RRII</Typography></td>
          <td className='rector'><Typography> Rector(a)</Typography> </td>
        </tr>
        <tr>
          <td rowSpan={2} className='fechaSolic'><Typography>Fecha Solicitado:</Typography></td>
          <td className='tds'><Typography>Fecha Recibido:</Typography></td>
          <td className='tds'><Typography>Fecha Recibido:</Typography></td>
        </tr>
        <tr >
         <td className='tds'><Typography>Fecha evaluado:  </Typography></td>
         <td className='tds'><Typography>Fecha evaluado:</Typography></td>
       </tr>
      </tbody>
    </table>
  )
}
