import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDR vs Body Shop Calculator | Compare Your Options | Car Studios PDR",
  description: "Should you choose paintless dent repair or a traditional body shop? Our free calculator helps you compare cost, time, and quality for your specific situation.",
};

export default function PdrVsBodyShop() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-[#1a2e35] via-[#2d4a54] to-[#1a2e35]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#8ab4c0] font-semibold uppercase tracking-wide text-sm">Free Comparison Tool</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">PDR vs. Body Shop</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Not sure which option is right for your dent? Compare cost, repair time, and outcomes to make the best decision.
          </p>
        </div>
      </section>

      {/* Quiz Embed */}
      <section className="py-12 bg-[#f8f8f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="relative w-full" style={{ minHeight: "1000px" }}>
              <iframe
                src="https://dentadvisor.org/quizzes/pdr-vs-body-shop"
                title="PDR vs Body Shop Calculator"
                className="absolute inset-0 w-full h-full border-0"
                style={{ minHeight: "1000px" }}
                allow="clipboard-write"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a2e35]">PDR Usually Wins</h2>
          <p className="mt-4 text-gray-600">
            Most dents can be fixed in hours, not days—and for a fraction of body shop prices. Let&apos;s see what we can do for you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#book"
              className="btn-primary bg-[#1a2e35] text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:2086482554"
              className="border-2 border-[#1a2e35] text-[#1a2e35] px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-[#1a2e35] hover:text-white transition-colors"
            >
              Call (208) 648-2554
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
