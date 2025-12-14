import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlog, getBlogs, urlFor } from '@/lib/sanity'
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
      publishedTime: blog.publishedAt,
      images: blog.mainImage ? [urlFor(blog.mainImage).width(1200).height(630).url()] : [],
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

  return (
    <>
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {blog.title}
          </h1>
          <time className="block mt-4 text-white/70">
            {new Date(blog.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </section>

      {/* Featured Image */}
      {blog.mainImage && (
        <div className="relative -mt-6 mb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={urlFor(blog.mainImage).width(1200).height(600).url()}
              alt={blog.title}
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {blog.body ? (
            <PortableText content={blog.body} />
          ) : (
            <p className="text-gray-500 italic">Content coming soon...</p>
          )}
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-[#f8f8f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1B4F72]">
            Need PDR Services in the Treasure Valley?
          </h2>
          <p className="mt-4 text-gray-600">
            Get a free quote for your paintless dent repair - just send us a photo.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#book"
              className="bg-[#1B4F72] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#2A6496] transition-colors"
            >
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="tel:2086482554"
              className="border-2 border-[#1B4F72] text-[#1B4F72] px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#1B4F72] hover:text-white transition-colors"
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
