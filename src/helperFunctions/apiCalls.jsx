import axios from "axios";
import React from "react";
import { turnQuotesIntoCards } from "./turnQuotesIntoCards";

const axiosSearchForAnimeApiCall = async (input) => {
  if (!input) {
    input = "naruto";
  }
  const url = `https://animechan.vercel.app/api/random/anime?title=${input}`;
  return await axios({
    method: "get",
    url: url,
    responseType: "json",
  })
    .then((response) => {
      // handle success
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      // handle error
      throw error;
    })
    .finally(() => {
      // always executed
    });
};
const axiosRandomAnimeQuoteCall = async () => {
  const url = `https://animechan.vercel.app/api/random/`;
  return await axios({
    method: "get",
    url: url,
    responseType: "json",
  })
    .then((response) => {
      // handle success
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      // handle error
      throw error;
    })
    .finally(() => {
      // always executed
    });
};
export const searchForNewQuoteApiCall = async (searchInput) => {
  let arrayOfQuoteObject = [];
  let response;
  if (searchInput === undefined) {
    // gives a random quote as there should be no input at first
    response = axiosRandomAnimeQuoteCall();
  } else {
    response = await axiosSearchForAnimeApiCall(searchInput);
  }
  arrayOfQuoteObject.push(response);
  const cards = await turnQuotesIntoCards(arrayOfQuoteObject);
  return cards;
};
