/**
 * ============================================================================
 * PORTFOLIO DATA STORE — EHSAN MAHER
 * ============================================================================
 * Centralized content source for effortless updates.
 * Replace placeholders, images, project links, or copy here
 * without modifying any HTML or CSS layout files.
 */

const PORTFOLIO_DATA = {
  // --------------------------------------------------------------------------
  // 1. PERSONAL INFORMATION & BRAND
  // --------------------------------------------------------------------------
  personalInfo: {
    name: "Ehsan Maher",
    title: "Packaging Designer",
    subtitle: "Printing, Publishing & Packaging · Applied Arts",
    coordinates: "CAIRO, EG · 30.0444° N, 31.2357° E",
    
    heroCopy: {
      lead: "Create purposeful packaging experiences through thoughtful design, attention to detail, and production-aware thinking.",
      secondary: "Turning ideas into distinctive designs that communicate, connect, and stand out."
    },

    aboutBio: [
      "I am a Packaging Designer with a strong interest in creating purposeful visual identities and tactile packaging experiences that leave a lasting mark.",
      "My approach balances artistic structural thinking, editorial clarity, and an intimate awareness of the physical production process. I believe packaging is not merely a container—it is a tactile brand touchpoint that demands rigor, craftsmanship, and structural integrity.",
      "From generative dieline conceptualization to prepress color separation and finishing standards, I design with production in mind so every fold, crease, and print run translates flawlessly into the physical world."
    ],

    specifications: [
      { label: "Specialty", value: "Structural & Visual Packaging" },
      { label: "Education", value: "Printing & Packaging (Applied Arts)" },
      { label: "Mindset", value: "Production-Aware & Detail-Driven" }
    ],

    portrait: {
      src: "assets/portrait/ehsan-portrait.jpg",
      alt: "Ehsan Maher — Packaging Designer",
      aspectRatio: "3 / 4",
      dimensions: "120 × 160 mm"
    },

    contact: {
      email: "mailto:ehsanmaher001@gmail.com",
      linkedin: "https://www.linkedin.com/in/ehsan-maher-44343433a/?isSelfProfile=true",
      behance: "https://www.behance.net/ehsanmaher",
      location: "Cairo, Egypt",
      status: "Available for Select Commissions & Collaborations"
    }
  },

  // --------------------------------------------------------------------------
  // 2. CREATIVE DISCIPLINES (Section #41 Typographic Signature)
  // --------------------------------------------------------------------------
  disciplines: [
    {
      id: "pkg",
      name: "PACKAGING DESIGN",
      featured: true,
      category: "Primary Specialization",
      description: "Structural engineering, production dielines, tactile carton experiences, and offset prepress."
    },
    {
      id: "brand",
      name: "BRAND IDENTITY",
      featured: false,
      category: "Visual Systems",
      description: "Cohesive visual languages, logo design, typography systems, and brand guidelines."
    },
    {
      id: "motion",
      name: "MOTION GRAPHICS",
      featured: false,
      category: "Dynamic Media",
      description: "Visual storytelling, animated brand assets, commercial teasers, and product reels."
    },
    {
      id: "graphic",
      name: "GRAPHIC DESIGN",
      featured: false,
      category: "Visual Communication",
      description: "Editorial layouts, posters, promotional collateral, and high-impact visual direction."
    },
    {
      id: "print",
      name: "PRINT DESIGN",
      featured: false,
      category: "Production Craft",
      description: "Color separation, CMYK calibration, varnish & foil treatments, and substrate selection."
    },
    {
      id: "layout",
      name: "LAYOUT & COMPOSITION",
      featured: false,
      category: "Editorial Systems",
      description: "Grid architectures, typographic pacing, publishing formats, and spatial balance."
    }
  ],

  // --------------------------------------------------------------------------
  // 3. EDUCATION
  // --------------------------------------------------------------------------
  education: [
    {
      period: "2024–2028",
      institution: "Capital University",
      faculty: "Faculty of Applied Arts",
      department: "Printing, Publishing and Packaging Department",
      details: "",
      highlights: []
    }
  ],

  // --------------------------------------------------------------------------
  // 4. SKILLS & SOFTWARE SUITE (Interactive Typographic Network)
  // --------------------------------------------------------------------------
  skills: {
    disciplines: [
      {
        name: "Packaging Design",
        category: "Discipline",
        summary: "End-to-end structural packaging, folding cartons, dieline geometry, and box mechanics.",
        competencies: ["Structural Packaging Systems", "Production-Ready Dielines", "Substrate & Board Analysis", "Folding Mechanisms", "Shelf-Impact Optimization"]
      },
      {
        name: "Graphic Design",
        category: "Discipline",
        summary: "Precision visual hierarchy, conceptual art direction, and cross-media design execution.",
        competencies: ["Art Direction", "Advertising Collateral", "Visual Communication", "Grid Systems", "Information Hierarchy"]
      },
      {
        name: "Brand Identity",
        category: "Discipline",
        summary: "Holistic brand worlds that build emotional resonance and distinct shelf recognition.",
        competencies: ["Brand Redesign & Systems", "Logo Refinement", "Visual Architecture", "Packaging Applications", "Brand Storytelling"]
      },
      {
        name: "Motion Graphics",
        category: "Discipline",
        summary: "Temporal storytelling and animated compositions that elevate brand campaigns.",
        competencies: ["Kinetic Typography", "Commercial Promotional Videos", "Product Teasers", "Keyframe Animation", "Sound Synchronization"]
      },
      {
        name: "Print Design",
        category: "Discipline",
        summary: "Technical prepress knowledge ensuring impeccable reproduction on press.",
        competencies: ["Offset Printing Production", "Color Separation & Trapping", "Prepress File Standards", "Spot Colors & Varnishes", "Proof Inspection"]
      },
      {
        name: "Layout & Composition",
        category: "Discipline",
        summary: "Rigorous typographic craft and spatial rhythm across editorial formats.",
        competencies: ["Modular Grid Layouts", "Editorial Pacing", "Macro & Micro Typography", "Publication Design", "Print Specifications"]
      }
    ],
    software: [
      {
        name: "Adobe Illustrator",
        category: "Software",
        summary: "Primary engine for precision vector dielines, technical packaging layouts, and brand assets.",
        competencies: ["Vector Dieline Engineering", "Prepress Separation & Overprints", "Complex Packaging Nets", "Technical Drawing", "Typography Styling"]
      },
      {
        name: "Adobe Photoshop",
        category: "Software",
        summary: "Advanced digital image mastering, retouching, composite texturing, and photorealistic mockups.",
        competencies: ["Packaging Mockup Visualization", "Texture Synthesis", "Color Correction & Retouching", "Print Compositing", "Raster Optimization"]
      },
      {
        name: "Adobe InDesign",
        category: "Software",
        summary: "Publishing and multi-page editorial architecture with rigorous typographic control.",
        competencies: ["Editorial Publication Layouts", "Style Sheets & Master Pages", "Print Bleed & Slug Setup", "Preflight Diagnostics", "Catalogues & Booklets"]
      },
      {
        name: "Adobe After Effects",
        category: "Software",
        summary: "Dynamic motion design, camera tracking, and animated promotional commercials.",
        competencies: ["Commercial Motion Graphics", "Kinetic Typography", "Packaging Animation Reels", "Timing & Interpolation", "Render Optimization"]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 5. EXPERIENCES
  // --------------------------------------------------------------------------
  experiences: [
    {
      period: "Present",
      organization: "DEPI",
      fullOrg: "Digital Egypt Pioneers Initiative",
      role: "Digital Marketing & Arts",
      description: "A structured training experience focused on developing practical skills in graphic and digital design, creative tools, hands-on projects, and professional development."
    },
    {
      period: "Completed",
      organization: "Jetpack",
      fullOrg: "Jetpack Professional Packaging Center",
      role: "Packaging Design Training",
      description: "An intensive hands-on training experience covering structural packaging design, production-ready dielines, packaging materials, die-cuts, artwork preparation for print, color separation, offset printing workflows, and Heidelberg Prinect Package Designer."
    },
    {
      period: "Training",
      organization: "Bayan for Printing & Packaging",
      fullOrg: "Bayan for Printing & Packaging",
      role: "Training",
      description: "A practical experience connecting design with the printing and packaging production process, including prepress, artwork preparation, and understanding how designs are transformed into final printed products."
    },
    {
      period: "Training",
      organization: "Nahdet Misr",
      fullOrg: "Nahdet Misr Publishing House",
      role: "Design Training",
      description: "A hands-on design experience within a real workplace environment, working on children's book projects and exploring design within a professional publishing context."
    },
    {
      period: "Training",
      organization: "ITI",
      fullOrg: "Information Technology Institute",
      role: "2D Graphic Design Course",
      description: "A focused graphic design training experience covering practical projects such as posters, invitations, business cards, logo design, and digital illustrations."
    }
  ],

  // --------------------------------------------------------------------------
  // 6. OFFERED SERVICES (Client-Focused, No UI/UX)
  // --------------------------------------------------------------------------
  services: [
    {
      number: "01",
      title: "Graphic Design",
      description: "Creating clear and engaging visual designs for posters, social media, marketing materials, and digital content."
    },
    {
      number: "02",
      title: "Packaging Design",
      description: "Designing functional and visually appealing packaging, from structural concepts and dielines to print-ready artwork."
    },
    {
      number: "03",
      title: "Branding",
      description: "Building cohesive visual identities through logos, typography, color systems, and supporting brand elements."
    },
    {
      number: "04",
      title: "Print Design",
      description: "Designing print-ready materials with attention to layout, typography, color, prepress requirements, and production."
    },
    {
      number: "05",
      title: "Motion Graphics",
      description: "Creating engaging motion graphics and animated visual content for digital advertising and social media."
    },
    {
      number: "06",
      title: "Logo Design",
      description: "Creating distinctive and memorable logos designed to communicate a brand's character clearly and effectively."
    }
  ],

  // --------------------------------------------------------------------------
  // 7. PROJECTS (Curated Body of Work, 8 Projects)
  // --------------------------------------------------------------------------
  projects: [
    {
      id: "interactive-lampshade-packaging",
      number: "№ 01/06",
      title: "Interactive Lampshade Packaging",
      category: "Packaging Design",
      description: "An interactive paper packaging concept designed to transform a lampshade package into a playful, engaging experience.",
      aspectRatio: "16 / 10",
      image: "assets/projects/interactive-packaging.jpg",
      behanceUrl: "https://www.behance.net/gallery/251619029/Interactive-Packaging-Design"
    },
    {
      id: "cherry-blossom-pop-up-candle",
      number: "№ 02/06",
      title: "Pop Up Candle Packaging",
      category: "Packaging Design",
      description: "A scented candle gift packaging concept featuring a cherry blossom-inspired pop-up experience.",
      aspectRatio: "16 / 10",
      image: "assets/projects/pop-up-gift.jpg",
      behanceUrl: "https://www.behance.net/gallery/251684563/Pop-Up-Gift-Packaging"
    },
    {
      id: "optical-illusion-acrylic-paint",
      number: "№ 03/06",
      title: "Optical Illusion Acrylic Paint Packaging",
      category: "Packaging Design",
      description: "An acrylic paint packaging concept combining an optical-illusion structure with a miniature art-gallery experience.",
      aspectRatio: "16 / 10",
      image: "assets/projects/optical-illusion.jpg",
      behanceUrl: "https://www.behance.net/gallery/252552019/Optical-Illusion-Packaging-Design"
    },
    {
      id: "wasla-autism-support-app",
      number: "№ 04/06",
      title: "WASLA — Autism Support App",
      category: "UX/UI Design",
      description: "A supportive mobile app concept designed to help mothers and children with autism communicate, track progress, and navigate daily needs.",
      aspectRatio: "16 / 10",
      image: "assets/projects/wasla-uiux.jpg",
      behanceUrl: "https://www.behance.net/gallery/251499203/WASLA-UIUX-Mobile-App-Design-for-Autism-support"
    },
    {
      id: "because-every-second-matters",
      number: "№ 05/06",
      title: "Smart Safety Watch | AI Ad",
      category: "Motion Graphic",
      description: "A visual advertising concept for a smart bracelet designed to help locate lost children quickly.",
      aspectRatio: "16 / 10",
      image: "assets/projects/smart-safety-watch.jpg",
      behanceUrl: "https://www.behance.net/gallery/251623285/Smart-Safety-Watch-AI-advertisment"
    },
    {
      id: "ready-for-summer-glow",
      number: "№ 06/06",
      title: "Vacation | Sunscreen Ad",
      category: "Motion Graphic",
      description: "A summer-focused motion graphic advertisement created around a sunscreen campaign.",
      aspectRatio: "16 / 10",
      image: "assets/projects/vacation-motion.jpg",
      behanceUrl: "https://www.behance.net/gallery/251622569/VACATION-Motion-Graphic-Advertisement"
    },
    {
      id: "ganoubi",
      number: "№ 07/08",
      title: "Ganoubi",
      category: "Packaging Design",
      description: "An Egyptian fashion brand inspired by Nubian and Southern heritage, reinterpreting traditional motifs, symbolism, and warm earthy tones into a contemporary design language. The project establishes a cohesive visual identity and structural packaging system that elevates the brand's cultural storytelling and premium retail experience.",
      aspectRatio: "16 / 10",
      image: "assets/projects/ganoubi.jpg",
      behanceUrl: "https://www.behance.net/gallery/ganoubi"
    },
    {
      id: "star",
      number: "№ 08/08",
      title: "Star",
      category: "Packaging Design",
      description: "An Egyptian food brand focused on alternative sweetening products for health-conscious consumers. This project modernizes the brand’s visual identity and establishes a fresh, health-oriented packaging system with clear information hierarchy and improved shelf impact across all product lines.",
      aspectRatio: "16 / 10",
      image: "assets/projects/star.jpg",
      behanceUrl: "https://www.behance.net/gallery/star"
    }
  ],

  // --------------------------------------------------------------------------
  // 8. ACHIEVEMENTS & CERTIFICATES (Curated Archive of 3 Certificates)
  // --------------------------------------------------------------------------
  certificates: [
    {
      id: "cert-jetpack",
      issuer: "Jetpack",
      title: "Packaging Design & Offset Prepress | Jetpack Services",
      subtitle: "Packaging Design & Offset Prepress",
      description: "Structural packaging design, production-ready dielines, packaging accessories, Illustrator workflow, prepress preparation, color separation, and offset printing standards.",
      duration: "64 Training Hours · 4-Week Intensive Program",
      date: "Practical Professional Certification",
      image: "assets/certificates/jetpack-certificate.jpg",
      topics: [
        "Structural Packaging Design & Net Development",
        "Production-Ready Industrial Dielines",
        "Packaging Accessories & Closures",
        "Adobe Illustrator Packaging Workflows",
        "Heidelberg Prinect Package Designer",
        "Prepress Preparation & Plate Output",
        "Color Separation & Spot Channels",
        "Offset Printing Production Standards"
      ]
    },
    {
      id: "cert-iti",
      issuer: "Information Technology Institute (ITI)",
      title: "2D Graphic Design Track | Information Technology Institute (ITI)",
      subtitle: "Professional Adobe Creative Suite Mastery",
      duration: "60 Training Hours Intensive",
      date: "26 January 2025 – 06 February 2025",
      image: "assets/certificates/iti-certificate.jpg",
      topics: [
        "Adobe Photoshop — 30 Hours (Image Editing, Compositing, Retouching)",
        "Adobe Illustrator — 30 Hours (Vector Graphics, Typography, Technical Illustration)",
        "Visual Communication Principles & Layout Architecture",
        "Digital Asset Preparation for Multi-Platform Output"
      ]
    },
    {
      id: "cert-nahdet-misr",
      issuer: "Nahdet Misr Publishing House",
      title: "Publishing & Print Design Training | Nahdet Misr Publishing",
      subtitle: "Publishing Operations & Commercial Press Standards",
      duration: "Two-Week Intensive Professional Residency",
      date: "13 July 2025 – 27 July 2025",
      image: "assets/certificates/nahdet-misr-certificate.jpg",
      topics: [
        "Publishing House Design Management Systems",
        "Editorial Production Schedules & Quality Controls",
        "Commercial Book Binding & Material Finishing",
        "Prepress Diagnostics & Industrial Print Inspection"
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 9. FEEDBACK & TESTIMONIALS
  // --------------------------------------------------------------------------

  testimonials: [
  {
    id: "feedback-roaa",
    author: "Roaa Mohamed",
    role: "Design Colleague & Collaborator",
    stamp: "VERIFIED COLLABORATION",
    text: "I had the pleasure of working with Ehsan, and I can confidently say that she is one of the most dedicated and hardworking people I've worked with. She is highly skilled, responsible, and always committed to delivering high-quality work.\n\nWhat I particularly appreciate about Ehsan is her strong work ethic and her ability to work effectively as part of a team. She is collaborative, supportive, and always willing to contribute her ideas and help others whenever needed. She also has a great eye for detail and consistently approaches her work with professionalism and enthusiasm.\n\nI would highly recommend Ehsan to any team looking for a talented, reliable, and motivated person who is always eager to learn, grow, and make a positive impact."
  },
  {
    id: "feedback-al-tayeb",
    author: "Al Tayeb Roastery",
    role: "Logo & Label Packaging Design Client",
    stamp: "CLIENT FEEDBACK",
    text: "Working with Ehsan was a great experience. She understood our vision and translated it into a logo and label designs that felt both professional and true to our brand. I’m really happy with the final result and would definitely recommend working with her."
  }
],

  // --------------------------------------------------------------------------
  // 10. CLIENT PROJECT NOTE (Al Tayeb)
  // --------------------------------------------------------------------------
  clientProjectNote: {
    client: "Al Tayeb",
    scope: "Logo & Label Packaging Design",
    status: "Project Feedback Slot Reserved"
  }
};
