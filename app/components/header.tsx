// components/header.tsx
import Link from 'next/link'
import Image from 'next/image'

const specialties = [
  { name: "Rheumatology", icon: "/icon/Icons_rheumatology-768x769.webp" },
  { name: "Psychology", icon: "/icon/Icons_Psychology-768x768.webp" },
  { name: "Nutrition & Dietetics", icon: "/icon/Icons_Nutrition-Dietetics-768x768.webp" },
  { name: "Family Medicine", icon: "/icon/Icons_Family-Medicine-768x768.webp" },
  // Add all other specialties here...
];

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Clinic Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-base font-medium text-gray-900 hover:text-blue-600">
              Home
            </Link>
            {specialties.slice(0, 5).map((specialty) => (
              <Link 
                key={specialty.name}
                href={`/specialties/${specialty.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-base font-medium text-gray-900 hover:text-blue-600"
              >
                {specialty.name}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button */}
          </div>
        </div>
      </div>
    </header>
  )
}