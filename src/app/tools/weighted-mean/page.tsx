'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PageLayout } from '@/components/PageLayout'
import { classNames } from '@/lib/classNames'

interface DataPoint {
    value: number
    error: number
}

function calculateWeightedMean(data: DataPoint[]) {
    if (data.length === 0) {
        throw new Error('No data points provided')
    }

    // Calculate weights and weighted values
    const weights = data.map(point => 1 / (point.error * point.error))
    const weightedValues = data.map((point, i) => point.value * weights[i])

    // Weighted mean
    const wmean = weightedValues.reduce((sum, wv) => sum + wv, 0) /
        weights.reduce((sum, w) => sum + w, 0)

    // Statistical error
    const totalWeight = weights.reduce((sum, w) => sum + w, 0)
    const wmError = Math.sqrt(1 / totalWeight)

    // Standard deviation
    const weightedDeviations = data.map((point, i) => {
        const dev = point.value - wmean
        return weights[i] * dev * dev
    })
    const stdDev = Math.sqrt(
        weightedDeviations.reduce((sum, wd) => sum + wd, 0) /
        ((data.length - 1) * totalWeight)
    )

    return {
        mean: wmean,
        statisticalError: wmError,
        standardDeviation: stdDev,
        points: data.length
    }
}

export default function WeightedMean() {
    const [inputData, setInputData] = useState<string>('1.0 0.1\n2.0 0.2\n3.0 0.15')
    const [result, setResult] = useState<any>(null)
    const [error, setError] = useState<string>('')

    const handleCalculate = () => {
        try {
            setError('')

            // Parse input data
            const lines = inputData.trim().split('\n').filter(line => line.trim())
            const data: DataPoint[] = []

            for (const line of lines) {
                // Replace spaces and commas with tabs
                const normalizedLine = line.replace(/,/g, '\t').replace(/\s+/g, '\t')
                const parts = normalizedLine.split('\t').filter(part => part.trim())

                if (parts.length < 2) {
                    throw new Error(`Invalid data format in line: ${line}`)
                }

                const value = parseFloat(parts[0])
                const error = parseFloat(parts[1])

                if (isNaN(value) || isNaN(error) || error <= 0) {
                    throw new Error(`Invalid numbers in line: ${line}`)
                }

                data.push({ value, error })
            }

            if (data.length === 0) {
                throw new Error('No valid data points found')
            }

            const calcResult = calculateWeightedMean(data)
            setResult(calcResult)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error')
            setResult(null)
        }
    }

    return (
        <PageLayout>
            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <div className={classNames.card}>
                    <h2 className={classNames.heading2}>Weighted Mean Calculator</h2>

                    <div className="mb-6">
                        <Link href="/tools" className={classNames.btnSecondary}>← Back to Tools</Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="data" className={classNames.formLabel}>
                                    Data (value error)
                                </label>
                                <textarea
                                    id="data"
                                    value={inputData}
                                    onChange={(e) => setInputData(e.target.value)}
                                    className={`${classNames.formInput} font-mono text-sm`}
                                    rows={8}
                                    placeholder="1.0 0.1&#10;2.0 0.2&#10;3.0 0.15"
                                />
                                <p className={classNames.textSmall}>
                                    Enter data as: value error (space or tab separated)
                                </p>
                            </div>

                            <button
                                onClick={handleCalculate}
                                className="btn-primary w-full"
                            >
                                Calculate
                            </button>

                            {error && (
                                <div className={classNames.errorBox}>
                                    <p className={classNames.errorBoxText}>{error}</p>
                                </div>
                            )}
                        </div>

                        <div className={classNames.resultBox}>
                            <h3 className={classNames.resultBoxTitle}>Result</h3>
                            {result ? (
                                <div className="space-y-3 text-sm dark:text-gray-300">
                                    <div className="grid grid-cols-2 gap-2">
                                        <span className="font-medium">Number of points:</span>
                                        <span>{result.points}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <span className="font-medium">Mean value:</span>
                                        <span>{result.mean.toFixed(6)}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <span className="font-medium">Statistical error:</span>
                                        <span>{result.statisticalError.toFixed(6)}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <span className="font-medium">Standard deviation:</span>
                                        <span>{result.standardDeviation.toFixed(6)}</span>
                                    </div>

                                    {result.standardDeviation < 0.3 * result.statisticalError && (
                                        <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded">
                                            <p className="text-yellow-800 dark:text-yellow-200 text-xs font-medium">
                                                Given errors may be overestimated. Deviation seems to be much smaller.
                                            </p>
                                        </div>
                                    )}

                                    {result.standardDeviation > 1.5 * result.statisticalError && (
                                        <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900 border border-orange-200 dark:border-orange-700 rounded">
                                            <p className="text-orange-800 dark:text-orange-200 text-xs font-medium">
                                                Given errors may be underestimated. There may be some systematic errors not taken into account.
                                            </p>
                                            {result.standardDeviation > result.statisticalError && (
                                                <p className="text-orange-800 dark:text-orange-200 text-xs mt-1">
                                                    Systematic error: {Math.sqrt(result.standardDeviation ** 2 - result.statisticalError ** 2).toFixed(6)}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <p className={classNames.resultBoxEmpty}>Enter data and click Calculate</p>
                            )}
                        </div>
                    </div>

                    <div className={`mt-8 ${classNames.infoBox}`}>
                        <h4 className={classNames.infoBoxTitle}>About Weighted Mean</h4>
                        <p className={classNames.infoBoxText}>
                            The weighted mean gives more importance to measurements with smaller uncertainties.
                            The weight for each measurement is 1/σ², where σ is the uncertainty.
                        </p>
                    </div>
                </div>
            </main>
        </PageLayout>
    )
}