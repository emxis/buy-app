  import React, { useState } from 'react'
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.min.js";
  import CardAyar from './components/CardAyar';
  import urun from "./urun.json";
  const App = () => {

    const [money,setMoney] = useState(52000000);
    const sayiCevir = (sayim) => {
      return sayim.toLocaleString();
    }
    return (
      <div> 
        <>
          <div className='bg-dark w-100 d-flex align-items-center text-white justify-content-center sticky-top' style={{height:"17vh"}}>
            <div>
              <h4>Kalan Para : {sayiCevir(money)} €</h4>
            </div>
            </div>

              <CardAyar urun={urun} money={money} setMoney={setMoney} sayiCevir={sayiCevir}/>
        </>
      </div>
    )
  }

  export default App
