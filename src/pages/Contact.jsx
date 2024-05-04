import React from 'react'
import { motion } from 'framer-motion'
import "./style.css";
const variant={
    start:{
       
        opacity:0
    },
    end:{
       
        opacity:1,
       
    },
    exit:{
        x:"-100vw",
        transition:{duration:0.5}
    }
}
const Contact = () => {
  return (
    <motion.div className='contact' variants={variant} initial="start" animate="end" exit="exit">
        <h1>contact</h1>
    </motion.div>
  )
}

export default Contact