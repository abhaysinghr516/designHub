import React from "react";
import Link from "next/link";

const FeaturedResources = () => {
  const resources = [
    {
      title: "Design Principles",
      description:
        "Learn the principles of design and how to apply them to your projects.",
      link: "/design-principles",
    },
    {
      title: "Design Systems",
      description:
        "Learn how to create and maintain design systems for your projects.",
      link: "/design-systems",
    },
    {
      title: "Design Resources",
      description:
        "Find resources to help you with your design projects, including tools, templates, and more.",
      link: "/design-resources",
    },
  ];
  return (
    <section className="py-12 bg-[#f0efea]">
      <div className="container mx-auto ">
        <h2 className="text-3xl source_serif font-medium mb-12 text-center">
          Featured Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-16">
          {resources.map((resource, index) => (
            <Link key={index} href={resource.link}>
              <div className="bg-[#fafaf8] group rounded-xl p-6 ">
                <h3 className="text-2xl font-medium mb-2">{resource.title}</h3>
                <p className="mb-4">{resource.description}</p>
                <p className="text-[#3C665E]">
                  Learn More{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;
