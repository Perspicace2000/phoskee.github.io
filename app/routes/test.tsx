import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "~/components/ui/input-otp";
import { REGEXP_ONLY_CHARS } from "input-otp";

import type { MetaFunction } from "@remix-run/node";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export const meta: MetaFunction = () => {
  return [{ title: "Tests" }];
};

export default function Index() {
  const [value, setValue] = React.useState("");

  return (
    <div className="flex place-items-center border border-red-500 min-h-svh ">
      <div className="border border-red-500 mx-auto">
        <div>
          <InputOTP
            inputMode="text"
            pattern={REGEXP_ONLY_CHARS}
            maxLength={26}
            value={value}
            onChange={(value) => setValue(value)}
          >
            <InputOTPGroup className="grid grid-cols-5 gap-1 rounded-xl bg-pink-200 p-2">
              {Array.from({ length: 25 }).map((_, index) => (
                <InputOTPSlot key={index} index={index} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="grid rounded-xl bg-pink-200 w-full p-2 gap-2">
        <Button id="crea-griglia-btn" className="rounded-xl" variant={"secondary"}>
           Avvia ricerca parole
          </Button>
          <Select>
            <SelectTrigger className="w-full rounded-xl bg-white p-2">
              <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>North America</SelectLabel>
                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                <SelectItem value="mst">
                  Mountain Standard Time (MST)
                </SelectItem>
                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                <SelectItem value="akst">
                  Alaska Standard Time (AKST)
                </SelectItem>
                <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Europe & Africa</SelectLabel>
                <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                <SelectItem value="cet">Central European Time (CET)</SelectItem>
                <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                <SelectItem value="west">
                  Western European Summer Time (WEST)
                </SelectItem>
                <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Asia</SelectLabel>
                <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                <SelectItem value="cst_china">
                  China Standard Time (CST)
                </SelectItem>
                <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                <SelectItem value="ist_indonesia">
                  Indonesia Central Standard Time (WITA)
                </SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Australia & Pacific</SelectLabel>
                <SelectItem value="awst">
                  Australian Western Standard Time (AWST)
                </SelectItem>
                <SelectItem value="acst">
                  Australian Central Standard Time (ACST)
                </SelectItem>
                <SelectItem value="aest">
                  Australian Eastern Standard Time (AEST)
                </SelectItem>
                <SelectItem value="nzst">
                  New Zealand Standard Time (NZST)
                </SelectItem>
                <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>South America</SelectLabel>
                <SelectItem value="art">Argentina Time (ART)</SelectItem>
                <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button id="reset-btn" className="rounded-xl" variant={"secondary"}>
            Reset
          </Button>
          <Input className="rounded-xl bg-white text-black"></Input>
          <Button id="cerca-btn" className="rounded-xl" variant={"secondary"}>
            Cerca
          </Button>
        </div>
      </div>
    </div>
  );
}
