import { NextResponse } from 'next/server';
 
export async function GET() {
  return NextResponse.redirect(new URL('/ar-SA/الاستدامة/security-uniforms', 'http://localhost:3001'));
}
