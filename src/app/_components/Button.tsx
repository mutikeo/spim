interface ButtonProps {
  type?: string;
  content: string;
  size?: string;
  onClick?: () => void;
  extraClassName?: string;
}

export default function Button({type = 'outline', content, size = 'sm', extraClassName, ...props}:ButtonProps) {
  let className = size === 'lg' ? 'px-8 py-2 text-lg ' : 'px-8 py-1 text-sm ';
  if (type === 'outline') {
    className += `text-[#1c237e] bg-white border border-[#1c237e]
              rounded-md text-[#1c237e]
              hover:bg-[#1c237e] hover:text-white`;
  }

  if (type === 'filled') {
    className += `text-white bg-[#1c237e] border border-[#1c237e]
              rounded-md text-[#1c237e]
              hover:bg-white hover:text-[#1c237e]`;
  }
  return (
    <button
      type="button"
      className={`${className} ${extraClassName}`}
      {...props}
    >
      {content}
    </button>
  );
};