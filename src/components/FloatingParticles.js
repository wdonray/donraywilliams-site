import React from "react";
import * as _ from "lodash";
import { Transition, animated } from "react-spring/renderprops";

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
  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: "50%",
        width: size + "px",
        height: size + "px",
        position: "absolute",
        left: x + "px",
        top: y + "px",
        zIndex: -100,
        opacity: 0.2
      }}
    />
  );
};

// Update Method
export const UpdateParticle = ({ particle, screenWidth, screenHeight }) => {
  let { x, y, directionX, directionY, size } = particle;
  if (x + size > screenWidth || x - size < 0) {
    directionX = -directionX;
  }
  if (y + size > screenHeight || y - size < 0) {
    directionX = -directionY;
  }
  x += directionX;
  y += directionY;

  return <DrawParticle particle={particle} />;
};

// Animate Particles
export const RunParticleSim = ({ screenWidth, screenHeight }) => {
  PopulateParticleArray(100, window.innerWidth, window.innerHeight);
  return _.map(ParticleArray, (item, id) => (
    <UpdateParticle
      key={`particle:${id}`}
      particle={item}
      screenWidth={screenWidth}
      screenHeight={screenHeight}
    />
  ));
};

// Add to Particle Array
export const PopulateParticleArray = (amount, screenWidth, screenHeight) => {
  ParticleArray = [];
  for (let i = 0; i < amount; i++) {
    let size = Math.random() * 20;
    let x = Math.random() * screenWidth - size * 2;
    let y = Math.random() * screenHeight - size * 2;
    let directionX = Math.random() * 0.4 - 0.2;
    let directionY = Math.random() * 0.4 - 0.2;
    let color = "#"+((1<<24)*Math.random()|0).toString(16);

    ParticleArray.push(
      ParticleObject(x, y, directionX, directionY, size, color)
    );
  }
};
