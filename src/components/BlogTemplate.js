import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';

export default function BlogTemplate(props) {
  // data from getInitialProps
  const markdownBody = props.content;
  const frontmatter = props.data;
  return (
    <Layout siteTitle={props.siteTitle}>
      <article>
        <h1>{frontmatter.title}</h1>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </Layout>
  );
}

BlogTemplate.getInitialProps = async function(context) {
  // context contains the query param
  const { slug } = context.query;
  // grab the file in the posts dir based on the slug
  const content = await import(`../../posts/${slug}.md`);
  // also grab the config file so we can pass down siteTitle
  const config = await import(`../../data/config.json`);
  //gray-matter parses the yaml frontmatter from the md body
  const data = matter(content.default);
  return {
    siteTitle: config.title,
    ...data
  };
};
