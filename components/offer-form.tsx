"use client";

import { useActionState, useState } from "react";
import { submitOffer, type OfferState } from "@/app/actions/submit-offer";
import { sourceSerif } from "@/lib/fonts";
import { PROPERTY_TYPES, SITE, SOURCES, TIMELINES } from "@/lib/site";

const initialState: OfferState = { ok: false };

const fieldClass =
  `${sourceSerif.className} w-full bg-transparent px-0.5 py-2 text-[19px] text-ink outline-none`;
const labelClass =
  "grid gap-1.5 border-b border-rule-strong pb-1 focus-within:border-moss";
const legendClass =
  "text-[11.5px] tracking-[0.16em] text-label uppercase";

export function OfferForm() {
  const [formKey, setFormKey] = useState(0);

  return (
    <OfferFormInner key={formKey} onReset={() => setFormKey((key) => key + 1)} />
  );
}

function OfferFormInner({ onReset }: { onReset: () => void }) {
  const [state, formAction, pending] = useActionState(submitOffer, initialState);

  if (state.ok) {
    return (
      <div>
        <h2 className={`${sourceSerif.className} m-0 mb-3.5 text-[clamp(28px,3.6vw,40px)] font-normal tracking-tight`}>
          Received. Thank you.
        </h2>
        <p className="mb-6 text-[17px] leading-[1.7] text-copy">
          We&apos;ll follow up personally, usually the same or next day. If
          you&apos;d rather not wait, call or text{" "}
          <a href={SITE.phoneHref} className="text-moss hover:text-moss-dark">
            {SITE.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={onReset}
          className="cursor-pointer border border-rule-strong bg-transparent px-5 py-3 text-[15.5px] font-semibold text-moss"
        >
          Submit another property
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className={`${sourceSerif.className} m-0 mb-2.5 text-[clamp(28px,3.6vw,42px)] font-normal tracking-[-0.015em]`}>
        Tell us about your property
      </h2>
      <p className="mb-8 text-[16.5px] leading-[1.6] text-[#4E5A46]">
        Free, no obligation, and seen only by us.
      </p>
      <form action={formAction} className="relative grid gap-[22px]">
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Company
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <label className={labelClass}>
          <span className={legendClass}>01 · Your name</span>
          <input
            required
            name="name"
            autoComplete="name"
            className={fieldClass}
          />
        </label>

        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2">
          <label className={labelClass}>
            <span className={legendClass}>02 · Phone</span>
            <input
              required
              type="tel"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              className={fieldClass}
            />
          </label>
          <label className={labelClass}>
            <span className={legendClass}>03 · Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              className={fieldClass}
            />
          </label>
        </div>

        <label className={labelClass}>
          <span className={legendClass}>04 · Property address</span>
          <input
            required
            name="address"
            autoComplete="street-address"
            className={fieldClass}
          />
        </label>

        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2">
          <label className={`${labelClass} relative`}>
            <span className={legendClass}>05 · Type of property</span>
            <select name="type" className={`${fieldClass} appearance-none pr-6`}>
              {PROPERTY_TYPES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <SelectCaret />
          </label>
          <label className={`${labelClass} relative`}>
            <span className={legendClass}>06 · Timeline</span>
            <select
              name="timeline"
              className={`${fieldClass} appearance-none pr-6`}
            >
              {TIMELINES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <SelectCaret />
          </label>
        </div>

        <label className={labelClass}>
          <span className={legendClass}>07 · Condition notes</span>
          <textarea
            name="condition"
            rows={3}
            className={`${fieldClass} resize-y leading-normal`}
          />
        </label>

        <label className={`${labelClass} relative`}>
          <span className={legendClass}>08 · How you heard about us</span>
          <select name="source" className={`${fieldClass} appearance-none pr-6`}>
            {SOURCES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <SelectCaret />
        </label>

        {state.error ? (
          <p role="alert" className="m-0 text-[15px] leading-6 text-[#8A3B1E]">
            {state.error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={pending}
          className="mt-1.5 min-h-[50px] justify-self-start bg-moss px-[30px] py-[15px] text-[16.5px] font-semibold text-paper hover:bg-moss-dark disabled:cursor-wait disabled:opacity-80"
        >
          {pending ? "Sending…" : "Send my details"}
        </button>
      </form>
    </div>
  );
}

function SelectCaret() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-0 bottom-3 text-moss"
    >
      ▾
    </span>
  );
}
