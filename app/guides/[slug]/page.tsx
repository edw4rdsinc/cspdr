import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getWhitepaper, getWhitepapers, getBlogsByWhitepaper } from '@/lib/sanity'
import PortableText from '@/components/PortableText'

export const revalidate = 3600

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = await getWhitepaper(slug)

  if (!guide) {
    return {
      title: 'Guide Not Found | Car Studios',
    }
  }

  return {
    title: `${guide.title} | Car Studios PDR`,
    description: guide.description || `In-depth guide: ${guide.title}`,
    alternates: {
      canonical: `https://dentadvisor.org/guides/${slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.description || undefined,
      type: 'article',
      authors: [guide.author],
      publishedTime: guide.publishedAt,
    },
  }
}

export async function generateStaticParams() {
  const guides = await getWhitepapers(100)
  return guides.map((guide) => ({
    slug: guide.slug.current,
  }))
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const [guide, relatedBlogs] = await Promise.all([
    getWhitepaper(slug),
    getBlogsByWhitepaper(slug),
  ])

  if (!guide) {
    notFound()
  }

  return (
    <>
      {/* Structured Data - ScholarlyArticle for Guides */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "headline": guide.title,
            "description": guide.description,
            "abstract": guide.summary,
            "author": {
              "@type": "Organization",
              "name": guide.author,
              "url": "https://dentadvisor.org"
            },
            "datePublished": guide.publishedAt,
            "publisher": {
              "@type": "Organization",
              "name": "DentAdvisor",
              "url": "https://dentadvisor.org"
            },
            "url": `https://dentadvisor.org/guides/${guide.slug.current}`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://dentadvisor.org/guides/${guide.slug.current}`
            },
            "isAccessibleForFree": true,
            "inLanguage": "en-US",
            ...(guide.sources && guide.sources.length > 0 && {
              "citation": guide.sources.map(s => ({
                "@type": "CreativeWork",
                "name": s.name,
                "description": s.description,
                "url": s.url
              }))
            })
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://carstudiospdr.com" },
              { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://carstudiospdr.com/blog" },
              { "@type": "ListItem", "position": 3, "name": guide.title, "item": `https://carstudiospdr.com/guides/${guide.slug.current}` }
            ]
          })
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-[#1B4F72] via-[#2A6496] to-[#1B4F72]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Resources
          </Link>
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-white/90 text-sm mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            In-Depth Guide
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {guide.title}
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl">
            {guide.description}
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-white/70">
            <span>By {guide.author}</span>
            <span>&bull;</span>
            <time>
              {new Date(guide.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 bg-green-500/20 text-green-300 px-3 py-1.5 rounded-full text-xs font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Research-Backed
            </div>
            {guide.sources && guide.sources.length > 0 && (
              <div className="flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full text-xs font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
                {guide.sources.length} Citations
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {guide.summary && (
                <div className="bg-[#f8f8f6] border border-gray-200 rounded-lg p-6 mb-8">
                  <h2 className="text-lg font-semibold text-[#1B4F72] mb-2">Executive Summary</h2>
                  <p className="text-gray-700">{guide.summary}</p>
                </div>
              )}

              {guide.content ? (
                <PortableText value={guide.content} />
              ) : (
                <p className="text-gray-500 italic">Content coming soon...</p>
              )}

              {/* Sources */}
              {guide.sources && guide.sources.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h2 className="text-xl font-semibold text-[#1B4F72] mb-4">Sources</h2>
                  <ol className="space-y-3 text-sm text-gray-600">
                    {guide.sources.map((source, index) => (
                      <li key={source._key} className="flex gap-2">
                        <span className="font-medium text-gray-500">{index + 1}.</span>
                        <div>
                          <span className="font-medium text-gray-800">{source.name}</span>
                          {source.description && <span>, &ldquo;{source.description}&rdquo;</span>}
                          {source.url && (
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-[#1B4F72] hover:underline truncate"
                            >
                              {source.url}
                            </a>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Related Articles */}
              {relatedBlogs.length > 0 && (
                <div className="sticky top-24">
                  <h3 className="text-lg font-semibold text-[#1B4F72] mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedBlogs.slice(0, 5).map((blog) => (
                      <Link key={blog._id} href={`/blog/${blog.slug.current}`} className="block group">
                        <h4 className="text-gray-800 font-medium group-hover:text-[#1B4F72] transition-colors line-clamp-2">
                          {blog.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-8 bg-[#1B4F72] text-white rounded-lg p-6">
                <h3 className="font-semibold mb-2">Need PDR Service?</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Mobile paintless dent repair in the Treasure Valley.
                </p>
                <a
                  href="/#book"
                  className="block w-full bg-white text-[#1B4F72] text-center py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  Get Free Quote
                </a>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Tags */}
      {guide.tags && guide.tags.length > 0 && (
        <section className="bg-[#f8f8f6] py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600">Tags:</span>
              {guide.tags.map((tag) => (
                <span key={tag} className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
