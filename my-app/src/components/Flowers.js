import React from 'react'
import { motion } from "framer-motion"

function Flowers() {
  return (
    <>
    <motion.div
     initial={{ opacity: 0, scale: 0.5 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 0.8 }}
    >
    <div >
      <h1 class="bg-green-500 tet-white text-4xl font-bold text-center"> विविध फुलांची रोपे</h1></div>
  < div class=" w-screen  h-full bg-pink-200 grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2  place-content-center items-center gap-y-4  ">
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2018/05/26/13/05/flower-3431316_1280.jpg" alt="product image" />
  
  <div class=" text-center ">
      
          <h5 class="text-2xl  mb-3 font-semibold tracking-tight  text-blue-950">गुलाब</h5>
     
     
      <div class="flex items-center justify-evenly">
          <span class="text-3xl font-bold  text-blue-950">१० रुपये</span>
          <a href="https://wa.me/c/919886591867" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
      </div>
  </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2017/07/04/17/13/carnations-of-india-2471877_1280.jpg" alt="product image" />
  
  <div class=" text-center ">
      <a href="#">
          <h5 class="text-2xl  mb-3 font-semibold tracking-tight  text-blue-950">झेंडू</h5>
      </a>
     
      <div class="flex items-center justify-evenly">
          <span class="text-3xl font-bold text-gray-900 ">१० रुपये</span>
          <a href="https://wa.me/c/919886591867" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
      </div>
  </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2013/06/14/18/59/water-lily-139364_1280.jpg" alt="product image" />
  
  <div class=" text-center ">
      <a href="#">
          <h5 class="text-2xl  mb-3 font-semibold tracking-tight  text-blue-950">लिली</h5>
      </a>
     
      <div class="flex items-center justify-evenly">
          <span class="text-3xl font-bold text-blue-950">१० रुपये</span>
          <a href="https://wa.me/c/919886591867" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
      </div>
  </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2018/07/20/13/52/sunflower-3550693_1280.jpg" alt="product image" />
  
  <div class=" text-center ">
      <a href="#">
          <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-blue-950">सूर्यफूल</h5>
      </a>
     
      <div class="flex items-center justify-evenly">
          <span class="text-3xl font-bold text-gray-900 ">१० रुपये</span>
          <a href="https://wa.me/c/919886591867" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
      </div>
  </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/08/01/15/58/raining-5455688_1280.jpg" alt="product image" />
  
  <div class=" text-center ">
      <a href="#">
          <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-blue-950 ">लिंबू</h5>
      </a>
     
      <div class="flex items-center justify-evenly">
          <span class="text-3xl font-bold text-gray-900 ">१० रुपये</span>
          <a href="https://wa.me/c/919886591867" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
      </div>
  </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2014/04/10/16/35/mango-tree-321075_1280.jpg" alt="product image" />
  
  <div class=" text-center ">
      <a href="#">
          <h5 class="text-2xl  mb-3 font-semibold tracking-tight  text-blue-950">JAVA PLUM</h5>
      </a>
     
      <div class="flex items-center justify-evenly">
          <span class="text-3xl font-bold text-gray-900 ">१० रुपये</span>
          <a href="https://wa.me/c/919886591867" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
      </div>
  </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img class=" rounded-t-lg" src="https://th.bing.com/th/id/OIP.u70n6_tmrPtgSe6SpzTYRwHaE7?rs=1&pid=ImgDetMain" alt="product image" />
  
  <div class=" text-center ">
      <a href="#">
          <h5 class="text-2xl  mb-3 font-semibold tracking-tight  text-blue-950">CHICKOO</h5>
      </a>
     
      <div class="flex items-center justify-evenly">
          <span class="text-3xl font-bold text-gray-900 ">१० रुपये</span>
          <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
      </div>
  </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2019/10/21/14/54/oranges-4566275_1280.jpg" alt="product image" />
  
  <div class=" text-center ">
      <a href="#">
          <h5 class="text-2xl  mb-3 font-semibold tracking-tight  text-blue-950">ORANGE</h5>
      </a>
     
      <div class="flex items-center justify-evenly">
          <span class="text-3xl font-bold text-gray-900 ">१० रुपये</span>
          <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
      </div>
  </div>
</div>
</div>
<div div class=" w-screen  h-full mt-2 grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2  place-content-center items-center gap-y-2 bg-pink-200 ">

<div class="w-64 pb-2   bg-green-100 text-gray-900border-2 border-red-600  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/02/05/12/53/fruit-4821131_1280.jpg" alt="product image" />
 
 <div class=" text-center ">
     <a href="#">
         <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-gray-900text-blue-950">JACKFRUIT</h5>
     </a>
    
     <div class="flex items-center justify-evenly">
         <span class="text-3xl text-gray-900font-bold  text-blue-950">१० रुपये</span>
         <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
     </div>
 </div>
</div>
<div class="w-64 pb-2   bg-green-100 text-gray-900border-2 border-red-600  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/06/25/17/05/gooseberry-5340197_1280.jpg" alt="product image" />
 
 <div class=" text-center ">
     <a href="#">
         <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-gray-900text-blue-950">AMLA</h5>
     </a>
    
     <div class="flex items-center justify-evenly">
         <span class="text-3xl text-gray-900font-bold  text-blue-950">१० रुपये</span>
         <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
     </div>
 </div>
</div>
<div class="w-64 pb-2   bg-green-100 text-gray-900border-2 border-red-600  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2023/01/23/21/11/apple-7739714_1280.jpg" alt="product image" />
 
 <div class=" text-center ">
     <a href="#">
         <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-gray-900text-blue-950">APPLE</h5>
     </a>
    
     <div class="flex items-center justify-evenly">
         <span class="text-3xl text-gray-900font-bold  text-blue-950">१० रुपये</span>
         <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
     </div>
 </div>
</div>
<div class="w-64 pb-2   bg-green-100 text-gray-900border-2 border-red-600  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/08/22/20/39/leaves-5509388_1280.jpg" alt="product image" />
 
 <div class=" text-center ">
     <a href="#">
         <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-gray-900text-blue-950">TAMARIND</h5>
     </a>
    
     <div class="flex items-center justify-evenly">
         <span class="text-3xl text-gray-900font-bold  text-blue-950">१० रुपये</span>
         <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
     </div>
 </div>
</div>
<div class="w-64 pb-2   bg-green-100 text-gray-900border-2 border-red-600  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2012/07/09/07/08/cashew-51978_1280.jpg" alt="product image" />
 
 <div class=" text-center ">
     <a href="#">
         <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-gray-900text-blue-950">CASHEW NUT</h5>
     </a>
    
     <div class="flex items-center justify-evenly">
         <span class="text-3xl text-gray-900font-bold  text-blue-950">१० रुपये</span>
         <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
     </div>
 </div>
</div>
<div class="w-64 pb-2   bg-green-100 text-gray-900border-2 border-red-600  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2021/08/16/09/28/lychee-6549897_1280.jpg" alt="product image" />
 
 <div class=" text-center ">
     <a href="#">
         <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-gray-900text-blue-950">LYCHEE</h5>
     </a>
    
     <div class="flex items-center justify-evenly">
         <span class="text-3xl text-gray-900font-bold  text-blue-950">१० रुपये</span>
         <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
     </div>
 </div>
</div>
<div class="w-64 pb-2   bg-green-100 text-gray-900border-2 border-red-600  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2018/07/10/05/12/fig-3527881_1280.jpg" alt="product image" />
 
 <div class=" text-center ">
     <a href="#">
         <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-gray-900text-blue-950">FIG</h5>
     </a>
    
     <div class="flex items-center justify-evenly">
         <span class="text-3xl text-gray-900font-bold  text-blue-950">१० रुपये</span>
         <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
     </div>
 </div>
</div>
<div class="w-64 pb-2   bg-green-100 text-gray-900border-2 border-red-600  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2018/05/14/13/41/autumn-3400000_1280.jpg" alt="product image" />
 
 <div class=" text-center ">
     <a href="#">
         <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-gray-900text-blue-950">BOR</h5>
     </a>
    
     <div class="flex items-center justify-evenly">
         <span class="text-3xl text-gray-900font-bold  text-blue-950">१० रुपये</span>
         <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
     </div>
 </div>
</div>
</div>
</motion.div>
   </>
  )
}

export default Flowers
