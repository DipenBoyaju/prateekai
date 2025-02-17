import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log("data", data)
    toast.success('message sent')
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="shadow-2xl p-8 space-y-4 bg-white rounded-3xl w-full">
      <div className="">
        <h3 className='text-3xl text-zinc-900 font-semibold'>Get in Touch</h3>
        <p className='text-sm text-zinc-600'>You can reach us anytime</p>
      </div>

      <div className="flex flex-row justify-between gap-3 w-full">
        <div className="">
          <input
            type="text"
            {...register("firstname", { required: "Firstname is required" })}
            className="border p-2 pl-4 border-zinc-300 rounded-xl focus:border-zinc-400 focus:outline-none mt-1 w-full"
            placeholder="Firstname"
          />
          {errors.firstname && <p className='text-red-500 text-xs '>{errors.firstname.message}</p>}
        </div>
        <div className="">
          <input
            type="text"
            {...register("lastname", { required: "Lastname is required" })}
            className="border p-2 pl-4 border-zinc-300 rounded-xl focus:border-zinc-400 focus:outline-none mt-1 w-full"
            placeholder="Lastname"
          />
          {errors.lastname && <p className='text-red-500 text-xs '>{errors.lastname.message}</p>}
        </div>
      </div>
      <div className="w-full">
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
          })}
          className="border border-zinc-300 p-2 pl-4 rounded-xl mt-1 w-full focus:border-zinc-400 focus:outline-none"
          placeholder="Enter your email"
        />
        {errors.email && <p className='text-red-500 text-xs '>{errors.email.message}</p>}
      </div>
      <div className="">
        <input
          type="tel"
          {...register("phone", {
            required: "Phone Number is required",
            pattern: { value: /^[0-9]+$/ },
            minLength: { value: 10, message: "Phone number must be at least 10 digits" },
            maxLength: { value: 10, message: "Phone number can't exceed 10 digits" }
          })} name='phone'
          className="border border-zinc-300 p-2 pl-4 rounded-xl mt-1 w-full focus:border-zinc-400 focus:outline-none"
          placeholder="Phone Number"
        />
        {errors.phone && <p className='text-red-500 text-xs '>{errors.phone.message}</p>}
      </div>

      <div className="">
        <textarea
          {...register('query', { required: "Query is required" })}
          className="border border-zinc-300 p-2 pl-4 rounded-xl w-full mt-1 resize-none focus:border-zinc-400 focus:outline-none" name='query'
          placeholder="Type your query here" rows={5}
        ></textarea>
        {errors.query && <p className='text-xs text-red-500'>{errors.query.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 w-full rounded-full text-lg text-white cursor-pointer py-3 focus:outline-none px-4  hover:bg-blue-700">
        Submit
      </button>
    </form>
  )
}
export default ContactForm