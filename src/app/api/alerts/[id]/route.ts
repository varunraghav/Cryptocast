import { NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { getUserByClerkId } from "@/services/user.service";
import { 
  getAlertById, 
  updateAlert,
  deleteAlert
} from "@/services/alert.service";
import { successResponse, errorResponse, withErrorHandling, ApiError } from "@/lib/api-utils";

/**
 * GET /api/alerts/[id] - Get a specific alert
 */
export const GET = withErrorHandling(async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { userId } = await getAuth(req);

  if (!userId) {
    return errorResponse("Unauthorized", 401);
  }

  const user = await getUserByClerkId(userId);

  if (!user) {
    return errorResponse("User not found", 404);
  }

  const alert = await getAlertById(params.id, user.id);

  if (!alert) {
    return errorResponse("Alert not found", 404);
  }

  return successResponse(alert);
});

/**
 * PUT /api/alerts/[id] - Update an alert
 */
export const PUT = withErrorHandling(async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { userId } = getAuth();

  if (!userId) {
    return errorResponse("Unauthorized", 401);
  }

  const user = await getUserByClerkId(userId);

  if (!user) {
    return errorResponse("User not found", 404);
  }

  const alert = await getAlertById(params.id, user.id);

  if (!alert) {
    return errorResponse("Alert not found", 404);
  }

  try {
    const { type, coinSymbol, threshold, condition, channels, isActive } = await req.json();
    
    const updatedAlert = await updateAlert({
      id: params.id,
      type,
      coinSymbol,
      threshold,
      condition,
      channels,
      isActive,
    });

    return successResponse(updatedAlert);
  } catch (error) {
    if (error instanceof Error) {
      throw new ApiError(error.message, 400);
    }
    throw error;
  }
});

/**
 * DELETE /api/alerts/[id] - Delete an alert
 */
export const DELETE = withErrorHandling(async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { userId } = getAuth();

  if (!userId) {
    return errorResponse("Unauthorized", 401);
  }

  const user = await getUserByClerkId(userId);

  if (!user) {
    return errorResponse("User not found", 404);
  }

  const alert = await getAlertById(params.id, user.id);

  if (!alert) {
    return errorResponse("Alert not found", 404);
  }

  await deleteAlert(params.id);

  return successResponse({ id: params.id });
}); 