
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Friendship
 * 
 */
export type Friendship = $Result.DefaultSelection<Prisma.$FriendshipPayload>
/**
 * Model CircleInvite
 * 
 */
export type CircleInvite = $Result.DefaultSelection<Prisma.$CircleInvitePayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Habit
 * 
 */
export type Habit = $Result.DefaultSelection<Prisma.$HabitPayload>
/**
 * Model Circle
 * 
 */
export type Circle = $Result.DefaultSelection<Prisma.$CirclePayload>
/**
 * Model Completion
 * 
 */
export type Completion = $Result.DefaultSelection<Prisma.$CompletionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccountType: {
  CREDENTIALS: 'CREDENTIALS',
  OAUTH: 'OAUTH'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]


export const FriendshipStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED'
};

export type FriendshipStatus = (typeof FriendshipStatus)[keyof typeof FriendshipStatus]


export const InviteStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED'
};

export type InviteStatus = (typeof InviteStatus)[keyof typeof InviteStatus]

}

export type AccountType = $Enums.AccountType

export const AccountType: typeof $Enums.AccountType

export type FriendshipStatus = $Enums.FriendshipStatus

export const FriendshipStatus: typeof $Enums.FriendshipStatus

export type InviteStatus = $Enums.InviteStatus

export const InviteStatus: typeof $Enums.InviteStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendship`: Exposes CRUD operations for the **Friendship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friendships
    * const friendships = await prisma.friendship.findMany()
    * ```
    */
  get friendship(): Prisma.FriendshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.circleInvite`: Exposes CRUD operations for the **CircleInvite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CircleInvites
    * const circleInvites = await prisma.circleInvite.findMany()
    * ```
    */
  get circleInvite(): Prisma.CircleInviteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habit`: Exposes CRUD operations for the **Habit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habits
    * const habits = await prisma.habit.findMany()
    * ```
    */
  get habit(): Prisma.HabitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.circle`: Exposes CRUD operations for the **Circle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Circles
    * const circles = await prisma.circle.findMany()
    * ```
    */
  get circle(): Prisma.CircleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.completion`: Exposes CRUD operations for the **Completion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Completions
    * const completions = await prisma.completion.findMany()
    * ```
    */
  get completion(): Prisma.CompletionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Friendship: 'Friendship',
    CircleInvite: 'CircleInvite',
    Post: 'Post',
    Habit: 'Habit',
    Circle: 'Circle',
    Completion: 'Completion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "friendship" | "circleInvite" | "post" | "habit" | "circle" | "completion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Friendship: {
        payload: Prisma.$FriendshipPayload<ExtArgs>
        fields: Prisma.FriendshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findFirst: {
            args: Prisma.FriendshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findMany: {
            args: Prisma.FriendshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          create: {
            args: Prisma.FriendshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          createMany: {
            args: Prisma.FriendshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          delete: {
            args: Prisma.FriendshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          update: {
            args: Prisma.FriendshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          deleteMany: {
            args: Prisma.FriendshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          upsert: {
            args: Prisma.FriendshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          aggregate: {
            args: Prisma.FriendshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendship>
          }
          groupBy: {
            args: Prisma.FriendshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendshipCountArgs<ExtArgs>
            result: $Utils.Optional<FriendshipCountAggregateOutputType> | number
          }
        }
      }
      CircleInvite: {
        payload: Prisma.$CircleInvitePayload<ExtArgs>
        fields: Prisma.CircleInviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CircleInviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleInvitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CircleInviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleInvitePayload>
          }
          findFirst: {
            args: Prisma.CircleInviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleInvitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CircleInviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleInvitePayload>
          }
          findMany: {
            args: Prisma.CircleInviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleInvitePayload>[]
          }
          create: {
            args: Prisma.CircleInviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleInvitePayload>
          }
          createMany: {
            args: Prisma.CircleInviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CircleInviteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleInvitePayload>[]
          }
          delete: {
            args: Prisma.CircleInviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleInvitePayload>
          }
          update: {
            args: Prisma.CircleInviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleInvitePayload>
          }
          deleteMany: {
            args: Prisma.CircleInviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CircleInviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CircleInviteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleInvitePayload>[]
          }
          upsert: {
            args: Prisma.CircleInviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleInvitePayload>
          }
          aggregate: {
            args: Prisma.CircleInviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCircleInvite>
          }
          groupBy: {
            args: Prisma.CircleInviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CircleInviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CircleInviteCountArgs<ExtArgs>
            result: $Utils.Optional<CircleInviteCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Habit: {
        payload: Prisma.$HabitPayload<ExtArgs>
        fields: Prisma.HabitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findFirst: {
            args: Prisma.HabitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findMany: {
            args: Prisma.HabitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          create: {
            args: Prisma.HabitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          createMany: {
            args: Prisma.HabitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          delete: {
            args: Prisma.HabitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          update: {
            args: Prisma.HabitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          deleteMany: {
            args: Prisma.HabitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          upsert: {
            args: Prisma.HabitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          aggregate: {
            args: Prisma.HabitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabit>
          }
          groupBy: {
            args: Prisma.HabitGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitCountArgs<ExtArgs>
            result: $Utils.Optional<HabitCountAggregateOutputType> | number
          }
        }
      }
      Circle: {
        payload: Prisma.$CirclePayload<ExtArgs>
        fields: Prisma.CircleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CircleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CircleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          findFirst: {
            args: Prisma.CircleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CircleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          findMany: {
            args: Prisma.CircleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>[]
          }
          create: {
            args: Prisma.CircleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          createMany: {
            args: Prisma.CircleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CircleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>[]
          }
          delete: {
            args: Prisma.CircleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          update: {
            args: Prisma.CircleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          deleteMany: {
            args: Prisma.CircleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CircleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CircleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>[]
          }
          upsert: {
            args: Prisma.CircleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          aggregate: {
            args: Prisma.CircleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCircle>
          }
          groupBy: {
            args: Prisma.CircleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CircleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CircleCountArgs<ExtArgs>
            result: $Utils.Optional<CircleCountAggregateOutputType> | number
          }
        }
      }
      Completion: {
        payload: Prisma.$CompletionPayload<ExtArgs>
        fields: Prisma.CompletionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompletionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompletionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload>
          }
          findFirst: {
            args: Prisma.CompletionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompletionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload>
          }
          findMany: {
            args: Prisma.CompletionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload>[]
          }
          create: {
            args: Prisma.CompletionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload>
          }
          createMany: {
            args: Prisma.CompletionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompletionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload>[]
          }
          delete: {
            args: Prisma.CompletionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload>
          }
          update: {
            args: Prisma.CompletionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload>
          }
          deleteMany: {
            args: Prisma.CompletionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompletionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompletionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload>[]
          }
          upsert: {
            args: Prisma.CompletionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload>
          }
          aggregate: {
            args: Prisma.CompletionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompletion>
          }
          groupBy: {
            args: Prisma.CompletionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompletionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompletionCountArgs<ExtArgs>
            result: $Utils.Optional<CompletionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    friendship?: FriendshipOmit
    circleInvite?: CircleInviteOmit
    post?: PostOmit
    habit?: HabitOmit
    circle?: CircleOmit
    completion?: CompletionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedCircles: number
    joinedCircles: number
    completions: number
    posts: number
    sentFriendships: number
    receivedFriendships: number
    sentCircleInvites: number
    receivedCircleInvites: number
    accounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedCircles?: boolean | UserCountOutputTypeCountOwnedCirclesArgs
    joinedCircles?: boolean | UserCountOutputTypeCountJoinedCirclesArgs
    completions?: boolean | UserCountOutputTypeCountCompletionsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    sentFriendships?: boolean | UserCountOutputTypeCountSentFriendshipsArgs
    receivedFriendships?: boolean | UserCountOutputTypeCountReceivedFriendshipsArgs
    sentCircleInvites?: boolean | UserCountOutputTypeCountSentCircleInvitesArgs
    receivedCircleInvites?: boolean | UserCountOutputTypeCountReceivedCircleInvitesArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedCirclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJoinedCirclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentFriendshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedFriendshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentCircleInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleInviteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedCircleInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleInviteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Count Type HabitCountOutputType
   */

  export type HabitCountOutputType = {
    completions: number
    posts: number
  }

  export type HabitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completions?: boolean | HabitCountOutputTypeCountCompletionsArgs
    posts?: boolean | HabitCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCountOutputType
     */
    select?: HabitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletionWhereInput
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type CircleCountOutputType
   */

  export type CircleCountOutputType = {
    members: number
    habits: number
    invites: number
  }

  export type CircleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | CircleCountOutputTypeCountMembersArgs
    habits?: boolean | CircleCountOutputTypeCountHabitsArgs
    invites?: boolean | CircleCountOutputTypeCountInvitesArgs
  }

  // Custom InputTypes
  /**
   * CircleCountOutputType without action
   */
  export type CircleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleCountOutputType
     */
    select?: CircleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CircleCountOutputType without action
   */
  export type CircleCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CircleCountOutputType without action
   */
  export type CircleCountOutputTypeCountHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
  }

  /**
   * CircleCountOutputType without action
   */
  export type CircleCountOutputTypeCountInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleInviteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    emailAddress: string | null
    biography: string | null
    profilePictureKey: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    emailAddress: string | null
    biography: string | null
    profilePictureKey: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    username: number
    emailAddress: number
    biography: number
    profilePictureKey: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    emailAddress?: true
    biography?: true
    profilePictureKey?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    emailAddress?: true
    biography?: true
    profilePictureKey?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    emailAddress?: true
    biography?: true
    profilePictureKey?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    username: string
    emailAddress: string | null
    biography: string | null
    profilePictureKey: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    emailAddress?: boolean
    biography?: boolean
    profilePictureKey?: boolean
    ownedCircles?: boolean | User$ownedCirclesArgs<ExtArgs>
    joinedCircles?: boolean | User$joinedCirclesArgs<ExtArgs>
    completions?: boolean | User$completionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    sentFriendships?: boolean | User$sentFriendshipsArgs<ExtArgs>
    receivedFriendships?: boolean | User$receivedFriendshipsArgs<ExtArgs>
    sentCircleInvites?: boolean | User$sentCircleInvitesArgs<ExtArgs>
    receivedCircleInvites?: boolean | User$receivedCircleInvitesArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    emailAddress?: boolean
    biography?: boolean
    profilePictureKey?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    emailAddress?: boolean
    biography?: boolean
    profilePictureKey?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    emailAddress?: boolean
    biography?: boolean
    profilePictureKey?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "username" | "emailAddress" | "biography" | "profilePictureKey", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedCircles?: boolean | User$ownedCirclesArgs<ExtArgs>
    joinedCircles?: boolean | User$joinedCirclesArgs<ExtArgs>
    completions?: boolean | User$completionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    sentFriendships?: boolean | User$sentFriendshipsArgs<ExtArgs>
    receivedFriendships?: boolean | User$receivedFriendshipsArgs<ExtArgs>
    sentCircleInvites?: boolean | User$sentCircleInvitesArgs<ExtArgs>
    receivedCircleInvites?: boolean | User$receivedCircleInvitesArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ownedCircles: Prisma.$CirclePayload<ExtArgs>[]
      joinedCircles: Prisma.$CirclePayload<ExtArgs>[]
      completions: Prisma.$CompletionPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      sentFriendships: Prisma.$FriendshipPayload<ExtArgs>[]
      receivedFriendships: Prisma.$FriendshipPayload<ExtArgs>[]
      sentCircleInvites: Prisma.$CircleInvitePayload<ExtArgs>[]
      receivedCircleInvites: Prisma.$CircleInvitePayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      username: string
      emailAddress: string | null
      biography: string | null
      profilePictureKey: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownedCircles<T extends User$ownedCirclesArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedCirclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joinedCircles<T extends User$joinedCirclesArgs<ExtArgs> = {}>(args?: Subset<T, User$joinedCirclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    completions<T extends User$completionsArgs<ExtArgs> = {}>(args?: Subset<T, User$completionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentFriendships<T extends User$sentFriendshipsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentFriendshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedFriendships<T extends User$receivedFriendshipsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedFriendshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentCircleInvites<T extends User$sentCircleInvitesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentCircleInvitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircleInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedCircleInvites<T extends User$receivedCircleInvitesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedCircleInvitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircleInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly username: FieldRef<"User", 'String'>
    readonly emailAddress: FieldRef<"User", 'String'>
    readonly biography: FieldRef<"User", 'String'>
    readonly profilePictureKey: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ownedCircles
   */
  export type User$ownedCirclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    where?: CircleWhereInput
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    cursor?: CircleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }

  /**
   * User.joinedCircles
   */
  export type User$joinedCirclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    where?: CircleWhereInput
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    cursor?: CircleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }

  /**
   * User.completions
   */
  export type User$completionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    where?: CompletionWhereInput
    orderBy?: CompletionOrderByWithRelationInput | CompletionOrderByWithRelationInput[]
    cursor?: CompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletionScalarFieldEnum | CompletionScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.sentFriendships
   */
  export type User$sentFriendshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.receivedFriendships
   */
  export type User$receivedFriendshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.sentCircleInvites
   */
  export type User$sentCircleInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleInvite
     */
    select?: CircleInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleInvite
     */
    omit?: CircleInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInviteInclude<ExtArgs> | null
    where?: CircleInviteWhereInput
    orderBy?: CircleInviteOrderByWithRelationInput | CircleInviteOrderByWithRelationInput[]
    cursor?: CircleInviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CircleInviteScalarFieldEnum | CircleInviteScalarFieldEnum[]
  }

  /**
   * User.receivedCircleInvites
   */
  export type User$receivedCircleInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleInvite
     */
    select?: CircleInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleInvite
     */
    omit?: CircleInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInviteInclude<ExtArgs> | null
    where?: CircleInviteWhereInput
    orderBy?: CircleInviteOrderByWithRelationInput | CircleInviteOrderByWithRelationInput[]
    cursor?: CircleInviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CircleInviteScalarFieldEnum | CircleInviteScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    passwordVersion: number | null
    failedAttempts: number | null
  }

  export type AccountSumAggregateOutputType = {
    passwordVersion: number | null
    failedAttempts: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    type: $Enums.AccountType | null
    hashedPassword: string | null
    passwordVersion: number | null
    failedAttempts: number | null
    emailVerified: boolean | null
    provider: string | null
    providerAccountId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    type: $Enums.AccountType | null
    hashedPassword: string | null
    passwordVersion: number | null
    failedAttempts: number | null
    emailVerified: boolean | null
    provider: string | null
    providerAccountId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    type: number
    hashedPassword: number
    passwordVersion: number
    failedAttempts: number
    emailVerified: number
    provider: number
    providerAccountId: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    passwordVersion?: true
    failedAttempts?: true
  }

  export type AccountSumAggregateInputType = {
    passwordVersion?: true
    failedAttempts?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    type?: true
    hashedPassword?: true
    passwordVersion?: true
    failedAttempts?: true
    emailVerified?: true
    provider?: true
    providerAccountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    type?: true
    hashedPassword?: true
    passwordVersion?: true
    failedAttempts?: true
    emailVerified?: true
    provider?: true
    providerAccountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    type?: true
    hashedPassword?: true
    passwordVersion?: true
    failedAttempts?: true
    emailVerified?: true
    provider?: true
    providerAccountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    type: $Enums.AccountType
    hashedPassword: string | null
    passwordVersion: number | null
    failedAttempts: number | null
    emailVerified: boolean | null
    provider: string | null
    providerAccountId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    type?: boolean
    hashedPassword?: boolean
    passwordVersion?: boolean
    failedAttempts?: boolean
    emailVerified?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    type?: boolean
    hashedPassword?: boolean
    passwordVersion?: boolean
    failedAttempts?: boolean
    emailVerified?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    type?: boolean
    hashedPassword?: boolean
    passwordVersion?: boolean
    failedAttempts?: boolean
    emailVerified?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    type?: boolean
    hashedPassword?: boolean
    passwordVersion?: boolean
    failedAttempts?: boolean
    emailVerified?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "type" | "hashedPassword" | "passwordVersion" | "failedAttempts" | "emailVerified" | "provider" | "providerAccountId" | "accessToken" | "refreshToken" | "expiresAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      type: $Enums.AccountType
      hashedPassword: string | null
      passwordVersion: number | null
      failedAttempts: number | null
      emailVerified: boolean | null
      provider: string | null
      providerAccountId: string | null
      accessToken: string | null
      refreshToken: string | null
      expiresAt: Date | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'AccountType'>
    readonly hashedPassword: FieldRef<"Account", 'String'>
    readonly passwordVersion: FieldRef<"Account", 'Int'>
    readonly failedAttempts: FieldRef<"Account", 'Int'>
    readonly emailVerified: FieldRef<"Account", 'Boolean'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly expiresAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Friendship
   */

  export type AggregateFriendship = {
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  export type FriendshipMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    requesterId: string | null
    addresseeId: string | null
    status: $Enums.FriendshipStatus | null
  }

  export type FriendshipMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    requesterId: string | null
    addresseeId: string | null
    status: $Enums.FriendshipStatus | null
  }

  export type FriendshipCountAggregateOutputType = {
    id: number
    createdAt: number
    requesterId: number
    addresseeId: number
    status: number
    _all: number
  }


  export type FriendshipMinAggregateInputType = {
    id?: true
    createdAt?: true
    requesterId?: true
    addresseeId?: true
    status?: true
  }

  export type FriendshipMaxAggregateInputType = {
    id?: true
    createdAt?: true
    requesterId?: true
    addresseeId?: true
    status?: true
  }

  export type FriendshipCountAggregateInputType = {
    id?: true
    createdAt?: true
    requesterId?: true
    addresseeId?: true
    status?: true
    _all?: true
  }

  export type FriendshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendship to aggregate.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friendships
    **/
    _count?: true | FriendshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendshipMaxAggregateInputType
  }

  export type GetFriendshipAggregateType<T extends FriendshipAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendship[P]>
      : GetScalarType<T[P], AggregateFriendship[P]>
  }




  export type FriendshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithAggregationInput | FriendshipOrderByWithAggregationInput[]
    by: FriendshipScalarFieldEnum[] | FriendshipScalarFieldEnum
    having?: FriendshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendshipCountAggregateInputType | true
    _min?: FriendshipMinAggregateInputType
    _max?: FriendshipMaxAggregateInputType
  }

  export type FriendshipGroupByOutputType = {
    id: string
    createdAt: Date
    requesterId: string
    addresseeId: string
    status: $Enums.FriendshipStatus
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  type GetFriendshipGroupByPayload<T extends FriendshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
            : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
        }
      >
    >


  export type FriendshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectScalar = {
    id?: boolean
    createdAt?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
  }

  export type FriendshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "requesterId" | "addresseeId" | "status", ExtArgs["result"]["friendship"]>
  export type FriendshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friendship"
    objects: {
      requester: Prisma.$UserPayload<ExtArgs>
      addressee: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      requesterId: string
      addresseeId: string
      status: $Enums.FriendshipStatus
    }, ExtArgs["result"]["friendship"]>
    composites: {}
  }

  type FriendshipGetPayload<S extends boolean | null | undefined | FriendshipDefaultArgs> = $Result.GetResult<Prisma.$FriendshipPayload, S>

  type FriendshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendshipCountAggregateInputType | true
    }

  export interface FriendshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friendship'], meta: { name: 'Friendship' } }
    /**
     * Find zero or one Friendship that matches the filter.
     * @param {FriendshipFindUniqueArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendshipFindUniqueArgs>(args: SelectSubset<T, FriendshipFindUniqueArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friendship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendshipFindUniqueOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendshipFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendshipFindFirstArgs>(args?: SelectSubset<T, FriendshipFindFirstArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendshipFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friendships
     * const friendships = await prisma.friendship.findMany()
     * 
     * // Get first 10 Friendships
     * const friendships = await prisma.friendship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendshipWithIdOnly = await prisma.friendship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendshipFindManyArgs>(args?: SelectSubset<T, FriendshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friendship.
     * @param {FriendshipCreateArgs} args - Arguments to create a Friendship.
     * @example
     * // Create one Friendship
     * const Friendship = await prisma.friendship.create({
     *   data: {
     *     // ... data to create a Friendship
     *   }
     * })
     * 
     */
    create<T extends FriendshipCreateArgs>(args: SelectSubset<T, FriendshipCreateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friendships.
     * @param {FriendshipCreateManyArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendshipCreateManyArgs>(args?: SelectSubset<T, FriendshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friendships and returns the data saved in the database.
     * @param {FriendshipCreateManyAndReturnArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendshipCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friendship.
     * @param {FriendshipDeleteArgs} args - Arguments to delete one Friendship.
     * @example
     * // Delete one Friendship
     * const Friendship = await prisma.friendship.delete({
     *   where: {
     *     // ... filter to delete one Friendship
     *   }
     * })
     * 
     */
    delete<T extends FriendshipDeleteArgs>(args: SelectSubset<T, FriendshipDeleteArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friendship.
     * @param {FriendshipUpdateArgs} args - Arguments to update one Friendship.
     * @example
     * // Update one Friendship
     * const friendship = await prisma.friendship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendshipUpdateArgs>(args: SelectSubset<T, FriendshipUpdateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friendships.
     * @param {FriendshipDeleteManyArgs} args - Arguments to filter Friendships to delete.
     * @example
     * // Delete a few Friendships
     * const { count } = await prisma.friendship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendshipDeleteManyArgs>(args?: SelectSubset<T, FriendshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendshipUpdateManyArgs>(args: SelectSubset<T, FriendshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships and returns the data updated in the database.
     * @param {FriendshipUpdateManyAndReturnArgs} args - Arguments to update many Friendships.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FriendshipUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friendship.
     * @param {FriendshipUpsertArgs} args - Arguments to update or create a Friendship.
     * @example
     * // Update or create a Friendship
     * const friendship = await prisma.friendship.upsert({
     *   create: {
     *     // ... data to create a Friendship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friendship we want to update
     *   }
     * })
     */
    upsert<T extends FriendshipUpsertArgs>(args: SelectSubset<T, FriendshipUpsertArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipCountArgs} args - Arguments to filter Friendships to count.
     * @example
     * // Count the number of Friendships
     * const count = await prisma.friendship.count({
     *   where: {
     *     // ... the filter for the Friendships we want to count
     *   }
     * })
    **/
    count<T extends FriendshipCountArgs>(
      args?: Subset<T, FriendshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendshipAggregateArgs>(args: Subset<T, FriendshipAggregateArgs>): Prisma.PrismaPromise<GetFriendshipAggregateType<T>>

    /**
     * Group by Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendshipGroupByArgs['orderBy'] }
        : { orderBy?: FriendshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friendship model
   */
  readonly fields: FriendshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friendship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    addressee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Friendship model
   */
  interface FriendshipFieldRefs {
    readonly id: FieldRef<"Friendship", 'String'>
    readonly createdAt: FieldRef<"Friendship", 'DateTime'>
    readonly requesterId: FieldRef<"Friendship", 'String'>
    readonly addresseeId: FieldRef<"Friendship", 'String'>
    readonly status: FieldRef<"Friendship", 'FriendshipStatus'>
  }
    

  // Custom InputTypes
  /**
   * Friendship findUnique
   */
  export type FriendshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findUniqueOrThrow
   */
  export type FriendshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findFirst
   */
  export type FriendshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findFirstOrThrow
   */
  export type FriendshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findMany
   */
  export type FriendshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship create
   */
  export type FriendshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Friendship.
     */
    data: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
  }

  /**
   * Friendship createMany
   */
  export type FriendshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friendship createManyAndReturn
   */
  export type FriendshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship update
   */
  export type FriendshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Friendship.
     */
    data: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
    /**
     * Choose, which Friendship to update.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship updateMany
   */
  export type FriendshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
  }

  /**
   * Friendship updateManyAndReturn
   */
  export type FriendshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship upsert
   */
  export type FriendshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Friendship to update in case it exists.
     */
    where: FriendshipWhereUniqueInput
    /**
     * In case the Friendship found by the `where` argument doesn't exist, create a new Friendship with this data.
     */
    create: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
    /**
     * In case the Friendship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
  }

  /**
   * Friendship delete
   */
  export type FriendshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter which Friendship to delete.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship deleteMany
   */
  export type FriendshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendships to delete
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to delete.
     */
    limit?: number
  }

  /**
   * Friendship without action
   */
  export type FriendshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
  }


  /**
   * Model CircleInvite
   */

  export type AggregateCircleInvite = {
    _count: CircleInviteCountAggregateOutputType | null
    _min: CircleInviteMinAggregateOutputType | null
    _max: CircleInviteMaxAggregateOutputType | null
  }

  export type CircleInviteMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    senderId: string | null
    recipientId: string | null
    circleId: string | null
    status: $Enums.InviteStatus | null
  }

  export type CircleInviteMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    senderId: string | null
    recipientId: string | null
    circleId: string | null
    status: $Enums.InviteStatus | null
  }

  export type CircleInviteCountAggregateOutputType = {
    id: number
    createdAt: number
    senderId: number
    recipientId: number
    circleId: number
    status: number
    _all: number
  }


  export type CircleInviteMinAggregateInputType = {
    id?: true
    createdAt?: true
    senderId?: true
    recipientId?: true
    circleId?: true
    status?: true
  }

  export type CircleInviteMaxAggregateInputType = {
    id?: true
    createdAt?: true
    senderId?: true
    recipientId?: true
    circleId?: true
    status?: true
  }

  export type CircleInviteCountAggregateInputType = {
    id?: true
    createdAt?: true
    senderId?: true
    recipientId?: true
    circleId?: true
    status?: true
    _all?: true
  }

  export type CircleInviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CircleInvite to aggregate.
     */
    where?: CircleInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CircleInvites to fetch.
     */
    orderBy?: CircleInviteOrderByWithRelationInput | CircleInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CircleInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CircleInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CircleInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CircleInvites
    **/
    _count?: true | CircleInviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CircleInviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CircleInviteMaxAggregateInputType
  }

  export type GetCircleInviteAggregateType<T extends CircleInviteAggregateArgs> = {
        [P in keyof T & keyof AggregateCircleInvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCircleInvite[P]>
      : GetScalarType<T[P], AggregateCircleInvite[P]>
  }




  export type CircleInviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleInviteWhereInput
    orderBy?: CircleInviteOrderByWithAggregationInput | CircleInviteOrderByWithAggregationInput[]
    by: CircleInviteScalarFieldEnum[] | CircleInviteScalarFieldEnum
    having?: CircleInviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CircleInviteCountAggregateInputType | true
    _min?: CircleInviteMinAggregateInputType
    _max?: CircleInviteMaxAggregateInputType
  }

  export type CircleInviteGroupByOutputType = {
    id: string
    createdAt: Date
    senderId: string
    recipientId: string
    circleId: string
    status: $Enums.InviteStatus
    _count: CircleInviteCountAggregateOutputType | null
    _min: CircleInviteMinAggregateOutputType | null
    _max: CircleInviteMaxAggregateOutputType | null
  }

  type GetCircleInviteGroupByPayload<T extends CircleInviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CircleInviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CircleInviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CircleInviteGroupByOutputType[P]>
            : GetScalarType<T[P], CircleInviteGroupByOutputType[P]>
        }
      >
    >


  export type CircleInviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    senderId?: boolean
    recipientId?: boolean
    circleId?: boolean
    status?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circleInvite"]>

  export type CircleInviteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    senderId?: boolean
    recipientId?: boolean
    circleId?: boolean
    status?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circleInvite"]>

  export type CircleInviteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    senderId?: boolean
    recipientId?: boolean
    circleId?: boolean
    status?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circleInvite"]>

  export type CircleInviteSelectScalar = {
    id?: boolean
    createdAt?: boolean
    senderId?: boolean
    recipientId?: boolean
    circleId?: boolean
    status?: boolean
  }

  export type CircleInviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "senderId" | "recipientId" | "circleId" | "status", ExtArgs["result"]["circleInvite"]>
  export type CircleInviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
  }
  export type CircleInviteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
  }
  export type CircleInviteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
  }

  export type $CircleInvitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CircleInvite"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      recipient: Prisma.$UserPayload<ExtArgs>
      circle: Prisma.$CirclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      senderId: string
      recipientId: string
      circleId: string
      status: $Enums.InviteStatus
    }, ExtArgs["result"]["circleInvite"]>
    composites: {}
  }

  type CircleInviteGetPayload<S extends boolean | null | undefined | CircleInviteDefaultArgs> = $Result.GetResult<Prisma.$CircleInvitePayload, S>

  type CircleInviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CircleInviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CircleInviteCountAggregateInputType | true
    }

  export interface CircleInviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CircleInvite'], meta: { name: 'CircleInvite' } }
    /**
     * Find zero or one CircleInvite that matches the filter.
     * @param {CircleInviteFindUniqueArgs} args - Arguments to find a CircleInvite
     * @example
     * // Get one CircleInvite
     * const circleInvite = await prisma.circleInvite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CircleInviteFindUniqueArgs>(args: SelectSubset<T, CircleInviteFindUniqueArgs<ExtArgs>>): Prisma__CircleInviteClient<$Result.GetResult<Prisma.$CircleInvitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CircleInvite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CircleInviteFindUniqueOrThrowArgs} args - Arguments to find a CircleInvite
     * @example
     * // Get one CircleInvite
     * const circleInvite = await prisma.circleInvite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CircleInviteFindUniqueOrThrowArgs>(args: SelectSubset<T, CircleInviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CircleInviteClient<$Result.GetResult<Prisma.$CircleInvitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CircleInvite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleInviteFindFirstArgs} args - Arguments to find a CircleInvite
     * @example
     * // Get one CircleInvite
     * const circleInvite = await prisma.circleInvite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CircleInviteFindFirstArgs>(args?: SelectSubset<T, CircleInviteFindFirstArgs<ExtArgs>>): Prisma__CircleInviteClient<$Result.GetResult<Prisma.$CircleInvitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CircleInvite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleInviteFindFirstOrThrowArgs} args - Arguments to find a CircleInvite
     * @example
     * // Get one CircleInvite
     * const circleInvite = await prisma.circleInvite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CircleInviteFindFirstOrThrowArgs>(args?: SelectSubset<T, CircleInviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CircleInviteClient<$Result.GetResult<Prisma.$CircleInvitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CircleInvites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleInviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CircleInvites
     * const circleInvites = await prisma.circleInvite.findMany()
     * 
     * // Get first 10 CircleInvites
     * const circleInvites = await prisma.circleInvite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const circleInviteWithIdOnly = await prisma.circleInvite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CircleInviteFindManyArgs>(args?: SelectSubset<T, CircleInviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircleInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CircleInvite.
     * @param {CircleInviteCreateArgs} args - Arguments to create a CircleInvite.
     * @example
     * // Create one CircleInvite
     * const CircleInvite = await prisma.circleInvite.create({
     *   data: {
     *     // ... data to create a CircleInvite
     *   }
     * })
     * 
     */
    create<T extends CircleInviteCreateArgs>(args: SelectSubset<T, CircleInviteCreateArgs<ExtArgs>>): Prisma__CircleInviteClient<$Result.GetResult<Prisma.$CircleInvitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CircleInvites.
     * @param {CircleInviteCreateManyArgs} args - Arguments to create many CircleInvites.
     * @example
     * // Create many CircleInvites
     * const circleInvite = await prisma.circleInvite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CircleInviteCreateManyArgs>(args?: SelectSubset<T, CircleInviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CircleInvites and returns the data saved in the database.
     * @param {CircleInviteCreateManyAndReturnArgs} args - Arguments to create many CircleInvites.
     * @example
     * // Create many CircleInvites
     * const circleInvite = await prisma.circleInvite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CircleInvites and only return the `id`
     * const circleInviteWithIdOnly = await prisma.circleInvite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CircleInviteCreateManyAndReturnArgs>(args?: SelectSubset<T, CircleInviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircleInvitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CircleInvite.
     * @param {CircleInviteDeleteArgs} args - Arguments to delete one CircleInvite.
     * @example
     * // Delete one CircleInvite
     * const CircleInvite = await prisma.circleInvite.delete({
     *   where: {
     *     // ... filter to delete one CircleInvite
     *   }
     * })
     * 
     */
    delete<T extends CircleInviteDeleteArgs>(args: SelectSubset<T, CircleInviteDeleteArgs<ExtArgs>>): Prisma__CircleInviteClient<$Result.GetResult<Prisma.$CircleInvitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CircleInvite.
     * @param {CircleInviteUpdateArgs} args - Arguments to update one CircleInvite.
     * @example
     * // Update one CircleInvite
     * const circleInvite = await prisma.circleInvite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CircleInviteUpdateArgs>(args: SelectSubset<T, CircleInviteUpdateArgs<ExtArgs>>): Prisma__CircleInviteClient<$Result.GetResult<Prisma.$CircleInvitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CircleInvites.
     * @param {CircleInviteDeleteManyArgs} args - Arguments to filter CircleInvites to delete.
     * @example
     * // Delete a few CircleInvites
     * const { count } = await prisma.circleInvite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CircleInviteDeleteManyArgs>(args?: SelectSubset<T, CircleInviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CircleInvites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleInviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CircleInvites
     * const circleInvite = await prisma.circleInvite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CircleInviteUpdateManyArgs>(args: SelectSubset<T, CircleInviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CircleInvites and returns the data updated in the database.
     * @param {CircleInviteUpdateManyAndReturnArgs} args - Arguments to update many CircleInvites.
     * @example
     * // Update many CircleInvites
     * const circleInvite = await prisma.circleInvite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CircleInvites and only return the `id`
     * const circleInviteWithIdOnly = await prisma.circleInvite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CircleInviteUpdateManyAndReturnArgs>(args: SelectSubset<T, CircleInviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircleInvitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CircleInvite.
     * @param {CircleInviteUpsertArgs} args - Arguments to update or create a CircleInvite.
     * @example
     * // Update or create a CircleInvite
     * const circleInvite = await prisma.circleInvite.upsert({
     *   create: {
     *     // ... data to create a CircleInvite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CircleInvite we want to update
     *   }
     * })
     */
    upsert<T extends CircleInviteUpsertArgs>(args: SelectSubset<T, CircleInviteUpsertArgs<ExtArgs>>): Prisma__CircleInviteClient<$Result.GetResult<Prisma.$CircleInvitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CircleInvites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleInviteCountArgs} args - Arguments to filter CircleInvites to count.
     * @example
     * // Count the number of CircleInvites
     * const count = await prisma.circleInvite.count({
     *   where: {
     *     // ... the filter for the CircleInvites we want to count
     *   }
     * })
    **/
    count<T extends CircleInviteCountArgs>(
      args?: Subset<T, CircleInviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CircleInviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CircleInvite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleInviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CircleInviteAggregateArgs>(args: Subset<T, CircleInviteAggregateArgs>): Prisma.PrismaPromise<GetCircleInviteAggregateType<T>>

    /**
     * Group by CircleInvite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleInviteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CircleInviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CircleInviteGroupByArgs['orderBy'] }
        : { orderBy?: CircleInviteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CircleInviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCircleInviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CircleInvite model
   */
  readonly fields: CircleInviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CircleInvite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CircleInviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    circle<T extends CircleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CircleDefaultArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CircleInvite model
   */
  interface CircleInviteFieldRefs {
    readonly id: FieldRef<"CircleInvite", 'String'>
    readonly createdAt: FieldRef<"CircleInvite", 'DateTime'>
    readonly senderId: FieldRef<"CircleInvite", 'String'>
    readonly recipientId: FieldRef<"CircleInvite", 'String'>
    readonly circleId: FieldRef<"CircleInvite", 'String'>
    readonly status: FieldRef<"CircleInvite", 'InviteStatus'>
  }
    

  // Custom InputTypes
  /**
   * CircleInvite findUnique
   */
  export type CircleInviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleInvite
     */
    select?: CircleInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleInvite
     */
    omit?: CircleInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInviteInclude<ExtArgs> | null
    /**
     * Filter, which CircleInvite to fetch.
     */
    where: CircleInviteWhereUniqueInput
  }

  /**
   * CircleInvite findUniqueOrThrow
   */
  export type CircleInviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleInvite
     */
    select?: CircleInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleInvite
     */
    omit?: CircleInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInviteInclude<ExtArgs> | null
    /**
     * Filter, which CircleInvite to fetch.
     */
    where: CircleInviteWhereUniqueInput
  }

  /**
   * CircleInvite findFirst
   */
  export type CircleInviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleInvite
     */
    select?: CircleInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleInvite
     */
    omit?: CircleInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInviteInclude<ExtArgs> | null
    /**
     * Filter, which CircleInvite to fetch.
     */
    where?: CircleInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CircleInvites to fetch.
     */
    orderBy?: CircleInviteOrderByWithRelationInput | CircleInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CircleInvites.
     */
    cursor?: CircleInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CircleInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CircleInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CircleInvites.
     */
    distinct?: CircleInviteScalarFieldEnum | CircleInviteScalarFieldEnum[]
  }

  /**
   * CircleInvite findFirstOrThrow
   */
  export type CircleInviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleInvite
     */
    select?: CircleInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleInvite
     */
    omit?: CircleInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInviteInclude<ExtArgs> | null
    /**
     * Filter, which CircleInvite to fetch.
     */
    where?: CircleInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CircleInvites to fetch.
     */
    orderBy?: CircleInviteOrderByWithRelationInput | CircleInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CircleInvites.
     */
    cursor?: CircleInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CircleInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CircleInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CircleInvites.
     */
    distinct?: CircleInviteScalarFieldEnum | CircleInviteScalarFieldEnum[]
  }

  /**
   * CircleInvite findMany
   */
  export type CircleInviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleInvite
     */
    select?: CircleInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleInvite
     */
    omit?: CircleInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInviteInclude<ExtArgs> | null
    /**
     * Filter, which CircleInvites to fetch.
     */
    where?: CircleInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CircleInvites to fetch.
     */
    orderBy?: CircleInviteOrderByWithRelationInput | CircleInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CircleInvites.
     */
    cursor?: CircleInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CircleInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CircleInvites.
     */
    skip?: number
    distinct?: CircleInviteScalarFieldEnum | CircleInviteScalarFieldEnum[]
  }

  /**
   * CircleInvite create
   */
  export type CircleInviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleInvite
     */
    select?: CircleInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleInvite
     */
    omit?: CircleInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInviteInclude<ExtArgs> | null
    /**
     * The data needed to create a CircleInvite.
     */
    data: XOR<CircleInviteCreateInput, CircleInviteUncheckedCreateInput>
  }

  /**
   * CircleInvite createMany
   */
  export type CircleInviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CircleInvites.
     */
    data: CircleInviteCreateManyInput | CircleInviteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CircleInvite createManyAndReturn
   */
  export type CircleInviteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleInvite
     */
    select?: CircleInviteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CircleInvite
     */
    omit?: CircleInviteOmit<ExtArgs> | null
    /**
     * The data used to create many CircleInvites.
     */
    data: CircleInviteCreateManyInput | CircleInviteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInviteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CircleInvite update
   */
  export type CircleInviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleInvite
     */
    select?: CircleInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleInvite
     */
    omit?: CircleInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInviteInclude<ExtArgs> | null
    /**
     * The data needed to update a CircleInvite.
     */
    data: XOR<CircleInviteUpdateInput, CircleInviteUncheckedUpdateInput>
    /**
     * Choose, which CircleInvite to update.
     */
    where: CircleInviteWhereUniqueInput
  }

  /**
   * CircleInvite updateMany
   */
  export type CircleInviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CircleInvites.
     */
    data: XOR<CircleInviteUpdateManyMutationInput, CircleInviteUncheckedUpdateManyInput>
    /**
     * Filter which CircleInvites to update
     */
    where?: CircleInviteWhereInput
    /**
     * Limit how many CircleInvites to update.
     */
    limit?: number
  }

  /**
   * CircleInvite updateManyAndReturn
   */
  export type CircleInviteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleInvite
     */
    select?: CircleInviteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CircleInvite
     */
    omit?: CircleInviteOmit<ExtArgs> | null
    /**
     * The data used to update CircleInvites.
     */
    data: XOR<CircleInviteUpdateManyMutationInput, CircleInviteUncheckedUpdateManyInput>
    /**
     * Filter which CircleInvites to update
     */
    where?: CircleInviteWhereInput
    /**
     * Limit how many CircleInvites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInviteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CircleInvite upsert
   */
  export type CircleInviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleInvite
     */
    select?: CircleInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleInvite
     */
    omit?: CircleInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInviteInclude<ExtArgs> | null
    /**
     * The filter to search for the CircleInvite to update in case it exists.
     */
    where: CircleInviteWhereUniqueInput
    /**
     * In case the CircleInvite found by the `where` argument doesn't exist, create a new CircleInvite with this data.
     */
    create: XOR<CircleInviteCreateInput, CircleInviteUncheckedCreateInput>
    /**
     * In case the CircleInvite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CircleInviteUpdateInput, CircleInviteUncheckedUpdateInput>
  }

  /**
   * CircleInvite delete
   */
  export type CircleInviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleInvite
     */
    select?: CircleInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleInvite
     */
    omit?: CircleInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInviteInclude<ExtArgs> | null
    /**
     * Filter which CircleInvite to delete.
     */
    where: CircleInviteWhereUniqueInput
  }

  /**
   * CircleInvite deleteMany
   */
  export type CircleInviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CircleInvites to delete
     */
    where?: CircleInviteWhereInput
    /**
     * Limit how many CircleInvites to delete.
     */
    limit?: number
  }

  /**
   * CircleInvite without action
   */
  export type CircleInviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleInvite
     */
    select?: CircleInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleInvite
     */
    omit?: CircleInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInviteInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    habitId: string | null
    completionId: string | null
    photoKey: string | null
    caption: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    habitId: string | null
    completionId: string | null
    photoKey: string | null
    caption: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    habitId: number
    completionId: number
    photoKey: number
    caption: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    habitId?: true
    completionId?: true
    photoKey?: true
    caption?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    habitId?: true
    completionId?: true
    photoKey?: true
    caption?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    habitId?: true
    completionId?: true
    photoKey?: true
    caption?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    habitId: string
    completionId: string
    photoKey: string | null
    caption: string | null
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    habitId?: boolean
    completionId?: boolean
    photoKey?: boolean
    caption?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    completion?: boolean | CompletionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    habitId?: boolean
    completionId?: boolean
    photoKey?: boolean
    caption?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    completion?: boolean | CompletionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    habitId?: boolean
    completionId?: boolean
    photoKey?: boolean
    caption?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    completion?: boolean | CompletionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    habitId?: boolean
    completionId?: boolean
    photoKey?: boolean
    caption?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "habitId" | "completionId" | "photoKey" | "caption", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    completion?: boolean | CompletionDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    completion?: boolean | CompletionDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    completion?: boolean | CompletionDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      habit: Prisma.$HabitPayload<ExtArgs>
      completion: Prisma.$CompletionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      habitId: string
      completionId: string
      photoKey: string | null
      caption: string | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    habit<T extends HabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefaultArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    completion<T extends CompletionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompletionDefaultArgs<ExtArgs>>): Prisma__CompletionClient<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly userId: FieldRef<"Post", 'String'>
    readonly habitId: FieldRef<"Post", 'String'>
    readonly completionId: FieldRef<"Post", 'String'>
    readonly photoKey: FieldRef<"Post", 'String'>
    readonly caption: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Habit
   */

  export type AggregateHabit = {
    _count: HabitCountAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  export type HabitMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    circleId: string | null
  }

  export type HabitMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    circleId: string | null
  }

  export type HabitCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    circleId: number
    _all: number
  }


  export type HabitMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    circleId?: true
  }

  export type HabitMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    circleId?: true
  }

  export type HabitCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    circleId?: true
    _all?: true
  }

  export type HabitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habit to aggregate.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habits
    **/
    _count?: true | HabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitMaxAggregateInputType
  }

  export type GetHabitAggregateType<T extends HabitAggregateArgs> = {
        [P in keyof T & keyof AggregateHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabit[P]>
      : GetScalarType<T[P], AggregateHabit[P]>
  }




  export type HabitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithAggregationInput | HabitOrderByWithAggregationInput[]
    by: HabitScalarFieldEnum[] | HabitScalarFieldEnum
    having?: HabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitCountAggregateInputType | true
    _min?: HabitMinAggregateInputType
    _max?: HabitMaxAggregateInputType
  }

  export type HabitGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    circleId: string
    _count: HabitCountAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  type GetHabitGroupByPayload<T extends HabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitGroupByOutputType[P]>
            : GetScalarType<T[P], HabitGroupByOutputType[P]>
        }
      >
    >


  export type HabitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    circleId?: boolean
    circle?: boolean | CircleDefaultArgs<ExtArgs>
    completions?: boolean | Habit$completionsArgs<ExtArgs>
    posts?: boolean | Habit$postsArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    circleId?: boolean
    circle?: boolean | CircleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    circleId?: boolean
    circle?: boolean | CircleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    circleId?: boolean
  }

  export type HabitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "circleId", ExtArgs["result"]["habit"]>
  export type HabitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    circle?: boolean | CircleDefaultArgs<ExtArgs>
    completions?: boolean | Habit$completionsArgs<ExtArgs>
    posts?: boolean | Habit$postsArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HabitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    circle?: boolean | CircleDefaultArgs<ExtArgs>
  }
  export type HabitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    circle?: boolean | CircleDefaultArgs<ExtArgs>
  }

  export type $HabitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habit"
    objects: {
      circle: Prisma.$CirclePayload<ExtArgs>
      completions: Prisma.$CompletionPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      circleId: string
    }, ExtArgs["result"]["habit"]>
    composites: {}
  }

  type HabitGetPayload<S extends boolean | null | undefined | HabitDefaultArgs> = $Result.GetResult<Prisma.$HabitPayload, S>

  type HabitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitCountAggregateInputType | true
    }

  export interface HabitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habit'], meta: { name: 'Habit' } }
    /**
     * Find zero or one Habit that matches the filter.
     * @param {HabitFindUniqueArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitFindUniqueArgs>(args: SelectSubset<T, HabitFindUniqueArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Habit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitFindUniqueOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitFindFirstArgs>(args?: SelectSubset<T, HabitFindFirstArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Habits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habits
     * const habits = await prisma.habit.findMany()
     * 
     * // Get first 10 Habits
     * const habits = await prisma.habit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitWithIdOnly = await prisma.habit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitFindManyArgs>(args?: SelectSubset<T, HabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Habit.
     * @param {HabitCreateArgs} args - Arguments to create a Habit.
     * @example
     * // Create one Habit
     * const Habit = await prisma.habit.create({
     *   data: {
     *     // ... data to create a Habit
     *   }
     * })
     * 
     */
    create<T extends HabitCreateArgs>(args: SelectSubset<T, HabitCreateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Habits.
     * @param {HabitCreateManyArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitCreateManyArgs>(args?: SelectSubset<T, HabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Habits and returns the data saved in the database.
     * @param {HabitCreateManyAndReturnArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Habits and only return the `id`
     * const habitWithIdOnly = await prisma.habit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Habit.
     * @param {HabitDeleteArgs} args - Arguments to delete one Habit.
     * @example
     * // Delete one Habit
     * const Habit = await prisma.habit.delete({
     *   where: {
     *     // ... filter to delete one Habit
     *   }
     * })
     * 
     */
    delete<T extends HabitDeleteArgs>(args: SelectSubset<T, HabitDeleteArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Habit.
     * @param {HabitUpdateArgs} args - Arguments to update one Habit.
     * @example
     * // Update one Habit
     * const habit = await prisma.habit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitUpdateArgs>(args: SelectSubset<T, HabitUpdateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Habits.
     * @param {HabitDeleteManyArgs} args - Arguments to filter Habits to delete.
     * @example
     * // Delete a few Habits
     * const { count } = await prisma.habit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitDeleteManyArgs>(args?: SelectSubset<T, HabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitUpdateManyArgs>(args: SelectSubset<T, HabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits and returns the data updated in the database.
     * @param {HabitUpdateManyAndReturnArgs} args - Arguments to update many Habits.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Habits and only return the `id`
     * const habitWithIdOnly = await prisma.habit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HabitUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Habit.
     * @param {HabitUpsertArgs} args - Arguments to update or create a Habit.
     * @example
     * // Update or create a Habit
     * const habit = await prisma.habit.upsert({
     *   create: {
     *     // ... data to create a Habit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habit we want to update
     *   }
     * })
     */
    upsert<T extends HabitUpsertArgs>(args: SelectSubset<T, HabitUpsertArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCountArgs} args - Arguments to filter Habits to count.
     * @example
     * // Count the number of Habits
     * const count = await prisma.habit.count({
     *   where: {
     *     // ... the filter for the Habits we want to count
     *   }
     * })
    **/
    count<T extends HabitCountArgs>(
      args?: Subset<T, HabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitAggregateArgs>(args: Subset<T, HabitAggregateArgs>): Prisma.PrismaPromise<GetHabitAggregateType<T>>

    /**
     * Group by Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitGroupByArgs['orderBy'] }
        : { orderBy?: HabitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habit model
   */
  readonly fields: HabitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    circle<T extends CircleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CircleDefaultArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    completions<T extends Habit$completionsArgs<ExtArgs> = {}>(args?: Subset<T, Habit$completionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends Habit$postsArgs<ExtArgs> = {}>(args?: Subset<T, Habit$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Habit model
   */
  interface HabitFieldRefs {
    readonly id: FieldRef<"Habit", 'String'>
    readonly createdAt: FieldRef<"Habit", 'DateTime'>
    readonly updatedAt: FieldRef<"Habit", 'DateTime'>
    readonly name: FieldRef<"Habit", 'String'>
    readonly circleId: FieldRef<"Habit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Habit findUnique
   */
  export type HabitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findUniqueOrThrow
   */
  export type HabitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findFirst
   */
  export type HabitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findFirstOrThrow
   */
  export type HabitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findMany
   */
  export type HabitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habits to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit create
   */
  export type HabitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to create a Habit.
     */
    data: XOR<HabitCreateInput, HabitUncheckedCreateInput>
  }

  /**
   * Habit createMany
   */
  export type HabitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habit createManyAndReturn
   */
  export type HabitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habit update
   */
  export type HabitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to update a Habit.
     */
    data: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
    /**
     * Choose, which Habit to update.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit updateMany
   */
  export type HabitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to update.
     */
    limit?: number
  }

  /**
   * Habit updateManyAndReturn
   */
  export type HabitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habit upsert
   */
  export type HabitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The filter to search for the Habit to update in case it exists.
     */
    where: HabitWhereUniqueInput
    /**
     * In case the Habit found by the `where` argument doesn't exist, create a new Habit with this data.
     */
    create: XOR<HabitCreateInput, HabitUncheckedCreateInput>
    /**
     * In case the Habit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
  }

  /**
   * Habit delete
   */
  export type HabitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter which Habit to delete.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit deleteMany
   */
  export type HabitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habits to delete
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to delete.
     */
    limit?: number
  }

  /**
   * Habit.completions
   */
  export type Habit$completionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    where?: CompletionWhereInput
    orderBy?: CompletionOrderByWithRelationInput | CompletionOrderByWithRelationInput[]
    cursor?: CompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletionScalarFieldEnum | CompletionScalarFieldEnum[]
  }

  /**
   * Habit.posts
   */
  export type Habit$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Habit without action
   */
  export type HabitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
  }


  /**
   * Model Circle
   */

  export type AggregateCircle = {
    _count: CircleCountAggregateOutputType | null
    _min: CircleMinAggregateOutputType | null
    _max: CircleMaxAggregateOutputType | null
  }

  export type CircleMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    photoKey: string | null
    ownerId: string | null
  }

  export type CircleMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    photoKey: string | null
    ownerId: string | null
  }

  export type CircleCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    photoKey: number
    ownerId: number
    _all: number
  }


  export type CircleMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    photoKey?: true
    ownerId?: true
  }

  export type CircleMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    photoKey?: true
    ownerId?: true
  }

  export type CircleCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    photoKey?: true
    ownerId?: true
    _all?: true
  }

  export type CircleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circle to aggregate.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Circles
    **/
    _count?: true | CircleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CircleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CircleMaxAggregateInputType
  }

  export type GetCircleAggregateType<T extends CircleAggregateArgs> = {
        [P in keyof T & keyof AggregateCircle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCircle[P]>
      : GetScalarType<T[P], AggregateCircle[P]>
  }




  export type CircleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleWhereInput
    orderBy?: CircleOrderByWithAggregationInput | CircleOrderByWithAggregationInput[]
    by: CircleScalarFieldEnum[] | CircleScalarFieldEnum
    having?: CircleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CircleCountAggregateInputType | true
    _min?: CircleMinAggregateInputType
    _max?: CircleMaxAggregateInputType
  }

  export type CircleGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    photoKey: string | null
    ownerId: string
    _count: CircleCountAggregateOutputType | null
    _min: CircleMinAggregateOutputType | null
    _max: CircleMaxAggregateOutputType | null
  }

  type GetCircleGroupByPayload<T extends CircleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CircleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CircleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CircleGroupByOutputType[P]>
            : GetScalarType<T[P], CircleGroupByOutputType[P]>
        }
      >
    >


  export type CircleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    photoKey?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Circle$membersArgs<ExtArgs>
    habits?: boolean | Circle$habitsArgs<ExtArgs>
    invites?: boolean | Circle$invitesArgs<ExtArgs>
    _count?: boolean | CircleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle"]>

  export type CircleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    photoKey?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle"]>

  export type CircleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    photoKey?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle"]>

  export type CircleSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    photoKey?: boolean
    ownerId?: boolean
  }

  export type CircleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "photoKey" | "ownerId", ExtArgs["result"]["circle"]>
  export type CircleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Circle$membersArgs<ExtArgs>
    habits?: boolean | Circle$habitsArgs<ExtArgs>
    invites?: boolean | Circle$invitesArgs<ExtArgs>
    _count?: boolean | CircleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CircleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CircleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CirclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Circle"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$UserPayload<ExtArgs>[]
      habits: Prisma.$HabitPayload<ExtArgs>[]
      invites: Prisma.$CircleInvitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      photoKey: string | null
      ownerId: string
    }, ExtArgs["result"]["circle"]>
    composites: {}
  }

  type CircleGetPayload<S extends boolean | null | undefined | CircleDefaultArgs> = $Result.GetResult<Prisma.$CirclePayload, S>

  type CircleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CircleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CircleCountAggregateInputType | true
    }

  export interface CircleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Circle'], meta: { name: 'Circle' } }
    /**
     * Find zero or one Circle that matches the filter.
     * @param {CircleFindUniqueArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CircleFindUniqueArgs>(args: SelectSubset<T, CircleFindUniqueArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Circle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CircleFindUniqueOrThrowArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CircleFindUniqueOrThrowArgs>(args: SelectSubset<T, CircleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleFindFirstArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CircleFindFirstArgs>(args?: SelectSubset<T, CircleFindFirstArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleFindFirstOrThrowArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CircleFindFirstOrThrowArgs>(args?: SelectSubset<T, CircleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Circles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Circles
     * const circles = await prisma.circle.findMany()
     * 
     * // Get first 10 Circles
     * const circles = await prisma.circle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const circleWithIdOnly = await prisma.circle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CircleFindManyArgs>(args?: SelectSubset<T, CircleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Circle.
     * @param {CircleCreateArgs} args - Arguments to create a Circle.
     * @example
     * // Create one Circle
     * const Circle = await prisma.circle.create({
     *   data: {
     *     // ... data to create a Circle
     *   }
     * })
     * 
     */
    create<T extends CircleCreateArgs>(args: SelectSubset<T, CircleCreateArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Circles.
     * @param {CircleCreateManyArgs} args - Arguments to create many Circles.
     * @example
     * // Create many Circles
     * const circle = await prisma.circle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CircleCreateManyArgs>(args?: SelectSubset<T, CircleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Circles and returns the data saved in the database.
     * @param {CircleCreateManyAndReturnArgs} args - Arguments to create many Circles.
     * @example
     * // Create many Circles
     * const circle = await prisma.circle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Circles and only return the `id`
     * const circleWithIdOnly = await prisma.circle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CircleCreateManyAndReturnArgs>(args?: SelectSubset<T, CircleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Circle.
     * @param {CircleDeleteArgs} args - Arguments to delete one Circle.
     * @example
     * // Delete one Circle
     * const Circle = await prisma.circle.delete({
     *   where: {
     *     // ... filter to delete one Circle
     *   }
     * })
     * 
     */
    delete<T extends CircleDeleteArgs>(args: SelectSubset<T, CircleDeleteArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Circle.
     * @param {CircleUpdateArgs} args - Arguments to update one Circle.
     * @example
     * // Update one Circle
     * const circle = await prisma.circle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CircleUpdateArgs>(args: SelectSubset<T, CircleUpdateArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Circles.
     * @param {CircleDeleteManyArgs} args - Arguments to filter Circles to delete.
     * @example
     * // Delete a few Circles
     * const { count } = await prisma.circle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CircleDeleteManyArgs>(args?: SelectSubset<T, CircleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Circles
     * const circle = await prisma.circle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CircleUpdateManyArgs>(args: SelectSubset<T, CircleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circles and returns the data updated in the database.
     * @param {CircleUpdateManyAndReturnArgs} args - Arguments to update many Circles.
     * @example
     * // Update many Circles
     * const circle = await prisma.circle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Circles and only return the `id`
     * const circleWithIdOnly = await prisma.circle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CircleUpdateManyAndReturnArgs>(args: SelectSubset<T, CircleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Circle.
     * @param {CircleUpsertArgs} args - Arguments to update or create a Circle.
     * @example
     * // Update or create a Circle
     * const circle = await prisma.circle.upsert({
     *   create: {
     *     // ... data to create a Circle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Circle we want to update
     *   }
     * })
     */
    upsert<T extends CircleUpsertArgs>(args: SelectSubset<T, CircleUpsertArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Circles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleCountArgs} args - Arguments to filter Circles to count.
     * @example
     * // Count the number of Circles
     * const count = await prisma.circle.count({
     *   where: {
     *     // ... the filter for the Circles we want to count
     *   }
     * })
    **/
    count<T extends CircleCountArgs>(
      args?: Subset<T, CircleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CircleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Circle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CircleAggregateArgs>(args: Subset<T, CircleAggregateArgs>): Prisma.PrismaPromise<GetCircleAggregateType<T>>

    /**
     * Group by Circle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CircleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CircleGroupByArgs['orderBy'] }
        : { orderBy?: CircleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CircleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCircleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Circle model
   */
  readonly fields: CircleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Circle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CircleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Circle$membersArgs<ExtArgs> = {}>(args?: Subset<T, Circle$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    habits<T extends Circle$habitsArgs<ExtArgs> = {}>(args?: Subset<T, Circle$habitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invites<T extends Circle$invitesArgs<ExtArgs> = {}>(args?: Subset<T, Circle$invitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircleInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Circle model
   */
  interface CircleFieldRefs {
    readonly id: FieldRef<"Circle", 'String'>
    readonly createdAt: FieldRef<"Circle", 'DateTime'>
    readonly updatedAt: FieldRef<"Circle", 'DateTime'>
    readonly name: FieldRef<"Circle", 'String'>
    readonly photoKey: FieldRef<"Circle", 'String'>
    readonly ownerId: FieldRef<"Circle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Circle findUnique
   */
  export type CircleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where: CircleWhereUniqueInput
  }

  /**
   * Circle findUniqueOrThrow
   */
  export type CircleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where: CircleWhereUniqueInput
  }

  /**
   * Circle findFirst
   */
  export type CircleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Circles.
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circles.
     */
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }

  /**
   * Circle findFirstOrThrow
   */
  export type CircleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Circles.
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circles.
     */
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }

  /**
   * Circle findMany
   */
  export type CircleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circles to fetch.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Circles.
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }

  /**
   * Circle create
   */
  export type CircleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * The data needed to create a Circle.
     */
    data: XOR<CircleCreateInput, CircleUncheckedCreateInput>
  }

  /**
   * Circle createMany
   */
  export type CircleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Circles.
     */
    data: CircleCreateManyInput | CircleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Circle createManyAndReturn
   */
  export type CircleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * The data used to create many Circles.
     */
    data: CircleCreateManyInput | CircleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Circle update
   */
  export type CircleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * The data needed to update a Circle.
     */
    data: XOR<CircleUpdateInput, CircleUncheckedUpdateInput>
    /**
     * Choose, which Circle to update.
     */
    where: CircleWhereUniqueInput
  }

  /**
   * Circle updateMany
   */
  export type CircleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Circles.
     */
    data: XOR<CircleUpdateManyMutationInput, CircleUncheckedUpdateManyInput>
    /**
     * Filter which Circles to update
     */
    where?: CircleWhereInput
    /**
     * Limit how many Circles to update.
     */
    limit?: number
  }

  /**
   * Circle updateManyAndReturn
   */
  export type CircleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * The data used to update Circles.
     */
    data: XOR<CircleUpdateManyMutationInput, CircleUncheckedUpdateManyInput>
    /**
     * Filter which Circles to update
     */
    where?: CircleWhereInput
    /**
     * Limit how many Circles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Circle upsert
   */
  export type CircleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * The filter to search for the Circle to update in case it exists.
     */
    where: CircleWhereUniqueInput
    /**
     * In case the Circle found by the `where` argument doesn't exist, create a new Circle with this data.
     */
    create: XOR<CircleCreateInput, CircleUncheckedCreateInput>
    /**
     * In case the Circle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CircleUpdateInput, CircleUncheckedUpdateInput>
  }

  /**
   * Circle delete
   */
  export type CircleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter which Circle to delete.
     */
    where: CircleWhereUniqueInput
  }

  /**
   * Circle deleteMany
   */
  export type CircleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circles to delete
     */
    where?: CircleWhereInput
    /**
     * Limit how many Circles to delete.
     */
    limit?: number
  }

  /**
   * Circle.members
   */
  export type Circle$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Circle.habits
   */
  export type Circle$habitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    cursor?: HabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Circle.invites
   */
  export type Circle$invitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleInvite
     */
    select?: CircleInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleInvite
     */
    omit?: CircleInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInviteInclude<ExtArgs> | null
    where?: CircleInviteWhereInput
    orderBy?: CircleInviteOrderByWithRelationInput | CircleInviteOrderByWithRelationInput[]
    cursor?: CircleInviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CircleInviteScalarFieldEnum | CircleInviteScalarFieldEnum[]
  }

  /**
   * Circle without action
   */
  export type CircleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
  }


  /**
   * Model Completion
   */

  export type AggregateCompletion = {
    _count: CompletionCountAggregateOutputType | null
    _min: CompletionMinAggregateOutputType | null
    _max: CompletionMaxAggregateOutputType | null
  }

  export type CompletionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    completedAt: Date | null
    userId: string | null
    habitId: string | null
  }

  export type CompletionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    completedAt: Date | null
    userId: string | null
    habitId: string | null
  }

  export type CompletionCountAggregateOutputType = {
    id: number
    createdAt: number
    completedAt: number
    userId: number
    habitId: number
    _all: number
  }


  export type CompletionMinAggregateInputType = {
    id?: true
    createdAt?: true
    completedAt?: true
    userId?: true
    habitId?: true
  }

  export type CompletionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    completedAt?: true
    userId?: true
    habitId?: true
  }

  export type CompletionCountAggregateInputType = {
    id?: true
    createdAt?: true
    completedAt?: true
    userId?: true
    habitId?: true
    _all?: true
  }

  export type CompletionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Completion to aggregate.
     */
    where?: CompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Completions to fetch.
     */
    orderBy?: CompletionOrderByWithRelationInput | CompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Completions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Completions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Completions
    **/
    _count?: true | CompletionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompletionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompletionMaxAggregateInputType
  }

  export type GetCompletionAggregateType<T extends CompletionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompletion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompletion[P]>
      : GetScalarType<T[P], AggregateCompletion[P]>
  }




  export type CompletionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletionWhereInput
    orderBy?: CompletionOrderByWithAggregationInput | CompletionOrderByWithAggregationInput[]
    by: CompletionScalarFieldEnum[] | CompletionScalarFieldEnum
    having?: CompletionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompletionCountAggregateInputType | true
    _min?: CompletionMinAggregateInputType
    _max?: CompletionMaxAggregateInputType
  }

  export type CompletionGroupByOutputType = {
    id: string
    createdAt: Date
    completedAt: Date
    userId: string
    habitId: string
    _count: CompletionCountAggregateOutputType | null
    _min: CompletionMinAggregateOutputType | null
    _max: CompletionMaxAggregateOutputType | null
  }

  type GetCompletionGroupByPayload<T extends CompletionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompletionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompletionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompletionGroupByOutputType[P]>
            : GetScalarType<T[P], CompletionGroupByOutputType[P]>
        }
      >
    >


  export type CompletionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    completedAt?: boolean
    userId?: boolean
    habitId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    post?: boolean | Completion$postArgs<ExtArgs>
  }, ExtArgs["result"]["completion"]>

  export type CompletionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    completedAt?: boolean
    userId?: boolean
    habitId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completion"]>

  export type CompletionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    completedAt?: boolean
    userId?: boolean
    habitId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completion"]>

  export type CompletionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    completedAt?: boolean
    userId?: boolean
    habitId?: boolean
  }

  export type CompletionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "completedAt" | "userId" | "habitId", ExtArgs["result"]["completion"]>
  export type CompletionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    post?: boolean | Completion$postArgs<ExtArgs>
  }
  export type CompletionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }
  export type CompletionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }

  export type $CompletionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Completion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      habit: Prisma.$HabitPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      completedAt: Date
      userId: string
      habitId: string
    }, ExtArgs["result"]["completion"]>
    composites: {}
  }

  type CompletionGetPayload<S extends boolean | null | undefined | CompletionDefaultArgs> = $Result.GetResult<Prisma.$CompletionPayload, S>

  type CompletionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompletionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompletionCountAggregateInputType | true
    }

  export interface CompletionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Completion'], meta: { name: 'Completion' } }
    /**
     * Find zero or one Completion that matches the filter.
     * @param {CompletionFindUniqueArgs} args - Arguments to find a Completion
     * @example
     * // Get one Completion
     * const completion = await prisma.completion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompletionFindUniqueArgs>(args: SelectSubset<T, CompletionFindUniqueArgs<ExtArgs>>): Prisma__CompletionClient<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Completion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompletionFindUniqueOrThrowArgs} args - Arguments to find a Completion
     * @example
     * // Get one Completion
     * const completion = await prisma.completion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompletionFindUniqueOrThrowArgs>(args: SelectSubset<T, CompletionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompletionClient<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Completion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletionFindFirstArgs} args - Arguments to find a Completion
     * @example
     * // Get one Completion
     * const completion = await prisma.completion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompletionFindFirstArgs>(args?: SelectSubset<T, CompletionFindFirstArgs<ExtArgs>>): Prisma__CompletionClient<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Completion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletionFindFirstOrThrowArgs} args - Arguments to find a Completion
     * @example
     * // Get one Completion
     * const completion = await prisma.completion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompletionFindFirstOrThrowArgs>(args?: SelectSubset<T, CompletionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompletionClient<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Completions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Completions
     * const completions = await prisma.completion.findMany()
     * 
     * // Get first 10 Completions
     * const completions = await prisma.completion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const completionWithIdOnly = await prisma.completion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompletionFindManyArgs>(args?: SelectSubset<T, CompletionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Completion.
     * @param {CompletionCreateArgs} args - Arguments to create a Completion.
     * @example
     * // Create one Completion
     * const Completion = await prisma.completion.create({
     *   data: {
     *     // ... data to create a Completion
     *   }
     * })
     * 
     */
    create<T extends CompletionCreateArgs>(args: SelectSubset<T, CompletionCreateArgs<ExtArgs>>): Prisma__CompletionClient<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Completions.
     * @param {CompletionCreateManyArgs} args - Arguments to create many Completions.
     * @example
     * // Create many Completions
     * const completion = await prisma.completion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompletionCreateManyArgs>(args?: SelectSubset<T, CompletionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Completions and returns the data saved in the database.
     * @param {CompletionCreateManyAndReturnArgs} args - Arguments to create many Completions.
     * @example
     * // Create many Completions
     * const completion = await prisma.completion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Completions and only return the `id`
     * const completionWithIdOnly = await prisma.completion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompletionCreateManyAndReturnArgs>(args?: SelectSubset<T, CompletionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Completion.
     * @param {CompletionDeleteArgs} args - Arguments to delete one Completion.
     * @example
     * // Delete one Completion
     * const Completion = await prisma.completion.delete({
     *   where: {
     *     // ... filter to delete one Completion
     *   }
     * })
     * 
     */
    delete<T extends CompletionDeleteArgs>(args: SelectSubset<T, CompletionDeleteArgs<ExtArgs>>): Prisma__CompletionClient<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Completion.
     * @param {CompletionUpdateArgs} args - Arguments to update one Completion.
     * @example
     * // Update one Completion
     * const completion = await prisma.completion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompletionUpdateArgs>(args: SelectSubset<T, CompletionUpdateArgs<ExtArgs>>): Prisma__CompletionClient<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Completions.
     * @param {CompletionDeleteManyArgs} args - Arguments to filter Completions to delete.
     * @example
     * // Delete a few Completions
     * const { count } = await prisma.completion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompletionDeleteManyArgs>(args?: SelectSubset<T, CompletionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Completions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Completions
     * const completion = await prisma.completion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompletionUpdateManyArgs>(args: SelectSubset<T, CompletionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Completions and returns the data updated in the database.
     * @param {CompletionUpdateManyAndReturnArgs} args - Arguments to update many Completions.
     * @example
     * // Update many Completions
     * const completion = await prisma.completion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Completions and only return the `id`
     * const completionWithIdOnly = await prisma.completion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompletionUpdateManyAndReturnArgs>(args: SelectSubset<T, CompletionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Completion.
     * @param {CompletionUpsertArgs} args - Arguments to update or create a Completion.
     * @example
     * // Update or create a Completion
     * const completion = await prisma.completion.upsert({
     *   create: {
     *     // ... data to create a Completion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Completion we want to update
     *   }
     * })
     */
    upsert<T extends CompletionUpsertArgs>(args: SelectSubset<T, CompletionUpsertArgs<ExtArgs>>): Prisma__CompletionClient<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Completions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletionCountArgs} args - Arguments to filter Completions to count.
     * @example
     * // Count the number of Completions
     * const count = await prisma.completion.count({
     *   where: {
     *     // ... the filter for the Completions we want to count
     *   }
     * })
    **/
    count<T extends CompletionCountArgs>(
      args?: Subset<T, CompletionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompletionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Completion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompletionAggregateArgs>(args: Subset<T, CompletionAggregateArgs>): Prisma.PrismaPromise<GetCompletionAggregateType<T>>

    /**
     * Group by Completion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompletionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompletionGroupByArgs['orderBy'] }
        : { orderBy?: CompletionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompletionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompletionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Completion model
   */
  readonly fields: CompletionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Completion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompletionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    habit<T extends HabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefaultArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends Completion$postArgs<ExtArgs> = {}>(args?: Subset<T, Completion$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Completion model
   */
  interface CompletionFieldRefs {
    readonly id: FieldRef<"Completion", 'String'>
    readonly createdAt: FieldRef<"Completion", 'DateTime'>
    readonly completedAt: FieldRef<"Completion", 'DateTime'>
    readonly userId: FieldRef<"Completion", 'String'>
    readonly habitId: FieldRef<"Completion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Completion findUnique
   */
  export type CompletionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    /**
     * Filter, which Completion to fetch.
     */
    where: CompletionWhereUniqueInput
  }

  /**
   * Completion findUniqueOrThrow
   */
  export type CompletionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    /**
     * Filter, which Completion to fetch.
     */
    where: CompletionWhereUniqueInput
  }

  /**
   * Completion findFirst
   */
  export type CompletionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    /**
     * Filter, which Completion to fetch.
     */
    where?: CompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Completions to fetch.
     */
    orderBy?: CompletionOrderByWithRelationInput | CompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Completions.
     */
    cursor?: CompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Completions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Completions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Completions.
     */
    distinct?: CompletionScalarFieldEnum | CompletionScalarFieldEnum[]
  }

  /**
   * Completion findFirstOrThrow
   */
  export type CompletionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    /**
     * Filter, which Completion to fetch.
     */
    where?: CompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Completions to fetch.
     */
    orderBy?: CompletionOrderByWithRelationInput | CompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Completions.
     */
    cursor?: CompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Completions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Completions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Completions.
     */
    distinct?: CompletionScalarFieldEnum | CompletionScalarFieldEnum[]
  }

  /**
   * Completion findMany
   */
  export type CompletionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    /**
     * Filter, which Completions to fetch.
     */
    where?: CompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Completions to fetch.
     */
    orderBy?: CompletionOrderByWithRelationInput | CompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Completions.
     */
    cursor?: CompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Completions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Completions.
     */
    skip?: number
    distinct?: CompletionScalarFieldEnum | CompletionScalarFieldEnum[]
  }

  /**
   * Completion create
   */
  export type CompletionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    /**
     * The data needed to create a Completion.
     */
    data: XOR<CompletionCreateInput, CompletionUncheckedCreateInput>
  }

  /**
   * Completion createMany
   */
  export type CompletionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Completions.
     */
    data: CompletionCreateManyInput | CompletionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Completion createManyAndReturn
   */
  export type CompletionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * The data used to create many Completions.
     */
    data: CompletionCreateManyInput | CompletionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Completion update
   */
  export type CompletionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    /**
     * The data needed to update a Completion.
     */
    data: XOR<CompletionUpdateInput, CompletionUncheckedUpdateInput>
    /**
     * Choose, which Completion to update.
     */
    where: CompletionWhereUniqueInput
  }

  /**
   * Completion updateMany
   */
  export type CompletionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Completions.
     */
    data: XOR<CompletionUpdateManyMutationInput, CompletionUncheckedUpdateManyInput>
    /**
     * Filter which Completions to update
     */
    where?: CompletionWhereInput
    /**
     * Limit how many Completions to update.
     */
    limit?: number
  }

  /**
   * Completion updateManyAndReturn
   */
  export type CompletionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * The data used to update Completions.
     */
    data: XOR<CompletionUpdateManyMutationInput, CompletionUncheckedUpdateManyInput>
    /**
     * Filter which Completions to update
     */
    where?: CompletionWhereInput
    /**
     * Limit how many Completions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Completion upsert
   */
  export type CompletionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    /**
     * The filter to search for the Completion to update in case it exists.
     */
    where: CompletionWhereUniqueInput
    /**
     * In case the Completion found by the `where` argument doesn't exist, create a new Completion with this data.
     */
    create: XOR<CompletionCreateInput, CompletionUncheckedCreateInput>
    /**
     * In case the Completion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompletionUpdateInput, CompletionUncheckedUpdateInput>
  }

  /**
   * Completion delete
   */
  export type CompletionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    /**
     * Filter which Completion to delete.
     */
    where: CompletionWhereUniqueInput
  }

  /**
   * Completion deleteMany
   */
  export type CompletionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Completions to delete
     */
    where?: CompletionWhereInput
    /**
     * Limit how many Completions to delete.
     */
    limit?: number
  }

  /**
   * Completion.post
   */
  export type Completion$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * Completion without action
   */
  export type CompletionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    username: 'username',
    emailAddress: 'emailAddress',
    biography: 'biography',
    profilePictureKey: 'profilePictureKey'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    type: 'type',
    hashedPassword: 'hashedPassword',
    passwordVersion: 'passwordVersion',
    failedAttempts: 'failedAttempts',
    emailVerified: 'emailVerified',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const FriendshipScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    requesterId: 'requesterId',
    addresseeId: 'addresseeId',
    status: 'status'
  };

  export type FriendshipScalarFieldEnum = (typeof FriendshipScalarFieldEnum)[keyof typeof FriendshipScalarFieldEnum]


  export const CircleInviteScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    senderId: 'senderId',
    recipientId: 'recipientId',
    circleId: 'circleId',
    status: 'status'
  };

  export type CircleInviteScalarFieldEnum = (typeof CircleInviteScalarFieldEnum)[keyof typeof CircleInviteScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    habitId: 'habitId',
    completionId: 'completionId',
    photoKey: 'photoKey',
    caption: 'caption'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const HabitScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    circleId: 'circleId'
  };

  export type HabitScalarFieldEnum = (typeof HabitScalarFieldEnum)[keyof typeof HabitScalarFieldEnum]


  export const CircleScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    photoKey: 'photoKey',
    ownerId: 'ownerId'
  };

  export type CircleScalarFieldEnum = (typeof CircleScalarFieldEnum)[keyof typeof CircleScalarFieldEnum]


  export const CompletionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    completedAt: 'completedAt',
    userId: 'userId',
    habitId: 'habitId'
  };

  export type CompletionScalarFieldEnum = (typeof CompletionScalarFieldEnum)[keyof typeof CompletionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AccountType'
   */
  export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>
    


  /**
   * Reference to a field of type 'AccountType[]'
   */
  export type ListEnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'FriendshipStatus'
   */
  export type EnumFriendshipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FriendshipStatus'>
    


  /**
   * Reference to a field of type 'FriendshipStatus[]'
   */
  export type ListEnumFriendshipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FriendshipStatus[]'>
    


  /**
   * Reference to a field of type 'InviteStatus'
   */
  export type EnumInviteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InviteStatus'>
    


  /**
   * Reference to a field of type 'InviteStatus[]'
   */
  export type ListEnumInviteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InviteStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    username?: StringFilter<"User"> | string
    emailAddress?: StringNullableFilter<"User"> | string | null
    biography?: StringNullableFilter<"User"> | string | null
    profilePictureKey?: StringNullableFilter<"User"> | string | null
    ownedCircles?: CircleListRelationFilter
    joinedCircles?: CircleListRelationFilter
    completions?: CompletionListRelationFilter
    posts?: PostListRelationFilter
    sentFriendships?: FriendshipListRelationFilter
    receivedFriendships?: FriendshipListRelationFilter
    sentCircleInvites?: CircleInviteListRelationFilter
    receivedCircleInvites?: CircleInviteListRelationFilter
    accounts?: AccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    emailAddress?: SortOrderInput | SortOrder
    biography?: SortOrderInput | SortOrder
    profilePictureKey?: SortOrderInput | SortOrder
    ownedCircles?: CircleOrderByRelationAggregateInput
    joinedCircles?: CircleOrderByRelationAggregateInput
    completions?: CompletionOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    sentFriendships?: FriendshipOrderByRelationAggregateInput
    receivedFriendships?: FriendshipOrderByRelationAggregateInput
    sentCircleInvites?: CircleInviteOrderByRelationAggregateInput
    receivedCircleInvites?: CircleInviteOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    emailAddress?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    biography?: StringNullableFilter<"User"> | string | null
    profilePictureKey?: StringNullableFilter<"User"> | string | null
    ownedCircles?: CircleListRelationFilter
    joinedCircles?: CircleListRelationFilter
    completions?: CompletionListRelationFilter
    posts?: PostListRelationFilter
    sentFriendships?: FriendshipListRelationFilter
    receivedFriendships?: FriendshipListRelationFilter
    sentCircleInvites?: CircleInviteListRelationFilter
    receivedCircleInvites?: CircleInviteListRelationFilter
    accounts?: AccountListRelationFilter
  }, "id" | "username" | "emailAddress">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    emailAddress?: SortOrderInput | SortOrder
    biography?: SortOrderInput | SortOrder
    profilePictureKey?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    username?: StringWithAggregatesFilter<"User"> | string
    emailAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    biography?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePictureKey?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    userId?: StringFilter<"Account"> | string
    type?: EnumAccountTypeFilter<"Account"> | $Enums.AccountType
    hashedPassword?: StringNullableFilter<"Account"> | string | null
    passwordVersion?: IntNullableFilter<"Account"> | number | null
    failedAttempts?: IntNullableFilter<"Account"> | number | null
    emailVerified?: BoolNullableFilter<"Account"> | boolean | null
    provider?: StringNullableFilter<"Account"> | string | null
    providerAccountId?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    passwordVersion?: SortOrderInput | SortOrder
    failedAttempts?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    providerAccountId?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    userId?: StringFilter<"Account"> | string
    type?: EnumAccountTypeFilter<"Account"> | $Enums.AccountType
    hashedPassword?: StringNullableFilter<"Account"> | string | null
    passwordVersion?: IntNullableFilter<"Account"> | number | null
    failedAttempts?: IntNullableFilter<"Account"> | number | null
    emailVerified?: BoolNullableFilter<"Account"> | boolean | null
    provider?: StringNullableFilter<"Account"> | string | null
    providerAccountId?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    passwordVersion?: SortOrderInput | SortOrder
    failedAttempts?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    providerAccountId?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: EnumAccountTypeWithAggregatesFilter<"Account"> | $Enums.AccountType
    hashedPassword?: StringNullableWithAggregatesFilter<"Account"> | string | null
    passwordVersion?: IntNullableWithAggregatesFilter<"Account"> | number | null
    failedAttempts?: IntNullableWithAggregatesFilter<"Account"> | number | null
    emailVerified?: BoolNullableWithAggregatesFilter<"Account"> | boolean | null
    provider?: StringNullableWithAggregatesFilter<"Account"> | string | null
    providerAccountId?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
  }

  export type FriendshipWhereInput = {
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    id?: StringFilter<"Friendship"> | string
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    requesterId?: StringFilter<"Friendship"> | string
    addresseeId?: StringFilter<"Friendship"> | string
    status?: EnumFriendshipStatusFilter<"Friendship"> | $Enums.FriendshipStatus
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    addressee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendshipOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    requester?: UserOrderByWithRelationInput
    addressee?: UserOrderByWithRelationInput
  }

  export type FriendshipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requesterId_addresseeId?: FriendshipRequesterIdAddresseeIdCompoundUniqueInput
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    requesterId?: StringFilter<"Friendship"> | string
    addresseeId?: StringFilter<"Friendship"> | string
    status?: EnumFriendshipStatusFilter<"Friendship"> | $Enums.FriendshipStatus
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    addressee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "requesterId_addresseeId">

  export type FriendshipOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    _count?: FriendshipCountOrderByAggregateInput
    _max?: FriendshipMaxOrderByAggregateInput
    _min?: FriendshipMinOrderByAggregateInput
  }

  export type FriendshipScalarWhereWithAggregatesInput = {
    AND?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    OR?: FriendshipScalarWhereWithAggregatesInput[]
    NOT?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Friendship"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Friendship"> | Date | string
    requesterId?: StringWithAggregatesFilter<"Friendship"> | string
    addresseeId?: StringWithAggregatesFilter<"Friendship"> | string
    status?: EnumFriendshipStatusWithAggregatesFilter<"Friendship"> | $Enums.FriendshipStatus
  }

  export type CircleInviteWhereInput = {
    AND?: CircleInviteWhereInput | CircleInviteWhereInput[]
    OR?: CircleInviteWhereInput[]
    NOT?: CircleInviteWhereInput | CircleInviteWhereInput[]
    id?: StringFilter<"CircleInvite"> | string
    createdAt?: DateTimeFilter<"CircleInvite"> | Date | string
    senderId?: StringFilter<"CircleInvite"> | string
    recipientId?: StringFilter<"CircleInvite"> | string
    circleId?: StringFilter<"CircleInvite"> | string
    status?: EnumInviteStatusFilter<"CircleInvite"> | $Enums.InviteStatus
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
    circle?: XOR<CircleScalarRelationFilter, CircleWhereInput>
  }

  export type CircleInviteOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    circleId?: SortOrder
    status?: SortOrder
    sender?: UserOrderByWithRelationInput
    recipient?: UserOrderByWithRelationInput
    circle?: CircleOrderByWithRelationInput
  }

  export type CircleInviteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CircleInviteWhereInput | CircleInviteWhereInput[]
    OR?: CircleInviteWhereInput[]
    NOT?: CircleInviteWhereInput | CircleInviteWhereInput[]
    createdAt?: DateTimeFilter<"CircleInvite"> | Date | string
    senderId?: StringFilter<"CircleInvite"> | string
    recipientId?: StringFilter<"CircleInvite"> | string
    circleId?: StringFilter<"CircleInvite"> | string
    status?: EnumInviteStatusFilter<"CircleInvite"> | $Enums.InviteStatus
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
    circle?: XOR<CircleScalarRelationFilter, CircleWhereInput>
  }, "id">

  export type CircleInviteOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    circleId?: SortOrder
    status?: SortOrder
    _count?: CircleInviteCountOrderByAggregateInput
    _max?: CircleInviteMaxOrderByAggregateInput
    _min?: CircleInviteMinOrderByAggregateInput
  }

  export type CircleInviteScalarWhereWithAggregatesInput = {
    AND?: CircleInviteScalarWhereWithAggregatesInput | CircleInviteScalarWhereWithAggregatesInput[]
    OR?: CircleInviteScalarWhereWithAggregatesInput[]
    NOT?: CircleInviteScalarWhereWithAggregatesInput | CircleInviteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CircleInvite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CircleInvite"> | Date | string
    senderId?: StringWithAggregatesFilter<"CircleInvite"> | string
    recipientId?: StringWithAggregatesFilter<"CircleInvite"> | string
    circleId?: StringWithAggregatesFilter<"CircleInvite"> | string
    status?: EnumInviteStatusWithAggregatesFilter<"CircleInvite"> | $Enums.InviteStatus
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    userId?: StringFilter<"Post"> | string
    habitId?: StringFilter<"Post"> | string
    completionId?: StringFilter<"Post"> | string
    photoKey?: StringNullableFilter<"Post"> | string | null
    caption?: StringNullableFilter<"Post"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
    completion?: XOR<CompletionScalarRelationFilter, CompletionWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    habitId?: SortOrder
    completionId?: SortOrder
    photoKey?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    habit?: HabitOrderByWithRelationInput
    completion?: CompletionOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    completionId?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    userId?: StringFilter<"Post"> | string
    habitId?: StringFilter<"Post"> | string
    photoKey?: StringNullableFilter<"Post"> | string | null
    caption?: StringNullableFilter<"Post"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
    completion?: XOR<CompletionScalarRelationFilter, CompletionWhereInput>
  }, "id" | "completionId">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    habitId?: SortOrder
    completionId?: SortOrder
    photoKey?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    userId?: StringWithAggregatesFilter<"Post"> | string
    habitId?: StringWithAggregatesFilter<"Post"> | string
    completionId?: StringWithAggregatesFilter<"Post"> | string
    photoKey?: StringNullableWithAggregatesFilter<"Post"> | string | null
    caption?: StringNullableWithAggregatesFilter<"Post"> | string | null
  }

  export type HabitWhereInput = {
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    id?: StringFilter<"Habit"> | string
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    name?: StringFilter<"Habit"> | string
    circleId?: StringFilter<"Habit"> | string
    circle?: XOR<CircleScalarRelationFilter, CircleWhereInput>
    completions?: CompletionListRelationFilter
    posts?: PostListRelationFilter
  }

  export type HabitOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    circleId?: SortOrder
    circle?: CircleOrderByWithRelationInput
    completions?: CompletionOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
  }

  export type HabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    name?: StringFilter<"Habit"> | string
    circleId?: StringFilter<"Habit"> | string
    circle?: XOR<CircleScalarRelationFilter, CircleWhereInput>
    completions?: CompletionListRelationFilter
    posts?: PostListRelationFilter
  }, "id">

  export type HabitOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    circleId?: SortOrder
    _count?: HabitCountOrderByAggregateInput
    _max?: HabitMaxOrderByAggregateInput
    _min?: HabitMinOrderByAggregateInput
  }

  export type HabitScalarWhereWithAggregatesInput = {
    AND?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    OR?: HabitScalarWhereWithAggregatesInput[]
    NOT?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Habit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
    name?: StringWithAggregatesFilter<"Habit"> | string
    circleId?: StringWithAggregatesFilter<"Habit"> | string
  }

  export type CircleWhereInput = {
    AND?: CircleWhereInput | CircleWhereInput[]
    OR?: CircleWhereInput[]
    NOT?: CircleWhereInput | CircleWhereInput[]
    id?: StringFilter<"Circle"> | string
    createdAt?: DateTimeFilter<"Circle"> | Date | string
    updatedAt?: DateTimeFilter<"Circle"> | Date | string
    name?: StringFilter<"Circle"> | string
    photoKey?: StringNullableFilter<"Circle"> | string | null
    ownerId?: StringFilter<"Circle"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: UserListRelationFilter
    habits?: HabitListRelationFilter
    invites?: CircleInviteListRelationFilter
  }

  export type CircleOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    photoKey?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    members?: UserOrderByRelationAggregateInput
    habits?: HabitOrderByRelationAggregateInput
    invites?: CircleInviteOrderByRelationAggregateInput
  }

  export type CircleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CircleWhereInput | CircleWhereInput[]
    OR?: CircleWhereInput[]
    NOT?: CircleWhereInput | CircleWhereInput[]
    createdAt?: DateTimeFilter<"Circle"> | Date | string
    updatedAt?: DateTimeFilter<"Circle"> | Date | string
    name?: StringFilter<"Circle"> | string
    photoKey?: StringNullableFilter<"Circle"> | string | null
    ownerId?: StringFilter<"Circle"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: UserListRelationFilter
    habits?: HabitListRelationFilter
    invites?: CircleInviteListRelationFilter
  }, "id">

  export type CircleOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    photoKey?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    _count?: CircleCountOrderByAggregateInput
    _max?: CircleMaxOrderByAggregateInput
    _min?: CircleMinOrderByAggregateInput
  }

  export type CircleScalarWhereWithAggregatesInput = {
    AND?: CircleScalarWhereWithAggregatesInput | CircleScalarWhereWithAggregatesInput[]
    OR?: CircleScalarWhereWithAggregatesInput[]
    NOT?: CircleScalarWhereWithAggregatesInput | CircleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Circle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Circle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Circle"> | Date | string
    name?: StringWithAggregatesFilter<"Circle"> | string
    photoKey?: StringNullableWithAggregatesFilter<"Circle"> | string | null
    ownerId?: StringWithAggregatesFilter<"Circle"> | string
  }

  export type CompletionWhereInput = {
    AND?: CompletionWhereInput | CompletionWhereInput[]
    OR?: CompletionWhereInput[]
    NOT?: CompletionWhereInput | CompletionWhereInput[]
    id?: StringFilter<"Completion"> | string
    createdAt?: DateTimeFilter<"Completion"> | Date | string
    completedAt?: DateTimeFilter<"Completion"> | Date | string
    userId?: StringFilter<"Completion"> | string
    habitId?: StringFilter<"Completion"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }

  export type CompletionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    habitId?: SortOrder
    user?: UserOrderByWithRelationInput
    habit?: HabitOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type CompletionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_habitId_completedAt?: CompletionUserIdHabitIdCompletedAtCompoundUniqueInput
    AND?: CompletionWhereInput | CompletionWhereInput[]
    OR?: CompletionWhereInput[]
    NOT?: CompletionWhereInput | CompletionWhereInput[]
    createdAt?: DateTimeFilter<"Completion"> | Date | string
    completedAt?: DateTimeFilter<"Completion"> | Date | string
    userId?: StringFilter<"Completion"> | string
    habitId?: StringFilter<"Completion"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }, "id" | "userId_habitId_completedAt">

  export type CompletionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    habitId?: SortOrder
    _count?: CompletionCountOrderByAggregateInput
    _max?: CompletionMaxOrderByAggregateInput
    _min?: CompletionMinOrderByAggregateInput
  }

  export type CompletionScalarWhereWithAggregatesInput = {
    AND?: CompletionScalarWhereWithAggregatesInput | CompletionScalarWhereWithAggregatesInput[]
    OR?: CompletionScalarWhereWithAggregatesInput[]
    NOT?: CompletionScalarWhereWithAggregatesInput | CompletionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Completion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Completion"> | Date | string
    completedAt?: DateTimeWithAggregatesFilter<"Completion"> | Date | string
    userId?: StringWithAggregatesFilter<"Completion"> | string
    habitId?: StringWithAggregatesFilter<"Completion"> | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    ownedCircles?: CircleCreateNestedManyWithoutOwnerInput
    joinedCircles?: CircleCreateNestedManyWithoutMembersInput
    completions?: CompletionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    sentFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    sentCircleInvites?: CircleInviteCreateNestedManyWithoutSenderInput
    receivedCircleInvites?: CircleInviteCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    ownedCircles?: CircleUncheckedCreateNestedManyWithoutOwnerInput
    joinedCircles?: CircleUncheckedCreateNestedManyWithoutMembersInput
    completions?: CompletionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    sentFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    sentCircleInvites?: CircleInviteUncheckedCreateNestedManyWithoutSenderInput
    receivedCircleInvites?: CircleInviteUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownedCircles?: CircleUpdateManyWithoutOwnerNestedInput
    joinedCircles?: CircleUpdateManyWithoutMembersNestedInput
    completions?: CompletionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    sentFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    sentCircleInvites?: CircleInviteUpdateManyWithoutSenderNestedInput
    receivedCircleInvites?: CircleInviteUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownedCircles?: CircleUncheckedUpdateManyWithoutOwnerNestedInput
    joinedCircles?: CircleUncheckedUpdateManyWithoutMembersNestedInput
    completions?: CompletionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    sentFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    sentCircleInvites?: CircleInviteUncheckedUpdateManyWithoutSenderNestedInput
    receivedCircleInvites?: CircleInviteUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.AccountType
    hashedPassword?: string | null
    passwordVersion?: number | null
    failedAttempts?: number | null
    emailVerified?: boolean | null
    provider?: string | null
    providerAccountId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    type: $Enums.AccountType
    hashedPassword?: string | null
    passwordVersion?: number | null
    failedAttempts?: number | null
    emailVerified?: boolean | null
    provider?: string | null
    providerAccountId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    passwordVersion?: NullableIntFieldUpdateOperationsInput | number | null
    failedAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    passwordVersion?: NullableIntFieldUpdateOperationsInput | number | null
    failedAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    type: $Enums.AccountType
    hashedPassword?: string | null
    passwordVersion?: number | null
    failedAttempts?: number | null
    emailVerified?: boolean | null
    provider?: string | null
    providerAccountId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    passwordVersion?: NullableIntFieldUpdateOperationsInput | number | null
    failedAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    passwordVersion?: NullableIntFieldUpdateOperationsInput | number | null
    failedAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FriendshipCreateInput = {
    id?: string
    createdAt?: Date | string
    status?: $Enums.FriendshipStatus
    requester: UserCreateNestedOneWithoutSentFriendshipsInput
    addressee: UserCreateNestedOneWithoutReceivedFriendshipsInput
  }

  export type FriendshipUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    requesterId: string
    addresseeId: string
    status?: $Enums.FriendshipStatus
  }

  export type FriendshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    requester?: UserUpdateOneRequiredWithoutSentFriendshipsNestedInput
    addressee?: UserUpdateOneRequiredWithoutReceivedFriendshipsNestedInput
  }

  export type FriendshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
  }

  export type FriendshipCreateManyInput = {
    id?: string
    createdAt?: Date | string
    requesterId: string
    addresseeId: string
    status?: $Enums.FriendshipStatus
  }

  export type FriendshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
  }

  export type FriendshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
  }

  export type CircleInviteCreateInput = {
    id?: string
    createdAt?: Date | string
    status?: $Enums.InviteStatus
    sender: UserCreateNestedOneWithoutSentCircleInvitesInput
    recipient: UserCreateNestedOneWithoutReceivedCircleInvitesInput
    circle: CircleCreateNestedOneWithoutInvitesInput
  }

  export type CircleInviteUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    senderId: string
    recipientId: string
    circleId: string
    status?: $Enums.InviteStatus
  }

  export type CircleInviteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    sender?: UserUpdateOneRequiredWithoutSentCircleInvitesNestedInput
    recipient?: UserUpdateOneRequiredWithoutReceivedCircleInvitesNestedInput
    circle?: CircleUpdateOneRequiredWithoutInvitesNestedInput
  }

  export type CircleInviteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
  }

  export type CircleInviteCreateManyInput = {
    id?: string
    createdAt?: Date | string
    senderId: string
    recipientId: string
    circleId: string
    status?: $Enums.InviteStatus
  }

  export type CircleInviteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
  }

  export type CircleInviteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
  }

  export type PostCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photoKey?: string | null
    caption?: string | null
    user: UserCreateNestedOneWithoutPostsInput
    habit: HabitCreateNestedOneWithoutPostsInput
    completion: CompletionCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    habitId: string
    completionId: string
    photoKey?: string | null
    caption?: string | null
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    habit?: HabitUpdateOneRequiredWithoutPostsNestedInput
    completion?: CompletionUpdateOneRequiredWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    completionId?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    habitId: string
    completionId: string
    photoKey?: string | null
    caption?: string | null
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    completionId?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HabitCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    circle: CircleCreateNestedOneWithoutHabitsInput
    completions?: CompletionCreateNestedManyWithoutHabitInput
    posts?: PostCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    circleId: string
    completions?: CompletionUncheckedCreateNestedManyWithoutHabitInput
    posts?: PostUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    circle?: CircleUpdateOneRequiredWithoutHabitsNestedInput
    completions?: CompletionUpdateManyWithoutHabitNestedInput
    posts?: PostUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    completions?: CompletionUncheckedUpdateManyWithoutHabitNestedInput
    posts?: PostUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    circleId: string
  }

  export type HabitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HabitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
  }

  export type CircleCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    photoKey?: string | null
    owner: UserCreateNestedOneWithoutOwnedCirclesInput
    members?: UserCreateNestedManyWithoutJoinedCirclesInput
    habits?: HabitCreateNestedManyWithoutCircleInput
    invites?: CircleInviteCreateNestedManyWithoutCircleInput
  }

  export type CircleUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    photoKey?: string | null
    ownerId: string
    members?: UserUncheckedCreateNestedManyWithoutJoinedCirclesInput
    habits?: HabitUncheckedCreateNestedManyWithoutCircleInput
    invites?: CircleInviteUncheckedCreateNestedManyWithoutCircleInput
  }

  export type CircleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutOwnedCirclesNestedInput
    members?: UserUpdateManyWithoutJoinedCirclesNestedInput
    habits?: HabitUpdateManyWithoutCircleNestedInput
    invites?: CircleInviteUpdateManyWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: UserUncheckedUpdateManyWithoutJoinedCirclesNestedInput
    habits?: HabitUncheckedUpdateManyWithoutCircleNestedInput
    invites?: CircleInviteUncheckedUpdateManyWithoutCircleNestedInput
  }

  export type CircleCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    photoKey?: string | null
    ownerId: string
  }

  export type CircleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CircleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type CompletionCreateInput = {
    id?: string
    createdAt?: Date | string
    completedAt: Date | string
    user: UserCreateNestedOneWithoutCompletionsInput
    habit: HabitCreateNestedOneWithoutCompletionsInput
    post?: PostCreateNestedOneWithoutCompletionInput
  }

  export type CompletionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    completedAt: Date | string
    userId: string
    habitId: string
    post?: PostUncheckedCreateNestedOneWithoutCompletionInput
  }

  export type CompletionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompletionsNestedInput
    habit?: HabitUpdateOneRequiredWithoutCompletionsNestedInput
    post?: PostUpdateOneWithoutCompletionNestedInput
  }

  export type CompletionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    post?: PostUncheckedUpdateOneWithoutCompletionNestedInput
  }

  export type CompletionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    completedAt: Date | string
    userId: string
    habitId: string
  }

  export type CompletionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CircleListRelationFilter = {
    every?: CircleWhereInput
    some?: CircleWhereInput
    none?: CircleWhereInput
  }

  export type CompletionListRelationFilter = {
    every?: CompletionWhereInput
    some?: CompletionWhereInput
    none?: CompletionWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type FriendshipListRelationFilter = {
    every?: FriendshipWhereInput
    some?: FriendshipWhereInput
    none?: FriendshipWhereInput
  }

  export type CircleInviteListRelationFilter = {
    every?: CircleInviteWhereInput
    some?: CircleInviteWhereInput
    none?: CircleInviteWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CircleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompletionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CircleInviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    emailAddress?: SortOrder
    biography?: SortOrder
    profilePictureKey?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    emailAddress?: SortOrder
    biography?: SortOrder
    profilePictureKey?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    emailAddress?: SortOrder
    biography?: SortOrder
    profilePictureKey?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    hashedPassword?: SortOrder
    passwordVersion?: SortOrder
    failedAttempts?: SortOrder
    emailVerified?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    passwordVersion?: SortOrder
    failedAttempts?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    hashedPassword?: SortOrder
    passwordVersion?: SortOrder
    failedAttempts?: SortOrder
    emailVerified?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    hashedPassword?: SortOrder
    passwordVersion?: SortOrder
    failedAttempts?: SortOrder
    emailVerified?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    passwordVersion?: SortOrder
    failedAttempts?: SortOrder
  }

  export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumFriendshipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendshipStatusFilter<$PrismaModel> | $Enums.FriendshipStatus
  }

  export type FriendshipRequesterIdAddresseeIdCompoundUniqueInput = {
    requesterId: string
    addresseeId: string
  }

  export type FriendshipCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
  }

  export type FriendshipMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
  }

  export type FriendshipMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
  }

  export type EnumFriendshipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendshipStatusWithAggregatesFilter<$PrismaModel> | $Enums.FriendshipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriendshipStatusFilter<$PrismaModel>
    _max?: NestedEnumFriendshipStatusFilter<$PrismaModel>
  }

  export type EnumInviteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatusFilter<$PrismaModel> | $Enums.InviteStatus
  }

  export type CircleScalarRelationFilter = {
    is?: CircleWhereInput
    isNot?: CircleWhereInput
  }

  export type CircleInviteCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    circleId?: SortOrder
    status?: SortOrder
  }

  export type CircleInviteMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    circleId?: SortOrder
    status?: SortOrder
  }

  export type CircleInviteMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    circleId?: SortOrder
    status?: SortOrder
  }

  export type EnumInviteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatusWithAggregatesFilter<$PrismaModel> | $Enums.InviteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInviteStatusFilter<$PrismaModel>
    _max?: NestedEnumInviteStatusFilter<$PrismaModel>
  }

  export type HabitScalarRelationFilter = {
    is?: HabitWhereInput
    isNot?: HabitWhereInput
  }

  export type CompletionScalarRelationFilter = {
    is?: CompletionWhereInput
    isNot?: CompletionWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    habitId?: SortOrder
    completionId?: SortOrder
    photoKey?: SortOrder
    caption?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    habitId?: SortOrder
    completionId?: SortOrder
    photoKey?: SortOrder
    caption?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    habitId?: SortOrder
    completionId?: SortOrder
    photoKey?: SortOrder
    caption?: SortOrder
  }

  export type HabitCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    circleId?: SortOrder
  }

  export type HabitMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    circleId?: SortOrder
  }

  export type HabitMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    circleId?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type HabitListRelationFilter = {
    every?: HabitWhereInput
    some?: HabitWhereInput
    none?: HabitWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CircleCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    photoKey?: SortOrder
    ownerId?: SortOrder
  }

  export type CircleMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    photoKey?: SortOrder
    ownerId?: SortOrder
  }

  export type CircleMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    photoKey?: SortOrder
    ownerId?: SortOrder
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type CompletionUserIdHabitIdCompletedAtCompoundUniqueInput = {
    userId: string
    habitId: string
    completedAt: Date | string
  }

  export type CompletionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    habitId?: SortOrder
  }

  export type CompletionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    habitId?: SortOrder
  }

  export type CompletionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    habitId?: SortOrder
  }

  export type CircleCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CircleCreateWithoutOwnerInput, CircleUncheckedCreateWithoutOwnerInput> | CircleCreateWithoutOwnerInput[] | CircleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutOwnerInput | CircleCreateOrConnectWithoutOwnerInput[]
    createMany?: CircleCreateManyOwnerInputEnvelope
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
  }

  export type CircleCreateNestedManyWithoutMembersInput = {
    create?: XOR<CircleCreateWithoutMembersInput, CircleUncheckedCreateWithoutMembersInput> | CircleCreateWithoutMembersInput[] | CircleUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutMembersInput | CircleCreateOrConnectWithoutMembersInput[]
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
  }

  export type CompletionCreateNestedManyWithoutUserInput = {
    create?: XOR<CompletionCreateWithoutUserInput, CompletionUncheckedCreateWithoutUserInput> | CompletionCreateWithoutUserInput[] | CompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletionCreateOrConnectWithoutUserInput | CompletionCreateOrConnectWithoutUserInput[]
    createMany?: CompletionCreateManyUserInputEnvelope
    connect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutRequesterInput = {
    create?: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput> | FriendshipCreateWithoutRequesterInput[] | FriendshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutRequesterInput | FriendshipCreateOrConnectWithoutRequesterInput[]
    createMany?: FriendshipCreateManyRequesterInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutAddresseeInput = {
    create?: XOR<FriendshipCreateWithoutAddresseeInput, FriendshipUncheckedCreateWithoutAddresseeInput> | FriendshipCreateWithoutAddresseeInput[] | FriendshipUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutAddresseeInput | FriendshipCreateOrConnectWithoutAddresseeInput[]
    createMany?: FriendshipCreateManyAddresseeInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type CircleInviteCreateNestedManyWithoutSenderInput = {
    create?: XOR<CircleInviteCreateWithoutSenderInput, CircleInviteUncheckedCreateWithoutSenderInput> | CircleInviteCreateWithoutSenderInput[] | CircleInviteUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: CircleInviteCreateOrConnectWithoutSenderInput | CircleInviteCreateOrConnectWithoutSenderInput[]
    createMany?: CircleInviteCreateManySenderInputEnvelope
    connect?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
  }

  export type CircleInviteCreateNestedManyWithoutRecipientInput = {
    create?: XOR<CircleInviteCreateWithoutRecipientInput, CircleInviteUncheckedCreateWithoutRecipientInput> | CircleInviteCreateWithoutRecipientInput[] | CircleInviteUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: CircleInviteCreateOrConnectWithoutRecipientInput | CircleInviteCreateOrConnectWithoutRecipientInput[]
    createMany?: CircleInviteCreateManyRecipientInputEnvelope
    connect?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type CircleUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CircleCreateWithoutOwnerInput, CircleUncheckedCreateWithoutOwnerInput> | CircleCreateWithoutOwnerInput[] | CircleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutOwnerInput | CircleCreateOrConnectWithoutOwnerInput[]
    createMany?: CircleCreateManyOwnerInputEnvelope
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
  }

  export type CircleUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<CircleCreateWithoutMembersInput, CircleUncheckedCreateWithoutMembersInput> | CircleCreateWithoutMembersInput[] | CircleUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutMembersInput | CircleCreateOrConnectWithoutMembersInput[]
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
  }

  export type CompletionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CompletionCreateWithoutUserInput, CompletionUncheckedCreateWithoutUserInput> | CompletionCreateWithoutUserInput[] | CompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletionCreateOrConnectWithoutUserInput | CompletionCreateOrConnectWithoutUserInput[]
    createMany?: CompletionCreateManyUserInputEnvelope
    connect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput> | FriendshipCreateWithoutRequesterInput[] | FriendshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutRequesterInput | FriendshipCreateOrConnectWithoutRequesterInput[]
    createMany?: FriendshipCreateManyRequesterInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutAddresseeInput = {
    create?: XOR<FriendshipCreateWithoutAddresseeInput, FriendshipUncheckedCreateWithoutAddresseeInput> | FriendshipCreateWithoutAddresseeInput[] | FriendshipUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutAddresseeInput | FriendshipCreateOrConnectWithoutAddresseeInput[]
    createMany?: FriendshipCreateManyAddresseeInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type CircleInviteUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<CircleInviteCreateWithoutSenderInput, CircleInviteUncheckedCreateWithoutSenderInput> | CircleInviteCreateWithoutSenderInput[] | CircleInviteUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: CircleInviteCreateOrConnectWithoutSenderInput | CircleInviteCreateOrConnectWithoutSenderInput[]
    createMany?: CircleInviteCreateManySenderInputEnvelope
    connect?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
  }

  export type CircleInviteUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<CircleInviteCreateWithoutRecipientInput, CircleInviteUncheckedCreateWithoutRecipientInput> | CircleInviteCreateWithoutRecipientInput[] | CircleInviteUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: CircleInviteCreateOrConnectWithoutRecipientInput | CircleInviteCreateOrConnectWithoutRecipientInput[]
    createMany?: CircleInviteCreateManyRecipientInputEnvelope
    connect?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CircleUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CircleCreateWithoutOwnerInput, CircleUncheckedCreateWithoutOwnerInput> | CircleCreateWithoutOwnerInput[] | CircleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutOwnerInput | CircleCreateOrConnectWithoutOwnerInput[]
    upsert?: CircleUpsertWithWhereUniqueWithoutOwnerInput | CircleUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CircleCreateManyOwnerInputEnvelope
    set?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    disconnect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    delete?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    update?: CircleUpdateWithWhereUniqueWithoutOwnerInput | CircleUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CircleUpdateManyWithWhereWithoutOwnerInput | CircleUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CircleScalarWhereInput | CircleScalarWhereInput[]
  }

  export type CircleUpdateManyWithoutMembersNestedInput = {
    create?: XOR<CircleCreateWithoutMembersInput, CircleUncheckedCreateWithoutMembersInput> | CircleCreateWithoutMembersInput[] | CircleUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutMembersInput | CircleCreateOrConnectWithoutMembersInput[]
    upsert?: CircleUpsertWithWhereUniqueWithoutMembersInput | CircleUpsertWithWhereUniqueWithoutMembersInput[]
    set?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    disconnect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    delete?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    update?: CircleUpdateWithWhereUniqueWithoutMembersInput | CircleUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: CircleUpdateManyWithWhereWithoutMembersInput | CircleUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: CircleScalarWhereInput | CircleScalarWhereInput[]
  }

  export type CompletionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompletionCreateWithoutUserInput, CompletionUncheckedCreateWithoutUserInput> | CompletionCreateWithoutUserInput[] | CompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletionCreateOrConnectWithoutUserInput | CompletionCreateOrConnectWithoutUserInput[]
    upsert?: CompletionUpsertWithWhereUniqueWithoutUserInput | CompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompletionCreateManyUserInputEnvelope
    set?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    disconnect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    delete?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    connect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    update?: CompletionUpdateWithWhereUniqueWithoutUserInput | CompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompletionUpdateManyWithWhereWithoutUserInput | CompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompletionScalarWhereInput | CompletionScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput> | FriendshipCreateWithoutRequesterInput[] | FriendshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutRequesterInput | FriendshipCreateOrConnectWithoutRequesterInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutRequesterInput | FriendshipUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: FriendshipCreateManyRequesterInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutRequesterInput | FriendshipUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutRequesterInput | FriendshipUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutAddresseeNestedInput = {
    create?: XOR<FriendshipCreateWithoutAddresseeInput, FriendshipUncheckedCreateWithoutAddresseeInput> | FriendshipCreateWithoutAddresseeInput[] | FriendshipUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutAddresseeInput | FriendshipCreateOrConnectWithoutAddresseeInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutAddresseeInput | FriendshipUpsertWithWhereUniqueWithoutAddresseeInput[]
    createMany?: FriendshipCreateManyAddresseeInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutAddresseeInput | FriendshipUpdateWithWhereUniqueWithoutAddresseeInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutAddresseeInput | FriendshipUpdateManyWithWhereWithoutAddresseeInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type CircleInviteUpdateManyWithoutSenderNestedInput = {
    create?: XOR<CircleInviteCreateWithoutSenderInput, CircleInviteUncheckedCreateWithoutSenderInput> | CircleInviteCreateWithoutSenderInput[] | CircleInviteUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: CircleInviteCreateOrConnectWithoutSenderInput | CircleInviteCreateOrConnectWithoutSenderInput[]
    upsert?: CircleInviteUpsertWithWhereUniqueWithoutSenderInput | CircleInviteUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: CircleInviteCreateManySenderInputEnvelope
    set?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    disconnect?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    delete?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    connect?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    update?: CircleInviteUpdateWithWhereUniqueWithoutSenderInput | CircleInviteUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: CircleInviteUpdateManyWithWhereWithoutSenderInput | CircleInviteUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: CircleInviteScalarWhereInput | CircleInviteScalarWhereInput[]
  }

  export type CircleInviteUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<CircleInviteCreateWithoutRecipientInput, CircleInviteUncheckedCreateWithoutRecipientInput> | CircleInviteCreateWithoutRecipientInput[] | CircleInviteUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: CircleInviteCreateOrConnectWithoutRecipientInput | CircleInviteCreateOrConnectWithoutRecipientInput[]
    upsert?: CircleInviteUpsertWithWhereUniqueWithoutRecipientInput | CircleInviteUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: CircleInviteCreateManyRecipientInputEnvelope
    set?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    disconnect?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    delete?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    connect?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    update?: CircleInviteUpdateWithWhereUniqueWithoutRecipientInput | CircleInviteUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: CircleInviteUpdateManyWithWhereWithoutRecipientInput | CircleInviteUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: CircleInviteScalarWhereInput | CircleInviteScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type CircleUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CircleCreateWithoutOwnerInput, CircleUncheckedCreateWithoutOwnerInput> | CircleCreateWithoutOwnerInput[] | CircleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutOwnerInput | CircleCreateOrConnectWithoutOwnerInput[]
    upsert?: CircleUpsertWithWhereUniqueWithoutOwnerInput | CircleUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CircleCreateManyOwnerInputEnvelope
    set?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    disconnect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    delete?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    update?: CircleUpdateWithWhereUniqueWithoutOwnerInput | CircleUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CircleUpdateManyWithWhereWithoutOwnerInput | CircleUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CircleScalarWhereInput | CircleScalarWhereInput[]
  }

  export type CircleUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<CircleCreateWithoutMembersInput, CircleUncheckedCreateWithoutMembersInput> | CircleCreateWithoutMembersInput[] | CircleUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutMembersInput | CircleCreateOrConnectWithoutMembersInput[]
    upsert?: CircleUpsertWithWhereUniqueWithoutMembersInput | CircleUpsertWithWhereUniqueWithoutMembersInput[]
    set?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    disconnect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    delete?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    update?: CircleUpdateWithWhereUniqueWithoutMembersInput | CircleUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: CircleUpdateManyWithWhereWithoutMembersInput | CircleUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: CircleScalarWhereInput | CircleScalarWhereInput[]
  }

  export type CompletionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompletionCreateWithoutUserInput, CompletionUncheckedCreateWithoutUserInput> | CompletionCreateWithoutUserInput[] | CompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletionCreateOrConnectWithoutUserInput | CompletionCreateOrConnectWithoutUserInput[]
    upsert?: CompletionUpsertWithWhereUniqueWithoutUserInput | CompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompletionCreateManyUserInputEnvelope
    set?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    disconnect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    delete?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    connect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    update?: CompletionUpdateWithWhereUniqueWithoutUserInput | CompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompletionUpdateManyWithWhereWithoutUserInput | CompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompletionScalarWhereInput | CompletionScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput> | FriendshipCreateWithoutRequesterInput[] | FriendshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutRequesterInput | FriendshipCreateOrConnectWithoutRequesterInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutRequesterInput | FriendshipUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: FriendshipCreateManyRequesterInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutRequesterInput | FriendshipUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutRequesterInput | FriendshipUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput = {
    create?: XOR<FriendshipCreateWithoutAddresseeInput, FriendshipUncheckedCreateWithoutAddresseeInput> | FriendshipCreateWithoutAddresseeInput[] | FriendshipUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutAddresseeInput | FriendshipCreateOrConnectWithoutAddresseeInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutAddresseeInput | FriendshipUpsertWithWhereUniqueWithoutAddresseeInput[]
    createMany?: FriendshipCreateManyAddresseeInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutAddresseeInput | FriendshipUpdateWithWhereUniqueWithoutAddresseeInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutAddresseeInput | FriendshipUpdateManyWithWhereWithoutAddresseeInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type CircleInviteUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<CircleInviteCreateWithoutSenderInput, CircleInviteUncheckedCreateWithoutSenderInput> | CircleInviteCreateWithoutSenderInput[] | CircleInviteUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: CircleInviteCreateOrConnectWithoutSenderInput | CircleInviteCreateOrConnectWithoutSenderInput[]
    upsert?: CircleInviteUpsertWithWhereUniqueWithoutSenderInput | CircleInviteUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: CircleInviteCreateManySenderInputEnvelope
    set?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    disconnect?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    delete?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    connect?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    update?: CircleInviteUpdateWithWhereUniqueWithoutSenderInput | CircleInviteUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: CircleInviteUpdateManyWithWhereWithoutSenderInput | CircleInviteUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: CircleInviteScalarWhereInput | CircleInviteScalarWhereInput[]
  }

  export type CircleInviteUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<CircleInviteCreateWithoutRecipientInput, CircleInviteUncheckedCreateWithoutRecipientInput> | CircleInviteCreateWithoutRecipientInput[] | CircleInviteUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: CircleInviteCreateOrConnectWithoutRecipientInput | CircleInviteCreateOrConnectWithoutRecipientInput[]
    upsert?: CircleInviteUpsertWithWhereUniqueWithoutRecipientInput | CircleInviteUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: CircleInviteCreateManyRecipientInputEnvelope
    set?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    disconnect?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    delete?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    connect?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    update?: CircleInviteUpdateWithWhereUniqueWithoutRecipientInput | CircleInviteUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: CircleInviteUpdateManyWithWhereWithoutRecipientInput | CircleInviteUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: CircleInviteScalarWhereInput | CircleInviteScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSentFriendshipsInput = {
    create?: XOR<UserCreateWithoutSentFriendshipsInput, UserUncheckedCreateWithoutSentFriendshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentFriendshipsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedFriendshipsInput = {
    create?: XOR<UserCreateWithoutReceivedFriendshipsInput, UserUncheckedCreateWithoutReceivedFriendshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedFriendshipsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFriendshipStatusFieldUpdateOperationsInput = {
    set?: $Enums.FriendshipStatus
  }

  export type UserUpdateOneRequiredWithoutSentFriendshipsNestedInput = {
    create?: XOR<UserCreateWithoutSentFriendshipsInput, UserUncheckedCreateWithoutSentFriendshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentFriendshipsInput
    upsert?: UserUpsertWithoutSentFriendshipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentFriendshipsInput, UserUpdateWithoutSentFriendshipsInput>, UserUncheckedUpdateWithoutSentFriendshipsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedFriendshipsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedFriendshipsInput, UserUncheckedCreateWithoutReceivedFriendshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedFriendshipsInput
    upsert?: UserUpsertWithoutReceivedFriendshipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedFriendshipsInput, UserUpdateWithoutReceivedFriendshipsInput>, UserUncheckedUpdateWithoutReceivedFriendshipsInput>
  }

  export type UserCreateNestedOneWithoutSentCircleInvitesInput = {
    create?: XOR<UserCreateWithoutSentCircleInvitesInput, UserUncheckedCreateWithoutSentCircleInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentCircleInvitesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedCircleInvitesInput = {
    create?: XOR<UserCreateWithoutReceivedCircleInvitesInput, UserUncheckedCreateWithoutReceivedCircleInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedCircleInvitesInput
    connect?: UserWhereUniqueInput
  }

  export type CircleCreateNestedOneWithoutInvitesInput = {
    create?: XOR<CircleCreateWithoutInvitesInput, CircleUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: CircleCreateOrConnectWithoutInvitesInput
    connect?: CircleWhereUniqueInput
  }

  export type EnumInviteStatusFieldUpdateOperationsInput = {
    set?: $Enums.InviteStatus
  }

  export type UserUpdateOneRequiredWithoutSentCircleInvitesNestedInput = {
    create?: XOR<UserCreateWithoutSentCircleInvitesInput, UserUncheckedCreateWithoutSentCircleInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentCircleInvitesInput
    upsert?: UserUpsertWithoutSentCircleInvitesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentCircleInvitesInput, UserUpdateWithoutSentCircleInvitesInput>, UserUncheckedUpdateWithoutSentCircleInvitesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedCircleInvitesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedCircleInvitesInput, UserUncheckedCreateWithoutReceivedCircleInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedCircleInvitesInput
    upsert?: UserUpsertWithoutReceivedCircleInvitesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedCircleInvitesInput, UserUpdateWithoutReceivedCircleInvitesInput>, UserUncheckedUpdateWithoutReceivedCircleInvitesInput>
  }

  export type CircleUpdateOneRequiredWithoutInvitesNestedInput = {
    create?: XOR<CircleCreateWithoutInvitesInput, CircleUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: CircleCreateOrConnectWithoutInvitesInput
    upsert?: CircleUpsertWithoutInvitesInput
    connect?: CircleWhereUniqueInput
    update?: XOR<XOR<CircleUpdateToOneWithWhereWithoutInvitesInput, CircleUpdateWithoutInvitesInput>, CircleUncheckedUpdateWithoutInvitesInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type HabitCreateNestedOneWithoutPostsInput = {
    create?: XOR<HabitCreateWithoutPostsInput, HabitUncheckedCreateWithoutPostsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutPostsInput
    connect?: HabitWhereUniqueInput
  }

  export type CompletionCreateNestedOneWithoutPostInput = {
    create?: XOR<CompletionCreateWithoutPostInput, CompletionUncheckedCreateWithoutPostInput>
    connectOrCreate?: CompletionCreateOrConnectWithoutPostInput
    connect?: CompletionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type HabitUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<HabitCreateWithoutPostsInput, HabitUncheckedCreateWithoutPostsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutPostsInput
    upsert?: HabitUpsertWithoutPostsInput
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutPostsInput, HabitUpdateWithoutPostsInput>, HabitUncheckedUpdateWithoutPostsInput>
  }

  export type CompletionUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<CompletionCreateWithoutPostInput, CompletionUncheckedCreateWithoutPostInput>
    connectOrCreate?: CompletionCreateOrConnectWithoutPostInput
    upsert?: CompletionUpsertWithoutPostInput
    connect?: CompletionWhereUniqueInput
    update?: XOR<XOR<CompletionUpdateToOneWithWhereWithoutPostInput, CompletionUpdateWithoutPostInput>, CompletionUncheckedUpdateWithoutPostInput>
  }

  export type CircleCreateNestedOneWithoutHabitsInput = {
    create?: XOR<CircleCreateWithoutHabitsInput, CircleUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: CircleCreateOrConnectWithoutHabitsInput
    connect?: CircleWhereUniqueInput
  }

  export type CompletionCreateNestedManyWithoutHabitInput = {
    create?: XOR<CompletionCreateWithoutHabitInput, CompletionUncheckedCreateWithoutHabitInput> | CompletionCreateWithoutHabitInput[] | CompletionUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: CompletionCreateOrConnectWithoutHabitInput | CompletionCreateOrConnectWithoutHabitInput[]
    createMany?: CompletionCreateManyHabitInputEnvelope
    connect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutHabitInput = {
    create?: XOR<PostCreateWithoutHabitInput, PostUncheckedCreateWithoutHabitInput> | PostCreateWithoutHabitInput[] | PostUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: PostCreateOrConnectWithoutHabitInput | PostCreateOrConnectWithoutHabitInput[]
    createMany?: PostCreateManyHabitInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CompletionUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<CompletionCreateWithoutHabitInput, CompletionUncheckedCreateWithoutHabitInput> | CompletionCreateWithoutHabitInput[] | CompletionUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: CompletionCreateOrConnectWithoutHabitInput | CompletionCreateOrConnectWithoutHabitInput[]
    createMany?: CompletionCreateManyHabitInputEnvelope
    connect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<PostCreateWithoutHabitInput, PostUncheckedCreateWithoutHabitInput> | PostCreateWithoutHabitInput[] | PostUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: PostCreateOrConnectWithoutHabitInput | PostCreateOrConnectWithoutHabitInput[]
    createMany?: PostCreateManyHabitInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CircleUpdateOneRequiredWithoutHabitsNestedInput = {
    create?: XOR<CircleCreateWithoutHabitsInput, CircleUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: CircleCreateOrConnectWithoutHabitsInput
    upsert?: CircleUpsertWithoutHabitsInput
    connect?: CircleWhereUniqueInput
    update?: XOR<XOR<CircleUpdateToOneWithWhereWithoutHabitsInput, CircleUpdateWithoutHabitsInput>, CircleUncheckedUpdateWithoutHabitsInput>
  }

  export type CompletionUpdateManyWithoutHabitNestedInput = {
    create?: XOR<CompletionCreateWithoutHabitInput, CompletionUncheckedCreateWithoutHabitInput> | CompletionCreateWithoutHabitInput[] | CompletionUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: CompletionCreateOrConnectWithoutHabitInput | CompletionCreateOrConnectWithoutHabitInput[]
    upsert?: CompletionUpsertWithWhereUniqueWithoutHabitInput | CompletionUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: CompletionCreateManyHabitInputEnvelope
    set?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    disconnect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    delete?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    connect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    update?: CompletionUpdateWithWhereUniqueWithoutHabitInput | CompletionUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: CompletionUpdateManyWithWhereWithoutHabitInput | CompletionUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: CompletionScalarWhereInput | CompletionScalarWhereInput[]
  }

  export type PostUpdateManyWithoutHabitNestedInput = {
    create?: XOR<PostCreateWithoutHabitInput, PostUncheckedCreateWithoutHabitInput> | PostCreateWithoutHabitInput[] | PostUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: PostCreateOrConnectWithoutHabitInput | PostCreateOrConnectWithoutHabitInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutHabitInput | PostUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: PostCreateManyHabitInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutHabitInput | PostUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: PostUpdateManyWithWhereWithoutHabitInput | PostUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CompletionUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<CompletionCreateWithoutHabitInput, CompletionUncheckedCreateWithoutHabitInput> | CompletionCreateWithoutHabitInput[] | CompletionUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: CompletionCreateOrConnectWithoutHabitInput | CompletionCreateOrConnectWithoutHabitInput[]
    upsert?: CompletionUpsertWithWhereUniqueWithoutHabitInput | CompletionUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: CompletionCreateManyHabitInputEnvelope
    set?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    disconnect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    delete?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    connect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    update?: CompletionUpdateWithWhereUniqueWithoutHabitInput | CompletionUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: CompletionUpdateManyWithWhereWithoutHabitInput | CompletionUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: CompletionScalarWhereInput | CompletionScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<PostCreateWithoutHabitInput, PostUncheckedCreateWithoutHabitInput> | PostCreateWithoutHabitInput[] | PostUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: PostCreateOrConnectWithoutHabitInput | PostCreateOrConnectWithoutHabitInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutHabitInput | PostUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: PostCreateManyHabitInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutHabitInput | PostUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: PostUpdateManyWithWhereWithoutHabitInput | PostUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedCirclesInput = {
    create?: XOR<UserCreateWithoutOwnedCirclesInput, UserUncheckedCreateWithoutOwnedCirclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedCirclesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutJoinedCirclesInput = {
    create?: XOR<UserCreateWithoutJoinedCirclesInput, UserUncheckedCreateWithoutJoinedCirclesInput> | UserCreateWithoutJoinedCirclesInput[] | UserUncheckedCreateWithoutJoinedCirclesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJoinedCirclesInput | UserCreateOrConnectWithoutJoinedCirclesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type HabitCreateNestedManyWithoutCircleInput = {
    create?: XOR<HabitCreateWithoutCircleInput, HabitUncheckedCreateWithoutCircleInput> | HabitCreateWithoutCircleInput[] | HabitUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutCircleInput | HabitCreateOrConnectWithoutCircleInput[]
    createMany?: HabitCreateManyCircleInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type CircleInviteCreateNestedManyWithoutCircleInput = {
    create?: XOR<CircleInviteCreateWithoutCircleInput, CircleInviteUncheckedCreateWithoutCircleInput> | CircleInviteCreateWithoutCircleInput[] | CircleInviteUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: CircleInviteCreateOrConnectWithoutCircleInput | CircleInviteCreateOrConnectWithoutCircleInput[]
    createMany?: CircleInviteCreateManyCircleInputEnvelope
    connect?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutJoinedCirclesInput = {
    create?: XOR<UserCreateWithoutJoinedCirclesInput, UserUncheckedCreateWithoutJoinedCirclesInput> | UserCreateWithoutJoinedCirclesInput[] | UserUncheckedCreateWithoutJoinedCirclesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJoinedCirclesInput | UserCreateOrConnectWithoutJoinedCirclesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type HabitUncheckedCreateNestedManyWithoutCircleInput = {
    create?: XOR<HabitCreateWithoutCircleInput, HabitUncheckedCreateWithoutCircleInput> | HabitCreateWithoutCircleInput[] | HabitUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutCircleInput | HabitCreateOrConnectWithoutCircleInput[]
    createMany?: HabitCreateManyCircleInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type CircleInviteUncheckedCreateNestedManyWithoutCircleInput = {
    create?: XOR<CircleInviteCreateWithoutCircleInput, CircleInviteUncheckedCreateWithoutCircleInput> | CircleInviteCreateWithoutCircleInput[] | CircleInviteUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: CircleInviteCreateOrConnectWithoutCircleInput | CircleInviteCreateOrConnectWithoutCircleInput[]
    createMany?: CircleInviteCreateManyCircleInputEnvelope
    connect?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOwnedCirclesNestedInput = {
    create?: XOR<UserCreateWithoutOwnedCirclesInput, UserUncheckedCreateWithoutOwnedCirclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedCirclesInput
    upsert?: UserUpsertWithoutOwnedCirclesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedCirclesInput, UserUpdateWithoutOwnedCirclesInput>, UserUncheckedUpdateWithoutOwnedCirclesInput>
  }

  export type UserUpdateManyWithoutJoinedCirclesNestedInput = {
    create?: XOR<UserCreateWithoutJoinedCirclesInput, UserUncheckedCreateWithoutJoinedCirclesInput> | UserCreateWithoutJoinedCirclesInput[] | UserUncheckedCreateWithoutJoinedCirclesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJoinedCirclesInput | UserCreateOrConnectWithoutJoinedCirclesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutJoinedCirclesInput | UserUpsertWithWhereUniqueWithoutJoinedCirclesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutJoinedCirclesInput | UserUpdateWithWhereUniqueWithoutJoinedCirclesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutJoinedCirclesInput | UserUpdateManyWithWhereWithoutJoinedCirclesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HabitUpdateManyWithoutCircleNestedInput = {
    create?: XOR<HabitCreateWithoutCircleInput, HabitUncheckedCreateWithoutCircleInput> | HabitCreateWithoutCircleInput[] | HabitUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutCircleInput | HabitCreateOrConnectWithoutCircleInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutCircleInput | HabitUpsertWithWhereUniqueWithoutCircleInput[]
    createMany?: HabitCreateManyCircleInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutCircleInput | HabitUpdateWithWhereUniqueWithoutCircleInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutCircleInput | HabitUpdateManyWithWhereWithoutCircleInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type CircleInviteUpdateManyWithoutCircleNestedInput = {
    create?: XOR<CircleInviteCreateWithoutCircleInput, CircleInviteUncheckedCreateWithoutCircleInput> | CircleInviteCreateWithoutCircleInput[] | CircleInviteUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: CircleInviteCreateOrConnectWithoutCircleInput | CircleInviteCreateOrConnectWithoutCircleInput[]
    upsert?: CircleInviteUpsertWithWhereUniqueWithoutCircleInput | CircleInviteUpsertWithWhereUniqueWithoutCircleInput[]
    createMany?: CircleInviteCreateManyCircleInputEnvelope
    set?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    disconnect?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    delete?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    connect?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    update?: CircleInviteUpdateWithWhereUniqueWithoutCircleInput | CircleInviteUpdateWithWhereUniqueWithoutCircleInput[]
    updateMany?: CircleInviteUpdateManyWithWhereWithoutCircleInput | CircleInviteUpdateManyWithWhereWithoutCircleInput[]
    deleteMany?: CircleInviteScalarWhereInput | CircleInviteScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutJoinedCirclesNestedInput = {
    create?: XOR<UserCreateWithoutJoinedCirclesInput, UserUncheckedCreateWithoutJoinedCirclesInput> | UserCreateWithoutJoinedCirclesInput[] | UserUncheckedCreateWithoutJoinedCirclesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJoinedCirclesInput | UserCreateOrConnectWithoutJoinedCirclesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutJoinedCirclesInput | UserUpsertWithWhereUniqueWithoutJoinedCirclesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutJoinedCirclesInput | UserUpdateWithWhereUniqueWithoutJoinedCirclesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutJoinedCirclesInput | UserUpdateManyWithWhereWithoutJoinedCirclesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HabitUncheckedUpdateManyWithoutCircleNestedInput = {
    create?: XOR<HabitCreateWithoutCircleInput, HabitUncheckedCreateWithoutCircleInput> | HabitCreateWithoutCircleInput[] | HabitUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutCircleInput | HabitCreateOrConnectWithoutCircleInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutCircleInput | HabitUpsertWithWhereUniqueWithoutCircleInput[]
    createMany?: HabitCreateManyCircleInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutCircleInput | HabitUpdateWithWhereUniqueWithoutCircleInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutCircleInput | HabitUpdateManyWithWhereWithoutCircleInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type CircleInviteUncheckedUpdateManyWithoutCircleNestedInput = {
    create?: XOR<CircleInviteCreateWithoutCircleInput, CircleInviteUncheckedCreateWithoutCircleInput> | CircleInviteCreateWithoutCircleInput[] | CircleInviteUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: CircleInviteCreateOrConnectWithoutCircleInput | CircleInviteCreateOrConnectWithoutCircleInput[]
    upsert?: CircleInviteUpsertWithWhereUniqueWithoutCircleInput | CircleInviteUpsertWithWhereUniqueWithoutCircleInput[]
    createMany?: CircleInviteCreateManyCircleInputEnvelope
    set?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    disconnect?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    delete?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    connect?: CircleInviteWhereUniqueInput | CircleInviteWhereUniqueInput[]
    update?: CircleInviteUpdateWithWhereUniqueWithoutCircleInput | CircleInviteUpdateWithWhereUniqueWithoutCircleInput[]
    updateMany?: CircleInviteUpdateManyWithWhereWithoutCircleInput | CircleInviteUpdateManyWithWhereWithoutCircleInput[]
    deleteMany?: CircleInviteScalarWhereInput | CircleInviteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCompletionsInput = {
    create?: XOR<UserCreateWithoutCompletionsInput, UserUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompletionsInput
    connect?: UserWhereUniqueInput
  }

  export type HabitCreateNestedOneWithoutCompletionsInput = {
    create?: XOR<HabitCreateWithoutCompletionsInput, HabitUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutCompletionsInput
    connect?: HabitWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutCompletionInput = {
    create?: XOR<PostCreateWithoutCompletionInput, PostUncheckedCreateWithoutCompletionInput>
    connectOrCreate?: PostCreateOrConnectWithoutCompletionInput
    connect?: PostWhereUniqueInput
  }

  export type PostUncheckedCreateNestedOneWithoutCompletionInput = {
    create?: XOR<PostCreateWithoutCompletionInput, PostUncheckedCreateWithoutCompletionInput>
    connectOrCreate?: PostCreateOrConnectWithoutCompletionInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCompletionsNestedInput = {
    create?: XOR<UserCreateWithoutCompletionsInput, UserUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompletionsInput
    upsert?: UserUpsertWithoutCompletionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompletionsInput, UserUpdateWithoutCompletionsInput>, UserUncheckedUpdateWithoutCompletionsInput>
  }

  export type HabitUpdateOneRequiredWithoutCompletionsNestedInput = {
    create?: XOR<HabitCreateWithoutCompletionsInput, HabitUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutCompletionsInput
    upsert?: HabitUpsertWithoutCompletionsInput
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutCompletionsInput, HabitUpdateWithoutCompletionsInput>, HabitUncheckedUpdateWithoutCompletionsInput>
  }

  export type PostUpdateOneWithoutCompletionNestedInput = {
    create?: XOR<PostCreateWithoutCompletionInput, PostUncheckedCreateWithoutCompletionInput>
    connectOrCreate?: PostCreateOrConnectWithoutCompletionInput
    upsert?: PostUpsertWithoutCompletionInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCompletionInput, PostUpdateWithoutCompletionInput>, PostUncheckedUpdateWithoutCompletionInput>
  }

  export type PostUncheckedUpdateOneWithoutCompletionNestedInput = {
    create?: XOR<PostCreateWithoutCompletionInput, PostUncheckedCreateWithoutCompletionInput>
    connectOrCreate?: PostCreateOrConnectWithoutCompletionInput
    upsert?: PostUpsertWithoutCompletionInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCompletionInput, PostUpdateWithoutCompletionInput>, PostUncheckedUpdateWithoutCompletionInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumFriendshipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendshipStatusFilter<$PrismaModel> | $Enums.FriendshipStatus
  }

  export type NestedEnumFriendshipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendshipStatusWithAggregatesFilter<$PrismaModel> | $Enums.FriendshipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriendshipStatusFilter<$PrismaModel>
    _max?: NestedEnumFriendshipStatusFilter<$PrismaModel>
  }

  export type NestedEnumInviteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatusFilter<$PrismaModel> | $Enums.InviteStatus
  }

  export type NestedEnumInviteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatusWithAggregatesFilter<$PrismaModel> | $Enums.InviteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInviteStatusFilter<$PrismaModel>
    _max?: NestedEnumInviteStatusFilter<$PrismaModel>
  }

  export type CircleCreateWithoutOwnerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    photoKey?: string | null
    members?: UserCreateNestedManyWithoutJoinedCirclesInput
    habits?: HabitCreateNestedManyWithoutCircleInput
    invites?: CircleInviteCreateNestedManyWithoutCircleInput
  }

  export type CircleUncheckedCreateWithoutOwnerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    photoKey?: string | null
    members?: UserUncheckedCreateNestedManyWithoutJoinedCirclesInput
    habits?: HabitUncheckedCreateNestedManyWithoutCircleInput
    invites?: CircleInviteUncheckedCreateNestedManyWithoutCircleInput
  }

  export type CircleCreateOrConnectWithoutOwnerInput = {
    where: CircleWhereUniqueInput
    create: XOR<CircleCreateWithoutOwnerInput, CircleUncheckedCreateWithoutOwnerInput>
  }

  export type CircleCreateManyOwnerInputEnvelope = {
    data: CircleCreateManyOwnerInput | CircleCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type CircleCreateWithoutMembersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    photoKey?: string | null
    owner: UserCreateNestedOneWithoutOwnedCirclesInput
    habits?: HabitCreateNestedManyWithoutCircleInput
    invites?: CircleInviteCreateNestedManyWithoutCircleInput
  }

  export type CircleUncheckedCreateWithoutMembersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    photoKey?: string | null
    ownerId: string
    habits?: HabitUncheckedCreateNestedManyWithoutCircleInput
    invites?: CircleInviteUncheckedCreateNestedManyWithoutCircleInput
  }

  export type CircleCreateOrConnectWithoutMembersInput = {
    where: CircleWhereUniqueInput
    create: XOR<CircleCreateWithoutMembersInput, CircleUncheckedCreateWithoutMembersInput>
  }

  export type CompletionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    completedAt: Date | string
    habit: HabitCreateNestedOneWithoutCompletionsInput
    post?: PostCreateNestedOneWithoutCompletionInput
  }

  export type CompletionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    completedAt: Date | string
    habitId: string
    post?: PostUncheckedCreateNestedOneWithoutCompletionInput
  }

  export type CompletionCreateOrConnectWithoutUserInput = {
    where: CompletionWhereUniqueInput
    create: XOR<CompletionCreateWithoutUserInput, CompletionUncheckedCreateWithoutUserInput>
  }

  export type CompletionCreateManyUserInputEnvelope = {
    data: CompletionCreateManyUserInput | CompletionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photoKey?: string | null
    caption?: string | null
    habit: HabitCreateNestedOneWithoutPostsInput
    completion: CompletionCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habitId: string
    completionId: string
    photoKey?: string | null
    caption?: string | null
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutRequesterInput = {
    id?: string
    createdAt?: Date | string
    status?: $Enums.FriendshipStatus
    addressee: UserCreateNestedOneWithoutReceivedFriendshipsInput
  }

  export type FriendshipUncheckedCreateWithoutRequesterInput = {
    id?: string
    createdAt?: Date | string
    addresseeId: string
    status?: $Enums.FriendshipStatus
  }

  export type FriendshipCreateOrConnectWithoutRequesterInput = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput>
  }

  export type FriendshipCreateManyRequesterInputEnvelope = {
    data: FriendshipCreateManyRequesterInput | FriendshipCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutAddresseeInput = {
    id?: string
    createdAt?: Date | string
    status?: $Enums.FriendshipStatus
    requester: UserCreateNestedOneWithoutSentFriendshipsInput
  }

  export type FriendshipUncheckedCreateWithoutAddresseeInput = {
    id?: string
    createdAt?: Date | string
    requesterId: string
    status?: $Enums.FriendshipStatus
  }

  export type FriendshipCreateOrConnectWithoutAddresseeInput = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutAddresseeInput, FriendshipUncheckedCreateWithoutAddresseeInput>
  }

  export type FriendshipCreateManyAddresseeInputEnvelope = {
    data: FriendshipCreateManyAddresseeInput | FriendshipCreateManyAddresseeInput[]
    skipDuplicates?: boolean
  }

  export type CircleInviteCreateWithoutSenderInput = {
    id?: string
    createdAt?: Date | string
    status?: $Enums.InviteStatus
    recipient: UserCreateNestedOneWithoutReceivedCircleInvitesInput
    circle: CircleCreateNestedOneWithoutInvitesInput
  }

  export type CircleInviteUncheckedCreateWithoutSenderInput = {
    id?: string
    createdAt?: Date | string
    recipientId: string
    circleId: string
    status?: $Enums.InviteStatus
  }

  export type CircleInviteCreateOrConnectWithoutSenderInput = {
    where: CircleInviteWhereUniqueInput
    create: XOR<CircleInviteCreateWithoutSenderInput, CircleInviteUncheckedCreateWithoutSenderInput>
  }

  export type CircleInviteCreateManySenderInputEnvelope = {
    data: CircleInviteCreateManySenderInput | CircleInviteCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type CircleInviteCreateWithoutRecipientInput = {
    id?: string
    createdAt?: Date | string
    status?: $Enums.InviteStatus
    sender: UserCreateNestedOneWithoutSentCircleInvitesInput
    circle: CircleCreateNestedOneWithoutInvitesInput
  }

  export type CircleInviteUncheckedCreateWithoutRecipientInput = {
    id?: string
    createdAt?: Date | string
    senderId: string
    circleId: string
    status?: $Enums.InviteStatus
  }

  export type CircleInviteCreateOrConnectWithoutRecipientInput = {
    where: CircleInviteWhereUniqueInput
    create: XOR<CircleInviteCreateWithoutRecipientInput, CircleInviteUncheckedCreateWithoutRecipientInput>
  }

  export type CircleInviteCreateManyRecipientInputEnvelope = {
    data: CircleInviteCreateManyRecipientInput | CircleInviteCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.AccountType
    hashedPassword?: string | null
    passwordVersion?: number | null
    failedAttempts?: number | null
    emailVerified?: boolean | null
    provider?: string | null
    providerAccountId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.AccountType
    hashedPassword?: string | null
    passwordVersion?: number | null
    failedAttempts?: number | null
    emailVerified?: boolean | null
    provider?: string | null
    providerAccountId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CircleUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CircleWhereUniqueInput
    update: XOR<CircleUpdateWithoutOwnerInput, CircleUncheckedUpdateWithoutOwnerInput>
    create: XOR<CircleCreateWithoutOwnerInput, CircleUncheckedCreateWithoutOwnerInput>
  }

  export type CircleUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CircleWhereUniqueInput
    data: XOR<CircleUpdateWithoutOwnerInput, CircleUncheckedUpdateWithoutOwnerInput>
  }

  export type CircleUpdateManyWithWhereWithoutOwnerInput = {
    where: CircleScalarWhereInput
    data: XOR<CircleUpdateManyMutationInput, CircleUncheckedUpdateManyWithoutOwnerInput>
  }

  export type CircleScalarWhereInput = {
    AND?: CircleScalarWhereInput | CircleScalarWhereInput[]
    OR?: CircleScalarWhereInput[]
    NOT?: CircleScalarWhereInput | CircleScalarWhereInput[]
    id?: StringFilter<"Circle"> | string
    createdAt?: DateTimeFilter<"Circle"> | Date | string
    updatedAt?: DateTimeFilter<"Circle"> | Date | string
    name?: StringFilter<"Circle"> | string
    photoKey?: StringNullableFilter<"Circle"> | string | null
    ownerId?: StringFilter<"Circle"> | string
  }

  export type CircleUpsertWithWhereUniqueWithoutMembersInput = {
    where: CircleWhereUniqueInput
    update: XOR<CircleUpdateWithoutMembersInput, CircleUncheckedUpdateWithoutMembersInput>
    create: XOR<CircleCreateWithoutMembersInput, CircleUncheckedCreateWithoutMembersInput>
  }

  export type CircleUpdateWithWhereUniqueWithoutMembersInput = {
    where: CircleWhereUniqueInput
    data: XOR<CircleUpdateWithoutMembersInput, CircleUncheckedUpdateWithoutMembersInput>
  }

  export type CircleUpdateManyWithWhereWithoutMembersInput = {
    where: CircleScalarWhereInput
    data: XOR<CircleUpdateManyMutationInput, CircleUncheckedUpdateManyWithoutMembersInput>
  }

  export type CompletionUpsertWithWhereUniqueWithoutUserInput = {
    where: CompletionWhereUniqueInput
    update: XOR<CompletionUpdateWithoutUserInput, CompletionUncheckedUpdateWithoutUserInput>
    create: XOR<CompletionCreateWithoutUserInput, CompletionUncheckedCreateWithoutUserInput>
  }

  export type CompletionUpdateWithWhereUniqueWithoutUserInput = {
    where: CompletionWhereUniqueInput
    data: XOR<CompletionUpdateWithoutUserInput, CompletionUncheckedUpdateWithoutUserInput>
  }

  export type CompletionUpdateManyWithWhereWithoutUserInput = {
    where: CompletionScalarWhereInput
    data: XOR<CompletionUpdateManyMutationInput, CompletionUncheckedUpdateManyWithoutUserInput>
  }

  export type CompletionScalarWhereInput = {
    AND?: CompletionScalarWhereInput | CompletionScalarWhereInput[]
    OR?: CompletionScalarWhereInput[]
    NOT?: CompletionScalarWhereInput | CompletionScalarWhereInput[]
    id?: StringFilter<"Completion"> | string
    createdAt?: DateTimeFilter<"Completion"> | Date | string
    completedAt?: DateTimeFilter<"Completion"> | Date | string
    userId?: StringFilter<"Completion"> | string
    habitId?: StringFilter<"Completion"> | string
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    userId?: StringFilter<"Post"> | string
    habitId?: StringFilter<"Post"> | string
    completionId?: StringFilter<"Post"> | string
    photoKey?: StringNullableFilter<"Post"> | string | null
    caption?: StringNullableFilter<"Post"> | string | null
  }

  export type FriendshipUpsertWithWhereUniqueWithoutRequesterInput = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutRequesterInput, FriendshipUncheckedUpdateWithoutRequesterInput>
    create: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutRequesterInput = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutRequesterInput, FriendshipUncheckedUpdateWithoutRequesterInput>
  }

  export type FriendshipUpdateManyWithWhereWithoutRequesterInput = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutRequesterInput>
  }

  export type FriendshipScalarWhereInput = {
    AND?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    OR?: FriendshipScalarWhereInput[]
    NOT?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    id?: StringFilter<"Friendship"> | string
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    requesterId?: StringFilter<"Friendship"> | string
    addresseeId?: StringFilter<"Friendship"> | string
    status?: EnumFriendshipStatusFilter<"Friendship"> | $Enums.FriendshipStatus
  }

  export type FriendshipUpsertWithWhereUniqueWithoutAddresseeInput = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutAddresseeInput, FriendshipUncheckedUpdateWithoutAddresseeInput>
    create: XOR<FriendshipCreateWithoutAddresseeInput, FriendshipUncheckedCreateWithoutAddresseeInput>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutAddresseeInput = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutAddresseeInput, FriendshipUncheckedUpdateWithoutAddresseeInput>
  }

  export type FriendshipUpdateManyWithWhereWithoutAddresseeInput = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutAddresseeInput>
  }

  export type CircleInviteUpsertWithWhereUniqueWithoutSenderInput = {
    where: CircleInviteWhereUniqueInput
    update: XOR<CircleInviteUpdateWithoutSenderInput, CircleInviteUncheckedUpdateWithoutSenderInput>
    create: XOR<CircleInviteCreateWithoutSenderInput, CircleInviteUncheckedCreateWithoutSenderInput>
  }

  export type CircleInviteUpdateWithWhereUniqueWithoutSenderInput = {
    where: CircleInviteWhereUniqueInput
    data: XOR<CircleInviteUpdateWithoutSenderInput, CircleInviteUncheckedUpdateWithoutSenderInput>
  }

  export type CircleInviteUpdateManyWithWhereWithoutSenderInput = {
    where: CircleInviteScalarWhereInput
    data: XOR<CircleInviteUpdateManyMutationInput, CircleInviteUncheckedUpdateManyWithoutSenderInput>
  }

  export type CircleInviteScalarWhereInput = {
    AND?: CircleInviteScalarWhereInput | CircleInviteScalarWhereInput[]
    OR?: CircleInviteScalarWhereInput[]
    NOT?: CircleInviteScalarWhereInput | CircleInviteScalarWhereInput[]
    id?: StringFilter<"CircleInvite"> | string
    createdAt?: DateTimeFilter<"CircleInvite"> | Date | string
    senderId?: StringFilter<"CircleInvite"> | string
    recipientId?: StringFilter<"CircleInvite"> | string
    circleId?: StringFilter<"CircleInvite"> | string
    status?: EnumInviteStatusFilter<"CircleInvite"> | $Enums.InviteStatus
  }

  export type CircleInviteUpsertWithWhereUniqueWithoutRecipientInput = {
    where: CircleInviteWhereUniqueInput
    update: XOR<CircleInviteUpdateWithoutRecipientInput, CircleInviteUncheckedUpdateWithoutRecipientInput>
    create: XOR<CircleInviteCreateWithoutRecipientInput, CircleInviteUncheckedCreateWithoutRecipientInput>
  }

  export type CircleInviteUpdateWithWhereUniqueWithoutRecipientInput = {
    where: CircleInviteWhereUniqueInput
    data: XOR<CircleInviteUpdateWithoutRecipientInput, CircleInviteUncheckedUpdateWithoutRecipientInput>
  }

  export type CircleInviteUpdateManyWithWhereWithoutRecipientInput = {
    where: CircleInviteScalarWhereInput
    data: XOR<CircleInviteUpdateManyMutationInput, CircleInviteUncheckedUpdateManyWithoutRecipientInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    userId?: StringFilter<"Account"> | string
    type?: EnumAccountTypeFilter<"Account"> | $Enums.AccountType
    hashedPassword?: StringNullableFilter<"Account"> | string | null
    passwordVersion?: IntNullableFilter<"Account"> | number | null
    failedAttempts?: IntNullableFilter<"Account"> | number | null
    emailVerified?: BoolNullableFilter<"Account"> | boolean | null
    provider?: StringNullableFilter<"Account"> | string | null
    providerAccountId?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    ownedCircles?: CircleCreateNestedManyWithoutOwnerInput
    joinedCircles?: CircleCreateNestedManyWithoutMembersInput
    completions?: CompletionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    sentFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    sentCircleInvites?: CircleInviteCreateNestedManyWithoutSenderInput
    receivedCircleInvites?: CircleInviteCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    ownedCircles?: CircleUncheckedCreateNestedManyWithoutOwnerInput
    joinedCircles?: CircleUncheckedCreateNestedManyWithoutMembersInput
    completions?: CompletionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    sentFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    sentCircleInvites?: CircleInviteUncheckedCreateNestedManyWithoutSenderInput
    receivedCircleInvites?: CircleInviteUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownedCircles?: CircleUpdateManyWithoutOwnerNestedInput
    joinedCircles?: CircleUpdateManyWithoutMembersNestedInput
    completions?: CompletionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    sentFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    sentCircleInvites?: CircleInviteUpdateManyWithoutSenderNestedInput
    receivedCircleInvites?: CircleInviteUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownedCircles?: CircleUncheckedUpdateManyWithoutOwnerNestedInput
    joinedCircles?: CircleUncheckedUpdateManyWithoutMembersNestedInput
    completions?: CompletionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    sentFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    sentCircleInvites?: CircleInviteUncheckedUpdateManyWithoutSenderNestedInput
    receivedCircleInvites?: CircleInviteUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserCreateWithoutSentFriendshipsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    ownedCircles?: CircleCreateNestedManyWithoutOwnerInput
    joinedCircles?: CircleCreateNestedManyWithoutMembersInput
    completions?: CompletionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    sentCircleInvites?: CircleInviteCreateNestedManyWithoutSenderInput
    receivedCircleInvites?: CircleInviteCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentFriendshipsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    ownedCircles?: CircleUncheckedCreateNestedManyWithoutOwnerInput
    joinedCircles?: CircleUncheckedCreateNestedManyWithoutMembersInput
    completions?: CompletionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    sentCircleInvites?: CircleInviteUncheckedCreateNestedManyWithoutSenderInput
    receivedCircleInvites?: CircleInviteUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentFriendshipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentFriendshipsInput, UserUncheckedCreateWithoutSentFriendshipsInput>
  }

  export type UserCreateWithoutReceivedFriendshipsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    ownedCircles?: CircleCreateNestedManyWithoutOwnerInput
    joinedCircles?: CircleCreateNestedManyWithoutMembersInput
    completions?: CompletionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    sentFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    sentCircleInvites?: CircleInviteCreateNestedManyWithoutSenderInput
    receivedCircleInvites?: CircleInviteCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedFriendshipsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    ownedCircles?: CircleUncheckedCreateNestedManyWithoutOwnerInput
    joinedCircles?: CircleUncheckedCreateNestedManyWithoutMembersInput
    completions?: CompletionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    sentFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    sentCircleInvites?: CircleInviteUncheckedCreateNestedManyWithoutSenderInput
    receivedCircleInvites?: CircleInviteUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedFriendshipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedFriendshipsInput, UserUncheckedCreateWithoutReceivedFriendshipsInput>
  }

  export type UserUpsertWithoutSentFriendshipsInput = {
    update: XOR<UserUpdateWithoutSentFriendshipsInput, UserUncheckedUpdateWithoutSentFriendshipsInput>
    create: XOR<UserCreateWithoutSentFriendshipsInput, UserUncheckedCreateWithoutSentFriendshipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentFriendshipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentFriendshipsInput, UserUncheckedUpdateWithoutSentFriendshipsInput>
  }

  export type UserUpdateWithoutSentFriendshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownedCircles?: CircleUpdateManyWithoutOwnerNestedInput
    joinedCircles?: CircleUpdateManyWithoutMembersNestedInput
    completions?: CompletionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    sentCircleInvites?: CircleInviteUpdateManyWithoutSenderNestedInput
    receivedCircleInvites?: CircleInviteUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentFriendshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownedCircles?: CircleUncheckedUpdateManyWithoutOwnerNestedInput
    joinedCircles?: CircleUncheckedUpdateManyWithoutMembersNestedInput
    completions?: CompletionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    sentCircleInvites?: CircleInviteUncheckedUpdateManyWithoutSenderNestedInput
    receivedCircleInvites?: CircleInviteUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedFriendshipsInput = {
    update: XOR<UserUpdateWithoutReceivedFriendshipsInput, UserUncheckedUpdateWithoutReceivedFriendshipsInput>
    create: XOR<UserCreateWithoutReceivedFriendshipsInput, UserUncheckedCreateWithoutReceivedFriendshipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedFriendshipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedFriendshipsInput, UserUncheckedUpdateWithoutReceivedFriendshipsInput>
  }

  export type UserUpdateWithoutReceivedFriendshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownedCircles?: CircleUpdateManyWithoutOwnerNestedInput
    joinedCircles?: CircleUpdateManyWithoutMembersNestedInput
    completions?: CompletionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    sentFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    sentCircleInvites?: CircleInviteUpdateManyWithoutSenderNestedInput
    receivedCircleInvites?: CircleInviteUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedFriendshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownedCircles?: CircleUncheckedUpdateManyWithoutOwnerNestedInput
    joinedCircles?: CircleUncheckedUpdateManyWithoutMembersNestedInput
    completions?: CompletionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    sentFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    sentCircleInvites?: CircleInviteUncheckedUpdateManyWithoutSenderNestedInput
    receivedCircleInvites?: CircleInviteUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSentCircleInvitesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    ownedCircles?: CircleCreateNestedManyWithoutOwnerInput
    joinedCircles?: CircleCreateNestedManyWithoutMembersInput
    completions?: CompletionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    sentFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    receivedCircleInvites?: CircleInviteCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentCircleInvitesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    ownedCircles?: CircleUncheckedCreateNestedManyWithoutOwnerInput
    joinedCircles?: CircleUncheckedCreateNestedManyWithoutMembersInput
    completions?: CompletionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    sentFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    receivedCircleInvites?: CircleInviteUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentCircleInvitesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentCircleInvitesInput, UserUncheckedCreateWithoutSentCircleInvitesInput>
  }

  export type UserCreateWithoutReceivedCircleInvitesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    ownedCircles?: CircleCreateNestedManyWithoutOwnerInput
    joinedCircles?: CircleCreateNestedManyWithoutMembersInput
    completions?: CompletionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    sentFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    sentCircleInvites?: CircleInviteCreateNestedManyWithoutSenderInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedCircleInvitesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    ownedCircles?: CircleUncheckedCreateNestedManyWithoutOwnerInput
    joinedCircles?: CircleUncheckedCreateNestedManyWithoutMembersInput
    completions?: CompletionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    sentFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    sentCircleInvites?: CircleInviteUncheckedCreateNestedManyWithoutSenderInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedCircleInvitesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedCircleInvitesInput, UserUncheckedCreateWithoutReceivedCircleInvitesInput>
  }

  export type CircleCreateWithoutInvitesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    photoKey?: string | null
    owner: UserCreateNestedOneWithoutOwnedCirclesInput
    members?: UserCreateNestedManyWithoutJoinedCirclesInput
    habits?: HabitCreateNestedManyWithoutCircleInput
  }

  export type CircleUncheckedCreateWithoutInvitesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    photoKey?: string | null
    ownerId: string
    members?: UserUncheckedCreateNestedManyWithoutJoinedCirclesInput
    habits?: HabitUncheckedCreateNestedManyWithoutCircleInput
  }

  export type CircleCreateOrConnectWithoutInvitesInput = {
    where: CircleWhereUniqueInput
    create: XOR<CircleCreateWithoutInvitesInput, CircleUncheckedCreateWithoutInvitesInput>
  }

  export type UserUpsertWithoutSentCircleInvitesInput = {
    update: XOR<UserUpdateWithoutSentCircleInvitesInput, UserUncheckedUpdateWithoutSentCircleInvitesInput>
    create: XOR<UserCreateWithoutSentCircleInvitesInput, UserUncheckedCreateWithoutSentCircleInvitesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentCircleInvitesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentCircleInvitesInput, UserUncheckedUpdateWithoutSentCircleInvitesInput>
  }

  export type UserUpdateWithoutSentCircleInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownedCircles?: CircleUpdateManyWithoutOwnerNestedInput
    joinedCircles?: CircleUpdateManyWithoutMembersNestedInput
    completions?: CompletionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    sentFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    receivedCircleInvites?: CircleInviteUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentCircleInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownedCircles?: CircleUncheckedUpdateManyWithoutOwnerNestedInput
    joinedCircles?: CircleUncheckedUpdateManyWithoutMembersNestedInput
    completions?: CompletionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    sentFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    receivedCircleInvites?: CircleInviteUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedCircleInvitesInput = {
    update: XOR<UserUpdateWithoutReceivedCircleInvitesInput, UserUncheckedUpdateWithoutReceivedCircleInvitesInput>
    create: XOR<UserCreateWithoutReceivedCircleInvitesInput, UserUncheckedCreateWithoutReceivedCircleInvitesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedCircleInvitesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedCircleInvitesInput, UserUncheckedUpdateWithoutReceivedCircleInvitesInput>
  }

  export type UserUpdateWithoutReceivedCircleInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownedCircles?: CircleUpdateManyWithoutOwnerNestedInput
    joinedCircles?: CircleUpdateManyWithoutMembersNestedInput
    completions?: CompletionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    sentFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    sentCircleInvites?: CircleInviteUpdateManyWithoutSenderNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedCircleInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownedCircles?: CircleUncheckedUpdateManyWithoutOwnerNestedInput
    joinedCircles?: CircleUncheckedUpdateManyWithoutMembersNestedInput
    completions?: CompletionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    sentFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    sentCircleInvites?: CircleInviteUncheckedUpdateManyWithoutSenderNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CircleUpsertWithoutInvitesInput = {
    update: XOR<CircleUpdateWithoutInvitesInput, CircleUncheckedUpdateWithoutInvitesInput>
    create: XOR<CircleCreateWithoutInvitesInput, CircleUncheckedCreateWithoutInvitesInput>
    where?: CircleWhereInput
  }

  export type CircleUpdateToOneWithWhereWithoutInvitesInput = {
    where?: CircleWhereInput
    data: XOR<CircleUpdateWithoutInvitesInput, CircleUncheckedUpdateWithoutInvitesInput>
  }

  export type CircleUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutOwnedCirclesNestedInput
    members?: UserUpdateManyWithoutJoinedCirclesNestedInput
    habits?: HabitUpdateManyWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: UserUncheckedUpdateManyWithoutJoinedCirclesNestedInput
    habits?: HabitUncheckedUpdateManyWithoutCircleNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    ownedCircles?: CircleCreateNestedManyWithoutOwnerInput
    joinedCircles?: CircleCreateNestedManyWithoutMembersInput
    completions?: CompletionCreateNestedManyWithoutUserInput
    sentFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    sentCircleInvites?: CircleInviteCreateNestedManyWithoutSenderInput
    receivedCircleInvites?: CircleInviteCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    ownedCircles?: CircleUncheckedCreateNestedManyWithoutOwnerInput
    joinedCircles?: CircleUncheckedCreateNestedManyWithoutMembersInput
    completions?: CompletionUncheckedCreateNestedManyWithoutUserInput
    sentFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    sentCircleInvites?: CircleInviteUncheckedCreateNestedManyWithoutSenderInput
    receivedCircleInvites?: CircleInviteUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type HabitCreateWithoutPostsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    circle: CircleCreateNestedOneWithoutHabitsInput
    completions?: CompletionCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutPostsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    circleId: string
    completions?: CompletionUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutPostsInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutPostsInput, HabitUncheckedCreateWithoutPostsInput>
  }

  export type CompletionCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    completedAt: Date | string
    user: UserCreateNestedOneWithoutCompletionsInput
    habit: HabitCreateNestedOneWithoutCompletionsInput
  }

  export type CompletionUncheckedCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    completedAt: Date | string
    userId: string
    habitId: string
  }

  export type CompletionCreateOrConnectWithoutPostInput = {
    where: CompletionWhereUniqueInput
    create: XOR<CompletionCreateWithoutPostInput, CompletionUncheckedCreateWithoutPostInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownedCircles?: CircleUpdateManyWithoutOwnerNestedInput
    joinedCircles?: CircleUpdateManyWithoutMembersNestedInput
    completions?: CompletionUpdateManyWithoutUserNestedInput
    sentFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    sentCircleInvites?: CircleInviteUpdateManyWithoutSenderNestedInput
    receivedCircleInvites?: CircleInviteUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownedCircles?: CircleUncheckedUpdateManyWithoutOwnerNestedInput
    joinedCircles?: CircleUncheckedUpdateManyWithoutMembersNestedInput
    completions?: CompletionUncheckedUpdateManyWithoutUserNestedInput
    sentFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    sentCircleInvites?: CircleInviteUncheckedUpdateManyWithoutSenderNestedInput
    receivedCircleInvites?: CircleInviteUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HabitUpsertWithoutPostsInput = {
    update: XOR<HabitUpdateWithoutPostsInput, HabitUncheckedUpdateWithoutPostsInput>
    create: XOR<HabitCreateWithoutPostsInput, HabitUncheckedCreateWithoutPostsInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutPostsInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutPostsInput, HabitUncheckedUpdateWithoutPostsInput>
  }

  export type HabitUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    circle?: CircleUpdateOneRequiredWithoutHabitsNestedInput
    completions?: CompletionUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    completions?: CompletionUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type CompletionUpsertWithoutPostInput = {
    update: XOR<CompletionUpdateWithoutPostInput, CompletionUncheckedUpdateWithoutPostInput>
    create: XOR<CompletionCreateWithoutPostInput, CompletionUncheckedCreateWithoutPostInput>
    where?: CompletionWhereInput
  }

  export type CompletionUpdateToOneWithWhereWithoutPostInput = {
    where?: CompletionWhereInput
    data: XOR<CompletionUpdateWithoutPostInput, CompletionUncheckedUpdateWithoutPostInput>
  }

  export type CompletionUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompletionsNestedInput
    habit?: HabitUpdateOneRequiredWithoutCompletionsNestedInput
  }

  export type CompletionUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
  }

  export type CircleCreateWithoutHabitsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    photoKey?: string | null
    owner: UserCreateNestedOneWithoutOwnedCirclesInput
    members?: UserCreateNestedManyWithoutJoinedCirclesInput
    invites?: CircleInviteCreateNestedManyWithoutCircleInput
  }

  export type CircleUncheckedCreateWithoutHabitsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    photoKey?: string | null
    ownerId: string
    members?: UserUncheckedCreateNestedManyWithoutJoinedCirclesInput
    invites?: CircleInviteUncheckedCreateNestedManyWithoutCircleInput
  }

  export type CircleCreateOrConnectWithoutHabitsInput = {
    where: CircleWhereUniqueInput
    create: XOR<CircleCreateWithoutHabitsInput, CircleUncheckedCreateWithoutHabitsInput>
  }

  export type CompletionCreateWithoutHabitInput = {
    id?: string
    createdAt?: Date | string
    completedAt: Date | string
    user: UserCreateNestedOneWithoutCompletionsInput
    post?: PostCreateNestedOneWithoutCompletionInput
  }

  export type CompletionUncheckedCreateWithoutHabitInput = {
    id?: string
    createdAt?: Date | string
    completedAt: Date | string
    userId: string
    post?: PostUncheckedCreateNestedOneWithoutCompletionInput
  }

  export type CompletionCreateOrConnectWithoutHabitInput = {
    where: CompletionWhereUniqueInput
    create: XOR<CompletionCreateWithoutHabitInput, CompletionUncheckedCreateWithoutHabitInput>
  }

  export type CompletionCreateManyHabitInputEnvelope = {
    data: CompletionCreateManyHabitInput | CompletionCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutHabitInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photoKey?: string | null
    caption?: string | null
    user: UserCreateNestedOneWithoutPostsInput
    completion: CompletionCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateWithoutHabitInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    completionId: string
    photoKey?: string | null
    caption?: string | null
  }

  export type PostCreateOrConnectWithoutHabitInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutHabitInput, PostUncheckedCreateWithoutHabitInput>
  }

  export type PostCreateManyHabitInputEnvelope = {
    data: PostCreateManyHabitInput | PostCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type CircleUpsertWithoutHabitsInput = {
    update: XOR<CircleUpdateWithoutHabitsInput, CircleUncheckedUpdateWithoutHabitsInput>
    create: XOR<CircleCreateWithoutHabitsInput, CircleUncheckedCreateWithoutHabitsInput>
    where?: CircleWhereInput
  }

  export type CircleUpdateToOneWithWhereWithoutHabitsInput = {
    where?: CircleWhereInput
    data: XOR<CircleUpdateWithoutHabitsInput, CircleUncheckedUpdateWithoutHabitsInput>
  }

  export type CircleUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutOwnedCirclesNestedInput
    members?: UserUpdateManyWithoutJoinedCirclesNestedInput
    invites?: CircleInviteUpdateManyWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: UserUncheckedUpdateManyWithoutJoinedCirclesNestedInput
    invites?: CircleInviteUncheckedUpdateManyWithoutCircleNestedInput
  }

  export type CompletionUpsertWithWhereUniqueWithoutHabitInput = {
    where: CompletionWhereUniqueInput
    update: XOR<CompletionUpdateWithoutHabitInput, CompletionUncheckedUpdateWithoutHabitInput>
    create: XOR<CompletionCreateWithoutHabitInput, CompletionUncheckedCreateWithoutHabitInput>
  }

  export type CompletionUpdateWithWhereUniqueWithoutHabitInput = {
    where: CompletionWhereUniqueInput
    data: XOR<CompletionUpdateWithoutHabitInput, CompletionUncheckedUpdateWithoutHabitInput>
  }

  export type CompletionUpdateManyWithWhereWithoutHabitInput = {
    where: CompletionScalarWhereInput
    data: XOR<CompletionUpdateManyMutationInput, CompletionUncheckedUpdateManyWithoutHabitInput>
  }

  export type PostUpsertWithWhereUniqueWithoutHabitInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutHabitInput, PostUncheckedUpdateWithoutHabitInput>
    create: XOR<PostCreateWithoutHabitInput, PostUncheckedCreateWithoutHabitInput>
  }

  export type PostUpdateWithWhereUniqueWithoutHabitInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutHabitInput, PostUncheckedUpdateWithoutHabitInput>
  }

  export type PostUpdateManyWithWhereWithoutHabitInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutHabitInput>
  }

  export type UserCreateWithoutOwnedCirclesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    joinedCircles?: CircleCreateNestedManyWithoutMembersInput
    completions?: CompletionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    sentFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    sentCircleInvites?: CircleInviteCreateNestedManyWithoutSenderInput
    receivedCircleInvites?: CircleInviteCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedCirclesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    joinedCircles?: CircleUncheckedCreateNestedManyWithoutMembersInput
    completions?: CompletionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    sentFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    sentCircleInvites?: CircleInviteUncheckedCreateNestedManyWithoutSenderInput
    receivedCircleInvites?: CircleInviteUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedCirclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedCirclesInput, UserUncheckedCreateWithoutOwnedCirclesInput>
  }

  export type UserCreateWithoutJoinedCirclesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    ownedCircles?: CircleCreateNestedManyWithoutOwnerInput
    completions?: CompletionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    sentFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    sentCircleInvites?: CircleInviteCreateNestedManyWithoutSenderInput
    receivedCircleInvites?: CircleInviteCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJoinedCirclesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    ownedCircles?: CircleUncheckedCreateNestedManyWithoutOwnerInput
    completions?: CompletionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    sentFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    sentCircleInvites?: CircleInviteUncheckedCreateNestedManyWithoutSenderInput
    receivedCircleInvites?: CircleInviteUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJoinedCirclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJoinedCirclesInput, UserUncheckedCreateWithoutJoinedCirclesInput>
  }

  export type HabitCreateWithoutCircleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    completions?: CompletionCreateNestedManyWithoutHabitInput
    posts?: PostCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutCircleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    completions?: CompletionUncheckedCreateNestedManyWithoutHabitInput
    posts?: PostUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutCircleInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutCircleInput, HabitUncheckedCreateWithoutCircleInput>
  }

  export type HabitCreateManyCircleInputEnvelope = {
    data: HabitCreateManyCircleInput | HabitCreateManyCircleInput[]
    skipDuplicates?: boolean
  }

  export type CircleInviteCreateWithoutCircleInput = {
    id?: string
    createdAt?: Date | string
    status?: $Enums.InviteStatus
    sender: UserCreateNestedOneWithoutSentCircleInvitesInput
    recipient: UserCreateNestedOneWithoutReceivedCircleInvitesInput
  }

  export type CircleInviteUncheckedCreateWithoutCircleInput = {
    id?: string
    createdAt?: Date | string
    senderId: string
    recipientId: string
    status?: $Enums.InviteStatus
  }

  export type CircleInviteCreateOrConnectWithoutCircleInput = {
    where: CircleInviteWhereUniqueInput
    create: XOR<CircleInviteCreateWithoutCircleInput, CircleInviteUncheckedCreateWithoutCircleInput>
  }

  export type CircleInviteCreateManyCircleInputEnvelope = {
    data: CircleInviteCreateManyCircleInput | CircleInviteCreateManyCircleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedCirclesInput = {
    update: XOR<UserUpdateWithoutOwnedCirclesInput, UserUncheckedUpdateWithoutOwnedCirclesInput>
    create: XOR<UserCreateWithoutOwnedCirclesInput, UserUncheckedCreateWithoutOwnedCirclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedCirclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedCirclesInput, UserUncheckedUpdateWithoutOwnedCirclesInput>
  }

  export type UserUpdateWithoutOwnedCirclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    joinedCircles?: CircleUpdateManyWithoutMembersNestedInput
    completions?: CompletionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    sentFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    sentCircleInvites?: CircleInviteUpdateManyWithoutSenderNestedInput
    receivedCircleInvites?: CircleInviteUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedCirclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    joinedCircles?: CircleUncheckedUpdateManyWithoutMembersNestedInput
    completions?: CompletionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    sentFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    sentCircleInvites?: CircleInviteUncheckedUpdateManyWithoutSenderNestedInput
    receivedCircleInvites?: CircleInviteUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutJoinedCirclesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutJoinedCirclesInput, UserUncheckedUpdateWithoutJoinedCirclesInput>
    create: XOR<UserCreateWithoutJoinedCirclesInput, UserUncheckedCreateWithoutJoinedCirclesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutJoinedCirclesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutJoinedCirclesInput, UserUncheckedUpdateWithoutJoinedCirclesInput>
  }

  export type UserUpdateManyWithWhereWithoutJoinedCirclesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutJoinedCirclesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    username?: StringFilter<"User"> | string
    emailAddress?: StringNullableFilter<"User"> | string | null
    biography?: StringNullableFilter<"User"> | string | null
    profilePictureKey?: StringNullableFilter<"User"> | string | null
  }

  export type HabitUpsertWithWhereUniqueWithoutCircleInput = {
    where: HabitWhereUniqueInput
    update: XOR<HabitUpdateWithoutCircleInput, HabitUncheckedUpdateWithoutCircleInput>
    create: XOR<HabitCreateWithoutCircleInput, HabitUncheckedCreateWithoutCircleInput>
  }

  export type HabitUpdateWithWhereUniqueWithoutCircleInput = {
    where: HabitWhereUniqueInput
    data: XOR<HabitUpdateWithoutCircleInput, HabitUncheckedUpdateWithoutCircleInput>
  }

  export type HabitUpdateManyWithWhereWithoutCircleInput = {
    where: HabitScalarWhereInput
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyWithoutCircleInput>
  }

  export type HabitScalarWhereInput = {
    AND?: HabitScalarWhereInput | HabitScalarWhereInput[]
    OR?: HabitScalarWhereInput[]
    NOT?: HabitScalarWhereInput | HabitScalarWhereInput[]
    id?: StringFilter<"Habit"> | string
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    name?: StringFilter<"Habit"> | string
    circleId?: StringFilter<"Habit"> | string
  }

  export type CircleInviteUpsertWithWhereUniqueWithoutCircleInput = {
    where: CircleInviteWhereUniqueInput
    update: XOR<CircleInviteUpdateWithoutCircleInput, CircleInviteUncheckedUpdateWithoutCircleInput>
    create: XOR<CircleInviteCreateWithoutCircleInput, CircleInviteUncheckedCreateWithoutCircleInput>
  }

  export type CircleInviteUpdateWithWhereUniqueWithoutCircleInput = {
    where: CircleInviteWhereUniqueInput
    data: XOR<CircleInviteUpdateWithoutCircleInput, CircleInviteUncheckedUpdateWithoutCircleInput>
  }

  export type CircleInviteUpdateManyWithWhereWithoutCircleInput = {
    where: CircleInviteScalarWhereInput
    data: XOR<CircleInviteUpdateManyMutationInput, CircleInviteUncheckedUpdateManyWithoutCircleInput>
  }

  export type UserCreateWithoutCompletionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    ownedCircles?: CircleCreateNestedManyWithoutOwnerInput
    joinedCircles?: CircleCreateNestedManyWithoutMembersInput
    posts?: PostCreateNestedManyWithoutUserInput
    sentFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    sentCircleInvites?: CircleInviteCreateNestedManyWithoutSenderInput
    receivedCircleInvites?: CircleInviteCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompletionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    emailAddress?: string | null
    biography?: string | null
    profilePictureKey?: string | null
    ownedCircles?: CircleUncheckedCreateNestedManyWithoutOwnerInput
    joinedCircles?: CircleUncheckedCreateNestedManyWithoutMembersInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    sentFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    sentCircleInvites?: CircleInviteUncheckedCreateNestedManyWithoutSenderInput
    receivedCircleInvites?: CircleInviteUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompletionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompletionsInput, UserUncheckedCreateWithoutCompletionsInput>
  }

  export type HabitCreateWithoutCompletionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    circle: CircleCreateNestedOneWithoutHabitsInput
    posts?: PostCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutCompletionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    circleId: string
    posts?: PostUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutCompletionsInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutCompletionsInput, HabitUncheckedCreateWithoutCompletionsInput>
  }

  export type PostCreateWithoutCompletionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photoKey?: string | null
    caption?: string | null
    user: UserCreateNestedOneWithoutPostsInput
    habit: HabitCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCompletionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    habitId: string
    photoKey?: string | null
    caption?: string | null
  }

  export type PostCreateOrConnectWithoutCompletionInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCompletionInput, PostUncheckedCreateWithoutCompletionInput>
  }

  export type UserUpsertWithoutCompletionsInput = {
    update: XOR<UserUpdateWithoutCompletionsInput, UserUncheckedUpdateWithoutCompletionsInput>
    create: XOR<UserCreateWithoutCompletionsInput, UserUncheckedCreateWithoutCompletionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompletionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompletionsInput, UserUncheckedUpdateWithoutCompletionsInput>
  }

  export type UserUpdateWithoutCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownedCircles?: CircleUpdateManyWithoutOwnerNestedInput
    joinedCircles?: CircleUpdateManyWithoutMembersNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    sentFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    sentCircleInvites?: CircleInviteUpdateManyWithoutSenderNestedInput
    receivedCircleInvites?: CircleInviteUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownedCircles?: CircleUncheckedUpdateManyWithoutOwnerNestedInput
    joinedCircles?: CircleUncheckedUpdateManyWithoutMembersNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    sentFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    sentCircleInvites?: CircleInviteUncheckedUpdateManyWithoutSenderNestedInput
    receivedCircleInvites?: CircleInviteUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HabitUpsertWithoutCompletionsInput = {
    update: XOR<HabitUpdateWithoutCompletionsInput, HabitUncheckedUpdateWithoutCompletionsInput>
    create: XOR<HabitCreateWithoutCompletionsInput, HabitUncheckedCreateWithoutCompletionsInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutCompletionsInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutCompletionsInput, HabitUncheckedUpdateWithoutCompletionsInput>
  }

  export type HabitUpdateWithoutCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    circle?: CircleUpdateOneRequiredWithoutHabitsNestedInput
    posts?: PostUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    posts?: PostUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type PostUpsertWithoutCompletionInput = {
    update: XOR<PostUpdateWithoutCompletionInput, PostUncheckedUpdateWithoutCompletionInput>
    create: XOR<PostCreateWithoutCompletionInput, PostUncheckedCreateWithoutCompletionInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCompletionInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCompletionInput, PostUncheckedUpdateWithoutCompletionInput>
  }

  export type PostUpdateWithoutCompletionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    habit?: HabitUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutCompletionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CircleCreateManyOwnerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    photoKey?: string | null
  }

  export type CompletionCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    completedAt: Date | string
    habitId: string
  }

  export type PostCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habitId: string
    completionId: string
    photoKey?: string | null
    caption?: string | null
  }

  export type FriendshipCreateManyRequesterInput = {
    id?: string
    createdAt?: Date | string
    addresseeId: string
    status?: $Enums.FriendshipStatus
  }

  export type FriendshipCreateManyAddresseeInput = {
    id?: string
    createdAt?: Date | string
    requesterId: string
    status?: $Enums.FriendshipStatus
  }

  export type CircleInviteCreateManySenderInput = {
    id?: string
    createdAt?: Date | string
    recipientId: string
    circleId: string
    status?: $Enums.InviteStatus
  }

  export type CircleInviteCreateManyRecipientInput = {
    id?: string
    createdAt?: Date | string
    senderId: string
    circleId: string
    status?: $Enums.InviteStatus
  }

  export type AccountCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.AccountType
    hashedPassword?: string | null
    passwordVersion?: number | null
    failedAttempts?: number | null
    emailVerified?: boolean | null
    provider?: string | null
    providerAccountId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
  }

  export type CircleUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    members?: UserUpdateManyWithoutJoinedCirclesNestedInput
    habits?: HabitUpdateManyWithoutCircleNestedInput
    invites?: CircleInviteUpdateManyWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    members?: UserUncheckedUpdateManyWithoutJoinedCirclesNestedInput
    habits?: HabitUncheckedUpdateManyWithoutCircleNestedInput
    invites?: CircleInviteUncheckedUpdateManyWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CircleUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutOwnedCirclesNestedInput
    habits?: HabitUpdateManyWithoutCircleNestedInput
    invites?: CircleInviteUpdateManyWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    habits?: HabitUncheckedUpdateManyWithoutCircleNestedInput
    invites?: CircleInviteUncheckedUpdateManyWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateManyWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type CompletionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habit?: HabitUpdateOneRequiredWithoutCompletionsNestedInput
    post?: PostUpdateOneWithoutCompletionNestedInput
  }

  export type CompletionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitId?: StringFieldUpdateOperationsInput | string
    post?: PostUncheckedUpdateOneWithoutCompletionNestedInput
  }

  export type CompletionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitId?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    habit?: HabitUpdateOneRequiredWithoutPostsNestedInput
    completion?: CompletionUpdateOneRequiredWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitId?: StringFieldUpdateOperationsInput | string
    completionId?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitId?: StringFieldUpdateOperationsInput | string
    completionId?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FriendshipUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    addressee?: UserUpdateOneRequiredWithoutReceivedFriendshipsNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
  }

  export type FriendshipUncheckedUpdateManyWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
  }

  export type FriendshipUpdateWithoutAddresseeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    requester?: UserUpdateOneRequiredWithoutSentFriendshipsNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutAddresseeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
  }

  export type FriendshipUncheckedUpdateManyWithoutAddresseeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
  }

  export type CircleInviteUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    recipient?: UserUpdateOneRequiredWithoutReceivedCircleInvitesNestedInput
    circle?: CircleUpdateOneRequiredWithoutInvitesNestedInput
  }

  export type CircleInviteUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientId?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
  }

  export type CircleInviteUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientId?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
  }

  export type CircleInviteUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    sender?: UserUpdateOneRequiredWithoutSentCircleInvitesNestedInput
    circle?: CircleUpdateOneRequiredWithoutInvitesNestedInput
  }

  export type CircleInviteUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
  }

  export type CircleInviteUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    passwordVersion?: NullableIntFieldUpdateOperationsInput | number | null
    failedAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    passwordVersion?: NullableIntFieldUpdateOperationsInput | number | null
    failedAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    passwordVersion?: NullableIntFieldUpdateOperationsInput | number | null
    failedAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompletionCreateManyHabitInput = {
    id?: string
    createdAt?: Date | string
    completedAt: Date | string
    userId: string
  }

  export type PostCreateManyHabitInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    completionId: string
    photoKey?: string | null
    caption?: string | null
  }

  export type CompletionUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompletionsNestedInput
    post?: PostUpdateOneWithoutCompletionNestedInput
  }

  export type CompletionUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    post?: PostUncheckedUpdateOneWithoutCompletionNestedInput
  }

  export type CompletionUncheckedUpdateManyWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    completion?: CompletionUpdateOneRequiredWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    completionId?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUncheckedUpdateManyWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    completionId?: StringFieldUpdateOperationsInput | string
    photoKey?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HabitCreateManyCircleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
  }

  export type CircleInviteCreateManyCircleInput = {
    id?: string
    createdAt?: Date | string
    senderId: string
    recipientId: string
    status?: $Enums.InviteStatus
  }

  export type UserUpdateWithoutJoinedCirclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownedCircles?: CircleUpdateManyWithoutOwnerNestedInput
    completions?: CompletionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    sentFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    sentCircleInvites?: CircleInviteUpdateManyWithoutSenderNestedInput
    receivedCircleInvites?: CircleInviteUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJoinedCirclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
    ownedCircles?: CircleUncheckedUpdateManyWithoutOwnerNestedInput
    completions?: CompletionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    sentFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    sentCircleInvites?: CircleInviteUncheckedUpdateManyWithoutSenderNestedInput
    receivedCircleInvites?: CircleInviteUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutJoinedCirclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HabitUpdateWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    completions?: CompletionUpdateManyWithoutHabitNestedInput
    posts?: PostUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    completions?: CompletionUncheckedUpdateManyWithoutHabitNestedInput
    posts?: PostUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateManyWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CircleInviteUpdateWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    sender?: UserUpdateOneRequiredWithoutSentCircleInvitesNestedInput
    recipient?: UserUpdateOneRequiredWithoutReceivedCircleInvitesNestedInput
  }

  export type CircleInviteUncheckedUpdateWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
  }

  export type CircleInviteUncheckedUpdateManyWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}