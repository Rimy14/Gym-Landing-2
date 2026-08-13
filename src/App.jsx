import React, { useState, useEffect } from "react";
import {
  Dumbbell,
  Flame,
  Phone,
  Mail,
  MapPin,
  Play,
  ArrowUpRight,
  Menu,
  X,
  Check,
  Star,
  Activity,
  Zap,
  Shield,
  Sparkles,
  Users,
  Heart
} from "lucide-react";

// Google Fonts loader helper for Design 3
const FONT_LINK_ID = "ironvibe-fonts-dark";
function useFonts() {
  useEffect(() => {
    if (document.getElementById(FONT_LINK_ID)) return;
    const link = document.createElement("link");
    link.id = FONT_LINK_ID;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap";
    document.head.appendChild(link);
  }, []);
}

// Brand SVG Icons
const Instagram = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Youtube = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const NAV_LINKS = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Programs", id: "programs" },
  { label: "Equipment", id: "equipment" },
  { label: "BMI Lab", id: "bmi" },
  { label: "Trainers", id: "trainers" },
  { label: "Pricing", id: "pricing" },
];

const FEATURES = [
  {
    icon: Dumbbell,
    title: "PREMIUM EQUIPMENT",
    desc: "Train with top-tier, modern machinery designed for maximum safety and ergonomic efficiency.",
  },
  {
    icon: Zap,
    title: "HIIT & CALORIE BURN",
    desc: "Achieve rapid body conditioning with structured high-intensity circuits that boost metabolism.",
  },
  {
    icon: Shield,
    title: "MOBILITY & COACHING",
    desc: "Receive expert trainer guidance to restore flexibility, prevent injury, and move correctly.",
  },
];

const PROGRAMS = [
  {
    icon: Users,
    title: "1-ON-1 TRAINING",
    desc: "Personalized individual fitness training tailored to your specific biomechanical needs and goals."
  },
  {
    icon: Heart,
    title: "ELDERLY TRAINING",
    desc: "Gentle strength, balance, and mobility conditioning designed to maintain independence and joint health."
  },
  {
    icon: Activity,
    title: "PRE & POSTNATAL TRAINING",
    desc: "Safe, modified workouts to support your body before and after birth, focusing on core recovery."
  },
  {
    icon: Flame,
    title: "BODY CONDITIONING TRAINING",
    desc: "High-energy fat loss and cardiovascular endurance routing to shape and tone the entire body."
  },
  {
    icon: Shield,
    title: "MUSCLE REHABILITATION TRAINING",
    desc: "Targeted active rehab and alignment support to recover from injury and restore movement."
  }
];

const EQUIPMENT = [
  {
    image: "/hacksquat.jpg",
    alt: "Premium Hack Squat Machine"
  },
  {
    image: "/benchpress.png",
    alt: "Smith Machine Bench Press"
  },
  {
    image: "/freeweights.jpg",
    alt: "REP Fitness Free Weights & Dumbbells Rack"
  }
];

const TRAINERS = [
  {
    name: "Kasun Perera",
    role: "Strength & Conditioning Coach",
    exp: "8+ Years",
    specialty: "Powerlifting & Hypertrophy",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Dilshan Fernando",
    role: "Certified Personal Trainer",
    exp: "6+ Years",
    specialty: "High-Intensity Fat Loss",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Nuwan Silva",
    role: "Functional Fitness Specialist",
    exp: "10+ Years",
    specialty: "Active Rehab & Mobility",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  }
];

const REVIEWS = [
  {
    name: "Aamir Hassan",
    badge: "Local Guide • 15 reviews",
    stars: 5,
    text: "I highly recommend this place for fat loss programs! This is the best place where I was able to reduce my weight without any supplements."
  },
  {
    name: "Sam Neefjes",
    badge: "3 reviews",
    stars: 5,
    text: "Small but everything you will need. Really nice owner and good atmosphere. Definitely recommend it if you want to have a quick workout here in Colombo!"
  },
  {
    name: "Shavinda Silva",
    badge: "Local Guide • 2 reviews",
    stars: 5,
    text: "Extreme Fitness 😍 💪 Best Gym Experience Ever 😍 ..."
  },
  {
    name: "Rahman Toufiqur",
    badge: "Local Guide • 21 reviews",
    stars: 4,
    text: "It is a good and reasonable place to workout."
  }
];

