import { atom } from "jotai";
import { CoffeModel } from "./coffe.model";


export const coffeAtom = atom<CoffeState>({
    coffe: {
        id: 1,
        name: 'Капучино'
    },
    isLoading: false,
    error: null
})

export interface CoffeState {
    coffe: CoffeModel | null;
    isLoading: boolean;
    error: string | null;
}