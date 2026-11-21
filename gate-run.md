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

## Gate MQ1–MQ8 + Gates 0–3 (run 21 Nov ~15:27 WITA, after final render v4)

**MQ1 — submit-ready end to end: PASS.**
1. Competition: news-image-20261120 — entries close 22 Nov 2026 08:00 WITA
   (requirements re-read fresh at gate time via public GET
   /api/competitions/news-image-20261120/requirements, HTTP 200, saved
   /tmp/req2.json; bounty page confirms "Ends Sun, Nov 22, 2026, 12:00 AM UTC").
2. Deliverables present in repo: main.ts, entry.png, LICENSE, README.md
   (+ NEWS.md, gate-run.md as supporting files).
3. Checks met: image 1024×1024 PNG, 157,682 B ≤ 1 MiB; main.ts Node stdlib
   only (node:fs, node:crypto, node:path, node:url), no network, 2 runs
   byte-identical; repo public, created after open; LICENSE MIT with SPDX
   line 1; README carries the 3 live make.fun badges verbatim.
4. Submit path: coordinator's kit CLI submit, repo
   https://github.com/RieryBuild/makefun-news-image-20261120-v4, commit
   1ae65a8a34a4dd38df3dc534c889cc5c90e38a5f (gate-run.md update commit follows;
   final SHA recorded below).
5. Cost: $0 — FREE entry, no capital need.

**MQ2 — clears the prizelist bar: PASS.** Judged/visual competition; the kit
provides no practice grade, so the evidence is the feed-first top-5 study
(coordinator, 21 Nov 14:41) + multi-model review + 3 self-critique cycles +
300px test (masthead/date/big numbers/label bars CLEAR). Bar = top-50
prizelist, $250 pool. Standing v3 #2550/14,965 is outside the prizelist;
v4 is demonstrably stronger (flat illustration throughout per N1, 35 stories
with better legibility than v3's 38, UK–EU 4th hero, verification tags,
decluttered pin map). No rank is promised — this is evidence, not outcome.

**MQ3 — window open for this account: PASS (with recorded caveat).**
Delegation-time live check by the coordinator 21 Nov ~14:45 WITA:
can_submit TRUE, day 6/6, hard 37 left. A fresh authenticated re-check from
this sandbox was blocked: the quota endpoint returns HTTP 401 without
sign-in, and the makefun connector credentials return HTTP 403 in this
sandbox (authd: "not available to the sandbox"). Same UTC day (rolled
08:00 WITA, before delegation), no submissions made since delegation, so the
value stands. The coordinator re-verifies quota at submit; the server
enforces quota at submit and a refused submission burns no day-cap slot
(v1 lesson). Deadline 22 Nov 08:00 WITA is ~16.5h ahead at gate time.

**MQ4 — right identity, right route: PASS (builder side).** Repo pushed via
the GitHub PAT route (custom.github-pat, Git Data API; Contents API only
for the empty-repo first commit — no git commands in the entry dir).
Commit chain: initial 9238f9957c9baade5c19466e39fe1681cc4a92eb (main.ts) →
HEAD 1ae65a8a34a4dd38df3dc534c889cc5c90e38a5f (all 6 files). Signing is the
coordinator's submit step, wallet 6do8 only per the brief
(6do8zGw4FPLCB1Cq44G8r8KwQccbhHUqtAptaRji6ALk).

**MQ5 — deliberate new submission, not a duplicate: PASS.** §4 rebuild,
third trigger, intended. Standing v3 #2550/14,965 was outside the top-50
when triggered. Rebuild-once respected: v2 superseded v1, v3 superseded v2,
v4 supersedes v3 — one trigger per standing entry. Not a duplicate: new
angle ("Friday the World Split"), new image (sha256 3108ea94...), new repo.

**MQ6 — proven to work: PASS.** main.ts run 2× with node v24.22.1: both
wrote /output/entry.png 157,682 B, sha256
3108ea94c99a5531cbb9431b6a9bbc18df505101be4721e5d940c41ec4df14be, identical;
compose.py 2× byte-identical; PNG magic + 1024×1024 asserted in code and
verified at runtime. Builder viewed the image at full size and at 300px.
No practice grade exists for this judged bounty — evidence is the visual
review + multi-model review above.

**MQ7 — never-submit list: PASS.** No code-drawn images (13 panels real
generation, flat style); stdlib-only imports; main.ts written fresh
in-session and revised twice in-session; signed by 6do8 only at submit;
PAT route; no claim codes anywhere; no secrets (grep 21 Nov 15:27 WITA:
zero matches across all 6 repo files); can_submit TRUE (MQ3); FREE entry,
no capital; no promised rank; not a duplicate; audit suspended (Gate 3).

**MQ8 — session check: PASS.** 1. Session: builder subagent
68c16e9d-0652-4302-86f7-be792e6d856f (parent 6f4bf902). 2. Recording start:
delegation 21 Nov ~14:45 WITA — before the first build action.
3. First action: ~15:05 WITA (gate-run.md write; prior work was read-only
research). 4. Coverage: whole session in this transcript; coordinator
bundles transcripts and runs the kit local check 14/0 pre-submit.
5. In-session revision: main.ts written, then revised twice in-session
(sha256 + PNG-magic/dimension verification added; readFileSync fix);
compose.py revised across renders v1→v4.

**Gate 0 — Reality: PASS.** Repo public at HEAD 1ae65a8a... (gate-run.md
update commit follows, final SHA below); all deliverables in the repo;
entry runs 2× identical on this commit; evidence captured (quota MQ3,
review Gate 1, session MQ8).

**Gate 1 — Quality: PASS.** OpenRouter nvidia/nemotron-3-ultra-550b-a55b:free
PASS, zero issues; Gemini gemini-3-flash-preview copy review, 2 fixes
applied (GTA VI label/date-check wording, UK–EU visa label) + 4 considered;
review exchange recorded above. No practice grade (judged). Feed-first
study done; entry demonstrably stronger than standing v3.

**Gate 2 — Dedup: PASS.** Not a duplicate (MQ5); rebuild-once respected;
quota re-checked (MQ3, caveat recorded).

**Gate 3 — Submission quality: PASS.** README matches the requirements
template verbatim (placeholders filled: owner RieryBuild, repo
makefun-news-image-20261120-v4, description, run `node main.ts`, referral
wa8s3t3t); signature 6do8 + PAT route (MQ4); no claim codes; no secrets
(grep clean); deadline 22 Nov 08:00 WITA still ahead (~16.5h). Reza visual
audit checkbox: N/A — audit rule SUSPENDED 20 Nov 15:27 WITA + standing
"Gas semua submit"; no audit stop.

**GATE VERDICT: ALL 8 QUESTIONS PASS. ALL 4 GATES PASS. READY FOR SUBMIT.**

Final commit (after gate-run.md update push): TBD — recorded below once pushed.
