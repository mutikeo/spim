'use client';

import Button from '@/app/_components/Button';
interface CardItemProps {
  heading: string;
  description: string;
  onClick: () => void;
  icon?: React.ReactNode;
  btnText: string;
  extraClassName?: string;
}


export default function CardItem({
  heading,
  description,
  icon,
  onClick,
  btnText,
  extraClassName
}: CardItemProps) {
  return (
    <div className={`flex flex-col bg-white p-4 rounded-2xl shadow-2xl ${extraClassName}`}>
      {icon ? <div className="flex items-center justify-center mb-4">{icon}</div> : null}
      <h3 className="text-2xl font-bold">{heading}</h3>
      <p className="my-6">{description}</p>
      <Button extraClassName="mt-auto" onClick={onClick} content={btnText} />
    </div>
  );
}