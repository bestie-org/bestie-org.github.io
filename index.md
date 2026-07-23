---
title: "BEStie — connect your Bosch ebike to your fitness watch"
description: "BEStie streams power, speed and cadence from your Bosch ebike to your Garmin, Wahoo or other smart-trainer-compatible watch or bike computer."
---

<section class="hero">
  <div class="container hero-inner">
    <div>
      <h1>Your Bosch ebike already measures your power.<br>Let your fitness gear hear it.</h1>
      <p class="lede">
        BEStie is a tiny gadget that bridges your Bosch Smart System ebike and your
        smartwatch or cycling computer — streaming <strong>power, speed and cadence</strong>
        in real time to Garmin, Wahoo and other smart-trainer-compatible devices,
        with no power-meter pedals required.
      </p>
      <div class="cta-row">
        {% include github-button.html %}
        <a class="btn btn-outline" href="{{ '/installation' | relative_url }}">Get started</a>
      </div>
    </div>
    <div class="hero-photo-wrap">
      <img class="hero-photo" src="{{ '/assets/img/hero.jpg' | relative_url }}" alt="BEStie in action: the same power, speed and cadence values on the Bosch display, a Garmin Edge computer and a smartwatch" width="1000" height="1000">
      <p class="hero-caption">One ride, three screens, identical numbers: bike display, cycling computer and watch.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2>The problem</h2>
    <p>
      Bosch ebikes can measure rider power and cadence — everything you need to track your
      fitness progress without investing in expensive power-meter pedals or crank sensors
      (which are impossible to fit on most ebike cranks anyway).
    </p>
    <p>
      In May 2026 Bosch enabled telemetry over Bluetooth — the <strong>Live Data Interface (LDI)</strong> —
      on bikes with Performance CX Gen&nbsp;4/5 and Performance SX motors. But the way an LDI
      peer device must be built makes it hard to adopt in existing products: so far only a
      handful of Garmin Edge computers support it.
    </p>
    <h2>The solution: a translator</h2>
    <p>
      BEStie is free, open source firmware for cheap, widely available Bluetooth boards.
      It sits between your bike and your fitness gear and translates:
    </p>
    <ul>
      <li>
        <strong>Towards the bike</strong>, BEStie is a fully spec-compliant LDI peer.
        Open the Bosch Flow app, tap “add component”, and a new bike display named
        <em>BEStie</em> appears. Connect. Done.
      </li>
      <li>
        <strong>Towards your fitness gear</strong>, BEStie looks like a smart trainer
        (standard BLE&nbsp;FTMS indoor bike) that streams power, speed and cadence.
        If your device works with Zwift-compatible trainers, it just works with BEStie —
        add a sensor, go for a ride. That's it.
      </li>
    </ul>
    <p>
      Afterwards every ride is seamless: power on your bike, start activity tracking on
      your fitness device, and the data is simply there.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2>Why BEStie?</h2>
    <div class="feature-grid">
      <div class="feature">
        <h3>Highly accurate data</h3>
        <p>No conversion tricks: power and cadence values match the Kiox display and Flow app recordings exactly.</p>
      </div>
      <div class="feature">
        <h3>Vendor agnostic</h3>
        <p>Smart-trainer support is everywhere in the Zwift era — Garmin Edge computers, Garmin watches, Wahoo ELEMNT and more. No waiting for your device maker to adopt Bosch LDI.</p>
      </div>
      <div class="feature">
        <h3>Months of battery life</h3>
        <p>60&nbsp;µA in idle, 140&nbsp;µA while riding — months on a coin cell, over a year on a 1000&nbsp;mAh LiPo. Throw it in your saddle bag and forget about it for the whole season.</p>
      </div>
      <div class="feature">
        <h3>Two devices at once</h3>
        <p>Record on your watch while seeing live values and alerts on your head unit — BEStie connects to both simultaneously.</p>
      </div>
      <div class="feature">
        <h3>Seamless bike switching</h3>
        <p>One BEStie board pairs with up to 10 bikes. It just follows whichever one is turned on.</p>
      </div>
      <div class="feature">
        <h3>Free &amp; open source</h3>
        <p>Runs on boards costing a few dollars. Lovingly handcrafted — no AI-generated code.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2>How it works</h2>
    <ol class="steps">
      <li>
        <h3>Get a board &amp; flash BEStie</h3>
        <p>A ~$10 nRF52840 board and ten minutes with our web-based uploader. No soldering for the recommended setup.</p>
      </li>
      <li>
        <h3>Pair with your bike</h3>
        <p>In the Bosch Flow app: settings → components → add component. BEStie appears as a bike display.</p>
      </li>
      <li>
        <h3>Add as smart trainer</h3>
        <p>On your watch or cycling computer, add BEStie as a smart trainer sensor — like any Zwift trainer. Ride.</p>
      </li>
    </ol>
    <p style="margin-top: 26px;">
      <a class="btn" href="{{ '/hardware' | relative_url }}">Check hardware compatibility</a>
    </p>
  </div>
</section>

<section class="star-cta">
  <div class="container">
    <h2>Like the project? Leave a star ⭐</h2>
    <p>
      BEStie is a spare-time, open source project. A GitHub star costs you one click and
      helps other riders discover it more than you think.
    </p>
    {% include github-button.html %}
  </div>
</section>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BEStie",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Nordic nRF52 firmware",
  "description": "Open source firmware that bridges Bosch Smart System ebikes (Live Data Interface) to fitness watches and cycling computers as a standard BLE FTMS smart trainer, streaming power, speed and cadence.",
  "url": "https://bestie-org.github.io/",
  "downloadUrl": "https://github.com/bestie-org/BEStie/releases/latest",
  "codeRepository": "https://github.com/bestie-org/BEStie",
  "license": "https://github.com/bestie-org/BEStie",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
}
</script>
