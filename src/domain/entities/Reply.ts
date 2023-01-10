import { Nullish } from "@type/nullish";


export interface ReplyProps {
  id: number;
  userId: number;
  tweetId: number;
  content: string;
  midia: Nullish<string>;
  postedAt: Date;
}

export class Reply {
  constructor(private props: ReplyProps) {}

  get id(): number {
    return this.props.id;
  }

  get userId(): number {
    return this.props.userId;
  }

  get tweetId(): number {
    return this.props.tweetId;
  }
  get content(): string {
    return this.props.content;
  }
  get midia(): Nullish<string> {
    return this.props.midia;
  }
  get postedAt(): Date {
    return this.props.postedAt;
  }
}