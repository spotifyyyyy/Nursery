import { motion } from "framer-motion"
import {fadeIn} from '../Varients'
// import heroImg from "../public/img/hero.png";
import Video from './Video'

const About = () => {
  return (
    
<section class="bg-rgb(141, 218, 141)">
    <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
        variants={fadeIn("down",0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false,amount:0.7}}
        
        class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            class="max-w-lg">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">आमच्याबद्दल</h2>
                <p class="mt-4 text-black text-lg">आमची शुरुआत:
आमच्या नैर्सरीची सुरुवात [वर्ष] में होती. ह्या क्षणी आपल्या आश्रयात येतलेल्या प्रत्येक वनस्पतीला आम्ही प्रेम करतो आणि त्यांची देखरेख करतो.

आमची उद्दीष्ट:
आमच्या नैर्सरीची मुख्य उद्दीष्ट आहे आपल्या आवासात आनंदानुभवी आणि सुरक्षित वातावरणात वनस्पती प्रदान करणे. आमच्या नैर्सरीमध्ये विविध प्रजातींची नर्सरी आहे, ज्यामध्ये आपण आपल्या आवासातील आणि आपल्या उपाचारातील आवडीच्या वनस्पतींची निवड प्राप्त करू शकता..</p>
                {/* <div class="mt-8">
                    <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">
                        <span class="ml-2">&#8594;</span></a>
                </div> */}
            </motion.div>
            <div class="mt-12 md:mt-0">
              
                <img className='h-72 ml-8 rounded-lg' src={require('./sirphoto.jpg')}></img>
                
                {/* <img  src="https://gemootest.s3.us-east-2.amazonaws.com/s/res/616640776973254656/8e2f33ec589d48c4320511c375d86bc5.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20240215%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240215T075923Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=d8f7b284aea106770f9e3ba35b3a1fac42834f389044b9aa4f3e188cb635b301" alt="About Us Image" class="object-cover h-80 rounded-lg shadow-md"/> */}
            </div>
        </motion.div>

        
<motion.div
 variants={fadeIn("down",0.3)}
 initial="hidden"
 whileInView={"show"}
 viewport={{once: false,amount:0.7}}



className="flex space-x-3">
        <div className="card card-compact w-96 bg-base-100  mt-20">
        <img  className='border-2 lg:h-72 rounded-md border-black'src={require('./IMG-20240213-WA0015.jpg')}></img>
  <figure></figure>
  <div  className="card-body">
    <h2 className="card-title pl-11  font-bold text-1xl">बीएससी पदवी</h2>
    <p></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"></button>
    </div>
  </div>
</div>


<div className="card card-compact w-96 bg-base-100  mt-20">
  <figure>
        <img className='border-2 lg:h-72 rounded-md border-black' src={require('./IMG-20240213-WA0015.jpg')}></img>

  </figure>
  <div className="card-body">
    <h2 className="card-title pl-11 font-bold text-1xl" >एमएससी पदवी </h2>
    <span></span>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"></button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100  mt-20">
       
  <figure>
     <img className='border-2 lg:h-72 border-black rounded-md' src={require('./IMG-20240213-WA0012.jpg')}></img>

  </figure>
  <div className="card-body">
    <h2 className="card-title pl-11  font-bold text-1xl pt-2 ">पीएचडी पदवी</h2>
    <p></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"></button>
    </div>
  </div>
</div>  
</motion.div>
    
    </div>
    <Video/>
</section>


  )
}

export default About;