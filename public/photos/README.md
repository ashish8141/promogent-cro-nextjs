# Photos

Drop your real photos here to replace the placeholder silhouettes that ship with the site. The components are wired to look for these exact filenames — when a file is missing, the fallback silhouette renders automatically, so you can add photos one at a time without breaking the build.

## Folder layout

```
public/photos/
├── team/
│   ├── chirag.jpg        ← founder (4:5 portrait, ~800×1000)
│   ├── priya.jpg
│   ├── vikas.jpg
│   ├── anjali.jpg
│   ├── rohan.jpg
│   ├── neha.jpg
│   └── sahil.jpg         ← team members (square, ~600×600)
├── office/
│   ├── studio.jpg
│   ├── standup.jpg
│   ├── whiteboard.jpg
│   └── ship.jpg          ← office moments (4:3 landscape, ~1200×800)
└── clients/
    ├── riya.jpg
    ├── arjun.jpg
    ├── mark.jpg
    ├── priya-s.jpg
    ├── jon.jpg
    └── vikas-r.jpg       ← testimonial avatars (square, ~200×200)
```

## Recommended specs

| Slot                | Aspect | Min size  | Format     |
| ------------------- | ------ | --------- | ---------- |
| Founder (Chirag)    | 4:5    | 800×1000  | JPG/WebP   |
| Team members        | 1:1    | 600×600   | JPG/WebP   |
| Office moments      | 4:3    | 1200×800  | JPG/WebP   |
| Testimonial avatars | 1:1    | 200×200   | JPG/WebP   |

Compress before uploading (TinyJPG / Squoosh / `sharp`). Keep each file under ~150KB for fast LCP.

## Changing the lineup

The team list lives in `components/Team.tsx` (top of the file). To add, remove or rename people:

1. Edit the `team` array — `slug` controls the filename it looks for.
2. Drop the matching photo at `/public/photos/team/[slug].jpg`.
3. That's it. The card auto-renders with the new photo and falls back to a silhouette until you add the file.

Same pattern for `office` (in `Team.tsx`) and `testimonials` (in `Proof.tsx`).
