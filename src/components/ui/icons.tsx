import Image from 'next/image';

export const Icons = {
  logo: (props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) => (
    <Image
      {...props}
      src="/logo/logo.png"
      alt="Radiant Means Ltd. Logo"
      width={props.width ?? 32}
      height={props.height ?? 32}
    />
  ),
};
