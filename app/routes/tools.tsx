import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowLeftIcon, CaretSortIcon } from "@radix-ui/react-icons";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import React from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  return (
    <div className="flex place-items-center border border-red-500 min-h-svh">
      <Link to="/" className="place-self-start absolute">
        <Button className="p-2 m-2" size="icon">
          <ArrowLeftIcon className=" size-12 " />
        </Button>
      </Link>

      <div className="mx-auto min-w-fit border rounded-lg p-5">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-[350px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
              Windows Activator
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <CaretSortIcon className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            irm https://massgrave.dev/get | iex
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible
          open={isOpen2}
          onOpenChange={setIsOpen2}
          className="w-[350px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
              Windows Tweaks
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <CaretSortIcon className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            irm https://christitus.com/win | iex
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}
