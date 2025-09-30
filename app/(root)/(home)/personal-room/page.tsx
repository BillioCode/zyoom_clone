"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-2 xl:flex-row ">
      <h1 className="text-base font-medium text-[#C9DDFF] lg:text-xl xl:min-w-32">
        {title}:
      </h1>
      <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
        {description}
      </h1>
    </div>
  );
};

const PersonalRoom = () => {
  const { user } = useUser();
  const meetingId = user?.id;
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

  const client = useStreamVideoClient();
  const router = useRouter();

  const { call } = useGetCallById(meetingId!);
  const startRoom = async () => {
    if (!client || !user) return;

    const newCall = client.call("default", meetingId!);

    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/meeting/${meetingId}?personal=true`);
  };

  return (
    <section className="size-full flex flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">PersonalRoom</h1>
      <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
        <Table
          title={"Topic"}
          description={`${user?.username || user?.id} meeting room.`}
        />
        <Table title={"Meeting ID"} description={`${meetingId}`} />
        <Table title={"Invite Link"} description={`${meetingLink}`} />
      </div>

      <div className="flex gap-5">
        <Button
          className="bg-[#0E78F9] cursor-pointer hover:bg-[#0E78F9]/90"
          onClick={startRoom}
        >
          Start Meeting
        </Button>

        <Button
          className="bg-[var(--dark-3)] cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);

            toast.success("Link Copied!");
          }}
        >
          Copy Link
        </Button>
      </div>
    </section>
  );
};

export default PersonalRoom;
