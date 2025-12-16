import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: 'n1pctdd7',
  dataset: 'production',
  apiVersion: '2024-12-05',
  useCdn: true,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Types
export interface Source {
  _key: string
  name: string
  description?: string
  url?: string
}

export interface Blog {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  content?: any[]
  author: string
  publishedAt: string
  tags?: string[]
  referencedWhitepapers?: {
    _id: string
    title: string
    slug: { current: string }
  }[]
}

export interface Whitepaper {
  _id: string
  title: string
  slug: { current: string }
  description: string
  summary?: string
  content?: any[]
  sources?: Source[]
  author: string
  publishedAt: string
  tags?: string[]
}

// Queries
export async function getBlogs(limit = 10): Promise<Blog[]> {
  return client.fetch(
    `*[_type == "blog" && publishedAt <= now()] | order(publishedAt desc)[0...$limit]{
      _id,
      title,
      slug,
      excerpt,
      author,
      publishedAt,
      tags,
      referencedWhitepapers[]->{ _id, title, slug }
    }`,
    { limit: limit - 1 }
  )
}

export async function getBlog(slug: string): Promise<Blog | null> {
  return client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      excerpt,
      content,
      author,
      publishedAt,
      tags,
      referencedWhitepapers[]->{ _id, title, slug }
    }`,
    { slug }
  )
}

export async function getBlogsByWhitepaper(whitepaperSlug: string): Promise<Blog[]> {
  return client.fetch(
    `*[_type == "blog" && $slug in referencedWhitepapers[]->slug.current && publishedAt <= now()] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      author,
      publishedAt,
      tags
    }`,
    { slug: whitepaperSlug }
  )
}

export async function getWhitepapers(limit = 10): Promise<Whitepaper[]> {
  return client.fetch(
    `*[_type == "whitepaper" && publishedAt <= now()] | order(order asc, publishedAt desc)[0...$limit]{
      _id,
      title,
      slug,
      description,
      summary,
      author,
      publishedAt,
      tags
    }`,
    { limit: limit - 1 }
  )
}

export async function getWhitepaper(slug: string): Promise<Whitepaper | null> {
  return client.fetch(
    `*[_type == "whitepaper" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      description,
      summary,
      content,
      sources,
      author,
      publishedAt,
      tags
    }`,
    { slug }
  )
}
