"use client";

import { motion } from "framer-motion";

const heroStats = [
  { label: "Follower surge", value: "+87K", meta: "30-day runway" },
  { label: "Retention peak", value: "78%", meta: "Story completion" },
  { label: "DM conversions", value: "12.4%", meta: "Organic leads" },
];

const pillars = [
  {
    title: "Magnetic Hooking",
    description:
      "Cold-open pacing drives curiosity in under three seconds with cinematic light leaks and tactile foley.",
    bullet: "00:00 – framing the sofa shot with breathing room.",
  },
  {
    title: "Narrative Sequencing",
    description:
      "Three-beat storytelling invites viewers into the growth system blueprint without losing intimacy.",
    bullet: "00:23 – split-screen overlays summarise the growth ladders.",
  },
  {
    title: "Conversion Close",
    description:
      "A soft CTA layered over animated metrics keeps the moment human while nudging toward the lead magnet.",
    bullet: "00:48 – dynamic metric crawl lands on the CTA.",
  },
];

const timeline = [
  {
    stamp: "00:04",
    title: "Atmospheric hook",
    detail:
      "Camera glides into the sofa scene while the influencer breathes in. Subtle depth-of-field keeps focus on facial micro-movements.",
  },
  {
    stamp: "00:16",
    title: "System reveal",
    detail:
      "Transparent kinetic captions pulse alongside a holographic workflow map compressed into three actionable tiers.",
  },
  {
    stamp: "00:29",
    title: "Proof montage",
    detail:
      "Feed cutaways and dashboard overlays float around the frame, driven by motion-tracked hands gestures.",
  },
  {
    stamp: "00:44",
    title: "Conversion close",
    detail:
      "Influencer leans forward, eyes on lens, and delivers an authentic invite with soundtrack ducking for emphasis.",
  },
];

const systemHighlights = [
  {
    heading: "Audience Magnetism Layers",
    copy: "Persona mirroring, topical urgency, and intrigue loops are stitched together so every sentence pays off visually.",
  },
  {
    heading: "Growth Engine Blueprint",
    copy: "The video walks through the Capture → Nurture → Elevate ladder with animated dashboards keyed to real metrics.",
  },
  {
    heading: "Retention-First Mix",
    copy: "Ear-catching room tone, live captions, and parallax infographic cards create the hyper-real sensation viewers trust.",
  },
];

