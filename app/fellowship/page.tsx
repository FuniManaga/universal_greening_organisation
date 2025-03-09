"use client"
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export default function FellowshipPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const facilitators = [
    {
      name: "Vhutali Nelwamondo",
      role: "Personal Development and Ethical Leadership",
      org: "AIME",
      description: "Leading the first module focused on personal healing and potential discovery. Fellows described these sessions as therapeutic, helping them discover their true potential.",
      image: "/fellow/nelwamondo.jpeg"
    },
    {
      name: "Nokumuka Libisi",
      role: "Social Entrepreneurship",
      org: "Onalome Changemakers",
      description: "Guiding fellows in identifying and building business opportunities within their communities, with a focus on creating practical solutions for local challenges.",
      image: "/fellow/nokumuka.jpeg"
    },
    {
      name: "Dr. Rendani Mamphiswana",
      role: "Technology and Innovation",
      org: "NAFASI Water, 4IR Commissioner",
      description: "As a 4IR Commissioner in South Africa, Dr. Mamphiswana leads sessions on emerging technologies, helping fellows understand both opportunities and risks in the tech landscape.",
      image: "/fellow/rendani.jpeg"
    },
    {
      name: "Portia Bangerezako",
      role: "Sustainability",
      org: "Corporate Sustainability Expert",
      description: "Emphasizes practical strategies for integrating sustainability into daily life and community development, inspiring fellows to lead by example.",
      image: "/fellow/portia.jpeg"
    },
    {
      name: "Ndivhuwo Khantshi",
      role: "Community Development",
      org: "Grassroots Transformation Expert",
      description: "Leading the final module in Botswana, focusing on building resilient communities through participatory development and sustainable empowerment strategies.",
      image: "/fellow/khantshi.jpeg"
    }
  ]

  const BotswanaExperience = () => (
    <div className="bg-emerald-50 p-6 rounded-lg my-8">
      <h3 className="text-xl font-semibold text-emerald-800 mb-4">The Botswana Experience</h3>
      <ul className="list-disc pl-6 space-y-3 text-gray-700">
        <li>Visits to Botswana University</li>
        <li>Exchange at Botswana University of Agriculture and Natural Resources</li>
        <li>Meetings at SADC Secretariat</li>
        <li>Visits to youth-owned businesses</li>
        <li>Engagement with government, private, and civil society sectors</li>
      </ul>
    </div>
  )

  const Vision2025 = () => (
    <div className="bg-white shadow-sm rounded-lg p-6 space-y-4 mb-12">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Vision for 2025</h3>
      <p className="text-gray-700 leading-relaxed">
        Our vision for 2025 includes:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700">
        <li>Expanded program with 20 fellows per group</li>
        <li>10 fellows from South Africa and 10 from partner country</li>
        <li>Enhanced online modules</li>
        <li>Cross-border exchange programs</li>
        <li>Focus on social cohesion and global citizenship</li>
      </ul>
    </div>
  )

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section - More Responsive */}
      <section className="relative bg-emerald-900 text-white py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 max-w-3xl mx-auto text-center">
            UGO Fellowship 2024 Cohort:
            <span className="block mt-2 text-emerald-300">
              A Story of Hope, Transformation, and Dreams Taking Flight
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 max-w-3xl mx-auto">
            <Image
              src="/chairman.JPG"
              alt="Talifhani Tshitwamulomoni"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="text-center sm:text-left">
              <h2 className="font-semibold">Talifhani Tshitwamulomoni</h2>
              <p className="text-xs sm:text-sm text-emerald-200 max-w-2xl">
                UGO Executive Chairman | Forbes 30 under 30, class of 2023 | UN ECOSOC Youth Forum Delegate 2024 | 
                Catalyst 2030 | Summit of the Future Delegate 2024
              </p>
              <p className="text-xs sm:text-sm text-emerald-200">Published Nov 19, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content - More Responsive */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="prose prose-sm sm:prose lg:prose-lg prose-emerald mx-auto">
          {/* Opening Quote */}
          <blockquote className="not-italic text-lg sm:text-xl font-medium text-emerald-800 border-l-4 border-emerald-500 pl-4 sm:pl-6 py-2 my-6 sm:my-8 bg-emerald-50/50">
            "Let me start by saying this: your dreams are valid. Whatever challenges life throws your way, 
            remember this: if your mind can conceive it, you can achieve it."
          </blockquote>

          <p className="text-gray-700 leading-relaxed">
            I won't start from the very beginning; I'll save that long history for another day. 
            Instead, I'll take you straight to 1st September 2024, the day the UGO Fellowship 
            2024 cohort officially launched.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
            A Virtual Launch of Dreams
          </h2>

          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              The journey began with a virtual opening ceremony. We officially met the 12 exceptional 
              fellows, carefully selected from a pool of talented students. These young leaders come 
              from previously disadvantaged backgrounds and have never flown or left their country 
              before, a vital requirement of this transformative fellowship.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Through a competitive process, UGO, in partnership with the University of Venda, 
              sought top-performing students pursuing studies in sustainability and green 
              economy-related courses. Our vision was clear: to select individuals who dared to 
              dream beyond their circumstances and provide them with a life-changing 90-day 
              experience that would empower them as future leaders.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
            Program Structure and Impact
          </h2>

          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              The UGO Fellowship is structured as an intensive 90-day program that combines theoretical 
              learning with practical experience. Our fellows engage in five core modules, each designed 
              to build essential skills and knowledge for future leaders in sustainability and community 
              development.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4">Key Program Components:</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Personal Development and Ethical Leadership Training</li>
                <li>Social Entrepreneurship and Business Development</li>
                <li>Technology and Innovation in Sustainability</li>
                <li>Corporate Sustainability Strategies</li>
                <li>Community Development and Grassroots Transformation</li>
              </ul>
            </div>
          </div>

          {/* Main Image - Full Width, Reduced Height */}
          <div className="my-8 sm:my-12 w-full overflow-hidden shadow-lg">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src="/fellowship.jpeg"
                alt="UGO Fellowship Program Overview"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="100vw"
                priority
                onClick={() => setSelectedImage("/fellowship.jpeg")}
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-3 text-center italic">
              UGO Fellowship Program Overview - 2024 Cohort
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-8">
            International Exposure.
          </h2>

          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              A unique aspect of our fellowship is the international exposure component. Fellows will 
              travel to Botswana for hands-on experience in sustainable development projects. This 
              marks their first international journey, opening new horizons and perspectives.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Before departure, fellows undergo comprehensive protocol and etiquette training with 
              DIRCO (Department of International Relations and Cooperation), preparing them for 
              international engagement and cultural exchange.
            </p>
          </div>

          {/* Facilitators Section */}
          <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-8">
            Meet Our Expert Facilitators
          </h2>
          
          {/* Facilitators Grid - Full Width Cards, Reduced Height */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 my-8 sm:my-12 w-full">
            {facilitators.map((facilitator) => (
              <div key={facilitator.name} 
                className="flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full"
              >
                <div 
                  className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px] cursor-pointer overflow-hidden"
                  onClick={() => setSelectedImage(facilitator.image)}
                >
                  <Image
                    src={facilitator.image}
                    alt={facilitator.name}
                    fill
                    className="object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-2">
                    {facilitator.name}
                  </h3>
                  <p className="text-emerald-600 font-medium text-sm mb-1">
                    {facilitator.role}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm mb-3">
                    {facilitator.org}
                  </p>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    {facilitator.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-8">
            Expected Outcomes
          </h2>

          <div className="bg-white shadow-sm rounded-lg p-6 space-y-4 mb-12">
            <p className="text-gray-700 leading-relaxed">
              By the end of the fellowship, our participants will have:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Developed strong leadership and ethical decision-making skills</li>
              <li>Created viable social enterprise business plans</li>
              <li>Gained international exposure and cross-cultural competence</li>
              <li>Built a strong network of mentors and peers</li>
              <li>Acquired practical skills in sustainability and community development</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-xl my-16 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Us in Making a Difference
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We call on partners, organizations, and changemakers to join us in making the 
              2025 Cohort a reality. Let's work together to break barriers, transform lives, 
              and build a brighter future.
            </p>
            <div className="space-y-4">
              <p className="text-gray-700">You can support our mission by:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Becoming a corporate partner</li>
                <li>Offering mentorship opportunities</li>
                <li>Providing internship placements</li>
                <li>Contributing to our fellowship fund</li>
              </ul>
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium 
                hover:bg-emerald-700 transition-colors duration-300 shadow-sm hover:shadow-md">
                <a href="https://www.payfast.co.za/donate/go/universalgreeningorganization">Partner With Us</a>
              </button>
            </div>
          </div>

          <footer className="text-sm text-gray-600 italic border-t border-gray-200 pt-8 mt-12">
            <p className="mb-4">
              I'll keep you posted as the fellows embark on their journey to Botswana from tomorrow 
              when they start with their protocol and etiquette training with DIRCO. Stay tuned for 
              the stories, the smiles, and the magic of dreams taking flight!
            </p>
            <p>
              Follow our journey on social media: #UGOFellowship2024 #DreamsInFlight #SustainableLeadership
            </p>
          </footer>
        </div>
      </article>

      {/* Enhanced Image Modal (remains the same but ensure it's present) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl h-[85vh]">
            <Image
              src={selectedImage}
              alt="Facilitator"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

