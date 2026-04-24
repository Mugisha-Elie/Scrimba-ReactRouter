export interface VanShape{
    id: number;
    name: string;
    type: string;
    description: string;
    imageUrl: string;
    price: number
}

export interface VansProps{
    vans: VanShape[]
}