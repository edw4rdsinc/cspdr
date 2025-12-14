import ScrollAnimation from "@/components/ScrollAnimation";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  const serviceAreas = ["Star", "Eagle", "Nampa", "Meridian", "Boise", "Kuna"];

  return (
    <>
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e35] via-[#2d4a54] to-[#1a2e35]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Big Dents.<br />
                Small Dents.<br />
                <span className="text-white/80">Gone.</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
                Mobile paintless dent repair across the Treasure Valley. We come to you - home, work, wherever. Original paint, no body shop.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#book"
                  className="btn-primary bg-white text-[#1a2e35] px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2"
                >
                  Get a Free Quote
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="tel:2086482554"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (208) 648-2554
                </a>
              </div>
            </div>

            {/* Video Placeholder */}
            <div className="relative">
              <div className="video-placeholder aspect-video flex items-center justify-center">
                <div className="text-center text-white/60">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <p className="text-sm">[VIDEO PLACEHOLDER]</p>
                  <p className="text-xs mt-1">10-inch dent removal from 3/4 ton truck</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e35]">
              Body shops want thousands.<br />
              <span className="text-gray-400">And your car for a week.</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              A dent doesn&apos;t have to mean repainting your entire panel. Traditional body shops sand, fill, and repaint - which takes days, costs a fortune, and your car never has its original finish again.
            </p>
          </ScrollAnimation>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Expensive",
                description: "Body shop quotes for a single dent can run $500-$2,000+",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Slow",
                description: "Drop it off Monday, maybe get it back Friday. If you're lucky.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
                title: "Repainted",
                description: "Say goodbye to your factory finish. Color match is never perfect.",
              },
            ].map((item, i) => (
              <ScrollAnimation key={i} delay={i * 100}>
                <div className="card-hover bg-gray-50 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[#1a2e35]">{item.title}</h3>
                  <p className="mt-3 text-gray-600">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Section - Jason */}
      <section className="py-24 bg-[#f8f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="fade-in-left">
              <div className="aspect-square bg-gray-200 rounded-3xl flex items-center justify-center text-gray-400">
                [JASON PHOTO]
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right">
              <div>
                <p className="text-[#2d4a54] font-semibold uppercase tracking-wide text-sm">Meet Your Technician</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1a2e35]">
                  Jason Bahr
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  Jason has removed thousands of dents across the Treasure Valley. From door dings to major damage, he&apos;s seen it all - and fixed it without touching your factory paint.
                </p>
                <blockquote className="mt-8 border-l-4 border-[#2d4a54] pl-6 italic text-gray-600">
                  &ldquo;At Car Studios, you can count on honest and straightforward service from highly skilled technicians. Your car will get some love with us!&rdquo;
                </blockquote>
                <p className="mt-4 font-semibold text-[#1a2e35]">- Jason Bahr, Owner</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Plan Section - How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e35]">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600">Three simple steps to a dent-free vehicle</p>
          </ScrollAnimation>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Send a Photo",
                description: "Text or email us a picture of your dent. We'll give you an honest quote - usually within the hour.",
              },
              {
                step: "2",
                title: "We Come to You",
                description: "Schedule a time that works. We'll meet you at home, work, or wherever your vehicle is.",
              },
              {
                step: "3",
                title: "Dent Gone",
                description: "We remove the dent on-site. Original paint stays. Usually done in under an hour.",
              },
            ].map((item, i) => (
              <ScrollAnimation key={i} delay={i * 150}>
                <div className="relative">
                  <div className="card-hover bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm">
                    <div className="w-14 h-14 bg-[#1a2e35] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-[#1a2e35]">{item.title}</h3>
                    <p className="mt-3 text-gray-600">{item.description}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 text-gray-300">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* What We Fix */}
      <section className="py-24 bg-[#1a2e35] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">What We Fix</h2>
            <p className="mt-4 text-lg text-gray-300">Paintless dent repair for every situation</p>
          </ScrollAnimation>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Door Dings", desc: "Parking lot battle scars from careless neighbors" },
              { title: "Hail Damage", desc: "Idaho storms leave their mark - we remove it" },
              { title: "Minor Collisions", desc: "Fender benders and bumps without the body shop" },
              { title: "Creases & Dents", desc: "Shopping carts, bikes, whatever hit you" },
              { title: "Body Line Damage", desc: "Even tricky spots along edges and curves" },
              { title: "Fleet Vehicles", desc: "Keep your company cars looking professional" },
            ].map((item, i) => (
              <ScrollAnimation key={i} delay={i * 75}>
                <div className="card-hover bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-gray-400 text-sm">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e35]">Service Area</h2>
            <p className="mt-4 text-lg text-gray-600">Proudly serving the Treasure Valley</p>
          </ScrollAnimation>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area, i) => (
              <ScrollAnimation key={area} delay={i * 75}>
                <div className="card-hover bg-[#f8f8f6] px-8 py-4 rounded-full text-[#1a2e35] font-medium border border-gray-200">
                  {area}
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation className="mt-12 text-center">
            <p className="text-gray-500">
              Don&apos;t see your city? Give us a call - we may still be able to help.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="py-24 bg-gradient-to-br from-[#1a2e35] via-[#2d4a54] to-[#1a2e35]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to get that dent out?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Free quotes. No pressure. We&apos;ll tell you honestly if PDR will work for your situation.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            {/* Square Calendar Placeholder */}
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-2xl">
              <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="font-medium text-gray-500">[SQUARE CALENDAR EMBED]</p>
                  <p className="text-sm text-gray-400 mt-2">Book your appointment online</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={300} className="mt-8">
            <p className="text-gray-300">
              Prefer to talk? Call{" "}
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
