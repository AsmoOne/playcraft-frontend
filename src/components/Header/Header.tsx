import { Button } from "../Button";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <div className="flex">
      <Logo />

      <Button>
        Donate
      </Button>

      <Button>
        Volunteer
      </Button>
    </div>
  )
}
