export type HeaderProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLHeadElement>
>;

export const Header = (props: HeaderProps) => {
  const { children, ...others } = props;
  return <header {...others}>{children}</header>;
};
