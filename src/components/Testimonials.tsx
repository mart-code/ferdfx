import { motion } from "framer-motion";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "This platform changed my financial life. Highly recommended!",
      image: "/assets/user1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Best decision I ever made! The support is amazing.",
      image: "/assets/user2.jpg",
    },
    {
      id: 3,
      name: "David Wilson",
      text: "I finally have control over my investments. Thank you!",
      image: "/assets/user3.jpg",
    },
    {
      id: 4,
      name: "Jane Smith",
      text: "Best decision I ever made! The support is amazing.",
      image: "/assets/user2.jpg",
    },
    {
      id: 5,
      name: "David Wilson",
      text: "I finally have control over my investments. Thank you!",
      image: "/assets/user3.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-start sm:items-center justify-center w-full min-h-1/2 gap-8 mb-35 px-10">
      <p className="uppercase  text-[12px] tracking-widest xl:tracking-[10px] p-2 bg-[#04cc04] text-white ">
        Our Results
      </p>
      <h2 className="text-5xl font-semibold sm:text-center text-left overflow-hidden">
        We are Trusted by Professionals
      </h2>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-green-500"
                />
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
