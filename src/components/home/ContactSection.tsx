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
    <section id="contact" className="py-16 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-muted mb-12 text-center">
          Have questions or want to stay updated? Send us a message and optionally sign up for updates about our Canada-wide delivery launch.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Contact Info */}
          <div className="space-y-8">
            <div className="bg-surface border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
              <p className="text-muted">
                Peterborough Regional Farmers Market
                <br />
                Saturdays and Wednesdays
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Email</h3>
              <p className="text-muted">info@wadeeharvest.ca</p>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-surface border border-border rounded-lg p-8">
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
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  rows={6}
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

              <div className="flex items-start gap-3 p-4 bg-background rounded-md border border-border">
                <input
                  type="checkbox"
                  id="signUpForUpdates"
                  name="signUpForUpdates"
                  checked={formData.signUpForUpdates}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary"
                />
                <label htmlFor="signUpForUpdates" className="text-sm cursor-pointer">
                  <span className="font-medium">Sign up for updates</span>
                  <p className="text-muted mt-1">
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
