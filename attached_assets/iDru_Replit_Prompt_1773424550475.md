# iDru Landing Page — Replit Design Mode Prompt (Enhanced)

Build a beautiful, modern landing page for **iDru** — a smart water reservoir monitoring system for residential condominiums in Brazil — using **React, Shadcn, and Tailwind CSS**. Follow every design guideline below precisely before generating any code.

---

## 🎨 DESIGN SYSTEM & STYLE GUIDELINES

### Overall Design Principles
The page should feel like a **premium SaaS product** — calm, technological, trustworthy. Think Stripe, Linear, Vercel, Notion. Never industrial, never government-issued. The emotional north star is: **"Stop being the last person to know when the water runs out."**

**Keywords:** clean · intelligent · reliable · modern · calm-tech · action-driven  
**Avoid:** cluttered layouts · dark industrial tones · generic utility aesthetic · passive CTAs · cold corporate blue

---

### Color Palette

| Role | Hex | Usage |
|---|---|---|
| Background A | `#F8FAFC` | Hero, How It Works sections |
| Background B | `#FFFFFF` | Why iDru, Social Proof, Final CTA |
| Background C | `#E8E9FF` | iDru Answers, How It Works |
| Primary Blue | `#2563EB` (blue-600) | Primary CTA buttons, accent text |
| Blue Light | `#3B82F6` (blue-500) | Icons, highlights |
| Blue Subtle | `#EFF6FF` | Icon containers, badge backgrounds |
| Text Primary | `#1E293B` (slate-800) | All headings |
| Text Secondary | `#64748B` (slate-500) | Body text, descriptions |
| Card Border | `#E2E8F0` (slate-200) | Card outlines |
| Alert Orange | `#F97316` | Warning badges ("Nível Baixo") |
| Success Green | `#22C55E` | Status badges ("100% Cheio") |
| WhatsApp Green | `#25D366` | WhatsApp CTA button |

**Background pattern (Hero + How It Works):**
```css
background-color: #F8FAFC;
background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%2394a3b8' fill-opacity='0.07' fill-rule='evenodd'/%3E%3C/svg%3E");
```

---

### Typography

| Element | Family | Weight | Size |
|---|---|---|---|
| Hero H1 | Inter Black | 900 | clamp(2.5rem, 5vw, 4rem) |
| H2 Section titles | Inter ExtraBold | 800 | clamp(1.875rem, 3.5vw, 2.75rem) |
| H3 Card titles | Inter SemiBold | 600 | 1.25rem |
| Body text | Inter Regular | 400 | 1rem–1.125rem |
| Button labels | Inter SemiBold | 600 | 0.9375rem |

- Hero H1: `line-height: 1.1`, `letter-spacing: -0.03em`
- H2: `line-height: 1.15`, `letter-spacing: -0.02em`
- Body max-width: 520px for readability in single-column content

**Emphasis technique:** Apply `color: #2563EB` to 1–2 key words in the H1 — do NOT use italic serif for iDru (brand is tech, not editorial).

---

### Layout & Spacing

- Max content width: `1200px`, centered, `px-8` gutters
- Section vertical padding: `py-24` minimum (`clamp(80px, 10vw, 140px)`)
- Cards: `p-8`, `rounded-2xl`, `border border-slate-100`, `hover:shadow-md` transition
- 2-column sections: `gap-16`
- 3-column grids: `gap-8`
- 12-column grid system

---

### Navigation

- Sticky top navbar, `bg-white`, shadow `0 1px 0 rgba(0,0,0,0.06)` on scroll
- Logo left-aligned (iDru wordmark — Inter Black, text-blue-800 with blue-500 accent dot)
- Nav links: `Início · Funcionalidades · Depoimentos · Como funciona · Contato`
- CTA button (pill): `"Fale pelo WhatsApp"` — `bg-[#25D366] text-white rounded-full`
- Height: `72px`

---

### Buttons

**Primary (Blue):**
- `bg-blue-600 text-white rounded-full px-9 py-4 font-semibold`
- hover: `bg-blue-700 translateY(-2px)`, `box-shadow: 0 6px 20px rgba(37,99,235,0.35)`
- transition: `all 0.25s ease`

**Primary (WhatsApp):**
- `bg-[#25D366] text-white rounded-full`
- Icon: WhatsApp SVG or Lucide equivalent left of label
- hover: `bg-[#1fba58] translateY(-2px)`

**Secondary:**
- `border-1.5 border-slate-800 text-slate-800 rounded-full bg-transparent`
- hover: `bg-slate-800 text-white`

---

### Cards

**Default:**
```
background: #FFFFFF
border-radius: 20px
padding: 32px
box-shadow: 0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)
border: 1px solid rgba(0,0,0,0.06)
```

**Hover:**
```
transform: translateY(-4px)
border-color: #2563EB (20% opacity)
box-shadow: 0 8px 32px rgba(37,99,235,0.10)
transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1)
```

