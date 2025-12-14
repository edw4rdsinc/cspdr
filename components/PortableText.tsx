'use client'

import { urlFor } from '@/lib/sanity'

interface Block {
  _type: string
  _key: string
  style?: string
  children?: Array<{
    _type: string
    _key: string
    text: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _type: string
    _key: string
    href?: string
  }>
  listItem?: string
  level?: number
  asset?: any
  alt?: string
}

interface PortableTextProps {
  content: Block[]
}

export default function PortableText({ content }: PortableTextProps) {
  if (!content || !Array.isArray(content)) {
    return null
  }

  const renderMarks = (child: any, markDefs: any[] = []) => {
    let text = child.text
    if (!child.marks || child.marks.length === 0) return text

    return child.marks.reduce((acc: any, mark: string) => {
      const markDef = markDefs.find((def) => def._key === mark)

      if (markDef?._type === 'link') {
        return (
          <a
            href={markDef.href}
            className="text-[#1B4F72] underline hover:text-[#2A6496]"
            target={markDef.href?.startsWith('http') ? '_blank' : undefined}
            rel={markDef.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {acc}
          </a>
        )
      }

      switch (mark) {
        case 'strong':
          return <strong className="font-semibold">{acc}</strong>
        case 'em':
          return <em>{acc}</em>
        case 'underline':
          return <span className="underline">{acc}</span>
        case 'strike-through':
          return <s>{acc}</s>
        case 'code':
          return <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{acc}</code>
        default:
          return acc
      }
    }, text)
  }

  const renderBlock = (block: Block, index: number) => {
    if (block._type === 'image' && block.asset) {
      return (
        <figure key={block._key || index} className="my-8">
          <img
            src={urlFor(block).width(800).url()}
            alt={block.alt || ''}
            className="rounded-lg w-full"
          />
          {block.alt && (
            <figcaption className="text-center text-gray-500 text-sm mt-2">
              {block.alt}
            </figcaption>
          )}
        </figure>
      )
    }

    if (block._type !== 'block') return null

    const children = block.children?.map((child, i) => (
      <span key={child._key || i}>{renderMarks(child, block.markDefs)}</span>
    ))

    if (block.listItem === 'bullet') {
      return (
        <li key={block._key || index} className="ml-6 list-disc text-gray-700">
          {children}
        </li>
      )
    }

    if (block.listItem === 'number') {
      return (
        <li key={block._key || index} className="ml-6 list-decimal text-gray-700">
          {children}
        </li>
      )
    }

    switch (block.style) {
      case 'h1':
        return (
          <h1 key={block._key || index} className="text-3xl sm:text-4xl font-bold text-[#1B4F72] mt-10 mb-4">
            {children}
          </h1>
        )
      case 'h2':
        return (
          <h2 key={block._key || index} className="text-2xl sm:text-3xl font-bold text-[#1B4F72] mt-8 mb-4">
            {children}
          </h2>
        )
      case 'h3':
        return (
          <h3 key={block._key || index} className="text-xl sm:text-2xl font-semibold text-[#1B4F72] mt-6 mb-3">
            {children}
          </h3>
        )
      case 'h4':
        return (
          <h4 key={block._key || index} className="text-lg sm:text-xl font-semibold text-[#1B4F72] mt-5 mb-2">
            {children}
          </h4>
        )
      case 'blockquote':
        return (
          <blockquote key={block._key || index} className="border-l-4 border-[#1B4F72] pl-4 my-6 italic text-gray-600">
            {children}
          </blockquote>
        )
      default:
        return (
          <p key={block._key || index} className="text-gray-700 leading-relaxed mb-4">
            {children}
          </p>
        )
    }
  }

  // Group list items
  const groupedContent: (Block | Block[])[] = []
  let currentList: Block[] = []

  content.forEach((block, index) => {
    if (block.listItem) {
      currentList.push(block)
    } else {
      if (currentList.length > 0) {
        groupedContent.push([...currentList])
        currentList = []
      }
      groupedContent.push(block)
    }
  })
  if (currentList.length > 0) {
    groupedContent.push(currentList)
  }

  return (
    <div className="prose prose-lg max-w-none">
      {groupedContent.map((item, index) => {
        if (Array.isArray(item)) {
          const isOrdered = item[0].listItem === 'number'
          return isOrdered ? (
            <ol key={index} className="my-4 space-y-2">
              {item.map((block, i) => renderBlock(block, i))}
            </ol>
          ) : (
            <ul key={index} className="my-4 space-y-2">
              {item.map((block, i) => renderBlock(block, i))}
            </ul>
          )
        }
        return renderBlock(item, index)
      })}
    </div>
  )
}
