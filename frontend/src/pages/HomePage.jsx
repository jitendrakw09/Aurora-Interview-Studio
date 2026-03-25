import { Link } from "react-router";
import {
  ArrowRightIcon,
  Code2Icon,
  Layers3Icon,
  MessageCircleCodeIcon,
  VideoIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

function HomePage() {
  const valueCards = [
    {
      title: "Live Pairing Rooms",
      description: "Join a shared interview room with synchronized coding, feedback, and context.",
      icon: VideoIcon,
    },
    {
      title: "Structured Problem Sets",
      description: "Practice with curated challenges and instantly spin up targeted sessions.",
      icon: Layers3Icon,
    },
    {
      title: "Review-Ready Signals",
      description: "Track solved sessions, revisit outputs, and capture meaningful progress.",
      icon: MessageCircleCodeIcon,
    },
  ];

  return (
    <div className="aurora-shell">
      <nav className="sticky top-0 z-50 border-b border-base-300 bg-base-100/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-content">
              <Code2Icon className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">AURORA</p>
              <p className="-mt-1 text-lg font-bold">Interview Studio</p>
            </div>
          </Link>

          <SignInButton mode="modal">
            <button className="btn btn-primary btn-sm sm:btn-md">
              Enter Platform
              <ArrowRightIcon className="size-4" />
            </button>
          </SignInButton>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-7xl px-4 py-14 md:py-20">
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="aurora-pill">Interview collaboration platform</span>

            <h1 className="aurora-title">
              Practice interviews in
              <span className="text-primary"> real-time collaboration rooms</span>
            </h1>

            <p className="aurora-subtitle max-w-2xl text-lg">
              Aurora Interview Studio helps candidates and interviewers run focused technical sessions
              with live coding, structured prompts, and reliable session history.
            </p>

            <div className="flex flex-wrap gap-3">
              <SignInButton mode="modal">
                <button className="btn btn-primary btn-wide">
                  Start Session
                  <ArrowRightIcon className="size-5" />
                </button>
              </SignInButton>
              <button className="btn btn-outline btn-wide">Explore Features</button>
            </div>

            <div className="stats w-full bg-base-100 shadow-sm sm:stats-horizontal">
              <div className="stat">
                <div className="stat-title">Interview Rooms</div>
                <div className="stat-value text-primary">24/7</div>
              </div>
              <div className="stat">
                <div className="stat-title">Problem Library</div>
                <div className="stat-value text-secondary">120+</div>
              </div>
              <div className="stat">
                <div className="stat-title">Session Reliability</div>
                <div className="stat-value">99.9%</div>
              </div>
            </div>
          </div>

          <div className="aurora-panel p-3">
            <img
              src="/hero.png"
              alt="Aurora Interview Studio"
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
        </section>

        <section className="mt-14 md:mt-20">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold md:text-3xl">Built for technical interview flow</h2>
            <Link to="/" className="btn btn-ghost btn-sm">
              Product Notes
            </Link>
          </div>

          <div className="aurora-grid">
            {valueCards.map((card) => {
              const CardIcon = card.icon;

              return (
                <article key={card.title} className="aurora-panel p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <CardIcon className="size-6" />
                </div>
                  <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm text-base-content/70">{card.description}</p>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
