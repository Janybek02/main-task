
import React from 'react'
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <>
      <div className=' header'>
        <div className=' container'>
        <div className='header_main'>
            <h1>ISKENDER</h1>
            <div className='header_main_box'>
                <div className=' header_main_box_category' >
                    <div className='first'>
                        <div className='first_div'></div>
                        <div className='first_div'></div>
                        <div className='first_div'></div>
                    
                    </div>
                    <p className=' text'>Каталог</p>
                </div>
                <div className='header_main_box_search'>
                    <CiSearch className=' icon'/>
                    <input type="text" placeholder='Писк....' />
                </div>
                <div className='header_main_box_reguest'>
                    <div className='div'>
                        <p>Добро пожаловать</p>
                        <h1>Вход/Регистрация</h1>
                    </div>
                    <div className=' iconBox'>
                        
                    </div>
                    <div className='line'>

                    </div>
                    <div className=' iconBox'>

                    </div>

                </div>
            </div>
        </div>
        </div>
       
      </div>
    </>
  )
}
