'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

function calculateNeutronEnergy(tof: number, flightLength: number): number {
  const v = flightLength / (tof * 1e-9) // velocity in m/s
  const c = 299792458 // speed of light in m/s
  const beta = (v * v) / (c * c)
  const gamma = 1 / Math.sqrt(1 - beta)
  const mass = 939565.4133 // neutron mass in keV
  return mass * (gamma - 1)
}

export default function NeutronEnergy() {
  const [tof, setTof] = useState<string>('100.0')
  const [flightLength, setFlightLength] = useState<string>('1.05')
  const [result, setResult] = useState<string>('')

  const handleCalculate = () => {
    const tofNum = parseFloat(tof)
    const flNum = parseFloat(flightLength)

    if (isNaN(tofNum) || isNaN(flNum)) {
      setResult('Invalid input')
      return
    }

    if (tofNum <= 0) {
      setResult('ToF must be a positive value.')
      return
    }

    if (flNum <= 0) {
      setResult('Flight length must be a positive value.')
      return
    }

    const energy = calculateNeutronEnergy(tofNum, flNum)
    setResult(`${energy.toFixed(6)} (keV)`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="card">
          <h2 className="text-2xl font-bold text-primary-800 mb-6">Neutron Energy Calculator</h2>

          <div className="mb-6">
            <Link href="/tools" className="btn-secondary">← Back to Tools</Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="tof" className="block text-sm font-medium text-gray-700 mb-2">
                  Time of Flight (ns)
                </label>
                <input
                  type="number"
                  id="tof"
                  value={tof}
                  onChange={(e) => setTof(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  step="0.1"
                />
              </div>

              <div>
                <label htmlFor="flightLength" className="block text-sm font-medium text-gray-700 mb-2">
                  Flight Length (m)
                </label>
                <input
                  type="number"
                  id="flightLength"
                  value={flightLength}
                  onChange={(e) => setFlightLength(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  step="0.01"
                />
              </div>

              <button
                onClick={handleCalculate}
                className="btn-primary w-full"
              >
                Calculate
              </button>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Result</h3>
              {result && (
                <div className="space-y-2 text-sm">
                  <p><strong>ToF:</strong> {tof} (ns)</p>
                  <p><strong>Flight length:</strong> {flightLength} (m)</p>
                  <p><strong>Neutron energy:</strong> {result}</p>
                </div>
              )}
              {!result && (
                <p className="text-gray-500">Enter values and click Calculate</p>
              )}
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Formula</h4>
            <p className="text-sm text-blue-700">
              The neutron energy is calculated using relativistic kinematics:<br />
              E = m₀c²(γ - 1), where γ = 1/√(1-β²) and β = v/c
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}