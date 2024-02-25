export type CardTypeT = 'admin' | 'moderator' | 'helper' | 'valuable';

type PropsT = {
  name: string;
  position?: string;
  type: CardTypeT;
}

export const AdminCard = ({ name, position, type }: PropsT) => {
  const typeStyles = {
    admin: 'border-[#AA0000]',
    moderator: 'boder-[#FF5555]',
    helper: 'boder-[#5555FF]',
    valuable: 'border-[#FFAA00]',
  }

  const selectedType = type && typeStyles[type] ? typeStyles[type] : '';

  return (
    <div className={`flex flex-col gap-5 justify-center justify-self-center text-center align-center px-3 w-full max-w-64 h-52 bg-white border-4 rounded ${selectedType}`}>
      <h3 className="font-main text-[28px] break-words">{name}</h3>
      { position && <p className="text-[22px]">{position}</p> }
    </div>
  )
}
