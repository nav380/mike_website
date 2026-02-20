/**
 * Video Testimonials Section Component
 * Design Philosophy: Neo-Brutalism with Warmth
 * Features: Vertical video testimonials in mobile-first format
 */

import { Badge } from "@/components/ui/badge";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

interface VideoTestimonial {
  id: number;
  title: string;
  clientName: string;
  company: string;
  videoUrl: string;
  thumbnailUrl: string;
}

// Placeholder video testimonials - user will replace with actual videos
const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    title: "Healthcare Conference Success",
    clientName: "Dr. Rajesh Kumar",
    company: "Indian Medical Association",
    videoUrl: "/videos/t1.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=700&fit=crop"
  },
  {
    id: 2,
    title: "Corporate Event Excellence",
    clientName: "Priya Sharma",
    company: "Tech Solutions India",
    videoUrl: "/videos/t2.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=700&fit=crop"
  },
  {
    id: 3,
    title: "Exhibition Management",
    clientName: "Amit Patel",
    company: "Leading Pharma Company",
    videoUrl: "/videos/t3.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=700&fit=crop"
  },
  {
    id: 4,
    title: "International Conference",
    clientName: "Sarah Johnson",
    company: "Global Tech Corp",
    videoUrl: "/videos/t4.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=700&fit=crop"
  },
  {
    id: 5,
    title: "Incentive Travel Program",
    clientName: "Vikram Singh",
    company: "Finance Corporation",
    videoUrl: "/videos/t5.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=700&fit=crop"
  },
  {
    id: 6,
    title: "Association Annual Meeting",
    clientName: "Meera Reddy",
    company: "National Engineering Association",
    videoUrl: "/videos/t6.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=700&fit=crop"
  },
  {
    id: 7,
    title: "Product Launch Event",
    clientName: "Rahul Desai",
    company: "NextGen Tech",
    videoUrl: "/videos/t7.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=700&fit=crop"
  },
  {
    id: 8,
    title: "Team Building Retreat",
    clientName: "Anita Kapoor",
    company: "Creative Minds",
    videoUrl: "/videos/t8.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=400&h=700&fit=crop"
  },
  {
    id: 9,
    title: "Annual Gala Night",
    clientName: "Vivek Malhotra",
    company: "Luxury Events Co.",
    videoUrl: "/videos/t9.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=700&fit=crop"
  },
  {
    id: 10,
    title: "Charity Fundraiser Event",
    clientName: "Sonal Mehta",
    company: "Helping Hands Foundation",
    videoUrl: "/videos/t10.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=700&fit=crop"
  }
];


export default function VideoTestimonialsSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handlePlayPause = (id: number) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingVideo === id) {
      video.pause();
      setPlayingVideo(null);
    } else {
      // Pause all other videos
      Object.values(videoRefs.current).forEach(v => v?.pause());
      video.play();
      setPlayingVideo(id);
    }
  };

  return (
    <section id="video-testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-400 text-white border-2 border-gray-800 px-3 py-1">
            Video Testimonials
          </Badge>
          <h2 className="text-white mb-4">
            Hear From Our <span className="text-orange-500">Happy Clients</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch what our clients have to say about their experience working with MIKE Events.
          </p>
        </div>

        {/* Vertical Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
          {videoTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative group"
            >
              {/* Video Container - Vertical Format (9:16 aspect ratio) */}
              <div className="relative aspect-[9/16] bg-gradient-to-r from-orange-500 to-orange-600 border border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                {testimonial.videoUrl ? (
                  <>
                    <video
                      ref={(el) => { videoRefs.current[testimonial.id] = el; }}
                      className="w-full h-full object-cover"
                      poster={testimonial.thumbnailUrl}
                      playsInline
                      onEnded={() => setPlayingVideo(null)}
                    >
                      <source src={testimonial.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Play/Pause Overlay */}
                    <button
                      onClick={() => handlePlayPause(testimonial.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                      aria-label={playingVideo === testimonial.id ? "Pause video" : "Play video"}
                    >
                      {playingVideo === testimonial.id ? (
                        <div className="w-16 h-16 bg-orange-500/90 border-2 border-orange-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Pause className="w-8 h-8 text-white" />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-orange-500/90 border-2 border-orange-600 flex items-center justify-center">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      )}
                    </button>
                  </>
                ) : (
                  // Placeholder when no video URL is provided
                  <div className="w-full h-full relative">
                    <img
                      src={testimonial.thumbnailUrl}
                      alt={testimonial.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-orange-500/90 border-2 border-orange-600 flex items-center justify-center mx-auto mb-3">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                        <p className="text-white text-sm font-bold">Video Coming Soon</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Client Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h4 className="text-white font-bold text-sm mb-1 font-['Archivo']">
                    {testimonial.clientName}
                  </h4>
                  <p className="text-white/80 text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Title Below Video */}
              <div className="mt-3 text-center">
                <p className="text-white font-semibold text-sm">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions for User */}
      
      </div>
    </section>
  );
}
