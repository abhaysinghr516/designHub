import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import Link from "next/link";

const DesignPrinciples = () => {
  const principles = [
    {
      name: "Balance",
      description:
        "Distribution of visual weight to create harmony and stability in a design.",
      link: "/design-principles/balance",
    },
    {
      name: "Contrast",
      description:
        "Use of opposing elements to create visual interest and emphasis.",
      link: "/design-principles/contrast",
    },
    {
      name: "Alignment",
      description: "Arrangement of elements to create order and organization.",
      link: "/design-principles/alignment",
    },
    {
      name: "Repetition",
      description: "Reuse of visual elements to create consistency and unity.",
      link: "/design-principles/repetition",
    },
    {
      name: "Proximity",
      description: "Grouping related elements to create visual relationships.",
      link: "/design-principles/proximity",
    },
    {
      name: "Color Theory",
      description:
        "Understanding of color relationships and their impact on design.",
      link: "/design-principles/color-theory",
    },
    {
      name: "Typography",
      description:
        "Art of arranging type to make written language legible and appealing.",
      link: "/design-principles/typography",
    },
    {
      name: "Layout and Composition",
      description:
        "Arrangement of visual elements to create a cohesive design.",
      link: "/design-principles/layout-composition",
    },
    {
      name: "Visual Hierarchy",
      description: "Organization of design elements based on importance.",
      link: "/design-principles/visual-hierarchy",
    },
    {
      name: "Accessibility",
      description:
        "Ensuring designs are usable by people with diverse abilities.",
      link: "/design-principles/accessibility",
    },
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
            <Link key={principle.name} href={principle.link}>
              <div
                key={principle.name}
                className="p-8 bg-[#f0efea] text-left rounded-xl"
              >
                <div className="text-[#3C665E]">
                  <h3 className="text-2xl font-semibold">{principle.name}</h3>
                  <p className="text-gray-600">{principle.description}</p>
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
