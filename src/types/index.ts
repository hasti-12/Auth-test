export type TUser = {
    name: {
        first: string;
        last: string;
    };
    email: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    phoneNumber?: string;
}


export type TApiResponse = {
    results: TUser[];
    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
    };
}
