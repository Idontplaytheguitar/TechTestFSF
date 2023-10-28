import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../@/components/ui/avatar';

export function Tech(props: {
  image: string;
  link: string;
  text: string;
  className?: string;
}) {
  const { image, link, text, className } = props;
  return (
    <a
      href={link}
      target="_blank"
      className={`flex flex-col hover:scale-125 hover:cursor-pointer hover:shadow-2xl transition-all justify-center items-center gap-2 ${
        className || ''
      }`}
    >
      <Avatar>
        <AvatarFallback>tech</AvatarFallback>
        <AvatarImage src={image} />
      </Avatar>
      <div className="text-slate-300">{text}</div>
    </a>
  );
}
