/**
 * Portfolio Gallery Component
 * Masonry-style photo gallery with category filters and lightbox functionality
 * Dark theme with saffron accents
 */

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

type Category = "All" | "Conferences" | "Exhibitions" | "Corporate" | "Government" | "Associations";

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
  description: string;
  client?: string;
  attendees?: string;
  year?: string;
}

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Portfolio items - replace with actual event photos
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "44th Annual function",
      category: "Conferences",
      imageUrl: "/images/events/1.png",
      description: "Inclusive growth of indian ACE industry ",
      client: "CEAMA",
      attendees: "500+",
      year: "2025"
    },
    {
      id: 2,
      title: "Kotak",
      category: "Conferences",
      imageUrl: "/images/events/4.png",
      description: " Kotak Annual Leadership Summit 2025",
      client: "Tech Industry Council",
      attendees: "700+",
      year: "2025"
    },
    {
      id: 3,
      title: "Annual Business Conference",
      category: "Conferences",
      imageUrl: "/images/events/3.png",
      description: "Annual business conference with keynote speakers and panel discussions",
      client: "ROCA",
      attendees: "300+",
      year: "2025"
    },
    {
      id: 4,
      title: "Asian Petrochemical Industry Conference",
      category: "Corporate",
      imageUrl: "/images/events/2.png",
      description: "High-profile product launch with media coverage",
      client: "APIC",
      attendees: "150",
      year: "2023"
    },
    {
      id: 5,
      title: "Kotak Annual Meet",
      category: "Associations",
      imageUrl: "/images/events/5.png",
      description: "Annual General Meeting with networking dinner",
      client: "KOTAK",
      attendees: "400+",
      year: "2025"
    },
    {
      id: 6,
      title: "Asian Petrochemical Industry Conference",
      category: "Corporate",
      imageUrl: "/images/events/6.png",
      description: "High-profile product launch with media coverage",
      client: "APIC",
      attendees: "400+",
      year: "2023"
    },
    {
      id: 7,
      title: "Kotak CFO COLLOQUIUM",
      category: "Conferences",
      imageUrl: "/images/events/7.png",
      description: "Exclusive CFO colloquium with industry leaders and financial experts",
      client: "kotak",
      attendees: "600+",
      year: "2025"
    },
    {
      id: 8,
      title: "Sleepwell Exhibition",
      category: "Exhibitions",
      imageUrl: "/images/events/8.png",
      description: "Major exhibition showcasing latest sleep technology and products",
      client: "Sleepwell",
      attendees: "500+",
      year: "2025"
    },
    {
      id: 9,
      title: "54th BATHAK Meeting",
      category: "Associations",
      imageUrl: "/images/events/9.png",
      description: "Annual meeting of the BATHAK association with workshops and networking sessions",
      client: "DB power ltd",
      attendees: "100",
      year: "2024"
    },
    {
      id: 10,
      title: "15th APFCB",
      category: "Conferences",
      imageUrl: "/images/events/10.png",
      description: "Asia-Pacific Federation For Clinical Biochemistry and Laboratory Medicine Congress",
      client: "APFCB",
      attendees: "800+",
      year: "2019"
    },
    {
      id: 11,
      title: "Indian investment summit and awards 2024",
      category: "Conferences",
      imageUrl: "/images/events/11.png",
      description: "High-profile investment summit with keynote speakers and award ceremony",
      client: "Trilegal",
      attendees: "700+",
      year: "2024"
    },
    {
      id: 12,
      title: "Haryana real estate summit 2022 and Buyer - Seller interface 2022",
      category: "Government",
      imageUrl: "/images/events/12.png",
      description: "Large-scale real estate summit with industry leaders, panel discussions, and networking opportunities",
      client: "Haryana government",
      attendees: "800+",
      year: "2022"
    },
    {
      id: 13,
      title: "Akhil Bharat Siksha Samagam 2020",
      category: "Government",
      imageUrl: "/images/events/13.png",
      description: " National education conference with workshops, keynote speakers, and student engagement activities",
      client: "HRD ministry",
      attendees: "80",
      year: "2025"
    }
  ];

  const categories: Category[] = ["All", "Conferences", "Exhibitions", "Corporate", "Government", "Associations"];

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: PortfolioItem, index: number) => {
    setSelectedImage(item);
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredItems.length 
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 px-4 py-1">
            Our Portfolio
          </Badge>
          <h2 className="text-white mb-4">
            Showcasing <span className="text-gradient-saffron">Excellence</span> in Every Event
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of successful events across conferences, exhibitions, corporate gatherings, and incentive travel programs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`
                ${selectedCategory === category 
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' 
                  : 'bg-gray-900 text-gray-300 border-gray-800 hover:border-orange-500/50 hover:text-orange-400'
                }
                transition-all duration-300
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative overflow-hidden rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 cursor-pointer bg-gray-900"
              onClick={() => openLightbox(item, index)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 text-xs">
                        {item.category}
                      </Badge>
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>

              {/* Info Bar */}
              <div className="p-4 bg-gray-900">
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  {item.attendees && <span>👥 {item.attendees}</span>}
                  {item.year && <span>📅 {item.year}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No events found in this category.</p>
          </div>
        )}

        {/* Instructions for adding photos */}
       
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-[110] w-12 h-12 bg-gray-900/80 hover:bg-orange-500 text-white rounded-full flex items-center justify-center transition-all"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
            className="absolute left-4 z-[110] w-12 h-12 bg-gray-900/80 hover:bg-orange-500 text-white rounded-full flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            className="absolute right-4 z-[110] w-12 h-12 bg-gray-900/80 hover:bg-orange-500 text-white rounded-full flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div 
            className="max-w-6xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative bg-black">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <Badge className="mb-4 bg-orange-500/20 text-orange-400 border-orange-500/30">
                    {selectedImage.category}
                  </Badge>
                  <h2 className="text-white text-2xl font-bold mb-4">{selectedImage.title}</h2>
                  <p className="text-gray-300 text-lg mb-6">{selectedImage.description}</p>
                  
                  <div className="space-y-3">
                    {selectedImage.client && (
                      <div className="flex items-start gap-3">
                        <span className="text-orange-500 font-semibold min-w-[100px]">Client:</span>
                        <span className="text-gray-400">{selectedImage.client}</span>
                      </div>
                    )}
                    {selectedImage.attendees && (
                      <div className="flex items-start gap-3">
                        <span className="text-orange-500 font-semibold min-w-[100px]">Attendees:</span>
                        <span className="text-gray-400">{selectedImage.attendees}</span>
                      </div>
                    )}
                    {selectedImage.year && (
                      <div className="flex items-start gap-3">
                        <span className="text-orange-500 font-semibold min-w-[100px]">Year:</span>
                        <span className="text-gray-400">{selectedImage.year}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800">
                  <p className="text-gray-500 text-sm">
                    Image {currentIndex + 1} of {filteredItems.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
