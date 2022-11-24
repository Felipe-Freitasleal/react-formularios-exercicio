import { useState } from "react"

export function useForm (valorInicial) {
    const [ form, setForm ] = useState(valorInicial)

    const onChangeForm = (event) => {
        console.log(event.target)
        const { name, value, id } = event.target
        console.log(`name= ${name}, value= ${value} , id= ${id}`)
        const novoForm = {
            ... form,
            [name]: value
        }
        console.log(novoForm)
        setForm(novoForm)
    }
    return [form, onChangeForm]
}