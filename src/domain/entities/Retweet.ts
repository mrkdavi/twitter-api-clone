import { Nullish } from "@type/nullish";

export interface RetweetProps {
  id: number;
  userId: number;
  tweetId: number;
  content: Nullish<string>;
  midia: Nullish<string>;
  postedAt: Date;
}

export class Retweet {
  constructor(private props: RetweetProps) {}

  get id(): number {
    return this.props.id;
  }

  get tweetId(): number {
    return this.props.tweetId;
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