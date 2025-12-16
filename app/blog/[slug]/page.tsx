import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlog, getBlogs, getBlogsByWhitepaper } from '@/lib/sanity'
import PortableText from '@/components/PortableText'

export const revalidate = 3600

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlog(slug)

  if (!blog) {
    return {
      title: 'Article Not Found | Car Studios',
    }
  }

  return {
    title: `${blog.title} | Car Studios PDR`,
    description: blog.excerpt || `Read about ${blog.title} on Car Studios PDR blog.`,
    alternates: {
      canonical: `https://dentadvisor.org/blog/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt || undefined,
      type: 'article',
      authors: [blog.author],
      publishedTime: blog.publishedAt,
    },
  }
}

export async function generateStaticParams() {
  const blogs = await getBlogs(100)
  return blogs.map((blog) => ({
    slug: blog.slug.current,
  }))
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const blog = await getBlog(slug)

  if (!blog) {
    notFound()
  }

  // Get related posts from same whitepaper
  const parentWhitepaper = blog.referencedWhitepapers?.[0]
  const relatedPosts = parentWhitepaper
    ? (await getBlogsByWhitepaper(parentWhitepaper.slug.current)).filter(p => p._id !== blog._id)
    : []

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blog.title,
            "description": blog.excerpt,
            "author": {
              "@type": "Organization",
              "name": blog.author,
              "url": "https://dentadvisor.org"
            },
            "datePublished": blog.publishedAt,
            "publisher": {
              "@type": "Organization",
              "name": "DentAdvisor",
              "url": "https://dentadvisor.org"
            },
            "url": `https://dentadvisor.org/blog/${blog.slug.current}`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://dentadvisor.org/blog/${blog.slug.current}`
            },
            "isAccessibleForFree": true,
            "inLanguage": "en-US",
            ...(parentWhitepaper && {
              "isPartOf": {
                "@type": "ScholarlyArticle",
                "name": parentWhitepaper.title,
                "url": `https://dentadvisor.org/guides/${parentWhitepaper.slug.current}`
              }
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
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://carstudiospdr.com/blog" },
              { "@type": "ListItem", "position": 3, "name": blog.title, "item": `https://carstudiospdr.com/blog/${blog.slug.current}` }
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
            Back to Blog
          </Link>
          {parentWhitepaper && (
            <Link
              href={`/guides/${parentWhitepaper.slug.current}`}
              className="inline-block text-sm font-medium text-white/90 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-colors mb-4"
            >
              From: {parentWhitepaper.title}
            </Link>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {blog.title}
          </h1>
          <p className="mt-4 text-lg text-white/80">{blog.excerpt}</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-white/70">
            <span>By {blog.author}</span>
            <span>&bull;</span>
            <time>
              {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {blog.content ? (
                <PortableText value={blog.content} />
              ) : (
                <p className="text-gray-500 italic">Content coming soon...</p>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Parent Guide CTA */}
              {parentWhitepaper && (
                <div className="bg-[#f8f8f6] border border-gray-200 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-[#1B4F72] mb-2">Read the Full Guide</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    This article is part of our comprehensive guide on this topic.
                  </p>
                  <Link
                    href={`/guides/${parentWhitepaper.slug.current}`}
                    className="block w-full bg-[#1B4F72] text-white text-center py-3 rounded-full font-medium hover:bg-[#2A6496] transition-colors"
                  >
                    View Full Guide
                  </Link>
                </div>
              )}

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="sticky top-24">
                  <h3 className="text-lg font-semibold text-[#1B4F72] mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.slice(0, 4).map((post) => (
                      <Link key={post._id} href={`/blog/${post.slug.current}`} className="block group">
                        <h4 className="text-gray-800 font-medium group-hover:text-[#1B4F72] transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
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
      {blog.tags && blog.tags.length > 0 && (
        <section className="bg-[#f8f8f6] py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600">Tags:</span>
              {blog.tags.map((tag) => (
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
