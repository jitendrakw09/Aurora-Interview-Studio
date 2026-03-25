import { useUser } from "@clerk/clerk-react";
import { ArrowRightIcon, CalendarRangeIcon, SparklesIcon } from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <section className="mx-auto w-full max-w-7xl px-6 pt-8 pb-6">
      <div className="aurora-panel p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <span className="aurora-pill">
              <CalendarRangeIcon className="size-4" />
              Session control center
            </span>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <SparklesIcon className="size-5" />
              </div>
              <h1 className="text-2xl font-extrabold sm:text-3xl">
                Welcome, {user?.firstName || "there"}
              </h1>
            </div>
            <p className="max-w-2xl text-sm text-base-content/70 sm:text-base">
              Launch a new coding interview room, join active sessions, and keep momentum with your
              recent runs.
            </p>
          </div>

          <button
            onClick={onCreateSession}
            className="btn btn-primary btn-wide"
          >
            Create Room
            <ArrowRightIcon className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
