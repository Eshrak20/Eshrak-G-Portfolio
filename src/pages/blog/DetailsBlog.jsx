import { Link, useNavigate, useParams } from "react-router-dom";
import ReFormatDate from "../../components/myComponents/ReFormatDate";

const DetailsBlog = ({ dummyBlogs }) => {
  const { slug } = useParams();
  const navigate = useNavigate();


  
  const backToHomeBlog = () => {
    navigate("/"); // navigate to home
    setTimeout(() => {
      const blogSection = document.getElementById("home-blog");
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // small delay to ensure page rendered
  };
  // Find the blog from the dummy JSON
  const blog = dummyBlogs.data.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="text-center py-20">Blog not found.</div>;
  }

  const blogUrl = window.location.href;

  const splitIntoParagraphs = (htmlString) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    const text = tempDiv.textContent || tempDiv.innerText || "";

    const sentences = text.split(/(?<=[.!?|।])\s+/g);

    const paragraphs = [];
    let currentParagraph = "";

    for (let sentence of sentences) {
      const currentWordCount = currentParagraph.split(/\s+/).length;
      const sentenceWordCount = sentence.split(/\s+/).length;

      if (currentWordCount + sentenceWordCount <= 150) {
        currentParagraph += sentence + " ";
      } else {
        if (currentParagraph.trim()) paragraphs.push(currentParagraph.trim());
        currentParagraph = sentence + " ";
      }
    }

    if (currentParagraph.trim()) paragraphs.push(currentParagraph.trim());

    return paragraphs;
  };

  const copyLink = () => {
    navigator.clipboard.writeText(blogUrl).then(
      () => alert("Blog link copied!"),
      () => alert("Failed to copy the blog link.")
    );
  };

  return (
    <>
      {/* Header */}
      <div className="dummyBlogs-header relative rounded-sm overflow-hidden mb-8 shadow-lg">
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="dummyBlogs-header-img w-full h-96 object-cover blur-md"
          />
        )}
        <div className="dummyBlogs-header-overlay absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
          <div className="max-w-3xl mx-auto w-full">
            <h1 className="dummyBlogs-title text-3xl md:text-5xl md:font-bold text-white mb-4">
              {blog.title}
            </h1>
            <div className="dummyBlogs-meta flex items-center gap-4 text-white/80">
              <span className="dummyBlogs-category px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm">
                {blog.category}
              </span>
              <span className="dummyBlogs-date text-sm">
                <ReFormatDate date={blog.date} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="dummyBlogs-detail-section px-4 py-8">
        <div className="dummyBlogs-container max-w-screen-2xl mx-auto">
          <div className="dummyBlogs-content prose prose-lg prose-purple max-w-none dark:text-white">
            {splitIntoParagraphs(blog.description || "").map((para, idx) => (
              <p key={idx} className="mb-6 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Summary */}
          <div className="dummyBlogs-summary my-12 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-100">
            <h2 className="text-2xl font-bold mb-4 text-gray-700 dark:text-gray-900  ">Summary</h2>
            <p className="text-gray-700 dark:text-gray-900">
              {blog.summary || "No summary available."}
            </p>
          </div>

          {/* Author */}
          <div className="dummyBlogs-author my-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
            <div className="author-avatar">
              <img
                src={blog.profile_photo || "/default-avatar.png"}
                alt={blog.published_by || "Author"}
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-200"
              />
            </div>
            <div className="author-info">
              <strong className="block text-lg font-medium text-gray-900 dark:text-white">
                Published By {blog.published_by || "Unknown"}
              </strong>
              <p className="text-gray-500 dark:text-gray-100 text-sm">
                <ReFormatDate date={blog.date} />
              </p>
            </div>
          </div>
          <div className="dummyBlogs-back mt-8 text-center">
            <button
              onClick={backToHomeBlog}
              className="inline-flex items-center text-success font-medium p-4 glowing-button hover:text-white rounded-md transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsBlog;
{
  /* //TODO when backend is connected */
}

{
  /* <div className="dummyBlogs-back mt-8 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center text-success font-medium p-4 glowing-button hover:text-white rounded-md transition-all duration-300"
            >
              Back to all blogs
            </Link>
          </div> */
}
