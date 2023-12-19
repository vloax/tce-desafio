import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gestão - Fila',
  description: 'Feito por Vitor Melo',
}

export default function RootLayout({
  children,
  texto,
  subtexto,
}: {
  children: React.ReactNode,
  texto: string,
  subtexto: string,
}) {
  return (
    <html lang='pt-BR'>
      <body>
      <div className="min-h-screen flex flex-row bg-white ">
  <div className="flex flex-col w-64 bg-[#379DFF] overflow-hidden">
    <div className="flex items-center justify-center h-20 mx-4 mt-5 text-center">
      <h1 className="text-xl drop-shadow-xl text-white font-extrabold uppercase fontTest">Gestão de Vagas em Creche</h1>
    </div>
    <ul className="flex flex-col py-4 gap-y-4">
      <li>
        <Link legacyBehavior href="/">
          <a className="bg-[#276DB0] mx-2 rounded-md flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.0001 8.00001L14.0001 2.74001C13.4501 2.24805 12.738 1.97607 12.0001 1.97607C11.2622 1.97607 10.5501 2.24805 10.0001 2.74001L4.00009 8.00001C3.68246 8.28408 3.42899 8.63256 3.25657 9.02225C3.08414 9.41194 2.99671 9.83389 3.00009 10.26V19C3.00009 19.7957 3.31617 20.5587 3.87877 21.1213C4.44138 21.6839 5.20445 22 6.00009 22H18.0001C18.7957 22 19.5588 21.6839 20.1214 21.1213C20.684 20.5587 21.0001 19.7957 21.0001 19V10.25C21.0021 9.82557 20.9139 9.40555 20.7416 9.01769C20.5692 8.62983 20.3165 8.28296 20.0001 8.00001ZM14.0001 20H10.0001V15C10.0001 14.7348 10.1055 14.4804 10.293 14.2929C10.4805 14.1054 10.7349 14 11.0001 14H13.0001C13.2653 14 13.5197 14.1054 13.7072 14.2929C13.8947 14.4804 14.0001 14.7348 14.0001 15V20ZM19.0001 19C19.0001 19.2652 18.8947 19.5196 18.7072 19.7071C18.5197 19.8946 18.2653 20 18.0001 20H16.0001V15C16.0001 14.2044 15.684 13.4413 15.1214 12.8787C14.5588 12.3161 13.7957 12 13.0001 12H11.0001C10.2044 12 9.44138 12.3161 8.87877 12.8787C8.31616 13.4413 8.00009 14.2044 8.00009 15V20H6.00009C5.73488 20 5.48052 19.8946 5.29299 19.7071C5.10545 19.5196 5.00009 19.2652 5.00009 19V10.25C5.00027 10.108 5.03069 9.9677 5.08931 9.83839C5.14794 9.70907 5.23343 9.59372 5.3401 9.50001L11.3401 4.25001C11.5226 4.08969 11.7572 4.00127 12.0001 4.00127C12.243 4.00127 12.4776 4.08969 12.6601 4.25001L18.6601 9.50001C18.7668 9.59372 18.8523 9.70907 18.9109 9.83839C18.9695 9.9677 18.9999 10.108 19.0001 10.25V19Z" fill="white"/>
            </svg>
            </span>
            <span className="text-md text-white font-medium">Inicio</span>
          </a>
        </Link>
      </li>
      <li>
      <Link legacyBehavior href="/criancas">
          <a className="bg-[#276DB0] rounded-md mx-2 flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20 8V14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23 11H17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
            <span className="text-md text-white font-medium">Crianças</span>
          </a>
        </Link>
      </li>
    </ul>
  </div>
  <div className="w-11/12 ">
    {children}
  </div>
</div>
      </body>

    </html>
  )
}
