"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-[60vh]", // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    src="data:image/jpeg;base64,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"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        Acet Labs
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="flex gap-2">
          {[...new Array(4)].map((i, idx) => (
            <div
              key={"first-array-demo-2" + idx}
              className="h-20 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
            ></div>
          ))}
        </div>
        <div className="flex flex-1 gap-2">
          {[...new Array(2)].map((i, idx) => (
            <div
              key={"second-array-demo-2" + idx}
              className="h-full w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
