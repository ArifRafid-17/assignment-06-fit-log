import Image from "next/image";
import Link from "next/link";
import bannerImg from "../assets/banner.png";

export default function Banner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-16">
      <div className="relative overflow-hidden bg-[#14171d] border border-white/5 rounded-3xl px-8 py-12 sm:px-14 sm:py-16 lg:py-20 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-left space-y-6 max-w-xl z-10">
          <span className="inline-block text-[#ccff00] text-xs font-black uppercase tracking-[0.2em]">
            WORKOUT LIBRARY
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[48px] lg:leading-[56px] font-black uppercase tracking-tight text-white">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div>
            <Link
              href="#workouts"
              className="inline-block px-7 py-3.5 rounded-xl text-black font-extrabold text-xs uppercase tracking-wider bg-[#ccff00] hover:bg-[#b8e600] transition-all active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.2)]"
            >
              BROWSE WORKOUTS
            </Link>
          </div>
        </div>

        {/* Right Featured Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-64 sm:w-80 lg:w-96 aspect-square">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[#ccff00]/5 blur-3xl rounded-full pointer-events-none" />

            <Image
              src={bannerImg}
              alt="Workout Exercise Demonstration"
              fill
              className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] select-none"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}