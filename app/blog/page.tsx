import Link from 'next/link'
import { getBlogs, getWhitepapers, Blog, Whitepaper } from '@/lib/sanity'

export const revalidate = 3600 // Revalidate every hour

export const metadata = {
  title: 'PDR Blog & Resources | Car Studios',
  description: 'Expert articles on paintless dent repair, hail damage, and keeping your vehicle looking its best.',
}

export default async function BlogPage() {
  const [blogs, whitepapers] = await Promise.all([
    getBlogs(12),
    getWhitepapers(6),
  ])

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1B4F72] via-[#2A6496] to-[#1B4F72]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            PDR Knowledge Center
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Expert insights on paintless dent repair, vehicle care, and getting the most value from your repairs.
          </p>
        </div>
      </section>

      {/* Featured Guides */}
      {whitepapers.length > 0 && (
        <section className="py-16 bg-[#f8f8f6]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B4F72] mb-8">
              In-Depth Guides
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whitepapers.map((wp: Whitepaper) => (
                <Link
                  key={wp._id}
                  href={`/guides/${wp.slug.current}`}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow block group"
                >
                  <div className="w-12 h-12 bg-[#1B4F72] rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1B4F72] mb-2 group-hover:text-[#2A6496] transition-colors">
                    {wp.title}
                  </h3>
                  {wp.description && (
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {wp.description}
                    </p>
                  )}
                  <span className="inline-block mt-4 text-[#2A6496] font-medium text-sm group-hover:underline">
                    Read Guide →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1B4F72] mb-8">
            Latest Articles
          </h2>

          {blogs.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-2xl">
              <p className="text-gray-500">No articles yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog: Blog) => (
                <Link
                  key={blog._id}
                  href={`/blog/${blog.slug.current}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow block"
                >
                  <div className="aspect-video bg-gradient-to-br from-[#1B4F72] to-[#2A6496] flex items-center justify-center">
                    <svg className="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <time className="text-sm text-gray-400">
                      {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <h3 className="mt-2 text-lg font-semibold text-[#1B4F72] group-hover:text-[#2A6496] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    {blog.excerpt && (
                      <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                        {blog.excerpt}
                      </p>
                    )}
                    <span className="inline-block mt-4 text-[#2A6496] font-medium text-sm group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1B4F72]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Have a Dent That Needs Fixing?
          </h2>
          <p className="mt-4 text-gray-300">
            Get a free quote - just send us a photo of your damage.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#book"
              className="bg-white text-[#1B4F72] px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="tel:2086482554"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (208) 648-2554
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
