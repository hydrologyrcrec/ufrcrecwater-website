import Image from "next/image";
import Link from "next/link";

/**
 * HeaderLogo
 * WHY:
 * - Isolated so logo changes don't affect navigation
 * - Uses Next.js Image for optimization and performance
 */
export function HeaderLogo() {
  return (
    <Link
      href="/"
      aria-label="Go to home"
      className="shrink-0 rounded-md bg-white "
    >
      <Image
        src="/uf-ifas-logo.jpg"
        alt="UF IFAS Logo"
        width={150}
        height={180}
        className="border-2"
        priority
        // WHY: priority improves LCP (Largest Contentful Paint) for the header logo
      />
    </Link>
  );
}
