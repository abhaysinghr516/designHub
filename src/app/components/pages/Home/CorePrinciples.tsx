import Link from "next/link";

const CorePrinciples = () => {
  const principles = [
    { title: "Balance", link: "/design-principles/balance" },
    { title: "Contrast", link: "/design-principles/contrast" },
    { title: "Alignment", link: "/design-principles/alignment" },
    { title: "Repetition", link: "/design-principles/repetition" },
    { title: "Proximity", link: "/design-principles/proximity" },
  ];

  return (
    <section className="py-20 bg-[#f8f7f4]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl source_serif font-medium mb-12 text-center">
          Core Design Principles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-4 md:px-16">
          {principles.map((principle, index) => (
            <Link key={index} href={principle.link}>
              <div
                key={index}
                className="p-8 bg-[#f0efea] text-left rounded-xl transform hover:scale-110 transition-transform duration-300"
              >
                <div className="flex items-center justify-center text-[#3C665E]">
                  <h3 className="text-2xl font-semibold">{principle.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePrinciples;
