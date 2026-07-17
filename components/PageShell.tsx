import Nav from "./Nav";
import Footer from "./Footer";

/**
 * Standard page wrapper. `navVariant="overlay"` (default) floats a transparent
 * nav over the hero; `"solid"` renders the dark nav bar used on blog posts.
 */
export default function PageShell({
  children,
  navVariant = "overlay",
}: {
  children: React.ReactNode;
  navVariant?: "overlay" | "solid";
}) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-body">
      <Nav variant={navVariant} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
