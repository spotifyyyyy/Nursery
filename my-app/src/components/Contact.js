import React from 'react'
import { useState } from 'react';
import axios from 'axios';


function Contact() {
    const data = {name:'' ,mobile:'',email:'',queries:''};

    const [inputData,setContact] = useState(data);

  const handleData =(e)=>{
      setContact({...inputData,[e.target.name]:e.target.value})
  }
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputData.name.length === 0){

         alert("Name has left Blank!");
       }
     
      
       else if(inputData.mobile.length !== 10){
         alert("Please Enter 10 digit Mobile Number!");
       }
       else if(typeof inputData.mobile.length!== "number"  ){
        alert("Please type Mobile Number in Valid Format Ex: 999999999");
      }
       else if(inputData.mobile.length === 0){
        alert("Mobile has left Blank!");
      }
      //  else if(inputData.email.length === 0){
      //    alert("Email has left Blank!")
      //  }
      //  else if (!inputData.email.includes("@") || !inputData.email.includes(".")){
      //   alert("Not A Valid Email ID ")
      //  }
       else{
      
    axios.post('http://localhost:8080/savecontact',inputData)
    .then(response=>  console.log('contact sent'))
    .catch(error=> alert(error));

    alert('Submitted Succesfully')
           
           }
   
  }
  return (
    <>
    <div>
      <section class= "bg-green-200  dark:bg-slate-800" text-black id="contact">
    <div class="mx-auto max-w-7xl  px-4 py-16  sm:px-6 lg:px-8 lg:py-20 ">
        <div class="mb-4">
            <div class="mb-4 max-w-3xl text-center sm:text-center md:mx-auto md:mb-7">
                <p class="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                संपर्क करा
                </p>
                <h2
                    class="font-heading mb-4 font-bold tracking-tight  text-3xl sm:text-5xl">
                    निसर्गाच्या संपर्कात रहा
                </h2>
                <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                   
                </p>
            </div>
        </div>
        <div class="flex items-stretch justify-center ">
            <div class="grid md:grid-cols-2 ">
                <div class="h-auto pr-6">
                    <p class="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400 ">
                    उच्च-गुणवत्तेची वनस्पती आणि अपवादात्मक सेवा प्रदान करण्याची आमची वचनबद्धता आमच्या मूल्यवान ग्राहकांशी मुक्त संवाद वाढवण्याच्या आमच्या समर्पणामुळे जुळते. तुम्ही आमच्याशी कसे कनेक्ट होऊ शकता ते येथे आहे:                    </p>
                    <ul class="mb-6 md:mb-0">
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                               <a href="https://maps.app.goo.gl/BsKA44sKKCS6GrPi8"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-6 w-6">
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                    </path>
                                </svg></a>
                            </div>
                            <div class="ml-4 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">आमचा पत्ता
                                </h3>
                                <p class="text-gray-600 dark:text-slate-400">पोस्ट - सुखेड, लोणंद-खंडाळा रोड, पडळकर वस्ती</p>
                                <p class="text-gray-600 dark:text-slate-400">महाराष्ट्र, भारत</p>
                            </div>
                        </li>
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-6 w-6">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div class="ml-4 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">संपर्क करा
                                </h3>
                                <a href="tel:9096307463">9096307463 </a><br/><br/>
                                <a href="tel:9545034747">9545034747 </a>

                            </div>
                        </li>
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-6 w-6">
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M12 7v5l3 3"></path>
                                </svg>
                            </div>
                            <div class="ml-4 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">कामाचे तास
                                    </h3>
                                <p class="text-gray-600 dark:text-slate-400">सोमवार - शुक्रवार: 08:00 - 17:00</p>
                                <p class="text-gray-600 dark:text-slate-400">शनिवार &amp; रविवार: 08:00 - 12:00</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    <h2 class="mb-4 text-2xl font-bold">खालील फॉर्ममध्ये आपली ऑर्डर द्या</h2>
                    {/* <form id="contactForm">
                        <div class="mb-6">
                            <div class="mx-0 mb-1 sm:mb-4">
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="name" class="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Your name" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                                </div>
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="Your email address" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                                </div>
                            </div>
                            <div class="mx-0 mb-1 sm:mb-4">
                                <label for="textarea" class="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                        </div>
                    </form> */}
  


<section class="bg-gray-900">


      <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 sm:mt-0">
        <form action="#" class="space-y-4">
          <div className='flex '>
            <p class="text-red-600 text-2xl p-3">*</p>
            <label class="sr-only" for="name">name</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="नाव"
              type="text"
              name='name'
              required
              value={inputData.name}
              onChange={handleData}
            />
          </div>

          

          <div class=" grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className='mr-5 flex '>
            <p class="text-red-600 text-2xl p-3">*</p>
              <label class="sr-only" for="email">Delivery-Location</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="डिलिव्हरी लोकेशन"
                type="text"
                name='email'
                required
                value={inputData.email}
                onChange={handleData}
              />
            </div>

            <div className='  flex '>
            <p class="text-red-600 text-2xl p-3">*</p>
              <label class="sr-only" for="mobile">phone</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="फोन नंबर"
                type="tel"
                name='mobile'
                required
                // onKeyUp={numberonly(this)}
                value={inputData.mobile}
                onChange={handleData}
              />
            </div>
          </div>

          <div className=''>
          
            <label class="sr-only" for="queries"></label>

            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder=" रोपांचे नाव व संख्या"
              rows="2"
              name='queries'
              required
              value={inputData.queries}
              onChange={handleData}
            ></textarea>
          </div>

          <div class="mt-4 flex  justify-center items-center ">
            <button
              type="submit" onClick={handleSubmit}
              class="inline-block w-full rounded-lg text-center bg-black px-6 py-3 font-medium text-white hover:bg-white hover:text-gray-900 sm:w-auto"
            >
             ऑर्डर करा
            </button>
            <p className='ml-10 '><span className='text-red-600 text-2xl  ml-4'>*</span> <span className='text-1xl '> फील्ड अनिवार्य आहेत</span></p><span></span>
          </div>
         
        </form>
      </div>
    {/* </div>
  </div> */}
</section>
         

                </div>
            </div>
        </div>
    </div>
{/* <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.778613035887!2d74.09802857398786!3d18.035475082966492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc251f8d4b338c3%3A0xee6e1270ed18dda2!2sShri%20Samarth%20Nursery!5e0!3m2!1sen!2sin!4v1707977490544!5m2!1sen!2sin"
 width="600" height="450" allowfullscreen="" loading="lazy" 
 referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    </div> */}
</section>
    </div>
    </>
  )
}

export default Contact
