export const content = {
  personal: {
    name: "Alex",
    fullName: "Alex Design", // Used in footer
    logo: "ALEX.",
    email: "hello@alex.design",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  home: {
    greeting: "Hello, World. I am Alex.",
    title: {
      line1: "Digital",
      highlight: "Creator"
    },
    description: "Crafting digital experiences with precision and passion. Step inside to explore my universe of code, design, and thought."
  },
  projects: [
    {
      id: 1,
      title: "E-Commerce Luxury",
      category: "Full Stack Development",
      description: "A premium shopping experience built with Next.js and Stripe. Featuring smooth animations and a bespoke design system.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "AI Dashboard",
      category: "Interface Design",
      description: "An analytical dashboard for visualizing complex AI datasets. Focused on clarity, performance, and dark mode aesthetics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tech: ["TypeScript", "D3.js", "Tailwind"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Architect Portfolio",
      category: "Web Design",
      description: "Minimalist portfolio for a leading architecture firm. Emphasizing negative space and typography.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop",
      tech: ["Vue.js", "GSAP", "CMS"],
      link: "#",
      github: "#"
    },
  ],
  skills: {
    title: "Skills & Expertise",
    categories: [
      {
        name: "Frontend",
        items: [
          { name: "React / Next.js", level: 95 },
          { name: "TypeScript", level: 90 },
          { name: "Tailwind CSS", level: 92 },
          { name: "Framer Motion", level: 85 },
        ]
      },
      {
        name: "Backend",
        items: [
          { name: "Node.js", level: 88 },
          { name: "PostgreSQL", level: 80 },
          { name: "REST APIs", level: 90 },
          { name: "GraphQL", level: 75 },
        ]
      },
      {
        name: "Tools & Other",
        items: [
          { name: "Git / GitHub", level: 92 },
          { name: "Figma", level: 78 },
          { name: "Docker", level: 70 },
          { name: "AWS / Cloud", level: 72 },
        ]
      }
    ]
  },
  experience: {
    title: "Experience",
    subtitle: "My professional journey & milestones.",
    career: [
      {
        year: "2023 - Present",
        role: "Senior Frontend Engineer",
        company: "Tech Innovations Inc.",
        description: "Leading the frontend architecture for the company's flagship SaaS product. Implemented a modern design system and improved performance by 40%."
      },
      {
        year: "2021 - 2023",
        role: "UI/UX Developer",
        company: "Creative Studio",
        description: "Collaborated with designers to bring award-winning websites to life. Specialized in complex animations and interactive storytelling experiences."
      },
      {
        year: "2019 - 2021",
        role: "Junior Web Developer",
        company: "StartUp Hub",
        description: "Built responsive landing pages and maintained client websites. Gained expertise in the React ecosystem and modern CSS techniques."
      }
    ],
    education: [
      {
        year: "2019",
        degree: "B.S. Computer Science",
        school: "University of Technology",
      },
      {
        year: "2018",
        degree: "Full Stack Certification",
        school: "Code Academy",
      }
    ],
    documents: [
      {
        name: "Certification_React.pdf",
        url: "#", 
      },
      {
        name: "Diploma_CS.pdf",
        url: "#",
      }
    ]
  },
  blog: {
    title: "Thoughts & Ideas",
    subtitle: "The Journal",
    posts: [
      {
        id: 1,
        title: "The Future of Digital Interfaces",
        excerpt: "Exploring how AI and spatial computing are reshaping the way we interact with information.",
        date: "Dec 10, 2025",
        readTime: "5 min read",
        tags: ["Design", "AI"],
        content: `
          <p>The way we interact with digital interfaces is undergoing a fundamental shift. As artificial intelligence becomes more integrated into our daily workflows, the traditional point-and-click paradigm is evolving into something more fluid and anticipatory.</p>
          
          <h3>The Rise of Intent-Based UI</h3>
          <p>Instead of forcing users to navigate complex menus, future interfaces will predict intent. Imagine a design tool that understands you want to "make this pop" and offers context-aware suggestions rather than a palette of 100 filters.</p>
          
          <h3>Spatial Computing</h3>
          <p>With the advent of high-fidelity mixed reality headsets, screen real estate is no longer bounded by the physical monitor. We are moving towards "infinite canvas" interfaces where information can be spatially organized around the user.</p>
          
          <p>This requires a new way of thinking about typography, hierarchy, and interaction design. The button is no longer just a flat rectangle; it is a dimensional object that reacts to gaze and gesture.</p>
        `
      },
      {
        id: 2,
        title: "Minimalism in Code Architecture",
        excerpt: "Why keeping your codebase clean is an art form, and how to achieve zen in your development workflow.",
        date: "Nov 28, 2025",
        readTime: "8 min read",
        tags: ["Development", "Philosophy"],
        content: `
          <p>Complexity is the enemy of reliability. In software development, we often conflate "powerful" with "complex". But the most robust systems are often the simplest.</p>
          
          <h3>The Art of Deletion</h3>
          <p>One of the most satisfying parts of coding is deleting code. Removing legacy features, simplifying logic, and reducing dependencies not only makes the application faster but makes it easier for new developers to understand.</p>
          
          <blockquote>"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." - Antoine de Saint-Exupéry</blockquote>
          
          <p>When structuring your next project, ask yourself: Do I really need this library? Can this component be split into two simpler ones? Is this abstraction actually helpful, or just clever?</p>
        `
      },
      {
        id: 3,
        title: "Designing for Dark Mode",
        excerpt: "Best practices for creating comfortable and accessible dark themes for web applications.",
        date: "Oct 15, 2025",
        readTime: "4 min read",
        tags: ["UI/UX", "Tutorial"],
        content: `
          <p>Dark mode is more than just inverting colors. It requires a deep understanding of contrast, saturation, and depth.</p>
          
          <h3>Avoid Pure Black</h3>
          <p>Never use #000000 for your background. It creates harsh contrast that can cause eye strain and "smearing" on OLED screens. Instead, use a dark gray like #121212.</p>
          
          <h3>Elevation via Lightness</h3>
          <p>In light mode, we use shadows to show depth. In dark mode, shadows are invisible. Instead, we use lightness. The "closer" an element is to the user (like a modal or card), the lighter its background color should be.</p>
          
          <p>Desaturate your colors. Bright, saturated colors vibrate against dark backgrounds. Lower the saturation of your accent colors to make them legible and comfortable.</p>
        `
      }
    ]
  },
  contact: {
    title: "Let's Talk",
    description: "Have a project in mind or just want to say hello? I'm always open to discussing new opportunities and creative ideas."
  }
};
