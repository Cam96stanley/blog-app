export interface Author {
  id: string;
  name: string;
  username: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  is_archived: boolean;
  created_at: string;
  updated_at: string;
  author: Author;
}

export interface BlogCardProps {
  posts: Post[];
}
