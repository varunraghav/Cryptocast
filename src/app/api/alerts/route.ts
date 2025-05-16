import { NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { getUserByClerkId } from "@/services/user.service";
import { 
  getAlertsByUserId, 
  createAlert 
} from "@/services/alert.service";
import { successResponse, errorResponse, withErrorHandling, ApiError } from "@/lib/api-utils";

/**
 * GET /api/alerts - Get all alerts for the authenticated user
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

  const alerts = await getAlertsByUserId(user.id);
  return successResponse(alerts);
});

/**
 * POST /api/alerts - Create a new alert
 */
export const POST = withErrorHandling(async (req: NextRequest) => {
  const { userId } = getAuth();

  if (!userId) {
    return errorResponse("Unauthorized", 401);
  }

  const user = await getUserByClerkId(userId);

  if (!user) {
    return errorResponse("User not found", 404);
  }

  try {
    const { type, coinSymbol, threshold, condition, channels } = await req.json();

    if (!type) {
      return errorResponse("Alert type is required", 400);
    }

    if (!coinSymbol) {
      return errorResponse("Coin symbol is required", 400);
    }

    if (threshold === undefined) {
      return errorResponse("Threshold is required", 400);
    }

    if (!condition) {
      return errorResponse("Condition is required", 400);
    }

    if (!channels || !Array.isArray(channels) || channels.length === 0) {
      return errorResponse("At least one delivery channel is required", 400);
    }

    const alert = await createAlert({
      userId: user.id,
      type,
      coinSymbol,
      threshold,
      condition,
      channels,
    });

    return successResponse(alert);
  } catch (error) {
    if (error instanceof Error) {
      throw new ApiError(error.message, 400);
    }
    throw error;
  }
}); 