import { Container } from "../../../../components/Layout/Container"
import { Player } from "../../../../components/Player"

type PropsT = {
  rootClassNames?: string,
  title: string,
}

export const Players = ({ rootClassNames, title }: PropsT) => {
  const players = [
    {
      name: 'Player 1',
      image: {
        src: 'https://via.placeholder.com/150',
        alt: 'Player 1',
      },
    },
    {
      name: 'Player 2',
      image: {
        src: 'https://via.placeholder.com/150',
        alt: 'Player 2',
      },
    },
    {
      name: 'Player 3',
      image: {
        src: 'https://via.placeholder.com/150',
        alt: 'Player 3',
      },
    },
  ]

  return (
    <Container type="aside" rootClassNames={`${rootClassNames}`}>
      <h2 className="text-h2-mobile font-main mb-7 md:mb-10 md:text-h2-desktop">
        {title}
      </h2>

      <div className="flex flex-col gap-4">
        {players.map((player, index) => (
          <Player key={index} content={player} />
        ))}
      </div>
    </Container>
  )
}
