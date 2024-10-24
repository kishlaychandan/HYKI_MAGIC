import React from 'react';

const testimonialsData = [
  {
    id: 1,
    videoUrl: 'https://www.youtube.com/embed/4WPuWlEXI6s',
    review: "Very good and effective product",
    userName: "Ravi Kumar",
  },
  {
    id: 2,
    videoUrl: 'https://www.youtube.com/embed/ck2iQDGlWMk',
    review: "Amazing experience! The product is awesome.",
    userName: "Amrita Kumari",
  },
  {
    id: 3,
    videoUrl: 'https://www.youtube.com/embed/Qh8oeWdZKZk',
    review: "I loved the product! It's really effective and easy to use.",
    userName: "Prakash Kumar",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-10 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        What Our Customers Say
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden w-80 transition-colors duration-300"
          >
            <iframe
              width="100%"
              height="200"
              src={testimonial.videoUrl}
              title="User testimonial video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {testimonial.review}
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {testimonial.userName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
