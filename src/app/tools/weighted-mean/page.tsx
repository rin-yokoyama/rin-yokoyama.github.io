'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="card">
          <h2 className="text-2xl font-bold text-primary-800 mb-6">Weighted Mean Calculator</h2>

          <div className="mb-6">
            <Link href="/tools" className="btn-secondary">← Back to Tools</Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-2">
                  Data (value error)
                </label>
                <textarea
                  id="data"
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 font-mono text-sm"
                  rows={8}
                  placeholder="1.0 0.1&#10;2.0 0.2&#10;3.0 0.15"
                />
                <p className="text-xs text-gray-500 mt-1">
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
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Result</h3>
              {result ? (
                <div className="space-y-3 text-sm">
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
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                      <p className="text-yellow-800 text-xs font-medium">
                        Given errors may be overestimated. Deviation seems to be much smaller.
                      </p>
                    </div>
                  )}

                  {result.standardDeviation > 1.5 * result.statisticalError && (
                    <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded">
                      <p className="text-orange-800 text-xs font-medium">
                        Given errors may be underestimated. There may be some systematic errors not taken into account.
                      </p>
                      {result.standardDeviation > result.statisticalError && (
                        <p className="text-orange-800 text-xs mt-1">
                          Systematic error: {Math.sqrt(result.standardDeviation ** 2 - result.statisticalError ** 2).toFixed(6)}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-500">Enter data and click Calculate</p>
              )}
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">About Weighted Mean</h4>
            <p className="text-sm text-blue-700">
              The weighted mean gives more importance to measurements with smaller uncertainties.
              The weight for each measurement is 1/σ², where σ is the uncertainty.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}