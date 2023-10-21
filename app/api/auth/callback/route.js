// import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
import SupaBaseRouteServer from "@/app/components/SupaBaseRouteServer";
import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (code) {
    const supabase = await SupaBaseRouteServer();
    await supabase.auth.exchangeCodeForSession(code);
  }

  if (!code) {
    console.log("No code provided");
  }

  return NextResponse.redirect(`${location.origin}/courses`);
}
