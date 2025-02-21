import Title from "../components/Title"

const contributors = [
  {
    name: "John Doe",
    role: "AI Researcher",
    image: "/images/john.jpg",
  },
  {
    name: "Jane Smith",
    role: "Sign Language Expert",
    image: "/images/jane.jpg",
  },
  {
    name: "Nepal Deaf Society",
    role: "Community Partner",
    image: "/images/nds.png",
  },
  {
    name: "Nepal Deaf Society",
    role: "Community Partner",
    image: "/images/nds.png",
  },
]

const Contributors = () => {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-10">
        <Title title="Our Amazing Contributors" />
        <div className="py-20">
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mt-4">
            We extend our heartfelt gratitude to all the incredible contributors who have supported our mission to revolutionize Nepali Sign Language detection. Your dedication and expertise help us build a more inclusive world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {contributors.map((contributor, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-5 text-center">
                <img
                  src={contributor.image}
                  alt={contributor.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold mt-4">{contributor.name}</h3>
                {/* <p className="text-gray-600">{contributor.role}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contributors
