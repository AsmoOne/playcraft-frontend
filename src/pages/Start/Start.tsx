import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { Container } from "../../components/Layout/Container"
import { STYLES } from "../../utils/constants"

export const Start = () => {
  return (
    <Container rootClassNames="mt-20 mb-28">
      <h2 className={`${STYLES.H2} mb-10`}>Для того щоб розпочати гру на сервері Вам необхідно:</h2>

      <Card className="flex justify-between items-center flex-wrap mb-5">
        <p className="font-main text-2xl mb-2 sm:mb-0">1. Зареєструвати акаунт</p>

        <Button variant="primary">Реєстрація</Button>
      </Card>

      <Card className="flex justify-between items-center flex-wrap mb-5">
        <p className="font-main text-2xl mb-2 sm:mb-0">2. Завантажити Java</p>

        <Button variant="primary">Java</Button>
      </Card>

      <Card className="flex justify-between items-center flex-wrap">
        <p className="font-main text-2xl mb-2 sm:mb-0">3. Завантажити Лаунчер</p>

        <div className="flex gap-5 items-center flex-wrap">
          <Button variant="primary">playCraft.exe</Button>
          <p>або</p>
          <Button variant="primary">playCraft.jar</Button>
        </div>
      </Card>
    </Container>
  )
}
