// src/app/components/WorkCard.tsx
import Image from "next/image";
import Link from "next/link";

export default function WorkCard({
href, title, thumb, tags,
}: { href:string; title:string; thumb?:string; tags?:string[] }) {
return (
<Link href={href} className="group block overflow-hidden rounded-lg shadow-md">
<div className="relative aspect-[16/9] bg-gray-100">
{thumb ? (
<Image src={thumb} alt="" fill className="object-cover" sizes="(min-width:768px) 33vw, 100vw" />
) : (
<div className="absolute inset-0 grid place-items-center text-gray-400">No Image</div>
)}
</div>
<div className="p-4">
<h3 className="text-base font-medium group-hover:opacity-80">{title}</h3>
{tags && tags.length > 0 && (
<div className="mt-2 flex flex-wrap gap-2">
{tags.map(t => <span key={t} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">#{t}</span>)}
</div>
)}
</div>
</Link>
);
}