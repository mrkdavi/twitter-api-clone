import { Nullish } from "@type/nullish";

export interface TweetProps {
  id: number;
  userId: number;
  content: Nullish<string>;
  midia: Nullish<string>;
  postedAt: Date;
}

export class Tweet {
  constructor(private props: TweetProps) {}

  get id(): number {
    return this.props.id;
  }

  get userId(): number {
    return this.props.userId;
  }

  get content(): Nullish<string> {
    return this.props.content;
  }

  get midia(): Nullish<string> {
    return this.props.midia;
  }

  get postedAt(): Date {
    return this.props.postedAt;
  }
}