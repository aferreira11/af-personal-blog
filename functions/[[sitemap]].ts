interface Env {
  // Add your environment variables here if needed
}

export const config = {
  runtime: 'edge',
}

export default async function middleware(request: Request, env: Env) {
  const url = new URL(request.url)
  
  // Only handle sitemap.xml requests
  if (!url.pathname.endsWith('sitemap.xml')) {
    return new Response(null, { status: 404 })
  }

  try {
    // Get the sitemap from your Next.js app
    const sitemapUrl = `${url.origin}/sitemap.xml`
    const response = await fetch(sitemapUrl)
    const sitemap = await response.text()

    // Create a new response with proper headers
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
        'Content-Security-Policy': "default-src 'self'",
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-Robots-Tag': 'all',
        'Vary': 'Accept-Encoding',
      },
    })
  } catch (error) {
    console.error('Error fetching sitemap:', error)
    return new Response('Error generating sitemap', { status: 500 })
  }
} 