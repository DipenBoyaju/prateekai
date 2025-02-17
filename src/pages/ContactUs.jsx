import bg from '../assets/images/banner-bg-img.png'
import ContactForm from '../components/ContactForm'

const ContactUs = () => {

  return (
    <div className="" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container px-10 mx-auto py-20">
        <div className="grid grid-cols-12">
          <div className="col-span-7 mt-20">
            <h1 className='text-5xl font-semibold text-zinc-900'>Contact Us</h1>
            <p className='text-zinc-500 mt-4'>Email, call orcomplete the form to contact us.</p>
          </div>
          <div className="col-span-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactUs