import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { CONTACT, SITE_NAME } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for ${SITE_NAME} training programs and website usage.`,
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-peri-wash-soft pb-16 pt-36 sm:pt-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Legal"
            titleLight="Terms &"
            title="Conditions"
            subtitle={`Terms governing the use of the ${SITE_NAME} website and participation in our training programs.`}
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal>
            <div className="prose prose-navy max-w-none space-y-8 text-navy-700 leading-relaxed">
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900">1. Training Services</h2>
                <p className="mt-3">
                  {SITE_NAME} provides First Aid, CPR, AED, and Health & Safety training programs delivered onsite,
                  in designated classrooms, or live online. Course schedules and batch sizes are confirmed upon formal booking.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900">2. Certification</h2>
                <p className="mt-3">
                  Course completion certificates are issued to participants who successfully attend and demonstrate required practical
                  competencies during training sessions. Certification validity and terms depend on the specific program completed.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900">3. Cancellation & Rescheduling</h2>
                <p className="mt-3">
                  Corporate and group training sessions may be rescheduled by providing advance notice as agreed during program confirmation.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900">4. Contact Information</h2>
                <p className="mt-3">
                  For any inquiries regarding these terms, please contact us at:
                </p>
                <ul className="mt-3 space-y-1 font-medium text-navy-900">
                  <li>Email: {CONTACT.email}</li>
                  <li>Phone: {CONTACT.phone}</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
