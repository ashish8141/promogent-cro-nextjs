export const FIVERR_URL = "https://www.fiverr.com/chirag8838";

export default function AnnouncementBar() {
  return (
    <div className="bg-ink-950 text-white text-xs">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-9 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-mint animate-pulse-soft" />
          <span className="opacity-80">
            Now booking June engagements —{" "}
            <b className="text-accent-lemon">3 SMB slots left</b>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4 opacity-80">
          <a
            href={FIVERR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-lemon transition"
          >
            ★ 6,200+ reviews on Fiverr
          </a>
          <span>·</span>
          <span>Avg. response &lt; 1 hr</span>
        </div>
      </div>
    </div>
  );
}
