import React, { useState } from 'react'
import { styles } from '../styles'
import { Link } from 'react-router-dom'
import { logo, menu, close } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toogle, setToogle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-1 fixed top-0 z-10 bg-black`}>
      <div className='w-full flex justify-between items-center max-w-7xl '>
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive('')
          window.scrollTo(0, 0)
        }}>
          <img src={logo} alt='logo' className='w-10 h-10 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Ilya</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-5'>
          {navLinks.map((item) => (
            <li key={item.id} onClick={() => setActive(item.title)} className={`${(item.title === active) ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] cursor-pointer`}>
              <a href={`#${item.id}`} >{item.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer'>
          <img src={toogle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToogle(!toogle)} />
          <div className={`${toogle ? 'flex' : 'hidden'} p-6 black-gradient absolute top-20 right-0 mr-2 mx-4 my-2 z-10 rounded-xl`}>
            <ul className='list-none flex flex-col gap-5 '>
              {navLinks.map((item) => (
                <li key={item.id} onClick={() => {
                  setActive(item.title)
                  setToogle(!toogle)
                }} className={`${(item.title === active) ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] cursor-pointer`}>
                  <a href={`#${item.id}`} >{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
