'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PageLayout } from '@/components/PageLayout'
import { classNames } from '@/lib/classNames'

function weisskopfHalfLife(energy: number, mass: number, transition: string): number {
    switch (transition) {
        case 'e1':
            return 6.76e-6 / (Math.pow(energy, 3) * Math.pow(mass, 2 / 3))
        case 'm2':
            return 3.10e7 / (Math.pow(energy, 5) * Math.pow(mass, 2 / 3))
        case 'e3':
            return 2.04e19 / (Math.pow(energy, 7) * Math.pow(mass, 2))
        case 'm4':
            return 2.12e32 / (Math.pow(energy, 9) * Math.pow(mass, 2))
        case 'e5':
            return 2.89e44 / (Math.pow(energy, 11) * Math.pow(mass, 10 / 3))
        case 'm1':
            return 2.20e-5 / Math.pow(energy, 3)
        case 'e2':
            return 9.52e6 / (Math.pow(energy, 5) * Math.pow(mass, 4 / 3))
        case 'm3':
            return 6.66e19 / (Math.pow(energy, 7) * Math.pow(mass, 4 / 3))
        case 'e4':
            return 6.50e31 / (Math.pow(energy, 9) * Math.pow(mass, 8 / 3))
        case 'm5':
            return 9.42e44 / (Math.pow(energy, 11) * Math.pow(mass, 8 / 3))
        default:
            throw new Error('Invalid transition type')
    }
}

const transitions = [
    { value: 'e1', label: 'E1 (Electric dipole)' },
    { value: 'm1', label: 'M1 (Magnetic dipole)' },
    { value: 'e2', label: 'E2 (Electric quadrupole)' },
    { value: 'm2', label: 'M2 (Magnetic quadrupole)' },
    { value: 'e3', label: 'E3 (Electric octupole)' },
    { value: 'm3', label: 'M3 (Magnetic octupole)' },
    { value: 'e4', label: 'E4 (Electric hexadecapole)' },
    { value: 'm4', label: 'M4 (Magnetic hexadecapole)' },
    { value: 'e5', label: 'E5 (Electric 32-pole)' },
    { value: 'm5', label: 'M5 (Magnetic 32-pole)' },
]

export default function Weisskopf() {
    const [transition, setTransition] = useState<string>('e2')
    const [energy, setEnergy] = useState<string>('1000')
    const [mass, setMass] = useState<string>('100')
    const [result, setResult] = useState<string>('')

    const handleCalculate = () => {
        const energyNum = parseFloat(energy)
        const massNum = parseFloat(mass)

        if (isNaN(energyNum) || isNaN(massNum)) {
            setResult('Invalid input')
            return
        }

        if (energyNum < 1 || energyNum > 10000) {
            setResult('Energy must be in the range: 1 to 10,000 keV')
            return
        }

        if (massNum < 1 || massNum > 300) {
            setResult('Mass must be in the range: 1 to 300 u')
            return
        }

        try {
            const halfLife = weisskopfHalfLife(energyNum, massNum, transition)
            setResult(`${halfLife.toExponential(6)} (s)`)
        } catch (error) {
            setResult('Invalid transition type')
        }
    }

    return (
        <PageLayout>
            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <div className={classNames.card}>
                    <h2 className={classNames.heading2}>Weisskopf Half-Life Calculator</h2>

                    <div className="mb-6">
                        <Link href="/tools" className={classNames.btnSecondary}>← Back to Tools</Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="transition" className={classNames.formLabel}>
                                    Transition Type
                                </label>
                                <select
                                    id="transition"
                                    value={transition}
                                    onChange={(e) => setTransition(e.target.value)}
                                    className={classNames.formSelect}
                                >
                                    {transitions.map((t) => (
                                        <option key={t.value} value={t.value}>
                                            {t.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="energy" className={classNames.formLabel}>
                                    Energy (keV)
                                </label>
                                <input
                                    type="number"
                                    id="energy"
                                    value={energy}
                                    onChange={(e) => setEnergy(e.target.value)}
                                    className={classNames.formInput}
                                    min="1"
                                    max="10000"
                                />
                            </div>

                            <div>
                                <label htmlFor="mass" className={classNames.formLabel}>
                                    Mass Number (u)
                                </label>
                                <input
                                    type="number"
                                    id="mass"
                                    value={mass}
                                    onChange={(e) => setMass(e.target.value)}
                                    className={classNames.formInput}
                                    min="1"
                                    max="300"
                                />
                            </div>

                            <button
                                onClick={handleCalculate}
                                className="btn-primary w-full"
                            >
                                Calculate
                            </button>
                        </div>

                        <div className={classNames.resultBox}>
                            <h3 className={classNames.resultBoxTitle}>Result</h3>
                            {result && (
                                <div className={classNames.resultBoxText}>
                                    <p><strong>Transition:</strong> {transitions.find(t => t.value === transition)?.label}</p>
                                    <p><strong>Energy:</strong> {energy} keV</p>
                                    <p><strong>Mass:</strong> {mass} u</p>
                                    <p><strong>Weisskopf half-life:</strong> {result}</p>
                                </div>
                            )}
                            {!result && (
                                <p className={classNames.resultBoxEmpty}>Enter values and click Calculate</p>
                            )}
                        </div>
                    </div>

                    <div className={`mt-8 ${classNames.infoBox}`}>
                        <h4 className={classNames.infoBoxTitle}>About Weisskopf Estimates</h4>
                        <p className={classNames.infoBoxText}>
                            The Weisskopf estimate provides theoretical half-lives for electromagnetic transitions
                            in atomic nuclei. These are single-particle estimates and actual half-lives may differ
                            due to collective effects and other nuclear structure phenomena.
                        </p>
                    </div>
                </div>
            </main>
        </PageLayout>
    )
}