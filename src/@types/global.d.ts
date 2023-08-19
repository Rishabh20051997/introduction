type ReactNode = import('react').ReactNode;

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
  }