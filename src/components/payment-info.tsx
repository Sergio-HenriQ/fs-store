import { ComponentProps } from "react";

interface PaymentInfoProps extends ComponentProps<"div"> {
  info: string;
  value: number | string;
}

const PaymentInfo = ({ info, value, ...props }: PaymentInfoProps) => {
  return (
    <div className="flex items-center justify-between" {...props}>
      <p>{info}</p>
      <p>{value}</p>
    </div>
  );
};

export default PaymentInfo;
