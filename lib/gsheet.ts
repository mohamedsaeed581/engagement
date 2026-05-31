export interface RSVPData {
  name: string;
  attendance: "yes" | "no";
  guests?: number;
  message?: string;
}

export async function submitRSVP(data: RSVPData): Promise<{ success: boolean; message: string }> {
  const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  if (!url) {
    // Demo mode when Apps Script URL is not configured
    await new Promise((r) => setTimeout(r, 1200));
    return { success: true, message: "Thank you! Your RSVP has been recorded." };
  }

  const response = await fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: data.name,
      attendance: data.attendance,
      guests: data.guests ?? 1,
      message: data.message ?? "",
      timestamp: new Date().toISOString(),
    }),
  });

  if (response.type === "opaque" || response.ok) {
    return { success: true, message: "Thank you! Your RSVP has been recorded." };
  }

  return { success: false, message: "Something went wrong. Please try again." };
}
