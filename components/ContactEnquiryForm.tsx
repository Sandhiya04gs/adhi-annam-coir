"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

const COMPANY_EMAIL = "hello@adhiannamcoir.com";

export default function ContactEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") || "");
    const lastName = String(formData.get("lastName") || "");
    const company = String(formData.get("company") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const product = String(formData.get("product") || "");
    const message = String(formData.get("message") || "");
    const name = `${firstName} ${lastName}`.trim();
    const subject = encodeURIComponent(`Product Enquiry - ${name}`);
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

Thank you.`,
    );

    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div>
      <h2 className="text-xl font-medium text-[#3e4930]">
        New Website Enquiry
      </h2>
      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-1.5 block text-sm">
              First name <span aria-hidden="true">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              className="w-full border border-[#d6d6d0] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#809544]"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="mb-1.5 block text-sm">
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              className="w-full border border-[#d6d6d0] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#809544]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="product" className="mb-1.5 block text-sm">
            Products <span aria-hidden="true">*</span>
          </label>
          <select
            id="product"
            name="product"
            required
            defaultValue=""
            className="w-full border border-[#d6d6d0] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#809544]"
          >
            <option value="" disabled>
              Select a product
            </option>
            {products.map((product) => (
              <option value={product.name} key={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm">
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full border border-[#d6d6d0] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#809544]"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="w-full border border-[#d6d6d0] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#809544]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm">
            Company name <span aria-hidden="true">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className="w-full border border-[#d6d6d0] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#809544]"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm">
            Please fill your requirement <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full resize-y border border-[#d6d6d0] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#809544]"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-[#829743] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#60752f]"
        >
          Submit <ArrowUpRight size={16} aria-hidden="true" />
        </button>
        <p className="text-sm text-[#666]">
          Your info is kept confidential and never shared with third parties.
        </p>
        {submitted && (
          <p role="status" className="text-sm text-[#4f713b]">
            Your email application should open with your enquiry details. If it
            does not, email us at{" "}
            <a className="underline" href={`mailto:${COMPANY_EMAIL}`}>
              {COMPANY_EMAIL}
            </a>
            .
          </p>
        )}
      </form>
    </div>
  );
}
