// Judul: API Route untuk Form Kontak
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Di sini kamu bisa menyambungkan ke Database (MySQL) atau kirim ke Email
  console.log("Pesan masuk dari:", data.email);

  return NextResponse.json({ 
    message: "Pesan berhasil terkirim ke sistem Satria!",
    status: 200 
  });
}