export interface StackType {
  name: string;
  srcImg: string;
  bgColor: string;
}

export interface ProjectType {
  name: string;
  description: string;
  srcImg: string;
  linkPage: string;
  linkRepo: string;
  stacksUsed: StackType[];
}
