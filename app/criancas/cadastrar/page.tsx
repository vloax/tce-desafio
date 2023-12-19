'use client'

import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Grid from '@mui/material/Grid';

import * as yup from "yup"
import { useRouter } from 'next/navigation';

const validationSchema = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório"),
  cpf: yup.string().required("CPF é Obrigatório"),
  sexo: yup.string().required("Sexo é obrigatório"),
  dataDeNascimento: yup.string().required("Data de nascimento é obrigatório"),
  email: yup.string().email().required("Email é obrigatório"),
  cep: yup.string().required("CEP é Obrigatório"),
  logradouro: yup.string().required("Sexo é obrigatório"),
  bairro: yup.string().required("Sexo é obrigatório"),
  numero: yup.string().required("Sexo é obrigatório"),
  uf: yup.string().required("Sexo é obrigatório"),
  localidade: yup.string().required("Sexo é obrigatório"),
  pais: yup.string().required("Sexo é obrigatório"),
  complemento: yup.string().required("Sexo é obrigatório"),
  nomeResponsavel: yup.string().required("Sexo é obrigatório"),
  tipoResponsavel: yup.string().required("Sexo é obrigatório"),
  telefone: yup.string().required("Sexo é obrigatório"),
  tipoDeContato: yup.string().required("Sexo é obrigatório"),
})

type Crianca = {
  nome: string;
  cpf: string;
  sexo: string;
  dataDeNascimento: string;
  email: string;
  cep: string;
  logradouro: string;
  bairro: string;
  numero: string;
  uf: string;
  localidade: string;
  pais: string;
  complemento: string;
  nomeResponsavel: string;
  tipoResponsavel: string;
  telefone: string;
  tipoDeContato: string;
}


