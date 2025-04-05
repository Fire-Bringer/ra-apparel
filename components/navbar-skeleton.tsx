export default function NavbarSkeleton() {
  return (
    <header className="w-full border-b z-50 relative">
      {/* Desktop Navbar Skeleton */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 hidden md:flex items-center justify-between h-16">
        <div className="font-bold text-xl">RAA LOGO</div>

        <div className="flex items-center space-x-8">
          <div className="text-sm font-medium">Home</div>
          <div className="text-sm font-medium">Shop</div>
          <div className="text-sm font-medium">Product</div>
          <div className="text-sm font-medium">Contact Us</div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-5 h-5"></div>
          <div className="w-5 h-5"></div>
          <div className="w-5 h-5"></div>
        </div>
      </div>

      {/* Mobile Navbar Skeleton */}
      <div className="container mx-auto px-4 flex md:hidden items-center justify-between h-14">
        <div className="w-5 h-5"></div>
        <div className="font-bold">RAA</div>
        <div className="w-5 h-5"></div>
      </div>
    </header>
  )
}

