import * as React from 'react';
import Image from 'next/image'


export default function PermanentDrawerLeft() {
  return (
      <>
       <div className="flex flex-col bg-blue-100 h-36">
        <h2 className='mt-6 ml-6 text-3xl font-bold'>Seja bem vindo!</h2>
         <p className='ml-6 text-xl font-regular text-[#878789]'>Acesse o menu lateral e navegue pelo sistema!</p>
      </div>
      </>
  );
}