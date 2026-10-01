import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, X } from 'lucide-react';
import { GIRLFRIEND_CONFIG, PhotoSlot } from '@/src/data/girlfriendData';
import { playCutePopSound } from '@/src/utils/soundEffects';

export const TwoPhotoArea: React.FC = () => {
  const [slot1] = useState<PhotoSlot>(GIRLFRIEND_CONFIG.photo1);
  const [slot2] = useState<PhotoSlot>(GIRLFRIEND_CONFIG.photo2);
  const [lightboxImage, setLightboxImage] = useState<PhotoSlot | null>(null);

  // Preload default WebP images immediately
  useEffect(() => {
    [GIRLFRIEND_CONFIG.photo1.image, GIRLFRIEND_CONFIG.photo2.image].forEach((src) => {
      if (typeof src === 'string') {
        const img = new Image();
        img.src = src;
      }
    });
  }, []);

  return (
    <section className="py-6 sm:py-10 md:py-14 relative px-3.5 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-rose-500 bg-rose-50 border border-rose-200/80 px-3.5 py-1 rounded-full mb-2">
            <Star className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Two Precious Photos</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-800">
            Khi Khi Khi 🌸
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm sm:max-w-md mx-auto">
            Two special snapshots dedicated to you. Tap any photo to enlarge it.
          </p>
        </div>

        {/* The Two Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-8 max-w-3xl mx-auto items-stretch">
          {/* PHOTO SLOT 1 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="relative bg-white p-3.5 pb-5 sm:p-4 sm:pb-6 rounded-xl sm:rounded-md shadow-md sm:shadow-lg shadow-rose-100/70 border border-rose-100 flex flex-col justify-between transition-all rotate-0 sm:-rotate-1"
          >
            {/* Washi tape */}
            <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 washi-tape z-10 -rotate-1 rounded-xs pointer-events-none" />

            <div>
              {/* Image Frame */}
              <div
                onClick={() => {
                  playCutePopSound();
                  setLightboxImage(slot1);
                }}
                className="relative aspect-4/3 w-full bg-rose-50 rounded-lg sm:rounded-sm overflow-hidden mb-3 sm:mb-4 border border-slate-100 cursor-pointer group touch-manipulation"
              >
                <img
                  src={slot1.image}
                  alt={slot1.title}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'https://placehold.co/600x450/ffe4e6/be185d?text=Photo+1';
                  }}
                />
                <span className="absolute bottom-2 right-2 text-2xl sm:text-3xl select-none drop-shadow-sm group-hover:scale-125 transition-transform duration-300">
                  {slot1.sticker}
                </span>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium">
                  Tap to view full
                </div>
              </div>

              {/* Text & Details */}
              <div className="text-center px-1 sm:px-2">
                <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest block mb-1">
                  {slot1.dateOrNote}
                </span>
                <h3 className="font-handwriting text-xl sm:text-2xl font-bold text-slate-800 leading-tight">
                  {slot1.title}
                </h3>
                <p className="font-serif-display text-xs text-slate-600 mt-1.5 sm:mt-2 italic leading-relaxed">
                  "{slot1.caption}"
                </p>
              </div>
            </div>
          </motion.div>

          {/* PHOTO SLOT 2 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="relative bg-white p-3.5 pb-5 sm:p-4 sm:pb-6 rounded-xl sm:rounded-md shadow-md sm:shadow-lg shadow-rose-100/70 border border-rose-100 flex flex-col justify-between transition-all rotate-0 sm:rotate-1"
          >
            {/* Washi tape */}
            <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 washi-tape-lavender z-10 rotate-1 rounded-xs pointer-events-none" />

            <div>
              {/* Image Frame */}
              <div
                onClick={() => {
                  playCutePopSound();
                  setLightboxImage(slot2);
                }}
                className="relative aspect-4/3 w-full bg-rose-50 rounded-lg sm:rounded-sm overflow-hidden mb-3 sm:mb-4 border border-slate-100 cursor-pointer group touch-manipulation"
              >
                <img
                  src={slot2.image}
                  alt={slot2.title}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'https://placehold.co/600x450/f5d0fe/86198f?text=Photo+2';
                  }}
                />
                <span className="absolute bottom-2 right-2 text-2xl sm:text-3xl select-none drop-shadow-sm group-hover:scale-125 transition-transform duration-300">
                  {slot2.sticker}
                </span>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium">
                  Tap to view full
                </div>
              </div>

              {/* Text & Details */}
              <div className="text-center px-1 sm:px-2">
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block mb-1">
                  {slot2.dateOrNote}
                </span>
                <h3 className="font-handwriting text-xl sm:text-2xl font-bold text-slate-800 leading-tight">
                  {slot2.title}
                </h3>
                <p className="font-serif-display text-xs text-slate-600 mt-1.5 sm:mt-2 italic leading-relaxed">
                  "{slot2.caption}"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* LIGHTBOX MODAL - 100% Full Uncropped View */}
      <AnimatePresence>
        {lightboxImage && (
          <div
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-sm sm:max-w-lg md:max-w-2xl w-full overflow-hidden shadow-2xl relative border border-rose-100 p-3.5 sm:p-5 text-center max-h-[94vh] flex flex-col items-center cursor-default"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-2.5 right-2.5 p-1.5 sm:p-2 rounded-full bg-slate-800/70 hover:bg-slate-900 text-white shadow-md cursor-pointer z-20 touch-manipulation transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Uncropped Full Image View */}
              <div className="w-full flex items-center justify-center bg-rose-50/50 rounded-xl overflow-hidden mb-3 border border-rose-100/70 p-1 sm:p-2">
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="max-h-[60vh] sm:max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-2xs"
                />
              </div>

              {/* Text & Details */}
              <div className="shrink-0 w-full px-1">
                <span className="text-[10px] sm:text-[11px] font-bold text-rose-500 uppercase tracking-widest block mb-1">
                  {lightboxImage.dateOrNote}
                </span>
                <h4 className="font-handwriting text-2xl sm:text-3xl font-bold text-slate-800 leading-tight">
                  {lightboxImage.title}
                </h4>
                <p className="font-serif-display text-xs sm:text-sm text-slate-600 mt-1 italic leading-relaxed max-w-md mx-auto">
                  "{lightboxImage.caption}"
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
