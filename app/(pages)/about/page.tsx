"use client";

import { InView } from "@/components/ui/in-view";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ContactDialog } from "@/components/contact-dialog";
import { useState } from "react";
import { TextEffect } from "@/components/ui/text-effect";

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 } as const,
  visible: { opacity: 1, y: 0 } as const
} as const;

// Content constants
const introTextPart1 = `I believe that AI gives us innovators great powers... but we forget we also have great responsibilities too.`;
const introTextPart2 = `If we get this wrong, we might not have a second chance to make it right.`;

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

export default function About() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <InView
              variants={fadeInVariants}
              transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
            >
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Tech Founder,<br />
                  <span className="text-neutral-900 dark:text-neutral-100">
                    Product Manager,
                  </span><br />
                  and Polymath<br />
                </h1>
                <p className="text-xl text-neutral-700 dark:text-neutral-300">
                  Builder. Creator. Leader. Daddy jokes enthusiast.
                </p>
              </div>
              <div className="pt-8">
                <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                  <Button variant="default" className="text-base px-8 py-6">
                    Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </ContactDialog>
              </div>
            </InView>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-neutral-200 dark:border-neutral-800">
              <Image
                src="/amadeu.png"
                alt="Amadeu Ferreira"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vision Quote Section */}
      <div className="bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto">
            <InView
              variants={fadeInVariants}
              transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
            >
              <div className="flex flex-col space-y-8">
                <TextEffect
                  per="word"
                  delay={0.5}
                  className="!font-normal italic text-center text-2xl md:text-3xl text-neutral-800 dark:text-neutral-200 leading-relaxed"
                  preset="fade"
                >
                  {introTextPart1}
                </TextEffect>
                <TextEffect
                  per="word"
                  delay={3}
                  className="!font-normal italic text-center text-2xl md:text-3xl text-neutral-800 dark:text-neutral-200 leading-relaxed"
                  preset="fade"
                >
                  {introTextPart2}
                </TextEffect>
              </div>
            </InView>
          </div>
        </div>
      </div>

      {/* Journey Timeline Section */}
      <div className="w-full">
        <Timeline data={timelineData} />
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
                  <Button variant="default" className="text-base px-8 py-6">
                    Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Currently building innovative solutions at the intersection of technology and business. Leading product development and strategy while exploring new frontiers in AI and web technologies.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={getPlaceholderImage(1)}
            alt="Project 1"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={getPlaceholderImage(2)}
            alt="Project 2"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  // ... rest of the timeline data
];
