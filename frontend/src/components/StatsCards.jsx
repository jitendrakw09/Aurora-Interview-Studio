import { ActivityIcon, Clock3Icon } from "lucide-react";

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  const stats = [
    {
      key: "active",
      title: "Live Rooms",
      value: activeSessionsCount,
      hint: "Available right now",
      icon: ActivityIcon,
      badge: "Live",
    },
    {
      key: "recent",
      title: "Completed Sessions",
      value: recentSessionsCount,
      hint: "Your recent activity",
      icon: Clock3Icon,
      badge: "History",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 lg:col-span-1">
      {stats.map((item) => {
        const CardIcon = item.icon;

        return (
          <article key={item.key} className="aurora-panel p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              <CardIcon className="size-6" />
            </div>
            <span className="badge badge-ghost border-base-300">{item.badge}</span>
          </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-base-content/60">
              {item.title}
            </p>
            <p className="mt-1 text-4xl font-black">{item.value}</p>
            <p className="mt-2 text-sm text-base-content/60">{item.hint}</p>
          </article>
        );
      })}
    </div>
  );
}

export default StatsCards;
