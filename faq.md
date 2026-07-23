---
title: "FAQ & troubleshooting"
description: "Answers to common BEStie questions: pairing problems, connection drops, power and cadence values not matching the Kiox display, update latency, and data quality."
---

<section class="page-header">
  <div class="container">
    <h1>FAQ &amp; troubleshooting</h1>
    <p>Common questions, honest answers. If yours isn't covered, open an issue on <a href="https://github.com/bestie-org/BEStie/issues" target="_blank" rel="noopener">GitHub</a>.</p>
  </div>
</section>

<section class="section">
  <div class="container faq-list">

    <details class="faq-item">
      <summary>No matter what I do, my fitness device can't find BEStie. The bike connection works.</summary>
      <div class="faq-answer">
        <p>
          First verify that BEStie shows up in an nRF Connect app scan (see
          <a href="{{ '/installation' | relative_url }}">installation, step 4</a>). If it does and your
          fitness gear still can't pair, your device most likely lacks support for the BLE FTMS
          protocol — in plain words, Bluetooth-connected Zwift-compatible smart trainers.
        </p>
        <p>
          This is a fundamental design choice. The bike sends exact values — power in watts, cadence
          in RPM, speed in km/h — and FTMS lets BEStie relay them exactly as they come, giving clean
          recordings with 1:1 sample matching. The older alternative (Cycling Power / Speed &amp;
          Cadence services) assumes the sensor is a dumb wheel magnet, which forces BEStie to
          simulate a virtual wheel and extrapolate between samples. No matter how it was tuned, the
          result was either noisy or laggy and over-smoothed — not good enough for tracking performance.
        </p>
      </div>
    </details>

    <details class="faq-item">
      <summary>Everything works at home during a test "ride", but the connection drops outside — or it works with my bike computer but fails with my smartwatch.</summary>
      <div class="faq-answer">
        <p>
          If devices connect in a calm environment at close range, your firmware, pairing and setup
          are all correct — this is a radio-performance problem.
        </p>
        <p>
          Bluetooth works in the 2.4&nbsp;GHz band, and the human body is a perfect barrier for it.
          If the BEStie board sits in your saddle bag or backpack, the signal has to travel through
          your body — that needs a board with a good antenna. Small boards struggle here; the XIAO
          BLE in particular lacks the "oomph" to get through, and smartwatches make it worse because
          their tiny antennas are weaker than a head unit's. Swapping to an Adafruit Feather solves
          it. See <a href="{{ '/hardware' | relative_url }}">hardware recommendations</a>.
        </p>
      </div>
    </details>

    <details class="faq-item">
      <summary>Average power/cadence via BEStie differs from the Kiox display.</summary>
      <div class="faq-answer">
        <p>
          Bosch calculates displayed averages in "ignore zero values" mode, while Garmin devices by
          default include zeros in averages. This is configurable on the fitness device — set it to
          your preference (MTB riders tend to exclude zeros, roadies tend to include them).
        </p>
        <p>
          Either way, BEStie does the right thing: it forwards every value exactly as sent by the bike.
        </p>
      </div>
    </details>

    <details class="faq-item">
      <summary>I've set zero-exclusion correctly and averages match now, but instantaneous power still differs between Kiox and BEStie.</summary>
      <div class="faq-answer">
        <p>
          Different devices post-process displayed data differently. For example, the Garmin Edge 1050
          shows matching, quickly-updating values in the numeric "Power" field, but applies smoothing
          in the "Power Graph" display. When comparing, use a data field that shows truly instantaneous
          power, speed and cadence without any smoothing.
        </p>
      </div>
    </details>

    <details class="faq-item">
      <summary>When I push hard, power and cadence match Kiox with a slight 1–2 s delay. Can it update faster?</summary>
      <div class="faq-answer">
        <p>No — every bit of latency that could be squeezed out of BEStie already has been. The remaining delay is physics and protocol:</p>
        <video src="https://github.com/user-attachments/assets/d3b7a0fc-1c93-461f-851e-9b81835ae51c" controls preload="none" muted playsinline></video>
        <ul>
          <li><strong>Bluetooth works in discrete time windows.</strong> BEStie is a peripheral — the bike, head unit and watch decide when data may be sent. Two windows are needed per update (bike → BEStie, then BEStie → your device), roughly 200–400&nbsp;ms total.</li>
          <li><strong>Bosch LDI updates are infrequent:</strong> speed every 1–2&nbsp;s, cadence every 2–4&nbsp;s, power every 1–2&nbsp;s — controlled by the bike's own software.</li>
          <li><strong>The Kiox display is wired.</strong> It gets fresh data over the bike's internal CAN bus many times per second, so it feels instant by comparison.</li>
          <li><strong>Garmin records at a fixed 1&nbsp;Hz.</strong> That alone puts the lower bound at about 1.4&nbsp;s.</li>
        </ul>
      </div>
    </details>

    <details class="faq-item">
      <summary>Tools like "Compare the watts" or "Quantified Self" show bad correlation between Flow app and BEStie recordings. Why do you claim good data quality?</summary>
      <div class="faq-answer">
        <p>
          Those tools assume a single radio hop between sensor and recorder, where samples keep a
          constant time offset. BEStie adds a second hop (bike → BEStie → recorder), and Bluetooth's
          discrete radio windows add random per-sample jitter — a sample may "miss the train" on
          either hop. A static-shift comparison can't handle that and reports ~80% correlation.
        </p>
        <p>
          <strong>Sample order stays intact and curve shapes match exactly within the local jitter;
          ride averages agree within 1–2 W / RPM.</strong> When jitter is accounted for, correlation
          jumps above 99%. The 1-second timestamp granularity of <code>.fit</code> files further
          confuses existing tools.
        </p>
        <p>
          Don't take our word for it — the
          <a href="https://github.com/bestie-org/fit-align" target="_blank" rel="noopener">fit-align scripts</a>
          let you feed in your own <code>.fit</code> files and inspect matched data, graphs and correlation values.
        </p>
      </div>
    </details>

    <details class="faq-item">
      <summary>Can you add battery range, assist mode indicator, or some other feature?</summary>
      <div class="faq-answer">
        <p>
          Not today. BEStie is a peer on Bosch's Live Data Interface, and the
          <a href="https://github.com/bestie-org/BEStie/blob/master/proto/20260501_LiveDataInterface_V1_28042026.pdf" target="_blank" rel="noopener">specification</a>
          only exposes: speed, battery state of charge, rider power, cadence, odometer, time, light
          status, ambient brightness, light reserve, system lock, bike-not-driving, charger connected
          and diagnostic probe connected. If you can pass feature feedback to the relevant Bosch team,
          the whole community would benefit.
        </p>
        <p>
          The other constraint is Bluetooth itself: there is no standard BLE profile for ebike-specific
          data, and we don't control fitness-device firmware — BEStie must stick to standard profiles
          or the other side won't understand it.
        </p>
      </div>
    </details>

  </div>
