
"use client";

import Image from "next/image";
import { Phone, Mail, Facebook, Users, ShieldPlus, ClipboardCheck, Handshake, Stethoscope, BadgeCheck, DollarSign, CheckCircle2, MapPin } from "lucide-react";
import { FormEvent, useState } from "react";

const phone = "8177296056";
const displayPhone = "(817) 729-6056";
const email = "vaughnhealth2023@gmail.com";
const facebook = "facebook.com/groups/healthrecommendations";

const states = [
  "Texas", "Oklahoma", "Arkansas", "Louisiana", "Georgia", "Tennessee", "Mississippi", "Alabama",
  "Florida", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Maryland", "Michigan", "Missouri",
  "Nebraska", "North Carolina", "Ohio", "South Carolina", "Virginia", "West Virginia", "Colorado"
];

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    zip: "",
    coverage: "Individual coverage",
    note: ""
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message =
      `New health insurance lead:%0A` +
      `Name: ${encodeURIComponent(form.name)}%0A` +
      `Phone: ${encodeURIComponent(form.contact)}%0A` +
      `Email: ${encodeURIComponent(form.email)}%0A` +
      `ZIP: ${encodeURIComponent(form.zip)}%0A` +
      `Coverage: ${encodeURIComponent(form.coverage)}%0A` +
      `Notes: ${encodeURIComponent(form.note || "N/A")}`;

    // Opens the visitor's text app with the lead details addressed to Phil.
    window.location.href = `sms:${phone}?&body=${message}`;
  }

  return (
    <main className="site">
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" aria-label="Phil Vaughn Home">
            <Image className="logo-img" src="/phil-logo.png" alt="Phil Vaughn Licensed Health Insurance Agent logo" width={310} height={104} priority />
          </a>
          <div className="nav-links">
            <a href="#top">HOME</a>
            <a href="#plans">PLANS</a>
            <a href="#why">WHY PHIL</a>
            <a href="#reviews">REVIEWS</a>
            <a href="#contact">CONTACT</a>
            <a className="btn btn-primary" href="#contact">GET MY OPTIONS</a>
          </div>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Better Coverage.<br /><span>Better Care.</span></h1>
            <p className="eyebrow">Health Insurance That Works For You.</p>
            <p className="lede">
              I help individuals, families, and small businesses find the right health insurance at the best value.
            </p>

            <div className="quick-icons" aria-label="What Phil does">
              <div className="quick-card"><Users size={38} /><br />Personalized<br />Plan Matching</div>
              <div className="quick-card"><ShieldPlus size={38} /><br />PPO & ACA<br />Plans</div>
              <div className="quick-card"><ClipboardCheck size={38} /><br />Expert<br />Guidance</div>
              <div className="quick-card"><Handshake size={38} /><br />Ongoing<br />Support</div>
            </div>

            <div className="cta-row">
              <a className="btn btn-primary" href={`tel:${phone}`}><Phone size={18} />&nbsp; {displayPhone}</a>
              <a className="btn btn-outline" href={`mailto:${email}`}><Mail size={18} />&nbsp; Email Me</a>
            </div>
          </div>

          <div className="hero-art" aria-label="Phil Vaughn">
            <div className="watermark" />
            <Image className="headshot" src="/phil-headshot.png" alt="Phil Vaughn" width={435} height={580} priority />
            <div className="offer-badge">
              <div className="offer-main">
                <div className="offer-zero">$0</div>
                <div className="offer-text">Deductible<br /><span>PPO Plans</span></div>
              </div>
              <div className="offer-strip">QUALITY CARE. LOWER OUT-OF-POCKET COSTS.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="section-dark">
        <div className="section-inner">
          <h2 className="section-title">PPO Advantage</h2>
          <div className="adv-grid">
            <div className="adv-card">
              <div className="icon-circle"><Stethoscope size={40} /></div>
              <h3>See Any Doctor</h3>
              <p>Choose doctor and specialist options that work for your needs.</p>
            </div>
            <div className="adv-card">
              <div className="icon-circle"><BadgeCheck size={42} /></div>
              <h3>No Referrals Needed</h3>
              <p>Get the care you need, when you need it.</p>
            </div>
            <div className="adv-card">
              <div className="icon-circle"><DollarSign size={42} /></div>
              <h3>$0 Deductible Options</h3>
              <p>Options with $0 out-of-pocket before benefits kick in.</p>
            </div>
            <div className="adv-card">
              <div className="icon-circle"><Users size={42} /></div>
              <h3>Quality Care</h3>
              <p>Better coverage options that fit your health and budget.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="two-col">
        <div className="panel">
          <h2>What I Do</h2>
          <ul className="what-list">
            <li><CheckCircle2 /><span>I compare top-rated insurance carriers to find the best fit for you.</span></li>
            <li><CheckCircle2 /><span>Access to PPO, ACA, private, and short-term medical options.</span></li>
            <li><CheckCircle2 /><span>I simplify your options so you can make confident decisions.</span></li>
            <li><CheckCircle2 /><span>I’m here to help before, during, and after enrollment.</span></li>
          </ul>
        </div>

        <div id="reviews">
          <h2>Testimonials</h2>
          <div className="testimonials">
            <div className="quote">
              <p>“Phil made the whole process so easy. He found me a PPO option that made sense and explained everything clearly.”</p>
              <div className="stars">★★★★★</div>
              <strong>— Jessica M.</strong>
            </div>
            <div className="quote">
              <p>“I needed help understanding my options and Phil was patient, honest, and never pushy.”</p>
              <div className="stars">★★★★★</div>
              <strong>— Mark T.</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="lower">
        <div className="panel">
          <h2><MapPin size={26} /> Licensed In Texas And More</h2>
          <p>Licensed to help in multiple states.</p>
          <p className="states">{states.join("  •  ")}</p>
        </div>

        <form className="panel form-grid" onSubmit={handleSubmit}>
          <h2 style={{ gridColumn: "1 / -1", marginBottom: 0 }}>Get Your Free Options Review</h2>
          <p style={{ gridColumn: "1 / -1", marginTop: 0 }}>Fill this out and it will open a text to Phil with your details.</p>
          <input required placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input required placeholder="Phone Number" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} />
          <input placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input placeholder="Zip Code" value={form.zip} onChange={(e) => setForm({ ...form, zip: e.target.value })} />
          <select value={form.coverage} onChange={(e) => setForm({ ...form, coverage: e.target.value })}>
            <option>Individual coverage</option>
            <option>Family coverage</option>
            <option>Self-employed coverage</option>
            <option>Small business coverage</option>
            <option>Losing coverage soon</option>
          </select>
          <textarea placeholder="Anything specific you want me to know?" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} />
          <button className="btn btn-primary" type="submit">TEXT PHIL MY INFO</button>
          <p className="notice">
            Note: this opens the visitor’s texting app with the details filled in. For automatic server-side texting without the visitor pressing send, connect Twilio or a CRM later.
          </p>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <Image className="footer-logo" src="/phil-logo.png" alt="Phil Vaughn logo" width={310} height={104} />
            <p>Better Coverage. Better Care.</p>
          </div>
          <div>
            <h3>Contact Me</h3>
            <a href={`tel:${phone}`}><Phone size={16} /> {displayPhone}</a>
            <a href={`mailto:${email}`}><Mail size={16} /> {email}</a>
            <a href={`https://${facebook}`} target="_blank"><Facebook size={16} /> {facebook}</a>
          </div>
          <div>
            <h3>Let’s Connect</h3>
            <p>Questions about your current plan? I’m here to help.</p>
            <a className="btn btn-primary" href={`sms:${phone}?&body=Hi Phil, I’d like help comparing health insurance options.`}>TEXT OR CALL ME TODAY</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
