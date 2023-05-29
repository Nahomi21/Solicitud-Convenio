import React, { useRef, forwardRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Step4 } from ".";
import {Button} from '@mui/material';
import { BsFillPrinterFill } from "react-icons/bs";


export const Example = ({formState}) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  
    return (
      <div>
        <br></br>
        <Button onClick={handlePrint} style={{position: 'fixed', top: '30%', right: 200}} ><BsFillPrinterFill size="30px" /></Button>
        <Step4 formState={formState} ref={componentRef}/>
        
      </div>
    );
  };