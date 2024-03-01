import React from 'react'
import NB from './NB'
import Footer from './Footer'
import Video from './Video'
import About from './About'
import Testhero from './Testhero'
// import Testimonial from './Testimonial'
import Nursaryweb from './Nursaryweb'
import FeedbackCard  from './FeedbackCard'
import { motion } from "framer-motion"




export default function Home() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    >
      
      <Testhero/>
      <Nursaryweb/> 
      <About/>
      {/* <Video/> */}
      <FeedbackCard/>
      {/* <Footer/> */}
      {/* <Testimonial/> */}


    </motion.div>
  )
}
