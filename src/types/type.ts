declare module '@iconscout/react-unicons' {
    import { SVGProps } from 'react';
  
    export type IconProps = {
      color?: string;
      size?: string | number;
    } & SVGProps<SVGElement>;
  
    export type Icon = (props: IconProps) => JSX.Element;
  
    export const UilBars: Icon;
    export const UilPhone: Icon;
    export const UilEnvelope: Icon;
    export const UilLocationPoint: Icon;
    export const UilInstagram: Icon;
    export const UilFacebookF: Icon;
    export const UilX: Icon;
    export const UilBackward: Icon;


  }