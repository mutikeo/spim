export default function TopBanner({children}: {children: React.ReactNode}) {
  return (
    <div className="h-8 bg-[rgba(255,0,0,1)] text-white flex items-center justify-center text-sm">
      {children}
    </div>
  );
}