export interface SignUpData {
  name: string;
  nickname: string;
  email: string;
  password: string;
  bio?: string;
  avatar?: string;
  location?: string;
  website?: string;
  birthDate: Date;
}