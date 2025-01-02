import { getFeaturedPosts } from '@/lib/notion';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const posts = await getFeaturedPosts();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch featured posts' }, { status: 500 });
  }
} 