const callouts = [
  "AI-tracked facial lighting reacting to micro expression shifts.",
  "Depth-aware captioning that hugs the sofa contour line.",
  "Dynamic motion graphics anchored to the influencer’s gestures.",
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://storage.coverr.co/videos/coverr-modern-living-room-interview-9964/1080p.mp4"
        autoPlay
        playsInline
        muted
        loop
        poster="/fallback-poster.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-emerald-950/40" />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-32 md:px-10 lg:px-16">
        <section className="grid gap-14 lg:grid-cols-[1.2fr,1fr] lg:items-end">
          <div className="space-y-10">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80"
            >
              Hyperreal Sofa Session
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-balance text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
            >
              A cinematic influencer breakdown of the Instagram Growth System.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-xl text-lg text-white/70 md:text-xl"
            >
              Shot in living-room daylight with lifelike audio staging, this spot
              pairs human storytelling with data-anchored overlays so viewers feel
              transported into a private masterclass straight from the sofa.
            </motion.p>
            <div className="grid gap-6 sm:grid-cols-3">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 + index * 0.08 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
                >
                  <p className="text-sm uppercase tracking-wide text-white/60">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/60">{stat.meta}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.7)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-sky-400/10 mix-blend-screen" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08)_0%,_transparent_60%)]" />
            <div className="relative flex flex-col gap-6 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                Story Beats
              </p>
              <ul className="space-y-5 text-sm leading-relaxed text-white/80">
                {callouts.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white/5 p-4"
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        <section className="grid gap-12 lg:grid-cols-[1fr,1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              The narrative arc that makes the growth system unforgettable.
            </h2>
            <p className="text-lg text-white/70">
              Each beat is choreographed to keep the viewer in the room—feeling the
              texture of the sofa, catching the gleam in the influencer&apos;s eye,
              and absorbing the Instagram playbook without friction.
            </p>
            <div className="space-y-6">
              {systemHighlights.map((item) => (
                <div
                  key={item.heading}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-emerald-300/80">
                    {item.heading}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-white/80">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="grid gap-6"
          >
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1 hover:border-emerald-300/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-emerald-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-white/70">{pillar.description}</p>
                  <p className="text-sm text-emerald-300/80">{pillar.bullet}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </section>

        <section className="rounded-[3rem] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl md:p-16">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="flex-1 space-y-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/70">
                Scene Timing
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Timeline of the hyper-real session.
              </h2>
              <p className="text-lg text-white/70">
                Designed for vertical repurposing, each checkpoint locks to a
                narrative payoff and ensures the Instagram growth system downloads
                instantly.
              </p>
            </motion.div>
            <motion.a
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              href="#call-to-action"
              className="inline-flex items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-500/10 px-7 py-3 text-sm uppercase tracking-[0.3em] text-emerald-200 backdrop-blur"
            >
              Build Your Session
            </motion.a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {timeline.map((point, index) => (
              <motion.div
                key={point.stamp}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-7"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15)_0%,_transparent_60%)] opacity-60" />
                <div className="relative space-y-4">
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                    {point.stamp}
                  </span>
                  <h3 className="text-xl font-semibold">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {point.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1fr,0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/70">
              Hyper-real Production Notes
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Sofa-side authenticity with studio-grade polish.
            </h2>
            <p className="text-lg text-white/70">
              We treat the living room like a premium set: volumetric lighting,
              nanofiber diffusers, and layered audio beds make the viewer feel like
              they&apos;re in the room—no uncanny valley, just intimacy.
            </p>
            <div className="grid gap-4 text-sm leading-relaxed text-white/80">
              <p>
                <span className="font-semibold text-emerald-200">
                  Lens choreography:
                </span>{" "}
                35mm prime with motorized slider for wraparound parallax, making the
                sofa moment breathe.
              </p>
              <p>
                <span className="font-semibold text-emerald-200">
                  Audio tapestry:
                </span>{" "}
                Dual-mic capture blends lapel warmth and room ambiance, then
                sidechains music to speech for luxurious clarity.
              </p>
              <p>
                <span className="font-semibold text-emerald-200">
                  Touchpoint overlays:
                </span>{" "}
                Animated feed previews and DMs float through the air, lit by the same
                key light values for realism.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
          >
            <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-emerald-500/30 blur-3xl" />
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="relative space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                What the viewer feels
              </h3>
              <ul className="space-y-4 text-sm leading-relaxed text-white/80">
                <li>
                  <span className="font-semibold text-emerald-200">
                    Trust instantly:
                  </span>{" "}
                  Human eye contact, natural skin texture, and breathable pacing make
                  the pitch conversational.
                </li>
                <li>
                  <span className="font-semibold text-emerald-200">
                    Clarity without effort:
                  </span>{" "}
                  Overlays highlight each Instagram lever in context, triggered by hand
                  gestures tracked in real time.
                </li>
                <li>
                  <span className="font-semibold text-emerald-200">
                    Actionable momentum:
                  </span>{" "}
                  CTA lands with subtle light bloom and cinematic sound design, nudging
                  an immediate tap-through.
                </li>
              </ul>
            </div>
          </motion.div>
        </section>

        <section
          id="call-to-action"
          className="relative overflow-hidden rounded-[3.5rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/15 via-black/60 to-slate-950/80 p-12 text-center shadow-[0_40px_120px_-60px_rgba(16,185,129,0.6)] md:p-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_0%,_transparent_65%)]" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="relative space-y-8"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-200/80">
              Ready for amplification
            </p>
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Book the hyper-real Instagram growth system session.
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-white/70">
              Bring your audience onto the sofa, let them feel the energy, and hand
              them the clearest path to fast-track growth. We handle every cinematic
              beat so you can stay focused on the message.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:production@sofasessions.studio"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Lock in a shoot
              </a>
              <a
                href="https://cal.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/80 transition-transform duration-300 hover:-translate-y-0.5 hover:border-white/60"
              >
                Preview deliverables
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
