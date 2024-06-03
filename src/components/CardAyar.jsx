import React from 'react'
import Card from './Card'

const CardAyar = ({urun,money,setMoney,sayiCevir}) => {
  return (
    <>
          <div className='container-fluid'>
          <div className='row mt-4 mb-5'>
      {
        
        urun.map((ayarUrun,i)=>(

          <Card ayarUrun={ayarUrun} key={i} setMoney={setMoney}  money={money} sayiCevir={sayiCevir}/>
          
        ))
      }
    </div>
          </div>

    </>
  )
}

export default CardAyar
