import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

const BlogList = props => {
  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  // console.log('props.allBlogs', props.allBlogs);

  return (
    <>
      <div className="list">
        {props.allBlogs.length &&
          props.allBlogs.map(post => (
            <div key={post.slug}>
              {/* <Link href={{ pathname: `/post/${post.slug}` }}>
                <a> */}
              {post.document.data.hero_image && (
                <div className="hero_image">
                  <img
                    src={post.document.data.hero_image}
                    alt={post.document.data.hero_image}
                  />
                </div>
              )}
              <div className="blog__info">
                {/* <h2>{post.document.data.title}</h2>
                    <h3> {reformatDate(post.document.data.date)}</h3> */}
                <ReactMarkdown
                  source={post.document.content}
                  renderers={{ code: CodeBlock }}
                />
              </div>
              {/* </a>
              </Link> */}
            </div>
          ))}
      </div>
      <style jsx>
        {`
          margin-bottom: 0;
          .hero_image {
            width: 100%;
            height: 33vh;
            overflow: hidden;
            background-color: #000;
          }
          .hero_image img {
            object-fit: cover;
            object-position: 50% 50%;
            opacity: 1;
            transition: opacity 0.3s ease;
            min-height: 100%;
          }
          .blog__info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 1.5rem 1.25rem;
            transform: translateX(0px);
            transition: transform 0.3s ease-in;
            border-bottom: 1px solid #ebebeb;
          }
          .blog__info h2,
          .blog__info h3,
          .blog__info p {
            transform: translateX(0px);
            transition: transform 0.5s ease-out;
          }
          li {
            opacity: inherit;
            display: flex;
            justify-content: center;
            flex-direction: column;
            min-height: 38vh;
            margin-bottom: 0;
          }
          h2 {
            margin-bottom: 0.5rem;
          }
          h3 {
            margin-bottom: 1rem;
          }
          p {
            max-width: 900px;
          }
          @media (min-width: 768px) {
            li {
              min-height: 250px;
              height: 33.333vh;
              flex-direction: row;
            }
            .hero_image {
              height: 100%;
            }
            .hero_image img {
              min-width: 100%;
              height: 100%;
              width: auto;
              min-height: 0;
            }
            .blog__info {
              min-width: 70%;
            }
          }
          @media (min-width: 1280px) {
            .blog__info {
              padding: 3rem;
            }
            h3 {
              margin-bottom: 1.2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default BlogList;
