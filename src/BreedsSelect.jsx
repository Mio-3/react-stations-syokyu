// @ts-check
import React,{useState} from "react";
import {DogListContainer} from './DogListContainer'

export const BreedsSelect = ({breeds,selectedBreed,onBreedChange}) => {
  return (
      <select value={selectedBreed} onChange={onBreedChange}>
        <option value="">Select a breed</option>
        {breeds && 
        Object.keys(breeds).map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
  );
};

export default BreedsSelect
