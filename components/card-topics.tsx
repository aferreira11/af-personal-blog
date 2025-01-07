"use client";
import { cn } from "@/lib/utils";

/**
 * CardTopics Component
 * 
 * A card component that displays an image and transitions to a GIF on hover.
 * 
 * Usage Tips:
 * 1. Image & GIF Ratios:
 *    - Best results when both image and GIF have similar aspect ratios
 *    - For portrait GIFs: use gifSize="cover" or 120-150%
 *    - For landscape GIFs: try gifSize="150-200%" with gifPosition adjustments
 * 
 * 2. Position Adjustments:
 *    - gifPosition options: "center", "center top", "center bottom", "left center", etc.
 *    - For landscape GIFs: try "center top" or "center bottom" to focus on the important part
 *    - For portrait GIFs: "center" usually works well
 * 
 * 3. Size Adjustments:
 *    - gifSize options: "cover", "contain", "120%", "150%", "200%"
 *    - Larger GIFs might need bigger percentages to fill the card properly
 *    - Use larger sizes (150%+) when GIF aspect ratio doesn't match card
 * 
 * Examples:
 * - Portrait GIF (like Brad Pitt):
 *   gifPosition="center" gifSize="150%"
 * 
 * - Square GIF:
 *   gifPosition="center" gifSize="cover"
 * 
 * - Landscape GIF:
 *   gifPosition="center top" gifSize="200%"
 *   or
 *   gifPosition="center bottom" gifSize="180%"
 * 
 * Common Issues:
 * 1. GIF too small: Increase gifSize
 * 2. GIF poorly positioned: Adjust gifPosition
 * 3. GIF stretched/distorted: Try different gifSize values or find a GIF with better aspect ratio
 */
interface CardTopicsProps {
  title: string;
  description: string;
  image: string;
  hoverGif: string;
  imagePosition?: string;
  gifPosition?: string;
  gifSize?: string;
  className?: string;
}

export default function CardTopics({ 
  title, 
  description, 
  image, 
  hoverGif,
  imagePosition = 'center',
  gifPosition = 'center',
  gifSize = 'cover',
  className
}: CardTopicsProps) {
  return (
    <div className={cn(
      "w-full h-[400px] group cursor-pointer overflow-hidden relative flex flex-col justify-end rounded-2xl bg-card transition-all duration-300 hover:shadow-2xl hover:shadow-black/5",
      className
    )}>
      <div
        className="absolute inset-0 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: imagePosition,
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{
          backgroundImage: `url(${hoverGif})`,
          backgroundSize: gifSize,
          backgroundPosition: gifPosition,
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <div className="relative z-50 lg:static">
        <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-black/90 to-transparent lg:hidden" />
        
        <div className="relative p-8 lg:p-6 lg:bg-transparent lg:mt-4">
          <h1 className="font-bold text-2xl sm:text-3xl text-white lg:text-foreground mb-3 transform transition-all duration-300 group-hover:-translate-y-2">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-gray-200 lg:text-muted-foreground line-clamp-3 transform transition-all duration-300 opacity-80 group-hover:opacity-100">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
