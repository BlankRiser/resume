interface Props {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label';
  size?:
    | '12px'
    | '14px'
    | '16px'
    | '18px'
    | '20px'
    | '24px'
    | '32px'
    | '48px'
    | '64px'
    | '96px'
    | '128px';
  weight?:
    | 'normal'
    | 'bold'
    | 'bolder'
    | 'lighter'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Text(props: Props) {
  const {
    as: Component = 'p',
    size = '14px',
    weight = 'normal',
    align = 'left',
    style,
    className,
    children,
    ...rest
  } = props;

  return (
    <Component
      className={` ${className} text-[${size}] text-[${align}] font-[${weight}]`}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  );
}
