
/**
 * Utility for generating responsive image srcsets and optimized URLs
 */

export const generateSrcSet = (baseUrl, widths = [320, 640, 768, 1024, 1280, 1536]) => {
  if (!baseUrl) return '';
  
  // If it's a local SVG or already optimized format, return as is
  if (baseUrl.endsWith('.svg')) return baseUrl;

  // Mocking CDN behavior for responsive images
  // In a real production environment with an image CDN (like Cloudinary, Imgix, or Vercel Image Optimization),
  // this would append width parameters (e.g., ?w=320&q=75&fm=webp)
  return widths.map(w => `${baseUrl}?w=${w}&q=75&fm=webp ${w}w`).join(', ');
};

export const getOptimizedUrl = (url, width = 800) => {
  if (!url || url.endsWith('.svg')) return url;
  return `${url}?w=${width}&q=75&fm=webp`;
};
