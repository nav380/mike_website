/**
 * Industry Expertise Section Component
 * Design Philosophy: Neo-Brutalism with Warmth
 * SEO: Showcases industry-specific expertise for targeted keywords
 */

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope,
  Laptop,
  Building2,
  GraduationCap,
  Landmark,
  TrendingUp,
  Users,
  Briefcase
} from "lucide-react";

const industries = [
  {
    name: "Healthcare & Pharma",
    icon: Stethoscope,
    description: "Medical conferences, CME programs, pharmaceutical product launches, and healthcare symposiums with regulatory compliance.",
    events: "150+ Events",
    color: "terracotta"
  },
  {
    name: "Technology & IT",
    icon: Laptop,
    description: "Tech summits, product launches, developer conferences, and innovation showcases with cutting-edge AV solutions.",
    events: "120+ Events",
    color: "mustard"
  },
  {
    name: "Corporate & Business",
    icon: Briefcase,
    description: "Annual general meetings, board meetings, corporate retreats, team building events, and leadership summits.",
    events: "180+ Events",
    color: "coral"
  },
  {
    name: "Education & Research",
    icon: GraduationCap,
    description: "Academic conferences, research symposiums, student conventions, and educational workshops across India.",
    events: "80+ Events",
    color: "forest"
  },
  {
    name: "Government & Public Sector",
    icon: Landmark,
    description: "Policy conferences, government summits, public awareness campaigns, and inter-ministerial meetings.",
    events: "60+ Events",
    color: "terracotta"
  },
  {
    name: "Finance & Banking",
    icon: TrendingUp,
    description: "Financial summits, investor conferences, banking conventions, and fintech innovation events.",
    events: "70+ Events",
    color: "mustard"
  },
  {
    name: "Manufacturing & Industry",
    icon: Building2,
    description: "Industrial exhibitions, trade shows, B2B conferences, and manufacturing excellence summits.",
    events: "90+ Events",
    color: "coral"
  },
  {
    name: "Associations & NGOs",
    icon: Users,
    description: "Professional association conferences, NGO summits, member meetings, and community engagement events.",
    events: "100+ Events",
    color: "forest"
  }
];

export default function IndustryExpertise() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-500 text-white border-2 border-gray-800 px-3 py-1">
            Industry Expertise
          </Badge>
          <h2 className="text-white mb-4">
            Trusted Across <span className="text-orange-500">Multiple Industries</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our deep industry knowledge and specialized expertise enable us to deliver tailored event solutions that meet the unique requirements of each sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <Card
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="
        modern-card
        bg-gray-900
        group
        border-2 border-gray-800
        transition-all duration-300 ease-out
        hover:translate-y-[-6px]
        hover:scale-105
        hover:bg-gray-800
        hover:border-orange-500
        hover:shadow-2xl
      "
              >
                <CardContent className="p-6">

                  {/* Icon */}
                  <div
                    className={`
            w-14 h-14
            bg-[var(--${industry.color})]
            border border-gray-800
            flex items-center justify-center
            mb-4
            transition-all duration-300 ease-out
            group-hover:scale-110
            group-hover:rotate-6
          `}
                  >
                    <Icon className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3
                    className="
            text-white font-bold mb-2 text-lg
            font-['Archivo']
            transition-all duration-300 ease-out
            group-hover:text-xl
            group-hover:text-orange-400
          "
                  >
                    {industry.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="
            text-gray-400 text-sm mb-4 leading-relaxed
            transition-all duration-300 ease-out
            group-hover:text-gray-300
          "
                  >
                    {industry.description}
                  </p>

                  {/* Badge */}
                  <div className="flex items-center gap-2">
                    <Badge
                      className="
              bg-gradient-to-r from-orange-500 to-orange-600
              text-white text-xs
              transition-all duration-300 ease-out
              group-hover:scale-110
            "
                    >
                      {industry.events}
                    </Badge>
                  </div>

                </CardContent>
              </Card>
            );
          })}


        </div>

        {/* SEO-Rich Content Block */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="modern-card bg-gray-900 px-2 py-6 border-2 border-gray-800">
            <h3 className="text-white font-bold mb-4 text-2xl font-['Archivo']">
              Industry-Specific Event Management Excellence
            </h3>
            <div className="text-gray-400 space-y-4 leading-relaxed px-2">
              <p>
                As one of India's leading event management companies, MIKE Events has successfully organized over 500+ events across diverse industries. Our industry-specific expertise ensures that every event we manage meets the unique regulatory, cultural, and professional standards of your sector.
              </p>
              <p>
                From healthcare conferences requiring CME accreditation to technology summits demanding state-of-the-art AV infrastructure, we understand the nuances that make each industry unique. Our team of specialized event planners brings deep domain knowledge, ensuring compliance, relevance, and impact.
              </p>
              <p>
                Whether you're organizing a pharmaceutical product launch, a government policy summit, or a corporate annual general meeting, our proven track record across industries guarantees seamless execution and measurable success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