</section>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "My fitness device can't find BEStie, but the bike connection works. Why?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your device most likely lacks support for the BLE FTMS protocol (Bluetooth smart trainers, as used by Zwift-compatible trainers). BEStie deliberately uses FTMS because it relays the bike's exact power, cadence and speed values without lossy conversion."
      }
    },
    {
      "@type": "Question",
      "name": "BEStie works at home but the connection drops outside, or it works with my bike computer but not my smartwatch.",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This is a radio-performance issue: the human body blocks 2.4 GHz Bluetooth signals, so a board in a saddle bag needs a good antenna. Boards with weak radios (e.g. Seeed XIAO) can fail with smartwatches outdoors; an Adafruit Feather nRF52840 solves it."
      }
    },
    {
      "@type": "Question",
      "name": "Why do average power and cadence via BEStie differ from the Kiox display?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bosch averages exclude zero values, while many fitness devices include them by default. Change the zero-averaging setting on your fitness device; BEStie forwards all values exactly as sent by the bike."
      }
    },
    {
      "@type": "Question",
      "name": "Can BEStie's 1–2 second delay behind the Kiox display be reduced?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The delay comes from Bluetooth's discrete radio windows, the bike's own LDI update rates (speed every 1–2 s, cadence every 2–4 s), the wired CAN bus feeding Kiox, and 1 Hz recording on fitness devices. BEStie's own latency is already minimized."
      }
    },
    {
      "@type": "Question",
      "name": "Why do comparison tools show bad correlation between Flow app and BEStie recordings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Those tools assume a single radio hop with constant sample offset. BEStie adds a second Bluetooth hop with random per-sample jitter, so static-shift comparison fails. Curve shapes match exactly and averages agree within 1–2 W/RPM; with jitter accounted for, correlation exceeds 99%."
      }
    },
    {
      "@type": "Question",
      "name": "Can BEStie add battery range, assist mode or other features?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not currently. Bosch's Live Data Interface only exposes a fixed set of values, and Bluetooth has no standard profile for ebike-specific data. BEStie must use standard BLE profiles so fitness devices can understand it."
      }
    }
  ]
}
</script>
