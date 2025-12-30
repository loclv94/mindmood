"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  credentials: string;
  imageUrl: string;
  imageAlt: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "In a world where mental health is increasingly recognized as a vital aspect of overall well-being, mindmood.com stands out as a beacon of support, offering a unique approach that embraces and celebrates your sexual identity and preferences.",
    name: "Wendy Haggerty",
    title: "MindMood COO and Founder",
    credentials: "LMFT, CST, CSTS, CHT",
    imageUrl:
      "https://c.animaapp.com/mjr46i29PMq8a8/assets/wendy-haggerty-profile.jpg",
    imageAlt: "Wendy Haggerty profile picture",
  },
  {
    quote: "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
    name: "Wendy Haggerty",
    title: "MindMood COO and Founder",
    credentials: "LMFT, CST, CSTS, CHT",
    imageUrl:
      "https://c.animaapp.com/mjr46i29PMq8a8/assets/wendy-haggerty-profile.jpg",
    imageAlt: "Wendy Haggerty profile picture",
  },
  {
    quote: "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
    name: "Wendy Haggerty",
    title: "MindMood COO and Founder",
    credentials: "LMFT, CST, CSTS, CHT",
    imageUrl:
      "https://c.animaapp.com/mjr46i29PMq8a8/assets/wendy-haggerty-profile.jpg",
    imageAlt: "Wendy Haggerty profile picture",
  },
  {
    quote:
      "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
    name: "Wendy Haggerty",
    title: "MindMood COO and Founder",
    credentials: "LMFT, CST, CSTS, CHT",
    imageUrl:
      "https://c.animaapp.com/mjr46i29PMq8a8/assets/wendy-haggerty-profile.jpg",
    imageAlt: "Wendy Haggerty profile picture",
  },
  {
    quote: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    name: "Wendy Haggerty",
    title: "MindMood COO and Founder",
    credentials: "LMFT, CST, CSTS, CHT",
    imageUrl:
      "https://c.animaapp.com/mjr46i29PMq8a8/assets/wendy-haggerty-profile.jpg",
    imageAlt: "Wendy Haggerty profile picture",
  },
];

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTestimonial = testimonials[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-white py-12.5" suppressHydrationWarning>
      <Container>
        {/* Quote Section with Navigation */}
        <div className="relative flex items-center justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handlePrevious();
            }}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors z-20 cursor-pointer bg-transparent border-none p-2 pointer-events-auto"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Profile Section */}
          <div>
            <blockquote
              key={currentIndex}
              className="text-slate-700 italic text-lg md:text-xl text-center px-12 font-museo_sans_rounded pointer-events-none"
            >
              &ldquo;{currentTestimonial.quote}&rdquo;
            </blockquote>

            <div
              key={`profile-${currentIndex}`}
              className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
            >
              {/* Profile Picture */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 bg-slate-200 flex items-center justify-center">
                <Image
                  src={currentTestimonial.imageUrl}
                  alt={currentTestimonial.imageAlt}
                  width={128}
                  height={128}
                  className="object-cover rounded-full"
                  sizes="(max-width: 128px) 96px, 128px"
                  key={currentIndex}
                  unoptimized
                />
              </div>

              {/* Attribution */}
              <div className="text-center md:text-left">
                <p className="text-slate-700 font-semibold text-base md:text-lg font-museo_sans_rounded">
                  {currentTestimonial.name}
                </p>
                <p className="text-slate-700 text-sm md:text-base font-museo_sans_rounded">
                  {currentTestimonial.title}
                </p>
                <p className="text-slate-600 text-xs md:text-sm font-museo_sans_rounded">
                  {currentTestimonial.credentials}
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors z-20 cursor-pointer bg-transparent border-none p-2 pointer-events-auto"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </Container>
    </div>
  );
};
