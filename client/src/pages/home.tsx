import Layout from "@/components/layout";
import { Link } from "wouter";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Code, Briefcase, BookOpen, Mail } from "lucide-react";
import backgroundTexture from "@assets/generated_images/luxury_dark_abstract_background_texture.png";
import { content } from "@/lib/content";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  return (
    <Layout>
      <div className="relative min-h-screen flex flex-col justify-center items-center p-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img 
            src={backgroundTexture} 
            alt="Luxury Texture" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Content */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-20 max-w-5xl w-full flex flex-col items-center text-center"
        >
          <motion.p variants={item} className="text-sm md:text-base uppercase tracking-[0.3em] text-gray-400 mb-6">
            {content.home.greeting}
          </motion.p>
          
          <motion.h1 variants={item} className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-8 tracking-tighter leading-none">
            {content.home.title.line1} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500">{content.home.title.highlight}</span>
          </motion.h1>

          <motion.p variants={item} className="max-w-xl text-gray-400 text-lg md:text-xl font-light mb-16 leading-relaxed">
            {content.home.description}
          </motion.p>

          {/* Navigation Grid / Portals */}
          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <NavCard 
              href="/projects" 
              title="Projects" 
              subtitle="Selected Works" 
              icon={<Code className="w-6 h-6" />} 
            />
            <NavCard 
              href="/experience" 
              title="Experience" 
              subtitle="My Journey" 
              icon={<Briefcase className="w-6 h-6" />} 
            />
            <NavCard 
              href="/blog" 
              title="Journal" 
              subtitle="Thoughts & Ideas" 
              icon={<BookOpen className="w-6 h-6" />} 
            />
            <NavCard 
              href="/contact" 
              title="Contact" 
              subtitle="Get in Touch" 
              icon={<Mail className="w-6 h-6" />} 
            />
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}

function NavCard({ href, title, subtitle, icon }: { href: string, title: string, subtitle: string, icon: React.ReactNode }) {
  return (
    <Link href={href} className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-8 h-64 flex flex-col justify-between transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 block">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex justify-between items-start">
        <span className="text-white/60 group-hover:text-white transition-colors duration-300">
          {icon}
        </span>
        <ArrowRight className="w-5 h-5 text-white/40 -rotate-45 group-hover:rotate-0 group-hover:text-white transition-all duration-500" />
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-serif text-white mb-1 group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
        <p className="text-sm text-gray-400 uppercase tracking-wider">{subtitle}</p>
      </div>
    </Link>
  );
}
