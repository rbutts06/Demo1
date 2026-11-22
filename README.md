# Pet That Dog!

An incremental game where the more you pet the dog the more powerful you and the dog become!
Click the dog to get spendable pet points which you can exchange for upgrades that earn you more points without clicking!

[Play Game](https://rbutts06.github.io/Demo1/)

## Run locally
Install Git and Deno 2.9.7, then run:
```bash
git clone https://github.com/rbutts06/Demo1
cd Demo1
deno task setup
deno task dev
```
Open the local address printed in the terminal. The development server normally uses port 3000.

Check, build, and preview
```bash
deno task fmt
deno task ci
deno task preview
```
- deno task fmt formats the project.
- deno task ci checks formatting, lint, and TypeScript.
- deno task preview serves the most recent production build locally.

Preview does not rebuild or publish the game. Use the printed preview address. GitHub Actions runs checks and deploys the production build to GitHub Pages when changes are pushed to main.

## Code Organization
|File|Function|
|---|---|
|[src/assets](https://github.com/rbutts06/Demo1/tree/main/src/assets)|Holds all assets images and sounds|
|[src/main.ts](https://github.com/rbutts06/Demo1/blob/main/src/main.ts)|Assembles the game. Creates the buttons and counters and keeps track of all game progress|

## Credits

Tooling adapted from the [CMPM 121 Fall 2026 S01 starter](https://github.com/ucsc-cmpm-121-f26/s01-starter/tree/8974888efb6537be82e8eb069db139ea885039da), which has no explicit repository license. No new license is assigned to that material. The D1 scaffold and original SVG were authored with OpenAI GPT-6 Astra assistance. Dependencies retain their respective licenses.

Dog Bark sound effect sourced from: https://freesound.org/people/8bitmyketison/sounds/699822/

Team members:
[rbutts06](https://github.com/rbutts06) and [CCroyPerett](https://github.com/CCroyPerrett)
