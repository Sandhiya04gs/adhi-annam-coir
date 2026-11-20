
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
} from "lucide-react";

const COMPANY_EMAIL = "hello@adhiannamcoir.com";
const COMPANY_PHONE = "+919566294433";
const COMPANY_ADDRESS =
  "2/154-1, Unjavelampatti Udumalai Road, Pollachi, Coimbatore - 642003";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const company = String(formData.get("company") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const product = String(formData.get("product") || "");
    const message = String(formData.get("message") || "");

    const subject = encodeURIComponent(
      `Product Enquiry - ${name}`
    );

    const body = encodeURIComponent(
      `Hello Adhi Annam Team,

I would like to make a product enquiry.

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Product Interested In: ${product}

Message:
${message}

Thank you.`
    );

    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  return (
    <div className="bg-[#fafbf7]">
      {/* Hero */}
      <section className="bg-[#183d2b] px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#c6d9b1]">
            Contact Adhi Annam
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-7xl">
            Let&apos;s Start a
            <br />
            Conversation
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
            Have a product enquiry or business requirement?
            Connect with our team to explore natural coir solutions.
          </p>

          <p className="mt-8 text-sm text-white/60">
            Home / Contact
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Contact Details */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
            Get in Touch
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#183d2b] md:text-4xl">
            We&apos;d love to hear from you.
          </h2>

          <p className="mt-6 leading-8 text-stone-600">
            Whether you are looking for product information, bulk
            requirements or business partnerships, reach out to us.
          </p>

          <div className="mt-10 space-y-8">
            {/* Address */}
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e5eddb]">
                <MapPin className="text-green-800" size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-[#183d2b]">
                  Office Address
                </h3>

                <p className="mt-2 text-sm leading-7 text-stone-500">
                  {COMPANY_ADDRESS}
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=2%2F154-1%2C+Unjavelampatti+Udumalai+Road%2C+Pollachi%2C+Coimbatore+642003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-green-800 hover:text-green-600"
                >
                  View on Google Maps
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e5eddb]">
                <Mail className="text-green-800" size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-[#183d2b]">
                  Email Address
                </h3>

                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="mt-2 block text-sm text-stone-500 transition hover:text-green-800"
                >
                  {COMPANY_EMAIL}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e5eddb]">
                <Phone className="text-green-800" size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-[#183d2b]">
                  Phone Number
                </h3>

                <a
                  href={`tel:${COMPANY_PHONE}`}
                  className="mt-2 block text-sm text-stone-500 transition hover:text-green-800"
                >
                  +91 95662 94433
                </a>
              </div>
            </div>

            {/* Enquiries */}
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e5eddb]">
                <Clock className="text-green-800" size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-[#183d2b]">
                  Business Enquiries
                </h3>

                <p className="mt-2 text-sm leading-7 text-stone-500">
                  Contact our team for product specifications,
                  quotations and partnership discussions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Send an Enquiry
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-[#183d2b]">
            Tell us what you need
          </h2>

          <p className="mt-3 text-sm leading-7 text-stone-500">
            Share your contact details and product requirements.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-stone-700"
                >
                  Full Name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-stone-700"
                >
                  Company Name
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Enter company name"
                  className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-stone-700"
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-stone-700"
                >
                  Phone Number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  pattern="[0-9+() -]{7,20}"
                  placeholder="Enter phone number"
                  className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="product"
                className="mb-2 block text-sm font-medium text-stone-700"
              >
                Product Interested In *
              </label>

              <select
                id="product"
                name="product"
                required
                defaultValue=""
                className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
              >
                <option value="" disabled>
                  Select a product
                </option>
                <option value="Coir Packaging">Coir Packaging</option>
                <option value="Coir Filtration">Coir Filtration</option>
                <option value="Coir Interior Panels">Coir Interior Panels</option>
                <option value="Coir Scrubbers">Coir Scrubbers</option>
                <option value="Coir Horticulture">Coir Horticulture</option>
                <option value="Coir Rolls and Sheets">Coir Rolls & Sheets</option>
                <option value="Coir Erosion Control">Coir Erosion Control</option>
                <option value="Coir Mattresses">Coir Mattresses</option>
                <option value="Coir Corporate Gifts">Coir Corporate Gifts</option>
                <option value="Other Enquiry">Other Enquiry</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-stone-700"
              >
                Your Message *
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your requirements..."
                className="w-full resize-none rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#183d2b] px-7 py-4 font-semibold text-white transition hover:bg-green-800"
            >
              Send Enquiry
              <ArrowUpRight size={18} />
            </button>

            {submitted && (
              <div
                role="status"
                className="flex gap-3 rounded-xl bg-[#eaf0e3] p-4 text-sm leading-6 text-green-900"
              >
                <CheckCircle2 className="mt-1 shrink-0" size={20} />

                <p>
                  Your email application should open with your enquiry
                  details. Please review and send the email to complete
                  your enquiry. If it does not open, email us directly at{" "}
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="font-semibold underline"
                  >
                    {COMPANY_EMAIL}
                  </a>.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
              Find Our Location
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#183d2b]">
              Visit Our Office
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-500">
              Adhi Annam Coir Comforts Pvt. Ltd.,
              Unjavelampatti, Pollachi, Tamil Nadu.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-stone-200">
            <iframe
              title="Adhi Annam Coir office location in Pollachi"
              src="https://maps.google.com/maps?q=Adhi%20Annam%20Coir%20Comforts%20Pvt%20Ltd%2C%20Unjavelampatti%2C%20Pollachi%2C%20Tamil%20Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Adhi+Annam+Coir+Comforts+Pvt+Ltd+Unjavelampatti+Pollachi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-800 hover:text-green-600"
          >
            Get Directions
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#183d2b] px-6 py-20 text-center text-white">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold md:text-4xl">
          Looking for natural coir products?
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-white/70">
          Explore our product range and discover sustainable solutions
          for your business.
        </p>

        <Link
          href="/products"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#c6d9b1] px-8 py-4 font-semibold text-[#183d2b] transition hover:bg-white"
        >
          Explore Products
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}