**Alert/Status badges (floating cards from HTML reference):**
- `border-l-4 border-orange-500` → "Nível Baixo" (warning triangle icon)
- `border-l-4 border-green-500` → "100% Cheio" (checkmark icon)
- Both use subtle `animate-bounce` (3–4s infinite) for visual dynamism

---

### Icons

- Library: **Lucide React** exclusively (`strokeWidth: 1.75`)
- Size: 24px default, 32px in feature cards, 20px inline
- Container: `bg-blue-50 rounded-xl p-3.5 text-blue-600`

---

### Animations

- **Scroll fade-in:** `opacity: 0 → 1`, `translateY(24px → 0)`, `duration: 0.5s`, `easing: cubic-bezier(0.4, 0, 0.2, 1)` — use IntersectionObserver
- **Card hover lift:** `translateY(-4px)`, `0.25s`
- **Stagger on card grids:** `0.08s` delay between children
- **Chat prompt hover:** left blue border slides in + `bg-blue-50` tint
- **Status badges:** `animate-[bounce_3s_infinite]` and `animate-[bounce_4s_infinite]`

---

## 📄 PAGE CONTENT STRUCTURE

### 🔝 Navbar
- Logo: `iDru.` (Inter Black, blue-800, with blue-500 dot)
- Links: Início · Funcionalidades · Depoimentos · Como funciona · Contato
- CTA: `"Fale pelo WhatsApp"` → `bg-[#25D366] text-white rounded-full`

---

### Section 1 — Hero
- **Layout:** 2 columns (55/45 split), `bg-[#F8FAFC]` + dot SVG pattern
- **Column 1:**
  - Badge pill: `💧 Monitoramento Hídrico Inteligente` (blue-50 bg, blue-600 text)
  - H1: `"Deixe de ser o último a saber que a água acabou."`
    - Highlight "último" in `text-blue-600`
  - Subtitle: `"Reduza reclamações e evite surpresas com monitoramento inteligente dos reservatórios do seu condomínio."`
  - CTA: `"Assuma o controle da água!"` → blue primary pill button
  - Secondary link: `"Ver como funciona →"` (text-blue-600, underline on hover)
- **Column 2:**
  - Image: `[Sem_água.png]` — display in a rounded-2xl frame with a subtle shadow-xl
  - Float 2 status badge cards over the image:
    - Top-right: `"100% Cheio"` — green border-l-4, CheckCircle icon (from `Cheio.png` reference)
    - Bottom-left: `"Nível Baixo"` — orange border-l-4, AlertTriangle icon (from `Vazio.png` reference)
    - Both with `animate-bounce` staggered

---

### Section 2 — Why iDru
- **Layout:** 1 column wrapper, `bg-white`
- H2: `"O fim do 'vai lá ver quanto tem de água'."`
- Subtitle: `"Sensores inteligentes que monitoram reservatórios em tempo real, ajudando síndicos e administradoras a tomar decisões com base em dados."`
- **Sub-layout Row 1:** 2 columns
  - Col 1: Image `[Gráfico_iDru_completo.png]` in rounded-2xl frame, shadow-lg
  - Col 2: 2 feature cards stacked:
    1. Icon: `Wifi` (blue) | H3: `"Monitoramento contínuo"` | Desc: `"Saiba o nível exato dos reservatórios em tempo real pelo app."`
    2. Icon: `AlertTriangle` (orange) | H3: `"Antecipe Emergências"` | Desc: `"Receba alertas no seu celular antes que a água acabe."`
- **Sub-layout Row 2:** 2 columns (reverse — image right)
  - Col 1: 2 feature cards stacked:
    1. Icon: `Users` (blue) | H3: `"Proteja seu time"` | Desc: `"Deixe de colocar em risco os colaboradores da sua equipe."`
    2. Icon: `ShieldCheck` (green) | H3: `"Proteja o Caixa"` | Desc: `"Evite queima de bombas e os vazamentos silenciosos que destroem o orçamento."`
  - Col 2: Image `[Zelador_chuva.jpg]` in rounded-2xl frame, shadow-lg, slight rotation `-1deg`

---

### Section 3 — iDru Answers
- **Layout:** 1 column centered, `bg-[#E8E9FF]`
- H2: `"Descubra já como funciona no seu condomínio."`
- **Chat UI Component** (ChatGPT-style, max-width 640px, centered):
  - Container: `bg-white rounded-3xl shadow-xl border border-slate-100`
  - Header: `"Pergunte-me qualquer coisa sobre iDru"` with a pulsing blue dot
  - 5 prompt suggestion items with hover effect (left blue border slides in, `bg-blue-50` background):
    1. `"Quanto custa instalar a iDru?"`
    2. `"Precisa quebrar alguma tubulação?"`
    3. `"Funciona em qualquer reservatório?"`
    4. `"Como recebo os alertas?"`
    5. `"O que acontece se faltar internet?"`
  - Each item: `padding: 14px 20px`, `border-left: 3px solid transparent`, hover animates border to `#2563EB` + bg tint

