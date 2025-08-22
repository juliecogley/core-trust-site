import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Container(props: Props) {
const { className = "", children, ...rest } = props;

return (
<div className={`mx-auto max-w-[1200px] px-5 ${className}`} {...rest}>
{children}
</div>
);
}