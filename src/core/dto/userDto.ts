interface IUser {
  username?: string | null;
  age?: number | null;
}

/**
 * Represents a user data transfer object.
 */
class UserDto {
  username: string | null;
  age: number | null;

  constructor(user?: IUser) {
    this.username = user?.username ?? "";
    this.age = user?.age ?? null;
  }
}

export { UserDto };
