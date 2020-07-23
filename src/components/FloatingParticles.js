import React from "react";
import * as _ from "lodash";
export let ParticleArray = [];

// Particle Object, contains values
export const ParticleObject = (x, y, directionX, directionY, size, color) => ({
  x,
  y,
  directionX,
  directionY,
  size,
  color,
});

// Draw Method
export const DrawParticle = ({ particle }) => {
  let { x, y, size, color } = particle;
  const [pos, setPos] = React.useState({ x, y });
  React.useEffect(() => {
    let interval = null;
    let updatePos = () => {
      let x = Math.random() * window.innerWidth - size * 2;
      let y = Math.random() * window.innerHeight - size * 2;
      let directionX = Math.random() * 0.4 - 0.2;
      let directionY = Math.random() * 0.4 - 0.2;
      if (x + size > window.innerWidth || x - size < 0) {
        directionX = -directionX;
      }
      if (y + size > window.innerHeight || y - size < 0) {
        directionX = -directionY;
      }
      x += directionX;
      y += directionY;
      setPos({ x, y });
    };
    setTimeout(() => updatePos(), 300);
    interval = setInterval(() => {
      updatePos();
    }, 5000);
    return () => clearInterval(interval);
  }, [size]);
  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: "50%",
        width: size + "px",
        height: size + "px",
        position: "absolute",
        left: pos.x + "px",
        top: pos.y + "px",
        zIndex: -100,
        opacity: 0.2,
        transition: "all 5200ms linear",
      }}
    />
  );
};

// Update Method
export const UpdateParticle = ({ particle }) => {
  let { x, y, directionX, directionY, size } = particle;
  if (x + size > window.innerWidth || x - size < 0) {
    directionX = -directionX;
  }
  if (y + size > window.innerHeight || y - size < 0) {
    directionX = -directionY;
  }
  x += directionX;
  y += directionY;

  return <DrawParticle particle={particle} />;
};

// Animate Particles
export const RunParticleSim = () => {
  PopulateParticleArray(100, window.innerWidth, window.innerHeight);
  return _.map(ParticleArray, (item, id) => (
    <UpdateParticle key={`particle:${id}`} particle={item} />
  ));
};

// Add to Particle Array
export const PopulateParticleArray = (amount, screenWidth, screenHeight) => {
  ParticleArray = [];
  for (let i = 0; i < amount; i++) {
    let size = Math.random() * 12;
    let x = Math.random() * screenWidth - size * 2;
    let y = Math.random() * screenHeight - size * 2;
    let directionX = Math.random() * 0.4 - 0.2;
    let directionY = Math.random() * 0.4 - 0.2;
    let color = "#" + (((1 << 24) * Math.random()) | 0).toString(16);

    ParticleArray.push(
      ParticleObject(x, y, directionX, directionY, size, color)
    );
  }
};
