import React from "react";
import axios from "axios";


class Api {
    constructor(){

    }

    PetRegisterPost = (pet_data) => {
        const baseURL = "http://localhost:8000/api/pet-register/";
        const data = {
            "name": pet_data.name,
            "specie": pet_data.specie,
            "race": pet_data.race,
            "age": pet_data.age,
        };
        const response = axios.post(baseURL, data)
            .then(response => console.log(response.data));
    }
    SpeciesListGet = (setSpeciesOptions) => {

        const response = axios.get('http://localhost:8000/api/species-list/')
        .then(response => {
            console.log(response.data)
          setSpeciesOptions(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
    
}


export default new Api();