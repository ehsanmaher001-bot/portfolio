/**
 * ============================================================================
 * PACKAGING 3D INTERACTIVE FOLD ELEMENT — EHSAN MAHER
 * ============================================================================
 * An abstract geometric structure inspired by packaging folds, dielines,
 * and structural paper mechanisms.
 *
 * Lightweight, GPU-accelerated CSS 3D transforms with smooth mouse LERP
 * and scroll-driven fold angle interpolation. Zero heavy 3D library overhead.
 */

(function () {
  'use strict';

  function initPackagingFold() {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = document.getElementById('packaging-3d-stage');
    if (!container) return;

  // Create the 3D Assembly HTML structure
  container.innerHTML = `
    <div class="fold-stage" id="fold-stage">
      <div class="fold-assembly" id="fold-assembly">
        <!-- Main Body Front Panel -->
        <div class="fold-facet facet-front">
          <div class="fold-facet-mark">PANEL A · 120mm</div>
          <div class="reg-mark" style="top: 8px; left: 8px;">
            <svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="6"/><line x1="10" y1="2" x2="10" y2="18"/><line x1="2" y1="10" x2="18" y2="10"/></svg>
          </div>
          <div class="crop-mark crop-tl"></div>
          <div class="crop-mark crop-tr"></div>
          <div class="crop-mark crop-bl"></div>
          <div class="crop-mark crop-br"></div>
        </div>

        <!-- Back Panel -->
        <div class="fold-facet facet-back">
          <div class="fold-facet-mark">PANEL B · 120mm</div>
        </div>

        <!-- Right Side Panel -->
        <div class="fold-facet facet-right">
          <div class="fold-facet-mark">DEPTH 60mm</div>
          <div class="crop-mark crop-tl"></div>
          <div class="crop-mark crop-br"></div>
        </div>

        <!-- Left Side Panel -->
        <div class="fold-facet facet-left">
          <div class="fold-facet-mark">DEPTH 60mm</div>
          <div class="crop-mark crop-tr"></div>
          <div class="crop-mark crop-bl"></div>
        </div>

        <!-- Top Tuck Flap -->
        <div class="fold-facet facet-top">
          <div class="fold-facet-mark">TUCK FLAP · R15</div>
        </div>

        <!-- Bottom Closure Flap -->
        <div class="fold-facet facet-bottom">
          <div class="fold-facet-mark">AUTO-LOCK BASE</div>
        </div>
      </div>
    </div>
  `;

  const assembly = document.getElementById('fold-assembly');
  if (!assembly) return;

  // Mouse & Scroll State variables
  let mouseX = 0;
  let mouseY = 0;
  let targetRotX = -12;
  let targetRotY = 24;
  let currentRotX = -12;
  let currentRotY = 24;
  let scrollProgress = 0;
  let isVisible = true;

  // Window center
  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;

  window.addEventListener('resize', () => {
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;
  }, { passive: true });

  // Mouse tracking with gentle range
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - centerX) / centerX; // -1 to 1
    mouseY = (e.clientY - centerY) / centerY; // -1 to 1

    targetRotY = 24 + mouseX * 28;
    targetRotX = -14 - mouseY * 22;
  }, { passive: true });

  // Scroll tracking for folding progression
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    scrollProgress = Math.min(scrollY / 800, 1);
  }, { passive: true });

  // Visibility optimization (pause when out of view)
  const observer = new IntersectionObserver((entries) => {
    isVisible = entries[0].isIntersecting;
  }, { threshold: 0.1 });
  observer.observe(container);

  // Smooth Render Loop using requestAnimationFrame & LERP
  function renderLoop() {
    if (isVisible) {
      // Linear interpolation (damping factor: 0.06 for creamy editorial weight)
      currentRotX += (targetRotX - currentRotX) * 0.06;
      currentRotY += (targetRotY - currentRotY) * 0.06;

      // Add slight fold unfolding reaction based on scroll
      const foldUnfoldOffset = scrollProgress * 18;
      const finalRotX = currentRotX + foldUnfoldOffset;
      const finalRotY = currentRotY - (scrollProgress * 25);
      const floatOffsetY = Math.sin(Date.now() * 0.0012) * 5;

      assembly.style.transform = `
        translateY(${floatOffsetY}px)
        rotateX(${finalRotX}deg)
        rotateY(${finalRotY}deg)
        scale3d(${1 - scrollProgress * 0.15}, ${1 - scrollProgress * 0.15}, ${1 - scrollProgress * 0.15})
      `;
    }

    requestAnimationFrame(renderLoop);
  }

  requestAnimationFrame(renderLoop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPackagingFold);
  } else {
    initPackagingFold();
  }
})();
