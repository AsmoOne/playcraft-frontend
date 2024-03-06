import { Container } from "../../components/Layout/Container";
import { AdminCard } from "../../components/AdminCard";
import { CardTypeT } from "../../components/AdminCard/AdminCard";
import { STYLES } from "../../utils/constants";
import { helpers } from "./content";

export const Legends = () => {
  return (
    <Container>
      {helpers.map(({ title, type, players }, index) => (
        <div key={index} className="mt-20">
          <h2 className={`${STYLES.H2} mb-10`}>{title}</h2>

          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10`}>
            {players.map(({ name, role }, index) => (
              <AdminCard
                name={name}
                position={role}
                type={type as CardTypeT}
                key={index}
              />
            ))}
          </div>
        </div>
      ))}
    </Container>
  )
}
