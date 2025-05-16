import { NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { getUserByClerkId } from "@/services/user.service";
import { successResponse, errorResponse, withErrorHandling } from "@/lib/api-utils";

/**
 * GET /api/user - Get the current authenticated user
 */
export const GET = withErrorHandling(async (req: NextRequest) => {
  const { userId } = getAuth();

  if (!userId) {
    return errorResponse("Unauthorized", 401);
  }

  const user = await getUserByClerkId(userId);

  if (!user) {
    return errorResponse("User not found", 404);
  }

  // Don't return sensitive fields
  return successResponse({
    id: user.id,
    email: user.email,
    clerkId: user.clerkId,
    createdAt: user.createdAt,
  });
}); 