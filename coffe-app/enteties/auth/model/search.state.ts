import AsyncStorage from "@react-native-async-storage/async-storage";
import { isLoaded, isLoading } from "expo-font";
import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import { atom } from "jotai";
import { API } from "../api/api";
import axios, { AxiosError } from "axios";
import { SearchRequest, SearchResponse } from "./search.interfaces";
import { useEffect } from "react";

const storage = createJSONStorage<SearchState>(() => AsyncStorage);

export const searchAtom = atomWithStorage('search', {
    type: null,
    name: null,
    subTitle: null,
    description: null,
    rating: null,
    price: null,
    image: null,
    isLoading: false,
    error: null
 },
   storage,
);

export const searchtestAtom = atomWithStorage('test', {coffe: null})

export const getCoffeAtom = atom((get) => get(searchAtom), async (_get,set, { type, text }: SearchRequest) => {
    set(searchAtom, {
        type: null,
        name: null,
        subTitle: null,
        description: null,
        rating: null,
        price: null,
        image: null,
        isLoading: true,
        error: null
    })

    try{
        const { data } = await axios.get<SearchResponse>(API.getCoffe, {params: {
            type,
            text,
          }})
        set(searchAtom, {
            type: data.type,
            name: data.name,
            subTitle: data.subTitle,
            description: data.description,
            rating: data.rating,
            price: data.price,
            image: data.image,
            isLoading: false,
            error: null
        })
    }

    catch(error) {
        if (error instanceof AxiosError){
            set(searchAtom, {
                type: null,
                name: null,
                subTitle: null,
                description: null,
                rating: null,
                price: null,
                image: null,
                isLoading: false,
                error: error.response?.data.message
            })
        }
        
    }
        
})



export interface SearchState {
    type: string | null,
    name: string | null,
    subTitle: string | null,
    price: number | null,
    image: string | null,
    description: string | null,
    rating: string | null,
    isLoading: boolean;
    error: string | null;
}
