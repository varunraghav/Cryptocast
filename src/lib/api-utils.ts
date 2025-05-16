import { NextResponse } from "next/server";

export type ApiResponse<T = any> = {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code?: string;
  };
};

export function successResponse<T>(data: T): NextResponse<ApiResponse<T>> {
  return NextResponse.json({
    success: true,
    data,
  });
}

export function errorResponse(
  message: string,
  status: number = 400,
  code?: string
): NextResponse<ApiResponse<null>> {
  return NextResponse.json(
    {
      success: false,
      error: {
        message,
        code,
      },
    },
    { status }
  );
}

export class ApiError extends Error {
  status: number;
  code?: string;

  constructor(message: string, status: number = 400, code?: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
  }
}

/**
 * Wraps an API handler with error handling
 */
export function withErrorHandling(
  handler: Function
): (req: Request, context?: any) => Promise<NextResponse> {
  return async (req: Request, context?: any) => {
    try {
      return await handler(req, context);
    } catch (error) {
      console.error("API Error:", error);

      if (error instanceof ApiError) {
        return errorResponse(error.message, error.status, error.code);
      }
      
      return errorResponse(
        error instanceof Error ? error.message : "An unexpected error occurred",
        500
      );
    }
  };
} 