// src/hooks/useAnalysisCache.ts
// Optional advanced solution for preventing repeated API calls

import { useState, useEffect, useRef } from 'react';

interface AnalysisData {
    keywordAnalysis: any;
    atsAnalysis: any;
    competitorAnalysis: any;
}

interface UseAnalysisCacheProps {
    resumeData: any;
    targetRole: string;
    isApplyingOptimization: boolean;
    activeTab: string;
}

export function useAnalysisCache({
    resumeData,
    targetRole,
    isApplyingOptimization,
    activeTab
}: UseAnalysisCacheProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Cache to prevent duplicate requests
    const cacheRef = useRef<Map<string, AnalysisData>>(new Map());
    const requestRef = useRef<Promise<AnalysisData> | null>(null);

    // Generate cache key
    const cacheKey = `${targetRole}-${JSON.stringify(resumeData)}`;

    const fetchAnalysis = async (): Promise<AnalysisData> => {
        // Check cache first
        const cached = cacheRef.current.get(cacheKey);
        if (cached) {
            return cached;
        }

        // If there's already a request in flight, wait for it
        if (requestRef.current) {
            return requestRef.current;
        }

        // Start new request
        const request = fetch('/api/analysis', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ resumeData, targetRole })
        }).then(async (response) => {
            if (!response.ok) {
                throw new Error(`Analysis request failed: ${response.status}`);
            }
            return response.json();
        }).then((data) => {
            // Cache the result
            cacheRef.current.set(cacheKey, data);
            return data;
        }).finally(() => {
            // Clear the request reference
            requestRef.current = null;
        });

        requestRef.current = request;
        return request;
    };

    useEffect(() => {
        // Skip if conditions aren't met
        if (!targetRole || isApplyingOptimization) return;
        if (activeTab !== 'analysis' && analysisData) return; // Only fetch when needed

        let cancelled = false;

        const loadAnalysis = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const data = await fetchAnalysis();

                if (!cancelled) {
                    setAnalysisData(data);
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err instanceof Error ? err.message : 'Analysis failed');
                    console.error('Analysis error:', err);
                }
            } finally {
                if (!cancelled) {
                    setIsLoading(false);
                }
            }
        };

        // Debounce the request
        const timeoutId = setTimeout(loadAnalysis, 1000);

        return () => {
            cancelled = true;
            clearTimeout(timeoutId);
        };
    }, [cacheKey, activeTab, isApplyingOptimization]);

    // Clear cache when optimization is applied
    const clearCache = () => {
        cacheRef.current.clear();
        setAnalysisData(null);
    };

    return {
        isLoading,
        error,
        keywordAnalysis: analysisData?.keywordAnalysis || null,
        atsAnalysis: analysisData?.atsAnalysis || null,
        marketAnalysis: analysisData?.competitorAnalysis || null,
        clearCache
    };
}

// Usage in BuilderClient.tsx (replace the existing analysis logic):
/*
const {
    isLoading: isAnalysisLoading,
    keywordAnalysis,
    atsAnalysis,
    marketAnalysis,
    clearCache
} = useAnalysisCache({
    resumeData,
    targetRole: job?.targetRole || '',
    isApplyingOptimization,
    activeTab
});

// In applyOptimizations function, call clearCache() after applying changes
*/