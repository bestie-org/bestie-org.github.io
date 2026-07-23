---
title: "Installation — flash BEStie and connect it to your bike"
description: "Flash BEStie in 15 minutes with the web uploader, then pair with your Bosch bike and your Garmin, Wahoo or other smart-trainer-compatible device."
---

<section class="page-header">
  <div class="container">
    <h1>Installation</h1>
    <p>From a bare board to live power, speed and cadence on your fitness gear. About 15 minutes, no soldering for the recommended hardware.</p>
  </div>
</section>

<section class="section">
  <div class="container">

    <p>
      This guide covers boards with the <strong>Adafruit bootloader</strong> — the easy way:
      <a href="https://www.adafruit.com/product/4062" target="_blank" rel="noopener">Adafruit Feather nRF52840 Express</a>,
      <a href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank" rel="noopener">Seeed Studio XIAO nRF52840</a>,
      and anything from
      <a href="https://github.com/bestie-org/Adafruit_nRF52_Bootloader/blob/master/supported_boards.md" target="_blank" rel="noopener">this list</a>
      that has an nRF52840 chip. For other boards (e.g. Nordic DKs), see the
      <a href="https://github.com/bestie-org/BEStie#installation" target="_blank" rel="noopener">project README</a>.
    </p>

    <div class="install-step">
      <h3>Step 1 — Put your board into bootloader mode</h3>
      <ul>
        <li><strong>Adafruit Feather:</strong> plug in the USB cable. Push and hold both buttons, let go of the reset button and keep holding the other one. Wait for a new USB drive to appear.</li>
        <li><strong>Seeed Studio XIAO:</strong> press and hold the tiny button next to the USB port, plug in the USB cable, wait for a USB drive to appear.</li>
      </ul>
      <p>
        Verify the new USB drive contains <code>CURRENT.UF2</code>, <code>INDEX.HTM</code> and
        <code>INFO_UF2.TXT</code>. If not, try again — it sometimes takes a couple of attempts.
      </p>
    </div>

    <div class="install-step">
      <h3>Step 2 — Update the bootloader (first install only)</h3>
      <p>Open <code>INFO_UF2.TXT</code> on the USB drive. It looks like this:</p>
      <pre><code>UF2 Bootloader &lt;version&gt;
