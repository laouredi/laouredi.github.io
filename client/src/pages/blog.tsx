import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { content } from "@/lib/content";
import { Link } from "wouter";

export default function Blog() {
  return (
    <Layout>
      <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-accent uppercase tracking-widest text-sm mb-4 block">{content.blog.subtitle}</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">{content.blog.title}</h1>
          <div className="w-24 h-[1px] bg-white/20 mx-auto"></div>
        </motion.div>

        <div className="space-y-16">
          {content.blog.posts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 uppercase tracking-wider">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
              </div>
              
              <Link href={`/blog/${post.id}`} className="block">
                  <h2 className="text-3xl font-serif text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h2>
              </Link>
              
              <p className="text-gray-400 leading-relaxed mb-4 font-light">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs border border-white/10 px-2 py-1 text-gray-500 rounded-sm">#{tag}</span>
                  ))}
                </div>
                
                <Link href={`/blog/${post.id}`} className="text-sm text-white flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:gap-3">
                    Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="mt-8 h-[1px] bg-white/5 w-full group-hover:bg-white/20 transition-colors duration-500"></div>
            </motion.article>
          ))}
        </div>
      </div>
    </Layout>
  );
}
