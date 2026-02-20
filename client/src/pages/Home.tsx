/**
 * MIKE Events India - Homepage
 * Design Philosophy: Neo-Brutalism with Warmth
 * - Bold structure with thick borders and modular blocks
 * - Warm earth tones: Forest, Terracotta, Mustard, Coral
 * - Hand-drawn accents and organic shapes
 * - Energetic interactions with tactile feedback
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  Award,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  Heart,
  Phone,
  Mail,
  MessageCircle
} from "lucide-react";
import { useEffect, useState } from "react";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoTestimonialsSection from "@/components/VideoTestimonialsSection";
import IndustryExpertise from "@/components/IndustryExpertise";
import EventProcess from "@/components/EventProcess";
import BlogPreview from "@/components/BlogPreview";
import TrustSignals from "@/components/TrustSignals";
import SEOHead from "@/components/SEOHead";
import MobileMenu from "@/components/MobileMenu";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ClientLogos from "@/components/ClientLogos";
import PortfolioGallery from "@/components/PortfolioGallery";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "@/components/CountUp";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Trigger stats animation when scrolled into view
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setStatsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }

      // Remove hash from URL without reloading
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  }, []);

  const services = [
    {
      title: "Association Management",
      description: "Comprehensive support for professional associations to achieve their goals through expert planning and execution.",
      icon: Users,
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Conference Management",
      description: "End-to-end conference planning from intimate gatherings to large-scale international events.",
      icon: Calendar,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      title: "Meeting Management",
      description: "Strategic corporate meeting planning that drives results and fosters meaningful connections.",
      icon: Target,
      gradient: "from-orange-600 to-red-500"
    },
    {
      title: "Exhibition Management",
      description: "Create impactful exhibition experiences that showcase your brand and engage your audience.",
      icon: TrendingUp,
      gradient: "from-orange-700 to-orange-800"
    },
    {
      title: "Incentive Travel",
      description: "Reward your team with unforgettable travel experiences that inspire and motivate.",
      icon: Award,
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Consulting Services",
      description: "Expert guidance and strategic planning to elevate your event management capabilities.",
      icon: Sparkles,
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const stats = [
    { value: "10+", label: "Years Excellence", icon: Award },
    { value: "800+", label: "Successful Events", icon: Calendar },
    { value: "200+", label: "Happy Clients", icon: Heart },
    { value: "50+", label: "Team Members", icon: Users }
  ];

  const whyChooseUs = [
    {
      title: "End-to-End Solutions",
      description: "From conception to post-event reporting, we handle every detail of your event journey.",
      icon: CheckCircle2
    },
    {
      title: "Technology-Driven",
      description: "Leveraging cutting-edge event management platforms for seamless execution.",
      icon: Zap
    },
    {
      title: "Transparent Communication",
      description: "Real-time updates and clear communication throughout your event lifecycle.",
      icon: MessageCircle
    },
    {
      title: "24/7 Dedicated Support",
      description: "Our team is always available to ensure your event runs flawlessly.",
      icon: Phone
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <SEOHead />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
      {/* Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-orange-500/5 border-b border-gray-800' : 'bg-gray-950/80 backdrop-blur-sm'
          }`}
      >
        <div className="container mx-auto px-4 py-4" >
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/50">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white leading-none">MIKE Events</h1>
                <p className="text-xs text-orange-400">Together We Make Magic</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-orange-500 transition-colors font-medium">Services</a>
              <a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors font-medium">About Us</a>
              <a href="#why-us" className="text-gray-300 hover:text-orange-500 transition-colors font-medium">Why Us</a>
              <a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors font-medium">Contact Us</a>
            </div>

            <div className="flex items-center gap-4">
              <Button
                className="hidden md:block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Consultation
              </Button>
              <MobileMenu />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/fRgK4R2Z1mKn604jLqEOi7/sandbox/1ldiWZt6ZUFo8J5NDCJOr6-img-1_1770452833000_na1fn_aGVyby1jb25mZXJlbmNlLW1haW4.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZlJnSzRSMloxbUtuNjA0akxxRU9pNy9zYW5kYm94LzFsZGlXWnQ2WlVGbzhKNU5EQ0pPcjYtaW1nLTFfMTc3MDQ1MjgzMzAwMF9uYTFmbl9hR1Z5YnkxamIyNW1aWEpsYm1ObExXMWhhVzQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=gNjHpyH3RSJrmuGXMBFz4QIqJ4V12caTfQVHJACLB-mxI8KfkbpzcPL2vFbiJW8-hmpZq5OKCfe0GMkYb6BOUjsenLVOOjUFrbwXMhOYRYZ-5CNoskeMmzGdH8snqC8poLCS33r1u~SIt55MxsBabUp48CcZCVdFBrGlmp~RgQWux6bDAw8d2lJFXKegzXyVAvzLrMbehWrVmEUJJW~5aibDg~JjWlMV-dAZhzrymOR~70ZZbNEYEpnzC083ZQ~dsSnyC8wjgJr4hVZ8n2R2eSpeh8eDUgH1U9w5i0cBOrIS8MLr0sSVEizBjTKHpU23LOmrc8zioSF769ChKBaVAQ__')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-900/85 to-orange-950/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-500/90 backdrop-blur-sm text-white border-0 px-6 py-2 text-md font-semibold shadow-lg">
              Together We Make Magic
            </Badge>

            <h1 className="text-white mb-6 fade-in">
              India's Premier MICE & Event Management Company
            </h1>

            <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed slide-up">
              From intimate meetings to grand conferences, we transform your vision into unforgettable experiences.
              <span className="font-bold text-orange-300"> 10+ years of excellence</span>,
              <span className="font-bold text-orange-200"> 800+ successful events</span>, and counting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 scale-in">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-2xl hover:shadow-orange-500/50 text-lg px-8 py-6 transition-all hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Consultation <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/50 hover:border-white text-lg px-8 py-6 transition-all hover:scale-105"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Work
              </Button>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center gap-8 text-white/90 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-300" />
                <span>10+ Years Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-orange-300" />
                <span>800+ Events</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-orange-300" />
                <span>200+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-900 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              const numericValue = parseInt(stat.value); // extract number
              const suffix = stat.value.includes("+") ? "+" : "";

              return (
                <div
                  key={index}
                  className="text-center transform transition-all duration-500"
                  style={{
                    opacity: statsVisible ? 1 : 0,
                    transform: statsVisible ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${index * 100}ms`,
                  }}
                >


                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CountUp
                      end={numericValue}
                      duration={2000}
                      suffix={suffix}
                      start={statsVisible}

                    />
                  </div>

                  <div className="text-white/80 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-out-cubic">
              <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 px-4 py-1 text-md ">
                About MIKE Events
              </Badge>
              <h2 className="text-white mb-6">
                We Do Magic to <span className="text-gradient-saffron">Create Connect</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                MIKE has emerged as one of the most competitive, unique, and successful professional conference organizers and event management companies in India. We are passionate, engaged, and committed to supporting our clients' objectives and delivering the best possible outcomes.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our comprehensive approach covers every aspect of event management - from initial conception through budgeting, design, and development, to marketing, execution, and post-event analysis. We don't just organize events; we create experiences that resonate and inspire.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More About Us <ArrowRight className="ml-2" />
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-2xl"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/fRgK4R2Z1mKn604jLqEOi7/sandbox/1ldiWZt6ZUFo8J5NDCJOr6-img-3_1770452826000_na1fn_dGVhbS1jb2xsYWJvcmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZlJnSzRSMloxbUtuNjA0akxxRU9pNy9zYW5kYm94LzFsZGlXWnQ2WlVGbzhKNU5EQ0pPcjYtaW1nLTNfMTc3MDQ1MjgyNjAwMF9uYTFmbl9kR1ZoYlMxamIyeHNZV0p2Y21GMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oqTp21QVc8QXXlJLTKIlOiRtXhwFfJPK~DNI7qkQs9hf1aijdpy3P3ngt5Iqeo7EypAoAPXwqmRQmhV9XNLbQz6~kAjb7~TBl2I8IVmBMMDGbV73s~-lC4FWGFDaX8uIlx2XyDktBTUZBI8JikmWCmxjNpbcRgB2B~zwu4EFWvTuemSeI3~ZfXIeQ17QUgfxdbbihhFsACQ~DB6ZBdZuDGVAaBOxv85KMO8Pta~a0EL~-bRViElJpYsi2zLZfODHMy0Xd~66P-w6Z9dJ0M4SgZ7l8SsFJtFKAxN6kumQti9QtgXpH5FkJsJaS0hjgR~r4vnnIlW8dhfy7JGMH6yM0g__"
                  alt="MIKE Events team collaboration"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 px-4 py-1 text-md font-semibold shadow-lg">
              Our Services
            </Badge>
            <h2 className="text-white mb-4">
              Comprehensive <span className="text-gradient-saffron">Event Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From associations to exhibitions, we provide end-to-end event management services tailored to your unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Card
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={index * 150} // stagger effect
                  className="modern-card modern-card-hover group overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-white font-bold mb-3 text-xl">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <Button
                      variant="ghost"
                      className="text-orange-500 hover:text-orange-400 p-0 h-auto group-hover:translate-x-2 transition-transform"
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}

          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <PortfolioGallery />

      {/* Industry Expertise Section */}
      <IndustryExpertise />

      {/* Event Planning Process Section */}
      <EventProcess />

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Why Choose <span className="text-gradient-saffron">MIKE Events</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine expertise, technology, and passion to deliver exceptional event experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  data-aos={isEven ? "fade-right" : "fade-left"}
                  data-aos-duration="900"
                  data-aos-delay={index * 120}
                  data-aos-easing="ease-out-cubic"
                  className="
        flex gap-4 p-6
        bg-gray-950
        border border-gray-800
        rounded-xl
        transition-all duration-300 ease-out
        hover:border-orange-500/50
        hover:shadow-lg hover:shadow-orange-500/10
        hover:-translate-y-1
      "
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="
          w-12 h-12
          bg-gradient-to-br from-orange-500 to-orange-600
          rounded-lg
          flex items-center justify-center
          shadow-lg
          transition-all duration-300
          group-hover:scale-110
        ">
                      <Icon className="w-6 h-6 text-white transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="text-white mb-2 font-bold transition-colors duration-300 hover:text-orange-400">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed transition-colors duration-300 hover:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Video Testimonials Section */}
      <VideoTestimonialsSection />

      {/* Trust Signals Section */}
      <TrustSignals />

      {/* Blog Preview Section */}
      <BlogPreview />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-900 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-white mb-6">
            Ready to Create Magic Together?
          </h2>
          <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
            Let's discuss your next event and transform your vision into an unforgettable experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl text-lg px-8 py-6 transition-all hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="mr-2" /> Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/50 hover:border-white text-lg px-8 py-6 transition-all hover:scale-105"
              onClick={() => window.location.href = 'mailto:info@mikevents.in'}
            >
              <Mail className="mr-2" /> Email Us
            </Button>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-8  z-50">
        <ScrollToTop />
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/50">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-none">MIKE Events</h3>
                  <p className="text-sm text-orange-400">Together We Make Magic</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                India's premier MICE & event management company
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
                <li><a href="#why-us" className="hover:text-orange-500 transition-colors">Why Choose Us</a></li>
                <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Association Management</li>
                <li>Conference Management</li>
                <li>Meeting Management</li>
                <li>Exhibition Management</li>
                <li>Incentive Travel</li>
                <li>Consulting Services</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Contact Info</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-orange-500" />
                  <span>+91 (Contact Number)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-orange-500" />
                  <span>info@mikevents.in</span>
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 mt-1 flex-shrink-0 text-orange-500" />
                  <span>WhatsApp Support</span>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    {/* X */}
                    <a
                      href="https://x.com/mikehospitality"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-gray-300 hover:text-white hover:scale-110 transition-transform duration-300"
                    >
                      <FaXTwitter size={22} />
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/mike_hospitality/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full  text-gray-300 hover:text-whitehover:scale-110 transition-transform duration-300"
                    >
                      <FaInstagram size={22} />
                    </a>

                    {/* YouTube */}
                    <a
                      href="https://www.youtube.com/channel/UCfQMVKhny-2H_0g75ZEQxSg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full  text-gray-300 hover:text-white hover:scale-110 transition-transform duration-300"
                    >
                      <FaYoutube size={22} />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} MIKE Events India. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
