import React from 'react'
import {  easeInOut, motion } from 'framer-motion'
import "./style.css"

const variant={
    start:{
       
        opacity:0
    },
    end:{
       
        opacity:1,
       
    },
    exit:{
        x:"-100vw",
        transition:{duration:0.5,ease:easeInOut}
    }
}
const Home = () => {
  return (
    <motion.div className='home' variants={variant} initial="start" animate="end" exit="exit">
        <h1>home</h1>
    </motion.div>
  )
}

export default Home;