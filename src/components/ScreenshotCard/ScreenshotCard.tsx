import { memo } from "react";
import LazyLoad from 'react-lazy-load';

type PropsT = {
  work: any,
  index: number
}

const ScreenshotCard = ({ work, index }: PropsT) => {
  const { author, url } = work;

  return (
    <div className="relative w-auto">
      <div className="w-[350px] transition-all absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 rounded">
        <span className="absolute bottom-4 left-4 font-main">Автор: {author}</span>
      </div>

      <LazyLoad>
        <img
          src={url}
          alt={`Work ${index}`}
          className="w-[300px] max-w-[500px] lg:w-[350px] h-[190px] rounded object-cover"
        />
      </LazyLoad>
    </div>
  )
}

export const MemoizedScreenshotCard = memo(ScreenshotCard);
