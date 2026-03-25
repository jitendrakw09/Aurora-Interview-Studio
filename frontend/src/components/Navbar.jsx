import { Link, useLocation } from "react-router";
import { BookOpenIcon, Code2Icon, LayoutDashboardIcon } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

function Navbar() {
  const location = useLocation();

  console.log(location);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-base-300 bg-base-100/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-content">
            <Code2Icon className="size-5" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Aurora</p>
            <p className="-mt-0.5 text-lg font-bold">Interview Studio</p>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            to={"/problems"}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 
              ${
                isActive("/problems")
                  ? "bg-primary text-primary-content"
                  : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
              }
              
              `}
          >
            <div className="flex items-center gap-x-2">
              <BookOpenIcon className="size-4" />
              <span className="hidden sm:inline">Library</span>
            </div>
          </Link>

          <Link
            to={"/dashboard"}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 
              ${
                isActive("/dashboard")
                  ? "bg-primary text-primary-content"
                  : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
              }
              
              `}
          >
            <div className="flex items-center gap-x-2">
              <LayoutDashboardIcon className="size-4" />
              <span className="hidden sm:inline">Workspace</span>
            </div>
          </Link>

          <div className="ml-3">
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
