import React from 'react'
import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu from '../components/menu'
import Search from '../components/search'
import FirstContent from '../components/firstContent'
import EndContent from '../components/endContent'
import Between from '../components/betweenContent'
import Footer from '../components/footer'



export default function Home() {

  let [isMenu, setIsMenu] = useState(false)

  let showMenu = () => {
    setIsMenu(!isMenu)
  }

  return (
    <div className='bg-color h-full rounded-3xl'>
      <Head>
        <title>MasMas DashBoard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid gap-4 lg:grid-cols-5 grid-cols-1 lg:ml-auto ml-5">
        <div className=''>
          <Menu
            isMenu={isMenu}
            showMenu={showMenu}
          />
        </div>
        <div className="col-span-4 mr-6">
          <Search showMenu={showMenu} />
          <div className="grid grid-rows-none auto-rows-min gap-4">
            {/* Hang 1 */}
            <FirstContent />
            {/* Hang 2 */}
            <div className="grid md:grid-cols-3 grid-cols-1 row-span-1 gap-4">
              <Between />
            </div>
            {/* Hang 3 */}
            <div className="grid md:grid-cols-3 grid-cols-1 row-span-1 gap-4">
              <EndContent />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
