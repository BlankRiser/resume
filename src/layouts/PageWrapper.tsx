import { Marquee } from '../components';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PageWrapper(props: Props) {
  const { children, className, ...rest } = props;
  return (
    <>
      <main
        className={`mx-auto bg-green-100 p-[4rem] 2xl:max-w-7xl ${className}`}
        {...rest}
      >
        {children}
      </main>

      <footer className="fixed bottom-0 w-full bg-red-100 py-2">
        <Marquee
          pauseOnHover={false}
          pauseOnClick={false}
          gradient={false}
          speed={150}
          direction={'left'}
          className=" mx-auto px-2 text-center font-mono "
        >
          <a
            href="https://github.com/BlankRiser/resume"
            className="hover:text-rose-600"
            target="_blank"
            rel="noreferrer"
          >
            This website is open source. Star the project if you like it.
          </a>
        </Marquee>
      </footer>
    </>
  );
}
