type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Container({ className = "", ...props }: Props) {
return (
<div
className={`mx-auto max-w-[1200px] px-5 ${className}`}
{...props}
/>
);
}