/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { FloatingHearts } from '@/src/components/FloatingHearts';
import { Navbar } from '@/src/components/Navbar';
import { HeroSection } from '@/src/components/HeroSection';
import { TwoPhotoArea } from '@/src/components/TwoPhotoArea';
import { LoveLetterEnvelope } from '@/src/components/LoveLetterEnvelope';
import { Footer } from '@/src/components/Footer';
import { toggleBackgroundMusic } from '@/src/utils/soundEffects';

export default function App() {
  const [kissCount, setKissCount] = useState(0);
  const [isMusicOn, setIsMusicOn] = useState(false);

  // Load kiss count from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('girlfriend_kiss_count');
      if (saved !== null) {
        const parsed = parseInt(saved, 10);
        // If it was the previous default 108, reset to 0
        if (parsed === 108) {
          localStorage.setItem('girlfriend_kiss_count', '0');
          setKissCount(0);
        } else if (!isNaN(parsed)) {
          setKissCount(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSendKiss = () => {
    setKissCount((prev) => {
      const updated = prev + 1;
      try {
        localStorage.setItem('girlfriend_kiss_count', updated.toString());
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleToggleMusic = () => {
    toggleBackgroundMusic((playing) => {
      setIsMusicOn(playing);
    });
  };

  return (
    <div className="relative min-h-screen bg-rose-50/30 text-slate-800 flex flex-col font-sans selection:bg-rose-200 selection:text-rose-900">
      {/* Gentle Floating Hearts Background */}
      <FloatingHearts />

      {/* Clean Navbar */}
      <Navbar
        isMusicOn={isMusicOn}
        onToggleMusic={handleToggleMusic}
        kissCount={kissCount}
      />

      {/* Main Content: Hero, Two Photo Area, and Cute Love Letter */}
      <main className="flex-1 relative z-10">
        <HeroSection onSendKiss={handleSendKiss} kissCount={kissCount} />
        <div id="photos">
          <TwoPhotoArea />
        </div>
        <LoveLetterEnvelope />
      </main>

      {/* Sweet Simple Footer */}
      <Footer />
    </div>
  );
}
