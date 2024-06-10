import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import Link from "next/link";

const DesignResources = () => {
  const resources = [
    { name: "Templates", link: "/design-resources/templates" },
    { name: "Icon Sets", link: "/design-resources/icons" },
    { name: "Fonts", link: "/design-resources/fonts" },
    { name: "Color Tools", link: "/design-resources/color-tools" },
    { name: "Design Tools", link: "/design-resources/design-tools" },
    { name: "Stock Photos", link: "/design-resources/stock-photos" },
    { name: "Illustration Libraries", link: "/design-resources/illustration" },
    { name: "Pattern Libraries", link: "/design-resources/pattern-libraries" },
    { name: "Typography Resources", link: "/design-resources/typography" },
    { name: "Animation Tools", link: "/design-resources/animation-tools" },
    {
      name: "Collaboration Tools",
      link: "/design-resources/collaboration-tools",
    },
    { name: "Inspiration Sites", link: "/design-resources/inspiration-sites" },
    { name: "Design Blogs", link: "/design-resources/design-blogs" },
    {
      name: "Educational Resources",
      link: "/design-resources/educational-resources",
    },
    { name: "3D Assets", link: "/design-resources/3d-assets" },
  ];
  return (
    <div className="bg-[#f8f7f4]">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-medium source_serif text-gray-900">
            Design Resources
          </h1>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <Link key={resource.name} href={resource.link}>
              <div
                key={resource.name}
                className="p-8 bg-[#f0efea] text-left rounded-xl transform hover:scale-110 transition-transform duration-300"
              >
                <div className="flex items-center justify-center text-[#3C665E]">
                  <h3 className="text-2xl font-semibold">{resource.name}</h3>
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

export default DesignResources;
