import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft, Calendar, Layers } from "lucide-react";
import { useRoute, Link } from "wouter";
import { content } from "@/lib/content";
import NotFound from "@/pages/not-found";

export default function ProjectDetails() {
  const [match, params] = useRoute("/projects/:id");
  
  if (!match) return <NotFound />;
  
  const projectId = parseInt(params.id);
  const project = content.projects.find(p => p.id === projectId);
  
  if (!project) return <NotFound />;

  return (
    <Layout>
      <div className="pt-24 pb-20 px-6 max-w-5xl mx-auto">
        <Link href="/projects" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-accent text-sm uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4" />
                {project.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Hero Image */}
          <div className="w-full aspect-video bg-gray-900 rounded-sm overflow-hidden relative group">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
            <div className="md:col-span-2 space-y-8">
              <h2 className="text-2xl font-serif text-white">About the Project</h2>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                {project.description}
              </p>
              
              <div className="bg-white/5 p-8 border border-white/10 rounded-sm">
                 <h3 className="text-xl font-serif text-white mb-4">Key Features</h3>
                 <ul className="list-disc list-inside text-gray-400 space-y-2">
                   <li>Custom design system implementation</li>
                   <li>Performance optimized rendering</li>
                   <li>Responsive layout for all devices</li>
                   <li>Interactive user interface elements</li>
                 </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 p-6 border border-white/10 rounded-sm space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/10 text-xs text-gray-300 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-[1px] bg-white/10" />

                <div>
                   <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3">Links</h3>
                   <div className="flex flex-col gap-3">
                    <a href={project.link} className="flex items-center gap-2 text-white hover:text-accent transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                    <a href={project.github} className="flex items-center gap-2 text-white hover:text-accent transition-colors">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Source Code</span>
                    </a>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
