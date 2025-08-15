import Header from "@/components/Base/HeaderEnhanced";
import "../globals.css";
import "./layout.css"; // Custom CSS for layout
import Footer from "@/components/Base/FooterEnhanced";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}