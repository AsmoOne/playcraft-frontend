import { Container } from "../../../../components/Layout/Container"
import { Player } from "../../../../components/Player"

export const Players = () => {
  return (
    <Container type="aside" rootClassNames="flex flex-col gap-4">
      <Player />
      <Player />
      <Player />
    </Container>
  )
}
