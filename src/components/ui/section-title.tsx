import { ComponentProps } from "react";

const SectionTitle = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <p className="mb-3 pl-5 font-bold uppercase 2xl:pl-0" {...props}>
      {children}
    </p>
  );
};

export default SectionTitle;
