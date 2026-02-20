/**
 * Client Logos Section Component
 * Infinite Auto Scrolling Marquee
 * Dark theme with saffron accents
 */

import { Badge } from "@/components/ui/badge";

export default function ClientLogos() {
  const clients = Array.from({ length: 66 }, (_, i) => ({
    name: `Client ${i + 1}`,
    logo: `/images/sponsors/${i + 1}.png`,
  }));

  // Duplicate for seamless infinite scroll
  const scrollingClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-gray-950 border-y border-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 border-0">
            Trusted By Industry Leaders
          </Badge>

          <h2 className="text-white mb-4 text-3xl md:text-4xl font-bold">
            Our <span className="text-orange-500">Prestigious</span> Clients
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Partnering with Fortune 500 companies, Government bodies, and Leading associations.
          </p>
        </div>

        {/* Infinite Scroll Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-12 animate-scroll whitespace-nowrap p-4">
            {scrollingClients.map((client, index) => (
              <div
                key={index}
                className="w-40 h-24 flex items-center justify-center bg-gray-900 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 shrink-0 hover:scale-105 transition-all"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style >{`
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
