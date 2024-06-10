import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import Link from "next/link";

const DesignPrinciples = () => {
  const principles = [
    { name: "Balance", link: "/design-principles/balance" },
    { name: "Contrast", link: "/design-principles/contrast" },
    { name: "Alignment", link: "/design-principles/alignment" },
    { name: "Repetition", link: "/design-principles/repetition" },
    { name: "Proximity", link: "/design-principles/proximity" },
    { name: "Color Theory", link: "/design-principles/color-theory" },
    { name: "Typography", link: "/design-principles/typography" },
    {
      name: "Layout and Composition",
      link: "/design-principles/layout-composition",
    },
    { name: "Visual Hierarchy", link: "/design-principles/visual-hierarchy" },
    { name: "Accessibility", link: "/design-principles/accessibility" },
  ];

  return (
    <div className="bg-[#f8f7f4]">
      <Header />
      <div className="max-w-7xl bg-[] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-medium source_serif text-gray-900">
            Design Principles
          </h1>
          <p className="mt-4 text-lg text-left text-gray-600">
            Design principles are foundational guidelines that ensure a design
            is aesthetically pleasing, functional, and user-friendly. Mastering
            these principles allows designers to create visually appealing and
            effective designs that communicate their intended message clearly
            and efficiently.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle) => (
            <Link href={principle.link}>
              <div
                key={principle.name}
                className="p-8 bg-[#f0efea] text-left rounded-xl transform hover:scale-110 transition-transform duration-300"
              >
                <div className="flex items-center justify-center text-[#3C665E]">
                  <h3 className="text-2xl font-semibold">{principle.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default DesignPrinciples;
