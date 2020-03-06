import matter from 'gray-matter';
import Layout from '../components/Layout';
import Post from '../components/Post';

const Index = props => {
  return (
    <Layout
      pathname="/"
      siteTitle={props.title}
      siteDescription={props.description}
    >
      <section>
        <Post posts={props.posts} />
      </section>
    </Layout>
  );
};

export default Index;

Index.getInitialProps = async function() {
  const siteConfig = await import(`../data/config.json`);
  const posts = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');
      const value = values[index];
      const document = matter(value.default);
      return {
        document,
        slug
      };
    });
    return data;
  })(require.context('../posts', true, /\.md$/));

  return {
    posts,
    ...siteConfig
  };
};
