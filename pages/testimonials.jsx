import React from 'react';

const testimonialsData = [
  {
    id: 1,
    videoUrl: 'https://www.youtube.com/embed/4WPuWlEXI6s', // Corrected video URL
    review: "Very good and effective product",
    userName: "Ravi Kumar",
  },
  {
    id: 2,
    // videoUrl: 'https://drive.google.com/file/d/1sP7ZaChdPpvUXcQ-yXkYQcPlphLN6AM_/preview',
    videoUrl: 'https://www.youtube.com/embed/ck2iQDGlWMk', // Replace with actual video URLs
    review: "Amazing experience! The product is awesome.",
    userName: "Amrita kumari",
  },
  {
    id: 3,
    videoUrl: 'https://www.youtube.com/embed/Qh8oeWdZKZk', // Replace with actual video URLs
    review: "I loved the product! It's really effective and easy to use.",
    userName: "Prakash kumar",
  },
  
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
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
              <p className="text-gray-700 mb-2">{testimonial.review}</p>
              <p className="font-semibold text-gray-900">{testimonial.userName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
