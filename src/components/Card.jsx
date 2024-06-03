import React, { useState } from 'react'

const Card = ({ayarUrun,setMoney,money,sayiCevir}) => {
  const [sat,setSat] = useState(0);

    const eksilt = () => {
      setMoney(money - ayarUrun.price);
      setSat(sat + 1);
  }

  const satis = () => {
      if (sat > 0) {
          setSat(sat - 1);
          setMoney(money + ayarUrun.price);
      }
  }
  return (
    <>

                <div className="col-3 mt-3">

            <div className="card p-2 mt-4" style={{width: '18rem'}}> 
            <img src={ayarUrun.image} className="card-img-top w-100" alt={ayarUrun.title}/>
            <div className="card-body">
              <h4 className="card-title mb-3">{ayarUrun.title}</h4>
              <h6 className='my-3'>{sayiCevir(ayarUrun.price)}€ -
              <span className='ms-2' style={{color:"#a8a8a8"}}>En Fazla : {ayarUrun.max} Tane</span>
              </h6>
              


              {
                sat === 0 ?(
                  <button className='btn btn-outline-danger' onClick={satis} disabled>Sat</button>

                )
                :(
              <button className='btn btn-outline-danger' onClick={satis}>Sat</button>

                )
              }
              <span className='h5 mx-3'>{sat}</span>

              {
                ayarUrun.max === sat ? (
                  <button className='btn btn-outline-dark' onClick={eksilt} disabled>Satın Al</button>
                ):
                (
                  <button className='btn btn-outline-dark' onClick={eksilt} >Satın Al</button>
                )
              }
            </div>
          </div>
        </div>
    </>

  )
}

export default Card
