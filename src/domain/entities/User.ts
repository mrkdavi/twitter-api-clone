import { Nullish } from "@type/nullish";

export interface UserProps {
  id?: number;
  name: string;
  nickname: string;
  email: string;
  password: string;
  bio?: Nullish<string>;
  avatar?: Nullish<string>;
  location?: Nullish<string>;
  website?: Nullish<string>;
  birthDate: Date;
  createdAt?: Date;
}

export class User {
  constructor(private props: UserProps) {}

  get id(): number | undefined {
    return this.props.id;
  }
  
  get name(): string {
    return this.props.name;    
  }

  get nickname(): string {
    return this.props.nickname;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  get bio(): Nullish<string> {
    return this.props.bio;
  }

  get avatar(): Nullish<string> {
    return this.props.avatar;
  }

  get location(): Nullish<string> {
    return this.props.location;
  }

  get website(): Nullish<string> {
    return this.props.website;
  }

  get birthDate(): Date {
    return this.props.birthDate;
  }

  get createdAt(): Date | undefined {
    return this.props.createdAt;
  }
}