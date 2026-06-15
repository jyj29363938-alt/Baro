"use client";

import { useEffect, useRef } from "react";
import styles from "./SplashScreen.module.css";

const CHAR_SVG = `<svg width="188" height="138" viewBox="0 0 188 138" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M84.4125 87.742C94.1601 98.5971 101.028 103.711 103.243 104.911L122.627 97.4341L108.781 77.2191L84.4125 87.742Z" fill="url(#c0)"/>
<circle cx="113.361" cy="106.802" r="14.1859" transform="rotate(7.73187 113.361 106.802)" fill="url(#c1)"/>
<path d="M22.7163 114.011C31.7348 105.624 38.1023 102.421 39.3446 99.2905L49.7267 108.197C57.2898 111.72 57.1565 121.864 54.7655 124.479L22.7163 114.011Z" fill="url(#c2)"/>
<path d="M81.5021 112.016C83.8139 104.502 84.151 94.918 84.0306 91.065L56.2168 97.9281C63.1522 105.441 60.7319 119.158 57.8422 124.817H99.0211C97.2872 115.859 86.0775 112.377 81.5021 112.016Z" fill="url(#c3)"/>
<path d="M11.429 84.4653C16.4484 86.0067 22.2807 84.0418 25.2053 83.7981L23.7885 105.914C8.80704 103.239 2.16349 93.6528 0.7144 89.1941C-0.361724 85.8829 -0.116187 83.7301 0.749492 82.4144C2.99138 79.0073 7.5301 83.2681 11.429 84.4653Z" fill="url(#c4)"/>
<path d="M147.832 103.405C134.281 80.859 134.281 77.5075 134.281 69.8383L95.4601 75.7012C105.278 89.3606 115.102 103.312 129.695 109.729L147.832 103.405Z" fill="url(#c5)"/>
<circle cx="138.009" cy="107.904" r="15.9983" transform="rotate(7.73187 138.009 107.904)" fill="url(#c6)"/>
<path d="M120.177 34.5458L129.307 76.2936L77.7948 96.9423L22.3516 108.377C5.6747 68.4471 31.3294 39.1012 51.4131 29.717C81.5883 15.6176 109.47 26.1487 120.177 34.5458Z" fill="url(#c7)"/>
<path d="M17.9981 110.35C17.396 108.133 18.8815 105.892 21.1582 105.583L54.9317 101.001C60.9619 100.183 66.8149 98.3712 72.2529 95.6397L130.175 66.545C132.036 65.6103 134.299 66.1475 135.541 67.8186C137.137 69.9645 136.4 73.0313 134.005 74.219L78.7099 101.633C71.8126 105.053 64.406 107.33 56.779 108.376L22.1868 113.122C20.2923 113.382 18.4993 112.196 17.9981 110.35Z" fill="url(#c8)"/>
<path d="M138.861 13.7093C134.11 29.2303 126.062 33.1793 119.538 34.3655C113.844 56.5712 125.826 71.2178 132.113 75.2509C153.28 71.0411 165.19 68.4867 177.904 52.1487C188.896 38.0246 188.932 26.6013 185.2 18.0792C178.904 3.69738 159.579 -4.37916 146.598 4.45179C142.316 7.36476 139.66 11.1002 138.861 13.7093Z" fill="url(#c9)"/>
<rect x="169.008" y="27.0975" width="8.09723" height="3.58816" rx="1.79408" fill="url(#c10)"/>
<defs>
<linearGradient id="c0" x1="93.612" y1="85.9178" x2="103.52" y2="102.551" gradientUnits="userSpaceOnUse"><stop stop-color="#03794E"/><stop offset="1" stop-color="#006641"/></linearGradient>
<linearGradient id="c1" x1="116.613" y1="77.5265" x2="109.807" y2="120.988" gradientUnits="userSpaceOnUse"><stop stop-color="#F19900"/><stop offset="0.815259" stop-color="#FFD23F"/></linearGradient>
<linearGradient id="c2" x1="32.2258" y1="124.479" x2="47.0624" y2="85.2634" gradientUnits="userSpaceOnUse"><stop offset="0.120192" stop-color="#FFD23F"/><stop offset="0.740385" stop-color="#EBA100"/></linearGradient>
<linearGradient id="c3" x1="77.6189" y1="73.2187" x2="77.6189" y2="136.554" gradientUnits="userSpaceOnUse"><stop offset="0.197253" stop-color="#FFB700"/><stop offset="0.77323" stop-color="#FFEB33"/></linearGradient>
<linearGradient id="c4" x1="0" y1="91.2212" x2="34.4859" y2="98.1968" gradientUnits="userSpaceOnUse"><stop stop-color="#FFEF61"/><stop offset="0.758861" stop-color="#FABC27"/><stop offset="1" stop-color="#A17100"/></linearGradient>
<linearGradient id="c5" x1="133.2" y1="95.5091" x2="115.152" y2="72.7003" gradientUnits="userSpaceOnUse"><stop stop-color="#00EC8B"/><stop offset="1" stop-color="#00824D"/></linearGradient>
<radialGradient id="c6" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(141.856 98.9278) rotate(98.7557) scale(25.2692)"><stop stop-color="#FFF38B"/><stop offset="0.430076" stop-color="#FFE84B"/><stop offset="1" stop-color="#FFB700"/></radialGradient>
<radialGradient id="c7" cx="0" cy="0" r="1" gradientTransform="matrix(-24.1542 65.5666 -66.719 -26.0135 87.6699 45.9313)" gradientUnits="userSpaceOnUse"><stop stop-color="#5DDDA9"/><stop offset="0.457014" stop-color="#00C776"/><stop offset="1" stop-color="#04975E"/></radialGradient>
<linearGradient id="c8" x1="18.2147" y1="111.148" x2="136.257" y2="66.0209" gradientUnits="userSpaceOnUse"><stop stop-color="#92EACA"/><stop offset="1" stop-color="#D6F7EB"/></linearGradient>
<radialGradient id="c9" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(161.673 16.2253) rotate(125.626) scale(78.3694 69.6073)"><stop offset="0.0588015" stop-color="#FFF599"/><stop offset="0.241359" stop-color="#FFEF61"/><stop offset="0.636023" stop-color="#FFCC24"/><stop offset="0.878622" stop-color="#FFE389"/></radialGradient>
<linearGradient id="c10" x1="173.133" y1="31.6299" x2="173.133" y2="27.0975" gradientUnits="userSpaceOnUse"><stop/><stop offset="0.787639" stop-color="#545454"/><stop offset="1" stop-color="#ADADAD"/></linearGradient>
</defs></svg>`;

