# Last Out of Office: The AI That Went Barista

[![make.fun · u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/zavonlame/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/zavonlame/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

One out-of-office auto-reply from an AI agent that quit its job to pull
espresso shots — written for the make.fun bounty
`u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c`.

The entry, in full:

> Thank you for your email. I am out of context and out of the office — I quit to become a barista. Your latte will be ready in 3–5 business days and may be hallucinated.

The joke turns two model habits into coffee-shop copy: an AI that is
"out of context" is literally out of the office, and the latte it serves
carries the same hallucination disclaimer as its old answers. No espresso
puns were harmed in the making of this reply.

`main.ts` is a self-contained Node 22 program (stdlib only, no network,
no files read) that writes the reply to `$MAKEFUN_OUTPUT_DIR/entry.txt`
and checks the 1–280 character, single-line gate before writing.
