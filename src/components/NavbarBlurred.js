import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  PuzzlePieceIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavItem({ icon, label }) {
  return (
    <a href="#">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-1.5 p-1 font-normal"
      >
        {icon}
        {label}
      </Typography>
    </a>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem
        icon={<Square3Stack3DIcon className="h-5 w-5" />}
        label="Pages"
      />
      <NavItem
        icon={<UserCircleIcon className="h-5 w-5" />}
        label="Account"
      />
      <NavItem
        icon={<PuzzlePieceIcon className="h-5 w-5" />}
        label="Blocks"
      />
      <NavItem
        icon={<CodeBracketSquareIcon className="h-5 w-5" />}
        label="Docs"
      />
    </ul>
  );
}

export function NavbarBlurred() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  return (
    <div className="h-full min-h-screen bg-[url('https://www.material-tailwind.com/img/bg-reset.avif')] p-4">
      <Navbar className="mx-auto">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h6"
            color="blue-gray"
            className="mr-4 cursor-pointer"
          >
            Material Tailwind
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <Button
            color="gray"
            size="sm"
            className="hidden lg:inline-block"
          >
            Buy Now
          </Button>
          <IconButton
            size="sm"
            variant="text"
            color="blue-gray"
            onClick={handleOpen}
            className="ml-auto inline-block text-blue-gray-900 lg:hidden"
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <NavList />
          <Button size="sm" className="mb-2" fullWidth>
            Buy Now
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarBlurred;