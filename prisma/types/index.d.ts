
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
 * Model Files
 * 
 */
export type Files = $Result.DefaultSelection<Prisma.$FilesPayload>
/**
 * Model Flowers
 * 
 */
export type Flowers = $Result.DefaultSelection<Prisma.$FlowersPayload>
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
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Files
 * const files = await prisma.files.findMany()
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
   * // Fetch zero or more Files
   * const files = await prisma.files.findMany()
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
   * `prisma.files`: Exposes CRUD operations for the **Files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.files.findMany()
    * ```
    */
  get files(): Prisma.FilesDelegate<ExtArgs, ClientOptions>;

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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    Files: 'Files',
    Flowers: 'Flowers',
    FlowersHistory: 'FlowersHistory',
    FlowersFarms: 'FlowersFarms',
    FlowersFarmsAndFlowers: 'FlowersFarmsAndFlowers',
    Users: 'Users',
    UsersFiles: 'UsersFiles'
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
      modelProps: "files" | "flowers" | "flowersHistory" | "flowersFarms" | "flowersFarmsAndFlowers" | "users" | "usersFiles"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Files: {
        payload: Prisma.$FilesPayload<ExtArgs>
        fields: Prisma.FilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          findFirst: {
            args: Prisma.FilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          findMany: {
            args: Prisma.FilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>[]
          }
          create: {
            args: Prisma.FilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          createMany: {
            args: Prisma.FilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>[]
          }
          delete: {
            args: Prisma.FilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          update: {
            args: Prisma.FilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          deleteMany: {
            args: Prisma.FilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>[]
          }
          upsert: {
            args: Prisma.FilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          aggregate: {
            args: Prisma.FilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFiles>
          }
          groupBy: {
            args: Prisma.FilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilesCountArgs<ExtArgs>
            result: $Utils.Optional<FilesCountAggregateOutputType> | number
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
    files?: FilesOmit
    flowers?: FlowersOmit
    flowersHistory?: FlowersHistoryOmit
    flowersFarms?: FlowersFarmsOmit
    flowersFarmsAndFlowers?: FlowersFarmsAndFlowersOmit
    users?: UsersOmit
    usersFiles?: UsersFilesOmit
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
    history: number
    farms: number
  }

  export type FlowersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | FlowersCountOutputTypeCountHistoryArgs
    farms?: boolean | FlowersCountOutputTypeCountFarmsArgs
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
    where?: FlowersHistoryWhereInput
  }

  /**
   * FlowersCountOutputType without action
   */
  export type FlowersCountOutputTypeCountFarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowersFarmsAndFlowersWhereInput
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
   * Models
   */

  /**
   * Model Files
   */

  export type AggregateFiles = {
    _count: FilesCountAggregateOutputType | null
    _avg: FilesAvgAggregateOutputType | null
    _sum: FilesSumAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  export type FilesAvgAggregateOutputType = {
    id: number | null
    createAt: number | null
  }

  export type FilesSumAggregateOutputType = {
    id: number | null
    createAt: number | null
  }

  export type FilesMinAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: number | null
  }

  export type FilesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: number | null
  }

  export type FilesCountAggregateOutputType = {
    id: number
    name: number
    createAt: number
    _all: number
  }


  export type FilesAvgAggregateInputType = {
    id?: true
    createAt?: true
  }

  export type FilesSumAggregateInputType = {
    id?: true
    createAt?: true
  }

  export type FilesMinAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
  }

  export type FilesMaxAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
  }

  export type FilesCountAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    _all?: true
  }

  export type FilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to aggregate.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilesMaxAggregateInputType
  }

  export type GetFilesAggregateType<T extends FilesAggregateArgs> = {
        [P in keyof T & keyof AggregateFiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiles[P]>
      : GetScalarType<T[P], AggregateFiles[P]>
  }




  export type FilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilesWhereInput
    orderBy?: FilesOrderByWithAggregationInput | FilesOrderByWithAggregationInput[]
    by: FilesScalarFieldEnum[] | FilesScalarFieldEnum
    having?: FilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilesCountAggregateInputType | true
    _avg?: FilesAvgAggregateInputType
    _sum?: FilesSumAggregateInputType
    _min?: FilesMinAggregateInputType
    _max?: FilesMaxAggregateInputType
  }

  export type FilesGroupByOutputType = {
    id: number
    name: string
    createAt: number
    _count: FilesCountAggregateOutputType | null
    _avg: FilesAvgAggregateOutputType | null
    _sum: FilesSumAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  type GetFilesGroupByPayload<T extends FilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilesGroupByOutputType[P]>
            : GetScalarType<T[P], FilesGroupByOutputType[P]>
        }
      >
    >


  export type FilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createAt?: boolean
  }, ExtArgs["result"]["files"]>

  export type FilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createAt?: boolean
  }, ExtArgs["result"]["files"]>

  export type FilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createAt?: boolean
  }, ExtArgs["result"]["files"]>

  export type FilesSelectScalar = {
    id?: boolean
    name?: boolean
    createAt?: boolean
  }

  export type FilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createAt", ExtArgs["result"]["files"]>

  export type $FilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Files"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createAt: number
    }, ExtArgs["result"]["files"]>
    composites: {}
  }

  type FilesGetPayload<S extends boolean | null | undefined | FilesDefaultArgs> = $Result.GetResult<Prisma.$FilesPayload, S>

  type FilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilesCountAggregateInputType | true
    }

  export interface FilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Files'], meta: { name: 'Files' } }
    /**
     * Find zero or one Files that matches the filter.
     * @param {FilesFindUniqueArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilesFindUniqueArgs>(args: SelectSubset<T, FilesFindUniqueArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilesFindUniqueOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilesFindUniqueOrThrowArgs>(args: SelectSubset<T, FilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindFirstArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilesFindFirstArgs>(args?: SelectSubset<T, FilesFindFirstArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindFirstOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilesFindFirstOrThrowArgs>(args?: SelectSubset<T, FilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.files.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filesWithIdOnly = await prisma.files.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilesFindManyArgs>(args?: SelectSubset<T, FilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Files.
     * @param {FilesCreateArgs} args - Arguments to create a Files.
     * @example
     * // Create one Files
     * const Files = await prisma.files.create({
     *   data: {
     *     // ... data to create a Files
     *   }
     * })
     * 
     */
    create<T extends FilesCreateArgs>(args: SelectSubset<T, FilesCreateArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FilesCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilesCreateManyArgs>(args?: SelectSubset<T, FilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FilesCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const filesWithIdOnly = await prisma.files.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilesCreateManyAndReturnArgs>(args?: SelectSubset<T, FilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Files.
     * @param {FilesDeleteArgs} args - Arguments to delete one Files.
     * @example
     * // Delete one Files
     * const Files = await prisma.files.delete({
     *   where: {
     *     // ... filter to delete one Files
     *   }
     * })
     * 
     */
    delete<T extends FilesDeleteArgs>(args: SelectSubset<T, FilesDeleteArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Files.
     * @param {FilesUpdateArgs} args - Arguments to update one Files.
     * @example
     * // Update one Files
     * const files = await prisma.files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilesUpdateArgs>(args: SelectSubset<T, FilesUpdateArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FilesDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilesDeleteManyArgs>(args?: SelectSubset<T, FilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilesUpdateManyArgs>(args: SelectSubset<T, FilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FilesUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const filesWithIdOnly = await prisma.files.updateManyAndReturn({
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
    updateManyAndReturn<T extends FilesUpdateManyAndReturnArgs>(args: SelectSubset<T, FilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Files.
     * @param {FilesUpsertArgs} args - Arguments to update or create a Files.
     * @example
     * // Update or create a Files
     * const files = await prisma.files.upsert({
     *   create: {
     *     // ... data to create a Files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Files we want to update
     *   }
     * })
     */
    upsert<T extends FilesUpsertArgs>(args: SelectSubset<T, FilesUpsertArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.files.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FilesCountArgs>(
      args?: Subset<T, FilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilesAggregateArgs>(args: Subset<T, FilesAggregateArgs>): Prisma.PrismaPromise<GetFilesAggregateType<T>>

    /**
     * Group by Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesGroupByArgs} args - Group by arguments.
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
      T extends FilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilesGroupByArgs['orderBy'] }
        : { orderBy?: FilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Files model
   */
  readonly fields: FilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Files model
   */ 
  interface FilesFieldRefs {
    readonly id: FieldRef<"Files", 'Int'>
    readonly name: FieldRef<"Files", 'String'>
    readonly createAt: FieldRef<"Files", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Files findUnique
   */
  export type FilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files findUniqueOrThrow
   */
  export type FilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files findFirst
   */
  export type FilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Files findFirstOrThrow
   */
  export type FilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Files findMany
   */
  export type FilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Files create
   */
  export type FilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * The data needed to create a Files.
     */
    data: XOR<FilesCreateInput, FilesUncheckedCreateInput>
  }

  /**
   * Files createMany
   */
  export type FilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FilesCreateManyInput | FilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Files createManyAndReturn
   */
  export type FilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FilesCreateManyInput | FilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Files update
   */
  export type FilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * The data needed to update a Files.
     */
    data: XOR<FilesUpdateInput, FilesUncheckedUpdateInput>
    /**
     * Choose, which Files to update.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files updateMany
   */
  export type FilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FilesWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * Files updateManyAndReturn
   */
  export type FilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FilesWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * Files upsert
   */
  export type FilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * The filter to search for the Files to update in case it exists.
     */
    where: FilesWhereUniqueInput
    /**
     * In case the Files found by the `where` argument doesn't exist, create a new Files with this data.
     */
    create: XOR<FilesCreateInput, FilesUncheckedCreateInput>
    /**
     * In case the Files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilesUpdateInput, FilesUncheckedUpdateInput>
  }

  /**
   * Files delete
   */
  export type FilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Filter which Files to delete.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files deleteMany
   */
  export type FilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FilesWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * Files without action
   */
  export type FilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
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
  }

  export type FlowersSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type FlowersMinAggregateOutputType = {
    id: number | null
    color: string | null
    name: string | null
    price: number | null
  }

  export type FlowersMaxAggregateOutputType = {
    id: number | null
    color: string | null
    name: string | null
    price: number | null
  }

  export type FlowersCountAggregateOutputType = {
    id: number
    color: number
    name: number
    price: number
    _all: number
  }


  export type FlowersAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type FlowersSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type FlowersMinAggregateInputType = {
    id?: true
    color?: true
    name?: true
    price?: true
  }

  export type FlowersMaxAggregateInputType = {
    id?: true
    color?: true
    name?: true
    price?: true
  }

  export type FlowersCountAggregateInputType = {
    id?: true
    color?: true
    name?: true
    price?: true
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
    history?: boolean | Flowers$historyArgs<ExtArgs>
    farms?: boolean | Flowers$farmsArgs<ExtArgs>
    _count?: boolean | FlowersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowers"]>

  export type FlowersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
    name?: boolean
    price?: boolean
  }, ExtArgs["result"]["flowers"]>

  export type FlowersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
    name?: boolean
    price?: boolean
  }, ExtArgs["result"]["flowers"]>

  export type FlowersSelectScalar = {
    id?: boolean
    color?: boolean
    name?: boolean
    price?: boolean
  }

  export type FlowersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "color" | "name" | "price", ExtArgs["result"]["flowers"]>
  export type FlowersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | Flowers$historyArgs<ExtArgs>
    farms?: boolean | Flowers$farmsArgs<ExtArgs>
    _count?: boolean | FlowersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlowersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FlowersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FlowersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flowers"
    objects: {
      history: Prisma.$FlowersHistoryPayload<ExtArgs>[]
      farms: Prisma.$FlowersFarmsAndFlowersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      color: string
      name: string
      price: number
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
    history<T extends Flowers$historyArgs<ExtArgs> = {}>(args?: Subset<T, Flowers$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    farms<T extends Flowers$farmsArgs<ExtArgs> = {}>(args?: Subset<T, Flowers$farmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowersFarmsAndFlowersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FilesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createAt: 'createAt'
  };

  export type FilesScalarFieldEnum = (typeof FilesScalarFieldEnum)[keyof typeof FilesScalarFieldEnum]


  export const FlowersScalarFieldEnum: {
    id: 'id',
    color: 'color',
    name: 'name',
    price: 'price'
  };

  export type FlowersScalarFieldEnum = (typeof FlowersScalarFieldEnum)[keyof typeof FlowersScalarFieldEnum]


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


  export type FilesWhereInput = {
    AND?: FilesWhereInput | FilesWhereInput[]
    OR?: FilesWhereInput[]
    NOT?: FilesWhereInput | FilesWhereInput[]
    id?: IntFilter<"Files"> | number
    name?: StringFilter<"Files"> | string
    createAt?: IntFilter<"Files"> | number
  }

  export type FilesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
  }

  export type FilesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: FilesWhereInput | FilesWhereInput[]
    OR?: FilesWhereInput[]
    NOT?: FilesWhereInput | FilesWhereInput[]
    createAt?: IntFilter<"Files"> | number
  }, "id" | "name">

  export type FilesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    _count?: FilesCountOrderByAggregateInput
    _avg?: FilesAvgOrderByAggregateInput
    _max?: FilesMaxOrderByAggregateInput
    _min?: FilesMinOrderByAggregateInput
    _sum?: FilesSumOrderByAggregateInput
  }

  export type FilesScalarWhereWithAggregatesInput = {
    AND?: FilesScalarWhereWithAggregatesInput | FilesScalarWhereWithAggregatesInput[]
    OR?: FilesScalarWhereWithAggregatesInput[]
    NOT?: FilesScalarWhereWithAggregatesInput | FilesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Files"> | number
    name?: StringWithAggregatesFilter<"Files"> | string
    createAt?: IntWithAggregatesFilter<"Files"> | number
  }

  export type FlowersWhereInput = {
    AND?: FlowersWhereInput | FlowersWhereInput[]
    OR?: FlowersWhereInput[]
    NOT?: FlowersWhereInput | FlowersWhereInput[]
    id?: IntFilter<"Flowers"> | number
    color?: StringFilter<"Flowers"> | string
    name?: StringFilter<"Flowers"> | string
    price?: IntFilter<"Flowers"> | number
    history?: FlowersHistoryListRelationFilter
    farms?: FlowersFarmsAndFlowersListRelationFilter
  }

  export type FlowersOrderByWithRelationInput = {
    id?: SortOrder
    color?: SortOrder
    name?: SortOrder
    price?: SortOrder
    history?: FlowersHistoryOrderByRelationAggregateInput
    farms?: FlowersFarmsAndFlowersOrderByRelationAggregateInput
  }

  export type FlowersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FlowersWhereInput | FlowersWhereInput[]
    OR?: FlowersWhereInput[]
    NOT?: FlowersWhereInput | FlowersWhereInput[]
    color?: StringFilter<"Flowers"> | string
    name?: StringFilter<"Flowers"> | string
    price?: IntFilter<"Flowers"> | number
    history?: FlowersHistoryListRelationFilter
    farms?: FlowersFarmsAndFlowersListRelationFilter
  }, "id">

  export type FlowersOrderByWithAggregationInput = {
    id?: SortOrder
    color?: SortOrder
    name?: SortOrder
    price?: SortOrder
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

  export type FilesCreateInput = {
    name: string
    createAt: number
  }

  export type FilesUncheckedCreateInput = {
    id?: number
    name: string
    createAt: number
  }

  export type FilesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: IntFieldUpdateOperationsInput | number
  }

  export type FilesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: IntFieldUpdateOperationsInput | number
  }

  export type FilesCreateManyInput = {
    id?: number
    name: string
    createAt: number
  }

  export type FilesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: IntFieldUpdateOperationsInput | number
  }

  export type FilesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: IntFieldUpdateOperationsInput | number
  }

  export type FlowersCreateInput = {
    color: string
    name: string
    price: number
    history?: FlowersHistoryCreateNestedManyWithoutFlowerInput
    farms?: FlowersFarmsAndFlowersCreateNestedManyWithoutFlowersInput
  }

  export type FlowersUncheckedCreateInput = {
    id?: number
    color: string
    name: string
    price: number
    history?: FlowersHistoryUncheckedCreateNestedManyWithoutFlowerInput
    farms?: FlowersFarmsAndFlowersUncheckedCreateNestedManyWithoutFlowersInput
  }

  export type FlowersUpdateInput = {
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    history?: FlowersHistoryUpdateManyWithoutFlowerNestedInput
    farms?: FlowersFarmsAndFlowersUpdateManyWithoutFlowersNestedInput
  }

  export type FlowersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    history?: FlowersHistoryUncheckedUpdateManyWithoutFlowerNestedInput
    farms?: FlowersFarmsAndFlowersUncheckedUpdateManyWithoutFlowersNestedInput
  }

  export type FlowersCreateManyInput = {
    id?: number
    color: string
    name: string
    price: number
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

  export type FilesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
  }

  export type FilesAvgOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
  }

  export type FilesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
  }

  export type FilesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
  }

  export type FilesSumOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
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

  export type FlowersHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowersFarmsAndFlowersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowersCountOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type FlowersAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type FlowersMaxOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type FlowersMinOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type FlowersSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
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

  export type FlowersCreateWithoutHistoryInput = {
    color: string
    name: string
    price: number
    farms?: FlowersFarmsAndFlowersCreateNestedManyWithoutFlowersInput
  }

  export type FlowersUncheckedCreateWithoutHistoryInput = {
    id?: number
    color: string
    name: string
    price: number
    farms?: FlowersFarmsAndFlowersUncheckedCreateNestedManyWithoutFlowersInput
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
    farms?: FlowersFarmsAndFlowersUpdateManyWithoutFlowersNestedInput
  }

  export type FlowersUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    farms?: FlowersFarmsAndFlowersUncheckedUpdateManyWithoutFlowersNestedInput
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
    history?: FlowersHistoryCreateNestedManyWithoutFlowerInput
  }

  export type FlowersUncheckedCreateWithoutFarmsInput = {
    id?: number
    color: string
    name: string
    price: number
    history?: FlowersHistoryUncheckedCreateNestedManyWithoutFlowerInput
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
    history?: FlowersHistoryUpdateManyWithoutFlowerNestedInput
  }

  export type FlowersUncheckedUpdateWithoutFarmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    history?: FlowersHistoryUncheckedUpdateManyWithoutFlowerNestedInput
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

  export type FlowersHistoryCreateManyFlowerInput = {
    id?: number
    date: number
    price: number
  }

  export type FlowersFarmsAndFlowersCreateManyFlowersInput = {
    flowersFarmsId: number
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