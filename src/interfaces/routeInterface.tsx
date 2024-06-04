export interface RouteElement {
    _id: string;
    category: Category;
    name: string;
    description: string;
    author: Author;
    img: string;
    imgs: [string];
    imgMap: string;
    province: Province;
    address: string[];
    // location: any[];
    trail: any[]
    state: boolean;
    hidden: boolean;
    comments: number;
    createdAt: string;
    updatedAt: string;
    body?: string;
    like: Like[];
    numLikes: number;
    ubication: {
        type: String,
        coordinates: number[]
    },
    location: Location[];
    uid: string;
    delay: number;
}
type Like = {
    _id: string,
    img?: string,
}

export interface Author {
    _id: string;
    name: string;
    img: string;
}

export interface Category {
    _id: string;
    name: string;
}
export interface Province {
    _id: string;
    name: string;
}