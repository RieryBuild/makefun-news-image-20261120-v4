# gate-run.md — news-image-20261120 v4 "Friday the World Split"

Builder session: 68c16e9d-0652-4302-86f7-be792e6d856f (subagent, parent 6f4bf902).
Build started: 21 Nov 2026 ~15:05 WITA. Entries close 22 Nov 08:00 WITA.
Standing entry v3 "Austere Nova" (01a1f9a4): rank #2550/14,965, judge 975,354 — outside top-50 prizelist.
This is the THIRD §4 rebuild trigger for this competition (v2 first, v3 second).
Repo (already created): RieryBuild/makefun-news-image-20261120-v4 (public).
Entry dir: ~/workspace/makefun-work/news-image-20261120-entry-v4/
Build dir: ~/workspace/makefun-work/news-image-20261120-build-v4/

## STEP 1 — Pitch (epic-infographics step 3): 3 genuinely different angles

**Angle A — "The Day the World Shook"** (v3's angle: storms literal + military + market,
COP31 as third shock). REJECTED: v3 already used it; a rebuild must not repeat the
standing entry's angle.

**Angle B — "One Friday, Seven Continents"** (geographic sweep: every region gets a
headline; the day as a world tour, map-led). REJECTED: top-5 already do region bars +
map as their spine; this would read as a near-clone of the leaders' form (NO-COPY).

**Angle C — "FRIDAY THE WORLD SPLIT" (CHOSEN).** The day as a series of fractures —
and one reconnection. Kyiv's bridges cut in two; a Russian missile splits NATO
airspace over Poland; the AI boom splits from its own hype (Nikkei −5.1%); COP31
splits over fossil fuels; a cyclone splits the Odisha coast. The counterpoint, and
the 4th hero: the UK–EU reset — the one thing that JOINED on Friday (food trade,
100,000 youth visas, carbon link). Editorial spine: "A day of splits — and one
reset." Kicker on the masthead: "A DAY OF SPLITS — AND ONE RESET". This angle is
ours: no top-5 entry frames the day as fracture-vs-reconnection, and it is not v3's
angle.

## Research (live, primary sources — see NEWS.md for per-story first-report dates)

35 stories verified from Reuters/AP/BBC/AFP/AAP/IMD/UN News/ESA/FIA/Cricinfo/Xinhua
and other primaries via live web search 21 Nov ~15:00–15:30 WITA. 13 labelled
panels (4 heroes + 9 small), big-number strip 6, UTC timeline strip 7, schematic
map + pins, ALSO list 22, DATE CHECK 2 lines (8 named 19 Nov exclusions).
Grey-zone stories (3): Bukele registration (Thu night CST = Fri 03:00 UTC),
Anthropic first close $97.17 (19 Nov 21:00 UTC = 20 Nov Asia), BepiColombo
(coverage Fri 20 Nov; insertion Sat 21 Nov) — mid-list ONLY, never leads, never
big numbers; reasoning in NEWS.md. Senate 51–48 Iran vote EXCLUDED outright —
no 19 Nov number anywhere in the image.

## Teardown hard gates (N1–N6) — compliance checklist

- [x] N1: ALL 13 panels generated in FLAT ILLUSTRATION STYLE (media.generate_image,
      flat vector prompts). NO photorealism. NO footer admission about AI photos.
      Viewed: Kyiv (flat bridges/missiles), Akvan (flat waves), all 13 flat.
- [x] N2: every panel body 2 sentences + INLINE source attribution "(Source, Source)"
      on its own italic line per panel.
