


// قم باستيراد الصور هنا
import image1 from "/images/card8.webp";
import image2 from "/images/card5.webp";
import image3 from "/images/card6.webp";

const blogPosts = [
  {
    id: 1,
    date: "21 June 2021",
    title: "The Amazing Difference a Year of Travelling.",
    description:
      "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
    image: image1,
  },
  {
    id: 2,
    date: "28 June 2021",
    title: "Reflections on 5 Months of Travel: Time to Hang",
    description:
      "Doting pet parents have a relentless need to constantly photograph every adorable pet moment...",
    image: image2,
  },
  {
    id: 3,
    date: "10 July 2021",
    title: "How to Save Money While Visiting Africa.",
    description:
      "It is easy to forget that animals are living creatures with a beating heart.",
    image: image3,
  },
];

const BlogSection = () => {
  return (
    <div className="container my-5 blog bg-white">
      <h2 className="fw-bold text-dark text-start blog-text">Our Blog</h2>
      <div className="row mt-4">
        {blogPosts.map((post) => (
          <div key={post.id} className="col-md-4">
            <div
              className="p-3 rounded-3"
              style={{ backgroundColor: "#f4f4f4" }}
            >
              <p className="text-white fw-bold px-3 py-1 rounded" style={{ backgroundColor: "#6ca0dc", display: "inline-block" }}>{post.date}</p>
              <div className="rounded-3 overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img src={post.image} loading="lazy" alt={post.title} className="img-fluid w-100 blog-image" />
              </div>
            </div>
            <h5 className="mt-3 fw-bold">{post.title}</h5>
            <p className="text-muted">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
