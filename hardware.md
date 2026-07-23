---
title: "Hardware compatibility — boards, bikes and fitness gear"
description: "What you need to run BEStie: an inexpensive nRF52 board (Adafruit Feather, Nordic DK or Seeed XIAO), a Bosch Smart System ebike with the Live Data Interface update, and any fitness device that supports Bluetooth smart trainers."
---

<section class="page-header">
  <div class="container">
    <h1>Hardware compatibility</h1>
    <p>Three ingredients: a small Bluetooth board, a Bosch Smart System bike, and fitness gear that understands smart trainers.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2>1. The BEStie board</h2>
    <p>
      BEStie runs on any board with a Nordic <strong>nRF52832</strong> or <strong>nRF52840</strong> chip —
      there's no hard platform dependency. These boards were tested so far:
    </p>

    <div class="board-grid">
      <div class="board-card">
        <img class="board-photo" src="{{ '/assets/img/boards/feather-nrf52840.jpg' | relative_url }}" alt="Adafruit Feather nRF52840 Express development board" loading="lazy">
        <div class="board-body">
          <span class="badge badge-recommended">Recommended for beginners</span>
          <h3>Adafruit Feather nRF52840 Express</h3>
          <div class="board-lists">
            <ul class="pros">
              <li>Easy firmware updates via built-in USB bootloader</li>
              <li>Battery plugs straight in (on-board LiPo connector) — no soldering</li>
              <li>Acceptable radio performance</li>
            </ul>
          </div>
          <a class="board-link" href="https://www.adafruit.com/product/4062" target="_blank" rel="noopener">Adafruit product page →</a>
          <p class="photo-credit">Photo © Adafruit Industries</p>
        </div>
      </div>

      <div class="board-card">
        <img class="board-photo" src="{{ '/assets/img/boards/nrf52840-dk.png' | relative_url }}" alt="Nordic Semiconductor nRF52840 DK development kit" loading="lazy">
        <div class="board-body">
          <span class="badge badge-developers">For developers</span>
          <h3>Nordic Dev Kits — nRF52832-DK &amp; nRF52840-DK</h3>
          <div class="board-lists">
            <ul class="pros">
              <li>Reference development platform</li>
              <li>Best radio performance (no problems with smartwatches)</li>
              <li>Coin cell battery holder on board</li>
            </ul>
            <ul class="cons">
              <li>Flashing requires Nordic developer tools — more setup work</li>
            </ul>
          </div>
          <a class="board-link" href="https://www.nordicsemi.com/Products/Development-hardware/nRF52840-DK" target="_blank" rel="noopener">Nordic product page →</a>
          <p class="photo-credit">Photo © Nordic Semiconductor</p>
        </div>
      </div>

      <div class="board-card">
        <img class="board-photo" src="{{ '/assets/img/boards/xiao-nrf52840.jpg' | relative_url }}" alt="Seeed Studio XIAO nRF52840 miniature development board" loading="lazy">
        <div class="board-body">
          <span class="badge badge-caution">Cheapest, but problematic</span>
          <h3>Seeed Studio XIAO nRF52840</h3>
          <div class="board-lists">
            <ul class="pros">
              <li>Very small and cheap</li>
              <li>Easy firmware updates via built-in USB bootloader</li>
            </ul>
            <ul class="cons">
              <li>Adding a battery means soldering tiny wires</li>
              <li>Weak radio — unreliable connections with smartwatches</li>
            </ul>
          </div>
          <a class="board-link" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank" rel="noopener">Seeed product page →</a>
          <p class="photo-credit">Photo © Seeed Studio</p>
        </div>
      </div>
    </div>

    <div class="callout">
      <strong>What should I choose?</strong>
      <p>
        For the best first-time experience: <strong>Adafruit Feather nRF52840 Express</strong> plus a
        single-cell 500–1000&nbsp;mAh LiPo battery with a JST-PH connector. The easy installation
        method is available and no soldering is required. Check the battery connector polarity
        against the markings on the Feather board and swap the pins around if necessary.
      </p>
      <p>
        Any other board from
        <a href="https://github.com/bestie-org/Adafruit_nRF52_Bootloader/blob/master/supported_boards.md" target="_blank" rel="noopener">this list</a>
        with an nRF52840 chip works with the same easy method. A generic firmware version that
        works on any nRF52832/nRF52840 will always be available alongside board-specific ones.
      </p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2>2. A Bosch Smart System bike</h2>
    <p>
      Your bike needs the <strong>Live Data Interface</strong> update (released 4&nbsp;May&nbsp;2026),
      the latest firmware, and an up-to-date Bosch Flow app. Supported motors:
    </p>
    <div class="compat-cols">
      <div class="compat-box">
        <h3>Supported motors</h3>
        <ul>
          <li>Performance Line CX Gen 4 (BDU374x)</li>
          <li>Performance Line CX Gen 5 (BDU384x)</li>
          <li>Performance Line SX (BDU314x)</li>
          <li>Other Smart System bikes that work with the Flow app and received the Live Data Interface update</li>
        </ul>
      </div>
      <div class="compat-box">
        <h3>Fitness tracking gear</h3>
        <ul>
          <li>Your watch or cycling computer must support a <strong>smart cycling trainer over Bluetooth (BLE FTMS profile)</strong></li>
          <li>Rule of thumb: if it works with a Zwift-compatible trainer over Bluetooth Low Energy, it works with BEStie</li>
          <li>BEStie can feed two fitness devices at the same time</li>
        </ul>
      </div>
    </div>
    <p style="margin-top: 26px;">
      <a class="btn" href="{{ '/installation' | relative_url }}">Continue to installation</a>
    </p>
  </div>
</section>
