import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-primary-300"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="w-full">
          <Link to="/" className="flex items-center gap-2">
            <p className="font-bold text-inherit">Ride Sharng</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent> */}

      <NavbarContent justify="end">
        {props.menuItems.map((item, index) => (
          <NavbarItem
            key={`${item}-${index}`}
            className="hidden sm:flex gap-4"
            isActive={
              props.currentMenu.toLowerCase() === item.title.toLowerCase()
            }
          >
            <Link
              to={item.href}
              onClick={() => {props.setCurrentMenu(item.title); item.handler && item.handler();}}
              color="primary"
              className="w-full"
            >
              {item.title}
            </Link>
            {/* <a href={item.href}>
                                {item.title}
                            </a>  */}
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {props.menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            isActive={props.currentMenu === item.title}
          >
            <Link
              to={item.href}
              onClick={() => props.setCurrentMenu(item.title)}
              color="primary"
              className="w-full"
            >
              {item.title}
            </Link>
            {/* <Link
                            color= "primary"
                            className="w-full"
                            href={item.href}
                            size="lg"
                            onClick={() => props.setCurrentMenu(item.title)}
                        >
                            {item.title}
                        </Link> */}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
