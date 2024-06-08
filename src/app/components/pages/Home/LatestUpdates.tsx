const LatestUpdates = () => {
  const articles = [
    {
      title: "The Future of UI/UX Design in 2024",
      excerpt:
        "Discover the latest trends in UI/UX design and how they can improve your projects.",
      link: "#",
    },
    {
      title: "Best Practices for Creating Accessible Designs",
      excerpt: "Learn how to ensure your designs are accessible to all users.",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-[#f0efea]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl source_serif font-medium mb-8 text-center">
          Stay Updated with the Latest Trends
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-16">
          {articles.map((article, index) => (
            <div key={index} className="p-6 bg-[#f8f7f4] rounded-xl text-left">
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="mt-2 text-gray-600">{article.excerpt}</p>
              <a
                href={article.link}
                className="text-[#3C665E] mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
