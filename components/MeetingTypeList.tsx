"use client";
import React from "react";
import HomeCard from "./HomeCard";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { toast } from "react-hot-toast";
import { Textarea } from "@/components/ui/textarea";
import ReactDatePicker from "react-datepicker";
import { Input } from "@/components/ui/input";

const MeetingTypeList = () => {
  const router = useRouter(); // state to store the meeting type
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(); // state to store the meeting details

  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });

  const [callDetails, setCallDetails] = useState<Call>();

  const { user } = useUser(); // get the current user
  const client = useStreamVideoClient(); // get the client instance // create a meeting and join it

  const createMeeting = async () => {
    if (!user || !client) return;
    try {
      if (!values.dateTime) {
        toast.error("Please select a date and time.");
        return;
      }

      const id = crypto.randomUUID(); // random id
      const call = client.call("default", id); // create a call with the random id

      if (!call) throw new Error("Failed to create  call.");
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();

      const description = values.description || "Instant meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        // <--- Same logic
        router.push(`/meeting/${call.id}`);
      }

      toast.success("Meeting created successfully.");
    } catch (error) {
      console.log(error);
      toast.error("Failed to create meeting.");
    }
  };

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`;
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
           {" "}
      <HomeCard
        bgColor="bg-[#FF742E]"
        title="New Meeting"
        description="Start a instant meeting"
        icon="/icons/add-meeting.svg"
        alt="meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
           {" "}
      <HomeCard
        bgColor="bg-[#0E78F9]"
        title="Schedule Meeting"
        description="Plan your meeting"
        icon="/icons/schedule.svg"
        alt="schedule"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
           {" "}
      <HomeCard
        bgColor="bg-[#830EF9]"
        title="View Recordings"
        description="Check out your recordings"
        icon="/icons/recordings.svg"
        alt="recordings"
        handleClick={() => router.push("/recordings")}
      />
           {" "}
      <HomeCard
        bgColor="bg-[#F9A90E]"
        title="Join Meeting"
        description="Via invitation link"
        icon="/icons/join-meeting.svg"
        alt="join"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
           {" "}
      {!callDetails ? (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="Create Meeting"
          handleClick={createMeeting}
        >
                   {" "}
          <div className="flex flex-col gap-2.5">
                       {" "}
            <label
              htmlFor="description"
              className="text-base text-normal leading-[22px] text-[var(--sky-2)] "
            >
                            Add a description            {" "}
            </label>
                       {" "}
            <Textarea
              className="border-none focus-visible:ring-0 focus-visible-ring-offset-0 text-white"
              onChange={(e) => {
                setValues({ ...values, description: e.target.value });
              }}
            />
                     {" "}
          </div>
                   {" "}
          <div className="w-full flex flec-col gap-2.5">
                       {" "}
            <label
              htmlFor="description"
              className="text-base text-normal leading-[22px] text-[var(--sky-2)]"
            >
                            Select date and time            {" "}
            </label>
                       {" "}
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat={"MMMM d, yyyy h:mm aa"}
              className="w-full rounded p-2 focus:outline-none bg-[#252A41] text-white"
            />
                     {" "}
          </div>
                 {" "}
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="Meeting Created"
          className="text-center"
          buttonText="Copy meeting link"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast.success("Meeting link copied to clipboard.");
          }}
          image="/icons/checked.svg"
          buttonIcon="/icons/copy.svg"
        />
      )}
           {" "}
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
           {" "}
      <MeetingModal
        isOpen={meetingState === "isJoiningMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Type the link here"
        className="text-center"
        buttonText="Join Meeting"
        handleClick={() => {
          let linkToPush = values.link.trim();

          if (
            !linkToPush.startsWith("http://") &&
            !linkToPush.startsWith("https://")
          ) {
            linkToPush = `https://${linkToPush}`;
          }

          router.push(linkToPush);
        }}
      >
         {" "}
        <Input
          placeholder="Meeting link"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
          className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
             {" "}
      </MeetingModal>
         {" "}
    </section>
  );
};

export default MeetingTypeList;
