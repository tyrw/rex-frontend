
    export interface Artist {
        id: number;
        createDateTime: Date;
        internalComment?: any;
        title: string;
    }

    export interface Track {
        id: number;
        createDateTime: Date;
        internalComment?: any;
        title: string;
        audio: string;
        side: string;
    }

    export interface Genre {
        id: number;
        createDateTime: Date;
        internalComment?: any;
        title: string;
    }

    export interface Release {
        id: number;
        createDateTime: Date;
        internalComment?: string;
        isInStock: boolean;
        title: string;
        description: string;
        price: number;
        cover: string;
        artists: Artist[];
        tracks: Track[];
        genres: Genre[];
    }



