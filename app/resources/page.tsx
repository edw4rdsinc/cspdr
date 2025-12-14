import { Metadata } from "next";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "PDR Resources & Guides | Car Studios PDR",
  description: "Learn about paintless dent repair with our interactive guides and quizzes. Find out if your dent can be repaired, understand the process, and more.",
};

const quizzes = [
  {
    title: "Can My Dent Be Fixed?",
    description: "Answer a few questions about your dent to find out if paintless dent repair is right for your situation.",
    href: "/resources/can-my-dent-be-fixed",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "PDR vs Body Shop",
    description: "Compare your options and understand the cost-benefit tradeoffs between PDR and traditional body shop repair.",
    href: "/resources/pdr-vs-body-shop",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Hail Damage Assessment",
    description: "Assess your hail damage severity and learn about the insurance claims process.",
    href: "/resources/hail-damage-assessment",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Is My Tech Qualified?",
    description: "Learn what to look for in a qualified PDR technician before you hire.",
    href: "/resources/technician-qualified",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Lease Return Calculator",
    description: "Calculate potential lease-end charges and see how much PDR could save you.",
    href: "/resources/lease-return-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Dent Value Impact",
    description: "Find out how much that dent is really costing you in resale value.",
    href: "/resources/dent-value-impact",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "DIY or Pro?",
    description: "Should you try to fix that dent yourself or call a professional?",
    href: "/resources/diy-or-pro",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Insurance Navigator",
    description: "Learn how insurance works for dent repair and when to file a claim.",
    href: "/resources/insurance-claim-navigator",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Fleet ROI Calculator",
    description: "Calculate how much your business could save with mobile PDR for your fleet.",
    href: "/resources/fleet-roi-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Classic Car Compatibility",
    description: "Find out if PDR is safe for your classic or vintage vehicle.",
    href: "/resources/classic-car-compatibility",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function Resources() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1B4F72] via-[#2A6496] to-[#1B4F72]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">PDR Resources</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Free tools to help you understand your options. No sales pitch—just helpful information.
          </p>
        </div>
      </section>

      {/* Quiz Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4F72]">Interactive Guides</h2>
            <p className="mt-4 text-lg text-gray-600">
              Quick 2-3 minute quizzes to help you make informed decisions
            </p>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz, i) => (
              <ScrollAnimation key={i} delay={i * 50}>
                <Link
                  href={quiz.href}
                  className="card-hover block bg-[#f8f8f6] rounded-2xl p-6 h-full group"
                >
                  <div className="w-14 h-14 bg-[#1B4F72] text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {quiz.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#1B4F72] group-hover:text-[#2A6496] transition-colors">
                    {quiz.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">{quiz.description}</p>
                  <div className="mt-4 text-[#1B4F72] font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Take Quiz
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-24 bg-[#1B4F72] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">PDR Quick Facts</h2>
          </ScrollAnimation>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "90%", label: "of dents can be repaired with PDR" },
              { stat: "1-2 hrs", label: "average repair time" },
              { stat: "50-70%", label: "savings vs body shop" },
              { stat: "100%", label: "original paint preserved" },
            ].map((item, i) => (
              <ScrollAnimation key={i} delay={i * 100}>
                <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-4xl font-bold text-white">{item.stat}</p>
                  <p className="mt-2 text-gray-400 text-sm">{item.label}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4F72]">Common Questions</h2>
          </ScrollAnimation>

          <div className="space-y-4">
            {[
              {
                q: "What is paintless dent repair?",
                a: "PDR is a technique that removes dents from vehicle panels without affecting the factory paint. Using specialized tools, technicians massage the metal back to its original shape from behind the panel.",
              },
              {
                q: "What dents can be fixed with PDR?",
                a: "Most dents where the paint hasn't been cracked or chipped can be repaired. This includes door dings, hail damage, minor collision dents, and creases. Size matters less than paint condition.",
              },
              {
                q: "How long does PDR take?",
                a: "Most single dents take 30 minutes to 2 hours. Multiple dents or hail damage may take longer. Either way, it's much faster than traditional body shop repair.",
              },
              {
                q: "Will PDR damage my paint?",
                a: "No. That's the whole point. PDR preserves your factory finish completely. There's no sanding, filling, or repainting involved.",
              },
            ].map((faq, i) => (
              <ScrollAnimation key={i} delay={i * 75}>
                <details className="group bg-[#f8f8f6] rounded-2xl">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold text-[#1B4F72]">{faq.q}</span>
                    <svg
                      className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.a}
                  </div>
                </details>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#f8f8f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4F72]">Still Have Questions?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Send us a photo of your dent and we&apos;ll give you an honest assessment—no obligation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#book"
                className="btn-primary bg-[#1B4F72] text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:2086482554"
                className="border-2 border-[#1B4F72] text-[#1B4F72] px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-[#1B4F72] hover:text-white transition-colors"
              >
                Call (208) 648-2554
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
