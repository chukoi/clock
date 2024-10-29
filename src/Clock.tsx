import "./Clock.css";
import { useTime } from "./hooks/useTime.ts";

type HandProps = {
  className: string;
  rotation: number;
};

const Hand = ({ className, rotation }: HandProps) => {
  return (
    <div
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
};

function Clock() {
  const { hours, minutes, seconds } = useTime();

  const hourRotation = hours / 24;
  const minuteRotation = (minutes / 60) * 360;
  const secondRotation = (seconds / 60) * 360;

  return (
    <div className="wrapper">
      <div className="clock">
        <Hand className="hour-hand" rotation={hourRotation}></Hand>
        <Hand className="minute-hand" rotation={minuteRotation}></Hand>
        <Hand className="second-hand" rotation={secondRotation}></Hand>
      </div>
    </div>
  );
}

export default Clock;
