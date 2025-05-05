
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model UsersFiles
 * 
 */
export type UsersFiles = $Result.DefaultSelection<Prisma.$UsersFilesPayload>
/**
 * Model Flowers
 * 
 */
export type Flowers = $Result.DefaultSelection<Prisma.$FlowersPayload>
/**
 * Model FlowersVariety
 * 
 */
export type FlowersVariety = $Result.DefaultSelection<Prisma.$FlowersVarietyPayload>
/**
 * Model FlowersHistory
 * 
 */
export type FlowersHistory = $Result.DefaultSelection<Prisma.$FlowersHistoryPayload>
/**
 * Model FlowersFarms
 * 
 */
export type FlowersFarms = $Result.DefaultSelection<Prisma.$FlowersFarmsPayload>
/**
 * Model FlowersFarmsAndFlowers
 * 
 */
export type FlowersFarmsAndFlowers = $Result.DefaultSelection<Prisma.$FlowersFarmsAndFlowersPayload>
/**
 * Model FlowersBouquets
 * 
 */
export type FlowersBouquets = $Result.DefaultSelection<Prisma.$FlowersBouquetsPayload>
/**
 * Model FlowersBouquetsAndFlowers
 * 
 */
export type FlowersBouquetsAndFlowers = $Result.DefaultSelection<Prisma.$FlowersBouquetsAndFlowersPayload>
/**
 * Model FlowersAndFiles
 * 
 */
export type FlowersAndFiles = $Result.DefaultSelection<Prisma.$FlowersAndFilesPayload>
/**
 * Model PublicFiles
 * 
 */
export type PublicFiles = $Result.DefaultSelection<Prisma.$PublicFilesPayload>
/**
 * Model PrivateFiles
 * 
 */
export type PrivateFiles = $Result.DefaultSelection<Prisma.$PrivateFilesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usersFiles`: Exposes CRUD operations for the **UsersFiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersFiles
    * const usersFiles = await prisma.usersFiles.findMany()
    * ```
    */
  get usersFiles(): Prisma.UsersFilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowers`: Exposes CRUD operations for the **Flowers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flowers
    * const flowers = await prisma.flowers.findMany()
    * ```
    */
  get flowers(): Prisma.FlowersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowersVariety`: Exposes CRUD operations for the **FlowersVariety** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlowersVarieties
    * const flowersVarieties = await prisma.flowersVariety.findMany()
    * ```
    */
  get flowersVariety(): Prisma.FlowersVarietyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowersHistory`: Exposes CRUD operations for the **FlowersHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlowersHistories
    * const flowersHistories = await prisma.flowersHistory.findMany()
    * ```
    */
  get flowersHistory(): Prisma.FlowersHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowersFarms`: Exposes CRUD operations for the **FlowersFarms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlowersFarms
    * const flowersFarms = await prisma.flowersFarms.findMany()
    * ```
    */
  get flowersFarms(): Prisma.FlowersFarmsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowersFarmsAndFlowers`: Exposes CRUD operations for the **FlowersFarmsAndFlowers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlowersFarmsAndFlowers
    * const flowersFarmsAndFlowers = await prisma.flowersFarmsAndFlowers.findMany()
    * ```
    */
  get flowersFarmsAndFlowers(): Prisma.FlowersFarmsAndFlowersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowersBouquets`: Exposes CRUD operations for the **FlowersBouquets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlowersBouquets
    * const flowersBouquets = await prisma.flowersBouquets.findMany()
    * ```
    */
  get flowersBouquets(): Prisma.FlowersBouquetsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowersBouquetsAndFlowers`: Exposes CRUD operations for the **FlowersBouquetsAndFlowers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlowersBouquetsAndFlowers
    * const flowersBouquetsAndFlowers = await prisma.flowersBouquetsAndFlowers.findMany()
    * ```
    */
  get flowersBouquetsAndFlowers(): Prisma.FlowersBouquetsAndFlowersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowersAndFiles`: Exposes CRUD operations for the **FlowersAndFiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlowersAndFiles
    * const flowersAndFiles = await prisma.flowersAndFiles.findMany()
    * ```
    */
  get flowersAndFiles(): Prisma.FlowersAndFilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicFiles`: Exposes CRUD operations for the **PublicFiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicFiles
    * const publicFiles = await prisma.publicFiles.findMany()
    * ```
    */
  get publicFiles(): Prisma.PublicFilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.privateFiles`: Exposes CRUD operations for the **PrivateFiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrivateFiles
    * const privateFiles = await prisma.privateFiles.findMany()
    * ```
    */
  get privateFiles(): Prisma.PrivateFilesDelegate<ExtArgs, ClientOptions>;
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
    Users: 'Users',
    UsersFiles: 'UsersFiles',
    Flowers: 'Flowers',
    FlowersVariety: 'FlowersVariety',
    FlowersHistory: 'FlowersHistory',
    FlowersFarms: 'FlowersFarms',
    FlowersFarmsAndFlowers: 'FlowersFarmsAndFlowers',
    FlowersBouquets: 'FlowersBouquets',
    FlowersBouquetsAndFlowers: 'FlowersBouquetsAndFlowers',
    FlowersAndFiles: 'FlowersAndFiles',
    PublicFiles: 'PublicFiles',
    PrivateFiles: 'PrivateFiles'
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
      modelProps: "users" | "usersFiles" | "flowers" | "flowersVariety" | "flowersHistory" | "flowersFarms" | "flowersFarmsAndFlowers" | "flowersBouquets" | "flowersBouquetsAndFlowers" | "flowersAndFiles" | "publicFiles" | "privateFiles"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      UsersFiles: {
        payload: Prisma.$UsersFilesPayload<ExtArgs>
        fields: Prisma.UsersFilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersFilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersFilesPayload>
          }
          findFirst: {
            args: Prisma.UsersFilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersFilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersFilesPayload>
          }
          findMany: {
            args: Prisma.UsersFilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersFilesPayload>[]
          }
          create: {
            args: Prisma.UsersFilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersFilesPayload>
          }
          createMany: {
            args: Prisma.UsersFilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersFilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersFilesPayload>[]
          }
          delete: {
            args: Prisma.UsersFilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersFilesPayload>
          }
          update: {
            args: Prisma.UsersFilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersFilesPayload>
          }
          deleteMany: {
            args: Prisma.UsersFilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersFilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersFilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersFilesPayload>[]
          }
          upsert: {
            args: Prisma.UsersFilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersFilesPayload>
          }
          aggregate: {
            args: Prisma.UsersFilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsersFiles>
          }
          groupBy: {
            args: Prisma.UsersFilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersFilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersFilesCountArgs<ExtArgs>
            result: $Utils.Optional<UsersFilesCountAggregateOutputType> | number
          }
        }
      }
      Flowers: {
        payload: Prisma.$FlowersPayload<ExtArgs>
        fields: Prisma.FlowersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlowersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlowersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersPayload>
          }
          findFirst: {
            args: Prisma.FlowersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlowersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersPayload>
          }
          findMany: {
            args: Prisma.FlowersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersPayload>[]
          }
          create: {
            args: Prisma.FlowersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersPayload>
          }
          createMany: {
            args: Prisma.FlowersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlowersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersPayload>[]
          }
          delete: {
            args: Prisma.FlowersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersPayload>
          }
          update: {
            args: Prisma.FlowersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersPayload>
          }
          deleteMany: {
            args: Prisma.FlowersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlowersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlowersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersPayload>[]
          }
          upsert: {
            args: Prisma.FlowersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersPayload>
          }
          aggregate: {
            args: Prisma.FlowersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowers>
          }
          groupBy: {
            args: Prisma.FlowersGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlowersGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlowersCountArgs<ExtArgs>
            result: $Utils.Optional<FlowersCountAggregateOutputType> | number
          }
        }
      }
      FlowersVariety: {
        payload: Prisma.$FlowersVarietyPayload<ExtArgs>
        fields: Prisma.FlowersVarietyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlowersVarietyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersVarietyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlowersVarietyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersVarietyPayload>
          }
          findFirst: {
            args: Prisma.FlowersVarietyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersVarietyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlowersVarietyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersVarietyPayload>
          }
          findMany: {
            args: Prisma.FlowersVarietyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersVarietyPayload>[]
          }
          create: {
            args: Prisma.FlowersVarietyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersVarietyPayload>
          }
          createMany: {
            args: Prisma.FlowersVarietyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlowersVarietyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersVarietyPayload>[]
          }
          delete: {
            args: Prisma.FlowersVarietyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersVarietyPayload>
          }
          update: {
            args: Prisma.FlowersVarietyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersVarietyPayload>
          }
          deleteMany: {
            args: Prisma.FlowersVarietyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlowersVarietyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlowersVarietyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersVarietyPayload>[]
          }
          upsert: {
            args: Prisma.FlowersVarietyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersVarietyPayload>
          }
          aggregate: {
            args: Prisma.FlowersVarietyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowersVariety>
          }
          groupBy: {
            args: Prisma.FlowersVarietyGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlowersVarietyGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlowersVarietyCountArgs<ExtArgs>
            result: $Utils.Optional<FlowersVarietyCountAggregateOutputType> | number
          }
        }
      }
      FlowersHistory: {
        payload: Prisma.$FlowersHistoryPayload<ExtArgs>
        fields: Prisma.FlowersHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlowersHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlowersHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersHistoryPayload>
          }
          findFirst: {
            args: Prisma.FlowersHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlowersHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersHistoryPayload>
          }
          findMany: {
            args: Prisma.FlowersHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersHistoryPayload>[]
          }
          create: {
            args: Prisma.FlowersHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersHistoryPayload>
          }
          createMany: {
            args: Prisma.FlowersHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlowersHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersHistoryPayload>[]
          }
          delete: {
            args: Prisma.FlowersHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersHistoryPayload>
          }
          update: {
            args: Prisma.FlowersHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersHistoryPayload>
          }
          deleteMany: {
            args: Prisma.FlowersHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlowersHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlowersHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersHistoryPayload>[]
          }
          upsert: {
            args: Prisma.FlowersHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersHistoryPayload>
          }
          aggregate: {
            args: Prisma.FlowersHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowersHistory>
          }
          groupBy: {
            args: Prisma.FlowersHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlowersHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlowersHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<FlowersHistoryCountAggregateOutputType> | number
          }
        }
      }
      FlowersFarms: {
        payload: Prisma.$FlowersFarmsPayload<ExtArgs>
        fields: Prisma.FlowersFarmsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlowersFarmsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlowersFarmsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsPayload>
          }
          findFirst: {
            args: Prisma.FlowersFarmsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlowersFarmsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsPayload>
          }
          findMany: {
            args: Prisma.FlowersFarmsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsPayload>[]
          }
          create: {
            args: Prisma.FlowersFarmsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsPayload>
          }
          createMany: {
            args: Prisma.FlowersFarmsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlowersFarmsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsPayload>[]
          }
          delete: {
            args: Prisma.FlowersFarmsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsPayload>
          }
          update: {
            args: Prisma.FlowersFarmsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsPayload>
          }
          deleteMany: {
            args: Prisma.FlowersFarmsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlowersFarmsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlowersFarmsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsPayload>[]
          }
          upsert: {
            args: Prisma.FlowersFarmsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsPayload>
          }
          aggregate: {
            args: Prisma.FlowersFarmsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowersFarms>
          }
          groupBy: {
            args: Prisma.FlowersFarmsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlowersFarmsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlowersFarmsCountArgs<ExtArgs>
            result: $Utils.Optional<FlowersFarmsCountAggregateOutputType> | number
          }
        }
      }
      FlowersFarmsAndFlowers: {
        payload: Prisma.$FlowersFarmsAndFlowersPayload<ExtArgs>
        fields: Prisma.FlowersFarmsAndFlowersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlowersFarmsAndFlowersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsAndFlowersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlowersFarmsAndFlowersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsAndFlowersPayload>
          }
          findFirst: {
            args: Prisma.FlowersFarmsAndFlowersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsAndFlowersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlowersFarmsAndFlowersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsAndFlowersPayload>
          }
          findMany: {
            args: Prisma.FlowersFarmsAndFlowersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsAndFlowersPayload>[]
          }
          create: {
            args: Prisma.FlowersFarmsAndFlowersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsAndFlowersPayload>
          }
          createMany: {
            args: Prisma.FlowersFarmsAndFlowersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlowersFarmsAndFlowersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsAndFlowersPayload>[]
          }
          delete: {
            args: Prisma.FlowersFarmsAndFlowersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsAndFlowersPayload>
          }
          update: {
            args: Prisma.FlowersFarmsAndFlowersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsAndFlowersPayload>
          }
          deleteMany: {
            args: Prisma.FlowersFarmsAndFlowersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlowersFarmsAndFlowersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlowersFarmsAndFlowersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsAndFlowersPayload>[]
          }
          upsert: {
            args: Prisma.FlowersFarmsAndFlowersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersFarmsAndFlowersPayload>
          }
          aggregate: {
            args: Prisma.FlowersFarmsAndFlowersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowersFarmsAndFlowers>
          }
          groupBy: {
            args: Prisma.FlowersFarmsAndFlowersGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlowersFarmsAndFlowersGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlowersFarmsAndFlowersCountArgs<ExtArgs>
            result: $Utils.Optional<FlowersFarmsAndFlowersCountAggregateOutputType> | number
          }
        }
      }
      FlowersBouquets: {
        payload: Prisma.$FlowersBouquetsPayload<ExtArgs>
        fields: Prisma.FlowersBouquetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlowersBouquetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlowersBouquetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsPayload>
          }
          findFirst: {
            args: Prisma.FlowersBouquetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlowersBouquetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsPayload>
          }
          findMany: {
            args: Prisma.FlowersBouquetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsPayload>[]
          }
          create: {
            args: Prisma.FlowersBouquetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsPayload>
          }
          createMany: {
            args: Prisma.FlowersBouquetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlowersBouquetsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsPayload>[]
          }
          delete: {
            args: Prisma.FlowersBouquetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsPayload>
          }
          update: {
            args: Prisma.FlowersBouquetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsPayload>
          }
          deleteMany: {
            args: Prisma.FlowersBouquetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlowersBouquetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlowersBouquetsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsPayload>[]
          }
          upsert: {
            args: Prisma.FlowersBouquetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsPayload>
          }
          aggregate: {
            args: Prisma.FlowersBouquetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowersBouquets>
          }
          groupBy: {
            args: Prisma.FlowersBouquetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlowersBouquetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlowersBouquetsCountArgs<ExtArgs>
            result: $Utils.Optional<FlowersBouquetsCountAggregateOutputType> | number
          }
        }
      }
      FlowersBouquetsAndFlowers: {
        payload: Prisma.$FlowersBouquetsAndFlowersPayload<ExtArgs>
        fields: Prisma.FlowersBouquetsAndFlowersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlowersBouquetsAndFlowersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsAndFlowersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlowersBouquetsAndFlowersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsAndFlowersPayload>
          }
          findFirst: {
            args: Prisma.FlowersBouquetsAndFlowersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsAndFlowersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlowersBouquetsAndFlowersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsAndFlowersPayload>
          }
          findMany: {
            args: Prisma.FlowersBouquetsAndFlowersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsAndFlowersPayload>[]
          }
          create: {
            args: Prisma.FlowersBouquetsAndFlowersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsAndFlowersPayload>
          }
          createMany: {
            args: Prisma.FlowersBouquetsAndFlowersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlowersBouquetsAndFlowersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsAndFlowersPayload>[]
          }
          delete: {
            args: Prisma.FlowersBouquetsAndFlowersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsAndFlowersPayload>
          }
          update: {
            args: Prisma.FlowersBouquetsAndFlowersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsAndFlowersPayload>
          }
          deleteMany: {
            args: Prisma.FlowersBouquetsAndFlowersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlowersBouquetsAndFlowersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlowersBouquetsAndFlowersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsAndFlowersPayload>[]
          }
          upsert: {
            args: Prisma.FlowersBouquetsAndFlowersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersBouquetsAndFlowersPayload>
          }
          aggregate: {
            args: Prisma.FlowersBouquetsAndFlowersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowersBouquetsAndFlowers>
          }
          groupBy: {
            args: Prisma.FlowersBouquetsAndFlowersGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlowersBouquetsAndFlowersGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlowersBouquetsAndFlowersCountArgs<ExtArgs>
            result: $Utils.Optional<FlowersBouquetsAndFlowersCountAggregateOutputType> | number
          }
        }
      }
      FlowersAndFiles: {
        payload: Prisma.$FlowersAndFilesPayload<ExtArgs>
        fields: Prisma.FlowersAndFilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlowersAndFilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersAndFilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlowersAndFilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersAndFilesPayload>
          }
          findFirst: {
            args: Prisma.FlowersAndFilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersAndFilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlowersAndFilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersAndFilesPayload>
          }
          findMany: {
            args: Prisma.FlowersAndFilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersAndFilesPayload>[]
          }
          create: {
            args: Prisma.FlowersAndFilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersAndFilesPayload>
          }
          createMany: {
            args: Prisma.FlowersAndFilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlowersAndFilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersAndFilesPayload>[]
          }
          delete: {
            args: Prisma.FlowersAndFilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersAndFilesPayload>
          }
          update: {
            args: Prisma.FlowersAndFilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersAndFilesPayload>
          }
          deleteMany: {
            args: Prisma.FlowersAndFilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlowersAndFilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlowersAndFilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersAndFilesPayload>[]
          }
          upsert: {
            args: Prisma.FlowersAndFilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowersAndFilesPayload>
          }
          aggregate: {
            args: Prisma.FlowersAndFilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowersAndFiles>
          }
          groupBy: {
            args: Prisma.FlowersAndFilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlowersAndFilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlowersAndFilesCountArgs<ExtArgs>
            result: $Utils.Optional<FlowersAndFilesCountAggregateOutputType> | number
          }
        }
      }
      PublicFiles: {
        payload: Prisma.$PublicFilesPayload<ExtArgs>
        fields: Prisma.PublicFilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicFilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicFilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFilesPayload>
          }
          findFirst: {
            args: Prisma.PublicFilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicFilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFilesPayload>
          }
          findMany: {
            args: Prisma.PublicFilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFilesPayload>[]
          }
          create: {
            args: Prisma.PublicFilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFilesPayload>
          }
          createMany: {
            args: Prisma.PublicFilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicFilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFilesPayload>[]
          }
          delete: {
            args: Prisma.PublicFilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFilesPayload>
          }
          update: {
            args: Prisma.PublicFilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFilesPayload>
          }
          deleteMany: {
            args: Prisma.PublicFilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicFilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicFilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFilesPayload>[]
          }
          upsert: {
            args: Prisma.PublicFilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFilesPayload>
          }
          aggregate: {
            args: Prisma.PublicFilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicFiles>
          }
          groupBy: {
            args: Prisma.PublicFilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicFilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicFilesCountArgs<ExtArgs>
            result: $Utils.Optional<PublicFilesCountAggregateOutputType> | number
          }
        }
      }
      PrivateFiles: {
        payload: Prisma.$PrivateFilesPayload<ExtArgs>
        fields: Prisma.PrivateFilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrivateFilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateFilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrivateFilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateFilesPayload>
          }
          findFirst: {
            args: Prisma.PrivateFilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateFilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrivateFilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateFilesPayload>
          }
          findMany: {
            args: Prisma.PrivateFilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateFilesPayload>[]
          }
          create: {
            args: Prisma.PrivateFilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateFilesPayload>
          }
          createMany: {
            args: Prisma.PrivateFilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrivateFilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateFilesPayload>[]
          }
          delete: {
            args: Prisma.PrivateFilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateFilesPayload>
          }
          update: {
            args: Prisma.PrivateFilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateFilesPayload>
          }
          deleteMany: {
            args: Prisma.PrivateFilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrivateFilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrivateFilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateFilesPayload>[]
          }
          upsert: {
            args: Prisma.PrivateFilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateFilesPayload>
          }
          aggregate: {
            args: Prisma.PrivateFilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivateFiles>
          }
          groupBy: {
            args: Prisma.PrivateFilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrivateFilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrivateFilesCountArgs<ExtArgs>
            result: $Utils.Optional<PrivateFilesCountAggregateOutputType> | number
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
    users?: UsersOmit
    usersFiles?: UsersFilesOmit
    flowers?: FlowersOmit
    flowersVariety?: FlowersVarietyOmit
    flowersHistory?: FlowersHistoryOmit
    flowersFarms?: FlowersFarmsOmit
    flowersFarmsAndFlowers?: FlowersFarmsAndFlowersOmit
    flowersBouquets?: FlowersBouquetsOmit
    flowersBouquetsAndFlowers?: FlowersBouquetsAndFlowersOmit
    flowersAndFiles?: FlowersAndFilesOmit
    publicFiles?: PublicFilesOmit
    privateFiles?: PrivateFilesOmit
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
   * Count Type FlowersCountOutputType
   */

  export type FlowersCountOutputType = {
    imgs: number
    history: number
    farms: number
    bouquets: number
  }

  export type FlowersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imgs?: boolean | FlowersCountOutputTypeCountImgsArgs
    history?: boolean | FlowersCountOutputTypeCountHistoryArgs
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
  export type FlowersCountOutputTypeCountImgsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowersAndFilesWhereInput
  }

  /**
   * FlowersCountOutputType without action
   */
  export type FlowersCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowersHistoryWhereInput
  }

  /**
   * FlowersCountOutputType without action
   */
  export type FlowersCountOutputTypeCountFarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowersFarmsAndFlowersWhereInput
  }

  /**
   * FlowersCountOutputType without action
   */
  export type FlowersCountOutputTypeCountBouquetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowersBouquetsAndFlowersWhereInput
  }


  /**
   * Count Type FlowersVarietyCountOutputType
   */

  export type FlowersVarietyCountOutputType = {
    flowers: number
  }

  export type FlowersVarietyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | FlowersVarietyCountOutputTypeCountFlowersArgs
  }

  // Custom InputTypes
  /**
   * FlowersVarietyCountOutputType without action
   */
  export type FlowersVarietyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersVarietyCountOutputType
     */
    select?: FlowersVarietyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlowersVarietyCountOutputType without action
   */
  export type FlowersVarietyCountOutputTypeCountFlowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowersWhereInput
  }


  /**
   * Count Type FlowersFarmsCountOutputType
   */

  export type FlowersFarmsCountOutputType = {
    flowers: number
  }

  export type FlowersFarmsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | FlowersFarmsCountOutputTypeCountFlowersArgs
  }

  // Custom InputTypes
  /**
   * FlowersFarmsCountOutputType without action
   */
  export type FlowersFarmsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarmsCountOutputType
     */
    select?: FlowersFarmsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlowersFarmsCountOutputType without action
   */
  export type FlowersFarmsCountOutputTypeCountFlowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowersFarmsAndFlowersWhereInput
  }


  /**
   * Count Type FlowersBouquetsCountOutputType
   */

  export type FlowersBouquetsCountOutputType = {
    flowers: number
  }

  export type FlowersBouquetsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | FlowersBouquetsCountOutputTypeCountFlowersArgs
  }

  // Custom InputTypes
  /**
   * FlowersBouquetsCountOutputType without action
   */
  export type FlowersBouquetsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquetsCountOutputType
     */
    select?: FlowersBouquetsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlowersBouquetsCountOutputType without action
   */
  export type FlowersBouquetsCountOutputTypeCountFlowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowersBouquetsAndFlowersWhereInput
  }


  /**
   * Count Type PublicFilesCountOutputType
   */

  export type PublicFilesCountOutputType = {
    flowers: number
  }

  export type PublicFilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | PublicFilesCountOutputTypeCountFlowersArgs
  }

  // Custom InputTypes
  /**
   * PublicFilesCountOutputType without action
   */
  export type PublicFilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFilesCountOutputType
     */
    select?: PublicFilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublicFilesCountOutputType without action
   */
  export type PublicFilesCountOutputTypeCountFlowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowersAndFilesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
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
    emailVerified: boolean | null
    name: string | null
    password: string | null
    signature: string | null
    role: string | null
    oauth: string | null
    oauthId: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    emailVerified: boolean | null
    name: string | null
    password: string | null
    signature: string | null
    role: string | null
    oauth: string | null
    oauthId: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    emailVerified: number
    name: number
    password: number
    signature: number
    role: number
    oauth: number
    oauthId: number
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
    emailVerified?: true
    name?: true
    password?: true
    signature?: true
    role?: true
    oauth?: true
    oauthId?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    name?: true
    password?: true
    signature?: true
    role?: true
    oauth?: true
    oauthId?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    name?: true
    password?: true
    signature?: true
    role?: true
    oauth?: true
    oauthId?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
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
    emailVerified: boolean
    name: string
    password: string | null
    signature: string | null
    role: string
    oauth: string | null
    oauthId: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
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


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    name?: boolean
    password?: boolean
    signature?: boolean
    role?: boolean
    oauth?: boolean
    oauthId?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    name?: boolean
    password?: boolean
    signature?: boolean
    role?: boolean
    oauth?: boolean
    oauthId?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    name?: boolean
    password?: boolean
    signature?: boolean
    role?: boolean
    oauth?: boolean
    oauthId?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    name?: boolean
    password?: boolean
    signature?: boolean
    role?: boolean
    oauth?: boolean
    oauthId?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "emailVerified" | "name" | "password" | "signature" | "role" | "oauth" | "oauthId", ExtArgs["result"]["users"]>

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      emailVerified: boolean
      name: string
      password: string | null
      signature: string | null
      role: string
      oauth: string | null
      oauthId: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
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
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
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
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
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
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly email: FieldRef<"Users", 'String'>
    readonly emailVerified: FieldRef<"Users", 'Boolean'>
    readonly name: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly signature: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'String'>
    readonly oauth: FieldRef<"Users", 'String'>
    readonly oauthId: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
  }


  /**
   * Model UsersFiles
   */

  export type AggregateUsersFiles = {
    _count: UsersFilesCountAggregateOutputType | null
    _avg: UsersFilesAvgAggregateOutputType | null
    _sum: UsersFilesSumAggregateOutputType | null
    _min: UsersFilesMinAggregateOutputType | null
    _max: UsersFilesMaxAggregateOutputType | null
  }

  export type UsersFilesAvgAggregateOutputType = {
    userId: number | null
    fileId: number | null
  }

  export type UsersFilesSumAggregateOutputType = {
    userId: number | null
    fileId: number | null
  }

  export type UsersFilesMinAggregateOutputType = {
    userId: number | null
    fileId: number | null
  }

  export type UsersFilesMaxAggregateOutputType = {
    userId: number | null
    fileId: number | null
  }

  export type UsersFilesCountAggregateOutputType = {
    userId: number
    fileId: number
    _all: number
  }


  export type UsersFilesAvgAggregateInputType = {
    userId?: true
    fileId?: true
  }

  export type UsersFilesSumAggregateInputType = {
    userId?: true
    fileId?: true
  }

  export type UsersFilesMinAggregateInputType = {
    userId?: true
    fileId?: true
  }

  export type UsersFilesMaxAggregateInputType = {
    userId?: true
    fileId?: true
  }

  export type UsersFilesCountAggregateInputType = {
    userId?: true
    fileId?: true
    _all?: true
  }

  export type UsersFilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersFiles to aggregate.
     */
    where?: UsersFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersFiles to fetch.
     */
    orderBy?: UsersFilesOrderByWithRelationInput | UsersFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsersFiles
    **/
    _count?: true | UsersFilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersFilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersFilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersFilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersFilesMaxAggregateInputType
  }

  export type GetUsersFilesAggregateType<T extends UsersFilesAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersFiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersFiles[P]>
      : GetScalarType<T[P], AggregateUsersFiles[P]>
  }




  export type UsersFilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersFilesWhereInput
    orderBy?: UsersFilesOrderByWithAggregationInput | UsersFilesOrderByWithAggregationInput[]
    by: UsersFilesScalarFieldEnum[] | UsersFilesScalarFieldEnum
    having?: UsersFilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersFilesCountAggregateInputType | true
    _avg?: UsersFilesAvgAggregateInputType
    _sum?: UsersFilesSumAggregateInputType
    _min?: UsersFilesMinAggregateInputType
    _max?: UsersFilesMaxAggregateInputType
  }

  export type UsersFilesGroupByOutputType = {
    userId: number
    fileId: number
    _count: UsersFilesCountAggregateOutputType | null
    _avg: UsersFilesAvgAggregateOutputType | null
    _sum: UsersFilesSumAggregateOutputType | null
    _min: UsersFilesMinAggregateOutputType | null
    _max: UsersFilesMaxAggregateOutputType | null
  }

  type GetUsersFilesGroupByPayload<T extends UsersFilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersFilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersFilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersFilesGroupByOutputType[P]>
            : GetScalarType<T[P], UsersFilesGroupByOutputType[P]>
        }
      >
    >


  export type UsersFilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fileId?: boolean
  }, ExtArgs["result"]["usersFiles"]>

  export type UsersFilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fileId?: boolean
  }, ExtArgs["result"]["usersFiles"]>

  export type UsersFilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fileId?: boolean
  }, ExtArgs["result"]["usersFiles"]>

  export type UsersFilesSelectScalar = {
    userId?: boolean
    fileId?: boolean
  }

  export type UsersFilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "fileId", ExtArgs["result"]["usersFiles"]>

  export type $UsersFilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsersFiles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      fileId: number
    }, ExtArgs["result"]["usersFiles"]>
    composites: {}
  }

  type UsersFilesGetPayload<S extends boolean | null | undefined | UsersFilesDefaultArgs> = $Result.GetResult<Prisma.$UsersFilesPayload, S>

  type UsersFilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersFilesCountAggregateInputType | true
    }

  export interface UsersFilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsersFiles'], meta: { name: 'UsersFiles' } }
    /**
     * Find zero or one UsersFiles that matches the filter.
     * @param {UsersFilesFindUniqueArgs} args - Arguments to find a UsersFiles
     * @example
     * // Get one UsersFiles
     * const usersFiles = await prisma.usersFiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFilesFindUniqueArgs>(args: SelectSubset<T, UsersFilesFindUniqueArgs<ExtArgs>>): Prisma__UsersFilesClient<$Result.GetResult<Prisma.$UsersFilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsersFiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFilesFindUniqueOrThrowArgs} args - Arguments to find a UsersFiles
     * @example
     * // Get one UsersFiles
     * const usersFiles = await prisma.usersFiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFilesFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersFilesClient<$Result.GetResult<Prisma.$UsersFilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFilesFindFirstArgs} args - Arguments to find a UsersFiles
     * @example
     * // Get one UsersFiles
     * const usersFiles = await prisma.usersFiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFilesFindFirstArgs>(args?: SelectSubset<T, UsersFilesFindFirstArgs<ExtArgs>>): Prisma__UsersFilesClient<$Result.GetResult<Prisma.$UsersFilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersFiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFilesFindFirstOrThrowArgs} args - Arguments to find a UsersFiles
     * @example
     * // Get one UsersFiles
     * const usersFiles = await prisma.usersFiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFilesFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersFilesClient<$Result.GetResult<Prisma.$UsersFilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsersFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersFiles
     * const usersFiles = await prisma.usersFiles.findMany()
     * 
     * // Get first 10 UsersFiles
     * const usersFiles = await prisma.usersFiles.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usersFilesWithUserIdOnly = await prisma.usersFiles.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UsersFilesFindManyArgs>(args?: SelectSubset<T, UsersFilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersFilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsersFiles.
     * @param {UsersFilesCreateArgs} args - Arguments to create a UsersFiles.
     * @example
     * // Create one UsersFiles
     * const UsersFiles = await prisma.usersFiles.create({
     *   data: {
     *     // ... data to create a UsersFiles
     *   }
     * })
     * 
     */
    create<T extends UsersFilesCreateArgs>(args: SelectSubset<T, UsersFilesCreateArgs<ExtArgs>>): Prisma__UsersFilesClient<$Result.GetResult<Prisma.$UsersFilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsersFiles.
     * @param {UsersFilesCreateManyArgs} args - Arguments to create many UsersFiles.
     * @example
     * // Create many UsersFiles
     * const usersFiles = await prisma.usersFiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersFilesCreateManyArgs>(args?: SelectSubset<T, UsersFilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsersFiles and returns the data saved in the database.
     * @param {UsersFilesCreateManyAndReturnArgs} args - Arguments to create many UsersFiles.
     * @example
     * // Create many UsersFiles
     * const usersFiles = await prisma.usersFiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsersFiles and only return the `userId`
     * const usersFilesWithUserIdOnly = await prisma.usersFiles.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersFilesCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersFilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersFilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsersFiles.
     * @param {UsersFilesDeleteArgs} args - Arguments to delete one UsersFiles.
     * @example
     * // Delete one UsersFiles
     * const UsersFiles = await prisma.usersFiles.delete({
     *   where: {
     *     // ... filter to delete one UsersFiles
     *   }
     * })
     * 
     */
    delete<T extends UsersFilesDeleteArgs>(args: SelectSubset<T, UsersFilesDeleteArgs<ExtArgs>>): Prisma__UsersFilesClient<$Result.GetResult<Prisma.$UsersFilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsersFiles.
     * @param {UsersFilesUpdateArgs} args - Arguments to update one UsersFiles.
     * @example
     * // Update one UsersFiles
     * const usersFiles = await prisma.usersFiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersFilesUpdateArgs>(args: SelectSubset<T, UsersFilesUpdateArgs<ExtArgs>>): Prisma__UsersFilesClient<$Result.GetResult<Prisma.$UsersFilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsersFiles.
     * @param {UsersFilesDeleteManyArgs} args - Arguments to filter UsersFiles to delete.
     * @example
     * // Delete a few UsersFiles
     * const { count } = await prisma.usersFiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersFilesDeleteManyArgs>(args?: SelectSubset<T, UsersFilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersFiles
     * const usersFiles = await prisma.usersFiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersFilesUpdateManyArgs>(args: SelectSubset<T, UsersFilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersFiles and returns the data updated in the database.
     * @param {UsersFilesUpdateManyAndReturnArgs} args - Arguments to update many UsersFiles.
     * @example
     * // Update many UsersFiles
     * const usersFiles = await prisma.usersFiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsersFiles and only return the `userId`
     * const usersFilesWithUserIdOnly = await prisma.usersFiles.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UsersFilesUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersFilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersFilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsersFiles.
     * @param {UsersFilesUpsertArgs} args - Arguments to update or create a UsersFiles.
     * @example
     * // Update or create a UsersFiles
     * const usersFiles = await prisma.usersFiles.upsert({
     *   create: {
     *     // ... data to create a UsersFiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersFiles we want to update
     *   }
     * })
     */
    upsert<T extends UsersFilesUpsertArgs>(args: SelectSubset<T, UsersFilesUpsertArgs<ExtArgs>>): Prisma__UsersFilesClient<$Result.GetResult<Prisma.$UsersFilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsersFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFilesCountArgs} args - Arguments to filter UsersFiles to count.
     * @example
     * // Count the number of UsersFiles
     * const count = await prisma.usersFiles.count({
     *   where: {
     *     // ... the filter for the UsersFiles we want to count
     *   }
     * })
    **/
    count<T extends UsersFilesCountArgs>(
      args?: Subset<T, UsersFilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersFilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsersFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersFilesAggregateArgs>(args: Subset<T, UsersFilesAggregateArgs>): Prisma.PrismaPromise<GetUsersFilesAggregateType<T>>

    /**
     * Group by UsersFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFilesGroupByArgs} args - Group by arguments.
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
      T extends UsersFilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersFilesGroupByArgs['orderBy'] }
        : { orderBy?: UsersFilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersFilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsersFiles model
   */
  readonly fields: UsersFilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsersFiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersFilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UsersFiles model
   */
  interface UsersFilesFieldRefs {
    readonly userId: FieldRef<"UsersFiles", 'Int'>
    readonly fileId: FieldRef<"UsersFiles", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UsersFiles findUnique
   */
  export type UsersFilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersFiles
     */
    select?: UsersFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersFiles
     */
    omit?: UsersFilesOmit<ExtArgs> | null
    /**
     * Filter, which UsersFiles to fetch.
     */
    where: UsersFilesWhereUniqueInput
  }

  /**
   * UsersFiles findUniqueOrThrow
   */
  export type UsersFilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersFiles
     */
    select?: UsersFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersFiles
     */
    omit?: UsersFilesOmit<ExtArgs> | null
    /**
     * Filter, which UsersFiles to fetch.
     */
    where: UsersFilesWhereUniqueInput
  }

  /**
   * UsersFiles findFirst
   */
  export type UsersFilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersFiles
     */
    select?: UsersFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersFiles
     */
    omit?: UsersFilesOmit<ExtArgs> | null
    /**
     * Filter, which UsersFiles to fetch.
     */
    where?: UsersFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersFiles to fetch.
     */
    orderBy?: UsersFilesOrderByWithRelationInput | UsersFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersFiles.
     */
    cursor?: UsersFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersFiles.
     */
    distinct?: UsersFilesScalarFieldEnum | UsersFilesScalarFieldEnum[]
  }

  /**
   * UsersFiles findFirstOrThrow
   */
  export type UsersFilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersFiles
     */
    select?: UsersFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersFiles
     */
    omit?: UsersFilesOmit<ExtArgs> | null
    /**
     * Filter, which UsersFiles to fetch.
     */
    where?: UsersFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersFiles to fetch.
     */
    orderBy?: UsersFilesOrderByWithRelationInput | UsersFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersFiles.
     */
    cursor?: UsersFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersFiles.
     */
    distinct?: UsersFilesScalarFieldEnum | UsersFilesScalarFieldEnum[]
  }

  /**
   * UsersFiles findMany
   */
  export type UsersFilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersFiles
     */
    select?: UsersFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersFiles
     */
    omit?: UsersFilesOmit<ExtArgs> | null
    /**
     * Filter, which UsersFiles to fetch.
     */
    where?: UsersFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersFiles to fetch.
     */
    orderBy?: UsersFilesOrderByWithRelationInput | UsersFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsersFiles.
     */
    cursor?: UsersFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersFiles.
     */
    skip?: number
    distinct?: UsersFilesScalarFieldEnum | UsersFilesScalarFieldEnum[]
  }

  /**
   * UsersFiles create
   */
  export type UsersFilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersFiles
     */
    select?: UsersFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersFiles
     */
    omit?: UsersFilesOmit<ExtArgs> | null
    /**
     * The data needed to create a UsersFiles.
     */
    data: XOR<UsersFilesCreateInput, UsersFilesUncheckedCreateInput>
  }

  /**
   * UsersFiles createMany
   */
  export type UsersFilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsersFiles.
     */
    data: UsersFilesCreateManyInput | UsersFilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsersFiles createManyAndReturn
   */
  export type UsersFilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersFiles
     */
    select?: UsersFilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsersFiles
     */
    omit?: UsersFilesOmit<ExtArgs> | null
    /**
     * The data used to create many UsersFiles.
     */
    data: UsersFilesCreateManyInput | UsersFilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsersFiles update
   */
  export type UsersFilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersFiles
     */
    select?: UsersFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersFiles
     */
    omit?: UsersFilesOmit<ExtArgs> | null
    /**
     * The data needed to update a UsersFiles.
     */
    data: XOR<UsersFilesUpdateInput, UsersFilesUncheckedUpdateInput>
    /**
     * Choose, which UsersFiles to update.
     */
    where: UsersFilesWhereUniqueInput
  }

  /**
   * UsersFiles updateMany
   */
  export type UsersFilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsersFiles.
     */
    data: XOR<UsersFilesUpdateManyMutationInput, UsersFilesUncheckedUpdateManyInput>
    /**
     * Filter which UsersFiles to update
     */
    where?: UsersFilesWhereInput
    /**
     * Limit how many UsersFiles to update.
     */
    limit?: number
  }

  /**
   * UsersFiles updateManyAndReturn
   */
  export type UsersFilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersFiles
     */
    select?: UsersFilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsersFiles
     */
    omit?: UsersFilesOmit<ExtArgs> | null
    /**
     * The data used to update UsersFiles.
     */
    data: XOR<UsersFilesUpdateManyMutationInput, UsersFilesUncheckedUpdateManyInput>
    /**
     * Filter which UsersFiles to update
     */
    where?: UsersFilesWhereInput
    /**
     * Limit how many UsersFiles to update.
     */
    limit?: number
  }

  /**
   * UsersFiles upsert
   */
  export type UsersFilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersFiles
     */
    select?: UsersFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersFiles
     */
    omit?: UsersFilesOmit<ExtArgs> | null
    /**
     * The filter to search for the UsersFiles to update in case it exists.
     */
    where: UsersFilesWhereUniqueInput
    /**
     * In case the UsersFiles found by the `where` argument doesn't exist, create a new UsersFiles with this data.
     */
    create: XOR<UsersFilesCreateInput, UsersFilesUncheckedCreateInput>
    /**
     * In case the UsersFiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersFilesUpdateInput, UsersFilesUncheckedUpdateInput>
  }

  /**
   * UsersFiles delete
   */
  export type UsersFilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersFiles
     */
    select?: UsersFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersFiles
     */
    omit?: UsersFilesOmit<ExtArgs> | null
    /**
     * Filter which UsersFiles to delete.
     */
    where: UsersFilesWhereUniqueInput
  }

  /**
   * UsersFiles deleteMany
   */
  export type UsersFilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersFiles to delete
     */
    where?: UsersFilesWhereInput
    /**
     * Limit how many UsersFiles to delete.
     */
    limit?: number
  }

  /**
   * UsersFiles without action
   */
  export type UsersFilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersFiles
     */
    select?: UsersFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersFiles
     */
    omit?: UsersFilesOmit<ExtArgs> | null
  }


  /**
   * Model Flowers
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
    varietyId: number | null
  }

  export type FlowersSumAggregateOutputType = {
    id: number | null
    price: number | null
    varietyId: number | null
  }

  export type FlowersMinAggregateOutputType = {
    id: number | null
    color: string | null
    name: string | null
    price: number | null
    varietyId: number | null
  }

  export type FlowersMaxAggregateOutputType = {
    id: number | null
    color: string | null
    name: string | null
    price: number | null
    varietyId: number | null
  }

  export type FlowersCountAggregateOutputType = {
    id: number
    color: number
    name: number
    price: number
    varietyId: number
    _all: number
  }


  export type FlowersAvgAggregateInputType = {
    id?: true
    price?: true
    varietyId?: true
  }

  export type FlowersSumAggregateInputType = {
    id?: true
    price?: true
    varietyId?: true
  }

  export type FlowersMinAggregateInputType = {
    id?: true
    color?: true
    name?: true
    price?: true
    varietyId?: true
  }

  export type FlowersMaxAggregateInputType = {
    id?: true
    color?: true
    name?: true
    price?: true
    varietyId?: true
  }

  export type FlowersCountAggregateInputType = {
    id?: true
    color?: true
    name?: true
    price?: true
    varietyId?: true
    _all?: true
  }

  export type FlowersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flowers to aggregate.
     */
    where?: FlowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flowers to fetch.
     */
    orderBy?: FlowersOrderByWithRelationInput | FlowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flowers
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




  export type FlowersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowersWhereInput
    orderBy?: FlowersOrderByWithAggregationInput | FlowersOrderByWithAggregationInput[]
    by: FlowersScalarFieldEnum[] | FlowersScalarFieldEnum
    having?: FlowersScalarWhereWithAggregatesInput
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
    name: string
    price: number
    varietyId: number
    _count: FlowersCountAggregateOutputType | null
    _avg: FlowersAvgAggregateOutputType | null
    _sum: FlowersSumAggregateOutputType | null
    _min: FlowersMinAggregateOutputType | null
    _max: FlowersMaxAggregateOutputType | null
  }

  type GetFlowersGroupByPayload<T extends FlowersGroupByArgs> = Prisma.PrismaPromise<
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


  export type FlowersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
    name?: boolean
    price?: boolean
    varietyId?: boolean
    imgs?: boolean | Flowers$imgsArgs<ExtArgs>
    history?: boolean | Flowers$historyArgs<ExtArgs>
    farms?: boolean | Flowers$farmsArgs<ExtArgs>
    bouquets?: boolean | Flowers$bouquetsArgs<ExtArgs>
    variety?: boolean | FlowersVarietyDefaultArgs<ExtArgs>
    _count?: boolean | FlowersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers"]>

  export type FlowersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
    name?: boolean
    price?: boolean
    varietyId?: boolean
    variety?: boolean | FlowersVarietyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers"]>

  export type FlowersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
    name?: boolean
    price?: boolean
    varietyId?: boolean
    variety?: boolean | FlowersVarietyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers"]>

  export type FlowersSelectScalar = {
    id?: boolean
    color?: boolean
    name?: boolean
    price?: boolean
    varietyId?: boolean
  }

  export type FlowersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "color" | "name" | "price" | "varietyId", ExtArgs["result"]["flowers"]>
  export type FlowersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imgs?: boolean | Flowers$imgsArgs<ExtArgs>
    history?: boolean | Flowers$historyArgs<ExtArgs>
    farms?: boolean | Flowers$farmsArgs<ExtArgs>
    bouquets?: boolean | Flowers$bouquetsArgs<ExtArgs>
    variety?: boolean | FlowersVarietyDefaultArgs<ExtArgs>
    _count?: boolean | FlowersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlowersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variety?: boolean | FlowersVarietyDefaultArgs<ExtArgs>
  }
  export type FlowersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variety?: boolean | FlowersVarietyDefaultArgs<ExtArgs>
  }

  export type $FlowersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flowers"
    objects: {
      imgs: Prisma.$FlowersAndFilesPayload<ExtArgs>[]
      history: Prisma.$FlowersHistoryPayload<ExtArgs>[]
      farms: Prisma.$FlowersFarmsAndFlowersPayload<ExtArgs>[]
      bouquets: Prisma.$FlowersBouquetsAndFlowersPayload<ExtArgs>[]
      variety: Prisma.$FlowersVarietyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      color: string
      name: string
      price: number
      varietyId: number
    }, ExtArgs["result"]["flowers"]>
    composites: {}
  }

  type FlowersGetPayload<S extends boolean | null | undefined | FlowersDefaultArgs> = $Result.GetResult<Prisma.$FlowersPayload, S>

  type FlowersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlowersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlowersCountAggregateInputType | true
    }

  export interface FlowersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flowers'], meta: { name: 'Flowers' } }
    /**
     * Find zero or one Flowers that matches the filter.
     * @param {FlowersFindUniqueArgs} args - Arguments to find a Flowers
     * @example
     * // Get one Flowers
     * const flowers = await prisma.flowers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlowersFindUniqueArgs>(args: SelectSubset<T, FlowersFindUniqueArgs<ExtArgs>>): Prisma__FlowersClient<$Result.GetResult<Prisma.$FlowersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flowers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlowersFindUniqueOrThrowArgs} args - Arguments to find a Flowers
     * @example
     * // Get one Flowers
     * const flowers = await prisma.flowers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlowersFindUniqueOrThrowArgs>(args: SelectSubset<T, FlowersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlowersClient<$Result.GetResult<Prisma.$FlowersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersFindFirstArgs} args - Arguments to find a Flowers
     * @example
     * // Get one Flowers
     * const flowers = await prisma.flowers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlowersFindFirstArgs>(args?: SelectSubset<T, FlowersFindFirstArgs<ExtArgs>>): Prisma__FlowersClient<$Result.GetResult<Prisma.$FlowersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersFindFirstOrThrowArgs} args - Arguments to find a Flowers
     * @example
     * // Get one Flowers
     * const flowers = await prisma.flowers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlowersFindFirstOrThrowArgs>(args?: SelectSubset<T, FlowersFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlowersClient<$Result.GetResult<Prisma.$FlowersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flowers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends FlowersFindManyArgs>(args?: SelectSubset<T, FlowersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flowers.
     * @param {FlowersCreateArgs} args - Arguments to create a Flowers.
     * @example
     * // Create one Flowers
     * const Flowers = await prisma.flowers.create({
     *   data: {
     *     // ... data to create a Flowers
     *   }
     * })
     * 
     */
    create<T extends FlowersCreateArgs>(args: SelectSubset<T, FlowersCreateArgs<ExtArgs>>): Prisma__FlowersClient<$Result.GetResult<Prisma.$FlowersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flowers.
     * @param {FlowersCreateManyArgs} args - Arguments to create many Flowers.
     * @example
     * // Create many Flowers
     * const flowers = await prisma.flowers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlowersCreateManyArgs>(args?: SelectSubset<T, FlowersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flowers and returns the data saved in the database.
     * @param {FlowersCreateManyAndReturnArgs} args - Arguments to create many Flowers.
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
    createManyAndReturn<T extends FlowersCreateManyAndReturnArgs>(args?: SelectSubset<T, FlowersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flowers.
     * @param {FlowersDeleteArgs} args - Arguments to delete one Flowers.
     * @example
     * // Delete one Flowers
     * const Flowers = await prisma.flowers.delete({
     *   where: {
     *     // ... filter to delete one Flowers
     *   }
     * })
     * 
     */
    delete<T extends FlowersDeleteArgs>(args: SelectSubset<T, FlowersDeleteArgs<ExtArgs>>): Prisma__FlowersClient<$Result.GetResult<Prisma.$FlowersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flowers.
     * @param {FlowersUpdateArgs} args - Arguments to update one Flowers.
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
    update<T extends FlowersUpdateArgs>(args: SelectSubset<T, FlowersUpdateArgs<ExtArgs>>): Prisma__FlowersClient<$Result.GetResult<Prisma.$FlowersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flowers.
     * @param {FlowersDeleteManyArgs} args - Arguments to filter Flowers to delete.
     * @example
     * // Delete a few Flowers
     * const { count } = await prisma.flowers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlowersDeleteManyArgs>(args?: SelectSubset<T, FlowersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends FlowersUpdateManyArgs>(args: SelectSubset<T, FlowersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowers and returns the data updated in the database.
     * @param {FlowersUpdateManyAndReturnArgs} args - Arguments to update many Flowers.
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
    updateManyAndReturn<T extends FlowersUpdateManyAndReturnArgs>(args: SelectSubset<T, FlowersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flowers.
     * @param {FlowersUpsertArgs} args - Arguments to update or create a Flowers.
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
    upsert<T extends FlowersUpsertArgs>(args: SelectSubset<T, FlowersUpsertArgs<ExtArgs>>): Prisma__FlowersClient<$Result.GetResult<Prisma.$FlowersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersCountArgs} args - Arguments to filter Flowers to count.
     * @example
     * // Count the number of Flowers
     * const count = await prisma.flowers.count({
     *   where: {
     *     // ... the filter for the Flowers we want to count
     *   }
     * })
    **/
    count<T extends FlowersCountArgs>(
      args?: Subset<T, FlowersCountArgs>,
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
     * @param {FlowersGroupByArgs} args - Group by arguments.
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
      T extends FlowersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowersGroupByArgs['orderBy'] }
        : { orderBy?: FlowersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlowersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flowers model
   */
  readonly fields: FlowersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flowers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlowersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    imgs<T extends Flowers$imgsArgs<ExtArgs> = {}>(args?: Subset<T, Flowers$imgsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersAndFilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends Flowers$historyArgs<ExtArgs> = {}>(args?: Subset<T, Flowers$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    farms<T extends Flowers$farmsArgs<ExtArgs> = {}>(args?: Subset<T, Flowers$farmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersFarmsAndFlowersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bouquets<T extends Flowers$bouquetsArgs<ExtArgs> = {}>(args?: Subset<T, Flowers$bouquetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersBouquetsAndFlowersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    variety<T extends FlowersVarietyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlowersVarietyDefaultArgs<ExtArgs>>): Prisma__FlowersVarietyClient<$Result.GetResult<Prisma.$FlowersVarietyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Flowers model
   */
  interface FlowersFieldRefs {
    readonly id: FieldRef<"Flowers", 'Int'>
    readonly color: FieldRef<"Flowers", 'String'>
    readonly name: FieldRef<"Flowers", 'String'>
    readonly price: FieldRef<"Flowers", 'Int'>
    readonly varietyId: FieldRef<"Flowers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Flowers findUnique
   */
  export type FlowersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowers
     */
    select?: FlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowers
     */
    omit?: FlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersInclude<ExtArgs> | null
    /**
     * Filter, which Flowers to fetch.
     */
    where: FlowersWhereUniqueInput
  }

  /**
   * Flowers findUniqueOrThrow
   */
  export type FlowersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowers
     */
    select?: FlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowers
     */
    omit?: FlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersInclude<ExtArgs> | null
    /**
     * Filter, which Flowers to fetch.
     */
    where: FlowersWhereUniqueInput
  }

  /**
   * Flowers findFirst
   */
  export type FlowersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowers
     */
    select?: FlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowers
     */
    omit?: FlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersInclude<ExtArgs> | null
    /**
     * Filter, which Flowers to fetch.
     */
    where?: FlowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flowers to fetch.
     */
    orderBy?: FlowersOrderByWithRelationInput | FlowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flowers.
     */
    cursor?: FlowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flowers.
     */
    distinct?: FlowersScalarFieldEnum | FlowersScalarFieldEnum[]
  }

  /**
   * Flowers findFirstOrThrow
   */
  export type FlowersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowers
     */
    select?: FlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowers
     */
    omit?: FlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersInclude<ExtArgs> | null
    /**
     * Filter, which Flowers to fetch.
     */
    where?: FlowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flowers to fetch.
     */
    orderBy?: FlowersOrderByWithRelationInput | FlowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flowers.
     */
    cursor?: FlowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flowers.
     */
    distinct?: FlowersScalarFieldEnum | FlowersScalarFieldEnum[]
  }

  /**
   * Flowers findMany
   */
  export type FlowersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowers
     */
    select?: FlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowers
     */
    omit?: FlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersInclude<ExtArgs> | null
    /**
     * Filter, which Flowers to fetch.
     */
    where?: FlowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flowers to fetch.
     */
    orderBy?: FlowersOrderByWithRelationInput | FlowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flowers.
     */
    cursor?: FlowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flowers.
     */
    skip?: number
    distinct?: FlowersScalarFieldEnum | FlowersScalarFieldEnum[]
  }

  /**
   * Flowers create
   */
  export type FlowersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowers
     */
    select?: FlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowers
     */
    omit?: FlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersInclude<ExtArgs> | null
    /**
     * The data needed to create a Flowers.
     */
    data: XOR<FlowersCreateInput, FlowersUncheckedCreateInput>
  }

  /**
   * Flowers createMany
   */
  export type FlowersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flowers.
     */
    data: FlowersCreateManyInput | FlowersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flowers createManyAndReturn
   */
  export type FlowersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowers
     */
    select?: FlowersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flowers
     */
    omit?: FlowersOmit<ExtArgs> | null
    /**
     * The data used to create many Flowers.
     */
    data: FlowersCreateManyInput | FlowersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flowers update
   */
  export type FlowersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowers
     */
    select?: FlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowers
     */
    omit?: FlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersInclude<ExtArgs> | null
    /**
     * The data needed to update a Flowers.
     */
    data: XOR<FlowersUpdateInput, FlowersUncheckedUpdateInput>
    /**
     * Choose, which Flowers to update.
     */
    where: FlowersWhereUniqueInput
  }

  /**
   * Flowers updateMany
   */
  export type FlowersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flowers.
     */
    data: XOR<FlowersUpdateManyMutationInput, FlowersUncheckedUpdateManyInput>
    /**
     * Filter which Flowers to update
     */
    where?: FlowersWhereInput
    /**
     * Limit how many Flowers to update.
     */
    limit?: number
  }

  /**
   * Flowers updateManyAndReturn
   */
  export type FlowersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowers
     */
    select?: FlowersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flowers
     */
    omit?: FlowersOmit<ExtArgs> | null
    /**
     * The data used to update Flowers.
     */
    data: XOR<FlowersUpdateManyMutationInput, FlowersUncheckedUpdateManyInput>
    /**
     * Filter which Flowers to update
     */
    where?: FlowersWhereInput
    /**
     * Limit how many Flowers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flowers upsert
   */
  export type FlowersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowers
     */
    select?: FlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowers
     */
    omit?: FlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersInclude<ExtArgs> | null
    /**
     * The filter to search for the Flowers to update in case it exists.
     */
    where: FlowersWhereUniqueInput
    /**
     * In case the Flowers found by the `where` argument doesn't exist, create a new Flowers with this data.
     */
    create: XOR<FlowersCreateInput, FlowersUncheckedCreateInput>
    /**
     * In case the Flowers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowersUpdateInput, FlowersUncheckedUpdateInput>
  }

  /**
   * Flowers delete
   */
  export type FlowersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowers
     */
    select?: FlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowers
     */
    omit?: FlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersInclude<ExtArgs> | null
    /**
     * Filter which Flowers to delete.
     */
    where: FlowersWhereUniqueInput
  }

  /**
   * Flowers deleteMany
   */
  export type FlowersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flowers to delete
     */
    where?: FlowersWhereInput
    /**
     * Limit how many Flowers to delete.
     */
    limit?: number
  }

  /**
   * Flowers.imgs
   */
  export type Flowers$imgsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersAndFiles
     */
    select?: FlowersAndFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersAndFiles
     */
    omit?: FlowersAndFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersAndFilesInclude<ExtArgs> | null
    where?: FlowersAndFilesWhereInput
    orderBy?: FlowersAndFilesOrderByWithRelationInput | FlowersAndFilesOrderByWithRelationInput[]
    cursor?: FlowersAndFilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowersAndFilesScalarFieldEnum | FlowersAndFilesScalarFieldEnum[]
  }

  /**
   * Flowers.history
   */
  export type Flowers$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersHistory
     */
    select?: FlowersHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersHistory
     */
    omit?: FlowersHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersHistoryInclude<ExtArgs> | null
    where?: FlowersHistoryWhereInput
    orderBy?: FlowersHistoryOrderByWithRelationInput | FlowersHistoryOrderByWithRelationInput[]
    cursor?: FlowersHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowersHistoryScalarFieldEnum | FlowersHistoryScalarFieldEnum[]
  }

  /**
   * Flowers.farms
   */
  export type Flowers$farmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarmsAndFlowers
     */
    select?: FlowersFarmsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarmsAndFlowers
     */
    omit?: FlowersFarmsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsAndFlowersInclude<ExtArgs> | null
    where?: FlowersFarmsAndFlowersWhereInput
    orderBy?: FlowersFarmsAndFlowersOrderByWithRelationInput | FlowersFarmsAndFlowersOrderByWithRelationInput[]
    cursor?: FlowersFarmsAndFlowersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowersFarmsAndFlowersScalarFieldEnum | FlowersFarmsAndFlowersScalarFieldEnum[]
  }

  /**
   * Flowers.bouquets
   */
  export type Flowers$bouquetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquetsAndFlowers
     */
    select?: FlowersBouquetsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquetsAndFlowers
     */
    omit?: FlowersBouquetsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsAndFlowersInclude<ExtArgs> | null
    where?: FlowersBouquetsAndFlowersWhereInput
    orderBy?: FlowersBouquetsAndFlowersOrderByWithRelationInput | FlowersBouquetsAndFlowersOrderByWithRelationInput[]
    cursor?: FlowersBouquetsAndFlowersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowersBouquetsAndFlowersScalarFieldEnum | FlowersBouquetsAndFlowersScalarFieldEnum[]
  }

  /**
   * Flowers without action
   */
  export type FlowersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowers
     */
    select?: FlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowers
     */
    omit?: FlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersInclude<ExtArgs> | null
  }


  /**
   * Model FlowersVariety
   */

  export type AggregateFlowersVariety = {
    _count: FlowersVarietyCountAggregateOutputType | null
    _avg: FlowersVarietyAvgAggregateOutputType | null
    _sum: FlowersVarietySumAggregateOutputType | null
    _min: FlowersVarietyMinAggregateOutputType | null
    _max: FlowersVarietyMaxAggregateOutputType | null
  }

  export type FlowersVarietyAvgAggregateOutputType = {
    id: number | null
  }

  export type FlowersVarietySumAggregateOutputType = {
    id: number | null
  }

  export type FlowersVarietyMinAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type FlowersVarietyMaxAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type FlowersVarietyCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type FlowersVarietyAvgAggregateInputType = {
    id?: true
  }

  export type FlowersVarietySumAggregateInputType = {
    id?: true
  }

  export type FlowersVarietyMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type FlowersVarietyMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type FlowersVarietyCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type FlowersVarietyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowersVariety to aggregate.
     */
    where?: FlowersVarietyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersVarieties to fetch.
     */
    orderBy?: FlowersVarietyOrderByWithRelationInput | FlowersVarietyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowersVarietyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersVarieties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersVarieties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlowersVarieties
    **/
    _count?: true | FlowersVarietyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowersVarietyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowersVarietySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowersVarietyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowersVarietyMaxAggregateInputType
  }

  export type GetFlowersVarietyAggregateType<T extends FlowersVarietyAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowersVariety]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowersVariety[P]>
      : GetScalarType<T[P], AggregateFlowersVariety[P]>
  }




  export type FlowersVarietyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowersVarietyWhereInput
    orderBy?: FlowersVarietyOrderByWithAggregationInput | FlowersVarietyOrderByWithAggregationInput[]
    by: FlowersVarietyScalarFieldEnum[] | FlowersVarietyScalarFieldEnum
    having?: FlowersVarietyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowersVarietyCountAggregateInputType | true
    _avg?: FlowersVarietyAvgAggregateInputType
    _sum?: FlowersVarietySumAggregateInputType
    _min?: FlowersVarietyMinAggregateInputType
    _max?: FlowersVarietyMaxAggregateInputType
  }

  export type FlowersVarietyGroupByOutputType = {
    id: number
    title: string
    _count: FlowersVarietyCountAggregateOutputType | null
    _avg: FlowersVarietyAvgAggregateOutputType | null
    _sum: FlowersVarietySumAggregateOutputType | null
    _min: FlowersVarietyMinAggregateOutputType | null
    _max: FlowersVarietyMaxAggregateOutputType | null
  }

  type GetFlowersVarietyGroupByPayload<T extends FlowersVarietyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlowersVarietyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowersVarietyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowersVarietyGroupByOutputType[P]>
            : GetScalarType<T[P], FlowersVarietyGroupByOutputType[P]>
        }
      >
    >


  export type FlowersVarietySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    flowers?: boolean | FlowersVariety$flowersArgs<ExtArgs>
    _count?: boolean | FlowersVarietyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowersVariety"]>

  export type FlowersVarietySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["flowersVariety"]>

  export type FlowersVarietySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["flowersVariety"]>

  export type FlowersVarietySelectScalar = {
    id?: boolean
    title?: boolean
  }

  export type FlowersVarietyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title", ExtArgs["result"]["flowersVariety"]>
  export type FlowersVarietyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | FlowersVariety$flowersArgs<ExtArgs>
    _count?: boolean | FlowersVarietyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlowersVarietyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FlowersVarietyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FlowersVarietyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlowersVariety"
    objects: {
      flowers: Prisma.$FlowersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
    }, ExtArgs["result"]["flowersVariety"]>
    composites: {}
  }

  type FlowersVarietyGetPayload<S extends boolean | null | undefined | FlowersVarietyDefaultArgs> = $Result.GetResult<Prisma.$FlowersVarietyPayload, S>

  type FlowersVarietyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlowersVarietyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlowersVarietyCountAggregateInputType | true
    }

  export interface FlowersVarietyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlowersVariety'], meta: { name: 'FlowersVariety' } }
    /**
     * Find zero or one FlowersVariety that matches the filter.
     * @param {FlowersVarietyFindUniqueArgs} args - Arguments to find a FlowersVariety
     * @example
     * // Get one FlowersVariety
     * const flowersVariety = await prisma.flowersVariety.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlowersVarietyFindUniqueArgs>(args: SelectSubset<T, FlowersVarietyFindUniqueArgs<ExtArgs>>): Prisma__FlowersVarietyClient<$Result.GetResult<Prisma.$FlowersVarietyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlowersVariety that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlowersVarietyFindUniqueOrThrowArgs} args - Arguments to find a FlowersVariety
     * @example
     * // Get one FlowersVariety
     * const flowersVariety = await prisma.flowersVariety.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlowersVarietyFindUniqueOrThrowArgs>(args: SelectSubset<T, FlowersVarietyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlowersVarietyClient<$Result.GetResult<Prisma.$FlowersVarietyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowersVariety that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersVarietyFindFirstArgs} args - Arguments to find a FlowersVariety
     * @example
     * // Get one FlowersVariety
     * const flowersVariety = await prisma.flowersVariety.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlowersVarietyFindFirstArgs>(args?: SelectSubset<T, FlowersVarietyFindFirstArgs<ExtArgs>>): Prisma__FlowersVarietyClient<$Result.GetResult<Prisma.$FlowersVarietyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowersVariety that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersVarietyFindFirstOrThrowArgs} args - Arguments to find a FlowersVariety
     * @example
     * // Get one FlowersVariety
     * const flowersVariety = await prisma.flowersVariety.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlowersVarietyFindFirstOrThrowArgs>(args?: SelectSubset<T, FlowersVarietyFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlowersVarietyClient<$Result.GetResult<Prisma.$FlowersVarietyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlowersVarieties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersVarietyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlowersVarieties
     * const flowersVarieties = await prisma.flowersVariety.findMany()
     * 
     * // Get first 10 FlowersVarieties
     * const flowersVarieties = await prisma.flowersVariety.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowersVarietyWithIdOnly = await prisma.flowersVariety.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlowersVarietyFindManyArgs>(args?: SelectSubset<T, FlowersVarietyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersVarietyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlowersVariety.
     * @param {FlowersVarietyCreateArgs} args - Arguments to create a FlowersVariety.
     * @example
     * // Create one FlowersVariety
     * const FlowersVariety = await prisma.flowersVariety.create({
     *   data: {
     *     // ... data to create a FlowersVariety
     *   }
     * })
     * 
     */
    create<T extends FlowersVarietyCreateArgs>(args: SelectSubset<T, FlowersVarietyCreateArgs<ExtArgs>>): Prisma__FlowersVarietyClient<$Result.GetResult<Prisma.$FlowersVarietyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlowersVarieties.
     * @param {FlowersVarietyCreateManyArgs} args - Arguments to create many FlowersVarieties.
     * @example
     * // Create many FlowersVarieties
     * const flowersVariety = await prisma.flowersVariety.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlowersVarietyCreateManyArgs>(args?: SelectSubset<T, FlowersVarietyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlowersVarieties and returns the data saved in the database.
     * @param {FlowersVarietyCreateManyAndReturnArgs} args - Arguments to create many FlowersVarieties.
     * @example
     * // Create many FlowersVarieties
     * const flowersVariety = await prisma.flowersVariety.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlowersVarieties and only return the `id`
     * const flowersVarietyWithIdOnly = await prisma.flowersVariety.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlowersVarietyCreateManyAndReturnArgs>(args?: SelectSubset<T, FlowersVarietyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersVarietyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlowersVariety.
     * @param {FlowersVarietyDeleteArgs} args - Arguments to delete one FlowersVariety.
     * @example
     * // Delete one FlowersVariety
     * const FlowersVariety = await prisma.flowersVariety.delete({
     *   where: {
     *     // ... filter to delete one FlowersVariety
     *   }
     * })
     * 
     */
    delete<T extends FlowersVarietyDeleteArgs>(args: SelectSubset<T, FlowersVarietyDeleteArgs<ExtArgs>>): Prisma__FlowersVarietyClient<$Result.GetResult<Prisma.$FlowersVarietyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlowersVariety.
     * @param {FlowersVarietyUpdateArgs} args - Arguments to update one FlowersVariety.
     * @example
     * // Update one FlowersVariety
     * const flowersVariety = await prisma.flowersVariety.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlowersVarietyUpdateArgs>(args: SelectSubset<T, FlowersVarietyUpdateArgs<ExtArgs>>): Prisma__FlowersVarietyClient<$Result.GetResult<Prisma.$FlowersVarietyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlowersVarieties.
     * @param {FlowersVarietyDeleteManyArgs} args - Arguments to filter FlowersVarieties to delete.
     * @example
     * // Delete a few FlowersVarieties
     * const { count } = await prisma.flowersVariety.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlowersVarietyDeleteManyArgs>(args?: SelectSubset<T, FlowersVarietyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowersVarieties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersVarietyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlowersVarieties
     * const flowersVariety = await prisma.flowersVariety.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlowersVarietyUpdateManyArgs>(args: SelectSubset<T, FlowersVarietyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowersVarieties and returns the data updated in the database.
     * @param {FlowersVarietyUpdateManyAndReturnArgs} args - Arguments to update many FlowersVarieties.
     * @example
     * // Update many FlowersVarieties
     * const flowersVariety = await prisma.flowersVariety.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlowersVarieties and only return the `id`
     * const flowersVarietyWithIdOnly = await prisma.flowersVariety.updateManyAndReturn({
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
    updateManyAndReturn<T extends FlowersVarietyUpdateManyAndReturnArgs>(args: SelectSubset<T, FlowersVarietyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersVarietyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlowersVariety.
     * @param {FlowersVarietyUpsertArgs} args - Arguments to update or create a FlowersVariety.
     * @example
     * // Update or create a FlowersVariety
     * const flowersVariety = await prisma.flowersVariety.upsert({
     *   create: {
     *     // ... data to create a FlowersVariety
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlowersVariety we want to update
     *   }
     * })
     */
    upsert<T extends FlowersVarietyUpsertArgs>(args: SelectSubset<T, FlowersVarietyUpsertArgs<ExtArgs>>): Prisma__FlowersVarietyClient<$Result.GetResult<Prisma.$FlowersVarietyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlowersVarieties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersVarietyCountArgs} args - Arguments to filter FlowersVarieties to count.
     * @example
     * // Count the number of FlowersVarieties
     * const count = await prisma.flowersVariety.count({
     *   where: {
     *     // ... the filter for the FlowersVarieties we want to count
     *   }
     * })
    **/
    count<T extends FlowersVarietyCountArgs>(
      args?: Subset<T, FlowersVarietyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowersVarietyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlowersVariety.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersVarietyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlowersVarietyAggregateArgs>(args: Subset<T, FlowersVarietyAggregateArgs>): Prisma.PrismaPromise<GetFlowersVarietyAggregateType<T>>

    /**
     * Group by FlowersVariety.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersVarietyGroupByArgs} args - Group by arguments.
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
      T extends FlowersVarietyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowersVarietyGroupByArgs['orderBy'] }
        : { orderBy?: FlowersVarietyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlowersVarietyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowersVarietyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlowersVariety model
   */
  readonly fields: FlowersVarietyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlowersVariety.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlowersVarietyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flowers<T extends FlowersVariety$flowersArgs<ExtArgs> = {}>(args?: Subset<T, FlowersVariety$flowersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FlowersVariety model
   */
  interface FlowersVarietyFieldRefs {
    readonly id: FieldRef<"FlowersVariety", 'Int'>
    readonly title: FieldRef<"FlowersVariety", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FlowersVariety findUnique
   */
  export type FlowersVarietyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersVariety
     */
    select?: FlowersVarietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersVariety
     */
    omit?: FlowersVarietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersVarietyInclude<ExtArgs> | null
    /**
     * Filter, which FlowersVariety to fetch.
     */
    where: FlowersVarietyWhereUniqueInput
  }

  /**
   * FlowersVariety findUniqueOrThrow
   */
  export type FlowersVarietyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersVariety
     */
    select?: FlowersVarietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersVariety
     */
    omit?: FlowersVarietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersVarietyInclude<ExtArgs> | null
    /**
     * Filter, which FlowersVariety to fetch.
     */
    where: FlowersVarietyWhereUniqueInput
  }

  /**
   * FlowersVariety findFirst
   */
  export type FlowersVarietyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersVariety
     */
    select?: FlowersVarietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersVariety
     */
    omit?: FlowersVarietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersVarietyInclude<ExtArgs> | null
    /**
     * Filter, which FlowersVariety to fetch.
     */
    where?: FlowersVarietyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersVarieties to fetch.
     */
    orderBy?: FlowersVarietyOrderByWithRelationInput | FlowersVarietyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowersVarieties.
     */
    cursor?: FlowersVarietyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersVarieties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersVarieties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowersVarieties.
     */
    distinct?: FlowersVarietyScalarFieldEnum | FlowersVarietyScalarFieldEnum[]
  }

  /**
   * FlowersVariety findFirstOrThrow
   */
  export type FlowersVarietyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersVariety
     */
    select?: FlowersVarietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersVariety
     */
    omit?: FlowersVarietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersVarietyInclude<ExtArgs> | null
    /**
     * Filter, which FlowersVariety to fetch.
     */
    where?: FlowersVarietyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersVarieties to fetch.
     */
    orderBy?: FlowersVarietyOrderByWithRelationInput | FlowersVarietyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowersVarieties.
     */
    cursor?: FlowersVarietyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersVarieties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersVarieties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowersVarieties.
     */
    distinct?: FlowersVarietyScalarFieldEnum | FlowersVarietyScalarFieldEnum[]
  }

  /**
   * FlowersVariety findMany
   */
  export type FlowersVarietyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersVariety
     */
    select?: FlowersVarietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersVariety
     */
    omit?: FlowersVarietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersVarietyInclude<ExtArgs> | null
    /**
     * Filter, which FlowersVarieties to fetch.
     */
    where?: FlowersVarietyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersVarieties to fetch.
     */
    orderBy?: FlowersVarietyOrderByWithRelationInput | FlowersVarietyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlowersVarieties.
     */
    cursor?: FlowersVarietyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersVarieties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersVarieties.
     */
    skip?: number
    distinct?: FlowersVarietyScalarFieldEnum | FlowersVarietyScalarFieldEnum[]
  }

  /**
   * FlowersVariety create
   */
  export type FlowersVarietyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersVariety
     */
    select?: FlowersVarietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersVariety
     */
    omit?: FlowersVarietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersVarietyInclude<ExtArgs> | null
    /**
     * The data needed to create a FlowersVariety.
     */
    data: XOR<FlowersVarietyCreateInput, FlowersVarietyUncheckedCreateInput>
  }

  /**
   * FlowersVariety createMany
   */
  export type FlowersVarietyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlowersVarieties.
     */
    data: FlowersVarietyCreateManyInput | FlowersVarietyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlowersVariety createManyAndReturn
   */
  export type FlowersVarietyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersVariety
     */
    select?: FlowersVarietySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersVariety
     */
    omit?: FlowersVarietyOmit<ExtArgs> | null
    /**
     * The data used to create many FlowersVarieties.
     */
    data: FlowersVarietyCreateManyInput | FlowersVarietyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlowersVariety update
   */
  export type FlowersVarietyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersVariety
     */
    select?: FlowersVarietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersVariety
     */
    omit?: FlowersVarietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersVarietyInclude<ExtArgs> | null
    /**
     * The data needed to update a FlowersVariety.
     */
    data: XOR<FlowersVarietyUpdateInput, FlowersVarietyUncheckedUpdateInput>
    /**
     * Choose, which FlowersVariety to update.
     */
    where: FlowersVarietyWhereUniqueInput
  }

  /**
   * FlowersVariety updateMany
   */
  export type FlowersVarietyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlowersVarieties.
     */
    data: XOR<FlowersVarietyUpdateManyMutationInput, FlowersVarietyUncheckedUpdateManyInput>
    /**
     * Filter which FlowersVarieties to update
     */
    where?: FlowersVarietyWhereInput
    /**
     * Limit how many FlowersVarieties to update.
     */
    limit?: number
  }

  /**
   * FlowersVariety updateManyAndReturn
   */
  export type FlowersVarietyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersVariety
     */
    select?: FlowersVarietySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersVariety
     */
    omit?: FlowersVarietyOmit<ExtArgs> | null
    /**
     * The data used to update FlowersVarieties.
     */
    data: XOR<FlowersVarietyUpdateManyMutationInput, FlowersVarietyUncheckedUpdateManyInput>
    /**
     * Filter which FlowersVarieties to update
     */
    where?: FlowersVarietyWhereInput
    /**
     * Limit how many FlowersVarieties to update.
     */
    limit?: number
  }

  /**
   * FlowersVariety upsert
   */
  export type FlowersVarietyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersVariety
     */
    select?: FlowersVarietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersVariety
     */
    omit?: FlowersVarietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersVarietyInclude<ExtArgs> | null
    /**
     * The filter to search for the FlowersVariety to update in case it exists.
     */
    where: FlowersVarietyWhereUniqueInput
    /**
     * In case the FlowersVariety found by the `where` argument doesn't exist, create a new FlowersVariety with this data.
     */
    create: XOR<FlowersVarietyCreateInput, FlowersVarietyUncheckedCreateInput>
    /**
     * In case the FlowersVariety was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowersVarietyUpdateInput, FlowersVarietyUncheckedUpdateInput>
  }

  /**
   * FlowersVariety delete
   */
  export type FlowersVarietyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersVariety
     */
    select?: FlowersVarietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersVariety
     */
    omit?: FlowersVarietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersVarietyInclude<ExtArgs> | null
    /**
     * Filter which FlowersVariety to delete.
     */
    where: FlowersVarietyWhereUniqueInput
  }

  /**
   * FlowersVariety deleteMany
   */
  export type FlowersVarietyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowersVarieties to delete
     */
    where?: FlowersVarietyWhereInput
    /**
     * Limit how many FlowersVarieties to delete.
     */
    limit?: number
  }

  /**
   * FlowersVariety.flowers
   */
  export type FlowersVariety$flowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowers
     */
    select?: FlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowers
     */
    omit?: FlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersInclude<ExtArgs> | null
    where?: FlowersWhereInput
    orderBy?: FlowersOrderByWithRelationInput | FlowersOrderByWithRelationInput[]
    cursor?: FlowersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowersScalarFieldEnum | FlowersScalarFieldEnum[]
  }

  /**
   * FlowersVariety without action
   */
  export type FlowersVarietyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersVariety
     */
    select?: FlowersVarietySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersVariety
     */
    omit?: FlowersVarietyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersVarietyInclude<ExtArgs> | null
  }


  /**
   * Model FlowersHistory
   */

  export type AggregateFlowersHistory = {
    _count: FlowersHistoryCountAggregateOutputType | null
    _avg: FlowersHistoryAvgAggregateOutputType | null
    _sum: FlowersHistorySumAggregateOutputType | null
    _min: FlowersHistoryMinAggregateOutputType | null
    _max: FlowersHistoryMaxAggregateOutputType | null
  }

  export type FlowersHistoryAvgAggregateOutputType = {
    id: number | null
    flowersId: number | null
    date: number | null
    price: number | null
  }

  export type FlowersHistorySumAggregateOutputType = {
    id: number | null
    flowersId: number | null
    date: number | null
    price: number | null
  }

  export type FlowersHistoryMinAggregateOutputType = {
    id: number | null
    flowersId: number | null
    date: number | null
    price: number | null
  }

  export type FlowersHistoryMaxAggregateOutputType = {
    id: number | null
    flowersId: number | null
    date: number | null
    price: number | null
  }

  export type FlowersHistoryCountAggregateOutputType = {
    id: number
    flowersId: number
    date: number
    price: number
    _all: number
  }


  export type FlowersHistoryAvgAggregateInputType = {
    id?: true
    flowersId?: true
    date?: true
    price?: true
  }

  export type FlowersHistorySumAggregateInputType = {
    id?: true
    flowersId?: true
    date?: true
    price?: true
  }

  export type FlowersHistoryMinAggregateInputType = {
    id?: true
    flowersId?: true
    date?: true
    price?: true
  }

  export type FlowersHistoryMaxAggregateInputType = {
    id?: true
    flowersId?: true
    date?: true
    price?: true
  }

  export type FlowersHistoryCountAggregateInputType = {
    id?: true
    flowersId?: true
    date?: true
    price?: true
    _all?: true
  }

  export type FlowersHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowersHistory to aggregate.
     */
    where?: FlowersHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersHistories to fetch.
     */
    orderBy?: FlowersHistoryOrderByWithRelationInput | FlowersHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowersHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlowersHistories
    **/
    _count?: true | FlowersHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowersHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowersHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowersHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowersHistoryMaxAggregateInputType
  }

  export type GetFlowersHistoryAggregateType<T extends FlowersHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowersHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowersHistory[P]>
      : GetScalarType<T[P], AggregateFlowersHistory[P]>
  }




  export type FlowersHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowersHistoryWhereInput
    orderBy?: FlowersHistoryOrderByWithAggregationInput | FlowersHistoryOrderByWithAggregationInput[]
    by: FlowersHistoryScalarFieldEnum[] | FlowersHistoryScalarFieldEnum
    having?: FlowersHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowersHistoryCountAggregateInputType | true
    _avg?: FlowersHistoryAvgAggregateInputType
    _sum?: FlowersHistorySumAggregateInputType
    _min?: FlowersHistoryMinAggregateInputType
    _max?: FlowersHistoryMaxAggregateInputType
  }

  export type FlowersHistoryGroupByOutputType = {
    id: number
    flowersId: number
    date: number
    price: number
    _count: FlowersHistoryCountAggregateOutputType | null
    _avg: FlowersHistoryAvgAggregateOutputType | null
    _sum: FlowersHistorySumAggregateOutputType | null
    _min: FlowersHistoryMinAggregateOutputType | null
    _max: FlowersHistoryMaxAggregateOutputType | null
  }

  type GetFlowersHistoryGroupByPayload<T extends FlowersHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlowersHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowersHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowersHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], FlowersHistoryGroupByOutputType[P]>
        }
      >
    >


  export type FlowersHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flowersId?: boolean
    date?: boolean
    price?: boolean
    flower?: boolean | FlowersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowersHistory"]>

  export type FlowersHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flowersId?: boolean
    date?: boolean
    price?: boolean
    flower?: boolean | FlowersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowersHistory"]>

  export type FlowersHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flowersId?: boolean
    date?: boolean
    price?: boolean
    flower?: boolean | FlowersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowersHistory"]>

  export type FlowersHistorySelectScalar = {
    id?: boolean
    flowersId?: boolean
    date?: boolean
    price?: boolean
  }

  export type FlowersHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "flowersId" | "date" | "price", ExtArgs["result"]["flowersHistory"]>
  export type FlowersHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flower?: boolean | FlowersDefaultArgs<ExtArgs>
  }
  export type FlowersHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flower?: boolean | FlowersDefaultArgs<ExtArgs>
  }
  export type FlowersHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flower?: boolean | FlowersDefaultArgs<ExtArgs>
  }

  export type $FlowersHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlowersHistory"
    objects: {
      flower: Prisma.$FlowersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      flowersId: number
      date: number
      price: number
    }, ExtArgs["result"]["flowersHistory"]>
    composites: {}
  }

  type FlowersHistoryGetPayload<S extends boolean | null | undefined | FlowersHistoryDefaultArgs> = $Result.GetResult<Prisma.$FlowersHistoryPayload, S>

  type FlowersHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlowersHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlowersHistoryCountAggregateInputType | true
    }

  export interface FlowersHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlowersHistory'], meta: { name: 'FlowersHistory' } }
    /**
     * Find zero or one FlowersHistory that matches the filter.
     * @param {FlowersHistoryFindUniqueArgs} args - Arguments to find a FlowersHistory
     * @example
     * // Get one FlowersHistory
     * const flowersHistory = await prisma.flowersHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlowersHistoryFindUniqueArgs>(args: SelectSubset<T, FlowersHistoryFindUniqueArgs<ExtArgs>>): Prisma__FlowersHistoryClient<$Result.GetResult<Prisma.$FlowersHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlowersHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlowersHistoryFindUniqueOrThrowArgs} args - Arguments to find a FlowersHistory
     * @example
     * // Get one FlowersHistory
     * const flowersHistory = await prisma.flowersHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlowersHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, FlowersHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlowersHistoryClient<$Result.GetResult<Prisma.$FlowersHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowersHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersHistoryFindFirstArgs} args - Arguments to find a FlowersHistory
     * @example
     * // Get one FlowersHistory
     * const flowersHistory = await prisma.flowersHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlowersHistoryFindFirstArgs>(args?: SelectSubset<T, FlowersHistoryFindFirstArgs<ExtArgs>>): Prisma__FlowersHistoryClient<$Result.GetResult<Prisma.$FlowersHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowersHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersHistoryFindFirstOrThrowArgs} args - Arguments to find a FlowersHistory
     * @example
     * // Get one FlowersHistory
     * const flowersHistory = await prisma.flowersHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlowersHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, FlowersHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlowersHistoryClient<$Result.GetResult<Prisma.$FlowersHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlowersHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlowersHistories
     * const flowersHistories = await prisma.flowersHistory.findMany()
     * 
     * // Get first 10 FlowersHistories
     * const flowersHistories = await prisma.flowersHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowersHistoryWithIdOnly = await prisma.flowersHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlowersHistoryFindManyArgs>(args?: SelectSubset<T, FlowersHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlowersHistory.
     * @param {FlowersHistoryCreateArgs} args - Arguments to create a FlowersHistory.
     * @example
     * // Create one FlowersHistory
     * const FlowersHistory = await prisma.flowersHistory.create({
     *   data: {
     *     // ... data to create a FlowersHistory
     *   }
     * })
     * 
     */
    create<T extends FlowersHistoryCreateArgs>(args: SelectSubset<T, FlowersHistoryCreateArgs<ExtArgs>>): Prisma__FlowersHistoryClient<$Result.GetResult<Prisma.$FlowersHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlowersHistories.
     * @param {FlowersHistoryCreateManyArgs} args - Arguments to create many FlowersHistories.
     * @example
     * // Create many FlowersHistories
     * const flowersHistory = await prisma.flowersHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlowersHistoryCreateManyArgs>(args?: SelectSubset<T, FlowersHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlowersHistories and returns the data saved in the database.
     * @param {FlowersHistoryCreateManyAndReturnArgs} args - Arguments to create many FlowersHistories.
     * @example
     * // Create many FlowersHistories
     * const flowersHistory = await prisma.flowersHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlowersHistories and only return the `id`
     * const flowersHistoryWithIdOnly = await prisma.flowersHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlowersHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, FlowersHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlowersHistory.
     * @param {FlowersHistoryDeleteArgs} args - Arguments to delete one FlowersHistory.
     * @example
     * // Delete one FlowersHistory
     * const FlowersHistory = await prisma.flowersHistory.delete({
     *   where: {
     *     // ... filter to delete one FlowersHistory
     *   }
     * })
     * 
     */
    delete<T extends FlowersHistoryDeleteArgs>(args: SelectSubset<T, FlowersHistoryDeleteArgs<ExtArgs>>): Prisma__FlowersHistoryClient<$Result.GetResult<Prisma.$FlowersHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlowersHistory.
     * @param {FlowersHistoryUpdateArgs} args - Arguments to update one FlowersHistory.
     * @example
     * // Update one FlowersHistory
     * const flowersHistory = await prisma.flowersHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlowersHistoryUpdateArgs>(args: SelectSubset<T, FlowersHistoryUpdateArgs<ExtArgs>>): Prisma__FlowersHistoryClient<$Result.GetResult<Prisma.$FlowersHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlowersHistories.
     * @param {FlowersHistoryDeleteManyArgs} args - Arguments to filter FlowersHistories to delete.
     * @example
     * // Delete a few FlowersHistories
     * const { count } = await prisma.flowersHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlowersHistoryDeleteManyArgs>(args?: SelectSubset<T, FlowersHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowersHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlowersHistories
     * const flowersHistory = await prisma.flowersHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlowersHistoryUpdateManyArgs>(args: SelectSubset<T, FlowersHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowersHistories and returns the data updated in the database.
     * @param {FlowersHistoryUpdateManyAndReturnArgs} args - Arguments to update many FlowersHistories.
     * @example
     * // Update many FlowersHistories
     * const flowersHistory = await prisma.flowersHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlowersHistories and only return the `id`
     * const flowersHistoryWithIdOnly = await prisma.flowersHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends FlowersHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, FlowersHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlowersHistory.
     * @param {FlowersHistoryUpsertArgs} args - Arguments to update or create a FlowersHistory.
     * @example
     * // Update or create a FlowersHistory
     * const flowersHistory = await prisma.flowersHistory.upsert({
     *   create: {
     *     // ... data to create a FlowersHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlowersHistory we want to update
     *   }
     * })
     */
    upsert<T extends FlowersHistoryUpsertArgs>(args: SelectSubset<T, FlowersHistoryUpsertArgs<ExtArgs>>): Prisma__FlowersHistoryClient<$Result.GetResult<Prisma.$FlowersHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlowersHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersHistoryCountArgs} args - Arguments to filter FlowersHistories to count.
     * @example
     * // Count the number of FlowersHistories
     * const count = await prisma.flowersHistory.count({
     *   where: {
     *     // ... the filter for the FlowersHistories we want to count
     *   }
     * })
    **/
    count<T extends FlowersHistoryCountArgs>(
      args?: Subset<T, FlowersHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowersHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlowersHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlowersHistoryAggregateArgs>(args: Subset<T, FlowersHistoryAggregateArgs>): Prisma.PrismaPromise<GetFlowersHistoryAggregateType<T>>

    /**
     * Group by FlowersHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersHistoryGroupByArgs} args - Group by arguments.
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
      T extends FlowersHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowersHistoryGroupByArgs['orderBy'] }
        : { orderBy?: FlowersHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlowersHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowersHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlowersHistory model
   */
  readonly fields: FlowersHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlowersHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlowersHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flower<T extends FlowersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlowersDefaultArgs<ExtArgs>>): Prisma__FlowersClient<$Result.GetResult<Prisma.$FlowersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FlowersHistory model
   */
  interface FlowersHistoryFieldRefs {
    readonly id: FieldRef<"FlowersHistory", 'Int'>
    readonly flowersId: FieldRef<"FlowersHistory", 'Int'>
    readonly date: FieldRef<"FlowersHistory", 'Int'>
    readonly price: FieldRef<"FlowersHistory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FlowersHistory findUnique
   */
  export type FlowersHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersHistory
     */
    select?: FlowersHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersHistory
     */
    omit?: FlowersHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersHistoryInclude<ExtArgs> | null
    /**
     * Filter, which FlowersHistory to fetch.
     */
    where: FlowersHistoryWhereUniqueInput
  }

  /**
   * FlowersHistory findUniqueOrThrow
   */
  export type FlowersHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersHistory
     */
    select?: FlowersHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersHistory
     */
    omit?: FlowersHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersHistoryInclude<ExtArgs> | null
    /**
     * Filter, which FlowersHistory to fetch.
     */
    where: FlowersHistoryWhereUniqueInput
  }

  /**
   * FlowersHistory findFirst
   */
  export type FlowersHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersHistory
     */
    select?: FlowersHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersHistory
     */
    omit?: FlowersHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersHistoryInclude<ExtArgs> | null
    /**
     * Filter, which FlowersHistory to fetch.
     */
    where?: FlowersHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersHistories to fetch.
     */
    orderBy?: FlowersHistoryOrderByWithRelationInput | FlowersHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowersHistories.
     */
    cursor?: FlowersHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowersHistories.
     */
    distinct?: FlowersHistoryScalarFieldEnum | FlowersHistoryScalarFieldEnum[]
  }

  /**
   * FlowersHistory findFirstOrThrow
   */
  export type FlowersHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersHistory
     */
    select?: FlowersHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersHistory
     */
    omit?: FlowersHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersHistoryInclude<ExtArgs> | null
    /**
     * Filter, which FlowersHistory to fetch.
     */
    where?: FlowersHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersHistories to fetch.
     */
    orderBy?: FlowersHistoryOrderByWithRelationInput | FlowersHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowersHistories.
     */
    cursor?: FlowersHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowersHistories.
     */
    distinct?: FlowersHistoryScalarFieldEnum | FlowersHistoryScalarFieldEnum[]
  }

  /**
   * FlowersHistory findMany
   */
  export type FlowersHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersHistory
     */
    select?: FlowersHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersHistory
     */
    omit?: FlowersHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersHistoryInclude<ExtArgs> | null
    /**
     * Filter, which FlowersHistories to fetch.
     */
    where?: FlowersHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersHistories to fetch.
     */
    orderBy?: FlowersHistoryOrderByWithRelationInput | FlowersHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlowersHistories.
     */
    cursor?: FlowersHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersHistories.
     */
    skip?: number
    distinct?: FlowersHistoryScalarFieldEnum | FlowersHistoryScalarFieldEnum[]
  }

  /**
   * FlowersHistory create
   */
  export type FlowersHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersHistory
     */
    select?: FlowersHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersHistory
     */
    omit?: FlowersHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a FlowersHistory.
     */
    data: XOR<FlowersHistoryCreateInput, FlowersHistoryUncheckedCreateInput>
  }

  /**
   * FlowersHistory createMany
   */
  export type FlowersHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlowersHistories.
     */
    data: FlowersHistoryCreateManyInput | FlowersHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlowersHistory createManyAndReturn
   */
  export type FlowersHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersHistory
     */
    select?: FlowersHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersHistory
     */
    omit?: FlowersHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many FlowersHistories.
     */
    data: FlowersHistoryCreateManyInput | FlowersHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlowersHistory update
   */
  export type FlowersHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersHistory
     */
    select?: FlowersHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersHistory
     */
    omit?: FlowersHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a FlowersHistory.
     */
    data: XOR<FlowersHistoryUpdateInput, FlowersHistoryUncheckedUpdateInput>
    /**
     * Choose, which FlowersHistory to update.
     */
    where: FlowersHistoryWhereUniqueInput
  }

  /**
   * FlowersHistory updateMany
   */
  export type FlowersHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlowersHistories.
     */
    data: XOR<FlowersHistoryUpdateManyMutationInput, FlowersHistoryUncheckedUpdateManyInput>
    /**
     * Filter which FlowersHistories to update
     */
    where?: FlowersHistoryWhereInput
    /**
     * Limit how many FlowersHistories to update.
     */
    limit?: number
  }

  /**
   * FlowersHistory updateManyAndReturn
   */
  export type FlowersHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersHistory
     */
    select?: FlowersHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersHistory
     */
    omit?: FlowersHistoryOmit<ExtArgs> | null
    /**
     * The data used to update FlowersHistories.
     */
    data: XOR<FlowersHistoryUpdateManyMutationInput, FlowersHistoryUncheckedUpdateManyInput>
    /**
     * Filter which FlowersHistories to update
     */
    where?: FlowersHistoryWhereInput
    /**
     * Limit how many FlowersHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlowersHistory upsert
   */
  export type FlowersHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersHistory
     */
    select?: FlowersHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersHistory
     */
    omit?: FlowersHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the FlowersHistory to update in case it exists.
     */
    where: FlowersHistoryWhereUniqueInput
    /**
     * In case the FlowersHistory found by the `where` argument doesn't exist, create a new FlowersHistory with this data.
     */
    create: XOR<FlowersHistoryCreateInput, FlowersHistoryUncheckedCreateInput>
    /**
     * In case the FlowersHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowersHistoryUpdateInput, FlowersHistoryUncheckedUpdateInput>
  }

  /**
   * FlowersHistory delete
   */
  export type FlowersHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersHistory
     */
    select?: FlowersHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersHistory
     */
    omit?: FlowersHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersHistoryInclude<ExtArgs> | null
    /**
     * Filter which FlowersHistory to delete.
     */
    where: FlowersHistoryWhereUniqueInput
  }

  /**
   * FlowersHistory deleteMany
   */
  export type FlowersHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowersHistories to delete
     */
    where?: FlowersHistoryWhereInput
    /**
     * Limit how many FlowersHistories to delete.
     */
    limit?: number
  }

  /**
   * FlowersHistory without action
   */
  export type FlowersHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersHistory
     */
    select?: FlowersHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersHistory
     */
    omit?: FlowersHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersHistoryInclude<ExtArgs> | null
  }


  /**
   * Model FlowersFarms
   */

  export type AggregateFlowersFarms = {
    _count: FlowersFarmsCountAggregateOutputType | null
    _avg: FlowersFarmsAvgAggregateOutputType | null
    _sum: FlowersFarmsSumAggregateOutputType | null
    _min: FlowersFarmsMinAggregateOutputType | null
    _max: FlowersFarmsMaxAggregateOutputType | null
  }

  export type FlowersFarmsAvgAggregateOutputType = {
    id: number | null
    rate: number | null
  }

  export type FlowersFarmsSumAggregateOutputType = {
    id: number | null
    rate: number | null
  }

  export type FlowersFarmsMinAggregateOutputType = {
    id: number | null
    name: string | null
    country: string | null
    rate: number | null
  }

  export type FlowersFarmsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    country: string | null
    rate: number | null
  }

  export type FlowersFarmsCountAggregateOutputType = {
    id: number
    name: number
    country: number
    rate: number
    _all: number
  }


  export type FlowersFarmsAvgAggregateInputType = {
    id?: true
    rate?: true
  }

  export type FlowersFarmsSumAggregateInputType = {
    id?: true
    rate?: true
  }

  export type FlowersFarmsMinAggregateInputType = {
    id?: true
    name?: true
    country?: true
    rate?: true
  }

  export type FlowersFarmsMaxAggregateInputType = {
    id?: true
    name?: true
    country?: true
    rate?: true
  }

  export type FlowersFarmsCountAggregateInputType = {
    id?: true
    name?: true
    country?: true
    rate?: true
    _all?: true
  }

  export type FlowersFarmsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowersFarms to aggregate.
     */
    where?: FlowersFarmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersFarms to fetch.
     */
    orderBy?: FlowersFarmsOrderByWithRelationInput | FlowersFarmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowersFarmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersFarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersFarms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlowersFarms
    **/
    _count?: true | FlowersFarmsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowersFarmsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowersFarmsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowersFarmsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowersFarmsMaxAggregateInputType
  }

  export type GetFlowersFarmsAggregateType<T extends FlowersFarmsAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowersFarms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowersFarms[P]>
      : GetScalarType<T[P], AggregateFlowersFarms[P]>
  }




  export type FlowersFarmsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowersFarmsWhereInput
    orderBy?: FlowersFarmsOrderByWithAggregationInput | FlowersFarmsOrderByWithAggregationInput[]
    by: FlowersFarmsScalarFieldEnum[] | FlowersFarmsScalarFieldEnum
    having?: FlowersFarmsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowersFarmsCountAggregateInputType | true
    _avg?: FlowersFarmsAvgAggregateInputType
    _sum?: FlowersFarmsSumAggregateInputType
    _min?: FlowersFarmsMinAggregateInputType
    _max?: FlowersFarmsMaxAggregateInputType
  }

  export type FlowersFarmsGroupByOutputType = {
    id: number
    name: string
    country: string
    rate: number
    _count: FlowersFarmsCountAggregateOutputType | null
    _avg: FlowersFarmsAvgAggregateOutputType | null
    _sum: FlowersFarmsSumAggregateOutputType | null
    _min: FlowersFarmsMinAggregateOutputType | null
    _max: FlowersFarmsMaxAggregateOutputType | null
  }

  type GetFlowersFarmsGroupByPayload<T extends FlowersFarmsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlowersFarmsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowersFarmsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowersFarmsGroupByOutputType[P]>
            : GetScalarType<T[P], FlowersFarmsGroupByOutputType[P]>
        }
      >
    >


  export type FlowersFarmsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    rate?: boolean
    flowers?: boolean | FlowersFarms$flowersArgs<ExtArgs>
    _count?: boolean | FlowersFarmsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowersFarms"]>

  export type FlowersFarmsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    rate?: boolean
  }, ExtArgs["result"]["flowersFarms"]>

  export type FlowersFarmsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    rate?: boolean
  }, ExtArgs["result"]["flowersFarms"]>

  export type FlowersFarmsSelectScalar = {
    id?: boolean
    name?: boolean
    country?: boolean
    rate?: boolean
  }

  export type FlowersFarmsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "country" | "rate", ExtArgs["result"]["flowersFarms"]>
  export type FlowersFarmsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | FlowersFarms$flowersArgs<ExtArgs>
    _count?: boolean | FlowersFarmsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlowersFarmsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FlowersFarmsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FlowersFarmsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlowersFarms"
    objects: {
      flowers: Prisma.$FlowersFarmsAndFlowersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      country: string
      rate: number
    }, ExtArgs["result"]["flowersFarms"]>
    composites: {}
  }

  type FlowersFarmsGetPayload<S extends boolean | null | undefined | FlowersFarmsDefaultArgs> = $Result.GetResult<Prisma.$FlowersFarmsPayload, S>

  type FlowersFarmsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlowersFarmsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlowersFarmsCountAggregateInputType | true
    }

  export interface FlowersFarmsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlowersFarms'], meta: { name: 'FlowersFarms' } }
    /**
     * Find zero or one FlowersFarms that matches the filter.
     * @param {FlowersFarmsFindUniqueArgs} args - Arguments to find a FlowersFarms
     * @example
     * // Get one FlowersFarms
     * const flowersFarms = await prisma.flowersFarms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlowersFarmsFindUniqueArgs>(args: SelectSubset<T, FlowersFarmsFindUniqueArgs<ExtArgs>>): Prisma__FlowersFarmsClient<$Result.GetResult<Prisma.$FlowersFarmsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlowersFarms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlowersFarmsFindUniqueOrThrowArgs} args - Arguments to find a FlowersFarms
     * @example
     * // Get one FlowersFarms
     * const flowersFarms = await prisma.flowersFarms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlowersFarmsFindUniqueOrThrowArgs>(args: SelectSubset<T, FlowersFarmsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlowersFarmsClient<$Result.GetResult<Prisma.$FlowersFarmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowersFarms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersFarmsFindFirstArgs} args - Arguments to find a FlowersFarms
     * @example
     * // Get one FlowersFarms
     * const flowersFarms = await prisma.flowersFarms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlowersFarmsFindFirstArgs>(args?: SelectSubset<T, FlowersFarmsFindFirstArgs<ExtArgs>>): Prisma__FlowersFarmsClient<$Result.GetResult<Prisma.$FlowersFarmsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowersFarms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersFarmsFindFirstOrThrowArgs} args - Arguments to find a FlowersFarms
     * @example
     * // Get one FlowersFarms
     * const flowersFarms = await prisma.flowersFarms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlowersFarmsFindFirstOrThrowArgs>(args?: SelectSubset<T, FlowersFarmsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlowersFarmsClient<$Result.GetResult<Prisma.$FlowersFarmsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlowersFarms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersFarmsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlowersFarms
     * const flowersFarms = await prisma.flowersFarms.findMany()
     * 
     * // Get first 10 FlowersFarms
     * const flowersFarms = await prisma.flowersFarms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowersFarmsWithIdOnly = await prisma.flowersFarms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlowersFarmsFindManyArgs>(args?: SelectSubset<T, FlowersFarmsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersFarmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlowersFarms.
     * @param {FlowersFarmsCreateArgs} args - Arguments to create a FlowersFarms.
     * @example
     * // Create one FlowersFarms
     * const FlowersFarms = await prisma.flowersFarms.create({
     *   data: {
     *     // ... data to create a FlowersFarms
     *   }
     * })
     * 
     */
    create<T extends FlowersFarmsCreateArgs>(args: SelectSubset<T, FlowersFarmsCreateArgs<ExtArgs>>): Prisma__FlowersFarmsClient<$Result.GetResult<Prisma.$FlowersFarmsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlowersFarms.
     * @param {FlowersFarmsCreateManyArgs} args - Arguments to create many FlowersFarms.
     * @example
     * // Create many FlowersFarms
     * const flowersFarms = await prisma.flowersFarms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlowersFarmsCreateManyArgs>(args?: SelectSubset<T, FlowersFarmsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlowersFarms and returns the data saved in the database.
     * @param {FlowersFarmsCreateManyAndReturnArgs} args - Arguments to create many FlowersFarms.
     * @example
     * // Create many FlowersFarms
     * const flowersFarms = await prisma.flowersFarms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlowersFarms and only return the `id`
     * const flowersFarmsWithIdOnly = await prisma.flowersFarms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlowersFarmsCreateManyAndReturnArgs>(args?: SelectSubset<T, FlowersFarmsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersFarmsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlowersFarms.
     * @param {FlowersFarmsDeleteArgs} args - Arguments to delete one FlowersFarms.
     * @example
     * // Delete one FlowersFarms
     * const FlowersFarms = await prisma.flowersFarms.delete({
     *   where: {
     *     // ... filter to delete one FlowersFarms
     *   }
     * })
     * 
     */
    delete<T extends FlowersFarmsDeleteArgs>(args: SelectSubset<T, FlowersFarmsDeleteArgs<ExtArgs>>): Prisma__FlowersFarmsClient<$Result.GetResult<Prisma.$FlowersFarmsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlowersFarms.
     * @param {FlowersFarmsUpdateArgs} args - Arguments to update one FlowersFarms.
     * @example
     * // Update one FlowersFarms
     * const flowersFarms = await prisma.flowersFarms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlowersFarmsUpdateArgs>(args: SelectSubset<T, FlowersFarmsUpdateArgs<ExtArgs>>): Prisma__FlowersFarmsClient<$Result.GetResult<Prisma.$FlowersFarmsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlowersFarms.
     * @param {FlowersFarmsDeleteManyArgs} args - Arguments to filter FlowersFarms to delete.
     * @example
     * // Delete a few FlowersFarms
     * const { count } = await prisma.flowersFarms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlowersFarmsDeleteManyArgs>(args?: SelectSubset<T, FlowersFarmsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowersFarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersFarmsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlowersFarms
     * const flowersFarms = await prisma.flowersFarms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlowersFarmsUpdateManyArgs>(args: SelectSubset<T, FlowersFarmsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowersFarms and returns the data updated in the database.
     * @param {FlowersFarmsUpdateManyAndReturnArgs} args - Arguments to update many FlowersFarms.
     * @example
     * // Update many FlowersFarms
     * const flowersFarms = await prisma.flowersFarms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlowersFarms and only return the `id`
     * const flowersFarmsWithIdOnly = await prisma.flowersFarms.updateManyAndReturn({
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
    updateManyAndReturn<T extends FlowersFarmsUpdateManyAndReturnArgs>(args: SelectSubset<T, FlowersFarmsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersFarmsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlowersFarms.
     * @param {FlowersFarmsUpsertArgs} args - Arguments to update or create a FlowersFarms.
     * @example
     * // Update or create a FlowersFarms
     * const flowersFarms = await prisma.flowersFarms.upsert({
     *   create: {
     *     // ... data to create a FlowersFarms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlowersFarms we want to update
     *   }
     * })
     */
    upsert<T extends FlowersFarmsUpsertArgs>(args: SelectSubset<T, FlowersFarmsUpsertArgs<ExtArgs>>): Prisma__FlowersFarmsClient<$Result.GetResult<Prisma.$FlowersFarmsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlowersFarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersFarmsCountArgs} args - Arguments to filter FlowersFarms to count.
     * @example
     * // Count the number of FlowersFarms
     * const count = await prisma.flowersFarms.count({
     *   where: {
     *     // ... the filter for the FlowersFarms we want to count
     *   }
     * })
    **/
    count<T extends FlowersFarmsCountArgs>(
      args?: Subset<T, FlowersFarmsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowersFarmsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlowersFarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersFarmsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlowersFarmsAggregateArgs>(args: Subset<T, FlowersFarmsAggregateArgs>): Prisma.PrismaPromise<GetFlowersFarmsAggregateType<T>>

    /**
     * Group by FlowersFarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersFarmsGroupByArgs} args - Group by arguments.
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
      T extends FlowersFarmsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowersFarmsGroupByArgs['orderBy'] }
        : { orderBy?: FlowersFarmsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlowersFarmsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowersFarmsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlowersFarms model
   */
  readonly fields: FlowersFarmsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlowersFarms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlowersFarmsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flowers<T extends FlowersFarms$flowersArgs<ExtArgs> = {}>(args?: Subset<T, FlowersFarms$flowersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersFarmsAndFlowersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FlowersFarms model
   */
  interface FlowersFarmsFieldRefs {
    readonly id: FieldRef<"FlowersFarms", 'Int'>
    readonly name: FieldRef<"FlowersFarms", 'String'>
    readonly country: FieldRef<"FlowersFarms", 'String'>
    readonly rate: FieldRef<"FlowersFarms", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FlowersFarms findUnique
   */
  export type FlowersFarmsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarms
     */
    select?: FlowersFarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarms
     */
    omit?: FlowersFarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsInclude<ExtArgs> | null
    /**
     * Filter, which FlowersFarms to fetch.
     */
    where: FlowersFarmsWhereUniqueInput
  }

  /**
   * FlowersFarms findUniqueOrThrow
   */
  export type FlowersFarmsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarms
     */
    select?: FlowersFarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarms
     */
    omit?: FlowersFarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsInclude<ExtArgs> | null
    /**
     * Filter, which FlowersFarms to fetch.
     */
    where: FlowersFarmsWhereUniqueInput
  }

  /**
   * FlowersFarms findFirst
   */
  export type FlowersFarmsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarms
     */
    select?: FlowersFarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarms
     */
    omit?: FlowersFarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsInclude<ExtArgs> | null
    /**
     * Filter, which FlowersFarms to fetch.
     */
    where?: FlowersFarmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersFarms to fetch.
     */
    orderBy?: FlowersFarmsOrderByWithRelationInput | FlowersFarmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowersFarms.
     */
    cursor?: FlowersFarmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersFarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersFarms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowersFarms.
     */
    distinct?: FlowersFarmsScalarFieldEnum | FlowersFarmsScalarFieldEnum[]
  }

  /**
   * FlowersFarms findFirstOrThrow
   */
  export type FlowersFarmsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarms
     */
    select?: FlowersFarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarms
     */
    omit?: FlowersFarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsInclude<ExtArgs> | null
    /**
     * Filter, which FlowersFarms to fetch.
     */
    where?: FlowersFarmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersFarms to fetch.
     */
    orderBy?: FlowersFarmsOrderByWithRelationInput | FlowersFarmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowersFarms.
     */
    cursor?: FlowersFarmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersFarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersFarms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowersFarms.
     */
    distinct?: FlowersFarmsScalarFieldEnum | FlowersFarmsScalarFieldEnum[]
  }

  /**
   * FlowersFarms findMany
   */
  export type FlowersFarmsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarms
     */
    select?: FlowersFarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarms
     */
    omit?: FlowersFarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsInclude<ExtArgs> | null
    /**
     * Filter, which FlowersFarms to fetch.
     */
    where?: FlowersFarmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersFarms to fetch.
     */
    orderBy?: FlowersFarmsOrderByWithRelationInput | FlowersFarmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlowersFarms.
     */
    cursor?: FlowersFarmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersFarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersFarms.
     */
    skip?: number
    distinct?: FlowersFarmsScalarFieldEnum | FlowersFarmsScalarFieldEnum[]
  }

  /**
   * FlowersFarms create
   */
  export type FlowersFarmsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarms
     */
    select?: FlowersFarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarms
     */
    omit?: FlowersFarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsInclude<ExtArgs> | null
    /**
     * The data needed to create a FlowersFarms.
     */
    data: XOR<FlowersFarmsCreateInput, FlowersFarmsUncheckedCreateInput>
  }

  /**
   * FlowersFarms createMany
   */
  export type FlowersFarmsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlowersFarms.
     */
    data: FlowersFarmsCreateManyInput | FlowersFarmsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlowersFarms createManyAndReturn
   */
  export type FlowersFarmsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarms
     */
    select?: FlowersFarmsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarms
     */
    omit?: FlowersFarmsOmit<ExtArgs> | null
    /**
     * The data used to create many FlowersFarms.
     */
    data: FlowersFarmsCreateManyInput | FlowersFarmsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlowersFarms update
   */
  export type FlowersFarmsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarms
     */
    select?: FlowersFarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarms
     */
    omit?: FlowersFarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsInclude<ExtArgs> | null
    /**
     * The data needed to update a FlowersFarms.
     */
    data: XOR<FlowersFarmsUpdateInput, FlowersFarmsUncheckedUpdateInput>
    /**
     * Choose, which FlowersFarms to update.
     */
    where: FlowersFarmsWhereUniqueInput
  }

  /**
   * FlowersFarms updateMany
   */
  export type FlowersFarmsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlowersFarms.
     */
    data: XOR<FlowersFarmsUpdateManyMutationInput, FlowersFarmsUncheckedUpdateManyInput>
    /**
     * Filter which FlowersFarms to update
     */
    where?: FlowersFarmsWhereInput
    /**
     * Limit how many FlowersFarms to update.
     */
    limit?: number
  }

  /**
   * FlowersFarms updateManyAndReturn
   */
  export type FlowersFarmsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarms
     */
    select?: FlowersFarmsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarms
     */
    omit?: FlowersFarmsOmit<ExtArgs> | null
    /**
     * The data used to update FlowersFarms.
     */
    data: XOR<FlowersFarmsUpdateManyMutationInput, FlowersFarmsUncheckedUpdateManyInput>
    /**
     * Filter which FlowersFarms to update
     */
    where?: FlowersFarmsWhereInput
    /**
     * Limit how many FlowersFarms to update.
     */
    limit?: number
  }

  /**
   * FlowersFarms upsert
   */
  export type FlowersFarmsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarms
     */
    select?: FlowersFarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarms
     */
    omit?: FlowersFarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsInclude<ExtArgs> | null
    /**
     * The filter to search for the FlowersFarms to update in case it exists.
     */
    where: FlowersFarmsWhereUniqueInput
    /**
     * In case the FlowersFarms found by the `where` argument doesn't exist, create a new FlowersFarms with this data.
     */
    create: XOR<FlowersFarmsCreateInput, FlowersFarmsUncheckedCreateInput>
    /**
     * In case the FlowersFarms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowersFarmsUpdateInput, FlowersFarmsUncheckedUpdateInput>
  }

  /**
   * FlowersFarms delete
   */
  export type FlowersFarmsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarms
     */
    select?: FlowersFarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarms
     */
    omit?: FlowersFarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsInclude<ExtArgs> | null
    /**
     * Filter which FlowersFarms to delete.
     */
    where: FlowersFarmsWhereUniqueInput
  }

  /**
   * FlowersFarms deleteMany
   */
  export type FlowersFarmsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowersFarms to delete
     */
    where?: FlowersFarmsWhereInput
    /**
     * Limit how many FlowersFarms to delete.
     */
    limit?: number
  }

  /**
   * FlowersFarms.flowers
   */
  export type FlowersFarms$flowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarmsAndFlowers
     */
    select?: FlowersFarmsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarmsAndFlowers
     */
    omit?: FlowersFarmsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsAndFlowersInclude<ExtArgs> | null
    where?: FlowersFarmsAndFlowersWhereInput
    orderBy?: FlowersFarmsAndFlowersOrderByWithRelationInput | FlowersFarmsAndFlowersOrderByWithRelationInput[]
    cursor?: FlowersFarmsAndFlowersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowersFarmsAndFlowersScalarFieldEnum | FlowersFarmsAndFlowersScalarFieldEnum[]
  }

  /**
   * FlowersFarms without action
   */
  export type FlowersFarmsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarms
     */
    select?: FlowersFarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarms
     */
    omit?: FlowersFarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsInclude<ExtArgs> | null
  }


  /**
   * Model FlowersFarmsAndFlowers
   */

  export type AggregateFlowersFarmsAndFlowers = {
    _count: FlowersFarmsAndFlowersCountAggregateOutputType | null
    _avg: FlowersFarmsAndFlowersAvgAggregateOutputType | null
    _sum: FlowersFarmsAndFlowersSumAggregateOutputType | null
    _min: FlowersFarmsAndFlowersMinAggregateOutputType | null
    _max: FlowersFarmsAndFlowersMaxAggregateOutputType | null
  }

  export type FlowersFarmsAndFlowersAvgAggregateOutputType = {
    flowersId: number | null
    flowersFarmsId: number | null
  }

  export type FlowersFarmsAndFlowersSumAggregateOutputType = {
    flowersId: number | null
    flowersFarmsId: number | null
  }

  export type FlowersFarmsAndFlowersMinAggregateOutputType = {
    flowersId: number | null
    flowersFarmsId: number | null
  }

  export type FlowersFarmsAndFlowersMaxAggregateOutputType = {
    flowersId: number | null
    flowersFarmsId: number | null
  }

  export type FlowersFarmsAndFlowersCountAggregateOutputType = {
    flowersId: number
    flowersFarmsId: number
    _all: number
  }


  export type FlowersFarmsAndFlowersAvgAggregateInputType = {
    flowersId?: true
    flowersFarmsId?: true
  }

  export type FlowersFarmsAndFlowersSumAggregateInputType = {
    flowersId?: true
    flowersFarmsId?: true
  }

  export type FlowersFarmsAndFlowersMinAggregateInputType = {
    flowersId?: true
    flowersFarmsId?: true
  }

  export type FlowersFarmsAndFlowersMaxAggregateInputType = {
    flowersId?: true
    flowersFarmsId?: true
  }

  export type FlowersFarmsAndFlowersCountAggregateInputType = {
    flowersId?: true
    flowersFarmsId?: true
    _all?: true
  }

  export type FlowersFarmsAndFlowersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowersFarmsAndFlowers to aggregate.
     */
    where?: FlowersFarmsAndFlowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersFarmsAndFlowers to fetch.
     */
    orderBy?: FlowersFarmsAndFlowersOrderByWithRelationInput | FlowersFarmsAndFlowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowersFarmsAndFlowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersFarmsAndFlowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersFarmsAndFlowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlowersFarmsAndFlowers
    **/
    _count?: true | FlowersFarmsAndFlowersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowersFarmsAndFlowersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowersFarmsAndFlowersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowersFarmsAndFlowersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowersFarmsAndFlowersMaxAggregateInputType
  }

  export type GetFlowersFarmsAndFlowersAggregateType<T extends FlowersFarmsAndFlowersAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowersFarmsAndFlowers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowersFarmsAndFlowers[P]>
      : GetScalarType<T[P], AggregateFlowersFarmsAndFlowers[P]>
  }




  export type FlowersFarmsAndFlowersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowersFarmsAndFlowersWhereInput
    orderBy?: FlowersFarmsAndFlowersOrderByWithAggregationInput | FlowersFarmsAndFlowersOrderByWithAggregationInput[]
    by: FlowersFarmsAndFlowersScalarFieldEnum[] | FlowersFarmsAndFlowersScalarFieldEnum
    having?: FlowersFarmsAndFlowersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowersFarmsAndFlowersCountAggregateInputType | true
    _avg?: FlowersFarmsAndFlowersAvgAggregateInputType
    _sum?: FlowersFarmsAndFlowersSumAggregateInputType
    _min?: FlowersFarmsAndFlowersMinAggregateInputType
    _max?: FlowersFarmsAndFlowersMaxAggregateInputType
  }

  export type FlowersFarmsAndFlowersGroupByOutputType = {
    flowersId: number
    flowersFarmsId: number
    _count: FlowersFarmsAndFlowersCountAggregateOutputType | null
    _avg: FlowersFarmsAndFlowersAvgAggregateOutputType | null
    _sum: FlowersFarmsAndFlowersSumAggregateOutputType | null
    _min: FlowersFarmsAndFlowersMinAggregateOutputType | null
    _max: FlowersFarmsAndFlowersMaxAggregateOutputType | null
  }

  type GetFlowersFarmsAndFlowersGroupByPayload<T extends FlowersFarmsAndFlowersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlowersFarmsAndFlowersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowersFarmsAndFlowersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowersFarmsAndFlowersGroupByOutputType[P]>
            : GetScalarType<T[P], FlowersFarmsAndFlowersGroupByOutputType[P]>
        }
      >
    >


  export type FlowersFarmsAndFlowersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flowersId?: boolean
    flowersFarmsId?: boolean
    flowers?: boolean | FlowersDefaultArgs<ExtArgs>
    flowersFarms?: boolean | FlowersFarmsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowersFarmsAndFlowers"]>

  export type FlowersFarmsAndFlowersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flowersId?: boolean
    flowersFarmsId?: boolean
    flowers?: boolean | FlowersDefaultArgs<ExtArgs>
    flowersFarms?: boolean | FlowersFarmsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowersFarmsAndFlowers"]>

  export type FlowersFarmsAndFlowersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flowersId?: boolean
    flowersFarmsId?: boolean
    flowers?: boolean | FlowersDefaultArgs<ExtArgs>
    flowersFarms?: boolean | FlowersFarmsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowersFarmsAndFlowers"]>

  export type FlowersFarmsAndFlowersSelectScalar = {
    flowersId?: boolean
    flowersFarmsId?: boolean
  }

  export type FlowersFarmsAndFlowersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"flowersId" | "flowersFarmsId", ExtArgs["result"]["flowersFarmsAndFlowers"]>
  export type FlowersFarmsAndFlowersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | FlowersDefaultArgs<ExtArgs>
    flowersFarms?: boolean | FlowersFarmsDefaultArgs<ExtArgs>
  }
  export type FlowersFarmsAndFlowersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | FlowersDefaultArgs<ExtArgs>
    flowersFarms?: boolean | FlowersFarmsDefaultArgs<ExtArgs>
  }
  export type FlowersFarmsAndFlowersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | FlowersDefaultArgs<ExtArgs>
    flowersFarms?: boolean | FlowersFarmsDefaultArgs<ExtArgs>
  }

  export type $FlowersFarmsAndFlowersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlowersFarmsAndFlowers"
    objects: {
      flowers: Prisma.$FlowersPayload<ExtArgs>
      flowersFarms: Prisma.$FlowersFarmsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      flowersId: number
      flowersFarmsId: number
    }, ExtArgs["result"]["flowersFarmsAndFlowers"]>
    composites: {}
  }

  type FlowersFarmsAndFlowersGetPayload<S extends boolean | null | undefined | FlowersFarmsAndFlowersDefaultArgs> = $Result.GetResult<Prisma.$FlowersFarmsAndFlowersPayload, S>

  type FlowersFarmsAndFlowersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlowersFarmsAndFlowersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlowersFarmsAndFlowersCountAggregateInputType | true
    }

  export interface FlowersFarmsAndFlowersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlowersFarmsAndFlowers'], meta: { name: 'FlowersFarmsAndFlowers' } }
    /**
     * Find zero or one FlowersFarmsAndFlowers that matches the filter.
     * @param {FlowersFarmsAndFlowersFindUniqueArgs} args - Arguments to find a FlowersFarmsAndFlowers
     * @example
     * // Get one FlowersFarmsAndFlowers
     * const flowersFarmsAndFlowers = await prisma.flowersFarmsAndFlowers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlowersFarmsAndFlowersFindUniqueArgs>(args: SelectSubset<T, FlowersFarmsAndFlowersFindUniqueArgs<ExtArgs>>): Prisma__FlowersFarmsAndFlowersClient<$Result.GetResult<Prisma.$FlowersFarmsAndFlowersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlowersFarmsAndFlowers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlowersFarmsAndFlowersFindUniqueOrThrowArgs} args - Arguments to find a FlowersFarmsAndFlowers
     * @example
     * // Get one FlowersFarmsAndFlowers
     * const flowersFarmsAndFlowers = await prisma.flowersFarmsAndFlowers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlowersFarmsAndFlowersFindUniqueOrThrowArgs>(args: SelectSubset<T, FlowersFarmsAndFlowersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlowersFarmsAndFlowersClient<$Result.GetResult<Prisma.$FlowersFarmsAndFlowersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowersFarmsAndFlowers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersFarmsAndFlowersFindFirstArgs} args - Arguments to find a FlowersFarmsAndFlowers
     * @example
     * // Get one FlowersFarmsAndFlowers
     * const flowersFarmsAndFlowers = await prisma.flowersFarmsAndFlowers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlowersFarmsAndFlowersFindFirstArgs>(args?: SelectSubset<T, FlowersFarmsAndFlowersFindFirstArgs<ExtArgs>>): Prisma__FlowersFarmsAndFlowersClient<$Result.GetResult<Prisma.$FlowersFarmsAndFlowersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowersFarmsAndFlowers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersFarmsAndFlowersFindFirstOrThrowArgs} args - Arguments to find a FlowersFarmsAndFlowers
     * @example
     * // Get one FlowersFarmsAndFlowers
     * const flowersFarmsAndFlowers = await prisma.flowersFarmsAndFlowers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlowersFarmsAndFlowersFindFirstOrThrowArgs>(args?: SelectSubset<T, FlowersFarmsAndFlowersFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlowersFarmsAndFlowersClient<$Result.GetResult<Prisma.$FlowersFarmsAndFlowersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlowersFarmsAndFlowers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersFarmsAndFlowersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlowersFarmsAndFlowers
     * const flowersFarmsAndFlowers = await prisma.flowersFarmsAndFlowers.findMany()
     * 
     * // Get first 10 FlowersFarmsAndFlowers
     * const flowersFarmsAndFlowers = await prisma.flowersFarmsAndFlowers.findMany({ take: 10 })
     * 
     * // Only select the `flowersId`
     * const flowersFarmsAndFlowersWithFlowersIdOnly = await prisma.flowersFarmsAndFlowers.findMany({ select: { flowersId: true } })
     * 
     */
    findMany<T extends FlowersFarmsAndFlowersFindManyArgs>(args?: SelectSubset<T, FlowersFarmsAndFlowersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersFarmsAndFlowersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlowersFarmsAndFlowers.
     * @param {FlowersFarmsAndFlowersCreateArgs} args - Arguments to create a FlowersFarmsAndFlowers.
     * @example
     * // Create one FlowersFarmsAndFlowers
     * const FlowersFarmsAndFlowers = await prisma.flowersFarmsAndFlowers.create({
     *   data: {
     *     // ... data to create a FlowersFarmsAndFlowers
     *   }
     * })
     * 
     */
    create<T extends FlowersFarmsAndFlowersCreateArgs>(args: SelectSubset<T, FlowersFarmsAndFlowersCreateArgs<ExtArgs>>): Prisma__FlowersFarmsAndFlowersClient<$Result.GetResult<Prisma.$FlowersFarmsAndFlowersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlowersFarmsAndFlowers.
     * @param {FlowersFarmsAndFlowersCreateManyArgs} args - Arguments to create many FlowersFarmsAndFlowers.
     * @example
     * // Create many FlowersFarmsAndFlowers
     * const flowersFarmsAndFlowers = await prisma.flowersFarmsAndFlowers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlowersFarmsAndFlowersCreateManyArgs>(args?: SelectSubset<T, FlowersFarmsAndFlowersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlowersFarmsAndFlowers and returns the data saved in the database.
     * @param {FlowersFarmsAndFlowersCreateManyAndReturnArgs} args - Arguments to create many FlowersFarmsAndFlowers.
     * @example
     * // Create many FlowersFarmsAndFlowers
     * const flowersFarmsAndFlowers = await prisma.flowersFarmsAndFlowers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlowersFarmsAndFlowers and only return the `flowersId`
     * const flowersFarmsAndFlowersWithFlowersIdOnly = await prisma.flowersFarmsAndFlowers.createManyAndReturn({
     *   select: { flowersId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlowersFarmsAndFlowersCreateManyAndReturnArgs>(args?: SelectSubset<T, FlowersFarmsAndFlowersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersFarmsAndFlowersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlowersFarmsAndFlowers.
     * @param {FlowersFarmsAndFlowersDeleteArgs} args - Arguments to delete one FlowersFarmsAndFlowers.
     * @example
     * // Delete one FlowersFarmsAndFlowers
     * const FlowersFarmsAndFlowers = await prisma.flowersFarmsAndFlowers.delete({
     *   where: {
     *     // ... filter to delete one FlowersFarmsAndFlowers
     *   }
     * })
     * 
     */
    delete<T extends FlowersFarmsAndFlowersDeleteArgs>(args: SelectSubset<T, FlowersFarmsAndFlowersDeleteArgs<ExtArgs>>): Prisma__FlowersFarmsAndFlowersClient<$Result.GetResult<Prisma.$FlowersFarmsAndFlowersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlowersFarmsAndFlowers.
     * @param {FlowersFarmsAndFlowersUpdateArgs} args - Arguments to update one FlowersFarmsAndFlowers.
     * @example
     * // Update one FlowersFarmsAndFlowers
     * const flowersFarmsAndFlowers = await prisma.flowersFarmsAndFlowers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlowersFarmsAndFlowersUpdateArgs>(args: SelectSubset<T, FlowersFarmsAndFlowersUpdateArgs<ExtArgs>>): Prisma__FlowersFarmsAndFlowersClient<$Result.GetResult<Prisma.$FlowersFarmsAndFlowersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlowersFarmsAndFlowers.
     * @param {FlowersFarmsAndFlowersDeleteManyArgs} args - Arguments to filter FlowersFarmsAndFlowers to delete.
     * @example
     * // Delete a few FlowersFarmsAndFlowers
     * const { count } = await prisma.flowersFarmsAndFlowers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlowersFarmsAndFlowersDeleteManyArgs>(args?: SelectSubset<T, FlowersFarmsAndFlowersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowersFarmsAndFlowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersFarmsAndFlowersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlowersFarmsAndFlowers
     * const flowersFarmsAndFlowers = await prisma.flowersFarmsAndFlowers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlowersFarmsAndFlowersUpdateManyArgs>(args: SelectSubset<T, FlowersFarmsAndFlowersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowersFarmsAndFlowers and returns the data updated in the database.
     * @param {FlowersFarmsAndFlowersUpdateManyAndReturnArgs} args - Arguments to update many FlowersFarmsAndFlowers.
     * @example
     * // Update many FlowersFarmsAndFlowers
     * const flowersFarmsAndFlowers = await prisma.flowersFarmsAndFlowers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlowersFarmsAndFlowers and only return the `flowersId`
     * const flowersFarmsAndFlowersWithFlowersIdOnly = await prisma.flowersFarmsAndFlowers.updateManyAndReturn({
     *   select: { flowersId: true },
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
    updateManyAndReturn<T extends FlowersFarmsAndFlowersUpdateManyAndReturnArgs>(args: SelectSubset<T, FlowersFarmsAndFlowersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersFarmsAndFlowersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlowersFarmsAndFlowers.
     * @param {FlowersFarmsAndFlowersUpsertArgs} args - Arguments to update or create a FlowersFarmsAndFlowers.
     * @example
     * // Update or create a FlowersFarmsAndFlowers
     * const flowersFarmsAndFlowers = await prisma.flowersFarmsAndFlowers.upsert({
     *   create: {
     *     // ... data to create a FlowersFarmsAndFlowers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlowersFarmsAndFlowers we want to update
     *   }
     * })
     */
    upsert<T extends FlowersFarmsAndFlowersUpsertArgs>(args: SelectSubset<T, FlowersFarmsAndFlowersUpsertArgs<ExtArgs>>): Prisma__FlowersFarmsAndFlowersClient<$Result.GetResult<Prisma.$FlowersFarmsAndFlowersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlowersFarmsAndFlowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersFarmsAndFlowersCountArgs} args - Arguments to filter FlowersFarmsAndFlowers to count.
     * @example
     * // Count the number of FlowersFarmsAndFlowers
     * const count = await prisma.flowersFarmsAndFlowers.count({
     *   where: {
     *     // ... the filter for the FlowersFarmsAndFlowers we want to count
     *   }
     * })
    **/
    count<T extends FlowersFarmsAndFlowersCountArgs>(
      args?: Subset<T, FlowersFarmsAndFlowersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowersFarmsAndFlowersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlowersFarmsAndFlowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersFarmsAndFlowersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlowersFarmsAndFlowersAggregateArgs>(args: Subset<T, FlowersFarmsAndFlowersAggregateArgs>): Prisma.PrismaPromise<GetFlowersFarmsAndFlowersAggregateType<T>>

    /**
     * Group by FlowersFarmsAndFlowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersFarmsAndFlowersGroupByArgs} args - Group by arguments.
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
      T extends FlowersFarmsAndFlowersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowersFarmsAndFlowersGroupByArgs['orderBy'] }
        : { orderBy?: FlowersFarmsAndFlowersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlowersFarmsAndFlowersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowersFarmsAndFlowersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlowersFarmsAndFlowers model
   */
  readonly fields: FlowersFarmsAndFlowersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlowersFarmsAndFlowers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlowersFarmsAndFlowersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flowers<T extends FlowersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlowersDefaultArgs<ExtArgs>>): Prisma__FlowersClient<$Result.GetResult<Prisma.$FlowersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flowersFarms<T extends FlowersFarmsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlowersFarmsDefaultArgs<ExtArgs>>): Prisma__FlowersFarmsClient<$Result.GetResult<Prisma.$FlowersFarmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FlowersFarmsAndFlowers model
   */
  interface FlowersFarmsAndFlowersFieldRefs {
    readonly flowersId: FieldRef<"FlowersFarmsAndFlowers", 'Int'>
    readonly flowersFarmsId: FieldRef<"FlowersFarmsAndFlowers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FlowersFarmsAndFlowers findUnique
   */
  export type FlowersFarmsAndFlowersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarmsAndFlowers
     */
    select?: FlowersFarmsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarmsAndFlowers
     */
    omit?: FlowersFarmsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsAndFlowersInclude<ExtArgs> | null
    /**
     * Filter, which FlowersFarmsAndFlowers to fetch.
     */
    where: FlowersFarmsAndFlowersWhereUniqueInput
  }

  /**
   * FlowersFarmsAndFlowers findUniqueOrThrow
   */
  export type FlowersFarmsAndFlowersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarmsAndFlowers
     */
    select?: FlowersFarmsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarmsAndFlowers
     */
    omit?: FlowersFarmsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsAndFlowersInclude<ExtArgs> | null
    /**
     * Filter, which FlowersFarmsAndFlowers to fetch.
     */
    where: FlowersFarmsAndFlowersWhereUniqueInput
  }

  /**
   * FlowersFarmsAndFlowers findFirst
   */
  export type FlowersFarmsAndFlowersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarmsAndFlowers
     */
    select?: FlowersFarmsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarmsAndFlowers
     */
    omit?: FlowersFarmsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsAndFlowersInclude<ExtArgs> | null
    /**
     * Filter, which FlowersFarmsAndFlowers to fetch.
     */
    where?: FlowersFarmsAndFlowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersFarmsAndFlowers to fetch.
     */
    orderBy?: FlowersFarmsAndFlowersOrderByWithRelationInput | FlowersFarmsAndFlowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowersFarmsAndFlowers.
     */
    cursor?: FlowersFarmsAndFlowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersFarmsAndFlowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersFarmsAndFlowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowersFarmsAndFlowers.
     */
    distinct?: FlowersFarmsAndFlowersScalarFieldEnum | FlowersFarmsAndFlowersScalarFieldEnum[]
  }

  /**
   * FlowersFarmsAndFlowers findFirstOrThrow
   */
  export type FlowersFarmsAndFlowersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarmsAndFlowers
     */
    select?: FlowersFarmsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarmsAndFlowers
     */
    omit?: FlowersFarmsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsAndFlowersInclude<ExtArgs> | null
    /**
     * Filter, which FlowersFarmsAndFlowers to fetch.
     */
    where?: FlowersFarmsAndFlowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersFarmsAndFlowers to fetch.
     */
    orderBy?: FlowersFarmsAndFlowersOrderByWithRelationInput | FlowersFarmsAndFlowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowersFarmsAndFlowers.
     */
    cursor?: FlowersFarmsAndFlowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersFarmsAndFlowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersFarmsAndFlowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowersFarmsAndFlowers.
     */
    distinct?: FlowersFarmsAndFlowersScalarFieldEnum | FlowersFarmsAndFlowersScalarFieldEnum[]
  }

  /**
   * FlowersFarmsAndFlowers findMany
   */
  export type FlowersFarmsAndFlowersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarmsAndFlowers
     */
    select?: FlowersFarmsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarmsAndFlowers
     */
    omit?: FlowersFarmsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsAndFlowersInclude<ExtArgs> | null
    /**
     * Filter, which FlowersFarmsAndFlowers to fetch.
     */
    where?: FlowersFarmsAndFlowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersFarmsAndFlowers to fetch.
     */
    orderBy?: FlowersFarmsAndFlowersOrderByWithRelationInput | FlowersFarmsAndFlowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlowersFarmsAndFlowers.
     */
    cursor?: FlowersFarmsAndFlowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersFarmsAndFlowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersFarmsAndFlowers.
     */
    skip?: number
    distinct?: FlowersFarmsAndFlowersScalarFieldEnum | FlowersFarmsAndFlowersScalarFieldEnum[]
  }

  /**
   * FlowersFarmsAndFlowers create
   */
  export type FlowersFarmsAndFlowersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarmsAndFlowers
     */
    select?: FlowersFarmsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarmsAndFlowers
     */
    omit?: FlowersFarmsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsAndFlowersInclude<ExtArgs> | null
    /**
     * The data needed to create a FlowersFarmsAndFlowers.
     */
    data: XOR<FlowersFarmsAndFlowersCreateInput, FlowersFarmsAndFlowersUncheckedCreateInput>
  }

  /**
   * FlowersFarmsAndFlowers createMany
   */
  export type FlowersFarmsAndFlowersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlowersFarmsAndFlowers.
     */
    data: FlowersFarmsAndFlowersCreateManyInput | FlowersFarmsAndFlowersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlowersFarmsAndFlowers createManyAndReturn
   */
  export type FlowersFarmsAndFlowersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarmsAndFlowers
     */
    select?: FlowersFarmsAndFlowersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarmsAndFlowers
     */
    omit?: FlowersFarmsAndFlowersOmit<ExtArgs> | null
    /**
     * The data used to create many FlowersFarmsAndFlowers.
     */
    data: FlowersFarmsAndFlowersCreateManyInput | FlowersFarmsAndFlowersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsAndFlowersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlowersFarmsAndFlowers update
   */
  export type FlowersFarmsAndFlowersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarmsAndFlowers
     */
    select?: FlowersFarmsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarmsAndFlowers
     */
    omit?: FlowersFarmsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsAndFlowersInclude<ExtArgs> | null
    /**
     * The data needed to update a FlowersFarmsAndFlowers.
     */
    data: XOR<FlowersFarmsAndFlowersUpdateInput, FlowersFarmsAndFlowersUncheckedUpdateInput>
    /**
     * Choose, which FlowersFarmsAndFlowers to update.
     */
    where: FlowersFarmsAndFlowersWhereUniqueInput
  }

  /**
   * FlowersFarmsAndFlowers updateMany
   */
  export type FlowersFarmsAndFlowersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlowersFarmsAndFlowers.
     */
    data: XOR<FlowersFarmsAndFlowersUpdateManyMutationInput, FlowersFarmsAndFlowersUncheckedUpdateManyInput>
    /**
     * Filter which FlowersFarmsAndFlowers to update
     */
    where?: FlowersFarmsAndFlowersWhereInput
    /**
     * Limit how many FlowersFarmsAndFlowers to update.
     */
    limit?: number
  }

  /**
   * FlowersFarmsAndFlowers updateManyAndReturn
   */
  export type FlowersFarmsAndFlowersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarmsAndFlowers
     */
    select?: FlowersFarmsAndFlowersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarmsAndFlowers
     */
    omit?: FlowersFarmsAndFlowersOmit<ExtArgs> | null
    /**
     * The data used to update FlowersFarmsAndFlowers.
     */
    data: XOR<FlowersFarmsAndFlowersUpdateManyMutationInput, FlowersFarmsAndFlowersUncheckedUpdateManyInput>
    /**
     * Filter which FlowersFarmsAndFlowers to update
     */
    where?: FlowersFarmsAndFlowersWhereInput
    /**
     * Limit how many FlowersFarmsAndFlowers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsAndFlowersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlowersFarmsAndFlowers upsert
   */
  export type FlowersFarmsAndFlowersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarmsAndFlowers
     */
    select?: FlowersFarmsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarmsAndFlowers
     */
    omit?: FlowersFarmsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsAndFlowersInclude<ExtArgs> | null
    /**
     * The filter to search for the FlowersFarmsAndFlowers to update in case it exists.
     */
    where: FlowersFarmsAndFlowersWhereUniqueInput
    /**
     * In case the FlowersFarmsAndFlowers found by the `where` argument doesn't exist, create a new FlowersFarmsAndFlowers with this data.
     */
    create: XOR<FlowersFarmsAndFlowersCreateInput, FlowersFarmsAndFlowersUncheckedCreateInput>
    /**
     * In case the FlowersFarmsAndFlowers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowersFarmsAndFlowersUpdateInput, FlowersFarmsAndFlowersUncheckedUpdateInput>
  }

  /**
   * FlowersFarmsAndFlowers delete
   */
  export type FlowersFarmsAndFlowersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarmsAndFlowers
     */
    select?: FlowersFarmsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarmsAndFlowers
     */
    omit?: FlowersFarmsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsAndFlowersInclude<ExtArgs> | null
    /**
     * Filter which FlowersFarmsAndFlowers to delete.
     */
    where: FlowersFarmsAndFlowersWhereUniqueInput
  }

  /**
   * FlowersFarmsAndFlowers deleteMany
   */
  export type FlowersFarmsAndFlowersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowersFarmsAndFlowers to delete
     */
    where?: FlowersFarmsAndFlowersWhereInput
    /**
     * Limit how many FlowersFarmsAndFlowers to delete.
     */
    limit?: number
  }

  /**
   * FlowersFarmsAndFlowers without action
   */
  export type FlowersFarmsAndFlowersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersFarmsAndFlowers
     */
    select?: FlowersFarmsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersFarmsAndFlowers
     */
    omit?: FlowersFarmsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersFarmsAndFlowersInclude<ExtArgs> | null
  }


  /**
   * Model FlowersBouquets
   */

  export type AggregateFlowersBouquets = {
    _count: FlowersBouquetsCountAggregateOutputType | null
    _avg: FlowersBouquetsAvgAggregateOutputType | null
    _sum: FlowersBouquetsSumAggregateOutputType | null
    _min: FlowersBouquetsMinAggregateOutputType | null
    _max: FlowersBouquetsMaxAggregateOutputType | null
  }

  export type FlowersBouquetsAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type FlowersBouquetsSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type FlowersBouquetsMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
  }

  export type FlowersBouquetsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
  }

  export type FlowersBouquetsCountAggregateOutputType = {
    id: number
    name: number
    price: number
    _all: number
  }


  export type FlowersBouquetsAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type FlowersBouquetsSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type FlowersBouquetsMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
  }

  export type FlowersBouquetsMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
  }

  export type FlowersBouquetsCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    _all?: true
  }

  export type FlowersBouquetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowersBouquets to aggregate.
     */
    where?: FlowersBouquetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersBouquets to fetch.
     */
    orderBy?: FlowersBouquetsOrderByWithRelationInput | FlowersBouquetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowersBouquetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersBouquets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersBouquets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlowersBouquets
    **/
    _count?: true | FlowersBouquetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowersBouquetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowersBouquetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowersBouquetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowersBouquetsMaxAggregateInputType
  }

  export type GetFlowersBouquetsAggregateType<T extends FlowersBouquetsAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowersBouquets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowersBouquets[P]>
      : GetScalarType<T[P], AggregateFlowersBouquets[P]>
  }




  export type FlowersBouquetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowersBouquetsWhereInput
    orderBy?: FlowersBouquetsOrderByWithAggregationInput | FlowersBouquetsOrderByWithAggregationInput[]
    by: FlowersBouquetsScalarFieldEnum[] | FlowersBouquetsScalarFieldEnum
    having?: FlowersBouquetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowersBouquetsCountAggregateInputType | true
    _avg?: FlowersBouquetsAvgAggregateInputType
    _sum?: FlowersBouquetsSumAggregateInputType
    _min?: FlowersBouquetsMinAggregateInputType
    _max?: FlowersBouquetsMaxAggregateInputType
  }

  export type FlowersBouquetsGroupByOutputType = {
    id: number
    name: string
    price: number
    _count: FlowersBouquetsCountAggregateOutputType | null
    _avg: FlowersBouquetsAvgAggregateOutputType | null
    _sum: FlowersBouquetsSumAggregateOutputType | null
    _min: FlowersBouquetsMinAggregateOutputType | null
    _max: FlowersBouquetsMaxAggregateOutputType | null
  }

  type GetFlowersBouquetsGroupByPayload<T extends FlowersBouquetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlowersBouquetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowersBouquetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowersBouquetsGroupByOutputType[P]>
            : GetScalarType<T[P], FlowersBouquetsGroupByOutputType[P]>
        }
      >
    >


  export type FlowersBouquetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    flowers?: boolean | FlowersBouquets$flowersArgs<ExtArgs>
    _count?: boolean | FlowersBouquetsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowersBouquets"]>

  export type FlowersBouquetsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
  }, ExtArgs["result"]["flowersBouquets"]>

  export type FlowersBouquetsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
  }, ExtArgs["result"]["flowersBouquets"]>

  export type FlowersBouquetsSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
  }

  export type FlowersBouquetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price", ExtArgs["result"]["flowersBouquets"]>
  export type FlowersBouquetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | FlowersBouquets$flowersArgs<ExtArgs>
    _count?: boolean | FlowersBouquetsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlowersBouquetsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FlowersBouquetsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FlowersBouquetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlowersBouquets"
    objects: {
      flowers: Prisma.$FlowersBouquetsAndFlowersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
    }, ExtArgs["result"]["flowersBouquets"]>
    composites: {}
  }

  type FlowersBouquetsGetPayload<S extends boolean | null | undefined | FlowersBouquetsDefaultArgs> = $Result.GetResult<Prisma.$FlowersBouquetsPayload, S>

  type FlowersBouquetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlowersBouquetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlowersBouquetsCountAggregateInputType | true
    }

  export interface FlowersBouquetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlowersBouquets'], meta: { name: 'FlowersBouquets' } }
    /**
     * Find zero or one FlowersBouquets that matches the filter.
     * @param {FlowersBouquetsFindUniqueArgs} args - Arguments to find a FlowersBouquets
     * @example
     * // Get one FlowersBouquets
     * const flowersBouquets = await prisma.flowersBouquets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlowersBouquetsFindUniqueArgs>(args: SelectSubset<T, FlowersBouquetsFindUniqueArgs<ExtArgs>>): Prisma__FlowersBouquetsClient<$Result.GetResult<Prisma.$FlowersBouquetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlowersBouquets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlowersBouquetsFindUniqueOrThrowArgs} args - Arguments to find a FlowersBouquets
     * @example
     * // Get one FlowersBouquets
     * const flowersBouquets = await prisma.flowersBouquets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlowersBouquetsFindUniqueOrThrowArgs>(args: SelectSubset<T, FlowersBouquetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlowersBouquetsClient<$Result.GetResult<Prisma.$FlowersBouquetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowersBouquets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersBouquetsFindFirstArgs} args - Arguments to find a FlowersBouquets
     * @example
     * // Get one FlowersBouquets
     * const flowersBouquets = await prisma.flowersBouquets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlowersBouquetsFindFirstArgs>(args?: SelectSubset<T, FlowersBouquetsFindFirstArgs<ExtArgs>>): Prisma__FlowersBouquetsClient<$Result.GetResult<Prisma.$FlowersBouquetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowersBouquets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersBouquetsFindFirstOrThrowArgs} args - Arguments to find a FlowersBouquets
     * @example
     * // Get one FlowersBouquets
     * const flowersBouquets = await prisma.flowersBouquets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlowersBouquetsFindFirstOrThrowArgs>(args?: SelectSubset<T, FlowersBouquetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlowersBouquetsClient<$Result.GetResult<Prisma.$FlowersBouquetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlowersBouquets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersBouquetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlowersBouquets
     * const flowersBouquets = await prisma.flowersBouquets.findMany()
     * 
     * // Get first 10 FlowersBouquets
     * const flowersBouquets = await prisma.flowersBouquets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowersBouquetsWithIdOnly = await prisma.flowersBouquets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlowersBouquetsFindManyArgs>(args?: SelectSubset<T, FlowersBouquetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersBouquetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlowersBouquets.
     * @param {FlowersBouquetsCreateArgs} args - Arguments to create a FlowersBouquets.
     * @example
     * // Create one FlowersBouquets
     * const FlowersBouquets = await prisma.flowersBouquets.create({
     *   data: {
     *     // ... data to create a FlowersBouquets
     *   }
     * })
     * 
     */
    create<T extends FlowersBouquetsCreateArgs>(args: SelectSubset<T, FlowersBouquetsCreateArgs<ExtArgs>>): Prisma__FlowersBouquetsClient<$Result.GetResult<Prisma.$FlowersBouquetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlowersBouquets.
     * @param {FlowersBouquetsCreateManyArgs} args - Arguments to create many FlowersBouquets.
     * @example
     * // Create many FlowersBouquets
     * const flowersBouquets = await prisma.flowersBouquets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlowersBouquetsCreateManyArgs>(args?: SelectSubset<T, FlowersBouquetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlowersBouquets and returns the data saved in the database.
     * @param {FlowersBouquetsCreateManyAndReturnArgs} args - Arguments to create many FlowersBouquets.
     * @example
     * // Create many FlowersBouquets
     * const flowersBouquets = await prisma.flowersBouquets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlowersBouquets and only return the `id`
     * const flowersBouquetsWithIdOnly = await prisma.flowersBouquets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlowersBouquetsCreateManyAndReturnArgs>(args?: SelectSubset<T, FlowersBouquetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersBouquetsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlowersBouquets.
     * @param {FlowersBouquetsDeleteArgs} args - Arguments to delete one FlowersBouquets.
     * @example
     * // Delete one FlowersBouquets
     * const FlowersBouquets = await prisma.flowersBouquets.delete({
     *   where: {
     *     // ... filter to delete one FlowersBouquets
     *   }
     * })
     * 
     */
    delete<T extends FlowersBouquetsDeleteArgs>(args: SelectSubset<T, FlowersBouquetsDeleteArgs<ExtArgs>>): Prisma__FlowersBouquetsClient<$Result.GetResult<Prisma.$FlowersBouquetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlowersBouquets.
     * @param {FlowersBouquetsUpdateArgs} args - Arguments to update one FlowersBouquets.
     * @example
     * // Update one FlowersBouquets
     * const flowersBouquets = await prisma.flowersBouquets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlowersBouquetsUpdateArgs>(args: SelectSubset<T, FlowersBouquetsUpdateArgs<ExtArgs>>): Prisma__FlowersBouquetsClient<$Result.GetResult<Prisma.$FlowersBouquetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlowersBouquets.
     * @param {FlowersBouquetsDeleteManyArgs} args - Arguments to filter FlowersBouquets to delete.
     * @example
     * // Delete a few FlowersBouquets
     * const { count } = await prisma.flowersBouquets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlowersBouquetsDeleteManyArgs>(args?: SelectSubset<T, FlowersBouquetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowersBouquets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersBouquetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlowersBouquets
     * const flowersBouquets = await prisma.flowersBouquets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlowersBouquetsUpdateManyArgs>(args: SelectSubset<T, FlowersBouquetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowersBouquets and returns the data updated in the database.
     * @param {FlowersBouquetsUpdateManyAndReturnArgs} args - Arguments to update many FlowersBouquets.
     * @example
     * // Update many FlowersBouquets
     * const flowersBouquets = await prisma.flowersBouquets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlowersBouquets and only return the `id`
     * const flowersBouquetsWithIdOnly = await prisma.flowersBouquets.updateManyAndReturn({
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
    updateManyAndReturn<T extends FlowersBouquetsUpdateManyAndReturnArgs>(args: SelectSubset<T, FlowersBouquetsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersBouquetsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlowersBouquets.
     * @param {FlowersBouquetsUpsertArgs} args - Arguments to update or create a FlowersBouquets.
     * @example
     * // Update or create a FlowersBouquets
     * const flowersBouquets = await prisma.flowersBouquets.upsert({
     *   create: {
     *     // ... data to create a FlowersBouquets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlowersBouquets we want to update
     *   }
     * })
     */
    upsert<T extends FlowersBouquetsUpsertArgs>(args: SelectSubset<T, FlowersBouquetsUpsertArgs<ExtArgs>>): Prisma__FlowersBouquetsClient<$Result.GetResult<Prisma.$FlowersBouquetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlowersBouquets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersBouquetsCountArgs} args - Arguments to filter FlowersBouquets to count.
     * @example
     * // Count the number of FlowersBouquets
     * const count = await prisma.flowersBouquets.count({
     *   where: {
     *     // ... the filter for the FlowersBouquets we want to count
     *   }
     * })
    **/
    count<T extends FlowersBouquetsCountArgs>(
      args?: Subset<T, FlowersBouquetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowersBouquetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlowersBouquets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersBouquetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlowersBouquetsAggregateArgs>(args: Subset<T, FlowersBouquetsAggregateArgs>): Prisma.PrismaPromise<GetFlowersBouquetsAggregateType<T>>

    /**
     * Group by FlowersBouquets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersBouquetsGroupByArgs} args - Group by arguments.
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
      T extends FlowersBouquetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowersBouquetsGroupByArgs['orderBy'] }
        : { orderBy?: FlowersBouquetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlowersBouquetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowersBouquetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlowersBouquets model
   */
  readonly fields: FlowersBouquetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlowersBouquets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlowersBouquetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flowers<T extends FlowersBouquets$flowersArgs<ExtArgs> = {}>(args?: Subset<T, FlowersBouquets$flowersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersBouquetsAndFlowersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FlowersBouquets model
   */
  interface FlowersBouquetsFieldRefs {
    readonly id: FieldRef<"FlowersBouquets", 'Int'>
    readonly name: FieldRef<"FlowersBouquets", 'String'>
    readonly price: FieldRef<"FlowersBouquets", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FlowersBouquets findUnique
   */
  export type FlowersBouquetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquets
     */
    select?: FlowersBouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquets
     */
    omit?: FlowersBouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsInclude<ExtArgs> | null
    /**
     * Filter, which FlowersBouquets to fetch.
     */
    where: FlowersBouquetsWhereUniqueInput
  }

  /**
   * FlowersBouquets findUniqueOrThrow
   */
  export type FlowersBouquetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquets
     */
    select?: FlowersBouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquets
     */
    omit?: FlowersBouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsInclude<ExtArgs> | null
    /**
     * Filter, which FlowersBouquets to fetch.
     */
    where: FlowersBouquetsWhereUniqueInput
  }

  /**
   * FlowersBouquets findFirst
   */
  export type FlowersBouquetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquets
     */
    select?: FlowersBouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquets
     */
    omit?: FlowersBouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsInclude<ExtArgs> | null
    /**
     * Filter, which FlowersBouquets to fetch.
     */
    where?: FlowersBouquetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersBouquets to fetch.
     */
    orderBy?: FlowersBouquetsOrderByWithRelationInput | FlowersBouquetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowersBouquets.
     */
    cursor?: FlowersBouquetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersBouquets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersBouquets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowersBouquets.
     */
    distinct?: FlowersBouquetsScalarFieldEnum | FlowersBouquetsScalarFieldEnum[]
  }

  /**
   * FlowersBouquets findFirstOrThrow
   */
  export type FlowersBouquetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquets
     */
    select?: FlowersBouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquets
     */
    omit?: FlowersBouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsInclude<ExtArgs> | null
    /**
     * Filter, which FlowersBouquets to fetch.
     */
    where?: FlowersBouquetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersBouquets to fetch.
     */
    orderBy?: FlowersBouquetsOrderByWithRelationInput | FlowersBouquetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowersBouquets.
     */
    cursor?: FlowersBouquetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersBouquets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersBouquets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowersBouquets.
     */
    distinct?: FlowersBouquetsScalarFieldEnum | FlowersBouquetsScalarFieldEnum[]
  }

  /**
   * FlowersBouquets findMany
   */
  export type FlowersBouquetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquets
     */
    select?: FlowersBouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquets
     */
    omit?: FlowersBouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsInclude<ExtArgs> | null
    /**
     * Filter, which FlowersBouquets to fetch.
     */
    where?: FlowersBouquetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersBouquets to fetch.
     */
    orderBy?: FlowersBouquetsOrderByWithRelationInput | FlowersBouquetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlowersBouquets.
     */
    cursor?: FlowersBouquetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersBouquets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersBouquets.
     */
    skip?: number
    distinct?: FlowersBouquetsScalarFieldEnum | FlowersBouquetsScalarFieldEnum[]
  }

  /**
   * FlowersBouquets create
   */
  export type FlowersBouquetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquets
     */
    select?: FlowersBouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquets
     */
    omit?: FlowersBouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsInclude<ExtArgs> | null
    /**
     * The data needed to create a FlowersBouquets.
     */
    data: XOR<FlowersBouquetsCreateInput, FlowersBouquetsUncheckedCreateInput>
  }

  /**
   * FlowersBouquets createMany
   */
  export type FlowersBouquetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlowersBouquets.
     */
    data: FlowersBouquetsCreateManyInput | FlowersBouquetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlowersBouquets createManyAndReturn
   */
  export type FlowersBouquetsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquets
     */
    select?: FlowersBouquetsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquets
     */
    omit?: FlowersBouquetsOmit<ExtArgs> | null
    /**
     * The data used to create many FlowersBouquets.
     */
    data: FlowersBouquetsCreateManyInput | FlowersBouquetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlowersBouquets update
   */
  export type FlowersBouquetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquets
     */
    select?: FlowersBouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquets
     */
    omit?: FlowersBouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsInclude<ExtArgs> | null
    /**
     * The data needed to update a FlowersBouquets.
     */
    data: XOR<FlowersBouquetsUpdateInput, FlowersBouquetsUncheckedUpdateInput>
    /**
     * Choose, which FlowersBouquets to update.
     */
    where: FlowersBouquetsWhereUniqueInput
  }

  /**
   * FlowersBouquets updateMany
   */
  export type FlowersBouquetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlowersBouquets.
     */
    data: XOR<FlowersBouquetsUpdateManyMutationInput, FlowersBouquetsUncheckedUpdateManyInput>
    /**
     * Filter which FlowersBouquets to update
     */
    where?: FlowersBouquetsWhereInput
    /**
     * Limit how many FlowersBouquets to update.
     */
    limit?: number
  }

  /**
   * FlowersBouquets updateManyAndReturn
   */
  export type FlowersBouquetsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquets
     */
    select?: FlowersBouquetsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquets
     */
    omit?: FlowersBouquetsOmit<ExtArgs> | null
    /**
     * The data used to update FlowersBouquets.
     */
    data: XOR<FlowersBouquetsUpdateManyMutationInput, FlowersBouquetsUncheckedUpdateManyInput>
    /**
     * Filter which FlowersBouquets to update
     */
    where?: FlowersBouquetsWhereInput
    /**
     * Limit how many FlowersBouquets to update.
     */
    limit?: number
  }

  /**
   * FlowersBouquets upsert
   */
  export type FlowersBouquetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquets
     */
    select?: FlowersBouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquets
     */
    omit?: FlowersBouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsInclude<ExtArgs> | null
    /**
     * The filter to search for the FlowersBouquets to update in case it exists.
     */
    where: FlowersBouquetsWhereUniqueInput
    /**
     * In case the FlowersBouquets found by the `where` argument doesn't exist, create a new FlowersBouquets with this data.
     */
    create: XOR<FlowersBouquetsCreateInput, FlowersBouquetsUncheckedCreateInput>
    /**
     * In case the FlowersBouquets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowersBouquetsUpdateInput, FlowersBouquetsUncheckedUpdateInput>
  }

  /**
   * FlowersBouquets delete
   */
  export type FlowersBouquetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquets
     */
    select?: FlowersBouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquets
     */
    omit?: FlowersBouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsInclude<ExtArgs> | null
    /**
     * Filter which FlowersBouquets to delete.
     */
    where: FlowersBouquetsWhereUniqueInput
  }

  /**
   * FlowersBouquets deleteMany
   */
  export type FlowersBouquetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowersBouquets to delete
     */
    where?: FlowersBouquetsWhereInput
    /**
     * Limit how many FlowersBouquets to delete.
     */
    limit?: number
  }

  /**
   * FlowersBouquets.flowers
   */
  export type FlowersBouquets$flowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquetsAndFlowers
     */
    select?: FlowersBouquetsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquetsAndFlowers
     */
    omit?: FlowersBouquetsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsAndFlowersInclude<ExtArgs> | null
    where?: FlowersBouquetsAndFlowersWhereInput
    orderBy?: FlowersBouquetsAndFlowersOrderByWithRelationInput | FlowersBouquetsAndFlowersOrderByWithRelationInput[]
    cursor?: FlowersBouquetsAndFlowersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowersBouquetsAndFlowersScalarFieldEnum | FlowersBouquetsAndFlowersScalarFieldEnum[]
  }

  /**
   * FlowersBouquets without action
   */
  export type FlowersBouquetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquets
     */
    select?: FlowersBouquetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquets
     */
    omit?: FlowersBouquetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsInclude<ExtArgs> | null
  }


  /**
   * Model FlowersBouquetsAndFlowers
   */

  export type AggregateFlowersBouquetsAndFlowers = {
    _count: FlowersBouquetsAndFlowersCountAggregateOutputType | null
    _avg: FlowersBouquetsAndFlowersAvgAggregateOutputType | null
    _sum: FlowersBouquetsAndFlowersSumAggregateOutputType | null
    _min: FlowersBouquetsAndFlowersMinAggregateOutputType | null
    _max: FlowersBouquetsAndFlowersMaxAggregateOutputType | null
  }

  export type FlowersBouquetsAndFlowersAvgAggregateOutputType = {
    flowersId: number | null
    flowersBouquetsId: number | null
  }

  export type FlowersBouquetsAndFlowersSumAggregateOutputType = {
    flowersId: number | null
    flowersBouquetsId: number | null
  }

  export type FlowersBouquetsAndFlowersMinAggregateOutputType = {
    flowersId: number | null
    flowersBouquetsId: number | null
  }

  export type FlowersBouquetsAndFlowersMaxAggregateOutputType = {
    flowersId: number | null
    flowersBouquetsId: number | null
  }

  export type FlowersBouquetsAndFlowersCountAggregateOutputType = {
    flowersId: number
    flowersBouquetsId: number
    _all: number
  }


  export type FlowersBouquetsAndFlowersAvgAggregateInputType = {
    flowersId?: true
    flowersBouquetsId?: true
  }

  export type FlowersBouquetsAndFlowersSumAggregateInputType = {
    flowersId?: true
    flowersBouquetsId?: true
  }

  export type FlowersBouquetsAndFlowersMinAggregateInputType = {
    flowersId?: true
    flowersBouquetsId?: true
  }

  export type FlowersBouquetsAndFlowersMaxAggregateInputType = {
    flowersId?: true
    flowersBouquetsId?: true
  }

  export type FlowersBouquetsAndFlowersCountAggregateInputType = {
    flowersId?: true
    flowersBouquetsId?: true
    _all?: true
  }

  export type FlowersBouquetsAndFlowersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowersBouquetsAndFlowers to aggregate.
     */
    where?: FlowersBouquetsAndFlowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersBouquetsAndFlowers to fetch.
     */
    orderBy?: FlowersBouquetsAndFlowersOrderByWithRelationInput | FlowersBouquetsAndFlowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowersBouquetsAndFlowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersBouquetsAndFlowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersBouquetsAndFlowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlowersBouquetsAndFlowers
    **/
    _count?: true | FlowersBouquetsAndFlowersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowersBouquetsAndFlowersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowersBouquetsAndFlowersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowersBouquetsAndFlowersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowersBouquetsAndFlowersMaxAggregateInputType
  }

  export type GetFlowersBouquetsAndFlowersAggregateType<T extends FlowersBouquetsAndFlowersAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowersBouquetsAndFlowers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowersBouquetsAndFlowers[P]>
      : GetScalarType<T[P], AggregateFlowersBouquetsAndFlowers[P]>
  }




  export type FlowersBouquetsAndFlowersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowersBouquetsAndFlowersWhereInput
    orderBy?: FlowersBouquetsAndFlowersOrderByWithAggregationInput | FlowersBouquetsAndFlowersOrderByWithAggregationInput[]
    by: FlowersBouquetsAndFlowersScalarFieldEnum[] | FlowersBouquetsAndFlowersScalarFieldEnum
    having?: FlowersBouquetsAndFlowersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowersBouquetsAndFlowersCountAggregateInputType | true
    _avg?: FlowersBouquetsAndFlowersAvgAggregateInputType
    _sum?: FlowersBouquetsAndFlowersSumAggregateInputType
    _min?: FlowersBouquetsAndFlowersMinAggregateInputType
    _max?: FlowersBouquetsAndFlowersMaxAggregateInputType
  }

  export type FlowersBouquetsAndFlowersGroupByOutputType = {
    flowersId: number
    flowersBouquetsId: number
    _count: FlowersBouquetsAndFlowersCountAggregateOutputType | null
    _avg: FlowersBouquetsAndFlowersAvgAggregateOutputType | null
    _sum: FlowersBouquetsAndFlowersSumAggregateOutputType | null
    _min: FlowersBouquetsAndFlowersMinAggregateOutputType | null
    _max: FlowersBouquetsAndFlowersMaxAggregateOutputType | null
  }

  type GetFlowersBouquetsAndFlowersGroupByPayload<T extends FlowersBouquetsAndFlowersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlowersBouquetsAndFlowersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowersBouquetsAndFlowersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowersBouquetsAndFlowersGroupByOutputType[P]>
            : GetScalarType<T[P], FlowersBouquetsAndFlowersGroupByOutputType[P]>
        }
      >
    >


  export type FlowersBouquetsAndFlowersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flowersId?: boolean
    flowersBouquetsId?: boolean
    flowers?: boolean | FlowersDefaultArgs<ExtArgs>
    flowersBouquets?: boolean | FlowersBouquetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowersBouquetsAndFlowers"]>

  export type FlowersBouquetsAndFlowersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flowersId?: boolean
    flowersBouquetsId?: boolean
    flowers?: boolean | FlowersDefaultArgs<ExtArgs>
    flowersBouquets?: boolean | FlowersBouquetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowersBouquetsAndFlowers"]>

  export type FlowersBouquetsAndFlowersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flowersId?: boolean
    flowersBouquetsId?: boolean
    flowers?: boolean | FlowersDefaultArgs<ExtArgs>
    flowersBouquets?: boolean | FlowersBouquetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowersBouquetsAndFlowers"]>

  export type FlowersBouquetsAndFlowersSelectScalar = {
    flowersId?: boolean
    flowersBouquetsId?: boolean
  }

  export type FlowersBouquetsAndFlowersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"flowersId" | "flowersBouquetsId", ExtArgs["result"]["flowersBouquetsAndFlowers"]>
  export type FlowersBouquetsAndFlowersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | FlowersDefaultArgs<ExtArgs>
    flowersBouquets?: boolean | FlowersBouquetsDefaultArgs<ExtArgs>
  }
  export type FlowersBouquetsAndFlowersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | FlowersDefaultArgs<ExtArgs>
    flowersBouquets?: boolean | FlowersBouquetsDefaultArgs<ExtArgs>
  }
  export type FlowersBouquetsAndFlowersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | FlowersDefaultArgs<ExtArgs>
    flowersBouquets?: boolean | FlowersBouquetsDefaultArgs<ExtArgs>
  }

  export type $FlowersBouquetsAndFlowersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlowersBouquetsAndFlowers"
    objects: {
      flowers: Prisma.$FlowersPayload<ExtArgs>
      flowersBouquets: Prisma.$FlowersBouquetsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      flowersId: number
      flowersBouquetsId: number
    }, ExtArgs["result"]["flowersBouquetsAndFlowers"]>
    composites: {}
  }

  type FlowersBouquetsAndFlowersGetPayload<S extends boolean | null | undefined | FlowersBouquetsAndFlowersDefaultArgs> = $Result.GetResult<Prisma.$FlowersBouquetsAndFlowersPayload, S>

  type FlowersBouquetsAndFlowersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlowersBouquetsAndFlowersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlowersBouquetsAndFlowersCountAggregateInputType | true
    }

  export interface FlowersBouquetsAndFlowersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlowersBouquetsAndFlowers'], meta: { name: 'FlowersBouquetsAndFlowers' } }
    /**
     * Find zero or one FlowersBouquetsAndFlowers that matches the filter.
     * @param {FlowersBouquetsAndFlowersFindUniqueArgs} args - Arguments to find a FlowersBouquetsAndFlowers
     * @example
     * // Get one FlowersBouquetsAndFlowers
     * const flowersBouquetsAndFlowers = await prisma.flowersBouquetsAndFlowers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlowersBouquetsAndFlowersFindUniqueArgs>(args: SelectSubset<T, FlowersBouquetsAndFlowersFindUniqueArgs<ExtArgs>>): Prisma__FlowersBouquetsAndFlowersClient<$Result.GetResult<Prisma.$FlowersBouquetsAndFlowersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlowersBouquetsAndFlowers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlowersBouquetsAndFlowersFindUniqueOrThrowArgs} args - Arguments to find a FlowersBouquetsAndFlowers
     * @example
     * // Get one FlowersBouquetsAndFlowers
     * const flowersBouquetsAndFlowers = await prisma.flowersBouquetsAndFlowers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlowersBouquetsAndFlowersFindUniqueOrThrowArgs>(args: SelectSubset<T, FlowersBouquetsAndFlowersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlowersBouquetsAndFlowersClient<$Result.GetResult<Prisma.$FlowersBouquetsAndFlowersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowersBouquetsAndFlowers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersBouquetsAndFlowersFindFirstArgs} args - Arguments to find a FlowersBouquetsAndFlowers
     * @example
     * // Get one FlowersBouquetsAndFlowers
     * const flowersBouquetsAndFlowers = await prisma.flowersBouquetsAndFlowers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlowersBouquetsAndFlowersFindFirstArgs>(args?: SelectSubset<T, FlowersBouquetsAndFlowersFindFirstArgs<ExtArgs>>): Prisma__FlowersBouquetsAndFlowersClient<$Result.GetResult<Prisma.$FlowersBouquetsAndFlowersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowersBouquetsAndFlowers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersBouquetsAndFlowersFindFirstOrThrowArgs} args - Arguments to find a FlowersBouquetsAndFlowers
     * @example
     * // Get one FlowersBouquetsAndFlowers
     * const flowersBouquetsAndFlowers = await prisma.flowersBouquetsAndFlowers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlowersBouquetsAndFlowersFindFirstOrThrowArgs>(args?: SelectSubset<T, FlowersBouquetsAndFlowersFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlowersBouquetsAndFlowersClient<$Result.GetResult<Prisma.$FlowersBouquetsAndFlowersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlowersBouquetsAndFlowers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersBouquetsAndFlowersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlowersBouquetsAndFlowers
     * const flowersBouquetsAndFlowers = await prisma.flowersBouquetsAndFlowers.findMany()
     * 
     * // Get first 10 FlowersBouquetsAndFlowers
     * const flowersBouquetsAndFlowers = await prisma.flowersBouquetsAndFlowers.findMany({ take: 10 })
     * 
     * // Only select the `flowersId`
     * const flowersBouquetsAndFlowersWithFlowersIdOnly = await prisma.flowersBouquetsAndFlowers.findMany({ select: { flowersId: true } })
     * 
     */
    findMany<T extends FlowersBouquetsAndFlowersFindManyArgs>(args?: SelectSubset<T, FlowersBouquetsAndFlowersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersBouquetsAndFlowersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlowersBouquetsAndFlowers.
     * @param {FlowersBouquetsAndFlowersCreateArgs} args - Arguments to create a FlowersBouquetsAndFlowers.
     * @example
     * // Create one FlowersBouquetsAndFlowers
     * const FlowersBouquetsAndFlowers = await prisma.flowersBouquetsAndFlowers.create({
     *   data: {
     *     // ... data to create a FlowersBouquetsAndFlowers
     *   }
     * })
     * 
     */
    create<T extends FlowersBouquetsAndFlowersCreateArgs>(args: SelectSubset<T, FlowersBouquetsAndFlowersCreateArgs<ExtArgs>>): Prisma__FlowersBouquetsAndFlowersClient<$Result.GetResult<Prisma.$FlowersBouquetsAndFlowersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlowersBouquetsAndFlowers.
     * @param {FlowersBouquetsAndFlowersCreateManyArgs} args - Arguments to create many FlowersBouquetsAndFlowers.
     * @example
     * // Create many FlowersBouquetsAndFlowers
     * const flowersBouquetsAndFlowers = await prisma.flowersBouquetsAndFlowers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlowersBouquetsAndFlowersCreateManyArgs>(args?: SelectSubset<T, FlowersBouquetsAndFlowersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlowersBouquetsAndFlowers and returns the data saved in the database.
     * @param {FlowersBouquetsAndFlowersCreateManyAndReturnArgs} args - Arguments to create many FlowersBouquetsAndFlowers.
     * @example
     * // Create many FlowersBouquetsAndFlowers
     * const flowersBouquetsAndFlowers = await prisma.flowersBouquetsAndFlowers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlowersBouquetsAndFlowers and only return the `flowersId`
     * const flowersBouquetsAndFlowersWithFlowersIdOnly = await prisma.flowersBouquetsAndFlowers.createManyAndReturn({
     *   select: { flowersId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlowersBouquetsAndFlowersCreateManyAndReturnArgs>(args?: SelectSubset<T, FlowersBouquetsAndFlowersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersBouquetsAndFlowersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlowersBouquetsAndFlowers.
     * @param {FlowersBouquetsAndFlowersDeleteArgs} args - Arguments to delete one FlowersBouquetsAndFlowers.
     * @example
     * // Delete one FlowersBouquetsAndFlowers
     * const FlowersBouquetsAndFlowers = await prisma.flowersBouquetsAndFlowers.delete({
     *   where: {
     *     // ... filter to delete one FlowersBouquetsAndFlowers
     *   }
     * })
     * 
     */
    delete<T extends FlowersBouquetsAndFlowersDeleteArgs>(args: SelectSubset<T, FlowersBouquetsAndFlowersDeleteArgs<ExtArgs>>): Prisma__FlowersBouquetsAndFlowersClient<$Result.GetResult<Prisma.$FlowersBouquetsAndFlowersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlowersBouquetsAndFlowers.
     * @param {FlowersBouquetsAndFlowersUpdateArgs} args - Arguments to update one FlowersBouquetsAndFlowers.
     * @example
     * // Update one FlowersBouquetsAndFlowers
     * const flowersBouquetsAndFlowers = await prisma.flowersBouquetsAndFlowers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlowersBouquetsAndFlowersUpdateArgs>(args: SelectSubset<T, FlowersBouquetsAndFlowersUpdateArgs<ExtArgs>>): Prisma__FlowersBouquetsAndFlowersClient<$Result.GetResult<Prisma.$FlowersBouquetsAndFlowersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlowersBouquetsAndFlowers.
     * @param {FlowersBouquetsAndFlowersDeleteManyArgs} args - Arguments to filter FlowersBouquetsAndFlowers to delete.
     * @example
     * // Delete a few FlowersBouquetsAndFlowers
     * const { count } = await prisma.flowersBouquetsAndFlowers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlowersBouquetsAndFlowersDeleteManyArgs>(args?: SelectSubset<T, FlowersBouquetsAndFlowersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowersBouquetsAndFlowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersBouquetsAndFlowersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlowersBouquetsAndFlowers
     * const flowersBouquetsAndFlowers = await prisma.flowersBouquetsAndFlowers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlowersBouquetsAndFlowersUpdateManyArgs>(args: SelectSubset<T, FlowersBouquetsAndFlowersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowersBouquetsAndFlowers and returns the data updated in the database.
     * @param {FlowersBouquetsAndFlowersUpdateManyAndReturnArgs} args - Arguments to update many FlowersBouquetsAndFlowers.
     * @example
     * // Update many FlowersBouquetsAndFlowers
     * const flowersBouquetsAndFlowers = await prisma.flowersBouquetsAndFlowers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlowersBouquetsAndFlowers and only return the `flowersId`
     * const flowersBouquetsAndFlowersWithFlowersIdOnly = await prisma.flowersBouquetsAndFlowers.updateManyAndReturn({
     *   select: { flowersId: true },
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
    updateManyAndReturn<T extends FlowersBouquetsAndFlowersUpdateManyAndReturnArgs>(args: SelectSubset<T, FlowersBouquetsAndFlowersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersBouquetsAndFlowersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlowersBouquetsAndFlowers.
     * @param {FlowersBouquetsAndFlowersUpsertArgs} args - Arguments to update or create a FlowersBouquetsAndFlowers.
     * @example
     * // Update or create a FlowersBouquetsAndFlowers
     * const flowersBouquetsAndFlowers = await prisma.flowersBouquetsAndFlowers.upsert({
     *   create: {
     *     // ... data to create a FlowersBouquetsAndFlowers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlowersBouquetsAndFlowers we want to update
     *   }
     * })
     */
    upsert<T extends FlowersBouquetsAndFlowersUpsertArgs>(args: SelectSubset<T, FlowersBouquetsAndFlowersUpsertArgs<ExtArgs>>): Prisma__FlowersBouquetsAndFlowersClient<$Result.GetResult<Prisma.$FlowersBouquetsAndFlowersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlowersBouquetsAndFlowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersBouquetsAndFlowersCountArgs} args - Arguments to filter FlowersBouquetsAndFlowers to count.
     * @example
     * // Count the number of FlowersBouquetsAndFlowers
     * const count = await prisma.flowersBouquetsAndFlowers.count({
     *   where: {
     *     // ... the filter for the FlowersBouquetsAndFlowers we want to count
     *   }
     * })
    **/
    count<T extends FlowersBouquetsAndFlowersCountArgs>(
      args?: Subset<T, FlowersBouquetsAndFlowersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowersBouquetsAndFlowersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlowersBouquetsAndFlowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersBouquetsAndFlowersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlowersBouquetsAndFlowersAggregateArgs>(args: Subset<T, FlowersBouquetsAndFlowersAggregateArgs>): Prisma.PrismaPromise<GetFlowersBouquetsAndFlowersAggregateType<T>>

    /**
     * Group by FlowersBouquetsAndFlowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersBouquetsAndFlowersGroupByArgs} args - Group by arguments.
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
      T extends FlowersBouquetsAndFlowersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowersBouquetsAndFlowersGroupByArgs['orderBy'] }
        : { orderBy?: FlowersBouquetsAndFlowersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlowersBouquetsAndFlowersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowersBouquetsAndFlowersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlowersBouquetsAndFlowers model
   */
  readonly fields: FlowersBouquetsAndFlowersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlowersBouquetsAndFlowers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlowersBouquetsAndFlowersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flowers<T extends FlowersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlowersDefaultArgs<ExtArgs>>): Prisma__FlowersClient<$Result.GetResult<Prisma.$FlowersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flowersBouquets<T extends FlowersBouquetsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlowersBouquetsDefaultArgs<ExtArgs>>): Prisma__FlowersBouquetsClient<$Result.GetResult<Prisma.$FlowersBouquetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FlowersBouquetsAndFlowers model
   */
  interface FlowersBouquetsAndFlowersFieldRefs {
    readonly flowersId: FieldRef<"FlowersBouquetsAndFlowers", 'Int'>
    readonly flowersBouquetsId: FieldRef<"FlowersBouquetsAndFlowers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FlowersBouquetsAndFlowers findUnique
   */
  export type FlowersBouquetsAndFlowersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquetsAndFlowers
     */
    select?: FlowersBouquetsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquetsAndFlowers
     */
    omit?: FlowersBouquetsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsAndFlowersInclude<ExtArgs> | null
    /**
     * Filter, which FlowersBouquetsAndFlowers to fetch.
     */
    where: FlowersBouquetsAndFlowersWhereUniqueInput
  }

  /**
   * FlowersBouquetsAndFlowers findUniqueOrThrow
   */
  export type FlowersBouquetsAndFlowersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquetsAndFlowers
     */
    select?: FlowersBouquetsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquetsAndFlowers
     */
    omit?: FlowersBouquetsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsAndFlowersInclude<ExtArgs> | null
    /**
     * Filter, which FlowersBouquetsAndFlowers to fetch.
     */
    where: FlowersBouquetsAndFlowersWhereUniqueInput
  }

  /**
   * FlowersBouquetsAndFlowers findFirst
   */
  export type FlowersBouquetsAndFlowersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquetsAndFlowers
     */
    select?: FlowersBouquetsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquetsAndFlowers
     */
    omit?: FlowersBouquetsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsAndFlowersInclude<ExtArgs> | null
    /**
     * Filter, which FlowersBouquetsAndFlowers to fetch.
     */
    where?: FlowersBouquetsAndFlowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersBouquetsAndFlowers to fetch.
     */
    orderBy?: FlowersBouquetsAndFlowersOrderByWithRelationInput | FlowersBouquetsAndFlowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowersBouquetsAndFlowers.
     */
    cursor?: FlowersBouquetsAndFlowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersBouquetsAndFlowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersBouquetsAndFlowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowersBouquetsAndFlowers.
     */
    distinct?: FlowersBouquetsAndFlowersScalarFieldEnum | FlowersBouquetsAndFlowersScalarFieldEnum[]
  }

  /**
   * FlowersBouquetsAndFlowers findFirstOrThrow
   */
  export type FlowersBouquetsAndFlowersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquetsAndFlowers
     */
    select?: FlowersBouquetsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquetsAndFlowers
     */
    omit?: FlowersBouquetsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsAndFlowersInclude<ExtArgs> | null
    /**
     * Filter, which FlowersBouquetsAndFlowers to fetch.
     */
    where?: FlowersBouquetsAndFlowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersBouquetsAndFlowers to fetch.
     */
    orderBy?: FlowersBouquetsAndFlowersOrderByWithRelationInput | FlowersBouquetsAndFlowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowersBouquetsAndFlowers.
     */
    cursor?: FlowersBouquetsAndFlowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersBouquetsAndFlowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersBouquetsAndFlowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowersBouquetsAndFlowers.
     */
    distinct?: FlowersBouquetsAndFlowersScalarFieldEnum | FlowersBouquetsAndFlowersScalarFieldEnum[]
  }

  /**
   * FlowersBouquetsAndFlowers findMany
   */
  export type FlowersBouquetsAndFlowersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquetsAndFlowers
     */
    select?: FlowersBouquetsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquetsAndFlowers
     */
    omit?: FlowersBouquetsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsAndFlowersInclude<ExtArgs> | null
    /**
     * Filter, which FlowersBouquetsAndFlowers to fetch.
     */
    where?: FlowersBouquetsAndFlowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersBouquetsAndFlowers to fetch.
     */
    orderBy?: FlowersBouquetsAndFlowersOrderByWithRelationInput | FlowersBouquetsAndFlowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlowersBouquetsAndFlowers.
     */
    cursor?: FlowersBouquetsAndFlowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersBouquetsAndFlowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersBouquetsAndFlowers.
     */
    skip?: number
    distinct?: FlowersBouquetsAndFlowersScalarFieldEnum | FlowersBouquetsAndFlowersScalarFieldEnum[]
  }

  /**
   * FlowersBouquetsAndFlowers create
   */
  export type FlowersBouquetsAndFlowersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquetsAndFlowers
     */
    select?: FlowersBouquetsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquetsAndFlowers
     */
    omit?: FlowersBouquetsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsAndFlowersInclude<ExtArgs> | null
    /**
     * The data needed to create a FlowersBouquetsAndFlowers.
     */
    data: XOR<FlowersBouquetsAndFlowersCreateInput, FlowersBouquetsAndFlowersUncheckedCreateInput>
  }

  /**
   * FlowersBouquetsAndFlowers createMany
   */
  export type FlowersBouquetsAndFlowersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlowersBouquetsAndFlowers.
     */
    data: FlowersBouquetsAndFlowersCreateManyInput | FlowersBouquetsAndFlowersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlowersBouquetsAndFlowers createManyAndReturn
   */
  export type FlowersBouquetsAndFlowersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquetsAndFlowers
     */
    select?: FlowersBouquetsAndFlowersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquetsAndFlowers
     */
    omit?: FlowersBouquetsAndFlowersOmit<ExtArgs> | null
    /**
     * The data used to create many FlowersBouquetsAndFlowers.
     */
    data: FlowersBouquetsAndFlowersCreateManyInput | FlowersBouquetsAndFlowersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsAndFlowersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlowersBouquetsAndFlowers update
   */
  export type FlowersBouquetsAndFlowersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquetsAndFlowers
     */
    select?: FlowersBouquetsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquetsAndFlowers
     */
    omit?: FlowersBouquetsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsAndFlowersInclude<ExtArgs> | null
    /**
     * The data needed to update a FlowersBouquetsAndFlowers.
     */
    data: XOR<FlowersBouquetsAndFlowersUpdateInput, FlowersBouquetsAndFlowersUncheckedUpdateInput>
    /**
     * Choose, which FlowersBouquetsAndFlowers to update.
     */
    where: FlowersBouquetsAndFlowersWhereUniqueInput
  }

  /**
   * FlowersBouquetsAndFlowers updateMany
   */
  export type FlowersBouquetsAndFlowersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlowersBouquetsAndFlowers.
     */
    data: XOR<FlowersBouquetsAndFlowersUpdateManyMutationInput, FlowersBouquetsAndFlowersUncheckedUpdateManyInput>
    /**
     * Filter which FlowersBouquetsAndFlowers to update
     */
    where?: FlowersBouquetsAndFlowersWhereInput
    /**
     * Limit how many FlowersBouquetsAndFlowers to update.
     */
    limit?: number
  }

  /**
   * FlowersBouquetsAndFlowers updateManyAndReturn
   */
  export type FlowersBouquetsAndFlowersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquetsAndFlowers
     */
    select?: FlowersBouquetsAndFlowersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquetsAndFlowers
     */
    omit?: FlowersBouquetsAndFlowersOmit<ExtArgs> | null
    /**
     * The data used to update FlowersBouquetsAndFlowers.
     */
    data: XOR<FlowersBouquetsAndFlowersUpdateManyMutationInput, FlowersBouquetsAndFlowersUncheckedUpdateManyInput>
    /**
     * Filter which FlowersBouquetsAndFlowers to update
     */
    where?: FlowersBouquetsAndFlowersWhereInput
    /**
     * Limit how many FlowersBouquetsAndFlowers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsAndFlowersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlowersBouquetsAndFlowers upsert
   */
  export type FlowersBouquetsAndFlowersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquetsAndFlowers
     */
    select?: FlowersBouquetsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquetsAndFlowers
     */
    omit?: FlowersBouquetsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsAndFlowersInclude<ExtArgs> | null
    /**
     * The filter to search for the FlowersBouquetsAndFlowers to update in case it exists.
     */
    where: FlowersBouquetsAndFlowersWhereUniqueInput
    /**
     * In case the FlowersBouquetsAndFlowers found by the `where` argument doesn't exist, create a new FlowersBouquetsAndFlowers with this data.
     */
    create: XOR<FlowersBouquetsAndFlowersCreateInput, FlowersBouquetsAndFlowersUncheckedCreateInput>
    /**
     * In case the FlowersBouquetsAndFlowers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowersBouquetsAndFlowersUpdateInput, FlowersBouquetsAndFlowersUncheckedUpdateInput>
  }

  /**
   * FlowersBouquetsAndFlowers delete
   */
  export type FlowersBouquetsAndFlowersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquetsAndFlowers
     */
    select?: FlowersBouquetsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquetsAndFlowers
     */
    omit?: FlowersBouquetsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsAndFlowersInclude<ExtArgs> | null
    /**
     * Filter which FlowersBouquetsAndFlowers to delete.
     */
    where: FlowersBouquetsAndFlowersWhereUniqueInput
  }

  /**
   * FlowersBouquetsAndFlowers deleteMany
   */
  export type FlowersBouquetsAndFlowersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowersBouquetsAndFlowers to delete
     */
    where?: FlowersBouquetsAndFlowersWhereInput
    /**
     * Limit how many FlowersBouquetsAndFlowers to delete.
     */
    limit?: number
  }

  /**
   * FlowersBouquetsAndFlowers without action
   */
  export type FlowersBouquetsAndFlowersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersBouquetsAndFlowers
     */
    select?: FlowersBouquetsAndFlowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersBouquetsAndFlowers
     */
    omit?: FlowersBouquetsAndFlowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersBouquetsAndFlowersInclude<ExtArgs> | null
  }


  /**
   * Model FlowersAndFiles
   */

  export type AggregateFlowersAndFiles = {
    _count: FlowersAndFilesCountAggregateOutputType | null
    _avg: FlowersAndFilesAvgAggregateOutputType | null
    _sum: FlowersAndFilesSumAggregateOutputType | null
    _min: FlowersAndFilesMinAggregateOutputType | null
    _max: FlowersAndFilesMaxAggregateOutputType | null
  }

  export type FlowersAndFilesAvgAggregateOutputType = {
    flowersId: number | null
    publicFilesId: number | null
  }

  export type FlowersAndFilesSumAggregateOutputType = {
    flowersId: number | null
    publicFilesId: number | null
  }

  export type FlowersAndFilesMinAggregateOutputType = {
    flowersId: number | null
    publicFilesId: number | null
  }

  export type FlowersAndFilesMaxAggregateOutputType = {
    flowersId: number | null
    publicFilesId: number | null
  }

  export type FlowersAndFilesCountAggregateOutputType = {
    flowersId: number
    publicFilesId: number
    _all: number
  }


  export type FlowersAndFilesAvgAggregateInputType = {
    flowersId?: true
    publicFilesId?: true
  }

  export type FlowersAndFilesSumAggregateInputType = {
    flowersId?: true
    publicFilesId?: true
  }

  export type FlowersAndFilesMinAggregateInputType = {
    flowersId?: true
    publicFilesId?: true
  }

  export type FlowersAndFilesMaxAggregateInputType = {
    flowersId?: true
    publicFilesId?: true
  }

  export type FlowersAndFilesCountAggregateInputType = {
    flowersId?: true
    publicFilesId?: true
    _all?: true
  }

  export type FlowersAndFilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowersAndFiles to aggregate.
     */
    where?: FlowersAndFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersAndFiles to fetch.
     */
    orderBy?: FlowersAndFilesOrderByWithRelationInput | FlowersAndFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowersAndFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersAndFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersAndFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlowersAndFiles
    **/
    _count?: true | FlowersAndFilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowersAndFilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowersAndFilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowersAndFilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowersAndFilesMaxAggregateInputType
  }

  export type GetFlowersAndFilesAggregateType<T extends FlowersAndFilesAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowersAndFiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowersAndFiles[P]>
      : GetScalarType<T[P], AggregateFlowersAndFiles[P]>
  }




  export type FlowersAndFilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowersAndFilesWhereInput
    orderBy?: FlowersAndFilesOrderByWithAggregationInput | FlowersAndFilesOrderByWithAggregationInput[]
    by: FlowersAndFilesScalarFieldEnum[] | FlowersAndFilesScalarFieldEnum
    having?: FlowersAndFilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowersAndFilesCountAggregateInputType | true
    _avg?: FlowersAndFilesAvgAggregateInputType
    _sum?: FlowersAndFilesSumAggregateInputType
    _min?: FlowersAndFilesMinAggregateInputType
    _max?: FlowersAndFilesMaxAggregateInputType
  }

  export type FlowersAndFilesGroupByOutputType = {
    flowersId: number
    publicFilesId: number
    _count: FlowersAndFilesCountAggregateOutputType | null
    _avg: FlowersAndFilesAvgAggregateOutputType | null
    _sum: FlowersAndFilesSumAggregateOutputType | null
    _min: FlowersAndFilesMinAggregateOutputType | null
    _max: FlowersAndFilesMaxAggregateOutputType | null
  }

  type GetFlowersAndFilesGroupByPayload<T extends FlowersAndFilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlowersAndFilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowersAndFilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowersAndFilesGroupByOutputType[P]>
            : GetScalarType<T[P], FlowersAndFilesGroupByOutputType[P]>
        }
      >
    >


  export type FlowersAndFilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flowersId?: boolean
    publicFilesId?: boolean
    flowers?: boolean | FlowersDefaultArgs<ExtArgs>
    publicFiles?: boolean | PublicFilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowersAndFiles"]>

  export type FlowersAndFilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flowersId?: boolean
    publicFilesId?: boolean
    flowers?: boolean | FlowersDefaultArgs<ExtArgs>
    publicFiles?: boolean | PublicFilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowersAndFiles"]>

  export type FlowersAndFilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flowersId?: boolean
    publicFilesId?: boolean
    flowers?: boolean | FlowersDefaultArgs<ExtArgs>
    publicFiles?: boolean | PublicFilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowersAndFiles"]>

  export type FlowersAndFilesSelectScalar = {
    flowersId?: boolean
    publicFilesId?: boolean
  }

  export type FlowersAndFilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"flowersId" | "publicFilesId", ExtArgs["result"]["flowersAndFiles"]>
  export type FlowersAndFilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | FlowersDefaultArgs<ExtArgs>
    publicFiles?: boolean | PublicFilesDefaultArgs<ExtArgs>
  }
  export type FlowersAndFilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | FlowersDefaultArgs<ExtArgs>
    publicFiles?: boolean | PublicFilesDefaultArgs<ExtArgs>
  }
  export type FlowersAndFilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | FlowersDefaultArgs<ExtArgs>
    publicFiles?: boolean | PublicFilesDefaultArgs<ExtArgs>
  }

  export type $FlowersAndFilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlowersAndFiles"
    objects: {
      flowers: Prisma.$FlowersPayload<ExtArgs>
      publicFiles: Prisma.$PublicFilesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      flowersId: number
      publicFilesId: number
    }, ExtArgs["result"]["flowersAndFiles"]>
    composites: {}
  }

  type FlowersAndFilesGetPayload<S extends boolean | null | undefined | FlowersAndFilesDefaultArgs> = $Result.GetResult<Prisma.$FlowersAndFilesPayload, S>

  type FlowersAndFilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlowersAndFilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlowersAndFilesCountAggregateInputType | true
    }

  export interface FlowersAndFilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlowersAndFiles'], meta: { name: 'FlowersAndFiles' } }
    /**
     * Find zero or one FlowersAndFiles that matches the filter.
     * @param {FlowersAndFilesFindUniqueArgs} args - Arguments to find a FlowersAndFiles
     * @example
     * // Get one FlowersAndFiles
     * const flowersAndFiles = await prisma.flowersAndFiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlowersAndFilesFindUniqueArgs>(args: SelectSubset<T, FlowersAndFilesFindUniqueArgs<ExtArgs>>): Prisma__FlowersAndFilesClient<$Result.GetResult<Prisma.$FlowersAndFilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlowersAndFiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlowersAndFilesFindUniqueOrThrowArgs} args - Arguments to find a FlowersAndFiles
     * @example
     * // Get one FlowersAndFiles
     * const flowersAndFiles = await prisma.flowersAndFiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlowersAndFilesFindUniqueOrThrowArgs>(args: SelectSubset<T, FlowersAndFilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlowersAndFilesClient<$Result.GetResult<Prisma.$FlowersAndFilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowersAndFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersAndFilesFindFirstArgs} args - Arguments to find a FlowersAndFiles
     * @example
     * // Get one FlowersAndFiles
     * const flowersAndFiles = await prisma.flowersAndFiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlowersAndFilesFindFirstArgs>(args?: SelectSubset<T, FlowersAndFilesFindFirstArgs<ExtArgs>>): Prisma__FlowersAndFilesClient<$Result.GetResult<Prisma.$FlowersAndFilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowersAndFiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersAndFilesFindFirstOrThrowArgs} args - Arguments to find a FlowersAndFiles
     * @example
     * // Get one FlowersAndFiles
     * const flowersAndFiles = await prisma.flowersAndFiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlowersAndFilesFindFirstOrThrowArgs>(args?: SelectSubset<T, FlowersAndFilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlowersAndFilesClient<$Result.GetResult<Prisma.$FlowersAndFilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlowersAndFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersAndFilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlowersAndFiles
     * const flowersAndFiles = await prisma.flowersAndFiles.findMany()
     * 
     * // Get first 10 FlowersAndFiles
     * const flowersAndFiles = await prisma.flowersAndFiles.findMany({ take: 10 })
     * 
     * // Only select the `flowersId`
     * const flowersAndFilesWithFlowersIdOnly = await prisma.flowersAndFiles.findMany({ select: { flowersId: true } })
     * 
     */
    findMany<T extends FlowersAndFilesFindManyArgs>(args?: SelectSubset<T, FlowersAndFilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersAndFilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlowersAndFiles.
     * @param {FlowersAndFilesCreateArgs} args - Arguments to create a FlowersAndFiles.
     * @example
     * // Create one FlowersAndFiles
     * const FlowersAndFiles = await prisma.flowersAndFiles.create({
     *   data: {
     *     // ... data to create a FlowersAndFiles
     *   }
     * })
     * 
     */
    create<T extends FlowersAndFilesCreateArgs>(args: SelectSubset<T, FlowersAndFilesCreateArgs<ExtArgs>>): Prisma__FlowersAndFilesClient<$Result.GetResult<Prisma.$FlowersAndFilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlowersAndFiles.
     * @param {FlowersAndFilesCreateManyArgs} args - Arguments to create many FlowersAndFiles.
     * @example
     * // Create many FlowersAndFiles
     * const flowersAndFiles = await prisma.flowersAndFiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlowersAndFilesCreateManyArgs>(args?: SelectSubset<T, FlowersAndFilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlowersAndFiles and returns the data saved in the database.
     * @param {FlowersAndFilesCreateManyAndReturnArgs} args - Arguments to create many FlowersAndFiles.
     * @example
     * // Create many FlowersAndFiles
     * const flowersAndFiles = await prisma.flowersAndFiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlowersAndFiles and only return the `flowersId`
     * const flowersAndFilesWithFlowersIdOnly = await prisma.flowersAndFiles.createManyAndReturn({
     *   select: { flowersId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlowersAndFilesCreateManyAndReturnArgs>(args?: SelectSubset<T, FlowersAndFilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersAndFilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlowersAndFiles.
     * @param {FlowersAndFilesDeleteArgs} args - Arguments to delete one FlowersAndFiles.
     * @example
     * // Delete one FlowersAndFiles
     * const FlowersAndFiles = await prisma.flowersAndFiles.delete({
     *   where: {
     *     // ... filter to delete one FlowersAndFiles
     *   }
     * })
     * 
     */
    delete<T extends FlowersAndFilesDeleteArgs>(args: SelectSubset<T, FlowersAndFilesDeleteArgs<ExtArgs>>): Prisma__FlowersAndFilesClient<$Result.GetResult<Prisma.$FlowersAndFilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlowersAndFiles.
     * @param {FlowersAndFilesUpdateArgs} args - Arguments to update one FlowersAndFiles.
     * @example
     * // Update one FlowersAndFiles
     * const flowersAndFiles = await prisma.flowersAndFiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlowersAndFilesUpdateArgs>(args: SelectSubset<T, FlowersAndFilesUpdateArgs<ExtArgs>>): Prisma__FlowersAndFilesClient<$Result.GetResult<Prisma.$FlowersAndFilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlowersAndFiles.
     * @param {FlowersAndFilesDeleteManyArgs} args - Arguments to filter FlowersAndFiles to delete.
     * @example
     * // Delete a few FlowersAndFiles
     * const { count } = await prisma.flowersAndFiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlowersAndFilesDeleteManyArgs>(args?: SelectSubset<T, FlowersAndFilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowersAndFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersAndFilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlowersAndFiles
     * const flowersAndFiles = await prisma.flowersAndFiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlowersAndFilesUpdateManyArgs>(args: SelectSubset<T, FlowersAndFilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowersAndFiles and returns the data updated in the database.
     * @param {FlowersAndFilesUpdateManyAndReturnArgs} args - Arguments to update many FlowersAndFiles.
     * @example
     * // Update many FlowersAndFiles
     * const flowersAndFiles = await prisma.flowersAndFiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlowersAndFiles and only return the `flowersId`
     * const flowersAndFilesWithFlowersIdOnly = await prisma.flowersAndFiles.updateManyAndReturn({
     *   select: { flowersId: true },
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
    updateManyAndReturn<T extends FlowersAndFilesUpdateManyAndReturnArgs>(args: SelectSubset<T, FlowersAndFilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersAndFilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlowersAndFiles.
     * @param {FlowersAndFilesUpsertArgs} args - Arguments to update or create a FlowersAndFiles.
     * @example
     * // Update or create a FlowersAndFiles
     * const flowersAndFiles = await prisma.flowersAndFiles.upsert({
     *   create: {
     *     // ... data to create a FlowersAndFiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlowersAndFiles we want to update
     *   }
     * })
     */
    upsert<T extends FlowersAndFilesUpsertArgs>(args: SelectSubset<T, FlowersAndFilesUpsertArgs<ExtArgs>>): Prisma__FlowersAndFilesClient<$Result.GetResult<Prisma.$FlowersAndFilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlowersAndFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersAndFilesCountArgs} args - Arguments to filter FlowersAndFiles to count.
     * @example
     * // Count the number of FlowersAndFiles
     * const count = await prisma.flowersAndFiles.count({
     *   where: {
     *     // ... the filter for the FlowersAndFiles we want to count
     *   }
     * })
    **/
    count<T extends FlowersAndFilesCountArgs>(
      args?: Subset<T, FlowersAndFilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowersAndFilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlowersAndFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersAndFilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlowersAndFilesAggregateArgs>(args: Subset<T, FlowersAndFilesAggregateArgs>): Prisma.PrismaPromise<GetFlowersAndFilesAggregateType<T>>

    /**
     * Group by FlowersAndFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowersAndFilesGroupByArgs} args - Group by arguments.
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
      T extends FlowersAndFilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowersAndFilesGroupByArgs['orderBy'] }
        : { orderBy?: FlowersAndFilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlowersAndFilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowersAndFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlowersAndFiles model
   */
  readonly fields: FlowersAndFilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlowersAndFiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlowersAndFilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flowers<T extends FlowersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlowersDefaultArgs<ExtArgs>>): Prisma__FlowersClient<$Result.GetResult<Prisma.$FlowersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    publicFiles<T extends PublicFilesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicFilesDefaultArgs<ExtArgs>>): Prisma__PublicFilesClient<$Result.GetResult<Prisma.$PublicFilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FlowersAndFiles model
   */
  interface FlowersAndFilesFieldRefs {
    readonly flowersId: FieldRef<"FlowersAndFiles", 'Int'>
    readonly publicFilesId: FieldRef<"FlowersAndFiles", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FlowersAndFiles findUnique
   */
  export type FlowersAndFilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersAndFiles
     */
    select?: FlowersAndFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersAndFiles
     */
    omit?: FlowersAndFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersAndFilesInclude<ExtArgs> | null
    /**
     * Filter, which FlowersAndFiles to fetch.
     */
    where: FlowersAndFilesWhereUniqueInput
  }

  /**
   * FlowersAndFiles findUniqueOrThrow
   */
  export type FlowersAndFilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersAndFiles
     */
    select?: FlowersAndFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersAndFiles
     */
    omit?: FlowersAndFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersAndFilesInclude<ExtArgs> | null
    /**
     * Filter, which FlowersAndFiles to fetch.
     */
    where: FlowersAndFilesWhereUniqueInput
  }

  /**
   * FlowersAndFiles findFirst
   */
  export type FlowersAndFilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersAndFiles
     */
    select?: FlowersAndFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersAndFiles
     */
    omit?: FlowersAndFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersAndFilesInclude<ExtArgs> | null
    /**
     * Filter, which FlowersAndFiles to fetch.
     */
    where?: FlowersAndFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersAndFiles to fetch.
     */
    orderBy?: FlowersAndFilesOrderByWithRelationInput | FlowersAndFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowersAndFiles.
     */
    cursor?: FlowersAndFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersAndFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersAndFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowersAndFiles.
     */
    distinct?: FlowersAndFilesScalarFieldEnum | FlowersAndFilesScalarFieldEnum[]
  }

  /**
   * FlowersAndFiles findFirstOrThrow
   */
  export type FlowersAndFilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersAndFiles
     */
    select?: FlowersAndFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersAndFiles
     */
    omit?: FlowersAndFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersAndFilesInclude<ExtArgs> | null
    /**
     * Filter, which FlowersAndFiles to fetch.
     */
    where?: FlowersAndFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersAndFiles to fetch.
     */
    orderBy?: FlowersAndFilesOrderByWithRelationInput | FlowersAndFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowersAndFiles.
     */
    cursor?: FlowersAndFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersAndFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersAndFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowersAndFiles.
     */
    distinct?: FlowersAndFilesScalarFieldEnum | FlowersAndFilesScalarFieldEnum[]
  }

  /**
   * FlowersAndFiles findMany
   */
  export type FlowersAndFilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersAndFiles
     */
    select?: FlowersAndFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersAndFiles
     */
    omit?: FlowersAndFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersAndFilesInclude<ExtArgs> | null
    /**
     * Filter, which FlowersAndFiles to fetch.
     */
    where?: FlowersAndFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowersAndFiles to fetch.
     */
    orderBy?: FlowersAndFilesOrderByWithRelationInput | FlowersAndFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlowersAndFiles.
     */
    cursor?: FlowersAndFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowersAndFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowersAndFiles.
     */
    skip?: number
    distinct?: FlowersAndFilesScalarFieldEnum | FlowersAndFilesScalarFieldEnum[]
  }

  /**
   * FlowersAndFiles create
   */
  export type FlowersAndFilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersAndFiles
     */
    select?: FlowersAndFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersAndFiles
     */
    omit?: FlowersAndFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersAndFilesInclude<ExtArgs> | null
    /**
     * The data needed to create a FlowersAndFiles.
     */
    data: XOR<FlowersAndFilesCreateInput, FlowersAndFilesUncheckedCreateInput>
  }

  /**
   * FlowersAndFiles createMany
   */
  export type FlowersAndFilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlowersAndFiles.
     */
    data: FlowersAndFilesCreateManyInput | FlowersAndFilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlowersAndFiles createManyAndReturn
   */
  export type FlowersAndFilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersAndFiles
     */
    select?: FlowersAndFilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersAndFiles
     */
    omit?: FlowersAndFilesOmit<ExtArgs> | null
    /**
     * The data used to create many FlowersAndFiles.
     */
    data: FlowersAndFilesCreateManyInput | FlowersAndFilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersAndFilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlowersAndFiles update
   */
  export type FlowersAndFilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersAndFiles
     */
    select?: FlowersAndFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersAndFiles
     */
    omit?: FlowersAndFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersAndFilesInclude<ExtArgs> | null
    /**
     * The data needed to update a FlowersAndFiles.
     */
    data: XOR<FlowersAndFilesUpdateInput, FlowersAndFilesUncheckedUpdateInput>
    /**
     * Choose, which FlowersAndFiles to update.
     */
    where: FlowersAndFilesWhereUniqueInput
  }

  /**
   * FlowersAndFiles updateMany
   */
  export type FlowersAndFilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlowersAndFiles.
     */
    data: XOR<FlowersAndFilesUpdateManyMutationInput, FlowersAndFilesUncheckedUpdateManyInput>
    /**
     * Filter which FlowersAndFiles to update
     */
    where?: FlowersAndFilesWhereInput
    /**
     * Limit how many FlowersAndFiles to update.
     */
    limit?: number
  }

  /**
   * FlowersAndFiles updateManyAndReturn
   */
  export type FlowersAndFilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersAndFiles
     */
    select?: FlowersAndFilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersAndFiles
     */
    omit?: FlowersAndFilesOmit<ExtArgs> | null
    /**
     * The data used to update FlowersAndFiles.
     */
    data: XOR<FlowersAndFilesUpdateManyMutationInput, FlowersAndFilesUncheckedUpdateManyInput>
    /**
     * Filter which FlowersAndFiles to update
     */
    where?: FlowersAndFilesWhereInput
    /**
     * Limit how many FlowersAndFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersAndFilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlowersAndFiles upsert
   */
  export type FlowersAndFilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersAndFiles
     */
    select?: FlowersAndFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersAndFiles
     */
    omit?: FlowersAndFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersAndFilesInclude<ExtArgs> | null
    /**
     * The filter to search for the FlowersAndFiles to update in case it exists.
     */
    where: FlowersAndFilesWhereUniqueInput
    /**
     * In case the FlowersAndFiles found by the `where` argument doesn't exist, create a new FlowersAndFiles with this data.
     */
    create: XOR<FlowersAndFilesCreateInput, FlowersAndFilesUncheckedCreateInput>
    /**
     * In case the FlowersAndFiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowersAndFilesUpdateInput, FlowersAndFilesUncheckedUpdateInput>
  }

  /**
   * FlowersAndFiles delete
   */
  export type FlowersAndFilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersAndFiles
     */
    select?: FlowersAndFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersAndFiles
     */
    omit?: FlowersAndFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersAndFilesInclude<ExtArgs> | null
    /**
     * Filter which FlowersAndFiles to delete.
     */
    where: FlowersAndFilesWhereUniqueInput
  }

  /**
   * FlowersAndFiles deleteMany
   */
  export type FlowersAndFilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowersAndFiles to delete
     */
    where?: FlowersAndFilesWhereInput
    /**
     * Limit how many FlowersAndFiles to delete.
     */
    limit?: number
  }

  /**
   * FlowersAndFiles without action
   */
  export type FlowersAndFilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersAndFiles
     */
    select?: FlowersAndFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersAndFiles
     */
    omit?: FlowersAndFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersAndFilesInclude<ExtArgs> | null
  }


  /**
   * Model PublicFiles
   */

  export type AggregatePublicFiles = {
    _count: PublicFilesCountAggregateOutputType | null
    _avg: PublicFilesAvgAggregateOutputType | null
    _sum: PublicFilesSumAggregateOutputType | null
    _min: PublicFilesMinAggregateOutputType | null
    _max: PublicFilesMaxAggregateOutputType | null
  }

  export type PublicFilesAvgAggregateOutputType = {
    id: number | null
    size: number | null
  }

  export type PublicFilesSumAggregateOutputType = {
    id: number | null
    size: number | null
  }

  export type PublicFilesMinAggregateOutputType = {
    id: number | null
    name: string | null
    size: number | null
    uploadAt: Date | null
  }

  export type PublicFilesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    size: number | null
    uploadAt: Date | null
  }

  export type PublicFilesCountAggregateOutputType = {
    id: number
    name: number
    size: number
    uploadAt: number
    _all: number
  }


  export type PublicFilesAvgAggregateInputType = {
    id?: true
    size?: true
  }

  export type PublicFilesSumAggregateInputType = {
    id?: true
    size?: true
  }

  export type PublicFilesMinAggregateInputType = {
    id?: true
    name?: true
    size?: true
    uploadAt?: true
  }

  export type PublicFilesMaxAggregateInputType = {
    id?: true
    name?: true
    size?: true
    uploadAt?: true
  }

  export type PublicFilesCountAggregateInputType = {
    id?: true
    name?: true
    size?: true
    uploadAt?: true
    _all?: true
  }

  export type PublicFilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicFiles to aggregate.
     */
    where?: PublicFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicFiles to fetch.
     */
    orderBy?: PublicFilesOrderByWithRelationInput | PublicFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicFiles
    **/
    _count?: true | PublicFilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicFilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicFilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicFilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicFilesMaxAggregateInputType
  }

  export type GetPublicFilesAggregateType<T extends PublicFilesAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicFiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicFiles[P]>
      : GetScalarType<T[P], AggregatePublicFiles[P]>
  }




  export type PublicFilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicFilesWhereInput
    orderBy?: PublicFilesOrderByWithAggregationInput | PublicFilesOrderByWithAggregationInput[]
    by: PublicFilesScalarFieldEnum[] | PublicFilesScalarFieldEnum
    having?: PublicFilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicFilesCountAggregateInputType | true
    _avg?: PublicFilesAvgAggregateInputType
    _sum?: PublicFilesSumAggregateInputType
    _min?: PublicFilesMinAggregateInputType
    _max?: PublicFilesMaxAggregateInputType
  }

  export type PublicFilesGroupByOutputType = {
    id: number
    name: string
    size: number
    uploadAt: Date
    _count: PublicFilesCountAggregateOutputType | null
    _avg: PublicFilesAvgAggregateOutputType | null
    _sum: PublicFilesSumAggregateOutputType | null
    _min: PublicFilesMinAggregateOutputType | null
    _max: PublicFilesMaxAggregateOutputType | null
  }

  type GetPublicFilesGroupByPayload<T extends PublicFilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicFilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicFilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicFilesGroupByOutputType[P]>
            : GetScalarType<T[P], PublicFilesGroupByOutputType[P]>
        }
      >
    >


  export type PublicFilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    uploadAt?: boolean
    flowers?: boolean | PublicFiles$flowersArgs<ExtArgs>
    _count?: boolean | PublicFilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicFiles"]>

  export type PublicFilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    uploadAt?: boolean
  }, ExtArgs["result"]["publicFiles"]>

  export type PublicFilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    uploadAt?: boolean
  }, ExtArgs["result"]["publicFiles"]>

  export type PublicFilesSelectScalar = {
    id?: boolean
    name?: boolean
    size?: boolean
    uploadAt?: boolean
  }

  export type PublicFilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "size" | "uploadAt", ExtArgs["result"]["publicFiles"]>
  export type PublicFilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowers?: boolean | PublicFiles$flowersArgs<ExtArgs>
    _count?: boolean | PublicFilesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PublicFilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PublicFilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PublicFilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublicFiles"
    objects: {
      flowers: Prisma.$FlowersAndFilesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      size: number
      uploadAt: Date
    }, ExtArgs["result"]["publicFiles"]>
    composites: {}
  }

  type PublicFilesGetPayload<S extends boolean | null | undefined | PublicFilesDefaultArgs> = $Result.GetResult<Prisma.$PublicFilesPayload, S>

  type PublicFilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicFilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicFilesCountAggregateInputType | true
    }

  export interface PublicFilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublicFiles'], meta: { name: 'PublicFiles' } }
    /**
     * Find zero or one PublicFiles that matches the filter.
     * @param {PublicFilesFindUniqueArgs} args - Arguments to find a PublicFiles
     * @example
     * // Get one PublicFiles
     * const publicFiles = await prisma.publicFiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicFilesFindUniqueArgs>(args: SelectSubset<T, PublicFilesFindUniqueArgs<ExtArgs>>): Prisma__PublicFilesClient<$Result.GetResult<Prisma.$PublicFilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PublicFiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicFilesFindUniqueOrThrowArgs} args - Arguments to find a PublicFiles
     * @example
     * // Get one PublicFiles
     * const publicFiles = await prisma.publicFiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicFilesFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicFilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicFilesClient<$Result.GetResult<Prisma.$PublicFilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFilesFindFirstArgs} args - Arguments to find a PublicFiles
     * @example
     * // Get one PublicFiles
     * const publicFiles = await prisma.publicFiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicFilesFindFirstArgs>(args?: SelectSubset<T, PublicFilesFindFirstArgs<ExtArgs>>): Prisma__PublicFilesClient<$Result.GetResult<Prisma.$PublicFilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicFiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFilesFindFirstOrThrowArgs} args - Arguments to find a PublicFiles
     * @example
     * // Get one PublicFiles
     * const publicFiles = await prisma.publicFiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicFilesFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicFilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicFilesClient<$Result.GetResult<Prisma.$PublicFilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PublicFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicFiles
     * const publicFiles = await prisma.publicFiles.findMany()
     * 
     * // Get first 10 PublicFiles
     * const publicFiles = await prisma.publicFiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicFilesWithIdOnly = await prisma.publicFiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicFilesFindManyArgs>(args?: SelectSubset<T, PublicFilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicFilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PublicFiles.
     * @param {PublicFilesCreateArgs} args - Arguments to create a PublicFiles.
     * @example
     * // Create one PublicFiles
     * const PublicFiles = await prisma.publicFiles.create({
     *   data: {
     *     // ... data to create a PublicFiles
     *   }
     * })
     * 
     */
    create<T extends PublicFilesCreateArgs>(args: SelectSubset<T, PublicFilesCreateArgs<ExtArgs>>): Prisma__PublicFilesClient<$Result.GetResult<Prisma.$PublicFilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PublicFiles.
     * @param {PublicFilesCreateManyArgs} args - Arguments to create many PublicFiles.
     * @example
     * // Create many PublicFiles
     * const publicFiles = await prisma.publicFiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicFilesCreateManyArgs>(args?: SelectSubset<T, PublicFilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublicFiles and returns the data saved in the database.
     * @param {PublicFilesCreateManyAndReturnArgs} args - Arguments to create many PublicFiles.
     * @example
     * // Create many PublicFiles
     * const publicFiles = await prisma.publicFiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublicFiles and only return the `id`
     * const publicFilesWithIdOnly = await prisma.publicFiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicFilesCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicFilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicFilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PublicFiles.
     * @param {PublicFilesDeleteArgs} args - Arguments to delete one PublicFiles.
     * @example
     * // Delete one PublicFiles
     * const PublicFiles = await prisma.publicFiles.delete({
     *   where: {
     *     // ... filter to delete one PublicFiles
     *   }
     * })
     * 
     */
    delete<T extends PublicFilesDeleteArgs>(args: SelectSubset<T, PublicFilesDeleteArgs<ExtArgs>>): Prisma__PublicFilesClient<$Result.GetResult<Prisma.$PublicFilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PublicFiles.
     * @param {PublicFilesUpdateArgs} args - Arguments to update one PublicFiles.
     * @example
     * // Update one PublicFiles
     * const publicFiles = await prisma.publicFiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicFilesUpdateArgs>(args: SelectSubset<T, PublicFilesUpdateArgs<ExtArgs>>): Prisma__PublicFilesClient<$Result.GetResult<Prisma.$PublicFilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PublicFiles.
     * @param {PublicFilesDeleteManyArgs} args - Arguments to filter PublicFiles to delete.
     * @example
     * // Delete a few PublicFiles
     * const { count } = await prisma.publicFiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicFilesDeleteManyArgs>(args?: SelectSubset<T, PublicFilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicFiles
     * const publicFiles = await prisma.publicFiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicFilesUpdateManyArgs>(args: SelectSubset<T, PublicFilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicFiles and returns the data updated in the database.
     * @param {PublicFilesUpdateManyAndReturnArgs} args - Arguments to update many PublicFiles.
     * @example
     * // Update many PublicFiles
     * const publicFiles = await prisma.publicFiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PublicFiles and only return the `id`
     * const publicFilesWithIdOnly = await prisma.publicFiles.updateManyAndReturn({
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
    updateManyAndReturn<T extends PublicFilesUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicFilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicFilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PublicFiles.
     * @param {PublicFilesUpsertArgs} args - Arguments to update or create a PublicFiles.
     * @example
     * // Update or create a PublicFiles
     * const publicFiles = await prisma.publicFiles.upsert({
     *   create: {
     *     // ... data to create a PublicFiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicFiles we want to update
     *   }
     * })
     */
    upsert<T extends PublicFilesUpsertArgs>(args: SelectSubset<T, PublicFilesUpsertArgs<ExtArgs>>): Prisma__PublicFilesClient<$Result.GetResult<Prisma.$PublicFilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PublicFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFilesCountArgs} args - Arguments to filter PublicFiles to count.
     * @example
     * // Count the number of PublicFiles
     * const count = await prisma.publicFiles.count({
     *   where: {
     *     // ... the filter for the PublicFiles we want to count
     *   }
     * })
    **/
    count<T extends PublicFilesCountArgs>(
      args?: Subset<T, PublicFilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicFilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublicFilesAggregateArgs>(args: Subset<T, PublicFilesAggregateArgs>): Prisma.PrismaPromise<GetPublicFilesAggregateType<T>>

    /**
     * Group by PublicFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFilesGroupByArgs} args - Group by arguments.
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
      T extends PublicFilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicFilesGroupByArgs['orderBy'] }
        : { orderBy?: PublicFilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PublicFilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublicFiles model
   */
  readonly fields: PublicFilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicFiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicFilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flowers<T extends PublicFiles$flowersArgs<ExtArgs> = {}>(args?: Subset<T, PublicFiles$flowersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersAndFilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PublicFiles model
   */
  interface PublicFilesFieldRefs {
    readonly id: FieldRef<"PublicFiles", 'Int'>
    readonly name: FieldRef<"PublicFiles", 'String'>
    readonly size: FieldRef<"PublicFiles", 'Int'>
    readonly uploadAt: FieldRef<"PublicFiles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PublicFiles findUnique
   */
  export type PublicFilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFiles
     */
    select?: PublicFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFiles
     */
    omit?: PublicFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicFilesInclude<ExtArgs> | null
    /**
     * Filter, which PublicFiles to fetch.
     */
    where: PublicFilesWhereUniqueInput
  }

  /**
   * PublicFiles findUniqueOrThrow
   */
  export type PublicFilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFiles
     */
    select?: PublicFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFiles
     */
    omit?: PublicFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicFilesInclude<ExtArgs> | null
    /**
     * Filter, which PublicFiles to fetch.
     */
    where: PublicFilesWhereUniqueInput
  }

  /**
   * PublicFiles findFirst
   */
  export type PublicFilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFiles
     */
    select?: PublicFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFiles
     */
    omit?: PublicFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicFilesInclude<ExtArgs> | null
    /**
     * Filter, which PublicFiles to fetch.
     */
    where?: PublicFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicFiles to fetch.
     */
    orderBy?: PublicFilesOrderByWithRelationInput | PublicFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicFiles.
     */
    cursor?: PublicFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicFiles.
     */
    distinct?: PublicFilesScalarFieldEnum | PublicFilesScalarFieldEnum[]
  }

  /**
   * PublicFiles findFirstOrThrow
   */
  export type PublicFilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFiles
     */
    select?: PublicFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFiles
     */
    omit?: PublicFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicFilesInclude<ExtArgs> | null
    /**
     * Filter, which PublicFiles to fetch.
     */
    where?: PublicFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicFiles to fetch.
     */
    orderBy?: PublicFilesOrderByWithRelationInput | PublicFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicFiles.
     */
    cursor?: PublicFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicFiles.
     */
    distinct?: PublicFilesScalarFieldEnum | PublicFilesScalarFieldEnum[]
  }

  /**
   * PublicFiles findMany
   */
  export type PublicFilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFiles
     */
    select?: PublicFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFiles
     */
    omit?: PublicFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicFilesInclude<ExtArgs> | null
    /**
     * Filter, which PublicFiles to fetch.
     */
    where?: PublicFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicFiles to fetch.
     */
    orderBy?: PublicFilesOrderByWithRelationInput | PublicFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicFiles.
     */
    cursor?: PublicFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicFiles.
     */
    skip?: number
    distinct?: PublicFilesScalarFieldEnum | PublicFilesScalarFieldEnum[]
  }

  /**
   * PublicFiles create
   */
  export type PublicFilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFiles
     */
    select?: PublicFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFiles
     */
    omit?: PublicFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicFilesInclude<ExtArgs> | null
    /**
     * The data needed to create a PublicFiles.
     */
    data: XOR<PublicFilesCreateInput, PublicFilesUncheckedCreateInput>
  }

  /**
   * PublicFiles createMany
   */
  export type PublicFilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublicFiles.
     */
    data: PublicFilesCreateManyInput | PublicFilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicFiles createManyAndReturn
   */
  export type PublicFilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFiles
     */
    select?: PublicFilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFiles
     */
    omit?: PublicFilesOmit<ExtArgs> | null
    /**
     * The data used to create many PublicFiles.
     */
    data: PublicFilesCreateManyInput | PublicFilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicFiles update
   */
  export type PublicFilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFiles
     */
    select?: PublicFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFiles
     */
    omit?: PublicFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicFilesInclude<ExtArgs> | null
    /**
     * The data needed to update a PublicFiles.
     */
    data: XOR<PublicFilesUpdateInput, PublicFilesUncheckedUpdateInput>
    /**
     * Choose, which PublicFiles to update.
     */
    where: PublicFilesWhereUniqueInput
  }

  /**
   * PublicFiles updateMany
   */
  export type PublicFilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublicFiles.
     */
    data: XOR<PublicFilesUpdateManyMutationInput, PublicFilesUncheckedUpdateManyInput>
    /**
     * Filter which PublicFiles to update
     */
    where?: PublicFilesWhereInput
    /**
     * Limit how many PublicFiles to update.
     */
    limit?: number
  }

  /**
   * PublicFiles updateManyAndReturn
   */
  export type PublicFilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFiles
     */
    select?: PublicFilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFiles
     */
    omit?: PublicFilesOmit<ExtArgs> | null
    /**
     * The data used to update PublicFiles.
     */
    data: XOR<PublicFilesUpdateManyMutationInput, PublicFilesUncheckedUpdateManyInput>
    /**
     * Filter which PublicFiles to update
     */
    where?: PublicFilesWhereInput
    /**
     * Limit how many PublicFiles to update.
     */
    limit?: number
  }

  /**
   * PublicFiles upsert
   */
  export type PublicFilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFiles
     */
    select?: PublicFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFiles
     */
    omit?: PublicFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicFilesInclude<ExtArgs> | null
    /**
     * The filter to search for the PublicFiles to update in case it exists.
     */
    where: PublicFilesWhereUniqueInput
    /**
     * In case the PublicFiles found by the `where` argument doesn't exist, create a new PublicFiles with this data.
     */
    create: XOR<PublicFilesCreateInput, PublicFilesUncheckedCreateInput>
    /**
     * In case the PublicFiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicFilesUpdateInput, PublicFilesUncheckedUpdateInput>
  }

  /**
   * PublicFiles delete
   */
  export type PublicFilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFiles
     */
    select?: PublicFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFiles
     */
    omit?: PublicFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicFilesInclude<ExtArgs> | null
    /**
     * Filter which PublicFiles to delete.
     */
    where: PublicFilesWhereUniqueInput
  }

  /**
   * PublicFiles deleteMany
   */
  export type PublicFilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicFiles to delete
     */
    where?: PublicFilesWhereInput
    /**
     * Limit how many PublicFiles to delete.
     */
    limit?: number
  }

  /**
   * PublicFiles.flowers
   */
  export type PublicFiles$flowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowersAndFiles
     */
    select?: FlowersAndFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowersAndFiles
     */
    omit?: FlowersAndFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowersAndFilesInclude<ExtArgs> | null
    where?: FlowersAndFilesWhereInput
    orderBy?: FlowersAndFilesOrderByWithRelationInput | FlowersAndFilesOrderByWithRelationInput[]
    cursor?: FlowersAndFilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowersAndFilesScalarFieldEnum | FlowersAndFilesScalarFieldEnum[]
  }

  /**
   * PublicFiles without action
   */
  export type PublicFilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFiles
     */
    select?: PublicFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFiles
     */
    omit?: PublicFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicFilesInclude<ExtArgs> | null
  }


  /**
   * Model PrivateFiles
   */

  export type AggregatePrivateFiles = {
    _count: PrivateFilesCountAggregateOutputType | null
    _avg: PrivateFilesAvgAggregateOutputType | null
    _sum: PrivateFilesSumAggregateOutputType | null
    _min: PrivateFilesMinAggregateOutputType | null
    _max: PrivateFilesMaxAggregateOutputType | null
  }

  export type PrivateFilesAvgAggregateOutputType = {
    id: number | null
    size: number | null
  }

  export type PrivateFilesSumAggregateOutputType = {
    id: number | null
    size: number | null
  }

  export type PrivateFilesMinAggregateOutputType = {
    id: number | null
    name: string | null
    size: number | null
    uploadAt: Date | null
  }

  export type PrivateFilesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    size: number | null
    uploadAt: Date | null
  }

  export type PrivateFilesCountAggregateOutputType = {
    id: number
    name: number
    size: number
    uploadAt: number
    _all: number
  }


  export type PrivateFilesAvgAggregateInputType = {
    id?: true
    size?: true
  }

  export type PrivateFilesSumAggregateInputType = {
    id?: true
    size?: true
  }

  export type PrivateFilesMinAggregateInputType = {
    id?: true
    name?: true
    size?: true
    uploadAt?: true
  }

  export type PrivateFilesMaxAggregateInputType = {
    id?: true
    name?: true
    size?: true
    uploadAt?: true
  }

  export type PrivateFilesCountAggregateInputType = {
    id?: true
    name?: true
    size?: true
    uploadAt?: true
    _all?: true
  }

  export type PrivateFilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateFiles to aggregate.
     */
    where?: PrivateFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateFiles to fetch.
     */
    orderBy?: PrivateFilesOrderByWithRelationInput | PrivateFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrivateFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrivateFiles
    **/
    _count?: true | PrivateFilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrivateFilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrivateFilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivateFilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivateFilesMaxAggregateInputType
  }

  export type GetPrivateFilesAggregateType<T extends PrivateFilesAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivateFiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivateFiles[P]>
      : GetScalarType<T[P], AggregatePrivateFiles[P]>
  }




  export type PrivateFilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateFilesWhereInput
    orderBy?: PrivateFilesOrderByWithAggregationInput | PrivateFilesOrderByWithAggregationInput[]
    by: PrivateFilesScalarFieldEnum[] | PrivateFilesScalarFieldEnum
    having?: PrivateFilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivateFilesCountAggregateInputType | true
    _avg?: PrivateFilesAvgAggregateInputType
    _sum?: PrivateFilesSumAggregateInputType
    _min?: PrivateFilesMinAggregateInputType
    _max?: PrivateFilesMaxAggregateInputType
  }

  export type PrivateFilesGroupByOutputType = {
    id: number
    name: string
    size: number
    uploadAt: Date
    _count: PrivateFilesCountAggregateOutputType | null
    _avg: PrivateFilesAvgAggregateOutputType | null
    _sum: PrivateFilesSumAggregateOutputType | null
    _min: PrivateFilesMinAggregateOutputType | null
    _max: PrivateFilesMaxAggregateOutputType | null
  }

  type GetPrivateFilesGroupByPayload<T extends PrivateFilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrivateFilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrivateFilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivateFilesGroupByOutputType[P]>
            : GetScalarType<T[P], PrivateFilesGroupByOutputType[P]>
        }
      >
    >


  export type PrivateFilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    uploadAt?: boolean
  }, ExtArgs["result"]["privateFiles"]>

  export type PrivateFilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    uploadAt?: boolean
  }, ExtArgs["result"]["privateFiles"]>

  export type PrivateFilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    uploadAt?: boolean
  }, ExtArgs["result"]["privateFiles"]>

  export type PrivateFilesSelectScalar = {
    id?: boolean
    name?: boolean
    size?: boolean
    uploadAt?: boolean
  }

  export type PrivateFilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "size" | "uploadAt", ExtArgs["result"]["privateFiles"]>

  export type $PrivateFilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrivateFiles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      size: number
      uploadAt: Date
    }, ExtArgs["result"]["privateFiles"]>
    composites: {}
  }

  type PrivateFilesGetPayload<S extends boolean | null | undefined | PrivateFilesDefaultArgs> = $Result.GetResult<Prisma.$PrivateFilesPayload, S>

  type PrivateFilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrivateFilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrivateFilesCountAggregateInputType | true
    }

  export interface PrivateFilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrivateFiles'], meta: { name: 'PrivateFiles' } }
    /**
     * Find zero or one PrivateFiles that matches the filter.
     * @param {PrivateFilesFindUniqueArgs} args - Arguments to find a PrivateFiles
     * @example
     * // Get one PrivateFiles
     * const privateFiles = await prisma.privateFiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrivateFilesFindUniqueArgs>(args: SelectSubset<T, PrivateFilesFindUniqueArgs<ExtArgs>>): Prisma__PrivateFilesClient<$Result.GetResult<Prisma.$PrivateFilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrivateFiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrivateFilesFindUniqueOrThrowArgs} args - Arguments to find a PrivateFiles
     * @example
     * // Get one PrivateFiles
     * const privateFiles = await prisma.privateFiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrivateFilesFindUniqueOrThrowArgs>(args: SelectSubset<T, PrivateFilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrivateFilesClient<$Result.GetResult<Prisma.$PrivateFilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateFilesFindFirstArgs} args - Arguments to find a PrivateFiles
     * @example
     * // Get one PrivateFiles
     * const privateFiles = await prisma.privateFiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrivateFilesFindFirstArgs>(args?: SelectSubset<T, PrivateFilesFindFirstArgs<ExtArgs>>): Prisma__PrivateFilesClient<$Result.GetResult<Prisma.$PrivateFilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateFiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateFilesFindFirstOrThrowArgs} args - Arguments to find a PrivateFiles
     * @example
     * // Get one PrivateFiles
     * const privateFiles = await prisma.privateFiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrivateFilesFindFirstOrThrowArgs>(args?: SelectSubset<T, PrivateFilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrivateFilesClient<$Result.GetResult<Prisma.$PrivateFilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrivateFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateFilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrivateFiles
     * const privateFiles = await prisma.privateFiles.findMany()
     * 
     * // Get first 10 PrivateFiles
     * const privateFiles = await prisma.privateFiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const privateFilesWithIdOnly = await prisma.privateFiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrivateFilesFindManyArgs>(args?: SelectSubset<T, PrivateFilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateFilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrivateFiles.
     * @param {PrivateFilesCreateArgs} args - Arguments to create a PrivateFiles.
     * @example
     * // Create one PrivateFiles
     * const PrivateFiles = await prisma.privateFiles.create({
     *   data: {
     *     // ... data to create a PrivateFiles
     *   }
     * })
     * 
     */
    create<T extends PrivateFilesCreateArgs>(args: SelectSubset<T, PrivateFilesCreateArgs<ExtArgs>>): Prisma__PrivateFilesClient<$Result.GetResult<Prisma.$PrivateFilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrivateFiles.
     * @param {PrivateFilesCreateManyArgs} args - Arguments to create many PrivateFiles.
     * @example
     * // Create many PrivateFiles
     * const privateFiles = await prisma.privateFiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrivateFilesCreateManyArgs>(args?: SelectSubset<T, PrivateFilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrivateFiles and returns the data saved in the database.
     * @param {PrivateFilesCreateManyAndReturnArgs} args - Arguments to create many PrivateFiles.
     * @example
     * // Create many PrivateFiles
     * const privateFiles = await prisma.privateFiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrivateFiles and only return the `id`
     * const privateFilesWithIdOnly = await prisma.privateFiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrivateFilesCreateManyAndReturnArgs>(args?: SelectSubset<T, PrivateFilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateFilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrivateFiles.
     * @param {PrivateFilesDeleteArgs} args - Arguments to delete one PrivateFiles.
     * @example
     * // Delete one PrivateFiles
     * const PrivateFiles = await prisma.privateFiles.delete({
     *   where: {
     *     // ... filter to delete one PrivateFiles
     *   }
     * })
     * 
     */
    delete<T extends PrivateFilesDeleteArgs>(args: SelectSubset<T, PrivateFilesDeleteArgs<ExtArgs>>): Prisma__PrivateFilesClient<$Result.GetResult<Prisma.$PrivateFilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrivateFiles.
     * @param {PrivateFilesUpdateArgs} args - Arguments to update one PrivateFiles.
     * @example
     * // Update one PrivateFiles
     * const privateFiles = await prisma.privateFiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrivateFilesUpdateArgs>(args: SelectSubset<T, PrivateFilesUpdateArgs<ExtArgs>>): Prisma__PrivateFilesClient<$Result.GetResult<Prisma.$PrivateFilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrivateFiles.
     * @param {PrivateFilesDeleteManyArgs} args - Arguments to filter PrivateFiles to delete.
     * @example
     * // Delete a few PrivateFiles
     * const { count } = await prisma.privateFiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrivateFilesDeleteManyArgs>(args?: SelectSubset<T, PrivateFilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateFilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrivateFiles
     * const privateFiles = await prisma.privateFiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrivateFilesUpdateManyArgs>(args: SelectSubset<T, PrivateFilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateFiles and returns the data updated in the database.
     * @param {PrivateFilesUpdateManyAndReturnArgs} args - Arguments to update many PrivateFiles.
     * @example
     * // Update many PrivateFiles
     * const privateFiles = await prisma.privateFiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrivateFiles and only return the `id`
     * const privateFilesWithIdOnly = await prisma.privateFiles.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrivateFilesUpdateManyAndReturnArgs>(args: SelectSubset<T, PrivateFilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateFilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrivateFiles.
     * @param {PrivateFilesUpsertArgs} args - Arguments to update or create a PrivateFiles.
     * @example
     * // Update or create a PrivateFiles
     * const privateFiles = await prisma.privateFiles.upsert({
     *   create: {
     *     // ... data to create a PrivateFiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrivateFiles we want to update
     *   }
     * })
     */
    upsert<T extends PrivateFilesUpsertArgs>(args: SelectSubset<T, PrivateFilesUpsertArgs<ExtArgs>>): Prisma__PrivateFilesClient<$Result.GetResult<Prisma.$PrivateFilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrivateFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateFilesCountArgs} args - Arguments to filter PrivateFiles to count.
     * @example
     * // Count the number of PrivateFiles
     * const count = await prisma.privateFiles.count({
     *   where: {
     *     // ... the filter for the PrivateFiles we want to count
     *   }
     * })
    **/
    count<T extends PrivateFilesCountArgs>(
      args?: Subset<T, PrivateFilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivateFilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrivateFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateFilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrivateFilesAggregateArgs>(args: Subset<T, PrivateFilesAggregateArgs>): Prisma.PrismaPromise<GetPrivateFilesAggregateType<T>>

    /**
     * Group by PrivateFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateFilesGroupByArgs} args - Group by arguments.
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
      T extends PrivateFilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrivateFilesGroupByArgs['orderBy'] }
        : { orderBy?: PrivateFilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrivateFilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivateFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrivateFiles model
   */
  readonly fields: PrivateFilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrivateFiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrivateFilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PrivateFiles model
   */
  interface PrivateFilesFieldRefs {
    readonly id: FieldRef<"PrivateFiles", 'Int'>
    readonly name: FieldRef<"PrivateFiles", 'String'>
    readonly size: FieldRef<"PrivateFiles", 'Int'>
    readonly uploadAt: FieldRef<"PrivateFiles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PrivateFiles findUnique
   */
  export type PrivateFilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateFiles
     */
    select?: PrivateFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateFiles
     */
    omit?: PrivateFilesOmit<ExtArgs> | null
    /**
     * Filter, which PrivateFiles to fetch.
     */
    where: PrivateFilesWhereUniqueInput
  }

  /**
   * PrivateFiles findUniqueOrThrow
   */
  export type PrivateFilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateFiles
     */
    select?: PrivateFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateFiles
     */
    omit?: PrivateFilesOmit<ExtArgs> | null
    /**
     * Filter, which PrivateFiles to fetch.
     */
    where: PrivateFilesWhereUniqueInput
  }

  /**
   * PrivateFiles findFirst
   */
  export type PrivateFilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateFiles
     */
    select?: PrivateFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateFiles
     */
    omit?: PrivateFilesOmit<ExtArgs> | null
    /**
     * Filter, which PrivateFiles to fetch.
     */
    where?: PrivateFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateFiles to fetch.
     */
    orderBy?: PrivateFilesOrderByWithRelationInput | PrivateFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateFiles.
     */
    cursor?: PrivateFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateFiles.
     */
    distinct?: PrivateFilesScalarFieldEnum | PrivateFilesScalarFieldEnum[]
  }

  /**
   * PrivateFiles findFirstOrThrow
   */
  export type PrivateFilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateFiles
     */
    select?: PrivateFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateFiles
     */
    omit?: PrivateFilesOmit<ExtArgs> | null
    /**
     * Filter, which PrivateFiles to fetch.
     */
    where?: PrivateFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateFiles to fetch.
     */
    orderBy?: PrivateFilesOrderByWithRelationInput | PrivateFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateFiles.
     */
    cursor?: PrivateFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateFiles.
     */
    distinct?: PrivateFilesScalarFieldEnum | PrivateFilesScalarFieldEnum[]
  }

  /**
   * PrivateFiles findMany
   */
  export type PrivateFilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateFiles
     */
    select?: PrivateFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateFiles
     */
    omit?: PrivateFilesOmit<ExtArgs> | null
    /**
     * Filter, which PrivateFiles to fetch.
     */
    where?: PrivateFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateFiles to fetch.
     */
    orderBy?: PrivateFilesOrderByWithRelationInput | PrivateFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrivateFiles.
     */
    cursor?: PrivateFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateFiles.
     */
    skip?: number
    distinct?: PrivateFilesScalarFieldEnum | PrivateFilesScalarFieldEnum[]
  }

  /**
   * PrivateFiles create
   */
  export type PrivateFilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateFiles
     */
    select?: PrivateFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateFiles
     */
    omit?: PrivateFilesOmit<ExtArgs> | null
    /**
     * The data needed to create a PrivateFiles.
     */
    data: XOR<PrivateFilesCreateInput, PrivateFilesUncheckedCreateInput>
  }

  /**
   * PrivateFiles createMany
   */
  export type PrivateFilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrivateFiles.
     */
    data: PrivateFilesCreateManyInput | PrivateFilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrivateFiles createManyAndReturn
   */
  export type PrivateFilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateFiles
     */
    select?: PrivateFilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateFiles
     */
    omit?: PrivateFilesOmit<ExtArgs> | null
    /**
     * The data used to create many PrivateFiles.
     */
    data: PrivateFilesCreateManyInput | PrivateFilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrivateFiles update
   */
  export type PrivateFilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateFiles
     */
    select?: PrivateFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateFiles
     */
    omit?: PrivateFilesOmit<ExtArgs> | null
    /**
     * The data needed to update a PrivateFiles.
     */
    data: XOR<PrivateFilesUpdateInput, PrivateFilesUncheckedUpdateInput>
    /**
     * Choose, which PrivateFiles to update.
     */
    where: PrivateFilesWhereUniqueInput
  }

  /**
   * PrivateFiles updateMany
   */
  export type PrivateFilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrivateFiles.
     */
    data: XOR<PrivateFilesUpdateManyMutationInput, PrivateFilesUncheckedUpdateManyInput>
    /**
     * Filter which PrivateFiles to update
     */
    where?: PrivateFilesWhereInput
    /**
     * Limit how many PrivateFiles to update.
     */
    limit?: number
  }

  /**
   * PrivateFiles updateManyAndReturn
   */
  export type PrivateFilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateFiles
     */
    select?: PrivateFilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateFiles
     */
    omit?: PrivateFilesOmit<ExtArgs> | null
    /**
     * The data used to update PrivateFiles.
     */
    data: XOR<PrivateFilesUpdateManyMutationInput, PrivateFilesUncheckedUpdateManyInput>
    /**
     * Filter which PrivateFiles to update
     */
    where?: PrivateFilesWhereInput
    /**
     * Limit how many PrivateFiles to update.
     */
    limit?: number
  }

  /**
   * PrivateFiles upsert
   */
  export type PrivateFilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateFiles
     */
    select?: PrivateFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateFiles
     */
    omit?: PrivateFilesOmit<ExtArgs> | null
    /**
     * The filter to search for the PrivateFiles to update in case it exists.
     */
    where: PrivateFilesWhereUniqueInput
    /**
     * In case the PrivateFiles found by the `where` argument doesn't exist, create a new PrivateFiles with this data.
     */
    create: XOR<PrivateFilesCreateInput, PrivateFilesUncheckedCreateInput>
    /**
     * In case the PrivateFiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrivateFilesUpdateInput, PrivateFilesUncheckedUpdateInput>
  }

  /**
   * PrivateFiles delete
   */
  export type PrivateFilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateFiles
     */
    select?: PrivateFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateFiles
     */
    omit?: PrivateFilesOmit<ExtArgs> | null
    /**
     * Filter which PrivateFiles to delete.
     */
    where: PrivateFilesWhereUniqueInput
  }

  /**
   * PrivateFiles deleteMany
   */
  export type PrivateFilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateFiles to delete
     */
    where?: PrivateFilesWhereInput
    /**
     * Limit how many PrivateFiles to delete.
     */
    limit?: number
  }

  /**
   * PrivateFiles without action
   */
  export type PrivateFilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateFiles
     */
    select?: PrivateFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateFiles
     */
    omit?: PrivateFilesOmit<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    emailVerified: 'emailVerified',
    name: 'name',
    password: 'password',
    signature: 'signature',
    role: 'role',
    oauth: 'oauth',
    oauthId: 'oauthId'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const UsersFilesScalarFieldEnum: {
    userId: 'userId',
    fileId: 'fileId'
  };

  export type UsersFilesScalarFieldEnum = (typeof UsersFilesScalarFieldEnum)[keyof typeof UsersFilesScalarFieldEnum]


  export const FlowersScalarFieldEnum: {
    id: 'id',
    color: 'color',
    name: 'name',
    price: 'price',
    varietyId: 'varietyId'
  };

  export type FlowersScalarFieldEnum = (typeof FlowersScalarFieldEnum)[keyof typeof FlowersScalarFieldEnum]


  export const FlowersVarietyScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type FlowersVarietyScalarFieldEnum = (typeof FlowersVarietyScalarFieldEnum)[keyof typeof FlowersVarietyScalarFieldEnum]


  export const FlowersHistoryScalarFieldEnum: {
    id: 'id',
    flowersId: 'flowersId',
    date: 'date',
    price: 'price'
  };

  export type FlowersHistoryScalarFieldEnum = (typeof FlowersHistoryScalarFieldEnum)[keyof typeof FlowersHistoryScalarFieldEnum]


  export const FlowersFarmsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    country: 'country',
    rate: 'rate'
  };

  export type FlowersFarmsScalarFieldEnum = (typeof FlowersFarmsScalarFieldEnum)[keyof typeof FlowersFarmsScalarFieldEnum]


  export const FlowersFarmsAndFlowersScalarFieldEnum: {
    flowersId: 'flowersId',
    flowersFarmsId: 'flowersFarmsId'
  };

  export type FlowersFarmsAndFlowersScalarFieldEnum = (typeof FlowersFarmsAndFlowersScalarFieldEnum)[keyof typeof FlowersFarmsAndFlowersScalarFieldEnum]


  export const FlowersBouquetsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price'
  };

  export type FlowersBouquetsScalarFieldEnum = (typeof FlowersBouquetsScalarFieldEnum)[keyof typeof FlowersBouquetsScalarFieldEnum]


  export const FlowersBouquetsAndFlowersScalarFieldEnum: {
    flowersId: 'flowersId',
    flowersBouquetsId: 'flowersBouquetsId'
  };

  export type FlowersBouquetsAndFlowersScalarFieldEnum = (typeof FlowersBouquetsAndFlowersScalarFieldEnum)[keyof typeof FlowersBouquetsAndFlowersScalarFieldEnum]


  export const FlowersAndFilesScalarFieldEnum: {
    flowersId: 'flowersId',
    publicFilesId: 'publicFilesId'
  };

  export type FlowersAndFilesScalarFieldEnum = (typeof FlowersAndFilesScalarFieldEnum)[keyof typeof FlowersAndFilesScalarFieldEnum]


  export const PublicFilesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    size: 'size',
    uploadAt: 'uploadAt'
  };

  export type PublicFilesScalarFieldEnum = (typeof PublicFilesScalarFieldEnum)[keyof typeof PublicFilesScalarFieldEnum]


  export const PrivateFilesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    size: 'size',
    uploadAt: 'uploadAt'
  };

  export type PrivateFilesScalarFieldEnum = (typeof PrivateFilesScalarFieldEnum)[keyof typeof PrivateFilesScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    email?: StringFilter<"Users"> | string
    emailVerified?: BoolFilter<"Users"> | boolean
    name?: StringFilter<"Users"> | string
    password?: StringNullableFilter<"Users"> | string | null
    signature?: StringNullableFilter<"Users"> | string | null
    role?: StringFilter<"Users"> | string
    oauth?: StringNullableFilter<"Users"> | string | null
    oauthId?: StringNullableFilter<"Users"> | string | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    role?: SortOrder
    oauth?: SortOrderInput | SortOrder
    oauthId?: SortOrderInput | SortOrder
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    email?: StringFilter<"Users"> | string
    emailVerified?: BoolFilter<"Users"> | boolean
    name?: StringFilter<"Users"> | string
    password?: StringNullableFilter<"Users"> | string | null
    signature?: StringNullableFilter<"Users"> | string | null
    role?: StringFilter<"Users"> | string
    oauth?: StringNullableFilter<"Users"> | string | null
    oauthId?: StringNullableFilter<"Users"> | string | null
  }, "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    role?: SortOrder
    oauth?: SortOrderInput | SortOrder
    oauthId?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    email?: StringWithAggregatesFilter<"Users"> | string
    emailVerified?: BoolWithAggregatesFilter<"Users"> | boolean
    name?: StringWithAggregatesFilter<"Users"> | string
    password?: StringNullableWithAggregatesFilter<"Users"> | string | null
    signature?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role?: StringWithAggregatesFilter<"Users"> | string
    oauth?: StringNullableWithAggregatesFilter<"Users"> | string | null
    oauthId?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type UsersFilesWhereInput = {
    AND?: UsersFilesWhereInput | UsersFilesWhereInput[]
    OR?: UsersFilesWhereInput[]
    NOT?: UsersFilesWhereInput | UsersFilesWhereInput[]
    userId?: IntFilter<"UsersFiles"> | number
    fileId?: IntFilter<"UsersFiles"> | number
  }

  export type UsersFilesOrderByWithRelationInput = {
    userId?: SortOrder
    fileId?: SortOrder
  }

  export type UsersFilesWhereUniqueInput = Prisma.AtLeast<{
    userId_fileId?: UsersFilesUserIdFileIdCompoundUniqueInput
    AND?: UsersFilesWhereInput | UsersFilesWhereInput[]
    OR?: UsersFilesWhereInput[]
    NOT?: UsersFilesWhereInput | UsersFilesWhereInput[]
    userId?: IntFilter<"UsersFiles"> | number
    fileId?: IntFilter<"UsersFiles"> | number
  }, "userId_fileId">

  export type UsersFilesOrderByWithAggregationInput = {
    userId?: SortOrder
    fileId?: SortOrder
    _count?: UsersFilesCountOrderByAggregateInput
    _avg?: UsersFilesAvgOrderByAggregateInput
    _max?: UsersFilesMaxOrderByAggregateInput
    _min?: UsersFilesMinOrderByAggregateInput
    _sum?: UsersFilesSumOrderByAggregateInput
  }

  export type UsersFilesScalarWhereWithAggregatesInput = {
    AND?: UsersFilesScalarWhereWithAggregatesInput | UsersFilesScalarWhereWithAggregatesInput[]
    OR?: UsersFilesScalarWhereWithAggregatesInput[]
    NOT?: UsersFilesScalarWhereWithAggregatesInput | UsersFilesScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UsersFiles"> | number
    fileId?: IntWithAggregatesFilter<"UsersFiles"> | number
  }

  export type FlowersWhereInput = {
    AND?: FlowersWhereInput | FlowersWhereInput[]
    OR?: FlowersWhereInput[]
    NOT?: FlowersWhereInput | FlowersWhereInput[]
    id?: IntFilter<"Flowers"> | number
    color?: StringFilter<"Flowers"> | string
    name?: StringFilter<"Flowers"> | string
    price?: IntFilter<"Flowers"> | number
    varietyId?: IntFilter<"Flowers"> | number
    imgs?: FlowersAndFilesListRelationFilter
    history?: FlowersHistoryListRelationFilter
    farms?: FlowersFarmsAndFlowersListRelationFilter
    bouquets?: FlowersBouquetsAndFlowersListRelationFilter
    variety?: XOR<FlowersVarietyScalarRelationFilter, FlowersVarietyWhereInput>
  }

  export type FlowersOrderByWithRelationInput = {
    id?: SortOrder
    color?: SortOrder
    name?: SortOrder
    price?: SortOrder
    varietyId?: SortOrder
    imgs?: FlowersAndFilesOrderByRelationAggregateInput
    history?: FlowersHistoryOrderByRelationAggregateInput
    farms?: FlowersFarmsAndFlowersOrderByRelationAggregateInput
    bouquets?: FlowersBouquetsAndFlowersOrderByRelationAggregateInput
    variety?: FlowersVarietyOrderByWithRelationInput
  }

  export type FlowersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FlowersWhereInput | FlowersWhereInput[]
    OR?: FlowersWhereInput[]
    NOT?: FlowersWhereInput | FlowersWhereInput[]
    color?: StringFilter<"Flowers"> | string
    name?: StringFilter<"Flowers"> | string
    price?: IntFilter<"Flowers"> | number
    varietyId?: IntFilter<"Flowers"> | number
    imgs?: FlowersAndFilesListRelationFilter
    history?: FlowersHistoryListRelationFilter
    farms?: FlowersFarmsAndFlowersListRelationFilter
    bouquets?: FlowersBouquetsAndFlowersListRelationFilter
    variety?: XOR<FlowersVarietyScalarRelationFilter, FlowersVarietyWhereInput>
  }, "id">

  export type FlowersOrderByWithAggregationInput = {
    id?: SortOrder
    color?: SortOrder
    name?: SortOrder
    price?: SortOrder
    varietyId?: SortOrder
    _count?: FlowersCountOrderByAggregateInput
    _avg?: FlowersAvgOrderByAggregateInput
    _max?: FlowersMaxOrderByAggregateInput
    _min?: FlowersMinOrderByAggregateInput
    _sum?: FlowersSumOrderByAggregateInput
  }

  export type FlowersScalarWhereWithAggregatesInput = {
    AND?: FlowersScalarWhereWithAggregatesInput | FlowersScalarWhereWithAggregatesInput[]
    OR?: FlowersScalarWhereWithAggregatesInput[]
    NOT?: FlowersScalarWhereWithAggregatesInput | FlowersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Flowers"> | number
    color?: StringWithAggregatesFilter<"Flowers"> | string
    name?: StringWithAggregatesFilter<"Flowers"> | string
    price?: IntWithAggregatesFilter<"Flowers"> | number
    varietyId?: IntWithAggregatesFilter<"Flowers"> | number
  }

  export type FlowersVarietyWhereInput = {
    AND?: FlowersVarietyWhereInput | FlowersVarietyWhereInput[]
    OR?: FlowersVarietyWhereInput[]
    NOT?: FlowersVarietyWhereInput | FlowersVarietyWhereInput[]
    id?: IntFilter<"FlowersVariety"> | number
    title?: StringFilter<"FlowersVariety"> | string
    flowers?: FlowersListRelationFilter
  }

  export type FlowersVarietyOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    flowers?: FlowersOrderByRelationAggregateInput
  }

  export type FlowersVarietyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: FlowersVarietyWhereInput | FlowersVarietyWhereInput[]
    OR?: FlowersVarietyWhereInput[]
    NOT?: FlowersVarietyWhereInput | FlowersVarietyWhereInput[]
    flowers?: FlowersListRelationFilter
  }, "id" | "title">

  export type FlowersVarietyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    _count?: FlowersVarietyCountOrderByAggregateInput
    _avg?: FlowersVarietyAvgOrderByAggregateInput
    _max?: FlowersVarietyMaxOrderByAggregateInput
    _min?: FlowersVarietyMinOrderByAggregateInput
    _sum?: FlowersVarietySumOrderByAggregateInput
  }

  export type FlowersVarietyScalarWhereWithAggregatesInput = {
    AND?: FlowersVarietyScalarWhereWithAggregatesInput | FlowersVarietyScalarWhereWithAggregatesInput[]
    OR?: FlowersVarietyScalarWhereWithAggregatesInput[]
    NOT?: FlowersVarietyScalarWhereWithAggregatesInput | FlowersVarietyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FlowersVariety"> | number
    title?: StringWithAggregatesFilter<"FlowersVariety"> | string
  }

  export type FlowersHistoryWhereInput = {
    AND?: FlowersHistoryWhereInput | FlowersHistoryWhereInput[]
    OR?: FlowersHistoryWhereInput[]
    NOT?: FlowersHistoryWhereInput | FlowersHistoryWhereInput[]
    id?: IntFilter<"FlowersHistory"> | number
    flowersId?: IntFilter<"FlowersHistory"> | number
    date?: IntFilter<"FlowersHistory"> | number
    price?: IntFilter<"FlowersHistory"> | number
    flower?: XOR<FlowersScalarRelationFilter, FlowersWhereInput>
  }

  export type FlowersHistoryOrderByWithRelationInput = {
    id?: SortOrder
    flowersId?: SortOrder
    date?: SortOrder
    price?: SortOrder
    flower?: FlowersOrderByWithRelationInput
  }

  export type FlowersHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FlowersHistoryWhereInput | FlowersHistoryWhereInput[]
    OR?: FlowersHistoryWhereInput[]
    NOT?: FlowersHistoryWhereInput | FlowersHistoryWhereInput[]
    flowersId?: IntFilter<"FlowersHistory"> | number
    date?: IntFilter<"FlowersHistory"> | number
    price?: IntFilter<"FlowersHistory"> | number
    flower?: XOR<FlowersScalarRelationFilter, FlowersWhereInput>
  }, "id">

  export type FlowersHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    flowersId?: SortOrder
    date?: SortOrder
    price?: SortOrder
    _count?: FlowersHistoryCountOrderByAggregateInput
    _avg?: FlowersHistoryAvgOrderByAggregateInput
    _max?: FlowersHistoryMaxOrderByAggregateInput
    _min?: FlowersHistoryMinOrderByAggregateInput
    _sum?: FlowersHistorySumOrderByAggregateInput
  }

  export type FlowersHistoryScalarWhereWithAggregatesInput = {
    AND?: FlowersHistoryScalarWhereWithAggregatesInput | FlowersHistoryScalarWhereWithAggregatesInput[]
    OR?: FlowersHistoryScalarWhereWithAggregatesInput[]
    NOT?: FlowersHistoryScalarWhereWithAggregatesInput | FlowersHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FlowersHistory"> | number
    flowersId?: IntWithAggregatesFilter<"FlowersHistory"> | number
    date?: IntWithAggregatesFilter<"FlowersHistory"> | number
    price?: IntWithAggregatesFilter<"FlowersHistory"> | number
  }

  export type FlowersFarmsWhereInput = {
    AND?: FlowersFarmsWhereInput | FlowersFarmsWhereInput[]
    OR?: FlowersFarmsWhereInput[]
    NOT?: FlowersFarmsWhereInput | FlowersFarmsWhereInput[]
    id?: IntFilter<"FlowersFarms"> | number
    name?: StringFilter<"FlowersFarms"> | string
    country?: StringFilter<"FlowersFarms"> | string
    rate?: IntFilter<"FlowersFarms"> | number
    flowers?: FlowersFarmsAndFlowersListRelationFilter
  }

  export type FlowersFarmsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    rate?: SortOrder
    flowers?: FlowersFarmsAndFlowersOrderByRelationAggregateInput
  }

  export type FlowersFarmsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FlowersFarmsWhereInput | FlowersFarmsWhereInput[]
    OR?: FlowersFarmsWhereInput[]
    NOT?: FlowersFarmsWhereInput | FlowersFarmsWhereInput[]
    name?: StringFilter<"FlowersFarms"> | string
    country?: StringFilter<"FlowersFarms"> | string
    rate?: IntFilter<"FlowersFarms"> | number
    flowers?: FlowersFarmsAndFlowersListRelationFilter
  }, "id">

  export type FlowersFarmsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    rate?: SortOrder
    _count?: FlowersFarmsCountOrderByAggregateInput
    _avg?: FlowersFarmsAvgOrderByAggregateInput
    _max?: FlowersFarmsMaxOrderByAggregateInput
    _min?: FlowersFarmsMinOrderByAggregateInput
    _sum?: FlowersFarmsSumOrderByAggregateInput
  }

  export type FlowersFarmsScalarWhereWithAggregatesInput = {
    AND?: FlowersFarmsScalarWhereWithAggregatesInput | FlowersFarmsScalarWhereWithAggregatesInput[]
    OR?: FlowersFarmsScalarWhereWithAggregatesInput[]
    NOT?: FlowersFarmsScalarWhereWithAggregatesInput | FlowersFarmsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FlowersFarms"> | number
    name?: StringWithAggregatesFilter<"FlowersFarms"> | string
    country?: StringWithAggregatesFilter<"FlowersFarms"> | string
    rate?: IntWithAggregatesFilter<"FlowersFarms"> | number
  }

  export type FlowersFarmsAndFlowersWhereInput = {
    AND?: FlowersFarmsAndFlowersWhereInput | FlowersFarmsAndFlowersWhereInput[]
    OR?: FlowersFarmsAndFlowersWhereInput[]
    NOT?: FlowersFarmsAndFlowersWhereInput | FlowersFarmsAndFlowersWhereInput[]
    flowersId?: IntFilter<"FlowersFarmsAndFlowers"> | number
    flowersFarmsId?: IntFilter<"FlowersFarmsAndFlowers"> | number
    flowers?: XOR<FlowersScalarRelationFilter, FlowersWhereInput>
    flowersFarms?: XOR<FlowersFarmsScalarRelationFilter, FlowersFarmsWhereInput>
  }

  export type FlowersFarmsAndFlowersOrderByWithRelationInput = {
    flowersId?: SortOrder
    flowersFarmsId?: SortOrder
    flowers?: FlowersOrderByWithRelationInput
    flowersFarms?: FlowersFarmsOrderByWithRelationInput
  }

  export type FlowersFarmsAndFlowersWhereUniqueInput = Prisma.AtLeast<{
    flowersId_flowersFarmsId?: FlowersFarmsAndFlowersFlowersIdFlowersFarmsIdCompoundUniqueInput
    AND?: FlowersFarmsAndFlowersWhereInput | FlowersFarmsAndFlowersWhereInput[]
    OR?: FlowersFarmsAndFlowersWhereInput[]
    NOT?: FlowersFarmsAndFlowersWhereInput | FlowersFarmsAndFlowersWhereInput[]
    flowersId?: IntFilter<"FlowersFarmsAndFlowers"> | number
    flowersFarmsId?: IntFilter<"FlowersFarmsAndFlowers"> | number
    flowers?: XOR<FlowersScalarRelationFilter, FlowersWhereInput>
    flowersFarms?: XOR<FlowersFarmsScalarRelationFilter, FlowersFarmsWhereInput>
  }, "flowersId_flowersFarmsId">

  export type FlowersFarmsAndFlowersOrderByWithAggregationInput = {
    flowersId?: SortOrder
    flowersFarmsId?: SortOrder
    _count?: FlowersFarmsAndFlowersCountOrderByAggregateInput
    _avg?: FlowersFarmsAndFlowersAvgOrderByAggregateInput
    _max?: FlowersFarmsAndFlowersMaxOrderByAggregateInput
    _min?: FlowersFarmsAndFlowersMinOrderByAggregateInput
    _sum?: FlowersFarmsAndFlowersSumOrderByAggregateInput
  }

  export type FlowersFarmsAndFlowersScalarWhereWithAggregatesInput = {
    AND?: FlowersFarmsAndFlowersScalarWhereWithAggregatesInput | FlowersFarmsAndFlowersScalarWhereWithAggregatesInput[]
    OR?: FlowersFarmsAndFlowersScalarWhereWithAggregatesInput[]
    NOT?: FlowersFarmsAndFlowersScalarWhereWithAggregatesInput | FlowersFarmsAndFlowersScalarWhereWithAggregatesInput[]
    flowersId?: IntWithAggregatesFilter<"FlowersFarmsAndFlowers"> | number
    flowersFarmsId?: IntWithAggregatesFilter<"FlowersFarmsAndFlowers"> | number
  }

  export type FlowersBouquetsWhereInput = {
    AND?: FlowersBouquetsWhereInput | FlowersBouquetsWhereInput[]
    OR?: FlowersBouquetsWhereInput[]
    NOT?: FlowersBouquetsWhereInput | FlowersBouquetsWhereInput[]
    id?: IntFilter<"FlowersBouquets"> | number
    name?: StringFilter<"FlowersBouquets"> | string
    price?: IntFilter<"FlowersBouquets"> | number
    flowers?: FlowersBouquetsAndFlowersListRelationFilter
  }

  export type FlowersBouquetsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    flowers?: FlowersBouquetsAndFlowersOrderByRelationAggregateInput
  }

  export type FlowersBouquetsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FlowersBouquetsWhereInput | FlowersBouquetsWhereInput[]
    OR?: FlowersBouquetsWhereInput[]
    NOT?: FlowersBouquetsWhereInput | FlowersBouquetsWhereInput[]
    name?: StringFilter<"FlowersBouquets"> | string
    price?: IntFilter<"FlowersBouquets"> | number
    flowers?: FlowersBouquetsAndFlowersListRelationFilter
  }, "id">

  export type FlowersBouquetsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    _count?: FlowersBouquetsCountOrderByAggregateInput
    _avg?: FlowersBouquetsAvgOrderByAggregateInput
    _max?: FlowersBouquetsMaxOrderByAggregateInput
    _min?: FlowersBouquetsMinOrderByAggregateInput
    _sum?: FlowersBouquetsSumOrderByAggregateInput
  }

  export type FlowersBouquetsScalarWhereWithAggregatesInput = {
    AND?: FlowersBouquetsScalarWhereWithAggregatesInput | FlowersBouquetsScalarWhereWithAggregatesInput[]
    OR?: FlowersBouquetsScalarWhereWithAggregatesInput[]
    NOT?: FlowersBouquetsScalarWhereWithAggregatesInput | FlowersBouquetsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FlowersBouquets"> | number
    name?: StringWithAggregatesFilter<"FlowersBouquets"> | string
    price?: IntWithAggregatesFilter<"FlowersBouquets"> | number
  }

  export type FlowersBouquetsAndFlowersWhereInput = {
    AND?: FlowersBouquetsAndFlowersWhereInput | FlowersBouquetsAndFlowersWhereInput[]
    OR?: FlowersBouquetsAndFlowersWhereInput[]
    NOT?: FlowersBouquetsAndFlowersWhereInput | FlowersBouquetsAndFlowersWhereInput[]
    flowersId?: IntFilter<"FlowersBouquetsAndFlowers"> | number
    flowersBouquetsId?: IntFilter<"FlowersBouquetsAndFlowers"> | number
    flowers?: XOR<FlowersScalarRelationFilter, FlowersWhereInput>
    flowersBouquets?: XOR<FlowersBouquetsScalarRelationFilter, FlowersBouquetsWhereInput>
  }

  export type FlowersBouquetsAndFlowersOrderByWithRelationInput = {
    flowersId?: SortOrder
    flowersBouquetsId?: SortOrder
    flowers?: FlowersOrderByWithRelationInput
    flowersBouquets?: FlowersBouquetsOrderByWithRelationInput
  }

  export type FlowersBouquetsAndFlowersWhereUniqueInput = Prisma.AtLeast<{
    flowersId_flowersBouquetsId?: FlowersBouquetsAndFlowersFlowersIdFlowersBouquetsIdCompoundUniqueInput
    AND?: FlowersBouquetsAndFlowersWhereInput | FlowersBouquetsAndFlowersWhereInput[]
    OR?: FlowersBouquetsAndFlowersWhereInput[]
    NOT?: FlowersBouquetsAndFlowersWhereInput | FlowersBouquetsAndFlowersWhereInput[]
    flowersId?: IntFilter<"FlowersBouquetsAndFlowers"> | number
    flowersBouquetsId?: IntFilter<"FlowersBouquetsAndFlowers"> | number
    flowers?: XOR<FlowersScalarRelationFilter, FlowersWhereInput>
    flowersBouquets?: XOR<FlowersBouquetsScalarRelationFilter, FlowersBouquetsWhereInput>
  }, "flowersId_flowersBouquetsId">

  export type FlowersBouquetsAndFlowersOrderByWithAggregationInput = {
    flowersId?: SortOrder
    flowersBouquetsId?: SortOrder
    _count?: FlowersBouquetsAndFlowersCountOrderByAggregateInput
    _avg?: FlowersBouquetsAndFlowersAvgOrderByAggregateInput
    _max?: FlowersBouquetsAndFlowersMaxOrderByAggregateInput
    _min?: FlowersBouquetsAndFlowersMinOrderByAggregateInput
    _sum?: FlowersBouquetsAndFlowersSumOrderByAggregateInput
  }

  export type FlowersBouquetsAndFlowersScalarWhereWithAggregatesInput = {
    AND?: FlowersBouquetsAndFlowersScalarWhereWithAggregatesInput | FlowersBouquetsAndFlowersScalarWhereWithAggregatesInput[]
    OR?: FlowersBouquetsAndFlowersScalarWhereWithAggregatesInput[]
    NOT?: FlowersBouquetsAndFlowersScalarWhereWithAggregatesInput | FlowersBouquetsAndFlowersScalarWhereWithAggregatesInput[]
    flowersId?: IntWithAggregatesFilter<"FlowersBouquetsAndFlowers"> | number
    flowersBouquetsId?: IntWithAggregatesFilter<"FlowersBouquetsAndFlowers"> | number
  }

  export type FlowersAndFilesWhereInput = {
    AND?: FlowersAndFilesWhereInput | FlowersAndFilesWhereInput[]
    OR?: FlowersAndFilesWhereInput[]
    NOT?: FlowersAndFilesWhereInput | FlowersAndFilesWhereInput[]
    flowersId?: IntFilter<"FlowersAndFiles"> | number
    publicFilesId?: IntFilter<"FlowersAndFiles"> | number
    flowers?: XOR<FlowersScalarRelationFilter, FlowersWhereInput>
    publicFiles?: XOR<PublicFilesScalarRelationFilter, PublicFilesWhereInput>
  }

  export type FlowersAndFilesOrderByWithRelationInput = {
    flowersId?: SortOrder
    publicFilesId?: SortOrder
    flowers?: FlowersOrderByWithRelationInput
    publicFiles?: PublicFilesOrderByWithRelationInput
  }

  export type FlowersAndFilesWhereUniqueInput = Prisma.AtLeast<{
    flowersId_publicFilesId?: FlowersAndFilesFlowersIdPublicFilesIdCompoundUniqueInput
    AND?: FlowersAndFilesWhereInput | FlowersAndFilesWhereInput[]
    OR?: FlowersAndFilesWhereInput[]
    NOT?: FlowersAndFilesWhereInput | FlowersAndFilesWhereInput[]
    flowersId?: IntFilter<"FlowersAndFiles"> | number
    publicFilesId?: IntFilter<"FlowersAndFiles"> | number
    flowers?: XOR<FlowersScalarRelationFilter, FlowersWhereInput>
    publicFiles?: XOR<PublicFilesScalarRelationFilter, PublicFilesWhereInput>
  }, "flowersId_publicFilesId">

  export type FlowersAndFilesOrderByWithAggregationInput = {
    flowersId?: SortOrder
    publicFilesId?: SortOrder
    _count?: FlowersAndFilesCountOrderByAggregateInput
    _avg?: FlowersAndFilesAvgOrderByAggregateInput
    _max?: FlowersAndFilesMaxOrderByAggregateInput
    _min?: FlowersAndFilesMinOrderByAggregateInput
    _sum?: FlowersAndFilesSumOrderByAggregateInput
  }

  export type FlowersAndFilesScalarWhereWithAggregatesInput = {
    AND?: FlowersAndFilesScalarWhereWithAggregatesInput | FlowersAndFilesScalarWhereWithAggregatesInput[]
    OR?: FlowersAndFilesScalarWhereWithAggregatesInput[]
    NOT?: FlowersAndFilesScalarWhereWithAggregatesInput | FlowersAndFilesScalarWhereWithAggregatesInput[]
    flowersId?: IntWithAggregatesFilter<"FlowersAndFiles"> | number
    publicFilesId?: IntWithAggregatesFilter<"FlowersAndFiles"> | number
  }

  export type PublicFilesWhereInput = {
    AND?: PublicFilesWhereInput | PublicFilesWhereInput[]
    OR?: PublicFilesWhereInput[]
    NOT?: PublicFilesWhereInput | PublicFilesWhereInput[]
    id?: IntFilter<"PublicFiles"> | number
    name?: StringFilter<"PublicFiles"> | string
    size?: IntFilter<"PublicFiles"> | number
    uploadAt?: DateTimeFilter<"PublicFiles"> | Date | string
    flowers?: FlowersAndFilesListRelationFilter
  }

  export type PublicFilesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    uploadAt?: SortOrder
    flowers?: FlowersAndFilesOrderByRelationAggregateInput
  }

  export type PublicFilesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PublicFilesWhereInput | PublicFilesWhereInput[]
    OR?: PublicFilesWhereInput[]
    NOT?: PublicFilesWhereInput | PublicFilesWhereInput[]
    size?: IntFilter<"PublicFiles"> | number
    uploadAt?: DateTimeFilter<"PublicFiles"> | Date | string
    flowers?: FlowersAndFilesListRelationFilter
  }, "id" | "name">

  export type PublicFilesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    uploadAt?: SortOrder
    _count?: PublicFilesCountOrderByAggregateInput
    _avg?: PublicFilesAvgOrderByAggregateInput
    _max?: PublicFilesMaxOrderByAggregateInput
    _min?: PublicFilesMinOrderByAggregateInput
    _sum?: PublicFilesSumOrderByAggregateInput
  }

  export type PublicFilesScalarWhereWithAggregatesInput = {
    AND?: PublicFilesScalarWhereWithAggregatesInput | PublicFilesScalarWhereWithAggregatesInput[]
    OR?: PublicFilesScalarWhereWithAggregatesInput[]
    NOT?: PublicFilesScalarWhereWithAggregatesInput | PublicFilesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PublicFiles"> | number
    name?: StringWithAggregatesFilter<"PublicFiles"> | string
    size?: IntWithAggregatesFilter<"PublicFiles"> | number
    uploadAt?: DateTimeWithAggregatesFilter<"PublicFiles"> | Date | string
  }

  export type PrivateFilesWhereInput = {
    AND?: PrivateFilesWhereInput | PrivateFilesWhereInput[]
    OR?: PrivateFilesWhereInput[]
    NOT?: PrivateFilesWhereInput | PrivateFilesWhereInput[]
    id?: IntFilter<"PrivateFiles"> | number
    name?: StringFilter<"PrivateFiles"> | string
    size?: IntFilter<"PrivateFiles"> | number
    uploadAt?: DateTimeFilter<"PrivateFiles"> | Date | string
  }

  export type PrivateFilesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    uploadAt?: SortOrder
  }

  export type PrivateFilesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PrivateFilesWhereInput | PrivateFilesWhereInput[]
    OR?: PrivateFilesWhereInput[]
    NOT?: PrivateFilesWhereInput | PrivateFilesWhereInput[]
    size?: IntFilter<"PrivateFiles"> | number
    uploadAt?: DateTimeFilter<"PrivateFiles"> | Date | string
  }, "id" | "name">

  export type PrivateFilesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    uploadAt?: SortOrder
    _count?: PrivateFilesCountOrderByAggregateInput
    _avg?: PrivateFilesAvgOrderByAggregateInput
    _max?: PrivateFilesMaxOrderByAggregateInput
    _min?: PrivateFilesMinOrderByAggregateInput
    _sum?: PrivateFilesSumOrderByAggregateInput
  }

  export type PrivateFilesScalarWhereWithAggregatesInput = {
    AND?: PrivateFilesScalarWhereWithAggregatesInput | PrivateFilesScalarWhereWithAggregatesInput[]
    OR?: PrivateFilesScalarWhereWithAggregatesInput[]
    NOT?: PrivateFilesScalarWhereWithAggregatesInput | PrivateFilesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PrivateFiles"> | number
    name?: StringWithAggregatesFilter<"PrivateFiles"> | string
    size?: IntWithAggregatesFilter<"PrivateFiles"> | number
    uploadAt?: DateTimeWithAggregatesFilter<"PrivateFiles"> | Date | string
  }

  export type UsersCreateInput = {
    email: string
    emailVerified?: boolean
    name: string
    password?: string | null
    signature?: string | null
    role?: string
    oauth?: string | null
    oauthId?: string | null
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    email: string
    emailVerified?: boolean
    name: string
    password?: string | null
    signature?: string | null
    role?: string
    oauth?: string | null
    oauthId?: string | null
  }

  export type UsersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauth?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauth?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersCreateManyInput = {
    id?: number
    email: string
    emailVerified?: boolean
    name: string
    password?: string | null
    signature?: string | null
    role?: string
    oauth?: string | null
    oauthId?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauth?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauth?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersFilesCreateInput = {
    userId: number
    fileId: number
  }

  export type UsersFilesUncheckedCreateInput = {
    userId: number
    fileId: number
  }

  export type UsersFilesUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    fileId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersFilesUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    fileId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersFilesCreateManyInput = {
    userId: number
    fileId: number
  }

  export type UsersFilesUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    fileId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersFilesUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    fileId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersCreateInput = {
    color: string
    name: string
    price: number
    imgs?: FlowersAndFilesCreateNestedManyWithoutFlowersInput
    history?: FlowersHistoryCreateNestedManyWithoutFlowerInput
    farms?: FlowersFarmsAndFlowersCreateNestedManyWithoutFlowersInput
    bouquets?: FlowersBouquetsAndFlowersCreateNestedManyWithoutFlowersInput
    variety: FlowersVarietyCreateNestedOneWithoutFlowersInput
  }

  export type FlowersUncheckedCreateInput = {
    id?: number
    color: string
    name: string
    price: number
    varietyId: number
    imgs?: FlowersAndFilesUncheckedCreateNestedManyWithoutFlowersInput
    history?: FlowersHistoryUncheckedCreateNestedManyWithoutFlowerInput
    farms?: FlowersFarmsAndFlowersUncheckedCreateNestedManyWithoutFlowersInput
    bouquets?: FlowersBouquetsAndFlowersUncheckedCreateNestedManyWithoutFlowersInput
  }

  export type FlowersUpdateInput = {
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imgs?: FlowersAndFilesUpdateManyWithoutFlowersNestedInput
    history?: FlowersHistoryUpdateManyWithoutFlowerNestedInput
    farms?: FlowersFarmsAndFlowersUpdateManyWithoutFlowersNestedInput
    bouquets?: FlowersBouquetsAndFlowersUpdateManyWithoutFlowersNestedInput
    variety?: FlowersVarietyUpdateOneRequiredWithoutFlowersNestedInput
  }

  export type FlowersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    varietyId?: IntFieldUpdateOperationsInput | number
    imgs?: FlowersAndFilesUncheckedUpdateManyWithoutFlowersNestedInput
    history?: FlowersHistoryUncheckedUpdateManyWithoutFlowerNestedInput
    farms?: FlowersFarmsAndFlowersUncheckedUpdateManyWithoutFlowersNestedInput
    bouquets?: FlowersBouquetsAndFlowersUncheckedUpdateManyWithoutFlowersNestedInput
  }

  export type FlowersCreateManyInput = {
    id?: number
    color: string
    name: string
    price: number
    varietyId: number
  }

  export type FlowersUpdateManyMutationInput = {
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    varietyId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersVarietyCreateInput = {
    title: string
    flowers?: FlowersCreateNestedManyWithoutVarietyInput
  }

  export type FlowersVarietyUncheckedCreateInput = {
    id?: number
    title: string
    flowers?: FlowersUncheckedCreateNestedManyWithoutVarietyInput
  }

  export type FlowersVarietyUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    flowers?: FlowersUpdateManyWithoutVarietyNestedInput
  }

  export type FlowersVarietyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    flowers?: FlowersUncheckedUpdateManyWithoutVarietyNestedInput
  }

  export type FlowersVarietyCreateManyInput = {
    id?: number
    title: string
  }

  export type FlowersVarietyUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type FlowersVarietyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type FlowersHistoryCreateInput = {
    date: number
    price: number
    flower: FlowersCreateNestedOneWithoutHistoryInput
  }

  export type FlowersHistoryUncheckedCreateInput = {
    id?: number
    flowersId: number
    date: number
    price: number
  }

  export type FlowersHistoryUpdateInput = {
    date?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    flower?: FlowersUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type FlowersHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowersId?: IntFieldUpdateOperationsInput | number
    date?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersHistoryCreateManyInput = {
    id?: number
    flowersId: number
    date: number
    price: number
  }

  export type FlowersHistoryUpdateManyMutationInput = {
    date?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowersId?: IntFieldUpdateOperationsInput | number
    date?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersFarmsCreateInput = {
    name: string
    country: string
    rate: number
    flowers?: FlowersFarmsAndFlowersCreateNestedManyWithoutFlowersFarmsInput
  }

  export type FlowersFarmsUncheckedCreateInput = {
    id?: number
    name: string
    country: string
    rate: number
    flowers?: FlowersFarmsAndFlowersUncheckedCreateNestedManyWithoutFlowersFarmsInput
  }

  export type FlowersFarmsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    flowers?: FlowersFarmsAndFlowersUpdateManyWithoutFlowersFarmsNestedInput
  }

  export type FlowersFarmsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    flowers?: FlowersFarmsAndFlowersUncheckedUpdateManyWithoutFlowersFarmsNestedInput
  }

  export type FlowersFarmsCreateManyInput = {
    id?: number
    name: string
    country: string
    rate: number
  }

  export type FlowersFarmsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersFarmsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersFarmsAndFlowersCreateInput = {
    flowers: FlowersCreateNestedOneWithoutFarmsInput
    flowersFarms: FlowersFarmsCreateNestedOneWithoutFlowersInput
  }

  export type FlowersFarmsAndFlowersUncheckedCreateInput = {
    flowersId: number
    flowersFarmsId: number
  }

  export type FlowersFarmsAndFlowersUpdateInput = {
    flowers?: FlowersUpdateOneRequiredWithoutFarmsNestedInput
    flowersFarms?: FlowersFarmsUpdateOneRequiredWithoutFlowersNestedInput
  }

  export type FlowersFarmsAndFlowersUncheckedUpdateInput = {
    flowersId?: IntFieldUpdateOperationsInput | number
    flowersFarmsId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersFarmsAndFlowersCreateManyInput = {
    flowersId: number
    flowersFarmsId: number
  }

  export type FlowersFarmsAndFlowersUpdateManyMutationInput = {

  }

  export type FlowersFarmsAndFlowersUncheckedUpdateManyInput = {
    flowersId?: IntFieldUpdateOperationsInput | number
    flowersFarmsId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersBouquetsCreateInput = {
    name: string
    price: number
    flowers?: FlowersBouquetsAndFlowersCreateNestedManyWithoutFlowersBouquetsInput
  }

  export type FlowersBouquetsUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    flowers?: FlowersBouquetsAndFlowersUncheckedCreateNestedManyWithoutFlowersBouquetsInput
  }

  export type FlowersBouquetsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    flowers?: FlowersBouquetsAndFlowersUpdateManyWithoutFlowersBouquetsNestedInput
  }

  export type FlowersBouquetsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    flowers?: FlowersBouquetsAndFlowersUncheckedUpdateManyWithoutFlowersBouquetsNestedInput
  }

  export type FlowersBouquetsCreateManyInput = {
    id?: number
    name: string
    price: number
  }

  export type FlowersBouquetsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersBouquetsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersBouquetsAndFlowersCreateInput = {
    flowers: FlowersCreateNestedOneWithoutBouquetsInput
    flowersBouquets: FlowersBouquetsCreateNestedOneWithoutFlowersInput
  }

  export type FlowersBouquetsAndFlowersUncheckedCreateInput = {
    flowersId: number
    flowersBouquetsId: number
  }

  export type FlowersBouquetsAndFlowersUpdateInput = {
    flowers?: FlowersUpdateOneRequiredWithoutBouquetsNestedInput
    flowersBouquets?: FlowersBouquetsUpdateOneRequiredWithoutFlowersNestedInput
  }

  export type FlowersBouquetsAndFlowersUncheckedUpdateInput = {
    flowersId?: IntFieldUpdateOperationsInput | number
    flowersBouquetsId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersBouquetsAndFlowersCreateManyInput = {
    flowersId: number
    flowersBouquetsId: number
  }

  export type FlowersBouquetsAndFlowersUpdateManyMutationInput = {

  }

  export type FlowersBouquetsAndFlowersUncheckedUpdateManyInput = {
    flowersId?: IntFieldUpdateOperationsInput | number
    flowersBouquetsId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersAndFilesCreateInput = {
    flowers: FlowersCreateNestedOneWithoutImgsInput
    publicFiles: PublicFilesCreateNestedOneWithoutFlowersInput
  }

  export type FlowersAndFilesUncheckedCreateInput = {
    flowersId: number
    publicFilesId: number
  }

  export type FlowersAndFilesUpdateInput = {
    flowers?: FlowersUpdateOneRequiredWithoutImgsNestedInput
    publicFiles?: PublicFilesUpdateOneRequiredWithoutFlowersNestedInput
  }

  export type FlowersAndFilesUncheckedUpdateInput = {
    flowersId?: IntFieldUpdateOperationsInput | number
    publicFilesId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersAndFilesCreateManyInput = {
    flowersId: number
    publicFilesId: number
  }

  export type FlowersAndFilesUpdateManyMutationInput = {

  }

  export type FlowersAndFilesUncheckedUpdateManyInput = {
    flowersId?: IntFieldUpdateOperationsInput | number
    publicFilesId?: IntFieldUpdateOperationsInput | number
  }

  export type PublicFilesCreateInput = {
    name: string
    size: number
    uploadAt?: Date | string
    flowers?: FlowersAndFilesCreateNestedManyWithoutPublicFilesInput
  }

  export type PublicFilesUncheckedCreateInput = {
    id?: number
    name: string
    size: number
    uploadAt?: Date | string
    flowers?: FlowersAndFilesUncheckedCreateNestedManyWithoutPublicFilesInput
  }

  export type PublicFilesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flowers?: FlowersAndFilesUpdateManyWithoutPublicFilesNestedInput
  }

  export type PublicFilesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flowers?: FlowersAndFilesUncheckedUpdateManyWithoutPublicFilesNestedInput
  }

  export type PublicFilesCreateManyInput = {
    id?: number
    name: string
    size: number
    uploadAt?: Date | string
  }

  export type PublicFilesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicFilesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateFilesCreateInput = {
    name: string
    size: number
    uploadAt?: Date | string
  }

  export type PrivateFilesUncheckedCreateInput = {
    id?: number
    name: string
    size: number
    uploadAt?: Date | string
  }

  export type PrivateFilesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateFilesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateFilesCreateManyInput = {
    id?: number
    name: string
    size: number
    uploadAt?: Date | string
  }

  export type PrivateFilesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateFilesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    password?: SortOrder
    signature?: SortOrder
    role?: SortOrder
    oauth?: SortOrder
    oauthId?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    password?: SortOrder
    signature?: SortOrder
    role?: SortOrder
    oauth?: SortOrder
    oauthId?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    password?: SortOrder
    signature?: SortOrder
    role?: SortOrder
    oauth?: SortOrder
    oauthId?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UsersFilesUserIdFileIdCompoundUniqueInput = {
    userId: number
    fileId: number
  }

  export type UsersFilesCountOrderByAggregateInput = {
    userId?: SortOrder
    fileId?: SortOrder
  }

  export type UsersFilesAvgOrderByAggregateInput = {
    userId?: SortOrder
    fileId?: SortOrder
  }

  export type UsersFilesMaxOrderByAggregateInput = {
    userId?: SortOrder
    fileId?: SortOrder
  }

  export type UsersFilesMinOrderByAggregateInput = {
    userId?: SortOrder
    fileId?: SortOrder
  }

  export type UsersFilesSumOrderByAggregateInput = {
    userId?: SortOrder
    fileId?: SortOrder
  }

  export type FlowersAndFilesListRelationFilter = {
    every?: FlowersAndFilesWhereInput
    some?: FlowersAndFilesWhereInput
    none?: FlowersAndFilesWhereInput
  }

  export type FlowersHistoryListRelationFilter = {
    every?: FlowersHistoryWhereInput
    some?: FlowersHistoryWhereInput
    none?: FlowersHistoryWhereInput
  }

  export type FlowersFarmsAndFlowersListRelationFilter = {
    every?: FlowersFarmsAndFlowersWhereInput
    some?: FlowersFarmsAndFlowersWhereInput
    none?: FlowersFarmsAndFlowersWhereInput
  }

  export type FlowersBouquetsAndFlowersListRelationFilter = {
    every?: FlowersBouquetsAndFlowersWhereInput
    some?: FlowersBouquetsAndFlowersWhereInput
    none?: FlowersBouquetsAndFlowersWhereInput
  }

  export type FlowersVarietyScalarRelationFilter = {
    is?: FlowersVarietyWhereInput
    isNot?: FlowersVarietyWhereInput
  }

  export type FlowersAndFilesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowersHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowersFarmsAndFlowersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowersBouquetsAndFlowersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowersCountOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    name?: SortOrder
    price?: SortOrder
    varietyId?: SortOrder
  }

  export type FlowersAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    varietyId?: SortOrder
  }

  export type FlowersMaxOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    name?: SortOrder
    price?: SortOrder
    varietyId?: SortOrder
  }

  export type FlowersMinOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    name?: SortOrder
    price?: SortOrder
    varietyId?: SortOrder
  }

  export type FlowersSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    varietyId?: SortOrder
  }

  export type FlowersListRelationFilter = {
    every?: FlowersWhereInput
    some?: FlowersWhereInput
    none?: FlowersWhereInput
  }

  export type FlowersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowersVarietyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type FlowersVarietyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FlowersVarietyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type FlowersVarietyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type FlowersVarietySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FlowersScalarRelationFilter = {
    is?: FlowersWhereInput
    isNot?: FlowersWhereInput
  }

  export type FlowersHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    flowersId?: SortOrder
    date?: SortOrder
    price?: SortOrder
  }

  export type FlowersHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    flowersId?: SortOrder
    date?: SortOrder
    price?: SortOrder
  }

  export type FlowersHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    flowersId?: SortOrder
    date?: SortOrder
    price?: SortOrder
  }

  export type FlowersHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    flowersId?: SortOrder
    date?: SortOrder
    price?: SortOrder
  }

  export type FlowersHistorySumOrderByAggregateInput = {
    id?: SortOrder
    flowersId?: SortOrder
    date?: SortOrder
    price?: SortOrder
  }

  export type FlowersFarmsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    rate?: SortOrder
  }

  export type FlowersFarmsAvgOrderByAggregateInput = {
    id?: SortOrder
    rate?: SortOrder
  }

  export type FlowersFarmsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    rate?: SortOrder
  }

  export type FlowersFarmsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    rate?: SortOrder
  }

  export type FlowersFarmsSumOrderByAggregateInput = {
    id?: SortOrder
    rate?: SortOrder
  }

  export type FlowersFarmsScalarRelationFilter = {
    is?: FlowersFarmsWhereInput
    isNot?: FlowersFarmsWhereInput
  }

  export type FlowersFarmsAndFlowersFlowersIdFlowersFarmsIdCompoundUniqueInput = {
    flowersId: number
    flowersFarmsId: number
  }

  export type FlowersFarmsAndFlowersCountOrderByAggregateInput = {
    flowersId?: SortOrder
    flowersFarmsId?: SortOrder
  }

  export type FlowersFarmsAndFlowersAvgOrderByAggregateInput = {
    flowersId?: SortOrder
    flowersFarmsId?: SortOrder
  }

  export type FlowersFarmsAndFlowersMaxOrderByAggregateInput = {
    flowersId?: SortOrder
    flowersFarmsId?: SortOrder
  }

  export type FlowersFarmsAndFlowersMinOrderByAggregateInput = {
    flowersId?: SortOrder
    flowersFarmsId?: SortOrder
  }

  export type FlowersFarmsAndFlowersSumOrderByAggregateInput = {
    flowersId?: SortOrder
    flowersFarmsId?: SortOrder
  }

  export type FlowersBouquetsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type FlowersBouquetsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type FlowersBouquetsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type FlowersBouquetsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type FlowersBouquetsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type FlowersBouquetsScalarRelationFilter = {
    is?: FlowersBouquetsWhereInput
    isNot?: FlowersBouquetsWhereInput
  }

  export type FlowersBouquetsAndFlowersFlowersIdFlowersBouquetsIdCompoundUniqueInput = {
    flowersId: number
    flowersBouquetsId: number
  }

  export type FlowersBouquetsAndFlowersCountOrderByAggregateInput = {
    flowersId?: SortOrder
    flowersBouquetsId?: SortOrder
  }

  export type FlowersBouquetsAndFlowersAvgOrderByAggregateInput = {
    flowersId?: SortOrder
    flowersBouquetsId?: SortOrder
  }

  export type FlowersBouquetsAndFlowersMaxOrderByAggregateInput = {
    flowersId?: SortOrder
    flowersBouquetsId?: SortOrder
  }

  export type FlowersBouquetsAndFlowersMinOrderByAggregateInput = {
    flowersId?: SortOrder
    flowersBouquetsId?: SortOrder
  }

  export type FlowersBouquetsAndFlowersSumOrderByAggregateInput = {
    flowersId?: SortOrder
    flowersBouquetsId?: SortOrder
  }

  export type PublicFilesScalarRelationFilter = {
    is?: PublicFilesWhereInput
    isNot?: PublicFilesWhereInput
  }

  export type FlowersAndFilesFlowersIdPublicFilesIdCompoundUniqueInput = {
    flowersId: number
    publicFilesId: number
  }

  export type FlowersAndFilesCountOrderByAggregateInput = {
    flowersId?: SortOrder
    publicFilesId?: SortOrder
  }

  export type FlowersAndFilesAvgOrderByAggregateInput = {
    flowersId?: SortOrder
    publicFilesId?: SortOrder
  }

  export type FlowersAndFilesMaxOrderByAggregateInput = {
    flowersId?: SortOrder
    publicFilesId?: SortOrder
  }

  export type FlowersAndFilesMinOrderByAggregateInput = {
    flowersId?: SortOrder
    publicFilesId?: SortOrder
  }

  export type FlowersAndFilesSumOrderByAggregateInput = {
    flowersId?: SortOrder
    publicFilesId?: SortOrder
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

  export type PublicFilesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    uploadAt?: SortOrder
  }

  export type PublicFilesAvgOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type PublicFilesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    uploadAt?: SortOrder
  }

  export type PublicFilesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    uploadAt?: SortOrder
  }

  export type PublicFilesSumOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
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

  export type PrivateFilesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    uploadAt?: SortOrder
  }

  export type PrivateFilesAvgOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type PrivateFilesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    uploadAt?: SortOrder
  }

  export type PrivateFilesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    uploadAt?: SortOrder
  }

  export type PrivateFilesSumOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FlowersAndFilesCreateNestedManyWithoutFlowersInput = {
    create?: XOR<FlowersAndFilesCreateWithoutFlowersInput, FlowersAndFilesUncheckedCreateWithoutFlowersInput> | FlowersAndFilesCreateWithoutFlowersInput[] | FlowersAndFilesUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: FlowersAndFilesCreateOrConnectWithoutFlowersInput | FlowersAndFilesCreateOrConnectWithoutFlowersInput[]
    createMany?: FlowersAndFilesCreateManyFlowersInputEnvelope
    connect?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
  }

  export type FlowersHistoryCreateNestedManyWithoutFlowerInput = {
    create?: XOR<FlowersHistoryCreateWithoutFlowerInput, FlowersHistoryUncheckedCreateWithoutFlowerInput> | FlowersHistoryCreateWithoutFlowerInput[] | FlowersHistoryUncheckedCreateWithoutFlowerInput[]
    connectOrCreate?: FlowersHistoryCreateOrConnectWithoutFlowerInput | FlowersHistoryCreateOrConnectWithoutFlowerInput[]
    createMany?: FlowersHistoryCreateManyFlowerInputEnvelope
    connect?: FlowersHistoryWhereUniqueInput | FlowersHistoryWhereUniqueInput[]
  }

  export type FlowersFarmsAndFlowersCreateNestedManyWithoutFlowersInput = {
    create?: XOR<FlowersFarmsAndFlowersCreateWithoutFlowersInput, FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersInput> | FlowersFarmsAndFlowersCreateWithoutFlowersInput[] | FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: FlowersFarmsAndFlowersCreateOrConnectWithoutFlowersInput | FlowersFarmsAndFlowersCreateOrConnectWithoutFlowersInput[]
    createMany?: FlowersFarmsAndFlowersCreateManyFlowersInputEnvelope
    connect?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
  }

  export type FlowersBouquetsAndFlowersCreateNestedManyWithoutFlowersInput = {
    create?: XOR<FlowersBouquetsAndFlowersCreateWithoutFlowersInput, FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersInput> | FlowersBouquetsAndFlowersCreateWithoutFlowersInput[] | FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: FlowersBouquetsAndFlowersCreateOrConnectWithoutFlowersInput | FlowersBouquetsAndFlowersCreateOrConnectWithoutFlowersInput[]
    createMany?: FlowersBouquetsAndFlowersCreateManyFlowersInputEnvelope
    connect?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
  }

  export type FlowersVarietyCreateNestedOneWithoutFlowersInput = {
    create?: XOR<FlowersVarietyCreateWithoutFlowersInput, FlowersVarietyUncheckedCreateWithoutFlowersInput>
    connectOrCreate?: FlowersVarietyCreateOrConnectWithoutFlowersInput
    connect?: FlowersVarietyWhereUniqueInput
  }

  export type FlowersAndFilesUncheckedCreateNestedManyWithoutFlowersInput = {
    create?: XOR<FlowersAndFilesCreateWithoutFlowersInput, FlowersAndFilesUncheckedCreateWithoutFlowersInput> | FlowersAndFilesCreateWithoutFlowersInput[] | FlowersAndFilesUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: FlowersAndFilesCreateOrConnectWithoutFlowersInput | FlowersAndFilesCreateOrConnectWithoutFlowersInput[]
    createMany?: FlowersAndFilesCreateManyFlowersInputEnvelope
    connect?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
  }

  export type FlowersHistoryUncheckedCreateNestedManyWithoutFlowerInput = {
    create?: XOR<FlowersHistoryCreateWithoutFlowerInput, FlowersHistoryUncheckedCreateWithoutFlowerInput> | FlowersHistoryCreateWithoutFlowerInput[] | FlowersHistoryUncheckedCreateWithoutFlowerInput[]
    connectOrCreate?: FlowersHistoryCreateOrConnectWithoutFlowerInput | FlowersHistoryCreateOrConnectWithoutFlowerInput[]
    createMany?: FlowersHistoryCreateManyFlowerInputEnvelope
    connect?: FlowersHistoryWhereUniqueInput | FlowersHistoryWhereUniqueInput[]
  }

  export type FlowersFarmsAndFlowersUncheckedCreateNestedManyWithoutFlowersInput = {
    create?: XOR<FlowersFarmsAndFlowersCreateWithoutFlowersInput, FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersInput> | FlowersFarmsAndFlowersCreateWithoutFlowersInput[] | FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: FlowersFarmsAndFlowersCreateOrConnectWithoutFlowersInput | FlowersFarmsAndFlowersCreateOrConnectWithoutFlowersInput[]
    createMany?: FlowersFarmsAndFlowersCreateManyFlowersInputEnvelope
    connect?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
  }

  export type FlowersBouquetsAndFlowersUncheckedCreateNestedManyWithoutFlowersInput = {
    create?: XOR<FlowersBouquetsAndFlowersCreateWithoutFlowersInput, FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersInput> | FlowersBouquetsAndFlowersCreateWithoutFlowersInput[] | FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: FlowersBouquetsAndFlowersCreateOrConnectWithoutFlowersInput | FlowersBouquetsAndFlowersCreateOrConnectWithoutFlowersInput[]
    createMany?: FlowersBouquetsAndFlowersCreateManyFlowersInputEnvelope
    connect?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
  }

  export type FlowersAndFilesUpdateManyWithoutFlowersNestedInput = {
    create?: XOR<FlowersAndFilesCreateWithoutFlowersInput, FlowersAndFilesUncheckedCreateWithoutFlowersInput> | FlowersAndFilesCreateWithoutFlowersInput[] | FlowersAndFilesUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: FlowersAndFilesCreateOrConnectWithoutFlowersInput | FlowersAndFilesCreateOrConnectWithoutFlowersInput[]
    upsert?: FlowersAndFilesUpsertWithWhereUniqueWithoutFlowersInput | FlowersAndFilesUpsertWithWhereUniqueWithoutFlowersInput[]
    createMany?: FlowersAndFilesCreateManyFlowersInputEnvelope
    set?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
    disconnect?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
    delete?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
    connect?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
    update?: FlowersAndFilesUpdateWithWhereUniqueWithoutFlowersInput | FlowersAndFilesUpdateWithWhereUniqueWithoutFlowersInput[]
    updateMany?: FlowersAndFilesUpdateManyWithWhereWithoutFlowersInput | FlowersAndFilesUpdateManyWithWhereWithoutFlowersInput[]
    deleteMany?: FlowersAndFilesScalarWhereInput | FlowersAndFilesScalarWhereInput[]
  }

  export type FlowersHistoryUpdateManyWithoutFlowerNestedInput = {
    create?: XOR<FlowersHistoryCreateWithoutFlowerInput, FlowersHistoryUncheckedCreateWithoutFlowerInput> | FlowersHistoryCreateWithoutFlowerInput[] | FlowersHistoryUncheckedCreateWithoutFlowerInput[]
    connectOrCreate?: FlowersHistoryCreateOrConnectWithoutFlowerInput | FlowersHistoryCreateOrConnectWithoutFlowerInput[]
    upsert?: FlowersHistoryUpsertWithWhereUniqueWithoutFlowerInput | FlowersHistoryUpsertWithWhereUniqueWithoutFlowerInput[]
    createMany?: FlowersHistoryCreateManyFlowerInputEnvelope
    set?: FlowersHistoryWhereUniqueInput | FlowersHistoryWhereUniqueInput[]
    disconnect?: FlowersHistoryWhereUniqueInput | FlowersHistoryWhereUniqueInput[]
    delete?: FlowersHistoryWhereUniqueInput | FlowersHistoryWhereUniqueInput[]
    connect?: FlowersHistoryWhereUniqueInput | FlowersHistoryWhereUniqueInput[]
    update?: FlowersHistoryUpdateWithWhereUniqueWithoutFlowerInput | FlowersHistoryUpdateWithWhereUniqueWithoutFlowerInput[]
    updateMany?: FlowersHistoryUpdateManyWithWhereWithoutFlowerInput | FlowersHistoryUpdateManyWithWhereWithoutFlowerInput[]
    deleteMany?: FlowersHistoryScalarWhereInput | FlowersHistoryScalarWhereInput[]
  }

  export type FlowersFarmsAndFlowersUpdateManyWithoutFlowersNestedInput = {
    create?: XOR<FlowersFarmsAndFlowersCreateWithoutFlowersInput, FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersInput> | FlowersFarmsAndFlowersCreateWithoutFlowersInput[] | FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: FlowersFarmsAndFlowersCreateOrConnectWithoutFlowersInput | FlowersFarmsAndFlowersCreateOrConnectWithoutFlowersInput[]
    upsert?: FlowersFarmsAndFlowersUpsertWithWhereUniqueWithoutFlowersInput | FlowersFarmsAndFlowersUpsertWithWhereUniqueWithoutFlowersInput[]
    createMany?: FlowersFarmsAndFlowersCreateManyFlowersInputEnvelope
    set?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
    disconnect?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
    delete?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
    connect?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
    update?: FlowersFarmsAndFlowersUpdateWithWhereUniqueWithoutFlowersInput | FlowersFarmsAndFlowersUpdateWithWhereUniqueWithoutFlowersInput[]
    updateMany?: FlowersFarmsAndFlowersUpdateManyWithWhereWithoutFlowersInput | FlowersFarmsAndFlowersUpdateManyWithWhereWithoutFlowersInput[]
    deleteMany?: FlowersFarmsAndFlowersScalarWhereInput | FlowersFarmsAndFlowersScalarWhereInput[]
  }

  export type FlowersBouquetsAndFlowersUpdateManyWithoutFlowersNestedInput = {
    create?: XOR<FlowersBouquetsAndFlowersCreateWithoutFlowersInput, FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersInput> | FlowersBouquetsAndFlowersCreateWithoutFlowersInput[] | FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: FlowersBouquetsAndFlowersCreateOrConnectWithoutFlowersInput | FlowersBouquetsAndFlowersCreateOrConnectWithoutFlowersInput[]
    upsert?: FlowersBouquetsAndFlowersUpsertWithWhereUniqueWithoutFlowersInput | FlowersBouquetsAndFlowersUpsertWithWhereUniqueWithoutFlowersInput[]
    createMany?: FlowersBouquetsAndFlowersCreateManyFlowersInputEnvelope
    set?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
    disconnect?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
    delete?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
    connect?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
    update?: FlowersBouquetsAndFlowersUpdateWithWhereUniqueWithoutFlowersInput | FlowersBouquetsAndFlowersUpdateWithWhereUniqueWithoutFlowersInput[]
    updateMany?: FlowersBouquetsAndFlowersUpdateManyWithWhereWithoutFlowersInput | FlowersBouquetsAndFlowersUpdateManyWithWhereWithoutFlowersInput[]
    deleteMany?: FlowersBouquetsAndFlowersScalarWhereInput | FlowersBouquetsAndFlowersScalarWhereInput[]
  }

  export type FlowersVarietyUpdateOneRequiredWithoutFlowersNestedInput = {
    create?: XOR<FlowersVarietyCreateWithoutFlowersInput, FlowersVarietyUncheckedCreateWithoutFlowersInput>
    connectOrCreate?: FlowersVarietyCreateOrConnectWithoutFlowersInput
    upsert?: FlowersVarietyUpsertWithoutFlowersInput
    connect?: FlowersVarietyWhereUniqueInput
    update?: XOR<XOR<FlowersVarietyUpdateToOneWithWhereWithoutFlowersInput, FlowersVarietyUpdateWithoutFlowersInput>, FlowersVarietyUncheckedUpdateWithoutFlowersInput>
  }

  export type FlowersAndFilesUncheckedUpdateManyWithoutFlowersNestedInput = {
    create?: XOR<FlowersAndFilesCreateWithoutFlowersInput, FlowersAndFilesUncheckedCreateWithoutFlowersInput> | FlowersAndFilesCreateWithoutFlowersInput[] | FlowersAndFilesUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: FlowersAndFilesCreateOrConnectWithoutFlowersInput | FlowersAndFilesCreateOrConnectWithoutFlowersInput[]
    upsert?: FlowersAndFilesUpsertWithWhereUniqueWithoutFlowersInput | FlowersAndFilesUpsertWithWhereUniqueWithoutFlowersInput[]
    createMany?: FlowersAndFilesCreateManyFlowersInputEnvelope
    set?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
    disconnect?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
    delete?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
    connect?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
    update?: FlowersAndFilesUpdateWithWhereUniqueWithoutFlowersInput | FlowersAndFilesUpdateWithWhereUniqueWithoutFlowersInput[]
    updateMany?: FlowersAndFilesUpdateManyWithWhereWithoutFlowersInput | FlowersAndFilesUpdateManyWithWhereWithoutFlowersInput[]
    deleteMany?: FlowersAndFilesScalarWhereInput | FlowersAndFilesScalarWhereInput[]
  }

  export type FlowersHistoryUncheckedUpdateManyWithoutFlowerNestedInput = {
    create?: XOR<FlowersHistoryCreateWithoutFlowerInput, FlowersHistoryUncheckedCreateWithoutFlowerInput> | FlowersHistoryCreateWithoutFlowerInput[] | FlowersHistoryUncheckedCreateWithoutFlowerInput[]
    connectOrCreate?: FlowersHistoryCreateOrConnectWithoutFlowerInput | FlowersHistoryCreateOrConnectWithoutFlowerInput[]
    upsert?: FlowersHistoryUpsertWithWhereUniqueWithoutFlowerInput | FlowersHistoryUpsertWithWhereUniqueWithoutFlowerInput[]
    createMany?: FlowersHistoryCreateManyFlowerInputEnvelope
    set?: FlowersHistoryWhereUniqueInput | FlowersHistoryWhereUniqueInput[]
    disconnect?: FlowersHistoryWhereUniqueInput | FlowersHistoryWhereUniqueInput[]
    delete?: FlowersHistoryWhereUniqueInput | FlowersHistoryWhereUniqueInput[]
    connect?: FlowersHistoryWhereUniqueInput | FlowersHistoryWhereUniqueInput[]
    update?: FlowersHistoryUpdateWithWhereUniqueWithoutFlowerInput | FlowersHistoryUpdateWithWhereUniqueWithoutFlowerInput[]
    updateMany?: FlowersHistoryUpdateManyWithWhereWithoutFlowerInput | FlowersHistoryUpdateManyWithWhereWithoutFlowerInput[]
    deleteMany?: FlowersHistoryScalarWhereInput | FlowersHistoryScalarWhereInput[]
  }

  export type FlowersFarmsAndFlowersUncheckedUpdateManyWithoutFlowersNestedInput = {
    create?: XOR<FlowersFarmsAndFlowersCreateWithoutFlowersInput, FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersInput> | FlowersFarmsAndFlowersCreateWithoutFlowersInput[] | FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: FlowersFarmsAndFlowersCreateOrConnectWithoutFlowersInput | FlowersFarmsAndFlowersCreateOrConnectWithoutFlowersInput[]
    upsert?: FlowersFarmsAndFlowersUpsertWithWhereUniqueWithoutFlowersInput | FlowersFarmsAndFlowersUpsertWithWhereUniqueWithoutFlowersInput[]
    createMany?: FlowersFarmsAndFlowersCreateManyFlowersInputEnvelope
    set?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
    disconnect?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
    delete?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
    connect?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
    update?: FlowersFarmsAndFlowersUpdateWithWhereUniqueWithoutFlowersInput | FlowersFarmsAndFlowersUpdateWithWhereUniqueWithoutFlowersInput[]
    updateMany?: FlowersFarmsAndFlowersUpdateManyWithWhereWithoutFlowersInput | FlowersFarmsAndFlowersUpdateManyWithWhereWithoutFlowersInput[]
    deleteMany?: FlowersFarmsAndFlowersScalarWhereInput | FlowersFarmsAndFlowersScalarWhereInput[]
  }

  export type FlowersBouquetsAndFlowersUncheckedUpdateManyWithoutFlowersNestedInput = {
    create?: XOR<FlowersBouquetsAndFlowersCreateWithoutFlowersInput, FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersInput> | FlowersBouquetsAndFlowersCreateWithoutFlowersInput[] | FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersInput[]
    connectOrCreate?: FlowersBouquetsAndFlowersCreateOrConnectWithoutFlowersInput | FlowersBouquetsAndFlowersCreateOrConnectWithoutFlowersInput[]
    upsert?: FlowersBouquetsAndFlowersUpsertWithWhereUniqueWithoutFlowersInput | FlowersBouquetsAndFlowersUpsertWithWhereUniqueWithoutFlowersInput[]
    createMany?: FlowersBouquetsAndFlowersCreateManyFlowersInputEnvelope
    set?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
    disconnect?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
    delete?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
    connect?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
    update?: FlowersBouquetsAndFlowersUpdateWithWhereUniqueWithoutFlowersInput | FlowersBouquetsAndFlowersUpdateWithWhereUniqueWithoutFlowersInput[]
    updateMany?: FlowersBouquetsAndFlowersUpdateManyWithWhereWithoutFlowersInput | FlowersBouquetsAndFlowersUpdateManyWithWhereWithoutFlowersInput[]
    deleteMany?: FlowersBouquetsAndFlowersScalarWhereInput | FlowersBouquetsAndFlowersScalarWhereInput[]
  }

  export type FlowersCreateNestedManyWithoutVarietyInput = {
    create?: XOR<FlowersCreateWithoutVarietyInput, FlowersUncheckedCreateWithoutVarietyInput> | FlowersCreateWithoutVarietyInput[] | FlowersUncheckedCreateWithoutVarietyInput[]
    connectOrCreate?: FlowersCreateOrConnectWithoutVarietyInput | FlowersCreateOrConnectWithoutVarietyInput[]
    createMany?: FlowersCreateManyVarietyInputEnvelope
    connect?: FlowersWhereUniqueInput | FlowersWhereUniqueInput[]
  }

  export type FlowersUncheckedCreateNestedManyWithoutVarietyInput = {
    create?: XOR<FlowersCreateWithoutVarietyInput, FlowersUncheckedCreateWithoutVarietyInput> | FlowersCreateWithoutVarietyInput[] | FlowersUncheckedCreateWithoutVarietyInput[]
    connectOrCreate?: FlowersCreateOrConnectWithoutVarietyInput | FlowersCreateOrConnectWithoutVarietyInput[]
    createMany?: FlowersCreateManyVarietyInputEnvelope
    connect?: FlowersWhereUniqueInput | FlowersWhereUniqueInput[]
  }

  export type FlowersUpdateManyWithoutVarietyNestedInput = {
    create?: XOR<FlowersCreateWithoutVarietyInput, FlowersUncheckedCreateWithoutVarietyInput> | FlowersCreateWithoutVarietyInput[] | FlowersUncheckedCreateWithoutVarietyInput[]
    connectOrCreate?: FlowersCreateOrConnectWithoutVarietyInput | FlowersCreateOrConnectWithoutVarietyInput[]
    upsert?: FlowersUpsertWithWhereUniqueWithoutVarietyInput | FlowersUpsertWithWhereUniqueWithoutVarietyInput[]
    createMany?: FlowersCreateManyVarietyInputEnvelope
    set?: FlowersWhereUniqueInput | FlowersWhereUniqueInput[]
    disconnect?: FlowersWhereUniqueInput | FlowersWhereUniqueInput[]
    delete?: FlowersWhereUniqueInput | FlowersWhereUniqueInput[]
    connect?: FlowersWhereUniqueInput | FlowersWhereUniqueInput[]
    update?: FlowersUpdateWithWhereUniqueWithoutVarietyInput | FlowersUpdateWithWhereUniqueWithoutVarietyInput[]
    updateMany?: FlowersUpdateManyWithWhereWithoutVarietyInput | FlowersUpdateManyWithWhereWithoutVarietyInput[]
    deleteMany?: FlowersScalarWhereInput | FlowersScalarWhereInput[]
  }

  export type FlowersUncheckedUpdateManyWithoutVarietyNestedInput = {
    create?: XOR<FlowersCreateWithoutVarietyInput, FlowersUncheckedCreateWithoutVarietyInput> | FlowersCreateWithoutVarietyInput[] | FlowersUncheckedCreateWithoutVarietyInput[]
    connectOrCreate?: FlowersCreateOrConnectWithoutVarietyInput | FlowersCreateOrConnectWithoutVarietyInput[]
    upsert?: FlowersUpsertWithWhereUniqueWithoutVarietyInput | FlowersUpsertWithWhereUniqueWithoutVarietyInput[]
    createMany?: FlowersCreateManyVarietyInputEnvelope
    set?: FlowersWhereUniqueInput | FlowersWhereUniqueInput[]
    disconnect?: FlowersWhereUniqueInput | FlowersWhereUniqueInput[]
    delete?: FlowersWhereUniqueInput | FlowersWhereUniqueInput[]
    connect?: FlowersWhereUniqueInput | FlowersWhereUniqueInput[]
    update?: FlowersUpdateWithWhereUniqueWithoutVarietyInput | FlowersUpdateWithWhereUniqueWithoutVarietyInput[]
    updateMany?: FlowersUpdateManyWithWhereWithoutVarietyInput | FlowersUpdateManyWithWhereWithoutVarietyInput[]
    deleteMany?: FlowersScalarWhereInput | FlowersScalarWhereInput[]
  }

  export type FlowersCreateNestedOneWithoutHistoryInput = {
    create?: XOR<FlowersCreateWithoutHistoryInput, FlowersUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: FlowersCreateOrConnectWithoutHistoryInput
    connect?: FlowersWhereUniqueInput
  }

  export type FlowersUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<FlowersCreateWithoutHistoryInput, FlowersUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: FlowersCreateOrConnectWithoutHistoryInput
    upsert?: FlowersUpsertWithoutHistoryInput
    connect?: FlowersWhereUniqueInput
    update?: XOR<XOR<FlowersUpdateToOneWithWhereWithoutHistoryInput, FlowersUpdateWithoutHistoryInput>, FlowersUncheckedUpdateWithoutHistoryInput>
  }

  export type FlowersFarmsAndFlowersCreateNestedManyWithoutFlowersFarmsInput = {
    create?: XOR<FlowersFarmsAndFlowersCreateWithoutFlowersFarmsInput, FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersFarmsInput> | FlowersFarmsAndFlowersCreateWithoutFlowersFarmsInput[] | FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersFarmsInput[]
    connectOrCreate?: FlowersFarmsAndFlowersCreateOrConnectWithoutFlowersFarmsInput | FlowersFarmsAndFlowersCreateOrConnectWithoutFlowersFarmsInput[]
    createMany?: FlowersFarmsAndFlowersCreateManyFlowersFarmsInputEnvelope
    connect?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
  }

  export type FlowersFarmsAndFlowersUncheckedCreateNestedManyWithoutFlowersFarmsInput = {
    create?: XOR<FlowersFarmsAndFlowersCreateWithoutFlowersFarmsInput, FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersFarmsInput> | FlowersFarmsAndFlowersCreateWithoutFlowersFarmsInput[] | FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersFarmsInput[]
    connectOrCreate?: FlowersFarmsAndFlowersCreateOrConnectWithoutFlowersFarmsInput | FlowersFarmsAndFlowersCreateOrConnectWithoutFlowersFarmsInput[]
    createMany?: FlowersFarmsAndFlowersCreateManyFlowersFarmsInputEnvelope
    connect?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
  }

  export type FlowersFarmsAndFlowersUpdateManyWithoutFlowersFarmsNestedInput = {
    create?: XOR<FlowersFarmsAndFlowersCreateWithoutFlowersFarmsInput, FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersFarmsInput> | FlowersFarmsAndFlowersCreateWithoutFlowersFarmsInput[] | FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersFarmsInput[]
    connectOrCreate?: FlowersFarmsAndFlowersCreateOrConnectWithoutFlowersFarmsInput | FlowersFarmsAndFlowersCreateOrConnectWithoutFlowersFarmsInput[]
    upsert?: FlowersFarmsAndFlowersUpsertWithWhereUniqueWithoutFlowersFarmsInput | FlowersFarmsAndFlowersUpsertWithWhereUniqueWithoutFlowersFarmsInput[]
    createMany?: FlowersFarmsAndFlowersCreateManyFlowersFarmsInputEnvelope
    set?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
    disconnect?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
    delete?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
    connect?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
    update?: FlowersFarmsAndFlowersUpdateWithWhereUniqueWithoutFlowersFarmsInput | FlowersFarmsAndFlowersUpdateWithWhereUniqueWithoutFlowersFarmsInput[]
    updateMany?: FlowersFarmsAndFlowersUpdateManyWithWhereWithoutFlowersFarmsInput | FlowersFarmsAndFlowersUpdateManyWithWhereWithoutFlowersFarmsInput[]
    deleteMany?: FlowersFarmsAndFlowersScalarWhereInput | FlowersFarmsAndFlowersScalarWhereInput[]
  }

  export type FlowersFarmsAndFlowersUncheckedUpdateManyWithoutFlowersFarmsNestedInput = {
    create?: XOR<FlowersFarmsAndFlowersCreateWithoutFlowersFarmsInput, FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersFarmsInput> | FlowersFarmsAndFlowersCreateWithoutFlowersFarmsInput[] | FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersFarmsInput[]
    connectOrCreate?: FlowersFarmsAndFlowersCreateOrConnectWithoutFlowersFarmsInput | FlowersFarmsAndFlowersCreateOrConnectWithoutFlowersFarmsInput[]
    upsert?: FlowersFarmsAndFlowersUpsertWithWhereUniqueWithoutFlowersFarmsInput | FlowersFarmsAndFlowersUpsertWithWhereUniqueWithoutFlowersFarmsInput[]
    createMany?: FlowersFarmsAndFlowersCreateManyFlowersFarmsInputEnvelope
    set?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
    disconnect?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
    delete?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
    connect?: FlowersFarmsAndFlowersWhereUniqueInput | FlowersFarmsAndFlowersWhereUniqueInput[]
    update?: FlowersFarmsAndFlowersUpdateWithWhereUniqueWithoutFlowersFarmsInput | FlowersFarmsAndFlowersUpdateWithWhereUniqueWithoutFlowersFarmsInput[]
    updateMany?: FlowersFarmsAndFlowersUpdateManyWithWhereWithoutFlowersFarmsInput | FlowersFarmsAndFlowersUpdateManyWithWhereWithoutFlowersFarmsInput[]
    deleteMany?: FlowersFarmsAndFlowersScalarWhereInput | FlowersFarmsAndFlowersScalarWhereInput[]
  }

  export type FlowersCreateNestedOneWithoutFarmsInput = {
    create?: XOR<FlowersCreateWithoutFarmsInput, FlowersUncheckedCreateWithoutFarmsInput>
    connectOrCreate?: FlowersCreateOrConnectWithoutFarmsInput
    connect?: FlowersWhereUniqueInput
  }

  export type FlowersFarmsCreateNestedOneWithoutFlowersInput = {
    create?: XOR<FlowersFarmsCreateWithoutFlowersInput, FlowersFarmsUncheckedCreateWithoutFlowersInput>
    connectOrCreate?: FlowersFarmsCreateOrConnectWithoutFlowersInput
    connect?: FlowersFarmsWhereUniqueInput
  }

  export type FlowersUpdateOneRequiredWithoutFarmsNestedInput = {
    create?: XOR<FlowersCreateWithoutFarmsInput, FlowersUncheckedCreateWithoutFarmsInput>
    connectOrCreate?: FlowersCreateOrConnectWithoutFarmsInput
    upsert?: FlowersUpsertWithoutFarmsInput
    connect?: FlowersWhereUniqueInput
    update?: XOR<XOR<FlowersUpdateToOneWithWhereWithoutFarmsInput, FlowersUpdateWithoutFarmsInput>, FlowersUncheckedUpdateWithoutFarmsInput>
  }

  export type FlowersFarmsUpdateOneRequiredWithoutFlowersNestedInput = {
    create?: XOR<FlowersFarmsCreateWithoutFlowersInput, FlowersFarmsUncheckedCreateWithoutFlowersInput>
    connectOrCreate?: FlowersFarmsCreateOrConnectWithoutFlowersInput
    upsert?: FlowersFarmsUpsertWithoutFlowersInput
    connect?: FlowersFarmsWhereUniqueInput
    update?: XOR<XOR<FlowersFarmsUpdateToOneWithWhereWithoutFlowersInput, FlowersFarmsUpdateWithoutFlowersInput>, FlowersFarmsUncheckedUpdateWithoutFlowersInput>
  }

  export type FlowersBouquetsAndFlowersCreateNestedManyWithoutFlowersBouquetsInput = {
    create?: XOR<FlowersBouquetsAndFlowersCreateWithoutFlowersBouquetsInput, FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersBouquetsInput> | FlowersBouquetsAndFlowersCreateWithoutFlowersBouquetsInput[] | FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersBouquetsInput[]
    connectOrCreate?: FlowersBouquetsAndFlowersCreateOrConnectWithoutFlowersBouquetsInput | FlowersBouquetsAndFlowersCreateOrConnectWithoutFlowersBouquetsInput[]
    createMany?: FlowersBouquetsAndFlowersCreateManyFlowersBouquetsInputEnvelope
    connect?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
  }

  export type FlowersBouquetsAndFlowersUncheckedCreateNestedManyWithoutFlowersBouquetsInput = {
    create?: XOR<FlowersBouquetsAndFlowersCreateWithoutFlowersBouquetsInput, FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersBouquetsInput> | FlowersBouquetsAndFlowersCreateWithoutFlowersBouquetsInput[] | FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersBouquetsInput[]
    connectOrCreate?: FlowersBouquetsAndFlowersCreateOrConnectWithoutFlowersBouquetsInput | FlowersBouquetsAndFlowersCreateOrConnectWithoutFlowersBouquetsInput[]
    createMany?: FlowersBouquetsAndFlowersCreateManyFlowersBouquetsInputEnvelope
    connect?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
  }

  export type FlowersBouquetsAndFlowersUpdateManyWithoutFlowersBouquetsNestedInput = {
    create?: XOR<FlowersBouquetsAndFlowersCreateWithoutFlowersBouquetsInput, FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersBouquetsInput> | FlowersBouquetsAndFlowersCreateWithoutFlowersBouquetsInput[] | FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersBouquetsInput[]
    connectOrCreate?: FlowersBouquetsAndFlowersCreateOrConnectWithoutFlowersBouquetsInput | FlowersBouquetsAndFlowersCreateOrConnectWithoutFlowersBouquetsInput[]
    upsert?: FlowersBouquetsAndFlowersUpsertWithWhereUniqueWithoutFlowersBouquetsInput | FlowersBouquetsAndFlowersUpsertWithWhereUniqueWithoutFlowersBouquetsInput[]
    createMany?: FlowersBouquetsAndFlowersCreateManyFlowersBouquetsInputEnvelope
    set?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
    disconnect?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
    delete?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
    connect?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
    update?: FlowersBouquetsAndFlowersUpdateWithWhereUniqueWithoutFlowersBouquetsInput | FlowersBouquetsAndFlowersUpdateWithWhereUniqueWithoutFlowersBouquetsInput[]
    updateMany?: FlowersBouquetsAndFlowersUpdateManyWithWhereWithoutFlowersBouquetsInput | FlowersBouquetsAndFlowersUpdateManyWithWhereWithoutFlowersBouquetsInput[]
    deleteMany?: FlowersBouquetsAndFlowersScalarWhereInput | FlowersBouquetsAndFlowersScalarWhereInput[]
  }

  export type FlowersBouquetsAndFlowersUncheckedUpdateManyWithoutFlowersBouquetsNestedInput = {
    create?: XOR<FlowersBouquetsAndFlowersCreateWithoutFlowersBouquetsInput, FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersBouquetsInput> | FlowersBouquetsAndFlowersCreateWithoutFlowersBouquetsInput[] | FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersBouquetsInput[]
    connectOrCreate?: FlowersBouquetsAndFlowersCreateOrConnectWithoutFlowersBouquetsInput | FlowersBouquetsAndFlowersCreateOrConnectWithoutFlowersBouquetsInput[]
    upsert?: FlowersBouquetsAndFlowersUpsertWithWhereUniqueWithoutFlowersBouquetsInput | FlowersBouquetsAndFlowersUpsertWithWhereUniqueWithoutFlowersBouquetsInput[]
    createMany?: FlowersBouquetsAndFlowersCreateManyFlowersBouquetsInputEnvelope
    set?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
    disconnect?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
    delete?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
    connect?: FlowersBouquetsAndFlowersWhereUniqueInput | FlowersBouquetsAndFlowersWhereUniqueInput[]
    update?: FlowersBouquetsAndFlowersUpdateWithWhereUniqueWithoutFlowersBouquetsInput | FlowersBouquetsAndFlowersUpdateWithWhereUniqueWithoutFlowersBouquetsInput[]
    updateMany?: FlowersBouquetsAndFlowersUpdateManyWithWhereWithoutFlowersBouquetsInput | FlowersBouquetsAndFlowersUpdateManyWithWhereWithoutFlowersBouquetsInput[]
    deleteMany?: FlowersBouquetsAndFlowersScalarWhereInput | FlowersBouquetsAndFlowersScalarWhereInput[]
  }

  export type FlowersCreateNestedOneWithoutBouquetsInput = {
    create?: XOR<FlowersCreateWithoutBouquetsInput, FlowersUncheckedCreateWithoutBouquetsInput>
    connectOrCreate?: FlowersCreateOrConnectWithoutBouquetsInput
    connect?: FlowersWhereUniqueInput
  }

  export type FlowersBouquetsCreateNestedOneWithoutFlowersInput = {
    create?: XOR<FlowersBouquetsCreateWithoutFlowersInput, FlowersBouquetsUncheckedCreateWithoutFlowersInput>
    connectOrCreate?: FlowersBouquetsCreateOrConnectWithoutFlowersInput
    connect?: FlowersBouquetsWhereUniqueInput
  }

  export type FlowersUpdateOneRequiredWithoutBouquetsNestedInput = {
    create?: XOR<FlowersCreateWithoutBouquetsInput, FlowersUncheckedCreateWithoutBouquetsInput>
    connectOrCreate?: FlowersCreateOrConnectWithoutBouquetsInput
    upsert?: FlowersUpsertWithoutBouquetsInput
    connect?: FlowersWhereUniqueInput
    update?: XOR<XOR<FlowersUpdateToOneWithWhereWithoutBouquetsInput, FlowersUpdateWithoutBouquetsInput>, FlowersUncheckedUpdateWithoutBouquetsInput>
  }

  export type FlowersBouquetsUpdateOneRequiredWithoutFlowersNestedInput = {
    create?: XOR<FlowersBouquetsCreateWithoutFlowersInput, FlowersBouquetsUncheckedCreateWithoutFlowersInput>
    connectOrCreate?: FlowersBouquetsCreateOrConnectWithoutFlowersInput
    upsert?: FlowersBouquetsUpsertWithoutFlowersInput
    connect?: FlowersBouquetsWhereUniqueInput
    update?: XOR<XOR<FlowersBouquetsUpdateToOneWithWhereWithoutFlowersInput, FlowersBouquetsUpdateWithoutFlowersInput>, FlowersBouquetsUncheckedUpdateWithoutFlowersInput>
  }

  export type FlowersCreateNestedOneWithoutImgsInput = {
    create?: XOR<FlowersCreateWithoutImgsInput, FlowersUncheckedCreateWithoutImgsInput>
    connectOrCreate?: FlowersCreateOrConnectWithoutImgsInput
    connect?: FlowersWhereUniqueInput
  }

  export type PublicFilesCreateNestedOneWithoutFlowersInput = {
    create?: XOR<PublicFilesCreateWithoutFlowersInput, PublicFilesUncheckedCreateWithoutFlowersInput>
    connectOrCreate?: PublicFilesCreateOrConnectWithoutFlowersInput
    connect?: PublicFilesWhereUniqueInput
  }

  export type FlowersUpdateOneRequiredWithoutImgsNestedInput = {
    create?: XOR<FlowersCreateWithoutImgsInput, FlowersUncheckedCreateWithoutImgsInput>
    connectOrCreate?: FlowersCreateOrConnectWithoutImgsInput
    upsert?: FlowersUpsertWithoutImgsInput
    connect?: FlowersWhereUniqueInput
    update?: XOR<XOR<FlowersUpdateToOneWithWhereWithoutImgsInput, FlowersUpdateWithoutImgsInput>, FlowersUncheckedUpdateWithoutImgsInput>
  }

  export type PublicFilesUpdateOneRequiredWithoutFlowersNestedInput = {
    create?: XOR<PublicFilesCreateWithoutFlowersInput, PublicFilesUncheckedCreateWithoutFlowersInput>
    connectOrCreate?: PublicFilesCreateOrConnectWithoutFlowersInput
    upsert?: PublicFilesUpsertWithoutFlowersInput
    connect?: PublicFilesWhereUniqueInput
    update?: XOR<XOR<PublicFilesUpdateToOneWithWhereWithoutFlowersInput, PublicFilesUpdateWithoutFlowersInput>, PublicFilesUncheckedUpdateWithoutFlowersInput>
  }

  export type FlowersAndFilesCreateNestedManyWithoutPublicFilesInput = {
    create?: XOR<FlowersAndFilesCreateWithoutPublicFilesInput, FlowersAndFilesUncheckedCreateWithoutPublicFilesInput> | FlowersAndFilesCreateWithoutPublicFilesInput[] | FlowersAndFilesUncheckedCreateWithoutPublicFilesInput[]
    connectOrCreate?: FlowersAndFilesCreateOrConnectWithoutPublicFilesInput | FlowersAndFilesCreateOrConnectWithoutPublicFilesInput[]
    createMany?: FlowersAndFilesCreateManyPublicFilesInputEnvelope
    connect?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
  }

  export type FlowersAndFilesUncheckedCreateNestedManyWithoutPublicFilesInput = {
    create?: XOR<FlowersAndFilesCreateWithoutPublicFilesInput, FlowersAndFilesUncheckedCreateWithoutPublicFilesInput> | FlowersAndFilesCreateWithoutPublicFilesInput[] | FlowersAndFilesUncheckedCreateWithoutPublicFilesInput[]
    connectOrCreate?: FlowersAndFilesCreateOrConnectWithoutPublicFilesInput | FlowersAndFilesCreateOrConnectWithoutPublicFilesInput[]
    createMany?: FlowersAndFilesCreateManyPublicFilesInputEnvelope
    connect?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FlowersAndFilesUpdateManyWithoutPublicFilesNestedInput = {
    create?: XOR<FlowersAndFilesCreateWithoutPublicFilesInput, FlowersAndFilesUncheckedCreateWithoutPublicFilesInput> | FlowersAndFilesCreateWithoutPublicFilesInput[] | FlowersAndFilesUncheckedCreateWithoutPublicFilesInput[]
    connectOrCreate?: FlowersAndFilesCreateOrConnectWithoutPublicFilesInput | FlowersAndFilesCreateOrConnectWithoutPublicFilesInput[]
    upsert?: FlowersAndFilesUpsertWithWhereUniqueWithoutPublicFilesInput | FlowersAndFilesUpsertWithWhereUniqueWithoutPublicFilesInput[]
    createMany?: FlowersAndFilesCreateManyPublicFilesInputEnvelope
    set?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
    disconnect?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
    delete?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
    connect?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
    update?: FlowersAndFilesUpdateWithWhereUniqueWithoutPublicFilesInput | FlowersAndFilesUpdateWithWhereUniqueWithoutPublicFilesInput[]
    updateMany?: FlowersAndFilesUpdateManyWithWhereWithoutPublicFilesInput | FlowersAndFilesUpdateManyWithWhereWithoutPublicFilesInput[]
    deleteMany?: FlowersAndFilesScalarWhereInput | FlowersAndFilesScalarWhereInput[]
  }

  export type FlowersAndFilesUncheckedUpdateManyWithoutPublicFilesNestedInput = {
    create?: XOR<FlowersAndFilesCreateWithoutPublicFilesInput, FlowersAndFilesUncheckedCreateWithoutPublicFilesInput> | FlowersAndFilesCreateWithoutPublicFilesInput[] | FlowersAndFilesUncheckedCreateWithoutPublicFilesInput[]
    connectOrCreate?: FlowersAndFilesCreateOrConnectWithoutPublicFilesInput | FlowersAndFilesCreateOrConnectWithoutPublicFilesInput[]
    upsert?: FlowersAndFilesUpsertWithWhereUniqueWithoutPublicFilesInput | FlowersAndFilesUpsertWithWhereUniqueWithoutPublicFilesInput[]
    createMany?: FlowersAndFilesCreateManyPublicFilesInputEnvelope
    set?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
    disconnect?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
    delete?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
    connect?: FlowersAndFilesWhereUniqueInput | FlowersAndFilesWhereUniqueInput[]
    update?: FlowersAndFilesUpdateWithWhereUniqueWithoutPublicFilesInput | FlowersAndFilesUpdateWithWhereUniqueWithoutPublicFilesInput[]
    updateMany?: FlowersAndFilesUpdateManyWithWhereWithoutPublicFilesInput | FlowersAndFilesUpdateManyWithWhereWithoutPublicFilesInput[]
    deleteMany?: FlowersAndFilesScalarWhereInput | FlowersAndFilesScalarWhereInput[]
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

  export type FlowersAndFilesCreateWithoutFlowersInput = {
    publicFiles: PublicFilesCreateNestedOneWithoutFlowersInput
  }

  export type FlowersAndFilesUncheckedCreateWithoutFlowersInput = {
    publicFilesId: number
  }

  export type FlowersAndFilesCreateOrConnectWithoutFlowersInput = {
    where: FlowersAndFilesWhereUniqueInput
    create: XOR<FlowersAndFilesCreateWithoutFlowersInput, FlowersAndFilesUncheckedCreateWithoutFlowersInput>
  }

  export type FlowersAndFilesCreateManyFlowersInputEnvelope = {
    data: FlowersAndFilesCreateManyFlowersInput | FlowersAndFilesCreateManyFlowersInput[]
    skipDuplicates?: boolean
  }

  export type FlowersHistoryCreateWithoutFlowerInput = {
    date: number
    price: number
  }

  export type FlowersHistoryUncheckedCreateWithoutFlowerInput = {
    id?: number
    date: number
    price: number
  }

  export type FlowersHistoryCreateOrConnectWithoutFlowerInput = {
    where: FlowersHistoryWhereUniqueInput
    create: XOR<FlowersHistoryCreateWithoutFlowerInput, FlowersHistoryUncheckedCreateWithoutFlowerInput>
  }

  export type FlowersHistoryCreateManyFlowerInputEnvelope = {
    data: FlowersHistoryCreateManyFlowerInput | FlowersHistoryCreateManyFlowerInput[]
    skipDuplicates?: boolean
  }

  export type FlowersFarmsAndFlowersCreateWithoutFlowersInput = {
    flowersFarms: FlowersFarmsCreateNestedOneWithoutFlowersInput
  }

  export type FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersInput = {
    flowersFarmsId: number
  }

  export type FlowersFarmsAndFlowersCreateOrConnectWithoutFlowersInput = {
    where: FlowersFarmsAndFlowersWhereUniqueInput
    create: XOR<FlowersFarmsAndFlowersCreateWithoutFlowersInput, FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersInput>
  }

  export type FlowersFarmsAndFlowersCreateManyFlowersInputEnvelope = {
    data: FlowersFarmsAndFlowersCreateManyFlowersInput | FlowersFarmsAndFlowersCreateManyFlowersInput[]
    skipDuplicates?: boolean
  }

  export type FlowersBouquetsAndFlowersCreateWithoutFlowersInput = {
    flowersBouquets: FlowersBouquetsCreateNestedOneWithoutFlowersInput
  }

  export type FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersInput = {
    flowersBouquetsId: number
  }

  export type FlowersBouquetsAndFlowersCreateOrConnectWithoutFlowersInput = {
    where: FlowersBouquetsAndFlowersWhereUniqueInput
    create: XOR<FlowersBouquetsAndFlowersCreateWithoutFlowersInput, FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersInput>
  }

  export type FlowersBouquetsAndFlowersCreateManyFlowersInputEnvelope = {
    data: FlowersBouquetsAndFlowersCreateManyFlowersInput | FlowersBouquetsAndFlowersCreateManyFlowersInput[]
    skipDuplicates?: boolean
  }

  export type FlowersVarietyCreateWithoutFlowersInput = {
    title: string
  }

  export type FlowersVarietyUncheckedCreateWithoutFlowersInput = {
    id?: number
    title: string
  }

  export type FlowersVarietyCreateOrConnectWithoutFlowersInput = {
    where: FlowersVarietyWhereUniqueInput
    create: XOR<FlowersVarietyCreateWithoutFlowersInput, FlowersVarietyUncheckedCreateWithoutFlowersInput>
  }

  export type FlowersAndFilesUpsertWithWhereUniqueWithoutFlowersInput = {
    where: FlowersAndFilesWhereUniqueInput
    update: XOR<FlowersAndFilesUpdateWithoutFlowersInput, FlowersAndFilesUncheckedUpdateWithoutFlowersInput>
    create: XOR<FlowersAndFilesCreateWithoutFlowersInput, FlowersAndFilesUncheckedCreateWithoutFlowersInput>
  }

  export type FlowersAndFilesUpdateWithWhereUniqueWithoutFlowersInput = {
    where: FlowersAndFilesWhereUniqueInput
    data: XOR<FlowersAndFilesUpdateWithoutFlowersInput, FlowersAndFilesUncheckedUpdateWithoutFlowersInput>
  }

  export type FlowersAndFilesUpdateManyWithWhereWithoutFlowersInput = {
    where: FlowersAndFilesScalarWhereInput
    data: XOR<FlowersAndFilesUpdateManyMutationInput, FlowersAndFilesUncheckedUpdateManyWithoutFlowersInput>
  }

  export type FlowersAndFilesScalarWhereInput = {
    AND?: FlowersAndFilesScalarWhereInput | FlowersAndFilesScalarWhereInput[]
    OR?: FlowersAndFilesScalarWhereInput[]
    NOT?: FlowersAndFilesScalarWhereInput | FlowersAndFilesScalarWhereInput[]
    flowersId?: IntFilter<"FlowersAndFiles"> | number
    publicFilesId?: IntFilter<"FlowersAndFiles"> | number
  }

  export type FlowersHistoryUpsertWithWhereUniqueWithoutFlowerInput = {
    where: FlowersHistoryWhereUniqueInput
    update: XOR<FlowersHistoryUpdateWithoutFlowerInput, FlowersHistoryUncheckedUpdateWithoutFlowerInput>
    create: XOR<FlowersHistoryCreateWithoutFlowerInput, FlowersHistoryUncheckedCreateWithoutFlowerInput>
  }

  export type FlowersHistoryUpdateWithWhereUniqueWithoutFlowerInput = {
    where: FlowersHistoryWhereUniqueInput
    data: XOR<FlowersHistoryUpdateWithoutFlowerInput, FlowersHistoryUncheckedUpdateWithoutFlowerInput>
  }

  export type FlowersHistoryUpdateManyWithWhereWithoutFlowerInput = {
    where: FlowersHistoryScalarWhereInput
    data: XOR<FlowersHistoryUpdateManyMutationInput, FlowersHistoryUncheckedUpdateManyWithoutFlowerInput>
  }

  export type FlowersHistoryScalarWhereInput = {
    AND?: FlowersHistoryScalarWhereInput | FlowersHistoryScalarWhereInput[]
    OR?: FlowersHistoryScalarWhereInput[]
    NOT?: FlowersHistoryScalarWhereInput | FlowersHistoryScalarWhereInput[]
    id?: IntFilter<"FlowersHistory"> | number
    flowersId?: IntFilter<"FlowersHistory"> | number
    date?: IntFilter<"FlowersHistory"> | number
    price?: IntFilter<"FlowersHistory"> | number
  }

  export type FlowersFarmsAndFlowersUpsertWithWhereUniqueWithoutFlowersInput = {
    where: FlowersFarmsAndFlowersWhereUniqueInput
    update: XOR<FlowersFarmsAndFlowersUpdateWithoutFlowersInput, FlowersFarmsAndFlowersUncheckedUpdateWithoutFlowersInput>
    create: XOR<FlowersFarmsAndFlowersCreateWithoutFlowersInput, FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersInput>
  }

  export type FlowersFarmsAndFlowersUpdateWithWhereUniqueWithoutFlowersInput = {
    where: FlowersFarmsAndFlowersWhereUniqueInput
    data: XOR<FlowersFarmsAndFlowersUpdateWithoutFlowersInput, FlowersFarmsAndFlowersUncheckedUpdateWithoutFlowersInput>
  }

  export type FlowersFarmsAndFlowersUpdateManyWithWhereWithoutFlowersInput = {
    where: FlowersFarmsAndFlowersScalarWhereInput
    data: XOR<FlowersFarmsAndFlowersUpdateManyMutationInput, FlowersFarmsAndFlowersUncheckedUpdateManyWithoutFlowersInput>
  }

  export type FlowersFarmsAndFlowersScalarWhereInput = {
    AND?: FlowersFarmsAndFlowersScalarWhereInput | FlowersFarmsAndFlowersScalarWhereInput[]
    OR?: FlowersFarmsAndFlowersScalarWhereInput[]
    NOT?: FlowersFarmsAndFlowersScalarWhereInput | FlowersFarmsAndFlowersScalarWhereInput[]
    flowersId?: IntFilter<"FlowersFarmsAndFlowers"> | number
    flowersFarmsId?: IntFilter<"FlowersFarmsAndFlowers"> | number
  }

  export type FlowersBouquetsAndFlowersUpsertWithWhereUniqueWithoutFlowersInput = {
    where: FlowersBouquetsAndFlowersWhereUniqueInput
    update: XOR<FlowersBouquetsAndFlowersUpdateWithoutFlowersInput, FlowersBouquetsAndFlowersUncheckedUpdateWithoutFlowersInput>
    create: XOR<FlowersBouquetsAndFlowersCreateWithoutFlowersInput, FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersInput>
  }

  export type FlowersBouquetsAndFlowersUpdateWithWhereUniqueWithoutFlowersInput = {
    where: FlowersBouquetsAndFlowersWhereUniqueInput
    data: XOR<FlowersBouquetsAndFlowersUpdateWithoutFlowersInput, FlowersBouquetsAndFlowersUncheckedUpdateWithoutFlowersInput>
  }

  export type FlowersBouquetsAndFlowersUpdateManyWithWhereWithoutFlowersInput = {
    where: FlowersBouquetsAndFlowersScalarWhereInput
    data: XOR<FlowersBouquetsAndFlowersUpdateManyMutationInput, FlowersBouquetsAndFlowersUncheckedUpdateManyWithoutFlowersInput>
  }

  export type FlowersBouquetsAndFlowersScalarWhereInput = {
    AND?: FlowersBouquetsAndFlowersScalarWhereInput | FlowersBouquetsAndFlowersScalarWhereInput[]
    OR?: FlowersBouquetsAndFlowersScalarWhereInput[]
    NOT?: FlowersBouquetsAndFlowersScalarWhereInput | FlowersBouquetsAndFlowersScalarWhereInput[]
    flowersId?: IntFilter<"FlowersBouquetsAndFlowers"> | number
    flowersBouquetsId?: IntFilter<"FlowersBouquetsAndFlowers"> | number
  }

  export type FlowersVarietyUpsertWithoutFlowersInput = {
    update: XOR<FlowersVarietyUpdateWithoutFlowersInput, FlowersVarietyUncheckedUpdateWithoutFlowersInput>
    create: XOR<FlowersVarietyCreateWithoutFlowersInput, FlowersVarietyUncheckedCreateWithoutFlowersInput>
    where?: FlowersVarietyWhereInput
  }

  export type FlowersVarietyUpdateToOneWithWhereWithoutFlowersInput = {
    where?: FlowersVarietyWhereInput
    data: XOR<FlowersVarietyUpdateWithoutFlowersInput, FlowersVarietyUncheckedUpdateWithoutFlowersInput>
  }

  export type FlowersVarietyUpdateWithoutFlowersInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type FlowersVarietyUncheckedUpdateWithoutFlowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type FlowersCreateWithoutVarietyInput = {
    color: string
    name: string
    price: number
    imgs?: FlowersAndFilesCreateNestedManyWithoutFlowersInput
    history?: FlowersHistoryCreateNestedManyWithoutFlowerInput
    farms?: FlowersFarmsAndFlowersCreateNestedManyWithoutFlowersInput
    bouquets?: FlowersBouquetsAndFlowersCreateNestedManyWithoutFlowersInput
  }

  export type FlowersUncheckedCreateWithoutVarietyInput = {
    id?: number
    color: string
    name: string
    price: number
    imgs?: FlowersAndFilesUncheckedCreateNestedManyWithoutFlowersInput
    history?: FlowersHistoryUncheckedCreateNestedManyWithoutFlowerInput
    farms?: FlowersFarmsAndFlowersUncheckedCreateNestedManyWithoutFlowersInput
    bouquets?: FlowersBouquetsAndFlowersUncheckedCreateNestedManyWithoutFlowersInput
  }

  export type FlowersCreateOrConnectWithoutVarietyInput = {
    where: FlowersWhereUniqueInput
    create: XOR<FlowersCreateWithoutVarietyInput, FlowersUncheckedCreateWithoutVarietyInput>
  }

  export type FlowersCreateManyVarietyInputEnvelope = {
    data: FlowersCreateManyVarietyInput | FlowersCreateManyVarietyInput[]
    skipDuplicates?: boolean
  }

  export type FlowersUpsertWithWhereUniqueWithoutVarietyInput = {
    where: FlowersWhereUniqueInput
    update: XOR<FlowersUpdateWithoutVarietyInput, FlowersUncheckedUpdateWithoutVarietyInput>
    create: XOR<FlowersCreateWithoutVarietyInput, FlowersUncheckedCreateWithoutVarietyInput>
  }

  export type FlowersUpdateWithWhereUniqueWithoutVarietyInput = {
    where: FlowersWhereUniqueInput
    data: XOR<FlowersUpdateWithoutVarietyInput, FlowersUncheckedUpdateWithoutVarietyInput>
  }

  export type FlowersUpdateManyWithWhereWithoutVarietyInput = {
    where: FlowersScalarWhereInput
    data: XOR<FlowersUpdateManyMutationInput, FlowersUncheckedUpdateManyWithoutVarietyInput>
  }

  export type FlowersScalarWhereInput = {
    AND?: FlowersScalarWhereInput | FlowersScalarWhereInput[]
    OR?: FlowersScalarWhereInput[]
    NOT?: FlowersScalarWhereInput | FlowersScalarWhereInput[]
    id?: IntFilter<"Flowers"> | number
    color?: StringFilter<"Flowers"> | string
    name?: StringFilter<"Flowers"> | string
    price?: IntFilter<"Flowers"> | number
    varietyId?: IntFilter<"Flowers"> | number
  }

  export type FlowersCreateWithoutHistoryInput = {
    color: string
    name: string
    price: number
    imgs?: FlowersAndFilesCreateNestedManyWithoutFlowersInput
    farms?: FlowersFarmsAndFlowersCreateNestedManyWithoutFlowersInput
    bouquets?: FlowersBouquetsAndFlowersCreateNestedManyWithoutFlowersInput
    variety: FlowersVarietyCreateNestedOneWithoutFlowersInput
  }

  export type FlowersUncheckedCreateWithoutHistoryInput = {
    id?: number
    color: string
    name: string
    price: number
    varietyId: number
    imgs?: FlowersAndFilesUncheckedCreateNestedManyWithoutFlowersInput
    farms?: FlowersFarmsAndFlowersUncheckedCreateNestedManyWithoutFlowersInput
    bouquets?: FlowersBouquetsAndFlowersUncheckedCreateNestedManyWithoutFlowersInput
  }

  export type FlowersCreateOrConnectWithoutHistoryInput = {
    where: FlowersWhereUniqueInput
    create: XOR<FlowersCreateWithoutHistoryInput, FlowersUncheckedCreateWithoutHistoryInput>
  }

  export type FlowersUpsertWithoutHistoryInput = {
    update: XOR<FlowersUpdateWithoutHistoryInput, FlowersUncheckedUpdateWithoutHistoryInput>
    create: XOR<FlowersCreateWithoutHistoryInput, FlowersUncheckedCreateWithoutHistoryInput>
    where?: FlowersWhereInput
  }

  export type FlowersUpdateToOneWithWhereWithoutHistoryInput = {
    where?: FlowersWhereInput
    data: XOR<FlowersUpdateWithoutHistoryInput, FlowersUncheckedUpdateWithoutHistoryInput>
  }

  export type FlowersUpdateWithoutHistoryInput = {
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imgs?: FlowersAndFilesUpdateManyWithoutFlowersNestedInput
    farms?: FlowersFarmsAndFlowersUpdateManyWithoutFlowersNestedInput
    bouquets?: FlowersBouquetsAndFlowersUpdateManyWithoutFlowersNestedInput
    variety?: FlowersVarietyUpdateOneRequiredWithoutFlowersNestedInput
  }

  export type FlowersUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    varietyId?: IntFieldUpdateOperationsInput | number
    imgs?: FlowersAndFilesUncheckedUpdateManyWithoutFlowersNestedInput
    farms?: FlowersFarmsAndFlowersUncheckedUpdateManyWithoutFlowersNestedInput
    bouquets?: FlowersBouquetsAndFlowersUncheckedUpdateManyWithoutFlowersNestedInput
  }

  export type FlowersFarmsAndFlowersCreateWithoutFlowersFarmsInput = {
    flowers: FlowersCreateNestedOneWithoutFarmsInput
  }

  export type FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersFarmsInput = {
    flowersId: number
  }

  export type FlowersFarmsAndFlowersCreateOrConnectWithoutFlowersFarmsInput = {
    where: FlowersFarmsAndFlowersWhereUniqueInput
    create: XOR<FlowersFarmsAndFlowersCreateWithoutFlowersFarmsInput, FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersFarmsInput>
  }

  export type FlowersFarmsAndFlowersCreateManyFlowersFarmsInputEnvelope = {
    data: FlowersFarmsAndFlowersCreateManyFlowersFarmsInput | FlowersFarmsAndFlowersCreateManyFlowersFarmsInput[]
    skipDuplicates?: boolean
  }

  export type FlowersFarmsAndFlowersUpsertWithWhereUniqueWithoutFlowersFarmsInput = {
    where: FlowersFarmsAndFlowersWhereUniqueInput
    update: XOR<FlowersFarmsAndFlowersUpdateWithoutFlowersFarmsInput, FlowersFarmsAndFlowersUncheckedUpdateWithoutFlowersFarmsInput>
    create: XOR<FlowersFarmsAndFlowersCreateWithoutFlowersFarmsInput, FlowersFarmsAndFlowersUncheckedCreateWithoutFlowersFarmsInput>
  }

  export type FlowersFarmsAndFlowersUpdateWithWhereUniqueWithoutFlowersFarmsInput = {
    where: FlowersFarmsAndFlowersWhereUniqueInput
    data: XOR<FlowersFarmsAndFlowersUpdateWithoutFlowersFarmsInput, FlowersFarmsAndFlowersUncheckedUpdateWithoutFlowersFarmsInput>
  }

  export type FlowersFarmsAndFlowersUpdateManyWithWhereWithoutFlowersFarmsInput = {
    where: FlowersFarmsAndFlowersScalarWhereInput
    data: XOR<FlowersFarmsAndFlowersUpdateManyMutationInput, FlowersFarmsAndFlowersUncheckedUpdateManyWithoutFlowersFarmsInput>
  }

  export type FlowersCreateWithoutFarmsInput = {
    color: string
    name: string
    price: number
    imgs?: FlowersAndFilesCreateNestedManyWithoutFlowersInput
    history?: FlowersHistoryCreateNestedManyWithoutFlowerInput
    bouquets?: FlowersBouquetsAndFlowersCreateNestedManyWithoutFlowersInput
    variety: FlowersVarietyCreateNestedOneWithoutFlowersInput
  }

  export type FlowersUncheckedCreateWithoutFarmsInput = {
    id?: number
    color: string
    name: string
    price: number
    varietyId: number
    imgs?: FlowersAndFilesUncheckedCreateNestedManyWithoutFlowersInput
    history?: FlowersHistoryUncheckedCreateNestedManyWithoutFlowerInput
    bouquets?: FlowersBouquetsAndFlowersUncheckedCreateNestedManyWithoutFlowersInput
  }

  export type FlowersCreateOrConnectWithoutFarmsInput = {
    where: FlowersWhereUniqueInput
    create: XOR<FlowersCreateWithoutFarmsInput, FlowersUncheckedCreateWithoutFarmsInput>
  }

  export type FlowersFarmsCreateWithoutFlowersInput = {
    name: string
    country: string
    rate: number
  }

  export type FlowersFarmsUncheckedCreateWithoutFlowersInput = {
    id?: number
    name: string
    country: string
    rate: number
  }

  export type FlowersFarmsCreateOrConnectWithoutFlowersInput = {
    where: FlowersFarmsWhereUniqueInput
    create: XOR<FlowersFarmsCreateWithoutFlowersInput, FlowersFarmsUncheckedCreateWithoutFlowersInput>
  }

  export type FlowersUpsertWithoutFarmsInput = {
    update: XOR<FlowersUpdateWithoutFarmsInput, FlowersUncheckedUpdateWithoutFarmsInput>
    create: XOR<FlowersCreateWithoutFarmsInput, FlowersUncheckedCreateWithoutFarmsInput>
    where?: FlowersWhereInput
  }

  export type FlowersUpdateToOneWithWhereWithoutFarmsInput = {
    where?: FlowersWhereInput
    data: XOR<FlowersUpdateWithoutFarmsInput, FlowersUncheckedUpdateWithoutFarmsInput>
  }

  export type FlowersUpdateWithoutFarmsInput = {
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imgs?: FlowersAndFilesUpdateManyWithoutFlowersNestedInput
    history?: FlowersHistoryUpdateManyWithoutFlowerNestedInput
    bouquets?: FlowersBouquetsAndFlowersUpdateManyWithoutFlowersNestedInput
    variety?: FlowersVarietyUpdateOneRequiredWithoutFlowersNestedInput
  }

  export type FlowersUncheckedUpdateWithoutFarmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    varietyId?: IntFieldUpdateOperationsInput | number
    imgs?: FlowersAndFilesUncheckedUpdateManyWithoutFlowersNestedInput
    history?: FlowersHistoryUncheckedUpdateManyWithoutFlowerNestedInput
    bouquets?: FlowersBouquetsAndFlowersUncheckedUpdateManyWithoutFlowersNestedInput
  }

  export type FlowersFarmsUpsertWithoutFlowersInput = {
    update: XOR<FlowersFarmsUpdateWithoutFlowersInput, FlowersFarmsUncheckedUpdateWithoutFlowersInput>
    create: XOR<FlowersFarmsCreateWithoutFlowersInput, FlowersFarmsUncheckedCreateWithoutFlowersInput>
    where?: FlowersFarmsWhereInput
  }

  export type FlowersFarmsUpdateToOneWithWhereWithoutFlowersInput = {
    where?: FlowersFarmsWhereInput
    data: XOR<FlowersFarmsUpdateWithoutFlowersInput, FlowersFarmsUncheckedUpdateWithoutFlowersInput>
  }

  export type FlowersFarmsUpdateWithoutFlowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersFarmsUncheckedUpdateWithoutFlowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersBouquetsAndFlowersCreateWithoutFlowersBouquetsInput = {
    flowers: FlowersCreateNestedOneWithoutBouquetsInput
  }

  export type FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersBouquetsInput = {
    flowersId: number
  }

  export type FlowersBouquetsAndFlowersCreateOrConnectWithoutFlowersBouquetsInput = {
    where: FlowersBouquetsAndFlowersWhereUniqueInput
    create: XOR<FlowersBouquetsAndFlowersCreateWithoutFlowersBouquetsInput, FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersBouquetsInput>
  }

  export type FlowersBouquetsAndFlowersCreateManyFlowersBouquetsInputEnvelope = {
    data: FlowersBouquetsAndFlowersCreateManyFlowersBouquetsInput | FlowersBouquetsAndFlowersCreateManyFlowersBouquetsInput[]
    skipDuplicates?: boolean
  }

  export type FlowersBouquetsAndFlowersUpsertWithWhereUniqueWithoutFlowersBouquetsInput = {
    where: FlowersBouquetsAndFlowersWhereUniqueInput
    update: XOR<FlowersBouquetsAndFlowersUpdateWithoutFlowersBouquetsInput, FlowersBouquetsAndFlowersUncheckedUpdateWithoutFlowersBouquetsInput>
    create: XOR<FlowersBouquetsAndFlowersCreateWithoutFlowersBouquetsInput, FlowersBouquetsAndFlowersUncheckedCreateWithoutFlowersBouquetsInput>
  }

  export type FlowersBouquetsAndFlowersUpdateWithWhereUniqueWithoutFlowersBouquetsInput = {
    where: FlowersBouquetsAndFlowersWhereUniqueInput
    data: XOR<FlowersBouquetsAndFlowersUpdateWithoutFlowersBouquetsInput, FlowersBouquetsAndFlowersUncheckedUpdateWithoutFlowersBouquetsInput>
  }

  export type FlowersBouquetsAndFlowersUpdateManyWithWhereWithoutFlowersBouquetsInput = {
    where: FlowersBouquetsAndFlowersScalarWhereInput
    data: XOR<FlowersBouquetsAndFlowersUpdateManyMutationInput, FlowersBouquetsAndFlowersUncheckedUpdateManyWithoutFlowersBouquetsInput>
  }

  export type FlowersCreateWithoutBouquetsInput = {
    color: string
    name: string
    price: number
    imgs?: FlowersAndFilesCreateNestedManyWithoutFlowersInput
    history?: FlowersHistoryCreateNestedManyWithoutFlowerInput
    farms?: FlowersFarmsAndFlowersCreateNestedManyWithoutFlowersInput
    variety: FlowersVarietyCreateNestedOneWithoutFlowersInput
  }

  export type FlowersUncheckedCreateWithoutBouquetsInput = {
    id?: number
    color: string
    name: string
    price: number
    varietyId: number
    imgs?: FlowersAndFilesUncheckedCreateNestedManyWithoutFlowersInput
    history?: FlowersHistoryUncheckedCreateNestedManyWithoutFlowerInput
    farms?: FlowersFarmsAndFlowersUncheckedCreateNestedManyWithoutFlowersInput
  }

  export type FlowersCreateOrConnectWithoutBouquetsInput = {
    where: FlowersWhereUniqueInput
    create: XOR<FlowersCreateWithoutBouquetsInput, FlowersUncheckedCreateWithoutBouquetsInput>
  }

  export type FlowersBouquetsCreateWithoutFlowersInput = {
    name: string
    price: number
  }

  export type FlowersBouquetsUncheckedCreateWithoutFlowersInput = {
    id?: number
    name: string
    price: number
  }

  export type FlowersBouquetsCreateOrConnectWithoutFlowersInput = {
    where: FlowersBouquetsWhereUniqueInput
    create: XOR<FlowersBouquetsCreateWithoutFlowersInput, FlowersBouquetsUncheckedCreateWithoutFlowersInput>
  }

  export type FlowersUpsertWithoutBouquetsInput = {
    update: XOR<FlowersUpdateWithoutBouquetsInput, FlowersUncheckedUpdateWithoutBouquetsInput>
    create: XOR<FlowersCreateWithoutBouquetsInput, FlowersUncheckedCreateWithoutBouquetsInput>
    where?: FlowersWhereInput
  }

  export type FlowersUpdateToOneWithWhereWithoutBouquetsInput = {
    where?: FlowersWhereInput
    data: XOR<FlowersUpdateWithoutBouquetsInput, FlowersUncheckedUpdateWithoutBouquetsInput>
  }

  export type FlowersUpdateWithoutBouquetsInput = {
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imgs?: FlowersAndFilesUpdateManyWithoutFlowersNestedInput
    history?: FlowersHistoryUpdateManyWithoutFlowerNestedInput
    farms?: FlowersFarmsAndFlowersUpdateManyWithoutFlowersNestedInput
    variety?: FlowersVarietyUpdateOneRequiredWithoutFlowersNestedInput
  }

  export type FlowersUncheckedUpdateWithoutBouquetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    varietyId?: IntFieldUpdateOperationsInput | number
    imgs?: FlowersAndFilesUncheckedUpdateManyWithoutFlowersNestedInput
    history?: FlowersHistoryUncheckedUpdateManyWithoutFlowerNestedInput
    farms?: FlowersFarmsAndFlowersUncheckedUpdateManyWithoutFlowersNestedInput
  }

  export type FlowersBouquetsUpsertWithoutFlowersInput = {
    update: XOR<FlowersBouquetsUpdateWithoutFlowersInput, FlowersBouquetsUncheckedUpdateWithoutFlowersInput>
    create: XOR<FlowersBouquetsCreateWithoutFlowersInput, FlowersBouquetsUncheckedCreateWithoutFlowersInput>
    where?: FlowersBouquetsWhereInput
  }

  export type FlowersBouquetsUpdateToOneWithWhereWithoutFlowersInput = {
    where?: FlowersBouquetsWhereInput
    data: XOR<FlowersBouquetsUpdateWithoutFlowersInput, FlowersBouquetsUncheckedUpdateWithoutFlowersInput>
  }

  export type FlowersBouquetsUpdateWithoutFlowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersBouquetsUncheckedUpdateWithoutFlowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersCreateWithoutImgsInput = {
    color: string
    name: string
    price: number
    history?: FlowersHistoryCreateNestedManyWithoutFlowerInput
    farms?: FlowersFarmsAndFlowersCreateNestedManyWithoutFlowersInput
    bouquets?: FlowersBouquetsAndFlowersCreateNestedManyWithoutFlowersInput
    variety: FlowersVarietyCreateNestedOneWithoutFlowersInput
  }

  export type FlowersUncheckedCreateWithoutImgsInput = {
    id?: number
    color: string
    name: string
    price: number
    varietyId: number
    history?: FlowersHistoryUncheckedCreateNestedManyWithoutFlowerInput
    farms?: FlowersFarmsAndFlowersUncheckedCreateNestedManyWithoutFlowersInput
    bouquets?: FlowersBouquetsAndFlowersUncheckedCreateNestedManyWithoutFlowersInput
  }

  export type FlowersCreateOrConnectWithoutImgsInput = {
    where: FlowersWhereUniqueInput
    create: XOR<FlowersCreateWithoutImgsInput, FlowersUncheckedCreateWithoutImgsInput>
  }

  export type PublicFilesCreateWithoutFlowersInput = {
    name: string
    size: number
    uploadAt?: Date | string
  }

  export type PublicFilesUncheckedCreateWithoutFlowersInput = {
    id?: number
    name: string
    size: number
    uploadAt?: Date | string
  }

  export type PublicFilesCreateOrConnectWithoutFlowersInput = {
    where: PublicFilesWhereUniqueInput
    create: XOR<PublicFilesCreateWithoutFlowersInput, PublicFilesUncheckedCreateWithoutFlowersInput>
  }

  export type FlowersUpsertWithoutImgsInput = {
    update: XOR<FlowersUpdateWithoutImgsInput, FlowersUncheckedUpdateWithoutImgsInput>
    create: XOR<FlowersCreateWithoutImgsInput, FlowersUncheckedCreateWithoutImgsInput>
    where?: FlowersWhereInput
  }

  export type FlowersUpdateToOneWithWhereWithoutImgsInput = {
    where?: FlowersWhereInput
    data: XOR<FlowersUpdateWithoutImgsInput, FlowersUncheckedUpdateWithoutImgsInput>
  }

  export type FlowersUpdateWithoutImgsInput = {
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    history?: FlowersHistoryUpdateManyWithoutFlowerNestedInput
    farms?: FlowersFarmsAndFlowersUpdateManyWithoutFlowersNestedInput
    bouquets?: FlowersBouquetsAndFlowersUpdateManyWithoutFlowersNestedInput
    variety?: FlowersVarietyUpdateOneRequiredWithoutFlowersNestedInput
  }

  export type FlowersUncheckedUpdateWithoutImgsInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    varietyId?: IntFieldUpdateOperationsInput | number
    history?: FlowersHistoryUncheckedUpdateManyWithoutFlowerNestedInput
    farms?: FlowersFarmsAndFlowersUncheckedUpdateManyWithoutFlowersNestedInput
    bouquets?: FlowersBouquetsAndFlowersUncheckedUpdateManyWithoutFlowersNestedInput
  }

  export type PublicFilesUpsertWithoutFlowersInput = {
    update: XOR<PublicFilesUpdateWithoutFlowersInput, PublicFilesUncheckedUpdateWithoutFlowersInput>
    create: XOR<PublicFilesCreateWithoutFlowersInput, PublicFilesUncheckedCreateWithoutFlowersInput>
    where?: PublicFilesWhereInput
  }

  export type PublicFilesUpdateToOneWithWhereWithoutFlowersInput = {
    where?: PublicFilesWhereInput
    data: XOR<PublicFilesUpdateWithoutFlowersInput, PublicFilesUncheckedUpdateWithoutFlowersInput>
  }

  export type PublicFilesUpdateWithoutFlowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicFilesUncheckedUpdateWithoutFlowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowersAndFilesCreateWithoutPublicFilesInput = {
    flowers: FlowersCreateNestedOneWithoutImgsInput
  }

  export type FlowersAndFilesUncheckedCreateWithoutPublicFilesInput = {
    flowersId: number
  }

  export type FlowersAndFilesCreateOrConnectWithoutPublicFilesInput = {
    where: FlowersAndFilesWhereUniqueInput
    create: XOR<FlowersAndFilesCreateWithoutPublicFilesInput, FlowersAndFilesUncheckedCreateWithoutPublicFilesInput>
  }

  export type FlowersAndFilesCreateManyPublicFilesInputEnvelope = {
    data: FlowersAndFilesCreateManyPublicFilesInput | FlowersAndFilesCreateManyPublicFilesInput[]
    skipDuplicates?: boolean
  }

  export type FlowersAndFilesUpsertWithWhereUniqueWithoutPublicFilesInput = {
    where: FlowersAndFilesWhereUniqueInput
    update: XOR<FlowersAndFilesUpdateWithoutPublicFilesInput, FlowersAndFilesUncheckedUpdateWithoutPublicFilesInput>
    create: XOR<FlowersAndFilesCreateWithoutPublicFilesInput, FlowersAndFilesUncheckedCreateWithoutPublicFilesInput>
  }

  export type FlowersAndFilesUpdateWithWhereUniqueWithoutPublicFilesInput = {
    where: FlowersAndFilesWhereUniqueInput
    data: XOR<FlowersAndFilesUpdateWithoutPublicFilesInput, FlowersAndFilesUncheckedUpdateWithoutPublicFilesInput>
  }

  export type FlowersAndFilesUpdateManyWithWhereWithoutPublicFilesInput = {
    where: FlowersAndFilesScalarWhereInput
    data: XOR<FlowersAndFilesUpdateManyMutationInput, FlowersAndFilesUncheckedUpdateManyWithoutPublicFilesInput>
  }

  export type FlowersAndFilesCreateManyFlowersInput = {
    publicFilesId: number
  }

  export type FlowersHistoryCreateManyFlowerInput = {
    id?: number
    date: number
    price: number
  }

  export type FlowersFarmsAndFlowersCreateManyFlowersInput = {
    flowersFarmsId: number
  }

  export type FlowersBouquetsAndFlowersCreateManyFlowersInput = {
    flowersBouquetsId: number
  }

  export type FlowersAndFilesUpdateWithoutFlowersInput = {
    publicFiles?: PublicFilesUpdateOneRequiredWithoutFlowersNestedInput
  }

  export type FlowersAndFilesUncheckedUpdateWithoutFlowersInput = {
    publicFilesId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersAndFilesUncheckedUpdateManyWithoutFlowersInput = {
    publicFilesId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersHistoryUpdateWithoutFlowerInput = {
    date?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersHistoryUncheckedUpdateWithoutFlowerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersHistoryUncheckedUpdateManyWithoutFlowerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersFarmsAndFlowersUpdateWithoutFlowersInput = {
    flowersFarms?: FlowersFarmsUpdateOneRequiredWithoutFlowersNestedInput
  }

  export type FlowersFarmsAndFlowersUncheckedUpdateWithoutFlowersInput = {
    flowersFarmsId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersFarmsAndFlowersUncheckedUpdateManyWithoutFlowersInput = {
    flowersFarmsId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersBouquetsAndFlowersUpdateWithoutFlowersInput = {
    flowersBouquets?: FlowersBouquetsUpdateOneRequiredWithoutFlowersNestedInput
  }

  export type FlowersBouquetsAndFlowersUncheckedUpdateWithoutFlowersInput = {
    flowersBouquetsId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersBouquetsAndFlowersUncheckedUpdateManyWithoutFlowersInput = {
    flowersBouquetsId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersCreateManyVarietyInput = {
    id?: number
    color: string
    name: string
    price: number
  }

  export type FlowersUpdateWithoutVarietyInput = {
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imgs?: FlowersAndFilesUpdateManyWithoutFlowersNestedInput
    history?: FlowersHistoryUpdateManyWithoutFlowerNestedInput
    farms?: FlowersFarmsAndFlowersUpdateManyWithoutFlowersNestedInput
    bouquets?: FlowersBouquetsAndFlowersUpdateManyWithoutFlowersNestedInput
  }

  export type FlowersUncheckedUpdateWithoutVarietyInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imgs?: FlowersAndFilesUncheckedUpdateManyWithoutFlowersNestedInput
    history?: FlowersHistoryUncheckedUpdateManyWithoutFlowerNestedInput
    farms?: FlowersFarmsAndFlowersUncheckedUpdateManyWithoutFlowersNestedInput
    bouquets?: FlowersBouquetsAndFlowersUncheckedUpdateManyWithoutFlowersNestedInput
  }

  export type FlowersUncheckedUpdateManyWithoutVarietyInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersFarmsAndFlowersCreateManyFlowersFarmsInput = {
    flowersId: number
  }

  export type FlowersFarmsAndFlowersUpdateWithoutFlowersFarmsInput = {
    flowers?: FlowersUpdateOneRequiredWithoutFarmsNestedInput
  }

  export type FlowersFarmsAndFlowersUncheckedUpdateWithoutFlowersFarmsInput = {
    flowersId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersFarmsAndFlowersUncheckedUpdateManyWithoutFlowersFarmsInput = {
    flowersId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersBouquetsAndFlowersCreateManyFlowersBouquetsInput = {
    flowersId: number
  }

  export type FlowersBouquetsAndFlowersUpdateWithoutFlowersBouquetsInput = {
    flowers?: FlowersUpdateOneRequiredWithoutBouquetsNestedInput
  }

  export type FlowersBouquetsAndFlowersUncheckedUpdateWithoutFlowersBouquetsInput = {
    flowersId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersBouquetsAndFlowersUncheckedUpdateManyWithoutFlowersBouquetsInput = {
    flowersId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersAndFilesCreateManyPublicFilesInput = {
    flowersId: number
  }

  export type FlowersAndFilesUpdateWithoutPublicFilesInput = {
    flowers?: FlowersUpdateOneRequiredWithoutImgsNestedInput
  }

  export type FlowersAndFilesUncheckedUpdateWithoutPublicFilesInput = {
    flowersId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersAndFilesUncheckedUpdateManyWithoutPublicFilesInput = {
    flowersId?: IntFieldUpdateOperationsInput | number
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