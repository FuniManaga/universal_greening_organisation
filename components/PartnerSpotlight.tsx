import React from 'react'
import Image from 'next/image'

const partners = [
  { name: 'Local NGO 1', logo: '/logos/ngo1.png', description: 'Working together to improve education in rural areas.' },
  { name: 'Community Org 2', logo: '/logos/org2.png', description: 'Partnering to provide clean water solutions.' },
  { name: 'Foundation 3', logo: '/logos/foundation3.png', description: 'Collaborating on sustainable agriculture initiatives.' },
]

const PartnerSpotlight: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {partners.map((partner) => (
        <div key={partner.name} className="bg-white shadow-md rounded-lg p-6 text-center">
          <Image src={partner.logo} alt={partner.name} width={100} height={100} className="mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">{partner.name}</h4>
          <p>{partner.description}</p>
        </div>
      ))}
    </div>
  )
}

export default PartnerSpotlight

