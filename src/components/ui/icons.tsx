import Image from 'next/image';

export const Icons = {
  logo: (props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) => (
    <Image
      src="/logo.png"
      alt="Radiant Means Logo"
      width={100}
      height={100}
      {...props}
    />
  ),
};