Model: Seeed XIAO nRF52840
Board-ID: nRF52840-SeeedXiao-v1
Date: Jun 22 2026
SoftDevice: S140 X.Y.Z</code></pre>
      <p>
        If the last line says <code>SoftDevice: S140 7.3.0</code>, your bootloader is up to date —
        skip to step 3. Otherwise:
      </p>
      <ol>
        <li>Note the <code>Model:</code> line and find it in
          <a href="https://github.com/bestie-org/Adafruit_nRF52_Bootloader/blob/master/supported_boards.md" target="_blank" rel="noopener">the supported boards list</a>
          to get the matching name in the <code>Board</code> column.</li>
        <li>Go to the
          <a href="https://github.com/bestie-org/Adafruit_nRF52_Bootloader/releases/latest/" target="_blank" rel="noopener">BEStie bootloader release</a>
          and download the <code>.hex</code> file named after that <code>Board</code> value, ending in <code>_s140_7.3.0.hex</code>.
          For example <code>feather_nrf52840_express_bootloader-vX.Y.Z_s140_7.3.0.hex</code> or
          <code>xiao_nrf52840_ble_bootloader-vX.Y.Z_s140_7.3.0.hex</code>.</li>
        <li>Flash the bootloader file using step 3 below, then flash the BEStie firmware the same way.</li>
      </ol>
      <div class="callout callout-warning">
        <strong>Warning:</strong> be very careful to pick the correct bootloader variant — there is
        Feather and Feather Express, XIAO and XIAO Sense. Flashing the wrong variant may leave the
        board unbootable. Skipping the 7.3.0 update will crash the BEStie firmware on boot.
      </div>
    </div>

    <div class="install-step">
      <h3>Step 3 — Flash the BEStie firmware</h3>
      <video src="https://github.com/user-attachments/assets/885ea862-84bc-48cb-891e-cf43fd68cbda" controls preload="none" muted playsinline></video>
      <ol>
        <li>Download <code>bestie_nrf52840.hex</code> from the
          <a href="https://github.com/bestie-org/BEStie/releases/latest" target="_blank" rel="noopener">latest BEStie release</a>.</li>
        <li>Make sure the board is still in bootloader mode (the USB drive with <code>INFO_UF2.TXT</code> is visible — it times out after a few minutes of inactivity).</li>
        <li>Open the <a href="https://bestie-org.github.io/adafruit-uploader/" target="_blank" rel="noopener">BEStie firmware uploader</a>
          in a browser with WebSerial support (Chromium or a recent Firefox).</li>
        <li>Click <kbd>Connect Serial</kbd>. Allow USB access if the browser asks. There should be exactly one port on the list.</li>
        <li>Click <kbd>Single .hex (auto detect)</kbd>, pick your <code>.hex</code> file, then <kbd>Upload</kbd> and wait.
          For a bootloader update, wait an extra 30 seconds after the upload finishes, then repeat with the BEStie firmware file.</li>
      </ol>
    </div>

    <div class="install-step">
      <h3>Step 4 — Verify the installation</h3>
      <ol>
        <li>Unplug USB and plug it back in. The board should boot normally — <strong>no USB drive appears</strong>.
          If a USB drive shows up instead, the bootloader is fine but failed to boot the application.</li>
        <li>Install Nordic's nRF Connect app:
          <a href="https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp" target="_blank" rel="noopener">Android</a> ·
          <a href="https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403" target="_blank" rel="noopener">iOS</a>.</li>
        <li>Scan for devices — one named <strong>BEStie</strong> should appear. Tip: tap the icon next to its name
          so a red star appears; you can then find it quickly via “show preferred devices” in the filter menu.</li>
      </ol>
      <video src="https://github.com/user-attachments/assets/0d449880-54e3-4b62-ae2e-5b4577e9851f" controls preload="none" muted playsinline></video>
      <p>
        You can connect to it if you like — inside you'll find a <em>Fitness Machine</em> service.
        Once a bike is connected, enabling notifications (the triple-arrow button next to the FTMS
        characteristic) shows live power, speed and cadence.
      </p>
    </div>

    <div class="install-step">
      <h3>Step 5 — Pair BEStie with your bike</h3>
      <p>
        On a fresh boot BEStie enters an enhanced pairing mode that boosts the chance of a successful
        pairing. It ends with the first successful bike connection. It's best to power-cycle the board
        before adding a new bike — all existing pairings are kept.
      </p>
      <video src="https://github.com/user-attachments/assets/10be3567-08a9-4f4b-857e-d38123ba41cc" controls preload="none" muted playsinline></video>
      <ol>
        <li>Make sure BEStie is flashed and visible in an nRF Connect scan (steps above).</li>
        <li>Bring BEStie, the bike and your phone with the Flow app close together — about arm's reach.</li>
        <li>Do the pairing away from other fitness devices (HR straps, cycling sensors) if possible, and make sure only the bike you want to pair is turned on.</li>
        <li>In the Flow app select the correct bike, then: gear icon → <em>components</em> → blue <em>Add component</em> link → <em>Accessories</em>.</li>
        <li>Let the scan run — a single scan can take up to 2 minutes. Repeat it 2–3 times before rebooting anything. Eventually a device named <strong>BEStie</strong> appears; tap <em>Connect</em>.</li>
        <li>Open the component list again and tap BEStie. Wait for the connection dot to turn green — the bike is now fully bonded (up to 90 s the first time; much faster afterwards).</li>
      </ol>
      <img class="illustration" src="https://github.com/user-attachments/assets/010bc9d5-3270-4eed-ad33-50a3c00382ee" alt="BEStie shown as a connected component in the Bosch Flow app" loading="lazy">
      <div class="callout">
        The Flow “add component” process is finicky — this is true even for officially supported
        Garmin devices, and the phone model plays a big role. Be persistent: let each scan run to
        the end, retry a few times, and reboot the phone if needed. If BEStie shows up in nRF Connect,
        the firmware is working — keep trying.
      </div>
    </div>

    <div class="install-step">
      <h3>Step 6 — Connect your watch or cycling computer</h3>
      <video src="https://github.com/user-attachments/assets/35f18573-002e-4d13-82c6-0c13134a58eb" controls preload="none" muted playsinline></video>
      <p>The exact menu names vary by device (the process below was tested on Garmin Edge computers and a Garmin Enduro watch; Wahoo and other brands are similar). The general process:</p>
      <ol>
        <li>Pair the bike first (step 5). Once the bike link is up, BEStie switches to focused smart-trainer advertising, which your fitness device finds much faster.</li>
        <li>On your device open <em>Sensors</em> (Garmin: drop-down shade or <em>Settings → Connectivity</em>), then <em>Add new → Search all</em>.</li>
        <li>Within ~90 seconds a smart trainer named <strong>BEStie</strong> appears — add it. The first “connecting to new device” can take a while on older devices; let it finish.</li>
        <li>
          Do a test “ride”: turn the fitness device and the bike off (keep BEStie on), then turn the
          fitness device back on and start an activity with speed and cadence fields on screen.
          Within 30–60 s you should see “trainer connected”. Turn the bike on and watch the values
          go from <code>--</code> to <code>0.0</code>. Spin the cranks for ~10 s — speed and cadence come alive.
        </li>
      </ol>
      <video src="https://github.com/user-attachments/assets/7eea4aee-39db-48ad-ab9e-7a87e6a05aef" controls preload="none" muted playsinline></video>
    </div>

    <p style="margin-top: 30px;">
      Something not working? Check the <a href="{{ '/faq' | relative_url }}">FAQ &amp; troubleshooting</a>.
    </p>

  </div>
</section>