export default function CadastrarCrianca() {
  const router = useRouter();
  
  const {
    register, 
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch
  } = useForm<Crianca>();

  const onSubmit: SubmitHandler<Crianca> = ((data) => {
    const response = fetch('http://localhost:3000/criancas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
       .then(data => {
      alert('Criança cadastrada com sucesso!')
      router.push('/criancas')
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Erro ao cadastrar criança!')
    });
  })




  return (
    <div>
      <div className='flex flex-col bg-blue-100 h-36'>
       <h2 className='mt-6 ml-6 text-3xl font-bold'>Cadastrar Crianças</h2>
       <p className='ml-6 text-xl font-regular text-[#878789]'>Listagem, consulta e atualização das crianças cadastradas</p>
      </div>

      <div className='p-10'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={0}>
            <h2 className='font-semibold mb-3 text-xl'>Identificação</h2>
            <Grid container gap={3}>
              <Grid xs={5}>
              <label className='mb-5' htmlFor="nome">Nome:</label>
               <input  id='nome' placeholder='Digite um nome...' className='border-b-gray-500 select-none border-b-2 px-3 py-1 w-full' type="text" {...register('nome')}/>
              {errors.nome && <p>{errors.nome.message}</p>}
              </Grid>
              <Grid xs={3}>
              <label className='mb-5' htmlFor="cpf">CPF:</label>
               <input  id='cpf' placeholder='Digite um cpf...' className='border-b-gray-500 select-none border-b-2 px-3 py-1 w-full' type="text" {...register('cpf')}/>
              {errors.cpf && <p>{errors.cpf.message}</p>}
              </Grid>
              <Grid xs={3}>
              <label className='mb-5' htmlFor="sexo">Sexo:</label>
               <input  id='sexo' placeholder='Digite um sexo...' className='border-b-gray-500 select-none border-b-2 px-3 py-1 w-full' type="text" {...register('sexo')}/>
              {errors.sexo && <p>{errors.sexo.message}</p>}
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={0} sx={{
            mt: 5,
          }}>
            <Grid container gap={3}>
            <Grid xs={5}>
              <label className='mb-5' htmlFor="dataDeNascimento">Data de nascimento:</label>
               <input  id='dataDeNascimento' placeholder='Digite um dataDeNascimento...' className='border-b-gray-500 select-none border-b-2 px-3 py-1 w-full' type="date" {...register('dataDeNascimento')}/>
              {errors.dataDeNascimento && <p>{errors.dataDeNascimento.message}</p>}
              </Grid>
              <Grid xs={3}>
              <label className='mb-5' htmlFor="nomeResponsavel">Nome Responsável:</label>
               <input  id='nomeResponsavel' placeholder='Digite um responsável...' className='border-b-gray-500 select-none border-b-2 px-3 py-[5px] w-full' type="text" {...register('nomeResponsavel')}/>
              {errors.nomeResponsavel && <p>{errors.nomeResponsavel.message}</p>}
              </Grid>
              <Grid xs={3}>
              <label className='mb-5' htmlFor="tipoResponsavel">Tipo de Responsável:</label>
               <input  id='tipoResponsavel' placeholder='Digite um cpf...' className='border-b-gray-500 select-none border-b-2 px-3 py-[5px] w-full' type="text" {...register('tipoResponsavel')}/>
              {errors.tipoResponsavel && <p>{errors.tipoResponsavel.message}</p>}
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={0} sx={{
            mt: 5,
          }}>
            <h2 className='font-semibold mb-3 text-xl'>Endereço</h2>
            <Grid container gap={3}>
              <Grid xs={5}>
              <label className='mb-5' htmlFor="cep">CEP:</label>
               <input  id='cep' placeholder='Digite um cep...' className='border-b-gray-500 select-none border-b-2 px-3 py-1 w-full' type="number" maxLength={8} {...register('cep')}/>
              {errors.cep && <p>{errors?.cep?.message}</p>}
              </Grid>
              <Grid xs={3}>
              <label className='mb-5' htmlFor="logradouro">Logradouro:</label>
               <input  id='logradouro' placeholder='Digite um logradouro...' className='border-b-gray-500 select-none border-b-2 px-3 py-[5px] w-full' type="text" {...register('logradouro')}/>
              {errors.logradouro && <p>{errors.logradouro?.message}</p>}
              </Grid>
              <Grid xs={3}>
              <label className='mb-5' htmlFor="numero">Número:</label>
               <input  id='numero' placeholder='Digite um numero...' className='border-b-gray-500 select-none border-b-2 px-3 py-[5px] w-full' type="string" {...register('numero')}/>
              {errors.numero && <p>{errors.numero?.message}</p>}
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={0} sx={{
            mt: 5,
          }}>
            <Grid container gap={3}>  
              <Grid xs={7}>
              <label className='mb-5' htmlFor="bairro">Bairro:</label>
               <input  id='bairro' placeholder='Digite um bairro...' className='border-b-gray-500 select-none border-b-2 px-3 py-1 w-full' type="text" {...register('bairro')}/>
               {errors.bairro && <p>{errors.bairro?.message}</p>}
              </Grid>
              <Grid xs={4.2}>
              <label className='mb-5' htmlFor="complemento">Complemento:</label>
               <input  id='complemento' placeholder='Digite um complemento...' className='border-b-gray-500 select-none border-b-2 px-3 py-[5px] w-full' type="text" {...register('complemento')}/>
               {errors.complemento && <p>{errors.complemento.message}</p>}
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={0} sx={{
            mt: 5,
          }}>
            <Grid container gap={3}>
              <Grid xs={9}>
              <label className='mb-5' htmlFor="localidade">Munícipo:</label>
               <input  id='localidade' placeholder='Digite um municipio...' className='border-b-gray-500 select-none border-b-2 px-3 py-1 w-full' type="text" {...register('localidade')}/>
               {errors.localidade && <p>{errors.localidade?.message}</p>}
              </Grid>
              <Grid xs={2.2}>
              <label className='mb-5' htmlFor="uf">UF:</label>
               <input  id='uf' placeholder='Digite um uf...' className='border-b-gray-500 select-none border-b-2 px-3 py-1 w-full' type="text" {...register('uf')}/>
               {errors.uf && <p>{errors.uf?.message}</p>}
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={0} sx={{
            mt: 5,
          }}>
            <h2 className='font-semibold mb-3 text-xl'>Contato</h2>
            <Grid container gap={3}>
              <Grid xs={5}>
              <label className='mb-5' htmlFor="telefone">Telefone de Contato:</label>
               <input  id='telefone' placeholder='Digite um telefone para contato...' className='border-b-gray-500 select-none border-b-2 px-3 py-1 w-full' type="text" {...register('telefone')}/>
              {errors.nome && <p>{errors.nome.message}</p>}
              </Grid>
              <Grid xs={3}>
              <label className='mb-5' htmlFor="tipoDeContato">Responsável:</label>
               <input  id='tipoDeContato' placeholder='Digite um responsável...' className='border-b-gray-500 select-none border-b-2 px-3 py-1 w-full' type="text" {...register('tipoDeContato')}/>
              {errors.tipoDeContato && <p>{errors.tipoDeContato.message}</p>}
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={0} sx={{
            mt: 5,
          }}>
            <Grid container gap={3}>
              <Grid xs={5}>
              <label className='mb-5' htmlFor="email">Email de Contato:</label>
               <input  id='email' placeholder='Digite um email para contato...' className='border-b-gray-500 select-none border-b-2 px-3 py-1 w-full' type="email" {...register('email')}/>
              {errors.email && <p>{errors.email.message}</p>}
              </Grid>
            </Grid>

            <Grid sm={12}>
              <div className='flex justify-end'>
                <button className=' text-black mt-5 ml-12 px-5 py-2 rounded-md ' type="submit">Salvar</button>
              </div>
            </Grid>
          </Grid>

        </form>
      </div>
    </div>
  )
}