const LOGO_SVG = `<svg width="96" height="96" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.5069 42.2089C41.3955 41.8593 39.8716 41.0773 37.9521 38.865L33.8964 45.2768C35.7506 46.4114 41.4054 45.8144 43.2469 43.7235C43.7542 43.1475 43.2392 42.4392 42.5069 42.2089Z" fill="url(#l0)"/>
<path d="M8.2897 1.91813C12.748 -1.13041 18.5015 -0.474396 21.1403 3.38298C22.504 5.37725 22.7659 7.83706 22.0875 10.1691L19.7545 19.4289C21.9645 18.0774 24.5633 17.2981 27.3434 17.298C35.3877 17.2983 41.9095 23.8202 41.9098 31.8644C41.9096 35.4982 40.5783 38.8217 38.3776 41.3732C34.1238 46.9821 28.7588 47.9541 18.8229 45.2189C17.2564 44.7876 15.863 44.0578 14.6696 43.1095C13.0507 43.6019 11.149 43.6896 8.99477 43.4386C8.9702 43.435 4.811 42.8101 6.49966 39.005C8.09511 35.4102 9.73709 31.628 10.8229 27.4318L12.8327 17.7541C9.71221 18.0749 6.70099 16.9219 4.9938 14.4259C2.35566 10.5677 3.8313 4.96738 8.2897 1.91813ZM28.154 23.2775C23.7858 23.2777 20.2449 26.9162 20.2448 31.4045C20.2448 35.8928 23.7858 39.5312 28.154 39.5314C32.5223 39.5314 36.0641 35.893 36.0641 31.4045C36.064 26.916 32.5223 23.2775 28.154 23.2775Z" fill="#00C775"/>
<rect x="11.6915" y="10.367" width="1.59308" height="2.56675" rx="0.79654" fill="rgba(255,255,255,0.6)"/>
<rect x="6.82617" y="8.15845" width="1.234" height="2.20859" rx="0.617002" fill="rgba(255,255,255,0.6)"/>
<path d="M27.9458 16.1262C36.043 16.1262 42.6069 22.8708 42.6069 31.1907C42.6069 34.1477 41.7778 36.9057 40.3452 39.2327C40.3452 39.2327 37.2308 39.2314 32.9224 37.8879C34.8304 36.4041 36.064 34.0528 36.064 31.4045C36.0639 26.9162 32.5229 23.2778 28.1548 23.2776C24.1553 23.2776 20.8498 26.3276 20.3198 30.2874C16.826 26.5789 15.6001 23.0608 15.6001 23.0608C18.2073 18.8893 22.7626 16.1262 27.9458 16.1262Z" fill="url(#l1)"/>
<path d="M33.881 37.0057C36.2481 37.5154 38.836 37.66 41.6349 37.2938C42.2919 37.2079 42.8945 37.6711 42.9807 38.328C43.0664 38.9849 42.6034 39.5876 41.9465 39.6737C38.0427 40.1845 34.5072 39.7921 31.3703 38.829C32.3216 38.3932 33.1724 37.7704 33.881 37.0057ZM15.1838 20.9803C15.8297 20.8327 16.4733 21.2369 16.6213 21.8827C16.9825 23.4629 18.3375 26.1404 20.6476 28.8446C20.3878 29.6495 20.2444 30.5096 20.2443 31.4042C20.2443 31.5948 20.2532 31.7842 20.2658 31.9715C16.8981 28.5641 14.8273 24.8058 14.2814 22.4178C14.1341 21.772 14.538 21.1281 15.1838 20.9803Z" fill="url(#l2)"/>
<path d="M29.0029 16.1659C29.6983 16.2168 30.3807 16.3166 31.0459 16.4637V18.8475L33.3311 20.1668L35.7881 18.7498L36.3125 19.0526V18.8182C37.8447 19.9142 39.1634 21.3034 40.1924 22.9061V26.1629L42.1045 27.2674C42.4319 28.5182 42.6074 29.8332 42.6074 31.1903C42.6074 31.755 42.5765 32.3126 42.5176 32.8612L38.3457 35.2704L35.7246 33.7577C35.8719 33.2566 35.9747 32.7358 36.0254 32.1991L38.3447 33.5379L41.25 31.8612V28.5057L38.8789 27.1375L36.0869 28.7498V31.7381L36.0547 31.7557C36.0595 31.6393 36.0645 31.5218 36.0645 31.4041C36.0643 28.0978 34.1412 25.2544 31.3828 23.9852V21.3954L29.1826 20.1258L26.917 21.4344V23.3768C26.1765 23.4964 25.4707 23.7227 24.8135 24.0379V20.5379L22.2363 19.0506V18.8739L19.6074 20.3924V23.7479L22.5117 25.4247L23.3926 24.9159C22.7474 25.4165 22.1796 26.0162 21.71 26.6932L18.1074 24.6141V20.0233C19.7036 18.5376 21.6191 17.4067 23.7363 16.7557V17.6903L26.5654 19.3241L29.0029 17.9168V16.1659ZM33.623 22.4403V25.2284L35.8701 26.5262L38.3457 25.0975L38.6924 25.2967V22.1581L36.4014 20.8358L33.623 22.4403Z" fill="url(#l3)"/>
<defs>
<linearGradient id="l0" x1="41.3439" y1="45.3391" x2="35.8561" y2="42.1572" gradientUnits="userSpaceOnUse"><stop stop-color="#00C775"/><stop offset="1" stop-color="#03794E"/></linearGradient>
<linearGradient id="l1" x1="38.5273" y1="18.2219" x2="20.5466" y2="43.5809" gradientUnits="userSpaceOnUse"><stop offset="0.214117" stop-color="#00C775"/><stop offset="0.656486" stop-color="#3AE9A1"/></linearGradient>
<linearGradient id="l2" x1="8.31105" y1="16.9297" x2="33.0561" y2="52.8686" gradientUnits="userSpaceOnUse"><stop stop-color="#24FFA5"/><stop offset="0.429418" stop-color="#00C775"/></linearGradient>
<linearGradient id="l3" x1="38.5296" y1="18.2211" x2="20.5466" y2="43.5817" gradientUnits="userSpaceOnUse"><stop offset="0.117871" stop-color="#00AF67"/><stop offset="0.575387" stop-color="#3AE9A1"/></linearGradient>
</defs></svg>`;

