import Image from "next/image";
import Link from "next/link";
import { OfferForm } from "@/components/offer-form";
import { sourceSerif } from "@/lib/fonts";
import { SITE } from "@/lib/site";

const pad = "px-[clamp(18px,5vw,48px)]";

const faqs = [
  {
    q: "Does any of this cost me anything?",
    a: "No. The offer is free, there's no commission, and we pay standard closing costs.",
  },
  {
    q: "What if the property is in rough shape?",
    a: "That's often what we're looking for. Repairs, cleanout, and anything left behind are ours to handle.",
  },
  {
    q: "Does living out of state complicate it?",
    a: "Not at all, and no trip is needed. We handle everything locally and you can sign remotely through the title company.",
  },
  {
    q: "How quickly can we close?",
    a: "Since we pay cash, the date is yours: as soon as title work allows, or months out if that suits you better.",
  },
  {
    q: "Who sees what I submit?",
    a: "Only us. We don't sell or share your information, whether or not we end up doing business.",
  },
];

const weBuy = [
  "Vacant and raw land, any acreage",
  "Dated or distressed houses",
  "Inherited property",
  "Rentals you're tired of managing",
  "Houses needing repairs you'd rather skip",
  "Property owned from out of state",
];

const comparison = [
  ["Repairs", "None", "Usually"],
  ["Showings", "None", "Ongoing"],
  ["Commission", "$0", "5-6%"],
  ["Closing date", "Yours", "Lender's"],
  ["Fall-through risk", "None", "Real"],
];

