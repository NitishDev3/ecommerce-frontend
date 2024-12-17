import React, { useState } from 'react'
import { LOGO_IMG } from '../../assets/constants';
import CART_IMG from '../../assets/cart.png';

const Header = () => {
    const [ activeCategory, setActiveCategory ] = useState("home")

    return (
        <div className='shadow-md'>
            <div className='flex justify-between'>
                <div className='flex justify-center items-center'>
                    <img src={LOGO_IMG} alt="" className='w-24' />
                    <div>
                        <h1 className='font-bold text-4xl'>Fashion</h1>
                        <h1 className='font-medium text-2xl'>Hub</h1>
                    </div>

                </div>
                <div className='flex justify-center items-center'>
                    <ul className='flex gap-8 text-lg font-semibold'>
                        <li className='cursor-pointer' onClick={()=>{setActiveCategory('home')}}>Home { activeCategory === 'home' ? <hr className='bg-orange-500 h-px border-0'/> : <></> }</li>
                        <li className='cursor-pointer' onClick={()=>{setActiveCategory('men')}}>Men { activeCategory === 'men' ? <hr className='bg-orange-500 h-px border-0'/> : <></> }</li>
                        <li className='cursor-pointer' onClick={()=>{setActiveCategory('women')}}>Women { activeCategory === 'women' ? <hr className='bg-orange-500 h-px border-0'/> : <></> }</li>
                        <li className='cursor-pointer' onClick={()=>{setActiveCategory('kids')}}>Kids { activeCategory === 'kids' ? <hr className='bg-orange-500 h-px border-0'/> : <></> }</li>
                    </ul>
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <img src={CART_IMG} alt="" className='w-16 h-16' />
                    <button className='bg-lime-600 text-lg px-3 py-2 font-medium rounded-lg mr-6'>Log In</button>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Header