"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button"; // Assuming ShadCN UI library
import { motion } from "framer-motion"; // For animations
import Link from "next/link";
import Image from "next/image"; // For optimized images
import Head from "next/head"; // For SEO meta tags

const LandingPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#333333]">
      {/* SEO Meta Tags */}
      <Head>
        <title>Universal Greening Organisation | Greening South Africa</title>
        <meta name="description" content="Empowering communities and restoring ecosystems for a sustainable South Africa." />
        <meta name="keywords" content="conservation, sustainability, climate action, South Africa, biodiversity" />
      </Head>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center bg-[#2E7D32] text-white"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Image
          src="/forre.jpg" // Replace with actual image
          alt="South African landscape with community planting trees"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute inset-0 opacity-70"
        />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Building a Greener Future
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Restoring ecosystems and empowering South African communities.
          </motion.p>
          <Button
            asChild
            size="lg"
            className="bg-[#4CAF50] text-white hover:bg-[#388E3C] rounded-full px-8 py-3 text-lg transition-all duration-300"
          >
            <Link href="https://www.payfast.co.za/donate/go/universalgreeningorganization">Get Involved</Link>
          </Button>
        </div>
      </motion.section>

      {/* Announcement Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#2E7D32] mb-8 text-center bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] bg-clip-text text-transparent">
            Big News!
          </h2>
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 bg-[#F5F5F5] p-6 rounded-xl shadow-md border-2 border-transparent bg-gradient-to-r from-[#4CAF50]/20 to-[#2E7D32]/20 hover:-translate-y-1 transition-all duration-300"
            variants={fadeInUp}
          >
            <Image
              src="/ceo2.png" // Replace with actual image of Lindelani Maraganedzha
              alt="UGO CEO Lindelani Maraganedzha"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
            <div className="text-[#333333]">
              <h3 className="text-2xl font-semibold text-[#4CAF50] mb-4">Award-Winning Impact</h3>
              <p className="text-lg leading-relaxed">
                Our CEO, Lindelani Maraganedzha, just snagged the prestigious WESSA Individual Award in Environmental Conservation and Education! His bold leadership is pushing sustainability and education to new heights across South Africa.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 md:px-12 bg-[#F5F5F5]">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-[#2E7D32] mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl text-[#333333] max-w-3xl mx-auto text-center leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At the Universal Greening Organisation (UGO), we drive sustainable change in South Africa by protecting ecosystems, empowering communities, and aligning with global goals like SDG 13, 14, and 15. Join us to create a healthier, greener future.
        </motion.p>
      </section>

      {/* Bento Grid Section */}
      <section className="py-20 px-6 md:px-12 bg-[#2E7D32] text-white">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Work
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div className="bg-white text-[#333333] rounded-lg p-6" variants={fadeInUp}>
            <Image
              src="/community.jpeg" // Replace with actual image
              alt="Vhembe community planting trees"
              width={600}
              height={400}
              className="rounded-md mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold text-[#2E7D32] mb-2">PH Omara Ojungu Campaign</h3>
            <p className="text-lg">Engaged 500+ Vhembe community members.</p>
          </motion.div>

          {/* Updated Fellowship Box */}
          <motion.div
            className="bg-white text-[#333333] rounded-lg p-6 bg-gradient-to-r from-[#4CAF50]/10 to-[#2E7D32]/10 hover:-translate-y-1 transition-all duration-300"
            variants={fadeInUp}
          >
            <Image
              src="/fellowship.jpeg" // From provided Fellowship data
              alt="UGO Fellowship Training"
              width={600}
              height={400}
              className="rounded-md mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold text-[#2E7D32] mb-2">UGO Fellowship 2024</h3>
            <p className="text-lg mb-4">
              Transforming 12 students into environmental leaders with a 90-day immersive program.
            </p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="text-center">
                <span className="text-xl font-bold text-[#4CAF50]">12</span>
                <p className="text-sm">Fellows</p>
              </div>
              <div className="text-center">
                <span className="text-xl font-bold text-[#4CAF50]">90</span>
                <p className="text-sm">Days</p>
              </div>
              <div className="text-center">
                <span className="text-xl font-bold text-[#4CAF50]">100%</span>
                <p className="text-sm">Hands-on</p>
              </div>
            </div>
            <Button
              asChild
              variant="link"
              className="text-[#4CAF50] p-0"
            >
              <Link href="/network/fellowship">Learn More.</Link>
            </Button>
          </motion.div>

          <motion.div className="bg-[#4CAF50] text-white rounded-lg p-6 md:col-span-2" variants={fadeInUp}>
            <h3 className="text-2xl font-semibold mb-2">Make an Impact</h3>
            <p className="text-lg mb-4">Support jobs, restoration, and education in South Africa.</p>
            <Button
              asChild
              className="bg-white text-[#2E7D32] hover:bg-[#F9A825] hover:text-white rounded-full px-6 py-2 transition-all duration-300"
            >
              <Link href="">Get Involved</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* SDG Alignment Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-[#2E7D32] mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Global Goals
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div className="p-6" variants={fadeInUp}>
            <h3 className="text-2xl font-semibold text-[#2E7D32] mb-2">SDG 13: Climate Action</h3>
            <p className="text-lg text-[#333333]">Combating climate change through tree planting.</p>
          </motion.div>
          <motion.div className="p-6" variants={fadeInUp}>
            <h3 className="text-2xl font-semibold text-[#2E7D32] mb-2">SDG 14: Life Below Water</h3>
            <p className="text-lg text-[#333333]">Protecting marine ecosystems with coastal cleanups.</p>
          </motion.div>
          <motion.div className="p-6" variants={fadeInUp}>
            <h3 className="text-2xl font-semibold text-[#2E7D32] mb-2">SDG 15: Life on Land</h3>
            <p className="text-lg text-[#333333]">Restoring biodiversity through reforestation.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Updated Impact Section */}
      <section className="py-20 px-6 md:px-12 bg-[#F5F5F5] text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-[#2E7D32] mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Impact
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-5xl font-bold text-[#2E7D32] mb-2">100K</h3>
            <p className="text-xl text-[#333333]">Trees Planted</p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-5xl font-bold text-[#2E7D32] mb-2">50+</h3>
            <p className="text-xl text-[#333333]">Communities Empowered</p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-5xl font-bold text-[#2E7D32] mb-2">10K+</h3>
            <p className="text-xl text-[#333333]">Volunteers Engaged</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Updated Stories of Impact Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-[#2E7D32] mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Stories of Impact
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div className="relative h-96" variants={fadeInUp}>
            <Image
              src="/story1.jpg" // Replace with actual tree planting image
              alt="Community tree planting event"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Rooted in Resilience</h3>
                <p className="text-white">“Planting trees transformed our village and our climate.”</p>
                <Button asChild variant="link" className="text-[#F9A825] p-0 mt-2">
                  <Link href="">Read More</Link>
                </Button>
              </div>
            </div>
          </motion.div>
          <motion.div className="relative h-96" variants={fadeInUp}>
            <Image
              src="/story2.jpg" // Replace with actual wetland cleanup image
              alt="Wetland cleanup initiative"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Reviving the Wetlands</h3>
                <p className="text-white">“Cleaning our wetlands brought life back to our ecosystem.”</p>
                <Button asChild variant="link" className="text-[#F9A825] p-0 mt-2">
                  <Link href="">Read More</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 md:px-12 bg-[#2E7D32] text-white text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Act Now
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your support plants trees, creates jobs, and builds sustainable communities.
        </motion.p>
        <div className="flex justify-center gap-6">
          <Button
            asChild
            size="lg"
            className="bg-[#4CAF50] text-white hover:bg-[#388E3C] rounded-full px-8 py-3 text-lg transition-all duration-300"
          >
            <Link href="https://www.payfast.co.za/donate/go/universalgreeningorganization">Take Action</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-[#F9A825] hover:text-[#333333] rounded-full px-8 py-3 text-lg transition-all duration-300"
          >
            <Link href="/about/our-story">Learn More</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;