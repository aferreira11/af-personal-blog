export interface TimelineImage {
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  description: string;
  overview: string;
  projectSlug?: string;
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
    description: "Developed Ava (Alpha) as an AI financial assistant powered by Open Banking data. It was built to provide personalized financial advice to newcomers moving to Canada.",
    images: [
      {
        title: "AI Financial Assistant",
        src: "/ava-website.png",
        alt: "AVA Website",
        width: 1920,
        height: 1080,
        description: "Vambora",
        projectSlug: "vambora-redefining-financial-inclusion-for-immigrants",
        overview: "Ava (Automated Virtual Assistant) was developed as an AI financial assistant powered by Open Banking data. It was built to help increase financial literacy and promote financial inclusion for newcomers moving to Canada.",
        technicalDetails: {
          description: "",
          bulletPoints: [
            "Used single API to connect to overseas financial institutions",
            "Real-time data processing and analysis through OpenAI API",
            "Mobile app built with React Native and Microsoft Azure for the backend"
          ]
        },
        impact: {
          description: "Discontinued due to lack of funding",
          bulletPoints: []
        }
      }
    ]
  },
  {
    title: "2023",
    description: "Open Banking platform connecting 5,000+ institutions across 25+ countries to improve financial inclusion for newcomers moving to Canada.",
    images: [
      {
        title: "Cross-border Open Banking Infrastructure",
        src: "/deck-2023-dark.png",
        alt: "Vambora Pitch Deck 2023",
        width: 1920,
        height: 1080,
        description: "Vambora",
        projectSlug: "vambora-redefining-financial-inclusion-for-immigrants",
        overview: "The Trust Profile was designed to work as a Digital ID for individuals without an established credit history and enable them to access financial services. We've built robust partnerships with financial institutions and fintechs, creating a network that enables seamless cross-border financial services.",
        technicalDetails: {
          description: "",
          bulletPoints: [
            "Open Banking system integrating major data aggregators like Plaid worldwide",
            "KYC/AML for individuals from 200+ countries and territories",
            "Consent management system to for secure data sharing",
          ]
        },
        impact: {
          description: "",
          bulletPoints: [
            "Access to over 100,000+ newcomers moving to Canada per year through partnerships with education institutions and immigration consultants",
            "Established partnerships with major Canadian fintech startups (Neo Financial and KOHO)",
            "Joined Forum Venture's accelerator program",
            "Secured pre-seed funding"
          ]
        }
      }
    ]
  },
  {
    title: "2022",
    description: "Minimum Viable Product (MVP) launched to learn the root cause of why newcomers are not accessing financial services.",
    images: [
      {
        title: "Service Marketplace for Newcomers",
        src: "/lp-2022.png",
        alt: "Landing Page 2022",
        width: 1920,
        height: 1080,
        description: "Vambora",
        projectSlug: "vambora-redefining-financial-inclusion-for-immigrants",
        overview: "Based on Amadeu's personal journey when he moved to Canada in 2016, he wanted to make it easier for newcomers to access financial services. By the end of the experiment, he confirmed an important hypothesis: newcomers have limited access to financial services because they don't have a credit history.",
        technicalDetails: {
          description: "",
          bulletPoints: [
            "Initial MVP built with No-Code tools",
            "Included a cost of living calculator based on the user's target city using the Numbeo API",
            "Used Webflow (HTML/CSS), Wized (JavaScript) and Xano (PostgreSQL)"
          ]
        },
        impact: {
          description: "The MVP clearly demonstrated that the lack of credit history is the root cause of why newcomers are not accessing financial services. It also debuted Vambora's brand and voice.",
          bulletPoints: [
            "Offered services like opening a bank account, cell phone and internet plans, housing consultancy, and more",
            "Early traction with 1,000+ users registered",
            "Helped 100+ users moved from Brazil to Canada using Vambora's services"
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
        title: "Blockchain-Based Digital Content Certification and Marketplace",
        src: "/UREEQA.webp",
        alt: "UREEQA Platform",
        width: 1920,
        height: 1080,
        description: "UREEQA",
        projectSlug: "ureeqa-securing-creative-rights-in-the-digital-age",
        overview: "Led the product development team of UREEQA, a blockchain-based platform for digital content certification and marketplace. This innovative system enables creators to securely register, protect, and monetize their digital works through blockchain verification, NFT minting, and community-driven authentication processes.",
        technicalDetails: {
          description: "The platform incorporates several innovative technologies to certify and protect digital creations:",
          bulletPoints: [
            "Blockchain-based certification for digital content",
            "Community-driven content verification",
            "NFT minting for immutable ownership claims",
            "Rights management for monetization and licensing"
          ]
        },
        impact: {
          description: "The platform has achieved significant milestones in digital content protection:",
          bulletPoints: [
            "Launched Validation-as-a-Service (VaaS) to combat NFT fraud and protect creators' rights.",
            "Established partnerships with digital platforms like Venusverse to empower creators in the NFT space.",
            "Developed a patented validation process to verify ownership, authorship, and originality of creative works.",
            "Introduced Responsibly Minted™ NFTs, ensuring authenticity and legitimacy in the digital marketplace."
          ]
        }
      }
    ]
  },
  {
    title: "2020",
    description: "Directed product strategy and design for an AI-powered Knowledge Management System tailored to legal professionals. Delivered data-driven solutions to transform how legal teams manage and access critical information.",
    images: [
      {
        title: "Knowledge Management System for Legal Professionals",
        src: "/primal-ai.webp",
        alt: "Primal AI",
        width: 1920,
        height: 1080,
        description: "Primal AI",
        projectSlug: "primal-ai-knowledge-management-system-for-legal-professionals",
        overview: "Using Primal's proprietary semantic search, led the team of developers and data scientists to build and ship the company's first successful B2B product.",
        technicalDetails: {
          description: "",
          bulletPoints: [
            "Natural Language Processing for document analysis",
            "Machine Learning for content categorization",
            "Semantic search used for document retrieval",
            "Intelligent document linking"
          ]
        },
        impact: {
          description: "",
          bulletPoints: [
            "Reduced research time by 90%",
            "Enhanced collaboration efficiency",
            "Product was acquired by a major AI company in Canada"
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
        title: "AI-Powered Legal Analytics",
        src: "/aflux-ai.png",
        alt: "Aflux AI",
        width: 1920,
        height: 1080,
        description: "Aflux AI",
        projectSlug: "aflux-ai-data-analytics-for-legal-professionals",
        overview: "Founded Aflux AI, pioneering the use of artificial intelligence in legal data analytics. The platform helped legal professionals in Brazil make data-driven decisions and improve their practice efficiency.",
        technicalDetails: {
          description: "",
          bulletPoints: [
            "Advanced data analytics engines",
            "Machine learning algorithms",
            "Natural language processing"
          ]
        },
        impact: {
          description: "",
          bulletPoints: [
            "Project was stopped due to COVID-19"
          ]
        }
      }
    ]
  }
]; 