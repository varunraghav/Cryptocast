import { Prisma } from "../generated/prisma";
import { prisma } from "@/lib/prisma";

type CreateWatchlistInput = {
  name: string;
  userId: string;
  coins: string[];
};

type UpdateWatchlistInput = {
  id: string;
  name?: string;
  coins?: string[];
};

/**
 * Get all watchlists for a user
 */
export async function getWatchlistsByUserId(userId: string) {
  try {
    return await prisma.watchlist.findMany({
      where: { userId },
      include: {
        coins: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error("Error getting watchlists:", error);
    throw error;
  }
}

/**
 * Get a watchlist by ID
 */
export async function getWatchlistById(id: string, userId: string) {
  try {
    return await prisma.watchlist.findFirst({
      where: {
        id,
        userId,
      },
      include: {
        coins: true,
      },
    });
  } catch (error) {
    console.error("Error getting watchlist:", error);
    throw error;
  }
}

/**
 * Create a new watchlist with coins
 */
export async function createWatchlist({ name, userId, coins }: CreateWatchlistInput) {
  try {
    return await prisma.watchlist.create({
      data: {
        name,
        userId,
        coins: {
          create: coins.map((coinSymbol) => ({
            coinSymbol,
          })),
        },
      },
      include: {
        coins: true,
      },
    });
  } catch (error) {
    console.error("Error creating watchlist:", error);
    throw error;
  }
}

/**
 * Update a watchlist
 */
export async function updateWatchlist({ id, name, coins }: UpdateWatchlistInput) {
  try {
    // Start a transaction to update both the watchlist and its coins
    return await prisma.$transaction(async (tx) => {
      let watchlist = await tx.watchlist.findUnique({
        where: { id },
        include: { coins: true },
      });

      if (!watchlist) {
        throw new Error(`Watchlist with ID ${id} not found`);
      }

      // Update the watchlist name if provided
      if (name) {
        watchlist = await tx.watchlist.update({
          where: { id },
          data: { name },
          include: { coins: true },
        });
      }

      // Update coins if provided
      if (coins) {
        // Delete existing coins
        await tx.watchlistCoin.deleteMany({
          where: { watchlistId: id },
        });

        // Add new coins
        await Promise.all(
          coins.map((coinSymbol) =>
            tx.watchlistCoin.create({
              data: {
                watchlistId: id,
                coinSymbol,
              },
            })
          )
        );

        // Get the updated watchlist with new coins
        watchlist = await tx.watchlist.findUnique({
          where: { id },
          include: { coins: true },
        });
      }

      return watchlist;
    });
  } catch (error) {
    console.error("Error updating watchlist:", error);
    throw error;
  }
}

/**
 * Delete a watchlist
 */
export async function deleteWatchlist(id: string) {
  try {
    return await prisma.watchlist.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Error deleting watchlist:", error);
    throw error;
  }
} 