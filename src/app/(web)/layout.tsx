import Image from 'next/image'
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div className="min-h-screen bg-white py-8 px-4 mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/logo.png"
            alt="Matrix Institute Logo"
            width={150}
            height={75}
          />
        </div>
        {children}
        </div>
        </div>
        <Footer/>
    </>
  );
}
