"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Container } from "@/components/layout/container";
import { contact } from "@/data/contact";

export function ContactForm() {
  const { form, waysToWork } = contact;

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitting(true);

    // Temporary submission behaviour.
    // Replace this with your API / form endpoint when the backend is connected.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  }

  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-brand-surface"
    >
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          {/* Left: Form */}
          <div>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.18em] text-primary">
                {form.eyebrow}
              </p>

              <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
                {form.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {form.description}
              </p>
            </div>

            <div className="mt-10 rounded-[2rem] border border-border bg-background p-6 shadow-sm sm:p-8 lg:p-10">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="size-8" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-brand-heading">
                    Message received.
                  </h3>

                  <p className="mt-3 max-w-md leading-7 text-muted-foreground">
                    {form.successMessage}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      label={form.fields.name.label}
                      name="name"
                      placeholder={form.fields.name.placeholder}
                      required
                    />

                    <FormField
                      label={form.fields.email.label}
                      name="email"
                      type="email"
                      placeholder={form.fields.email.placeholder}
                      required
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      label={form.fields.organisation.label}
                      name="organisation"
                      placeholder={form.fields.organisation.placeholder}
                      required
                    />

                    <FormField
                      label={`${form.fields.phone.label} (optional)`}
                      name="phone"
                      type="tel"
                      placeholder={form.fields.phone.placeholder}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry"
                      className="mb-2 block text-sm font-medium text-brand-heading"
                    >
                      {form.fields.enquiry.label}
                    </label>

                    <select
                      id="enquiry"
                      name="enquiry"
                      required
                      defaultValue=""
                      className="h-13 w-full rounded-xl border border-border bg-background px-4 text-sm text-brand-heading outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
                    >
                      <option value="" disabled>
                        {form.fields.enquiry.placeholder}
                      </option>

                      {form.fields.enquiry.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-brand-heading"
                    >
                      {form.fields.message.label}
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder={form.fields.message.placeholder}
                      className="w-full resize-none rounded-xl border border-border bg-background px-4 py-4 text-sm leading-7 text-brand-heading outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15 disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
                  >
                    {submitting ? form.submittingLabel : form.submitLabel}

                    {!submitting && <ArrowUpRight className="size-4" />}
                  </button>

                  <p className="text-xs leading-6 text-muted-foreground">
                    By submitting this form, you agree that FavDoctor may use
                    the information you provide to respond to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right: Ways to work */}
          <div className="lg:pt-20">
            <p className="text-sm font-semibold tracking-[0.18em] text-primary">
              {waysToWork.eyebrow}
            </p>

            <div className="mt-8 divide-y divide-border border-y border-border">
              {waysToWork.items.map((item, index) => (
                <div
                  key={item.title}
                  className="group py-7 first:pt-0 last:pb-0"
                >
                  <div className="flex items-start gap-5">
                    <span className="pt-1 text-xs font-bold tracking-[0.16em] text-primary/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-5">
                        <h3 className="text-xl font-semibold tracking-tight text-brand-heading">
                          {item.title}
                        </h3>

                        <ArrowUpRight className="mt-1 size-5 shrink-0 text-primary/35 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                      </div>

                      <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-primary p-7 text-white sm:p-8">
              <p className="text-xs font-bold tracking-[0.18em] text-white/70">
                FAVDOCTOR
              </p>

              <p className="mt-4 text-xl font-medium leading-8">
                Building solutions that improve healthcare starts with
                understanding the problem.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Tell us what you're trying to solve. We'll start there.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
};

function FormField({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-brand-heading"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-13 w-full rounded-xl border border-border bg-background px-4 text-sm text-brand-heading outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/15"
      />
    </div>
  );
}