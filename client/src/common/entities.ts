export interface UserEntity {
    id: string;
    login: string;
    email: string;
    role: string; // TODO Add roles enum
    avatar: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ZoneEntity {
    id: string;
    zone_name: string;
    disp_name: string;
    description: string;
    government_type: string;
    emblem_img: string;
    tags: string; // TODO ARRAY?
}

export interface TagEntity {
    id: string;
    name: string;
    code_name: string;
    related_tags: [];
    child_tags: [];
    color: string;
}

export interface ArticleEntity {
    id: string;
    title: string;
    type: string;
    content: string;
    author: string;
    isApproved: boolean;
    likedBy: string[];
    comments: [];
    tags: [];
    createdAt: Date;
    updatedAt: Date;
}
