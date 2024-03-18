import { Button } from "../components/ui/button";

import { Form, Link } from "@remix-run/react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import { useIsAdmin, useOptionalUser } from "~/utils";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function NavBar() {
  const isAdmin = useIsAdmin();
  const isUser = useOptionalUser();
  return (
    <div className="bg-base-100 sticky top-0 z-30 mb-5 flex h-16 w-full items-center rounded-md bg-opacity-70 p-5 shadow-md backdrop-blur">
      <div className="flex-1">
        {isUser ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon"><HamburgerMenuIcon className="h-4 w-4" /></Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Benvenuto, {isUser ? isUser.email : "Utente non identificato"}
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <SheetClose asChild>
                    <Button className="col-span-3" asChild>
                      <Link to="bookinggym">Prenota Palestra</Link>
                    </Button>
                  </SheetClose>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <SheetClose asChild>
                    <Button className="col-span-3" asChild>
                      <Link to="bookingfisio">Prenota Fisioterapia</Link>
                    </Button>
                  </SheetClose>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <SheetClose asChild>
                    <Button className="col-span-3" asChild>
                      <Link to="booked">Prenotazioni</Link>
                    </Button>
                  </SheetClose>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <SheetClose asChild>
                    <Button className="col-span-3" asChild>
                      <Link to="account">Account</Link>
                    </Button>
                  </SheetClose>
                </div>
                {isAdmin ? (
                  <>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <SheetClose asChild>
                        <Button className="col-span-3" asChild>
                          <Link to="account">1</Link>
                        </Button>
                      </SheetClose>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <SheetClose asChild>
                        <Button className="col-span-3" asChild>
                          <Link to="account">2</Link>
                        </Button>
                      </SheetClose>
                    </div>
                  </>
                ) : null}
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Form action="/logout" method="post">
                    <Button
                      variant={"destructive"}
                      type="submit"
                      className="col-span-3"
                    >
                      Log Out
                    </Button>
                  </Form>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ) : (
          <Button asChild>
            <Link to="/login">Log in</Link>
          </Button>
        )}
      </div>

      <div className="flex-1 flex justify-center text-2xl font-bold uppercase drop-shadow-md">
        CE. S. MI.
      </div>

      <div className="flex-1 flex justify-end">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
    </div>
  );
}
