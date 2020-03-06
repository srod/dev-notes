import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

const Post = props => {
  const post = props.posts[0];
  return (
    <>
      <div className="post">
        {post && (
          <ReactMarkdown
            source={post.document.content}
            renderers={{ code: CodeBlock }}
          />
        )}
      </div>
      <style jsx>
        {`
          h2 {
            margin-bottom: 0.5rem;
          }
          h3 {
            margin-bottom: 1rem;
          }
          p {
            max-width: 900px;
          }
          @media (min-width: 1280px) {
            h3 {
              margin-bottom: 1.2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Post;
