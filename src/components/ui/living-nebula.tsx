import { useEffect, useRef, useState } from "react";

type LivingNebulaShaderProps = {
  className?: string;
};

export default function LivingNebulaShader({ className = "" }: LivingNebulaShaderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;

    void import("three").then((THREE) => {
      const container = containerRef.current;
      if (!container || disposed) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const clock = new THREE.Clock();

      const vertexShader = `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `;

      const fragmentShader = `
        precision highp float;
        uniform vec2 iResolution;
        uniform float iTime;
        uniform vec2 iMouse;

        float random(vec2 st) {
          return fract(
            sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123
          );
        }

        float noise(vec2 p) {
          vec2 i = floor(p), f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(random(i), random(i + vec2(1.0, 0.0)), u.x),
            mix(random(i + vec2(0.0, 1.0)), random(i + vec2(1.0, 1.0)), u.x),
            u.y
          );
        }

        float fbm(vec2 p) {
          float v = 0.0;
          float a = 0.5;
          for (int i = 0; i < 6; i++) {
            v += a * noise(p);
            p *= 2.0;
            a *= 0.5;
          }
          return v;
        }

        void main() {
          vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
          vec2 mouse = (iMouse - 0.5 * iResolution.xy) / iResolution.y;
          float t = iTime * 0.1;

          float md = length(uv - mouse);
          vec2 offset = normalize(uv - mouse + 0.0001) / (md * 50.0 + 0.02);
          uv += offset * smoothstep(0.3, 0.0, md);

          float angle = t * 0.3;
          mat2 rot = mat2(
            cos(angle), -sin(angle),
            sin(angle),  cos(angle)
          );
          vec2 p = rot * uv;

          float c1 = fbm(p * 2.0 + vec2(t, -t));
          float c2 = fbm(p * 4.0 - vec2(-t, t));

          vec3 deepSpace = vec3(0.0, 0.0, 0.05);
          vec3 gasColor1 = vec3(0.8, 0.2, 0.5);
          vec3 gasColor2 = vec3(0.2, 0.3, 0.9);
          vec3 color = deepSpace;

          color = mix(color, gasColor1, smoothstep(0.4, 0.6, c1));
          color = mix(color, gasColor2, smoothstep(0.5, 0.7, c2) * 0.5);

          float vignette = smoothstep(1.2, 0.15, length(uv));
          color *= 0.72 + vignette * 0.5;

          gl_FragColor = vec4(color, 1.0);
        }
      `;

      const uniforms = {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2() },
        iMouse: { value: new THREE.Vector2(-100, -100) },
      };

      const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
      scene.add(mesh);

      const onResize = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        uniforms.iResolution.value.set(width, height);
      };

      const onMouseMove = (event: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = rect.height - (event.clientY - rect.top);
        uniforms.iMouse.value.set(x, y);
        setMousePos({ x: event.clientX, y: event.clientY });
      };

      window.addEventListener("resize", onResize);
      window.addEventListener("mousemove", onMouseMove);
      onResize();

      if (reduceMotion) {
        renderer.render(scene, camera);
      } else {
        renderer.setAnimationLoop(() => {
          uniforms.iTime.value = clock.getElapsedTime();
          renderer.render(scene, camera);
        });
      }

      cleanup = () => {
        window.removeEventListener("resize", onResize);
        window.removeEventListener("mousemove", onMouseMove);
        renderer.setAnimationLoop(null);
        renderer.domElement.remove();
        material.dispose();
        mesh.geometry.dispose();
        renderer.dispose();
      };
    });

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className={`absolute inset-0 overflow-hidden ${className}`}
        aria-label="Living Nebula animated background"
      />
      <div
        className="pointer-events-none fixed left-0 top-0 z-[60] h-5 w-5 rounded-full bg-white/30 blur-[1px] mix-blend-screen transition-transform duration-75"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        aria-hidden="true"
      />
    </>
  );
}
