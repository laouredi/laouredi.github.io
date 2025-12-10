import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { useRoute, Link } from "wouter";
import { content } from "@/lib/content";
import NotFound from "@/pages/not-found";

export default function BlogDetails() {
  const [match, params] = useRoute("/blog/:id");
  
  if (!match) return <NotFound />;
  
  const postId = parseInt(params.id);
  const post = content.blog.posts.find(p => p.id === postId);
  
  if (!post) return <NotFound />;

  return (
    <Layout>
      <div className="pt-24 pb-20 px-6 max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Journal
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-4 text-xs text-accent mb-6 uppercase tracking-widest">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
              <span className="w-1 h-1 bg-accent rounded-full"></span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex justify-center gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 text-xs text-gray-400 rounded-full">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

          {/* Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none 
            prose-headings:font-serif prose-headings:font-normal prose-headings:text-white 
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:font-light
            prose-strong:text-white prose-strong:font-semibold
            prose-blockquote:border-l-accent prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic"
            dangerouslySetInnerHTML={{ __html: post.content || "" }} 
          />
          
        </motion.article>
      </div>
    </Layout>
  );
}
