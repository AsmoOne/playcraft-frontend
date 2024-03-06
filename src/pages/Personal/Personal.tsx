import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Container } from "../../components/Layout/Container"
import { Path } from "../../utils/enums";

export const Personal = () => {
  const navigate = useNavigate();
  const date = new Date();

  const handleLogout = () => {
    navigate(Path.Home);
  }

  return (
    <Container rootClassNames="flex justify-around pb-20 pt-28">
      <div>
        <img src="https://res.cloudinary.com/dykizktlm/image/upload/v1709738229/playcraft/unnamed_ykxszc.webp" alt="Avatar" />
        <p className="text-center font-main mt-4">Player Nickname</p>
      </div>

      <div className="flex flex-col">
        <div>
          <div>
            <p>Спосіб реєстріції: {date.toLocaleDateString()}</p>
            <div className="flex justify-between mb-8">
              <p>Спосіб входу: Email</p>
              <Link to=''>Додати</Link>
            </div>
          </div>

          <div className="space-y-4">
            <Button variant="primary" rootClassNames="block w-full">Змінити скін</Button>
            <Button variant="secondary" rootClassNames="block w-full">Отримати новий пароль</Button>
          </div>
        </div>

        <Button
          variant="tertiary"
          rootClassNames="block w-full mt-auto"
          onClick={handleLogout}
        >
          Вихід
        </Button>
      </div>
    </Container>
  )
}
