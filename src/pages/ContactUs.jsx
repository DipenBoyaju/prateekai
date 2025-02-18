import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import bg from '../assets/images/banner-bg-img.png'
import ContactForm from '../components/ContactForm'
import { Link } from 'react-router-dom'
import { FaXTwitter } from "react-icons/fa6";
import Title from '../components/Title';

const ContactUs = () => {

  return (
    <div className="" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container px-10 mx-auto">
        <Title title="Contact Us" />
        <div className="grid grid-cols-12 py-20">
          <div className="col-span-7 mt-20">
            <h1 className='text-5xl font-semibold text-zinc-900'>Contact Us</h1>
            <p className='text-zinc-500 mt-4'>Email, call orcomplete the form to contact us.</p>
            <div className="flex flex-row mt-8 gap-5">
              <div className="flex justify-center flex-col gap-2 shadow-lg py-8 text-center items-center border border-zinc-100 rounded-lg w-62">
                <Mail className='size-14 text-zinc-600' />
                <p className='text-zinc-600'>prateekai@gmail.com</p>
              </div>
              <div className="flex justify-center flex-col gap-2 shadow-lg py-8 text-center items-center border border-zinc-100 w-62 rounded-lg">
                <Phone className='size-14 text-zinc-600' />
                <p className='text-zinc-600'>+977-9786548975</p>
              </div>
            </div>
            <div className="mt-14">
              <h3 className='font-semibold text-3xl text-zinc-900'>Our Social Media</h3>
              <div className="flex mt-5 gap-3 items-center">
                <Link to={'https://www.facebook.com/profile.php?id=100091857246327'} target='_blank'>
                  <div className="bg-zinc-200 text-zinc-700 hover:bg-[#1877F2] p-3 rounded-full hover:text-white transition-all duration-500 shadow-sm text-2xl">
                    <Facebook />
                  </div>
                </Link>

                <Link to={''} target='_blank'>
                  <div className="bg-zinc-200 text-zinc-700 hover:bg-[#d62976] p-3 rounded-full hover:text-white transition-all duration-500 shadow-sm text-2xl">
                    <Instagram />
                  </div>
                </Link>
                <Link to={''} target='_blank'>
                  <div className="bg-zinc-200 text-zinc-700 hover:bg-zinc-900 p-3 rounded-full hover:text-white transition-all duration-500 shadow-sm text-2xl">
                    <FaXTwitter />
                  </div>
                </Link>

              </div>
            </div>
          </div>
          <div className="col-span-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </div >
  )
}
export default ContactUs