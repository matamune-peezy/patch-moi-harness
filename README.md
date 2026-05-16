# patch-moi-harness fork

Tiny releaseable npm package used to exercise patch.moi fork maintenance.

The repository is intentionally small so patch.moi can iterate quickly against
the whole maintenance loop:

- GitHub `peezy-tech/patch-moi-harness` is the upstream release surface.
- GitHub `matamune-peezy/patch-moi-harness` is the fork release surface.
- The maintained fork carries a small patch stack on top of upstream.

## Usage

```bash
npx @peezy.tech/patch-moi-harness-fork patch.moi
```

```js
import { buildInfo, greet } from "@peezy.tech/patch-moi-harness-fork";

console.log(greet("patch.moi"));
console.log(buildInfo());
```

## Release

Releases are tag-driven:

```bash
git tag fork-v0.1.3-fork.0
git push github-fork main fork-v0.1.3-fork.0
```

The npm trusted publisher should be configured for:

- Package: `@peezy.tech/patch-moi-harness-fork`
- GitHub organization/user: `matamune-peezy`
- GitHub repository: `patch-moi-harness`
- Workflow filename: `publish.yml`
- Environment: `npm-publish`
