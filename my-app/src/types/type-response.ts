export interface StackType {
  name: string;
  srcImg: string;
  srcDocumentation: string;
}

export interface StackResponseType {
  frontEnd: StackType[];
  backEnd: StackType[];
  tools: StackType[];
}

export interface ProjectType {
  name: string;
  description: string;
  srcImg: string;
  linkPage: string;
  linkRepo: string;
}
