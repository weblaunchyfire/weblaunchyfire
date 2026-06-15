# Web Launchy Fire Project Review

Review date: 2026-06-06

## Current Status

The main quick production blockers found in the first review have been fixed:

- Removed hardcoded fallback ImgBB and Web3Forms keys from `app/launch/page.jsx`.
- Removed dummy order summary values such as `SDFSDSD` and `89855655`.
- Replaced fake UPI text `yourname@upi` with a safer verification message.
- Unified visible brand text to Web Launchy Fire in layout, header, footer, and preview sidebar.
- Replaced footer `#` legal links with real `/privacy` and `/terms` pages.
- Added basic Privacy and Terms pages.
- Verified with `npm run lint`.
- Verified with `npm run build`.

## Verification

- `npm run lint` passed.
- `npm run build` passed.
- Production build completed successfully.
- Build still shows warnings for normal `<img>` usage in `app/launch/page.jsx`. These are performance warnings, not build failures.

## Remaining Work Before Full Production

### 1. Backend Order Flow

The launch flow still depends heavily on client-side logic:

- Client-side image upload.
- Client-side Web3Forms submission.
- Client-side screenshot capture.
- WhatsApp handoff after payment.

Recommended next step:
- Add a server/API route to create and store orders.
- Send uploads and form submissions through the backend where possible.
- Keep a reliable order record before WhatsApp/payment handoff.

### 2. Large Files Need Refactor

Some files are still too large:

- `app/launch/page.jsx`
- `components/TemplatePreview.jsx`
- `components/template/litePakage/templateone/TemplateOne.jsx`
- `components/TemplatesView.jsx`
- `app/page.jsx`

Recommended split:
- Launch page: form step, upload section, add-ons step, payment summary, QR/payment section, storage hooks, upload hooks.
- Preview page: toolbar, theme picker, font picker, device frame, template drawer.

### 3. Real Template Variety

The template registry currently maps to one main template layout.

Recommended next step:
- Add multiple real layouts.
- Register more template components.
- Map categories/subcategories to different layouts, not only different images/data.

### 4. Payment Details

The fake UPI label has been removed, but the real production payment process still needs final confirmation.

Recommended next step:
- Confirm the production QR and UPI/payment instructions.
- Add clear payment confirmation rules.

### 5. Browser Smoke-Test

The app builds successfully, but a full visual browser test should still be done on:

- Desktop homepage.
- Mobile homepage.
- Template browse page.
- Template preview page.
- Launch/payment flow.
- Privacy and Terms pages.

