"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send, XCircle } from "lucide-react";
import { COURSES } from "@/data/courses";
import { WEB3FORMS_KEY } from "@/data/site";

const inputClass =
  "w-full rounded-xl border border-navy-300/50 bg-white px-4 py-3 text-navy-900 placeholder:text-navy-400 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-200";

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
      <div className="flex flex-col items-center rounded-3xl bg-white p-12 text-center shadow-card ring-1 ring-navy-300/15">
        <CheckCircle2 className="h-14 w-14 text-brand-600" aria-hidden="true" />
        <h3 className="mt-5 font-display text-2xl font-bold text-navy-900">Enquiry Sent!</h3>
        <p className="mt-3 max-w-sm text-navy-600">
          Thank you for reaching out. Our team will get back to you shortly with a training plan.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-full bg-brand-600 px-7 py-3 font-display font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-navy-300/15 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy-800">Full Name *</span>
          <input name="name" required placeholder="Your name" className={inputClass} autoComplete="name" />
          {errors.name && <span className="mt-1 block text-sm text-red-600">{errors.name}</span>}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy-800">Company Name</span>
          <input name="company" placeholder="Your organization" className={inputClass} autoComplete="organization" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy-800">Email *</span>
          <input name="email" type="email" required placeholder="you@company.com" className={inputClass} autoComplete="email" />
          {errors.email && <span className="mt-1 block text-sm text-red-600">{errors.email}</span>}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy-800">Phone *</span>
          <input name="phone" type="tel" required placeholder="+91 ..." className={inputClass} autoComplete="tel" />
          {errors.phone && <span className="mt-1 block text-sm text-red-600">{errors.phone}</span>}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy-800">Training Requirement</span>
          <select name="course" className={inputClass} defaultValue={COURSES[0].title}>
            {COURSES.map((course) => (
              <option key={course.slug} value={course.title}>
                {course.title}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy-800">Number of Participants</span>
          <input name="participants" type="number" min="1" placeholder="e.g. 25" className={inputClass} />
        </label>
        <fieldset className="sm:col-span-2">
          <legend className="mb-1.5 block text-sm font-semibold text-navy-800">
            Preferred Training Mode
          </legend>
          <div className="flex flex-wrap gap-3">
            {["Onsite", "Online", "Classroom"].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                aria-pressed={mode === m}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-brand-600 ${
                  mode === m
                    ? "bg-brand-600 text-white shadow-md shadow-brand-600/25"
                    : "bg-brand-50 text-navy-700 ring-1 ring-navy-300/40 hover:ring-brand-300"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </fieldset>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-semibold text-navy-800">Message</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your team, location and preferred dates..."
            className={inputClass}
          />
        </label>
      </div>

      {status === "error" && (
        <p className="mt-5 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          <XCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
          Something went wrong sending your enquiry. Please try again, or contact us directly by
          phone or WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 font-display text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            Sending <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          </>
        ) : (
          <>
            Request Training <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
