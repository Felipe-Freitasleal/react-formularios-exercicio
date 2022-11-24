import React from 'react'
import { MainContainer, Form, Input } from './styles'
import { useForm } from '../../hooks/useForm'

function MainPage() {
 
  const [ form, onChangeForm ] = useForm({nome: "", modulos: "", tecnologias: "", responsavel: ""})

  const clickNoButao = (event) => {
    event.preventDefault()
    console.log(`nome: ${form.nome}, modulos: ${form.modulos}, tecnologias: ${form.tecnologias}, responsável: ${form.responsavel}`)
  }

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={clickNoButao}>
        <label for="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          name="nome"
          value={form.nome}
          onChange={onChangeForm}
          type="text"
        />

        <label for="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
          name="modulos"
          value={form.modulos}
          onChange={onChangeForm}
          type="number"
          pattern='- {2,} = +'
          required

        />

        <label for="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          name="tecnologias"
          value={form.tecnologias}
          onChange={onChangeForm}
          type="text"
        />
        
        <label for="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
          name="responsavel"
          value={form.responsavel}
          onChange={onChangeForm}
          type="text"
          pattern='\w{3,}'
          required

        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage