import { useState, useEffect } from 'react';
import { Plus, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GALLERY_PHOTOS } from '../../data/restaurant';
import { Button } from '../ui/Button';

interface GalleryGridProps {
  preview?: boolean;
}

export function GalleryGrid({ preview = false }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const activePhoto = selectedIndex !== null ? GALLERY_PHOTOS[selectedIndex] : null;

  const navigate = (delta: number) => {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current + delta + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <div className={`gallery-grid${preview ? ' preview' : ''}`}>
        {GALLERY_PHOTOS.map((photo, index) => (
          <Button
            key={photo.src}
            variant="ghost"
            className="gallery-tile"
            style={{ animationDelay: `${0.07 * index}s` }}
            onClick={() => setSelectedIndex(index)}
            aria-label={`Open photo: ${photo.caption}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              width={768}
              height={768}
              loading="lazy"
            />
            <span className="gallery-tile-caption">
              <Plus size={11} />
              {photo.caption}
            </span>
          </Button>
        ))}
      </div>

      {selectedIndex !== null && activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="lightbox-overlay fixed inset-0"
            onClick={() => setSelectedIndex(null)}
            aria-hidden="true"
          />

          <div
            className="lightbox-content relative z-10"
            role="dialog"
            aria-label={activePhoto.caption}
          >
            <Button
              variant="heroOutline"
              size="icon"
              className="lightbox-close"
              aria-label="Close photo"
              onClick={() => setSelectedIndex(null)}
            >
              <X />
            </Button>

            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              className="lightbox-photo"
              width={1024}
              height={768}
            />

            <div className="lightbox-caption">
              <p>
                {activePhoto.caption}{' '}
                <span className="ml-3">
                  {selectedIndex + 1} / {GALLERY_PHOTOS.length}
                </span>
              </p>
              <div className="lightbox-controls">
                <Button
                  variant="heroOutline"
                  size="icon"
                  onClick={() => navigate(-1)}
                  aria-label="Previous photo"
                >
                  <ChevronLeft />
                </Button>
                <Button
                  variant="heroOutline"
                  size="icon"
                  onClick={() => navigate(1)}
                  aria-label="Next photo"
                >
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
