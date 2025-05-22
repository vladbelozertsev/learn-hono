
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
 * Model public_files
 * 
 */
export type public_files = $Result.DefaultSelection<Prisma.$public_filesPayload>
/**
 * Model private_files
 * 
 */
export type private_files = $Result.DefaultSelection<Prisma.$private_filesPayload>
/**
 * Model flowers
 * 
 */
export type flowers = $Result.DefaultSelection<Prisma.$flowersPayload>
/**
 * Model flowers_variety
 * 
 */
export type flowers_variety = $Result.DefaultSelection<Prisma.$flowers_varietyPayload>
/**
 * Model flowers_history
 * 
 */
export type flowers_history = $Result.DefaultSelection<Prisma.$flowers_historyPayload>
/**
 * Model flowers_farms
 * 
 */
export type flowers_farms = $Result.DefaultSelection<Prisma.$flowers_farmsPayload>
/**
 * Model flowers_and_flowers_farms
 * 
 */
export type flowers_and_flowers_farms = $Result.DefaultSelection<Prisma.$flowers_and_flowers_farmsPayload>
/**
 * Model flowers_bouquets
 * 
 */
export type flowers_bouquets = $Result.DefaultSelection<Prisma.$flowers_bouquetsPayload>
/**
 * Model flowers_and_flowers_bouquets
 * 
 */
export type flowers_and_flowers_bouquets = $Result.DefaultSelection<Prisma.$flowers_and_flowers_bouquetsPayload>
/**
 * Model flowers_and_files
 * 
 */
export type flowers_and_files = $Result.DefaultSelection<Prisma.$flowers_and_filesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model users_files
 * 
 */
export type users_files = $Result.DefaultSelection<Prisma.$users_filesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Public_files
 * const public_files = await prisma.public_files.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Public_files
   * const public_files = await prisma.public_files.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.public_files`: Exposes CRUD operations for the **public_files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Public_files
    * const public_files = await prisma.public_files.findMany()
    * ```
    */
  get public_files(): Prisma.public_filesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.private_files`: Exposes CRUD operations for the **private_files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Private_files
    * const private_files = await prisma.private_files.findMany()
    * ```
    */
  get private_files(): Prisma.private_filesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowers`: Exposes CRUD operations for the **flowers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flowers
    * const flowers = await prisma.flowers.findMany()
    * ```
    */
  get flowers(): Prisma.flowersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowers_variety`: Exposes CRUD operations for the **flowers_variety** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flowers_varieties
    * const flowers_varieties = await prisma.flowers_variety.findMany()
    * ```
    */
  get flowers_variety(): Prisma.flowers_varietyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowers_history`: Exposes CRUD operations for the **flowers_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flowers_histories
    * const flowers_histories = await prisma.flowers_history.findMany()
    * ```
    */
  get flowers_history(): Prisma.flowers_historyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowers_farms`: Exposes CRUD operations for the **flowers_farms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flowers_farms
    * const flowers_farms = await prisma.flowers_farms.findMany()
    * ```
    */
  get flowers_farms(): Prisma.flowers_farmsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowers_and_flowers_farms`: Exposes CRUD operations for the **flowers_and_flowers_farms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flowers_and_flowers_farms
    * const flowers_and_flowers_farms = await prisma.flowers_and_flowers_farms.findMany()
    * ```
    */
  get flowers_and_flowers_farms(): Prisma.flowers_and_flowers_farmsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowers_bouquets`: Exposes CRUD operations for the **flowers_bouquets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flowers_bouquets
    * const flowers_bouquets = await prisma.flowers_bouquets.findMany()
    * ```
    */
  get flowers_bouquets(): Prisma.flowers_bouquetsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowers_and_flowers_bouquets`: Exposes CRUD operations for the **flowers_and_flowers_bouquets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flowers_and_flowers_bouquets
    * const flowers_and_flowers_bouquets = await prisma.flowers_and_flowers_bouquets.findMany()
    * ```
    */
  get flowers_and_flowers_bouquets(): Prisma.flowers_and_flowers_bouquetsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowers_and_files`: Exposes CRUD operations for the **flowers_and_files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flowers_and_files
    * const flowers_and_files = await prisma.flowers_and_files.findMany()
    * ```
    */
  get flowers_and_files(): Prisma.flowers_and_filesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users_files`: Exposes CRUD operations for the **users_files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users_files
    * const users_files = await prisma.users_files.findMany()
    * ```
    */
  get users_files(): Prisma.users_filesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    public_files: 'public_files',
    private_files: 'private_files',
    flowers: 'flowers',
    flowers_variety: 'flowers_variety',
    flowers_history: 'flowers_history',
    flowers_farms: 'flowers_farms',
    flowers_and_flowers_farms: 'flowers_and_flowers_farms',
    flowers_bouquets: 'flowers_bouquets',
    flowers_and_flowers_bouquets: 'flowers_and_flowers_bouquets',
    flowers_and_files: 'flowers_and_files',
    users: 'users',
    users_files: 'users_files'
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
      modelProps: "public_files" | "private_files" | "flowers" | "flowers_variety" | "flowers_history" | "flowers_farms" | "flowers_and_flowers_farms" | "flowers_bouquets" | "flowers_and_flowers_bouquets" | "flowers_and_files" | "users" | "users_files"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      public_files: {
        payload: Prisma.$public_filesPayload<ExtArgs>
        fields: Prisma.public_filesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.public_filesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_filesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.public_filesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_filesPayload>
          }
          findFirst: {
            args: Prisma.public_filesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_filesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.public_filesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_filesPayload>
          }
          findMany: {
            args: Prisma.public_filesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_filesPayload>[]
          }
          create: {
            args: Prisma.public_filesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_filesPayload>
          }
          createMany: {
            args: Prisma.public_filesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.public_filesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_filesPayload>[]
          }
          delete: {
            args: Prisma.public_filesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_filesPayload>
          }
          update: {
            args: Prisma.public_filesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_filesPayload>
          }
          deleteMany: {
            args: Prisma.public_filesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.public_filesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.public_filesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_filesPayload>[]
          }
          upsert: {
            args: Prisma.public_filesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_filesPayload>
          }
          aggregate: {
            args: Prisma.Public_filesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublic_files>
          }
          groupBy: {
            args: Prisma.public_filesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Public_filesGroupByOutputType>[]
          }
          count: {
            args: Prisma.public_filesCountArgs<ExtArgs>
            result: $Utils.Optional<Public_filesCountAggregateOutputType> | number
          }
        }
      }
      private_files: {
        payload: Prisma.$private_filesPayload<ExtArgs>
        fields: Prisma.private_filesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.private_filesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_filesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.private_filesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_filesPayload>
          }
          findFirst: {
            args: Prisma.private_filesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_filesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.private_filesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_filesPayload>
          }
          findMany: {
            args: Prisma.private_filesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_filesPayload>[]
          }
          create: {
            args: Prisma.private_filesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_filesPayload>
          }
          createMany: {
            args: Prisma.private_filesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.private_filesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_filesPayload>[]
          }
          delete: {
            args: Prisma.private_filesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_filesPayload>
          }
          update: {
            args: Prisma.private_filesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_filesPayload>
          }
          deleteMany: {
            args: Prisma.private_filesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.private_filesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.private_filesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_filesPayload>[]
          }
          upsert: {
            args: Prisma.private_filesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_filesPayload>
          }
          aggregate: {
            args: Prisma.Private_filesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivate_files>
          }
          groupBy: {
            args: Prisma.private_filesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Private_filesGroupByOutputType>[]
          }
          count: {
            args: Prisma.private_filesCountArgs<ExtArgs>
            result: $Utils.Optional<Private_filesCountAggregateOutputType> | number
          }
        }
      }
      flowers: {
        payload: Prisma.$flowersPayload<ExtArgs>
        fields: Prisma.flowersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.flowersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.flowersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowersPayload>
          }
          findFirst: {
            args: Prisma.flowersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.flowersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowersPayload>
          }
          findMany: {
            args: Prisma.flowersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowersPayload>[]
          }
          create: {
            args: Prisma.flowersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowersPayload>
          }
          createMany: {
            args: Prisma.flowersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.flowersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowersPayload>[]
          }
          delete: {
            args: Prisma.flowersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowersPayload>
          }
          update: {
            args: Prisma.flowersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowersPayload>
          }
          deleteMany: {
            args: Prisma.flowersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.flowersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.flowersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowersPayload>[]
          }
          upsert: {
            args: Prisma.flowersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowersPayload>
          }
          aggregate: {
            args: Prisma.FlowersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowers>
          }
          groupBy: {
            args: Prisma.flowersGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlowersGroupByOutputType>[]
          }
          count: {
            args: Prisma.flowersCountArgs<ExtArgs>
            result: $Utils.Optional<FlowersCountAggregateOutputType> | number
          }
        }
      }
      flowers_variety: {
        payload: Prisma.$flowers_varietyPayload<ExtArgs>
        fields: Prisma.flowers_varietyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.flowers_varietyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_varietyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.flowers_varietyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_varietyPayload>
          }
          findFirst: {
            args: Prisma.flowers_varietyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_varietyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.flowers_varietyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_varietyPayload>
          }
          findMany: {
            args: Prisma.flowers_varietyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_varietyPayload>[]
          }
          create: {
            args: Prisma.flowers_varietyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_varietyPayload>
          }
          createMany: {
            args: Prisma.flowers_varietyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.flowers_varietyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_varietyPayload>[]
          }
          delete: {
            args: Prisma.flowers_varietyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_varietyPayload>
          }
          update: {
            args: Prisma.flowers_varietyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_varietyPayload>
          }
          deleteMany: {
            args: Prisma.flowers_varietyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.flowers_varietyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.flowers_varietyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_varietyPayload>[]
          }
          upsert: {
            args: Prisma.flowers_varietyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_varietyPayload>
          }
          aggregate: {
            args: Prisma.Flowers_varietyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowers_variety>
          }
          groupBy: {
            args: Prisma.flowers_varietyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Flowers_varietyGroupByOutputType>[]
          }
          count: {
            args: Prisma.flowers_varietyCountArgs<ExtArgs>
            result: $Utils.Optional<Flowers_varietyCountAggregateOutputType> | number
          }
        }
      }
      flowers_history: {
        payload: Prisma.$flowers_historyPayload<ExtArgs>
        fields: Prisma.flowers_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.flowers_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.flowers_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_historyPayload>
          }
          findFirst: {
            args: Prisma.flowers_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.flowers_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_historyPayload>
          }
          findMany: {
            args: Prisma.flowers_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_historyPayload>[]
          }
          create: {
            args: Prisma.flowers_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_historyPayload>
          }
          createMany: {
            args: Prisma.flowers_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.flowers_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_historyPayload>[]
          }
          delete: {
            args: Prisma.flowers_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_historyPayload>
          }
          update: {
            args: Prisma.flowers_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_historyPayload>
          }
          deleteMany: {
            args: Prisma.flowers_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.flowers_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.flowers_historyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_historyPayload>[]
          }
          upsert: {
            args: Prisma.flowers_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_historyPayload>
          }
          aggregate: {
            args: Prisma.Flowers_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowers_history>
          }
          groupBy: {
            args: Prisma.flowers_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Flowers_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.flowers_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Flowers_historyCountAggregateOutputType> | number
          }
        }
      }
      flowers_farms: {
        payload: Prisma.$flowers_farmsPayload<ExtArgs>
        fields: Prisma.flowers_farmsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.flowers_farmsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_farmsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.flowers_farmsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_farmsPayload>
          }
          findFirst: {
            args: Prisma.flowers_farmsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_farmsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.flowers_farmsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_farmsPayload>
          }
          findMany: {
            args: Prisma.flowers_farmsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_farmsPayload>[]
          }
          create: {
            args: Prisma.flowers_farmsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_farmsPayload>
          }
          createMany: {
            args: Prisma.flowers_farmsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.flowers_farmsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_farmsPayload>[]
          }
          delete: {
            args: Prisma.flowers_farmsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_farmsPayload>
          }
          update: {
            args: Prisma.flowers_farmsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_farmsPayload>
          }
          deleteMany: {
            args: Prisma.flowers_farmsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.flowers_farmsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.flowers_farmsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_farmsPayload>[]
          }
          upsert: {
            args: Prisma.flowers_farmsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_farmsPayload>
          }
          aggregate: {
            args: Prisma.Flowers_farmsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowers_farms>
          }
          groupBy: {
            args: Prisma.flowers_farmsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Flowers_farmsGroupByOutputType>[]
          }
          count: {
            args: Prisma.flowers_farmsCountArgs<ExtArgs>
            result: $Utils.Optional<Flowers_farmsCountAggregateOutputType> | number
          }
        }
      }
      flowers_and_flowers_farms: {
        payload: Prisma.$flowers_and_flowers_farmsPayload<ExtArgs>
        fields: Prisma.flowers_and_flowers_farmsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.flowers_and_flowers_farmsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_farmsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.flowers_and_flowers_farmsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_farmsPayload>
          }
          findFirst: {
            args: Prisma.flowers_and_flowers_farmsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_farmsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.flowers_and_flowers_farmsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_farmsPayload>
          }
          findMany: {
            args: Prisma.flowers_and_flowers_farmsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_farmsPayload>[]
          }
          create: {
            args: Prisma.flowers_and_flowers_farmsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_farmsPayload>
          }
          createMany: {
            args: Prisma.flowers_and_flowers_farmsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.flowers_and_flowers_farmsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_farmsPayload>[]
          }
          delete: {
            args: Prisma.flowers_and_flowers_farmsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_farmsPayload>
          }
          update: {
            args: Prisma.flowers_and_flowers_farmsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_farmsPayload>
          }
          deleteMany: {
            args: Prisma.flowers_and_flowers_farmsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.flowers_and_flowers_farmsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.flowers_and_flowers_farmsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_farmsPayload>[]
          }
          upsert: {
            args: Prisma.flowers_and_flowers_farmsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_farmsPayload>
          }
          aggregate: {
            args: Prisma.Flowers_and_flowers_farmsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowers_and_flowers_farms>
          }
          groupBy: {
            args: Prisma.flowers_and_flowers_farmsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Flowers_and_flowers_farmsGroupByOutputType>[]
          }
          count: {
            args: Prisma.flowers_and_flowers_farmsCountArgs<ExtArgs>
            result: $Utils.Optional<Flowers_and_flowers_farmsCountAggregateOutputType> | number
          }
        }
      }
      flowers_bouquets: {
        payload: Prisma.$flowers_bouquetsPayload<ExtArgs>
        fields: Prisma.flowers_bouquetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.flowers_bouquetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_bouquetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.flowers_bouquetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_bouquetsPayload>
          }
          findFirst: {
            args: Prisma.flowers_bouquetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_bouquetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.flowers_bouquetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_bouquetsPayload>
          }
          findMany: {
            args: Prisma.flowers_bouquetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_bouquetsPayload>[]
          }
          create: {
            args: Prisma.flowers_bouquetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_bouquetsPayload>
          }
          createMany: {
            args: Prisma.flowers_bouquetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.flowers_bouquetsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_bouquetsPayload>[]
          }
          delete: {
            args: Prisma.flowers_bouquetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_bouquetsPayload>
          }
          update: {
            args: Prisma.flowers_bouquetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_bouquetsPayload>
          }
          deleteMany: {
            args: Prisma.flowers_bouquetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.flowers_bouquetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.flowers_bouquetsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_bouquetsPayload>[]
          }
          upsert: {
            args: Prisma.flowers_bouquetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_bouquetsPayload>
          }
          aggregate: {
            args: Prisma.Flowers_bouquetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowers_bouquets>
          }
          groupBy: {
            args: Prisma.flowers_bouquetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Flowers_bouquetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.flowers_bouquetsCountArgs<ExtArgs>
            result: $Utils.Optional<Flowers_bouquetsCountAggregateOutputType> | number
          }
        }
      }
      flowers_and_flowers_bouquets: {
        payload: Prisma.$flowers_and_flowers_bouquetsPayload<ExtArgs>
        fields: Prisma.flowers_and_flowers_bouquetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.flowers_and_flowers_bouquetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_bouquetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.flowers_and_flowers_bouquetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_bouquetsPayload>
          }
          findFirst: {
            args: Prisma.flowers_and_flowers_bouquetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_bouquetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.flowers_and_flowers_bouquetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_bouquetsPayload>
          }
          findMany: {
            args: Prisma.flowers_and_flowers_bouquetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_bouquetsPayload>[]
          }
          create: {
            args: Prisma.flowers_and_flowers_bouquetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_bouquetsPayload>
          }
          createMany: {
            args: Prisma.flowers_and_flowers_bouquetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.flowers_and_flowers_bouquetsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_bouquetsPayload>[]
          }
          delete: {
            args: Prisma.flowers_and_flowers_bouquetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_bouquetsPayload>
          }
          update: {
            args: Prisma.flowers_and_flowers_bouquetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_bouquetsPayload>
          }
          deleteMany: {
            args: Prisma.flowers_and_flowers_bouquetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.flowers_and_flowers_bouquetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.flowers_and_flowers_bouquetsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_bouquetsPayload>[]
          }
          upsert: {
            args: Prisma.flowers_and_flowers_bouquetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_flowers_bouquetsPayload>
          }
          aggregate: {
            args: Prisma.Flowers_and_flowers_bouquetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowers_and_flowers_bouquets>
          }
          groupBy: {
            args: Prisma.flowers_and_flowers_bouquetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Flowers_and_flowers_bouquetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.flowers_and_flowers_bouquetsCountArgs<ExtArgs>
            result: $Utils.Optional<Flowers_and_flowers_bouquetsCountAggregateOutputType> | number
          }
        }
      }
      flowers_and_files: {
        payload: Prisma.$flowers_and_filesPayload<ExtArgs>
        fields: Prisma.flowers_and_filesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.flowers_and_filesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_filesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.flowers_and_filesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_filesPayload>
          }
          findFirst: {
            args: Prisma.flowers_and_filesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_filesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.flowers_and_filesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_filesPayload>
          }
          findMany: {
            args: Prisma.flowers_and_filesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_filesPayload>[]
          }
          create: {
            args: Prisma.flowers_and_filesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_filesPayload>
          }
          createMany: {
            args: Prisma.flowers_and_filesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.flowers_and_filesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_filesPayload>[]
          }
          delete: {
            args: Prisma.flowers_and_filesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_filesPayload>
          }
          update: {
            args: Prisma.flowers_and_filesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_filesPayload>
          }
          deleteMany: {
            args: Prisma.flowers_and_filesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.flowers_and_filesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.flowers_and_filesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_filesPayload>[]
          }
          upsert: {
            args: Prisma.flowers_and_filesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flowers_and_filesPayload>
          }
          aggregate: {
            args: Prisma.Flowers_and_filesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowers_and_files>
          }
          groupBy: {
            args: Prisma.flowers_and_filesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Flowers_and_filesGroupByOutputType>[]
          }
          count: {
            args: Prisma.flowers_and_filesCountArgs<ExtArgs>
            result: $Utils.Optional<Flowers_and_filesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      users_files: {
        payload: Prisma.$users_filesPayload<ExtArgs>
        fields: Prisma.users_filesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.users_filesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_filesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.users_filesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_filesPayload>
          }
          findFirst: {
            args: Prisma.users_filesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_filesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.users_filesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_filesPayload>
          }
          findMany: {
            args: Prisma.users_filesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_filesPayload>[]
          }
          create: {
            args: Prisma.users_filesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_filesPayload>
          }
          createMany: {
            args: Prisma.users_filesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.users_filesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_filesPayload>[]
          }
          delete: {
            args: Prisma.users_filesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_filesPayload>
          }
          update: {
            args: Prisma.users_filesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_filesPayload>
          }
          deleteMany: {
            args: Prisma.users_filesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.users_filesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.users_filesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_filesPayload>[]
          }
          upsert: {
            args: Prisma.users_filesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_filesPayload>
          }
          aggregate: {
            args: Prisma.Users_filesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers_files>
          }
          groupBy: {
            args: Prisma.users_filesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Users_filesGroupByOutputType>[]
          }
          count: {
            args: Prisma.users_filesCountArgs<ExtArgs>
            result: $Utils.Optional<Users_filesCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    public_files?: public_filesOmit
    private_files?: private_filesOmit
    flowers?: flowersOmit
    flowers_variety?: flowers_varietyOmit
    flowers_history?: flowers_historyOmit
    flowers_farms?: flowers_farmsOmit
    flowers_and_flowers_farms?: flowers_and_flowers_farmsOmit
    flowers_bouquets?: flowers_bouquetsOmit
    flowers_and_flowers_bouquets?: flowers_and_flowers_bouquetsOmit
    flowers_and_files?: flowers_and_filesOmit
    users?: usersOmit
    users_files?: users_filesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type Public_filesCountOutputType
   */

  export type Public_filesCountOutputType = {
    flowers: number
  }

  export type Public_filesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | Public_filesCountOutputTypeCountFlowersArgs
  }

  // Custom InputTypes
  /**
   * Public_filesCountOutputType without action
   */
  export type Public_filesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Public_filesCountOutputType
     */
    select?: Public_filesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Public_filesCountOutputType without action
   */
  export type Public_filesCountOutputTypeCountFlowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flowers_and_filesWhereInput
  }


  /**
   * Count Type FlowersCountOutputType
   */

  export type FlowersCountOutputType = {
    history: number
    imgs: number
    farms: number
    bouquets: number
  }

  export type FlowersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | FlowersCountOutputTypeCountHistoryArgs
    imgs?: boolean | FlowersCountOutputTypeCountImgsArgs
    farms?: boolean | FlowersCountOutputTypeCountFarmsArgs
    bouquets?: boolean | FlowersCountOutputTypeCountBouquetsArgs
  }

  // Custom InputTypes
  /**
   * FlowersCountOutputType without action
   */
  export type FlowersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersCountOutputType
     */
    select?: FlowersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlowersCountOutputType without action
   */
  export type FlowersCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flowers_historyWhereInput
  }

  /**
   * FlowersCountOutputType without action
   */
  export type FlowersCountOutputTypeCountImgsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flowers_and_filesWhereInput
  }

  /**
   * FlowersCountOutputType without action
   */
  export type FlowersCountOutputTypeCountFarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flowers_and_flowers_farmsWhereInput
  }

  /**
   * FlowersCountOutputType without action
   */
  export type FlowersCountOutputTypeCountBouquetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flowers_and_flowers_bouquetsWhereInput
  }


  /**
   * Count Type Flowers_varietyCountOutputType
   */

  export type Flowers_varietyCountOutputType = {
    flowers: number
  }

  export type Flowers_varietyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | Flowers_varietyCountOutputTypeCountFlowersArgs
  }

  // Custom InputTypes
  /**
   * Flowers_varietyCountOutputType without action
   */
  export type Flowers_varietyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowers_varietyCountOutputType
     */
    select?: Flowers_varietyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Flowers_varietyCountOutputType without action
   */
  export type Flowers_varietyCountOutputTypeCountFlowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flowersWhereInput
  }


  /**
   * Count Type Flowers_farmsCountOutputType
   */

  export type Flowers_farmsCountOutputType = {
    flowers: number
  }

  export type Flowers_farmsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | Flowers_farmsCountOutputTypeCountFlowersArgs
  }

  // Custom InputTypes
  /**
   * Flowers_farmsCountOutputType without action
   */
  export type Flowers_farmsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowers_farmsCountOutputType
     */
    select?: Flowers_farmsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Flowers_farmsCountOutputType without action
   */
  export type Flowers_farmsCountOutputTypeCountFlowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flowers_and_flowers_farmsWhereInput
  }


  /**
   * Count Type Flowers_bouquetsCountOutputType
   */

  export type Flowers_bouquetsCountOutputType = {
    flowers: number
  }

  export type Flowers_bouquetsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | Flowers_bouquetsCountOutputTypeCountFlowersArgs
  }

  // Custom InputTypes
  /**
   * Flowers_bouquetsCountOutputType without action
   */
  export type Flowers_bouquetsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowers_bouquetsCountOutputType
     */
    select?: Flowers_bouquetsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Flowers_bouquetsCountOutputType without action
   */
  export type Flowers_bouquetsCountOutputTypeCountFlowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flowers_and_flowers_bouquetsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model public_files
   */

  export type AggregatePublic_files = {
    _count: Public_filesCountAggregateOutputType | null
    _avg: Public_filesAvgAggregateOutputType | null
    _sum: Public_filesSumAggregateOutputType | null
    _min: Public_filesMinAggregateOutputType | null
    _max: Public_filesMaxAggregateOutputType | null
  }

  export type Public_filesAvgAggregateOutputType = {
    id: number | null
    size: number | null
  }

  export type Public_filesSumAggregateOutputType = {
    id: number | null
    size: number | null
  }

  export type Public_filesMinAggregateOutputType = {
    id: number | null
    name: string | null
    size: number | null
    upload_at: Date | null
  }

  export type Public_filesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    size: number | null
    upload_at: Date | null
  }

  export type Public_filesCountAggregateOutputType = {
    id: number
    name: number
    size: number
    upload_at: number
    _all: number
  }


  export type Public_filesAvgAggregateInputType = {
    id?: true
    size?: true
  }

  export type Public_filesSumAggregateInputType = {
    id?: true
    size?: true
  }

  export type Public_filesMinAggregateInputType = {
    id?: true
    name?: true
    size?: true
    upload_at?: true
  }

  export type Public_filesMaxAggregateInputType = {
    id?: true
    name?: true
    size?: true
    upload_at?: true
  }

  export type Public_filesCountAggregateInputType = {
    id?: true
    name?: true
    size?: true
    upload_at?: true
    _all?: true
  }

  export type Public_filesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which public_files to aggregate.
     */
    where?: public_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_files to fetch.
     */
    orderBy?: public_filesOrderByWithRelationInput | public_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: public_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned public_files
    **/
    _count?: true | Public_filesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Public_filesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Public_filesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Public_filesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Public_filesMaxAggregateInputType
  }

  export type GetPublic_filesAggregateType<T extends Public_filesAggregateArgs> = {
        [P in keyof T & keyof AggregatePublic_files]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublic_files[P]>
      : GetScalarType<T[P], AggregatePublic_files[P]>
  }




  export type public_filesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: public_filesWhereInput
    orderBy?: public_filesOrderByWithAggregationInput | public_filesOrderByWithAggregationInput[]
    by: Public_filesScalarFieldEnum[] | Public_filesScalarFieldEnum
    having?: public_filesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Public_filesCountAggregateInputType | true
    _avg?: Public_filesAvgAggregateInputType
    _sum?: Public_filesSumAggregateInputType
    _min?: Public_filesMinAggregateInputType
    _max?: Public_filesMaxAggregateInputType
  }

  export type Public_filesGroupByOutputType = {
    id: number
    name: string
    size: number
    upload_at: Date
    _count: Public_filesCountAggregateOutputType | null
    _avg: Public_filesAvgAggregateOutputType | null
    _sum: Public_filesSumAggregateOutputType | null
    _min: Public_filesMinAggregateOutputType | null
    _max: Public_filesMaxAggregateOutputType | null
  }

  type GetPublic_filesGroupByPayload<T extends public_filesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Public_filesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Public_filesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Public_filesGroupByOutputType[P]>
            : GetScalarType<T[P], Public_filesGroupByOutputType[P]>
        }
      >
    >


  export type public_filesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    upload_at?: boolean
    flowers?: boolean | public_files$flowersArgs<ExtArgs>
    _count?: boolean | Public_filesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["public_files"]>

  export type public_filesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    upload_at?: boolean
  }, ExtArgs["result"]["public_files"]>

  export type public_filesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    upload_at?: boolean
  }, ExtArgs["result"]["public_files"]>

  export type public_filesSelectScalar = {
    id?: boolean
    name?: boolean
    size?: boolean
    upload_at?: boolean
  }

  export type public_filesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "size" | "upload_at", ExtArgs["result"]["public_files"]>
  export type public_filesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | public_files$flowersArgs<ExtArgs>
    _count?: boolean | Public_filesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type public_filesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type public_filesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $public_filesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "public_files"
    objects: {
      flowers: Prisma.$flowers_and_filesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      size: number
      upload_at: Date
    }, ExtArgs["result"]["public_files"]>
    composites: {}
  }

  type public_filesGetPayload<S extends boolean | null | undefined | public_filesDefaultArgs> = $Result.GetResult<Prisma.$public_filesPayload, S>

  type public_filesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<public_filesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Public_filesCountAggregateInputType | true
    }

  export interface public_filesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['public_files'], meta: { name: 'public_files' } }
    /**
     * Find zero or one Public_files that matches the filter.
     * @param {public_filesFindUniqueArgs} args - Arguments to find a Public_files
     * @example
     * // Get one Public_files
     * const public_files = await prisma.public_files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends public_filesFindUniqueArgs>(args: SelectSubset<T, public_filesFindUniqueArgs<ExtArgs>>): Prisma__public_filesClient<$Result.GetResult<Prisma.$public_filesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Public_files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {public_filesFindUniqueOrThrowArgs} args - Arguments to find a Public_files
     * @example
     * // Get one Public_files
     * const public_files = await prisma.public_files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends public_filesFindUniqueOrThrowArgs>(args: SelectSubset<T, public_filesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__public_filesClient<$Result.GetResult<Prisma.$public_filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Public_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_filesFindFirstArgs} args - Arguments to find a Public_files
     * @example
     * // Get one Public_files
     * const public_files = await prisma.public_files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends public_filesFindFirstArgs>(args?: SelectSubset<T, public_filesFindFirstArgs<ExtArgs>>): Prisma__public_filesClient<$Result.GetResult<Prisma.$public_filesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Public_files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_filesFindFirstOrThrowArgs} args - Arguments to find a Public_files
     * @example
     * // Get one Public_files
     * const public_files = await prisma.public_files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends public_filesFindFirstOrThrowArgs>(args?: SelectSubset<T, public_filesFindFirstOrThrowArgs<ExtArgs>>): Prisma__public_filesClient<$Result.GetResult<Prisma.$public_filesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Public_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_filesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Public_files
     * const public_files = await prisma.public_files.findMany()
     * 
     * // Get first 10 Public_files
     * const public_files = await prisma.public_files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const public_filesWithIdOnly = await prisma.public_files.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends public_filesFindManyArgs>(args?: SelectSubset<T, public_filesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Public_files.
     * @param {public_filesCreateArgs} args - Arguments to create a Public_files.
     * @example
     * // Create one Public_files
     * const Public_files = await prisma.public_files.create({
     *   data: {
     *     // ... data to create a Public_files
     *   }
     * })
     * 
     */
    create<T extends public_filesCreateArgs>(args: SelectSubset<T, public_filesCreateArgs<ExtArgs>>): Prisma__public_filesClient<$Result.GetResult<Prisma.$public_filesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Public_files.
     * @param {public_filesCreateManyArgs} args - Arguments to create many Public_files.
     * @example
     * // Create many Public_files
     * const public_files = await prisma.public_files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends public_filesCreateManyArgs>(args?: SelectSubset<T, public_filesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Public_files and returns the data saved in the database.
     * @param {public_filesCreateManyAndReturnArgs} args - Arguments to create many Public_files.
     * @example
     * // Create many Public_files
     * const public_files = await prisma.public_files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Public_files and only return the `id`
     * const public_filesWithIdOnly = await prisma.public_files.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends public_filesCreateManyAndReturnArgs>(args?: SelectSubset<T, public_filesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_filesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Public_files.
     * @param {public_filesDeleteArgs} args - Arguments to delete one Public_files.
     * @example
     * // Delete one Public_files
     * const Public_files = await prisma.public_files.delete({
     *   where: {
     *     // ... filter to delete one Public_files
     *   }
     * })
     * 
     */
    delete<T extends public_filesDeleteArgs>(args: SelectSubset<T, public_filesDeleteArgs<ExtArgs>>): Prisma__public_filesClient<$Result.GetResult<Prisma.$public_filesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Public_files.
     * @param {public_filesUpdateArgs} args - Arguments to update one Public_files.
     * @example
     * // Update one Public_files
     * const public_files = await prisma.public_files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends public_filesUpdateArgs>(args: SelectSubset<T, public_filesUpdateArgs<ExtArgs>>): Prisma__public_filesClient<$Result.GetResult<Prisma.$public_filesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Public_files.
     * @param {public_filesDeleteManyArgs} args - Arguments to filter Public_files to delete.
     * @example
     * // Delete a few Public_files
     * const { count } = await prisma.public_files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends public_filesDeleteManyArgs>(args?: SelectSubset<T, public_filesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Public_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_filesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Public_files
     * const public_files = await prisma.public_files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends public_filesUpdateManyArgs>(args: SelectSubset<T, public_filesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Public_files and returns the data updated in the database.
     * @param {public_filesUpdateManyAndReturnArgs} args - Arguments to update many Public_files.
     * @example
     * // Update many Public_files
     * const public_files = await prisma.public_files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Public_files and only return the `id`
     * const public_filesWithIdOnly = await prisma.public_files.updateManyAndReturn({
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
    updateManyAndReturn<T extends public_filesUpdateManyAndReturnArgs>(args: SelectSubset<T, public_filesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_filesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Public_files.
     * @param {public_filesUpsertArgs} args - Arguments to update or create a Public_files.
     * @example
     * // Update or create a Public_files
     * const public_files = await prisma.public_files.upsert({
     *   create: {
     *     // ... data to create a Public_files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Public_files we want to update
     *   }
     * })
     */
    upsert<T extends public_filesUpsertArgs>(args: SelectSubset<T, public_filesUpsertArgs<ExtArgs>>): Prisma__public_filesClient<$Result.GetResult<Prisma.$public_filesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Public_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_filesCountArgs} args - Arguments to filter Public_files to count.
     * @example
     * // Count the number of Public_files
     * const count = await prisma.public_files.count({
     *   where: {
     *     // ... the filter for the Public_files we want to count
     *   }
     * })
    **/
    count<T extends public_filesCountArgs>(
      args?: Subset<T, public_filesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Public_filesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Public_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Public_filesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Public_filesAggregateArgs>(args: Subset<T, Public_filesAggregateArgs>): Prisma.PrismaPromise<GetPublic_filesAggregateType<T>>

    /**
     * Group by Public_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_filesGroupByArgs} args - Group by arguments.
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
      T extends public_filesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: public_filesGroupByArgs['orderBy'] }
        : { orderBy?: public_filesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, public_filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublic_filesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the public_files model
   */
  readonly fields: public_filesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for public_files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__public_filesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flowers<T extends public_files$flowersArgs<ExtArgs> = {}>(args?: Subset<T, public_files$flowersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_and_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the public_files model
   */
  interface public_filesFieldRefs {
    readonly id: FieldRef<"public_files", 'Int'>
    readonly name: FieldRef<"public_files", 'String'>
    readonly size: FieldRef<"public_files", 'Int'>
    readonly upload_at: FieldRef<"public_files", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * public_files findUnique
   */
  export type public_filesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_files
     */
    select?: public_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_files
     */
    omit?: public_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: public_filesInclude<ExtArgs> | null
    /**
     * Filter, which public_files to fetch.
     */
    where: public_filesWhereUniqueInput
  }

  /**
   * public_files findUniqueOrThrow
   */
  export type public_filesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_files
     */
    select?: public_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_files
     */
    omit?: public_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: public_filesInclude<ExtArgs> | null
    /**
     * Filter, which public_files to fetch.
     */
    where: public_filesWhereUniqueInput
  }

  /**
   * public_files findFirst
   */
  export type public_filesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_files
     */
    select?: public_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_files
     */
    omit?: public_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: public_filesInclude<ExtArgs> | null
    /**
     * Filter, which public_files to fetch.
     */
    where?: public_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_files to fetch.
     */
    orderBy?: public_filesOrderByWithRelationInput | public_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for public_files.
     */
    cursor?: public_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of public_files.
     */
    distinct?: Public_filesScalarFieldEnum | Public_filesScalarFieldEnum[]
  }

  /**
   * public_files findFirstOrThrow
   */
  export type public_filesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_files
     */
    select?: public_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_files
     */
    omit?: public_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: public_filesInclude<ExtArgs> | null
    /**
     * Filter, which public_files to fetch.
     */
    where?: public_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_files to fetch.
     */
    orderBy?: public_filesOrderByWithRelationInput | public_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for public_files.
     */
    cursor?: public_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of public_files.
     */
    distinct?: Public_filesScalarFieldEnum | Public_filesScalarFieldEnum[]
  }

  /**
   * public_files findMany
   */
  export type public_filesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_files
     */
    select?: public_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_files
     */
    omit?: public_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: public_filesInclude<ExtArgs> | null
    /**
     * Filter, which public_files to fetch.
     */
    where?: public_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_files to fetch.
     */
    orderBy?: public_filesOrderByWithRelationInput | public_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing public_files.
     */
    cursor?: public_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_files.
     */
    skip?: number
    distinct?: Public_filesScalarFieldEnum | Public_filesScalarFieldEnum[]
  }

  /**
   * public_files create
   */
  export type public_filesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_files
     */
    select?: public_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_files
     */
    omit?: public_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: public_filesInclude<ExtArgs> | null
    /**
     * The data needed to create a public_files.
     */
    data: XOR<public_filesCreateInput, public_filesUncheckedCreateInput>
  }

  /**
   * public_files createMany
   */
  export type public_filesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many public_files.
     */
    data: public_filesCreateManyInput | public_filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * public_files createManyAndReturn
   */
  export type public_filesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_files
     */
    select?: public_filesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the public_files
     */
    omit?: public_filesOmit<ExtArgs> | null
    /**
     * The data used to create many public_files.
     */
    data: public_filesCreateManyInput | public_filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * public_files update
   */
  export type public_filesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_files
     */
    select?: public_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_files
     */
    omit?: public_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: public_filesInclude<ExtArgs> | null
    /**
     * The data needed to update a public_files.
     */
    data: XOR<public_filesUpdateInput, public_filesUncheckedUpdateInput>
    /**
     * Choose, which public_files to update.
     */
    where: public_filesWhereUniqueInput
  }

  /**
   * public_files updateMany
   */
  export type public_filesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update public_files.
     */
    data: XOR<public_filesUpdateManyMutationInput, public_filesUncheckedUpdateManyInput>
    /**
     * Filter which public_files to update
     */
    where?: public_filesWhereInput
    /**
     * Limit how many public_files to update.
     */
    limit?: number
  }

  /**
   * public_files updateManyAndReturn
   */
  export type public_filesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_files
     */
    select?: public_filesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the public_files
     */
    omit?: public_filesOmit<ExtArgs> | null
    /**
     * The data used to update public_files.
     */
    data: XOR<public_filesUpdateManyMutationInput, public_filesUncheckedUpdateManyInput>
    /**
     * Filter which public_files to update
     */
    where?: public_filesWhereInput
    /**
     * Limit how many public_files to update.
     */
    limit?: number
  }

  /**
   * public_files upsert
   */
  export type public_filesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_files
     */
    select?: public_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_files
     */
    omit?: public_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: public_filesInclude<ExtArgs> | null
    /**
     * The filter to search for the public_files to update in case it exists.
     */
    where: public_filesWhereUniqueInput
    /**
     * In case the public_files found by the `where` argument doesn't exist, create a new public_files with this data.
     */
    create: XOR<public_filesCreateInput, public_filesUncheckedCreateInput>
    /**
     * In case the public_files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<public_filesUpdateInput, public_filesUncheckedUpdateInput>
  }

  /**
   * public_files delete
   */
  export type public_filesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_files
     */
    select?: public_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_files
     */
    omit?: public_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: public_filesInclude<ExtArgs> | null
    /**
     * Filter which public_files to delete.
     */
    where: public_filesWhereUniqueInput
  }

  /**
   * public_files deleteMany
   */
  export type public_filesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which public_files to delete
     */
    where?: public_filesWhereInput
    /**
     * Limit how many public_files to delete.
     */
    limit?: number
  }

  /**
   * public_files.flowers
   */
  export type public_files$flowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_files
     */
    select?: flowers_and_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_files
     */
    omit?: flowers_and_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_filesInclude<ExtArgs> | null
    where?: flowers_and_filesWhereInput
    orderBy?: flowers_and_filesOrderByWithRelationInput | flowers_and_filesOrderByWithRelationInput[]
    cursor?: flowers_and_filesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Flowers_and_filesScalarFieldEnum | Flowers_and_filesScalarFieldEnum[]
  }

  /**
   * public_files without action
   */
  export type public_filesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_files
     */
    select?: public_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_files
     */
    omit?: public_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: public_filesInclude<ExtArgs> | null
  }


  /**
   * Model private_files
   */

  export type AggregatePrivate_files = {
    _count: Private_filesCountAggregateOutputType | null
    _avg: Private_filesAvgAggregateOutputType | null
    _sum: Private_filesSumAggregateOutputType | null
    _min: Private_filesMinAggregateOutputType | null
    _max: Private_filesMaxAggregateOutputType | null
  }

  export type Private_filesAvgAggregateOutputType = {
    size: number | null
  }

  export type Private_filesSumAggregateOutputType = {
    size: number | null
  }

  export type Private_filesMinAggregateOutputType = {
    id: string | null
    name: string | null
    size: number | null
    upload_at: Date | null
  }

  export type Private_filesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    size: number | null
    upload_at: Date | null
  }

  export type Private_filesCountAggregateOutputType = {
    id: number
    name: number
    size: number
    upload_at: number
    _all: number
  }


  export type Private_filesAvgAggregateInputType = {
    size?: true
  }

  export type Private_filesSumAggregateInputType = {
    size?: true
  }

  export type Private_filesMinAggregateInputType = {
    id?: true
    name?: true
    size?: true
    upload_at?: true
  }

  export type Private_filesMaxAggregateInputType = {
    id?: true
    name?: true
    size?: true
    upload_at?: true
  }

  export type Private_filesCountAggregateInputType = {
    id?: true
    name?: true
    size?: true
    upload_at?: true
    _all?: true
  }

  export type Private_filesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which private_files to aggregate.
     */
    where?: private_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of private_files to fetch.
     */
    orderBy?: private_filesOrderByWithRelationInput | private_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: private_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` private_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` private_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned private_files
    **/
    _count?: true | Private_filesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Private_filesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Private_filesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Private_filesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Private_filesMaxAggregateInputType
  }

  export type GetPrivate_filesAggregateType<T extends Private_filesAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivate_files]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivate_files[P]>
      : GetScalarType<T[P], AggregatePrivate_files[P]>
  }




  export type private_filesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: private_filesWhereInput
    orderBy?: private_filesOrderByWithAggregationInput | private_filesOrderByWithAggregationInput[]
    by: Private_filesScalarFieldEnum[] | Private_filesScalarFieldEnum
    having?: private_filesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Private_filesCountAggregateInputType | true
    _avg?: Private_filesAvgAggregateInputType
    _sum?: Private_filesSumAggregateInputType
    _min?: Private_filesMinAggregateInputType
    _max?: Private_filesMaxAggregateInputType
  }

  export type Private_filesGroupByOutputType = {
    id: string
    name: string
    size: number
    upload_at: Date
    _count: Private_filesCountAggregateOutputType | null
    _avg: Private_filesAvgAggregateOutputType | null
    _sum: Private_filesSumAggregateOutputType | null
    _min: Private_filesMinAggregateOutputType | null
    _max: Private_filesMaxAggregateOutputType | null
  }

  type GetPrivate_filesGroupByPayload<T extends private_filesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Private_filesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Private_filesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Private_filesGroupByOutputType[P]>
            : GetScalarType<T[P], Private_filesGroupByOutputType[P]>
        }
      >
    >


  export type private_filesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    upload_at?: boolean
  }, ExtArgs["result"]["private_files"]>

  export type private_filesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    upload_at?: boolean
  }, ExtArgs["result"]["private_files"]>

  export type private_filesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    upload_at?: boolean
  }, ExtArgs["result"]["private_files"]>

  export type private_filesSelectScalar = {
    id?: boolean
    name?: boolean
    size?: boolean
    upload_at?: boolean
  }

  export type private_filesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "size" | "upload_at", ExtArgs["result"]["private_files"]>

  export type $private_filesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "private_files"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      size: number
      upload_at: Date
    }, ExtArgs["result"]["private_files"]>
    composites: {}
  }

  type private_filesGetPayload<S extends boolean | null | undefined | private_filesDefaultArgs> = $Result.GetResult<Prisma.$private_filesPayload, S>

  type private_filesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<private_filesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Private_filesCountAggregateInputType | true
    }

  export interface private_filesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['private_files'], meta: { name: 'private_files' } }
    /**
     * Find zero or one Private_files that matches the filter.
     * @param {private_filesFindUniqueArgs} args - Arguments to find a Private_files
     * @example
     * // Get one Private_files
     * const private_files = await prisma.private_files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends private_filesFindUniqueArgs>(args: SelectSubset<T, private_filesFindUniqueArgs<ExtArgs>>): Prisma__private_filesClient<$Result.GetResult<Prisma.$private_filesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Private_files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {private_filesFindUniqueOrThrowArgs} args - Arguments to find a Private_files
     * @example
     * // Get one Private_files
     * const private_files = await prisma.private_files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends private_filesFindUniqueOrThrowArgs>(args: SelectSubset<T, private_filesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__private_filesClient<$Result.GetResult<Prisma.$private_filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Private_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {private_filesFindFirstArgs} args - Arguments to find a Private_files
     * @example
     * // Get one Private_files
     * const private_files = await prisma.private_files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends private_filesFindFirstArgs>(args?: SelectSubset<T, private_filesFindFirstArgs<ExtArgs>>): Prisma__private_filesClient<$Result.GetResult<Prisma.$private_filesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Private_files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {private_filesFindFirstOrThrowArgs} args - Arguments to find a Private_files
     * @example
     * // Get one Private_files
     * const private_files = await prisma.private_files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends private_filesFindFirstOrThrowArgs>(args?: SelectSubset<T, private_filesFindFirstOrThrowArgs<ExtArgs>>): Prisma__private_filesClient<$Result.GetResult<Prisma.$private_filesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Private_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {private_filesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Private_files
     * const private_files = await prisma.private_files.findMany()
     * 
     * // Get first 10 Private_files
     * const private_files = await prisma.private_files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const private_filesWithIdOnly = await prisma.private_files.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends private_filesFindManyArgs>(args?: SelectSubset<T, private_filesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$private_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Private_files.
     * @param {private_filesCreateArgs} args - Arguments to create a Private_files.
     * @example
     * // Create one Private_files
     * const Private_files = await prisma.private_files.create({
     *   data: {
     *     // ... data to create a Private_files
     *   }
     * })
     * 
     */
    create<T extends private_filesCreateArgs>(args: SelectSubset<T, private_filesCreateArgs<ExtArgs>>): Prisma__private_filesClient<$Result.GetResult<Prisma.$private_filesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Private_files.
     * @param {private_filesCreateManyArgs} args - Arguments to create many Private_files.
     * @example
     * // Create many Private_files
     * const private_files = await prisma.private_files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends private_filesCreateManyArgs>(args?: SelectSubset<T, private_filesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Private_files and returns the data saved in the database.
     * @param {private_filesCreateManyAndReturnArgs} args - Arguments to create many Private_files.
     * @example
     * // Create many Private_files
     * const private_files = await prisma.private_files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Private_files and only return the `id`
     * const private_filesWithIdOnly = await prisma.private_files.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends private_filesCreateManyAndReturnArgs>(args?: SelectSubset<T, private_filesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$private_filesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Private_files.
     * @param {private_filesDeleteArgs} args - Arguments to delete one Private_files.
     * @example
     * // Delete one Private_files
     * const Private_files = await prisma.private_files.delete({
     *   where: {
     *     // ... filter to delete one Private_files
     *   }
     * })
     * 
     */
    delete<T extends private_filesDeleteArgs>(args: SelectSubset<T, private_filesDeleteArgs<ExtArgs>>): Prisma__private_filesClient<$Result.GetResult<Prisma.$private_filesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Private_files.
     * @param {private_filesUpdateArgs} args - Arguments to update one Private_files.
     * @example
     * // Update one Private_files
     * const private_files = await prisma.private_files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends private_filesUpdateArgs>(args: SelectSubset<T, private_filesUpdateArgs<ExtArgs>>): Prisma__private_filesClient<$Result.GetResult<Prisma.$private_filesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Private_files.
     * @param {private_filesDeleteManyArgs} args - Arguments to filter Private_files to delete.
     * @example
     * // Delete a few Private_files
     * const { count } = await prisma.private_files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends private_filesDeleteManyArgs>(args?: SelectSubset<T, private_filesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Private_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {private_filesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Private_files
     * const private_files = await prisma.private_files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends private_filesUpdateManyArgs>(args: SelectSubset<T, private_filesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Private_files and returns the data updated in the database.
     * @param {private_filesUpdateManyAndReturnArgs} args - Arguments to update many Private_files.
     * @example
     * // Update many Private_files
     * const private_files = await prisma.private_files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Private_files and only return the `id`
     * const private_filesWithIdOnly = await prisma.private_files.updateManyAndReturn({
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
    updateManyAndReturn<T extends private_filesUpdateManyAndReturnArgs>(args: SelectSubset<T, private_filesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$private_filesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Private_files.
     * @param {private_filesUpsertArgs} args - Arguments to update or create a Private_files.
     * @example
     * // Update or create a Private_files
     * const private_files = await prisma.private_files.upsert({
     *   create: {
     *     // ... data to create a Private_files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Private_files we want to update
     *   }
     * })
     */
    upsert<T extends private_filesUpsertArgs>(args: SelectSubset<T, private_filesUpsertArgs<ExtArgs>>): Prisma__private_filesClient<$Result.GetResult<Prisma.$private_filesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Private_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {private_filesCountArgs} args - Arguments to filter Private_files to count.
     * @example
     * // Count the number of Private_files
     * const count = await prisma.private_files.count({
     *   where: {
     *     // ... the filter for the Private_files we want to count
     *   }
     * })
    **/
    count<T extends private_filesCountArgs>(
      args?: Subset<T, private_filesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Private_filesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Private_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Private_filesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Private_filesAggregateArgs>(args: Subset<T, Private_filesAggregateArgs>): Prisma.PrismaPromise<GetPrivate_filesAggregateType<T>>

    /**
     * Group by Private_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {private_filesGroupByArgs} args - Group by arguments.
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
      T extends private_filesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: private_filesGroupByArgs['orderBy'] }
        : { orderBy?: private_filesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, private_filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivate_filesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the private_files model
   */
  readonly fields: private_filesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for private_files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__private_filesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the private_files model
   */
  interface private_filesFieldRefs {
    readonly id: FieldRef<"private_files", 'String'>
    readonly name: FieldRef<"private_files", 'String'>
    readonly size: FieldRef<"private_files", 'Int'>
    readonly upload_at: FieldRef<"private_files", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * private_files findUnique
   */
  export type private_filesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_files
     */
    select?: private_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_files
     */
    omit?: private_filesOmit<ExtArgs> | null
    /**
     * Filter, which private_files to fetch.
     */
    where: private_filesWhereUniqueInput
  }

  /**
   * private_files findUniqueOrThrow
   */
  export type private_filesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_files
     */
    select?: private_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_files
     */
    omit?: private_filesOmit<ExtArgs> | null
    /**
     * Filter, which private_files to fetch.
     */
    where: private_filesWhereUniqueInput
  }

  /**
   * private_files findFirst
   */
  export type private_filesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_files
     */
    select?: private_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_files
     */
    omit?: private_filesOmit<ExtArgs> | null
    /**
     * Filter, which private_files to fetch.
     */
    where?: private_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of private_files to fetch.
     */
    orderBy?: private_filesOrderByWithRelationInput | private_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for private_files.
     */
    cursor?: private_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` private_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` private_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of private_files.
     */
    distinct?: Private_filesScalarFieldEnum | Private_filesScalarFieldEnum[]
  }

  /**
   * private_files findFirstOrThrow
   */
  export type private_filesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_files
     */
    select?: private_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_files
     */
    omit?: private_filesOmit<ExtArgs> | null
    /**
     * Filter, which private_files to fetch.
     */
    where?: private_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of private_files to fetch.
     */
    orderBy?: private_filesOrderByWithRelationInput | private_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for private_files.
     */
    cursor?: private_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` private_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` private_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of private_files.
     */
    distinct?: Private_filesScalarFieldEnum | Private_filesScalarFieldEnum[]
  }

  /**
   * private_files findMany
   */
  export type private_filesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_files
     */
    select?: private_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_files
     */
    omit?: private_filesOmit<ExtArgs> | null
    /**
     * Filter, which private_files to fetch.
     */
    where?: private_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of private_files to fetch.
     */
    orderBy?: private_filesOrderByWithRelationInput | private_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing private_files.
     */
    cursor?: private_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` private_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` private_files.
     */
    skip?: number
    distinct?: Private_filesScalarFieldEnum | Private_filesScalarFieldEnum[]
  }

  /**
   * private_files create
   */
  export type private_filesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_files
     */
    select?: private_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_files
     */
    omit?: private_filesOmit<ExtArgs> | null
    /**
     * The data needed to create a private_files.
     */
    data: XOR<private_filesCreateInput, private_filesUncheckedCreateInput>
  }

  /**
   * private_files createMany
   */
  export type private_filesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many private_files.
     */
    data: private_filesCreateManyInput | private_filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * private_files createManyAndReturn
   */
  export type private_filesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_files
     */
    select?: private_filesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the private_files
     */
    omit?: private_filesOmit<ExtArgs> | null
    /**
     * The data used to create many private_files.
     */
    data: private_filesCreateManyInput | private_filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * private_files update
   */
  export type private_filesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_files
     */
    select?: private_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_files
     */
    omit?: private_filesOmit<ExtArgs> | null
    /**
     * The data needed to update a private_files.
     */
    data: XOR<private_filesUpdateInput, private_filesUncheckedUpdateInput>
    /**
     * Choose, which private_files to update.
     */
    where: private_filesWhereUniqueInput
  }

  /**
   * private_files updateMany
   */
  export type private_filesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update private_files.
     */
    data: XOR<private_filesUpdateManyMutationInput, private_filesUncheckedUpdateManyInput>
    /**
     * Filter which private_files to update
     */
    where?: private_filesWhereInput
    /**
     * Limit how many private_files to update.
     */
    limit?: number
  }

  /**
   * private_files updateManyAndReturn
   */
  export type private_filesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_files
     */
    select?: private_filesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the private_files
     */
    omit?: private_filesOmit<ExtArgs> | null
    /**
     * The data used to update private_files.
     */
    data: XOR<private_filesUpdateManyMutationInput, private_filesUncheckedUpdateManyInput>
    /**
     * Filter which private_files to update
     */
    where?: private_filesWhereInput
    /**
     * Limit how many private_files to update.
     */
    limit?: number
  }

  /**
   * private_files upsert
   */
  export type private_filesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_files
     */
    select?: private_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_files
     */
    omit?: private_filesOmit<ExtArgs> | null
    /**
     * The filter to search for the private_files to update in case it exists.
     */
    where: private_filesWhereUniqueInput
    /**
     * In case the private_files found by the `where` argument doesn't exist, create a new private_files with this data.
     */
    create: XOR<private_filesCreateInput, private_filesUncheckedCreateInput>
    /**
     * In case the private_files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<private_filesUpdateInput, private_filesUncheckedUpdateInput>
  }

  /**
   * private_files delete
   */
  export type private_filesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_files
     */
    select?: private_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_files
     */
    omit?: private_filesOmit<ExtArgs> | null
    /**
     * Filter which private_files to delete.
     */
    where: private_filesWhereUniqueInput
  }

  /**
   * private_files deleteMany
   */
  export type private_filesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which private_files to delete
     */
    where?: private_filesWhereInput
    /**
     * Limit how many private_files to delete.
     */
    limit?: number
  }

  /**
   * private_files without action
   */
  export type private_filesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_files
     */
    select?: private_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_files
     */
    omit?: private_filesOmit<ExtArgs> | null
  }


  /**
   * Model flowers
   */

  export type AggregateFlowers = {
    _count: FlowersCountAggregateOutputType | null
    _avg: FlowersAvgAggregateOutputType | null
    _sum: FlowersSumAggregateOutputType | null
    _min: FlowersMinAggregateOutputType | null
    _max: FlowersMaxAggregateOutputType | null
  }

  export type FlowersAvgAggregateOutputType = {
    id: number | null
    price: number | null
    variety_id: number | null
  }

  export type FlowersSumAggregateOutputType = {
    id: number | null
    price: number | null
    variety_id: number | null
  }

  export type FlowersMinAggregateOutputType = {
    id: number | null
    color: string | null
    name_en: string | null
    name_ru: string | null
    price: number | null
    variety_id: number | null
  }

  export type FlowersMaxAggregateOutputType = {
    id: number | null
    color: string | null
    name_en: string | null
    name_ru: string | null
    price: number | null
    variety_id: number | null
  }

  export type FlowersCountAggregateOutputType = {
    id: number
    color: number
    name_en: number
    name_ru: number
    price: number
    variety_id: number
    _all: number
  }


  export type FlowersAvgAggregateInputType = {
    id?: true
    price?: true
    variety_id?: true
  }

  export type FlowersSumAggregateInputType = {
    id?: true
    price?: true
    variety_id?: true
  }

  export type FlowersMinAggregateInputType = {
    id?: true
    color?: true
    name_en?: true
    name_ru?: true
    price?: true
    variety_id?: true
  }

  export type FlowersMaxAggregateInputType = {
    id?: true
    color?: true
    name_en?: true
    name_ru?: true
    price?: true
    variety_id?: true
  }

  export type FlowersCountAggregateInputType = {
    id?: true
    color?: true
    name_en?: true
    name_ru?: true
    price?: true
    variety_id?: true
    _all?: true
  }

  export type FlowersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flowers to aggregate.
     */
    where?: flowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers to fetch.
     */
    orderBy?: flowersOrderByWithRelationInput | flowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: flowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned flowers
    **/
    _count?: true | FlowersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowersMaxAggregateInputType
  }

  export type GetFlowersAggregateType<T extends FlowersAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowers[P]>
      : GetScalarType<T[P], AggregateFlowers[P]>
  }




  export type flowersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flowersWhereInput
    orderBy?: flowersOrderByWithAggregationInput | flowersOrderByWithAggregationInput[]
    by: FlowersScalarFieldEnum[] | FlowersScalarFieldEnum
    having?: flowersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowersCountAggregateInputType | true
    _avg?: FlowersAvgAggregateInputType
    _sum?: FlowersSumAggregateInputType
    _min?: FlowersMinAggregateInputType
    _max?: FlowersMaxAggregateInputType
  }

  export type FlowersGroupByOutputType = {
    id: number
    color: string
    name_en: string
    name_ru: string
    price: number
    variety_id: number
    _count: FlowersCountAggregateOutputType | null
    _avg: FlowersAvgAggregateOutputType | null
    _sum: FlowersSumAggregateOutputType | null
    _min: FlowersMinAggregateOutputType | null
    _max: FlowersMaxAggregateOutputType | null
  }

  type GetFlowersGroupByPayload<T extends flowersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlowersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowersGroupByOutputType[P]>
            : GetScalarType<T[P], FlowersGroupByOutputType[P]>
        }
      >
    >


  export type flowersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
    name_en?: boolean
    name_ru?: boolean
    price?: boolean
    variety_id?: boolean
    history?: boolean | flowers$historyArgs<ExtArgs>
    variety?: boolean | flowers_varietyDefaultArgs<ExtArgs>
    imgs?: boolean | flowers$imgsArgs<ExtArgs>
    farms?: boolean | flowers$farmsArgs<ExtArgs>
    bouquets?: boolean | flowers$bouquetsArgs<ExtArgs>
    _count?: boolean | FlowersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers"]>

  export type flowersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
    name_en?: boolean
    name_ru?: boolean
    price?: boolean
    variety_id?: boolean
    variety?: boolean | flowers_varietyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers"]>

  export type flowersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
    name_en?: boolean
    name_ru?: boolean
    price?: boolean
    variety_id?: boolean
    variety?: boolean | flowers_varietyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers"]>

  export type flowersSelectScalar = {
    id?: boolean
    color?: boolean
    name_en?: boolean
    name_ru?: boolean
    price?: boolean
    variety_id?: boolean
  }

  export type flowersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "color" | "name_en" | "name_ru" | "price" | "variety_id", ExtArgs["result"]["flowers"]>
  export type flowersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | flowers$historyArgs<ExtArgs>
    variety?: boolean | flowers_varietyDefaultArgs<ExtArgs>
    imgs?: boolean | flowers$imgsArgs<ExtArgs>
    farms?: boolean | flowers$farmsArgs<ExtArgs>
    bouquets?: boolean | flowers$bouquetsArgs<ExtArgs>
    _count?: boolean | FlowersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type flowersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variety?: boolean | flowers_varietyDefaultArgs<ExtArgs>
  }
  export type flowersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variety?: boolean | flowers_varietyDefaultArgs<ExtArgs>
  }

  export type $flowersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "flowers"
    objects: {
      history: Prisma.$flowers_historyPayload<ExtArgs>[]
      variety: Prisma.$flowers_varietyPayload<ExtArgs>
      imgs: Prisma.$flowers_and_filesPayload<ExtArgs>[]
      farms: Prisma.$flowers_and_flowers_farmsPayload<ExtArgs>[]
      bouquets: Prisma.$flowers_and_flowers_bouquetsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      color: string
      name_en: string
      name_ru: string
      price: number
      variety_id: number
    }, ExtArgs["result"]["flowers"]>
    composites: {}
  }

  type flowersGetPayload<S extends boolean | null | undefined | flowersDefaultArgs> = $Result.GetResult<Prisma.$flowersPayload, S>

  type flowersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<flowersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlowersCountAggregateInputType | true
    }

  export interface flowersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['flowers'], meta: { name: 'flowers' } }
    /**
     * Find zero or one Flowers that matches the filter.
     * @param {flowersFindUniqueArgs} args - Arguments to find a Flowers
     * @example
     * // Get one Flowers
     * const flowers = await prisma.flowers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends flowersFindUniqueArgs>(args: SelectSubset<T, flowersFindUniqueArgs<ExtArgs>>): Prisma__flowersClient<$Result.GetResult<Prisma.$flowersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flowers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {flowersFindUniqueOrThrowArgs} args - Arguments to find a Flowers
     * @example
     * // Get one Flowers
     * const flowers = await prisma.flowers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends flowersFindUniqueOrThrowArgs>(args: SelectSubset<T, flowersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__flowersClient<$Result.GetResult<Prisma.$flowersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowersFindFirstArgs} args - Arguments to find a Flowers
     * @example
     * // Get one Flowers
     * const flowers = await prisma.flowers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends flowersFindFirstArgs>(args?: SelectSubset<T, flowersFindFirstArgs<ExtArgs>>): Prisma__flowersClient<$Result.GetResult<Prisma.$flowersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowersFindFirstOrThrowArgs} args - Arguments to find a Flowers
     * @example
     * // Get one Flowers
     * const flowers = await prisma.flowers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends flowersFindFirstOrThrowArgs>(args?: SelectSubset<T, flowersFindFirstOrThrowArgs<ExtArgs>>): Prisma__flowersClient<$Result.GetResult<Prisma.$flowersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flowers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flowers
     * const flowers = await prisma.flowers.findMany()
     * 
     * // Get first 10 Flowers
     * const flowers = await prisma.flowers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowersWithIdOnly = await prisma.flowers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends flowersFindManyArgs>(args?: SelectSubset<T, flowersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flowers.
     * @param {flowersCreateArgs} args - Arguments to create a Flowers.
     * @example
     * // Create one Flowers
     * const Flowers = await prisma.flowers.create({
     *   data: {
     *     // ... data to create a Flowers
     *   }
     * })
     * 
     */
    create<T extends flowersCreateArgs>(args: SelectSubset<T, flowersCreateArgs<ExtArgs>>): Prisma__flowersClient<$Result.GetResult<Prisma.$flowersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flowers.
     * @param {flowersCreateManyArgs} args - Arguments to create many Flowers.
     * @example
     * // Create many Flowers
     * const flowers = await prisma.flowers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends flowersCreateManyArgs>(args?: SelectSubset<T, flowersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flowers and returns the data saved in the database.
     * @param {flowersCreateManyAndReturnArgs} args - Arguments to create many Flowers.
     * @example
     * // Create many Flowers
     * const flowers = await prisma.flowers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flowers and only return the `id`
     * const flowersWithIdOnly = await prisma.flowers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends flowersCreateManyAndReturnArgs>(args?: SelectSubset<T, flowersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flowers.
     * @param {flowersDeleteArgs} args - Arguments to delete one Flowers.
     * @example
     * // Delete one Flowers
     * const Flowers = await prisma.flowers.delete({
     *   where: {
     *     // ... filter to delete one Flowers
     *   }
     * })
     * 
     */
    delete<T extends flowersDeleteArgs>(args: SelectSubset<T, flowersDeleteArgs<ExtArgs>>): Prisma__flowersClient<$Result.GetResult<Prisma.$flowersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flowers.
     * @param {flowersUpdateArgs} args - Arguments to update one Flowers.
     * @example
     * // Update one Flowers
     * const flowers = await prisma.flowers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends flowersUpdateArgs>(args: SelectSubset<T, flowersUpdateArgs<ExtArgs>>): Prisma__flowersClient<$Result.GetResult<Prisma.$flowersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flowers.
     * @param {flowersDeleteManyArgs} args - Arguments to filter Flowers to delete.
     * @example
     * // Delete a few Flowers
     * const { count } = await prisma.flowers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends flowersDeleteManyArgs>(args?: SelectSubset<T, flowersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flowers
     * const flowers = await prisma.flowers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends flowersUpdateManyArgs>(args: SelectSubset<T, flowersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowers and returns the data updated in the database.
     * @param {flowersUpdateManyAndReturnArgs} args - Arguments to update many Flowers.
     * @example
     * // Update many Flowers
     * const flowers = await prisma.flowers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flowers and only return the `id`
     * const flowersWithIdOnly = await prisma.flowers.updateManyAndReturn({
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
    updateManyAndReturn<T extends flowersUpdateManyAndReturnArgs>(args: SelectSubset<T, flowersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flowers.
     * @param {flowersUpsertArgs} args - Arguments to update or create a Flowers.
     * @example
     * // Update or create a Flowers
     * const flowers = await prisma.flowers.upsert({
     *   create: {
     *     // ... data to create a Flowers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flowers we want to update
     *   }
     * })
     */
    upsert<T extends flowersUpsertArgs>(args: SelectSubset<T, flowersUpsertArgs<ExtArgs>>): Prisma__flowersClient<$Result.GetResult<Prisma.$flowersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowersCountArgs} args - Arguments to filter Flowers to count.
     * @example
     * // Count the number of Flowers
     * const count = await prisma.flowers.count({
     *   where: {
     *     // ... the filter for the Flowers we want to count
     *   }
     * })
    **/
    count<T extends flowersCountArgs>(
      args?: Subset<T, flowersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlowersAggregateArgs>(args: Subset<T, FlowersAggregateArgs>): Prisma.PrismaPromise<GetFlowersAggregateType<T>>

    /**
     * Group by Flowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowersGroupByArgs} args - Group by arguments.
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
      T extends flowersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: flowersGroupByArgs['orderBy'] }
        : { orderBy?: flowersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, flowersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the flowers model
   */
  readonly fields: flowersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for flowers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__flowersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    history<T extends flowers$historyArgs<ExtArgs> = {}>(args?: Subset<T, flowers$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    variety<T extends flowers_varietyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, flowers_varietyDefaultArgs<ExtArgs>>): Prisma__flowers_varietyClient<$Result.GetResult<Prisma.$flowers_varietyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    imgs<T extends flowers$imgsArgs<ExtArgs> = {}>(args?: Subset<T, flowers$imgsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_and_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    farms<T extends flowers$farmsArgs<ExtArgs> = {}>(args?: Subset<T, flowers$farmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_and_flowers_farmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bouquets<T extends flowers$bouquetsArgs<ExtArgs> = {}>(args?: Subset<T, flowers$bouquetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_and_flowers_bouquetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the flowers model
   */
  interface flowersFieldRefs {
    readonly id: FieldRef<"flowers", 'Int'>
    readonly color: FieldRef<"flowers", 'String'>
    readonly name_en: FieldRef<"flowers", 'String'>
    readonly name_ru: FieldRef<"flowers", 'String'>
    readonly price: FieldRef<"flowers", 'Int'>
    readonly variety_id: FieldRef<"flowers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * flowers findUnique
   */
  export type flowersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers
     */
    select?: flowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers
     */
    omit?: flowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowersInclude<ExtArgs> | null
    /**
     * Filter, which flowers to fetch.
     */
    where: flowersWhereUniqueInput
  }

  /**
   * flowers findUniqueOrThrow
   */
  export type flowersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers
     */
    select?: flowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers
     */
    omit?: flowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowersInclude<ExtArgs> | null
    /**
     * Filter, which flowers to fetch.
     */
    where: flowersWhereUniqueInput
  }

  /**
   * flowers findFirst
   */
  export type flowersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers
     */
    select?: flowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers
     */
    omit?: flowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowersInclude<ExtArgs> | null
    /**
     * Filter, which flowers to fetch.
     */
    where?: flowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers to fetch.
     */
    orderBy?: flowersOrderByWithRelationInput | flowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flowers.
     */
    cursor?: flowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flowers.
     */
    distinct?: FlowersScalarFieldEnum | FlowersScalarFieldEnum[]
  }

  /**
   * flowers findFirstOrThrow
   */
  export type flowersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers
     */
    select?: flowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers
     */
    omit?: flowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowersInclude<ExtArgs> | null
    /**
     * Filter, which flowers to fetch.
     */
    where?: flowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers to fetch.
     */
    orderBy?: flowersOrderByWithRelationInput | flowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flowers.
     */
    cursor?: flowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flowers.
     */
    distinct?: FlowersScalarFieldEnum | FlowersScalarFieldEnum[]
  }

  /**
   * flowers findMany
   */
  export type flowersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers
     */
    select?: flowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers
     */
    omit?: flowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowersInclude<ExtArgs> | null
    /**
     * Filter, which flowers to fetch.
     */
    where?: flowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers to fetch.
     */
    orderBy?: flowersOrderByWithRelationInput | flowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing flowers.
     */
    cursor?: flowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers.
     */
    skip?: number
    distinct?: FlowersScalarFieldEnum | FlowersScalarFieldEnum[]
  }

  /**
   * flowers create
   */
  export type flowersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers
     */
    select?: flowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers
     */
    omit?: flowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowersInclude<ExtArgs> | null
    /**
     * The data needed to create a flowers.
     */
    data: XOR<flowersCreateInput, flowersUncheckedCreateInput>
  }

  /**
   * flowers createMany
   */
  export type flowersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many flowers.
     */
    data: flowersCreateManyInput | flowersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * flowers createManyAndReturn
   */
  export type flowersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers
     */
    select?: flowersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the flowers
     */
    omit?: flowersOmit<ExtArgs> | null
    /**
     * The data used to create many flowers.
     */
    data: flowersCreateManyInput | flowersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * flowers update
   */
  export type flowersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers
     */
    select?: flowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers
     */
    omit?: flowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowersInclude<ExtArgs> | null
    /**
     * The data needed to update a flowers.
     */
    data: XOR<flowersUpdateInput, flowersUncheckedUpdateInput>
    /**
     * Choose, which flowers to update.
     */
    where: flowersWhereUniqueInput
  }

  /**
   * flowers updateMany
   */
  export type flowersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update flowers.
     */
    data: XOR<flowersUpdateManyMutationInput, flowersUncheckedUpdateManyInput>
    /**
     * Filter which flowers to update
     */
    where?: flowersWhereInput
    /**
     * Limit how many flowers to update.
     */
    limit?: number
  }

  /**
   * flowers updateManyAndReturn
   */
  export type flowersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers
     */
    select?: flowersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the flowers
     */
    omit?: flowersOmit<ExtArgs> | null
    /**
     * The data used to update flowers.
     */
    data: XOR<flowersUpdateManyMutationInput, flowersUncheckedUpdateManyInput>
    /**
     * Filter which flowers to update
     */
    where?: flowersWhereInput
    /**
     * Limit how many flowers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * flowers upsert
   */
  export type flowersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers
     */
    select?: flowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers
     */
    omit?: flowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowersInclude<ExtArgs> | null
    /**
     * The filter to search for the flowers to update in case it exists.
     */
    where: flowersWhereUniqueInput
    /**
     * In case the flowers found by the `where` argument doesn't exist, create a new flowers with this data.
     */
    create: XOR<flowersCreateInput, flowersUncheckedCreateInput>
    /**
     * In case the flowers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<flowersUpdateInput, flowersUncheckedUpdateInput>
  }

  /**
   * flowers delete
   */
  export type flowersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers
     */
    select?: flowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers
     */
    omit?: flowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowersInclude<ExtArgs> | null
    /**
     * Filter which flowers to delete.
     */
    where: flowersWhereUniqueInput
  }

  /**
   * flowers deleteMany
   */
  export type flowersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flowers to delete
     */
    where?: flowersWhereInput
    /**
     * Limit how many flowers to delete.
     */
    limit?: number
  }

  /**
   * flowers.history
   */
  export type flowers$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_history
     */
    select?: flowers_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_history
     */
    omit?: flowers_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_historyInclude<ExtArgs> | null
    where?: flowers_historyWhereInput
    orderBy?: flowers_historyOrderByWithRelationInput | flowers_historyOrderByWithRelationInput[]
    cursor?: flowers_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Flowers_historyScalarFieldEnum | Flowers_historyScalarFieldEnum[]
  }

  /**
   * flowers.imgs
   */
  export type flowers$imgsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_files
     */
    select?: flowers_and_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_files
     */
    omit?: flowers_and_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_filesInclude<ExtArgs> | null
    where?: flowers_and_filesWhereInput
    orderBy?: flowers_and_filesOrderByWithRelationInput | flowers_and_filesOrderByWithRelationInput[]
    cursor?: flowers_and_filesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Flowers_and_filesScalarFieldEnum | Flowers_and_filesScalarFieldEnum[]
  }

  /**
   * flowers.farms
   */
  export type flowers$farmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_farms
     */
    select?: flowers_and_flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_farms
     */
    omit?: flowers_and_flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_farmsInclude<ExtArgs> | null
    where?: flowers_and_flowers_farmsWhereInput
    orderBy?: flowers_and_flowers_farmsOrderByWithRelationInput | flowers_and_flowers_farmsOrderByWithRelationInput[]
    cursor?: flowers_and_flowers_farmsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Flowers_and_flowers_farmsScalarFieldEnum | Flowers_and_flowers_farmsScalarFieldEnum[]
  }

  /**
   * flowers.bouquets
   */
  export type flowers$bouquetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_bouquets
     */
    select?: flowers_and_flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_bouquets
     */
    omit?: flowers_and_flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_bouquetsInclude<ExtArgs> | null
    where?: flowers_and_flowers_bouquetsWhereInput
    orderBy?: flowers_and_flowers_bouquetsOrderByWithRelationInput | flowers_and_flowers_bouquetsOrderByWithRelationInput[]
    cursor?: flowers_and_flowers_bouquetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Flowers_and_flowers_bouquetsScalarFieldEnum | Flowers_and_flowers_bouquetsScalarFieldEnum[]
  }

  /**
   * flowers without action
   */
  export type flowersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers
     */
    select?: flowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers
     */
    omit?: flowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowersInclude<ExtArgs> | null
  }


  /**
   * Model flowers_variety
   */

  export type AggregateFlowers_variety = {
    _count: Flowers_varietyCountAggregateOutputType | null
    _avg: Flowers_varietyAvgAggregateOutputType | null
    _sum: Flowers_varietySumAggregateOutputType | null
    _min: Flowers_varietyMinAggregateOutputType | null
    _max: Flowers_varietyMaxAggregateOutputType | null
  }

  export type Flowers_varietyAvgAggregateOutputType = {
    id: number | null
  }

  export type Flowers_varietySumAggregateOutputType = {
    id: number | null
  }

  export type Flowers_varietyMinAggregateOutputType = {
    id: number | null
    name_en: string | null
    name_ru: string | null
  }

  export type Flowers_varietyMaxAggregateOutputType = {
    id: number | null
    name_en: string | null
    name_ru: string | null
  }

  export type Flowers_varietyCountAggregateOutputType = {
    id: number
    name_en: number
    name_ru: number
    _all: number
  }


  export type Flowers_varietyAvgAggregateInputType = {
    id?: true
  }

  export type Flowers_varietySumAggregateInputType = {
    id?: true
  }

  export type Flowers_varietyMinAggregateInputType = {
    id?: true
    name_en?: true
    name_ru?: true
  }

  export type Flowers_varietyMaxAggregateInputType = {
    id?: true
    name_en?: true
    name_ru?: true
  }

  export type Flowers_varietyCountAggregateInputType = {
    id?: true
    name_en?: true
    name_ru?: true
    _all?: true
  }

  export type Flowers_varietyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flowers_variety to aggregate.
     */
    where?: flowers_varietyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_varieties to fetch.
     */
    orderBy?: flowers_varietyOrderByWithRelationInput | flowers_varietyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: flowers_varietyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_varieties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_varieties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned flowers_varieties
    **/
    _count?: true | Flowers_varietyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Flowers_varietyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Flowers_varietySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Flowers_varietyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Flowers_varietyMaxAggregateInputType
  }

  export type GetFlowers_varietyAggregateType<T extends Flowers_varietyAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowers_variety]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowers_variety[P]>
      : GetScalarType<T[P], AggregateFlowers_variety[P]>
  }




  export type flowers_varietyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flowers_varietyWhereInput
    orderBy?: flowers_varietyOrderByWithAggregationInput | flowers_varietyOrderByWithAggregationInput[]
    by: Flowers_varietyScalarFieldEnum[] | Flowers_varietyScalarFieldEnum
    having?: flowers_varietyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Flowers_varietyCountAggregateInputType | true
    _avg?: Flowers_varietyAvgAggregateInputType
    _sum?: Flowers_varietySumAggregateInputType
    _min?: Flowers_varietyMinAggregateInputType
    _max?: Flowers_varietyMaxAggregateInputType
  }

  export type Flowers_varietyGroupByOutputType = {
    id: number
    name_en: string
    name_ru: string
    _count: Flowers_varietyCountAggregateOutputType | null
    _avg: Flowers_varietyAvgAggregateOutputType | null
    _sum: Flowers_varietySumAggregateOutputType | null
    _min: Flowers_varietyMinAggregateOutputType | null
    _max: Flowers_varietyMaxAggregateOutputType | null
  }

  type GetFlowers_varietyGroupByPayload<T extends flowers_varietyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Flowers_varietyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Flowers_varietyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Flowers_varietyGroupByOutputType[P]>
            : GetScalarType<T[P], Flowers_varietyGroupByOutputType[P]>
        }
      >
    >


  export type flowers_varietySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_en?: boolean
    name_ru?: boolean
    flowers?: boolean | flowers_variety$flowersArgs<ExtArgs>
    _count?: boolean | Flowers_varietyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers_variety"]>

  export type flowers_varietySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_en?: boolean
    name_ru?: boolean
  }, ExtArgs["result"]["flowers_variety"]>

  export type flowers_varietySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_en?: boolean
    name_ru?: boolean
  }, ExtArgs["result"]["flowers_variety"]>

  export type flowers_varietySelectScalar = {
    id?: boolean
    name_en?: boolean
    name_ru?: boolean
  }

  export type flowers_varietyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_en" | "name_ru", ExtArgs["result"]["flowers_variety"]>
  export type flowers_varietyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | flowers_variety$flowersArgs<ExtArgs>
    _count?: boolean | Flowers_varietyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type flowers_varietyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type flowers_varietyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $flowers_varietyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "flowers_variety"
    objects: {
      flowers: Prisma.$flowersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name_en: string
      name_ru: string
    }, ExtArgs["result"]["flowers_variety"]>
    composites: {}
  }

  type flowers_varietyGetPayload<S extends boolean | null | undefined | flowers_varietyDefaultArgs> = $Result.GetResult<Prisma.$flowers_varietyPayload, S>

  type flowers_varietyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<flowers_varietyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Flowers_varietyCountAggregateInputType | true
    }

  export interface flowers_varietyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['flowers_variety'], meta: { name: 'flowers_variety' } }
    /**
     * Find zero or one Flowers_variety that matches the filter.
     * @param {flowers_varietyFindUniqueArgs} args - Arguments to find a Flowers_variety
     * @example
     * // Get one Flowers_variety
     * const flowers_variety = await prisma.flowers_variety.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends flowers_varietyFindUniqueArgs>(args: SelectSubset<T, flowers_varietyFindUniqueArgs<ExtArgs>>): Prisma__flowers_varietyClient<$Result.GetResult<Prisma.$flowers_varietyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flowers_variety that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {flowers_varietyFindUniqueOrThrowArgs} args - Arguments to find a Flowers_variety
     * @example
     * // Get one Flowers_variety
     * const flowers_variety = await prisma.flowers_variety.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends flowers_varietyFindUniqueOrThrowArgs>(args: SelectSubset<T, flowers_varietyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__flowers_varietyClient<$Result.GetResult<Prisma.$flowers_varietyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowers_variety that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_varietyFindFirstArgs} args - Arguments to find a Flowers_variety
     * @example
     * // Get one Flowers_variety
     * const flowers_variety = await prisma.flowers_variety.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends flowers_varietyFindFirstArgs>(args?: SelectSubset<T, flowers_varietyFindFirstArgs<ExtArgs>>): Prisma__flowers_varietyClient<$Result.GetResult<Prisma.$flowers_varietyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowers_variety that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_varietyFindFirstOrThrowArgs} args - Arguments to find a Flowers_variety
     * @example
     * // Get one Flowers_variety
     * const flowers_variety = await prisma.flowers_variety.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends flowers_varietyFindFirstOrThrowArgs>(args?: SelectSubset<T, flowers_varietyFindFirstOrThrowArgs<ExtArgs>>): Prisma__flowers_varietyClient<$Result.GetResult<Prisma.$flowers_varietyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flowers_varieties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_varietyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flowers_varieties
     * const flowers_varieties = await prisma.flowers_variety.findMany()
     * 
     * // Get first 10 Flowers_varieties
     * const flowers_varieties = await prisma.flowers_variety.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowers_varietyWithIdOnly = await prisma.flowers_variety.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends flowers_varietyFindManyArgs>(args?: SelectSubset<T, flowers_varietyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_varietyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flowers_variety.
     * @param {flowers_varietyCreateArgs} args - Arguments to create a Flowers_variety.
     * @example
     * // Create one Flowers_variety
     * const Flowers_variety = await prisma.flowers_variety.create({
     *   data: {
     *     // ... data to create a Flowers_variety
     *   }
     * })
     * 
     */
    create<T extends flowers_varietyCreateArgs>(args: SelectSubset<T, flowers_varietyCreateArgs<ExtArgs>>): Prisma__flowers_varietyClient<$Result.GetResult<Prisma.$flowers_varietyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flowers_varieties.
     * @param {flowers_varietyCreateManyArgs} args - Arguments to create many Flowers_varieties.
     * @example
     * // Create many Flowers_varieties
     * const flowers_variety = await prisma.flowers_variety.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends flowers_varietyCreateManyArgs>(args?: SelectSubset<T, flowers_varietyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flowers_varieties and returns the data saved in the database.
     * @param {flowers_varietyCreateManyAndReturnArgs} args - Arguments to create many Flowers_varieties.
     * @example
     * // Create many Flowers_varieties
     * const flowers_variety = await prisma.flowers_variety.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flowers_varieties and only return the `id`
     * const flowers_varietyWithIdOnly = await prisma.flowers_variety.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends flowers_varietyCreateManyAndReturnArgs>(args?: SelectSubset<T, flowers_varietyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_varietyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flowers_variety.
     * @param {flowers_varietyDeleteArgs} args - Arguments to delete one Flowers_variety.
     * @example
     * // Delete one Flowers_variety
     * const Flowers_variety = await prisma.flowers_variety.delete({
     *   where: {
     *     // ... filter to delete one Flowers_variety
     *   }
     * })
     * 
     */
    delete<T extends flowers_varietyDeleteArgs>(args: SelectSubset<T, flowers_varietyDeleteArgs<ExtArgs>>): Prisma__flowers_varietyClient<$Result.GetResult<Prisma.$flowers_varietyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flowers_variety.
     * @param {flowers_varietyUpdateArgs} args - Arguments to update one Flowers_variety.
     * @example
     * // Update one Flowers_variety
     * const flowers_variety = await prisma.flowers_variety.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends flowers_varietyUpdateArgs>(args: SelectSubset<T, flowers_varietyUpdateArgs<ExtArgs>>): Prisma__flowers_varietyClient<$Result.GetResult<Prisma.$flowers_varietyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flowers_varieties.
     * @param {flowers_varietyDeleteManyArgs} args - Arguments to filter Flowers_varieties to delete.
     * @example
     * // Delete a few Flowers_varieties
     * const { count } = await prisma.flowers_variety.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends flowers_varietyDeleteManyArgs>(args?: SelectSubset<T, flowers_varietyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowers_varieties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_varietyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flowers_varieties
     * const flowers_variety = await prisma.flowers_variety.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends flowers_varietyUpdateManyArgs>(args: SelectSubset<T, flowers_varietyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowers_varieties and returns the data updated in the database.
     * @param {flowers_varietyUpdateManyAndReturnArgs} args - Arguments to update many Flowers_varieties.
     * @example
     * // Update many Flowers_varieties
     * const flowers_variety = await prisma.flowers_variety.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flowers_varieties and only return the `id`
     * const flowers_varietyWithIdOnly = await prisma.flowers_variety.updateManyAndReturn({
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
    updateManyAndReturn<T extends flowers_varietyUpdateManyAndReturnArgs>(args: SelectSubset<T, flowers_varietyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_varietyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flowers_variety.
     * @param {flowers_varietyUpsertArgs} args - Arguments to update or create a Flowers_variety.
     * @example
     * // Update or create a Flowers_variety
     * const flowers_variety = await prisma.flowers_variety.upsert({
     *   create: {
     *     // ... data to create a Flowers_variety
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flowers_variety we want to update
     *   }
     * })
     */
    upsert<T extends flowers_varietyUpsertArgs>(args: SelectSubset<T, flowers_varietyUpsertArgs<ExtArgs>>): Prisma__flowers_varietyClient<$Result.GetResult<Prisma.$flowers_varietyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flowers_varieties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_varietyCountArgs} args - Arguments to filter Flowers_varieties to count.
     * @example
     * // Count the number of Flowers_varieties
     * const count = await prisma.flowers_variety.count({
     *   where: {
     *     // ... the filter for the Flowers_varieties we want to count
     *   }
     * })
    **/
    count<T extends flowers_varietyCountArgs>(
      args?: Subset<T, flowers_varietyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Flowers_varietyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flowers_variety.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Flowers_varietyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Flowers_varietyAggregateArgs>(args: Subset<T, Flowers_varietyAggregateArgs>): Prisma.PrismaPromise<GetFlowers_varietyAggregateType<T>>

    /**
     * Group by Flowers_variety.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_varietyGroupByArgs} args - Group by arguments.
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
      T extends flowers_varietyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: flowers_varietyGroupByArgs['orderBy'] }
        : { orderBy?: flowers_varietyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, flowers_varietyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowers_varietyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the flowers_variety model
   */
  readonly fields: flowers_varietyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for flowers_variety.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__flowers_varietyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flowers<T extends flowers_variety$flowersArgs<ExtArgs> = {}>(args?: Subset<T, flowers_variety$flowersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the flowers_variety model
   */
  interface flowers_varietyFieldRefs {
    readonly id: FieldRef<"flowers_variety", 'Int'>
    readonly name_en: FieldRef<"flowers_variety", 'String'>
    readonly name_ru: FieldRef<"flowers_variety", 'String'>
  }
    

  // Custom InputTypes
  /**
   * flowers_variety findUnique
   */
  export type flowers_varietyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_variety
     */
    select?: flowers_varietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_variety
     */
    omit?: flowers_varietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_varietyInclude<ExtArgs> | null
    /**
     * Filter, which flowers_variety to fetch.
     */
    where: flowers_varietyWhereUniqueInput
  }

  /**
   * flowers_variety findUniqueOrThrow
   */
  export type flowers_varietyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_variety
     */
    select?: flowers_varietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_variety
     */
    omit?: flowers_varietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_varietyInclude<ExtArgs> | null
    /**
     * Filter, which flowers_variety to fetch.
     */
    where: flowers_varietyWhereUniqueInput
  }

  /**
   * flowers_variety findFirst
   */
  export type flowers_varietyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_variety
     */
    select?: flowers_varietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_variety
     */
    omit?: flowers_varietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_varietyInclude<ExtArgs> | null
    /**
     * Filter, which flowers_variety to fetch.
     */
    where?: flowers_varietyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_varieties to fetch.
     */
    orderBy?: flowers_varietyOrderByWithRelationInput | flowers_varietyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flowers_varieties.
     */
    cursor?: flowers_varietyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_varieties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_varieties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flowers_varieties.
     */
    distinct?: Flowers_varietyScalarFieldEnum | Flowers_varietyScalarFieldEnum[]
  }

  /**
   * flowers_variety findFirstOrThrow
   */
  export type flowers_varietyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_variety
     */
    select?: flowers_varietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_variety
     */
    omit?: flowers_varietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_varietyInclude<ExtArgs> | null
    /**
     * Filter, which flowers_variety to fetch.
     */
    where?: flowers_varietyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_varieties to fetch.
     */
    orderBy?: flowers_varietyOrderByWithRelationInput | flowers_varietyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flowers_varieties.
     */
    cursor?: flowers_varietyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_varieties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_varieties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flowers_varieties.
     */
    distinct?: Flowers_varietyScalarFieldEnum | Flowers_varietyScalarFieldEnum[]
  }

  /**
   * flowers_variety findMany
   */
  export type flowers_varietyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_variety
     */
    select?: flowers_varietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_variety
     */
    omit?: flowers_varietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_varietyInclude<ExtArgs> | null
    /**
     * Filter, which flowers_varieties to fetch.
     */
    where?: flowers_varietyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_varieties to fetch.
     */
    orderBy?: flowers_varietyOrderByWithRelationInput | flowers_varietyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing flowers_varieties.
     */
    cursor?: flowers_varietyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_varieties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_varieties.
     */
    skip?: number
    distinct?: Flowers_varietyScalarFieldEnum | Flowers_varietyScalarFieldEnum[]
  }

  /**
   * flowers_variety create
   */
  export type flowers_varietyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_variety
     */
    select?: flowers_varietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_variety
     */
    omit?: flowers_varietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_varietyInclude<ExtArgs> | null
    /**
     * The data needed to create a flowers_variety.
     */
    data: XOR<flowers_varietyCreateInput, flowers_varietyUncheckedCreateInput>
  }

  /**
   * flowers_variety createMany
   */
  export type flowers_varietyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many flowers_varieties.
     */
    data: flowers_varietyCreateManyInput | flowers_varietyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * flowers_variety createManyAndReturn
   */
  export type flowers_varietyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_variety
     */
    select?: flowers_varietySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_variety
     */
    omit?: flowers_varietyOmit<ExtArgs> | null
    /**
     * The data used to create many flowers_varieties.
     */
    data: flowers_varietyCreateManyInput | flowers_varietyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * flowers_variety update
   */
  export type flowers_varietyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_variety
     */
    select?: flowers_varietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_variety
     */
    omit?: flowers_varietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_varietyInclude<ExtArgs> | null
    /**
     * The data needed to update a flowers_variety.
     */
    data: XOR<flowers_varietyUpdateInput, flowers_varietyUncheckedUpdateInput>
    /**
     * Choose, which flowers_variety to update.
     */
    where: flowers_varietyWhereUniqueInput
  }

  /**
   * flowers_variety updateMany
   */
  export type flowers_varietyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update flowers_varieties.
     */
    data: XOR<flowers_varietyUpdateManyMutationInput, flowers_varietyUncheckedUpdateManyInput>
    /**
     * Filter which flowers_varieties to update
     */
    where?: flowers_varietyWhereInput
    /**
     * Limit how many flowers_varieties to update.
     */
    limit?: number
  }

  /**
   * flowers_variety updateManyAndReturn
   */
  export type flowers_varietyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_variety
     */
    select?: flowers_varietySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_variety
     */
    omit?: flowers_varietyOmit<ExtArgs> | null
    /**
     * The data used to update flowers_varieties.
     */
    data: XOR<flowers_varietyUpdateManyMutationInput, flowers_varietyUncheckedUpdateManyInput>
    /**
     * Filter which flowers_varieties to update
     */
    where?: flowers_varietyWhereInput
    /**
     * Limit how many flowers_varieties to update.
     */
    limit?: number
  }

  /**
   * flowers_variety upsert
   */
  export type flowers_varietyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_variety
     */
    select?: flowers_varietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_variety
     */
    omit?: flowers_varietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_varietyInclude<ExtArgs> | null
    /**
     * The filter to search for the flowers_variety to update in case it exists.
     */
    where: flowers_varietyWhereUniqueInput
    /**
     * In case the flowers_variety found by the `where` argument doesn't exist, create a new flowers_variety with this data.
     */
    create: XOR<flowers_varietyCreateInput, flowers_varietyUncheckedCreateInput>
    /**
     * In case the flowers_variety was found with the provided `where` argument, update it with this data.
     */
    update: XOR<flowers_varietyUpdateInput, flowers_varietyUncheckedUpdateInput>
  }

  /**
   * flowers_variety delete
   */
  export type flowers_varietyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_variety
     */
    select?: flowers_varietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_variety
     */
    omit?: flowers_varietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_varietyInclude<ExtArgs> | null
    /**
     * Filter which flowers_variety to delete.
     */
    where: flowers_varietyWhereUniqueInput
  }

  /**
   * flowers_variety deleteMany
   */
  export type flowers_varietyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flowers_varieties to delete
     */
    where?: flowers_varietyWhereInput
    /**
     * Limit how many flowers_varieties to delete.
     */
    limit?: number
  }

  /**
   * flowers_variety.flowers
   */
  export type flowers_variety$flowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers
     */
    select?: flowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers
     */
    omit?: flowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowersInclude<ExtArgs> | null
    where?: flowersWhereInput
    orderBy?: flowersOrderByWithRelationInput | flowersOrderByWithRelationInput[]
    cursor?: flowersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowersScalarFieldEnum | FlowersScalarFieldEnum[]
  }

  /**
   * flowers_variety without action
   */
  export type flowers_varietyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_variety
     */
    select?: flowers_varietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_variety
     */
    omit?: flowers_varietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_varietyInclude<ExtArgs> | null
  }


  /**
   * Model flowers_history
   */

  export type AggregateFlowers_history = {
    _count: Flowers_historyCountAggregateOutputType | null
    _avg: Flowers_historyAvgAggregateOutputType | null
    _sum: Flowers_historySumAggregateOutputType | null
    _min: Flowers_historyMinAggregateOutputType | null
    _max: Flowers_historyMaxAggregateOutputType | null
  }

  export type Flowers_historyAvgAggregateOutputType = {
    id: number | null
    flower_id: number | null
    date: number | null
    price: number | null
  }

  export type Flowers_historySumAggregateOutputType = {
    id: number | null
    flower_id: number | null
    date: number | null
    price: number | null
  }

  export type Flowers_historyMinAggregateOutputType = {
    id: number | null
    flower_id: number | null
    date: number | null
    price: number | null
  }

  export type Flowers_historyMaxAggregateOutputType = {
    id: number | null
    flower_id: number | null
    date: number | null
    price: number | null
  }

  export type Flowers_historyCountAggregateOutputType = {
    id: number
    flower_id: number
    date: number
    price: number
    _all: number
  }


  export type Flowers_historyAvgAggregateInputType = {
    id?: true
    flower_id?: true
    date?: true
    price?: true
  }

  export type Flowers_historySumAggregateInputType = {
    id?: true
    flower_id?: true
    date?: true
    price?: true
  }

  export type Flowers_historyMinAggregateInputType = {
    id?: true
    flower_id?: true
    date?: true
    price?: true
  }

  export type Flowers_historyMaxAggregateInputType = {
    id?: true
    flower_id?: true
    date?: true
    price?: true
  }

  export type Flowers_historyCountAggregateInputType = {
    id?: true
    flower_id?: true
    date?: true
    price?: true
    _all?: true
  }

  export type Flowers_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flowers_history to aggregate.
     */
    where?: flowers_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_histories to fetch.
     */
    orderBy?: flowers_historyOrderByWithRelationInput | flowers_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: flowers_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned flowers_histories
    **/
    _count?: true | Flowers_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Flowers_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Flowers_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Flowers_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Flowers_historyMaxAggregateInputType
  }

  export type GetFlowers_historyAggregateType<T extends Flowers_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowers_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowers_history[P]>
      : GetScalarType<T[P], AggregateFlowers_history[P]>
  }




  export type flowers_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flowers_historyWhereInput
    orderBy?: flowers_historyOrderByWithAggregationInput | flowers_historyOrderByWithAggregationInput[]
    by: Flowers_historyScalarFieldEnum[] | Flowers_historyScalarFieldEnum
    having?: flowers_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Flowers_historyCountAggregateInputType | true
    _avg?: Flowers_historyAvgAggregateInputType
    _sum?: Flowers_historySumAggregateInputType
    _min?: Flowers_historyMinAggregateInputType
    _max?: Flowers_historyMaxAggregateInputType
  }

  export type Flowers_historyGroupByOutputType = {
    id: number
    flower_id: number
    date: number
    price: number
    _count: Flowers_historyCountAggregateOutputType | null
    _avg: Flowers_historyAvgAggregateOutputType | null
    _sum: Flowers_historySumAggregateOutputType | null
    _min: Flowers_historyMinAggregateOutputType | null
    _max: Flowers_historyMaxAggregateOutputType | null
  }

  type GetFlowers_historyGroupByPayload<T extends flowers_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Flowers_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Flowers_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Flowers_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Flowers_historyGroupByOutputType[P]>
        }
      >
    >


  export type flowers_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flower_id?: boolean
    date?: boolean
    price?: boolean
    flower?: boolean | flowersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers_history"]>

  export type flowers_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flower_id?: boolean
    date?: boolean
    price?: boolean
    flower?: boolean | flowersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers_history"]>

  export type flowers_historySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flower_id?: boolean
    date?: boolean
    price?: boolean
    flower?: boolean | flowersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers_history"]>

  export type flowers_historySelectScalar = {
    id?: boolean
    flower_id?: boolean
    date?: boolean
    price?: boolean
  }

  export type flowers_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "flower_id" | "date" | "price", ExtArgs["result"]["flowers_history"]>
  export type flowers_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flower?: boolean | flowersDefaultArgs<ExtArgs>
  }
  export type flowers_historyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flower?: boolean | flowersDefaultArgs<ExtArgs>
  }
  export type flowers_historyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flower?: boolean | flowersDefaultArgs<ExtArgs>
  }

  export type $flowers_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "flowers_history"
    objects: {
      flower: Prisma.$flowersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      flower_id: number
      date: number
      price: number
    }, ExtArgs["result"]["flowers_history"]>
    composites: {}
  }

  type flowers_historyGetPayload<S extends boolean | null | undefined | flowers_historyDefaultArgs> = $Result.GetResult<Prisma.$flowers_historyPayload, S>

  type flowers_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<flowers_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Flowers_historyCountAggregateInputType | true
    }

  export interface flowers_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['flowers_history'], meta: { name: 'flowers_history' } }
    /**
     * Find zero or one Flowers_history that matches the filter.
     * @param {flowers_historyFindUniqueArgs} args - Arguments to find a Flowers_history
     * @example
     * // Get one Flowers_history
     * const flowers_history = await prisma.flowers_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends flowers_historyFindUniqueArgs>(args: SelectSubset<T, flowers_historyFindUniqueArgs<ExtArgs>>): Prisma__flowers_historyClient<$Result.GetResult<Prisma.$flowers_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flowers_history that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {flowers_historyFindUniqueOrThrowArgs} args - Arguments to find a Flowers_history
     * @example
     * // Get one Flowers_history
     * const flowers_history = await prisma.flowers_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends flowers_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, flowers_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__flowers_historyClient<$Result.GetResult<Prisma.$flowers_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowers_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_historyFindFirstArgs} args - Arguments to find a Flowers_history
     * @example
     * // Get one Flowers_history
     * const flowers_history = await prisma.flowers_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends flowers_historyFindFirstArgs>(args?: SelectSubset<T, flowers_historyFindFirstArgs<ExtArgs>>): Prisma__flowers_historyClient<$Result.GetResult<Prisma.$flowers_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowers_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_historyFindFirstOrThrowArgs} args - Arguments to find a Flowers_history
     * @example
     * // Get one Flowers_history
     * const flowers_history = await prisma.flowers_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends flowers_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, flowers_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__flowers_historyClient<$Result.GetResult<Prisma.$flowers_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flowers_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flowers_histories
     * const flowers_histories = await prisma.flowers_history.findMany()
     * 
     * // Get first 10 Flowers_histories
     * const flowers_histories = await prisma.flowers_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowers_historyWithIdOnly = await prisma.flowers_history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends flowers_historyFindManyArgs>(args?: SelectSubset<T, flowers_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flowers_history.
     * @param {flowers_historyCreateArgs} args - Arguments to create a Flowers_history.
     * @example
     * // Create one Flowers_history
     * const Flowers_history = await prisma.flowers_history.create({
     *   data: {
     *     // ... data to create a Flowers_history
     *   }
     * })
     * 
     */
    create<T extends flowers_historyCreateArgs>(args: SelectSubset<T, flowers_historyCreateArgs<ExtArgs>>): Prisma__flowers_historyClient<$Result.GetResult<Prisma.$flowers_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flowers_histories.
     * @param {flowers_historyCreateManyArgs} args - Arguments to create many Flowers_histories.
     * @example
     * // Create many Flowers_histories
     * const flowers_history = await prisma.flowers_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends flowers_historyCreateManyArgs>(args?: SelectSubset<T, flowers_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flowers_histories and returns the data saved in the database.
     * @param {flowers_historyCreateManyAndReturnArgs} args - Arguments to create many Flowers_histories.
     * @example
     * // Create many Flowers_histories
     * const flowers_history = await prisma.flowers_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flowers_histories and only return the `id`
     * const flowers_historyWithIdOnly = await prisma.flowers_history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends flowers_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, flowers_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flowers_history.
     * @param {flowers_historyDeleteArgs} args - Arguments to delete one Flowers_history.
     * @example
     * // Delete one Flowers_history
     * const Flowers_history = await prisma.flowers_history.delete({
     *   where: {
     *     // ... filter to delete one Flowers_history
     *   }
     * })
     * 
     */
    delete<T extends flowers_historyDeleteArgs>(args: SelectSubset<T, flowers_historyDeleteArgs<ExtArgs>>): Prisma__flowers_historyClient<$Result.GetResult<Prisma.$flowers_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flowers_history.
     * @param {flowers_historyUpdateArgs} args - Arguments to update one Flowers_history.
     * @example
     * // Update one Flowers_history
     * const flowers_history = await prisma.flowers_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends flowers_historyUpdateArgs>(args: SelectSubset<T, flowers_historyUpdateArgs<ExtArgs>>): Prisma__flowers_historyClient<$Result.GetResult<Prisma.$flowers_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flowers_histories.
     * @param {flowers_historyDeleteManyArgs} args - Arguments to filter Flowers_histories to delete.
     * @example
     * // Delete a few Flowers_histories
     * const { count } = await prisma.flowers_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends flowers_historyDeleteManyArgs>(args?: SelectSubset<T, flowers_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowers_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flowers_histories
     * const flowers_history = await prisma.flowers_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends flowers_historyUpdateManyArgs>(args: SelectSubset<T, flowers_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowers_histories and returns the data updated in the database.
     * @param {flowers_historyUpdateManyAndReturnArgs} args - Arguments to update many Flowers_histories.
     * @example
     * // Update many Flowers_histories
     * const flowers_history = await prisma.flowers_history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flowers_histories and only return the `id`
     * const flowers_historyWithIdOnly = await prisma.flowers_history.updateManyAndReturn({
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
    updateManyAndReturn<T extends flowers_historyUpdateManyAndReturnArgs>(args: SelectSubset<T, flowers_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flowers_history.
     * @param {flowers_historyUpsertArgs} args - Arguments to update or create a Flowers_history.
     * @example
     * // Update or create a Flowers_history
     * const flowers_history = await prisma.flowers_history.upsert({
     *   create: {
     *     // ... data to create a Flowers_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flowers_history we want to update
     *   }
     * })
     */
    upsert<T extends flowers_historyUpsertArgs>(args: SelectSubset<T, flowers_historyUpsertArgs<ExtArgs>>): Prisma__flowers_historyClient<$Result.GetResult<Prisma.$flowers_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flowers_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_historyCountArgs} args - Arguments to filter Flowers_histories to count.
     * @example
     * // Count the number of Flowers_histories
     * const count = await prisma.flowers_history.count({
     *   where: {
     *     // ... the filter for the Flowers_histories we want to count
     *   }
     * })
    **/
    count<T extends flowers_historyCountArgs>(
      args?: Subset<T, flowers_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Flowers_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flowers_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Flowers_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Flowers_historyAggregateArgs>(args: Subset<T, Flowers_historyAggregateArgs>): Prisma.PrismaPromise<GetFlowers_historyAggregateType<T>>

    /**
     * Group by Flowers_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_historyGroupByArgs} args - Group by arguments.
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
      T extends flowers_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: flowers_historyGroupByArgs['orderBy'] }
        : { orderBy?: flowers_historyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, flowers_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowers_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the flowers_history model
   */
  readonly fields: flowers_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for flowers_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__flowers_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flower<T extends flowersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, flowersDefaultArgs<ExtArgs>>): Prisma__flowersClient<$Result.GetResult<Prisma.$flowersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the flowers_history model
   */
  interface flowers_historyFieldRefs {
    readonly id: FieldRef<"flowers_history", 'Int'>
    readonly flower_id: FieldRef<"flowers_history", 'Int'>
    readonly date: FieldRef<"flowers_history", 'Int'>
    readonly price: FieldRef<"flowers_history", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * flowers_history findUnique
   */
  export type flowers_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_history
     */
    select?: flowers_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_history
     */
    omit?: flowers_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_historyInclude<ExtArgs> | null
    /**
     * Filter, which flowers_history to fetch.
     */
    where: flowers_historyWhereUniqueInput
  }

  /**
   * flowers_history findUniqueOrThrow
   */
  export type flowers_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_history
     */
    select?: flowers_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_history
     */
    omit?: flowers_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_historyInclude<ExtArgs> | null
    /**
     * Filter, which flowers_history to fetch.
     */
    where: flowers_historyWhereUniqueInput
  }

  /**
   * flowers_history findFirst
   */
  export type flowers_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_history
     */
    select?: flowers_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_history
     */
    omit?: flowers_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_historyInclude<ExtArgs> | null
    /**
     * Filter, which flowers_history to fetch.
     */
    where?: flowers_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_histories to fetch.
     */
    orderBy?: flowers_historyOrderByWithRelationInput | flowers_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flowers_histories.
     */
    cursor?: flowers_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flowers_histories.
     */
    distinct?: Flowers_historyScalarFieldEnum | Flowers_historyScalarFieldEnum[]
  }

  /**
   * flowers_history findFirstOrThrow
   */
  export type flowers_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_history
     */
    select?: flowers_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_history
     */
    omit?: flowers_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_historyInclude<ExtArgs> | null
    /**
     * Filter, which flowers_history to fetch.
     */
    where?: flowers_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_histories to fetch.
     */
    orderBy?: flowers_historyOrderByWithRelationInput | flowers_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flowers_histories.
     */
    cursor?: flowers_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flowers_histories.
     */
    distinct?: Flowers_historyScalarFieldEnum | Flowers_historyScalarFieldEnum[]
  }

  /**
   * flowers_history findMany
   */
  export type flowers_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_history
     */
    select?: flowers_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_history
     */
    omit?: flowers_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_historyInclude<ExtArgs> | null
    /**
     * Filter, which flowers_histories to fetch.
     */
    where?: flowers_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_histories to fetch.
     */
    orderBy?: flowers_historyOrderByWithRelationInput | flowers_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing flowers_histories.
     */
    cursor?: flowers_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_histories.
     */
    skip?: number
    distinct?: Flowers_historyScalarFieldEnum | Flowers_historyScalarFieldEnum[]
  }

  /**
   * flowers_history create
   */
  export type flowers_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_history
     */
    select?: flowers_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_history
     */
    omit?: flowers_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a flowers_history.
     */
    data: XOR<flowers_historyCreateInput, flowers_historyUncheckedCreateInput>
  }

  /**
   * flowers_history createMany
   */
  export type flowers_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many flowers_histories.
     */
    data: flowers_historyCreateManyInput | flowers_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * flowers_history createManyAndReturn
   */
  export type flowers_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_history
     */
    select?: flowers_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_history
     */
    omit?: flowers_historyOmit<ExtArgs> | null
    /**
     * The data used to create many flowers_histories.
     */
    data: flowers_historyCreateManyInput | flowers_historyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_historyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * flowers_history update
   */
  export type flowers_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_history
     */
    select?: flowers_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_history
     */
    omit?: flowers_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a flowers_history.
     */
    data: XOR<flowers_historyUpdateInput, flowers_historyUncheckedUpdateInput>
    /**
     * Choose, which flowers_history to update.
     */
    where: flowers_historyWhereUniqueInput
  }

  /**
   * flowers_history updateMany
   */
  export type flowers_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update flowers_histories.
     */
    data: XOR<flowers_historyUpdateManyMutationInput, flowers_historyUncheckedUpdateManyInput>
    /**
     * Filter which flowers_histories to update
     */
    where?: flowers_historyWhereInput
    /**
     * Limit how many flowers_histories to update.
     */
    limit?: number
  }

  /**
   * flowers_history updateManyAndReturn
   */
  export type flowers_historyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_history
     */
    select?: flowers_historySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_history
     */
    omit?: flowers_historyOmit<ExtArgs> | null
    /**
     * The data used to update flowers_histories.
     */
    data: XOR<flowers_historyUpdateManyMutationInput, flowers_historyUncheckedUpdateManyInput>
    /**
     * Filter which flowers_histories to update
     */
    where?: flowers_historyWhereInput
    /**
     * Limit how many flowers_histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_historyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * flowers_history upsert
   */
  export type flowers_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_history
     */
    select?: flowers_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_history
     */
    omit?: flowers_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the flowers_history to update in case it exists.
     */
    where: flowers_historyWhereUniqueInput
    /**
     * In case the flowers_history found by the `where` argument doesn't exist, create a new flowers_history with this data.
     */
    create: XOR<flowers_historyCreateInput, flowers_historyUncheckedCreateInput>
    /**
     * In case the flowers_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<flowers_historyUpdateInput, flowers_historyUncheckedUpdateInput>
  }

  /**
   * flowers_history delete
   */
  export type flowers_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_history
     */
    select?: flowers_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_history
     */
    omit?: flowers_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_historyInclude<ExtArgs> | null
    /**
     * Filter which flowers_history to delete.
     */
    where: flowers_historyWhereUniqueInput
  }

  /**
   * flowers_history deleteMany
   */
  export type flowers_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flowers_histories to delete
     */
    where?: flowers_historyWhereInput
    /**
     * Limit how many flowers_histories to delete.
     */
    limit?: number
  }

  /**
   * flowers_history without action
   */
  export type flowers_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_history
     */
    select?: flowers_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_history
     */
    omit?: flowers_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_historyInclude<ExtArgs> | null
  }


  /**
   * Model flowers_farms
   */

  export type AggregateFlowers_farms = {
    _count: Flowers_farmsCountAggregateOutputType | null
    _avg: Flowers_farmsAvgAggregateOutputType | null
    _sum: Flowers_farmsSumAggregateOutputType | null
    _min: Flowers_farmsMinAggregateOutputType | null
    _max: Flowers_farmsMaxAggregateOutputType | null
  }

  export type Flowers_farmsAvgAggregateOutputType = {
    id: number | null
    rate: number | null
  }

  export type Flowers_farmsSumAggregateOutputType = {
    id: number | null
    rate: number | null
  }

  export type Flowers_farmsMinAggregateOutputType = {
    id: number | null
    name_en: string | null
    name_ru: string | null
    country: string | null
    rate: number | null
  }

  export type Flowers_farmsMaxAggregateOutputType = {
    id: number | null
    name_en: string | null
    name_ru: string | null
    country: string | null
    rate: number | null
  }

  export type Flowers_farmsCountAggregateOutputType = {
    id: number
    name_en: number
    name_ru: number
    country: number
    rate: number
    _all: number
  }


  export type Flowers_farmsAvgAggregateInputType = {
    id?: true
    rate?: true
  }

  export type Flowers_farmsSumAggregateInputType = {
    id?: true
    rate?: true
  }

  export type Flowers_farmsMinAggregateInputType = {
    id?: true
    name_en?: true
    name_ru?: true
    country?: true
    rate?: true
  }

  export type Flowers_farmsMaxAggregateInputType = {
    id?: true
    name_en?: true
    name_ru?: true
    country?: true
    rate?: true
  }

  export type Flowers_farmsCountAggregateInputType = {
    id?: true
    name_en?: true
    name_ru?: true
    country?: true
    rate?: true
    _all?: true
  }

  export type Flowers_farmsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flowers_farms to aggregate.
     */
    where?: flowers_farmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_farms to fetch.
     */
    orderBy?: flowers_farmsOrderByWithRelationInput | flowers_farmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: flowers_farmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned flowers_farms
    **/
    _count?: true | Flowers_farmsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Flowers_farmsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Flowers_farmsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Flowers_farmsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Flowers_farmsMaxAggregateInputType
  }

  export type GetFlowers_farmsAggregateType<T extends Flowers_farmsAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowers_farms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowers_farms[P]>
      : GetScalarType<T[P], AggregateFlowers_farms[P]>
  }




  export type flowers_farmsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flowers_farmsWhereInput
    orderBy?: flowers_farmsOrderByWithAggregationInput | flowers_farmsOrderByWithAggregationInput[]
    by: Flowers_farmsScalarFieldEnum[] | Flowers_farmsScalarFieldEnum
    having?: flowers_farmsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Flowers_farmsCountAggregateInputType | true
    _avg?: Flowers_farmsAvgAggregateInputType
    _sum?: Flowers_farmsSumAggregateInputType
    _min?: Flowers_farmsMinAggregateInputType
    _max?: Flowers_farmsMaxAggregateInputType
  }

  export type Flowers_farmsGroupByOutputType = {
    id: number
    name_en: string
    name_ru: string
    country: string
    rate: number
    _count: Flowers_farmsCountAggregateOutputType | null
    _avg: Flowers_farmsAvgAggregateOutputType | null
    _sum: Flowers_farmsSumAggregateOutputType | null
    _min: Flowers_farmsMinAggregateOutputType | null
    _max: Flowers_farmsMaxAggregateOutputType | null
  }

  type GetFlowers_farmsGroupByPayload<T extends flowers_farmsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Flowers_farmsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Flowers_farmsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Flowers_farmsGroupByOutputType[P]>
            : GetScalarType<T[P], Flowers_farmsGroupByOutputType[P]>
        }
      >
    >


  export type flowers_farmsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_en?: boolean
    name_ru?: boolean
    country?: boolean
    rate?: boolean
    flowers?: boolean | flowers_farms$flowersArgs<ExtArgs>
    _count?: boolean | Flowers_farmsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers_farms"]>

  export type flowers_farmsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_en?: boolean
    name_ru?: boolean
    country?: boolean
    rate?: boolean
  }, ExtArgs["result"]["flowers_farms"]>

  export type flowers_farmsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_en?: boolean
    name_ru?: boolean
    country?: boolean
    rate?: boolean
  }, ExtArgs["result"]["flowers_farms"]>

  export type flowers_farmsSelectScalar = {
    id?: boolean
    name_en?: boolean
    name_ru?: boolean
    country?: boolean
    rate?: boolean
  }

  export type flowers_farmsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_en" | "name_ru" | "country" | "rate", ExtArgs["result"]["flowers_farms"]>
  export type flowers_farmsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | flowers_farms$flowersArgs<ExtArgs>
    _count?: boolean | Flowers_farmsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type flowers_farmsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type flowers_farmsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $flowers_farmsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "flowers_farms"
    objects: {
      flowers: Prisma.$flowers_and_flowers_farmsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name_en: string
      name_ru: string
      country: string
      rate: number
    }, ExtArgs["result"]["flowers_farms"]>
    composites: {}
  }

  type flowers_farmsGetPayload<S extends boolean | null | undefined | flowers_farmsDefaultArgs> = $Result.GetResult<Prisma.$flowers_farmsPayload, S>

  type flowers_farmsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<flowers_farmsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Flowers_farmsCountAggregateInputType | true
    }

  export interface flowers_farmsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['flowers_farms'], meta: { name: 'flowers_farms' } }
    /**
     * Find zero or one Flowers_farms that matches the filter.
     * @param {flowers_farmsFindUniqueArgs} args - Arguments to find a Flowers_farms
     * @example
     * // Get one Flowers_farms
     * const flowers_farms = await prisma.flowers_farms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends flowers_farmsFindUniqueArgs>(args: SelectSubset<T, flowers_farmsFindUniqueArgs<ExtArgs>>): Prisma__flowers_farmsClient<$Result.GetResult<Prisma.$flowers_farmsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flowers_farms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {flowers_farmsFindUniqueOrThrowArgs} args - Arguments to find a Flowers_farms
     * @example
     * // Get one Flowers_farms
     * const flowers_farms = await prisma.flowers_farms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends flowers_farmsFindUniqueOrThrowArgs>(args: SelectSubset<T, flowers_farmsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__flowers_farmsClient<$Result.GetResult<Prisma.$flowers_farmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowers_farms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_farmsFindFirstArgs} args - Arguments to find a Flowers_farms
     * @example
     * // Get one Flowers_farms
     * const flowers_farms = await prisma.flowers_farms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends flowers_farmsFindFirstArgs>(args?: SelectSubset<T, flowers_farmsFindFirstArgs<ExtArgs>>): Prisma__flowers_farmsClient<$Result.GetResult<Prisma.$flowers_farmsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowers_farms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_farmsFindFirstOrThrowArgs} args - Arguments to find a Flowers_farms
     * @example
     * // Get one Flowers_farms
     * const flowers_farms = await prisma.flowers_farms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends flowers_farmsFindFirstOrThrowArgs>(args?: SelectSubset<T, flowers_farmsFindFirstOrThrowArgs<ExtArgs>>): Prisma__flowers_farmsClient<$Result.GetResult<Prisma.$flowers_farmsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flowers_farms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_farmsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flowers_farms
     * const flowers_farms = await prisma.flowers_farms.findMany()
     * 
     * // Get first 10 Flowers_farms
     * const flowers_farms = await prisma.flowers_farms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowers_farmsWithIdOnly = await prisma.flowers_farms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends flowers_farmsFindManyArgs>(args?: SelectSubset<T, flowers_farmsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_farmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flowers_farms.
     * @param {flowers_farmsCreateArgs} args - Arguments to create a Flowers_farms.
     * @example
     * // Create one Flowers_farms
     * const Flowers_farms = await prisma.flowers_farms.create({
     *   data: {
     *     // ... data to create a Flowers_farms
     *   }
     * })
     * 
     */
    create<T extends flowers_farmsCreateArgs>(args: SelectSubset<T, flowers_farmsCreateArgs<ExtArgs>>): Prisma__flowers_farmsClient<$Result.GetResult<Prisma.$flowers_farmsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flowers_farms.
     * @param {flowers_farmsCreateManyArgs} args - Arguments to create many Flowers_farms.
     * @example
     * // Create many Flowers_farms
     * const flowers_farms = await prisma.flowers_farms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends flowers_farmsCreateManyArgs>(args?: SelectSubset<T, flowers_farmsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flowers_farms and returns the data saved in the database.
     * @param {flowers_farmsCreateManyAndReturnArgs} args - Arguments to create many Flowers_farms.
     * @example
     * // Create many Flowers_farms
     * const flowers_farms = await prisma.flowers_farms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flowers_farms and only return the `id`
     * const flowers_farmsWithIdOnly = await prisma.flowers_farms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends flowers_farmsCreateManyAndReturnArgs>(args?: SelectSubset<T, flowers_farmsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_farmsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flowers_farms.
     * @param {flowers_farmsDeleteArgs} args - Arguments to delete one Flowers_farms.
     * @example
     * // Delete one Flowers_farms
     * const Flowers_farms = await prisma.flowers_farms.delete({
     *   where: {
     *     // ... filter to delete one Flowers_farms
     *   }
     * })
     * 
     */
    delete<T extends flowers_farmsDeleteArgs>(args: SelectSubset<T, flowers_farmsDeleteArgs<ExtArgs>>): Prisma__flowers_farmsClient<$Result.GetResult<Prisma.$flowers_farmsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flowers_farms.
     * @param {flowers_farmsUpdateArgs} args - Arguments to update one Flowers_farms.
     * @example
     * // Update one Flowers_farms
     * const flowers_farms = await prisma.flowers_farms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends flowers_farmsUpdateArgs>(args: SelectSubset<T, flowers_farmsUpdateArgs<ExtArgs>>): Prisma__flowers_farmsClient<$Result.GetResult<Prisma.$flowers_farmsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flowers_farms.
     * @param {flowers_farmsDeleteManyArgs} args - Arguments to filter Flowers_farms to delete.
     * @example
     * // Delete a few Flowers_farms
     * const { count } = await prisma.flowers_farms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends flowers_farmsDeleteManyArgs>(args?: SelectSubset<T, flowers_farmsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowers_farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_farmsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flowers_farms
     * const flowers_farms = await prisma.flowers_farms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends flowers_farmsUpdateManyArgs>(args: SelectSubset<T, flowers_farmsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowers_farms and returns the data updated in the database.
     * @param {flowers_farmsUpdateManyAndReturnArgs} args - Arguments to update many Flowers_farms.
     * @example
     * // Update many Flowers_farms
     * const flowers_farms = await prisma.flowers_farms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flowers_farms and only return the `id`
     * const flowers_farmsWithIdOnly = await prisma.flowers_farms.updateManyAndReturn({
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
    updateManyAndReturn<T extends flowers_farmsUpdateManyAndReturnArgs>(args: SelectSubset<T, flowers_farmsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_farmsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flowers_farms.
     * @param {flowers_farmsUpsertArgs} args - Arguments to update or create a Flowers_farms.
     * @example
     * // Update or create a Flowers_farms
     * const flowers_farms = await prisma.flowers_farms.upsert({
     *   create: {
     *     // ... data to create a Flowers_farms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flowers_farms we want to update
     *   }
     * })
     */
    upsert<T extends flowers_farmsUpsertArgs>(args: SelectSubset<T, flowers_farmsUpsertArgs<ExtArgs>>): Prisma__flowers_farmsClient<$Result.GetResult<Prisma.$flowers_farmsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flowers_farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_farmsCountArgs} args - Arguments to filter Flowers_farms to count.
     * @example
     * // Count the number of Flowers_farms
     * const count = await prisma.flowers_farms.count({
     *   where: {
     *     // ... the filter for the Flowers_farms we want to count
     *   }
     * })
    **/
    count<T extends flowers_farmsCountArgs>(
      args?: Subset<T, flowers_farmsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Flowers_farmsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flowers_farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Flowers_farmsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Flowers_farmsAggregateArgs>(args: Subset<T, Flowers_farmsAggregateArgs>): Prisma.PrismaPromise<GetFlowers_farmsAggregateType<T>>

    /**
     * Group by Flowers_farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_farmsGroupByArgs} args - Group by arguments.
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
      T extends flowers_farmsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: flowers_farmsGroupByArgs['orderBy'] }
        : { orderBy?: flowers_farmsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, flowers_farmsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowers_farmsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the flowers_farms model
   */
  readonly fields: flowers_farmsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for flowers_farms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__flowers_farmsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flowers<T extends flowers_farms$flowersArgs<ExtArgs> = {}>(args?: Subset<T, flowers_farms$flowersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_and_flowers_farmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the flowers_farms model
   */
  interface flowers_farmsFieldRefs {
    readonly id: FieldRef<"flowers_farms", 'Int'>
    readonly name_en: FieldRef<"flowers_farms", 'String'>
    readonly name_ru: FieldRef<"flowers_farms", 'String'>
    readonly country: FieldRef<"flowers_farms", 'String'>
    readonly rate: FieldRef<"flowers_farms", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * flowers_farms findUnique
   */
  export type flowers_farmsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_farms
     */
    select?: flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_farms
     */
    omit?: flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_farmsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_farms to fetch.
     */
    where: flowers_farmsWhereUniqueInput
  }

  /**
   * flowers_farms findUniqueOrThrow
   */
  export type flowers_farmsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_farms
     */
    select?: flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_farms
     */
    omit?: flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_farmsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_farms to fetch.
     */
    where: flowers_farmsWhereUniqueInput
  }

  /**
   * flowers_farms findFirst
   */
  export type flowers_farmsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_farms
     */
    select?: flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_farms
     */
    omit?: flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_farmsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_farms to fetch.
     */
    where?: flowers_farmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_farms to fetch.
     */
    orderBy?: flowers_farmsOrderByWithRelationInput | flowers_farmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flowers_farms.
     */
    cursor?: flowers_farmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flowers_farms.
     */
    distinct?: Flowers_farmsScalarFieldEnum | Flowers_farmsScalarFieldEnum[]
  }

  /**
   * flowers_farms findFirstOrThrow
   */
  export type flowers_farmsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_farms
     */
    select?: flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_farms
     */
    omit?: flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_farmsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_farms to fetch.
     */
    where?: flowers_farmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_farms to fetch.
     */
    orderBy?: flowers_farmsOrderByWithRelationInput | flowers_farmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flowers_farms.
     */
    cursor?: flowers_farmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flowers_farms.
     */
    distinct?: Flowers_farmsScalarFieldEnum | Flowers_farmsScalarFieldEnum[]
  }

  /**
   * flowers_farms findMany
   */
  export type flowers_farmsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_farms
     */
    select?: flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_farms
     */
    omit?: flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_farmsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_farms to fetch.
     */
    where?: flowers_farmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_farms to fetch.
     */
    orderBy?: flowers_farmsOrderByWithRelationInput | flowers_farmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing flowers_farms.
     */
    cursor?: flowers_farmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_farms.
     */
    skip?: number
    distinct?: Flowers_farmsScalarFieldEnum | Flowers_farmsScalarFieldEnum[]
  }

  /**
   * flowers_farms create
   */
  export type flowers_farmsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_farms
     */
    select?: flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_farms
     */
    omit?: flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_farmsInclude<ExtArgs> | null
    /**
     * The data needed to create a flowers_farms.
     */
    data: XOR<flowers_farmsCreateInput, flowers_farmsUncheckedCreateInput>
  }

  /**
   * flowers_farms createMany
   */
  export type flowers_farmsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many flowers_farms.
     */
    data: flowers_farmsCreateManyInput | flowers_farmsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * flowers_farms createManyAndReturn
   */
  export type flowers_farmsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_farms
     */
    select?: flowers_farmsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_farms
     */
    omit?: flowers_farmsOmit<ExtArgs> | null
    /**
     * The data used to create many flowers_farms.
     */
    data: flowers_farmsCreateManyInput | flowers_farmsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * flowers_farms update
   */
  export type flowers_farmsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_farms
     */
    select?: flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_farms
     */
    omit?: flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_farmsInclude<ExtArgs> | null
    /**
     * The data needed to update a flowers_farms.
     */
    data: XOR<flowers_farmsUpdateInput, flowers_farmsUncheckedUpdateInput>
    /**
     * Choose, which flowers_farms to update.
     */
    where: flowers_farmsWhereUniqueInput
  }

  /**
   * flowers_farms updateMany
   */
  export type flowers_farmsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update flowers_farms.
     */
    data: XOR<flowers_farmsUpdateManyMutationInput, flowers_farmsUncheckedUpdateManyInput>
    /**
     * Filter which flowers_farms to update
     */
    where?: flowers_farmsWhereInput
    /**
     * Limit how many flowers_farms to update.
     */
    limit?: number
  }

  /**
   * flowers_farms updateManyAndReturn
   */
  export type flowers_farmsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_farms
     */
    select?: flowers_farmsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_farms
     */
    omit?: flowers_farmsOmit<ExtArgs> | null
    /**
     * The data used to update flowers_farms.
     */
    data: XOR<flowers_farmsUpdateManyMutationInput, flowers_farmsUncheckedUpdateManyInput>
    /**
     * Filter which flowers_farms to update
     */
    where?: flowers_farmsWhereInput
    /**
     * Limit how many flowers_farms to update.
     */
    limit?: number
  }

  /**
   * flowers_farms upsert
   */
  export type flowers_farmsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_farms
     */
    select?: flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_farms
     */
    omit?: flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_farmsInclude<ExtArgs> | null
    /**
     * The filter to search for the flowers_farms to update in case it exists.
     */
    where: flowers_farmsWhereUniqueInput
    /**
     * In case the flowers_farms found by the `where` argument doesn't exist, create a new flowers_farms with this data.
     */
    create: XOR<flowers_farmsCreateInput, flowers_farmsUncheckedCreateInput>
    /**
     * In case the flowers_farms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<flowers_farmsUpdateInput, flowers_farmsUncheckedUpdateInput>
  }

  /**
   * flowers_farms delete
   */
  export type flowers_farmsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_farms
     */
    select?: flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_farms
     */
    omit?: flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_farmsInclude<ExtArgs> | null
    /**
     * Filter which flowers_farms to delete.
     */
    where: flowers_farmsWhereUniqueInput
  }

  /**
   * flowers_farms deleteMany
   */
  export type flowers_farmsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flowers_farms to delete
     */
    where?: flowers_farmsWhereInput
    /**
     * Limit how many flowers_farms to delete.
     */
    limit?: number
  }

  /**
   * flowers_farms.flowers
   */
  export type flowers_farms$flowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_farms
     */
    select?: flowers_and_flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_farms
     */
    omit?: flowers_and_flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_farmsInclude<ExtArgs> | null
    where?: flowers_and_flowers_farmsWhereInput
    orderBy?: flowers_and_flowers_farmsOrderByWithRelationInput | flowers_and_flowers_farmsOrderByWithRelationInput[]
    cursor?: flowers_and_flowers_farmsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Flowers_and_flowers_farmsScalarFieldEnum | Flowers_and_flowers_farmsScalarFieldEnum[]
  }

  /**
   * flowers_farms without action
   */
  export type flowers_farmsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_farms
     */
    select?: flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_farms
     */
    omit?: flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_farmsInclude<ExtArgs> | null
  }


  /**
   * Model flowers_and_flowers_farms
   */

  export type AggregateFlowers_and_flowers_farms = {
    _count: Flowers_and_flowers_farmsCountAggregateOutputType | null
    _avg: Flowers_and_flowers_farmsAvgAggregateOutputType | null
    _sum: Flowers_and_flowers_farmsSumAggregateOutputType | null
    _min: Flowers_and_flowers_farmsMinAggregateOutputType | null
    _max: Flowers_and_flowers_farmsMaxAggregateOutputType | null
  }

  export type Flowers_and_flowers_farmsAvgAggregateOutputType = {
    flower_id: number | null
    flower_farm_id: number | null
  }

  export type Flowers_and_flowers_farmsSumAggregateOutputType = {
    flower_id: number | null
    flower_farm_id: number | null
  }

  export type Flowers_and_flowers_farmsMinAggregateOutputType = {
    flower_id: number | null
    flower_farm_id: number | null
  }

  export type Flowers_and_flowers_farmsMaxAggregateOutputType = {
    flower_id: number | null
    flower_farm_id: number | null
  }

  export type Flowers_and_flowers_farmsCountAggregateOutputType = {
    flower_id: number
    flower_farm_id: number
    _all: number
  }


  export type Flowers_and_flowers_farmsAvgAggregateInputType = {
    flower_id?: true
    flower_farm_id?: true
  }

  export type Flowers_and_flowers_farmsSumAggregateInputType = {
    flower_id?: true
    flower_farm_id?: true
  }

  export type Flowers_and_flowers_farmsMinAggregateInputType = {
    flower_id?: true
    flower_farm_id?: true
  }

  export type Flowers_and_flowers_farmsMaxAggregateInputType = {
    flower_id?: true
    flower_farm_id?: true
  }

  export type Flowers_and_flowers_farmsCountAggregateInputType = {
    flower_id?: true
    flower_farm_id?: true
    _all?: true
  }

  export type Flowers_and_flowers_farmsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flowers_and_flowers_farms to aggregate.
     */
    where?: flowers_and_flowers_farmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_and_flowers_farms to fetch.
     */
    orderBy?: flowers_and_flowers_farmsOrderByWithRelationInput | flowers_and_flowers_farmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: flowers_and_flowers_farmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_and_flowers_farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_and_flowers_farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned flowers_and_flowers_farms
    **/
    _count?: true | Flowers_and_flowers_farmsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Flowers_and_flowers_farmsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Flowers_and_flowers_farmsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Flowers_and_flowers_farmsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Flowers_and_flowers_farmsMaxAggregateInputType
  }

  export type GetFlowers_and_flowers_farmsAggregateType<T extends Flowers_and_flowers_farmsAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowers_and_flowers_farms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowers_and_flowers_farms[P]>
      : GetScalarType<T[P], AggregateFlowers_and_flowers_farms[P]>
  }




  export type flowers_and_flowers_farmsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flowers_and_flowers_farmsWhereInput
    orderBy?: flowers_and_flowers_farmsOrderByWithAggregationInput | flowers_and_flowers_farmsOrderByWithAggregationInput[]
    by: Flowers_and_flowers_farmsScalarFieldEnum[] | Flowers_and_flowers_farmsScalarFieldEnum
    having?: flowers_and_flowers_farmsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Flowers_and_flowers_farmsCountAggregateInputType | true
    _avg?: Flowers_and_flowers_farmsAvgAggregateInputType
    _sum?: Flowers_and_flowers_farmsSumAggregateInputType
    _min?: Flowers_and_flowers_farmsMinAggregateInputType
    _max?: Flowers_and_flowers_farmsMaxAggregateInputType
  }

  export type Flowers_and_flowers_farmsGroupByOutputType = {
    flower_id: number
    flower_farm_id: number
    _count: Flowers_and_flowers_farmsCountAggregateOutputType | null
    _avg: Flowers_and_flowers_farmsAvgAggregateOutputType | null
    _sum: Flowers_and_flowers_farmsSumAggregateOutputType | null
    _min: Flowers_and_flowers_farmsMinAggregateOutputType | null
    _max: Flowers_and_flowers_farmsMaxAggregateOutputType | null
  }

  type GetFlowers_and_flowers_farmsGroupByPayload<T extends flowers_and_flowers_farmsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Flowers_and_flowers_farmsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Flowers_and_flowers_farmsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Flowers_and_flowers_farmsGroupByOutputType[P]>
            : GetScalarType<T[P], Flowers_and_flowers_farmsGroupByOutputType[P]>
        }
      >
    >


  export type flowers_and_flowers_farmsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flower_id?: boolean
    flower_farm_id?: boolean
    flowers?: boolean | flowersDefaultArgs<ExtArgs>
    flowers_farms?: boolean | flowers_farmsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers_and_flowers_farms"]>

  export type flowers_and_flowers_farmsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flower_id?: boolean
    flower_farm_id?: boolean
    flowers?: boolean | flowersDefaultArgs<ExtArgs>
    flowers_farms?: boolean | flowers_farmsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers_and_flowers_farms"]>

  export type flowers_and_flowers_farmsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flower_id?: boolean
    flower_farm_id?: boolean
    flowers?: boolean | flowersDefaultArgs<ExtArgs>
    flowers_farms?: boolean | flowers_farmsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers_and_flowers_farms"]>

  export type flowers_and_flowers_farmsSelectScalar = {
    flower_id?: boolean
    flower_farm_id?: boolean
  }

  export type flowers_and_flowers_farmsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"flower_id" | "flower_farm_id", ExtArgs["result"]["flowers_and_flowers_farms"]>
  export type flowers_and_flowers_farmsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | flowersDefaultArgs<ExtArgs>
    flowers_farms?: boolean | flowers_farmsDefaultArgs<ExtArgs>
  }
  export type flowers_and_flowers_farmsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | flowersDefaultArgs<ExtArgs>
    flowers_farms?: boolean | flowers_farmsDefaultArgs<ExtArgs>
  }
  export type flowers_and_flowers_farmsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | flowersDefaultArgs<ExtArgs>
    flowers_farms?: boolean | flowers_farmsDefaultArgs<ExtArgs>
  }

  export type $flowers_and_flowers_farmsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "flowers_and_flowers_farms"
    objects: {
      flowers: Prisma.$flowersPayload<ExtArgs>
      flowers_farms: Prisma.$flowers_farmsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      flower_id: number
      flower_farm_id: number
    }, ExtArgs["result"]["flowers_and_flowers_farms"]>
    composites: {}
  }

  type flowers_and_flowers_farmsGetPayload<S extends boolean | null | undefined | flowers_and_flowers_farmsDefaultArgs> = $Result.GetResult<Prisma.$flowers_and_flowers_farmsPayload, S>

  type flowers_and_flowers_farmsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<flowers_and_flowers_farmsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Flowers_and_flowers_farmsCountAggregateInputType | true
    }

  export interface flowers_and_flowers_farmsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['flowers_and_flowers_farms'], meta: { name: 'flowers_and_flowers_farms' } }
    /**
     * Find zero or one Flowers_and_flowers_farms that matches the filter.
     * @param {flowers_and_flowers_farmsFindUniqueArgs} args - Arguments to find a Flowers_and_flowers_farms
     * @example
     * // Get one Flowers_and_flowers_farms
     * const flowers_and_flowers_farms = await prisma.flowers_and_flowers_farms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends flowers_and_flowers_farmsFindUniqueArgs>(args: SelectSubset<T, flowers_and_flowers_farmsFindUniqueArgs<ExtArgs>>): Prisma__flowers_and_flowers_farmsClient<$Result.GetResult<Prisma.$flowers_and_flowers_farmsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flowers_and_flowers_farms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {flowers_and_flowers_farmsFindUniqueOrThrowArgs} args - Arguments to find a Flowers_and_flowers_farms
     * @example
     * // Get one Flowers_and_flowers_farms
     * const flowers_and_flowers_farms = await prisma.flowers_and_flowers_farms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends flowers_and_flowers_farmsFindUniqueOrThrowArgs>(args: SelectSubset<T, flowers_and_flowers_farmsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__flowers_and_flowers_farmsClient<$Result.GetResult<Prisma.$flowers_and_flowers_farmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowers_and_flowers_farms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_and_flowers_farmsFindFirstArgs} args - Arguments to find a Flowers_and_flowers_farms
     * @example
     * // Get one Flowers_and_flowers_farms
     * const flowers_and_flowers_farms = await prisma.flowers_and_flowers_farms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends flowers_and_flowers_farmsFindFirstArgs>(args?: SelectSubset<T, flowers_and_flowers_farmsFindFirstArgs<ExtArgs>>): Prisma__flowers_and_flowers_farmsClient<$Result.GetResult<Prisma.$flowers_and_flowers_farmsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowers_and_flowers_farms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_and_flowers_farmsFindFirstOrThrowArgs} args - Arguments to find a Flowers_and_flowers_farms
     * @example
     * // Get one Flowers_and_flowers_farms
     * const flowers_and_flowers_farms = await prisma.flowers_and_flowers_farms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends flowers_and_flowers_farmsFindFirstOrThrowArgs>(args?: SelectSubset<T, flowers_and_flowers_farmsFindFirstOrThrowArgs<ExtArgs>>): Prisma__flowers_and_flowers_farmsClient<$Result.GetResult<Prisma.$flowers_and_flowers_farmsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flowers_and_flowers_farms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_and_flowers_farmsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flowers_and_flowers_farms
     * const flowers_and_flowers_farms = await prisma.flowers_and_flowers_farms.findMany()
     * 
     * // Get first 10 Flowers_and_flowers_farms
     * const flowers_and_flowers_farms = await prisma.flowers_and_flowers_farms.findMany({ take: 10 })
     * 
     * // Only select the `flower_id`
     * const flowers_and_flowers_farmsWithFlower_idOnly = await prisma.flowers_and_flowers_farms.findMany({ select: { flower_id: true } })
     * 
     */
    findMany<T extends flowers_and_flowers_farmsFindManyArgs>(args?: SelectSubset<T, flowers_and_flowers_farmsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_and_flowers_farmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flowers_and_flowers_farms.
     * @param {flowers_and_flowers_farmsCreateArgs} args - Arguments to create a Flowers_and_flowers_farms.
     * @example
     * // Create one Flowers_and_flowers_farms
     * const Flowers_and_flowers_farms = await prisma.flowers_and_flowers_farms.create({
     *   data: {
     *     // ... data to create a Flowers_and_flowers_farms
     *   }
     * })
     * 
     */
    create<T extends flowers_and_flowers_farmsCreateArgs>(args: SelectSubset<T, flowers_and_flowers_farmsCreateArgs<ExtArgs>>): Prisma__flowers_and_flowers_farmsClient<$Result.GetResult<Prisma.$flowers_and_flowers_farmsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flowers_and_flowers_farms.
     * @param {flowers_and_flowers_farmsCreateManyArgs} args - Arguments to create many Flowers_and_flowers_farms.
     * @example
     * // Create many Flowers_and_flowers_farms
     * const flowers_and_flowers_farms = await prisma.flowers_and_flowers_farms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends flowers_and_flowers_farmsCreateManyArgs>(args?: SelectSubset<T, flowers_and_flowers_farmsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flowers_and_flowers_farms and returns the data saved in the database.
     * @param {flowers_and_flowers_farmsCreateManyAndReturnArgs} args - Arguments to create many Flowers_and_flowers_farms.
     * @example
     * // Create many Flowers_and_flowers_farms
     * const flowers_and_flowers_farms = await prisma.flowers_and_flowers_farms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flowers_and_flowers_farms and only return the `flower_id`
     * const flowers_and_flowers_farmsWithFlower_idOnly = await prisma.flowers_and_flowers_farms.createManyAndReturn({
     *   select: { flower_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends flowers_and_flowers_farmsCreateManyAndReturnArgs>(args?: SelectSubset<T, flowers_and_flowers_farmsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_and_flowers_farmsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flowers_and_flowers_farms.
     * @param {flowers_and_flowers_farmsDeleteArgs} args - Arguments to delete one Flowers_and_flowers_farms.
     * @example
     * // Delete one Flowers_and_flowers_farms
     * const Flowers_and_flowers_farms = await prisma.flowers_and_flowers_farms.delete({
     *   where: {
     *     // ... filter to delete one Flowers_and_flowers_farms
     *   }
     * })
     * 
     */
    delete<T extends flowers_and_flowers_farmsDeleteArgs>(args: SelectSubset<T, flowers_and_flowers_farmsDeleteArgs<ExtArgs>>): Prisma__flowers_and_flowers_farmsClient<$Result.GetResult<Prisma.$flowers_and_flowers_farmsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flowers_and_flowers_farms.
     * @param {flowers_and_flowers_farmsUpdateArgs} args - Arguments to update one Flowers_and_flowers_farms.
     * @example
     * // Update one Flowers_and_flowers_farms
     * const flowers_and_flowers_farms = await prisma.flowers_and_flowers_farms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends flowers_and_flowers_farmsUpdateArgs>(args: SelectSubset<T, flowers_and_flowers_farmsUpdateArgs<ExtArgs>>): Prisma__flowers_and_flowers_farmsClient<$Result.GetResult<Prisma.$flowers_and_flowers_farmsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flowers_and_flowers_farms.
     * @param {flowers_and_flowers_farmsDeleteManyArgs} args - Arguments to filter Flowers_and_flowers_farms to delete.
     * @example
     * // Delete a few Flowers_and_flowers_farms
     * const { count } = await prisma.flowers_and_flowers_farms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends flowers_and_flowers_farmsDeleteManyArgs>(args?: SelectSubset<T, flowers_and_flowers_farmsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowers_and_flowers_farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_and_flowers_farmsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flowers_and_flowers_farms
     * const flowers_and_flowers_farms = await prisma.flowers_and_flowers_farms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends flowers_and_flowers_farmsUpdateManyArgs>(args: SelectSubset<T, flowers_and_flowers_farmsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowers_and_flowers_farms and returns the data updated in the database.
     * @param {flowers_and_flowers_farmsUpdateManyAndReturnArgs} args - Arguments to update many Flowers_and_flowers_farms.
     * @example
     * // Update many Flowers_and_flowers_farms
     * const flowers_and_flowers_farms = await prisma.flowers_and_flowers_farms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flowers_and_flowers_farms and only return the `flower_id`
     * const flowers_and_flowers_farmsWithFlower_idOnly = await prisma.flowers_and_flowers_farms.updateManyAndReturn({
     *   select: { flower_id: true },
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
    updateManyAndReturn<T extends flowers_and_flowers_farmsUpdateManyAndReturnArgs>(args: SelectSubset<T, flowers_and_flowers_farmsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_and_flowers_farmsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flowers_and_flowers_farms.
     * @param {flowers_and_flowers_farmsUpsertArgs} args - Arguments to update or create a Flowers_and_flowers_farms.
     * @example
     * // Update or create a Flowers_and_flowers_farms
     * const flowers_and_flowers_farms = await prisma.flowers_and_flowers_farms.upsert({
     *   create: {
     *     // ... data to create a Flowers_and_flowers_farms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flowers_and_flowers_farms we want to update
     *   }
     * })
     */
    upsert<T extends flowers_and_flowers_farmsUpsertArgs>(args: SelectSubset<T, flowers_and_flowers_farmsUpsertArgs<ExtArgs>>): Prisma__flowers_and_flowers_farmsClient<$Result.GetResult<Prisma.$flowers_and_flowers_farmsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flowers_and_flowers_farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_and_flowers_farmsCountArgs} args - Arguments to filter Flowers_and_flowers_farms to count.
     * @example
     * // Count the number of Flowers_and_flowers_farms
     * const count = await prisma.flowers_and_flowers_farms.count({
     *   where: {
     *     // ... the filter for the Flowers_and_flowers_farms we want to count
     *   }
     * })
    **/
    count<T extends flowers_and_flowers_farmsCountArgs>(
      args?: Subset<T, flowers_and_flowers_farmsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Flowers_and_flowers_farmsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flowers_and_flowers_farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Flowers_and_flowers_farmsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Flowers_and_flowers_farmsAggregateArgs>(args: Subset<T, Flowers_and_flowers_farmsAggregateArgs>): Prisma.PrismaPromise<GetFlowers_and_flowers_farmsAggregateType<T>>

    /**
     * Group by Flowers_and_flowers_farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_and_flowers_farmsGroupByArgs} args - Group by arguments.
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
      T extends flowers_and_flowers_farmsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: flowers_and_flowers_farmsGroupByArgs['orderBy'] }
        : { orderBy?: flowers_and_flowers_farmsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, flowers_and_flowers_farmsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowers_and_flowers_farmsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the flowers_and_flowers_farms model
   */
  readonly fields: flowers_and_flowers_farmsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for flowers_and_flowers_farms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__flowers_and_flowers_farmsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flowers<T extends flowersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, flowersDefaultArgs<ExtArgs>>): Prisma__flowersClient<$Result.GetResult<Prisma.$flowersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flowers_farms<T extends flowers_farmsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, flowers_farmsDefaultArgs<ExtArgs>>): Prisma__flowers_farmsClient<$Result.GetResult<Prisma.$flowers_farmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the flowers_and_flowers_farms model
   */
  interface flowers_and_flowers_farmsFieldRefs {
    readonly flower_id: FieldRef<"flowers_and_flowers_farms", 'Int'>
    readonly flower_farm_id: FieldRef<"flowers_and_flowers_farms", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * flowers_and_flowers_farms findUnique
   */
  export type flowers_and_flowers_farmsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_farms
     */
    select?: flowers_and_flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_farms
     */
    omit?: flowers_and_flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_farmsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_and_flowers_farms to fetch.
     */
    where: flowers_and_flowers_farmsWhereUniqueInput
  }

  /**
   * flowers_and_flowers_farms findUniqueOrThrow
   */
  export type flowers_and_flowers_farmsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_farms
     */
    select?: flowers_and_flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_farms
     */
    omit?: flowers_and_flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_farmsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_and_flowers_farms to fetch.
     */
    where: flowers_and_flowers_farmsWhereUniqueInput
  }

  /**
   * flowers_and_flowers_farms findFirst
   */
  export type flowers_and_flowers_farmsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_farms
     */
    select?: flowers_and_flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_farms
     */
    omit?: flowers_and_flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_farmsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_and_flowers_farms to fetch.
     */
    where?: flowers_and_flowers_farmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_and_flowers_farms to fetch.
     */
    orderBy?: flowers_and_flowers_farmsOrderByWithRelationInput | flowers_and_flowers_farmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flowers_and_flowers_farms.
     */
    cursor?: flowers_and_flowers_farmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_and_flowers_farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_and_flowers_farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flowers_and_flowers_farms.
     */
    distinct?: Flowers_and_flowers_farmsScalarFieldEnum | Flowers_and_flowers_farmsScalarFieldEnum[]
  }

  /**
   * flowers_and_flowers_farms findFirstOrThrow
   */
  export type flowers_and_flowers_farmsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_farms
     */
    select?: flowers_and_flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_farms
     */
    omit?: flowers_and_flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_farmsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_and_flowers_farms to fetch.
     */
    where?: flowers_and_flowers_farmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_and_flowers_farms to fetch.
     */
    orderBy?: flowers_and_flowers_farmsOrderByWithRelationInput | flowers_and_flowers_farmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flowers_and_flowers_farms.
     */
    cursor?: flowers_and_flowers_farmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_and_flowers_farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_and_flowers_farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flowers_and_flowers_farms.
     */
    distinct?: Flowers_and_flowers_farmsScalarFieldEnum | Flowers_and_flowers_farmsScalarFieldEnum[]
  }

  /**
   * flowers_and_flowers_farms findMany
   */
  export type flowers_and_flowers_farmsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_farms
     */
    select?: flowers_and_flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_farms
     */
    omit?: flowers_and_flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_farmsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_and_flowers_farms to fetch.
     */
    where?: flowers_and_flowers_farmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_and_flowers_farms to fetch.
     */
    orderBy?: flowers_and_flowers_farmsOrderByWithRelationInput | flowers_and_flowers_farmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing flowers_and_flowers_farms.
     */
    cursor?: flowers_and_flowers_farmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_and_flowers_farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_and_flowers_farms.
     */
    skip?: number
    distinct?: Flowers_and_flowers_farmsScalarFieldEnum | Flowers_and_flowers_farmsScalarFieldEnum[]
  }

  /**
   * flowers_and_flowers_farms create
   */
  export type flowers_and_flowers_farmsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_farms
     */
    select?: flowers_and_flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_farms
     */
    omit?: flowers_and_flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_farmsInclude<ExtArgs> | null
    /**
     * The data needed to create a flowers_and_flowers_farms.
     */
    data: XOR<flowers_and_flowers_farmsCreateInput, flowers_and_flowers_farmsUncheckedCreateInput>
  }

  /**
   * flowers_and_flowers_farms createMany
   */
  export type flowers_and_flowers_farmsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many flowers_and_flowers_farms.
     */
    data: flowers_and_flowers_farmsCreateManyInput | flowers_and_flowers_farmsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * flowers_and_flowers_farms createManyAndReturn
   */
  export type flowers_and_flowers_farmsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_farms
     */
    select?: flowers_and_flowers_farmsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_farms
     */
    omit?: flowers_and_flowers_farmsOmit<ExtArgs> | null
    /**
     * The data used to create many flowers_and_flowers_farms.
     */
    data: flowers_and_flowers_farmsCreateManyInput | flowers_and_flowers_farmsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_farmsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * flowers_and_flowers_farms update
   */
  export type flowers_and_flowers_farmsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_farms
     */
    select?: flowers_and_flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_farms
     */
    omit?: flowers_and_flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_farmsInclude<ExtArgs> | null
    /**
     * The data needed to update a flowers_and_flowers_farms.
     */
    data: XOR<flowers_and_flowers_farmsUpdateInput, flowers_and_flowers_farmsUncheckedUpdateInput>
    /**
     * Choose, which flowers_and_flowers_farms to update.
     */
    where: flowers_and_flowers_farmsWhereUniqueInput
  }

  /**
   * flowers_and_flowers_farms updateMany
   */
  export type flowers_and_flowers_farmsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update flowers_and_flowers_farms.
     */
    data: XOR<flowers_and_flowers_farmsUpdateManyMutationInput, flowers_and_flowers_farmsUncheckedUpdateManyInput>
    /**
     * Filter which flowers_and_flowers_farms to update
     */
    where?: flowers_and_flowers_farmsWhereInput
    /**
     * Limit how many flowers_and_flowers_farms to update.
     */
    limit?: number
  }

  /**
   * flowers_and_flowers_farms updateManyAndReturn
   */
  export type flowers_and_flowers_farmsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_farms
     */
    select?: flowers_and_flowers_farmsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_farms
     */
    omit?: flowers_and_flowers_farmsOmit<ExtArgs> | null
    /**
     * The data used to update flowers_and_flowers_farms.
     */
    data: XOR<flowers_and_flowers_farmsUpdateManyMutationInput, flowers_and_flowers_farmsUncheckedUpdateManyInput>
    /**
     * Filter which flowers_and_flowers_farms to update
     */
    where?: flowers_and_flowers_farmsWhereInput
    /**
     * Limit how many flowers_and_flowers_farms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_farmsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * flowers_and_flowers_farms upsert
   */
  export type flowers_and_flowers_farmsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_farms
     */
    select?: flowers_and_flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_farms
     */
    omit?: flowers_and_flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_farmsInclude<ExtArgs> | null
    /**
     * The filter to search for the flowers_and_flowers_farms to update in case it exists.
     */
    where: flowers_and_flowers_farmsWhereUniqueInput
    /**
     * In case the flowers_and_flowers_farms found by the `where` argument doesn't exist, create a new flowers_and_flowers_farms with this data.
     */
    create: XOR<flowers_and_flowers_farmsCreateInput, flowers_and_flowers_farmsUncheckedCreateInput>
    /**
     * In case the flowers_and_flowers_farms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<flowers_and_flowers_farmsUpdateInput, flowers_and_flowers_farmsUncheckedUpdateInput>
  }

  /**
   * flowers_and_flowers_farms delete
   */
  export type flowers_and_flowers_farmsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_farms
     */
    select?: flowers_and_flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_farms
     */
    omit?: flowers_and_flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_farmsInclude<ExtArgs> | null
    /**
     * Filter which flowers_and_flowers_farms to delete.
     */
    where: flowers_and_flowers_farmsWhereUniqueInput
  }

  /**
   * flowers_and_flowers_farms deleteMany
   */
  export type flowers_and_flowers_farmsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flowers_and_flowers_farms to delete
     */
    where?: flowers_and_flowers_farmsWhereInput
    /**
     * Limit how many flowers_and_flowers_farms to delete.
     */
    limit?: number
  }

  /**
   * flowers_and_flowers_farms without action
   */
  export type flowers_and_flowers_farmsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_farms
     */
    select?: flowers_and_flowers_farmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_farms
     */
    omit?: flowers_and_flowers_farmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_farmsInclude<ExtArgs> | null
  }


  /**
   * Model flowers_bouquets
   */

  export type AggregateFlowers_bouquets = {
    _count: Flowers_bouquetsCountAggregateOutputType | null
    _avg: Flowers_bouquetsAvgAggregateOutputType | null
    _sum: Flowers_bouquetsSumAggregateOutputType | null
    _min: Flowers_bouquetsMinAggregateOutputType | null
    _max: Flowers_bouquetsMaxAggregateOutputType | null
  }

  export type Flowers_bouquetsAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type Flowers_bouquetsSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type Flowers_bouquetsMinAggregateOutputType = {
    id: number | null
    name_en: string | null
    name_ru: string | null
    price: number | null
  }

  export type Flowers_bouquetsMaxAggregateOutputType = {
    id: number | null
    name_en: string | null
    name_ru: string | null
    price: number | null
  }

  export type Flowers_bouquetsCountAggregateOutputType = {
    id: number
    name_en: number
    name_ru: number
    price: number
    _all: number
  }


  export type Flowers_bouquetsAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type Flowers_bouquetsSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type Flowers_bouquetsMinAggregateInputType = {
    id?: true
    name_en?: true
    name_ru?: true
    price?: true
  }

  export type Flowers_bouquetsMaxAggregateInputType = {
    id?: true
    name_en?: true
    name_ru?: true
    price?: true
  }

  export type Flowers_bouquetsCountAggregateInputType = {
    id?: true
    name_en?: true
    name_ru?: true
    price?: true
    _all?: true
  }

  export type Flowers_bouquetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flowers_bouquets to aggregate.
     */
    where?: flowers_bouquetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_bouquets to fetch.
     */
    orderBy?: flowers_bouquetsOrderByWithRelationInput | flowers_bouquetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: flowers_bouquetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_bouquets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_bouquets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned flowers_bouquets
    **/
    _count?: true | Flowers_bouquetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Flowers_bouquetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Flowers_bouquetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Flowers_bouquetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Flowers_bouquetsMaxAggregateInputType
  }

  export type GetFlowers_bouquetsAggregateType<T extends Flowers_bouquetsAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowers_bouquets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowers_bouquets[P]>
      : GetScalarType<T[P], AggregateFlowers_bouquets[P]>
  }




  export type flowers_bouquetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flowers_bouquetsWhereInput
    orderBy?: flowers_bouquetsOrderByWithAggregationInput | flowers_bouquetsOrderByWithAggregationInput[]
    by: Flowers_bouquetsScalarFieldEnum[] | Flowers_bouquetsScalarFieldEnum
    having?: flowers_bouquetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Flowers_bouquetsCountAggregateInputType | true
    _avg?: Flowers_bouquetsAvgAggregateInputType
    _sum?: Flowers_bouquetsSumAggregateInputType
    _min?: Flowers_bouquetsMinAggregateInputType
    _max?: Flowers_bouquetsMaxAggregateInputType
  }

  export type Flowers_bouquetsGroupByOutputType = {
    id: number
    name_en: string
    name_ru: string
    price: number
    _count: Flowers_bouquetsCountAggregateOutputType | null
    _avg: Flowers_bouquetsAvgAggregateOutputType | null
    _sum: Flowers_bouquetsSumAggregateOutputType | null
    _min: Flowers_bouquetsMinAggregateOutputType | null
    _max: Flowers_bouquetsMaxAggregateOutputType | null
  }

  type GetFlowers_bouquetsGroupByPayload<T extends flowers_bouquetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Flowers_bouquetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Flowers_bouquetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Flowers_bouquetsGroupByOutputType[P]>
            : GetScalarType<T[P], Flowers_bouquetsGroupByOutputType[P]>
        }
      >
    >


  export type flowers_bouquetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_en?: boolean
    name_ru?: boolean
    price?: boolean
    flowers?: boolean | flowers_bouquets$flowersArgs<ExtArgs>
    _count?: boolean | Flowers_bouquetsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers_bouquets"]>

  export type flowers_bouquetsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_en?: boolean
    name_ru?: boolean
    price?: boolean
  }, ExtArgs["result"]["flowers_bouquets"]>

  export type flowers_bouquetsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_en?: boolean
    name_ru?: boolean
    price?: boolean
  }, ExtArgs["result"]["flowers_bouquets"]>

  export type flowers_bouquetsSelectScalar = {
    id?: boolean
    name_en?: boolean
    name_ru?: boolean
    price?: boolean
  }

  export type flowers_bouquetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_en" | "name_ru" | "price", ExtArgs["result"]["flowers_bouquets"]>
  export type flowers_bouquetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | flowers_bouquets$flowersArgs<ExtArgs>
    _count?: boolean | Flowers_bouquetsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type flowers_bouquetsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type flowers_bouquetsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $flowers_bouquetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "flowers_bouquets"
    objects: {
      flowers: Prisma.$flowers_and_flowers_bouquetsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name_en: string
      name_ru: string
      price: number
    }, ExtArgs["result"]["flowers_bouquets"]>
    composites: {}
  }

  type flowers_bouquetsGetPayload<S extends boolean | null | undefined | flowers_bouquetsDefaultArgs> = $Result.GetResult<Prisma.$flowers_bouquetsPayload, S>

  type flowers_bouquetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<flowers_bouquetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Flowers_bouquetsCountAggregateInputType | true
    }

  export interface flowers_bouquetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['flowers_bouquets'], meta: { name: 'flowers_bouquets' } }
    /**
     * Find zero or one Flowers_bouquets that matches the filter.
     * @param {flowers_bouquetsFindUniqueArgs} args - Arguments to find a Flowers_bouquets
     * @example
     * // Get one Flowers_bouquets
     * const flowers_bouquets = await prisma.flowers_bouquets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends flowers_bouquetsFindUniqueArgs>(args: SelectSubset<T, flowers_bouquetsFindUniqueArgs<ExtArgs>>): Prisma__flowers_bouquetsClient<$Result.GetResult<Prisma.$flowers_bouquetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flowers_bouquets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {flowers_bouquetsFindUniqueOrThrowArgs} args - Arguments to find a Flowers_bouquets
     * @example
     * // Get one Flowers_bouquets
     * const flowers_bouquets = await prisma.flowers_bouquets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends flowers_bouquetsFindUniqueOrThrowArgs>(args: SelectSubset<T, flowers_bouquetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__flowers_bouquetsClient<$Result.GetResult<Prisma.$flowers_bouquetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowers_bouquets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_bouquetsFindFirstArgs} args - Arguments to find a Flowers_bouquets
     * @example
     * // Get one Flowers_bouquets
     * const flowers_bouquets = await prisma.flowers_bouquets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends flowers_bouquetsFindFirstArgs>(args?: SelectSubset<T, flowers_bouquetsFindFirstArgs<ExtArgs>>): Prisma__flowers_bouquetsClient<$Result.GetResult<Prisma.$flowers_bouquetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowers_bouquets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_bouquetsFindFirstOrThrowArgs} args - Arguments to find a Flowers_bouquets
     * @example
     * // Get one Flowers_bouquets
     * const flowers_bouquets = await prisma.flowers_bouquets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends flowers_bouquetsFindFirstOrThrowArgs>(args?: SelectSubset<T, flowers_bouquetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__flowers_bouquetsClient<$Result.GetResult<Prisma.$flowers_bouquetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flowers_bouquets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_bouquetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flowers_bouquets
     * const flowers_bouquets = await prisma.flowers_bouquets.findMany()
     * 
     * // Get first 10 Flowers_bouquets
     * const flowers_bouquets = await prisma.flowers_bouquets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowers_bouquetsWithIdOnly = await prisma.flowers_bouquets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends flowers_bouquetsFindManyArgs>(args?: SelectSubset<T, flowers_bouquetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_bouquetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flowers_bouquets.
     * @param {flowers_bouquetsCreateArgs} args - Arguments to create a Flowers_bouquets.
     * @example
     * // Create one Flowers_bouquets
     * const Flowers_bouquets = await prisma.flowers_bouquets.create({
     *   data: {
     *     // ... data to create a Flowers_bouquets
     *   }
     * })
     * 
     */
    create<T extends flowers_bouquetsCreateArgs>(args: SelectSubset<T, flowers_bouquetsCreateArgs<ExtArgs>>): Prisma__flowers_bouquetsClient<$Result.GetResult<Prisma.$flowers_bouquetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flowers_bouquets.
     * @param {flowers_bouquetsCreateManyArgs} args - Arguments to create many Flowers_bouquets.
     * @example
     * // Create many Flowers_bouquets
     * const flowers_bouquets = await prisma.flowers_bouquets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends flowers_bouquetsCreateManyArgs>(args?: SelectSubset<T, flowers_bouquetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flowers_bouquets and returns the data saved in the database.
     * @param {flowers_bouquetsCreateManyAndReturnArgs} args - Arguments to create many Flowers_bouquets.
     * @example
     * // Create many Flowers_bouquets
     * const flowers_bouquets = await prisma.flowers_bouquets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flowers_bouquets and only return the `id`
     * const flowers_bouquetsWithIdOnly = await prisma.flowers_bouquets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends flowers_bouquetsCreateManyAndReturnArgs>(args?: SelectSubset<T, flowers_bouquetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_bouquetsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flowers_bouquets.
     * @param {flowers_bouquetsDeleteArgs} args - Arguments to delete one Flowers_bouquets.
     * @example
     * // Delete one Flowers_bouquets
     * const Flowers_bouquets = await prisma.flowers_bouquets.delete({
     *   where: {
     *     // ... filter to delete one Flowers_bouquets
     *   }
     * })
     * 
     */
    delete<T extends flowers_bouquetsDeleteArgs>(args: SelectSubset<T, flowers_bouquetsDeleteArgs<ExtArgs>>): Prisma__flowers_bouquetsClient<$Result.GetResult<Prisma.$flowers_bouquetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flowers_bouquets.
     * @param {flowers_bouquetsUpdateArgs} args - Arguments to update one Flowers_bouquets.
     * @example
     * // Update one Flowers_bouquets
     * const flowers_bouquets = await prisma.flowers_bouquets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends flowers_bouquetsUpdateArgs>(args: SelectSubset<T, flowers_bouquetsUpdateArgs<ExtArgs>>): Prisma__flowers_bouquetsClient<$Result.GetResult<Prisma.$flowers_bouquetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flowers_bouquets.
     * @param {flowers_bouquetsDeleteManyArgs} args - Arguments to filter Flowers_bouquets to delete.
     * @example
     * // Delete a few Flowers_bouquets
     * const { count } = await prisma.flowers_bouquets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends flowers_bouquetsDeleteManyArgs>(args?: SelectSubset<T, flowers_bouquetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowers_bouquets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_bouquetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flowers_bouquets
     * const flowers_bouquets = await prisma.flowers_bouquets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends flowers_bouquetsUpdateManyArgs>(args: SelectSubset<T, flowers_bouquetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowers_bouquets and returns the data updated in the database.
     * @param {flowers_bouquetsUpdateManyAndReturnArgs} args - Arguments to update many Flowers_bouquets.
     * @example
     * // Update many Flowers_bouquets
     * const flowers_bouquets = await prisma.flowers_bouquets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flowers_bouquets and only return the `id`
     * const flowers_bouquetsWithIdOnly = await prisma.flowers_bouquets.updateManyAndReturn({
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
    updateManyAndReturn<T extends flowers_bouquetsUpdateManyAndReturnArgs>(args: SelectSubset<T, flowers_bouquetsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_bouquetsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flowers_bouquets.
     * @param {flowers_bouquetsUpsertArgs} args - Arguments to update or create a Flowers_bouquets.
     * @example
     * // Update or create a Flowers_bouquets
     * const flowers_bouquets = await prisma.flowers_bouquets.upsert({
     *   create: {
     *     // ... data to create a Flowers_bouquets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flowers_bouquets we want to update
     *   }
     * })
     */
    upsert<T extends flowers_bouquetsUpsertArgs>(args: SelectSubset<T, flowers_bouquetsUpsertArgs<ExtArgs>>): Prisma__flowers_bouquetsClient<$Result.GetResult<Prisma.$flowers_bouquetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flowers_bouquets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_bouquetsCountArgs} args - Arguments to filter Flowers_bouquets to count.
     * @example
     * // Count the number of Flowers_bouquets
     * const count = await prisma.flowers_bouquets.count({
     *   where: {
     *     // ... the filter for the Flowers_bouquets we want to count
     *   }
     * })
    **/
    count<T extends flowers_bouquetsCountArgs>(
      args?: Subset<T, flowers_bouquetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Flowers_bouquetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flowers_bouquets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Flowers_bouquetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Flowers_bouquetsAggregateArgs>(args: Subset<T, Flowers_bouquetsAggregateArgs>): Prisma.PrismaPromise<GetFlowers_bouquetsAggregateType<T>>

    /**
     * Group by Flowers_bouquets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_bouquetsGroupByArgs} args - Group by arguments.
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
      T extends flowers_bouquetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: flowers_bouquetsGroupByArgs['orderBy'] }
        : { orderBy?: flowers_bouquetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, flowers_bouquetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowers_bouquetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the flowers_bouquets model
   */
  readonly fields: flowers_bouquetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for flowers_bouquets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__flowers_bouquetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flowers<T extends flowers_bouquets$flowersArgs<ExtArgs> = {}>(args?: Subset<T, flowers_bouquets$flowersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_and_flowers_bouquetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the flowers_bouquets model
   */
  interface flowers_bouquetsFieldRefs {
    readonly id: FieldRef<"flowers_bouquets", 'Int'>
    readonly name_en: FieldRef<"flowers_bouquets", 'String'>
    readonly name_ru: FieldRef<"flowers_bouquets", 'String'>
    readonly price: FieldRef<"flowers_bouquets", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * flowers_bouquets findUnique
   */
  export type flowers_bouquetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_bouquets
     */
    select?: flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_bouquets
     */
    omit?: flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_bouquetsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_bouquets to fetch.
     */
    where: flowers_bouquetsWhereUniqueInput
  }

  /**
   * flowers_bouquets findUniqueOrThrow
   */
  export type flowers_bouquetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_bouquets
     */
    select?: flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_bouquets
     */
    omit?: flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_bouquetsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_bouquets to fetch.
     */
    where: flowers_bouquetsWhereUniqueInput
  }

  /**
   * flowers_bouquets findFirst
   */
  export type flowers_bouquetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_bouquets
     */
    select?: flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_bouquets
     */
    omit?: flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_bouquetsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_bouquets to fetch.
     */
    where?: flowers_bouquetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_bouquets to fetch.
     */
    orderBy?: flowers_bouquetsOrderByWithRelationInput | flowers_bouquetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flowers_bouquets.
     */
    cursor?: flowers_bouquetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_bouquets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_bouquets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flowers_bouquets.
     */
    distinct?: Flowers_bouquetsScalarFieldEnum | Flowers_bouquetsScalarFieldEnum[]
  }

  /**
   * flowers_bouquets findFirstOrThrow
   */
  export type flowers_bouquetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_bouquets
     */
    select?: flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_bouquets
     */
    omit?: flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_bouquetsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_bouquets to fetch.
     */
    where?: flowers_bouquetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_bouquets to fetch.
     */
    orderBy?: flowers_bouquetsOrderByWithRelationInput | flowers_bouquetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flowers_bouquets.
     */
    cursor?: flowers_bouquetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_bouquets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_bouquets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flowers_bouquets.
     */
    distinct?: Flowers_bouquetsScalarFieldEnum | Flowers_bouquetsScalarFieldEnum[]
  }

  /**
   * flowers_bouquets findMany
   */
  export type flowers_bouquetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_bouquets
     */
    select?: flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_bouquets
     */
    omit?: flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_bouquetsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_bouquets to fetch.
     */
    where?: flowers_bouquetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_bouquets to fetch.
     */
    orderBy?: flowers_bouquetsOrderByWithRelationInput | flowers_bouquetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing flowers_bouquets.
     */
    cursor?: flowers_bouquetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_bouquets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_bouquets.
     */
    skip?: number
    distinct?: Flowers_bouquetsScalarFieldEnum | Flowers_bouquetsScalarFieldEnum[]
  }

  /**
   * flowers_bouquets create
   */
  export type flowers_bouquetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_bouquets
     */
    select?: flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_bouquets
     */
    omit?: flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_bouquetsInclude<ExtArgs> | null
    /**
     * The data needed to create a flowers_bouquets.
     */
    data: XOR<flowers_bouquetsCreateInput, flowers_bouquetsUncheckedCreateInput>
  }

  /**
   * flowers_bouquets createMany
   */
  export type flowers_bouquetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many flowers_bouquets.
     */
    data: flowers_bouquetsCreateManyInput | flowers_bouquetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * flowers_bouquets createManyAndReturn
   */
  export type flowers_bouquetsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_bouquets
     */
    select?: flowers_bouquetsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_bouquets
     */
    omit?: flowers_bouquetsOmit<ExtArgs> | null
    /**
     * The data used to create many flowers_bouquets.
     */
    data: flowers_bouquetsCreateManyInput | flowers_bouquetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * flowers_bouquets update
   */
  export type flowers_bouquetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_bouquets
     */
    select?: flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_bouquets
     */
    omit?: flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_bouquetsInclude<ExtArgs> | null
    /**
     * The data needed to update a flowers_bouquets.
     */
    data: XOR<flowers_bouquetsUpdateInput, flowers_bouquetsUncheckedUpdateInput>
    /**
     * Choose, which flowers_bouquets to update.
     */
    where: flowers_bouquetsWhereUniqueInput
  }

  /**
   * flowers_bouquets updateMany
   */
  export type flowers_bouquetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update flowers_bouquets.
     */
    data: XOR<flowers_bouquetsUpdateManyMutationInput, flowers_bouquetsUncheckedUpdateManyInput>
    /**
     * Filter which flowers_bouquets to update
     */
    where?: flowers_bouquetsWhereInput
    /**
     * Limit how many flowers_bouquets to update.
     */
    limit?: number
  }

  /**
   * flowers_bouquets updateManyAndReturn
   */
  export type flowers_bouquetsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_bouquets
     */
    select?: flowers_bouquetsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_bouquets
     */
    omit?: flowers_bouquetsOmit<ExtArgs> | null
    /**
     * The data used to update flowers_bouquets.
     */
    data: XOR<flowers_bouquetsUpdateManyMutationInput, flowers_bouquetsUncheckedUpdateManyInput>
    /**
     * Filter which flowers_bouquets to update
     */
    where?: flowers_bouquetsWhereInput
    /**
     * Limit how many flowers_bouquets to update.
     */
    limit?: number
  }

  /**
   * flowers_bouquets upsert
   */
  export type flowers_bouquetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_bouquets
     */
    select?: flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_bouquets
     */
    omit?: flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_bouquetsInclude<ExtArgs> | null
    /**
     * The filter to search for the flowers_bouquets to update in case it exists.
     */
    where: flowers_bouquetsWhereUniqueInput
    /**
     * In case the flowers_bouquets found by the `where` argument doesn't exist, create a new flowers_bouquets with this data.
     */
    create: XOR<flowers_bouquetsCreateInput, flowers_bouquetsUncheckedCreateInput>
    /**
     * In case the flowers_bouquets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<flowers_bouquetsUpdateInput, flowers_bouquetsUncheckedUpdateInput>
  }

  /**
   * flowers_bouquets delete
   */
  export type flowers_bouquetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_bouquets
     */
    select?: flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_bouquets
     */
    omit?: flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_bouquetsInclude<ExtArgs> | null
    /**
     * Filter which flowers_bouquets to delete.
     */
    where: flowers_bouquetsWhereUniqueInput
  }

  /**
   * flowers_bouquets deleteMany
   */
  export type flowers_bouquetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flowers_bouquets to delete
     */
    where?: flowers_bouquetsWhereInput
    /**
     * Limit how many flowers_bouquets to delete.
     */
    limit?: number
  }

  /**
   * flowers_bouquets.flowers
   */
  export type flowers_bouquets$flowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_bouquets
     */
    select?: flowers_and_flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_bouquets
     */
    omit?: flowers_and_flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_bouquetsInclude<ExtArgs> | null
    where?: flowers_and_flowers_bouquetsWhereInput
    orderBy?: flowers_and_flowers_bouquetsOrderByWithRelationInput | flowers_and_flowers_bouquetsOrderByWithRelationInput[]
    cursor?: flowers_and_flowers_bouquetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Flowers_and_flowers_bouquetsScalarFieldEnum | Flowers_and_flowers_bouquetsScalarFieldEnum[]
  }

  /**
   * flowers_bouquets without action
   */
  export type flowers_bouquetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_bouquets
     */
    select?: flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_bouquets
     */
    omit?: flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_bouquetsInclude<ExtArgs> | null
  }


  /**
   * Model flowers_and_flowers_bouquets
   */

  export type AggregateFlowers_and_flowers_bouquets = {
    _count: Flowers_and_flowers_bouquetsCountAggregateOutputType | null
    _avg: Flowers_and_flowers_bouquetsAvgAggregateOutputType | null
    _sum: Flowers_and_flowers_bouquetsSumAggregateOutputType | null
    _min: Flowers_and_flowers_bouquetsMinAggregateOutputType | null
    _max: Flowers_and_flowers_bouquetsMaxAggregateOutputType | null
  }

  export type Flowers_and_flowers_bouquetsAvgAggregateOutputType = {
    flower_id: number | null
    flower_bouquet_id: number | null
  }

  export type Flowers_and_flowers_bouquetsSumAggregateOutputType = {
    flower_id: number | null
    flower_bouquet_id: number | null
  }

  export type Flowers_and_flowers_bouquetsMinAggregateOutputType = {
    flower_id: number | null
    flower_bouquet_id: number | null
  }

  export type Flowers_and_flowers_bouquetsMaxAggregateOutputType = {
    flower_id: number | null
    flower_bouquet_id: number | null
  }

  export type Flowers_and_flowers_bouquetsCountAggregateOutputType = {
    flower_id: number
    flower_bouquet_id: number
    _all: number
  }


  export type Flowers_and_flowers_bouquetsAvgAggregateInputType = {
    flower_id?: true
    flower_bouquet_id?: true
  }

  export type Flowers_and_flowers_bouquetsSumAggregateInputType = {
    flower_id?: true
    flower_bouquet_id?: true
  }

  export type Flowers_and_flowers_bouquetsMinAggregateInputType = {
    flower_id?: true
    flower_bouquet_id?: true
  }

  export type Flowers_and_flowers_bouquetsMaxAggregateInputType = {
    flower_id?: true
    flower_bouquet_id?: true
  }

  export type Flowers_and_flowers_bouquetsCountAggregateInputType = {
    flower_id?: true
    flower_bouquet_id?: true
    _all?: true
  }

  export type Flowers_and_flowers_bouquetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flowers_and_flowers_bouquets to aggregate.
     */
    where?: flowers_and_flowers_bouquetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_and_flowers_bouquets to fetch.
     */
    orderBy?: flowers_and_flowers_bouquetsOrderByWithRelationInput | flowers_and_flowers_bouquetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: flowers_and_flowers_bouquetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_and_flowers_bouquets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_and_flowers_bouquets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned flowers_and_flowers_bouquets
    **/
    _count?: true | Flowers_and_flowers_bouquetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Flowers_and_flowers_bouquetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Flowers_and_flowers_bouquetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Flowers_and_flowers_bouquetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Flowers_and_flowers_bouquetsMaxAggregateInputType
  }

  export type GetFlowers_and_flowers_bouquetsAggregateType<T extends Flowers_and_flowers_bouquetsAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowers_and_flowers_bouquets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowers_and_flowers_bouquets[P]>
      : GetScalarType<T[P], AggregateFlowers_and_flowers_bouquets[P]>
  }




  export type flowers_and_flowers_bouquetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flowers_and_flowers_bouquetsWhereInput
    orderBy?: flowers_and_flowers_bouquetsOrderByWithAggregationInput | flowers_and_flowers_bouquetsOrderByWithAggregationInput[]
    by: Flowers_and_flowers_bouquetsScalarFieldEnum[] | Flowers_and_flowers_bouquetsScalarFieldEnum
    having?: flowers_and_flowers_bouquetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Flowers_and_flowers_bouquetsCountAggregateInputType | true
    _avg?: Flowers_and_flowers_bouquetsAvgAggregateInputType
    _sum?: Flowers_and_flowers_bouquetsSumAggregateInputType
    _min?: Flowers_and_flowers_bouquetsMinAggregateInputType
    _max?: Flowers_and_flowers_bouquetsMaxAggregateInputType
  }

  export type Flowers_and_flowers_bouquetsGroupByOutputType = {
    flower_id: number
    flower_bouquet_id: number
    _count: Flowers_and_flowers_bouquetsCountAggregateOutputType | null
    _avg: Flowers_and_flowers_bouquetsAvgAggregateOutputType | null
    _sum: Flowers_and_flowers_bouquetsSumAggregateOutputType | null
    _min: Flowers_and_flowers_bouquetsMinAggregateOutputType | null
    _max: Flowers_and_flowers_bouquetsMaxAggregateOutputType | null
  }

  type GetFlowers_and_flowers_bouquetsGroupByPayload<T extends flowers_and_flowers_bouquetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Flowers_and_flowers_bouquetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Flowers_and_flowers_bouquetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Flowers_and_flowers_bouquetsGroupByOutputType[P]>
            : GetScalarType<T[P], Flowers_and_flowers_bouquetsGroupByOutputType[P]>
        }
      >
    >


  export type flowers_and_flowers_bouquetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flower_id?: boolean
    flower_bouquet_id?: boolean
    flowers?: boolean | flowersDefaultArgs<ExtArgs>
    flowers_bouquets?: boolean | flowers_bouquetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers_and_flowers_bouquets"]>

  export type flowers_and_flowers_bouquetsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flower_id?: boolean
    flower_bouquet_id?: boolean
    flowers?: boolean | flowersDefaultArgs<ExtArgs>
    flowers_bouquets?: boolean | flowers_bouquetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers_and_flowers_bouquets"]>

  export type flowers_and_flowers_bouquetsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flower_id?: boolean
    flower_bouquet_id?: boolean
    flowers?: boolean | flowersDefaultArgs<ExtArgs>
    flowers_bouquets?: boolean | flowers_bouquetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers_and_flowers_bouquets"]>

  export type flowers_and_flowers_bouquetsSelectScalar = {
    flower_id?: boolean
    flower_bouquet_id?: boolean
  }

  export type flowers_and_flowers_bouquetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"flower_id" | "flower_bouquet_id", ExtArgs["result"]["flowers_and_flowers_bouquets"]>
  export type flowers_and_flowers_bouquetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | flowersDefaultArgs<ExtArgs>
    flowers_bouquets?: boolean | flowers_bouquetsDefaultArgs<ExtArgs>
  }
  export type flowers_and_flowers_bouquetsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | flowersDefaultArgs<ExtArgs>
    flowers_bouquets?: boolean | flowers_bouquetsDefaultArgs<ExtArgs>
  }
  export type flowers_and_flowers_bouquetsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | flowersDefaultArgs<ExtArgs>
    flowers_bouquets?: boolean | flowers_bouquetsDefaultArgs<ExtArgs>
  }

  export type $flowers_and_flowers_bouquetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "flowers_and_flowers_bouquets"
    objects: {
      flowers: Prisma.$flowersPayload<ExtArgs>
      flowers_bouquets: Prisma.$flowers_bouquetsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      flower_id: number
      flower_bouquet_id: number
    }, ExtArgs["result"]["flowers_and_flowers_bouquets"]>
    composites: {}
  }

  type flowers_and_flowers_bouquetsGetPayload<S extends boolean | null | undefined | flowers_and_flowers_bouquetsDefaultArgs> = $Result.GetResult<Prisma.$flowers_and_flowers_bouquetsPayload, S>

  type flowers_and_flowers_bouquetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<flowers_and_flowers_bouquetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Flowers_and_flowers_bouquetsCountAggregateInputType | true
    }

  export interface flowers_and_flowers_bouquetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['flowers_and_flowers_bouquets'], meta: { name: 'flowers_and_flowers_bouquets' } }
    /**
     * Find zero or one Flowers_and_flowers_bouquets that matches the filter.
     * @param {flowers_and_flowers_bouquetsFindUniqueArgs} args - Arguments to find a Flowers_and_flowers_bouquets
     * @example
     * // Get one Flowers_and_flowers_bouquets
     * const flowers_and_flowers_bouquets = await prisma.flowers_and_flowers_bouquets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends flowers_and_flowers_bouquetsFindUniqueArgs>(args: SelectSubset<T, flowers_and_flowers_bouquetsFindUniqueArgs<ExtArgs>>): Prisma__flowers_and_flowers_bouquetsClient<$Result.GetResult<Prisma.$flowers_and_flowers_bouquetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flowers_and_flowers_bouquets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {flowers_and_flowers_bouquetsFindUniqueOrThrowArgs} args - Arguments to find a Flowers_and_flowers_bouquets
     * @example
     * // Get one Flowers_and_flowers_bouquets
     * const flowers_and_flowers_bouquets = await prisma.flowers_and_flowers_bouquets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends flowers_and_flowers_bouquetsFindUniqueOrThrowArgs>(args: SelectSubset<T, flowers_and_flowers_bouquetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__flowers_and_flowers_bouquetsClient<$Result.GetResult<Prisma.$flowers_and_flowers_bouquetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowers_and_flowers_bouquets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_and_flowers_bouquetsFindFirstArgs} args - Arguments to find a Flowers_and_flowers_bouquets
     * @example
     * // Get one Flowers_and_flowers_bouquets
     * const flowers_and_flowers_bouquets = await prisma.flowers_and_flowers_bouquets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends flowers_and_flowers_bouquetsFindFirstArgs>(args?: SelectSubset<T, flowers_and_flowers_bouquetsFindFirstArgs<ExtArgs>>): Prisma__flowers_and_flowers_bouquetsClient<$Result.GetResult<Prisma.$flowers_and_flowers_bouquetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowers_and_flowers_bouquets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_and_flowers_bouquetsFindFirstOrThrowArgs} args - Arguments to find a Flowers_and_flowers_bouquets
     * @example
     * // Get one Flowers_and_flowers_bouquets
     * const flowers_and_flowers_bouquets = await prisma.flowers_and_flowers_bouquets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends flowers_and_flowers_bouquetsFindFirstOrThrowArgs>(args?: SelectSubset<T, flowers_and_flowers_bouquetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__flowers_and_flowers_bouquetsClient<$Result.GetResult<Prisma.$flowers_and_flowers_bouquetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flowers_and_flowers_bouquets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_and_flowers_bouquetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flowers_and_flowers_bouquets
     * const flowers_and_flowers_bouquets = await prisma.flowers_and_flowers_bouquets.findMany()
     * 
     * // Get first 10 Flowers_and_flowers_bouquets
     * const flowers_and_flowers_bouquets = await prisma.flowers_and_flowers_bouquets.findMany({ take: 10 })
     * 
     * // Only select the `flower_id`
     * const flowers_and_flowers_bouquetsWithFlower_idOnly = await prisma.flowers_and_flowers_bouquets.findMany({ select: { flower_id: true } })
     * 
     */
    findMany<T extends flowers_and_flowers_bouquetsFindManyArgs>(args?: SelectSubset<T, flowers_and_flowers_bouquetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_and_flowers_bouquetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flowers_and_flowers_bouquets.
     * @param {flowers_and_flowers_bouquetsCreateArgs} args - Arguments to create a Flowers_and_flowers_bouquets.
     * @example
     * // Create one Flowers_and_flowers_bouquets
     * const Flowers_and_flowers_bouquets = await prisma.flowers_and_flowers_bouquets.create({
     *   data: {
     *     // ... data to create a Flowers_and_flowers_bouquets
     *   }
     * })
     * 
     */
    create<T extends flowers_and_flowers_bouquetsCreateArgs>(args: SelectSubset<T, flowers_and_flowers_bouquetsCreateArgs<ExtArgs>>): Prisma__flowers_and_flowers_bouquetsClient<$Result.GetResult<Prisma.$flowers_and_flowers_bouquetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flowers_and_flowers_bouquets.
     * @param {flowers_and_flowers_bouquetsCreateManyArgs} args - Arguments to create many Flowers_and_flowers_bouquets.
     * @example
     * // Create many Flowers_and_flowers_bouquets
     * const flowers_and_flowers_bouquets = await prisma.flowers_and_flowers_bouquets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends flowers_and_flowers_bouquetsCreateManyArgs>(args?: SelectSubset<T, flowers_and_flowers_bouquetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flowers_and_flowers_bouquets and returns the data saved in the database.
     * @param {flowers_and_flowers_bouquetsCreateManyAndReturnArgs} args - Arguments to create many Flowers_and_flowers_bouquets.
     * @example
     * // Create many Flowers_and_flowers_bouquets
     * const flowers_and_flowers_bouquets = await prisma.flowers_and_flowers_bouquets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flowers_and_flowers_bouquets and only return the `flower_id`
     * const flowers_and_flowers_bouquetsWithFlower_idOnly = await prisma.flowers_and_flowers_bouquets.createManyAndReturn({
     *   select: { flower_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends flowers_and_flowers_bouquetsCreateManyAndReturnArgs>(args?: SelectSubset<T, flowers_and_flowers_bouquetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_and_flowers_bouquetsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flowers_and_flowers_bouquets.
     * @param {flowers_and_flowers_bouquetsDeleteArgs} args - Arguments to delete one Flowers_and_flowers_bouquets.
     * @example
     * // Delete one Flowers_and_flowers_bouquets
     * const Flowers_and_flowers_bouquets = await prisma.flowers_and_flowers_bouquets.delete({
     *   where: {
     *     // ... filter to delete one Flowers_and_flowers_bouquets
     *   }
     * })
     * 
     */
    delete<T extends flowers_and_flowers_bouquetsDeleteArgs>(args: SelectSubset<T, flowers_and_flowers_bouquetsDeleteArgs<ExtArgs>>): Prisma__flowers_and_flowers_bouquetsClient<$Result.GetResult<Prisma.$flowers_and_flowers_bouquetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flowers_and_flowers_bouquets.
     * @param {flowers_and_flowers_bouquetsUpdateArgs} args - Arguments to update one Flowers_and_flowers_bouquets.
     * @example
     * // Update one Flowers_and_flowers_bouquets
     * const flowers_and_flowers_bouquets = await prisma.flowers_and_flowers_bouquets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends flowers_and_flowers_bouquetsUpdateArgs>(args: SelectSubset<T, flowers_and_flowers_bouquetsUpdateArgs<ExtArgs>>): Prisma__flowers_and_flowers_bouquetsClient<$Result.GetResult<Prisma.$flowers_and_flowers_bouquetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flowers_and_flowers_bouquets.
     * @param {flowers_and_flowers_bouquetsDeleteManyArgs} args - Arguments to filter Flowers_and_flowers_bouquets to delete.
     * @example
     * // Delete a few Flowers_and_flowers_bouquets
     * const { count } = await prisma.flowers_and_flowers_bouquets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends flowers_and_flowers_bouquetsDeleteManyArgs>(args?: SelectSubset<T, flowers_and_flowers_bouquetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowers_and_flowers_bouquets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_and_flowers_bouquetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flowers_and_flowers_bouquets
     * const flowers_and_flowers_bouquets = await prisma.flowers_and_flowers_bouquets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends flowers_and_flowers_bouquetsUpdateManyArgs>(args: SelectSubset<T, flowers_and_flowers_bouquetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowers_and_flowers_bouquets and returns the data updated in the database.
     * @param {flowers_and_flowers_bouquetsUpdateManyAndReturnArgs} args - Arguments to update many Flowers_and_flowers_bouquets.
     * @example
     * // Update many Flowers_and_flowers_bouquets
     * const flowers_and_flowers_bouquets = await prisma.flowers_and_flowers_bouquets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flowers_and_flowers_bouquets and only return the `flower_id`
     * const flowers_and_flowers_bouquetsWithFlower_idOnly = await prisma.flowers_and_flowers_bouquets.updateManyAndReturn({
     *   select: { flower_id: true },
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
    updateManyAndReturn<T extends flowers_and_flowers_bouquetsUpdateManyAndReturnArgs>(args: SelectSubset<T, flowers_and_flowers_bouquetsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_and_flowers_bouquetsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flowers_and_flowers_bouquets.
     * @param {flowers_and_flowers_bouquetsUpsertArgs} args - Arguments to update or create a Flowers_and_flowers_bouquets.
     * @example
     * // Update or create a Flowers_and_flowers_bouquets
     * const flowers_and_flowers_bouquets = await prisma.flowers_and_flowers_bouquets.upsert({
     *   create: {
     *     // ... data to create a Flowers_and_flowers_bouquets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flowers_and_flowers_bouquets we want to update
     *   }
     * })
     */
    upsert<T extends flowers_and_flowers_bouquetsUpsertArgs>(args: SelectSubset<T, flowers_and_flowers_bouquetsUpsertArgs<ExtArgs>>): Prisma__flowers_and_flowers_bouquetsClient<$Result.GetResult<Prisma.$flowers_and_flowers_bouquetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flowers_and_flowers_bouquets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_and_flowers_bouquetsCountArgs} args - Arguments to filter Flowers_and_flowers_bouquets to count.
     * @example
     * // Count the number of Flowers_and_flowers_bouquets
     * const count = await prisma.flowers_and_flowers_bouquets.count({
     *   where: {
     *     // ... the filter for the Flowers_and_flowers_bouquets we want to count
     *   }
     * })
    **/
    count<T extends flowers_and_flowers_bouquetsCountArgs>(
      args?: Subset<T, flowers_and_flowers_bouquetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Flowers_and_flowers_bouquetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flowers_and_flowers_bouquets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Flowers_and_flowers_bouquetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Flowers_and_flowers_bouquetsAggregateArgs>(args: Subset<T, Flowers_and_flowers_bouquetsAggregateArgs>): Prisma.PrismaPromise<GetFlowers_and_flowers_bouquetsAggregateType<T>>

    /**
     * Group by Flowers_and_flowers_bouquets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_and_flowers_bouquetsGroupByArgs} args - Group by arguments.
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
      T extends flowers_and_flowers_bouquetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: flowers_and_flowers_bouquetsGroupByArgs['orderBy'] }
        : { orderBy?: flowers_and_flowers_bouquetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, flowers_and_flowers_bouquetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowers_and_flowers_bouquetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the flowers_and_flowers_bouquets model
   */
  readonly fields: flowers_and_flowers_bouquetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for flowers_and_flowers_bouquets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__flowers_and_flowers_bouquetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flowers<T extends flowersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, flowersDefaultArgs<ExtArgs>>): Prisma__flowersClient<$Result.GetResult<Prisma.$flowersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flowers_bouquets<T extends flowers_bouquetsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, flowers_bouquetsDefaultArgs<ExtArgs>>): Prisma__flowers_bouquetsClient<$Result.GetResult<Prisma.$flowers_bouquetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the flowers_and_flowers_bouquets model
   */
  interface flowers_and_flowers_bouquetsFieldRefs {
    readonly flower_id: FieldRef<"flowers_and_flowers_bouquets", 'Int'>
    readonly flower_bouquet_id: FieldRef<"flowers_and_flowers_bouquets", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * flowers_and_flowers_bouquets findUnique
   */
  export type flowers_and_flowers_bouquetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_bouquets
     */
    select?: flowers_and_flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_bouquets
     */
    omit?: flowers_and_flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_bouquetsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_and_flowers_bouquets to fetch.
     */
    where: flowers_and_flowers_bouquetsWhereUniqueInput
  }

  /**
   * flowers_and_flowers_bouquets findUniqueOrThrow
   */
  export type flowers_and_flowers_bouquetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_bouquets
     */
    select?: flowers_and_flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_bouquets
     */
    omit?: flowers_and_flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_bouquetsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_and_flowers_bouquets to fetch.
     */
    where: flowers_and_flowers_bouquetsWhereUniqueInput
  }

  /**
   * flowers_and_flowers_bouquets findFirst
   */
  export type flowers_and_flowers_bouquetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_bouquets
     */
    select?: flowers_and_flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_bouquets
     */
    omit?: flowers_and_flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_bouquetsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_and_flowers_bouquets to fetch.
     */
    where?: flowers_and_flowers_bouquetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_and_flowers_bouquets to fetch.
     */
    orderBy?: flowers_and_flowers_bouquetsOrderByWithRelationInput | flowers_and_flowers_bouquetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flowers_and_flowers_bouquets.
     */
    cursor?: flowers_and_flowers_bouquetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_and_flowers_bouquets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_and_flowers_bouquets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flowers_and_flowers_bouquets.
     */
    distinct?: Flowers_and_flowers_bouquetsScalarFieldEnum | Flowers_and_flowers_bouquetsScalarFieldEnum[]
  }

  /**
   * flowers_and_flowers_bouquets findFirstOrThrow
   */
  export type flowers_and_flowers_bouquetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_bouquets
     */
    select?: flowers_and_flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_bouquets
     */
    omit?: flowers_and_flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_bouquetsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_and_flowers_bouquets to fetch.
     */
    where?: flowers_and_flowers_bouquetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_and_flowers_bouquets to fetch.
     */
    orderBy?: flowers_and_flowers_bouquetsOrderByWithRelationInput | flowers_and_flowers_bouquetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flowers_and_flowers_bouquets.
     */
    cursor?: flowers_and_flowers_bouquetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_and_flowers_bouquets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_and_flowers_bouquets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flowers_and_flowers_bouquets.
     */
    distinct?: Flowers_and_flowers_bouquetsScalarFieldEnum | Flowers_and_flowers_bouquetsScalarFieldEnum[]
  }

  /**
   * flowers_and_flowers_bouquets findMany
   */
  export type flowers_and_flowers_bouquetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_bouquets
     */
    select?: flowers_and_flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_bouquets
     */
    omit?: flowers_and_flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_bouquetsInclude<ExtArgs> | null
    /**
     * Filter, which flowers_and_flowers_bouquets to fetch.
     */
    where?: flowers_and_flowers_bouquetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_and_flowers_bouquets to fetch.
     */
    orderBy?: flowers_and_flowers_bouquetsOrderByWithRelationInput | flowers_and_flowers_bouquetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing flowers_and_flowers_bouquets.
     */
    cursor?: flowers_and_flowers_bouquetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_and_flowers_bouquets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_and_flowers_bouquets.
     */
    skip?: number
    distinct?: Flowers_and_flowers_bouquetsScalarFieldEnum | Flowers_and_flowers_bouquetsScalarFieldEnum[]
  }

  /**
   * flowers_and_flowers_bouquets create
   */
  export type flowers_and_flowers_bouquetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_bouquets
     */
    select?: flowers_and_flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_bouquets
     */
    omit?: flowers_and_flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_bouquetsInclude<ExtArgs> | null
    /**
     * The data needed to create a flowers_and_flowers_bouquets.
     */
    data: XOR<flowers_and_flowers_bouquetsCreateInput, flowers_and_flowers_bouquetsUncheckedCreateInput>
  }

  /**
   * flowers_and_flowers_bouquets createMany
   */
  export type flowers_and_flowers_bouquetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many flowers_and_flowers_bouquets.
     */
    data: flowers_and_flowers_bouquetsCreateManyInput | flowers_and_flowers_bouquetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * flowers_and_flowers_bouquets createManyAndReturn
   */
  export type flowers_and_flowers_bouquetsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_bouquets
     */
    select?: flowers_and_flowers_bouquetsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_bouquets
     */
    omit?: flowers_and_flowers_bouquetsOmit<ExtArgs> | null
    /**
     * The data used to create many flowers_and_flowers_bouquets.
     */
    data: flowers_and_flowers_bouquetsCreateManyInput | flowers_and_flowers_bouquetsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_bouquetsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * flowers_and_flowers_bouquets update
   */
  export type flowers_and_flowers_bouquetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_bouquets
     */
    select?: flowers_and_flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_bouquets
     */
    omit?: flowers_and_flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_bouquetsInclude<ExtArgs> | null
    /**
     * The data needed to update a flowers_and_flowers_bouquets.
     */
    data: XOR<flowers_and_flowers_bouquetsUpdateInput, flowers_and_flowers_bouquetsUncheckedUpdateInput>
    /**
     * Choose, which flowers_and_flowers_bouquets to update.
     */
    where: flowers_and_flowers_bouquetsWhereUniqueInput
  }

  /**
   * flowers_and_flowers_bouquets updateMany
   */
  export type flowers_and_flowers_bouquetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update flowers_and_flowers_bouquets.
     */
    data: XOR<flowers_and_flowers_bouquetsUpdateManyMutationInput, flowers_and_flowers_bouquetsUncheckedUpdateManyInput>
    /**
     * Filter which flowers_and_flowers_bouquets to update
     */
    where?: flowers_and_flowers_bouquetsWhereInput
    /**
     * Limit how many flowers_and_flowers_bouquets to update.
     */
    limit?: number
  }

  /**
   * flowers_and_flowers_bouquets updateManyAndReturn
   */
  export type flowers_and_flowers_bouquetsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_bouquets
     */
    select?: flowers_and_flowers_bouquetsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_bouquets
     */
    omit?: flowers_and_flowers_bouquetsOmit<ExtArgs> | null
    /**
     * The data used to update flowers_and_flowers_bouquets.
     */
    data: XOR<flowers_and_flowers_bouquetsUpdateManyMutationInput, flowers_and_flowers_bouquetsUncheckedUpdateManyInput>
    /**
     * Filter which flowers_and_flowers_bouquets to update
     */
    where?: flowers_and_flowers_bouquetsWhereInput
    /**
     * Limit how many flowers_and_flowers_bouquets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_bouquetsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * flowers_and_flowers_bouquets upsert
   */
  export type flowers_and_flowers_bouquetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_bouquets
     */
    select?: flowers_and_flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_bouquets
     */
    omit?: flowers_and_flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_bouquetsInclude<ExtArgs> | null
    /**
     * The filter to search for the flowers_and_flowers_bouquets to update in case it exists.
     */
    where: flowers_and_flowers_bouquetsWhereUniqueInput
    /**
     * In case the flowers_and_flowers_bouquets found by the `where` argument doesn't exist, create a new flowers_and_flowers_bouquets with this data.
     */
    create: XOR<flowers_and_flowers_bouquetsCreateInput, flowers_and_flowers_bouquetsUncheckedCreateInput>
    /**
     * In case the flowers_and_flowers_bouquets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<flowers_and_flowers_bouquetsUpdateInput, flowers_and_flowers_bouquetsUncheckedUpdateInput>
  }

  /**
   * flowers_and_flowers_bouquets delete
   */
  export type flowers_and_flowers_bouquetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_bouquets
     */
    select?: flowers_and_flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_bouquets
     */
    omit?: flowers_and_flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_bouquetsInclude<ExtArgs> | null
    /**
     * Filter which flowers_and_flowers_bouquets to delete.
     */
    where: flowers_and_flowers_bouquetsWhereUniqueInput
  }

  /**
   * flowers_and_flowers_bouquets deleteMany
   */
  export type flowers_and_flowers_bouquetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flowers_and_flowers_bouquets to delete
     */
    where?: flowers_and_flowers_bouquetsWhereInput
    /**
     * Limit how many flowers_and_flowers_bouquets to delete.
     */
    limit?: number
  }

  /**
   * flowers_and_flowers_bouquets without action
   */
  export type flowers_and_flowers_bouquetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_flowers_bouquets
     */
    select?: flowers_and_flowers_bouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_flowers_bouquets
     */
    omit?: flowers_and_flowers_bouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_flowers_bouquetsInclude<ExtArgs> | null
  }


  /**
   * Model flowers_and_files
   */

  export type AggregateFlowers_and_files = {
    _count: Flowers_and_filesCountAggregateOutputType | null
    _avg: Flowers_and_filesAvgAggregateOutputType | null
    _sum: Flowers_and_filesSumAggregateOutputType | null
    _min: Flowers_and_filesMinAggregateOutputType | null
    _max: Flowers_and_filesMaxAggregateOutputType | null
  }

  export type Flowers_and_filesAvgAggregateOutputType = {
    flower_id: number | null
  }

  export type Flowers_and_filesSumAggregateOutputType = {
    flower_id: number | null
  }

  export type Flowers_and_filesMinAggregateOutputType = {
    flower_id: number | null
    public_file_name: string | null
  }

  export type Flowers_and_filesMaxAggregateOutputType = {
    flower_id: number | null
    public_file_name: string | null
  }

  export type Flowers_and_filesCountAggregateOutputType = {
    flower_id: number
    public_file_name: number
    _all: number
  }


  export type Flowers_and_filesAvgAggregateInputType = {
    flower_id?: true
  }

  export type Flowers_and_filesSumAggregateInputType = {
    flower_id?: true
  }

  export type Flowers_and_filesMinAggregateInputType = {
    flower_id?: true
    public_file_name?: true
  }

  export type Flowers_and_filesMaxAggregateInputType = {
    flower_id?: true
    public_file_name?: true
  }

  export type Flowers_and_filesCountAggregateInputType = {
    flower_id?: true
    public_file_name?: true
    _all?: true
  }

  export type Flowers_and_filesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flowers_and_files to aggregate.
     */
    where?: flowers_and_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_and_files to fetch.
     */
    orderBy?: flowers_and_filesOrderByWithRelationInput | flowers_and_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: flowers_and_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_and_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_and_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned flowers_and_files
    **/
    _count?: true | Flowers_and_filesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Flowers_and_filesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Flowers_and_filesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Flowers_and_filesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Flowers_and_filesMaxAggregateInputType
  }

  export type GetFlowers_and_filesAggregateType<T extends Flowers_and_filesAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowers_and_files]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowers_and_files[P]>
      : GetScalarType<T[P], AggregateFlowers_and_files[P]>
  }




  export type flowers_and_filesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flowers_and_filesWhereInput
    orderBy?: flowers_and_filesOrderByWithAggregationInput | flowers_and_filesOrderByWithAggregationInput[]
    by: Flowers_and_filesScalarFieldEnum[] | Flowers_and_filesScalarFieldEnum
    having?: flowers_and_filesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Flowers_and_filesCountAggregateInputType | true
    _avg?: Flowers_and_filesAvgAggregateInputType
    _sum?: Flowers_and_filesSumAggregateInputType
    _min?: Flowers_and_filesMinAggregateInputType
    _max?: Flowers_and_filesMaxAggregateInputType
  }

  export type Flowers_and_filesGroupByOutputType = {
    flower_id: number
    public_file_name: string
    _count: Flowers_and_filesCountAggregateOutputType | null
    _avg: Flowers_and_filesAvgAggregateOutputType | null
    _sum: Flowers_and_filesSumAggregateOutputType | null
    _min: Flowers_and_filesMinAggregateOutputType | null
    _max: Flowers_and_filesMaxAggregateOutputType | null
  }

  type GetFlowers_and_filesGroupByPayload<T extends flowers_and_filesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Flowers_and_filesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Flowers_and_filesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Flowers_and_filesGroupByOutputType[P]>
            : GetScalarType<T[P], Flowers_and_filesGroupByOutputType[P]>
        }
      >
    >


  export type flowers_and_filesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flower_id?: boolean
    public_file_name?: boolean
    flowers?: boolean | flowersDefaultArgs<ExtArgs>
    public_files?: boolean | public_filesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers_and_files"]>

  export type flowers_and_filesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flower_id?: boolean
    public_file_name?: boolean
    flowers?: boolean | flowersDefaultArgs<ExtArgs>
    public_files?: boolean | public_filesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers_and_files"]>

  export type flowers_and_filesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flower_id?: boolean
    public_file_name?: boolean
    flowers?: boolean | flowersDefaultArgs<ExtArgs>
    public_files?: boolean | public_filesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers_and_files"]>

  export type flowers_and_filesSelectScalar = {
    flower_id?: boolean
    public_file_name?: boolean
  }

  export type flowers_and_filesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"flower_id" | "public_file_name", ExtArgs["result"]["flowers_and_files"]>
  export type flowers_and_filesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | flowersDefaultArgs<ExtArgs>
    public_files?: boolean | public_filesDefaultArgs<ExtArgs>
  }
  export type flowers_and_filesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | flowersDefaultArgs<ExtArgs>
    public_files?: boolean | public_filesDefaultArgs<ExtArgs>
  }
  export type flowers_and_filesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | flowersDefaultArgs<ExtArgs>
    public_files?: boolean | public_filesDefaultArgs<ExtArgs>
  }

  export type $flowers_and_filesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "flowers_and_files"
    objects: {
      flowers: Prisma.$flowersPayload<ExtArgs>
      public_files: Prisma.$public_filesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      flower_id: number
      public_file_name: string
    }, ExtArgs["result"]["flowers_and_files"]>
    composites: {}
  }

  type flowers_and_filesGetPayload<S extends boolean | null | undefined | flowers_and_filesDefaultArgs> = $Result.GetResult<Prisma.$flowers_and_filesPayload, S>

  type flowers_and_filesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<flowers_and_filesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Flowers_and_filesCountAggregateInputType | true
    }

  export interface flowers_and_filesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['flowers_and_files'], meta: { name: 'flowers_and_files' } }
    /**
     * Find zero or one Flowers_and_files that matches the filter.
     * @param {flowers_and_filesFindUniqueArgs} args - Arguments to find a Flowers_and_files
     * @example
     * // Get one Flowers_and_files
     * const flowers_and_files = await prisma.flowers_and_files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends flowers_and_filesFindUniqueArgs>(args: SelectSubset<T, flowers_and_filesFindUniqueArgs<ExtArgs>>): Prisma__flowers_and_filesClient<$Result.GetResult<Prisma.$flowers_and_filesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flowers_and_files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {flowers_and_filesFindUniqueOrThrowArgs} args - Arguments to find a Flowers_and_files
     * @example
     * // Get one Flowers_and_files
     * const flowers_and_files = await prisma.flowers_and_files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends flowers_and_filesFindUniqueOrThrowArgs>(args: SelectSubset<T, flowers_and_filesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__flowers_and_filesClient<$Result.GetResult<Prisma.$flowers_and_filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowers_and_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_and_filesFindFirstArgs} args - Arguments to find a Flowers_and_files
     * @example
     * // Get one Flowers_and_files
     * const flowers_and_files = await prisma.flowers_and_files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends flowers_and_filesFindFirstArgs>(args?: SelectSubset<T, flowers_and_filesFindFirstArgs<ExtArgs>>): Prisma__flowers_and_filesClient<$Result.GetResult<Prisma.$flowers_and_filesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowers_and_files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_and_filesFindFirstOrThrowArgs} args - Arguments to find a Flowers_and_files
     * @example
     * // Get one Flowers_and_files
     * const flowers_and_files = await prisma.flowers_and_files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends flowers_and_filesFindFirstOrThrowArgs>(args?: SelectSubset<T, flowers_and_filesFindFirstOrThrowArgs<ExtArgs>>): Prisma__flowers_and_filesClient<$Result.GetResult<Prisma.$flowers_and_filesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flowers_and_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_and_filesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flowers_and_files
     * const flowers_and_files = await prisma.flowers_and_files.findMany()
     * 
     * // Get first 10 Flowers_and_files
     * const flowers_and_files = await prisma.flowers_and_files.findMany({ take: 10 })
     * 
     * // Only select the `flower_id`
     * const flowers_and_filesWithFlower_idOnly = await prisma.flowers_and_files.findMany({ select: { flower_id: true } })
     * 
     */
    findMany<T extends flowers_and_filesFindManyArgs>(args?: SelectSubset<T, flowers_and_filesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_and_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flowers_and_files.
     * @param {flowers_and_filesCreateArgs} args - Arguments to create a Flowers_and_files.
     * @example
     * // Create one Flowers_and_files
     * const Flowers_and_files = await prisma.flowers_and_files.create({
     *   data: {
     *     // ... data to create a Flowers_and_files
     *   }
     * })
     * 
     */
    create<T extends flowers_and_filesCreateArgs>(args: SelectSubset<T, flowers_and_filesCreateArgs<ExtArgs>>): Prisma__flowers_and_filesClient<$Result.GetResult<Prisma.$flowers_and_filesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flowers_and_files.
     * @param {flowers_and_filesCreateManyArgs} args - Arguments to create many Flowers_and_files.
     * @example
     * // Create many Flowers_and_files
     * const flowers_and_files = await prisma.flowers_and_files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends flowers_and_filesCreateManyArgs>(args?: SelectSubset<T, flowers_and_filesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flowers_and_files and returns the data saved in the database.
     * @param {flowers_and_filesCreateManyAndReturnArgs} args - Arguments to create many Flowers_and_files.
     * @example
     * // Create many Flowers_and_files
     * const flowers_and_files = await prisma.flowers_and_files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flowers_and_files and only return the `flower_id`
     * const flowers_and_filesWithFlower_idOnly = await prisma.flowers_and_files.createManyAndReturn({
     *   select: { flower_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends flowers_and_filesCreateManyAndReturnArgs>(args?: SelectSubset<T, flowers_and_filesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_and_filesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flowers_and_files.
     * @param {flowers_and_filesDeleteArgs} args - Arguments to delete one Flowers_and_files.
     * @example
     * // Delete one Flowers_and_files
     * const Flowers_and_files = await prisma.flowers_and_files.delete({
     *   where: {
     *     // ... filter to delete one Flowers_and_files
     *   }
     * })
     * 
     */
    delete<T extends flowers_and_filesDeleteArgs>(args: SelectSubset<T, flowers_and_filesDeleteArgs<ExtArgs>>): Prisma__flowers_and_filesClient<$Result.GetResult<Prisma.$flowers_and_filesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flowers_and_files.
     * @param {flowers_and_filesUpdateArgs} args - Arguments to update one Flowers_and_files.
     * @example
     * // Update one Flowers_and_files
     * const flowers_and_files = await prisma.flowers_and_files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends flowers_and_filesUpdateArgs>(args: SelectSubset<T, flowers_and_filesUpdateArgs<ExtArgs>>): Prisma__flowers_and_filesClient<$Result.GetResult<Prisma.$flowers_and_filesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flowers_and_files.
     * @param {flowers_and_filesDeleteManyArgs} args - Arguments to filter Flowers_and_files to delete.
     * @example
     * // Delete a few Flowers_and_files
     * const { count } = await prisma.flowers_and_files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends flowers_and_filesDeleteManyArgs>(args?: SelectSubset<T, flowers_and_filesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowers_and_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_and_filesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flowers_and_files
     * const flowers_and_files = await prisma.flowers_and_files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends flowers_and_filesUpdateManyArgs>(args: SelectSubset<T, flowers_and_filesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowers_and_files and returns the data updated in the database.
     * @param {flowers_and_filesUpdateManyAndReturnArgs} args - Arguments to update many Flowers_and_files.
     * @example
     * // Update many Flowers_and_files
     * const flowers_and_files = await prisma.flowers_and_files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flowers_and_files and only return the `flower_id`
     * const flowers_and_filesWithFlower_idOnly = await prisma.flowers_and_files.updateManyAndReturn({
     *   select: { flower_id: true },
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
    updateManyAndReturn<T extends flowers_and_filesUpdateManyAndReturnArgs>(args: SelectSubset<T, flowers_and_filesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flowers_and_filesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flowers_and_files.
     * @param {flowers_and_filesUpsertArgs} args - Arguments to update or create a Flowers_and_files.
     * @example
     * // Update or create a Flowers_and_files
     * const flowers_and_files = await prisma.flowers_and_files.upsert({
     *   create: {
     *     // ... data to create a Flowers_and_files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flowers_and_files we want to update
     *   }
     * })
     */
    upsert<T extends flowers_and_filesUpsertArgs>(args: SelectSubset<T, flowers_and_filesUpsertArgs<ExtArgs>>): Prisma__flowers_and_filesClient<$Result.GetResult<Prisma.$flowers_and_filesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flowers_and_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_and_filesCountArgs} args - Arguments to filter Flowers_and_files to count.
     * @example
     * // Count the number of Flowers_and_files
     * const count = await prisma.flowers_and_files.count({
     *   where: {
     *     // ... the filter for the Flowers_and_files we want to count
     *   }
     * })
    **/
    count<T extends flowers_and_filesCountArgs>(
      args?: Subset<T, flowers_and_filesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Flowers_and_filesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flowers_and_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Flowers_and_filesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Flowers_and_filesAggregateArgs>(args: Subset<T, Flowers_and_filesAggregateArgs>): Prisma.PrismaPromise<GetFlowers_and_filesAggregateType<T>>

    /**
     * Group by Flowers_and_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flowers_and_filesGroupByArgs} args - Group by arguments.
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
      T extends flowers_and_filesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: flowers_and_filesGroupByArgs['orderBy'] }
        : { orderBy?: flowers_and_filesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, flowers_and_filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowers_and_filesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the flowers_and_files model
   */
  readonly fields: flowers_and_filesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for flowers_and_files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__flowers_and_filesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flowers<T extends flowersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, flowersDefaultArgs<ExtArgs>>): Prisma__flowersClient<$Result.GetResult<Prisma.$flowersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    public_files<T extends public_filesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, public_filesDefaultArgs<ExtArgs>>): Prisma__public_filesClient<$Result.GetResult<Prisma.$public_filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the flowers_and_files model
   */
  interface flowers_and_filesFieldRefs {
    readonly flower_id: FieldRef<"flowers_and_files", 'Int'>
    readonly public_file_name: FieldRef<"flowers_and_files", 'String'>
  }
    

  // Custom InputTypes
  /**
   * flowers_and_files findUnique
   */
  export type flowers_and_filesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_files
     */
    select?: flowers_and_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_files
     */
    omit?: flowers_and_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_filesInclude<ExtArgs> | null
    /**
     * Filter, which flowers_and_files to fetch.
     */
    where: flowers_and_filesWhereUniqueInput
  }

  /**
   * flowers_and_files findUniqueOrThrow
   */
  export type flowers_and_filesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_files
     */
    select?: flowers_and_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_files
     */
    omit?: flowers_and_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_filesInclude<ExtArgs> | null
    /**
     * Filter, which flowers_and_files to fetch.
     */
    where: flowers_and_filesWhereUniqueInput
  }

  /**
   * flowers_and_files findFirst
   */
  export type flowers_and_filesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_files
     */
    select?: flowers_and_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_files
     */
    omit?: flowers_and_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_filesInclude<ExtArgs> | null
    /**
     * Filter, which flowers_and_files to fetch.
     */
    where?: flowers_and_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_and_files to fetch.
     */
    orderBy?: flowers_and_filesOrderByWithRelationInput | flowers_and_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flowers_and_files.
     */
    cursor?: flowers_and_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_and_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_and_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flowers_and_files.
     */
    distinct?: Flowers_and_filesScalarFieldEnum | Flowers_and_filesScalarFieldEnum[]
  }

  /**
   * flowers_and_files findFirstOrThrow
   */
  export type flowers_and_filesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_files
     */
    select?: flowers_and_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_files
     */
    omit?: flowers_and_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_filesInclude<ExtArgs> | null
    /**
     * Filter, which flowers_and_files to fetch.
     */
    where?: flowers_and_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_and_files to fetch.
     */
    orderBy?: flowers_and_filesOrderByWithRelationInput | flowers_and_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flowers_and_files.
     */
    cursor?: flowers_and_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_and_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_and_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flowers_and_files.
     */
    distinct?: Flowers_and_filesScalarFieldEnum | Flowers_and_filesScalarFieldEnum[]
  }

  /**
   * flowers_and_files findMany
   */
  export type flowers_and_filesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_files
     */
    select?: flowers_and_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_files
     */
    omit?: flowers_and_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_filesInclude<ExtArgs> | null
    /**
     * Filter, which flowers_and_files to fetch.
     */
    where?: flowers_and_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flowers_and_files to fetch.
     */
    orderBy?: flowers_and_filesOrderByWithRelationInput | flowers_and_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing flowers_and_files.
     */
    cursor?: flowers_and_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flowers_and_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flowers_and_files.
     */
    skip?: number
    distinct?: Flowers_and_filesScalarFieldEnum | Flowers_and_filesScalarFieldEnum[]
  }

  /**
   * flowers_and_files create
   */
  export type flowers_and_filesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_files
     */
    select?: flowers_and_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_files
     */
    omit?: flowers_and_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_filesInclude<ExtArgs> | null
    /**
     * The data needed to create a flowers_and_files.
     */
    data: XOR<flowers_and_filesCreateInput, flowers_and_filesUncheckedCreateInput>
  }

  /**
   * flowers_and_files createMany
   */
  export type flowers_and_filesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many flowers_and_files.
     */
    data: flowers_and_filesCreateManyInput | flowers_and_filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * flowers_and_files createManyAndReturn
   */
  export type flowers_and_filesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_files
     */
    select?: flowers_and_filesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_files
     */
    omit?: flowers_and_filesOmit<ExtArgs> | null
    /**
     * The data used to create many flowers_and_files.
     */
    data: flowers_and_filesCreateManyInput | flowers_and_filesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_filesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * flowers_and_files update
   */
  export type flowers_and_filesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_files
     */
    select?: flowers_and_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_files
     */
    omit?: flowers_and_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_filesInclude<ExtArgs> | null
    /**
     * The data needed to update a flowers_and_files.
     */
    data: XOR<flowers_and_filesUpdateInput, flowers_and_filesUncheckedUpdateInput>
    /**
     * Choose, which flowers_and_files to update.
     */
    where: flowers_and_filesWhereUniqueInput
  }

  /**
   * flowers_and_files updateMany
   */
  export type flowers_and_filesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update flowers_and_files.
     */
    data: XOR<flowers_and_filesUpdateManyMutationInput, flowers_and_filesUncheckedUpdateManyInput>
    /**
     * Filter which flowers_and_files to update
     */
    where?: flowers_and_filesWhereInput
    /**
     * Limit how many flowers_and_files to update.
     */
    limit?: number
  }

  /**
   * flowers_and_files updateManyAndReturn
   */
  export type flowers_and_filesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_files
     */
    select?: flowers_and_filesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_files
     */
    omit?: flowers_and_filesOmit<ExtArgs> | null
    /**
     * The data used to update flowers_and_files.
     */
    data: XOR<flowers_and_filesUpdateManyMutationInput, flowers_and_filesUncheckedUpdateManyInput>
    /**
     * Filter which flowers_and_files to update
     */
    where?: flowers_and_filesWhereInput
    /**
     * Limit how many flowers_and_files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_filesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * flowers_and_files upsert
   */
  export type flowers_and_filesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_files
     */
    select?: flowers_and_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_files
     */
    omit?: flowers_and_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_filesInclude<ExtArgs> | null
    /**
     * The filter to search for the flowers_and_files to update in case it exists.
     */
    where: flowers_and_filesWhereUniqueInput
    /**
     * In case the flowers_and_files found by the `where` argument doesn't exist, create a new flowers_and_files with this data.
     */
    create: XOR<flowers_and_filesCreateInput, flowers_and_filesUncheckedCreateInput>
    /**
     * In case the flowers_and_files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<flowers_and_filesUpdateInput, flowers_and_filesUncheckedUpdateInput>
  }

  /**
   * flowers_and_files delete
   */
  export type flowers_and_filesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_files
     */
    select?: flowers_and_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_files
     */
    omit?: flowers_and_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_filesInclude<ExtArgs> | null
    /**
     * Filter which flowers_and_files to delete.
     */
    where: flowers_and_filesWhereUniqueInput
  }

  /**
   * flowers_and_files deleteMany
   */
  export type flowers_and_filesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flowers_and_files to delete
     */
    where?: flowers_and_filesWhereInput
    /**
     * Limit how many flowers_and_files to delete.
     */
    limit?: number
  }

  /**
   * flowers_and_files without action
   */
  export type flowers_and_filesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flowers_and_files
     */
    select?: flowers_and_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flowers_and_files
     */
    omit?: flowers_and_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flowers_and_filesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    email_verified: boolean | null
    name: string | null
    password: string | null
    signature: string | null
    role: string | null
    oauth: string | null
    oauth_id: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    email_verified: boolean | null
    name: string | null
    password: string | null
    signature: string | null
    role: string | null
    oauth: string | null
    oauth_id: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    email_verified: number
    name: number
    password: number
    signature: number
    role: number
    oauth: number
    oauth_id: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    email_verified?: true
    name?: true
    password?: true
    signature?: true
    role?: true
    oauth?: true
    oauth_id?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    email_verified?: true
    name?: true
    password?: true
    signature?: true
    role?: true
    oauth?: true
    oauth_id?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    email_verified?: true
    name?: true
    password?: true
    signature?: true
    role?: true
    oauth?: true
    oauth_id?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    email_verified: boolean
    name: string
    password: string | null
    signature: string | null
    role: string
    oauth: string | null
    oauth_id: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    email_verified?: boolean
    name?: boolean
    password?: boolean
    signature?: boolean
    role?: boolean
    oauth?: boolean
    oauth_id?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    email_verified?: boolean
    name?: boolean
    password?: boolean
    signature?: boolean
    role?: boolean
    oauth?: boolean
    oauth_id?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    email_verified?: boolean
    name?: boolean
    password?: boolean
    signature?: boolean
    role?: boolean
    oauth?: boolean
    oauth_id?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    email_verified?: boolean
    name?: boolean
    password?: boolean
    signature?: boolean
    role?: boolean
    oauth?: boolean
    oauth_id?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "email_verified" | "name" | "password" | "signature" | "role" | "oauth" | "oauth_id", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      email_verified: boolean
      name: string
      password: string | null
      signature: string | null
      role: string
      oauth: string | null
      oauth_id: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly email_verified: FieldRef<"users", 'Boolean'>
    readonly name: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly signature: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly oauth: FieldRef<"users", 'String'>
    readonly oauth_id: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model users_files
   */

  export type AggregateUsers_files = {
    _count: Users_filesCountAggregateOutputType | null
    _avg: Users_filesAvgAggregateOutputType | null
    _sum: Users_filesSumAggregateOutputType | null
    _min: Users_filesMinAggregateOutputType | null
    _max: Users_filesMaxAggregateOutputType | null
  }

  export type Users_filesAvgAggregateOutputType = {
    user_id: number | null
    file_id: number | null
  }

  export type Users_filesSumAggregateOutputType = {
    user_id: number | null
    file_id: number | null
  }

  export type Users_filesMinAggregateOutputType = {
    user_id: number | null
    file_id: number | null
  }

  export type Users_filesMaxAggregateOutputType = {
    user_id: number | null
    file_id: number | null
  }

  export type Users_filesCountAggregateOutputType = {
    user_id: number
    file_id: number
    _all: number
  }


  export type Users_filesAvgAggregateInputType = {
    user_id?: true
    file_id?: true
  }

  export type Users_filesSumAggregateInputType = {
    user_id?: true
    file_id?: true
  }

  export type Users_filesMinAggregateInputType = {
    user_id?: true
    file_id?: true
  }

  export type Users_filesMaxAggregateInputType = {
    user_id?: true
    file_id?: true
  }

  export type Users_filesCountAggregateInputType = {
    user_id?: true
    file_id?: true
    _all?: true
  }

  export type Users_filesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users_files to aggregate.
     */
    where?: users_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_files to fetch.
     */
    orderBy?: users_filesOrderByWithRelationInput | users_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: users_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users_files
    **/
    _count?: true | Users_filesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Users_filesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Users_filesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Users_filesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Users_filesMaxAggregateInputType
  }

  export type GetUsers_filesAggregateType<T extends Users_filesAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers_files]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers_files[P]>
      : GetScalarType<T[P], AggregateUsers_files[P]>
  }




  export type users_filesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: users_filesWhereInput
    orderBy?: users_filesOrderByWithAggregationInput | users_filesOrderByWithAggregationInput[]
    by: Users_filesScalarFieldEnum[] | Users_filesScalarFieldEnum
    having?: users_filesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Users_filesCountAggregateInputType | true
    _avg?: Users_filesAvgAggregateInputType
    _sum?: Users_filesSumAggregateInputType
    _min?: Users_filesMinAggregateInputType
    _max?: Users_filesMaxAggregateInputType
  }

  export type Users_filesGroupByOutputType = {
    user_id: number
    file_id: number
    _count: Users_filesCountAggregateOutputType | null
    _avg: Users_filesAvgAggregateOutputType | null
    _sum: Users_filesSumAggregateOutputType | null
    _min: Users_filesMinAggregateOutputType | null
    _max: Users_filesMaxAggregateOutputType | null
  }

  type GetUsers_filesGroupByPayload<T extends users_filesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Users_filesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Users_filesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Users_filesGroupByOutputType[P]>
            : GetScalarType<T[P], Users_filesGroupByOutputType[P]>
        }
      >
    >


  export type users_filesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    file_id?: boolean
  }, ExtArgs["result"]["users_files"]>

  export type users_filesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    file_id?: boolean
  }, ExtArgs["result"]["users_files"]>

  export type users_filesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    file_id?: boolean
  }, ExtArgs["result"]["users_files"]>

  export type users_filesSelectScalar = {
    user_id?: boolean
    file_id?: boolean
  }

  export type users_filesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "file_id", ExtArgs["result"]["users_files"]>

  export type $users_filesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users_files"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      file_id: number
    }, ExtArgs["result"]["users_files"]>
    composites: {}
  }

  type users_filesGetPayload<S extends boolean | null | undefined | users_filesDefaultArgs> = $Result.GetResult<Prisma.$users_filesPayload, S>

  type users_filesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<users_filesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Users_filesCountAggregateInputType | true
    }

  export interface users_filesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users_files'], meta: { name: 'users_files' } }
    /**
     * Find zero or one Users_files that matches the filter.
     * @param {users_filesFindUniqueArgs} args - Arguments to find a Users_files
     * @example
     * // Get one Users_files
     * const users_files = await prisma.users_files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends users_filesFindUniqueArgs>(args: SelectSubset<T, users_filesFindUniqueArgs<ExtArgs>>): Prisma__users_filesClient<$Result.GetResult<Prisma.$users_filesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users_files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {users_filesFindUniqueOrThrowArgs} args - Arguments to find a Users_files
     * @example
     * // Get one Users_files
     * const users_files = await prisma.users_files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends users_filesFindUniqueOrThrowArgs>(args: SelectSubset<T, users_filesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__users_filesClient<$Result.GetResult<Prisma.$users_filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_filesFindFirstArgs} args - Arguments to find a Users_files
     * @example
     * // Get one Users_files
     * const users_files = await prisma.users_files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends users_filesFindFirstArgs>(args?: SelectSubset<T, users_filesFindFirstArgs<ExtArgs>>): Prisma__users_filesClient<$Result.GetResult<Prisma.$users_filesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_filesFindFirstOrThrowArgs} args - Arguments to find a Users_files
     * @example
     * // Get one Users_files
     * const users_files = await prisma.users_files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends users_filesFindFirstOrThrowArgs>(args?: SelectSubset<T, users_filesFindFirstOrThrowArgs<ExtArgs>>): Prisma__users_filesClient<$Result.GetResult<Prisma.$users_filesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_filesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users_files
     * const users_files = await prisma.users_files.findMany()
     * 
     * // Get first 10 Users_files
     * const users_files = await prisma.users_files.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const users_filesWithUser_idOnly = await prisma.users_files.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends users_filesFindManyArgs>(args?: SelectSubset<T, users_filesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users_files.
     * @param {users_filesCreateArgs} args - Arguments to create a Users_files.
     * @example
     * // Create one Users_files
     * const Users_files = await prisma.users_files.create({
     *   data: {
     *     // ... data to create a Users_files
     *   }
     * })
     * 
     */
    create<T extends users_filesCreateArgs>(args: SelectSubset<T, users_filesCreateArgs<ExtArgs>>): Prisma__users_filesClient<$Result.GetResult<Prisma.$users_filesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users_files.
     * @param {users_filesCreateManyArgs} args - Arguments to create many Users_files.
     * @example
     * // Create many Users_files
     * const users_files = await prisma.users_files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends users_filesCreateManyArgs>(args?: SelectSubset<T, users_filesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users_files and returns the data saved in the database.
     * @param {users_filesCreateManyAndReturnArgs} args - Arguments to create many Users_files.
     * @example
     * // Create many Users_files
     * const users_files = await prisma.users_files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users_files and only return the `user_id`
     * const users_filesWithUser_idOnly = await prisma.users_files.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends users_filesCreateManyAndReturnArgs>(args?: SelectSubset<T, users_filesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_filesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users_files.
     * @param {users_filesDeleteArgs} args - Arguments to delete one Users_files.
     * @example
     * // Delete one Users_files
     * const Users_files = await prisma.users_files.delete({
     *   where: {
     *     // ... filter to delete one Users_files
     *   }
     * })
     * 
     */
    delete<T extends users_filesDeleteArgs>(args: SelectSubset<T, users_filesDeleteArgs<ExtArgs>>): Prisma__users_filesClient<$Result.GetResult<Prisma.$users_filesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users_files.
     * @param {users_filesUpdateArgs} args - Arguments to update one Users_files.
     * @example
     * // Update one Users_files
     * const users_files = await prisma.users_files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends users_filesUpdateArgs>(args: SelectSubset<T, users_filesUpdateArgs<ExtArgs>>): Prisma__users_filesClient<$Result.GetResult<Prisma.$users_filesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users_files.
     * @param {users_filesDeleteManyArgs} args - Arguments to filter Users_files to delete.
     * @example
     * // Delete a few Users_files
     * const { count } = await prisma.users_files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends users_filesDeleteManyArgs>(args?: SelectSubset<T, users_filesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_filesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users_files
     * const users_files = await prisma.users_files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends users_filesUpdateManyArgs>(args: SelectSubset<T, users_filesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_files and returns the data updated in the database.
     * @param {users_filesUpdateManyAndReturnArgs} args - Arguments to update many Users_files.
     * @example
     * // Update many Users_files
     * const users_files = await prisma.users_files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users_files and only return the `user_id`
     * const users_filesWithUser_idOnly = await prisma.users_files.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends users_filesUpdateManyAndReturnArgs>(args: SelectSubset<T, users_filesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_filesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users_files.
     * @param {users_filesUpsertArgs} args - Arguments to update or create a Users_files.
     * @example
     * // Update or create a Users_files
     * const users_files = await prisma.users_files.upsert({
     *   create: {
     *     // ... data to create a Users_files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users_files we want to update
     *   }
     * })
     */
    upsert<T extends users_filesUpsertArgs>(args: SelectSubset<T, users_filesUpsertArgs<ExtArgs>>): Prisma__users_filesClient<$Result.GetResult<Prisma.$users_filesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_filesCountArgs} args - Arguments to filter Users_files to count.
     * @example
     * // Count the number of Users_files
     * const count = await prisma.users_files.count({
     *   where: {
     *     // ... the filter for the Users_files we want to count
     *   }
     * })
    **/
    count<T extends users_filesCountArgs>(
      args?: Subset<T, users_filesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Users_filesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_filesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Users_filesAggregateArgs>(args: Subset<T, Users_filesAggregateArgs>): Prisma.PrismaPromise<GetUsers_filesAggregateType<T>>

    /**
     * Group by Users_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_filesGroupByArgs} args - Group by arguments.
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
      T extends users_filesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: users_filesGroupByArgs['orderBy'] }
        : { orderBy?: users_filesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, users_filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsers_filesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users_files model
   */
  readonly fields: users_filesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users_files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__users_filesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the users_files model
   */
  interface users_filesFieldRefs {
    readonly user_id: FieldRef<"users_files", 'Int'>
    readonly file_id: FieldRef<"users_files", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * users_files findUnique
   */
  export type users_filesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_files
     */
    select?: users_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_files
     */
    omit?: users_filesOmit<ExtArgs> | null
    /**
     * Filter, which users_files to fetch.
     */
    where: users_filesWhereUniqueInput
  }

  /**
   * users_files findUniqueOrThrow
   */
  export type users_filesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_files
     */
    select?: users_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_files
     */
    omit?: users_filesOmit<ExtArgs> | null
    /**
     * Filter, which users_files to fetch.
     */
    where: users_filesWhereUniqueInput
  }

  /**
   * users_files findFirst
   */
  export type users_filesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_files
     */
    select?: users_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_files
     */
    omit?: users_filesOmit<ExtArgs> | null
    /**
     * Filter, which users_files to fetch.
     */
    where?: users_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_files to fetch.
     */
    orderBy?: users_filesOrderByWithRelationInput | users_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users_files.
     */
    cursor?: users_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users_files.
     */
    distinct?: Users_filesScalarFieldEnum | Users_filesScalarFieldEnum[]
  }

  /**
   * users_files findFirstOrThrow
   */
  export type users_filesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_files
     */
    select?: users_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_files
     */
    omit?: users_filesOmit<ExtArgs> | null
    /**
     * Filter, which users_files to fetch.
     */
    where?: users_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_files to fetch.
     */
    orderBy?: users_filesOrderByWithRelationInput | users_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users_files.
     */
    cursor?: users_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users_files.
     */
    distinct?: Users_filesScalarFieldEnum | Users_filesScalarFieldEnum[]
  }

  /**
   * users_files findMany
   */
  export type users_filesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_files
     */
    select?: users_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_files
     */
    omit?: users_filesOmit<ExtArgs> | null
    /**
     * Filter, which users_files to fetch.
     */
    where?: users_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_files to fetch.
     */
    orderBy?: users_filesOrderByWithRelationInput | users_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users_files.
     */
    cursor?: users_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_files.
     */
    skip?: number
    distinct?: Users_filesScalarFieldEnum | Users_filesScalarFieldEnum[]
  }

  /**
   * users_files create
   */
  export type users_filesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_files
     */
    select?: users_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_files
     */
    omit?: users_filesOmit<ExtArgs> | null
    /**
     * The data needed to create a users_files.
     */
    data: XOR<users_filesCreateInput, users_filesUncheckedCreateInput>
  }

  /**
   * users_files createMany
   */
  export type users_filesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users_files.
     */
    data: users_filesCreateManyInput | users_filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users_files createManyAndReturn
   */
  export type users_filesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_files
     */
    select?: users_filesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users_files
     */
    omit?: users_filesOmit<ExtArgs> | null
    /**
     * The data used to create many users_files.
     */
    data: users_filesCreateManyInput | users_filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users_files update
   */
  export type users_filesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_files
     */
    select?: users_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_files
     */
    omit?: users_filesOmit<ExtArgs> | null
    /**
     * The data needed to update a users_files.
     */
    data: XOR<users_filesUpdateInput, users_filesUncheckedUpdateInput>
    /**
     * Choose, which users_files to update.
     */
    where: users_filesWhereUniqueInput
  }

  /**
   * users_files updateMany
   */
  export type users_filesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users_files.
     */
    data: XOR<users_filesUpdateManyMutationInput, users_filesUncheckedUpdateManyInput>
    /**
     * Filter which users_files to update
     */
    where?: users_filesWhereInput
    /**
     * Limit how many users_files to update.
     */
    limit?: number
  }

  /**
   * users_files updateManyAndReturn
   */
  export type users_filesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_files
     */
    select?: users_filesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users_files
     */
    omit?: users_filesOmit<ExtArgs> | null
    /**
     * The data used to update users_files.
     */
    data: XOR<users_filesUpdateManyMutationInput, users_filesUncheckedUpdateManyInput>
    /**
     * Filter which users_files to update
     */
    where?: users_filesWhereInput
    /**
     * Limit how many users_files to update.
     */
    limit?: number
  }

  /**
   * users_files upsert
   */
  export type users_filesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_files
     */
    select?: users_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_files
     */
    omit?: users_filesOmit<ExtArgs> | null
    /**
     * The filter to search for the users_files to update in case it exists.
     */
    where: users_filesWhereUniqueInput
    /**
     * In case the users_files found by the `where` argument doesn't exist, create a new users_files with this data.
     */
    create: XOR<users_filesCreateInput, users_filesUncheckedCreateInput>
    /**
     * In case the users_files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<users_filesUpdateInput, users_filesUncheckedUpdateInput>
  }

  /**
   * users_files delete
   */
  export type users_filesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_files
     */
    select?: users_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_files
     */
    omit?: users_filesOmit<ExtArgs> | null
    /**
     * Filter which users_files to delete.
     */
    where: users_filesWhereUniqueInput
  }

  /**
   * users_files deleteMany
   */
  export type users_filesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users_files to delete
     */
    where?: users_filesWhereInput
    /**
     * Limit how many users_files to delete.
     */
    limit?: number
  }

  /**
   * users_files without action
   */
  export type users_filesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_files
     */
    select?: users_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_files
     */
    omit?: users_filesOmit<ExtArgs> | null
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


  export const Public_filesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    size: 'size',
    upload_at: 'upload_at'
  };

  export type Public_filesScalarFieldEnum = (typeof Public_filesScalarFieldEnum)[keyof typeof Public_filesScalarFieldEnum]


  export const Private_filesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    size: 'size',
    upload_at: 'upload_at'
  };

  export type Private_filesScalarFieldEnum = (typeof Private_filesScalarFieldEnum)[keyof typeof Private_filesScalarFieldEnum]


  export const FlowersScalarFieldEnum: {
    id: 'id',
    color: 'color',
    name_en: 'name_en',
    name_ru: 'name_ru',
    price: 'price',
    variety_id: 'variety_id'
  };

  export type FlowersScalarFieldEnum = (typeof FlowersScalarFieldEnum)[keyof typeof FlowersScalarFieldEnum]


  export const Flowers_varietyScalarFieldEnum: {
    id: 'id',
    name_en: 'name_en',
    name_ru: 'name_ru'
  };

  export type Flowers_varietyScalarFieldEnum = (typeof Flowers_varietyScalarFieldEnum)[keyof typeof Flowers_varietyScalarFieldEnum]


  export const Flowers_historyScalarFieldEnum: {
    id: 'id',
    flower_id: 'flower_id',
    date: 'date',
    price: 'price'
  };

  export type Flowers_historyScalarFieldEnum = (typeof Flowers_historyScalarFieldEnum)[keyof typeof Flowers_historyScalarFieldEnum]


  export const Flowers_farmsScalarFieldEnum: {
    id: 'id',
    name_en: 'name_en',
    name_ru: 'name_ru',
    country: 'country',
    rate: 'rate'
  };

  export type Flowers_farmsScalarFieldEnum = (typeof Flowers_farmsScalarFieldEnum)[keyof typeof Flowers_farmsScalarFieldEnum]


  export const Flowers_and_flowers_farmsScalarFieldEnum: {
    flower_id: 'flower_id',
    flower_farm_id: 'flower_farm_id'
  };

  export type Flowers_and_flowers_farmsScalarFieldEnum = (typeof Flowers_and_flowers_farmsScalarFieldEnum)[keyof typeof Flowers_and_flowers_farmsScalarFieldEnum]


  export const Flowers_bouquetsScalarFieldEnum: {
    id: 'id',
    name_en: 'name_en',
    name_ru: 'name_ru',
    price: 'price'
  };

  export type Flowers_bouquetsScalarFieldEnum = (typeof Flowers_bouquetsScalarFieldEnum)[keyof typeof Flowers_bouquetsScalarFieldEnum]


  export const Flowers_and_flowers_bouquetsScalarFieldEnum: {
    flower_id: 'flower_id',
    flower_bouquet_id: 'flower_bouquet_id'
  };

  export type Flowers_and_flowers_bouquetsScalarFieldEnum = (typeof Flowers_and_flowers_bouquetsScalarFieldEnum)[keyof typeof Flowers_and_flowers_bouquetsScalarFieldEnum]


  export const Flowers_and_filesScalarFieldEnum: {
    flower_id: 'flower_id',
    public_file_name: 'public_file_name'
  };

  export type Flowers_and_filesScalarFieldEnum = (typeof Flowers_and_filesScalarFieldEnum)[keyof typeof Flowers_and_filesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    email_verified: 'email_verified',
    name: 'name',
    password: 'password',
    signature: 'signature',
    role: 'role',
    oauth: 'oauth',
    oauth_id: 'oauth_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Users_filesScalarFieldEnum: {
    user_id: 'user_id',
    file_id: 'file_id'
  };

  export type Users_filesScalarFieldEnum = (typeof Users_filesScalarFieldEnum)[keyof typeof Users_filesScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type public_filesWhereInput = {
    AND?: public_filesWhereInput | public_filesWhereInput[]
    OR?: public_filesWhereInput[]
    NOT?: public_filesWhereInput | public_filesWhereInput[]
    id?: IntFilter<"public_files"> | number
    name?: StringFilter<"public_files"> | string
    size?: IntFilter<"public_files"> | number
    upload_at?: DateTimeFilter<"public_files"> | Date | string
    flowers?: Flowers_and_filesListRelationFilter
  }

  export type public_filesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    upload_at?: SortOrder
    flowers?: flowers_and_filesOrderByRelationAggregateInput
  }

  export type public_filesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: public_filesWhereInput | public_filesWhereInput[]
    OR?: public_filesWhereInput[]
    NOT?: public_filesWhereInput | public_filesWhereInput[]
    size?: IntFilter<"public_files"> | number
    upload_at?: DateTimeFilter<"public_files"> | Date | string
    flowers?: Flowers_and_filesListRelationFilter
  }, "id" | "name">

  export type public_filesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    upload_at?: SortOrder
    _count?: public_filesCountOrderByAggregateInput
    _avg?: public_filesAvgOrderByAggregateInput
    _max?: public_filesMaxOrderByAggregateInput
    _min?: public_filesMinOrderByAggregateInput
    _sum?: public_filesSumOrderByAggregateInput
  }

  export type public_filesScalarWhereWithAggregatesInput = {
    AND?: public_filesScalarWhereWithAggregatesInput | public_filesScalarWhereWithAggregatesInput[]
    OR?: public_filesScalarWhereWithAggregatesInput[]
    NOT?: public_filesScalarWhereWithAggregatesInput | public_filesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"public_files"> | number
    name?: StringWithAggregatesFilter<"public_files"> | string
    size?: IntWithAggregatesFilter<"public_files"> | number
    upload_at?: DateTimeWithAggregatesFilter<"public_files"> | Date | string
  }

  export type private_filesWhereInput = {
    AND?: private_filesWhereInput | private_filesWhereInput[]
    OR?: private_filesWhereInput[]
    NOT?: private_filesWhereInput | private_filesWhereInput[]
    id?: StringFilter<"private_files"> | string
    name?: StringFilter<"private_files"> | string
    size?: IntFilter<"private_files"> | number
    upload_at?: DateTimeFilter<"private_files"> | Date | string
  }

  export type private_filesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    upload_at?: SortOrder
  }

  export type private_filesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: private_filesWhereInput | private_filesWhereInput[]
    OR?: private_filesWhereInput[]
    NOT?: private_filesWhereInput | private_filesWhereInput[]
    size?: IntFilter<"private_files"> | number
    upload_at?: DateTimeFilter<"private_files"> | Date | string
  }, "id" | "name">

  export type private_filesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    upload_at?: SortOrder
    _count?: private_filesCountOrderByAggregateInput
    _avg?: private_filesAvgOrderByAggregateInput
    _max?: private_filesMaxOrderByAggregateInput
    _min?: private_filesMinOrderByAggregateInput
    _sum?: private_filesSumOrderByAggregateInput
  }

  export type private_filesScalarWhereWithAggregatesInput = {
    AND?: private_filesScalarWhereWithAggregatesInput | private_filesScalarWhereWithAggregatesInput[]
    OR?: private_filesScalarWhereWithAggregatesInput[]
    NOT?: private_filesScalarWhereWithAggregatesInput | private_filesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"private_files"> | string
    name?: StringWithAggregatesFilter<"private_files"> | string
    size?: IntWithAggregatesFilter<"private_files"> | number
    upload_at?: DateTimeWithAggregatesFilter<"private_files"> | Date | string
  }

  export type flowersWhereInput = {
    AND?: flowersWhereInput | flowersWhereInput[]
    OR?: flowersWhereInput[]
    NOT?: flowersWhereInput | flowersWhereInput[]
    id?: IntFilter<"flowers"> | number
    color?: StringFilter<"flowers"> | string
    name_en?: StringFilter<"flowers"> | string
    name_ru?: StringFilter<"flowers"> | string
    price?: IntFilter<"flowers"> | number
    variety_id?: IntFilter<"flowers"> | number
    history?: Flowers_historyListRelationFilter
    variety?: XOR<Flowers_varietyScalarRelationFilter, flowers_varietyWhereInput>
    imgs?: Flowers_and_filesListRelationFilter
    farms?: Flowers_and_flowers_farmsListRelationFilter
    bouquets?: Flowers_and_flowers_bouquetsListRelationFilter
  }

  export type flowersOrderByWithRelationInput = {
    id?: SortOrder
    color?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
    price?: SortOrder
    variety_id?: SortOrder
    history?: flowers_historyOrderByRelationAggregateInput
    variety?: flowers_varietyOrderByWithRelationInput
    imgs?: flowers_and_filesOrderByRelationAggregateInput
    farms?: flowers_and_flowers_farmsOrderByRelationAggregateInput
    bouquets?: flowers_and_flowers_bouquetsOrderByRelationAggregateInput
  }

  export type flowersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: flowersWhereInput | flowersWhereInput[]
    OR?: flowersWhereInput[]
    NOT?: flowersWhereInput | flowersWhereInput[]
    color?: StringFilter<"flowers"> | string
    name_en?: StringFilter<"flowers"> | string
    name_ru?: StringFilter<"flowers"> | string
    price?: IntFilter<"flowers"> | number
    variety_id?: IntFilter<"flowers"> | number
    history?: Flowers_historyListRelationFilter
    variety?: XOR<Flowers_varietyScalarRelationFilter, flowers_varietyWhereInput>
    imgs?: Flowers_and_filesListRelationFilter
    farms?: Flowers_and_flowers_farmsListRelationFilter
    bouquets?: Flowers_and_flowers_bouquetsListRelationFilter
  }, "id">

  export type flowersOrderByWithAggregationInput = {
    id?: SortOrder
    color?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
    price?: SortOrder
    variety_id?: SortOrder
    _count?: flowersCountOrderByAggregateInput
    _avg?: flowersAvgOrderByAggregateInput
    _max?: flowersMaxOrderByAggregateInput
    _min?: flowersMinOrderByAggregateInput
    _sum?: flowersSumOrderByAggregateInput
  }

  export type flowersScalarWhereWithAggregatesInput = {
    AND?: flowersScalarWhereWithAggregatesInput | flowersScalarWhereWithAggregatesInput[]
    OR?: flowersScalarWhereWithAggregatesInput[]
    NOT?: flowersScalarWhereWithAggregatesInput | flowersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"flowers"> | number
    color?: StringWithAggregatesFilter<"flowers"> | string
    name_en?: StringWithAggregatesFilter<"flowers"> | string
    name_ru?: StringWithAggregatesFilter<"flowers"> | string
    price?: IntWithAggregatesFilter<"flowers"> | number
    variety_id?: IntWithAggregatesFilter<"flowers"> | number
  }

  export type flowers_varietyWhereInput = {
    AND?: flowers_varietyWhereInput | flowers_varietyWhereInput[]
    OR?: flowers_varietyWhereInput[]
    NOT?: flowers_varietyWhereInput | flowers_varietyWhereInput[]
    id?: IntFilter<"flowers_variety"> | number
    name_en?: StringFilter<"flowers_variety"> | string
    name_ru?: StringFilter<"flowers_variety"> | string
    flowers?: FlowersListRelationFilter
  }

  export type flowers_varietyOrderByWithRelationInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
    flowers?: flowersOrderByRelationAggregateInput
  }

  export type flowers_varietyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_en?: string
    name_ru?: string
    AND?: flowers_varietyWhereInput | flowers_varietyWhereInput[]
    OR?: flowers_varietyWhereInput[]
    NOT?: flowers_varietyWhereInput | flowers_varietyWhereInput[]
    flowers?: FlowersListRelationFilter
  }, "id" | "name_en" | "name_ru">

  export type flowers_varietyOrderByWithAggregationInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
    _count?: flowers_varietyCountOrderByAggregateInput
    _avg?: flowers_varietyAvgOrderByAggregateInput
    _max?: flowers_varietyMaxOrderByAggregateInput
    _min?: flowers_varietyMinOrderByAggregateInput
    _sum?: flowers_varietySumOrderByAggregateInput
  }

  export type flowers_varietyScalarWhereWithAggregatesInput = {
    AND?: flowers_varietyScalarWhereWithAggregatesInput | flowers_varietyScalarWhereWithAggregatesInput[]
    OR?: flowers_varietyScalarWhereWithAggregatesInput[]
    NOT?: flowers_varietyScalarWhereWithAggregatesInput | flowers_varietyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"flowers_variety"> | number
    name_en?: StringWithAggregatesFilter<"flowers_variety"> | string
    name_ru?: StringWithAggregatesFilter<"flowers_variety"> | string
  }

  export type flowers_historyWhereInput = {
    AND?: flowers_historyWhereInput | flowers_historyWhereInput[]
    OR?: flowers_historyWhereInput[]
    NOT?: flowers_historyWhereInput | flowers_historyWhereInput[]
    id?: IntFilter<"flowers_history"> | number
    flower_id?: IntFilter<"flowers_history"> | number
    date?: IntFilter<"flowers_history"> | number
    price?: IntFilter<"flowers_history"> | number
    flower?: XOR<FlowersScalarRelationFilter, flowersWhereInput>
  }

  export type flowers_historyOrderByWithRelationInput = {
    id?: SortOrder
    flower_id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    flower?: flowersOrderByWithRelationInput
  }

  export type flowers_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: flowers_historyWhereInput | flowers_historyWhereInput[]
    OR?: flowers_historyWhereInput[]
    NOT?: flowers_historyWhereInput | flowers_historyWhereInput[]
    flower_id?: IntFilter<"flowers_history"> | number
    date?: IntFilter<"flowers_history"> | number
    price?: IntFilter<"flowers_history"> | number
    flower?: XOR<FlowersScalarRelationFilter, flowersWhereInput>
  }, "id">

  export type flowers_historyOrderByWithAggregationInput = {
    id?: SortOrder
    flower_id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    _count?: flowers_historyCountOrderByAggregateInput
    _avg?: flowers_historyAvgOrderByAggregateInput
    _max?: flowers_historyMaxOrderByAggregateInput
    _min?: flowers_historyMinOrderByAggregateInput
    _sum?: flowers_historySumOrderByAggregateInput
  }

  export type flowers_historyScalarWhereWithAggregatesInput = {
    AND?: flowers_historyScalarWhereWithAggregatesInput | flowers_historyScalarWhereWithAggregatesInput[]
    OR?: flowers_historyScalarWhereWithAggregatesInput[]
    NOT?: flowers_historyScalarWhereWithAggregatesInput | flowers_historyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"flowers_history"> | number
    flower_id?: IntWithAggregatesFilter<"flowers_history"> | number
    date?: IntWithAggregatesFilter<"flowers_history"> | number
    price?: IntWithAggregatesFilter<"flowers_history"> | number
  }

  export type flowers_farmsWhereInput = {
    AND?: flowers_farmsWhereInput | flowers_farmsWhereInput[]
    OR?: flowers_farmsWhereInput[]
    NOT?: flowers_farmsWhereInput | flowers_farmsWhereInput[]
    id?: IntFilter<"flowers_farms"> | number
    name_en?: StringFilter<"flowers_farms"> | string
    name_ru?: StringFilter<"flowers_farms"> | string
    country?: StringFilter<"flowers_farms"> | string
    rate?: IntFilter<"flowers_farms"> | number
    flowers?: Flowers_and_flowers_farmsListRelationFilter
  }

  export type flowers_farmsOrderByWithRelationInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
    country?: SortOrder
    rate?: SortOrder
    flowers?: flowers_and_flowers_farmsOrderByRelationAggregateInput
  }

  export type flowers_farmsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: flowers_farmsWhereInput | flowers_farmsWhereInput[]
    OR?: flowers_farmsWhereInput[]
    NOT?: flowers_farmsWhereInput | flowers_farmsWhereInput[]
    name_en?: StringFilter<"flowers_farms"> | string
    name_ru?: StringFilter<"flowers_farms"> | string
    country?: StringFilter<"flowers_farms"> | string
    rate?: IntFilter<"flowers_farms"> | number
    flowers?: Flowers_and_flowers_farmsListRelationFilter
  }, "id">

  export type flowers_farmsOrderByWithAggregationInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
    country?: SortOrder
    rate?: SortOrder
    _count?: flowers_farmsCountOrderByAggregateInput
    _avg?: flowers_farmsAvgOrderByAggregateInput
    _max?: flowers_farmsMaxOrderByAggregateInput
    _min?: flowers_farmsMinOrderByAggregateInput
    _sum?: flowers_farmsSumOrderByAggregateInput
  }

  export type flowers_farmsScalarWhereWithAggregatesInput = {
    AND?: flowers_farmsScalarWhereWithAggregatesInput | flowers_farmsScalarWhereWithAggregatesInput[]
    OR?: flowers_farmsScalarWhereWithAggregatesInput[]
    NOT?: flowers_farmsScalarWhereWithAggregatesInput | flowers_farmsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"flowers_farms"> | number
    name_en?: StringWithAggregatesFilter<"flowers_farms"> | string
    name_ru?: StringWithAggregatesFilter<"flowers_farms"> | string
    country?: StringWithAggregatesFilter<"flowers_farms"> | string
    rate?: IntWithAggregatesFilter<"flowers_farms"> | number
  }

  export type flowers_and_flowers_farmsWhereInput = {
    AND?: flowers_and_flowers_farmsWhereInput | flowers_and_flowers_farmsWhereInput[]
    OR?: flowers_and_flowers_farmsWhereInput[]
    NOT?: flowers_and_flowers_farmsWhereInput | flowers_and_flowers_farmsWhereInput[]
    flower_id?: IntFilter<"flowers_and_flowers_farms"> | number
    flower_farm_id?: IntFilter<"flowers_and_flowers_farms"> | number
    flowers?: XOR<FlowersScalarRelationFilter, flowersWhereInput>
    flowers_farms?: XOR<Flowers_farmsScalarRelationFilter, flowers_farmsWhereInput>
  }

  export type flowers_and_flowers_farmsOrderByWithRelationInput = {
    flower_id?: SortOrder
    flower_farm_id?: SortOrder
    flowers?: flowersOrderByWithRelationInput
    flowers_farms?: flowers_farmsOrderByWithRelationInput
  }

  export type flowers_and_flowers_farmsWhereUniqueInput = Prisma.AtLeast<{
    flower_id_flower_farm_id?: flowers_and_flowers_farmsFlower_idFlower_farm_idCompoundUniqueInput
    AND?: flowers_and_flowers_farmsWhereInput | flowers_and_flowers_farmsWhereInput[]
    OR?: flowers_and_flowers_farmsWhereInput[]
    NOT?: flowers_and_flowers_farmsWhereInput | flowers_and_flowers_farmsWhereInput[]
    flower_id?: IntFilter<"flowers_and_flowers_farms"> | number
    flower_farm_id?: IntFilter<"flowers_and_flowers_farms"> | number
    flowers?: XOR<FlowersScalarRelationFilter, flowersWhereInput>
    flowers_farms?: XOR<Flowers_farmsScalarRelationFilter, flowers_farmsWhereInput>
  }, "flower_id_flower_farm_id">

  export type flowers_and_flowers_farmsOrderByWithAggregationInput = {
    flower_id?: SortOrder
    flower_farm_id?: SortOrder
    _count?: flowers_and_flowers_farmsCountOrderByAggregateInput
    _avg?: flowers_and_flowers_farmsAvgOrderByAggregateInput
    _max?: flowers_and_flowers_farmsMaxOrderByAggregateInput
    _min?: flowers_and_flowers_farmsMinOrderByAggregateInput
    _sum?: flowers_and_flowers_farmsSumOrderByAggregateInput
  }

  export type flowers_and_flowers_farmsScalarWhereWithAggregatesInput = {
    AND?: flowers_and_flowers_farmsScalarWhereWithAggregatesInput | flowers_and_flowers_farmsScalarWhereWithAggregatesInput[]
    OR?: flowers_and_flowers_farmsScalarWhereWithAggregatesInput[]
    NOT?: flowers_and_flowers_farmsScalarWhereWithAggregatesInput | flowers_and_flowers_farmsScalarWhereWithAggregatesInput[]
    flower_id?: IntWithAggregatesFilter<"flowers_and_flowers_farms"> | number
    flower_farm_id?: IntWithAggregatesFilter<"flowers_and_flowers_farms"> | number
  }

  export type flowers_bouquetsWhereInput = {
    AND?: flowers_bouquetsWhereInput | flowers_bouquetsWhereInput[]
    OR?: flowers_bouquetsWhereInput[]
    NOT?: flowers_bouquetsWhereInput | flowers_bouquetsWhereInput[]
    id?: IntFilter<"flowers_bouquets"> | number
    name_en?: StringFilter<"flowers_bouquets"> | string
    name_ru?: StringFilter<"flowers_bouquets"> | string
    price?: IntFilter<"flowers_bouquets"> | number
    flowers?: Flowers_and_flowers_bouquetsListRelationFilter
  }

  export type flowers_bouquetsOrderByWithRelationInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
    price?: SortOrder
    flowers?: flowers_and_flowers_bouquetsOrderByRelationAggregateInput
  }

  export type flowers_bouquetsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: flowers_bouquetsWhereInput | flowers_bouquetsWhereInput[]
    OR?: flowers_bouquetsWhereInput[]
    NOT?: flowers_bouquetsWhereInput | flowers_bouquetsWhereInput[]
    name_en?: StringFilter<"flowers_bouquets"> | string
    name_ru?: StringFilter<"flowers_bouquets"> | string
    price?: IntFilter<"flowers_bouquets"> | number
    flowers?: Flowers_and_flowers_bouquetsListRelationFilter
  }, "id">

  export type flowers_bouquetsOrderByWithAggregationInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
    price?: SortOrder
    _count?: flowers_bouquetsCountOrderByAggregateInput
    _avg?: flowers_bouquetsAvgOrderByAggregateInput
    _max?: flowers_bouquetsMaxOrderByAggregateInput
    _min?: flowers_bouquetsMinOrderByAggregateInput
    _sum?: flowers_bouquetsSumOrderByAggregateInput
  }

  export type flowers_bouquetsScalarWhereWithAggregatesInput = {
    AND?: flowers_bouquetsScalarWhereWithAggregatesInput | flowers_bouquetsScalarWhereWithAggregatesInput[]
    OR?: flowers_bouquetsScalarWhereWithAggregatesInput[]
    NOT?: flowers_bouquetsScalarWhereWithAggregatesInput | flowers_bouquetsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"flowers_bouquets"> | number
    name_en?: StringWithAggregatesFilter<"flowers_bouquets"> | string
    name_ru?: StringWithAggregatesFilter<"flowers_bouquets"> | string
    price?: IntWithAggregatesFilter<"flowers_bouquets"> | number
  }

  export type flowers_and_flowers_bouquetsWhereInput = {
    AND?: flowers_and_flowers_bouquetsWhereInput | flowers_and_flowers_bouquetsWhereInput[]
    OR?: flowers_and_flowers_bouquetsWhereInput[]
    NOT?: flowers_and_flowers_bouquetsWhereInput | flowers_and_flowers_bouquetsWhereInput[]
    flower_id?: IntFilter<"flowers_and_flowers_bouquets"> | number
    flower_bouquet_id?: IntFilter<"flowers_and_flowers_bouquets"> | number
    flowers?: XOR<FlowersScalarRelationFilter, flowersWhereInput>
    flowers_bouquets?: XOR<Flowers_bouquetsScalarRelationFilter, flowers_bouquetsWhereInput>
  }

  export type flowers_and_flowers_bouquetsOrderByWithRelationInput = {
    flower_id?: SortOrder
    flower_bouquet_id?: SortOrder
    flowers?: flowersOrderByWithRelationInput
    flowers_bouquets?: flowers_bouquetsOrderByWithRelationInput
  }

  export type flowers_and_flowers_bouquetsWhereUniqueInput = Prisma.AtLeast<{
    flower_id_flower_bouquet_id?: flowers_and_flowers_bouquetsFlower_idFlower_bouquet_idCompoundUniqueInput
    AND?: flowers_and_flowers_bouquetsWhereInput | flowers_and_flowers_bouquetsWhereInput[]
    OR?: flowers_and_flowers_bouquetsWhereInput[]
    NOT?: flowers_and_flowers_bouquetsWhereInput | flowers_and_flowers_bouquetsWhereInput[]
    flower_id?: IntFilter<"flowers_and_flowers_bouquets"> | number
    flower_bouquet_id?: IntFilter<"flowers_and_flowers_bouquets"> | number
    flowers?: XOR<FlowersScalarRelationFilter, flowersWhereInput>
    flowers_bouquets?: XOR<Flowers_bouquetsScalarRelationFilter, flowers_bouquetsWhereInput>
  }, "flower_id_flower_bouquet_id">

  export type flowers_and_flowers_bouquetsOrderByWithAggregationInput = {
    flower_id?: SortOrder
    flower_bouquet_id?: SortOrder
    _count?: flowers_and_flowers_bouquetsCountOrderByAggregateInput
    _avg?: flowers_and_flowers_bouquetsAvgOrderByAggregateInput
    _max?: flowers_and_flowers_bouquetsMaxOrderByAggregateInput
    _min?: flowers_and_flowers_bouquetsMinOrderByAggregateInput
    _sum?: flowers_and_flowers_bouquetsSumOrderByAggregateInput
  }

  export type flowers_and_flowers_bouquetsScalarWhereWithAggregatesInput = {
    AND?: flowers_and_flowers_bouquetsScalarWhereWithAggregatesInput | flowers_and_flowers_bouquetsScalarWhereWithAggregatesInput[]
    OR?: flowers_and_flowers_bouquetsScalarWhereWithAggregatesInput[]
    NOT?: flowers_and_flowers_bouquetsScalarWhereWithAggregatesInput | flowers_and_flowers_bouquetsScalarWhereWithAggregatesInput[]
    flower_id?: IntWithAggregatesFilter<"flowers_and_flowers_bouquets"> | number
    flower_bouquet_id?: IntWithAggregatesFilter<"flowers_and_flowers_bouquets"> | number
  }

  export type flowers_and_filesWhereInput = {
    AND?: flowers_and_filesWhereInput | flowers_and_filesWhereInput[]
    OR?: flowers_and_filesWhereInput[]
    NOT?: flowers_and_filesWhereInput | flowers_and_filesWhereInput[]
    flower_id?: IntFilter<"flowers_and_files"> | number
    public_file_name?: StringFilter<"flowers_and_files"> | string
    flowers?: XOR<FlowersScalarRelationFilter, flowersWhereInput>
    public_files?: XOR<Public_filesScalarRelationFilter, public_filesWhereInput>
  }

  export type flowers_and_filesOrderByWithRelationInput = {
    flower_id?: SortOrder
    public_file_name?: SortOrder
    flowers?: flowersOrderByWithRelationInput
    public_files?: public_filesOrderByWithRelationInput
  }

  export type flowers_and_filesWhereUniqueInput = Prisma.AtLeast<{
    flower_id_public_file_name?: flowers_and_filesFlower_idPublic_file_nameCompoundUniqueInput
    AND?: flowers_and_filesWhereInput | flowers_and_filesWhereInput[]
    OR?: flowers_and_filesWhereInput[]
    NOT?: flowers_and_filesWhereInput | flowers_and_filesWhereInput[]
    flower_id?: IntFilter<"flowers_and_files"> | number
    public_file_name?: StringFilter<"flowers_and_files"> | string
    flowers?: XOR<FlowersScalarRelationFilter, flowersWhereInput>
    public_files?: XOR<Public_filesScalarRelationFilter, public_filesWhereInput>
  }, "flower_id_public_file_name">

  export type flowers_and_filesOrderByWithAggregationInput = {
    flower_id?: SortOrder
    public_file_name?: SortOrder
    _count?: flowers_and_filesCountOrderByAggregateInput
    _avg?: flowers_and_filesAvgOrderByAggregateInput
    _max?: flowers_and_filesMaxOrderByAggregateInput
    _min?: flowers_and_filesMinOrderByAggregateInput
    _sum?: flowers_and_filesSumOrderByAggregateInput
  }

  export type flowers_and_filesScalarWhereWithAggregatesInput = {
    AND?: flowers_and_filesScalarWhereWithAggregatesInput | flowers_and_filesScalarWhereWithAggregatesInput[]
    OR?: flowers_and_filesScalarWhereWithAggregatesInput[]
    NOT?: flowers_and_filesScalarWhereWithAggregatesInput | flowers_and_filesScalarWhereWithAggregatesInput[]
    flower_id?: IntWithAggregatesFilter<"flowers_and_files"> | number
    public_file_name?: StringWithAggregatesFilter<"flowers_and_files"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    email_verified?: BoolFilter<"users"> | boolean
    name?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    signature?: StringNullableFilter<"users"> | string | null
    role?: StringFilter<"users"> | string
    oauth?: StringNullableFilter<"users"> | string | null
    oauth_id?: StringNullableFilter<"users"> | string | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    role?: SortOrder
    oauth?: SortOrderInput | SortOrder
    oauth_id?: SortOrderInput | SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    email?: StringFilter<"users"> | string
    email_verified?: BoolFilter<"users"> | boolean
    name?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    signature?: StringNullableFilter<"users"> | string | null
    role?: StringFilter<"users"> | string
    oauth?: StringNullableFilter<"users"> | string | null
    oauth_id?: StringNullableFilter<"users"> | string | null
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    role?: SortOrder
    oauth?: SortOrderInput | SortOrder
    oauth_id?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    email_verified?: BoolWithAggregatesFilter<"users"> | boolean
    name?: StringWithAggregatesFilter<"users"> | string
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    signature?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: StringWithAggregatesFilter<"users"> | string
    oauth?: StringNullableWithAggregatesFilter<"users"> | string | null
    oauth_id?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type users_filesWhereInput = {
    AND?: users_filesWhereInput | users_filesWhereInput[]
    OR?: users_filesWhereInput[]
    NOT?: users_filesWhereInput | users_filesWhereInput[]
    user_id?: IntFilter<"users_files"> | number
    file_id?: IntFilter<"users_files"> | number
  }

  export type users_filesOrderByWithRelationInput = {
    user_id?: SortOrder
    file_id?: SortOrder
  }

  export type users_filesWhereUniqueInput = Prisma.AtLeast<{
    user_id_file_id?: users_filesUser_idFile_idCompoundUniqueInput
    AND?: users_filesWhereInput | users_filesWhereInput[]
    OR?: users_filesWhereInput[]
    NOT?: users_filesWhereInput | users_filesWhereInput[]
    user_id?: IntFilter<"users_files"> | number
    file_id?: IntFilter<"users_files"> | number
  }, "user_id_file_id">

  export type users_filesOrderByWithAggregationInput = {
    user_id?: SortOrder
    file_id?: SortOrder
    _count?: users_filesCountOrderByAggregateInput
    _avg?: users_filesAvgOrderByAggregateInput
    _max?: users_filesMaxOrderByAggregateInput
    _min?: users_filesMinOrderByAggregateInput
    _sum?: users_filesSumOrderByAggregateInput
  }

  export type users_filesScalarWhereWithAggregatesInput = {
    AND?: users_filesScalarWhereWithAggregatesInput | users_filesScalarWhereWithAggregatesInput[]
    OR?: users_filesScalarWhereWithAggregatesInput[]
    NOT?: users_filesScalarWhereWithAggregatesInput | users_filesScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users_files"> | number
    file_id?: IntWithAggregatesFilter<"users_files"> | number
  }

  export type public_filesCreateInput = {
    name: string
    size: number
    upload_at?: Date | string
    flowers?: flowers_and_filesCreateNestedManyWithoutPublic_filesInput
  }

  export type public_filesUncheckedCreateInput = {
    id?: number
    name: string
    size: number
    upload_at?: Date | string
    flowers?: flowers_and_filesUncheckedCreateNestedManyWithoutPublic_filesInput
  }

  export type public_filesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    upload_at?: DateTimeFieldUpdateOperationsInput | Date | string
    flowers?: flowers_and_filesUpdateManyWithoutPublic_filesNestedInput
  }

  export type public_filesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    upload_at?: DateTimeFieldUpdateOperationsInput | Date | string
    flowers?: flowers_and_filesUncheckedUpdateManyWithoutPublic_filesNestedInput
  }

  export type public_filesCreateManyInput = {
    id?: number
    name: string
    size: number
    upload_at?: Date | string
  }

  export type public_filesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    upload_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type public_filesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    upload_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type private_filesCreateInput = {
    id: string
    name: string
    size: number
    upload_at?: Date | string
  }

  export type private_filesUncheckedCreateInput = {
    id: string
    name: string
    size: number
    upload_at?: Date | string
  }

  export type private_filesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    upload_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type private_filesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    upload_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type private_filesCreateManyInput = {
    id: string
    name: string
    size: number
    upload_at?: Date | string
  }

  export type private_filesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    upload_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type private_filesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    upload_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type flowersCreateInput = {
    color: string
    name_en: string
    name_ru: string
    price: number
    history?: flowers_historyCreateNestedManyWithoutFlowerInput
    variety: flowers_varietyCreateNestedOneWithoutFlowersInput
    imgs?: flowers_and_filesCreateNestedManyWithoutFlowersInput
    farms?: flowers_and_flowers_farmsCreateNestedManyWithoutFlowersInput
    bouquets?: flowers_and_flowers_bouquetsCreateNestedManyWithoutFlowersInput
  }

  export type flowersUncheckedCreateInput = {
    id?: number
    color: string
    name_en: string
    name_ru: string
    price: number
    variety_id: number
    history?: flowers_historyUncheckedCreateNestedManyWithoutFlowerInput
    imgs?: flowers_and_filesUncheckedCreateNestedManyWithoutFlowersInput
    farms?: flowers_and_flowers_farmsUncheckedCreateNestedManyWithoutFlowersInput
    bouquets?: flowers_and_flowers_bouquetsUncheckedCreateNestedManyWithoutFlowersInput
  }

  export type flowersUpdateInput = {
    color?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    history?: flowers_historyUpdateManyWithoutFlowerNestedInput
    variety?: flowers_varietyUpdateOneRequiredWithoutFlowersNestedInput
    imgs?: flowers_and_filesUpdateManyWithoutFlowersNestedInput
    farms?: flowers_and_flowers_farmsUpdateManyWithoutFlowersNestedInput
    bouquets?: flowers_and_flowers_bouquetsUpdateManyWithoutFlowersNestedInput
  }

  export type flowersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    variety_id?: IntFieldUpdateOperationsInput | number
    history?: flowers_historyUncheckedUpdateManyWithoutFlowerNestedInput
    imgs?: flowers_and_filesUncheckedUpdateManyWithoutFlowersNestedInput
    farms?: flowers_and_flowers_farmsUncheckedUpdateManyWithoutFlowersNestedInput
    bouquets?: flowers_and_flowers_bouquetsUncheckedUpdateManyWithoutFlowersNestedInput
  }

  export type flowersCreateManyInput = {
    id?: number
    color: string
    name_en: string
    name_ru: string
    price: number
    variety_id: number
  }

  export type flowersUpdateManyMutationInput = {
    color?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type flowersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    variety_id?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_varietyCreateInput = {
    name_en: string
    name_ru: string
    flowers?: flowersCreateNestedManyWithoutVarietyInput
  }

  export type flowers_varietyUncheckedCreateInput = {
    id?: number
    name_en: string
    name_ru: string
    flowers?: flowersUncheckedCreateNestedManyWithoutVarietyInput
  }

  export type flowers_varietyUpdateInput = {
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    flowers?: flowersUpdateManyWithoutVarietyNestedInput
  }

  export type flowers_varietyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    flowers?: flowersUncheckedUpdateManyWithoutVarietyNestedInput
  }

  export type flowers_varietyCreateManyInput = {
    id?: number
    name_en: string
    name_ru: string
  }

  export type flowers_varietyUpdateManyMutationInput = {
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
  }

  export type flowers_varietyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
  }

  export type flowers_historyCreateInput = {
    date: number
    price: number
    flower: flowersCreateNestedOneWithoutHistoryInput
  }

  export type flowers_historyUncheckedCreateInput = {
    id?: number
    flower_id: number
    date: number
    price: number
  }

  export type flowers_historyUpdateInput = {
    date?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    flower?: flowersUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type flowers_historyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    flower_id?: IntFieldUpdateOperationsInput | number
    date?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_historyCreateManyInput = {
    id?: number
    flower_id: number
    date: number
    price: number
  }

  export type flowers_historyUpdateManyMutationInput = {
    date?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_historyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    flower_id?: IntFieldUpdateOperationsInput | number
    date?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_farmsCreateInput = {
    name_en: string
    name_ru: string
    country: string
    rate: number
    flowers?: flowers_and_flowers_farmsCreateNestedManyWithoutFlowers_farmsInput
  }

  export type flowers_farmsUncheckedCreateInput = {
    id?: number
    name_en: string
    name_ru: string
    country: string
    rate: number
    flowers?: flowers_and_flowers_farmsUncheckedCreateNestedManyWithoutFlowers_farmsInput
  }

  export type flowers_farmsUpdateInput = {
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    flowers?: flowers_and_flowers_farmsUpdateManyWithoutFlowers_farmsNestedInput
  }

  export type flowers_farmsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    flowers?: flowers_and_flowers_farmsUncheckedUpdateManyWithoutFlowers_farmsNestedInput
  }

  export type flowers_farmsCreateManyInput = {
    id?: number
    name_en: string
    name_ru: string
    country: string
    rate: number
  }

  export type flowers_farmsUpdateManyMutationInput = {
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_farmsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_and_flowers_farmsCreateInput = {
    flowers: flowersCreateNestedOneWithoutFarmsInput
    flowers_farms: flowers_farmsCreateNestedOneWithoutFlowersInput
  }

  export type flowers_and_flowers_farmsUncheckedCreateInput = {
    flower_id: number
    flower_farm_id: number
  }

  export type flowers_and_flowers_farmsUpdateInput = {
    flowers?: flowersUpdateOneRequiredWithoutFarmsNestedInput
    flowers_farms?: flowers_farmsUpdateOneRequiredWithoutFlowersNestedInput
  }

  export type flowers_and_flowers_farmsUncheckedUpdateInput = {
    flower_id?: IntFieldUpdateOperationsInput | number
    flower_farm_id?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_and_flowers_farmsCreateManyInput = {
    flower_id: number
    flower_farm_id: number
  }

  export type flowers_and_flowers_farmsUpdateManyMutationInput = {

  }

  export type flowers_and_flowers_farmsUncheckedUpdateManyInput = {
    flower_id?: IntFieldUpdateOperationsInput | number
    flower_farm_id?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_bouquetsCreateInput = {
    name_en: string
    name_ru: string
    price: number
    flowers?: flowers_and_flowers_bouquetsCreateNestedManyWithoutFlowers_bouquetsInput
  }

  export type flowers_bouquetsUncheckedCreateInput = {
    id?: number
    name_en: string
    name_ru: string
    price: number
    flowers?: flowers_and_flowers_bouquetsUncheckedCreateNestedManyWithoutFlowers_bouquetsInput
  }

  export type flowers_bouquetsUpdateInput = {
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    flowers?: flowers_and_flowers_bouquetsUpdateManyWithoutFlowers_bouquetsNestedInput
  }

  export type flowers_bouquetsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    flowers?: flowers_and_flowers_bouquetsUncheckedUpdateManyWithoutFlowers_bouquetsNestedInput
  }

  export type flowers_bouquetsCreateManyInput = {
    id?: number
    name_en: string
    name_ru: string
    price: number
  }

  export type flowers_bouquetsUpdateManyMutationInput = {
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_bouquetsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_and_flowers_bouquetsCreateInput = {
    flowers: flowersCreateNestedOneWithoutBouquetsInput
    flowers_bouquets: flowers_bouquetsCreateNestedOneWithoutFlowersInput
  }

  export type flowers_and_flowers_bouquetsUncheckedCreateInput = {
    flower_id: number
    flower_bouquet_id: number
  }

  export type flowers_and_flowers_bouquetsUpdateInput = {
    flowers?: flowersUpdateOneRequiredWithoutBouquetsNestedInput
    flowers_bouquets?: flowers_bouquetsUpdateOneRequiredWithoutFlowersNestedInput
  }

  export type flowers_and_flowers_bouquetsUncheckedUpdateInput = {
    flower_id?: IntFieldUpdateOperationsInput | number
    flower_bouquet_id?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_and_flowers_bouquetsCreateManyInput = {
    flower_id: number
    flower_bouquet_id: number
  }

  export type flowers_and_flowers_bouquetsUpdateManyMutationInput = {

  }

  export type flowers_and_flowers_bouquetsUncheckedUpdateManyInput = {
    flower_id?: IntFieldUpdateOperationsInput | number
    flower_bouquet_id?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_and_filesCreateInput = {
    flowers: flowersCreateNestedOneWithoutImgsInput
    public_files: public_filesCreateNestedOneWithoutFlowersInput
  }

  export type flowers_and_filesUncheckedCreateInput = {
    flower_id: number
    public_file_name: string
  }

  export type flowers_and_filesUpdateInput = {
    flowers?: flowersUpdateOneRequiredWithoutImgsNestedInput
    public_files?: public_filesUpdateOneRequiredWithoutFlowersNestedInput
  }

  export type flowers_and_filesUncheckedUpdateInput = {
    flower_id?: IntFieldUpdateOperationsInput | number
    public_file_name?: StringFieldUpdateOperationsInput | string
  }

  export type flowers_and_filesCreateManyInput = {
    flower_id: number
    public_file_name: string
  }

  export type flowers_and_filesUpdateManyMutationInput = {

  }

  export type flowers_and_filesUncheckedUpdateManyInput = {
    flower_id?: IntFieldUpdateOperationsInput | number
    public_file_name?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    email: string
    email_verified?: boolean
    name: string
    password?: string | null
    signature?: string | null
    role?: string
    oauth?: string | null
    oauth_id?: string | null
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    email_verified?: boolean
    name: string
    password?: string | null
    signature?: string | null
    role?: string
    oauth?: string | null
    oauth_id?: string | null
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauth?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauth?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    email_verified?: boolean
    name: string
    password?: string | null
    signature?: string | null
    role?: string
    oauth?: string | null
    oauth_id?: string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauth?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauth?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type users_filesCreateInput = {
    user_id: number
    file_id: number
  }

  export type users_filesUncheckedCreateInput = {
    user_id: number
    file_id: number
  }

  export type users_filesUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    file_id?: IntFieldUpdateOperationsInput | number
  }

  export type users_filesUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    file_id?: IntFieldUpdateOperationsInput | number
  }

  export type users_filesCreateManyInput = {
    user_id: number
    file_id: number
  }

  export type users_filesUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    file_id?: IntFieldUpdateOperationsInput | number
  }

  export type users_filesUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    file_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type Flowers_and_filesListRelationFilter = {
    every?: flowers_and_filesWhereInput
    some?: flowers_and_filesWhereInput
    none?: flowers_and_filesWhereInput
  }

  export type flowers_and_filesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type public_filesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    upload_at?: SortOrder
  }

  export type public_filesAvgOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type public_filesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    upload_at?: SortOrder
  }

  export type public_filesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    upload_at?: SortOrder
  }

  export type public_filesSumOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type private_filesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    upload_at?: SortOrder
  }

  export type private_filesAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type private_filesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    upload_at?: SortOrder
  }

  export type private_filesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    upload_at?: SortOrder
  }

  export type private_filesSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type Flowers_historyListRelationFilter = {
    every?: flowers_historyWhereInput
    some?: flowers_historyWhereInput
    none?: flowers_historyWhereInput
  }

  export type Flowers_varietyScalarRelationFilter = {
    is?: flowers_varietyWhereInput
    isNot?: flowers_varietyWhereInput
  }

  export type Flowers_and_flowers_farmsListRelationFilter = {
    every?: flowers_and_flowers_farmsWhereInput
    some?: flowers_and_flowers_farmsWhereInput
    none?: flowers_and_flowers_farmsWhereInput
  }

  export type Flowers_and_flowers_bouquetsListRelationFilter = {
    every?: flowers_and_flowers_bouquetsWhereInput
    some?: flowers_and_flowers_bouquetsWhereInput
    none?: flowers_and_flowers_bouquetsWhereInput
  }

  export type flowers_historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type flowers_and_flowers_farmsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type flowers_and_flowers_bouquetsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type flowersCountOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
    price?: SortOrder
    variety_id?: SortOrder
  }

  export type flowersAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    variety_id?: SortOrder
  }

  export type flowersMaxOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
    price?: SortOrder
    variety_id?: SortOrder
  }

  export type flowersMinOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
    price?: SortOrder
    variety_id?: SortOrder
  }

  export type flowersSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    variety_id?: SortOrder
  }

  export type FlowersListRelationFilter = {
    every?: flowersWhereInput
    some?: flowersWhereInput
    none?: flowersWhereInput
  }

  export type flowersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type flowers_varietyCountOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
  }

  export type flowers_varietyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type flowers_varietyMaxOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
  }

  export type flowers_varietyMinOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
  }

  export type flowers_varietySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FlowersScalarRelationFilter = {
    is?: flowersWhereInput
    isNot?: flowersWhereInput
  }

  export type flowers_historyCountOrderByAggregateInput = {
    id?: SortOrder
    flower_id?: SortOrder
    date?: SortOrder
    price?: SortOrder
  }

  export type flowers_historyAvgOrderByAggregateInput = {
    id?: SortOrder
    flower_id?: SortOrder
    date?: SortOrder
    price?: SortOrder
  }

  export type flowers_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    flower_id?: SortOrder
    date?: SortOrder
    price?: SortOrder
  }

  export type flowers_historyMinOrderByAggregateInput = {
    id?: SortOrder
    flower_id?: SortOrder
    date?: SortOrder
    price?: SortOrder
  }

  export type flowers_historySumOrderByAggregateInput = {
    id?: SortOrder
    flower_id?: SortOrder
    date?: SortOrder
    price?: SortOrder
  }

  export type flowers_farmsCountOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
    country?: SortOrder
    rate?: SortOrder
  }

  export type flowers_farmsAvgOrderByAggregateInput = {
    id?: SortOrder
    rate?: SortOrder
  }

  export type flowers_farmsMaxOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
    country?: SortOrder
    rate?: SortOrder
  }

  export type flowers_farmsMinOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
    country?: SortOrder
    rate?: SortOrder
  }

  export type flowers_farmsSumOrderByAggregateInput = {
    id?: SortOrder
    rate?: SortOrder
  }

  export type Flowers_farmsScalarRelationFilter = {
    is?: flowers_farmsWhereInput
    isNot?: flowers_farmsWhereInput
  }

  export type flowers_and_flowers_farmsFlower_idFlower_farm_idCompoundUniqueInput = {
    flower_id: number
    flower_farm_id: number
  }

  export type flowers_and_flowers_farmsCountOrderByAggregateInput = {
    flower_id?: SortOrder
    flower_farm_id?: SortOrder
  }

  export type flowers_and_flowers_farmsAvgOrderByAggregateInput = {
    flower_id?: SortOrder
    flower_farm_id?: SortOrder
  }

  export type flowers_and_flowers_farmsMaxOrderByAggregateInput = {
    flower_id?: SortOrder
    flower_farm_id?: SortOrder
  }

  export type flowers_and_flowers_farmsMinOrderByAggregateInput = {
    flower_id?: SortOrder
    flower_farm_id?: SortOrder
  }

  export type flowers_and_flowers_farmsSumOrderByAggregateInput = {
    flower_id?: SortOrder
    flower_farm_id?: SortOrder
  }

  export type flowers_bouquetsCountOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
    price?: SortOrder
  }

  export type flowers_bouquetsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type flowers_bouquetsMaxOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
    price?: SortOrder
  }

  export type flowers_bouquetsMinOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_ru?: SortOrder
    price?: SortOrder
  }

  export type flowers_bouquetsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type Flowers_bouquetsScalarRelationFilter = {
    is?: flowers_bouquetsWhereInput
    isNot?: flowers_bouquetsWhereInput
  }

  export type flowers_and_flowers_bouquetsFlower_idFlower_bouquet_idCompoundUniqueInput = {
    flower_id: number
    flower_bouquet_id: number
  }

  export type flowers_and_flowers_bouquetsCountOrderByAggregateInput = {
    flower_id?: SortOrder
    flower_bouquet_id?: SortOrder
  }

  export type flowers_and_flowers_bouquetsAvgOrderByAggregateInput = {
    flower_id?: SortOrder
    flower_bouquet_id?: SortOrder
  }

  export type flowers_and_flowers_bouquetsMaxOrderByAggregateInput = {
    flower_id?: SortOrder
    flower_bouquet_id?: SortOrder
  }

  export type flowers_and_flowers_bouquetsMinOrderByAggregateInput = {
    flower_id?: SortOrder
    flower_bouquet_id?: SortOrder
  }

  export type flowers_and_flowers_bouquetsSumOrderByAggregateInput = {
    flower_id?: SortOrder
    flower_bouquet_id?: SortOrder
  }

  export type Public_filesScalarRelationFilter = {
    is?: public_filesWhereInput
    isNot?: public_filesWhereInput
  }

  export type flowers_and_filesFlower_idPublic_file_nameCompoundUniqueInput = {
    flower_id: number
    public_file_name: string
  }

  export type flowers_and_filesCountOrderByAggregateInput = {
    flower_id?: SortOrder
    public_file_name?: SortOrder
  }

  export type flowers_and_filesAvgOrderByAggregateInput = {
    flower_id?: SortOrder
  }

  export type flowers_and_filesMaxOrderByAggregateInput = {
    flower_id?: SortOrder
    public_file_name?: SortOrder
  }

  export type flowers_and_filesMinOrderByAggregateInput = {
    flower_id?: SortOrder
    public_file_name?: SortOrder
  }

  export type flowers_and_filesSumOrderByAggregateInput = {
    flower_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    name?: SortOrder
    password?: SortOrder
    signature?: SortOrder
    role?: SortOrder
    oauth?: SortOrder
    oauth_id?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    name?: SortOrder
    password?: SortOrder
    signature?: SortOrder
    role?: SortOrder
    oauth?: SortOrder
    oauth_id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    name?: SortOrder
    password?: SortOrder
    signature?: SortOrder
    role?: SortOrder
    oauth?: SortOrder
    oauth_id?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type users_filesUser_idFile_idCompoundUniqueInput = {
    user_id: number
    file_id: number
  }

  export type users_filesCountOrderByAggregateInput = {
    user_id?: SortOrder
    file_id?: SortOrder
  }

  export type users_filesAvgOrderByAggregateInput = {
    user_id?: SortOrder
    file_id?: SortOrder
  }

  export type users_filesMaxOrderByAggregateInput = {
    user_id?: SortOrder
    file_id?: SortOrder
  }

  export type users_filesMinOrderByAggregateInput = {
    user_id?: SortOrder
    file_id?: SortOrder
  }

  export type users_filesSumOrderByAggregateInput = {
    user_id?: SortOrder
    file_id?: SortOrder
  }

  export type flowers_and_filesCreateNestedManyWithoutPublic_filesInput = {
    create?: XOR<flowers_and_filesCreateWithoutPublic_filesInput, flowers_and_filesUncheckedCreateWithoutPublic_filesInput> | flowers_and_filesCreateWithoutPublic_filesInput[] | flowers_and_filesUncheckedCreateWithoutPublic_filesInput[]
    connectOrCreate?: flowers_and_filesCreateOrConnectWithoutPublic_filesInput | flowers_and_filesCreateOrConnectWithoutPublic_filesInput[]
    createMany?: flowers_and_filesCreateManyPublic_filesInputEnvelope
    connect?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
  }

  export type flowers_and_filesUncheckedCreateNestedManyWithoutPublic_filesInput = {
    create?: XOR<flowers_and_filesCreateWithoutPublic_filesInput, flowers_and_filesUncheckedCreateWithoutPublic_filesInput> | flowers_and_filesCreateWithoutPublic_filesInput[] | flowers_and_filesUncheckedCreateWithoutPublic_filesInput[]
    connectOrCreate?: flowers_and_filesCreateOrConnectWithoutPublic_filesInput | flowers_and_filesCreateOrConnectWithoutPublic_filesInput[]
    createMany?: flowers_and_filesCreateManyPublic_filesInputEnvelope
    connect?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type flowers_and_filesUpdateManyWithoutPublic_filesNestedInput = {
    create?: XOR<flowers_and_filesCreateWithoutPublic_filesInput, flowers_and_filesUncheckedCreateWithoutPublic_filesInput> | flowers_and_filesCreateWithoutPublic_filesInput[] | flowers_and_filesUncheckedCreateWithoutPublic_filesInput[]
    connectOrCreate?: flowers_and_filesCreateOrConnectWithoutPublic_filesInput | flowers_and_filesCreateOrConnectWithoutPublic_filesInput[]
    upsert?: flowers_and_filesUpsertWithWhereUniqueWithoutPublic_filesInput | flowers_and_filesUpsertWithWhereUniqueWithoutPublic_filesInput[]
    createMany?: flowers_and_filesCreateManyPublic_filesInputEnvelope
    set?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
    disconnect?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
    delete?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
    connect?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
    update?: flowers_and_filesUpdateWithWhereUniqueWithoutPublic_filesInput | flowers_and_filesUpdateWithWhereUniqueWithoutPublic_filesInput[]
    updateMany?: flowers_and_filesUpdateManyWithWhereWithoutPublic_filesInput | flowers_and_filesUpdateManyWithWhereWithoutPublic_filesInput[]
    deleteMany?: flowers_and_filesScalarWhereInput | flowers_and_filesScalarWhereInput[]
  }

  export type flowers_and_filesUncheckedUpdateManyWithoutPublic_filesNestedInput = {
    create?: XOR<flowers_and_filesCreateWithoutPublic_filesInput, flowers_and_filesUncheckedCreateWithoutPublic_filesInput> | flowers_and_filesCreateWithoutPublic_filesInput[] | flowers_and_filesUncheckedCreateWithoutPublic_filesInput[]
    connectOrCreate?: flowers_and_filesCreateOrConnectWithoutPublic_filesInput | flowers_and_filesCreateOrConnectWithoutPublic_filesInput[]
    upsert?: flowers_and_filesUpsertWithWhereUniqueWithoutPublic_filesInput | flowers_and_filesUpsertWithWhereUniqueWithoutPublic_filesInput[]
    createMany?: flowers_and_filesCreateManyPublic_filesInputEnvelope
    set?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
    disconnect?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
    delete?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
    connect?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
    update?: flowers_and_filesUpdateWithWhereUniqueWithoutPublic_filesInput | flowers_and_filesUpdateWithWhereUniqueWithoutPublic_filesInput[]
    updateMany?: flowers_and_filesUpdateManyWithWhereWithoutPublic_filesInput | flowers_and_filesUpdateManyWithWhereWithoutPublic_filesInput[]
    deleteMany?: flowers_and_filesScalarWhereInput | flowers_and_filesScalarWhereInput[]
  }

  export type flowers_historyCreateNestedManyWithoutFlowerInput = {
    create?: XOR<flowers_historyCreateWithoutFlowerInput, flowers_historyUncheckedCreateWithoutFlowerInput> | flowers_historyCreateWithoutFlowerInput[] | flowers_historyUncheckedCreateWithoutFlowerInput[]
    connectOrCreate?: flowers_historyCreateOrConnectWithoutFlowerInput | flowers_historyCreateOrConnectWithoutFlowerInput[]
    createMany?: flowers_historyCreateManyFlowerInputEnvelope
    connect?: flowers_historyWhereUniqueInput | flowers_historyWhereUniqueInput[]
  }

  export type flowers_varietyCreateNestedOneWithoutFlowersInput = {
    create?: XOR<flowers_varietyCreateWithoutFlowersInput, flowers_varietyUncheckedCreateWithoutFlowersInput>
    connectOrCreate?: flowers_varietyCreateOrConnectWithoutFlowersInput
    connect?: flowers_varietyWhereUniqueInput
  }

  export type flowers_and_filesCreateNestedManyWithoutFlowersInput = {
    create?: XOR<flowers_and_filesCreateWithoutFlowersInput, flowers_and_filesUncheckedCreateWithoutFlowersInput> | flowers_and_filesCreateWithoutFlowersInput[] | flowers_and_filesUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: flowers_and_filesCreateOrConnectWithoutFlowersInput | flowers_and_filesCreateOrConnectWithoutFlowersInput[]
    createMany?: flowers_and_filesCreateManyFlowersInputEnvelope
    connect?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
  }

  export type flowers_and_flowers_farmsCreateNestedManyWithoutFlowersInput = {
    create?: XOR<flowers_and_flowers_farmsCreateWithoutFlowersInput, flowers_and_flowers_farmsUncheckedCreateWithoutFlowersInput> | flowers_and_flowers_farmsCreateWithoutFlowersInput[] | flowers_and_flowers_farmsUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: flowers_and_flowers_farmsCreateOrConnectWithoutFlowersInput | flowers_and_flowers_farmsCreateOrConnectWithoutFlowersInput[]
    createMany?: flowers_and_flowers_farmsCreateManyFlowersInputEnvelope
    connect?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
  }

  export type flowers_and_flowers_bouquetsCreateNestedManyWithoutFlowersInput = {
    create?: XOR<flowers_and_flowers_bouquetsCreateWithoutFlowersInput, flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowersInput> | flowers_and_flowers_bouquetsCreateWithoutFlowersInput[] | flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: flowers_and_flowers_bouquetsCreateOrConnectWithoutFlowersInput | flowers_and_flowers_bouquetsCreateOrConnectWithoutFlowersInput[]
    createMany?: flowers_and_flowers_bouquetsCreateManyFlowersInputEnvelope
    connect?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
  }

  export type flowers_historyUncheckedCreateNestedManyWithoutFlowerInput = {
    create?: XOR<flowers_historyCreateWithoutFlowerInput, flowers_historyUncheckedCreateWithoutFlowerInput> | flowers_historyCreateWithoutFlowerInput[] | flowers_historyUncheckedCreateWithoutFlowerInput[]
    connectOrCreate?: flowers_historyCreateOrConnectWithoutFlowerInput | flowers_historyCreateOrConnectWithoutFlowerInput[]
    createMany?: flowers_historyCreateManyFlowerInputEnvelope
    connect?: flowers_historyWhereUniqueInput | flowers_historyWhereUniqueInput[]
  }

  export type flowers_and_filesUncheckedCreateNestedManyWithoutFlowersInput = {
    create?: XOR<flowers_and_filesCreateWithoutFlowersInput, flowers_and_filesUncheckedCreateWithoutFlowersInput> | flowers_and_filesCreateWithoutFlowersInput[] | flowers_and_filesUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: flowers_and_filesCreateOrConnectWithoutFlowersInput | flowers_and_filesCreateOrConnectWithoutFlowersInput[]
    createMany?: flowers_and_filesCreateManyFlowersInputEnvelope
    connect?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
  }

  export type flowers_and_flowers_farmsUncheckedCreateNestedManyWithoutFlowersInput = {
    create?: XOR<flowers_and_flowers_farmsCreateWithoutFlowersInput, flowers_and_flowers_farmsUncheckedCreateWithoutFlowersInput> | flowers_and_flowers_farmsCreateWithoutFlowersInput[] | flowers_and_flowers_farmsUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: flowers_and_flowers_farmsCreateOrConnectWithoutFlowersInput | flowers_and_flowers_farmsCreateOrConnectWithoutFlowersInput[]
    createMany?: flowers_and_flowers_farmsCreateManyFlowersInputEnvelope
    connect?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
  }

  export type flowers_and_flowers_bouquetsUncheckedCreateNestedManyWithoutFlowersInput = {
    create?: XOR<flowers_and_flowers_bouquetsCreateWithoutFlowersInput, flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowersInput> | flowers_and_flowers_bouquetsCreateWithoutFlowersInput[] | flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: flowers_and_flowers_bouquetsCreateOrConnectWithoutFlowersInput | flowers_and_flowers_bouquetsCreateOrConnectWithoutFlowersInput[]
    createMany?: flowers_and_flowers_bouquetsCreateManyFlowersInputEnvelope
    connect?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
  }

  export type flowers_historyUpdateManyWithoutFlowerNestedInput = {
    create?: XOR<flowers_historyCreateWithoutFlowerInput, flowers_historyUncheckedCreateWithoutFlowerInput> | flowers_historyCreateWithoutFlowerInput[] | flowers_historyUncheckedCreateWithoutFlowerInput[]
    connectOrCreate?: flowers_historyCreateOrConnectWithoutFlowerInput | flowers_historyCreateOrConnectWithoutFlowerInput[]
    upsert?: flowers_historyUpsertWithWhereUniqueWithoutFlowerInput | flowers_historyUpsertWithWhereUniqueWithoutFlowerInput[]
    createMany?: flowers_historyCreateManyFlowerInputEnvelope
    set?: flowers_historyWhereUniqueInput | flowers_historyWhereUniqueInput[]
    disconnect?: flowers_historyWhereUniqueInput | flowers_historyWhereUniqueInput[]
    delete?: flowers_historyWhereUniqueInput | flowers_historyWhereUniqueInput[]
    connect?: flowers_historyWhereUniqueInput | flowers_historyWhereUniqueInput[]
    update?: flowers_historyUpdateWithWhereUniqueWithoutFlowerInput | flowers_historyUpdateWithWhereUniqueWithoutFlowerInput[]
    updateMany?: flowers_historyUpdateManyWithWhereWithoutFlowerInput | flowers_historyUpdateManyWithWhereWithoutFlowerInput[]
    deleteMany?: flowers_historyScalarWhereInput | flowers_historyScalarWhereInput[]
  }

  export type flowers_varietyUpdateOneRequiredWithoutFlowersNestedInput = {
    create?: XOR<flowers_varietyCreateWithoutFlowersInput, flowers_varietyUncheckedCreateWithoutFlowersInput>
    connectOrCreate?: flowers_varietyCreateOrConnectWithoutFlowersInput
    upsert?: flowers_varietyUpsertWithoutFlowersInput
    connect?: flowers_varietyWhereUniqueInput
    update?: XOR<XOR<flowers_varietyUpdateToOneWithWhereWithoutFlowersInput, flowers_varietyUpdateWithoutFlowersInput>, flowers_varietyUncheckedUpdateWithoutFlowersInput>
  }

  export type flowers_and_filesUpdateManyWithoutFlowersNestedInput = {
    create?: XOR<flowers_and_filesCreateWithoutFlowersInput, flowers_and_filesUncheckedCreateWithoutFlowersInput> | flowers_and_filesCreateWithoutFlowersInput[] | flowers_and_filesUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: flowers_and_filesCreateOrConnectWithoutFlowersInput | flowers_and_filesCreateOrConnectWithoutFlowersInput[]
    upsert?: flowers_and_filesUpsertWithWhereUniqueWithoutFlowersInput | flowers_and_filesUpsertWithWhereUniqueWithoutFlowersInput[]
    createMany?: flowers_and_filesCreateManyFlowersInputEnvelope
    set?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
    disconnect?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
    delete?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
    connect?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
    update?: flowers_and_filesUpdateWithWhereUniqueWithoutFlowersInput | flowers_and_filesUpdateWithWhereUniqueWithoutFlowersInput[]
    updateMany?: flowers_and_filesUpdateManyWithWhereWithoutFlowersInput | flowers_and_filesUpdateManyWithWhereWithoutFlowersInput[]
    deleteMany?: flowers_and_filesScalarWhereInput | flowers_and_filesScalarWhereInput[]
  }

  export type flowers_and_flowers_farmsUpdateManyWithoutFlowersNestedInput = {
    create?: XOR<flowers_and_flowers_farmsCreateWithoutFlowersInput, flowers_and_flowers_farmsUncheckedCreateWithoutFlowersInput> | flowers_and_flowers_farmsCreateWithoutFlowersInput[] | flowers_and_flowers_farmsUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: flowers_and_flowers_farmsCreateOrConnectWithoutFlowersInput | flowers_and_flowers_farmsCreateOrConnectWithoutFlowersInput[]
    upsert?: flowers_and_flowers_farmsUpsertWithWhereUniqueWithoutFlowersInput | flowers_and_flowers_farmsUpsertWithWhereUniqueWithoutFlowersInput[]
    createMany?: flowers_and_flowers_farmsCreateManyFlowersInputEnvelope
    set?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
    disconnect?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
    delete?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
    connect?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
    update?: flowers_and_flowers_farmsUpdateWithWhereUniqueWithoutFlowersInput | flowers_and_flowers_farmsUpdateWithWhereUniqueWithoutFlowersInput[]
    updateMany?: flowers_and_flowers_farmsUpdateManyWithWhereWithoutFlowersInput | flowers_and_flowers_farmsUpdateManyWithWhereWithoutFlowersInput[]
    deleteMany?: flowers_and_flowers_farmsScalarWhereInput | flowers_and_flowers_farmsScalarWhereInput[]
  }

  export type flowers_and_flowers_bouquetsUpdateManyWithoutFlowersNestedInput = {
    create?: XOR<flowers_and_flowers_bouquetsCreateWithoutFlowersInput, flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowersInput> | flowers_and_flowers_bouquetsCreateWithoutFlowersInput[] | flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: flowers_and_flowers_bouquetsCreateOrConnectWithoutFlowersInput | flowers_and_flowers_bouquetsCreateOrConnectWithoutFlowersInput[]
    upsert?: flowers_and_flowers_bouquetsUpsertWithWhereUniqueWithoutFlowersInput | flowers_and_flowers_bouquetsUpsertWithWhereUniqueWithoutFlowersInput[]
    createMany?: flowers_and_flowers_bouquetsCreateManyFlowersInputEnvelope
    set?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
    disconnect?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
    delete?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
    connect?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
    update?: flowers_and_flowers_bouquetsUpdateWithWhereUniqueWithoutFlowersInput | flowers_and_flowers_bouquetsUpdateWithWhereUniqueWithoutFlowersInput[]
    updateMany?: flowers_and_flowers_bouquetsUpdateManyWithWhereWithoutFlowersInput | flowers_and_flowers_bouquetsUpdateManyWithWhereWithoutFlowersInput[]
    deleteMany?: flowers_and_flowers_bouquetsScalarWhereInput | flowers_and_flowers_bouquetsScalarWhereInput[]
  }

  export type flowers_historyUncheckedUpdateManyWithoutFlowerNestedInput = {
    create?: XOR<flowers_historyCreateWithoutFlowerInput, flowers_historyUncheckedCreateWithoutFlowerInput> | flowers_historyCreateWithoutFlowerInput[] | flowers_historyUncheckedCreateWithoutFlowerInput[]
    connectOrCreate?: flowers_historyCreateOrConnectWithoutFlowerInput | flowers_historyCreateOrConnectWithoutFlowerInput[]
    upsert?: flowers_historyUpsertWithWhereUniqueWithoutFlowerInput | flowers_historyUpsertWithWhereUniqueWithoutFlowerInput[]
    createMany?: flowers_historyCreateManyFlowerInputEnvelope
    set?: flowers_historyWhereUniqueInput | flowers_historyWhereUniqueInput[]
    disconnect?: flowers_historyWhereUniqueInput | flowers_historyWhereUniqueInput[]
    delete?: flowers_historyWhereUniqueInput | flowers_historyWhereUniqueInput[]
    connect?: flowers_historyWhereUniqueInput | flowers_historyWhereUniqueInput[]
    update?: flowers_historyUpdateWithWhereUniqueWithoutFlowerInput | flowers_historyUpdateWithWhereUniqueWithoutFlowerInput[]
    updateMany?: flowers_historyUpdateManyWithWhereWithoutFlowerInput | flowers_historyUpdateManyWithWhereWithoutFlowerInput[]
    deleteMany?: flowers_historyScalarWhereInput | flowers_historyScalarWhereInput[]
  }

  export type flowers_and_filesUncheckedUpdateManyWithoutFlowersNestedInput = {
    create?: XOR<flowers_and_filesCreateWithoutFlowersInput, flowers_and_filesUncheckedCreateWithoutFlowersInput> | flowers_and_filesCreateWithoutFlowersInput[] | flowers_and_filesUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: flowers_and_filesCreateOrConnectWithoutFlowersInput | flowers_and_filesCreateOrConnectWithoutFlowersInput[]
    upsert?: flowers_and_filesUpsertWithWhereUniqueWithoutFlowersInput | flowers_and_filesUpsertWithWhereUniqueWithoutFlowersInput[]
    createMany?: flowers_and_filesCreateManyFlowersInputEnvelope
    set?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
    disconnect?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
    delete?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
    connect?: flowers_and_filesWhereUniqueInput | flowers_and_filesWhereUniqueInput[]
    update?: flowers_and_filesUpdateWithWhereUniqueWithoutFlowersInput | flowers_and_filesUpdateWithWhereUniqueWithoutFlowersInput[]
    updateMany?: flowers_and_filesUpdateManyWithWhereWithoutFlowersInput | flowers_and_filesUpdateManyWithWhereWithoutFlowersInput[]
    deleteMany?: flowers_and_filesScalarWhereInput | flowers_and_filesScalarWhereInput[]
  }

  export type flowers_and_flowers_farmsUncheckedUpdateManyWithoutFlowersNestedInput = {
    create?: XOR<flowers_and_flowers_farmsCreateWithoutFlowersInput, flowers_and_flowers_farmsUncheckedCreateWithoutFlowersInput> | flowers_and_flowers_farmsCreateWithoutFlowersInput[] | flowers_and_flowers_farmsUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: flowers_and_flowers_farmsCreateOrConnectWithoutFlowersInput | flowers_and_flowers_farmsCreateOrConnectWithoutFlowersInput[]
    upsert?: flowers_and_flowers_farmsUpsertWithWhereUniqueWithoutFlowersInput | flowers_and_flowers_farmsUpsertWithWhereUniqueWithoutFlowersInput[]
    createMany?: flowers_and_flowers_farmsCreateManyFlowersInputEnvelope
    set?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
    disconnect?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
    delete?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
    connect?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
    update?: flowers_and_flowers_farmsUpdateWithWhereUniqueWithoutFlowersInput | flowers_and_flowers_farmsUpdateWithWhereUniqueWithoutFlowersInput[]
    updateMany?: flowers_and_flowers_farmsUpdateManyWithWhereWithoutFlowersInput | flowers_and_flowers_farmsUpdateManyWithWhereWithoutFlowersInput[]
    deleteMany?: flowers_and_flowers_farmsScalarWhereInput | flowers_and_flowers_farmsScalarWhereInput[]
  }

  export type flowers_and_flowers_bouquetsUncheckedUpdateManyWithoutFlowersNestedInput = {
    create?: XOR<flowers_and_flowers_bouquetsCreateWithoutFlowersInput, flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowersInput> | flowers_and_flowers_bouquetsCreateWithoutFlowersInput[] | flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: flowers_and_flowers_bouquetsCreateOrConnectWithoutFlowersInput | flowers_and_flowers_bouquetsCreateOrConnectWithoutFlowersInput[]
    upsert?: flowers_and_flowers_bouquetsUpsertWithWhereUniqueWithoutFlowersInput | flowers_and_flowers_bouquetsUpsertWithWhereUniqueWithoutFlowersInput[]
    createMany?: flowers_and_flowers_bouquetsCreateManyFlowersInputEnvelope
    set?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
    disconnect?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
    delete?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
    connect?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
    update?: flowers_and_flowers_bouquetsUpdateWithWhereUniqueWithoutFlowersInput | flowers_and_flowers_bouquetsUpdateWithWhereUniqueWithoutFlowersInput[]
    updateMany?: flowers_and_flowers_bouquetsUpdateManyWithWhereWithoutFlowersInput | flowers_and_flowers_bouquetsUpdateManyWithWhereWithoutFlowersInput[]
    deleteMany?: flowers_and_flowers_bouquetsScalarWhereInput | flowers_and_flowers_bouquetsScalarWhereInput[]
  }

  export type flowersCreateNestedManyWithoutVarietyInput = {
    create?: XOR<flowersCreateWithoutVarietyInput, flowersUncheckedCreateWithoutVarietyInput> | flowersCreateWithoutVarietyInput[] | flowersUncheckedCreateWithoutVarietyInput[]
    connectOrCreate?: flowersCreateOrConnectWithoutVarietyInput | flowersCreateOrConnectWithoutVarietyInput[]
    createMany?: flowersCreateManyVarietyInputEnvelope
    connect?: flowersWhereUniqueInput | flowersWhereUniqueInput[]
  }

  export type flowersUncheckedCreateNestedManyWithoutVarietyInput = {
    create?: XOR<flowersCreateWithoutVarietyInput, flowersUncheckedCreateWithoutVarietyInput> | flowersCreateWithoutVarietyInput[] | flowersUncheckedCreateWithoutVarietyInput[]
    connectOrCreate?: flowersCreateOrConnectWithoutVarietyInput | flowersCreateOrConnectWithoutVarietyInput[]
    createMany?: flowersCreateManyVarietyInputEnvelope
    connect?: flowersWhereUniqueInput | flowersWhereUniqueInput[]
  }

  export type flowersUpdateManyWithoutVarietyNestedInput = {
    create?: XOR<flowersCreateWithoutVarietyInput, flowersUncheckedCreateWithoutVarietyInput> | flowersCreateWithoutVarietyInput[] | flowersUncheckedCreateWithoutVarietyInput[]
    connectOrCreate?: flowersCreateOrConnectWithoutVarietyInput | flowersCreateOrConnectWithoutVarietyInput[]
    upsert?: flowersUpsertWithWhereUniqueWithoutVarietyInput | flowersUpsertWithWhereUniqueWithoutVarietyInput[]
    createMany?: flowersCreateManyVarietyInputEnvelope
    set?: flowersWhereUniqueInput | flowersWhereUniqueInput[]
    disconnect?: flowersWhereUniqueInput | flowersWhereUniqueInput[]
    delete?: flowersWhereUniqueInput | flowersWhereUniqueInput[]
    connect?: flowersWhereUniqueInput | flowersWhereUniqueInput[]
    update?: flowersUpdateWithWhereUniqueWithoutVarietyInput | flowersUpdateWithWhereUniqueWithoutVarietyInput[]
    updateMany?: flowersUpdateManyWithWhereWithoutVarietyInput | flowersUpdateManyWithWhereWithoutVarietyInput[]
    deleteMany?: flowersScalarWhereInput | flowersScalarWhereInput[]
  }

  export type flowersUncheckedUpdateManyWithoutVarietyNestedInput = {
    create?: XOR<flowersCreateWithoutVarietyInput, flowersUncheckedCreateWithoutVarietyInput> | flowersCreateWithoutVarietyInput[] | flowersUncheckedCreateWithoutVarietyInput[]
    connectOrCreate?: flowersCreateOrConnectWithoutVarietyInput | flowersCreateOrConnectWithoutVarietyInput[]
    upsert?: flowersUpsertWithWhereUniqueWithoutVarietyInput | flowersUpsertWithWhereUniqueWithoutVarietyInput[]
    createMany?: flowersCreateManyVarietyInputEnvelope
    set?: flowersWhereUniqueInput | flowersWhereUniqueInput[]
    disconnect?: flowersWhereUniqueInput | flowersWhereUniqueInput[]
    delete?: flowersWhereUniqueInput | flowersWhereUniqueInput[]
    connect?: flowersWhereUniqueInput | flowersWhereUniqueInput[]
    update?: flowersUpdateWithWhereUniqueWithoutVarietyInput | flowersUpdateWithWhereUniqueWithoutVarietyInput[]
    updateMany?: flowersUpdateManyWithWhereWithoutVarietyInput | flowersUpdateManyWithWhereWithoutVarietyInput[]
    deleteMany?: flowersScalarWhereInput | flowersScalarWhereInput[]
  }

  export type flowersCreateNestedOneWithoutHistoryInput = {
    create?: XOR<flowersCreateWithoutHistoryInput, flowersUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: flowersCreateOrConnectWithoutHistoryInput
    connect?: flowersWhereUniqueInput
  }

  export type flowersUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<flowersCreateWithoutHistoryInput, flowersUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: flowersCreateOrConnectWithoutHistoryInput
    upsert?: flowersUpsertWithoutHistoryInput
    connect?: flowersWhereUniqueInput
    update?: XOR<XOR<flowersUpdateToOneWithWhereWithoutHistoryInput, flowersUpdateWithoutHistoryInput>, flowersUncheckedUpdateWithoutHistoryInput>
  }

  export type flowers_and_flowers_farmsCreateNestedManyWithoutFlowers_farmsInput = {
    create?: XOR<flowers_and_flowers_farmsCreateWithoutFlowers_farmsInput, flowers_and_flowers_farmsUncheckedCreateWithoutFlowers_farmsInput> | flowers_and_flowers_farmsCreateWithoutFlowers_farmsInput[] | flowers_and_flowers_farmsUncheckedCreateWithoutFlowers_farmsInput[]
    connectOrCreate?: flowers_and_flowers_farmsCreateOrConnectWithoutFlowers_farmsInput | flowers_and_flowers_farmsCreateOrConnectWithoutFlowers_farmsInput[]
    createMany?: flowers_and_flowers_farmsCreateManyFlowers_farmsInputEnvelope
    connect?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
  }

  export type flowers_and_flowers_farmsUncheckedCreateNestedManyWithoutFlowers_farmsInput = {
    create?: XOR<flowers_and_flowers_farmsCreateWithoutFlowers_farmsInput, flowers_and_flowers_farmsUncheckedCreateWithoutFlowers_farmsInput> | flowers_and_flowers_farmsCreateWithoutFlowers_farmsInput[] | flowers_and_flowers_farmsUncheckedCreateWithoutFlowers_farmsInput[]
    connectOrCreate?: flowers_and_flowers_farmsCreateOrConnectWithoutFlowers_farmsInput | flowers_and_flowers_farmsCreateOrConnectWithoutFlowers_farmsInput[]
    createMany?: flowers_and_flowers_farmsCreateManyFlowers_farmsInputEnvelope
    connect?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
  }

  export type flowers_and_flowers_farmsUpdateManyWithoutFlowers_farmsNestedInput = {
    create?: XOR<flowers_and_flowers_farmsCreateWithoutFlowers_farmsInput, flowers_and_flowers_farmsUncheckedCreateWithoutFlowers_farmsInput> | flowers_and_flowers_farmsCreateWithoutFlowers_farmsInput[] | flowers_and_flowers_farmsUncheckedCreateWithoutFlowers_farmsInput[]
    connectOrCreate?: flowers_and_flowers_farmsCreateOrConnectWithoutFlowers_farmsInput | flowers_and_flowers_farmsCreateOrConnectWithoutFlowers_farmsInput[]
    upsert?: flowers_and_flowers_farmsUpsertWithWhereUniqueWithoutFlowers_farmsInput | flowers_and_flowers_farmsUpsertWithWhereUniqueWithoutFlowers_farmsInput[]
    createMany?: flowers_and_flowers_farmsCreateManyFlowers_farmsInputEnvelope
    set?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
    disconnect?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
    delete?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
    connect?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
    update?: flowers_and_flowers_farmsUpdateWithWhereUniqueWithoutFlowers_farmsInput | flowers_and_flowers_farmsUpdateWithWhereUniqueWithoutFlowers_farmsInput[]
    updateMany?: flowers_and_flowers_farmsUpdateManyWithWhereWithoutFlowers_farmsInput | flowers_and_flowers_farmsUpdateManyWithWhereWithoutFlowers_farmsInput[]
    deleteMany?: flowers_and_flowers_farmsScalarWhereInput | flowers_and_flowers_farmsScalarWhereInput[]
  }

  export type flowers_and_flowers_farmsUncheckedUpdateManyWithoutFlowers_farmsNestedInput = {
    create?: XOR<flowers_and_flowers_farmsCreateWithoutFlowers_farmsInput, flowers_and_flowers_farmsUncheckedCreateWithoutFlowers_farmsInput> | flowers_and_flowers_farmsCreateWithoutFlowers_farmsInput[] | flowers_and_flowers_farmsUncheckedCreateWithoutFlowers_farmsInput[]
    connectOrCreate?: flowers_and_flowers_farmsCreateOrConnectWithoutFlowers_farmsInput | flowers_and_flowers_farmsCreateOrConnectWithoutFlowers_farmsInput[]
    upsert?: flowers_and_flowers_farmsUpsertWithWhereUniqueWithoutFlowers_farmsInput | flowers_and_flowers_farmsUpsertWithWhereUniqueWithoutFlowers_farmsInput[]
    createMany?: flowers_and_flowers_farmsCreateManyFlowers_farmsInputEnvelope
    set?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
    disconnect?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
    delete?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
    connect?: flowers_and_flowers_farmsWhereUniqueInput | flowers_and_flowers_farmsWhereUniqueInput[]
    update?: flowers_and_flowers_farmsUpdateWithWhereUniqueWithoutFlowers_farmsInput | flowers_and_flowers_farmsUpdateWithWhereUniqueWithoutFlowers_farmsInput[]
    updateMany?: flowers_and_flowers_farmsUpdateManyWithWhereWithoutFlowers_farmsInput | flowers_and_flowers_farmsUpdateManyWithWhereWithoutFlowers_farmsInput[]
    deleteMany?: flowers_and_flowers_farmsScalarWhereInput | flowers_and_flowers_farmsScalarWhereInput[]
  }

  export type flowersCreateNestedOneWithoutFarmsInput = {
    create?: XOR<flowersCreateWithoutFarmsInput, flowersUncheckedCreateWithoutFarmsInput>
    connectOrCreate?: flowersCreateOrConnectWithoutFarmsInput
    connect?: flowersWhereUniqueInput
  }

  export type flowers_farmsCreateNestedOneWithoutFlowersInput = {
    create?: XOR<flowers_farmsCreateWithoutFlowersInput, flowers_farmsUncheckedCreateWithoutFlowersInput>
    connectOrCreate?: flowers_farmsCreateOrConnectWithoutFlowersInput
    connect?: flowers_farmsWhereUniqueInput
  }

  export type flowersUpdateOneRequiredWithoutFarmsNestedInput = {
    create?: XOR<flowersCreateWithoutFarmsInput, flowersUncheckedCreateWithoutFarmsInput>
    connectOrCreate?: flowersCreateOrConnectWithoutFarmsInput
    upsert?: flowersUpsertWithoutFarmsInput
    connect?: flowersWhereUniqueInput
    update?: XOR<XOR<flowersUpdateToOneWithWhereWithoutFarmsInput, flowersUpdateWithoutFarmsInput>, flowersUncheckedUpdateWithoutFarmsInput>
  }

  export type flowers_farmsUpdateOneRequiredWithoutFlowersNestedInput = {
    create?: XOR<flowers_farmsCreateWithoutFlowersInput, flowers_farmsUncheckedCreateWithoutFlowersInput>
    connectOrCreate?: flowers_farmsCreateOrConnectWithoutFlowersInput
    upsert?: flowers_farmsUpsertWithoutFlowersInput
    connect?: flowers_farmsWhereUniqueInput
    update?: XOR<XOR<flowers_farmsUpdateToOneWithWhereWithoutFlowersInput, flowers_farmsUpdateWithoutFlowersInput>, flowers_farmsUncheckedUpdateWithoutFlowersInput>
  }

  export type flowers_and_flowers_bouquetsCreateNestedManyWithoutFlowers_bouquetsInput = {
    create?: XOR<flowers_and_flowers_bouquetsCreateWithoutFlowers_bouquetsInput, flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowers_bouquetsInput> | flowers_and_flowers_bouquetsCreateWithoutFlowers_bouquetsInput[] | flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowers_bouquetsInput[]
    connectOrCreate?: flowers_and_flowers_bouquetsCreateOrConnectWithoutFlowers_bouquetsInput | flowers_and_flowers_bouquetsCreateOrConnectWithoutFlowers_bouquetsInput[]
    createMany?: flowers_and_flowers_bouquetsCreateManyFlowers_bouquetsInputEnvelope
    connect?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
  }

  export type flowers_and_flowers_bouquetsUncheckedCreateNestedManyWithoutFlowers_bouquetsInput = {
    create?: XOR<flowers_and_flowers_bouquetsCreateWithoutFlowers_bouquetsInput, flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowers_bouquetsInput> | flowers_and_flowers_bouquetsCreateWithoutFlowers_bouquetsInput[] | flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowers_bouquetsInput[]
    connectOrCreate?: flowers_and_flowers_bouquetsCreateOrConnectWithoutFlowers_bouquetsInput | flowers_and_flowers_bouquetsCreateOrConnectWithoutFlowers_bouquetsInput[]
    createMany?: flowers_and_flowers_bouquetsCreateManyFlowers_bouquetsInputEnvelope
    connect?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
  }

  export type flowers_and_flowers_bouquetsUpdateManyWithoutFlowers_bouquetsNestedInput = {
    create?: XOR<flowers_and_flowers_bouquetsCreateWithoutFlowers_bouquetsInput, flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowers_bouquetsInput> | flowers_and_flowers_bouquetsCreateWithoutFlowers_bouquetsInput[] | flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowers_bouquetsInput[]
    connectOrCreate?: flowers_and_flowers_bouquetsCreateOrConnectWithoutFlowers_bouquetsInput | flowers_and_flowers_bouquetsCreateOrConnectWithoutFlowers_bouquetsInput[]
    upsert?: flowers_and_flowers_bouquetsUpsertWithWhereUniqueWithoutFlowers_bouquetsInput | flowers_and_flowers_bouquetsUpsertWithWhereUniqueWithoutFlowers_bouquetsInput[]
    createMany?: flowers_and_flowers_bouquetsCreateManyFlowers_bouquetsInputEnvelope
    set?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
    disconnect?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
    delete?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
    connect?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
    update?: flowers_and_flowers_bouquetsUpdateWithWhereUniqueWithoutFlowers_bouquetsInput | flowers_and_flowers_bouquetsUpdateWithWhereUniqueWithoutFlowers_bouquetsInput[]
    updateMany?: flowers_and_flowers_bouquetsUpdateManyWithWhereWithoutFlowers_bouquetsInput | flowers_and_flowers_bouquetsUpdateManyWithWhereWithoutFlowers_bouquetsInput[]
    deleteMany?: flowers_and_flowers_bouquetsScalarWhereInput | flowers_and_flowers_bouquetsScalarWhereInput[]
  }

  export type flowers_and_flowers_bouquetsUncheckedUpdateManyWithoutFlowers_bouquetsNestedInput = {
    create?: XOR<flowers_and_flowers_bouquetsCreateWithoutFlowers_bouquetsInput, flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowers_bouquetsInput> | flowers_and_flowers_bouquetsCreateWithoutFlowers_bouquetsInput[] | flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowers_bouquetsInput[]
    connectOrCreate?: flowers_and_flowers_bouquetsCreateOrConnectWithoutFlowers_bouquetsInput | flowers_and_flowers_bouquetsCreateOrConnectWithoutFlowers_bouquetsInput[]
    upsert?: flowers_and_flowers_bouquetsUpsertWithWhereUniqueWithoutFlowers_bouquetsInput | flowers_and_flowers_bouquetsUpsertWithWhereUniqueWithoutFlowers_bouquetsInput[]
    createMany?: flowers_and_flowers_bouquetsCreateManyFlowers_bouquetsInputEnvelope
    set?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
    disconnect?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
    delete?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
    connect?: flowers_and_flowers_bouquetsWhereUniqueInput | flowers_and_flowers_bouquetsWhereUniqueInput[]
    update?: flowers_and_flowers_bouquetsUpdateWithWhereUniqueWithoutFlowers_bouquetsInput | flowers_and_flowers_bouquetsUpdateWithWhereUniqueWithoutFlowers_bouquetsInput[]
    updateMany?: flowers_and_flowers_bouquetsUpdateManyWithWhereWithoutFlowers_bouquetsInput | flowers_and_flowers_bouquetsUpdateManyWithWhereWithoutFlowers_bouquetsInput[]
    deleteMany?: flowers_and_flowers_bouquetsScalarWhereInput | flowers_and_flowers_bouquetsScalarWhereInput[]
  }

  export type flowersCreateNestedOneWithoutBouquetsInput = {
    create?: XOR<flowersCreateWithoutBouquetsInput, flowersUncheckedCreateWithoutBouquetsInput>
    connectOrCreate?: flowersCreateOrConnectWithoutBouquetsInput
    connect?: flowersWhereUniqueInput
  }

  export type flowers_bouquetsCreateNestedOneWithoutFlowersInput = {
    create?: XOR<flowers_bouquetsCreateWithoutFlowersInput, flowers_bouquetsUncheckedCreateWithoutFlowersInput>
    connectOrCreate?: flowers_bouquetsCreateOrConnectWithoutFlowersInput
    connect?: flowers_bouquetsWhereUniqueInput
  }

  export type flowersUpdateOneRequiredWithoutBouquetsNestedInput = {
    create?: XOR<flowersCreateWithoutBouquetsInput, flowersUncheckedCreateWithoutBouquetsInput>
    connectOrCreate?: flowersCreateOrConnectWithoutBouquetsInput
    upsert?: flowersUpsertWithoutBouquetsInput
    connect?: flowersWhereUniqueInput
    update?: XOR<XOR<flowersUpdateToOneWithWhereWithoutBouquetsInput, flowersUpdateWithoutBouquetsInput>, flowersUncheckedUpdateWithoutBouquetsInput>
  }

  export type flowers_bouquetsUpdateOneRequiredWithoutFlowersNestedInput = {
    create?: XOR<flowers_bouquetsCreateWithoutFlowersInput, flowers_bouquetsUncheckedCreateWithoutFlowersInput>
    connectOrCreate?: flowers_bouquetsCreateOrConnectWithoutFlowersInput
    upsert?: flowers_bouquetsUpsertWithoutFlowersInput
    connect?: flowers_bouquetsWhereUniqueInput
    update?: XOR<XOR<flowers_bouquetsUpdateToOneWithWhereWithoutFlowersInput, flowers_bouquetsUpdateWithoutFlowersInput>, flowers_bouquetsUncheckedUpdateWithoutFlowersInput>
  }

  export type flowersCreateNestedOneWithoutImgsInput = {
    create?: XOR<flowersCreateWithoutImgsInput, flowersUncheckedCreateWithoutImgsInput>
    connectOrCreate?: flowersCreateOrConnectWithoutImgsInput
    connect?: flowersWhereUniqueInput
  }

  export type public_filesCreateNestedOneWithoutFlowersInput = {
    create?: XOR<public_filesCreateWithoutFlowersInput, public_filesUncheckedCreateWithoutFlowersInput>
    connectOrCreate?: public_filesCreateOrConnectWithoutFlowersInput
    connect?: public_filesWhereUniqueInput
  }

  export type flowersUpdateOneRequiredWithoutImgsNestedInput = {
    create?: XOR<flowersCreateWithoutImgsInput, flowersUncheckedCreateWithoutImgsInput>
    connectOrCreate?: flowersCreateOrConnectWithoutImgsInput
    upsert?: flowersUpsertWithoutImgsInput
    connect?: flowersWhereUniqueInput
    update?: XOR<XOR<flowersUpdateToOneWithWhereWithoutImgsInput, flowersUpdateWithoutImgsInput>, flowersUncheckedUpdateWithoutImgsInput>
  }

  export type public_filesUpdateOneRequiredWithoutFlowersNestedInput = {
    create?: XOR<public_filesCreateWithoutFlowersInput, public_filesUncheckedCreateWithoutFlowersInput>
    connectOrCreate?: public_filesCreateOrConnectWithoutFlowersInput
    upsert?: public_filesUpsertWithoutFlowersInput
    connect?: public_filesWhereUniqueInput
    update?: XOR<XOR<public_filesUpdateToOneWithWhereWithoutFlowersInput, public_filesUpdateWithoutFlowersInput>, public_filesUncheckedUpdateWithoutFlowersInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type flowers_and_filesCreateWithoutPublic_filesInput = {
    flowers: flowersCreateNestedOneWithoutImgsInput
  }

  export type flowers_and_filesUncheckedCreateWithoutPublic_filesInput = {
    flower_id: number
  }

  export type flowers_and_filesCreateOrConnectWithoutPublic_filesInput = {
    where: flowers_and_filesWhereUniqueInput
    create: XOR<flowers_and_filesCreateWithoutPublic_filesInput, flowers_and_filesUncheckedCreateWithoutPublic_filesInput>
  }

  export type flowers_and_filesCreateManyPublic_filesInputEnvelope = {
    data: flowers_and_filesCreateManyPublic_filesInput | flowers_and_filesCreateManyPublic_filesInput[]
    skipDuplicates?: boolean
  }

  export type flowers_and_filesUpsertWithWhereUniqueWithoutPublic_filesInput = {
    where: flowers_and_filesWhereUniqueInput
    update: XOR<flowers_and_filesUpdateWithoutPublic_filesInput, flowers_and_filesUncheckedUpdateWithoutPublic_filesInput>
    create: XOR<flowers_and_filesCreateWithoutPublic_filesInput, flowers_and_filesUncheckedCreateWithoutPublic_filesInput>
  }

  export type flowers_and_filesUpdateWithWhereUniqueWithoutPublic_filesInput = {
    where: flowers_and_filesWhereUniqueInput
    data: XOR<flowers_and_filesUpdateWithoutPublic_filesInput, flowers_and_filesUncheckedUpdateWithoutPublic_filesInput>
  }

  export type flowers_and_filesUpdateManyWithWhereWithoutPublic_filesInput = {
    where: flowers_and_filesScalarWhereInput
    data: XOR<flowers_and_filesUpdateManyMutationInput, flowers_and_filesUncheckedUpdateManyWithoutPublic_filesInput>
  }

  export type flowers_and_filesScalarWhereInput = {
    AND?: flowers_and_filesScalarWhereInput | flowers_and_filesScalarWhereInput[]
    OR?: flowers_and_filesScalarWhereInput[]
    NOT?: flowers_and_filesScalarWhereInput | flowers_and_filesScalarWhereInput[]
    flower_id?: IntFilter<"flowers_and_files"> | number
    public_file_name?: StringFilter<"flowers_and_files"> | string
  }

  export type flowers_historyCreateWithoutFlowerInput = {
    date: number
    price: number
  }

  export type flowers_historyUncheckedCreateWithoutFlowerInput = {
    id?: number
    date: number
    price: number
  }

  export type flowers_historyCreateOrConnectWithoutFlowerInput = {
    where: flowers_historyWhereUniqueInput
    create: XOR<flowers_historyCreateWithoutFlowerInput, flowers_historyUncheckedCreateWithoutFlowerInput>
  }

  export type flowers_historyCreateManyFlowerInputEnvelope = {
    data: flowers_historyCreateManyFlowerInput | flowers_historyCreateManyFlowerInput[]
    skipDuplicates?: boolean
  }

  export type flowers_varietyCreateWithoutFlowersInput = {
    name_en: string
    name_ru: string
  }

  export type flowers_varietyUncheckedCreateWithoutFlowersInput = {
    id?: number
    name_en: string
    name_ru: string
  }

  export type flowers_varietyCreateOrConnectWithoutFlowersInput = {
    where: flowers_varietyWhereUniqueInput
    create: XOR<flowers_varietyCreateWithoutFlowersInput, flowers_varietyUncheckedCreateWithoutFlowersInput>
  }

  export type flowers_and_filesCreateWithoutFlowersInput = {
    public_files: public_filesCreateNestedOneWithoutFlowersInput
  }

  export type flowers_and_filesUncheckedCreateWithoutFlowersInput = {
    public_file_name: string
  }

  export type flowers_and_filesCreateOrConnectWithoutFlowersInput = {
    where: flowers_and_filesWhereUniqueInput
    create: XOR<flowers_and_filesCreateWithoutFlowersInput, flowers_and_filesUncheckedCreateWithoutFlowersInput>
  }

  export type flowers_and_filesCreateManyFlowersInputEnvelope = {
    data: flowers_and_filesCreateManyFlowersInput | flowers_and_filesCreateManyFlowersInput[]
    skipDuplicates?: boolean
  }

  export type flowers_and_flowers_farmsCreateWithoutFlowersInput = {
    flowers_farms: flowers_farmsCreateNestedOneWithoutFlowersInput
  }

  export type flowers_and_flowers_farmsUncheckedCreateWithoutFlowersInput = {
    flower_farm_id: number
  }

  export type flowers_and_flowers_farmsCreateOrConnectWithoutFlowersInput = {
    where: flowers_and_flowers_farmsWhereUniqueInput
    create: XOR<flowers_and_flowers_farmsCreateWithoutFlowersInput, flowers_and_flowers_farmsUncheckedCreateWithoutFlowersInput>
  }

  export type flowers_and_flowers_farmsCreateManyFlowersInputEnvelope = {
    data: flowers_and_flowers_farmsCreateManyFlowersInput | flowers_and_flowers_farmsCreateManyFlowersInput[]
    skipDuplicates?: boolean
  }

  export type flowers_and_flowers_bouquetsCreateWithoutFlowersInput = {
    flowers_bouquets: flowers_bouquetsCreateNestedOneWithoutFlowersInput
  }

  export type flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowersInput = {
    flower_bouquet_id: number
  }

  export type flowers_and_flowers_bouquetsCreateOrConnectWithoutFlowersInput = {
    where: flowers_and_flowers_bouquetsWhereUniqueInput
    create: XOR<flowers_and_flowers_bouquetsCreateWithoutFlowersInput, flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowersInput>
  }

  export type flowers_and_flowers_bouquetsCreateManyFlowersInputEnvelope = {
    data: flowers_and_flowers_bouquetsCreateManyFlowersInput | flowers_and_flowers_bouquetsCreateManyFlowersInput[]
    skipDuplicates?: boolean
  }

  export type flowers_historyUpsertWithWhereUniqueWithoutFlowerInput = {
    where: flowers_historyWhereUniqueInput
    update: XOR<flowers_historyUpdateWithoutFlowerInput, flowers_historyUncheckedUpdateWithoutFlowerInput>
    create: XOR<flowers_historyCreateWithoutFlowerInput, flowers_historyUncheckedCreateWithoutFlowerInput>
  }

  export type flowers_historyUpdateWithWhereUniqueWithoutFlowerInput = {
    where: flowers_historyWhereUniqueInput
    data: XOR<flowers_historyUpdateWithoutFlowerInput, flowers_historyUncheckedUpdateWithoutFlowerInput>
  }

  export type flowers_historyUpdateManyWithWhereWithoutFlowerInput = {
    where: flowers_historyScalarWhereInput
    data: XOR<flowers_historyUpdateManyMutationInput, flowers_historyUncheckedUpdateManyWithoutFlowerInput>
  }

  export type flowers_historyScalarWhereInput = {
    AND?: flowers_historyScalarWhereInput | flowers_historyScalarWhereInput[]
    OR?: flowers_historyScalarWhereInput[]
    NOT?: flowers_historyScalarWhereInput | flowers_historyScalarWhereInput[]
    id?: IntFilter<"flowers_history"> | number
    flower_id?: IntFilter<"flowers_history"> | number
    date?: IntFilter<"flowers_history"> | number
    price?: IntFilter<"flowers_history"> | number
  }

  export type flowers_varietyUpsertWithoutFlowersInput = {
    update: XOR<flowers_varietyUpdateWithoutFlowersInput, flowers_varietyUncheckedUpdateWithoutFlowersInput>
    create: XOR<flowers_varietyCreateWithoutFlowersInput, flowers_varietyUncheckedCreateWithoutFlowersInput>
    where?: flowers_varietyWhereInput
  }

  export type flowers_varietyUpdateToOneWithWhereWithoutFlowersInput = {
    where?: flowers_varietyWhereInput
    data: XOR<flowers_varietyUpdateWithoutFlowersInput, flowers_varietyUncheckedUpdateWithoutFlowersInput>
  }

  export type flowers_varietyUpdateWithoutFlowersInput = {
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
  }

  export type flowers_varietyUncheckedUpdateWithoutFlowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
  }

  export type flowers_and_filesUpsertWithWhereUniqueWithoutFlowersInput = {
    where: flowers_and_filesWhereUniqueInput
    update: XOR<flowers_and_filesUpdateWithoutFlowersInput, flowers_and_filesUncheckedUpdateWithoutFlowersInput>
    create: XOR<flowers_and_filesCreateWithoutFlowersInput, flowers_and_filesUncheckedCreateWithoutFlowersInput>
  }

  export type flowers_and_filesUpdateWithWhereUniqueWithoutFlowersInput = {
    where: flowers_and_filesWhereUniqueInput
    data: XOR<flowers_and_filesUpdateWithoutFlowersInput, flowers_and_filesUncheckedUpdateWithoutFlowersInput>
  }

  export type flowers_and_filesUpdateManyWithWhereWithoutFlowersInput = {
    where: flowers_and_filesScalarWhereInput
    data: XOR<flowers_and_filesUpdateManyMutationInput, flowers_and_filesUncheckedUpdateManyWithoutFlowersInput>
  }

  export type flowers_and_flowers_farmsUpsertWithWhereUniqueWithoutFlowersInput = {
    where: flowers_and_flowers_farmsWhereUniqueInput
    update: XOR<flowers_and_flowers_farmsUpdateWithoutFlowersInput, flowers_and_flowers_farmsUncheckedUpdateWithoutFlowersInput>
    create: XOR<flowers_and_flowers_farmsCreateWithoutFlowersInput, flowers_and_flowers_farmsUncheckedCreateWithoutFlowersInput>
  }

  export type flowers_and_flowers_farmsUpdateWithWhereUniqueWithoutFlowersInput = {
    where: flowers_and_flowers_farmsWhereUniqueInput
    data: XOR<flowers_and_flowers_farmsUpdateWithoutFlowersInput, flowers_and_flowers_farmsUncheckedUpdateWithoutFlowersInput>
  }

  export type flowers_and_flowers_farmsUpdateManyWithWhereWithoutFlowersInput = {
    where: flowers_and_flowers_farmsScalarWhereInput
    data: XOR<flowers_and_flowers_farmsUpdateManyMutationInput, flowers_and_flowers_farmsUncheckedUpdateManyWithoutFlowersInput>
  }

  export type flowers_and_flowers_farmsScalarWhereInput = {
    AND?: flowers_and_flowers_farmsScalarWhereInput | flowers_and_flowers_farmsScalarWhereInput[]
    OR?: flowers_and_flowers_farmsScalarWhereInput[]
    NOT?: flowers_and_flowers_farmsScalarWhereInput | flowers_and_flowers_farmsScalarWhereInput[]
    flower_id?: IntFilter<"flowers_and_flowers_farms"> | number
    flower_farm_id?: IntFilter<"flowers_and_flowers_farms"> | number
  }

  export type flowers_and_flowers_bouquetsUpsertWithWhereUniqueWithoutFlowersInput = {
    where: flowers_and_flowers_bouquetsWhereUniqueInput
    update: XOR<flowers_and_flowers_bouquetsUpdateWithoutFlowersInput, flowers_and_flowers_bouquetsUncheckedUpdateWithoutFlowersInput>
    create: XOR<flowers_and_flowers_bouquetsCreateWithoutFlowersInput, flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowersInput>
  }

  export type flowers_and_flowers_bouquetsUpdateWithWhereUniqueWithoutFlowersInput = {
    where: flowers_and_flowers_bouquetsWhereUniqueInput
    data: XOR<flowers_and_flowers_bouquetsUpdateWithoutFlowersInput, flowers_and_flowers_bouquetsUncheckedUpdateWithoutFlowersInput>
  }

  export type flowers_and_flowers_bouquetsUpdateManyWithWhereWithoutFlowersInput = {
    where: flowers_and_flowers_bouquetsScalarWhereInput
    data: XOR<flowers_and_flowers_bouquetsUpdateManyMutationInput, flowers_and_flowers_bouquetsUncheckedUpdateManyWithoutFlowersInput>
  }

  export type flowers_and_flowers_bouquetsScalarWhereInput = {
    AND?: flowers_and_flowers_bouquetsScalarWhereInput | flowers_and_flowers_bouquetsScalarWhereInput[]
    OR?: flowers_and_flowers_bouquetsScalarWhereInput[]
    NOT?: flowers_and_flowers_bouquetsScalarWhereInput | flowers_and_flowers_bouquetsScalarWhereInput[]
    flower_id?: IntFilter<"flowers_and_flowers_bouquets"> | number
    flower_bouquet_id?: IntFilter<"flowers_and_flowers_bouquets"> | number
  }

  export type flowersCreateWithoutVarietyInput = {
    color: string
    name_en: string
    name_ru: string
    price: number
    history?: flowers_historyCreateNestedManyWithoutFlowerInput
    imgs?: flowers_and_filesCreateNestedManyWithoutFlowersInput
    farms?: flowers_and_flowers_farmsCreateNestedManyWithoutFlowersInput
    bouquets?: flowers_and_flowers_bouquetsCreateNestedManyWithoutFlowersInput
  }

  export type flowersUncheckedCreateWithoutVarietyInput = {
    id?: number
    color: string
    name_en: string
    name_ru: string
    price: number
    history?: flowers_historyUncheckedCreateNestedManyWithoutFlowerInput
    imgs?: flowers_and_filesUncheckedCreateNestedManyWithoutFlowersInput
    farms?: flowers_and_flowers_farmsUncheckedCreateNestedManyWithoutFlowersInput
    bouquets?: flowers_and_flowers_bouquetsUncheckedCreateNestedManyWithoutFlowersInput
  }

  export type flowersCreateOrConnectWithoutVarietyInput = {
    where: flowersWhereUniqueInput
    create: XOR<flowersCreateWithoutVarietyInput, flowersUncheckedCreateWithoutVarietyInput>
  }

  export type flowersCreateManyVarietyInputEnvelope = {
    data: flowersCreateManyVarietyInput | flowersCreateManyVarietyInput[]
    skipDuplicates?: boolean
  }

  export type flowersUpsertWithWhereUniqueWithoutVarietyInput = {
    where: flowersWhereUniqueInput
    update: XOR<flowersUpdateWithoutVarietyInput, flowersUncheckedUpdateWithoutVarietyInput>
    create: XOR<flowersCreateWithoutVarietyInput, flowersUncheckedCreateWithoutVarietyInput>
  }

  export type flowersUpdateWithWhereUniqueWithoutVarietyInput = {
    where: flowersWhereUniqueInput
    data: XOR<flowersUpdateWithoutVarietyInput, flowersUncheckedUpdateWithoutVarietyInput>
  }

  export type flowersUpdateManyWithWhereWithoutVarietyInput = {
    where: flowersScalarWhereInput
    data: XOR<flowersUpdateManyMutationInput, flowersUncheckedUpdateManyWithoutVarietyInput>
  }

  export type flowersScalarWhereInput = {
    AND?: flowersScalarWhereInput | flowersScalarWhereInput[]
    OR?: flowersScalarWhereInput[]
    NOT?: flowersScalarWhereInput | flowersScalarWhereInput[]
    id?: IntFilter<"flowers"> | number
    color?: StringFilter<"flowers"> | string
    name_en?: StringFilter<"flowers"> | string
    name_ru?: StringFilter<"flowers"> | string
    price?: IntFilter<"flowers"> | number
    variety_id?: IntFilter<"flowers"> | number
  }

  export type flowersCreateWithoutHistoryInput = {
    color: string
    name_en: string
    name_ru: string
    price: number
    variety: flowers_varietyCreateNestedOneWithoutFlowersInput
    imgs?: flowers_and_filesCreateNestedManyWithoutFlowersInput
    farms?: flowers_and_flowers_farmsCreateNestedManyWithoutFlowersInput
    bouquets?: flowers_and_flowers_bouquetsCreateNestedManyWithoutFlowersInput
  }

  export type flowersUncheckedCreateWithoutHistoryInput = {
    id?: number
    color: string
    name_en: string
    name_ru: string
    price: number
    variety_id: number
    imgs?: flowers_and_filesUncheckedCreateNestedManyWithoutFlowersInput
    farms?: flowers_and_flowers_farmsUncheckedCreateNestedManyWithoutFlowersInput
    bouquets?: flowers_and_flowers_bouquetsUncheckedCreateNestedManyWithoutFlowersInput
  }

  export type flowersCreateOrConnectWithoutHistoryInput = {
    where: flowersWhereUniqueInput
    create: XOR<flowersCreateWithoutHistoryInput, flowersUncheckedCreateWithoutHistoryInput>
  }

  export type flowersUpsertWithoutHistoryInput = {
    update: XOR<flowersUpdateWithoutHistoryInput, flowersUncheckedUpdateWithoutHistoryInput>
    create: XOR<flowersCreateWithoutHistoryInput, flowersUncheckedCreateWithoutHistoryInput>
    where?: flowersWhereInput
  }

  export type flowersUpdateToOneWithWhereWithoutHistoryInput = {
    where?: flowersWhereInput
    data: XOR<flowersUpdateWithoutHistoryInput, flowersUncheckedUpdateWithoutHistoryInput>
  }

  export type flowersUpdateWithoutHistoryInput = {
    color?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    variety?: flowers_varietyUpdateOneRequiredWithoutFlowersNestedInput
    imgs?: flowers_and_filesUpdateManyWithoutFlowersNestedInput
    farms?: flowers_and_flowers_farmsUpdateManyWithoutFlowersNestedInput
    bouquets?: flowers_and_flowers_bouquetsUpdateManyWithoutFlowersNestedInput
  }

  export type flowersUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    variety_id?: IntFieldUpdateOperationsInput | number
    imgs?: flowers_and_filesUncheckedUpdateManyWithoutFlowersNestedInput
    farms?: flowers_and_flowers_farmsUncheckedUpdateManyWithoutFlowersNestedInput
    bouquets?: flowers_and_flowers_bouquetsUncheckedUpdateManyWithoutFlowersNestedInput
  }

  export type flowers_and_flowers_farmsCreateWithoutFlowers_farmsInput = {
    flowers: flowersCreateNestedOneWithoutFarmsInput
  }

  export type flowers_and_flowers_farmsUncheckedCreateWithoutFlowers_farmsInput = {
    flower_id: number
  }

  export type flowers_and_flowers_farmsCreateOrConnectWithoutFlowers_farmsInput = {
    where: flowers_and_flowers_farmsWhereUniqueInput
    create: XOR<flowers_and_flowers_farmsCreateWithoutFlowers_farmsInput, flowers_and_flowers_farmsUncheckedCreateWithoutFlowers_farmsInput>
  }

  export type flowers_and_flowers_farmsCreateManyFlowers_farmsInputEnvelope = {
    data: flowers_and_flowers_farmsCreateManyFlowers_farmsInput | flowers_and_flowers_farmsCreateManyFlowers_farmsInput[]
    skipDuplicates?: boolean
  }

  export type flowers_and_flowers_farmsUpsertWithWhereUniqueWithoutFlowers_farmsInput = {
    where: flowers_and_flowers_farmsWhereUniqueInput
    update: XOR<flowers_and_flowers_farmsUpdateWithoutFlowers_farmsInput, flowers_and_flowers_farmsUncheckedUpdateWithoutFlowers_farmsInput>
    create: XOR<flowers_and_flowers_farmsCreateWithoutFlowers_farmsInput, flowers_and_flowers_farmsUncheckedCreateWithoutFlowers_farmsInput>
  }

  export type flowers_and_flowers_farmsUpdateWithWhereUniqueWithoutFlowers_farmsInput = {
    where: flowers_and_flowers_farmsWhereUniqueInput
    data: XOR<flowers_and_flowers_farmsUpdateWithoutFlowers_farmsInput, flowers_and_flowers_farmsUncheckedUpdateWithoutFlowers_farmsInput>
  }

  export type flowers_and_flowers_farmsUpdateManyWithWhereWithoutFlowers_farmsInput = {
    where: flowers_and_flowers_farmsScalarWhereInput
    data: XOR<flowers_and_flowers_farmsUpdateManyMutationInput, flowers_and_flowers_farmsUncheckedUpdateManyWithoutFlowers_farmsInput>
  }

  export type flowersCreateWithoutFarmsInput = {
    color: string
    name_en: string
    name_ru: string
    price: number
    history?: flowers_historyCreateNestedManyWithoutFlowerInput
    variety: flowers_varietyCreateNestedOneWithoutFlowersInput
    imgs?: flowers_and_filesCreateNestedManyWithoutFlowersInput
    bouquets?: flowers_and_flowers_bouquetsCreateNestedManyWithoutFlowersInput
  }

  export type flowersUncheckedCreateWithoutFarmsInput = {
    id?: number
    color: string
    name_en: string
    name_ru: string
    price: number
    variety_id: number
    history?: flowers_historyUncheckedCreateNestedManyWithoutFlowerInput
    imgs?: flowers_and_filesUncheckedCreateNestedManyWithoutFlowersInput
    bouquets?: flowers_and_flowers_bouquetsUncheckedCreateNestedManyWithoutFlowersInput
  }

  export type flowersCreateOrConnectWithoutFarmsInput = {
    where: flowersWhereUniqueInput
    create: XOR<flowersCreateWithoutFarmsInput, flowersUncheckedCreateWithoutFarmsInput>
  }

  export type flowers_farmsCreateWithoutFlowersInput = {
    name_en: string
    name_ru: string
    country: string
    rate: number
  }

  export type flowers_farmsUncheckedCreateWithoutFlowersInput = {
    id?: number
    name_en: string
    name_ru: string
    country: string
    rate: number
  }

  export type flowers_farmsCreateOrConnectWithoutFlowersInput = {
    where: flowers_farmsWhereUniqueInput
    create: XOR<flowers_farmsCreateWithoutFlowersInput, flowers_farmsUncheckedCreateWithoutFlowersInput>
  }

  export type flowersUpsertWithoutFarmsInput = {
    update: XOR<flowersUpdateWithoutFarmsInput, flowersUncheckedUpdateWithoutFarmsInput>
    create: XOR<flowersCreateWithoutFarmsInput, flowersUncheckedCreateWithoutFarmsInput>
    where?: flowersWhereInput
  }

  export type flowersUpdateToOneWithWhereWithoutFarmsInput = {
    where?: flowersWhereInput
    data: XOR<flowersUpdateWithoutFarmsInput, flowersUncheckedUpdateWithoutFarmsInput>
  }

  export type flowersUpdateWithoutFarmsInput = {
    color?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    history?: flowers_historyUpdateManyWithoutFlowerNestedInput
    variety?: flowers_varietyUpdateOneRequiredWithoutFlowersNestedInput
    imgs?: flowers_and_filesUpdateManyWithoutFlowersNestedInput
    bouquets?: flowers_and_flowers_bouquetsUpdateManyWithoutFlowersNestedInput
  }

  export type flowersUncheckedUpdateWithoutFarmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    variety_id?: IntFieldUpdateOperationsInput | number
    history?: flowers_historyUncheckedUpdateManyWithoutFlowerNestedInput
    imgs?: flowers_and_filesUncheckedUpdateManyWithoutFlowersNestedInput
    bouquets?: flowers_and_flowers_bouquetsUncheckedUpdateManyWithoutFlowersNestedInput
  }

  export type flowers_farmsUpsertWithoutFlowersInput = {
    update: XOR<flowers_farmsUpdateWithoutFlowersInput, flowers_farmsUncheckedUpdateWithoutFlowersInput>
    create: XOR<flowers_farmsCreateWithoutFlowersInput, flowers_farmsUncheckedCreateWithoutFlowersInput>
    where?: flowers_farmsWhereInput
  }

  export type flowers_farmsUpdateToOneWithWhereWithoutFlowersInput = {
    where?: flowers_farmsWhereInput
    data: XOR<flowers_farmsUpdateWithoutFlowersInput, flowers_farmsUncheckedUpdateWithoutFlowersInput>
  }

  export type flowers_farmsUpdateWithoutFlowersInput = {
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_farmsUncheckedUpdateWithoutFlowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_and_flowers_bouquetsCreateWithoutFlowers_bouquetsInput = {
    flowers: flowersCreateNestedOneWithoutBouquetsInput
  }

  export type flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowers_bouquetsInput = {
    flower_id: number
  }

  export type flowers_and_flowers_bouquetsCreateOrConnectWithoutFlowers_bouquetsInput = {
    where: flowers_and_flowers_bouquetsWhereUniqueInput
    create: XOR<flowers_and_flowers_bouquetsCreateWithoutFlowers_bouquetsInput, flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowers_bouquetsInput>
  }

  export type flowers_and_flowers_bouquetsCreateManyFlowers_bouquetsInputEnvelope = {
    data: flowers_and_flowers_bouquetsCreateManyFlowers_bouquetsInput | flowers_and_flowers_bouquetsCreateManyFlowers_bouquetsInput[]
    skipDuplicates?: boolean
  }

  export type flowers_and_flowers_bouquetsUpsertWithWhereUniqueWithoutFlowers_bouquetsInput = {
    where: flowers_and_flowers_bouquetsWhereUniqueInput
    update: XOR<flowers_and_flowers_bouquetsUpdateWithoutFlowers_bouquetsInput, flowers_and_flowers_bouquetsUncheckedUpdateWithoutFlowers_bouquetsInput>
    create: XOR<flowers_and_flowers_bouquetsCreateWithoutFlowers_bouquetsInput, flowers_and_flowers_bouquetsUncheckedCreateWithoutFlowers_bouquetsInput>
  }

  export type flowers_and_flowers_bouquetsUpdateWithWhereUniqueWithoutFlowers_bouquetsInput = {
    where: flowers_and_flowers_bouquetsWhereUniqueInput
    data: XOR<flowers_and_flowers_bouquetsUpdateWithoutFlowers_bouquetsInput, flowers_and_flowers_bouquetsUncheckedUpdateWithoutFlowers_bouquetsInput>
  }

  export type flowers_and_flowers_bouquetsUpdateManyWithWhereWithoutFlowers_bouquetsInput = {
    where: flowers_and_flowers_bouquetsScalarWhereInput
    data: XOR<flowers_and_flowers_bouquetsUpdateManyMutationInput, flowers_and_flowers_bouquetsUncheckedUpdateManyWithoutFlowers_bouquetsInput>
  }

  export type flowersCreateWithoutBouquetsInput = {
    color: string
    name_en: string
    name_ru: string
    price: number
    history?: flowers_historyCreateNestedManyWithoutFlowerInput
    variety: flowers_varietyCreateNestedOneWithoutFlowersInput
    imgs?: flowers_and_filesCreateNestedManyWithoutFlowersInput
    farms?: flowers_and_flowers_farmsCreateNestedManyWithoutFlowersInput
  }

  export type flowersUncheckedCreateWithoutBouquetsInput = {
    id?: number
    color: string
    name_en: string
    name_ru: string
    price: number
    variety_id: number
    history?: flowers_historyUncheckedCreateNestedManyWithoutFlowerInput
    imgs?: flowers_and_filesUncheckedCreateNestedManyWithoutFlowersInput
    farms?: flowers_and_flowers_farmsUncheckedCreateNestedManyWithoutFlowersInput
  }

  export type flowersCreateOrConnectWithoutBouquetsInput = {
    where: flowersWhereUniqueInput
    create: XOR<flowersCreateWithoutBouquetsInput, flowersUncheckedCreateWithoutBouquetsInput>
  }

  export type flowers_bouquetsCreateWithoutFlowersInput = {
    name_en: string
    name_ru: string
    price: number
  }

  export type flowers_bouquetsUncheckedCreateWithoutFlowersInput = {
    id?: number
    name_en: string
    name_ru: string
    price: number
  }

  export type flowers_bouquetsCreateOrConnectWithoutFlowersInput = {
    where: flowers_bouquetsWhereUniqueInput
    create: XOR<flowers_bouquetsCreateWithoutFlowersInput, flowers_bouquetsUncheckedCreateWithoutFlowersInput>
  }

  export type flowersUpsertWithoutBouquetsInput = {
    update: XOR<flowersUpdateWithoutBouquetsInput, flowersUncheckedUpdateWithoutBouquetsInput>
    create: XOR<flowersCreateWithoutBouquetsInput, flowersUncheckedCreateWithoutBouquetsInput>
    where?: flowersWhereInput
  }

  export type flowersUpdateToOneWithWhereWithoutBouquetsInput = {
    where?: flowersWhereInput
    data: XOR<flowersUpdateWithoutBouquetsInput, flowersUncheckedUpdateWithoutBouquetsInput>
  }

  export type flowersUpdateWithoutBouquetsInput = {
    color?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    history?: flowers_historyUpdateManyWithoutFlowerNestedInput
    variety?: flowers_varietyUpdateOneRequiredWithoutFlowersNestedInput
    imgs?: flowers_and_filesUpdateManyWithoutFlowersNestedInput
    farms?: flowers_and_flowers_farmsUpdateManyWithoutFlowersNestedInput
  }

  export type flowersUncheckedUpdateWithoutBouquetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    variety_id?: IntFieldUpdateOperationsInput | number
    history?: flowers_historyUncheckedUpdateManyWithoutFlowerNestedInput
    imgs?: flowers_and_filesUncheckedUpdateManyWithoutFlowersNestedInput
    farms?: flowers_and_flowers_farmsUncheckedUpdateManyWithoutFlowersNestedInput
  }

  export type flowers_bouquetsUpsertWithoutFlowersInput = {
    update: XOR<flowers_bouquetsUpdateWithoutFlowersInput, flowers_bouquetsUncheckedUpdateWithoutFlowersInput>
    create: XOR<flowers_bouquetsCreateWithoutFlowersInput, flowers_bouquetsUncheckedCreateWithoutFlowersInput>
    where?: flowers_bouquetsWhereInput
  }

  export type flowers_bouquetsUpdateToOneWithWhereWithoutFlowersInput = {
    where?: flowers_bouquetsWhereInput
    data: XOR<flowers_bouquetsUpdateWithoutFlowersInput, flowers_bouquetsUncheckedUpdateWithoutFlowersInput>
  }

  export type flowers_bouquetsUpdateWithoutFlowersInput = {
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_bouquetsUncheckedUpdateWithoutFlowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type flowersCreateWithoutImgsInput = {
    color: string
    name_en: string
    name_ru: string
    price: number
    history?: flowers_historyCreateNestedManyWithoutFlowerInput
    variety: flowers_varietyCreateNestedOneWithoutFlowersInput
    farms?: flowers_and_flowers_farmsCreateNestedManyWithoutFlowersInput
    bouquets?: flowers_and_flowers_bouquetsCreateNestedManyWithoutFlowersInput
  }

  export type flowersUncheckedCreateWithoutImgsInput = {
    id?: number
    color: string
    name_en: string
    name_ru: string
    price: number
    variety_id: number
    history?: flowers_historyUncheckedCreateNestedManyWithoutFlowerInput
    farms?: flowers_and_flowers_farmsUncheckedCreateNestedManyWithoutFlowersInput
    bouquets?: flowers_and_flowers_bouquetsUncheckedCreateNestedManyWithoutFlowersInput
  }

  export type flowersCreateOrConnectWithoutImgsInput = {
    where: flowersWhereUniqueInput
    create: XOR<flowersCreateWithoutImgsInput, flowersUncheckedCreateWithoutImgsInput>
  }

  export type public_filesCreateWithoutFlowersInput = {
    name: string
    size: number
    upload_at?: Date | string
  }

  export type public_filesUncheckedCreateWithoutFlowersInput = {
    id?: number
    name: string
    size: number
    upload_at?: Date | string
  }

  export type public_filesCreateOrConnectWithoutFlowersInput = {
    where: public_filesWhereUniqueInput
    create: XOR<public_filesCreateWithoutFlowersInput, public_filesUncheckedCreateWithoutFlowersInput>
  }

  export type flowersUpsertWithoutImgsInput = {
    update: XOR<flowersUpdateWithoutImgsInput, flowersUncheckedUpdateWithoutImgsInput>
    create: XOR<flowersCreateWithoutImgsInput, flowersUncheckedCreateWithoutImgsInput>
    where?: flowersWhereInput
  }

  export type flowersUpdateToOneWithWhereWithoutImgsInput = {
    where?: flowersWhereInput
    data: XOR<flowersUpdateWithoutImgsInput, flowersUncheckedUpdateWithoutImgsInput>
  }

  export type flowersUpdateWithoutImgsInput = {
    color?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    history?: flowers_historyUpdateManyWithoutFlowerNestedInput
    variety?: flowers_varietyUpdateOneRequiredWithoutFlowersNestedInput
    farms?: flowers_and_flowers_farmsUpdateManyWithoutFlowersNestedInput
    bouquets?: flowers_and_flowers_bouquetsUpdateManyWithoutFlowersNestedInput
  }

  export type flowersUncheckedUpdateWithoutImgsInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    variety_id?: IntFieldUpdateOperationsInput | number
    history?: flowers_historyUncheckedUpdateManyWithoutFlowerNestedInput
    farms?: flowers_and_flowers_farmsUncheckedUpdateManyWithoutFlowersNestedInput
    bouquets?: flowers_and_flowers_bouquetsUncheckedUpdateManyWithoutFlowersNestedInput
  }

  export type public_filesUpsertWithoutFlowersInput = {
    update: XOR<public_filesUpdateWithoutFlowersInput, public_filesUncheckedUpdateWithoutFlowersInput>
    create: XOR<public_filesCreateWithoutFlowersInput, public_filesUncheckedCreateWithoutFlowersInput>
    where?: public_filesWhereInput
  }

  export type public_filesUpdateToOneWithWhereWithoutFlowersInput = {
    where?: public_filesWhereInput
    data: XOR<public_filesUpdateWithoutFlowersInput, public_filesUncheckedUpdateWithoutFlowersInput>
  }

  export type public_filesUpdateWithoutFlowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    upload_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type public_filesUncheckedUpdateWithoutFlowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    upload_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type flowers_and_filesCreateManyPublic_filesInput = {
    flower_id: number
  }

  export type flowers_and_filesUpdateWithoutPublic_filesInput = {
    flowers?: flowersUpdateOneRequiredWithoutImgsNestedInput
  }

  export type flowers_and_filesUncheckedUpdateWithoutPublic_filesInput = {
    flower_id?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_and_filesUncheckedUpdateManyWithoutPublic_filesInput = {
    flower_id?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_historyCreateManyFlowerInput = {
    id?: number
    date: number
    price: number
  }

  export type flowers_and_filesCreateManyFlowersInput = {
    public_file_name: string
  }

  export type flowers_and_flowers_farmsCreateManyFlowersInput = {
    flower_farm_id: number
  }

  export type flowers_and_flowers_bouquetsCreateManyFlowersInput = {
    flower_bouquet_id: number
  }

  export type flowers_historyUpdateWithoutFlowerInput = {
    date?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_historyUncheckedUpdateWithoutFlowerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_historyUncheckedUpdateManyWithoutFlowerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_and_filesUpdateWithoutFlowersInput = {
    public_files?: public_filesUpdateOneRequiredWithoutFlowersNestedInput
  }

  export type flowers_and_filesUncheckedUpdateWithoutFlowersInput = {
    public_file_name?: StringFieldUpdateOperationsInput | string
  }

  export type flowers_and_filesUncheckedUpdateManyWithoutFlowersInput = {
    public_file_name?: StringFieldUpdateOperationsInput | string
  }

  export type flowers_and_flowers_farmsUpdateWithoutFlowersInput = {
    flowers_farms?: flowers_farmsUpdateOneRequiredWithoutFlowersNestedInput
  }

  export type flowers_and_flowers_farmsUncheckedUpdateWithoutFlowersInput = {
    flower_farm_id?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_and_flowers_farmsUncheckedUpdateManyWithoutFlowersInput = {
    flower_farm_id?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_and_flowers_bouquetsUpdateWithoutFlowersInput = {
    flowers_bouquets?: flowers_bouquetsUpdateOneRequiredWithoutFlowersNestedInput
  }

  export type flowers_and_flowers_bouquetsUncheckedUpdateWithoutFlowersInput = {
    flower_bouquet_id?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_and_flowers_bouquetsUncheckedUpdateManyWithoutFlowersInput = {
    flower_bouquet_id?: IntFieldUpdateOperationsInput | number
  }

  export type flowersCreateManyVarietyInput = {
    id?: number
    color: string
    name_en: string
    name_ru: string
    price: number
  }

  export type flowersUpdateWithoutVarietyInput = {
    color?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    history?: flowers_historyUpdateManyWithoutFlowerNestedInput
    imgs?: flowers_and_filesUpdateManyWithoutFlowersNestedInput
    farms?: flowers_and_flowers_farmsUpdateManyWithoutFlowersNestedInput
    bouquets?: flowers_and_flowers_bouquetsUpdateManyWithoutFlowersNestedInput
  }

  export type flowersUncheckedUpdateWithoutVarietyInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    history?: flowers_historyUncheckedUpdateManyWithoutFlowerNestedInput
    imgs?: flowers_and_filesUncheckedUpdateManyWithoutFlowersNestedInput
    farms?: flowers_and_flowers_farmsUncheckedUpdateManyWithoutFlowersNestedInput
    bouquets?: flowers_and_flowers_bouquetsUncheckedUpdateManyWithoutFlowersNestedInput
  }

  export type flowersUncheckedUpdateManyWithoutVarietyInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_and_flowers_farmsCreateManyFlowers_farmsInput = {
    flower_id: number
  }

  export type flowers_and_flowers_farmsUpdateWithoutFlowers_farmsInput = {
    flowers?: flowersUpdateOneRequiredWithoutFarmsNestedInput
  }

  export type flowers_and_flowers_farmsUncheckedUpdateWithoutFlowers_farmsInput = {
    flower_id?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_and_flowers_farmsUncheckedUpdateManyWithoutFlowers_farmsInput = {
    flower_id?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_and_flowers_bouquetsCreateManyFlowers_bouquetsInput = {
    flower_id: number
  }

  export type flowers_and_flowers_bouquetsUpdateWithoutFlowers_bouquetsInput = {
    flowers?: flowersUpdateOneRequiredWithoutBouquetsNestedInput
  }

  export type flowers_and_flowers_bouquetsUncheckedUpdateWithoutFlowers_bouquetsInput = {
    flower_id?: IntFieldUpdateOperationsInput | number
  }

  export type flowers_and_flowers_bouquetsUncheckedUpdateManyWithoutFlowers_bouquetsInput = {
    flower_id?: IntFieldUpdateOperationsInput | number
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