import { NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { getUserByClerkId } from "@/services/user.service";
import { 
  getWatchlistsByUserId, 
  createWatchlist 
} from "@/services/watchlist.service";
import { successResponse, errorResponse, withErrorHandling, ApiError } from "@/lib/api-utils";

/**
 * GET /api/watchlists - Get all watchlists for the authenticated user
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

  const watchlists = await getWatchlistsByUserId(user.id);
  return successResponse(watchlists);
});

/**
 * POST /api/watchlists - Create a new watchlist
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
    const { name, coins } = await req.json();

    if (!name) {
      return errorResponse("Name is required", 400);
    }

    if (!coins || !Array.isArray(coins) || coins.length === 0) {
      return errorResponse("At least one coin is required", 400);
    }

    const watchlist = await createWatchlist({
      name,
      userId: user.id,
      coins,
    });

    return successResponse(watchlist);
  } catch (error) {
    if (error instanceof Error) {
      throw new ApiError(error.message, 400);
    }
    throw error;
  }
}); 