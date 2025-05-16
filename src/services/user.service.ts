import { Prisma } from "../generated/prisma";
import { prisma } from "@/lib/prisma";

/**
 * Create or update a user from Clerk webhook
 */
export async function upsertUser(clerkId: string, email: string) {
  try {
    return await prisma.user.upsert({
      where: { clerkId },
      update: { email },
      create: {
        clerkId,
        email,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Handle known Prisma errors
      console.error("Database error:", error.message);
    }
    throw error;
  }
}

/**
 * Get a user by clerk ID
 */
export async function getUserByClerkId(clerkId: string) {
  try {
    return await prisma.user.findUnique({
      where: { clerkId },
    });
  } catch (error) {
    console.error("Error getting user by clerk ID:", error);
    throw error;
  }
}

/**
 * Get a user by ID with optional relation includes
 */
export async function getUserById(id: string, include?: Prisma.UserInclude) {
  try {
    return await prisma.user.findUnique({
      where: { id },
      include,
    });
  } catch (error) {
    console.error("Error getting user by ID:", error);
    throw error;
  }
}

/**
 * Delete a user and all related data
 */
export async function deleteUser(id: string) {
  try {
    return await prisma.user.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
} 