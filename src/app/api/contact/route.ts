import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Semua kolom (Nama, Email, Pesan) wajib diisi." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format email yang dimasukkan tidak valid." },
        { status: 400 }
      );
    }

    // Log message for developer/backend tracking
    console.log(`[CONTACT FORM] Message received from ${name} (${email}):`, message);

    return NextResponse.json(
      {
        message: `Terima kasih ${name}! Pesan kamu telah diterima. Satria akan membalas via email secepatnya.`,
        success: true,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[CONTACT FORM ERROR]", err);
    return NextResponse.json(
      { error: "Terjadi kesalahan server saat memproses pesan." },
      { status: 500 }
    );
  }
}