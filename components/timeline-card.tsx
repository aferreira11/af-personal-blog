"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import type { TimelineImage } from "@/utils/timeline-data";
import { forwardRef } from "react";
import Link from "next/link";

interface TimelineCardProps {
  image: TimelineImage;
  year: string;
  onClose: () => void;
  id: string;
}

const buttonVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  },
  exit: { 
    scale: 0, 
    opacity: 0,
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.9 }
};

export const TimelineCard = forwardRef<HTMLDivElement, TimelineCardProps>(
  ({ image, year, onClose, id }, ref) => {
    return (
      <div className="flex flex-col items-end gap-4">
        <motion.button
          onClick={onClose}
          className="p-2 bg-white/10 backdrop-blur-lg hover:bg-white/20 rounded-full text-white transition-colors"
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          whileTap="tap"
        >
          <X className="h-4 w-4" />
        </motion.button>
        <motion.div
          ref={ref}
          layoutId={`card-${image.title}-${id}`}
          className="w-full max-w-[500px] h-[67.5vh] bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden flex flex-col"
        >
          <motion.div layoutId={`image-${image.title}-${id}`}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-[250px] object-cover object-top"
              priority
            />
          </motion.div>
          <div className="flex-1 flex flex-col min-h-0 px-4 mt-6">
            <div className="flex flex-col p-4 bg-white dark:bg-neutral-900">
              <motion.h3
                layoutId={`title-${image.title}-${id}`}
                className="text-xl font-bold text-neutral-800 dark:text-neutral-200"
              >
                {image.title}
              </motion.h3>
              <div className="flex items-center gap-2 text-xs mt-1">
                <motion.p className="text-neutral-600 dark:text-neutral-400">
                  {year}
                </motion.p>
                <span className="text-neutral-400 dark:text-neutral-600">•</span>
                <motion.div className="relative">
                  <Link
                    href={`/projects/${image.projectSlug || ''}`}
                    className="group inline-flex items-center font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
                    onClick={(e) => {
                      if (!image.projectSlug) {
                        e.preventDefault();
                      }
                      onClose();
                    }}
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-neutral-600 dark:bg-neutral-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="relative flex-1 overflow-y-auto">
              <motion.div
                layoutId={`description-${image.title}-${id}`}
                className="p-4 text-sm text-neutral-600 dark:text-neutral-400 space-y-8"
              >
                <div className="space-y-2">
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 font-medium uppercase tracking-wider">Overview</p>
                  <p>{image.overview}</p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 font-medium uppercase tracking-wider">Technical Details</p>
                  <p>{image.technicalDetails.description}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    {image.technicalDetails.bulletPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 font-medium uppercase tracking-wider">Impact</p>
                  <p>{image.impact.description}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    {image.impact.bulletPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <div className="sticky bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-neutral-900 to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
); 

TimelineCard.displayName = "TimelineCard"; 