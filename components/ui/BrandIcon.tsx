import * as React from "react"
import { Globe, Pen, Search, Image as ImageIcon, Mic, Video, Presentation, type LucideIcon } from "lucide-react"

// SVG paths extracted from simple-icons and official repos
const BRAND_SVGS: Record<string, { path: string; color: string; viewBox?: string }> = {
  chatgpt: {
    path: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z",
    color: "#10A37F",
  },
  claude: {
    path: "M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z",
    color: "#D97757",
  },
  perplexity: {
    path: "M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z",
    color: "#22B8CD",
  },
  "notion ai": {
    path: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z",
    color: "#000000",
    viewBox: "0 0 24 24"
  },
  elevenlabs: {
    path: "M4.6035 0v24h4.9317V0zm9.8613 0v24h4.9317V0z",
    color: "#000000",
  },
  runway: {
    path: "M4 4h7v16H4zm9 0h7v6h-7zm0 10h7v6h-7z", // custom geometric R/squares style
    color: "var(--accent)",
  },
  gamma: {
    path: "M4 4h16v16H4zM9 9v6h6V9H9z", // custom geometric G style
    color: "var(--accent)",
  },
  midjourney: {
    path: "M12 2l8 8-8 8-8-8 8-8zm0 4L8 10l4 4 4-4-4-4z", // sleek geometric sailboat/M approximation
    color: "var(--accent)",
  },
  descript: {
    path: "M4 4h16v16H4z m4 4v8h6a4 4 0 0 0 0-8H8z", // custom geometric D
    color: "var(--accent)",
  },
  heygen: {
    path: "M4 4h4v6h8V4h4v16h-4v-6H8v6H4V4z", // sleek H lettermark
    color: "var(--accent)",
  },
  gemini: {
    path: "M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z",
    color: "#8E75B2",
  },
  notebooklm: {
    path: "M5 3h11a3 3 0 0 1 3 3v15l-3-2-3 2-3-2-3 2-3-2V6a3 3 0 0 1 3-3zm3 5v2h8V8H8zm0 4v2h6v-2H8z",
    color: "#0D9488",
  },
}

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  writing: Pen,
  research: Search,
  image: ImageIcon,
  voice: Mic,
  video: Video,
  presentation: Presentation,
}

interface BrandIconProps {
  name: string
  category?: string
  size?: number
  className?: string
}

export function BrandIcon({ name, category, size = 20, className = "" }: BrandIconProps) {
  const brand = BRAND_SVGS[name.toLowerCase()]

  // Fallback to Lucide icon if not mapped
  if (!brand) {
    const FallbackIcon = CATEGORY_ICONS[category?.toLowerCase() ?? ""] ?? Globe
    return <FallbackIcon size={size} className={className || "text-accent"} />
  }

  // Raw inline SVG to guarantee it loads instantly and perfectly
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox={brand.viewBox || "0 0 24 24"} 
      className={className} 
      style={{ fill: brand.color, overflow: 'visible' }}
    >
      <path d={brand.path} />
    </svg>
  )
}
