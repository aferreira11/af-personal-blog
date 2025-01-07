export interface TimelineImage {
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  description: string;
  overview: string;
  technicalDetails: {
    description: string;
    bulletPoints: string[];
  };
  impact: {
    description: string;
    bulletPoints: string[];
  };
}

export interface TimelineEntry {
  title: string;
  description: string;
  content?: React.ReactNode;
  images?: TimelineImage[];
}

export const timelineData: TimelineEntry[] = [
  {
    title: "2024",
    description: "Developed and launched AVA, an AI-powered financial assistant platform. The vision of a personalized financial assistant, offering tailored advice and insights to users worldwide.",
    images: [
      {
        title: "AI Financial Assistant",
        src: "/ava-website.png",
        alt: "AVA Website",
        width: 1920,
        height: 1080,
        description: "Next-gen financial advice platform",
        overview: "AVA represents the future of financial guidance, leveraging advanced R&G technology to provide personalized financial advice. The platform analyzes vast amounts of financial data and user context to deliver tailored recommendations, making professional-grade financial guidance accessible to everyone.",
        technicalDetails: {
          description: "The platform leverages cutting-edge technologies including:",
          bulletPoints: [
            "Advanced Natural Language Processing for understanding user queries",
            "Real-time data processing and analysis",
            "Machine Learning models for personalized recommendations",
            "Secure API integrations with financial institutions",
            "Blockchain technology for secure data transmission"
          ]
        },
        impact: {
          description: "This innovative solution has revolutionized how users interact with financial services, providing:",
          bulletPoints: [
            "24/7 access to personalized financial guidance",
            "Improved financial literacy through interactive learning",
            "Reduced barriers to financial services",
            "Enhanced decision-making through data-driven insights"
          ]
        }
      }
    ]
  },
  {
    title: "2023",
    description: "As Founder & CEO, built an Open Banking platform connecting 5,000+ institutions across 25+ countries to improve financial inclusion for newcomers moving to North America.",
    images: [
      {
        title: "Vambora Journey 2023",
        src: "/deck-2023-dark.png",
        alt: "Vambora Pitch Deck 2023",
        width: 1920,
        height: 1080,
        description: "Building trust beyond borders",
        overview: "The 2023 journey marked a pivotal year for Vambora as we expanded our reach to over 25 countries. We've built robust partnerships with financial institutions worldwide, creating a network that enables seamless cross-border financial services.",
        technicalDetails: {
          description: "Our global network is powered by:",
          bulletPoints: [
            "Distributed system architecture",
            "Global payment networks integration",
            "Multi-region deployment",
            "24/7 monitoring systems",
            "Automated compliance checks"
          ]
        },
        impact: {
          description: "Our expansion has led to significant achievements:",
          bulletPoints: [
            "Connected 5,000+ financial institutions",
            "Processed over $1B in transactions",
            "Expanded to 25+ countries",
            "Reduced cross-border transfer times by 85%"
          ]
        }
      }
    ]
  },
  {
    title: "2022",
    description: "Launched comprehensive risk assessment and identity verification platform for financial institutions, enabling better service for newcomers.",
    images: [
      {
        title: "Risk Assessment Platform",
        src: "/lp-2022.png",
        alt: "Landing Page 2022",
        width: 1920,
        height: 1080,
        description: "Advanced risk profiling system",
        overview: "Our risk assessment platform revolutionizes how financial institutions evaluate newcomers to North America. By incorporating alternative data sources and advanced analytics, we've created a more inclusive and accurate way to assess creditworthiness.",
        technicalDetails: {
          description: "The platform utilizes advanced technologies for risk assessment:",
          bulletPoints: [
            "Machine learning for credit scoring",
            "Alternative data processing",
            "Real-time risk analysis",
            "Automated verification systems",
            "Secure data handling protocols"
          ]
        },
        impact: {
          description: "The platform has achieved significant impact in financial inclusion:",
          bulletPoints: [
            "Enabled thousands of newcomers to access financial services",
            "Reduced false rejection rates by 60%",
            "Increased approval rates for qualified applicants",
            "Streamlined onboarding process for financial institutions"
          ]
        }
      }
    ]
  },
  {
    title: "2021",
    description: "Developed and led the product vision and implementation for a blockchain-based intellectual property protection platform.",
    images: [
      {
        title: "Vambora Services",
        src: "/vambora_services.jpeg",
        alt: "Vambora Services Platform",
        width: 1920,
        height: 1080,
        description: "Blockchain-powered IP protection",
        overview: "Led the development of a revolutionary blockchain-based platform for intellectual property protection, enabling creators and innovators to securely register and manage their IP rights.",
        technicalDetails: {
          description: "The platform incorporates several innovative technologies:",
          bulletPoints: [
            "Smart contract implementation for IP rights",
            "Decentralized storage for IP assets",
            "Automated rights management system",
            "Blockchain-based verification",
            "Digital signature integration"
          ]
        },
        impact: {
          description: "The platform has made significant contributions to IP protection:",
          bulletPoints: [
            "Reduced IP registration time by 80%",
            "Enhanced security for digital assets",
            "Streamlined IP rights management",
            "Improved transparency in IP ownership"
          ]
        }
      }
    ]
  },
  {
    title: "2020",
    description: "Directed product strategy for an AI-powered Knowledge Management System tailored to legal professionals. Delivered data-driven solutions to transform how legal teams manage and access critical information.",
    images: [
      {
        title: "Legal Tech Innovation",
        src: "/fintech_cadence.png",
        alt: "Fintech Cadence Platform",
        width: 1920,
        height: 1080,
        description: "AI-powered legal knowledge management",
        overview: "Developed an innovative AI-powered platform that revolutionizes how legal professionals manage and access information, making legal research and document management more efficient and accurate.",
        technicalDetails: {
          description: "The system leverages advanced AI technologies:",
          bulletPoints: [
            "Natural Language Processing for document analysis",
            "Machine Learning for content categorization",
            "Automated document summarization",
            "Semantic search capabilities",
            "Intelligent document linking"
          ]
        },
        impact: {
          description: "The platform has transformed legal operations:",
          bulletPoints: [
            "Reduced research time by 70%",
            "Improved document accuracy by 90%",
            "Enhanced collaboration efficiency",
            "Streamlined knowledge sharing"
          ]
        }
      }
    ]
  },
  {
    title: "2019",
    description: "Founded Aflux AI, a startup focused on AI-powered data analytics for legal professionals in Brazil.",
    images: [
      {
        title: "Aflux AI Launch",
        src: "/news.jpg",
        alt: "News Coverage",
        width: 1920,
        height: 1080,
        description: "AI-powered legal analytics platform",
        overview: "Founded Aflux AI, pioneering the use of artificial intelligence in legal data analytics. The platform helped legal professionals in Brazil make data-driven decisions and improve their practice efficiency.",
        technicalDetails: {
          description: "The platform was built with cutting-edge technologies:",
          bulletPoints: [
            "Advanced data analytics engines",
            "Machine learning algorithms",
            "Natural language processing",
            "Automated reporting systems",
            "Real-time data visualization"
          ]
        },
        impact: {
          description: "Aflux AI achieved significant milestones:",
          bulletPoints: [
            "Served 100+ legal firms in Brazil",
            "Processed millions of legal documents",
            "Reduced analysis time by 65%",
            "Improved decision accuracy by 40%"
          ]
        }
      }
    ]
  }
]; 