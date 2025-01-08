import { notionClient } from '@/lib/notion';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create a new page in the Notion database
    const response = await notionClient.pages.create({
      parent: {
        database_id: process.env.NOTION_CONTACT_DATABASE_ID!,
      },
      properties: {
        name: {
          title: [
            {
              type: 'text',
              text: {
                content: name,
              },
            },
          ],
        },
        email: {
          email: email,
        },
        message: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });

    return NextResponse.json({ success: true, id: response.id });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
} 