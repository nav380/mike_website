/**
 * Testimonials Section Component
 * Design Philosophy: Neo-Brutalism with Warmth
 * Features: Client testimonials carousel
 */

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Conference Chair",
    company: "Indian Medical Association",
    content: "MIKE Events transformed our annual medical conference into an unforgettable experience. Their attention to detail and seamless coordination made our 1000+ attendee event run flawlessly. Highly recommended!",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "HR Director",
    company: "Tech Solutions India",
    content: "The incentive travel program organized by MIKE Events exceeded all expectations. Our team had an amazing experience, and the event truly motivated everyone. Professional service from start to finish.",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "Marketing Head",
    company: "Leading Pharma Company",
    content: "We've worked with MIKE Events on multiple exhibitions and conferences. Their technology-driven approach and transparent communication make them stand out. They truly understand our industry needs.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Event Manager",
    company: "Global Tech Corp",
    content: "MIKE Events handled our international conference in Delhi with exceptional professionalism. From speaker coordination to delegate management, everything was perfect. They made magic happen!",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-amber-500 text-white border-2 border-gray-800 px-3 py-1">
            Client Testimonials
          </Badge>
          <h2 className="text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the clients who've experienced the MIKE Events magic.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="modern-card bg-gray-900 relative">
            <CardContent className="p-8 md:p-12">
              <Quote className="w-16 h-16 text-orange-500 mb-6 opacity-50" />
              
              <div className="mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 inline-block text-amber-500 fill-[var(--mustard)]" />
                ))}
              </div>

              <p className="text-xl text-gray-400 leading-relaxed mb-8 italic">
                "{currentTestimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-orange-500 border border-gray-800 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {currentTestimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-white text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-gray-400">
                    {currentTestimonial.role}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 border-2 border-gray-800 transition-all ${
                  index === currentIndex 
                    ? 'bg-orange-500 scale-125' 
                    : 'bg-transparent hover:bg-amber-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
