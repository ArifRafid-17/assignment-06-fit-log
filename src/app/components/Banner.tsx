import Image from "next/image";
import Link from "next/link";
import bannerImg from "../assets/banner.png";

export default function Banner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 mb-12 sm:mb-16">
      <div className="relative overflow-hidden bg-[#14171d] border border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6 max-w-xl z-10">
          <span className="inline-block text-[#ccff00] text-xs font-black uppercase tracking-[0.2em]">
            WORKOUT LIBRARY
          </span>

          <h1 className="text-2xl sm:text-4xl lg:text-[46px] lg:leading-[54px] font-black uppercase tracking-tight text-white">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="pt-2 sm:pt-0">
            <Link
              href="#workouts"
              className="inline-block px-6 sm:px-7 py-3.5 rounded-xl text-black font-extrabold text-xs uppercase tracking-wider bg-[#ccff00] hover:bg-[#b8e600] transition-all active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.2)]"
            >
              BROWSE WORKOUTS
            </Link>
          </div>
        </div>

        {/* Right Featured Image */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="relative w-52 sm:w-72 lg:w-96 aspect-square">
            {/* Ambient Lime Glow */}
            <div className="absolute inset-0 bg-[#ccff00]/5 blur-3xl rounded-full pointer-events-none" />

            <Image
              src={bannerImg}
              alt="Workout Exercise Demonstration"
              fill
              unoptimized
              className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] select-none"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}