- [x] N3: bold topic label bars ON every panel (top of image), readable at thumbnail.
- [x] N4: DATE CHECK 1 line (max 2), 8 named exclusions.
- [x] N5: CREAM paper palette throughout (#F6F0E0), no dark navy page.
- [x] N6: 35 stories (target 34–36).
- [x] Plus: UK–EU reset as 4th hero; verification tags CONFIRMED/REPORTED/OFFICIAL/
      CLAIM/FORECAST on panels; UTC timeline strip 7; 3-hero hierarchy + big-number
      strip 6 verified 20 Nov figures + 13 labelled panels + map + pins + ALSO list;
      hero panels DEPICT their stories (real flat generation, never code-drawn);
      masthead + 3 leads legible at 300px (MANDATORY test — see v2/v3 below).

## Self-critique iterations (§3–§4 prompt additions)

(Recorded below as versions land; stop only when a full cycle finds no material
weakness or improvement is negligible.)

- v1 (compose render 1, 471,152 bytes): layout overflowed by 76px on first run
  (footer ended at y=1100). Fixed geometry (hero img 116→92, small 68→52,
  bodies shortened to 2 sentences, source on its own italic line). Rendered OK
  but 5 weaknesses found on visual review: (1) map pins clustered into an
  unreadable blob in Europe; (2) ALSO list rows at 9px pitch overlapped
  (9pt font); (3) file 471 KB > 300 KB target; (4) hero headlines 15pt
  borderline at 300px; (5) Poland panel washed out (pale sky, missile barely
  visible).
- v2 (render 2, 158,317 bytes, sha256 273b1d11...): fixes (1)–(3) applied —
  PIN_DXDY declutter offsets + leader lines, ALSO 8pt/10px pitch + taller
  bottom block, adaptive 256-colour quantise when >300 KB. Map now reads
  clearly; ALSO rows clean. 300px test: masthead + date + big-number strip +
  hero label bars CLEAR; hero headlines readable-with-effort. Remaining:
  (4) hero headline bump, (5) Poland panel regeneration.
- v3 (FINAL, render 3+4, 157,524 bytes, sha256
  000304b375d6ec08ce56e133854a12450c5c7caf17798d676cc10831192f5b7a):
  hero headline 15→16pt (img 92→90), Poland panel regenerated (v2 prompt:
  steep-angle missile + orange impact explosion + smoke plume, saturated).
  Compose determinism: 2 consecutive runs byte-identical (same sha256).
  Cycle-3 review of the final render: no overflow, no truncation (all bodies
  end complete), all 13 label bars + tags visible, map decluttered, DATE
  CHECK 1 line, cream palette throughout. NO material weakness found —
  iteration stops here per §3–§4.

## Multi-model review (Gate 1)

- OpenRouter :free code/reasoning: **nvidia/nemotron-3-ultra-550b-a55b:free**
  (free list re-checked via GET /models 21 Nov ~15:15 WITA; 11 :free models live).
  Reviewed main.ts in full + entry facts (157,524-byte entry.png at review time,
  pre-Gemini-fix sha 000304b3...). Verdict: **PASS, zero issues** (no
  stdlib/network/determinism problems). Cost $0.
- Gemini text/copy: **gemini-3-flash-preview** (gemini-3.8-flash returned HTTP 503
  "high demand" 21 Nov ~15:20 WITA; 2.5-flash retired for this key, 404;
  3-flash-preview answered fine — 503 was model-specific, not a service outage).
  Reviewed masthead + 3 hero headlines + 6 big numbers + DATE CHECK. Found 6
  points; fixes applied: (1) GTA VI "contradiction" — real reader-confusion
  risk: strip label "GTA VI DAY-ONE SALES" → "GTA VI SALES ANNOUNCED", DATE
  CHECK "GTA VI launch" → "GTA VI launch (Thu)", panel body "already sold"
  → "pre-sold"; NEWS.md records the launch-vs-announcement distinction.
  (2) "YOUTH VISAS / YEAR" lacked location → "UK–EU YOUTH VISAS / YEAR".
  (3) Two Odisha big numbers — considered, kept: both verified 20 Nov figures,
  strip is figures not stories. (4) Hero 3 editorial tone — kept: matches the
  "splits" angle spine. (5) Minus sign — already U+2212, no change. (6) Friday
  20 Nov 2026 calendar — correct. Post-fix render v4 re-verified (157,682 B,
  sha 3108ea94...). No re-review requested: changes are 3 short label strings.
- Xingchiapi: NOT used (per brief).

## Gate MQ1–MQ8 + Gates 0–3

(To be filled at gate time; ONE FAIL = fix + re-run whole gate from MQ1.)
