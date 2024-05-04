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

const About = () => {
  return (
    <motion.div className='about' variants={variant} initial="start" animate="end" exit="exit">
        <h1>about</h1>
    </motion.div>
  )
}

export default About