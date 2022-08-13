import Head from 'next/head';
type Props = {
  title?: string;
  description?: string;
};

export default function SEO(props: Props) {
  const { title = 'Ram', description = 'Resume of Ram Shankar Choudhary' } =
    props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
