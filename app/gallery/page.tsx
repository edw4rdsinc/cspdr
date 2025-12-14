import { Metadata } from "next";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Gallery | Car Studios PDR | Before & After Photos",
  description: "See real before and after photos of paintless dent repair work by Car Studios PDR in the Treasure Valley.",
};

// Placeholder images from current site - will be replaced with before/after photos
const galleryImages = [
  { id: 1, alt: "White car dent repair", placeholder: "White Car - Before/After" },
  { id: 2, alt: "Blue truck dent repair", placeholder: "Blue Truck - Before/After" },
  { id: 3, alt: "Silver car dent repair", placeholder: "Silver Car - Before/After" },
  { id: 4, alt: "Collectible sports car dent repair", placeholder: "Sports Car - Before/After" },
  { id: 5, alt: "Ambulance fleet vehicle dent repair", placeholder: "Fleet Vehicle - Before/After" },
  { id: 6, alt: "Fleet vehicle dent repair", placeholder: "Work Truck - Before/After" },
];

export default function Gallery() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1B4F72] via-[#2A6496] to-[#1B4F72]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Our Work</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Real results from real vehicles. See what paintless dent repair can do.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, i) => (
              <ScrollAnimation key={image.id} delay={i * 75}>
                <div className="card-hover group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
                  {/* Placeholder - replace with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 p-4 text-center">
                    <div>
                      <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm font-medium">{image.placeholder}</p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1B4F72]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <p className="font-semibold">{image.alt}</p>
                      <p className="text-sm text-gray-300 mt-1">Paintless Dent Repair</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Note about before/after */}
          <ScrollAnimation className="mt-16 text-center">
            <div className="bg-[#f8f8f6] rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-[#1B4F72]">Before & After Photos</h3>
              <p className="mt-3 text-gray-600">
                Every dent tells a story. Send us a photo of yours and we&apos;ll show you what&apos;s possible.
              </p>
              <a
                href="/#book"
                className="btn-primary inline-block mt-6 bg-[#1B4F72] text-white px-8 py-3 rounded-full font-medium"
              >
                Get Your Free Quote
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
