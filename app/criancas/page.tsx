'use client'

import React from 'react'
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#379DFFE5',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

type Crianca = {
  id: number;
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

export default function CriancasListView() {

  const [crianca, setCrianca] = React.useState<Crianca[]>([]);

  async function fetchData() {
    const response = await fetch('http://localhost:3000/criancas');
    let data = await response.json();
    setCrianca(data);
  }

  React.useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <div className='flex flex-col bg-blue-100 h-36'>
       <h2 className='mt-6 ml-6 text-3xl font-bold'>Consultar Crianças</h2>
       <p className='ml-6 text-xl font-regular text-[#878789]'>Listagem, consulta e atualização das crianças cadastradas</p>
      </div>

      <div className='flex justify-end items-end mr-20 mt-8'>
      <TextField
          sx={{
            mr: 2,
          }}
          label="Pesquisar"
          id="outlined-size-small"
          defaultValue=" "
          size="small"
        />
        <Link href={"./criancas/cadastrar"}>
          <button
            className="flex select-none items-center gap-3 rounded-lg bg-[#379DFFE5] py-2 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md"
            type="button"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
              <g clip-path="url(#clip0_14_234)">
              <path d="M19 11.9166H13V5.41659C13 5.12927 12.8946 4.85372 12.7071 4.65055C12.5196 4.44739 12.2652 4.33325 12 4.33325C11.7348 4.33325 11.4804 4.44739 11.2929 4.65055C11.1054 4.85372 11 5.12927 11 5.41659V11.9166H5C4.73478 11.9166 4.48043 12.0307 4.29289 12.2339C4.10536 12.437 4 12.7126 4 12.9999C4 13.2872 4.10536 13.5628 4.29289 13.766C4.48043 13.9691 4.73478 14.0833 5 14.0833H11V20.5833C11 20.8706 11.1054 21.1461 11.2929 21.3493C11.4804 21.5524 11.7348 21.6666 12 21.6666C12.2652 21.6666 12.5196 21.5524 12.7071 21.3493C12.8946 21.1461 13 20.8706 13 20.5833V14.0833H19C19.2652 14.0833 19.5196 13.9691 19.7071 13.766C19.8946 13.5628 20 13.2872 20 12.9999C20 12.7126 19.8946 12.437 19.7071 12.2339C19.5196 12.0307 19.2652 11.9166 19 11.9166Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_14_234">
              <rect width="24" height="26" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            Novo
          </button>
        </Link>
      </div>
      
      <div className='mx-12 mt-8'>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Nome da Criança</StyledTableCell>
            <StyledTableCell align="right">CPF</StyledTableCell>
            <StyledTableCell align="right">Nome do Responsável</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Ações</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {crianca.map((crianca) => (
            <StyledTableRow key={crianca?.id}>
              <StyledTableCell component="th" scope="row">
                {crianca.id}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {crianca.nome}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {crianca.cpf}
              </StyledTableCell>
              <StyledTableCell align="right">{crianca.nomeResponsavel}</StyledTableCell>
              <StyledTableCell align="right">{crianca.email}</StyledTableCell>
              <StyledTableCell align="right"><IconButton onClick={() => {
                                fetch(`http://localhost:3000/criancas/${crianca.id}`, {
                                  method: 'DELETE'
                                })
                                .then(() => fetchData())
              }} aria-label="delete" size="large">
  <DeleteIcon fontSize="inherit" />
</IconButton></StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  )
}
