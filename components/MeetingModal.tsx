"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: React.ReactNode;
  handleClick: () => void;
  buttonText?: string;
  buttonIcon?: string;
  image?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  buttonText,
  handleClick,
  buttonIcon,
  image,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="w-full max-w-[520px] flex flex-col gap-6 border-none 
        bg-[var(--dark-1)] px-6 py-9 text-white"
      >
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="image" width={72} height={72} />
            </div>
          )}
          <DialogHeader>
            <DialogTitle
              className={cn("text-3xl font-bold leading-[42px]", className)}
            >
              {title}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-5">{children}</div>

          <Button
            className="bg-[#0E78F9] focus-visible:ring-0
            focus-visible:ring-offset-0 cursor-pointer"
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image src={buttonIcon} alt="icon" width={13} height={13} />
            )}{" "}
            &nbsp;
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
