import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface ScrollIndicatorProps {
  href: string;
  className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ href, className }) => {
  return (
    <Link
      href={href}
      aria-label="Scroll to next section"
      className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-mutedTerracotta hover:text-brandCoral transition-colors duration-300 ${className}`}
    >
      <ChevronDown size={36} className="animate-bounce" />
    </Link>
  );
};

export default ScrollIndicator;