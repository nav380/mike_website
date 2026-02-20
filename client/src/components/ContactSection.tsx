/**
 * Contact Section Component
 * Design Philosophy: Neo-Brutalism with Warmth
 * Features: Contact form, direct contact methods, location info
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      
      <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-6">

        {/* ================= LEFT — CONTACT FORM ================= */}
        <div className="lg:col-span-2">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-xl">
            <h3 className="text-2xl text-white mb-8 font-bold font-['Archivo']">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white font-semibold mb-2 block">
                    Your Name *
                  </label>
                  <input
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="w-full border-2 border-gray-800 focus:border-orange-500 bg-gray-950 text-white rounded-lg p-3 transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="text-white font-semibold mb-2 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="w-full border-2 border-gray-800 focus:border-orange-500 bg-gray-950 text-white rounded-lg p-3 transition"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white font-semibold mb-2 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="w-full border-2 border-gray-800 focus:border-orange-500 bg-gray-950 text-white rounded-lg p-3 transition"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="text-white font-semibold mb-2 block">
                    Company Name
                  </label>
                  <input
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="w-full border-2 border-gray-800 focus:border-orange-500 bg-gray-950 text-white rounded-lg p-3 transition"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="text-white font-semibold mb-2 block">
                  Service Interest *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => handleChange("service", e.target.value)}
                  required
                  className="w-full border-2 border-gray-800 focus:border-orange-500 bg-gray-950 text-white rounded-lg p-3 transition"
                >
                  <option value="">Select a service</option>
                  <option value="association">Association Management</option>
                  <option value="conference">Conference Management</option>
                  <option value="meeting">Meeting Management</option>
                  <option value="exhibition">Exhibition Management</option>
                  <option value="incentive">Incentive Travel</option>
                  <option value="consulting">Consulting Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-white font-semibold mb-2 block">
                  Your Message *
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                  className="w-full border-2 border-gray-800 focus:border-orange-500 bg-gray-950 text-white rounded-lg p-3 transition"
                  placeholder="Tell us about your event requirements..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>

              <p className="text-sm text-gray-400 text-center">
                We'll respond within 24 hours during business days
              </p>
            </form>
          </div>
        </div>

        {/* ================= RIGHT — DETAILS + MAP ================= */}
        <div className="space-y-8">

          {/* Contact Details */}
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 space-y-6 shadow-xl">

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold">Call Us</h4>
                <p className="text-gray-400 text-sm">Mon–Fri, 9AM–6PM IST</p>
                <a href="tel:+918586877073" className="text-orange-400 font-semibold">
                  +91 8586877073
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold">Email Us</h4>
                <p className="text-gray-400 text-sm">Quick response guaranteed</p>
                <a href="mailto:info@mikevents.in" className="text-orange-400 font-semibold">
                  info@mikevents.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold">Our Office</h4>
                <p className="text-gray-400 text-sm">
                  New Delhi, India <br />
                  Near Connaught Place
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0591621872823!2d77.17961087601311!3d28.507867689729995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ef231229f05%3A0x920c211472263e46!2sMike%20Hospitality%20LLP!5e0!3m2!1sen!2sin!4v1771398197429!5m2!1sen!2sin" width="600" height="450"   loading="lazy" ></iframe>
          </div>

        </div>
      </div>
    
    </section>
  );
}
