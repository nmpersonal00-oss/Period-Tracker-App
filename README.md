# Rosie Rhythm — Roseglass + Phone Reminders

## Deploy to GitHub Pages
1. Make a separate `rosie-rhythm` GitHub repository. Extract the ZIP, upload its contents **at the repository root** and enable GitHub Pages on `main / (root)`.
2. Open the HTTPS published website (not the ChatGPT file preview) and sign in with your shared Supabase account.
3. On each iPhone, open the site in Safari, use **Share → Add to Home Screen**, then open the new Home Screen icon. Inside **Reminders**, choose **Set up my phone** on one phone and **Set up his phone** on the other, grant permission, and tap **Send test alert** on each.
4. Android/desktop Chrome: open the HTTPS website, allow notifications and run the same setup. Devices can unsubscribe individually using **Turn off on this phone**.

Notifications are automatically checked server-side every 15 minutes: your estimated period heads-up near 9 a.m. local time and his compassionate check-in near 7:30 p.m. on relevant estimated dates. The job is approximate and may be delayed by background delivery. True delivery must be checked on both real phones using **Send test alert**. Predictions depend on recorded periods. Without at least one recorded period there is no date to alert about. Existing Calendar `.ics` exports remain a backup.

Your period and health notes remain private to the shared Supabase account, not public in the GitHub repository. The same shared sign-in is required by both phones. Do not use ovulation calendar estimates for contraception.

Your personal data is stored in local browser storage unless cloud sync succeeds; do a backup before changing devices or clearing browser data.
 

## Stay-signed-in update
- Uses a Rosie-specific Supabase session storage key, distinct from Closet, Sakinah, and the cinema app, even when all apps use one github.io origin.
- Supabase automatically restores and refreshes each device's token. No password is stored in app code.
- Sign out uses *local* scope so it does not revoke the other phone's or device's sessions.
- Existing saved cycle records, prediction logic, notification buttons, icons, and Supabase project are unchanged.
- The first launch after this auth-storage change requires signing in once **inside the installed Home Screen app on each phone**. Sessions persist for later app launches while website data and authentication remain valid.
- Do not use private/incognito browsing for daily use. Clearing web data, explicitly signing out, or account-wide revocation can still require logging in.
- Real push requires both phones to opt in and receive a test alert; server health alone does not confirm phone delivery.

## Publish-ready Glossy Kawaii Icon Update
This edition includes the same Rosie period-tracking, auth, push registration, diary, prediction and cloud code from Stay Signed In Edition. Only favicon/app icon images, icon cache versions, and this README were updated.

**GitHub Pages:** Create a public repository named `rosie-rhythm`, upload the extracted ZIP contents at the repository root and enable Pages from `main` / `(root)`. The installable website URL is `https://nmpersonal00-oss.github.io/rosie-rhythm/`.

**Two phones:** Open the published page from Safari on both phones; use Share > Add to Home Screen and open each app icon. Sign in once per installed app using the same private Supabase account. In Reminders, each phone enables notifications separately and sends a test alert. A server health check does not prove a device received a push notification.
