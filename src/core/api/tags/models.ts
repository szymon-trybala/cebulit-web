export interface Tag {
  id: number;
  name: string;
}

export interface TagMatch {
  tag: Tag;
  matchLevel: number;
}
