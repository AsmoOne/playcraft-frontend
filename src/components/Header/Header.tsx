import { Button } from "../Button";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <div className="flex">
      <Logo />

      <Button variant="primary">
        Donate
      </Button>

      <Button variant="secondary">
        Volunteer
      </Button>
    </div>
  )
}
