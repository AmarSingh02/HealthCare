import { MapPin } from "lucide-react";
import { useState } from "react";

interface Checkpoint {
  label: string;
  position: "left" | "right";
  color: string;
  isToday?: boolean;
}

const defaultCheckpoints: Checkpoint[] = [
  { label: "Joined", position: "left", color: "#FF69B4",  },
  { label: "Initial Consultation", position: "right", color: "#FFD700",  },
  { label: "Screening", position: "left", color: "#DDA0DD",  },
  { label: "Diagnosis", position: "right", color: "#98FB98",  },
  { label: "Treatment", position: "left", color: "#87CEEB",  },
  { label: "Monitoring", position: "right", color: "#40E0D0",  },
  { label: "Post Treatment", position: "left", color: "#9370DB", },
  { label: "Post Treatment", position: "right", color: "#9370DB", },
  { label: "Today", position: "left", color: "#00BFFF", isToday: true, },
];

export default function JourneyMap() {
  const [checkpoints] = useState<Checkpoint[]>(defaultCheckpoints);

  return (
    <div className="w-full h-100 flex flex-col gap-5 p-2 ">
      <div className="font-bold text-sm sm:text-lg uppercase text-center mb-2 sm:mb-4">
        YOUR JOURNEY MAP
      </div>

      <div className="relative flex-1 min-h-[100px]">

        
        
        <div className="absolute left-1/2 transform -translate-x-1/2 border-t-2 sm:border-t-3 md:border-t-4 border-red-600 h-full w-3 sm:w-4 md:w-5 bg-gradient-to-b from-gray-500 to-gray-700">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0 border-l border-dashed border-white border-opacity-80"></div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[5%] min-w-[20px] max-w-[30px] aspect-[20/28]">
            <svg
              viewBox="0 0 20 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path d="M10 17L18.6603 25.25H1.33975L10 17Z" fill="#3C3B3B" fillOpacity="0.25" />
              <path d="M10 17L18.6603 25.25H1.33975L10 17Z" fill="#9CD6FF" fillOpacity="0.2" />
              <path d="M10 9L18.6603 17.25H1.33975L10 9Z" fill="#3C3B3B" fillOpacity="0.5" />
              <path d="M10 9L18.6603 17.25H1.33975L10 9Z" fill="#9CD6FF" fillOpacity="0.2" />
              <path d="M10 0L18.6603 8.25H1.33975L10 0Z" fill="#3C3B3B" />
              <path d="M10 0L18.6603 8.25H1.33975L10 0Z" fill="#9CD6FF" fillOpacity="0.4" />
            </svg>
          </div>
        </div>

        {/* Checkpoints */}
        <div className="relative h-80">
          {checkpoints.map((checkpoint, index) => {
            const positionTop = `${(index / (checkpoints.length - 1)) * 90}%`;

            return (
              <div
                key={`${checkpoint.label}-${index}`}
                className={`absolute ${checkpoint.position === "left" ? "right-[4px]" : "left-[4px]"} w-full`}
                style={{ top: positionTop }}
              >
                {/* Pin */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <MapPin
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                    style={{ color: checkpoint.color }}
                    aria-hidden="true"
                    fill="white"
                  />
                </div>

                {/* Content */}
                <div
                  className={`absolute top-3/4 -translate-y-1/2 ${
                    checkpoint.position === "left"
                      ? "right-[52%] text-right pr-1 sm:pr-2 md:pr-3"
                      : "left-[52%] text-left pl-1 sm:pl-2 md:pl-3"
                  }`}
                >
                  <div
                    className="bg-white rounded-full py-2 px-2 sm:px-3 md:px-4 shadow-md inline-block relative"
                    style={{ minWidth: "clamp(100px, 12vw, 160px)" }}
                  >
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 ${
                        checkpoint.position === "left"
                          ? "right-[-10px] border-l-[18px] border-l-white border-y-[16px] border-y-transparent"
                          : "left-[-10px] border-r-[18px] border-r-white border-y-[16px] border-y-transparent"
                      } w-0 h-0`}
                    ></div>

                    <div className="flex flex-col items-center">
                      <div className="w-fit whitespace-nowrap text-xs" style={{ color: checkpoint.color }}>
                        {checkpoint.label}
                      </div>
                      {checkpoint.date && (
                        <div className="text-gray-500 text-[8px] sm:text-[10px] md:text-xs">
                          {checkpoint.date}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
