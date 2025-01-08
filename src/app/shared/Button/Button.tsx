import styled from './Button.module.css';

export interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return <button className={styled.button}>{children}</button>;
}