---

### Section 4 — Social Proof
- **Layout:** testimonial cards grid, `bg-white`
- Stat banner: `"3 cidades e 12 condomínios já monitorados com iDru"` — large blue number display
- 4 testimonial cards (2-column grid on desktop):
  1. *"Desde que instalamos o iDru, nossas preocupações com falta d'água acabaram! O sistema é confiável e os alertas são muito úteis."* — **Cristiane, Síndica – Condomínio De Leon (ITJ)**
  2. *"Depois que instalamos o iDru, nunca mais tivemos surpresa com falta d'água. Os alertas chegam antes do problema acontecer."* — **Tiago, Coordenador – IFSC Itajaí**
  3. *"A equipe da iDru foi muito profissional na instalação e o suporte é excelente. Recomendo!"* — **Sérgio, Síndico Profissional (BC, NVG e ITJ)**
  4. *"Ficava o dia todo subindo e descendo pra checar a caixa. Agora só olho no celular. Ganhamos tempo e evitamos problema."* — **Matheus, Zelador – Art de Viver (ITJ)**
- Each card: `rounded-2xl bg-white shadow-md border border-slate-100 p-8`, quotation mark accent in blue-100

---

### Section 5 — How It Works
- **Layout:** 3 steps horizontal, `bg-[#E8E9FF]` + dot SVG pattern
- H2: `"Como funciona"`
- Steps displayed as numbered cards with connecting line between them:
  1. **Step 1** — Icon: `Phone` | Title: `"Contato Inicial e Avaliação Técnica Gratuita"` | Desc: `"Após seu contato, entendemos as necessidades do seu condomínio."`
  2. **Step 2** — Icon: `PackageCheck` | Title: `"Proposta personalizada e Custo ZERO de Instalação"` | Desc: `"Sem cobrança pela montagem, instalação e configuração. Sistema funcionando em poucas horas."`
  3. **Step 3** — Icon: `HeadphonesIcon` | Title: `"Suporte e treinamento inclusos na mensalidade"` | Desc: `"Assistência técnica, manutenção preventiva e capacitação sem custos adicionais."`
- CTA below steps: `"Quero assumir o controle da água!"` → blue primary button

---

### Section 6 — Final CTA
- **Layout:** 2 columns, `bg-white`
- Col 1:
  - H2: `"Assuma o controle da água do seu condomínio"`
  - Subtitle: `"Evite surpresas e reduza emergências."`
  - CTA: `"Agendar avaliação pelo WhatsApp"` → WhatsApp green pill button with WhatsApp icon
- Col 2: Image `[Versão_2_jan26.jpg]` — iDru device photo in rounded-2xl frame with shadow-xl

---

### Section 7 — Footer
- `bg-slate-900`, text-white
- 3-column layout:
  - Logo + tagline: `"iDru — Inteligência no controle da água"`
  - Site sections: Início · Funcionalidades · Depoimentos · Como funciona · Contato
  - Legal: `empresa do grupo SoluVentures` · Política de Privacidade · Termos e Condições
- Bottom bar: `© 2025 iDru. Todos os direitos reservados.` — `text-slate-500 text-sm`
- Divider: `border-t border-slate-800`

---

## 🖼️ IMAGE REFERENCES

Use these uploaded local files for the images. Reference them by their local path and describe the expected visual placement:

| Variable Name | File | Placement |
|---|---|---|
| `heroImage` | `Sem_água.png` | Hero Section Column 2 |
| `chartImage` | `Gráfico_iDru_completo.png` | Why iDru, Row 1 Col 1 |
| `zeladorImage` | `Zelador_chuva.jpg` | Why iDru, Row 2 Col 2 |
| `deviceImage` | `Versão_2_jan26.jpg` | Final CTA Column 2 |
| `statusFull` | `Cheio.png` | Floating badge reference (Hero) |
| `statusLow` | `Vazio.png` | Floating badge reference (Hero) |
| `appChart` | `Gráfico_iDru.png` | Optional: Section 2 or App mockup |
| `devicePhoto` | `Versão_2_jan26.jpg` | iDru hardware device |

---

## ⚙️ TECHNICAL REQUIREMENTS

- Framework: **React + Tailwind CSS + Shadcn UI**
- Icons: **Lucide React** only
- Fonts: Import **Inter** from Google Fonts (weights: 400, 500, 600, 800, 900)
- Animations: Use **IntersectionObserver** for scroll fade-ins; CSS transitions for hover states
- Responsive: Mobile-first, breakpoints at `md` (tablet) and `lg` (desktop)
- No `<form>` tags — use `onClick` handlers
- WhatsApp CTA link: `https://wa.me/5547XXXXXXXXX` (placeholder)
- Keep all components in a single file unless splitting improves clarity significantly
