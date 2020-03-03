import React from "react";

interface TimeBatchProps {
  time: string;
}

const TimeBatch = React.memo((props: TimeBatchProps) => {
  const { time } = props;
  return (
    <div className="flex my-2 w-full justify-center">
      <div className="rounded-lg p-2 bg-blue-600">
        <span>{time}</span>
      </div>
    </div>
  );
});

TimeBatch.displayName = "TimeBatch";

export default TimeBatch;
