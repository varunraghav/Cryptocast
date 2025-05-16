import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "svix";
import { upsertUser, deleteUser, getUserByClerkId } from "@/services/user.service";

// This endpoint handles Clerk webhooks
export async function POST(req: NextRequest) {
  // Get the webhook signature from the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there's no signature headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error("Error: Missing svix signature headers");
    return new NextResponse("Missing svix signature headers", { status: 400 });
  }

  // Get the body
  const body = await req.json();
  const payload = JSON.stringify(body);

  // Create a new Svix instance with your webhook secret
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
  
  if (!webhookSecret) {
    console.error("Error: Missing CLERK_WEBHOOK_SECRET");
    return new NextResponse("Missing CLERK_WEBHOOK_SECRET", { status: 500 });
  }

  // Create a new Svix instance with your webhook secret
  const wh = new Webhook(webhookSecret);

  let evt: WebhookEvent;

  // Verify the webhook signature
  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new NextResponse("Error verifying webhook", { status: 400 });
  }

  // Handle the webhook based on the type
  const eventType = evt.type;
  
  try {
    if (eventType === "user.created" || eventType === "user.updated") {
      const { id, email_addresses } = evt.data;
      
      // Get the primary email
      const primaryEmail = email_addresses?.find(
        (email: any) => email.id === evt.data.primary_email_address_id
      )?.email_address;

      if (id && primaryEmail) {
        await upsertUser(id, primaryEmail);
        console.log(`User ${eventType === "user.created" ? "created" : "updated"}: ${id}`);
      }
    } else if (eventType === "user.deleted") {
      const { id } = evt.data;
      
      if (id) {
        // Get the internal user ID from clerk ID
        const user = await getUserByClerkId(id);
        
        if (user) {
          await deleteUser(user.id);
          console.log(`User deleted: ${id}`);
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Error handling ${eventType}:`, error);
    return new NextResponse(`Error handling ${eventType}`, { status: 500 });
  }
} 