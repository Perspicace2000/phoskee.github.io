import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { InstagramLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
} from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Link } from "@remix-run/react";
import { Separator } from "@radix-ui/react-separator";

export const meta: MetaFunction = () => {
  return [{ title: "Home" }];
};

export default function Index() {
  return (
    <div className="flex place-items-center border border-red-500 min-h-svh">
      <Card className="w-fit mx-auto">
        <Avatar className="mx-auto my-5 ">
          <AvatarImage src="https://github.com/phoskee.png" />
          <AvatarFallback>JF</AvatarFallback>
        </Avatar>
        <CardContent>
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">Jacopo Foschi</h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-400">
              Digital Dabbler
            </p>
          </div>
        </CardContent>
        <CardContent className="">
          <Link to={"/test"}>
            <Button className="w-full">TOOLS</Button>
          </Link>
        </CardContent>
        <Separator className="my-4" />
        <CardContent className="flex justify-between">
          <Link to="https://instagram.com/foschijacopo">
            <InstagramLogoIcon className=" size-10 m-2" />
          </Link>
          <Link to="https://github.com/phoskee">
            <GitHubLogoIcon className=" size-10 m-2" />
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
