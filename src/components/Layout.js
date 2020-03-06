import Meta from './Meta';

export default function Layout(props) {
  return (
    <section className="layout">
      <Meta
        siteTitle={props.siteTitle}
        siteDescription={props.siteDescription}
      />
      <div className="content">{props.children}</div>
      <style jsx>
        {`
          .layout {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </section>
  );
}
