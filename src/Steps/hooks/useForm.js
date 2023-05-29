import  {useState} from 'react'

export const useForm = (InitialForm) => {

  const [formState, setFormState] = useState(InitialForm)
  
  const  onInputChange = (event) => {
    const { target: { value, name} } = event;

    setFormState({
      ...formState, 
      [name]:value
    })
  }

  const onResetForm = () => {
    setFormState( InitialForm );
  }
  
  
  return {
    formState,
    onInputChange,
    onResetForm,
    ...formState
  }
}
