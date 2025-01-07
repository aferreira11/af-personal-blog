"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { TimelineImage } from "@/utils/timeline-data";

interface TimelineEntryProps {
  description: string;
  images?: TimelineImage[];
  onImageClick: (image: TimelineImage) => void;
  id: string;
}

export function TimelineEntry({ description, images, onImageClick, id }: TimelineEntryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      {images && images.length > 0 && (
        <div>
          {images.map((image) => (
            <motion.div
              layoutId={`card-${image.title}-${id}`}
              key={`card-${image.title}-${id}`}
              onClick={() => onImageClick(image)}
              className="relative cursor-pointer group"
            >
              <motion.div layoutId={`image-${image.title}-${id}`} className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-sm font-medium">View details</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      )}
      <div className="flex flex-col justify-center md:justify-start space-y-4">
        {images && images.length > 0 && images.map((image) => (
          <div key={`text-${image.title}`} className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                {image.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {image.description}
              </p>
            </div>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
              {description}
            </p>
            <button
              onClick={() => onImageClick(image)}
              className="group inline-flex items-center text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
            >
              View details
              <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 