export default function App() {
  useFonts();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bmiWeight, setBmiWeight] = useState(70);
  const [bmiHeight, setBmiHeight] = useState(175);
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");

  // Handle scroll trigger for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute BMI
  useEffect(() => {
    if (bmiWeight > 0 && bmiHeight > 0) {
      const heightInMeters = bmiHeight / 100;
      const bmi = (bmiWeight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmiResult(bmi);

      if (bmi < 18.5) setBmiStatus("Underweight (Suggest nutritive support)");
      else if (bmi >= 18.5 && bmi < 25) setBmiStatus("Normal (Optimal biological balance)");
      else if (bmi >= 25 && bmi < 30) setBmiStatus("Overweight (Suggest conditioning programs)");
      else setBmiStatus("Obese (Suggest metabolic priority guidance)");
    }
  }, [bmiWeight, bmiHeight]);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const getBmiPercentage = () => {
    if (!bmiResult) return 0;
    const val = parseFloat(bmiResult);
    const pct = ((val - 15) / (35 - 15)) * 100;
    return Math.min(Math.max(pct, 5), 100);
  };

  return (
    <div style={styles.container}>
      <style>{css}</style>

      {/* HEADER NAVBAR */}
      <header
        style={{
          ...styles.nav,
          backgroundColor: isScrolled ? "rgba(11, 10, 15, 0.95)" : "transparent",
          borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
          boxShadow: isScrolled ? "0 10px 30px rgba(0, 0, 0, 0.5)" : "none",
        }}
      >
        <div style={styles.navInner} className="navInner">
          <a href="#hero" style={styles.logo} onClick={scrollToSection("hero")}>
            <span style={{ color: "#8B5CF6" }}>IRON</span> VIBE
          </a>

          {/* Desktop Nav */}
          <nav style={styles.navLinks} className="app-nav-desktop">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                style={styles.navLink}
                className="app-nav-link"
                onClick={scrollToSection(link.id)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div style={styles.navRight}>
            <a
              href="#pricing"
              style={styles.navCta}
              className="btn-primary-gradient"
              onClick={scrollToSection("pricing")}
            >
              JOIN NOW
            </a>
            <button
              style={styles.menuBtn}
              className="app-menu-toggle"
              onClick={() => setMobileMenuOpen(o => !o)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} color="#FFFFFF" /> : <Menu size={24} color="#FFFFFF" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div style={styles.mobileMenu}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                style={styles.mobileLink}
                onClick={scrollToSection(link.id)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              style={styles.mobileCta}
              onClick={scrollToSection("pricing")}
            >
              JOIN NOW
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="hero" style={styles.hero}>
        <div style={styles.heroGlowLeft} />
        <div style={styles.heroGlowRight} />

        <div style={styles.heroInner} className="heroInner">
          <div style={styles.heroLeft}>
            <div style={styles.heroTagline}>
              <Sparkles size={12} color="#A855F7" style={{ marginRight: 6 }} className="app-pulse" />
              <span>COLOMBO'S PRESTIGE FITNESS HUB</span>
            </div>
            <h1 style={styles.heroTitle}>
              BE STRONGER<br />
              THAN YOUR<br />
              <span style={styles.heroGradientText}>EXCUSES</span>
            </h1>
            <p style={styles.heroSubText}>
              Transform your physical potential with industrial-grade equipment, certified coaches, and an energetic athletic community designed to fuel your success.
            </p>
            <div style={styles.heroActions}>
              <a
                href="#pricing"
                style={styles.heroPrimaryBtn}
                className="btn-primary-gradient"
                onClick={scrollToSection("pricing")}
              >
                GET STARTED NOW <ArrowUpRight size={16} style={{ marginLeft: 6 }} />
              </a>
              <a
                href="#about"
                style={styles.heroSecondaryBtn}
                className="btn-secondary-outlined"
                onClick={scrollToSection("about")}
              >
                <Play size={12} fill="#FFFFFF" color="#FFFFFF" style={{ marginRight: 8 }} />
                EXPLORE CLUB
              </a>
            </div>

            {/* Quick Stats Panel */}
            <div style={styles.heroStatsRow}>
              <div>
                <span style={styles.heroStatNum}>10+ Years</span>
                <span style={styles.heroStatLabel}>ACTIVE HISTORY</span>
              </div>
              <div style={styles.heroStatDivider} />
              <div>
                <span style={styles.heroStatNum}>2K+ Units</span>
                <span style={styles.heroStatLabel}>HEALTHY MEMBERS</span>
              </div>
              <div style={styles.heroStatDivider} />
              <div>
                <span style={styles.heroStatNum}>4.8 Rating</span>
                <span style={styles.heroStatLabel}>GOOGLE RATING</span>
              </div>
            </div>
          </div>

          <div style={styles.heroRight} className="app-hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
              alt="REP Fitness Free Weights & Dumbbells Rack"
              style={{
                ...styles.heroImage,
                maxWidth: 420,
              }}
            />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS / SPECIFICATIONS */}
      <section style={styles.highlights}>
        <div style={styles.highlightsInner} className="highlightsInner">
          {FEATURES.map((item, idx) => (
            <div key={idx} style={styles.highlightCard} className="hover-card">
              <div style={styles.highlightIconBox}>
                <item.icon size={22} color="#8B5CF6" />
              </div>
              <h3 style={styles.highlightTitle}>{item.title}</h3>
              <p style={styles.highlightBody}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" style={styles.about}>
        <div style={styles.aboutInner} className="aboutInner">
          <div style={styles.aboutLeft}>
            <div style={styles.aboutBadge}># ABOUT US</div>
            <h2 style={styles.sectionHeading}>
              MORE THAN A GYM,<br />
              WE ARE A <span style={styles.serifText}>LIFESTYLE</span>
            </h2>
            <p style={styles.aboutBody}>
              At Iron Vibe, we believe physical fitness is the baseline for mental clarity, confidence, and ultimate performance. Our facility is designed to support everyone, from beginning lifters to competitive strength athletes.
            </p>
            <div style={styles.aboutBadgeCard}>
              <div style={styles.badgeIconWrap}>
                <Flame size={20} color="#EC4899" fill="#EC4899" />
              </div>
              <div>
                <div style={styles.badgeNum}>750+ Calories Average Burned</div>
                <div style={styles.badgeLabel}>Tuned environments and workouts to maximize dynamic cellular expenditure.</div>
              </div>
            </div>
          </div>

          <div style={styles.aboutRight}>
            <div style={styles.aboutVisual}>
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800"
                alt="Athletic Conditioning Session"
                style={styles.aboutImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS (TRAINING PROTOCOLS) */}
      <section id="programs" style={styles.programs}>
        <div style={styles.sectionHeaderCenter}>
          <span style={styles.sectionEyebrow}># CHOOSE YOUR PATH</span>
          <h2 style={styles.sectionTitleCenter}>TRAINING PROGRAMS</h2>
        </div>

        <div style={styles.programsGrid} className="programsGrid">
          {PROGRAMS.map((item, idx) => (
            <div key={idx} style={styles.programCard} className="hover-card">
              <div style={styles.programIconWrap}>
                <item.icon size={24} color="#8B5CF6" />
              </div>
              <h3 style={styles.programCardTitle}>{item.title}</h3>
              <p style={styles.programCardDesc}>{item.desc}</p>
              <div style={styles.programCardFooter}>
                <span>INDIVIDUAL APPROACH</span>
                <ArrowUpRight size={14} color="#EC4899" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRESTIGE EQUIPMENT */}
      <section id="equipment" style={styles.equipment}>
        <div style={styles.sectionHeaderCenter}>
          <span style={styles.sectionEyebrow}># ERGONOMIC ENGINEERING</span>
          <h2 style={styles.sectionTitleCenter}>PREMIUM GYM EQUIPMENT</h2>
        </div>

        <div style={styles.equipmentGrid} className="equipmentGrid">
          {EQUIPMENT.map((item, idx) => (
            <div key={idx} style={styles.equipmentCard} className="hover-card">
              <div style={styles.equipmentImageWrap}>
                <img src={item.image} alt={item.alt} style={styles.equipmentImage} />
              </div>
              <div style={styles.equipmentMeta}>
                <h3 style={styles.equipmentTitle}>{item.alt}</h3>
                <span style={{ fontSize: 11, color: "#8B5CF6", fontWeight: 700, letterSpacing: 0.5 }}>PRESTIGE CLASS</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE BIOMETRIC LAB (BMI CALCULATOR) */}
      <section id="bmi" style={styles.bmi}>
        <div style={styles.bmiInner} className="bmiInner">
          <div style={styles.bmiLeft}>
            <span style={styles.sectionEyebrow}># WELLNESS METRICS LAB</span>
            <h2 style={styles.sectionHeading}>CHECK YOUR BODY MASS INDEX</h2>
            <p style={styles.aboutBody}>
              Input your height and weight measurements to compute your Body Mass Index (BMI). Benchmark metrics to align targets with our specialized training paths.
            </p>

            <div style={styles.bmiSliders}>
              <div style={styles.bmiInputBlock}>
                <div style={styles.bmiInputHeader}>
                  <span>HEIGHT</span>
                  <span style={{ color: "#8B5CF6", fontWeight: 700 }}>{bmiHeight} CM</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="220"
                  value={bmiHeight}
                  onChange={(e) => setBmiHeight(parseInt(e.target.value))}
                  style={styles.rangeInput}
                  className="theme-slider"
                />
              </div>

              <div style={styles.bmiInputBlock}>
                <div style={styles.bmiInputHeader}>
                  <span>WEIGHT</span>
                  <span style={{ color: "#8B5CF6", fontWeight: 700 }}>{bmiWeight} KG</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="150"
                  value={bmiWeight}
                  onChange={(e) => setBmiWeight(parseInt(e.target.value))}
                  style={styles.rangeInput}
                  className="theme-slider"
                />
              </div>
            </div>
          </div>

          <div style={styles.bmiRight}>
            <div style={styles.resultsCard} className="resultsCard">
              <span style={{ fontSize: 11, color: "#94A3B8", letterSpacing: 1.5, display: "block" }}>INDEX SYSTEM SCORE</span>
              <div style={styles.resultsValue}>{bmiResult}</div>

              <div style={{ marginTop: 12, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16 }}>
                <span style={{ fontSize: 12, color: "#94A3B8", display: "block", marginBottom: 6 }}>BIOLOGICAL RATIO STATUS</span>
                <div style={styles.resultsStatusBadge}>{bmiStatus}</div>
              </div>

              {/* Progress scale */}
              <div style={{ marginTop: 24 }}>
                <div style={{ height: 6, backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 3, position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      width: `${getBmiPercentage()}%`,
                      background: "linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)",
                      borderRadius: 3,
                      boxShadow: "0 0 10px rgba(139, 92, 246, 0.4)",
                      transition: "width 0.2s ease",
                    }}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#94A3B8", marginTop: 6, fontFamily: "monospace" }}>
                  <span>15.0</span>
                  <span>25.0 (Optimal)</span>
                  <span>35.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE COACHES */}
      <section id="trainers" style={styles.trainers}>
        <div style={styles.sectionHeaderCenter}>
          <span style={styles.sectionEyebrow}># BIOMECHANICAL SPECIALISTS</span>
          <h2 style={styles.sectionTitleCenter}>MEET OUR BIOMECHANICAL TEAM</h2>
        </div>

        <div style={styles.trainersGrid} className="trainersGrid">
          {TRAINERS.map((t, idx) => (
            <div key={idx} style={styles.trainerCard} className="hover-card">
              <div style={styles.trainerImgFrame}>
                <img src={t.img} alt={t.name} style={styles.trainerImg} />
              </div>
              <div style={styles.trainerMeta}>
                <span style={styles.trainerRole}>{t.role}</span>
                <h3 style={styles.trainerName}>{t.name}</h3>

                <div style={styles.trainerDetailsRow}>
                  <div>
                    <span style={styles.trainerLabel}>EXPERIENCE</span>
                    <span style={styles.trainerVal}>{t.exp}</span>
                  </div>
                  <div style={styles.trainerDetailDivider} />
                  <div>
                    <span style={styles.trainerLabel}>SPECIALIZATION</span>
                    <span style={styles.trainerVal}>{t.specialty}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section style={styles.reviews}>
        <div style={styles.reviewsInner} className="reviewsInner">
          <div style={styles.reviewsLeft}>
            <span style={styles.sectionEyebrow}># CLIENT SATISFACTION</span>
            <h2 style={styles.sectionHeading}>What Colombo Says About Us</h2>
            <p style={styles.aboutBody}>
              Read verified testimonials posted by members of our community who transformed their health and posture patterns at Iron Vibe.
            </p>

            <div style={styles.overallStars}>
              <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} color="#EC4899" fill="#EC4899" />
                ))}
              </div>
              <span style={{ fontSize: 15, fontWeight: 600, color: "#FFFFFF" }}>4.8 out of 5 Google Maps Rating</span>
            </div>
          </div>

          <div style={styles.reviewsRight}>
            <div style={styles.reviewsList}>
              {REVIEWS.map((r, idx) => (
                <div key={idx} style={styles.reviewItemCard} className="hover-card">
                  <div style={styles.reviewHeader}>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0", color: "#FFFFFF", fontSize: 15, fontWeight: 700 }}>{r.name}</h4>
                      <span style={{ fontSize: 11, color: "#94A3B8" }}>{r.badge}</span>
                    </div>
                    <div style={{ display: "flex", gap: 2 }}>
                      {[...Array(r.stars)].map((_, i) => (
                        <Star key={i} size={12} color="#EC4899" fill="#EC4899" />
                      ))}
                    </div>
                  </div>
                  <p style={styles.reviewText}>"{r.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section id="pricing" style={styles.pricing}>
        <div style={styles.sectionHeaderCenter}>
          <span style={styles.sectionEyebrow}># MEMBERSHIP PACKAGES</span>
          <h2 style={styles.sectionTitleCenter}>CHOOSE YOUR TIER PLAN</h2>
        </div>

        <div style={styles.pricingGrid} className="pricingGrid">
          {/* Plan 1 */}
          <div style={styles.priceCard} className="hover-card">
            <span style={styles.planBadgeText}>BASIC PACKAGE</span>
            <div style={styles.priceNumberBlock}>
              <span style={styles.currency}>Rs.</span>
              <span style={styles.priceValText}>2,500</span>
              <span style={styles.priceMoLabel}>/mo</span>
            </div>
            <div style={styles.priceDivider} />
            <div style={styles.planFeatureList}>
              <div style={styles.planFeatureItem}>
                <Check size={14} color="#8B5CF6" style={{ marginRight: 8, flexShrink: 0 }} />
                <span>Gym Access during operating hours</span>
              </div>
              <div style={styles.planFeatureItem}>
                <Check size={14} color="#8B5CF6" style={{ marginRight: 8, flexShrink: 0 }} />
                <span>Access to Basic Strength Equipment</span>
              </div>
              <div style={styles.planFeatureItem}>
                <Check size={14} color="#8B5CF6" style={{ marginRight: 8, flexShrink: 0 }} />
                <span>Showers and locker room access</span>
              </div>
            </div>
            <button style={styles.planCta} className="btn-secondary-outlined">SELECT BASIC</button>
          </div>

          {/* Plan 2 - Featured */}
          <div style={{ ...styles.priceCard, ...styles.featuredPriceCard }} className="featured-card">
            <div style={styles.mostPopularBadge}>
              <Sparkles size={11} style={{ marginRight: 4 }} /> SELECTED PATH
            </div>
            <span style={{ ...styles.planBadgeText, color: "#8B5CF6" }}>PRO TIERS</span>
            <div style={styles.priceNumberBlock}>
              <span style={{ ...styles.currency, color: "#8B5CF6" }}>Rs.</span>
              <span style={styles.priceValText}>5,000</span>
              <span style={styles.priceMoLabel}>/mo</span>
            </div>
            <div style={styles.priceDivider} />
            <div style={styles.planFeatureList}>
              <div style={styles.planFeatureItem}>
                <Check size={14} color="#8B5CF6" style={{ marginRight: 8, flexShrink: 0 }} />
                <span>Full gym access (Open Daily until 11 PM)</span>
              </div>
              <div style={styles.planFeatureItem}>
                <Check size={14} color="#8B5CF6" style={{ marginRight: 8, flexShrink: 0 }} />
                <span>Access to Premium Hack Squat & Smith Machines</span>
              </div>
              <div style={styles.planFeatureItem}>
                <Check size={14} color="#8B5CF6" style={{ marginRight: 8, flexShrink: 0 }} />
                <span>Custom Workout & Posture Routing</span>
              </div>
              <div style={styles.planFeatureItem}>
                <Check size={14} color="#8B5CF6" style={{ marginRight: 8, flexShrink: 0 }} />
                <span>Body Composition Bio-Analysis monthly</span>
              </div>
            </div>
            <button style={{ ...styles.planCta, background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)", color: "#FFFFFF", borderWidth: 0 }} className="btn-primary-gradient">SELECT PRO</button>
          </div>

          {/* Plan 3 */}
          <div style={styles.priceCard} className="hover-card">
            <span style={styles.planBadgeText}>ELITE TIERS</span>
            <div style={styles.priceNumberBlock}>
              <span style={styles.currency}>Rs.</span>
              <span style={styles.priceValText}>9,500</span>
              <span style={styles.priceMoLabel}>/mo</span>
            </div>
            <div style={styles.priceDivider} />
            <div style={styles.planFeatureList}>
              <div style={styles.planFeatureItem}>
                <Check size={14} color="#8B5CF6" style={{ marginRight: 8, flexShrink: 0 }} />
                <span>Complete facility access 24/7 priority</span>
              </div>
              <div style={styles.planFeatureItem}>
                <Check size={14} color="#8B5CF6" style={{ marginRight: 8, flexShrink: 0 }} />
                <span>Dedicated personal training session slots</span>
              </div>
              <div style={styles.planFeatureItem}>
                <Check size={14} color="#8B5CF6" style={{ marginRight: 8, flexShrink: 0 }} />
                <span>Personal Nutrition & Posture planning</span>
              </div>
              <div style={styles.planFeatureItem}>
                <Check size={14} color="#8B5CF6" style={{ marginRight: 8, flexShrink: 0 }} />
                <span>Priority slot booking for peak hours</span>
              </div>
            </div>
            <button style={styles.planCta} className="btn-secondary-outlined">SELECT ELITE</button>
          </div>
        </div>
      </section>

      {/* CONTACT DATA ENTRY */}
      <section style={styles.contact}>
        <div style={styles.contactGrid} className="contactGrid">
          <div style={styles.contactLeft}>
            <span style={styles.sectionEyebrow}># COMMUNICATION PORTAL</span>
            <h2 style={styles.sectionHeading}>GET IN TOUCH WITH THE SPACE</h2>
            <p style={styles.aboutBody}>
              Have queries regarding registrations, corporate memberships, or posture analysis slots? Transmit a message to our concierges.
            </p>

            <div style={styles.contactInfoItems}>
              <div style={styles.contactRow}>
                <Phone size={18} color="#8B5CF6" />
                <div>
                  <span style={{ fontSize: 11, color: "#94A3B8", display: "block" }}>VOICE PHONE CHANNEL</span>
                  <a href="tel:0743725110" style={styles.contactValueLink}>074 372 5110</a>
                </div>
              </div>

              <div style={styles.contactRow}>
                <Mail size={18} color="#8B5CF6" />
                <div>
                  <span style={{ fontSize: 11, color: "#94A3B8", display: "block" }}>EMAIL ADDRESS</span>
                  <a href="mailto:info@ironvibe.lk" style={styles.contactValueLink}>info@ironvibe.lk</a>
                </div>
              </div>

              <div style={styles.contactRow}>
                <MapPin size={18} color="#8B5CF6" />
                <div>
                  <span style={{ fontSize: 11, color: "#94A3B8", display: "block" }}>PHYSICAL TERMINAL</span>
                  <span style={{ color: "#FFFFFF", fontWeight: 600, fontSize: 14 }}>132-4/1 Hultsdorf St, Colombo, LK</span>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.contactRight}>
            <form style={styles.contactForm} className="app-contact-form" onSubmit={e => e.preventDefault()}>
              <h3 style={styles.formTitle}>Initialize Message</h3>

              <div style={styles.formGroup}>
                <label style={styles.formLabel}>YOUR FULL NAME</label>
                <input type="text" placeholder="John Doe" style={styles.formInput} />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel}>EMAIL ADDRESS</label>
                <input type="email" placeholder="john@example.com" style={styles.formInput} />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel}>YOUR MESSAGE</label>
                <textarea rows="4" placeholder="How can we assist you..." style={styles.formTextArea}></textarea>
              </div>

              <button type="submit" style={styles.formSubmitBtn} className="btn-primary-gradient">
                SEND MESSAGE <ArrowUpRight size={15} style={{ marginLeft: 6 }} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerTop}>
            <div style={styles.footerColBrand}>
              <a href="#hero" style={{ ...styles.logo, display: "inline-flex", marginBottom: 16 }} onClick={scrollToSection("hero")}>
                IRON VIBE
              </a>
              <p style={{ color: "#94A3B8", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                A premium editorial wellness project designed for physical balance, posture conditioning, and strength longevity.
              </p>
            </div>

            <div style={styles.footerColLinks}>
              <h4 style={styles.footerHead}>QUICK NAVIGATION</h4>
              <div style={styles.footerLinksGrid}>
                <a href="#hero" style={styles.footerLink} onClick={scrollToSection("hero")}>Home</a>
                <a href="#about" style={styles.footerLink} onClick={scrollToSection("about")}>About</a>
                <a href="#programs" style={styles.footerLink} onClick={scrollToSection("programs")}>Programs</a>
                <a href="#equipment" style={styles.footerLink} onClick={scrollToSection("equipment")}>Equipment</a>
                <a href="#bmi" style={styles.footerLink} onClick={scrollToSection("bmi")}>BMI Lab</a>
                <a href="#trainers" style={styles.footerLink} onClick={scrollToSection("trainers")}>Trainers</a>
                <a href="#pricing" style={styles.footerLink} onClick={scrollToSection("pricing")}>Pricing</a>
              </div>
            </div>

            <div style={styles.footerColSocials}>
              <h4 style={styles.footerHead}>FOLLOW THE SPACE</h4>
              <div style={styles.socialRow}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="social-icon">
                  <Facebook size={16} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="social-icon">
                  <Instagram size={16} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="social-icon">
                  <Youtube size={16} />
                </a>
              </div>
              <span style={{ fontSize: 13, color: "#94A3B8", display: "block", marginTop: 12 }}>Open Daily until 11 PM</span>
            </div>
          </div>

          <div style={styles.footerDivider} />

          <div style={styles.footerBottom}>
            <span>&copy; {new Date().getFullYear()} IRON VIBE. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Scoped Layout Styles
const styles = {
  container: {
    backgroundColor: "#08070B",
    color: "#FFFFFF",
    fontFamily: "'Outfit', sans-serif",
    minHeight: "100vh",
    overflowX: "hidden",
    position: "relative",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  navInner: {
    maxWidth: 1200,
    width: "100%",
    margin: "0 auto",
    padding: "20px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: 28,
    fontWeight: 900,
    letterSpacing: "-0.5px",
    color: "#FFFFFF",
    textDecoration: "none",
    fontFamily: "'Outfit', sans-serif",
  },
  logoLight: {
    fontWeight: 300,
    color: "#5F7065",
  },
  navLinks: {
    display: "flex",
    gap: 28,
    alignItems: "center",
  },
  navLink: {
    color: "#94A3B8",
    fontSize: 18,
    fontWeight: 500,
    textDecoration: "none",
    letterSpacing: "0.2px",
  },
  navRight: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  navCta: {
    padding: "10px 24px",
    borderRadius: "8px",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    textDecoration: "none",
    background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    color: "#FFFFFF",
    display: "inline-block",
    border: "none",
  },
  menuBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 24px",
    gap: 16,
    backgroundColor: "#13111C",
    borderBottom: "1px solid rgba(139, 92, 246, 0.15)",
  },
  mobileLink: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: 500,
    textDecoration: "none",
    letterSpacing: "0.5px",
    padding: "6px 0",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },
  mobileCta: {
    marginTop: 8,
    padding: "14px 20px",
    textAlign: "center",
    fontWeight: 700,
    textDecoration: "none",
    background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    color: "#FFFFFF",
    borderRadius: "8px",
  },
  hero: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    paddingTop: 100,
    overflow: "hidden",
    backgroundColor: "#08070B",
  },
  heroInner: {
    maxWidth: 1200,
    width: "100%",
    margin: "0 auto",
    padding: "40px 24px 80px",
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: 48,
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  },
  heroLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  heroTagline: {
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 14px",
    backgroundColor: "rgba(139, 92, 246, 0.08)",
    border: "1px solid rgba(139, 92, 246, 0.25)",
    borderRadius: "9999px",
    color: "#A855F7",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "1px",
    marginBottom: 24,
  },
  heroTitle: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: "clamp(52px, 6.5vw, 84px)",
    lineHeight: 0.95,
    letterSpacing: "-2.5px",
    color: "#FFFFFF",
    margin: "0 0 24px 0",
    fontWeight: 900,
  },
  heroSerifText: {
    fontStyle: "italic",
    fontWeight: 400,
    color: "#5F7065",
  },
  heroSubText: {
    fontSize: 16,
    lineHeight: 1.6,
    color: "#94A3B8",
    maxWidth: 520,
    margin: "0 0 36px 0",
  },
  heroActions: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
    marginBottom: 48,
  },
  heroPrimaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    padding: "16px 32px",
    background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    color: "#FFFFFF",
    fontWeight: 700,
    borderRadius: "8px",
    letterSpacing: "0.5px",
    textDecoration: "none",
    fontSize: 14,
    textTransform: "uppercase",
    border: "none",
  },
  heroSecondaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontWeight: 700,
    borderRadius: "8px",
    letterSpacing: "0.5px",
    textDecoration: "none",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    fontSize: 14,
    textTransform: "uppercase",
  },
  heroStatsRow: {
    display: "flex",
    alignItems: "center",
    gap: 28,
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
    paddingTop: 24,
    width: "100%",
    flexWrap: "wrap",
  },
  heroStatNum: {
    fontSize: 24,
    fontWeight: 800,
    color: "#FFFFFF",
    display: "block",
  },
  heroStatLabel: {
    fontSize: 10,
    color: "#94A3B8",
    letterSpacing: "1px",
    marginTop: 4,
    fontWeight: 700,
  },
  heroStatDivider: {
    width: 1,
    height: 32,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
  heroRight: {
    display: "flex",
    justifyContent: "center",
  },
  heroImageFrame: {
    width: "100%",
    maxWidth: 420,
    position: "relative",
    padding: "8px",
    background: "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(236,72,153,0.15) 100%)",
    borderRadius: "32px",
    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)",
  },
  heroImage: {
    width: "100%",
    height: "auto",
    aspectRatio: "4/5",
    objectFit: "cover",
    borderRadius: "24px",
    position: "relative",
    zIndex: 2,
  },
  highlights: {
    padding: "60px 24px 80px",
    backgroundColor: "#0B0A0F",
  },
  highlightsInner: {
    maxWidth: 1200,
    width: "100%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 24,
  },
  highlightCard: {
    backgroundColor: "#13111C",
    border: "1px solid rgba(139, 92, 246, 0.1)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    borderRadius: "16px",
    padding: "36px 30px",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  highlightIconBox: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    backgroundColor: "rgba(139, 92, 246, 0.08)",
    border: "1px solid rgba(139, 92, 246, 0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  highlightTitle: {
    fontSize: 20,
    fontWeight: 700,
    margin: 0,
    color: "#FFFFFF",
  },
  highlightBody: {
    fontSize: 14,
    lineHeight: 1.6,
    color: "#94A3B8",
    margin: 0,
  },
  about: {
    padding: "80px 24px",
    backgroundColor: "#08070B",
  },
  aboutInner: {
    maxWidth: 1200,
    width: "100%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 60,
    alignItems: "center",
  },
  aboutLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  aboutBadge: {
    fontSize: 11,
    fontWeight: 700,
    color: "#EC4899",
    letterSpacing: "1.5px",
    marginBottom: 16,
  },
  sectionHeading: {
    fontSize: "clamp(32px, 4vw, 54px)",
    lineHeight: 1.05,
    margin: "0 0 20px 0",
    color: "#FFFFFF",
    fontWeight: 800,
    letterSpacing: "-1.5px",
  },
  serifText: {
    background: "linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 800,
  },
  aboutBody: {
    fontSize: 16,
    lineHeight: 1.65,
    color: "#94A3B8",
    margin: "0 0 32px 0",
  },
  aboutRight: {
    position: "relative",
  },
  aboutVisual: {
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
  },
  aboutImage: {
    width: "100%",
    height: "auto",
    aspectRatio: "4/3",
    objectFit: "cover",
    borderRadius: "16px",
    display: "block",
  },
  aboutBadgeCard: {
    backgroundColor: "rgba(18, 16, 26, 0.92)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "12px",
    padding: "16px 20px",
    display: "flex",
    alignItems: "center",
    gap: 16,
    marginTop: 32,
    width: "100%",
    maxWidth: 520,
  },
  badgeIconWrap: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    backgroundColor: "rgba(236, 72, 153, 0.08)",
    border: "1px solid rgba(236, 72, 153, 0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  badgeNum: {
    fontSize: 15,
    fontWeight: 700,
    color: "#FFFFFF",
    marginBottom: 2,
  },
  badgeLabel: {
    fontSize: 12,
    color: "#94A3B8",
    lineHeight: 1.4,
  },
  programs: {
    padding: "100px 24px",
    backgroundColor: "#0B0A0F",
    borderTop: "1px solid rgba(255, 255, 255, 0.03)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
  },
  sectionHeaderCenter: {
    textAlign: "center",
    marginBottom: 50,
  },
  sectionEyebrow: {
    fontSize: 11,
    color: "#8B5CF6",
    fontWeight: 700,
    letterSpacing: "2px",
    display: "block",
    marginBottom: 12,
  },
  sectionTitleCenter: {
    fontSize: "clamp(32px, 4vw, 44px)",
    margin: 0,
    color: "#FFFFFF",
    fontWeight: 800,
    letterSpacing: "-1px",
  },
  programsGrid: {
    maxWidth: 1200,
    width: "100%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 24,
  },
  programCard: {
    backgroundColor: "#13111C",
    border: "1px solid rgba(139, 92, 246, 0.1)",
    borderRadius: "16px",
    padding: "36px 28px",
    display: "flex",
    flexDirection: "column",
  },
  programIconWrap: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    backgroundColor: "rgba(139, 92, 246, 0.08)",
    border: "1px solid rgba(139, 92, 246, 0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  programCardTitle: {
    fontSize: 20,
    fontWeight: 700,
    margin: "0 0 10px 0",
    color: "#FFFFFF",
  },
  programCardDesc: {
    fontSize: 14,
    lineHeight: 1.6,
    color: "#94A3B8",
    margin: "0 0 24px 0",
    flexGrow: 1,
  },
  programCardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
    paddingTop: 16,
    fontSize: 11,
    fontWeight: 700,
    color: "#94A3B8",
    letterSpacing: "0.5px",
  },
  equipment: {
    padding: "100px 24px",
    backgroundColor: "#08070B",
  },
  equipmentGrid: {
    maxWidth: 1200,
    width: "100%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 24,
  },
  equipmentCard: {
    backgroundColor: "#13111C",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    borderRadius: "20px",
    overflow: "hidden",
  },
  equipmentImageWrap: {
    width: "100%",
    height: 260,
    overflow: "hidden",
  },
  equipmentImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },
  equipmentMeta: {
    padding: 20,
    borderTop: "2px solid #8B5CF6",
  },
  equipmentTitle: {
    fontSize: 18,
    fontWeight: 700,
    margin: "0 0 4px 0",
    color: "#FFFFFF",
  },
  bmi: {
    padding: "100px 24px",
    backgroundColor: "#0B0A0F",
    borderTop: "1px solid rgba(255, 255, 255, 0.03)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
  },
  bmiInner: {
    maxWidth: 1200,
    width: "100%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: 60,
    alignItems: "center",
  },
  bmiLeft: {},
  bmiSliders: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginTop: 36,
  },
  bmiInputBlock: {
    backgroundColor: "#13111C",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    padding: 24,
    borderRadius: "16px",
  },
  bmiInputHeader: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.5px",
    color: "#FFFFFF",
  },
  rangeInput: {
    width: "100%",
    marginTop: 16,
    cursor: "pointer",
  },
  bmiRight: {},
  resultsCard: {
    backgroundColor: "#13111C",
    border: "1px solid rgba(139, 92, 246, 0.2)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
    padding: 36,
    borderRadius: "20px",
  },
  resultsValue: {
    fontSize: 64,
    fontWeight: 800,
    color: "#FFFFFF",
    lineHeight: 1,
    margin: "12px 0 0 0",
  },
  resultsStatusBadge: {
    backgroundColor: "rgba(139, 92, 246, 0.08)",
    border: "1px solid rgba(139, 92, 246, 0.25)",
    color: "#8B5CF6",
    fontSize: 12,
    fontWeight: 700,
    padding: "10px 14px",
    borderRadius: "8px",
    textAlign: "center",
  },
  trainers: {
    padding: "100px 24px",
    backgroundColor: "#08070B",
  },
  trainersGrid: {
    maxWidth: 1200,
    width: "100%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 28,
  },
  trainerCard: {
    backgroundColor: "#13111C",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    borderRadius: "20px",
    overflow: "hidden",
  },
  trainerImgFrame: {
    width: "100%",
    aspectRatio: "1.1/1",
    overflow: "hidden",
    padding: "8px 8px 0 8px",
  },
  trainerImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "grayscale(100%) brightness(95%)",
    transition: "transform 0.4s ease",
    borderRadius: "14px",
  },
  trainerMeta: {
    padding: 24,
  },
  trainerRole: {
    fontSize: 10,
    color: "#8B5CF6",
    fontWeight: 700,
    letterSpacing: "1px",
    textTransform: "uppercase",
    display: "block",
    marginBottom: 4,
  },
  trainerName: {
    fontSize: 22,
    fontWeight: 800,
    margin: "0 0 16px 0",
    color: "#FFFFFF",
  },
  trainerDetailsRow: {
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
    paddingTop: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  trainerLabel: {
    fontSize: 9,
    color: "#94A3B8",
    display: "block",
    letterSpacing: "0.5px",
    marginBottom: 2,
    fontWeight: 700,
  },
  trainerVal: {
    fontSize: 12,
    fontWeight: 700,
    color: "#FFFFFF",
  },
  trainerDetailDivider: {
    width: 1,
    height: 28,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
  reviews: {
    padding: "100px 24px",
    backgroundColor: "#0B0A0F",
    borderTop: "1px solid rgba(255, 255, 255, 0.03)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
  },
  reviewsInner: {
    maxWidth: 1200,
    width: "100%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "0.85fr 1.15fr",
    gap: 48,
    alignItems: "center",
  },
  reviewsLeft: {},
  overallStars: {
    marginTop: 24,
  },
  reviewsRight: {},
  reviewsList: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  reviewItemCard: {
    backgroundColor: "#13111C",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    borderRadius: "16px",
    padding: 24,
  },
  reviewHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  reviewText: {
    fontSize: 14,
    lineHeight: 1.5,
    color: "#94A3B8",
    margin: 0,
    fontStyle: "italic",
  },
  pricing: {
    padding: "100px 24px",
    backgroundColor: "#08070B",
  },
  pricingGrid: {
    maxWidth: 1200,
    width: "100%",
    margin: "40px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 24,
    alignItems: "stretch",
  },
  priceCard: {
    backgroundColor: "#13111C",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    borderRadius: "20px",
    padding: "48px 36px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  featuredPriceCard: {
    borderColor: "#8B5CF6",
    borderWidth: 2,
    boxShadow: "0 15px 40px rgba(139, 92, 246, 0.15)",
  },
  mostPopularBadge: {
    position: "absolute",
    top: -12,
    left: "50%",
    transform: "translateX(-50%)",
    background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: "1px",
    padding: "4px 16px",
    borderRadius: "9999px",
    display: "flex",
    alignItems: "center",
  },
  planBadgeText: {
    fontSize: 11,
    fontWeight: 700,
    color: "#94A3B8",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  priceNumberBlock: {
    display: "flex",
    alignItems: "baseline",
    margin: "12px 0 24px 0",
  },
  currency: {
    fontSize: 16,
    fontWeight: 600,
    color: "#8B5CF6",
    marginRight: 4,
  },
  priceValText: {
    fontSize: 44,
    fontWeight: 800,
    color: "#FFFFFF",
  },
  priceMoLabel: {
    fontSize: 13,
    color: "#94A3B8",
    marginLeft: 6,
  },
  priceDivider: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    marginBottom: 24,
  },
  planFeatureList: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    marginBottom: 40,
    flexGrow: 1,
  },
  planFeatureItem: {
    display: "flex",
    alignItems: "center",
    fontSize: 14,
    color: "#94A3B8",
    lineHeight: 1.4,
  },
  planCta: {
    width: "100%",
    padding: "16px 20px",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontWeight: 700,
    fontSize: 12,
    cursor: "pointer",
    fontFamily: "inherit",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  contact: {
    padding: "100px 24px",
    backgroundColor: "#0B0A0F",
    borderTop: "1px solid rgba(255, 255, 255, 0.03)",
  },
  contactGrid: {
    maxWidth: 1200,
    width: "100%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 60,
    alignItems: "center",
  },
  contactLeft: {},
  contactInfoItems: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    marginTop: 40,
  },
  contactRow: {
    display: "flex",
    gap: 16,
    alignItems: "flex-start",
  },
  contactValueLink: {
    fontSize: 18,
    fontWeight: 700,
    color: "#FFFFFF",
    textDecoration: "none",
    marginTop: 2,
    display: "inline-block",
  },
  contactRight: {},
  contactForm: {
    backgroundColor: "#13111C",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    padding: 36,
    borderRadius: "20px",
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 700,
    margin: "0 0 24px 0",
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
    paddingBottom: 16,
    color: "#FFFFFF",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    marginBottom: 18,
  },
  formLabel: {
    fontSize: 10,
    fontWeight: 700,
    color: "#94A3B8",
    letterSpacing: "1px",
  },
  formInput: {
    backgroundColor: "#08070B",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    padding: "12px 16px",
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "inherit",
    transition: "border-color 0.2s ease",
  },
  formTextArea: {
    backgroundColor: "#08070B",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    padding: "12px 16px",
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "inherit",
    resize: "vertical",
    transition: "border-color 0.2s ease",
  },
  formSubmitBtn: {
    width: "100%",
    padding: "16px 20px",
    background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    border: "none",
    borderRadius: "8px",
    color: "#FFFFFF",
    fontWeight: 700,
    fontSize: 13,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: "1px",
    marginTop: 10,
    textTransform: "uppercase",
  },
  footer: {
    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
    padding: "60px 24px 40px",
    backgroundColor: "#08070B",
  },
  footerInner: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  footerTop: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 40,
    paddingBottom: 40,
  },
  footerColBrand: {
    display: "flex",
    flexDirection: "column",
  },
  footerColLinks: {
    display: "flex",
    flexDirection: "column",
  },
  footerHead: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "1.5px",
    color: "#FFFFFF",
    margin: "0 0 18px 0",
    textTransform: "uppercase",
  },
  footerLinksGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px 20px",
  },
  footerLink: {
    fontSize: 13,
    color: "#94A3B8",
    textDecoration: "none",
    transition: "color 0.2s ease",
  },
  footerColSocials: {
    display: "flex",
    flexDirection: "column",
  },
  socialRow: {
    display: "flex",
    gap: 12,
  },
  socialIcon: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    backgroundColor: "#13111C",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#94A3B8",
    transition: "all 0.2s ease",
  },
  footerDivider: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    marginBottom: 30,
  },
  footerBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 16,
    fontSize: 12,
    color: "#94A3B8",
  },
};

