// src/utils/createTrackerSheet.js
export async function createTrackerSheet(email) {
    // Use the Netlify function proxy to avoid CORS
    const apiUrl = "/.netlify/functions/createTracker";

    try {
        // We use "Content-Type": "text/plain" to avoid a CORS Preflight (OPTIONS) request.
        // This is a "Simple Request". The body is still valid JSON.
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify({ email })
        });

        // Check for HTTP errors (like 401 Unauthorized or 403 Forbidden)
        if (!res.ok) {
            if (res.status === 401 || res.status === 403) {
                throw new Error(`Permission Denied (${res.status}). The Google Script must be deployed with "Who has access: Anyone".`);
            }
            if (res.status === 404) {
                throw new Error("Script URL not found (404). Check your VITE_SHEET_API_URL.");
            }
            throw new Error(`Server returned HTTP ${res.status}`);
        }

        const text = await res.text();

        let data;
        try {
            data = JSON.parse(text);
        } catch (err) {
            console.error("Response is not JSON:", text);
            // If we get HTML back, it's usually an error page from Google
            if (text.includes("<!DOCTYPE html>")) {
                throw new Error("Received HTML instead of JSON. The script URL might be wrong or the script crashed.");
            }
            throw new Error("Invalid response from server.");
        }

        if (data.status === "error" || data.error) {
            throw new Error(data.error || "Unknown error from Apps Script");
        }

        return data.url;
    } catch (error) {
        console.error("Error creating sheet:", error);
        // Re-throw so the UI can display it
        throw error;
    }
}
