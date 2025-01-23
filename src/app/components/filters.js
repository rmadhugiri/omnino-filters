"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";


const Filters = () => {
  const router = useRouter();

  const [filters, setFilters] = useState({
    pythonExperience: "Low",
    awsKnowledge: "Medium",
    dataPipelines: "High",
    proximity: "Low",
  });

  const handleDone = () => {
    router.push("/loading"); // Navigate to the new page
  };

  const handleSelection = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const getSliderPosition = (field) => {
    if (filters[field] === "Low") return "0";
    if (filters[field] === "Medium") return "33.33%";
    if (filters[field] === "High") return "66.66%";
  };

  const sliderFields = [
    { label: "Python Experience", field: "pythonExperience" },
    { label: "AWS Knowledge", field: "awsKnowledge" },
    { label: "Experience With Data Pipelines", field: "dataPipelines" },
    { label: "Proximity To Location", field: "proximity" },
  ];

  return (
    <div className="filters-container">
      <div className="filters-box">
        <h2 className="filters-title">Let’s Customize Your Algorithm</h2>
        <p className="filters-description">
          Use the sliders below to indicate how important each factor is for you
          when hiring for this role.
        </p>

        {sliderFields.map(({ label, field }) => (
          <div key={field} className="filters-slider-group">
            <label className="filters-slider-label">{label}</label>
            <div className="slider-container">
              <div
                className="slider-background"
                style={{
                  left: getSliderPosition(field),
                }}
              ></div>
              {["Low", "Medium", "High"].map((option) => (
                <div
                  key={option}
                  className={`slider-option ${
                    filters[field] === option ? "selected" : ""
                  }`}
                  onClick={() => handleSelection(field, option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="filters-navigation">
          <button className="filters-button-back">Back</button>
          <button 
          
          className="filters-button-done"
          onClick={handleDone}

          
          >Done</button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