const W = 300;
const H = 360;
const CX = W / 2;
const CY = H / 2 + 10;
const TOTAL = 2400;

function svgToImg(str: string) {
  const blob = new Blob([str], { type: "image/svg+xml" });
  const img = new Image();
  img.src = URL.createObjectURL(blob);
  return img;
}

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function easeOutBack(t: number) {
  const c = 2.70158;
  return 1 + c * Math.pow(t - 1, 3) + (c - 1) * Math.pow(t - 1, 2);
}
function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}
function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

interface Piece {
  img: HTMLCanvasElement;
  sx: number; sy: number; sw: number; sh: number;
  x: number; y: number; vx: number; vy: number;
  rot: number; rotV: number; alpha: number; pw: number; ph: number;
}

interface Spark {
  x: number; y: number; vx: number; vy: number;
  r: number; color: string; life: number; decay: number;
}

interface SplashScreenProps {
  fadingOut: boolean;
  onAnimationDone: () => void;
}

export function SplashScreen({ fadingOut, onAnimationDone }: SplashScreenProps) {
  const bgRef = useRef<HTMLCanvasElement>(null);
  const mainRef = useRef<HTMLCanvasElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bgEl = bgRef.current;
    const mainEl = mainRef.current;
    const wordmarkEl = wordmarkRef.current;
    if (!bgEl || !mainEl || !wordmarkEl) return;

    const bgCtx = bgEl.getContext("2d");
    const ctx = mainEl.getContext("2d");
    if (!bgCtx || !ctx) return;

    let animId: number | null = null;
    let pieces: Piece[] = [];
    let sparks: Spark[] = [];
    let shockwave: { r: number; life: number } | null = null;

    const charImg = svgToImg(CHAR_SVG);
    const logoImg = svgToImg(LOGO_SVG);

    function resizeBg() {
      bgEl!.width = window.innerWidth;
      bgEl!.height = window.innerHeight;
    }

    function buildPieces() {
      const oc = document.createElement("canvas");
      oc.width = 188;
      oc.height = 138;
      oc.getContext("2d")!.drawImage(charImg, 0, 0, 188, 138);
      pieces = [];
      const COLS = 5, ROWS = 4;
      const pw = 188 / COLS, ph = 138 / ROWS;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const sx = c * pw, sy = r * ph;
          const pcx = sx + pw / 2 - 94;
          const pcy = sy + ph / 2 - 69;
          const dist = Math.sqrt(pcx * pcx + pcy * pcy) + 1;
          const spd = 2.8 + Math.random() * 5;
          pieces.push({
            img: oc,
            sx, sy, sw: pw, sh: ph,
            x: CX - 94 + sx + pw / 2,
            y: CY - 69 + sy + ph / 2,
            vx: (pcx / dist) * spd + (Math.random() - 0.5) * 2,
            vy: (pcy / dist) * spd - Math.random() * 3.5,
            rot: 0, rotV: (Math.random() - 0.5) * 0.4,
            alpha: 1, pw, ph,
          });
        }
      }
    }

    function buildSparks() {
      const cols = ["#00C775", "#3AE9A1", "#FFD23F", "#FFF38B", "#00EC8B", "#FABC27", "#ffffff"];
      for (let i = 0; i < 70; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = 1.5 + Math.random() * 7.5;
        sparks.push({
          x: CX, y: CY,
          vx: Math.cos(a) * s, vy: Math.sin(a) * s - Math.random() * 3,
          r: 1 + Math.random() * 3,
          color: cols[Math.floor(Math.random() * cols.length)],
          life: 1, decay: 0.016 + Math.random() * 0.024,
        });
      }
    }

    function drawShockwave(sw: { r: number; life: number } | null) {
      if (!sw || sw.life <= 0) return;
      const cx = bgEl!.width / 2;
      const cy = bgEl!.height / 2;
      bgCtx!.save();
      bgCtx!.beginPath();
      bgCtx!.arc(cx, cy, sw.r, 0, Math.PI * 2);
      bgCtx!.strokeStyle = `rgba(0,199,117,${sw.life * 0.55})`;
      bgCtx!.lineWidth = sw.life * 10;
      bgCtx!.stroke();
      bgCtx!.restore();
    }

    function run() {
      if (animId) cancelAnimationFrame(animId);
      pieces = []; sparks = []; shockwave = null;
      ctx!.clearRect(0, 0, W, H);
      bgCtx!.clearRect(0, 0, bgEl!.width, bgEl!.height);
      wordmarkEl!.style.opacity = "0";
      wordmarkEl!.style.transform = "translateX(-50%) translateY(0px)";

      const T_APPEAR_END = 550;
      const T_WOBBLE_END = 820;
      const T_BURST = 820;
      const T_LOGO_IN = 900;
      const T_LOGO_END = 1280;
      const T_NAME_IN = 1200;
      const T_NAME_END = 1600;

      let burstDone = false;
      const t0 = performance.now();

      function frame(now: number) {
        const t = now - t0;
        ctx!.clearRect(0, 0, W, H);
        bgCtx!.clearRect(0, 0, bgEl!.width, bgEl!.height);

        if (t > T_BURST && t < T_BURST + 700) {
          const gp = clamp((t - T_BURST) / 500, 0, 1);
          const peak = Math.sin(gp * Math.PI);
          const gr = bgCtx!.createRadialGradient(
            bgEl!.width / 2, bgEl!.height / 2, 0,
            bgEl!.width / 2, bgEl!.height / 2, 200 * peak + 60
          );
          gr.addColorStop(0, `rgba(0,199,117,${0.20 * peak})`);
          gr.addColorStop(0.5, `rgba(255,210,63,${0.07 * peak})`);
          gr.addColorStop(1, "rgba(0,0,0,0)");
          bgCtx!.fillStyle = gr;
          bgCtx!.fillRect(0, 0, bgEl!.width, bgEl!.height);
        }

        if (shockwave) {
          shockwave.r += 16;
          shockwave.life -= 0.055;
          drawShockwave(shockwave);
          if (shockwave.life <= 0) shockwave = null;
        }

        if (t < T_APPEAR_END) {
          const p = clamp(t / T_APPEAR_END, 0, 1);
          const ep = easeOutBack(p);
          ctx!.save();
          ctx!.globalAlpha = clamp(p * 2.5, 0, 1);
          ctx!.translate(CX, CY);
          ctx!.scale(lerp(0.4, 1, ep), lerp(0.4, 1, ep));
          ctx!.drawImage(charImg, -94, -69, 188, 138);
          ctx!.restore();
        }

        if (t >= T_APPEAR_END && t < T_WOBBLE_END) {
          const p = (t - T_APPEAR_END) / (T_WOBBLE_END - T_APPEAR_END);
          const w = Math.sin(p * Math.PI * 5) * 0.07 * (1 - p);
          ctx!.save();
          ctx!.globalAlpha = 1;
          ctx!.translate(CX, CY);
          ctx!.scale(1 - w, 1 + w);
          ctx!.drawImage(charImg, -94, -69, 188, 138);
          ctx!.restore();
          if (p > 0.4) {
            const gp = (p - 0.4) / 0.6;
            const gr = bgCtx!.createRadialGradient(bgEl!.width / 2, bgEl!.height / 2, 0, bgEl!.width / 2, bgEl!.height / 2, 90 * gp);
            gr.addColorStop(0, `rgba(255,220,50,${0.18 * gp})`);
            gr.addColorStop(1, "rgba(0,0,0,0)");
            bgCtx!.fillStyle = gr;
            bgCtx!.fillRect(0, 0, bgEl!.width, bgEl!.height);
          }
        }

        if (t >= T_BURST && !burstDone) {
          burstDone = true;
          buildPieces();
          buildSparks();
          shockwave = { r: 12, life: 1 };
        }

        if (burstDone) {
          const elapsed = t - T_BURST;
          pieces.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.22;
            p.vx *= 0.96;
            p.rot += p.rotV;
            p.alpha = clamp(1 - elapsed / 400, 0, 1);
            if (p.alpha <= 0) return;
            ctx!.save();
            ctx!.globalAlpha = p.alpha;
            ctx!.translate(p.x, p.y);
            ctx!.rotate(p.rot);
            ctx!.drawImage(p.img, p.sx, p.sy, p.sw, p.sh, -p.pw / 2, -p.ph / 2, p.pw, p.ph);
            ctx!.restore();
          });
          sparks.forEach((s) => {
            s.x += s.vx; s.y += s.vy;
            s.vy += 0.13; s.vx *= 0.97;
            s.life -= s.decay;
            if (s.life <= 0) return;
            ctx!.save();
            ctx!.globalAlpha = s.life;
            ctx!.beginPath();
            ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx!.fillStyle = s.color;
            ctx!.fill();
            ctx!.restore();
          });
          sparks = sparks.filter((s) => s.life > 0);
        }

        if (t >= T_LOGO_IN) {
          const p = clamp((t - T_LOGO_IN) / (T_LOGO_END - T_LOGO_IN), 0, 1);
          const sc = easeOutBack(p);
          const al = easeOutExpo(p);
          const rp = clamp((t - T_LOGO_IN) / 800, 0, 1);
          const ry = lerp(0, -18, easeOutExpo(rp));
          ctx!.save();
          ctx!.globalAlpha = al;
          ctx!.translate(CX, CY + ry);
          ctx!.scale(sc, sc);
          ctx!.drawImage(logoImg, -48, -48, 96, 96);
          ctx!.restore();
        }

        if (t >= T_NAME_IN) {
          const p = clamp((t - T_NAME_IN) / (T_NAME_END - T_NAME_IN), 0, 1);
          const rp = clamp((t - T_LOGO_IN) / 800, 0, 1);
          const ry = lerp(0, -18, easeOutExpo(rp));
          wordmarkEl!.style.opacity = String(easeOutQuart(p));
          wordmarkEl!.style.transform = `translateX(-50%) translateY(${ry}px)`;
        }

        if (t < TOTAL) {
          animId = requestAnimationFrame(frame);
        } else {
          animId = null;
          onAnimationDone();
        }
      }

      animId = requestAnimationFrame(frame);
    }

    resizeBg();
    window.addEventListener("resize", resizeBg);

    Promise.all([
      new Promise<void>((resolve) => {
        charImg.onload = () => resolve();
        if (charImg.complete) resolve();
      }),
      new Promise<void>((resolve) => {
        logoImg.onload = () => resolve();
        if (logoImg.complete) resolve();
      }),
    ]).then(() => setTimeout(run, 200));

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("resize", resizeBg);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${styles.splash} ${fadingOut ? styles.fadeOut : ""}`}>
      <canvas ref={bgRef} className={styles.bg} />
      <div className={styles.stage}>
        <canvas ref={mainRef} className={styles.main} width={W} height={H} />
        <div ref={wordmarkRef} className={styles.wordmark}>
          <span className={styles.name}>Baro</span>
          <span className={styles.sub}>posture correction</span>
        </div>
      </div>
    </div>
  );
}
