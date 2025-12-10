import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { content } from "@/lib/content";

export default function Projects() {
  return (
    <Layout>
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white">Selected Works</h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            A curation of my best digital creations. Each project represents a unique challenge and a bespoke solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-24">
          {content.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
                <Link href={`/projects/${project.id}`} className="w-full md:w-3/5 aspect-video bg-gray-900 rounded-sm overflow-hidden group relative block cursor-pointer">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white text-sm uppercase tracking-widest border border-white/20">View Details</span>
                  </div>
              </Link>
              
              <div className="w-full md:w-2/5 space-y-6">
                <span className="text-sm text-accent uppercase tracking-widest">{project.category}</span>
                <Link href={`/projects/${project.id}`} className="block group">
                    <h2 className="text-4xl font-serif text-white group-hover:text-gray-300 transition-colors">{project.title}</h2>
                </Link>
                <p className="text-gray-400 leading-relaxed line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 border border-white/10 text-xs text-gray-300 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors group">
                      <span className="uppercase tracking-wider text-sm">View Project Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
