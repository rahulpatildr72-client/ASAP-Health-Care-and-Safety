"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Loader2, XCircle, ArrowRight, CircleCheck } from "lucide-react";
import { COURSES } from "@/data/courses";
import { WEB3FORMS_KEY } from "@/data/site";

const labelClass = "mb-1.5 block text-[0.875rem] font-medium text-gray-700";

type Status = "idle" | "submitting" | "success" | "error";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [mode, setMode] = useState("Onsite");
  const [errors, setErrors] = useState<Record<string, string>>({});
  // Set on the client only, so the static build and the browser render the same markup.
  const [today, setToday] = useState("");
  useEffect(() => setToday(new Date().toISOString().slice(0, 10)), []);

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
      <div className="rounded-2xl border border-gray-200 bg-white p-8 text-left shadow-md sm:p-12">
        <span className="icon-square mb-5 h-14 w-14 bg-primary-light text-primary">
          <CircleCheck className="h-7 w-7" />
        </span>
        <span className="tag-pill">Confirmation</span>
        <h3 className="mt-4 font-display text-2xl font-semibold text-gray-900">Enquiry Sent Successfully</h3>
        <p className="mt-3 max-w-md leading-[1.7] text-gray-600">
          Thank you for reaching out. Our team will review your requirements and respond shortly with a training proposal.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn btn-secondary mt-8">
          Send Another Enquiry <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md sm:p-10"
    >
      <h3 className="font-display text-[1.5rem] font-semibold text-gray-900">Training Enquiry</h3>
      <p className="mb-7 mt-1 text-[0.9rem] text-gray-600">Takes about a minute — no commitment.</p>

      <div className="grid gap-5 sm:grid-cols-2 [&>*]:min-w-0">
        <label className="block">
          <span className={labelClass}>Full Name *</span>
          <input name="name" required placeholder="Your full name" className="input" autoComplete="name" />
          {errors.name && <span className="mt-1 block text-xs text-danger">{errors.name}</span>}
        </label>
        <label className="block">
          <span className={labelClass}>Company Name</span>
          <input name="company" placeholder="Your organization" className="input" autoComplete="organization" />
        </label>
        <label className="block">
          <span className={labelClass}>Email *</span>
          <input name="email" type="email" required placeholder="you@company.com" className="input" autoComplete="email" />
          {errors.email && <span className="mt-1 block text-xs text-danger">{errors.email}</span>}
        </label>
        <label className="block">
          <span className={labelClass}>Phone *</span>
          <input name="phone" type="tel" required placeholder="+91 ..." className="input" autoComplete="tel" />
          {errors.phone && <span className="mt-1 block text-xs text-danger">{errors.phone}</span>}
        </label>
        <label className="block">
          <span className={labelClass}>Program</span>
          <select name="course" className="input min-w-0 max-w-full cursor-pointer" defaultValue={COURSES[0].title}>
            {COURSES.map((course) => (
              <option key={course.slug} value={course.title}>
                {course.title}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={labelClass}>Headcount</span>
          <input name="participants" type="number" min="1" placeholder="e.g. 25" className="input" />
        </label>
        <label className="block">
          <span className={labelClass}>Tentative Date</span>
          <input name="tentative_date" type="date" min={today} className="input cursor-pointer" />
        </label>
        <fieldset className="block">
          <legend className={labelClass}>Training Mode</legend>
          <div className="flex flex-wrap gap-2">
            {["Onsite", "Online", "Classroom"].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                aria-pressed={mode === m}
                className={`rounded-full border px-5 py-2 text-[0.875rem] font-medium transition-all ${
                  mode === m
                    ? "border-primary bg-primary text-white"
                    : "border-gray-300 bg-white text-gray-600 hover:border-primary hover:text-primary"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </fieldset>
        <label className="block sm:col-span-2">
          <span className={labelClass}>Details</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your location, preferred dates, or specific requirements..."
            className="input resize-y"
          />
        </label>
      </div>

      {status === "error" && (
        <p className="mt-5 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-xs text-danger">
          <XCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <div className="mt-7">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-primary btn-lg btn-block disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === "submitting" ? (
            <>
              Sending <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            </>
          ) : (
            <>
              Submit Request <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
        <p className="mt-3 text-center text-xs text-gray-500">We only use your details to respond to this enquiry.</p>
      </div>
    </form>
  );
}
