"use client";

import { useState, useEffect } from "react";
import { ApiResponse } from "./api-utils";
import React from "react";

type FetchState<T> = {
  data: T | null;
  error: string | null;
  isLoading: boolean;
};

/**
 * Generic hook for fetching data from the API
 */
export function useFetch<T>(url: string, options?: RequestInit) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    error: null,
    isLoading: true,
  });
  
  // Check for cached data first
  const cacheKey = `fetch-cache-${url}`;
  
  useEffect(() => {
    // Try to get from cache first
    try {
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        // Cache is valid for 60 seconds
        if (Date.now() - timestamp < 60000) {
          setState({
            data,
            error: null,
            isLoading: false,
          });
          return; // Use cached data, don't fetch
        }
      }
    } catch (e) {
      // Invalid cache, continue with fetch
      console.error("Cache error:", e);
    }
    
    const abortController = new AbortController();
    const signal = abortController.signal;
    let isFetching = true;

    setState((prev) => ({ ...prev, isLoading: true }));

    // Use a debounce to prevent rapid repeated fetches
    const timeoutId = setTimeout(async () => {
      if (!isFetching) return;
      
      try {
        const response = await fetch(url, {
          ...options,
          signal,
          headers: {
            ...options?.headers,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.error?.message || "An error occurred"
          );
        }

        const json = await response.json() as ApiResponse<T>;
        
        if (!json.success) {
          throw new Error(json.error?.message || "An error occurred");
        }

        // Store in cache
        sessionStorage.setItem(cacheKey, JSON.stringify({
          data: json.data,
          timestamp: Date.now()
        }));

        setState({
          data: json.data,
          error: null,
          isLoading: false,
        });
      } catch (error) {
        if (signal.aborted) return;
        
        setState({
          data: null,
          error: error instanceof Error ? error.message : "An error occurred",
          isLoading: false,
        });
      }
    }, 100); // Small debounce to prevent rapid repeated fetches

    return () => {
      isFetching = false;
      clearTimeout(timeoutId);
      abortController.abort();
    };
  }, [url]);

  return state;
}

/**
 * Hook for fetching the current user
 */
export function useCurrentUser() {
  return useFetch<{
    id: string;
    email: string;
    clerkId: string;
    createdAt: string;
  }>("/api/user");
}

/**
 * Hook for fetching watchlists
 */
export function useWatchlists() {
  return useFetch<any[]>("/api/watchlists");
}

/**
 * Hook for fetching a specific watchlist
 */
export function useWatchlist(id: string) {
  return useFetch<any>(`/api/watchlists/${id}`);
}

/**
 * Hook for fetching sentiment data
 */
export function useSentiment(coin: string, from?: string, to?: string) {
  // Memoize the URL so it doesn't change on each render
  const urlString = React.useMemo(() => {
    // Check if window is defined (client-side only)
    const baseUrl = typeof window !== 'undefined' 
      ? window.location.origin 
      : '';
    
    // Use relative URL if on server-side
    const url = baseUrl 
      ? new URL(`/api/sentiment/${coin}`, baseUrl)
      : { pathname: `/api/sentiment/${coin}`, searchParams: new URLSearchParams() };
    
    if (from) url.searchParams.append("from", from);
    if (to) url.searchParams.append("to", to);
    
    return typeof window !== 'undefined' 
      ? url.toString()
      : `${url.pathname}?${url.searchParams.toString()}`;
  }, [coin, from, to]);
  
  return useFetch<any>(urlString);
}

/**
 * Hook for fetching alerts
 */
export function useAlerts() {
  return useFetch<any[]>("/api/alerts");
}

/**
 * Hook for fetching a specific alert
 */
export function useAlert(id: string) {
  return useFetch<any>(`/api/alerts/${id}`);
} 