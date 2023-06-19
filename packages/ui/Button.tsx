export type ButtonProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export const Button = (props: ButtonProps) => {
  const { children, ...others } = props;
  return <button {...others}>{children}</button>;
};
