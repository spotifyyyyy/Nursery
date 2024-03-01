import React from 'react'
import { motion } from "framer-motion"
import {fadeIn} from '../Varients'
import videos1 from './videos1.mp4'
import video2 from './video2.mp4'




export default function video() {
  return (
         
    //  <div className='max-w-[1400px] h-[550px] w-80 m-0 py-16 px-4 relative group'>
    <motion.div  
    variants={fadeIn("down",0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false,amount:0.7}}

     className='mb-50' >
      <h1 class='text-center  mb-10 font-serif font-bold text-2xl '>डॉ. चोपडे Sr  वेडिओसच्या माध्यमातून वृक्षलागवडीसाठी योग्य मार्गदर्शन करत आहे</h1>
          <div class="h-auto mt-1 w-full flex justify-evenly items-center flex-wrap sm:mb-2 bg-rgb(128, 220, 128)"  >
      <div>      
    <motion.video
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 0.9 }}
     loop autoPlay muted class="w-80 rounded-lg mb-1" controls>
  <source src={videos1} type="video/mp4" loop autoPlay muted class="w-80 rounded-lg mb-1" controls></source> 
    Your browser does not support the video tag.
  <div><h2>ttttttttttttt</h2></div>
  </motion.video>
  <h2 className='font-bold'>पेरु पिकासाठी मार्गदर्शन करताना डॉ चोपडे सर <br></br> संपर्क 9096307463/9011173332</h2>
  </div>


  

  

  <div>
  <motion.video
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
   loop autoPlay muted  class=" w-80 rounded-lg mb-1" controls>
  <source src={video2} type="video/mp4" loop autoPlay muted  class="w-80 rounded-lg " controls></source> 
  
    Your browser does not support the video tag.
  </motion.video>
  <h2 className='font-bold'>फळपीक पेरू ला फळं अवस्था मध्ये फोम <br></br> नेट लावण्याचे फायदे</h2>
  </div>
  
  
  <div>
  <motion.video 
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
  loop autoPlay muted  class="w-80 rounded-lg " controls>
    <source src={videos1} type="video/mp4"></source> 
    Your browser does not support the video tag.
  </motion.video>
  <h2 className='font-bold'>पेरु पिकासाठी मार्गदर्शन करताना डॉ चोपडे सर <br></br> संपर्क 9096307463/9011173332</h2>

  </div>
  
  </div>


  </motion.div>
  






   


    
    
  )
}


















// flex lg:grid-col-3 md:grid-cols-2  justify-center items-center