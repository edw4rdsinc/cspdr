import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: 'n1pctdd7',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export interface Blog {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string | null
  publishedAt: string
  mainImage?: any
  body?: any[]
}

export interface Whitepaper {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  mainImage?: any
}

export async function getBlogs(limit = 10): Promise<Blog[]> {
  return client.fetch(
    `*[_type == "blog"] | order(publishedAt desc)[0...$limit]{
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage
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
      publishedAt,
      mainImage,
      body
    }`,
    { slug }
  )
}

export async function getWhitepapers(limit = 10): Promise<Whitepaper[]> {
  return client.fetch(
    `*[_type == "whitepaper"] | order(_createdAt desc)[0...$limit]{
      _id,
      title,
      slug,
      description,
      mainImage
    }`,
    { limit: limit - 1 }
  )
}

export async function getWhitepaper(slug: string): Promise<Whitepaper & { content?: any[] } | null> {
  return client.fetch(
    `*[_type == "whitepaper" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      description,
      mainImage,
      content
    }`,
    { slug }
  )
}