// Global Interactive CSS Overrides
const css = `
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  section { scroll-margin-top: 80px; }
  body { margin: 0; background-color: #08070B; color: #FFFFFF; }
  button { font-family: inherit; }

  /* Micro animations */
  .app-pulse {
    animation: app-pulse-key 2s infinite ease-in-out;
  }
  @keyframes app-pulse-key {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  /* Interactive range slider overrides */
  .theme-slider {
    -webkit-appearance: none;
    appearance: none;
    height: 4px;
    background: rgba(255,255,255,0.08);
    border-radius: 2px;
    outline: none;
  }
  .theme-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #8B5CF6;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
    border: none;
    transition: transform 0.1s ease;
  }
  .theme-slider::-webkit-slider-thumb:hover {
    transform: scale(1.2);
  }
  .theme-slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #8B5CF6;
    cursor: pointer;
    border: none;
    box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
    transition: transform 0.1s ease;
  }
  .theme-slider::-moz-range-thumb:hover {
    transform: scale(1.2);
  }

  /* Nav Links styling */
  .app-nav-link {
    transition: color 0.2s ease;
  }
  .app-nav-link:hover {
    color: #FFFFFF !important;
  }

  /* Button styling */
  .btn-primary-gradient {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  .btn-primary-gradient:hover {
    transform: translateY(-1.5px);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
    filter: brightness(1.1);
  }

  .btn-secondary-outlined {
    transition: all 0.25s ease;
  }
  .btn-secondary-outlined:hover {
    border-color: #FFFFFF !important;
    background-color: rgba(255, 255, 255, 0.05);
    transform: translateY(-1px);
  }

  /* Card animations */
  .hover-card {
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .hover-card:hover {
    transform: translateY(-3px);
    border-color: rgba(139, 92, 246, 0.3) !important;
    background-color: #161424 !important;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3) !important;
  }

  .featured-card {
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .featured-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.25);
    border-color: #EC4899 !important;
  }

  /* Image zoom-in effect on card hovers */
  .hover-card:hover img {
    transform: scale(1.03);
  }

  /* Social links */
  .social-icon:hover {
    background-color: #8B5CF6 !important;
    color: #FFFFFF !important;
    border-color: #8B5CF6 !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
  }

  /* Contact input focus */
  .app-contact-form input:focus, .app-contact-form textarea:focus {
    border-color: #8B5CF6 !important;
    outline: none;
    box-shadow: 0 0 8px rgba(139, 92, 246, 0.2);
  }

  /* Footer quick navigation links */
  .footerLink:hover {
    color: #FFFFFF !important;
  }

  /* Responsive Rules */
  @media (max-width: 991px) {
    .app-nav-desktop { display: none !important; }
    .app-menu-toggle { display: flex !important; }
    
    .app-hero-image-wrap { display: none !important; }
    .heroInner { grid-template-columns: 1fr !important; gap: 32px !important; }
    .aboutInner { grid-template-columns: 1fr !important; gap: 32px !important; }
    .bmiInner { grid-template-columns: 1fr !important; gap: 32px !important; }
    .reviewsInner { grid-template-columns: 1fr !important; gap: 32px !important; }
    .contactGrid { grid-template-columns: 1fr !important; gap: 32px !important; }
  }
  @media (min-width: 992px) {
    .app-menu-toggle { display: none !important; }
  }

  @media (max-width: 767px) {
    html, body {
      overflow-x: hidden;
      width: 100%;
    }
    
    section, header, footer {
      padding-left: 16px !important;
      padding-right: 16px !important;
    }
    
    .navInner {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    
    .hover-card, .featured-card {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    
    .app-contact-form {
      padding: 24px 20px !important;
    }
    
    .resultsCard {
      padding: 24px 20px !important;
    }
  }
`;
