import type { CSSProperties } from "react";
import type { ShowcaseScene } from "@/content/showcase";

/**
 * Decorative, looping CSS animations that show what each product does.
 * Keyframes live in globals.css. Every scene runs on a shared 10s cycle so the
 * steps inside it stay in sync. Under prefers-reduced-motion the loops stop and
 * `.rm-hide` elements disappear, leaving each scene's finished state.
 */

const loop = (name: string, delay = 0): CSSProperties => ({
  animation: `${name} 10s ${delay}s infinite both`,
});

const mono = "font-mono";

function Check({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function Stage({
  bg,
  border,
  className = "",
  children,
}: {
  bg: string;
  border: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      aria-hidden="true"
      className={`motion-scene min-h-[400px] rounded-3xl border p-6 text-[#f2f2f0] sm:min-h-[440px] sm:p-8 ${className}`}
      style={{ background: bg, borderColor: border }}
    >
      {children}
    </div>
  );
}

function RewordlyScene() {
  return (
    <Stage bg="#10202b" border="#1d3443" className="grid place-items-center">
      <div className="w-full max-w-[470px] rounded-2xl bg-[#f4f6f8] px-5 pt-5 pb-6 text-[#1d2329] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
        <div className="mb-3.5 flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#e06c5f]" />
          <span className="size-2.5 rounded-full bg-[#e8b94f]" />
          <span className="size-2.5 rounded-full bg-[#6cc070]" />
        </div>
        <p className="mb-2.5 text-[13px] text-[#5b6670]">To: team@company.com</p>
        <div className="grid min-h-[88px] text-[17px] leading-relaxed sm:text-lg">
          <span className="rm-hide [grid-area:1/1]" style={loop("until55")}>
            hey,{" "}
            <span
              className="bg-no-repeat"
              style={{
                backgroundImage: "linear-gradient(#bfe0f2, #bfe0f2)",
                backgroundSize: "100% 100%",
                ...loop("hl12"),
              }}
            >
              can u check the thing i sent? its kinda urgent lol
            </span>
          </span>
          <span className="[grid-area:1/1]" style={loop("in55")}>
            Hi team, could you review the file I sent? It’s time-sensitive — thank you!
          </span>
        </div>
        <div className="mt-4 grid">
          <div
            className="rm-hide flex gap-1 justify-self-start rounded-[10px] bg-[#0b0c0e] p-1.5 [grid-area:1/1]"
            style={loop("bar30")}
          >
            <span className="rounded-md bg-[#7cc4e8] px-2.5 py-1.5 text-[13px] font-medium text-[#0b0c0e]">
              Rewrite
            </span>
            <span className="px-2.5 py-1.5 text-[13px] text-[#f2f2f0]">Fix grammar</span>
            <span className="hidden px-2.5 py-1.5 text-[13px] text-[#f2f2f0] sm:inline">
              Tone: Professional
            </span>
          </div>
          <div
            className="inline-flex items-center gap-2 justify-self-start rounded-[10px] bg-[#e3f1e8] px-3 py-2 text-[13px] font-medium text-[#1f5135] [grid-area:1/1]"
            style={loop("in55")}
          >
            <Check />
            Rewritten in place · tone: professional
          </div>
        </div>
      </div>
    </Stage>
  );
}

const seoneerCandidates = [
  {
    label: "meta · /pricing",
    level: "high",
    width: "92%",
    bar: "#6fd39a",
    enter: "in30",
    picked: true,
  },
  {
    label: "alt text · /blog",
    level: "med",
    width: "60%",
    bar: "#4c9a6f",
    enter: "in35",
  },
  { label: "h1 · /docs", level: "low", width: "35%", bar: "#3a7556", enter: "in40" },
];

function SeoneerScene() {
  return (
    <Stage
      bg="#0f1d16"
      border="#1c3527"
      className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2"
    >
      <div className={`${mono} flex flex-col gap-2 text-[13px] leading-snug`}>
        <span className="text-[#9fbfae]" style={loop("in05")}>
          › reading product &amp; docs
        </span>
        <span className="text-[#9fbfae]" style={loop("in15")}>
          › scanning app/ routes
        </span>
        <span className="text-[#e6f4ec]" style={loop("in25")}>
          › 3 opportunities found
        </span>
        <div className="mt-1.5 flex flex-col gap-2">
          {seoneerCandidates.map((c) => (
            <div
              key={c.label}
              className="rounded-lg bg-[#132a1e] px-3 py-2.5"
              style={{
                animation: `${c.enter} 10s infinite both${c.picked ? ", pick55 10s infinite both" : ""}`,
              }}
            >
              <span
                className={`flex justify-between ${c.picked ? "text-[#e6f4ec]" : "text-[#9fbfae]"}`}
              >
                <span>{c.label}</span>
                <span>{c.level}</span>
              </span>
              <span className="mt-1.5 block h-1 rounded-full bg-[#1f3d2c]">
                <span
                  className="block h-full origin-left rounded-full"
                  style={{ width: c.width, background: c.bar, ...loop("grow35") }}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="rounded-xl border border-[#30363d] bg-[#0d1117] p-4 text-sm"
        style={loop("in65")}
      >
        <span className="inline-block rounded-full bg-[#2f6b4f] px-2.5 py-0.5 text-xs text-white">
          Open
        </span>
        <p className="mt-2.5 leading-snug font-semibold">
          seo: add meta description to /pricing
        </p>
        <p className="mt-1 mb-3 text-xs text-[#a3a3a3]">seoneer-bot · 1 file changed</p>
        <div className={`${mono} overflow-hidden rounded-md text-[11px] leading-[1.8]`}>
          <div className="bg-[#3a1d1d] px-2 text-[#ffb4a8]">
            - title: &quot;Pricing&quot;
          </div>
          <div className="bg-[#17301f] px-2 text-[#a6e3bd]">
            + title: &quot;Pricing&quot;,
          </div>
          <div className="bg-[#17301f] px-2 text-[#a6e3bd]">
            + description: &quot;Plans for…&quot;
          </div>
        </div>
        <p
          className="mt-3 flex items-center gap-2 text-[13px] text-[#a6e3bd]"
          style={loop("in75")}
        >
          <Check />
          Ready for your review
        </p>
      </div>
    </Stage>
  );
}

const livoicLines = [
  {
    tr: "Sol tarafı tut, ortaya dönüyorum.",
    en: "Hold the left side, I’m rotating to mid.",
  },
  { tr: "Ultim hazır, üçe kadar say.", en: "My ult is ready — count to three." },
  { tr: "Bomba B’de, hemen gelin!", en: "Bomb’s on B — get over here!" },
];

const waveBars = [
  [1.1, 0],
  [0.9, 0.2],
  [1.3, 0.1],
  [0.8, 0.4],
  [1.2, 0.3],
  [1, 0.15],
  [1.4, 0.05],
  [0.85, 0.35],
  [1.15, 0.25],
  [0.95, 0.45],
  [1.25, 0.1],
  [0.9, 0.3],
  [1.05, 0.2],
  [1.35, 0.4],
  [0.8, 0.05],
  [1.2, 0.25],
];

function LivoicScene() {
  return (
    <Stage bg="#1b1426" border="#2e2340" className="flex flex-col justify-center gap-5">
      <div
        className="relative aspect-video overflow-hidden rounded-xl"
        style={{
          background: "linear-gradient(160deg, #2a3140 0%, #3c2f4f 55%, #1d1a26 100%)",
        }}
      >
        <span
          className="absolute inset-x-0 bottom-0 h-[45%]"
          style={{
            background:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 40px), linear-gradient(transparent, rgba(0,0,0,0.5))",
          }}
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded bg-[#d23c3c] px-2 py-0.5 text-[11px] font-bold text-white">
          <span
            className="size-1.5 rounded-full bg-white"
            style={{ animation: "pulse-soft 1.2s infinite" }}
          />
          LIVE
        </span>
        <span
          className={`${mono} absolute top-3 right-3 rounded bg-black/45 px-2 py-0.5 text-[11px] text-[#e7dcf7]`}
        >
          TR → EN
        </span>
        <div className="absolute inset-x-[6%] bottom-3.5 grid text-center">
          {livoicLines.map((line, i) => (
            <span
              key={line.en}
              className={`[grid-area:1/1] ${i > 0 ? "rm-hide" : ""}`}
              style={{ animation: `sub 10s ${(i * 10) / 3}s infinite both` }}
            >
              <span className="block text-xs text-[#d8cfe6]">{line.tr}</span>
              <span className="mt-1 inline-block rounded bg-black/80 px-3 py-1 text-[15px] text-white sm:text-[17px]">
                {line.en}
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex h-10 flex-1 items-center gap-1">
          {waveBars.map(([duration, delay], i) => (
            <span
              key={i}
              className="h-full flex-1 rounded-full bg-[#b794f6]"
              style={{ animation: `wave ${duration}s ${delay}s infinite` }}
            />
          ))}
        </div>
        <span className={`${mono} text-xs text-[#d8cfe6]`}>listening · translating</span>
      </div>
    </Stage>
  );
}

const brandSwatches: [string, string][] = [
  ["#3b2a20", "in30"],
  ["#8a5a3c", "in35"],
  ["#d9b48f", "in40"],
  ["#f3e6d4", "in45"],
  ["#5f7a61", "in45"],
];

function BrandisyScene() {
  return (
    <Stage bg="#241a12" border="#3a2a1d" className="flex flex-col justify-center gap-5">
      <div
        className={`${mono} flex items-center gap-2 rounded-[10px] border border-[#3a2a1d] bg-[#1a130d] px-4 py-3.5 text-sm text-[#f6e7d6]`}
      >
        <span className="text-[#f0b37e]">›</span>
        <span
          className="inline-block max-w-full overflow-hidden whitespace-nowrap"
          style={{ animation: "type03 10s steps(36) infinite both" }}
        >
          a quiet coffee shop for remote workers
        </span>
        <span
          className="h-[18px] w-0.5 shrink-0 bg-[#f0b37e]"
          style={{ animation: "blink 1s steps(1) infinite" }}
        />
      </div>
      <div className="flex items-center gap-4" style={loop("in25")}>
        <span className="grid size-20 shrink-0 place-items-center rounded-[22px] bg-[#f3e6d4] text-[#3b2a20]">
          <svg
            className="size-11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9z" />
            <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" />
            <path d="M9 3c-1 1 1 2 0 3M13 3c-1 1 1 2 0 3" />
          </svg>
        </span>
        <span>
          <span className="block text-3xl font-semibold tracking-tight text-[#f6e7d6]">
            Quiet Corner
          </span>
          <span className="mt-1 block text-sm text-[#cdb8a3]">
            Coffee &amp; focus, all day
          </span>
        </span>
      </div>
      <div className="flex h-16 gap-2.5">
        {brandSwatches.map(([color, enter]) => (
          <span
            key={color}
            className="flex-1 rounded-xl border border-white/10"
            style={{ background: color, ...loop(enter) }}
          />
        ))}
      </div>
      <div className="flex items-baseline justify-between" style={loop("in55")}>
        <span className="text-4xl font-semibold tracking-tight text-[#f6e7d6]">Aa</span>
        <span className="text-sm text-[#cdb8a3]">Headings · Body · Usage guide</span>
      </div>
      <div className="flex items-center gap-3" style={loop("in55")}>
        <svg
          className="size-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f0b37e"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M12 4v12M6 11l6 6 6-6M5 20h14" />
        </svg>
        <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#3a2a1d]">
          <span
            className="block h-full origin-left bg-[#f0b37e]"
            style={loop("grow60")}
          />
        </span>
        <span className={`${mono} text-xs text-[#cdb8a3]`}>brand-pack.zip</span>
      </div>
    </Stage>
  );
}

function Landscape({
  sky,
  sun,
  sunGlow,
  far,
  near,
  ground,
}: {
  sky: string;
  sun: string;
  sunGlow?: string;
  far: string;
  near: string;
  ground: string;
}) {
  return (
    <>
      <span className="absolute inset-0" style={{ background: sky }} />
      <span
        className="absolute top-[22%] left-[62%] aspect-square w-[13%] rounded-full"
        style={{ background: sun, boxShadow: sunGlow }}
      />
      <span
        className="absolute right-[30%] bottom-[18%] left-[-5%] h-[52%]"
        style={{ background: far, clipPath: "polygon(0 100%, 45% 0, 100% 100%)" }}
      />
      <span
        className="absolute right-[-10%] bottom-[18%] left-[35%] h-[40%]"
        style={{ background: near, clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
      />
      <span
        className="absolute inset-x-0 bottom-0 h-[20%]"
        style={{ background: ground }}
      />
    </>
  );
}

function VideoScene() {
  return (
    <Stage bg="#12162a" border="#222a4a" className="flex flex-col justify-center gap-5">
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <div className="absolute inset-0">
          <Landscape
            sky="linear-gradient(#a9bfd3, #efe0cc)"
            sun="#fff3d6"
            far="#7d9283"
            near="#93a796"
            ground="#c7b79c"
          />
          <span
            className={`${mono} absolute top-2.5 left-2.5 rounded bg-white/70 px-2 py-0.5 text-[11px] text-[#1d2329]`}
          >
            original.mp4
          </span>
        </div>
        <div className="absolute inset-0" style={loop("wipe20")}>
          <Landscape
            sky="linear-gradient(#24164f, #c2477f)"
            sun="#ffd36e"
            sunGlow="0 0 40px #ff9d6e"
            far="#3a2a85"
            near="#5b3fb8"
            ground="repeating-linear-gradient(90deg, #ff5fa2 0 1px, #1a0f38 1px 34px)"
          />
          <span
            className={`${mono} absolute top-2.5 right-2.5 rounded bg-black/45 px-2 py-0.5 text-[11px] text-white`}
          >
            style: neon
          </span>
        </div>
        <span
          className="rm-hide absolute inset-y-0 w-0.5 bg-white shadow-[0_0_16px_4px_#8ea2ff]"
          style={loop("line20")}
        />
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-[#222a4a]">
        <span className="block h-full origin-left bg-[#8ea2ff]" style={loop("grow20")} />
      </div>
      <div className={`${mono} flex flex-wrap gap-2 text-xs`}>
        <span className="rounded-md bg-[#1b2140] px-2.5 py-1.5 text-[#c9d2ff]">
          ✓ uploaded
        </span>
        <span className="grid">
          <span
            className="rm-hide rounded-md bg-[#1b2140] px-2.5 py-1.5 text-[#c9d2ff] [grid-area:1/1]"
            style={loop("until55")}
          >
            transforming…
          </span>
          <span
            className="rounded-md bg-[#8ea2ff] px-2.5 py-1.5 text-[#0b0c0e] [grid-area:1/1]"
            style={loop("in55")}
          >
            ✓ webhook: ready
          </span>
        </span>
      </div>
    </Stage>
  );
}

function NextSparesScene() {
  return (
    <Stage bg="#1c1c13" border="#33321f" className="flex flex-col justify-center gap-7">
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-[#3a3925] bg-[#26261a] p-4 sm:p-5">
          <p className="text-[13px] text-[#cfc9a0]">Factory A · idle stock</p>
          <p className="mt-2 font-medium">Bearing 6204</p>
          <p className="mt-2.5 grid text-[34px] font-semibold tracking-tight">
            <span className="rm-hide [grid-area:1/1]" style={loop("until55")}>
              120
            </span>
            <span className="text-[#e3d26f] [grid-area:1/1]" style={loop("in55")}>
              80
            </span>
          </p>
        </div>
        <div className="rounded-2xl border border-[#3a3925] bg-[#26261a] p-4 sm:p-5">
          <p className="text-[13px] text-[#cfc9a0]">Factory B · needs</p>
          <p className="mt-2 font-medium">Bearing 6204 × 40</p>
          <p className="mt-3.5 grid text-sm">
            <span
              className="rm-hide text-[#cfc9a0] [grid-area:1/1]"
              style={loop("until55")}
            >
              Searching suppliers…
            </span>
            <span
              className="justify-self-start rounded-md bg-[#e3d26f] px-2.5 py-1 font-semibold text-[#0b0c0e] [grid-area:1/1]"
              style={loop("in55")}
            >
              ✓ Matched
            </span>
          </p>
        </div>
      </div>
      <div className="relative top-4 mx-2 h-8 border-t-2 border-dashed border-[#4a4830]">
        <span
          className="rm-hide absolute -top-[18px] grid size-[34px] place-items-center rounded-lg bg-[#e3d26f] text-[#0b0c0e]"
          style={loop("move30")}
        >
          <svg
            className="size-[18px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          >
            <path d="M3 7l9-4 9 4-9 4-9-4z" />
            <path d="M3 7v10l9 4 9-4V7" />
            <path d="M12 11v10" />
          </svg>
        </span>
      </div>
      <p className={`${mono} text-center text-xs text-[#cfc9a0]`}>
        idle stock → revenue · shortage → solved
      </p>
    </Stage>
  );
}

const scenes: Record<ShowcaseScene, () => React.JSX.Element> = {
  rewordly: RewordlyScene,
  seoneer: SeoneerScene,
  livoic: LivoicScene,
  brandisy: BrandisyScene,
  video: VideoScene,
  nextspares: NextSparesScene,
};

export function ShowcaseSceneFor({ id }: { id: ShowcaseScene }) {
  const Scene = scenes[id];
  return <Scene />;
}
