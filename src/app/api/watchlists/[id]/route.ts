import { NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { getUserByClerkId } from "@/services/user.service";
import { 
  getWatchlistById, 
  updateWatchlist,
  deleteWatchlist
} from "@/services/watchlist.service";
import { successResponse, errorResponse, withErrorHandling, ApiError } from "@/lib/api-utils";

/**
 * GET /api/watchlists/[id] - Get a specific watchlist
 */
export const GET = withErrorHandling(async (
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

  const watchlist = await getWatchlistById(params.id, user.id);

  if (!watchlist) {
    return errorResponse("Watchlist not found", 404);
  }

  return successResponse(watchlist);
});

/**
 * PUT /api/watchlists/[id] - Update a watchlist
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

  const watchlist = await getWatchlistById(params.id, user.id);

  if (!watchlist) {
    return errorResponse("Watchlist not found", 404);
  }

  try {
    const { name, coins } = await req.json();
    
    const updatedWatchlist = await updateWatchlist({
      id: params.id,
      name,
      coins,
    });

    return successResponse(updatedWatchlist);
  } catch (error) {
    if (error instanceof Error) {
      throw new ApiError(error.message, 400);
    }
    throw error;
  }
});

/**
 * DELETE /api/watchlists/[id] - Delete a watchlist
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

  const watchlist = await getWatchlistById(params.id, user.id);

  if (!watchlist) {
    return errorResponse("Watchlist not found", 404);
  }

  await deleteWatchlist(params.id);

  return successResponse({ id: params.id });
}); 