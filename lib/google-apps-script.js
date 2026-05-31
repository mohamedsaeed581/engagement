/**
 * Google Apps Script for RSVP → Google Sheets
 *
 * 1. Create a new Google Sheet
 * 2. Add headers in row 1: Timestamp | Name | Attendance | Guests | Message
 * 3. Go to Extensions → Apps Script
 * 4. Paste this code and deploy as Web App (Execute as: Me, Access: Anyone)
 * 5. Copy the Web App URL to NEXT_PUBLIC_GOOGLE_SCRIPT_URL in .env.local
 */

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name || "",
    data.attendance || "",
    data.guests || 0,
    data.message || "",
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ success: true })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "RSVP endpoint ready" })
  ).setMimeType(ContentService.MimeType.JSON);
}
