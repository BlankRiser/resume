type Props = {
  as?: 'a' | 'button' | 'div' | 'span';
  children: React.ReactNode;
};

export function Button(props: Props) {
  const { as: Component = 'button', children } = props;
  return <Component>{children}</Component>;
}
