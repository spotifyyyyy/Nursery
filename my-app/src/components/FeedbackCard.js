import React from 'react'
import { motion } from "framer-motion"
import {fadeIn} from '../Varients'
import T1 from './T1.mp4'
import T2 from './T2.mp4'
import T3 from './T3.mp4'


function FeedbackCard() {
  return (
    <motion.div  
    // variants={fadeIn("down",0.3)}
    // initial="hidden"
    // whileInView={"show"}
    // viewport={{once: false,amount:0.7}}

     className='mb-50' >
      <h1 class='text-center  mb-10 font-serif font-bold text-3xl '>
प्रशस्तिपत्र</h1>
          <div class="h-auto mt-1 w-full flex justify-evenly items-center flex-wrap sm:mb-2 bg-rgb(128, 220, 128)"  >
      <div>      
    <motion.video
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 0.9 }}
     loop autoPlay muted class="w-80 rounded-lg mb-1" controls>
  <source src={T1} type="video/mp4"  muted class="w-80 rounded-lg mb-1" controls></source> 
    Your browser does not support the video tag.
  <div><h2>ttttttttttttt</h2></div>
  </motion.video>
  <h2 className='font-bold'>आंबा लागवड तंत्रज्ञान डॉक्टर बापूराव चोपडे <br></br> Msc. Agri., Ph.D संपर्क 90963 07463</h2>
  </div>


  

  

  <div>
  <motion.video
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
   loop autoPlay muted  class=" w-80 rounded-lg mb-1" controls>
  <source src={T2} type="video/mp4"  muted  class="w-80 rounded-lg " controls></source> 
  
    Your browser does not support the video tag.
  </motion.video>
<h2 className='font-bold'>दीड वर्षांपूर्वी झाडे . अनिल धायगुडे साहेब, अहिरे <br></br> ता. खंडाळा, जि. सातारा 9822455949</h2>
  </div>
  
  
  <div>
  <motion.video 
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
   loop autoPlay muted  class="w-80 rounded-lg " controls>
    <source src={T3} type="video/mp4"></source> 
    Your browser does not support the video tag.
  </motion.video>
  <h2 className='font-bold'>श्री समर्थ नर्सरी, सुखेड येथील जांभूळ फळबाग <br></br> लागवड Mb. no. 9096307463</h2>

  </div>
  
  </div>


  </motion.div>
  
  )
}

export default FeedbackCard
