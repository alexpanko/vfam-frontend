import Head from 'next/head';

export default function Layout({title, description, children}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
    </div>
  );
}

Layout.defaultProps = {
  title: 'Virtual Famtrips',
  description: 'Explore destinations online',
};
