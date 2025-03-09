"use client";
import React, { Suspense, useState  } from 'react'
import { cn } from '@/lib/utils';
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';
import { FaLeaf, FaSolarPanel, FaGraduationCap, FaGlobeAfrica, FaHandsHelping, FaTree, FaWater, FaShieldAlt, FaCloudSunRain, FaSeedling, FaRecycle, FaChartLine, FaUsers, FaGlobeAmericas } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { BentoGridUGO} from '@/components/BentoGridUGO';
import Image from 'next/image';
import Link from 'next/link';


type TabContent = {
  [key: string]: {
    title: string;
    content: string;
    icon: JSX.Element;
  };
};

const Separator = () => (
  <div className="flex items-center justify-center my-8">
    <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-1/4"></div>
 
    <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-1/4"></div>
  </div>
);

const WhatWeOfferCard = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-8 max-w-full w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
  >
    <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 text-center">What We Offer</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <OfferSection
        title="Biodiversity Management"
        items={[
          { icon: <FaWater />, text: "Strategic Water Source Areas" },
          { icon: <FaTree />, text: "Land use planning and Management" },
          { icon: <FaShieldAlt />, text: "Protected Areas" },
        ]}
      />
      <OfferSection
        title="Climate Change"
        items={[
          { icon: <FaCloudSunRain />, text: "Adaptation Interventions" },
          { icon: <FaSeedling />, text: "Mitigation Interventions" },
        ]}
      />
      <OfferSection
        title="Sustainable Agriculture"
        items={[
          { icon: <FaLeaf />, text: "Regenerative Agriculture" },
          { icon: <FaRecycle />, text: "Circular Economy in Agriculture" },
        ]}
      />
      <OfferSection
        title="Environmental Economics"
        items={[
          { icon: <FaChartLine />, text: "Natural Capital Accounting" },
          { icon: <FaUsers />, text: "Socio-economic Impact Assessments" },
        ]}
      />
      <OfferSection
        title="Community Development"
        items={[
          { icon: <FaHandsHelping />, text: "Capacity Building" },
          { icon: <FaGlobeAmericas />, text: "Sustainable Livelihoods" },
        ]}
      />
    </div>
  </motion.div>
);

