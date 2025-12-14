import { Metadata } from "next";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Icon Rocklear Paint Protection | Car Studios PDR",
  description: "Protect your vehicle's paint with Icon Rocklear protective coating. Defense against salt, UV rays, rock chips, and scratches. No mandatory maintenance required.",
};

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "UV Protection",
    description: "Shields your paint from the harsh Idaho sun that causes fading and oxidation.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Salt & Chemical Defense",
    description: "Protects against road salt, de-icing chemicals, and environmental contaminants.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Impact Resistance",
    description: "Absorbs impacts from rock chips, road debris, and minor scratches.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Enhanced Shine",
    description: "Brings out the depth and clarity of your paint for a showroom finish.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Long-Term Protection",
    description: "Investment-grade protection that lasts without mandatory maintenance or yearly recoating.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Preserve Resale Value",
    description: "Protect your vehicle's finish to maintain maximum resale value when it's time to sell.",
  },
];

export default function Rocklear() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-[#1a2e35] via-[#2d4a54] to-[#1a2e35] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#8ab4c0] font-semibold uppercase tracking-wide text-sm">Premium Paint Protection</p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">Icon Rocklear</h1>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Your vehicle&apos;s paint faces constant assault - UV rays, rock chips, road salt, and scratches. Icon Rocklear creates an invisible barrier that keeps your finish looking factory-fresh for years.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#quote"
                  className="btn-primary bg-white text-[#1a2e35] px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2"
                >
                  Get a Quote
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="tel:2086482554"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
                <div className="text-center text-white/60 p-8">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-sm">[ROCKLEAR PRODUCT IMAGE]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e35]">Why Rocklear?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Premium protection without the premium maintenance headaches.
            </p>
          </ScrollAnimation>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <ScrollAnimation key={i} delay={i * 75}>
                <div className="card-hover bg-[#f8f8f6] rounded-2xl p-8">
                  <div className="w-14 h-14 bg-[#1a2e35] text-white rounded-2xl flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[#1a2e35]">{benefit.title}</h3>
                  <p className="mt-3 text-gray-600">{benefit.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* No Maintenance Callout */}
      <section className="py-24 bg-[#1a2e35] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold">No Mandatory Maintenance</h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Unlike some ceramic coatings that require yearly reapplication or strict maintenance schedules, Icon Rocklear is designed to protect without the hassle. Apply it once and enjoy long-term protection.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e35]">Ideal For</h2>
          </ScrollAnimation>

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { title: "New Vehicles", desc: "Protect that factory finish from day one" },
              { title: "Collector Cars", desc: "Preserve value without altering original paint" },
              { title: "Daily Drivers", desc: "Defense against everyday wear and tear" },
            ].map((item, i) => (
              <ScrollAnimation key={i} delay={i * 100}>
                <div className="card-hover text-center p-8 bg-[#f8f8f6] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#1a2e35]">{item.title}</h3>
                  <p className="mt-3 text-gray-600">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-24 bg-gradient-to-br from-[#1a2e35] via-[#2d4a54] to-[#1a2e35]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Get Your Rocklear Quote</h2>
            <p className="mt-4 text-lg text-gray-300">
              Tell us about your vehicle and we&apos;ll provide a custom quote.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-2xl">
              {/* Google Form Embed Placeholder */}
              <div className="aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="font-medium text-gray-500">[GOOGLE FORM EMBED]</p>
                  <p className="text-sm text-gray-400 mt-2">Rocklear quote request form</p>
                  <a
                    href="https://forms.gle/X4oLoY5njaAeM29a9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-[#1a2e35] font-medium hover:underline"
                  >
                    Or click here to open form directly →
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={300} className="mt-8">
            <p className="text-gray-300">
              Questions? Call{" "}
              <a href="tel:2086482554" className="text-white font-semibold hover:underline">
                (208) 648-2554
              </a>
            </p>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
