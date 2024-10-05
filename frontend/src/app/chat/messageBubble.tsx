import type { Message } from "./types";
import { MessageStatus } from "./types";

const units = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
};

const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

function getRelativeTime(t1: number, t2 = new Date().getTime()) {
  const elapsed = t1 - t2;
  // "Math.abs" accounts for both "past" & "future" scenarios
  for (var [unit, timestamp] of Object.entries(units))
    if (Math.abs(elapsed) > timestamp || unit == "second")
      return rtf.format(
        Math.round(elapsed / timestamp),
        unit as Intl.RelativeTimeFormatUnit
      );
}
export default function MessageBubble(props: Message) {
  const placement =
    props.status == MessageStatus.RECEIVED ? "justify-start" : "justify-end";
  const bubbleColour =
    props.status == MessageStatus.RECEIVED ? "bg-violet-600" : "bg-stone-300";
  const textColour = props.status == MessageStatus.RECEIVED ? "text-white" : "";

  return (
    <div className={placement + " w-full flex "}>
      <div className={`${bubbleColour} ${textColour} rounded-md p-2`}>
        <p>{props.content}</p>
        <p className="text-xs">{getRelativeTime(props.timestamp * 1000)}</p>
      </div>
    </div>
  );
}
