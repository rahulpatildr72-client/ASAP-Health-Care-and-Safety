"use client";

import { useState, type FormEvent } from "react";
import { Loader2, XCircle } from "lucide-react";
import { COURSES } from "@/data/courses";
import { WEB3FORMS_KEY } from "@/data/site";

const inputClass =
  "w-full border-b border-[rgba(0,0,0,0.12)] bg-transparent py-3 text-[#141414] placeholder:text-[#1B2559]/40 outline-none transition-colors focus:border-[#3B5BDB]";

type Status = "idle" | "submitting" | "success" | "error";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [mode, setMode] = useState("Onsite");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const next: Record<string, string> = {};
    if (!String(data.get("name")).trim()) next.name = "Please enter your name.";
    const email = String(data.get("email")).trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email.";
    const phone = String(data.get("phone")).trim();
    if (!/^[+\d][\d\s()-]{7,}$/.test(phone)) next.phone = "Please enter a valid phone number.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;

    setStatus("submitting");
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", `Training Enquiry — ${data.get("course")}`);
    data.append("preferred_mode", mode);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
        setMode("Onsite");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-[rgba(0,0,0,0.08)] bg-white p-12 text-left">
        <span className="font-mono text-xs font-semibold text-[#3B5BDB]">CONFIRMATION</span>
        <h3 className="mt-3 font-display text-2xl font-bold text-[#141414]">Enquiry Sent Successfully</h3>
        <p className="mt-4 max-w-md leading-relaxed text-[#1B2559]/80">
          Thank you for reaching out. Our team will review your requirements and respond shortly with a training proposal.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="group link-underline mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[#141414] hover:text-[#3B5BDB]"
        >
          Send Another Enquiry <span className="inline-block text-[#3B5BDB] transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-[rgba(0,0,0,0.08)] bg-white p-8 sm:p-12"
    >
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-[#1B2559]/70">Full Name *</span>
          <input name="name" required placeholder="Your full name" className={inputClass} autoComplete="name" />
          {errors.name && <span className="mt-1 block text-xs text-red-600">{errors.name}</span>}
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-[#1B2559]/70">Company Name</span>
          <input name="company" placeholder="Your organization" className={inputClass} autoComplete="organization" />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-[#1B2559]/70">Email *</span>
          <input name="email" type="email" required placeholder="you@company.com" className={inputClass} autoComplete="email" />
          {errors.email && <span className="mt-1 block text-xs text-red-600">{errors.email}</span>}
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-[#1B2559]/70">Phone *</span>
          <input name="phone" type="tel" required placeholder="+91 ..." className={inputClass} autoComplete="tel" />
          {errors.phone && <span className="mt-1 block text-xs text-red-600">{errors.phone}</span>}
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-[#1B2559]/70">Program</span>
          <select name="course" className={`${inputClass} bg-white cursor-pointer`} defaultValue={COURSES[0].title}>
            {COURSES.map((course) => (
              <option key={course.slug} value={course.title}>
                {course.title}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-[#1B2559]/70">Headcount</span>
          <input name="participants" type="number" min="1" placeholder="e.g. 25" className={inputClass} />
        </label>
        <fieldset className="sm:col-span-2">
          <legend className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[#1B2559]/70">
            Training Mode
          </legend>
          <div className="flex flex-wrap gap-4">
            {["Onsite", "Online", "Classroom"].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                aria-pressed={mode === m}
                className={`text-xs uppercase tracking-widest px-4 py-2 font-medium border transition-colors ${
                  mode === m
                    ? "border-[#3B5BDB] bg-[#3B5BDB] text-white"
                    : "border-[rgba(0,0,0,0.12)] text-[#1B2559]/80 hover:border-[#3B5BDB] hover:text-[#3B5BDB]"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </fieldset>
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-[#1B2559]/70">Details</span>
          <textarea
            name="message"
            rows={3}
            placeholder="Tell us about your location, preferred dates, or specific requirements..."
            className={inputClass}
          />
        </label>
      </div>

      {status === "error" && (
        <p className="mt-6 flex items-center gap-2 border border-red-200 bg-red-50 p-4 text-xs text-red-700">
          <XCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <div className="mt-10 border-t border-[rgba(0,0,0,0.08)] pt-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group link-underline inline-flex items-center gap-1.5 text-base font-semibold text-[#141414] hover:text-[#3B5BDB] disabled:opacity-50"
        >
          {status === "submitting" ? (
            <>
              Sending <Loader2 className="h-4 w-4 animate-spin text-[#3B5BDB]" aria-hidden="true" />
            </>
          ) : (
            <>
              Submit Request <span className="inline-block text-[#3B5BDB] transition-transform duration-300 group-hover:translate-x-1">→</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
