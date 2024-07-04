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
import { useNavigate } from "react-router-dom";

function NavItem({ icon, label, onClick }) {
  return (
    <a href="#">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-1.5 p-1 font-normal"
        onClick={onClick}
      >
        {icon}
        {label}
      </Typography>
    </a>
  );
}

function NavList() {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickProfile = () => {
    navigate("/profile");
  };

  const handleClickQuete = () => {
    navigate("/quete");
  };
  const handleClickHistorique = () => {
    navigate("/pageHistorique");
  };
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem
        icon={<Square3Stack3DIcon className="h-5 w-5" />}
        label="Historique"
        onClick={handleClickHistorique}
      />
      <NavItem
        icon={<UserCircleIcon className="h-5 w-5" />}
        label="Previsions"
        onClick={handleClickHistorique}
      />
      <NavItem
        icon={<PuzzlePieceIcon className="h-5 w-5" />}
        label="Profile"
        onClick={handleClickProfile}
      />
      <NavItem
        icon={<CodeBracketSquareIcon className="h-5 w-5" />}
        label="Quetes"
        onClick={handleClickQuete}
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
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <div className="h-full p-4 bg-gray-100">
      {" "}
      {/* Removed background image */}
      <Navbar className="mx-auto fixed top-4 left-0 right-0 bg-transparent shadow-none z-10">
        {" "}
        {/* Added top margin and z-index */}
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
          <Button color="gray" size="sm" className="hidden lg:inline-block">
            Energinary
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
