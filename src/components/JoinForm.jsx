import { useForm } from "react-hook-form"

const JoinForm = () => {
  const { register, formState: { errors } } = useForm()
  return (
    <form className="shadow-2xl p-8 space-y-4 bg-white rounded-3xl w-full border border-zinc-300">
      <div className="flex flex-row justify-between gap-3 w-full">
        <div className="">
          <input
            type="text"
            {...register("firstname", { required: "Firstname is required" })}
            className="border p-3 pl-4 border-zinc-300 rounded-lg focus:border-zinc-400 focus:outline-none mt-1 w-full"
            placeholder="Firstname"
          />
          {errors.firstname && <p className='text-red-500 text-xs '>{errors.firstname.message}</p>}
        </div>
        <div className="">
          <input
            type="text"
            {...register("lastname", { required: "Lastname is required" })}
            className="border p-3 pl-4 border-zinc-300 rounded-lg focus:border-zinc-400 focus:outline-none mt-1 w-full"
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
          className="border border-zinc-300 p-3 pl-4 rounded-lg mt-1 w-full focus:border-zinc-400 focus:outline-none"
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
          className="border border-zinc-300 p-3 pl-4 rounded-lg mt-1 w-full focus:border-zinc-400 focus:outline-none"
          placeholder="Phone Number"
        />
        {errors.phone && <p className='text-red-500 text-xs '>{errors.phone.message}</p>}
      </div>
      <button type="submit" className="bg-blue w-full rounded-xl text-lg text-white cursor-pointer py-3 focus:outline-none px-4">
        Join
      </button>
    </form>
  )
}
export default JoinForm