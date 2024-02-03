export interface IPage_Cat {
  page: number;
  cat?: string;
}

export interface ICategory {
  _id: string;
  slug: string;
  title: string;
  img?: string;
  createdAt: string;
}

export interface IPost {
  _id: string;
  slug: string;
  title: string;
  desc: string;
  img: string;
  views: number;
  catSlug: string;
  userEmail: string;
  createdAt: string;
  user: IUser;
  comments: IComment[];
}

export interface IComment {
  _id: string;
  desc: string;
  postSlug: string;
  createdAt: string;
  user: IUser;
}
