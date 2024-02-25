import { AdminCard } from "../../components/AdminCard";
import { CardTypeT } from "../../components/AdminCard/AdminCard";
import { Card } from "../../components/Card";
import { Container } from "../../components/Layout/Container"

import { STYLES } from "../../utils/constants";
import { sections } from "./content";

export const About = () => {
  return (
    <Container rootClassNames="mt-20 mb-28">
      <h2 className={`${STYLES.H2} mb-10`}>Історія</h2>
      <Card>
        <span className="font-main text-2xl text-primary">PlayCraft</span> - перший український та Україномовний майнкрафт сервер.
        Сервер з теплою атмосферою, історія якого починається в далекому 2012 році та триває досі.
        Засновниками серверу є pad0n, mik787, kuzia666 та, звісно, портал playua.net
        PlayCraft - це сервер з великою історією, він мав багато злетів та падінь, сварок та турнірів, живих зустрічей гравців та онлайн
        трансляцій. Проте він завжди залишатиметься ламповим, дружнім і щирим. Кожен його гравець творить історію тут і зараз.
        Долучайся і ти, будь частинкою цієї неперевершеної історії. PlayCraft - це твій майнкрафт сервер.
      </Card>

      {sections.map(({ title, type, players }, index) => (
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
