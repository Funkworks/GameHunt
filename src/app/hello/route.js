import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    names: ['Juniper Watson', 'Francis Rodriguez'] 
  });
}