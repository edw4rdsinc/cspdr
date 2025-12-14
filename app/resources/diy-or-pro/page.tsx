import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIY or Pro? Dent Repair Decision Guide | Car Studios PDR",
  description: "Should you try to fix that dent yourself or call a professional? Take our free quiz to find out which option makes sense for your situation.",
};

export default function DiyOrPro() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-[#1B4F72] via-[#2A6496] to-[#1B4F72]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#8ab4c0] font-semibold uppercase tracking-wide text-sm">Honest Assessment</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">DIY or Call a Pro?</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Some dents you can tackle yourself. Others need professional tools and experience. Find out which category yours falls into.
          </p>
        </div>
      </section>

      {/* Quiz Embed */}
      <section className="py-12 bg-[#f8f8f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="relative w-full" style={{ minHeight: "1000px" }}>
              <iframe
                src="https://dentadvisor.org/quizzes/diy-or-pro"
                title="DIY or Pro Dent Repair Decision Quiz"
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
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1B4F72]">When DIY Isn&apos;t Worth the Risk</h2>
          <p className="mt-4 text-gray-600">
            Amateur repair attempts can make dents harder (and more expensive) to fix properly. When in doubt, get a free professional opinion first.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#book"
              className="btn-primary bg-[#1B4F72] text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2"
            >
              Get a Free Assessment
            </a>
            <a
              href="tel:2086482554"
              className="border-2 border-[#1B4F72] text-[#1B4F72] px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-[#1B4F72] hover:text-white transition-colors"
            >
              Call (208) 648-2554
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
