
import Image from "next/image";
import {
  Mail,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import { getOfficialPageByPath } from "@/data/original-site";
import ContactEnquiryForm from "@/components/ContactEnquiryForm";

const COMPANY_EMAIL = "hello@adhiannamcoir.com";
const COMPANY_PHONE = "+919566294433";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Adhi+Annam+Coir+Comforts+Pvt.+Ltd.+(Sughana+coir+mattress+manufacturer+in+Coimbatore)/@10.6554761,77.0633889,18.53z/data=!4m6!3m5!1s0x3ba839d51e3fac99:0x89ca2ec4703d1734!8m2!3d10.6547786!4d77.0638518!16s%2Fg%2F11bbrj_4df";

const officialContactPage = getOfficialPageByPath("/contact");
const contactImages = officialContactPage?.images ?? [];

const facilityImages = contactImages.slice(0, 2);

export default function ContactPage() {
  return (
    <div className="contact-page bg-white text-[#343434]">

      {/* Page Heading */}
      <section className="px-5 py-9 text-center md:px-8">
        <h1 className="text-3xl font-medium text-[#3e4930] md:text-[38px]">
          Get In Touch
        </h1>
      </section>

      {/* Contact Images and Full Width Enquiry Form */}
      <section className="contact-content-grid mx-auto grid max-w-[1360px] items-start gap-10 px-5 pb-14 md:grid-cols-[0.85fr_1.15fr] md:px-8 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-12">

        {/* Facility Images - Left Side */}
        <div className="space-y-8">
          {facilityImages.map((image, index) => (
            <div
              className={`contact-facility-image relative w-full overflow-hidden bg-[#f5f5f1] ${
                index === 0 ? "aspect-[3/2]" : "aspect-[16/9]"
              }`}
              key={image.src}
            >
              <Image
                src={image.src}
                alt={
                  image.alt && !/\.(png|jpe?g|webp)$/i.test(image.alt)
                    ? image.alt
                    : index === 0
                      ? "Coir products prepared for dispatch"
                      : "Coir fibre manufacturing at Adhi Annam Coir"
                }
                fill
                preload={index === 0}
                sizes="(max-width: 700px) 100vw, 440px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Enquiry Form - Full Available Width */}
        <div className="contact-form-panel w-full min-w-0">
          <ContactEnquiryForm />
        </div>

      </section>

      {/* Location Section */}
      <section className="border-t border-[#e8e8e2] bg-[#f8f9f5] px-5 py-16 md:px-8">
        <div className="mx-auto max-w-[1200px]">

          {/* Location Heading */}
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#788b4d]">
              Visit Our Facility
            </p>

            <h2 className="text-3xl font-semibold text-[#3e4930] md:text-4xl">
              Our Location
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#777] md:text-base">
              Visit Adhi Annam Coir Comforts to explore our manufacturing
              facility and learn more about our natural coir products.
            </p>
          </div>

          {/* Location Card */}
          <div className="grid overflow-hidden rounded-2xl bg-white shadow-[0_8px_35px_rgba(0,0,0,0.07)] md:grid-cols-[0.8fr_1.2fr]">

            {/* Address Details */}
            <div className="flex flex-col justify-center p-7 md:p-10">

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#eef2e6]">
                <MapPin size={24} className="text-[#6c843c]" />
              </div>

              <h3 className="mb-4 text-xl font-semibold text-[#3e4930]">
                Adhi Annam Coir Comforts Pvt. Ltd.
              </h3>

              <p className="text-[15px] leading-7 text-[#666]">
                2/154-1, Unjavelampatti,
                <br />
                Udumalai Road, Pollachi,
                <br />
                Coimbatore - 642003,
                <br />
                Tamil Nadu, India.
              </p>

              <div className="my-7 h-px w-full bg-[#eaece5]" />

              <a
                href={`tel:${COMPANY_PHONE}`}
                className="flex items-center gap-3 text-sm text-[#555] transition hover:text-[#6c843c]"
              >
                <Phone size={18} className="text-[#6c843c]" />
                +91 95662 94433
              </a>

              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="mt-4 flex items-center gap-3 break-all text-sm text-[#555] transition hover:text-[#6c843c]"
              >
                <Mail size={18} className="shrink-0 text-[#6c843c]" />
                {COMPANY_EMAIL}
              </a>

              {/* Get Directions */}
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-[#536b35] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#405329]"
              >
                Get Directions
                <Navigation size={16} />
              </a>
            </div>

            {/* Google Maps */}
            <div className="relative min-h-[350px] md:min-h-[480px]">
              <iframe
                src="https://www.google.com/maps?q=Adhi%20Annam%20Coir%20Comforts%20Pvt.%20Ltd.,%20Pollachi&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  position: "absolute",
                  inset: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Adhi Annam Coir Comforts Factory Location"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
