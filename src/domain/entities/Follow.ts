export interface FollowProps {
  followerId: number;
  followedId: number;
  createdAt: Date;
}

export class Follow {
  constructor(private props: FollowProps) {}

  get followerId(): number {
    return this.props.followerId;
  }

  get followedId(): number {
    return this.props.followedId;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}