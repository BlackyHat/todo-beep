export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
  title: string;
}

export interface ISectionProps {
  children: React.ReactNode;
}

export interface ITodoListProps {
  task: ITodo;
}
export interface IAddToastProps {
  info: string;
}

export interface IRegisterValues {
  name?: string;
  password: string;
  email: string;
}

export interface IUser {
  name: string | undefined | null;
  email: string | undefined | null;
}
export interface IAuthState {
  user: IUser;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export interface RouteProps {
  component: React.FC;
  redirectTo: string;
}
