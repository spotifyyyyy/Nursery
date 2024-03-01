import React from 'react'
import { motion } from "framer-motion"

function Fruits() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div ><h1 class="bg-green-500 tet-white text-4xl font-bold text-center">विविध फळांची रोपे</h1></div>
    < div class=" w-screen  h-full bg-pink-200 grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2  place-content-center items-center gap-y-4  ">
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2018/01/29/10/26/star-apple-3115755_1280.jpg" alt="product image" />
    
    <div class=" text-center ">
        
            <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-blue-950 dark:text-black">आंबा</h5>
       
       
        <div class="flex items-center justify-evenly">
            <span class="text-3xl font-bold text-gray-900 dark:text-black">१५ रुपये</span>
            <a href="https://wa.me/c/919886591867" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
        </div>
    </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2013/12/14/10/28/tree-228541_1280.jpg" alt="product image" />
    
    <div class=" text-center ">
        <a href="#">
            <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-blue-950 dark:text-black">नारळ</h5>
        </a>
       
        <div class="flex items-center justify-evenly">
            <span class="text-3xl font-bold text-gray-900 dark:text-black">१५ रुपये</span>
            <a href="https://wa.me/c/919886591867" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
        </div>
    </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2022/12/12/08/52/guava-7650529_1280.jpg" alt="product image" />
    
    <div class=" text-center ">
        <a href="#">
            <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-blue-950 dark:text-black">पेरू</h5>
        </a>
       
        <div class="flex items-center justify-evenly">
            <span class="text-3xl font-bold text-gray-900 dark:text-black">१५ रुपये</span>
            <a href="https://wa.me/c/919886591867" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
        </div>
    </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2023/07/31/16/37/sugar-apple-8161386_1280.jpg" alt="product image" />
    
    <div class=" text-center ">
        <a href="#">
            <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-blue-950 dark:text-black">शिताफळ</h5>
        </a>
       
        <div class="flex items-center justify-evenly">
            <span class="text-3xl font-bold text-gray-900 dark:text-black">१५ रुपये</span>
            <a href="https://wa.me/c/919886591867" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
        </div>
    </div>
</div>
<div class="w-64 pb-2   bg-green-100 text-black border-2   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <img class=" rounded-t-lg" src="https://minnetonkaorchards.com/wp-content/uploads/2021/05/Java-Plum-Tree.jpg" alt="product image" />
   
   
   <div class=" text-center ">
       <a href="#">
           <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-black dark:text-black">जांभूळ</h5>
       </a>
      
       <div class="flex items-center justify-evenly">
           <span class="text-3xl text-black font-bold  dark:text-black">१५ रुपये</span>
           <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
       </div>
   </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/08/01/15/58/raining-5455688_1280.jpg" alt="product image" />
    
    <div class=" text-center ">
        <a href="#">
            <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-blue-950 dark:text-black">लिंबू</h5>
        </a>
       
        <div class="flex items-center justify-evenly">
            <span class="text-3xl font-bold text-gray-900 dark:text-black">१५ रुपये</span>
            <a href="https://wa.me/c/919886591867" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
        </div>
    </div>
</div>

<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img class=" rounded-t-lg" src="https://th.bing.com/th/id/OIP.u70n6_tmrPtgSe6SpzTYRwHaE7?rs=1&pid=ImgDetMain" alt="product image" />
    
    <div class=" text-center ">
        <a href="#">
            <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-blue-950 dark:text-black">चिकू</h5>
        </a>
       
        <div class="flex items-center justify-evenly">
            <span class="text-3xl font-bold text-gray-900 dark:text-black">१५ रुपये</span>
            <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
        </div>
    </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2019/10/21/14/54/oranges-4566275_1280.jpg" alt="product image" />
    
    <div class=" text-center ">
        <a href="#">
            <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-blue-950 dark:text-black">संत्रा</h5>
        </a>
       
        <div class="flex items-center justify-evenly">
            <span class="text-3xl font-bold text-gray-900 dark:text-black">१५ रुपये</span>
            <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
        </div>
    </div>
