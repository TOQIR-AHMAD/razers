import React from 'react'

type CardProps = {
    title: string;
    description: string;
  };
  
  function CardDetails({ title, description }: CardProps) {
  return (
    <div className=' py-8 '>
      <h1 className=' text-4xl text-center text-razer-green'>{title}</h1>
      <div className=' text-center  flex justify-center'>
      <p className=' w-3/4 text-lg py-3'>{description}</p>
      </div>
    </div>
  )
}

export default CardDetails;