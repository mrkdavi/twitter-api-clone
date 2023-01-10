export interface LikeProps {
  userId: number;
  tweetId: number;
  createdAt: Date;
}

export class Like {
  constructor(private props: LikeProps) {}

  get userId(): number {
    return this.props.userId;
  }

  get tweetId(): number {
    return this.props.tweetId;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}