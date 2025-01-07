"use client";

import { InView } from "@/components/ui/in-view";
import { Timeline } from "@/components/ui/timeline";
import { ArrowRight } from "lucide-react";
import { ContactDialog } from "@/components/contact-dialog";
import { useState, useRef, useEffect, useId } from "react";
import { TextEffect } from "@/components/ui/text-effect";
import { CustomButton } from "@/components/ui/custom-button";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { timelineData, type TimelineImage } from "@/utils/timeline-data";
import { TimelineEntry } from "@/components/timeline-entry";
import { TimelineCard } from "@/components/timeline-card";

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 } as const,
  visible: { opacity: 1, y: 0 } as const
} as const;

// Content constants
const introTextPart1 = `Learning how to learn is the most important skill in the 21st century.`;

// Hero carousel images
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
  const [active, setActive] = useState<TimelineImage | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const formattedTimelineData = timelineData.map(entry => ({
    title: entry.title,
    content: (
      <TimelineEntry
        description={entry.description}
        images={entry.images}
        onImageClick={setActive}
        id={id}
      />
    )
  }));

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
          <Timeline data={formattedTimelineData} />
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
                Let&apos;s Build Something Amazing Together
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
                Whether you&apos;re looking to innovate, scale, or transform your digital presence,
                I&apos;m here to help turn your vision into reality.
              </p>
              <div className="flex gap-4 justify-center">
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

      {/* Expandable Image Modal */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50"
              onClick={() => setActive(null)}
            />
            <div className="fixed inset-0 grid place-items-center z-[51] p-4">
              <TimelineCard
                ref={ref}
                image={active}
                year={timelineData.find(entry => 
                  entry.images?.some(img => img.title === active.title)
                )?.title || ""}
                onClose={() => setActive(null)}
                id={id}
              />
            </div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
