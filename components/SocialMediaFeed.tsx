import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

const socialPosts = [
  { platform: 'Twitter', content: 'Excited to announce our new partnership with @LocalNGO1! Together, we\'ll be working on...', date: '2 hours ago' },
  { platform: 'Facebook', content: 'Check out our latest impact report! We\'ve made significant progress towards SDG 4: Quality Education...', date: '1 day ago' },
  { platform: 'Instagram', content: 'Our team in the field: Working with community leaders to implement sustainable water solutions. #CleanWaterForAll', date: '3 days ago' },
]

const SocialMediaFeed: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {socialPosts.map((post, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center mb-4">
            {post.platform === 'Twitter' && <FaTwitter className="text-blue-400 text-2xl mr-2" />}
            {post.platform === 'Facebook' && <FaFacebook className="text-blue-600 text-2xl mr-2" />}
            {post.platform === 'Instagram' && <FaInstagram className="text-pink-600 text-2xl mr-2" />}
            <span className="font-semibold">{post.platform}</span>
          </div>
          <p className="mb-2">{post.content}</p>
          <p className="text-sm text-gray-600">{post.date}</p>
        </div>
      ))}
    </div>
  )
}

export default SocialMediaFeed

