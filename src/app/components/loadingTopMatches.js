"use client";

import React, { useEffect, useState } from "react";

const LoadingTopMatches = () => {
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    // Generate a random duration between 1s (1000ms) and 2s (2000ms)
    const randomDuration = Math.random() * 4000 + 1000;
    setDuration(randomDuration);

    // Animate the progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1; // Increment progress by 1% on each tick
      });
    }, randomDuration / 1000000); // Adjust interval based on duration

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="loading-container">

      <div className="loading-content">
        <h1 className="matches-title">Finding Your Top Matches</h1>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{
              width: `${progress}%`,
              transition: `width ${duration}ms ease-in-out`,


            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingTopMatches;
