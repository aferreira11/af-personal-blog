"use client";

import { InView } from "@/components/ui/in-view";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ContactDialog } from "@/components/contact-dialog";
import { useState } from "react";
import { TextEffect } from "@/components/ui/text-effect";
import { CustomButton } from "@/components/ui/custom-button";
import { BorderTrail } from "@/components/ui/border-trail";
import { ImageCarousel } from "@/components/ui/image-carousel";

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 } as const,
  visible: { opacity: 1, y: 0 } as const
} as const;

// Content constants
const introTextPart1 = `Learning how to learn is the most important skill in the 21st century.`;

// Image utilities
const placeholderImages = {
  1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80", // Tech workspace
  2: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80", // Coding
  3: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80", // Business meeting
  4: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80", // Team collaboration
  5: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80", // Tech infrastructure
  6: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80", // Developer team
  7: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80", // Startup office
  8: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80", // Team planning
  9: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80", // Code review
  10: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80" // Development
};

const getPlaceholderImage = (id: number) => placeholderImages[id as keyof typeof placeholderImages];

// Add this constant at the top of your file
const carouselImages = [
  {
    src: "/amadeu_communitech.jpeg",
    alt: "Amadeu Ferreira at Communitech"
  },
  {
    src: "/amadeu_communitech2.jpeg",
    alt: "Amadeu Ferreira at Communitech"
  },
  {
    src: "/amadeu_snow.jpeg",
    alt: "Amadeu Ferreira WFH"
  },
];

export default function About() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center w-full">
          {/* Image Section */}
          <div className="relative flex justify-center items-center order-1 md:order-2 w-full h-[45vh] md:h-[60vh]">
            <ImageCarousel 
              images={carouselImages} 
              autoPlayInterval={4000}
            />
          </div>
          {/* Text Section */}
          <div className="space-y-8 order-2 md:order-1">
            <InView
              variants={fadeInVariants}
              transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
            >
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Only fail those who <span className="text-[#004CFF]">don&apos;t try</span>
                </h1>
                <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300">
                  A tech founder who&apos;s learned (and unlearned) through law school, an MBA, and building a startup from scratch.
                </p>
              </div>
              <div className="pt-8">
                <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                  <CustomButton variant="primary">
                    Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                  </CustomButton>
                </ContactDialog>
              </div>
            </InView>
          </div>
        </div>
      </div>

      {/* Vision Quote Section */}
      <div className="bg-neutral-50 dark:bg-neutral-900 my-12">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="max-w-3xl mx-auto">
            <InView
              variants={fadeInVariants}
              transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
            >
              <div className="flex flex-col space-y-6 md:space-y-8">
                <TextEffect
                  per="word"
                  delay={1}
                  className="!font-normal italic text-center text-xl md:text-2xl lg:text-3xl text-neutral-800 dark:text-neutral-200 leading-relaxed"
                  preset="fade"
                >
                  {introTextPart1}
                </TextEffect>
              </div>
            </InView>
          </div>
        </div>
      </div>

      {/* Journey Timeline Section */}
      <div className="container-padding py-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">My Journey</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              A timeline of my professional journey and key milestones.
            </p>
          </div>
          <Timeline data={timelineData} />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <InView
              variants={fadeInVariants}
              transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
                Whether you're looking to innovate, scale, or transform your digital presence,
                I'm here to help turn your vision into reality.
              </p>
              <div className="flex gap-4 justify-center">
                <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                  <CustomButton variant="primary">
                    Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                  </CustomButton>
                </ContactDialog>
              </div>
            </InView>
          </div>
        </div>
      </div>
    </main>
  );
}

// Timeline data
const timelineData = [
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4 md:mb-8">
          Developed a Retrieval-Augmented Generation (RAG) system to enable the creation of a personalized financial assistant, offering tailored financial advice and insights.
        </p>
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          <Image
            src={getPlaceholderImage(1)}
            alt="Project 1"
            width={500}
            height={500}
            className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-md md:shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={getPlaceholderImage(2)}
            alt="Project 2"
            width={500}
            height={500}
            className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-md md:shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2022-2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4 md:mb-8">
          As Founder & CEO, built an Open Banking platform connecting 5,000+ institutions across 25+ countries to improve financial inclusion for newcomers moving to North America.
        </p>
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          <Image
            src={getPlaceholderImage(3)}
            alt="Project 3"
            width={500}
            height={500}
            className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-md md:shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={getPlaceholderImage(4)}
            alt="Project 4"
            width={500}
            height={500}
            className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-md md:shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
          Developed and led the product vision and implementation for a blockchain-based intellectual property protection platform.
        </p>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
          Directed product strategy for an AI-powered Knowledge Management System tailored to legal professionals. Delivered data-driven solutions to transform how legal teams manage and access critical information.
        </p>
      </div>
    ),
  },
  {
    title: "2019",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
          Founded Aflux AI, a startup focused on AI-powered data analytics for legal professionals in Brazil.
        </p>
      </div>
    ),
  },
];
