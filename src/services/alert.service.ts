import { Prisma } from "../generated/prisma";
import { prisma } from "@/lib/prisma";

type CreateAlertInput = {
  userId: string;
  type: string;
  coinSymbol: string;
  threshold: number;
  condition: string;
  channels: string[];
};

type UpdateAlertInput = {
  id: string;
  type?: string;
  coinSymbol?: string;
  threshold?: number;
  condition?: string;
  channels?: string[];
  isActive?: boolean;
};

/**
 * Get all alerts for a user
 */
export async function getAlertsByUserId(userId: string) {
  try {
    return await prisma.alert.findMany({
      where: { userId },
      include: {
        alertEvents: {
          orderBy: {
            triggeredAt: "desc",
          },
          take: 5,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error("Error getting alerts:", error);
    throw error;
  }
}

/**
 * Get an alert by ID
 */
export async function getAlertById(id: string, userId: string) {
  try {
    return await prisma.alert.findFirst({
      where: {
        id,
        userId,
      },
      include: {
        alertEvents: {
          orderBy: {
            triggeredAt: "desc",
          },
        },
      },
    });
  } catch (error) {
    console.error("Error getting alert:", error);
    throw error;
  }
}

/**
 * Create a new alert
 */
export async function createAlert({
  userId,
  type,
  coinSymbol,
  threshold,
  condition,
  channels,
}: CreateAlertInput) {
  try {
    return await prisma.alert.create({
      data: {
        userId,
        type,
        coinSymbol,
        threshold,
        condition,
        channels: JSON.stringify(channels),
        isActive: true,
      },
    });
  } catch (error) {
    console.error("Error creating alert:", error);
    throw error;
  }
}

/**
 * Update an alert
 */
export async function updateAlert({
  id,
  type,
  coinSymbol,
  threshold,
  condition,
  channels,
  isActive,
}: UpdateAlertInput) {
  try {
    const updateData: Prisma.AlertUpdateInput = {};

    if (type !== undefined) updateData.type = type;
    if (coinSymbol !== undefined) updateData.coinSymbol = coinSymbol;
    if (threshold !== undefined) updateData.threshold = threshold;
    if (condition !== undefined) updateData.condition = condition;
    if (channels !== undefined) updateData.channels = JSON.stringify(channels);
    if (isActive !== undefined) updateData.isActive = isActive;

    return await prisma.alert.update({
      where: { id },
      data: updateData,
    });
  } catch (error) {
    console.error("Error updating alert:", error);
    throw error;
  }
}

/**
 * Delete an alert
 */
export async function deleteAlert(id: string) {
  try {
    return await prisma.alert.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Error deleting alert:", error);
    throw error;
  }
}

/**
 * Create an alert event
 */
export async function createAlertEvent(alertId: string, details: Record<string, any>) {
  try {
    return await prisma.alertEvent.create({
      data: {
        alertId,
        details: JSON.stringify(details),
      },
    });
  } catch (error) {
    console.error("Error creating alert event:", error);
    throw error;
  }
} 