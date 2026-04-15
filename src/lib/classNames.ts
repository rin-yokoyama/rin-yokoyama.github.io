// Centralized className utilities for consistent dark mode styling across pages

export const classNames = {
  // Page layout
  pageContainer: 'min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800',

  // Headings
  heading2: 'text-2xl font-bold text-primary-800 dark:text-primary-200 mb-4',
  heading3: 'text-xl font-bold text-primary-800 dark:text-primary-200 mb-4',
  heading4: 'font-semibold text-gray-800 dark:text-gray-100',

  // Text
  textDefault: 'text-gray-700 dark:text-gray-300',
  textMuted: 'text-gray-600 dark:text-gray-400',
  textSmall: 'text-sm text-gray-600 dark:text-gray-400',
  textLink: 'text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300',

  // Buttons
  btnSecondary: 'inline-block bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-medium py-2 px-4 rounded-lg transition-colors',

  // Cards & containers
  card: 'card mb-8',

  // Borders & dividers
  borderLeft: 'border-l-4 border-primary-500 dark:border-primary-400 pl-4',

  // Lists
  bulletList: 'list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300',

  // Form inputs
  formInput: 'w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500',
  formLabel: 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2',
  formSelect: 'w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500',

  // Result boxes
  resultBox: 'bg-gray-50 dark:bg-gray-700 p-4 rounded-lg',
  resultBoxTitle: 'text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4',
  resultBoxText: 'space-y-2 text-sm',
  resultBoxEmpty: 'text-gray-500 dark:text-gray-400',

  // Info boxes
  infoBox: 'p-4 rounded-lg bg-blue-50 dark:bg-blue-900',
  infoBoxTitle: 'font-semibold text-blue-800 dark:text-blue-200 mb-2',
  infoBoxText: 'text-sm text-blue-700 dark:text-blue-300',

  // Error boxes
  errorBox: 'p-3 bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-md',
  errorBoxText: 'text-red-700 dark:text-red-200 text-sm',
}

// Helper to combine classNames
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
