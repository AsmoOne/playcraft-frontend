type PropsT = {
  text: string;
  className?: string;
}

export const Label = ({ text, className }: PropsT) => {
  return (
    <div className={`shadow w-auto px-2 py-1 text-xs bg-red-400 text-black rounded ${className}`}>
      <span className="hidden xl:block">{ text }</span>
      <img
        src="https://res.cloudinary.com/dykizktlm/image/upload/v1709740090/playcraft/maintenance_p2xgom.png"
        alt="maintenance icon"
        className="w-4 h-4 xl:hidden"
      />
    </div>
  )
}
