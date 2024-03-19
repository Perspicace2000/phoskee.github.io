import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowLeftIcon, CaretSortIcon, CopyIcon } from "@radix-ui/react-icons";
import { Button } from "~/components/ui/button";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import React, { useState } from "react";

interface CopiedState {
  [key: number]: boolean;
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  const [isOpen, setIsOpen] = React.useState<number | null>(null);
  const [copied, setCopied] = useState<CopiedState>({});

  const handleCollapsibleOpen = (collapsibleIndex: number) => {
    setIsOpen((prevIndex) =>
      prevIndex === collapsibleIndex ? null : collapsibleIndex
    );
  };

  const copyToClipboard = async (text: string, collapsibleIndex: number) => {
    if ("clipboard" in navigator) {
      try {
        await navigator.clipboard.writeText(text);
        setCopied((prev) => ({ ...prev, [collapsibleIndex]: true }));
        setTimeout(
          () => setCopied((prev) => ({ ...prev, [collapsibleIndex]: false })),
          3000
        );
      } catch (error) {
        console.error(
          "Errore durante la copia del testo negli appunti:",
          error
        );
      }
    }
  };

  return (
    <div className="flex place-items-center border border-red-500 min-h-svh">
      <Link to="/" className="place-self-start absolute">
        <Button className="p-2 m-2" size="icon">
          <ArrowLeftIcon className=" size-12 " />
        </Button>
      </Link>

      <div className="mx-auto min-w-fit border rounded-lg p-5">
        <Collapsible
          open={isOpen === 1}
          onOpenChange={() => handleCollapsibleOpen(1)}
          className="w-[350px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">Windows Activator</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <CaretSortIcon className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="flex items-center justify-between rounded-md border px-4 py-2 font-mono text-sm shadow-sm ">
              <h1>irm https://massgrave.dev/get | iex</h1>
              <Button
                variant="ghost"
                size={"icon"}
                onClick={() =>
                  copyToClipboard("irm https://massgrave.dev/get | iex", 1)
                }
              >
                {copied[1] ? <span>👍</span> : <CopyIcon />}
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible
          open={isOpen === 2}
          onOpenChange={() => handleCollapsibleOpen(2)}
          className="w-[350px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">Windows Tweaks</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <CaretSortIcon className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="flex items-center justify-between rounded-md border px-4 py-2 font-mono text-sm shadow-sm ">
              <h1>irm https://christitus.com/win | iex</h1>
              <Button
                variant="ghost"
                size={"icon"}
                onClick={() =>
                  copyToClipboard("irm https://christitus.com/win | iex", 2)
                }
              >
                {copied[2] ? <span>👍</span> : <CopyIcon />}
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}