const OfferSection = ({ title, items }: { title: string, items: { icon: JSX.Element, text: string }[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <motion.li 
          key={index} 
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <span className="text-orange-500 dark:text-orange-400 text-lg">{item.icon}</span>
          <span className="text-gray-700 dark:text-gray-300 text-base">{item.text}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const LeadershipSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 max-w-full w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
    >
      <h2 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200 text-center">Our Leadership</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leadershipTeam.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <Link href={`/leadership/${index}`}>
              <div className="p-6 flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6 group">
                  <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-all duration-300 group-hover:bg-orange-500">
                    <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full p-1">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="rounded-full w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">{member.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 text-center">{member.position}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-4 text-center">{member.bio}</p>
                <span 
                  className="px-8 py-2 bg-orange-500 text-white text-sm rounded-md hover:bg-orange-600 transition-colors duration-300"
                >
                  Read More
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const leadershipTeam = [
  {
    name: "Mr. Talifhani Tshitwamulomoni",
    position: "Founder & Chairman",
    image: "/chairman.JPG",
    bio: "Mr. Tshitwamulomoni is a visionary leader with over 20 years of experience in environmental conservation and sustainable development. He founded Universal Greening Organisation with the mission to create a global impact on environmental sustainability.",
    achievements: [
      "Led the development of South Africa's National Biodiversity Economy Strategy",
      "Recipient of the National Environmental Leadership Award 2019",
      "Published author of 'Green Futures: Sustainable Development in Africa'"
    ],
    expertise: [
      "Environmental Policy Development",
      "Sustainable Resource Management",
      "Biodiversity Conservation",
      "Climate Change Mitigation Strategies"
    ],
    quote: "Our actions today shape the world our children will inherit tomorrow. Let's make it a green, sustainable one.",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/talifhani-tshitwamulomoni/",
      twitter: "https://twitter.com/TalifhaniT"
    }
  },
  {
    name: "Mr. Lindelani Maraganedzha",
    position: "Chief Executive Officer & Executive Director",
    image: "/Pceo.jpg",
    bio: "Mr. Maraganedzha brings a unique blend of business acumen and environmental passion to his role as CEO. With an MBA and a background in Environmental Science, he drives UGO's strategic initiatives and ensures operational excellence.",
    achievements: [
      "Successfully implemented carbon reduction projects across 5 African countries",
      "Keynote speaker at the UN Climate Action Summit 2022",
      "Pioneered UGO's innovative 'Green Schools' program"
    ],
    expertise: [
      "Sustainable Business Strategies",
      "Environmental Project Management",
      "Green Technology Integration",
      "Corporate Sustainability"
    ],
    quote: "Sustainability is not just about preserving our planet; it's about creating a thriving future for all.",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/lindelani-maraganedzha/"
    }
  },
  {
    name: "Mr. Zwivhuya Mulaudzi",
    position: "Chief Operating Officer & Executive Director",
    image: "/ugo.png",
    bio: "Mr. Mulaudzi oversees UGO's operational efficiency and project implementation, ensuring that our initiatives create lasting positive impact.",
    achievements: [
      "Led the development of UGO's strategic plan",
      "Successfully implemented UGO's operational strategy",
      "Ensured UGO's financial stability"
    ],
    expertise: [
      "Strategic Planning",
      "Operational Efficiency",
      "Project Management",
      "Financial Management"
    ],
    quote: "Our actions today shape the world our children will inherit tomorrow. Let's make it a green, sustainable one.",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/zwivhuya-mulaudzi/"
    }
  },
  {
    name: "Ms. Vuledzani Pearly Madilonga",
    position: "Non-Executive Member",
    image: "/ugo.png",
    bio: "Ms. Madilonga contributes valuable insights on community engagement and sustainable development practices to UGO's board.",
    achievements: [
      "Led the development of UGO's community engagement strategy",
      "Successfully implemented UGO's community programs",
      "Ensured UGO's community impact"
    ],
    expertise: [
      "Community Engagement",
      "Sustainable Development",
      "Community Programs",
      "Community Impact"
    ],
    quote: "Our actions today shape the world our children will inherit tomorrow. Let's make it a green, sustainable one.",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/vuledzani-pearly-madilonga/"
    }
  },
  {
    name: "Ms. Tshianeo",
    position: "Non-Executive Member",
    image: "/ugo.png",
    bio: "Ms. Tshianeo brings a wealth of knowledge in environmental conservation and sustainable development to UGO's board.",
    achievements: [
      "Led the development of UGO's environmental policy",
      "Successfully implemented UGO's environmental initiatives",
      "Ensured UGO's environmental impact"
    ],
    expertise: [
      "Environmental Policy Development",
      "Environmental Initiatives",
      "Environmental Impact",
      "Environmental Sustainability"
    ],
    quote: "Our actions today shape the world our children will inherit tomorrow. Let's make it a green, sustainable one.",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/tshianeo/"
    }
  },
  {
    name: "Ms. Ndivhuwo Ndadza",
    position: "Non-Executive Member",
    image: "/ugo.png",
    bio: "Ms. Ndadza brings a strong background in community development and sustainable development to UGO's board.",
    achievements: [
      "Led the development of UGO's community engagement strategy",
      "Successfully implemented UGO's community programs",
      "Ensured UGO's community impact"
    ],
    expertise: [
      "Community Engagement",
      "Sustainable Development",
      "Community Programs",
      "Community Impact"
    ],
    quote: "Our actions today shape the world our children will inherit tomorrow. Let's make it a green, sustainable one.",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/ndivhuwo-ndadza/"
    }
  },
  {
    name: "Mr. Rodney Raselabi",
    position: "Non-Executive Member",
    image: "/ugo.png",
    bio: "Mr. Raselabi brings a wealth of experience in environmental conservation and sustainable development to UGO's board.",
    achievements: [
      "Led the development of UGO's environmental policy",
      "Successfully implemented UGO's environmental initiatives",
      "Ensured UGO's environmental impact"
    ],
    expertise: [
      "Environmental Policy Development",
      "Environmental Initiatives",
      "Environmental Impact",
      "Environmental Sustainability"
    ],
    quote: "Our actions today shape the world our children will inherit tomorrow. Let's make it a green, sustainable one.",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/rodney-raselabi/"
    }
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'mission' | 'impact' | 'getInvolved'>('mission');

  const placeholders = [
    "What projects does Universal Greening work on?",
    "How can I volunteer with Universal Greening?",
    "Tell me about Universal Greening's impact",
    "What are Universal Greening's main goals?",
    "How does Universal Greening tackle climate change?",
  ];
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  const tabContent: TabContent = {
    mission: {
      title: "Our Mission",
      content: "Universal Greening Organisation is committed to creating a sustainable future through innovative environmental projects and community engagement.",
      icon: <FaLeaf className="text-4xl mb-4 text-orange-500" />,
    },
    impact: {
      title: "Our Impact",
      content: "We've planted over 1 million trees, reduced carbon emissions by 50,000 tons, and educated 100,000 people on sustainable practices.",
      icon: <FaGlobeAfrica className="text-4xl mb-4 text-orange-500" />,
    },
    getInvolved: {
      title: "Get Involved",
      content: "Join our mission by volunteering, donating, or participating in our local community programs. Every action counts!",
      icon: <FaHandsHelping className="text-4xl mb-4 text-orange-500" />,
    },
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem]">
      <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/60"></div>
      <div className="relative z-10 min-h-screen flex flex-col justify-start items-center px- py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-2xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 text-center"
        >
          Universal Greening Organisation
        </motion.h1>
        
        <div className="mb-8 flex space-x-4">
          {Object.keys(tabContent).map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab as 'mission' | 'impact' | 'getInvolved')}
              className={`px-6 py-3 rounded-full transition-colors duration-200 shadow-md text-base ${
                activeTab === tab
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-orange-200 dark:hover:bg-orange-700 hover:text-orange-800 dark:hover:text-orange-200'
              }`}
            >
              {tabContent[tab].title}
            </motion.button>
          ))}
        </div>

        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-12 max-w-full w-full text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
        >
          {tabContent[activeTab].icon}
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
            {tabContent[activeTab].title}
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300">
            {tabContent[activeTab].content}
          </p>
        </motion.div>

        <h2 className="mb-4 text-lg text-center sm:text-2xl text-gray-800 dark:text-gray-200">
          Ask Us <span className="text-orange-500">Anything</span>
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        
        <Separator />
        
        <WhatWeOfferCard />

        <Separator />
  
        <LeadershipSection />

        <Suspense fallback={<div>Loading background...</div>}>
          <div className="h-80 relative w-full overflow-hidden bg-gray-900 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-gray-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
           
            <h1 className={cn("md:text-3xl text-xl text-white relative z-20 mb-2")}>
              Universal Greening Organisation
            </h1>
            <div className="w-20 h-1 bg-orange-500 mb-3 relative z-20"></div>
            <p className="text-center mt-2 text-gray-200 relative z-20 max-w-lg px-4 text-sm">
              Empowering communities worldwide to create a sustainable future through innovative environmental solutions and global collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-3 relative z-20">
              {['Sustainability', 'Innovation', 'Community', 'Education', 'Conservation'].map((value, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-gray-700 hover:bg-orange-500 transition-colors duration-300 text-white rounded-full text-xs cursor-pointer"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  )
}
