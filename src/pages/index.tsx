import type { NextPage } from 'next';
import { Text } from '../components';
import { PageWrapper } from '../layouts/PageWrapper';

const Home: NextPage = () => {
  return (
    <PageWrapper className="h-screen w-screen">
      <section className=" ">
        <Text className="text-center text-2xl xl:text-4xl">
          RESUME TO BE HERE
        </Text>
      </section>
    </PageWrapper>
  );
};

export default Home;
