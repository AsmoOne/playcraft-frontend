type PropsT = {
  rootClassNames?: string,
  content: {
    name: string,
    image: {
      src: string,
      alt: string,
    },
  },
}

export const Player = ({ rootClassNames, content }: PropsT) => {
  const { name, image } = content;

  return (
    <div className={`${'flex items-center shadow rounded gap-5 p-5 h-[120px] w-full xl:w-80 max-w-96'} ${rootClassNames}`}>
      <img src={image.src} alt={image.alt} className="w-20 h-20 bg-slate-100 rounded" />
      <p className="font-main text-lg">{name}</p>
    </div>
  )
}
