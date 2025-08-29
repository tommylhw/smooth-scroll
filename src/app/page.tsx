'use client';

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
// components
import MouseMoveSection from "@/components/MouseMoveSection";
import Cursor from "@/components/Cursor";

/* import { getSEOTags } from "@/libs/seo";
export const metadata = getSEOTags({
  title: `Profile | ${config.appName}`,
  canonicalUrlRelative: "/profile",
}); */

export default function Home() {

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size

      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options = useMemo(() => ({
    particles: {
      destroy: {
        mode: "split",
        split: {
          count: 1,
          factor: {
            value: {
              min: 2,
              max: 4
            }
          },
          rate: {
            value: 100
          },
          particles: {
            life: {
              count: 1,
              duration: {
                value: {
                  min: 2,
                  max: 3
                }
              }
            },
            move: {
              speed: {
                min: 10,
                max: 15
              }
            }
          }
        }
      },
      number: {
        value: 80
      },
      color: {
        value: [
          "#212529",
          "#343a40",
          "#495057",
          "#6c757d",
          "#adb5bd",
          "#ced4da",
          "#dee2e6",
          "#e9ecef",
          "#f8f9fa"
        ]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: {
          min: 1,
          max: 3
        }
      },
      collisions: {
        enable: true,
        mode: "bounce"
      },
      move: {
        enable: true,
        speed: 1,
        outModes: "bounce"
      }
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "pop"
        }
      }
    },
    background: {
      // color: "#000000"
    }
  }), []);


  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-slate-800"
      // style={{
      //   backgroundImage: "url('/img/bg.jpeg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundAttachment: "fixed",
      // }}
    >
      
      <main className="flex flex-col justify-items-center items-center w-full">
        { init && <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} /> }
        {Array.from({ length: 3 }, (_, i) => (
          <MouseMoveSection key={i} i={i + 1} />
        ))}
      </main>
    </div>
  );
}
