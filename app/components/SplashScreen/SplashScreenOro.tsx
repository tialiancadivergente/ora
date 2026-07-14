'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams } from 'next/navigation'

const criticalAssets = {
  images: [
    '/images/ora/v4/Group 1.png',
    '/images/hero-images.png',
    '/images/journey-background.png',
  ],
}

export default function SplashScreenOro({ children, theme }: { children: React.ReactNode; theme?: string }) {
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const paramValue = (params.temperatura as string) || ''
    const parts = paramValue.split('-')
    const isDarkValue = parts[2] || ''

    if (params.theme === '2' || isDarkValue === 'h2' || theme === '2') {
      setIsDark(false)
    } else {
      setIsDark(true)
    }
  }, [params.theme, params.temperatura, theme])

  useEffect(() => {
    const totalAssets = criticalAssets.images.length
    let loadedAssets = 0

    const updateProgress = () => {
      loadedAssets++
      const newProgress = Math.round((loadedAssets / totalAssets) * 100)
      setProgress(newProgress)

      if (loadedAssets === totalAssets) {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }
    }

    criticalAssets.images.forEach((src) => {
      const img = new Image()
      img.src = src
      img.onload = updateProgress
      img.onerror = updateProgress
    })

    const safetyTimeout = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(safetyTimeout)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#071117]"
        >
          <motion.img
            src="/images/ora/v4/Group 1.png"
            alt="Logo V4 Group"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 w-[175px]"
          />

          <div className="h-2 w-64 overflow-hidden rounded-full bg-[#07242c]">
            <motion.div
              className="h-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              style={{ backgroundColor: '#C0964B' }}
            />
          </div>
        </motion.div>
      ) : (
        <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="min-h-screen">
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}