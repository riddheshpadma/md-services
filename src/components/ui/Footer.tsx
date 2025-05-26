// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-[#5C213C] text-white py-6">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Mandala DevHub. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }