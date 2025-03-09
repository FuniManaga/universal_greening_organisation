import { motion } from 'framer-motion'

export default function VideoSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#00703C] mb-6">
            UGO Fellowship 2024 Cohort Documentary
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Witness the transformative journey of young leaders from previously disadvantaged backgrounds.
          </p>
          
          <div className="relative pb-[56.25%] h-0 mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/9YrLLOCRAHU"
              title="UGO Fellowship Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <p className="text-gray-700 mb-4">
              As we prepare for the UGO Fellowship 2025 Cohort, we are actively seeking official partners 
              to expand our impact. Join us in shaping the next generation of ethical leaders and changemakers.
            </p>
            <a
              href="mailto:ugo@universalgreening.org"
              className="inline-block bg-[#00703C] text-white px-8 py-3 rounded-md hover:bg-[#005c32] transition-colors"
            >
              Partner With Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}