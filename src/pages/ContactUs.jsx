import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import { Link } from 'react-router-dom'
import { FaXTwitter } from "react-icons/fa6";
import Title from '../components/Title';

const ContactUs = () => {

  return (
    <div className="">
      <Title title="Contact Us" />
      <div className="" >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 py-20 container px-4 md:px-10 mx-auto">
          {/* Left section */}
          <div className="col-span-1 md:col-span-7 lg:mt-20">
            <h1 className='text-3xl lg:text-5xl font-semibold text-zinc-900'>Contact Us</h1>
            <p className='text-zinc-500 mt-4 text-sm md:text-base'>Email, call or complete the form to contact us.</p>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row mt-8 gap-5">
              <div className="flex justify-center flex-col gap-2 shadow-lg py-8 text-center items-center border border-blue/15 rounded-lg w-full sm:w-62">
                <Mail className='text-xl md:text-2xl text-zinc-600' />
                <p className='text-zinc-600'>prateekai@gmail.com</p>
              </div>
              <div className="flex justify-center flex-col gap-2 shadow-lg py-8 text-center items-center border  w-full border-blue/15 sm:w-62 rounded-lg">
                <Phone className='text-xl md:text-2xl text-zinc-600' />
                <p className='text-zinc-600'>+977-9786548975</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-14">
              <h3 className='font-semibold text-2xl md:text-3xl text-zinc-900'>Our Social Media</h3>
              <div className="flex flex-wrap mt-5 gap-3 items-center">
                <Link to={'https://www.facebook.com/profile.php?id=100091857246327'} target='_blank'>
                  <div className="bg-zinc-200 text-zinc-700 hover:bg-[#1877F2] p-3 rounded-full hover:text-white transition-all duration-500 shadow-sm text-xl md:text-2xl">
                    <Facebook />
                  </div>
                </Link>

                <Link to={''} target='_blank'>
                  <div className="bg-zinc-200 text-zinc-700 hover:bg-[#d62976] p-3 rounded-full hover:text-white transition-all duration-500 shadow-sm text-xl md:text-2xl">
                    <Instagram />
                  </div>
                </Link>

                <Link to={''} target='_blank'>
                  <div className="bg-zinc-200 text-zinc-700 hover:bg-zinc-900 p-3 rounded-full hover:text-white transition-all duration-500 shadow-sm text-xl md:text-2xl">
                    <FaXTwitter />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right section (Contact Form) */}
          <div className="col-span-1 md:col-span-5 mt-8 md:mt-10 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
