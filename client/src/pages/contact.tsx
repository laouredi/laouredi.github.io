import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { content } from "@/lib/content";

export default function Contact() {
  return (
    <Layout>
      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Info Section */}
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">{content.contact.title}</h1>
            <p className="text-xl text-gray-400 font-light mb-12 leading-relaxed">
              {content.contact.description}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-serif text-lg">Email</h3>
                  <p className="text-gray-500">{content.personal.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-serif text-lg">Phone</h3>
                  <p className="text-gray-500">{content.personal.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-serif text-lg">Location</h3>
                  <p className="text-gray-500">{content.personal.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 p-8 border border-white/10 rounded-sm space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-wider text-gray-500">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-accent focus:outline-hidden transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-wider text-gray-500">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-accent focus:outline-hidden transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider text-gray-500">Subject</label>
              <select className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-accent focus:outline-hidden transition-colors">
                <option>Project Inquiry</option>
                <option>Collaboration</option>
                <option>General Question</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider text-gray-500">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-accent focus:outline-hidden transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </Layout>
  );
}
