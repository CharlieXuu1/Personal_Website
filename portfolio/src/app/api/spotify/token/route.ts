import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();
    
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || 'ac2187b51d6a4a97a574fff92473acfc';
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET || 'c83e879395394052b9d08970826e78dd';
    const redirectUri = `${request.nextUrl.origin}/music`;

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
      }).toString()
    });

    if (!response.ok) {
      throw new Error('Token exchange failed');
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Spotify token exchange error:', error);
    return NextResponse.json(
      { error: 'Failed to exchange token' },
      { status: 500 }
    );
  }
}