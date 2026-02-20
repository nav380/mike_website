/**
 * Blog Preview Section Component
 * Design Philosophy: Neo-Brutalism with Warmth
 * SEO: Blog content for long-tail keywords and thought leadership
 */

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    title: "10 Essential Tips for Planning a Successful Corporate Conference in 2026",
    excerpt: "Discover the latest trends and best practices for organizing impactful corporate conferences that drive engagement, foster networking, and deliver measurable ROI.",
    author: "Priya Sharma",
    date: "January 15, 2026",
    readTime: "8 min read",
    category: "Conference Planning",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
    slug: "corporate-conference-planning-tips-2026"
  },
  {
    title: "MICE Industry Trends in India: What Event Planners Need to Know",
    excerpt: "Explore the evolving landscape of MICE events in India, from hybrid formats and sustainability initiatives to technology integration and attendee experience innovation.",
    author: "Rajesh Kumar",
    date: "January 10, 2026",
    readTime: "10 min read",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop",
    slug: "mice-industry-trends-india-2026"
  },
  {
    title: "How to Choose the Right Event Management Company for Your Business",
    excerpt: "A comprehensive guide to selecting an event management partner that aligns with your objectives, budget, and brand values. Learn what questions to ask and red flags to avoid.",
    author: "Amit Patel",
    date: "January 5, 2026",
    readTime: "7 min read",
    category: "Buyer's Guide",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=500&fit=crop",
    slug: "choose-event-management-company-guide"
  }
];

export default function BlogPreview() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 px-4 py-1">
            Insights & Resources
          </Badge>
          <h2 className="text-white mb-4">
            Latest from Our <span className="text-gradient-saffron">Blog</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expert insights, industry trends, and practical tips to help you plan and execute exceptional events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="modern-card modern-card-hover overflow-hidden"
            >
              {/* Featured Image */}
                <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <Badge className="absolute top-4 left-4 bg-orange-500/90 backdrop-blur-sm text-white border-0">
                  {post.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold mb-3 text-lg leading-tight hover:text-orange-400 transition-colors cursor-pointer">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Author & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs text-gray-400 font-semibold">
                      {post.author}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-orange-500 hover:text-orange-400 p-0 h-auto"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg"
          >
            View All Articles <ArrowRight className="ml-2" />
          </Button>
        </div>

        {/* SEO Content Block */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="modern-card p-8">
            <h3 className="text-white font-bold mb-4 text-2xl">
              Event Planning Resources & Expert Insights
            </h3>
            <div className="text-gray-400 space-y-4 leading-relaxed">
              <p>
                Stay ahead of the curve with MIKE Events' comprehensive resource library. Our blog features expert insights on event planning best practices, MICE industry trends, conference management strategies, and innovative event technology solutions.
              </p>
              <p>
                Whether you're planning your first corporate event or managing large-scale international conferences, our articles provide actionable advice, case studies, and industry benchmarks to help you succeed. Topics include venue selection, budget optimization, attendee engagement strategies, hybrid event management, and post-event ROI measurement.
              </p>
              <p>
                Subscribe to our newsletter to receive the latest event planning tips, industry news, and exclusive insights delivered directly to your inbox every month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
