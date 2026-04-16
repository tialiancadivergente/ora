'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Lista de assets críticos para pré-carregar
const criticalAssets = {
  images: [
    '/images/ora/v2/logo-o-resgate-dos-relacionamentos.png',
  ]
}

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    let totalAssets = criticalAssets.images.length
    let loadedAssets = 0
    
    const updateProgress = () => {
      loadedAssets++
      const newProgress = Math.round((loadedAssets / totalAssets) * 100)
      setProgress(newProgress)
      
      if (loadedAssets === totalAssets) {
        setTimeout(() => {
          setLoading(false)
        }, 800)
      }
    }
    
    criticalAssets.images.forEach(src => {
      const img = new Image()
      img.src = src
      img.onload = updateProgress
      img.onerror = updateProgress
    })
    
    const safetyTimeout = setTimeout(() => {
      setLoading(false)
    }, 4000)
    
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
          className="fixed inset-0 flex flex-col items-center justify-center z-50"
          style={{ backgroundColor: '#E9E7E4' }}
        >
          <motion.img 
            src="/images/ora/v2/logo-o-resgate-dos-relacionamentos.png"
            alt="Logo"
            className="w-[220px] md:w-[260px] h-auto mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <div className="w-64 h-2 rounded-full overflow-hidden bg-[#D6C7A1]">
            <motion.div 
              className="h-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              style={{ backgroundColor: "#C0964B" }}
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}