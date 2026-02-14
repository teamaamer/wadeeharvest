"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
    signUpForUpdates: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { showToast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.comment.trim()) {
      newErrors.comment = "Comment is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      const message = formData.signUpForUpdates 
        ? "Message sent! You've been added to our updates list."
        : "Message sent successfully!";
      showToast(message);
      setFormData({ name: "", email: "", phone: "", comment: "", signUpForUpdates: false });
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Have questions or want to stay updated? Send us a message and optionally sign up for updates about our Canada-wide delivery launch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Left side - Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-surface border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Peterborough Regional Farmers Market
                    <br />
                    Saturdays and Wednesdays
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a href="mailto:info@wadeeharvest.ca" className="text-primary hover:text-primary/80 text-sm transition-colors">
                    info@wadeeharvest.ca
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="lg:col-span-2 bg-surface border border-border rounded-xl p-6 lg:p-8 shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-primary mb-4">
                  <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-muted">
                  We've received your message and will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background ${
                      errors.name ? "border-secondary" : "border-border"
                    }`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-secondary text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background ${
                      errors.email ? "border-secondary" : "border-border"
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-secondary text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium mb-2"
                >
                  Comment <span className="text-secondary">*</span>
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none ${
                    errors.comment ? "border-secondary" : "border-border"
                  }`}
                  aria-invalid={!!errors.comment}
                  aria-describedby={errors.comment ? "comment-error" : undefined}
                />
                {errors.comment && (
                  <p id="comment-error" className="text-secondary text-sm mt-1">
                    {errors.comment}
                  </p>
                )}
              </div>

              <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <input
                  type="checkbox"
                  id="signUpForUpdates"
                  name="signUpForUpdates"
                  checked={formData.signUpForUpdates}
                  onChange={handleChange}
                  className="mt-0.5 w-5 h-5 text-primary border-border rounded focus:ring-2 focus:ring-primary cursor-pointer"
                />
                <label htmlFor="signUpForUpdates" className="text-sm cursor-pointer flex-1">
                  <span className="font-semibold text-foreground">Sign up for updates</span>
                  <p className="text-muted mt-1 text-xs leading-relaxed">
                    Be the first to know when we launch Canada-wide delivery and get exclusive offers.
                  </p>
                </label>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
