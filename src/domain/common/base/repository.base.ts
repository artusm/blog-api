export abstract class CreateEntity<T, Dto> {
  abstract create(data: Dto): Promise<T>;
}

export abstract class FindAllEntity<T, Query = void> {
  abstract findAll(data: Query): Promise<T[]>;
}

export abstract class FindOneEntity<T, Param> {
  abstract findOne(data: Param): Promise<T>;
}

export abstract class UpdateEntity<T, Dto> {
  abstract update(id: number, data: Dto): Promise<T>;
}

export abstract class DeleteEntity<T> {
  abstract delete(id: number): Promise<T>;
}
