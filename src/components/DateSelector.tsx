import React, { useEffect, useRef, useState } from "react";
import { 
  startOfWeek, 
  endOfWeek, 
  startOfMonth, 
  endOfMonth, 
  format 
} from "date-fns";
// import CalIcon from "../../assets/icons/calendar.gray.svg";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "lucide-react";

type CalendarMode = "Daily" | "Weekly" | "Monthly";

interface CalendarProps {
  rangeStart: Date | null;
  rangeEnd: Date | null;
  onRangeChange: (start: Date, end: Date) => void;
  mode: CalendarMode;
}

const DAYS_OF_WEEK = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

export default function Calendar({
  rangeStart,
  rangeEnd,
  onRangeChange,
  mode = "Weekly",
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState<Date>(
    rangeStart || new Date()
  );
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [showYearSelector, setShowYearSelector] = useState(false);
  const [showMonthSelector, setShowMonthSelector] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const monthDropdownRef = useRef<HTMLDivElement>(null);
  const yearDropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        monthDropdownRef.current &&
        !monthDropdownRef.current.contains(event.target as Node)
      ) {
        setShowMonthSelector(false);
      }
      if (
        yearDropdownRef.current &&
        !yearDropdownRef.current.contains(event.target as Node)
      ) {
        setShowYearSelector(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (rangeStart) {
      setCurrentDate(new Date(rangeStart));
    }
  }, [rangeStart]);

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) =>
    new Date(year, month, 1).getDay();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  const days: (Date | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));

  const isRangeStart = (date: Date) =>
    rangeStart &&
    date.getTime() === new Date(rangeStart).setHours(0, 0, 0, 0);

  const isRangeEnd = (date: Date) =>
    rangeEnd &&
    date.getTime() === new Date(rangeEnd).setHours(0, 0, 0, 0);

  const isInRange = (date: Date) =>
    rangeStart && rangeEnd && date >= rangeStart && date <= rangeEnd;

  const isInHoverWeek = (date: Date) => {
    if (!hoverDate) return false;
    const weekStart = startOfWeek(hoverDate, { weekStartsOn: 1 });
    const weekEnd = endOfWeek(hoverDate, { weekStartsOn: 1 });
    return date >= weekStart && date <= weekEnd;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const handleDateSelect = (date: Date) => {
    if (mode === "Daily") {
      onRangeChange(date, date);
    } else if (mode === "Weekly") {
      const weekStart = startOfWeek(date, { weekStartsOn: 1 });
      const weekEnd = endOfWeek(date, { weekStartsOn: 1 });
      onRangeChange(weekStart, weekEnd);
    } else if (mode === "Monthly") {
      const monthStart = startOfMonth(date);
      const monthEnd = endOfMonth(date);
      onRangeChange(monthStart, monthEnd);
    }
    setIsCalendarOpen(false);
    setHoverDate(null);
  };

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);
  };

  const formatDateRange = () => {
    if (!rangeStart) return "";
    if (mode === "Daily") return format(rangeStart, "dd MMM yyyy");
    if (mode === "Weekly" && rangeEnd)
      return `${format(rangeStart, "dd MMM")} - ${format(rangeEnd, "dd MMM yyyy")}`;
    if (mode === "Monthly") return format(rangeStart, "MMM yyyy");
    return "";
  };

  const renderMonthSelector = () => (
    <div className="grid grid-cols-3 gap-4 p-4">
      {MONTHS.map((monthName, index) => {
        const isSelected =
          rangeStart &&
          rangeStart.getMonth() === index &&
          rangeStart.getFullYear() === currentDate.getFullYear();
        return (
          <button
            key={monthName}
            onClick={() => {
              const monthStart = startOfMonth(new Date(currentDate.getFullYear(), index));
              const monthEnd = endOfMonth(monthStart);
              onRangeChange(monthStart, monthEnd);
              setIsCalendarOpen(false);
            }}
            className={`py-2 rounded-lg text-sm font-medium ${
              isSelected ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
            }`}
          >
            {monthName}
          </button>
        );
      })}
    </div>
  );

  const years = generateYears();

  return (
    <div className="relative z-10">
      {isCalendarOpen && (
        <div
          className="fixed inset-0 bg-none bg-opacity-50 z-40"
          onClick={() => setIsCalendarOpen(false)}
        />
      )}
      <div className="w-full max-w-md rounded-full relative z-50">
        <div
          className="flex items-center justify-between gap-3 p-2 px-4 bg-white border rounded-full shadow cursor-pointer"
          onClick={() => setIsCalendarOpen(!isCalendarOpen)}
        >
          {/* <img src={CalIcon} className="w-4 h-4" /> */}
          <div className="flex items-center gap-2">
            <span className="text-gray-700 text-sm font-medium">
              {rangeStart ? formatDateRange() :
                mode === "Daily" ? "Select day" :
                mode === "Weekly" ? "Select week" : "Select month"}
            </span>
            {isCalendarOpen ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-500" />
            )}
          </div>
        </div>

        {isCalendarOpen && (
          <div className="absolute top-full right-0 min-w-[325px] z-50 mt-2">
            <div className="bg-white rounded-3xl border shadow-xl">
              {mode === "Monthly" ? (
                <>
                  <div className="flex justify-center p-4">
                    <button onClick={() => setCurrentDate(new Date(year - 1, month, 1))}>
                      <ChevronLeftIcon className="h-4 w-4 text-gray-600" />
                    </button>
                    <button onClick={() => setShowYearSelector(!showYearSelector)}>
                      <span className="font-bold text-sm mx-4">{year}</span>
                      <ChevronDownIcon className="h-4 w-4 text-gray-600 inline" />
                    </button>
                    {showYearSelector && (
                      <div ref={yearDropdownRef} className="absolute bg-white border rounded shadow p-2 mt-1">
                        <div className="grid grid-cols-3 gap-2 max-h-40 overflow-y-auto">
                          {years.map((y) => (
                            <button
                              key={y}
                              onClick={() => {
                                setCurrentDate(new Date(y, month, 1));
                                setShowYearSelector(false);
                              }}
                              className={`text-sm px-2 py-1 rounded hover:bg-gray-100 ${
                                y === year ? "bg-blue-100 text-blue-700" : ""
                              }`}
                            >
                              {y}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    <button onClick={() => setCurrentDate(new Date(year + 1, month, 1))}>
                      <ChevronRightIcon className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  {renderMonthSelector()}
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between p-4">
                    <button onClick={previousMonth}>
                      <ChevronLeftIcon className="h-4 w-4 text-gray-600" />
                    </button>
                    <div className="flex gap-2">
                      <button onClick={() => setShowMonthSelector(!showMonthSelector)}>
                        {MONTHS[month]}
                      </button>
                      <button onClick={() => setShowYearSelector(!showYearSelector)}>
                        {year} <ChevronDownIcon className="inline h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                    <button onClick={nextMonth}>
                      <ChevronRightIcon className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="grid grid-cols-7 mb-2">
                      {DAYS_OF_WEEK.map((d) => (
                        <div key={d} className="text-center text-sm font-bold text-gray-600">
                          {d}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {days.map((date, i) => {
                        let cellClass = "h-10 flex items-center justify-center ";
                        if (date) {
                          if (mode === "Daily" && isRangeStart(date)) cellClass += "bg-blue-100 rounded-lg ";
                          if (mode === "Weekly" && rangeStart && rangeEnd && isInRange(date)) {
                            cellClass += "bg-blue-100 ";
                            if (isRangeStart(date)) cellClass += "rounded-l-lg ";
                            if (isRangeEnd(date)) cellClass += "rounded-r-lg ";
                          } else if (hoverDate && isInHoverWeek(date)) {
                            cellClass += "bg-blue-50 ";
                          }
                          if (isToday(date)) cellClass += "border border-blue-300 ";
                        }
                        return (
                          <div key={i} className={cellClass}>
                            {date && (
                              <button
                                onClick={() => handleDateSelect(date)}
                                onMouseEnter={() => mode === "Weekly" && setHoverDate(date)}
                                onMouseLeave={() => mode === "Weekly" && setHoverDate(null)}
                                className="w-8 h-8 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded"
                              >
                                {date.getDate()}
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