export default function Home() {
  return (
    <>
      <header className={`border-b-2 border-ink ${pad}`}>
        <div className="flex items-center py-4">
          <Link
            href="/"
            className="flex items-center gap-[11px] text-black no-underline hover:text-black"
          >
            <Image
              src="/logo-mark.png"
              alt=""
              width={44}
              height={44}
              className="block size-11 flex-none"
              priority
            />
            <span className={`${sourceSerif.className} wordmark text-[22px] tracking-[0.02em] text-black`}>
              Cumberland Acre
            </span>
          </Link>
        </div>
      </header>

      <main>
        <section
          className={`mx-auto grid max-w-[1240px] items-center gap-[clamp(28px,4vw,60px)] pt-[clamp(40px,6vw,76px)] pb-[clamp(36px,5vw,56px)] ${pad} lg:grid-cols-2`}
        >
          <div>
            <h1 className={`${sourceSerif.className} mb-[26px] text-[clamp(36px,5.4vw,60px)] font-normal leading-[1.1] tracking-[-0.015em] text-pretty`}>
              We buy land and houses in Middle Tennessee exactly as they are
              and pay with cash.
            </h1>
            <p className="mb-[18px] max-w-[34em] text-[clamp(17px,1.6vw,19px)] leading-[1.7] text-copy text-pretty">
              If a postcard from us landed in your mailbox, it&apos;s because
              we&apos;re interested in the area you own in. We&apos;re a small,
              locally based company, not a call center and not a national chain.
              This region is our home, and we&apos;d like to see it stay a place
              worth living in.
            </p>
            <p className="mb-[30px] max-w-[34em] text-[clamp(17px,1.6vw,19px)] leading-[1.7] text-copy text-pretty">
              There&apos;s no cost to hearing a number, and no obligation once
              you have it. If the timing isn&apos;t right, keep our information
              for whenever it is.
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#offer"
                className="inline-flex min-h-12 items-center bg-ink px-6 py-3.5 text-base font-semibold text-white no-underline hover:bg-moss hover:text-white"
              >
                Request a free offer
              </a>
              <span className="text-base text-copy">
                or call us at{" "}
                <a href={SITE.phoneHref} className="font-semibold">
                  {SITE.phoneDisplay}
                </a>
              </span>
            </div>
          </div>

          <div className="relative min-h-[320px] w-full aspect-[4/5] border border-rule">
            <Image
              src="/hero.webp"
              alt="A white farmhouse in rolling Middle Tennessee hills at sunrise"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="border-y border-rule bg-sage">
          <div
            className={`mx-auto grid max-w-[880px] grid-cols-2 gap-x-7 gap-y-[18px] py-[26px] sm:grid-cols-3 lg:grid-cols-5 ${pad}`}
          >
            {[
              ["As-is", "No repairs or cleanout"],
              ["Cash", "No financing to fall through"],
              ["No commission", "You sell direct to us"],
              ["Your timeline", "You name the closing date"],
              ["Local", "Owners who live here"],
            ].map(([title, copy]) => (
              <div key={title} className="text-[15.5px] leading-[1.45]">
                <strong className={`${sourceSerif.className} mb-0.5 block text-[17px] font-semibold`}>
                  {title}
                </strong>
                <span className="text-muted">{copy}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={`mx-auto max-w-[880px] py-[clamp(44px,6vw,72px)] ${pad}`}>
          <h2 className={`${sourceSerif.className} mb-2 text-[clamp(27px,3.4vw,38px)] font-normal tracking-[-0.015em]`}>
            How it works
          </h2>
          <div className="mt-[30px] grid gap-[30px] sm:grid-cols-3">
            {[
              [
                "Step one",
                "You send the address",
                "The form below takes about two minutes. No photos, no paperwork, no tidying up first.",
              ],
              [
                "Step two",
                "We do our homework",
                "We research the property, visit it if you'd like, and then call with a plain cash number and how we arrived at it.",
              ],
              [
                "Step three",
                "You decide",
                "Close at a local title company on the date you choose. No commission taken out, and closing costs are on us.",
              ],
            ].map(([step, title, copy]) => (
              <div key={step} className="border-t-2 border-ink pt-3.5">
                <div className="mb-2 text-xs tracking-[0.18em] text-moss uppercase">
                  {step}
                </div>
                <h3 className={`${sourceSerif.className} mb-2 text-xl font-semibold`}>{title}</h3>
                <p className="m-0 text-base leading-[1.65] text-copy">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`pb-[clamp(44px,6vw,72px)] ${pad}`}>
          <div className="mx-auto max-w-[1240px]">
            <div className="relative min-h-[200px] w-full aspect-[21/9] border border-rule">
              <Image
                src="/reno-house.webp"
                alt="A farmhouse mid-renovation with a new porch frame"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <p className={`${sourceSerif.className} mt-3.5 max-w-[40em] text-[clamp(17px,1.6vw,19px)] leading-[1.6] text-copy`}>
              We&apos;re the ones doing the work afterward: new roof, new porch,
              whatever the place needs. That&apos;s why we can take it on in
              whatever condition you&apos;re leaving it.
            </p>
          </div>
        </section>

        <section id="offer" className="scroll-mt-6 border-t border-rule bg-sage">
          <div
            className={`relative mx-auto max-w-[700px] py-[clamp(44px,6vw,80px)] ${pad}`}
          >
            <OfferForm />
          </div>
        </section>

        <section
          className={`mx-auto grid max-w-[880px] gap-[clamp(30px,4vw,56px)] py-[clamp(44px,6vw,72px)] md:grid-cols-2 ${pad}`}
        >
          <div>
            <h2 className={`${sourceSerif.className} mb-5 text-[clamp(25px,3vw,33px)] font-normal tracking-[-0.015em]`}>
              What we buy
            </h2>
            <ul className="m-0 list-none p-0">
              {weBuy.map((item) => (
                <li
                  key={item}
                  className="border-b border-rule py-3 text-[16.5px] text-copy"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="relative mt-6 min-h-[200px] w-full aspect-[4/3] border border-rule">
              <Image
                src="/hayfield.webp"
                alt="Hay bales in a Middle Tennessee field"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className={`${sourceSerif.className} mb-5 text-[clamp(25px,3vw,33px)] font-normal tracking-[-0.015em]`}>
              Selling to us vs. listing
            </h2>
            <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
              <div className="min-w-[28rem] text-[15.5px]">
                <div className="grid grid-cols-[1.1fr_1fr_1fr] gap-2.5 border-b-2 border-ink py-2.5 text-[11.5px] tracking-[0.14em] text-label uppercase">
                  <span />
                  <span>Us</span>
                  <span>Agent</span>
                </div>
                {comparison.map(([label, us, agent]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[1.1fr_1fr_1fr] gap-2.5 border-b border-rule py-3"
                  >
                    <span className="text-muted">{label}</span>
                    <span className="font-semibold">{us}</span>
                    <span className="text-muted">{agent}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-rule bg-sage">
          <div className={`mx-auto max-w-[880px] py-[clamp(44px,6vw,72px)] ${pad}`}>
            <h2 className={`${sourceSerif.className} mb-[26px] text-[clamp(25px,3vw,34px)] font-normal tracking-[-0.015em]`}>
              Questions we get most often
            </h2>
            {faqs.map((faq, index) => (
              <details
                key={faq.q}
                className={`border-t border-rule-strong py-4 ${
                  index === faqs.length - 1 ? "border-b" : ""
                }`}
              >
                <summary className={`${sourceSerif.className} faq-summary text-[19px] font-semibold`}>
                  {faq.q}
                </summary>
                <p className="mt-[11px] text-[16.5px] leading-[1.7] text-copy">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className={`border-t-2 border-ink py-[clamp(30px,4vw,48px)] ${pad}`}>
        <div className="mx-auto flex max-w-[880px] flex-wrap items-baseline justify-between gap-x-10 gap-y-[18px]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-mark.png"
                alt=""
                width={34}
                height={34}
                className="block size-[34px] flex-none"
              />
              <span className={`${sourceSerif.className} wordmark text-[19px]`}>
                Cumberland Acre
              </span>
            </div>
            <p className="mt-1.5 text-[14.5px] text-muted">
              Buying and improving property across Middle Tennessee.
            </p>
          </div>
          <div className="grid gap-1 text-[15.5px]">
            <a href={SITE.phoneHref} className="font-semibold no-underline">
              {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="no-underline">
              {SITE.email}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
