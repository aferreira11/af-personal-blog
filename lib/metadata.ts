import { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://amadeuferreira.com'

export const siteConfig = {
  name: "Amadeu Ferreira",
  title: "The Modern Polymath | Amadeu Ferreira's Blog",
  description: "Personal blog of Amadeu Ferreira, covering tech, everything startup, and more.",
  url: baseUrl,
  ogImage: `${baseUrl}/og-image.png`,
  links: {
    twitter: 'https://twitter.com/amadeuferreira_',
    github: 'https://github.com/amadeuferreira',
    linkedin: 'https://linkedin.com/in/amadeuferreira',
  },
}

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = [
    {
      url: "/favicon.svg",
      type: "image/svg+xml",
    }
  ],
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: Metadata['icons']
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@amadeuferreira_',
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
} 