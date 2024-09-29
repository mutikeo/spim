interface ButtonProps {
  type?: string;
  content: string;
}

export default function Button({type = 'outline', content, ...props}:ButtonProps) {
  let className = '';
  if (type === 'outline') {
    className = `text-[#1c237e] bg-white border border-[#1c237e]
              px-8 py-1 rounded-md text-sm text-[#1c237e]
              hover:bg-[#1c237e] hover:text-white`;
  }
  return (
    <button
      type="button"
      className={className}
      {...props}
    >
      {content}
    </button>
  );
};