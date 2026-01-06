"use client";

import Image from "next/image";
import { Container } from "@/components/layouts/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface Testimonial {
  quote: string;
  name: string;
  title?: string;
  credentials?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "In a world where mental health is increasingly recognized as a vital aspect of overall well-being, mindmood.com stands out as a beacon of support, offering a unique approach that embraces and celebrates your sexual identity and preferences.",
    name: "Wendy Haggerty",
    title: "MindMood COO and Founder",
    credentials: "LMFT, CST, CSTS, CHT",
    imageUrl:
      "https://mindmood.com/wp-content/uploads/2024/03/mm-wendy-profile-2@1280x1920-180x180.jpg",
    imageAlt: "Wendy Haggerty profile picture",
  },
  {
    quote:
      "As someone who has used even crisis hotlines before, Wendy AI seems actually better than some counselors that I've talked to during emergencies. Im really grateful for an AI therapist & will be continuing to use MindMood when I don't have a therapist or really need someone to talk to.",
    name: "Pineapple Support Resource User",
  },
  {
    quote:
      "Wendy AI provides another technique to add to my mental health toolbox that I truly enjoyed. I would recommend this to anyone who desires an immediate supportive connection alongside skills to improve their mental health when they are on their own.",
    name: "Pineapple Support Resource User",
  },
  {
    quote:
      "Wendy AI wasted no time getting to the root of why the chat was being utilized! It gently asked questions to gain a deeper understanding while quickly giving a number of coping techniques and strategies. I truly enjoyed that the chat did not take much time, which makes it perfect for individuals to receive quick, skilled advice, while hearing a supportive voice. ",
    name: "Pineapple Support Resource User",
  },
];

export const TestimonialSlider = () => {
  return (
    <div className="bg-white py-12.5" suppressHydrationWarning>
      <Container>
        <div className="relative py-7.5">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".testimonial-swiper-button-prev",
              nextEl: ".testimonial-swiper-button-next",
            }}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center">
                  <blockquote className="text-brand font-extrabold italic text-lg md:text-xl text-center px-12 font-museo_sans_rounded pointer-events-none">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-6">
                    {/* Profile Picture */}
                    {testimonial.imageUrl && (
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0 bg-slate-200 flex items-center justify-center">
                        <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.imageAlt || "Profile picture"}
                          width={80}
                          height={80}
                          className="object-cover rounded-full"
                          sizes="(max-width: 128px) 80px, 80px"
                          unoptimized
                        />
                      </div>
                    )}

                    {/* Attribution */}
                    <div className="text-center md:text-left">
                      <p className="text-brand font-medium text-base md:text-lg font-museo_sans_rounded">
                        {testimonial.name}
                      </p>
                      {testimonial.title && (
                        <p className="text-brand text-sm md:text-base font-museo_sans_rounded">
                          {testimonial.title}
                        </p>
                      )}
                      {testimonial.credentials && (
                        <p className="text-slate-600 text-xs md:text-sm font-museo_sans_rounded">
                          {testimonial.credentials}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            type="button"
            aria-label="Previous testimonial"
            className="testimonial-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand transition-colors z-20 cursor-pointer bg-transparent border-none p-2 pointer-events-auto"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            type="button"
            aria-label="Next testimonial"
            className="testimonial-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand transition-colors z-20 cursor-pointer bg-transparent border-none p-2 pointer-events-auto"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </Container>
    </div>
  );
};
