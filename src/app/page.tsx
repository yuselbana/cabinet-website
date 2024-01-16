import Image from 'next/image'
import Hero from '@/Components/Hero'
import NavBar from '@/Components/NavBar'

import Contact from '@/Components/Form'
import Portfolio from '@/Components/Portfolio'
import Book from '@/Components/Book'
import Values from '@/Components/Values'

import RowComponent from '@/Components/RowComponent'
import Link from 'next/link'

export default function Home() {
  return (
    <main >




       
        <Hero/>

        <div className='p-10 lg:p-40'>
        <section className='flex flex-col items-left justify-center lg:text-left gap-4 text-center'>
          <span className='font-semibold lg:font-medium'>A Cabinet Store and Design Studio in Neptune NJ</span>
          <h1 className='text-2xl lg:text-4xl font-light'>As dedicated creators of affordable kitchen solutions located in the heart of New Jersey, our expertise goes beyond just design.
           We carefully craft budget-friendly yet high-quality kitchen concepts, striving to provide outstanding customer service customized to meet your needs.</h1>
           <Link href={'/portfolio'}> <button className='rounded-xl bg-mainblue text-white p-4 w-fit'>Portfolio</button></Link>
        </section>
        </div>
        <Values/>

        <div className='p-10 lg:p-40'>
        <section className='flex flex-col items-center justify-center text-center gap-4'>
          <span className='font-semibold lg:font-medium'>Discover Our Craft...</span>
          <h1 className=' text-2xl lg:text-4xl font-light'>Uncover the artistry behind our kitchen transformations in the About section <br/> where the journey from concept to creation comes to life</h1>
          <p className='text-base lg:text-lg lg:w-1/2'>For personalized consultations or to connect with our design experts, step into the Contact section –
           your portal to realizing the kitchen of your dreams with our exquisite countertops and cabinets. </p>
            <div className='flex items-center  justify-center gap-4'>
            <Link href={'/about'}><button className='rounded-xl bg-mainblue text-white p-4'>About Us</button></Link>
            <Link href={'/contact'}><button className='rounded-xl bg-mainblue text-white p-4'>Contact</button></Link>
            </div>
        </section>
        </div>
     


       
     
    
    






    </main>
  )
}
