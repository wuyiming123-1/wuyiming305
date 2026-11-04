# AGENTS.md

## What this repo is
Static HTML/CSS/JS course work. **No build system, package manager, test suite, linter, or dev server.** Verify by opening in Chrome/Edge or VS Code Live Server; start at `111/index.html`. Do **not** add `package.json`, bundlers, frameworks, or test tooling.

- Active: `111/` (work here by default). `111/index.html` is the hub.
- `24002120305+吴一鸣/` is an older submitted snapshot — do not edit unless explicitly asked.
- Root `README*.md` are Gitee boilerplate (ignore).

## Hard rules (from `111/wym_prompt.md`)
- Every new CSS class, HTML `id`, and JS variable/function must start with `wym_`.
- Every new HTML page must be linked from `111/index.html`.
- Before executing any user request, append to `111/wym_prompt.md` with timestamp, model name, and verbatim prompt. Append only; never overwrite.
- Every new HTML file must start with a comment stating the author (吴一鸣), creation time, the model used, and the feature name (功能名称), e.g. `<!-- 作者：吴一鸣 | 建立时间：YYYY-MM-DD | 大模型：... | 功能：... -->`.
- Every JS function must have a comment above it describing its main functionality.
- Older files (`1.html`, `svg2.html`, etc.) predate this rule — do not rename existing identifiers unless asked.

## Assets
- Vendored locally: `111/cdn/` (Font Awesome, Lucide), `111/font/` (iconfont files + SVG symbols). Use relative local paths, not remote CDNs.
- Font: `.iconfont` classes from `111/font/iconfont.css`. SVG: `<script src="font/iconfont.js"></script>` then `<svg><use href="#icon-..."></use></svg>`.

## Ball game
- Spec: `111/spec.md` (single-file vanilla HTML/CSS/JS, no external files). Names target `ball-game.html`, but existing impl is `111/ball_game_state_flow.html`. **Confirm filename with the user** before editing/creating.

## Skills
- Load `111/skills/frontend-design/SKILL.md` before UI work.
- `111/skills/submit-project/SKILL.md` documents Gitee submission workflow.

## Git & security
- Remote: `neusoft_wangyao_jsj/wym0`, branch `master` (Gitee).
- Commits in Chinese, one focused change. Stage files explicitly, avoid `git add -A`.
- `111/skills/submit-project/SKILL.md` contains a plaintext Gitee PAT in Git history — never echo/copy/commit new copies; rotate if shared.

## Windows/PowerShell gotchas
- PowerShell 5.1: `&&` unsupported → use `;` with `if ($?)`.
- Run `git log` / `git diff` with `--no-pager` (or `git --no-pager ...`).
- UTF-8 without BOM, Chinese text — use Read/Edit or `-Encoding UTF8` to avoid mojibake.
