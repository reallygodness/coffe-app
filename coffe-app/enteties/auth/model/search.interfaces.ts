export interface SearchResponse {
    type: string,
    name: string,
    subTitle: string,
    price: number,
    image: string,
    description: string,
    rating: string
}

export interface SearchRequest {
    type?: string,
    text: string
}

