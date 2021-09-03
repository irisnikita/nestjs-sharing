export interface TTodo {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  status: TodoStatus;
}

export enum TodoStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
