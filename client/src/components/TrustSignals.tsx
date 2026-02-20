/**
 * Trust Signals Section Component
 * Design Philosophy: Neo-Brutalism with Warmth
 * SEO: Build credibility with certifications, awards, and partnerships
 */

import { Badge } from "@/components/ui/badge";
import { Award, Shield, Star, TrendingUp, Users, Zap } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    description: "Quality management system certification for consistent service excellence"
  },
  {
    icon: Shield,
    title: "Data Security Compliant",
    description: "GDPR and data protection standards for client confidentiality"
  },
  {
    icon: Star,
    title: "Industry Recognition",
    description: "Multiple awards for event excellence and innovation"
  },
  {
    icon: TrendingUp,
    title: "98% Client Retention",
    description: "Long-term partnerships built on trust and results"
  },
  {
    icon: Users,
    title: "50+ Team Members",
    description: "Experienced professionals across all event disciplines"
  },
  {
    icon: Zap,
    title: "24/7 Support",
    description: "Round-the-clock assistance before, during, and after events"
  }
];

// Placeholder partner logos - user can replace with actual logos
const partners = [
  { name: "Partner 1", logo: "/images/sponsors/1.png" },
  { name: "Partner 2", logo: "/images/sponsors/2.png" },
  { name: "Partner 3", logo: "/images/sponsors/3.png" },
  { name: "Partner 4", logo: "/images/sponsors/4.png" },
  { name: "Partner 5", logo: "/images/sponsors/5.png" },
  { name: "Partner 6", logo: "/images/sponsors/9.png" },
  { name: "Partner 7", logo: "/images/sponsors/7.png" },
  { name: "Partner 8", logo: "/images/sponsors/11.png" }
];

export default function TrustSignals() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Achievements Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-400 text-white border-2 border-gray-800 px-3 py-1">
              Trust & Excellence
            </Badge>
            <h2 className="text-white mb-4">
              Certified for <span className="text-orange-500">Excellence</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our commitment to quality, security, and client satisfaction is backed by industry certifications and proven track record.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="modern-card bg-gray-900 p-6 text-center hover:translate-y-[-4px] transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-orange-500 border border-gray-800 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold mb-2 font-['Archivo']">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partners & Clients */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-white font-bold mb-4 text-2xl font-['Archivo']">
              Trusted by Leading Organizations
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're proud to partner with industry leaders, government bodies, and innovative companies across India.
            </p>
          </div>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-900 border border-gray-800 flex items-center justify-center hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group"
              >
                <span className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                </span>
              </div>
            ))}
          </div>

       
        </div>

        {/* SEO Content Block */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="modern-card bg-gray-900">
            <h3 className="text-white font-bold mb-4 text-2xl font-['Archivo']">
              Award-Winning Event Management Company in India
            </h3>
            <div className="text-gray-400 space-y-4 leading-relaxed">
              <p>
                MIKE Events is recognized as one of India's leading event management companies, certified for quality excellence and trusted by over 200+ organizations across diverse industries. Our ISO 9001:2015 certification demonstrates our commitment to maintaining the highest standards in event planning and execution.
              </p>
              <p>
                We prioritize data security and client confidentiality, adhering to international standards including GDPR compliance. Our 98% client retention rate speaks to the quality of our service and the lasting relationships we build with every client.
              </p>
              <p>
                With a dedicated team of 50+ event professionals and 24/7 support, we ensure your event receives the attention and expertise it deserves. From initial planning to post-event analysis, we're with you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
