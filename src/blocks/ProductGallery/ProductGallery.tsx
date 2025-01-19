'use client';

import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import type { ImgProps } from 'next/dist/shared/lib/get-img-props';
import Image, { getImageProps } from 'next/image';
import * as React from 'react';
import { useWindowSize } from 'react-use';

import { Section } from '@/components/Section/Section';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export type GalleryImage = {
  src: string;
  alt: string;
};

type ProductGalleryProps = {
  images: GalleryImage[];
};

export function ProductGallery({ images }: ProductGalleryProps) {
  const [showDialog, setShowDialog] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [nextImage, setNextImage] = React.useState<ImgProps | null>(null);
  const [prevImage, setPrevImage] = React.useState<ImgProps | null>(null);
  const { width, height } = useWindowSize();

  // Fallback to placeholder if no images provided
  const displayImages = React.useMemo(() =>
    images.length > 0
      ? images
      : [{ src: '', alt: 'Gallery image 1' }], [images]);

  // Preload next and previous images
  const preloadImages = React.useCallback(() => {
    if (displayImages.length > 1) {
      const preloadNext = (currentImageIndex + 1) % displayImages.length;
      const preloadPrev = (currentImageIndex - 1 + displayImages.length) % displayImages.length;

      const { props: nextProps } = getImageProps({
        src: displayImages[preloadNext]?.src || '',
        alt: displayImages[preloadNext]?.alt || '',
        width,
        height,
      });

      const { props: prevProps } = getImageProps({
        src: displayImages[preloadPrev]?.src || '',
        alt: displayImages[preloadPrev]?.alt || '',
        width,
        height,
      });

      setNextImage(nextProps);
      setPrevImage(prevProps);
    }
  }, [currentImageIndex, displayImages, height, width]);

  // Call preload when dialog opens or image changes
  React.useEffect(() => {
    if (showDialog) {
      preloadImages();
    }
  }, [showDialog, currentImageIndex, preloadImages]);

  const handlePrevious = () => {
    setCurrentImageIndex(prev =>
      prev === 0 ? displayImages.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentImageIndex(prev =>
      prev === displayImages.length - 1 ? 0 : prev + 1,
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      handlePrevious();
    } else if (event.key === 'ArrowRight') {
      handleNext();
    }
  };

  // Determine grid layout based on image count
  const renderGalleryGrid = () => {
    switch (true) {
      // Single image
      case displayImages.length === 1:
        return (
          <div className="grid aspect-[2/1] max-h-[864px] grid-cols-1 gap-4">
            <button
              type="button"
              className="relative flex size-full cursor-pointer items-center justify-center overflow-hidden"
              onClick={() => {
                setCurrentImageIndex(0);
                setShowDialog(true);
              }}
            >
              {displayImages[0]?.src
                ? (
                    <Image
                      src={displayImages[0].src}
                      alt={displayImages[0].alt}
                      fill
                      sizes="50vw"
                      className="object-cover transition-transform hover:scale-105"
                    />
                  )
                : (
                    <ImageIcon className="size-8" />
                  )}
            </button>
          </div>
        );
      // 2-4 images
      case displayImages.length <= 4:
        return (
          <div className="grid aspect-[2/1] max-h-[864px] grid-cols-2 gap-4">
            {displayImages.map((image, index) => (
              <button
                type="button"
                key={index}
                className="relative flex aspect-square size-full cursor-pointer items-center justify-center overflow-hidden"
                onClick={() => {
                  setCurrentImageIndex(index);
                  setShowDialog(true);
                }}
              >
                {image.src
                  ? (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="25vw"
                        className="object-cover transition-transform hover:scale-105"
                      />
                    )
                  : (
                      <ImageIcon className="size-8" />
                    )}
              </button>
            ))}
          </div>
        );
        // 5+ images
      default:
        return (
          <div className="grid aspect-[2/1] max-h-[864px] grid-cols-2 gap-4">
            {/* Left column with 4 images */}
            <div className="col-span-1 grid grid-cols-2 gap-4">
              {displayImages.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  type="button"
                  className="relative flex aspect-square size-full cursor-pointer items-center justify-center overflow-hidden"
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setShowDialog(true);
                  }}
                >
                  {image.src
                    ? (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="25vw"
                          className="object-cover transition-transform hover:scale-105"
                        />
                      )
                    : (
                        <ImageIcon className="size-8" />
                      )}
                </button>
              ))}
            </div>

            {/* Right column with large image */}
            <button
              type="button"
              className="relative col-span-1 flex aspect-square size-full cursor-pointer items-center justify-center overflow-hidden"
              onClick={() => {
                setCurrentImageIndex(4);
                setShowDialog(true);
              }}
            >
              {displayImages[4]?.src
                ? (
                    <Image
                      src={displayImages[4].src}
                      alt={displayImages[4].alt}
                      fill
                      sizes="50vw"
                      className="object-cover transition-transform hover:scale-105"
                    />
                  )
                : (
                    <ImageIcon className="size-8" />
                  )}
            </button>
          </div>
        );
    }
  };

  return (
    <Section title="Gallery">

      {renderGalleryGrid()}

      {/* Fullscreen Gallery Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogHeader className="sr-only">
          <DialogTitle>Product Gallery</DialogTitle>
          <DialogDescription>
            List of images
          </DialogDescription>
        </DialogHeader>
        <DialogContent
          className="flex h-[80vh] max-w-7xl items-center justify-center"
          onKeyDown={handleKeyDown}
        >
          <div className="relative size-full">
            <div className="relative flex size-full items-center">

              {/* Button left */}
              <Button
                variant="default"
                size="icon"
                className="absolute left-4 z-10 h-full"
                onClick={handlePrevious}
              >
                <ChevronLeft className="size-8" />
              </Button>

              {/* Current image */}
              <div className="relative size-full">
                {displayImages[currentImageIndex]?.src && (
                  <Image
                    src={displayImages[currentImageIndex]?.src || ''}
                    alt={displayImages[currentImageIndex]?.alt || ''}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                    loading="eager"
                  />
                )}
                <link
                  rel="preload"
                  as="image"
                  href={nextImage?.src}
                />
                <link
                  rel="preload"
                  as="image"
                  href={prevImage?.src}
                />
                {!displayImages[currentImageIndex]?.src && <ImageIcon className="size-8" />}
              </div>

              {/* Button right */}
              <Button
                variant="default"
                size="icon"
                className="absolute right-4 z-10 h-full"
                onClick={handleNext}
              >
                <ChevronRight className="size-8" />
              </Button>
            </div>

            {/* Image counter */}
            <div className="absolute inset-x-0 bottom-4 mx-auto w-fit bg-white/80 px-4 py-2 text-center">
              {currentImageIndex + 1}
              {' '}
              /
              {' '}
              {displayImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Section>
  );
}