</div>
</div>
<div div class=" w-screen  h-full mt-2 grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2  place-content-center items-center gap-y-2 bg-pink-200 ">
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/02/05/12/53/fruit-4821131_1280.jpg" alt="product image" />
    
    <div class=" text-center ">
        <a href="#">
            <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-blue-950 dark:text-black">फणस</h5>
        </a>
       
        <div class="flex items-center justify-evenly">
            <span class="text-3xl font-bold text-gray-900 dark:text-black">१५ रुपये</span>
            <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
        </div>
    </div>
</div>
<div class="w-64 pb-2   bg-green-100 text-black border-2   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/06/25/17/05/gooseberry-5340197_1280.jpg" alt="product image" />
   
   <div class=" text-center ">
       <a href="#">
           <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-black dark:text-black">आवळा</h5>
       </a>
      
       <div class="flex items-center justify-evenly">
           <span class="text-3xl text-black font-bold  dark:text-black">१५ रुपये</span>
           <a href="#" class="text-white     bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
       </div>
   </div>
</div>
<div class="w-64 pb-2   bg-green-100 text-black border-2   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2023/01/23/21/11/apple-7739714_1280.jpg" alt="product image" />
   
   <div class=" text-center ">
       <a href="#">
           <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-black dark:text-black">सफरचंद</h5>
       </a>
      
       <div class="flex items-center justify-evenly">
           <span class="text-3xl text-black font-bold  dark:text-black">१५ रुपये</span>
           <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
       </div>
   </div>
</div>
<div class="w-64 pb-2   bg-green-100 text-black border-2   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2021/08/30/09/42/cashew-6585397_1280.jpg" alt="product image" />
   
   <div class=" text-center ">
       <a href="#">
           <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-black dark:text-black">काजू</h5>
       </a>
      
       <div class="flex items-center justify-evenly">
           <span class="text-3xl text-black font-bold  dark:text-black">१५ रुपये</span>
           <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
       </div>
   </div>
</div>
<div class="w-64 pb-2   bg-green-100 text-black border-2   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/08/22/20/39/leaves-5509388_1280.jpg" alt="product image" />
   
   <div class=" text-center ">
       <a href="#">
           <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-black dark:text-black">चिंच</h5>
       </a>
      
       <div class="flex items-center justify-evenly">
           <span class="text-3xl text-black font-bold  dark:text-black">१५ रुपये</span>
           <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
       </div>
   </div>
</div>
<div class="w-64 pb-2   bg-green-100 text-black border-2   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2018/05/14/13/41/autumn-3400000_1280.jpg" alt="product image" />
   
   <div class=" text-center ">
       <a href="#">
           <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-black dark:text-black">बोर</h5>
       </a>
      
       <div class="flex items-center justify-evenly">
           <span class="text-3xl text-black font-bold  dark:text-black">१५ रुपये</span>
           <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
       </div>
   </div>
</div>
<div class="w-64 pb-2   bg-green-100 text-black border-2   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2021/08/16/09/28/lychee-6549897_1280.jpg" alt="product image" />
   
   <div class=" text-center ">
       <a href="#">
           <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-black dark:text-black">लिची</h5>
       </a>
      
       <div class="flex items-center justify-evenly">
           <span class="text-3xl text-black font-bold  dark:text-black">१५ रुपये</span>
           <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
       </div>
   </div>
</div>
<div class="w-64 pb-2   bg-green-100 text-black border-2   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2018/07/10/05/12/fig-3527881_1280.jpg" alt="product image" />
   
   <div class=" text-center ">
       <a href="#">
           <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-black dark:text-black">अंजीर</h5>
       </a>
      
       <div class="flex items-center justify-evenly">
           <span class="text-3xl text-black font-bold  dark:text-black">१५ रुपये</span>
           <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
       </div>
   </div>
</div>

</div>
</motion.div>
     </>
  )
}

export default Fruits
