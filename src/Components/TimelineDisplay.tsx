import { Chrono } from "react-chrono";
import events from "../data/timelineEvents";

function TimelineDisplay() {
  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
        My Journey So Far
      </h2>
      <Chrono
        items={events}
        mode="VERTICAL_ALTERNATING"
        disableInteraction={true}
        theme={{
          primary: "royalblue",
          secondary: "white",
          cardBgColor: "whitesmoke",
          cardForeColor: "dimgray",
          titleColor: "royalblue",
          titleColorActive: "navy",
        }}
        hideControls
        disableToolbar
        enableOutline
      />
    </div>
  );
}

export default TimelineDisplay;
