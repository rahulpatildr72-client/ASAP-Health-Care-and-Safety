import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { CONTACT, SITE_NAME } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, and protect your information.`,
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-peri-wash-soft pb-16 pt-36 sm:pt-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Legal"
            titleLight="Privacy"
            title="Policy"
            subtitle={`How ${SITE_NAME} collects, uses, and safeguards your personal information.`}
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal>
            <div className="prose prose-navy max-w-none space-y-8 text-navy-700 leading-relaxed">
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900">1. Information We Collect</h2>
                <p className="mt-3">
                  We collect information you provide directly to us when requesting training, booking a course,
                  submitting an inquiry, or contacting us. This includes your name, company name, email address,
                  phone number, preferred training course, participant count, and message details.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900">2. How We Use Your Information</h2>
                <p className="mt-3">
                  We use the information collected to process your training inquiries, provide course details and group quotes,
                  coordinate training schedules, issue course completion certificates, and communicate with you regarding your request.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900">3. Data Protection & Sharing</h2>
                <p className="mt-3">
                  We do not sell, rent, or trade your personal information to third parties. We take appropriate technical
                  and organizational measures to protect your personal data against unauthorized access, loss, or misuse.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900">4. Contact Us</h2>
                <p className="mt-3">
                  If you have any questions regarding this Privacy Policy or wish to update your information, please contact us at:
                </p>
                <ul className="mt-3 space-y-1 font-medium text-navy-900">
                  <li>Email: {CONTACT.email}</li>
                  <li>Phone: {CONTACT.phone}</li>
                  <li>Address: {CONTACT.location}</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
