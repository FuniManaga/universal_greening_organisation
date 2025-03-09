import React from 'react'
import Image from 'next/image'

const testimonials = [
  { name: 'Jane Doe', role: 'Environmental Activist', quote: 'UGO\'s work is transforming communities across Africa.', image: '/images/jane-doe.jpg' },
  { name: 'John Smith', role: 'Tech Entrepreneur', quote: 'I\'m impressed by UGO\'s data-driven approach to social change.', image: '/images/john-smith.jpg' },
  { name: 'Alice Johnson', role: 'Education Advocate', quote: 'UGO\'s education initiatives are creating real opportunities for youth.', image: '/images/alice-johnson.jpg' },
]

const InfluencerTestimonials: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => (
        <div key={testimonial.name} className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Image src={testimonial.image} alt={testimonial.name} width={60} height={60} className="rounded-full mr-4" />
            <div>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>
          <p className="italic">"{testimonial.quote}"</p>
        </div>
      ))}
    </div>
  )
}

export default InfluencerTestimonials

