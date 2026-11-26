# makefun-news-image-20261125

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/xexdartono-prog/makefun-news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/xexdartono-prog/makefun-news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

Entry for the make.fun bounty **news-image-20261125**: one image summing up the world news of Wednesday, 25 November 2026.

The image covers six stories from that day: proposed US tariffs on 14 trading partners, Shenzhou-24 docking at Tiangong with Pakistan's Muhammad Zeeshan Ali aboard, the Australia–Solomon Islands security pact, the Houthi claim of a hit on Saudi Arabia's Ras Tanura refinery, Bangladesh's 36% garment minimum-wage rise, and the fatal fuel-tanker fire near Cairo.

## Run

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` uses only the Node standard library. It validates that `entry.png` is PNG or JPEG data within the 1 MiB limit, then writes the same bytes to `entry.png` in the output directory (`/output` by default).

## License

MIT. See [LICENSE](LICENSE).
