import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { content } from "@/lib/content";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="space-y-2"
    >
      <div className="flex justify-between text-sm">
        <span className="text-foreground">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent to-white/80 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <Layout>
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-2">{content.experience.title}</h1>
            <p className="text-xl text-gray-400 font-light">{content.experience.subtitle}</p>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors duration-300 rounded-sm uppercase tracking-widest text-sm"
          >
            <Download className="w-4 h-4" />
            Download CV
          </motion.button>
        </div>

        <div className="space-y-24">
          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-serif text-accent mb-12 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-accent"></span>
              {content.skills.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.skills.categories.map((category, catIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-sm"
                >
                  <h3 className="text-lg font-serif text-white mb-6">{category.name}</h3>
                  <div className="space-y-4">
                    {category.items.map((skill, skillIndex) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={catIndex * 0.1 + skillIndex * 0.05}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-accent mb-12 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-accent"></span>
              Career History
            </h2>
            
            <div className="space-y-12">
              {content.experience.career.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-4 gap-6"
                >
                  <div className="text-gray-500 font-mono text-sm pt-1">{exp.year}</div>
                  <div className="md:col-span-3 space-y-2">
                    <h3 className="text-2xl text-white font-serif">{exp.role}</h3>
                    <div className="text-accent text-sm uppercase tracking-wider mb-2">{exp.company}</div>
                    <p className="text-gray-400 font-light leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-accent mb-12 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-accent"></span>
              Education & Certifications
            </h2>
            
            <div className="space-y-8">
              {content.experience.education.map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center border-l border-white/10 pl-6 hover:border-accent transition-colors duration-300"
                >
                  <div className="text-gray-500 font-mono text-sm">{edu.year}</div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl text-white font-serif">{edu.degree}</h3>
                    <div className="text-gray-400 text-sm">{edu.school}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* File Manager Section - Now Dynamic */}
          <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
            <h3 className="text-xl text-white mb-4 font-serif">Documents & Certificates</h3>
            <p className="text-gray-400 text-sm mb-6">Access verified copies of my certifications and diplomas.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {content.experience.documents.map((doc, i) => (
                 <a 
                   href={doc.url} 
                   key={i} 
                   target="_blank"
                   className="aspect-[3/4] border border-dashed border-white/20 flex flex-col items-center justify-center gap-3 hover:border-accent hover:bg-white/5 transition-all cursor-pointer group p-4 text-center"
                 >
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white break-words w-full">{doc.name}</span>
                 </a>
               ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
