
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
 * Model Watchlist
 * 
 */
export type Watchlist = $Result.DefaultSelection<Prisma.$WatchlistPayload>
/**
 * Model WatchlistCoin
 * 
 */
export type WatchlistCoin = $Result.DefaultSelection<Prisma.$WatchlistCoinPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model AlertEvent
 * 
 */
export type AlertEvent = $Result.DefaultSelection<Prisma.$AlertEventPayload>
/**
 * Model RawTweet
 * 
 */
export type RawTweet = $Result.DefaultSelection<Prisma.$RawTweetPayload>
/**
 * Model SentimentScore
 * 
 */
export type SentimentScore = $Result.DefaultSelection<Prisma.$SentimentScorePayload>
/**
 * Model MarketData
 * 
 */
export type MarketData = $Result.DefaultSelection<Prisma.$MarketDataPayload>

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchlist`: Exposes CRUD operations for the **Watchlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watchlists
    * const watchlists = await prisma.watchlist.findMany()
    * ```
    */
  get watchlist(): Prisma.WatchlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchlistCoin`: Exposes CRUD operations for the **WatchlistCoin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WatchlistCoins
    * const watchlistCoins = await prisma.watchlistCoin.findMany()
    * ```
    */
  get watchlistCoin(): Prisma.WatchlistCoinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alertEvent`: Exposes CRUD operations for the **AlertEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlertEvents
    * const alertEvents = await prisma.alertEvent.findMany()
    * ```
    */
  get alertEvent(): Prisma.AlertEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rawTweet`: Exposes CRUD operations for the **RawTweet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RawTweets
    * const rawTweets = await prisma.rawTweet.findMany()
    * ```
    */
  get rawTweet(): Prisma.RawTweetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sentimentScore`: Exposes CRUD operations for the **SentimentScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SentimentScores
    * const sentimentScores = await prisma.sentimentScore.findMany()
    * ```
    */
  get sentimentScore(): Prisma.SentimentScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketData`: Exposes CRUD operations for the **MarketData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketData
    * const marketData = await prisma.marketData.findMany()
    * ```
    */
  get marketData(): Prisma.MarketDataDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Watchlist: 'Watchlist',
    WatchlistCoin: 'WatchlistCoin',
    Alert: 'Alert',
    AlertEvent: 'AlertEvent',
    RawTweet: 'RawTweet',
    SentimentScore: 'SentimentScore',
    MarketData: 'MarketData'
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
      modelProps: "user" | "watchlist" | "watchlistCoin" | "alert" | "alertEvent" | "rawTweet" | "sentimentScore" | "marketData"
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
      Watchlist: {
        payload: Prisma.$WatchlistPayload<ExtArgs>
        fields: Prisma.WatchlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          findFirst: {
            args: Prisma.WatchlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          findMany: {
            args: Prisma.WatchlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          create: {
            args: Prisma.WatchlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          createMany: {
            args: Prisma.WatchlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          delete: {
            args: Prisma.WatchlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          update: {
            args: Prisma.WatchlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          deleteMany: {
            args: Prisma.WatchlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          upsert: {
            args: Prisma.WatchlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          aggregate: {
            args: Prisma.WatchlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchlist>
          }
          groupBy: {
            args: Prisma.WatchlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchlistCountArgs<ExtArgs>
            result: $Utils.Optional<WatchlistCountAggregateOutputType> | number
          }
        }
      }
      WatchlistCoin: {
        payload: Prisma.$WatchlistCoinPayload<ExtArgs>
        fields: Prisma.WatchlistCoinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchlistCoinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistCoinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchlistCoinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistCoinPayload>
          }
          findFirst: {
            args: Prisma.WatchlistCoinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistCoinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchlistCoinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistCoinPayload>
          }
          findMany: {
            args: Prisma.WatchlistCoinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistCoinPayload>[]
          }
          create: {
            args: Prisma.WatchlistCoinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistCoinPayload>
          }
          createMany: {
            args: Prisma.WatchlistCoinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchlistCoinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistCoinPayload>[]
          }
          delete: {
            args: Prisma.WatchlistCoinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistCoinPayload>
          }
          update: {
            args: Prisma.WatchlistCoinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistCoinPayload>
          }
          deleteMany: {
            args: Prisma.WatchlistCoinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchlistCoinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchlistCoinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistCoinPayload>[]
          }
          upsert: {
            args: Prisma.WatchlistCoinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistCoinPayload>
          }
          aggregate: {
            args: Prisma.WatchlistCoinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchlistCoin>
          }
          groupBy: {
            args: Prisma.WatchlistCoinGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchlistCoinGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchlistCoinCountArgs<ExtArgs>
            result: $Utils.Optional<WatchlistCoinCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      AlertEvent: {
        payload: Prisma.$AlertEventPayload<ExtArgs>
        fields: Prisma.AlertEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEventPayload>
          }
          findFirst: {
            args: Prisma.AlertEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEventPayload>
          }
          findMany: {
            args: Prisma.AlertEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEventPayload>[]
          }
          create: {
            args: Prisma.AlertEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEventPayload>
          }
          createMany: {
            args: Prisma.AlertEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEventPayload>[]
          }
          delete: {
            args: Prisma.AlertEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEventPayload>
          }
          update: {
            args: Prisma.AlertEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEventPayload>
          }
          deleteMany: {
            args: Prisma.AlertEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEventPayload>[]
          }
          upsert: {
            args: Prisma.AlertEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEventPayload>
          }
          aggregate: {
            args: Prisma.AlertEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlertEvent>
          }
          groupBy: {
            args: Prisma.AlertEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertEventCountArgs<ExtArgs>
            result: $Utils.Optional<AlertEventCountAggregateOutputType> | number
          }
        }
      }
      RawTweet: {
        payload: Prisma.$RawTweetPayload<ExtArgs>
        fields: Prisma.RawTweetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RawTweetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawTweetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RawTweetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawTweetPayload>
          }
          findFirst: {
            args: Prisma.RawTweetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawTweetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RawTweetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawTweetPayload>
          }
          findMany: {
            args: Prisma.RawTweetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawTweetPayload>[]
          }
          create: {
            args: Prisma.RawTweetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawTweetPayload>
          }
          createMany: {
            args: Prisma.RawTweetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RawTweetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawTweetPayload>[]
          }
          delete: {
            args: Prisma.RawTweetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawTweetPayload>
          }
          update: {
            args: Prisma.RawTweetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawTweetPayload>
          }
          deleteMany: {
            args: Prisma.RawTweetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RawTweetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RawTweetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawTweetPayload>[]
          }
          upsert: {
            args: Prisma.RawTweetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawTweetPayload>
          }
          aggregate: {
            args: Prisma.RawTweetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRawTweet>
          }
          groupBy: {
            args: Prisma.RawTweetGroupByArgs<ExtArgs>
            result: $Utils.Optional<RawTweetGroupByOutputType>[]
          }
          count: {
            args: Prisma.RawTweetCountArgs<ExtArgs>
            result: $Utils.Optional<RawTweetCountAggregateOutputType> | number
          }
        }
      }
      SentimentScore: {
        payload: Prisma.$SentimentScorePayload<ExtArgs>
        fields: Prisma.SentimentScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SentimentScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SentimentScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload>
          }
          findFirst: {
            args: Prisma.SentimentScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SentimentScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload>
          }
          findMany: {
            args: Prisma.SentimentScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload>[]
          }
          create: {
            args: Prisma.SentimentScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload>
          }
          createMany: {
            args: Prisma.SentimentScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SentimentScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload>[]
          }
          delete: {
            args: Prisma.SentimentScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload>
          }
          update: {
            args: Prisma.SentimentScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload>
          }
          deleteMany: {
            args: Prisma.SentimentScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SentimentScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SentimentScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload>[]
          }
          upsert: {
            args: Prisma.SentimentScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload>
          }
          aggregate: {
            args: Prisma.SentimentScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSentimentScore>
          }
          groupBy: {
            args: Prisma.SentimentScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<SentimentScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.SentimentScoreCountArgs<ExtArgs>
            result: $Utils.Optional<SentimentScoreCountAggregateOutputType> | number
          }
        }
      }
      MarketData: {
        payload: Prisma.$MarketDataPayload<ExtArgs>
        fields: Prisma.MarketDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          findFirst: {
            args: Prisma.MarketDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          findMany: {
            args: Prisma.MarketDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>[]
          }
          create: {
            args: Prisma.MarketDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          createMany: {
            args: Prisma.MarketDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>[]
          }
          delete: {
            args: Prisma.MarketDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          update: {
            args: Prisma.MarketDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          deleteMany: {
            args: Prisma.MarketDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>[]
          }
          upsert: {
            args: Prisma.MarketDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          aggregate: {
            args: Prisma.MarketDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketData>
          }
          groupBy: {
            args: Prisma.MarketDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketDataCountArgs<ExtArgs>
            result: $Utils.Optional<MarketDataCountAggregateOutputType> | number
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
    user?: UserOmit
    watchlist?: WatchlistOmit
    watchlistCoin?: WatchlistCoinOmit
    alert?: AlertOmit
    alertEvent?: AlertEventOmit
    rawTweet?: RawTweetOmit
    sentimentScore?: SentimentScoreOmit
    marketData?: MarketDataOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    watchlists: number
    alerts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchlists?: boolean | UserCountOutputTypeCountWatchlistsArgs
    alerts?: boolean | UserCountOutputTypeCountAlertsArgs
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
  export type UserCountOutputTypeCountWatchlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }


  /**
   * Count Type WatchlistCountOutputType
   */

  export type WatchlistCountOutputType = {
    coins: number
  }

  export type WatchlistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coins?: boolean | WatchlistCountOutputTypeCountCoinsArgs
  }

  // Custom InputTypes
  /**
   * WatchlistCountOutputType without action
   */
  export type WatchlistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistCountOutputType
     */
    select?: WatchlistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WatchlistCountOutputType without action
   */
  export type WatchlistCountOutputTypeCountCoinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistCoinWhereInput
  }


  /**
   * Count Type AlertCountOutputType
   */

  export type AlertCountOutputType = {
    alertEvents: number
  }

  export type AlertCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alertEvents?: boolean | AlertCountOutputTypeCountAlertEventsArgs
  }

  // Custom InputTypes
  /**
   * AlertCountOutputType without action
   */
  export type AlertCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertCountOutputType
     */
    select?: AlertCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlertCountOutputType without action
   */
  export type AlertCountOutputTypeCountAlertEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertEventWhereInput
  }


  /**
   * Count Type RawTweetCountOutputType
   */

  export type RawTweetCountOutputType = {
    sentimentScores: number
  }

  export type RawTweetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentimentScores?: boolean | RawTweetCountOutputTypeCountSentimentScoresArgs
  }

  // Custom InputTypes
  /**
   * RawTweetCountOutputType without action
   */
  export type RawTweetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawTweetCountOutputType
     */
    select?: RawTweetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RawTweetCountOutputType without action
   */
  export type RawTweetCountOutputTypeCountSentimentScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SentimentScoreWhereInput
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
    email: string | null
    clerkId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    clerkId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    clerkId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    clerkId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    clerkId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    clerkId?: true
    createdAt?: true
    updatedAt?: true
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
    email: string
    clerkId: string
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    clerkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    watchlists?: boolean | User$watchlistsArgs<ExtArgs>
    alerts?: boolean | User$alertsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    clerkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    clerkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    clerkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "clerkId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchlists?: boolean | User$watchlistsArgs<ExtArgs>
    alerts?: boolean | User$alertsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      watchlists: Prisma.$WatchlistPayload<ExtArgs>[]
      alerts: Prisma.$AlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      clerkId: string
      createdAt: Date
      updatedAt: Date
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
    watchlists<T extends User$watchlistsArgs<ExtArgs> = {}>(args?: Subset<T, User$watchlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alerts<T extends User$alertsArgs<ExtArgs> = {}>(args?: Subset<T, User$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.watchlists
   */
  export type User$watchlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    cursor?: WatchlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * User.alerts
   */
  export type User$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
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
   * Model Watchlist
   */

  export type AggregateWatchlist = {
    _count: WatchlistCountAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  export type WatchlistMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WatchlistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WatchlistCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WatchlistMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WatchlistMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WatchlistCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WatchlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchlist to aggregate.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Watchlists
    **/
    _count?: true | WatchlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchlistMaxAggregateInputType
  }

  export type GetWatchlistAggregateType<T extends WatchlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchlist[P]>
      : GetScalarType<T[P], AggregateWatchlist[P]>
  }




  export type WatchlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithAggregationInput | WatchlistOrderByWithAggregationInput[]
    by: WatchlistScalarFieldEnum[] | WatchlistScalarFieldEnum
    having?: WatchlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchlistCountAggregateInputType | true
    _min?: WatchlistMinAggregateInputType
    _max?: WatchlistMaxAggregateInputType
  }

  export type WatchlistGroupByOutputType = {
    id: string
    name: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: WatchlistCountAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  type GetWatchlistGroupByPayload<T extends WatchlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
            : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
        }
      >
    >


  export type WatchlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    coins?: boolean | Watchlist$coinsArgs<ExtArgs>
    _count?: boolean | WatchlistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WatchlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["watchlist"]>
  export type WatchlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    coins?: boolean | Watchlist$coinsArgs<ExtArgs>
    _count?: boolean | WatchlistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WatchlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WatchlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WatchlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Watchlist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      coins: Prisma.$WatchlistCoinPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["watchlist"]>
    composites: {}
  }

  type WatchlistGetPayload<S extends boolean | null | undefined | WatchlistDefaultArgs> = $Result.GetResult<Prisma.$WatchlistPayload, S>

  type WatchlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchlistCountAggregateInputType | true
    }

  export interface WatchlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Watchlist'], meta: { name: 'Watchlist' } }
    /**
     * Find zero or one Watchlist that matches the filter.
     * @param {WatchlistFindUniqueArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchlistFindUniqueArgs>(args: SelectSubset<T, WatchlistFindUniqueArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Watchlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchlistFindUniqueOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchlistFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watchlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchlistFindFirstArgs>(args?: SelectSubset<T, WatchlistFindFirstArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watchlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchlistFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Watchlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watchlists
     * const watchlists = await prisma.watchlist.findMany()
     * 
     * // Get first 10 Watchlists
     * const watchlists = await prisma.watchlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchlistFindManyArgs>(args?: SelectSubset<T, WatchlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Watchlist.
     * @param {WatchlistCreateArgs} args - Arguments to create a Watchlist.
     * @example
     * // Create one Watchlist
     * const Watchlist = await prisma.watchlist.create({
     *   data: {
     *     // ... data to create a Watchlist
     *   }
     * })
     * 
     */
    create<T extends WatchlistCreateArgs>(args: SelectSubset<T, WatchlistCreateArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Watchlists.
     * @param {WatchlistCreateManyArgs} args - Arguments to create many Watchlists.
     * @example
     * // Create many Watchlists
     * const watchlist = await prisma.watchlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchlistCreateManyArgs>(args?: SelectSubset<T, WatchlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Watchlists and returns the data saved in the database.
     * @param {WatchlistCreateManyAndReturnArgs} args - Arguments to create many Watchlists.
     * @example
     * // Create many Watchlists
     * const watchlist = await prisma.watchlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Watchlists and only return the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchlistCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Watchlist.
     * @param {WatchlistDeleteArgs} args - Arguments to delete one Watchlist.
     * @example
     * // Delete one Watchlist
     * const Watchlist = await prisma.watchlist.delete({
     *   where: {
     *     // ... filter to delete one Watchlist
     *   }
     * })
     * 
     */
    delete<T extends WatchlistDeleteArgs>(args: SelectSubset<T, WatchlistDeleteArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Watchlist.
     * @param {WatchlistUpdateArgs} args - Arguments to update one Watchlist.
     * @example
     * // Update one Watchlist
     * const watchlist = await prisma.watchlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchlistUpdateArgs>(args: SelectSubset<T, WatchlistUpdateArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Watchlists.
     * @param {WatchlistDeleteManyArgs} args - Arguments to filter Watchlists to delete.
     * @example
     * // Delete a few Watchlists
     * const { count } = await prisma.watchlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchlistDeleteManyArgs>(args?: SelectSubset<T, WatchlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchlistUpdateManyArgs>(args: SelectSubset<T, WatchlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlists and returns the data updated in the database.
     * @param {WatchlistUpdateManyAndReturnArgs} args - Arguments to update many Watchlists.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Watchlists and only return the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.updateManyAndReturn({
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
    updateManyAndReturn<T extends WatchlistUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Watchlist.
     * @param {WatchlistUpsertArgs} args - Arguments to update or create a Watchlist.
     * @example
     * // Update or create a Watchlist
     * const watchlist = await prisma.watchlist.upsert({
     *   create: {
     *     // ... data to create a Watchlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watchlist we want to update
     *   }
     * })
     */
    upsert<T extends WatchlistUpsertArgs>(args: SelectSubset<T, WatchlistUpsertArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistCountArgs} args - Arguments to filter Watchlists to count.
     * @example
     * // Count the number of Watchlists
     * const count = await prisma.watchlist.count({
     *   where: {
     *     // ... the filter for the Watchlists we want to count
     *   }
     * })
    **/
    count<T extends WatchlistCountArgs>(
      args?: Subset<T, WatchlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatchlistAggregateArgs>(args: Subset<T, WatchlistAggregateArgs>): Prisma.PrismaPromise<GetWatchlistAggregateType<T>>

    /**
     * Group by Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistGroupByArgs} args - Group by arguments.
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
      T extends WatchlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchlistGroupByArgs['orderBy'] }
        : { orderBy?: WatchlistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WatchlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Watchlist model
   */
  readonly fields: WatchlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Watchlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coins<T extends Watchlist$coinsArgs<ExtArgs> = {}>(args?: Subset<T, Watchlist$coinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistCoinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Watchlist model
   */
  interface WatchlistFieldRefs {
    readonly id: FieldRef<"Watchlist", 'String'>
    readonly name: FieldRef<"Watchlist", 'String'>
    readonly userId: FieldRef<"Watchlist", 'String'>
    readonly createdAt: FieldRef<"Watchlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Watchlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Watchlist findUnique
   */
  export type WatchlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist findUniqueOrThrow
   */
  export type WatchlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist findFirst
   */
  export type WatchlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist findFirstOrThrow
   */
  export type WatchlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist findMany
   */
  export type WatchlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlists to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist create
   */
  export type WatchlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The data needed to create a Watchlist.
     */
    data: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
  }

  /**
   * Watchlist createMany
   */
  export type WatchlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Watchlists.
     */
    data: WatchlistCreateManyInput | WatchlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Watchlist createManyAndReturn
   */
  export type WatchlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * The data used to create many Watchlists.
     */
    data: WatchlistCreateManyInput | WatchlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watchlist update
   */
  export type WatchlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The data needed to update a Watchlist.
     */
    data: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
    /**
     * Choose, which Watchlist to update.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist updateMany
   */
  export type WatchlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Watchlists.
     */
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyInput>
    /**
     * Filter which Watchlists to update
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to update.
     */
    limit?: number
  }

  /**
   * Watchlist updateManyAndReturn
   */
  export type WatchlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * The data used to update Watchlists.
     */
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyInput>
    /**
     * Filter which Watchlists to update
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watchlist upsert
   */
  export type WatchlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The filter to search for the Watchlist to update in case it exists.
     */
    where: WatchlistWhereUniqueInput
    /**
     * In case the Watchlist found by the `where` argument doesn't exist, create a new Watchlist with this data.
     */
    create: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
    /**
     * In case the Watchlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
  }

  /**
   * Watchlist delete
   */
  export type WatchlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter which Watchlist to delete.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist deleteMany
   */
  export type WatchlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchlists to delete
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to delete.
     */
    limit?: number
  }

  /**
   * Watchlist.coins
   */
  export type Watchlist$coinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistCoin
     */
    select?: WatchlistCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistCoin
     */
    omit?: WatchlistCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistCoinInclude<ExtArgs> | null
    where?: WatchlistCoinWhereInput
    orderBy?: WatchlistCoinOrderByWithRelationInput | WatchlistCoinOrderByWithRelationInput[]
    cursor?: WatchlistCoinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlistCoinScalarFieldEnum | WatchlistCoinScalarFieldEnum[]
  }

  /**
   * Watchlist without action
   */
  export type WatchlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
  }


  /**
   * Model WatchlistCoin
   */

  export type AggregateWatchlistCoin = {
    _count: WatchlistCoinCountAggregateOutputType | null
    _min: WatchlistCoinMinAggregateOutputType | null
    _max: WatchlistCoinMaxAggregateOutputType | null
  }

  export type WatchlistCoinMinAggregateOutputType = {
    id: string | null
    watchlistId: string | null
    coinSymbol: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WatchlistCoinMaxAggregateOutputType = {
    id: string | null
    watchlistId: string | null
    coinSymbol: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WatchlistCoinCountAggregateOutputType = {
    id: number
    watchlistId: number
    coinSymbol: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WatchlistCoinMinAggregateInputType = {
    id?: true
    watchlistId?: true
    coinSymbol?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WatchlistCoinMaxAggregateInputType = {
    id?: true
    watchlistId?: true
    coinSymbol?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WatchlistCoinCountAggregateInputType = {
    id?: true
    watchlistId?: true
    coinSymbol?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WatchlistCoinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchlistCoin to aggregate.
     */
    where?: WatchlistCoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistCoins to fetch.
     */
    orderBy?: WatchlistCoinOrderByWithRelationInput | WatchlistCoinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchlistCoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistCoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistCoins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WatchlistCoins
    **/
    _count?: true | WatchlistCoinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchlistCoinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchlistCoinMaxAggregateInputType
  }

  export type GetWatchlistCoinAggregateType<T extends WatchlistCoinAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchlistCoin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchlistCoin[P]>
      : GetScalarType<T[P], AggregateWatchlistCoin[P]>
  }




  export type WatchlistCoinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistCoinWhereInput
    orderBy?: WatchlistCoinOrderByWithAggregationInput | WatchlistCoinOrderByWithAggregationInput[]
    by: WatchlistCoinScalarFieldEnum[] | WatchlistCoinScalarFieldEnum
    having?: WatchlistCoinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchlistCoinCountAggregateInputType | true
    _min?: WatchlistCoinMinAggregateInputType
    _max?: WatchlistCoinMaxAggregateInputType
  }

  export type WatchlistCoinGroupByOutputType = {
    id: string
    watchlistId: string
    coinSymbol: string
    createdAt: Date
    updatedAt: Date
    _count: WatchlistCoinCountAggregateOutputType | null
    _min: WatchlistCoinMinAggregateOutputType | null
    _max: WatchlistCoinMaxAggregateOutputType | null
  }

  type GetWatchlistCoinGroupByPayload<T extends WatchlistCoinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchlistCoinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchlistCoinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchlistCoinGroupByOutputType[P]>
            : GetScalarType<T[P], WatchlistCoinGroupByOutputType[P]>
        }
      >
    >


  export type WatchlistCoinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    watchlistId?: boolean
    coinSymbol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlistCoin"]>

  export type WatchlistCoinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    watchlistId?: boolean
    coinSymbol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlistCoin"]>

  export type WatchlistCoinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    watchlistId?: boolean
    coinSymbol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlistCoin"]>

  export type WatchlistCoinSelectScalar = {
    id?: boolean
    watchlistId?: boolean
    coinSymbol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WatchlistCoinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "watchlistId" | "coinSymbol" | "createdAt" | "updatedAt", ExtArgs["result"]["watchlistCoin"]>
  export type WatchlistCoinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
  }
  export type WatchlistCoinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
  }
  export type WatchlistCoinIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
  }

  export type $WatchlistCoinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WatchlistCoin"
    objects: {
      watchlist: Prisma.$WatchlistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      watchlistId: string
      coinSymbol: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["watchlistCoin"]>
    composites: {}
  }

  type WatchlistCoinGetPayload<S extends boolean | null | undefined | WatchlistCoinDefaultArgs> = $Result.GetResult<Prisma.$WatchlistCoinPayload, S>

  type WatchlistCoinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchlistCoinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchlistCoinCountAggregateInputType | true
    }

  export interface WatchlistCoinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WatchlistCoin'], meta: { name: 'WatchlistCoin' } }
    /**
     * Find zero or one WatchlistCoin that matches the filter.
     * @param {WatchlistCoinFindUniqueArgs} args - Arguments to find a WatchlistCoin
     * @example
     * // Get one WatchlistCoin
     * const watchlistCoin = await prisma.watchlistCoin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchlistCoinFindUniqueArgs>(args: SelectSubset<T, WatchlistCoinFindUniqueArgs<ExtArgs>>): Prisma__WatchlistCoinClient<$Result.GetResult<Prisma.$WatchlistCoinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WatchlistCoin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchlistCoinFindUniqueOrThrowArgs} args - Arguments to find a WatchlistCoin
     * @example
     * // Get one WatchlistCoin
     * const watchlistCoin = await prisma.watchlistCoin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchlistCoinFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchlistCoinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchlistCoinClient<$Result.GetResult<Prisma.$WatchlistCoinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchlistCoin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistCoinFindFirstArgs} args - Arguments to find a WatchlistCoin
     * @example
     * // Get one WatchlistCoin
     * const watchlistCoin = await prisma.watchlistCoin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchlistCoinFindFirstArgs>(args?: SelectSubset<T, WatchlistCoinFindFirstArgs<ExtArgs>>): Prisma__WatchlistCoinClient<$Result.GetResult<Prisma.$WatchlistCoinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchlistCoin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistCoinFindFirstOrThrowArgs} args - Arguments to find a WatchlistCoin
     * @example
     * // Get one WatchlistCoin
     * const watchlistCoin = await prisma.watchlistCoin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchlistCoinFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchlistCoinFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchlistCoinClient<$Result.GetResult<Prisma.$WatchlistCoinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WatchlistCoins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistCoinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WatchlistCoins
     * const watchlistCoins = await prisma.watchlistCoin.findMany()
     * 
     * // Get first 10 WatchlistCoins
     * const watchlistCoins = await prisma.watchlistCoin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchlistCoinWithIdOnly = await prisma.watchlistCoin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchlistCoinFindManyArgs>(args?: SelectSubset<T, WatchlistCoinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistCoinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WatchlistCoin.
     * @param {WatchlistCoinCreateArgs} args - Arguments to create a WatchlistCoin.
     * @example
     * // Create one WatchlistCoin
     * const WatchlistCoin = await prisma.watchlistCoin.create({
     *   data: {
     *     // ... data to create a WatchlistCoin
     *   }
     * })
     * 
     */
    create<T extends WatchlistCoinCreateArgs>(args: SelectSubset<T, WatchlistCoinCreateArgs<ExtArgs>>): Prisma__WatchlistCoinClient<$Result.GetResult<Prisma.$WatchlistCoinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WatchlistCoins.
     * @param {WatchlistCoinCreateManyArgs} args - Arguments to create many WatchlistCoins.
     * @example
     * // Create many WatchlistCoins
     * const watchlistCoin = await prisma.watchlistCoin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchlistCoinCreateManyArgs>(args?: SelectSubset<T, WatchlistCoinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WatchlistCoins and returns the data saved in the database.
     * @param {WatchlistCoinCreateManyAndReturnArgs} args - Arguments to create many WatchlistCoins.
     * @example
     * // Create many WatchlistCoins
     * const watchlistCoin = await prisma.watchlistCoin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WatchlistCoins and only return the `id`
     * const watchlistCoinWithIdOnly = await prisma.watchlistCoin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchlistCoinCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchlistCoinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistCoinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WatchlistCoin.
     * @param {WatchlistCoinDeleteArgs} args - Arguments to delete one WatchlistCoin.
     * @example
     * // Delete one WatchlistCoin
     * const WatchlistCoin = await prisma.watchlistCoin.delete({
     *   where: {
     *     // ... filter to delete one WatchlistCoin
     *   }
     * })
     * 
     */
    delete<T extends WatchlistCoinDeleteArgs>(args: SelectSubset<T, WatchlistCoinDeleteArgs<ExtArgs>>): Prisma__WatchlistCoinClient<$Result.GetResult<Prisma.$WatchlistCoinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WatchlistCoin.
     * @param {WatchlistCoinUpdateArgs} args - Arguments to update one WatchlistCoin.
     * @example
     * // Update one WatchlistCoin
     * const watchlistCoin = await prisma.watchlistCoin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchlistCoinUpdateArgs>(args: SelectSubset<T, WatchlistCoinUpdateArgs<ExtArgs>>): Prisma__WatchlistCoinClient<$Result.GetResult<Prisma.$WatchlistCoinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WatchlistCoins.
     * @param {WatchlistCoinDeleteManyArgs} args - Arguments to filter WatchlistCoins to delete.
     * @example
     * // Delete a few WatchlistCoins
     * const { count } = await prisma.watchlistCoin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchlistCoinDeleteManyArgs>(args?: SelectSubset<T, WatchlistCoinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchlistCoins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistCoinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WatchlistCoins
     * const watchlistCoin = await prisma.watchlistCoin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchlistCoinUpdateManyArgs>(args: SelectSubset<T, WatchlistCoinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchlistCoins and returns the data updated in the database.
     * @param {WatchlistCoinUpdateManyAndReturnArgs} args - Arguments to update many WatchlistCoins.
     * @example
     * // Update many WatchlistCoins
     * const watchlistCoin = await prisma.watchlistCoin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WatchlistCoins and only return the `id`
     * const watchlistCoinWithIdOnly = await prisma.watchlistCoin.updateManyAndReturn({
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
    updateManyAndReturn<T extends WatchlistCoinUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchlistCoinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistCoinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WatchlistCoin.
     * @param {WatchlistCoinUpsertArgs} args - Arguments to update or create a WatchlistCoin.
     * @example
     * // Update or create a WatchlistCoin
     * const watchlistCoin = await prisma.watchlistCoin.upsert({
     *   create: {
     *     // ... data to create a WatchlistCoin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WatchlistCoin we want to update
     *   }
     * })
     */
    upsert<T extends WatchlistCoinUpsertArgs>(args: SelectSubset<T, WatchlistCoinUpsertArgs<ExtArgs>>): Prisma__WatchlistCoinClient<$Result.GetResult<Prisma.$WatchlistCoinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WatchlistCoins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistCoinCountArgs} args - Arguments to filter WatchlistCoins to count.
     * @example
     * // Count the number of WatchlistCoins
     * const count = await prisma.watchlistCoin.count({
     *   where: {
     *     // ... the filter for the WatchlistCoins we want to count
     *   }
     * })
    **/
    count<T extends WatchlistCoinCountArgs>(
      args?: Subset<T, WatchlistCoinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchlistCoinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WatchlistCoin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistCoinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatchlistCoinAggregateArgs>(args: Subset<T, WatchlistCoinAggregateArgs>): Prisma.PrismaPromise<GetWatchlistCoinAggregateType<T>>

    /**
     * Group by WatchlistCoin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistCoinGroupByArgs} args - Group by arguments.
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
      T extends WatchlistCoinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchlistCoinGroupByArgs['orderBy'] }
        : { orderBy?: WatchlistCoinGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WatchlistCoinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchlistCoinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WatchlistCoin model
   */
  readonly fields: WatchlistCoinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WatchlistCoin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchlistCoinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    watchlist<T extends WatchlistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WatchlistDefaultArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WatchlistCoin model
   */
  interface WatchlistCoinFieldRefs {
    readonly id: FieldRef<"WatchlistCoin", 'String'>
    readonly watchlistId: FieldRef<"WatchlistCoin", 'String'>
    readonly coinSymbol: FieldRef<"WatchlistCoin", 'String'>
    readonly createdAt: FieldRef<"WatchlistCoin", 'DateTime'>
    readonly updatedAt: FieldRef<"WatchlistCoin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WatchlistCoin findUnique
   */
  export type WatchlistCoinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistCoin
     */
    select?: WatchlistCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistCoin
     */
    omit?: WatchlistCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistCoinInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistCoin to fetch.
     */
    where: WatchlistCoinWhereUniqueInput
  }

  /**
   * WatchlistCoin findUniqueOrThrow
   */
  export type WatchlistCoinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistCoin
     */
    select?: WatchlistCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistCoin
     */
    omit?: WatchlistCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistCoinInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistCoin to fetch.
     */
    where: WatchlistCoinWhereUniqueInput
  }

  /**
   * WatchlistCoin findFirst
   */
  export type WatchlistCoinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistCoin
     */
    select?: WatchlistCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistCoin
     */
    omit?: WatchlistCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistCoinInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistCoin to fetch.
     */
    where?: WatchlistCoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistCoins to fetch.
     */
    orderBy?: WatchlistCoinOrderByWithRelationInput | WatchlistCoinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchlistCoins.
     */
    cursor?: WatchlistCoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistCoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistCoins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchlistCoins.
     */
    distinct?: WatchlistCoinScalarFieldEnum | WatchlistCoinScalarFieldEnum[]
  }

  /**
   * WatchlistCoin findFirstOrThrow
   */
  export type WatchlistCoinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistCoin
     */
    select?: WatchlistCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistCoin
     */
    omit?: WatchlistCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistCoinInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistCoin to fetch.
     */
    where?: WatchlistCoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistCoins to fetch.
     */
    orderBy?: WatchlistCoinOrderByWithRelationInput | WatchlistCoinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchlistCoins.
     */
    cursor?: WatchlistCoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistCoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistCoins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchlistCoins.
     */
    distinct?: WatchlistCoinScalarFieldEnum | WatchlistCoinScalarFieldEnum[]
  }

  /**
   * WatchlistCoin findMany
   */
  export type WatchlistCoinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistCoin
     */
    select?: WatchlistCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistCoin
     */
    omit?: WatchlistCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistCoinInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistCoins to fetch.
     */
    where?: WatchlistCoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistCoins to fetch.
     */
    orderBy?: WatchlistCoinOrderByWithRelationInput | WatchlistCoinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WatchlistCoins.
     */
    cursor?: WatchlistCoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistCoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistCoins.
     */
    skip?: number
    distinct?: WatchlistCoinScalarFieldEnum | WatchlistCoinScalarFieldEnum[]
  }

  /**
   * WatchlistCoin create
   */
  export type WatchlistCoinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistCoin
     */
    select?: WatchlistCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistCoin
     */
    omit?: WatchlistCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistCoinInclude<ExtArgs> | null
    /**
     * The data needed to create a WatchlistCoin.
     */
    data: XOR<WatchlistCoinCreateInput, WatchlistCoinUncheckedCreateInput>
  }

  /**
   * WatchlistCoin createMany
   */
  export type WatchlistCoinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WatchlistCoins.
     */
    data: WatchlistCoinCreateManyInput | WatchlistCoinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WatchlistCoin createManyAndReturn
   */
  export type WatchlistCoinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistCoin
     */
    select?: WatchlistCoinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistCoin
     */
    omit?: WatchlistCoinOmit<ExtArgs> | null
    /**
     * The data used to create many WatchlistCoins.
     */
    data: WatchlistCoinCreateManyInput | WatchlistCoinCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistCoinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchlistCoin update
   */
  export type WatchlistCoinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistCoin
     */
    select?: WatchlistCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistCoin
     */
    omit?: WatchlistCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistCoinInclude<ExtArgs> | null
    /**
     * The data needed to update a WatchlistCoin.
     */
    data: XOR<WatchlistCoinUpdateInput, WatchlistCoinUncheckedUpdateInput>
    /**
     * Choose, which WatchlistCoin to update.
     */
    where: WatchlistCoinWhereUniqueInput
  }

  /**
   * WatchlistCoin updateMany
   */
  export type WatchlistCoinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WatchlistCoins.
     */
    data: XOR<WatchlistCoinUpdateManyMutationInput, WatchlistCoinUncheckedUpdateManyInput>
    /**
     * Filter which WatchlistCoins to update
     */
    where?: WatchlistCoinWhereInput
    /**
     * Limit how many WatchlistCoins to update.
     */
    limit?: number
  }

  /**
   * WatchlistCoin updateManyAndReturn
   */
  export type WatchlistCoinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistCoin
     */
    select?: WatchlistCoinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistCoin
     */
    omit?: WatchlistCoinOmit<ExtArgs> | null
    /**
     * The data used to update WatchlistCoins.
     */
    data: XOR<WatchlistCoinUpdateManyMutationInput, WatchlistCoinUncheckedUpdateManyInput>
    /**
     * Filter which WatchlistCoins to update
     */
    where?: WatchlistCoinWhereInput
    /**
     * Limit how many WatchlistCoins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistCoinIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchlistCoin upsert
   */
  export type WatchlistCoinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistCoin
     */
    select?: WatchlistCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistCoin
     */
    omit?: WatchlistCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistCoinInclude<ExtArgs> | null
    /**
     * The filter to search for the WatchlistCoin to update in case it exists.
     */
    where: WatchlistCoinWhereUniqueInput
    /**
     * In case the WatchlistCoin found by the `where` argument doesn't exist, create a new WatchlistCoin with this data.
     */
    create: XOR<WatchlistCoinCreateInput, WatchlistCoinUncheckedCreateInput>
    /**
     * In case the WatchlistCoin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchlistCoinUpdateInput, WatchlistCoinUncheckedUpdateInput>
  }

  /**
   * WatchlistCoin delete
   */
  export type WatchlistCoinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistCoin
     */
    select?: WatchlistCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistCoin
     */
    omit?: WatchlistCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistCoinInclude<ExtArgs> | null
    /**
     * Filter which WatchlistCoin to delete.
     */
    where: WatchlistCoinWhereUniqueInput
  }

  /**
   * WatchlistCoin deleteMany
   */
  export type WatchlistCoinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchlistCoins to delete
     */
    where?: WatchlistCoinWhereInput
    /**
     * Limit how many WatchlistCoins to delete.
     */
    limit?: number
  }

  /**
   * WatchlistCoin without action
   */
  export type WatchlistCoinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistCoin
     */
    select?: WatchlistCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistCoin
     */
    omit?: WatchlistCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistCoinInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertAvgAggregateOutputType = {
    threshold: number | null
  }

  export type AlertSumAggregateOutputType = {
    threshold: number | null
  }

  export type AlertMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    coinSymbol: string | null
    threshold: number | null
    condition: string | null
    channels: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    coinSymbol: string | null
    threshold: number | null
    condition: string | null
    channels: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    coinSymbol: number
    threshold: number
    condition: number
    channels: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlertAvgAggregateInputType = {
    threshold?: true
  }

  export type AlertSumAggregateInputType = {
    threshold?: true
  }

  export type AlertMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    coinSymbol?: true
    threshold?: true
    condition?: true
    channels?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    coinSymbol?: true
    threshold?: true
    condition?: true
    channels?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    coinSymbol?: true
    threshold?: true
    condition?: true
    channels?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _avg?: AlertAvgAggregateInputType
    _sum?: AlertSumAggregateInputType
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: string
    userId: string
    type: string
    coinSymbol: string
    threshold: number
    condition: string
    channels: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    coinSymbol?: boolean
    threshold?: boolean
    condition?: boolean
    channels?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    alertEvents?: boolean | Alert$alertEventsArgs<ExtArgs>
    _count?: boolean | AlertCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    coinSymbol?: boolean
    threshold?: boolean
    condition?: boolean
    channels?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    coinSymbol?: boolean
    threshold?: boolean
    condition?: boolean
    channels?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    coinSymbol?: boolean
    threshold?: boolean
    condition?: boolean
    channels?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "coinSymbol" | "threshold" | "condition" | "channels" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["alert"]>
  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    alertEvents?: boolean | Alert$alertEventsArgs<ExtArgs>
    _count?: boolean | AlertCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      alertEvents: Prisma.$AlertEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      coinSymbol: string
      threshold: number
      condition: string
      channels: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts and returns the data updated in the database.
     * @param {AlertUpdateManyAndReturnArgs} args - Arguments to update many Alerts.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlertUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
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
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alertEvents<T extends Alert$alertEventsArgs<ExtArgs> = {}>(args?: Subset<T, Alert$alertEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'String'>
    readonly userId: FieldRef<"Alert", 'String'>
    readonly type: FieldRef<"Alert", 'String'>
    readonly coinSymbol: FieldRef<"Alert", 'String'>
    readonly threshold: FieldRef<"Alert", 'Float'>
    readonly condition: FieldRef<"Alert", 'String'>
    readonly channels: FieldRef<"Alert", 'String'>
    readonly isActive: FieldRef<"Alert", 'Boolean'>
    readonly createdAt: FieldRef<"Alert", 'DateTime'>
    readonly updatedAt: FieldRef<"Alert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert createManyAndReturn
   */
  export type AlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert updateManyAndReturn
   */
  export type AlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert.alertEvents
   */
  export type Alert$alertEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEvent
     */
    select?: AlertEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEvent
     */
    omit?: AlertEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertEventInclude<ExtArgs> | null
    where?: AlertEventWhereInput
    orderBy?: AlertEventOrderByWithRelationInput | AlertEventOrderByWithRelationInput[]
    cursor?: AlertEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertEventScalarFieldEnum | AlertEventScalarFieldEnum[]
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
  }


  /**
   * Model AlertEvent
   */

  export type AggregateAlertEvent = {
    _count: AlertEventCountAggregateOutputType | null
    _min: AlertEventMinAggregateOutputType | null
    _max: AlertEventMaxAggregateOutputType | null
  }

  export type AlertEventMinAggregateOutputType = {
    id: string | null
    alertId: string | null
    triggeredAt: Date | null
    details: string | null
  }

  export type AlertEventMaxAggregateOutputType = {
    id: string | null
    alertId: string | null
    triggeredAt: Date | null
    details: string | null
  }

  export type AlertEventCountAggregateOutputType = {
    id: number
    alertId: number
    triggeredAt: number
    details: number
    _all: number
  }


  export type AlertEventMinAggregateInputType = {
    id?: true
    alertId?: true
    triggeredAt?: true
    details?: true
  }

  export type AlertEventMaxAggregateInputType = {
    id?: true
    alertId?: true
    triggeredAt?: true
    details?: true
  }

  export type AlertEventCountAggregateInputType = {
    id?: true
    alertId?: true
    triggeredAt?: true
    details?: true
    _all?: true
  }

  export type AlertEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertEvent to aggregate.
     */
    where?: AlertEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertEvents to fetch.
     */
    orderBy?: AlertEventOrderByWithRelationInput | AlertEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlertEvents
    **/
    _count?: true | AlertEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertEventMaxAggregateInputType
  }

  export type GetAlertEventAggregateType<T extends AlertEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAlertEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlertEvent[P]>
      : GetScalarType<T[P], AggregateAlertEvent[P]>
  }




  export type AlertEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertEventWhereInput
    orderBy?: AlertEventOrderByWithAggregationInput | AlertEventOrderByWithAggregationInput[]
    by: AlertEventScalarFieldEnum[] | AlertEventScalarFieldEnum
    having?: AlertEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertEventCountAggregateInputType | true
    _min?: AlertEventMinAggregateInputType
    _max?: AlertEventMaxAggregateInputType
  }

  export type AlertEventGroupByOutputType = {
    id: string
    alertId: string
    triggeredAt: Date
    details: string | null
    _count: AlertEventCountAggregateOutputType | null
    _min: AlertEventMinAggregateOutputType | null
    _max: AlertEventMaxAggregateOutputType | null
  }

  type GetAlertEventGroupByPayload<T extends AlertEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertEventGroupByOutputType[P]>
            : GetScalarType<T[P], AlertEventGroupByOutputType[P]>
        }
      >
    >


  export type AlertEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertId?: boolean
    triggeredAt?: boolean
    details?: boolean
    alert?: boolean | AlertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alertEvent"]>

  export type AlertEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertId?: boolean
    triggeredAt?: boolean
    details?: boolean
    alert?: boolean | AlertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alertEvent"]>

  export type AlertEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertId?: boolean
    triggeredAt?: boolean
    details?: boolean
    alert?: boolean | AlertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alertEvent"]>

  export type AlertEventSelectScalar = {
    id?: boolean
    alertId?: boolean
    triggeredAt?: boolean
    details?: boolean
  }

  export type AlertEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alertId" | "triggeredAt" | "details", ExtArgs["result"]["alertEvent"]>
  export type AlertEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alert?: boolean | AlertDefaultArgs<ExtArgs>
  }
  export type AlertEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alert?: boolean | AlertDefaultArgs<ExtArgs>
  }
  export type AlertEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alert?: boolean | AlertDefaultArgs<ExtArgs>
  }

  export type $AlertEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlertEvent"
    objects: {
      alert: Prisma.$AlertPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      alertId: string
      triggeredAt: Date
      details: string | null
    }, ExtArgs["result"]["alertEvent"]>
    composites: {}
  }

  type AlertEventGetPayload<S extends boolean | null | undefined | AlertEventDefaultArgs> = $Result.GetResult<Prisma.$AlertEventPayload, S>

  type AlertEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertEventCountAggregateInputType | true
    }

  export interface AlertEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlertEvent'], meta: { name: 'AlertEvent' } }
    /**
     * Find zero or one AlertEvent that matches the filter.
     * @param {AlertEventFindUniqueArgs} args - Arguments to find a AlertEvent
     * @example
     * // Get one AlertEvent
     * const alertEvent = await prisma.alertEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertEventFindUniqueArgs>(args: SelectSubset<T, AlertEventFindUniqueArgs<ExtArgs>>): Prisma__AlertEventClient<$Result.GetResult<Prisma.$AlertEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlertEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertEventFindUniqueOrThrowArgs} args - Arguments to find a AlertEvent
     * @example
     * // Get one AlertEvent
     * const alertEvent = await prisma.alertEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertEventClient<$Result.GetResult<Prisma.$AlertEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlertEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertEventFindFirstArgs} args - Arguments to find a AlertEvent
     * @example
     * // Get one AlertEvent
     * const alertEvent = await prisma.alertEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertEventFindFirstArgs>(args?: SelectSubset<T, AlertEventFindFirstArgs<ExtArgs>>): Prisma__AlertEventClient<$Result.GetResult<Prisma.$AlertEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlertEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertEventFindFirstOrThrowArgs} args - Arguments to find a AlertEvent
     * @example
     * // Get one AlertEvent
     * const alertEvent = await prisma.alertEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertEventClient<$Result.GetResult<Prisma.$AlertEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlertEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlertEvents
     * const alertEvents = await prisma.alertEvent.findMany()
     * 
     * // Get first 10 AlertEvents
     * const alertEvents = await prisma.alertEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertEventWithIdOnly = await prisma.alertEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertEventFindManyArgs>(args?: SelectSubset<T, AlertEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlertEvent.
     * @param {AlertEventCreateArgs} args - Arguments to create a AlertEvent.
     * @example
     * // Create one AlertEvent
     * const AlertEvent = await prisma.alertEvent.create({
     *   data: {
     *     // ... data to create a AlertEvent
     *   }
     * })
     * 
     */
    create<T extends AlertEventCreateArgs>(args: SelectSubset<T, AlertEventCreateArgs<ExtArgs>>): Prisma__AlertEventClient<$Result.GetResult<Prisma.$AlertEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlertEvents.
     * @param {AlertEventCreateManyArgs} args - Arguments to create many AlertEvents.
     * @example
     * // Create many AlertEvents
     * const alertEvent = await prisma.alertEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertEventCreateManyArgs>(args?: SelectSubset<T, AlertEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlertEvents and returns the data saved in the database.
     * @param {AlertEventCreateManyAndReturnArgs} args - Arguments to create many AlertEvents.
     * @example
     * // Create many AlertEvents
     * const alertEvent = await prisma.alertEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlertEvents and only return the `id`
     * const alertEventWithIdOnly = await prisma.alertEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertEventCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlertEvent.
     * @param {AlertEventDeleteArgs} args - Arguments to delete one AlertEvent.
     * @example
     * // Delete one AlertEvent
     * const AlertEvent = await prisma.alertEvent.delete({
     *   where: {
     *     // ... filter to delete one AlertEvent
     *   }
     * })
     * 
     */
    delete<T extends AlertEventDeleteArgs>(args: SelectSubset<T, AlertEventDeleteArgs<ExtArgs>>): Prisma__AlertEventClient<$Result.GetResult<Prisma.$AlertEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlertEvent.
     * @param {AlertEventUpdateArgs} args - Arguments to update one AlertEvent.
     * @example
     * // Update one AlertEvent
     * const alertEvent = await prisma.alertEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertEventUpdateArgs>(args: SelectSubset<T, AlertEventUpdateArgs<ExtArgs>>): Prisma__AlertEventClient<$Result.GetResult<Prisma.$AlertEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlertEvents.
     * @param {AlertEventDeleteManyArgs} args - Arguments to filter AlertEvents to delete.
     * @example
     * // Delete a few AlertEvents
     * const { count } = await prisma.alertEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertEventDeleteManyArgs>(args?: SelectSubset<T, AlertEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlertEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlertEvents
     * const alertEvent = await prisma.alertEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertEventUpdateManyArgs>(args: SelectSubset<T, AlertEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlertEvents and returns the data updated in the database.
     * @param {AlertEventUpdateManyAndReturnArgs} args - Arguments to update many AlertEvents.
     * @example
     * // Update many AlertEvents
     * const alertEvent = await prisma.alertEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlertEvents and only return the `id`
     * const alertEventWithIdOnly = await prisma.alertEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlertEventUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlertEvent.
     * @param {AlertEventUpsertArgs} args - Arguments to update or create a AlertEvent.
     * @example
     * // Update or create a AlertEvent
     * const alertEvent = await prisma.alertEvent.upsert({
     *   create: {
     *     // ... data to create a AlertEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlertEvent we want to update
     *   }
     * })
     */
    upsert<T extends AlertEventUpsertArgs>(args: SelectSubset<T, AlertEventUpsertArgs<ExtArgs>>): Prisma__AlertEventClient<$Result.GetResult<Prisma.$AlertEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlertEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertEventCountArgs} args - Arguments to filter AlertEvents to count.
     * @example
     * // Count the number of AlertEvents
     * const count = await prisma.alertEvent.count({
     *   where: {
     *     // ... the filter for the AlertEvents we want to count
     *   }
     * })
    **/
    count<T extends AlertEventCountArgs>(
      args?: Subset<T, AlertEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlertEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertEventAggregateArgs>(args: Subset<T, AlertEventAggregateArgs>): Prisma.PrismaPromise<GetAlertEventAggregateType<T>>

    /**
     * Group by AlertEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertEventGroupByArgs} args - Group by arguments.
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
      T extends AlertEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertEventGroupByArgs['orderBy'] }
        : { orderBy?: AlertEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlertEvent model
   */
  readonly fields: AlertEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlertEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alert<T extends AlertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlertDefaultArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AlertEvent model
   */
  interface AlertEventFieldRefs {
    readonly id: FieldRef<"AlertEvent", 'String'>
    readonly alertId: FieldRef<"AlertEvent", 'String'>
    readonly triggeredAt: FieldRef<"AlertEvent", 'DateTime'>
    readonly details: FieldRef<"AlertEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AlertEvent findUnique
   */
  export type AlertEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEvent
     */
    select?: AlertEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEvent
     */
    omit?: AlertEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertEventInclude<ExtArgs> | null
    /**
     * Filter, which AlertEvent to fetch.
     */
    where: AlertEventWhereUniqueInput
  }

  /**
   * AlertEvent findUniqueOrThrow
   */
  export type AlertEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEvent
     */
    select?: AlertEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEvent
     */
    omit?: AlertEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertEventInclude<ExtArgs> | null
    /**
     * Filter, which AlertEvent to fetch.
     */
    where: AlertEventWhereUniqueInput
  }

  /**
   * AlertEvent findFirst
   */
  export type AlertEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEvent
     */
    select?: AlertEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEvent
     */
    omit?: AlertEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertEventInclude<ExtArgs> | null
    /**
     * Filter, which AlertEvent to fetch.
     */
    where?: AlertEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertEvents to fetch.
     */
    orderBy?: AlertEventOrderByWithRelationInput | AlertEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertEvents.
     */
    cursor?: AlertEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertEvents.
     */
    distinct?: AlertEventScalarFieldEnum | AlertEventScalarFieldEnum[]
  }

  /**
   * AlertEvent findFirstOrThrow
   */
  export type AlertEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEvent
     */
    select?: AlertEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEvent
     */
    omit?: AlertEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertEventInclude<ExtArgs> | null
    /**
     * Filter, which AlertEvent to fetch.
     */
    where?: AlertEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertEvents to fetch.
     */
    orderBy?: AlertEventOrderByWithRelationInput | AlertEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertEvents.
     */
    cursor?: AlertEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertEvents.
     */
    distinct?: AlertEventScalarFieldEnum | AlertEventScalarFieldEnum[]
  }

  /**
   * AlertEvent findMany
   */
  export type AlertEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEvent
     */
    select?: AlertEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEvent
     */
    omit?: AlertEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertEventInclude<ExtArgs> | null
    /**
     * Filter, which AlertEvents to fetch.
     */
    where?: AlertEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertEvents to fetch.
     */
    orderBy?: AlertEventOrderByWithRelationInput | AlertEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlertEvents.
     */
    cursor?: AlertEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertEvents.
     */
    skip?: number
    distinct?: AlertEventScalarFieldEnum | AlertEventScalarFieldEnum[]
  }

  /**
   * AlertEvent create
   */
  export type AlertEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEvent
     */
    select?: AlertEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEvent
     */
    omit?: AlertEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertEventInclude<ExtArgs> | null
    /**
     * The data needed to create a AlertEvent.
     */
    data: XOR<AlertEventCreateInput, AlertEventUncheckedCreateInput>
  }

  /**
   * AlertEvent createMany
   */
  export type AlertEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlertEvents.
     */
    data: AlertEventCreateManyInput | AlertEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlertEvent createManyAndReturn
   */
  export type AlertEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEvent
     */
    select?: AlertEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEvent
     */
    omit?: AlertEventOmit<ExtArgs> | null
    /**
     * The data used to create many AlertEvents.
     */
    data: AlertEventCreateManyInput | AlertEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlertEvent update
   */
  export type AlertEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEvent
     */
    select?: AlertEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEvent
     */
    omit?: AlertEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertEventInclude<ExtArgs> | null
    /**
     * The data needed to update a AlertEvent.
     */
    data: XOR<AlertEventUpdateInput, AlertEventUncheckedUpdateInput>
    /**
     * Choose, which AlertEvent to update.
     */
    where: AlertEventWhereUniqueInput
  }

  /**
   * AlertEvent updateMany
   */
  export type AlertEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlertEvents.
     */
    data: XOR<AlertEventUpdateManyMutationInput, AlertEventUncheckedUpdateManyInput>
    /**
     * Filter which AlertEvents to update
     */
    where?: AlertEventWhereInput
    /**
     * Limit how many AlertEvents to update.
     */
    limit?: number
  }

  /**
   * AlertEvent updateManyAndReturn
   */
  export type AlertEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEvent
     */
    select?: AlertEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEvent
     */
    omit?: AlertEventOmit<ExtArgs> | null
    /**
     * The data used to update AlertEvents.
     */
    data: XOR<AlertEventUpdateManyMutationInput, AlertEventUncheckedUpdateManyInput>
    /**
     * Filter which AlertEvents to update
     */
    where?: AlertEventWhereInput
    /**
     * Limit how many AlertEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlertEvent upsert
   */
  export type AlertEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEvent
     */
    select?: AlertEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEvent
     */
    omit?: AlertEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertEventInclude<ExtArgs> | null
    /**
     * The filter to search for the AlertEvent to update in case it exists.
     */
    where: AlertEventWhereUniqueInput
    /**
     * In case the AlertEvent found by the `where` argument doesn't exist, create a new AlertEvent with this data.
     */
    create: XOR<AlertEventCreateInput, AlertEventUncheckedCreateInput>
    /**
     * In case the AlertEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertEventUpdateInput, AlertEventUncheckedUpdateInput>
  }

  /**
   * AlertEvent delete
   */
  export type AlertEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEvent
     */
    select?: AlertEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEvent
     */
    omit?: AlertEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertEventInclude<ExtArgs> | null
    /**
     * Filter which AlertEvent to delete.
     */
    where: AlertEventWhereUniqueInput
  }

  /**
   * AlertEvent deleteMany
   */
  export type AlertEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertEvents to delete
     */
    where?: AlertEventWhereInput
    /**
     * Limit how many AlertEvents to delete.
     */
    limit?: number
  }

  /**
   * AlertEvent without action
   */
  export type AlertEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEvent
     */
    select?: AlertEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEvent
     */
    omit?: AlertEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertEventInclude<ExtArgs> | null
  }


  /**
   * Model RawTweet
   */

  export type AggregateRawTweet = {
    _count: RawTweetCountAggregateOutputType | null
    _min: RawTweetMinAggregateOutputType | null
    _max: RawTweetMaxAggregateOutputType | null
  }

  export type RawTweetMinAggregateOutputType = {
    id: string | null
    scraperJobId: string | null
    influencer: string | null
    content: string | null
    fetchedAt: Date | null
  }

  export type RawTweetMaxAggregateOutputType = {
    id: string | null
    scraperJobId: string | null
    influencer: string | null
    content: string | null
    fetchedAt: Date | null
  }

  export type RawTweetCountAggregateOutputType = {
    id: number
    scraperJobId: number
    influencer: number
    content: number
    fetchedAt: number
    _all: number
  }


  export type RawTweetMinAggregateInputType = {
    id?: true
    scraperJobId?: true
    influencer?: true
    content?: true
    fetchedAt?: true
  }

  export type RawTweetMaxAggregateInputType = {
    id?: true
    scraperJobId?: true
    influencer?: true
    content?: true
    fetchedAt?: true
  }

  export type RawTweetCountAggregateInputType = {
    id?: true
    scraperJobId?: true
    influencer?: true
    content?: true
    fetchedAt?: true
    _all?: true
  }

  export type RawTweetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RawTweet to aggregate.
     */
    where?: RawTweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawTweets to fetch.
     */
    orderBy?: RawTweetOrderByWithRelationInput | RawTweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RawTweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawTweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawTweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RawTweets
    **/
    _count?: true | RawTweetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RawTweetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RawTweetMaxAggregateInputType
  }

  export type GetRawTweetAggregateType<T extends RawTweetAggregateArgs> = {
        [P in keyof T & keyof AggregateRawTweet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRawTweet[P]>
      : GetScalarType<T[P], AggregateRawTweet[P]>
  }




  export type RawTweetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RawTweetWhereInput
    orderBy?: RawTweetOrderByWithAggregationInput | RawTweetOrderByWithAggregationInput[]
    by: RawTweetScalarFieldEnum[] | RawTweetScalarFieldEnum
    having?: RawTweetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RawTweetCountAggregateInputType | true
    _min?: RawTweetMinAggregateInputType
    _max?: RawTweetMaxAggregateInputType
  }

  export type RawTweetGroupByOutputType = {
    id: string
    scraperJobId: string | null
    influencer: string
    content: string
    fetchedAt: Date
    _count: RawTweetCountAggregateOutputType | null
    _min: RawTweetMinAggregateOutputType | null
    _max: RawTweetMaxAggregateOutputType | null
  }

  type GetRawTweetGroupByPayload<T extends RawTweetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RawTweetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RawTweetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RawTweetGroupByOutputType[P]>
            : GetScalarType<T[P], RawTweetGroupByOutputType[P]>
        }
      >
    >


  export type RawTweetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scraperJobId?: boolean
    influencer?: boolean
    content?: boolean
    fetchedAt?: boolean
    sentimentScores?: boolean | RawTweet$sentimentScoresArgs<ExtArgs>
    _count?: boolean | RawTweetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rawTweet"]>

  export type RawTweetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scraperJobId?: boolean
    influencer?: boolean
    content?: boolean
    fetchedAt?: boolean
  }, ExtArgs["result"]["rawTweet"]>

  export type RawTweetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scraperJobId?: boolean
    influencer?: boolean
    content?: boolean
    fetchedAt?: boolean
  }, ExtArgs["result"]["rawTweet"]>

  export type RawTweetSelectScalar = {
    id?: boolean
    scraperJobId?: boolean
    influencer?: boolean
    content?: boolean
    fetchedAt?: boolean
  }

  export type RawTweetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scraperJobId" | "influencer" | "content" | "fetchedAt", ExtArgs["result"]["rawTweet"]>
  export type RawTweetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentimentScores?: boolean | RawTweet$sentimentScoresArgs<ExtArgs>
    _count?: boolean | RawTweetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RawTweetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RawTweetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RawTweetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RawTweet"
    objects: {
      sentimentScores: Prisma.$SentimentScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scraperJobId: string | null
      influencer: string
      content: string
      fetchedAt: Date
    }, ExtArgs["result"]["rawTweet"]>
    composites: {}
  }

  type RawTweetGetPayload<S extends boolean | null | undefined | RawTweetDefaultArgs> = $Result.GetResult<Prisma.$RawTweetPayload, S>

  type RawTweetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RawTweetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RawTweetCountAggregateInputType | true
    }

  export interface RawTweetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RawTweet'], meta: { name: 'RawTweet' } }
    /**
     * Find zero or one RawTweet that matches the filter.
     * @param {RawTweetFindUniqueArgs} args - Arguments to find a RawTweet
     * @example
     * // Get one RawTweet
     * const rawTweet = await prisma.rawTweet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RawTweetFindUniqueArgs>(args: SelectSubset<T, RawTweetFindUniqueArgs<ExtArgs>>): Prisma__RawTweetClient<$Result.GetResult<Prisma.$RawTweetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RawTweet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RawTweetFindUniqueOrThrowArgs} args - Arguments to find a RawTweet
     * @example
     * // Get one RawTweet
     * const rawTweet = await prisma.rawTweet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RawTweetFindUniqueOrThrowArgs>(args: SelectSubset<T, RawTweetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RawTweetClient<$Result.GetResult<Prisma.$RawTweetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RawTweet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawTweetFindFirstArgs} args - Arguments to find a RawTweet
     * @example
     * // Get one RawTweet
     * const rawTweet = await prisma.rawTweet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RawTweetFindFirstArgs>(args?: SelectSubset<T, RawTweetFindFirstArgs<ExtArgs>>): Prisma__RawTweetClient<$Result.GetResult<Prisma.$RawTweetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RawTweet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawTweetFindFirstOrThrowArgs} args - Arguments to find a RawTweet
     * @example
     * // Get one RawTweet
     * const rawTweet = await prisma.rawTweet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RawTweetFindFirstOrThrowArgs>(args?: SelectSubset<T, RawTweetFindFirstOrThrowArgs<ExtArgs>>): Prisma__RawTweetClient<$Result.GetResult<Prisma.$RawTweetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RawTweets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawTweetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RawTweets
     * const rawTweets = await prisma.rawTweet.findMany()
     * 
     * // Get first 10 RawTweets
     * const rawTweets = await prisma.rawTweet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rawTweetWithIdOnly = await prisma.rawTweet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RawTweetFindManyArgs>(args?: SelectSubset<T, RawTweetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawTweetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RawTweet.
     * @param {RawTweetCreateArgs} args - Arguments to create a RawTweet.
     * @example
     * // Create one RawTweet
     * const RawTweet = await prisma.rawTweet.create({
     *   data: {
     *     // ... data to create a RawTweet
     *   }
     * })
     * 
     */
    create<T extends RawTweetCreateArgs>(args: SelectSubset<T, RawTweetCreateArgs<ExtArgs>>): Prisma__RawTweetClient<$Result.GetResult<Prisma.$RawTweetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RawTweets.
     * @param {RawTweetCreateManyArgs} args - Arguments to create many RawTweets.
     * @example
     * // Create many RawTweets
     * const rawTweet = await prisma.rawTweet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RawTweetCreateManyArgs>(args?: SelectSubset<T, RawTweetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RawTweets and returns the data saved in the database.
     * @param {RawTweetCreateManyAndReturnArgs} args - Arguments to create many RawTweets.
     * @example
     * // Create many RawTweets
     * const rawTweet = await prisma.rawTweet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RawTweets and only return the `id`
     * const rawTweetWithIdOnly = await prisma.rawTweet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RawTweetCreateManyAndReturnArgs>(args?: SelectSubset<T, RawTweetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawTweetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RawTweet.
     * @param {RawTweetDeleteArgs} args - Arguments to delete one RawTweet.
     * @example
     * // Delete one RawTweet
     * const RawTweet = await prisma.rawTweet.delete({
     *   where: {
     *     // ... filter to delete one RawTweet
     *   }
     * })
     * 
     */
    delete<T extends RawTweetDeleteArgs>(args: SelectSubset<T, RawTweetDeleteArgs<ExtArgs>>): Prisma__RawTweetClient<$Result.GetResult<Prisma.$RawTweetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RawTweet.
     * @param {RawTweetUpdateArgs} args - Arguments to update one RawTweet.
     * @example
     * // Update one RawTweet
     * const rawTweet = await prisma.rawTweet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RawTweetUpdateArgs>(args: SelectSubset<T, RawTweetUpdateArgs<ExtArgs>>): Prisma__RawTweetClient<$Result.GetResult<Prisma.$RawTweetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RawTweets.
     * @param {RawTweetDeleteManyArgs} args - Arguments to filter RawTweets to delete.
     * @example
     * // Delete a few RawTweets
     * const { count } = await prisma.rawTweet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RawTweetDeleteManyArgs>(args?: SelectSubset<T, RawTweetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RawTweets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawTweetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RawTweets
     * const rawTweet = await prisma.rawTweet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RawTweetUpdateManyArgs>(args: SelectSubset<T, RawTweetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RawTweets and returns the data updated in the database.
     * @param {RawTweetUpdateManyAndReturnArgs} args - Arguments to update many RawTweets.
     * @example
     * // Update many RawTweets
     * const rawTweet = await prisma.rawTweet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RawTweets and only return the `id`
     * const rawTweetWithIdOnly = await prisma.rawTweet.updateManyAndReturn({
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
    updateManyAndReturn<T extends RawTweetUpdateManyAndReturnArgs>(args: SelectSubset<T, RawTweetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawTweetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RawTweet.
     * @param {RawTweetUpsertArgs} args - Arguments to update or create a RawTweet.
     * @example
     * // Update or create a RawTweet
     * const rawTweet = await prisma.rawTweet.upsert({
     *   create: {
     *     // ... data to create a RawTweet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RawTweet we want to update
     *   }
     * })
     */
    upsert<T extends RawTweetUpsertArgs>(args: SelectSubset<T, RawTweetUpsertArgs<ExtArgs>>): Prisma__RawTweetClient<$Result.GetResult<Prisma.$RawTweetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RawTweets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawTweetCountArgs} args - Arguments to filter RawTweets to count.
     * @example
     * // Count the number of RawTweets
     * const count = await prisma.rawTweet.count({
     *   where: {
     *     // ... the filter for the RawTweets we want to count
     *   }
     * })
    **/
    count<T extends RawTweetCountArgs>(
      args?: Subset<T, RawTweetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RawTweetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RawTweet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawTweetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RawTweetAggregateArgs>(args: Subset<T, RawTweetAggregateArgs>): Prisma.PrismaPromise<GetRawTweetAggregateType<T>>

    /**
     * Group by RawTweet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawTweetGroupByArgs} args - Group by arguments.
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
      T extends RawTweetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RawTweetGroupByArgs['orderBy'] }
        : { orderBy?: RawTweetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RawTweetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRawTweetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RawTweet model
   */
  readonly fields: RawTweetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RawTweet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RawTweetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentimentScores<T extends RawTweet$sentimentScoresArgs<ExtArgs> = {}>(args?: Subset<T, RawTweet$sentimentScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RawTweet model
   */
  interface RawTweetFieldRefs {
    readonly id: FieldRef<"RawTweet", 'String'>
    readonly scraperJobId: FieldRef<"RawTweet", 'String'>
    readonly influencer: FieldRef<"RawTweet", 'String'>
    readonly content: FieldRef<"RawTweet", 'String'>
    readonly fetchedAt: FieldRef<"RawTweet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RawTweet findUnique
   */
  export type RawTweetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawTweet
     */
    select?: RawTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawTweet
     */
    omit?: RawTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawTweetInclude<ExtArgs> | null
    /**
     * Filter, which RawTweet to fetch.
     */
    where: RawTweetWhereUniqueInput
  }

  /**
   * RawTweet findUniqueOrThrow
   */
  export type RawTweetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawTweet
     */
    select?: RawTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawTweet
     */
    omit?: RawTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawTweetInclude<ExtArgs> | null
    /**
     * Filter, which RawTweet to fetch.
     */
    where: RawTweetWhereUniqueInput
  }

  /**
   * RawTweet findFirst
   */
  export type RawTweetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawTweet
     */
    select?: RawTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawTweet
     */
    omit?: RawTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawTweetInclude<ExtArgs> | null
    /**
     * Filter, which RawTweet to fetch.
     */
    where?: RawTweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawTweets to fetch.
     */
    orderBy?: RawTweetOrderByWithRelationInput | RawTweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RawTweets.
     */
    cursor?: RawTweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawTweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawTweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RawTweets.
     */
    distinct?: RawTweetScalarFieldEnum | RawTweetScalarFieldEnum[]
  }

  /**
   * RawTweet findFirstOrThrow
   */
  export type RawTweetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawTweet
     */
    select?: RawTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawTweet
     */
    omit?: RawTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawTweetInclude<ExtArgs> | null
    /**
     * Filter, which RawTweet to fetch.
     */
    where?: RawTweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawTweets to fetch.
     */
    orderBy?: RawTweetOrderByWithRelationInput | RawTweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RawTweets.
     */
    cursor?: RawTweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawTweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawTweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RawTweets.
     */
    distinct?: RawTweetScalarFieldEnum | RawTweetScalarFieldEnum[]
  }

  /**
   * RawTweet findMany
   */
  export type RawTweetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawTweet
     */
    select?: RawTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawTweet
     */
    omit?: RawTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawTweetInclude<ExtArgs> | null
    /**
     * Filter, which RawTweets to fetch.
     */
    where?: RawTweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawTweets to fetch.
     */
    orderBy?: RawTweetOrderByWithRelationInput | RawTweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RawTweets.
     */
    cursor?: RawTweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawTweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawTweets.
     */
    skip?: number
    distinct?: RawTweetScalarFieldEnum | RawTweetScalarFieldEnum[]
  }

  /**
   * RawTweet create
   */
  export type RawTweetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawTweet
     */
    select?: RawTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawTweet
     */
    omit?: RawTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawTweetInclude<ExtArgs> | null
    /**
     * The data needed to create a RawTweet.
     */
    data: XOR<RawTweetCreateInput, RawTweetUncheckedCreateInput>
  }

  /**
   * RawTweet createMany
   */
  export type RawTweetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RawTweets.
     */
    data: RawTweetCreateManyInput | RawTweetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RawTweet createManyAndReturn
   */
  export type RawTweetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawTweet
     */
    select?: RawTweetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RawTweet
     */
    omit?: RawTweetOmit<ExtArgs> | null
    /**
     * The data used to create many RawTweets.
     */
    data: RawTweetCreateManyInput | RawTweetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RawTweet update
   */
  export type RawTweetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawTweet
     */
    select?: RawTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawTweet
     */
    omit?: RawTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawTweetInclude<ExtArgs> | null
    /**
     * The data needed to update a RawTweet.
     */
    data: XOR<RawTweetUpdateInput, RawTweetUncheckedUpdateInput>
    /**
     * Choose, which RawTweet to update.
     */
    where: RawTweetWhereUniqueInput
  }

  /**
   * RawTweet updateMany
   */
  export type RawTweetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RawTweets.
     */
    data: XOR<RawTweetUpdateManyMutationInput, RawTweetUncheckedUpdateManyInput>
    /**
     * Filter which RawTweets to update
     */
    where?: RawTweetWhereInput
    /**
     * Limit how many RawTweets to update.
     */
    limit?: number
  }

  /**
   * RawTweet updateManyAndReturn
   */
  export type RawTweetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawTweet
     */
    select?: RawTweetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RawTweet
     */
    omit?: RawTweetOmit<ExtArgs> | null
    /**
     * The data used to update RawTweets.
     */
    data: XOR<RawTweetUpdateManyMutationInput, RawTweetUncheckedUpdateManyInput>
    /**
     * Filter which RawTweets to update
     */
    where?: RawTweetWhereInput
    /**
     * Limit how many RawTweets to update.
     */
    limit?: number
  }

  /**
   * RawTweet upsert
   */
  export type RawTweetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawTweet
     */
    select?: RawTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawTweet
     */
    omit?: RawTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawTweetInclude<ExtArgs> | null
    /**
     * The filter to search for the RawTweet to update in case it exists.
     */
    where: RawTweetWhereUniqueInput
    /**
     * In case the RawTweet found by the `where` argument doesn't exist, create a new RawTweet with this data.
     */
    create: XOR<RawTweetCreateInput, RawTweetUncheckedCreateInput>
    /**
     * In case the RawTweet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RawTweetUpdateInput, RawTweetUncheckedUpdateInput>
  }

  /**
   * RawTweet delete
   */
  export type RawTweetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawTweet
     */
    select?: RawTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawTweet
     */
    omit?: RawTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawTweetInclude<ExtArgs> | null
    /**
     * Filter which RawTweet to delete.
     */
    where: RawTweetWhereUniqueInput
  }

  /**
   * RawTweet deleteMany
   */
  export type RawTweetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RawTweets to delete
     */
    where?: RawTweetWhereInput
    /**
     * Limit how many RawTweets to delete.
     */
    limit?: number
  }

  /**
   * RawTweet.sentimentScores
   */
  export type RawTweet$sentimentScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    where?: SentimentScoreWhereInput
    orderBy?: SentimentScoreOrderByWithRelationInput | SentimentScoreOrderByWithRelationInput[]
    cursor?: SentimentScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SentimentScoreScalarFieldEnum | SentimentScoreScalarFieldEnum[]
  }

  /**
   * RawTweet without action
   */
  export type RawTweetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawTweet
     */
    select?: RawTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawTweet
     */
    omit?: RawTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawTweetInclude<ExtArgs> | null
  }


  /**
   * Model SentimentScore
   */

  export type AggregateSentimentScore = {
    _count: SentimentScoreCountAggregateOutputType | null
    _avg: SentimentScoreAvgAggregateOutputType | null
    _sum: SentimentScoreSumAggregateOutputType | null
    _min: SentimentScoreMinAggregateOutputType | null
    _max: SentimentScoreMaxAggregateOutputType | null
  }

  export type SentimentScoreAvgAggregateOutputType = {
    score: number | null
  }

  export type SentimentScoreSumAggregateOutputType = {
    score: number | null
  }

  export type SentimentScoreMinAggregateOutputType = {
    id: string | null
    tweetId: string | null
    coinSymbol: string | null
    score: number | null
    window: string | null
    calculatedAt: Date | null
  }

  export type SentimentScoreMaxAggregateOutputType = {
    id: string | null
    tweetId: string | null
    coinSymbol: string | null
    score: number | null
    window: string | null
    calculatedAt: Date | null
  }

  export type SentimentScoreCountAggregateOutputType = {
    id: number
    tweetId: number
    coinSymbol: number
    score: number
    window: number
    calculatedAt: number
    _all: number
  }


  export type SentimentScoreAvgAggregateInputType = {
    score?: true
  }

  export type SentimentScoreSumAggregateInputType = {
    score?: true
  }

  export type SentimentScoreMinAggregateInputType = {
    id?: true
    tweetId?: true
    coinSymbol?: true
    score?: true
    window?: true
    calculatedAt?: true
  }

  export type SentimentScoreMaxAggregateInputType = {
    id?: true
    tweetId?: true
    coinSymbol?: true
    score?: true
    window?: true
    calculatedAt?: true
  }

  export type SentimentScoreCountAggregateInputType = {
    id?: true
    tweetId?: true
    coinSymbol?: true
    score?: true
    window?: true
    calculatedAt?: true
    _all?: true
  }

  export type SentimentScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SentimentScore to aggregate.
     */
    where?: SentimentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentimentScores to fetch.
     */
    orderBy?: SentimentScoreOrderByWithRelationInput | SentimentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SentimentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentimentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentimentScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SentimentScores
    **/
    _count?: true | SentimentScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SentimentScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SentimentScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SentimentScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SentimentScoreMaxAggregateInputType
  }

  export type GetSentimentScoreAggregateType<T extends SentimentScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateSentimentScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSentimentScore[P]>
      : GetScalarType<T[P], AggregateSentimentScore[P]>
  }




  export type SentimentScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SentimentScoreWhereInput
    orderBy?: SentimentScoreOrderByWithAggregationInput | SentimentScoreOrderByWithAggregationInput[]
    by: SentimentScoreScalarFieldEnum[] | SentimentScoreScalarFieldEnum
    having?: SentimentScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SentimentScoreCountAggregateInputType | true
    _avg?: SentimentScoreAvgAggregateInputType
    _sum?: SentimentScoreSumAggregateInputType
    _min?: SentimentScoreMinAggregateInputType
    _max?: SentimentScoreMaxAggregateInputType
  }

  export type SentimentScoreGroupByOutputType = {
    id: string
    tweetId: string
    coinSymbol: string
    score: number
    window: string | null
    calculatedAt: Date
    _count: SentimentScoreCountAggregateOutputType | null
    _avg: SentimentScoreAvgAggregateOutputType | null
    _sum: SentimentScoreSumAggregateOutputType | null
    _min: SentimentScoreMinAggregateOutputType | null
    _max: SentimentScoreMaxAggregateOutputType | null
  }

  type GetSentimentScoreGroupByPayload<T extends SentimentScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SentimentScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SentimentScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SentimentScoreGroupByOutputType[P]>
            : GetScalarType<T[P], SentimentScoreGroupByOutputType[P]>
        }
      >
    >


  export type SentimentScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tweetId?: boolean
    coinSymbol?: boolean
    score?: boolean
    window?: boolean
    calculatedAt?: boolean
    tweet?: boolean | RawTweetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentimentScore"]>

  export type SentimentScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tweetId?: boolean
    coinSymbol?: boolean
    score?: boolean
    window?: boolean
    calculatedAt?: boolean
    tweet?: boolean | RawTweetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentimentScore"]>

  export type SentimentScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tweetId?: boolean
    coinSymbol?: boolean
    score?: boolean
    window?: boolean
    calculatedAt?: boolean
    tweet?: boolean | RawTweetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentimentScore"]>

  export type SentimentScoreSelectScalar = {
    id?: boolean
    tweetId?: boolean
    coinSymbol?: boolean
    score?: boolean
    window?: boolean
    calculatedAt?: boolean
  }

  export type SentimentScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tweetId" | "coinSymbol" | "score" | "window" | "calculatedAt", ExtArgs["result"]["sentimentScore"]>
  export type SentimentScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tweet?: boolean | RawTweetDefaultArgs<ExtArgs>
  }
  export type SentimentScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tweet?: boolean | RawTweetDefaultArgs<ExtArgs>
  }
  export type SentimentScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tweet?: boolean | RawTweetDefaultArgs<ExtArgs>
  }

  export type $SentimentScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SentimentScore"
    objects: {
      tweet: Prisma.$RawTweetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tweetId: string
      coinSymbol: string
      score: number
      window: string | null
      calculatedAt: Date
    }, ExtArgs["result"]["sentimentScore"]>
    composites: {}
  }

  type SentimentScoreGetPayload<S extends boolean | null | undefined | SentimentScoreDefaultArgs> = $Result.GetResult<Prisma.$SentimentScorePayload, S>

  type SentimentScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SentimentScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SentimentScoreCountAggregateInputType | true
    }

  export interface SentimentScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SentimentScore'], meta: { name: 'SentimentScore' } }
    /**
     * Find zero or one SentimentScore that matches the filter.
     * @param {SentimentScoreFindUniqueArgs} args - Arguments to find a SentimentScore
     * @example
     * // Get one SentimentScore
     * const sentimentScore = await prisma.sentimentScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SentimentScoreFindUniqueArgs>(args: SelectSubset<T, SentimentScoreFindUniqueArgs<ExtArgs>>): Prisma__SentimentScoreClient<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SentimentScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SentimentScoreFindUniqueOrThrowArgs} args - Arguments to find a SentimentScore
     * @example
     * // Get one SentimentScore
     * const sentimentScore = await prisma.sentimentScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SentimentScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, SentimentScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SentimentScoreClient<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SentimentScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentScoreFindFirstArgs} args - Arguments to find a SentimentScore
     * @example
     * // Get one SentimentScore
     * const sentimentScore = await prisma.sentimentScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SentimentScoreFindFirstArgs>(args?: SelectSubset<T, SentimentScoreFindFirstArgs<ExtArgs>>): Prisma__SentimentScoreClient<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SentimentScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentScoreFindFirstOrThrowArgs} args - Arguments to find a SentimentScore
     * @example
     * // Get one SentimentScore
     * const sentimentScore = await prisma.sentimentScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SentimentScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, SentimentScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__SentimentScoreClient<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SentimentScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SentimentScores
     * const sentimentScores = await prisma.sentimentScore.findMany()
     * 
     * // Get first 10 SentimentScores
     * const sentimentScores = await prisma.sentimentScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sentimentScoreWithIdOnly = await prisma.sentimentScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SentimentScoreFindManyArgs>(args?: SelectSubset<T, SentimentScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SentimentScore.
     * @param {SentimentScoreCreateArgs} args - Arguments to create a SentimentScore.
     * @example
     * // Create one SentimentScore
     * const SentimentScore = await prisma.sentimentScore.create({
     *   data: {
     *     // ... data to create a SentimentScore
     *   }
     * })
     * 
     */
    create<T extends SentimentScoreCreateArgs>(args: SelectSubset<T, SentimentScoreCreateArgs<ExtArgs>>): Prisma__SentimentScoreClient<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SentimentScores.
     * @param {SentimentScoreCreateManyArgs} args - Arguments to create many SentimentScores.
     * @example
     * // Create many SentimentScores
     * const sentimentScore = await prisma.sentimentScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SentimentScoreCreateManyArgs>(args?: SelectSubset<T, SentimentScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SentimentScores and returns the data saved in the database.
     * @param {SentimentScoreCreateManyAndReturnArgs} args - Arguments to create many SentimentScores.
     * @example
     * // Create many SentimentScores
     * const sentimentScore = await prisma.sentimentScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SentimentScores and only return the `id`
     * const sentimentScoreWithIdOnly = await prisma.sentimentScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SentimentScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, SentimentScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SentimentScore.
     * @param {SentimentScoreDeleteArgs} args - Arguments to delete one SentimentScore.
     * @example
     * // Delete one SentimentScore
     * const SentimentScore = await prisma.sentimentScore.delete({
     *   where: {
     *     // ... filter to delete one SentimentScore
     *   }
     * })
     * 
     */
    delete<T extends SentimentScoreDeleteArgs>(args: SelectSubset<T, SentimentScoreDeleteArgs<ExtArgs>>): Prisma__SentimentScoreClient<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SentimentScore.
     * @param {SentimentScoreUpdateArgs} args - Arguments to update one SentimentScore.
     * @example
     * // Update one SentimentScore
     * const sentimentScore = await prisma.sentimentScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SentimentScoreUpdateArgs>(args: SelectSubset<T, SentimentScoreUpdateArgs<ExtArgs>>): Prisma__SentimentScoreClient<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SentimentScores.
     * @param {SentimentScoreDeleteManyArgs} args - Arguments to filter SentimentScores to delete.
     * @example
     * // Delete a few SentimentScores
     * const { count } = await prisma.sentimentScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SentimentScoreDeleteManyArgs>(args?: SelectSubset<T, SentimentScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SentimentScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SentimentScores
     * const sentimentScore = await prisma.sentimentScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SentimentScoreUpdateManyArgs>(args: SelectSubset<T, SentimentScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SentimentScores and returns the data updated in the database.
     * @param {SentimentScoreUpdateManyAndReturnArgs} args - Arguments to update many SentimentScores.
     * @example
     * // Update many SentimentScores
     * const sentimentScore = await prisma.sentimentScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SentimentScores and only return the `id`
     * const sentimentScoreWithIdOnly = await prisma.sentimentScore.updateManyAndReturn({
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
    updateManyAndReturn<T extends SentimentScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, SentimentScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SentimentScore.
     * @param {SentimentScoreUpsertArgs} args - Arguments to update or create a SentimentScore.
     * @example
     * // Update or create a SentimentScore
     * const sentimentScore = await prisma.sentimentScore.upsert({
     *   create: {
     *     // ... data to create a SentimentScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SentimentScore we want to update
     *   }
     * })
     */
    upsert<T extends SentimentScoreUpsertArgs>(args: SelectSubset<T, SentimentScoreUpsertArgs<ExtArgs>>): Prisma__SentimentScoreClient<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SentimentScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentScoreCountArgs} args - Arguments to filter SentimentScores to count.
     * @example
     * // Count the number of SentimentScores
     * const count = await prisma.sentimentScore.count({
     *   where: {
     *     // ... the filter for the SentimentScores we want to count
     *   }
     * })
    **/
    count<T extends SentimentScoreCountArgs>(
      args?: Subset<T, SentimentScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SentimentScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SentimentScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SentimentScoreAggregateArgs>(args: Subset<T, SentimentScoreAggregateArgs>): Prisma.PrismaPromise<GetSentimentScoreAggregateType<T>>

    /**
     * Group by SentimentScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentScoreGroupByArgs} args - Group by arguments.
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
      T extends SentimentScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SentimentScoreGroupByArgs['orderBy'] }
        : { orderBy?: SentimentScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SentimentScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSentimentScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SentimentScore model
   */
  readonly fields: SentimentScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SentimentScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SentimentScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tweet<T extends RawTweetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RawTweetDefaultArgs<ExtArgs>>): Prisma__RawTweetClient<$Result.GetResult<Prisma.$RawTweetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SentimentScore model
   */
  interface SentimentScoreFieldRefs {
    readonly id: FieldRef<"SentimentScore", 'String'>
    readonly tweetId: FieldRef<"SentimentScore", 'String'>
    readonly coinSymbol: FieldRef<"SentimentScore", 'String'>
    readonly score: FieldRef<"SentimentScore", 'Float'>
    readonly window: FieldRef<"SentimentScore", 'String'>
    readonly calculatedAt: FieldRef<"SentimentScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SentimentScore findUnique
   */
  export type SentimentScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    /**
     * Filter, which SentimentScore to fetch.
     */
    where: SentimentScoreWhereUniqueInput
  }

  /**
   * SentimentScore findUniqueOrThrow
   */
  export type SentimentScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    /**
     * Filter, which SentimentScore to fetch.
     */
    where: SentimentScoreWhereUniqueInput
  }

  /**
   * SentimentScore findFirst
   */
  export type SentimentScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    /**
     * Filter, which SentimentScore to fetch.
     */
    where?: SentimentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentimentScores to fetch.
     */
    orderBy?: SentimentScoreOrderByWithRelationInput | SentimentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SentimentScores.
     */
    cursor?: SentimentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentimentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentimentScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SentimentScores.
     */
    distinct?: SentimentScoreScalarFieldEnum | SentimentScoreScalarFieldEnum[]
  }

  /**
   * SentimentScore findFirstOrThrow
   */
  export type SentimentScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    /**
     * Filter, which SentimentScore to fetch.
     */
    where?: SentimentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentimentScores to fetch.
     */
    orderBy?: SentimentScoreOrderByWithRelationInput | SentimentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SentimentScores.
     */
    cursor?: SentimentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentimentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentimentScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SentimentScores.
     */
    distinct?: SentimentScoreScalarFieldEnum | SentimentScoreScalarFieldEnum[]
  }

  /**
   * SentimentScore findMany
   */
  export type SentimentScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    /**
     * Filter, which SentimentScores to fetch.
     */
    where?: SentimentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentimentScores to fetch.
     */
    orderBy?: SentimentScoreOrderByWithRelationInput | SentimentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SentimentScores.
     */
    cursor?: SentimentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentimentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentimentScores.
     */
    skip?: number
    distinct?: SentimentScoreScalarFieldEnum | SentimentScoreScalarFieldEnum[]
  }

  /**
   * SentimentScore create
   */
  export type SentimentScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a SentimentScore.
     */
    data: XOR<SentimentScoreCreateInput, SentimentScoreUncheckedCreateInput>
  }

  /**
   * SentimentScore createMany
   */
  export type SentimentScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SentimentScores.
     */
    data: SentimentScoreCreateManyInput | SentimentScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SentimentScore createManyAndReturn
   */
  export type SentimentScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * The data used to create many SentimentScores.
     */
    data: SentimentScoreCreateManyInput | SentimentScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SentimentScore update
   */
  export type SentimentScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a SentimentScore.
     */
    data: XOR<SentimentScoreUpdateInput, SentimentScoreUncheckedUpdateInput>
    /**
     * Choose, which SentimentScore to update.
     */
    where: SentimentScoreWhereUniqueInput
  }

  /**
   * SentimentScore updateMany
   */
  export type SentimentScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SentimentScores.
     */
    data: XOR<SentimentScoreUpdateManyMutationInput, SentimentScoreUncheckedUpdateManyInput>
    /**
     * Filter which SentimentScores to update
     */
    where?: SentimentScoreWhereInput
    /**
     * Limit how many SentimentScores to update.
     */
    limit?: number
  }

  /**
   * SentimentScore updateManyAndReturn
   */
  export type SentimentScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * The data used to update SentimentScores.
     */
    data: XOR<SentimentScoreUpdateManyMutationInput, SentimentScoreUncheckedUpdateManyInput>
    /**
     * Filter which SentimentScores to update
     */
    where?: SentimentScoreWhereInput
    /**
     * Limit how many SentimentScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SentimentScore upsert
   */
  export type SentimentScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the SentimentScore to update in case it exists.
     */
    where: SentimentScoreWhereUniqueInput
    /**
     * In case the SentimentScore found by the `where` argument doesn't exist, create a new SentimentScore with this data.
     */
    create: XOR<SentimentScoreCreateInput, SentimentScoreUncheckedCreateInput>
    /**
     * In case the SentimentScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SentimentScoreUpdateInput, SentimentScoreUncheckedUpdateInput>
  }

  /**
   * SentimentScore delete
   */
  export type SentimentScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    /**
     * Filter which SentimentScore to delete.
     */
    where: SentimentScoreWhereUniqueInput
  }

  /**
   * SentimentScore deleteMany
   */
  export type SentimentScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SentimentScores to delete
     */
    where?: SentimentScoreWhereInput
    /**
     * Limit how many SentimentScores to delete.
     */
    limit?: number
  }

  /**
   * SentimentScore without action
   */
  export type SentimentScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
  }


  /**
   * Model MarketData
   */

  export type AggregateMarketData = {
    _count: MarketDataCountAggregateOutputType | null
    _avg: MarketDataAvgAggregateOutputType | null
    _sum: MarketDataSumAggregateOutputType | null
    _min: MarketDataMinAggregateOutputType | null
    _max: MarketDataMaxAggregateOutputType | null
  }

  export type MarketDataAvgAggregateOutputType = {
    price: number | null
    volume: number | null
  }

  export type MarketDataSumAggregateOutputType = {
    price: number | null
    volume: number | null
  }

  export type MarketDataMinAggregateOutputType = {
    id: string | null
    coinSymbol: string | null
    price: number | null
    volume: number | null
    recordedAt: Date | null
  }

  export type MarketDataMaxAggregateOutputType = {
    id: string | null
    coinSymbol: string | null
    price: number | null
    volume: number | null
    recordedAt: Date | null
  }

  export type MarketDataCountAggregateOutputType = {
    id: number
    coinSymbol: number
    price: number
    volume: number
    recordedAt: number
    _all: number
  }


  export type MarketDataAvgAggregateInputType = {
    price?: true
    volume?: true
  }

  export type MarketDataSumAggregateInputType = {
    price?: true
    volume?: true
  }

  export type MarketDataMinAggregateInputType = {
    id?: true
    coinSymbol?: true
    price?: true
    volume?: true
    recordedAt?: true
  }

  export type MarketDataMaxAggregateInputType = {
    id?: true
    coinSymbol?: true
    price?: true
    volume?: true
    recordedAt?: true
  }

  export type MarketDataCountAggregateInputType = {
    id?: true
    coinSymbol?: true
    price?: true
    volume?: true
    recordedAt?: true
    _all?: true
  }

  export type MarketDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketData to aggregate.
     */
    where?: MarketDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketData to fetch.
     */
    orderBy?: MarketDataOrderByWithRelationInput | MarketDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketData
    **/
    _count?: true | MarketDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketDataMaxAggregateInputType
  }

  export type GetMarketDataAggregateType<T extends MarketDataAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketData[P]>
      : GetScalarType<T[P], AggregateMarketData[P]>
  }




  export type MarketDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketDataWhereInput
    orderBy?: MarketDataOrderByWithAggregationInput | MarketDataOrderByWithAggregationInput[]
    by: MarketDataScalarFieldEnum[] | MarketDataScalarFieldEnum
    having?: MarketDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketDataCountAggregateInputType | true
    _avg?: MarketDataAvgAggregateInputType
    _sum?: MarketDataSumAggregateInputType
    _min?: MarketDataMinAggregateInputType
    _max?: MarketDataMaxAggregateInputType
  }

  export type MarketDataGroupByOutputType = {
    id: string
    coinSymbol: string
    price: number
    volume: number
    recordedAt: Date
    _count: MarketDataCountAggregateOutputType | null
    _avg: MarketDataAvgAggregateOutputType | null
    _sum: MarketDataSumAggregateOutputType | null
    _min: MarketDataMinAggregateOutputType | null
    _max: MarketDataMaxAggregateOutputType | null
  }

  type GetMarketDataGroupByPayload<T extends MarketDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketDataGroupByOutputType[P]>
            : GetScalarType<T[P], MarketDataGroupByOutputType[P]>
        }
      >
    >


  export type MarketDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coinSymbol?: boolean
    price?: boolean
    volume?: boolean
    recordedAt?: boolean
  }, ExtArgs["result"]["marketData"]>

  export type MarketDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coinSymbol?: boolean
    price?: boolean
    volume?: boolean
    recordedAt?: boolean
  }, ExtArgs["result"]["marketData"]>

  export type MarketDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coinSymbol?: boolean
    price?: boolean
    volume?: boolean
    recordedAt?: boolean
  }, ExtArgs["result"]["marketData"]>

  export type MarketDataSelectScalar = {
    id?: boolean
    coinSymbol?: boolean
    price?: boolean
    volume?: boolean
    recordedAt?: boolean
  }

  export type MarketDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coinSymbol" | "price" | "volume" | "recordedAt", ExtArgs["result"]["marketData"]>

  export type $MarketDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      coinSymbol: string
      price: number
      volume: number
      recordedAt: Date
    }, ExtArgs["result"]["marketData"]>
    composites: {}
  }

  type MarketDataGetPayload<S extends boolean | null | undefined | MarketDataDefaultArgs> = $Result.GetResult<Prisma.$MarketDataPayload, S>

  type MarketDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketDataCountAggregateInputType | true
    }

  export interface MarketDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketData'], meta: { name: 'MarketData' } }
    /**
     * Find zero or one MarketData that matches the filter.
     * @param {MarketDataFindUniqueArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketDataFindUniqueArgs>(args: SelectSubset<T, MarketDataFindUniqueArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketDataFindUniqueOrThrowArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketDataFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataFindFirstArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketDataFindFirstArgs>(args?: SelectSubset<T, MarketDataFindFirstArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataFindFirstOrThrowArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketDataFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketData
     * const marketData = await prisma.marketData.findMany()
     * 
     * // Get first 10 MarketData
     * const marketData = await prisma.marketData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketDataWithIdOnly = await prisma.marketData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketDataFindManyArgs>(args?: SelectSubset<T, MarketDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketData.
     * @param {MarketDataCreateArgs} args - Arguments to create a MarketData.
     * @example
     * // Create one MarketData
     * const MarketData = await prisma.marketData.create({
     *   data: {
     *     // ... data to create a MarketData
     *   }
     * })
     * 
     */
    create<T extends MarketDataCreateArgs>(args: SelectSubset<T, MarketDataCreateArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketData.
     * @param {MarketDataCreateManyArgs} args - Arguments to create many MarketData.
     * @example
     * // Create many MarketData
     * const marketData = await prisma.marketData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketDataCreateManyArgs>(args?: SelectSubset<T, MarketDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketData and returns the data saved in the database.
     * @param {MarketDataCreateManyAndReturnArgs} args - Arguments to create many MarketData.
     * @example
     * // Create many MarketData
     * const marketData = await prisma.marketData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketData and only return the `id`
     * const marketDataWithIdOnly = await prisma.marketData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketDataCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarketData.
     * @param {MarketDataDeleteArgs} args - Arguments to delete one MarketData.
     * @example
     * // Delete one MarketData
     * const MarketData = await prisma.marketData.delete({
     *   where: {
     *     // ... filter to delete one MarketData
     *   }
     * })
     * 
     */
    delete<T extends MarketDataDeleteArgs>(args: SelectSubset<T, MarketDataDeleteArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketData.
     * @param {MarketDataUpdateArgs} args - Arguments to update one MarketData.
     * @example
     * // Update one MarketData
     * const marketData = await prisma.marketData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketDataUpdateArgs>(args: SelectSubset<T, MarketDataUpdateArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketData.
     * @param {MarketDataDeleteManyArgs} args - Arguments to filter MarketData to delete.
     * @example
     * // Delete a few MarketData
     * const { count } = await prisma.marketData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketDataDeleteManyArgs>(args?: SelectSubset<T, MarketDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketData
     * const marketData = await prisma.marketData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketDataUpdateManyArgs>(args: SelectSubset<T, MarketDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketData and returns the data updated in the database.
     * @param {MarketDataUpdateManyAndReturnArgs} args - Arguments to update many MarketData.
     * @example
     * // Update many MarketData
     * const marketData = await prisma.marketData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarketData and only return the `id`
     * const marketDataWithIdOnly = await prisma.marketData.updateManyAndReturn({
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
    updateManyAndReturn<T extends MarketDataUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarketData.
     * @param {MarketDataUpsertArgs} args - Arguments to update or create a MarketData.
     * @example
     * // Update or create a MarketData
     * const marketData = await prisma.marketData.upsert({
     *   create: {
     *     // ... data to create a MarketData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketData we want to update
     *   }
     * })
     */
    upsert<T extends MarketDataUpsertArgs>(args: SelectSubset<T, MarketDataUpsertArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataCountArgs} args - Arguments to filter MarketData to count.
     * @example
     * // Count the number of MarketData
     * const count = await prisma.marketData.count({
     *   where: {
     *     // ... the filter for the MarketData we want to count
     *   }
     * })
    **/
    count<T extends MarketDataCountArgs>(
      args?: Subset<T, MarketDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarketDataAggregateArgs>(args: Subset<T, MarketDataAggregateArgs>): Prisma.PrismaPromise<GetMarketDataAggregateType<T>>

    /**
     * Group by MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataGroupByArgs} args - Group by arguments.
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
      T extends MarketDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketDataGroupByArgs['orderBy'] }
        : { orderBy?: MarketDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarketDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketData model
   */
  readonly fields: MarketDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MarketData model
   */
  interface MarketDataFieldRefs {
    readonly id: FieldRef<"MarketData", 'String'>
    readonly coinSymbol: FieldRef<"MarketData", 'String'>
    readonly price: FieldRef<"MarketData", 'Float'>
    readonly volume: FieldRef<"MarketData", 'Float'>
    readonly recordedAt: FieldRef<"MarketData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketData findUnique
   */
  export type MarketDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where: MarketDataWhereUniqueInput
  }

  /**
   * MarketData findUniqueOrThrow
   */
  export type MarketDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where: MarketDataWhereUniqueInput
  }

  /**
   * MarketData findFirst
   */
  export type MarketDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where?: MarketDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketData to fetch.
     */
    orderBy?: MarketDataOrderByWithRelationInput | MarketDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketData.
     */
    cursor?: MarketDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketData.
     */
    distinct?: MarketDataScalarFieldEnum | MarketDataScalarFieldEnum[]
  }

  /**
   * MarketData findFirstOrThrow
   */
  export type MarketDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where?: MarketDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketData to fetch.
     */
    orderBy?: MarketDataOrderByWithRelationInput | MarketDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketData.
     */
    cursor?: MarketDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketData.
     */
    distinct?: MarketDataScalarFieldEnum | MarketDataScalarFieldEnum[]
  }

  /**
   * MarketData findMany
   */
  export type MarketDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where?: MarketDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketData to fetch.
     */
    orderBy?: MarketDataOrderByWithRelationInput | MarketDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketData.
     */
    cursor?: MarketDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketData.
     */
    skip?: number
    distinct?: MarketDataScalarFieldEnum | MarketDataScalarFieldEnum[]
  }

  /**
   * MarketData create
   */
  export type MarketDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * The data needed to create a MarketData.
     */
    data: XOR<MarketDataCreateInput, MarketDataUncheckedCreateInput>
  }

  /**
   * MarketData createMany
   */
  export type MarketDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketData.
     */
    data: MarketDataCreateManyInput | MarketDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketData createManyAndReturn
   */
  export type MarketDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * The data used to create many MarketData.
     */
    data: MarketDataCreateManyInput | MarketDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketData update
   */
  export type MarketDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * The data needed to update a MarketData.
     */
    data: XOR<MarketDataUpdateInput, MarketDataUncheckedUpdateInput>
    /**
     * Choose, which MarketData to update.
     */
    where: MarketDataWhereUniqueInput
  }

  /**
   * MarketData updateMany
   */
  export type MarketDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketData.
     */
    data: XOR<MarketDataUpdateManyMutationInput, MarketDataUncheckedUpdateManyInput>
    /**
     * Filter which MarketData to update
     */
    where?: MarketDataWhereInput
    /**
     * Limit how many MarketData to update.
     */
    limit?: number
  }

  /**
   * MarketData updateManyAndReturn
   */
  export type MarketDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * The data used to update MarketData.
     */
    data: XOR<MarketDataUpdateManyMutationInput, MarketDataUncheckedUpdateManyInput>
    /**
     * Filter which MarketData to update
     */
    where?: MarketDataWhereInput
    /**
     * Limit how many MarketData to update.
     */
    limit?: number
  }

  /**
   * MarketData upsert
   */
  export type MarketDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * The filter to search for the MarketData to update in case it exists.
     */
    where: MarketDataWhereUniqueInput
    /**
     * In case the MarketData found by the `where` argument doesn't exist, create a new MarketData with this data.
     */
    create: XOR<MarketDataCreateInput, MarketDataUncheckedCreateInput>
    /**
     * In case the MarketData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketDataUpdateInput, MarketDataUncheckedUpdateInput>
  }

  /**
   * MarketData delete
   */
  export type MarketDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Filter which MarketData to delete.
     */
    where: MarketDataWhereUniqueInput
  }

  /**
   * MarketData deleteMany
   */
  export type MarketDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketData to delete
     */
    where?: MarketDataWhereInput
    /**
     * Limit how many MarketData to delete.
     */
    limit?: number
  }

  /**
   * MarketData without action
   */
  export type MarketDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
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
    email: 'email',
    clerkId: 'clerkId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WatchlistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WatchlistScalarFieldEnum = (typeof WatchlistScalarFieldEnum)[keyof typeof WatchlistScalarFieldEnum]


  export const WatchlistCoinScalarFieldEnum: {
    id: 'id',
    watchlistId: 'watchlistId',
    coinSymbol: 'coinSymbol',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WatchlistCoinScalarFieldEnum = (typeof WatchlistCoinScalarFieldEnum)[keyof typeof WatchlistCoinScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    coinSymbol: 'coinSymbol',
    threshold: 'threshold',
    condition: 'condition',
    channels: 'channels',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const AlertEventScalarFieldEnum: {
    id: 'id',
    alertId: 'alertId',
    triggeredAt: 'triggeredAt',
    details: 'details'
  };

  export type AlertEventScalarFieldEnum = (typeof AlertEventScalarFieldEnum)[keyof typeof AlertEventScalarFieldEnum]


  export const RawTweetScalarFieldEnum: {
    id: 'id',
    scraperJobId: 'scraperJobId',
    influencer: 'influencer',
    content: 'content',
    fetchedAt: 'fetchedAt'
  };

  export type RawTweetScalarFieldEnum = (typeof RawTweetScalarFieldEnum)[keyof typeof RawTweetScalarFieldEnum]


  export const SentimentScoreScalarFieldEnum: {
    id: 'id',
    tweetId: 'tweetId',
    coinSymbol: 'coinSymbol',
    score: 'score',
    window: 'window',
    calculatedAt: 'calculatedAt'
  };

  export type SentimentScoreScalarFieldEnum = (typeof SentimentScoreScalarFieldEnum)[keyof typeof SentimentScoreScalarFieldEnum]


  export const MarketDataScalarFieldEnum: {
    id: 'id',
    coinSymbol: 'coinSymbol',
    price: 'price',
    volume: 'volume',
    recordedAt: 'recordedAt'
  };

  export type MarketDataScalarFieldEnum = (typeof MarketDataScalarFieldEnum)[keyof typeof MarketDataScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    watchlists?: WatchlistListRelationFilter
    alerts?: AlertListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    clerkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    watchlists?: WatchlistOrderByRelationAggregateInput
    alerts?: AlertOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    clerkId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    watchlists?: WatchlistListRelationFilter
    alerts?: AlertListRelationFilter
  }, "id" | "email" | "clerkId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    clerkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WatchlistWhereInput = {
    AND?: WatchlistWhereInput | WatchlistWhereInput[]
    OR?: WatchlistWhereInput[]
    NOT?: WatchlistWhereInput | WatchlistWhereInput[]
    id?: StringFilter<"Watchlist"> | string
    name?: StringFilter<"Watchlist"> | string
    userId?: StringFilter<"Watchlist"> | string
    createdAt?: DateTimeFilter<"Watchlist"> | Date | string
    updatedAt?: DateTimeFilter<"Watchlist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    coins?: WatchlistCoinListRelationFilter
  }

  export type WatchlistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    coins?: WatchlistCoinOrderByRelationAggregateInput
  }

  export type WatchlistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WatchlistWhereInput | WatchlistWhereInput[]
    OR?: WatchlistWhereInput[]
    NOT?: WatchlistWhereInput | WatchlistWhereInput[]
    name?: StringFilter<"Watchlist"> | string
    userId?: StringFilter<"Watchlist"> | string
    createdAt?: DateTimeFilter<"Watchlist"> | Date | string
    updatedAt?: DateTimeFilter<"Watchlist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    coins?: WatchlistCoinListRelationFilter
  }, "id">

  export type WatchlistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WatchlistCountOrderByAggregateInput
    _max?: WatchlistMaxOrderByAggregateInput
    _min?: WatchlistMinOrderByAggregateInput
  }

  export type WatchlistScalarWhereWithAggregatesInput = {
    AND?: WatchlistScalarWhereWithAggregatesInput | WatchlistScalarWhereWithAggregatesInput[]
    OR?: WatchlistScalarWhereWithAggregatesInput[]
    NOT?: WatchlistScalarWhereWithAggregatesInput | WatchlistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Watchlist"> | string
    name?: StringWithAggregatesFilter<"Watchlist"> | string
    userId?: StringWithAggregatesFilter<"Watchlist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Watchlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Watchlist"> | Date | string
  }

  export type WatchlistCoinWhereInput = {
    AND?: WatchlistCoinWhereInput | WatchlistCoinWhereInput[]
    OR?: WatchlistCoinWhereInput[]
    NOT?: WatchlistCoinWhereInput | WatchlistCoinWhereInput[]
    id?: StringFilter<"WatchlistCoin"> | string
    watchlistId?: StringFilter<"WatchlistCoin"> | string
    coinSymbol?: StringFilter<"WatchlistCoin"> | string
    createdAt?: DateTimeFilter<"WatchlistCoin"> | Date | string
    updatedAt?: DateTimeFilter<"WatchlistCoin"> | Date | string
    watchlist?: XOR<WatchlistScalarRelationFilter, WatchlistWhereInput>
  }

  export type WatchlistCoinOrderByWithRelationInput = {
    id?: SortOrder
    watchlistId?: SortOrder
    coinSymbol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    watchlist?: WatchlistOrderByWithRelationInput
  }

  export type WatchlistCoinWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    watchlistId_coinSymbol?: WatchlistCoinWatchlistIdCoinSymbolCompoundUniqueInput
    AND?: WatchlistCoinWhereInput | WatchlistCoinWhereInput[]
    OR?: WatchlistCoinWhereInput[]
    NOT?: WatchlistCoinWhereInput | WatchlistCoinWhereInput[]
    watchlistId?: StringFilter<"WatchlistCoin"> | string
    coinSymbol?: StringFilter<"WatchlistCoin"> | string
    createdAt?: DateTimeFilter<"WatchlistCoin"> | Date | string
    updatedAt?: DateTimeFilter<"WatchlistCoin"> | Date | string
    watchlist?: XOR<WatchlistScalarRelationFilter, WatchlistWhereInput>
  }, "id" | "watchlistId_coinSymbol">

  export type WatchlistCoinOrderByWithAggregationInput = {
    id?: SortOrder
    watchlistId?: SortOrder
    coinSymbol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WatchlistCoinCountOrderByAggregateInput
    _max?: WatchlistCoinMaxOrderByAggregateInput
    _min?: WatchlistCoinMinOrderByAggregateInput
  }

  export type WatchlistCoinScalarWhereWithAggregatesInput = {
    AND?: WatchlistCoinScalarWhereWithAggregatesInput | WatchlistCoinScalarWhereWithAggregatesInput[]
    OR?: WatchlistCoinScalarWhereWithAggregatesInput[]
    NOT?: WatchlistCoinScalarWhereWithAggregatesInput | WatchlistCoinScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WatchlistCoin"> | string
    watchlistId?: StringWithAggregatesFilter<"WatchlistCoin"> | string
    coinSymbol?: StringWithAggregatesFilter<"WatchlistCoin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WatchlistCoin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WatchlistCoin"> | Date | string
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: StringFilter<"Alert"> | string
    userId?: StringFilter<"Alert"> | string
    type?: StringFilter<"Alert"> | string
    coinSymbol?: StringFilter<"Alert"> | string
    threshold?: FloatFilter<"Alert"> | number
    condition?: StringFilter<"Alert"> | string
    channels?: StringFilter<"Alert"> | string
    isActive?: BoolFilter<"Alert"> | boolean
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    alertEvents?: AlertEventListRelationFilter
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    coinSymbol?: SortOrder
    threshold?: SortOrder
    condition?: SortOrder
    channels?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    alertEvents?: AlertEventOrderByRelationAggregateInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    userId?: StringFilter<"Alert"> | string
    type?: StringFilter<"Alert"> | string
    coinSymbol?: StringFilter<"Alert"> | string
    threshold?: FloatFilter<"Alert"> | number
    condition?: StringFilter<"Alert"> | string
    channels?: StringFilter<"Alert"> | string
    isActive?: BoolFilter<"Alert"> | boolean
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    alertEvents?: AlertEventListRelationFilter
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    coinSymbol?: SortOrder
    threshold?: SortOrder
    condition?: SortOrder
    channels?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlertCountOrderByAggregateInput
    _avg?: AlertAvgOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
    _sum?: AlertSumOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alert"> | string
    userId?: StringWithAggregatesFilter<"Alert"> | string
    type?: StringWithAggregatesFilter<"Alert"> | string
    coinSymbol?: StringWithAggregatesFilter<"Alert"> | string
    threshold?: FloatWithAggregatesFilter<"Alert"> | number
    condition?: StringWithAggregatesFilter<"Alert"> | string
    channels?: StringWithAggregatesFilter<"Alert"> | string
    isActive?: BoolWithAggregatesFilter<"Alert"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
  }

  export type AlertEventWhereInput = {
    AND?: AlertEventWhereInput | AlertEventWhereInput[]
    OR?: AlertEventWhereInput[]
    NOT?: AlertEventWhereInput | AlertEventWhereInput[]
    id?: StringFilter<"AlertEvent"> | string
    alertId?: StringFilter<"AlertEvent"> | string
    triggeredAt?: DateTimeFilter<"AlertEvent"> | Date | string
    details?: StringNullableFilter<"AlertEvent"> | string | null
    alert?: XOR<AlertScalarRelationFilter, AlertWhereInput>
  }

  export type AlertEventOrderByWithRelationInput = {
    id?: SortOrder
    alertId?: SortOrder
    triggeredAt?: SortOrder
    details?: SortOrderInput | SortOrder
    alert?: AlertOrderByWithRelationInput
  }

  export type AlertEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertEventWhereInput | AlertEventWhereInput[]
    OR?: AlertEventWhereInput[]
    NOT?: AlertEventWhereInput | AlertEventWhereInput[]
    alertId?: StringFilter<"AlertEvent"> | string
    triggeredAt?: DateTimeFilter<"AlertEvent"> | Date | string
    details?: StringNullableFilter<"AlertEvent"> | string | null
    alert?: XOR<AlertScalarRelationFilter, AlertWhereInput>
  }, "id">

  export type AlertEventOrderByWithAggregationInput = {
    id?: SortOrder
    alertId?: SortOrder
    triggeredAt?: SortOrder
    details?: SortOrderInput | SortOrder
    _count?: AlertEventCountOrderByAggregateInput
    _max?: AlertEventMaxOrderByAggregateInput
    _min?: AlertEventMinOrderByAggregateInput
  }

  export type AlertEventScalarWhereWithAggregatesInput = {
    AND?: AlertEventScalarWhereWithAggregatesInput | AlertEventScalarWhereWithAggregatesInput[]
    OR?: AlertEventScalarWhereWithAggregatesInput[]
    NOT?: AlertEventScalarWhereWithAggregatesInput | AlertEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlertEvent"> | string
    alertId?: StringWithAggregatesFilter<"AlertEvent"> | string
    triggeredAt?: DateTimeWithAggregatesFilter<"AlertEvent"> | Date | string
    details?: StringNullableWithAggregatesFilter<"AlertEvent"> | string | null
  }

  export type RawTweetWhereInput = {
    AND?: RawTweetWhereInput | RawTweetWhereInput[]
    OR?: RawTweetWhereInput[]
    NOT?: RawTweetWhereInput | RawTweetWhereInput[]
    id?: StringFilter<"RawTweet"> | string
    scraperJobId?: StringNullableFilter<"RawTweet"> | string | null
    influencer?: StringFilter<"RawTweet"> | string
    content?: StringFilter<"RawTweet"> | string
    fetchedAt?: DateTimeFilter<"RawTweet"> | Date | string
    sentimentScores?: SentimentScoreListRelationFilter
  }

  export type RawTweetOrderByWithRelationInput = {
    id?: SortOrder
    scraperJobId?: SortOrderInput | SortOrder
    influencer?: SortOrder
    content?: SortOrder
    fetchedAt?: SortOrder
    sentimentScores?: SentimentScoreOrderByRelationAggregateInput
  }

  export type RawTweetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RawTweetWhereInput | RawTweetWhereInput[]
    OR?: RawTweetWhereInput[]
    NOT?: RawTweetWhereInput | RawTweetWhereInput[]
    scraperJobId?: StringNullableFilter<"RawTweet"> | string | null
    influencer?: StringFilter<"RawTweet"> | string
    content?: StringFilter<"RawTweet"> | string
    fetchedAt?: DateTimeFilter<"RawTweet"> | Date | string
    sentimentScores?: SentimentScoreListRelationFilter
  }, "id">

  export type RawTweetOrderByWithAggregationInput = {
    id?: SortOrder
    scraperJobId?: SortOrderInput | SortOrder
    influencer?: SortOrder
    content?: SortOrder
    fetchedAt?: SortOrder
    _count?: RawTweetCountOrderByAggregateInput
    _max?: RawTweetMaxOrderByAggregateInput
    _min?: RawTweetMinOrderByAggregateInput
  }

  export type RawTweetScalarWhereWithAggregatesInput = {
    AND?: RawTweetScalarWhereWithAggregatesInput | RawTweetScalarWhereWithAggregatesInput[]
    OR?: RawTweetScalarWhereWithAggregatesInput[]
    NOT?: RawTweetScalarWhereWithAggregatesInput | RawTweetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RawTweet"> | string
    scraperJobId?: StringNullableWithAggregatesFilter<"RawTweet"> | string | null
    influencer?: StringWithAggregatesFilter<"RawTweet"> | string
    content?: StringWithAggregatesFilter<"RawTweet"> | string
    fetchedAt?: DateTimeWithAggregatesFilter<"RawTweet"> | Date | string
  }

  export type SentimentScoreWhereInput = {
    AND?: SentimentScoreWhereInput | SentimentScoreWhereInput[]
    OR?: SentimentScoreWhereInput[]
    NOT?: SentimentScoreWhereInput | SentimentScoreWhereInput[]
    id?: StringFilter<"SentimentScore"> | string
    tweetId?: StringFilter<"SentimentScore"> | string
    coinSymbol?: StringFilter<"SentimentScore"> | string
    score?: FloatFilter<"SentimentScore"> | number
    window?: StringNullableFilter<"SentimentScore"> | string | null
    calculatedAt?: DateTimeFilter<"SentimentScore"> | Date | string
    tweet?: XOR<RawTweetScalarRelationFilter, RawTweetWhereInput>
  }

  export type SentimentScoreOrderByWithRelationInput = {
    id?: SortOrder
    tweetId?: SortOrder
    coinSymbol?: SortOrder
    score?: SortOrder
    window?: SortOrderInput | SortOrder
    calculatedAt?: SortOrder
    tweet?: RawTweetOrderByWithRelationInput
  }

  export type SentimentScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SentimentScoreWhereInput | SentimentScoreWhereInput[]
    OR?: SentimentScoreWhereInput[]
    NOT?: SentimentScoreWhereInput | SentimentScoreWhereInput[]
    tweetId?: StringFilter<"SentimentScore"> | string
    coinSymbol?: StringFilter<"SentimentScore"> | string
    score?: FloatFilter<"SentimentScore"> | number
    window?: StringNullableFilter<"SentimentScore"> | string | null
    calculatedAt?: DateTimeFilter<"SentimentScore"> | Date | string
    tweet?: XOR<RawTweetScalarRelationFilter, RawTweetWhereInput>
  }, "id">

  export type SentimentScoreOrderByWithAggregationInput = {
    id?: SortOrder
    tweetId?: SortOrder
    coinSymbol?: SortOrder
    score?: SortOrder
    window?: SortOrderInput | SortOrder
    calculatedAt?: SortOrder
    _count?: SentimentScoreCountOrderByAggregateInput
    _avg?: SentimentScoreAvgOrderByAggregateInput
    _max?: SentimentScoreMaxOrderByAggregateInput
    _min?: SentimentScoreMinOrderByAggregateInput
    _sum?: SentimentScoreSumOrderByAggregateInput
  }

  export type SentimentScoreScalarWhereWithAggregatesInput = {
    AND?: SentimentScoreScalarWhereWithAggregatesInput | SentimentScoreScalarWhereWithAggregatesInput[]
    OR?: SentimentScoreScalarWhereWithAggregatesInput[]
    NOT?: SentimentScoreScalarWhereWithAggregatesInput | SentimentScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SentimentScore"> | string
    tweetId?: StringWithAggregatesFilter<"SentimentScore"> | string
    coinSymbol?: StringWithAggregatesFilter<"SentimentScore"> | string
    score?: FloatWithAggregatesFilter<"SentimentScore"> | number
    window?: StringNullableWithAggregatesFilter<"SentimentScore"> | string | null
    calculatedAt?: DateTimeWithAggregatesFilter<"SentimentScore"> | Date | string
  }

  export type MarketDataWhereInput = {
    AND?: MarketDataWhereInput | MarketDataWhereInput[]
    OR?: MarketDataWhereInput[]
    NOT?: MarketDataWhereInput | MarketDataWhereInput[]
    id?: StringFilter<"MarketData"> | string
    coinSymbol?: StringFilter<"MarketData"> | string
    price?: FloatFilter<"MarketData"> | number
    volume?: FloatFilter<"MarketData"> | number
    recordedAt?: DateTimeFilter<"MarketData"> | Date | string
  }

  export type MarketDataOrderByWithRelationInput = {
    id?: SortOrder
    coinSymbol?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    recordedAt?: SortOrder
  }

  export type MarketDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MarketDataWhereInput | MarketDataWhereInput[]
    OR?: MarketDataWhereInput[]
    NOT?: MarketDataWhereInput | MarketDataWhereInput[]
    coinSymbol?: StringFilter<"MarketData"> | string
    price?: FloatFilter<"MarketData"> | number
    volume?: FloatFilter<"MarketData"> | number
    recordedAt?: DateTimeFilter<"MarketData"> | Date | string
  }, "id">

  export type MarketDataOrderByWithAggregationInput = {
    id?: SortOrder
    coinSymbol?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    recordedAt?: SortOrder
    _count?: MarketDataCountOrderByAggregateInput
    _avg?: MarketDataAvgOrderByAggregateInput
    _max?: MarketDataMaxOrderByAggregateInput
    _min?: MarketDataMinOrderByAggregateInput
    _sum?: MarketDataSumOrderByAggregateInput
  }

  export type MarketDataScalarWhereWithAggregatesInput = {
    AND?: MarketDataScalarWhereWithAggregatesInput | MarketDataScalarWhereWithAggregatesInput[]
    OR?: MarketDataScalarWhereWithAggregatesInput[]
    NOT?: MarketDataScalarWhereWithAggregatesInput | MarketDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarketData"> | string
    coinSymbol?: StringWithAggregatesFilter<"MarketData"> | string
    price?: FloatWithAggregatesFilter<"MarketData"> | number
    volume?: FloatWithAggregatesFilter<"MarketData"> | number
    recordedAt?: DateTimeWithAggregatesFilter<"MarketData"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    clerkId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watchlists?: WatchlistCreateNestedManyWithoutUserInput
    alerts?: AlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    clerkId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watchlists?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    alerts?: AlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlists?: WatchlistUpdateManyWithoutUserNestedInput
    alerts?: AlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlists?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    clerkId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWatchlistsInput
    coins?: WatchlistCoinCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    coins?: WatchlistCoinUncheckedCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchlistsNestedInput
    coins?: WatchlistCoinUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coins?: WatchlistCoinUncheckedUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistCreateManyInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistCoinCreateInput = {
    id?: string
    coinSymbol: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watchlist: WatchlistCreateNestedOneWithoutCoinsInput
  }

  export type WatchlistCoinUncheckedCreateInput = {
    id?: string
    watchlistId: string
    coinSymbol: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistCoinUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlist?: WatchlistUpdateOneRequiredWithoutCoinsNestedInput
  }

  export type WatchlistCoinUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchlistId?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistCoinCreateManyInput = {
    id?: string
    watchlistId: string
    coinSymbol: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistCoinUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistCoinUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchlistId?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateInput = {
    id?: string
    type: string
    coinSymbol: string
    threshold: number
    condition: string
    channels: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAlertsInput
    alertEvents?: AlertEventCreateNestedManyWithoutAlertInput
  }

  export type AlertUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    coinSymbol: string
    threshold: number
    condition: string
    channels: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    alertEvents?: AlertEventUncheckedCreateNestedManyWithoutAlertInput
  }

  export type AlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    channels?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAlertsNestedInput
    alertEvents?: AlertEventUpdateManyWithoutAlertNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    channels?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alertEvents?: AlertEventUncheckedUpdateManyWithoutAlertNestedInput
  }

  export type AlertCreateManyInput = {
    id?: string
    userId: string
    type: string
    coinSymbol: string
    threshold: number
    condition: string
    channels: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    channels?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    channels?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertEventCreateInput = {
    id?: string
    triggeredAt?: Date | string
    details?: string | null
    alert: AlertCreateNestedOneWithoutAlertEventsInput
  }

  export type AlertEventUncheckedCreateInput = {
    id?: string
    alertId: string
    triggeredAt?: Date | string
    details?: string | null
  }

  export type AlertEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: AlertUpdateOneRequiredWithoutAlertEventsNestedInput
  }

  export type AlertEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertId?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlertEventCreateManyInput = {
    id?: string
    alertId: string
    triggeredAt?: Date | string
    details?: string | null
  }

  export type AlertEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlertEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertId?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RawTweetCreateInput = {
    id?: string
    scraperJobId?: string | null
    influencer: string
    content: string
    fetchedAt?: Date | string
    sentimentScores?: SentimentScoreCreateNestedManyWithoutTweetInput
  }

  export type RawTweetUncheckedCreateInput = {
    id?: string
    scraperJobId?: string | null
    influencer: string
    content: string
    fetchedAt?: Date | string
    sentimentScores?: SentimentScoreUncheckedCreateNestedManyWithoutTweetInput
  }

  export type RawTweetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scraperJobId?: NullableStringFieldUpdateOperationsInput | string | null
    influencer?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentimentScores?: SentimentScoreUpdateManyWithoutTweetNestedInput
  }

  export type RawTweetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scraperJobId?: NullableStringFieldUpdateOperationsInput | string | null
    influencer?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentimentScores?: SentimentScoreUncheckedUpdateManyWithoutTweetNestedInput
  }

  export type RawTweetCreateManyInput = {
    id?: string
    scraperJobId?: string | null
    influencer: string
    content: string
    fetchedAt?: Date | string
  }

  export type RawTweetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scraperJobId?: NullableStringFieldUpdateOperationsInput | string | null
    influencer?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawTweetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scraperJobId?: NullableStringFieldUpdateOperationsInput | string | null
    influencer?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentimentScoreCreateInput = {
    id?: string
    coinSymbol: string
    score: number
    window?: string | null
    calculatedAt?: Date | string
    tweet: RawTweetCreateNestedOneWithoutSentimentScoresInput
  }

  export type SentimentScoreUncheckedCreateInput = {
    id?: string
    tweetId: string
    coinSymbol: string
    score: number
    window?: string | null
    calculatedAt?: Date | string
  }

  export type SentimentScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    window?: NullableStringFieldUpdateOperationsInput | string | null
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: RawTweetUpdateOneRequiredWithoutSentimentScoresNestedInput
  }

  export type SentimentScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    window?: NullableStringFieldUpdateOperationsInput | string | null
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentimentScoreCreateManyInput = {
    id?: string
    tweetId: string
    coinSymbol: string
    score: number
    window?: string | null
    calculatedAt?: Date | string
  }

  export type SentimentScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    window?: NullableStringFieldUpdateOperationsInput | string | null
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentimentScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    window?: NullableStringFieldUpdateOperationsInput | string | null
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketDataCreateInput = {
    id?: string
    coinSymbol: string
    price: number
    volume: number
    recordedAt?: Date | string
  }

  export type MarketDataUncheckedCreateInput = {
    id?: string
    coinSymbol: string
    price: number
    volume: number
    recordedAt?: Date | string
  }

  export type MarketDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketDataCreateManyInput = {
    id?: string
    coinSymbol: string
    price: number
    volume: number
    recordedAt?: Date | string
  }

  export type MarketDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type WatchlistListRelationFilter = {
    every?: WatchlistWhereInput
    some?: WatchlistWhereInput
    none?: WatchlistWhereInput
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type WatchlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    clerkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    clerkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    clerkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WatchlistCoinListRelationFilter = {
    every?: WatchlistCoinWhereInput
    some?: WatchlistCoinWhereInput
    none?: WatchlistCoinWhereInput
  }

  export type WatchlistCoinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchlistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WatchlistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WatchlistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WatchlistScalarRelationFilter = {
    is?: WatchlistWhereInput
    isNot?: WatchlistWhereInput
  }

  export type WatchlistCoinWatchlistIdCoinSymbolCompoundUniqueInput = {
    watchlistId: string
    coinSymbol: string
  }

  export type WatchlistCoinCountOrderByAggregateInput = {
    id?: SortOrder
    watchlistId?: SortOrder
    coinSymbol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WatchlistCoinMaxOrderByAggregateInput = {
    id?: SortOrder
    watchlistId?: SortOrder
    coinSymbol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WatchlistCoinMinOrderByAggregateInput = {
    id?: SortOrder
    watchlistId?: SortOrder
    coinSymbol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AlertEventListRelationFilter = {
    every?: AlertEventWhereInput
    some?: AlertEventWhereInput
    none?: AlertEventWhereInput
  }

  export type AlertEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    coinSymbol?: SortOrder
    threshold?: SortOrder
    condition?: SortOrder
    channels?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertAvgOrderByAggregateInput = {
    threshold?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    coinSymbol?: SortOrder
    threshold?: SortOrder
    condition?: SortOrder
    channels?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    coinSymbol?: SortOrder
    threshold?: SortOrder
    condition?: SortOrder
    channels?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertSumOrderByAggregateInput = {
    threshold?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type AlertScalarRelationFilter = {
    is?: AlertWhereInput
    isNot?: AlertWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AlertEventCountOrderByAggregateInput = {
    id?: SortOrder
    alertId?: SortOrder
    triggeredAt?: SortOrder
    details?: SortOrder
  }

  export type AlertEventMaxOrderByAggregateInput = {
    id?: SortOrder
    alertId?: SortOrder
    triggeredAt?: SortOrder
    details?: SortOrder
  }

  export type AlertEventMinOrderByAggregateInput = {
    id?: SortOrder
    alertId?: SortOrder
    triggeredAt?: SortOrder
    details?: SortOrder
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

  export type SentimentScoreListRelationFilter = {
    every?: SentimentScoreWhereInput
    some?: SentimentScoreWhereInput
    none?: SentimentScoreWhereInput
  }

  export type SentimentScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RawTweetCountOrderByAggregateInput = {
    id?: SortOrder
    scraperJobId?: SortOrder
    influencer?: SortOrder
    content?: SortOrder
    fetchedAt?: SortOrder
  }

  export type RawTweetMaxOrderByAggregateInput = {
    id?: SortOrder
    scraperJobId?: SortOrder
    influencer?: SortOrder
    content?: SortOrder
    fetchedAt?: SortOrder
  }

  export type RawTweetMinOrderByAggregateInput = {
    id?: SortOrder
    scraperJobId?: SortOrder
    influencer?: SortOrder
    content?: SortOrder
    fetchedAt?: SortOrder
  }

  export type RawTweetScalarRelationFilter = {
    is?: RawTweetWhereInput
    isNot?: RawTweetWhereInput
  }

  export type SentimentScoreCountOrderByAggregateInput = {
    id?: SortOrder
    tweetId?: SortOrder
    coinSymbol?: SortOrder
    score?: SortOrder
    window?: SortOrder
    calculatedAt?: SortOrder
  }

  export type SentimentScoreAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type SentimentScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    tweetId?: SortOrder
    coinSymbol?: SortOrder
    score?: SortOrder
    window?: SortOrder
    calculatedAt?: SortOrder
  }

  export type SentimentScoreMinOrderByAggregateInput = {
    id?: SortOrder
    tweetId?: SortOrder
    coinSymbol?: SortOrder
    score?: SortOrder
    window?: SortOrder
    calculatedAt?: SortOrder
  }

  export type SentimentScoreSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type MarketDataCountOrderByAggregateInput = {
    id?: SortOrder
    coinSymbol?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    recordedAt?: SortOrder
  }

  export type MarketDataAvgOrderByAggregateInput = {
    price?: SortOrder
    volume?: SortOrder
  }

  export type MarketDataMaxOrderByAggregateInput = {
    id?: SortOrder
    coinSymbol?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    recordedAt?: SortOrder
  }

  export type MarketDataMinOrderByAggregateInput = {
    id?: SortOrder
    coinSymbol?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    recordedAt?: SortOrder
  }

  export type MarketDataSumOrderByAggregateInput = {
    price?: SortOrder
    volume?: SortOrder
  }

  export type WatchlistCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutUserInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type WatchlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WatchlistUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutUserInput | WatchlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutUserInput | WatchlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutUserInput | WatchlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutUserInput | AlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutUserInput | AlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutUserInput | AlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type WatchlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutUserInput | WatchlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutUserInput | WatchlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutUserInput | WatchlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutUserInput | AlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutUserInput | AlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutUserInput | AlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWatchlistsInput = {
    create?: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistsInput
    connect?: UserWhereUniqueInput
  }

  export type WatchlistCoinCreateNestedManyWithoutWatchlistInput = {
    create?: XOR<WatchlistCoinCreateWithoutWatchlistInput, WatchlistCoinUncheckedCreateWithoutWatchlistInput> | WatchlistCoinCreateWithoutWatchlistInput[] | WatchlistCoinUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: WatchlistCoinCreateOrConnectWithoutWatchlistInput | WatchlistCoinCreateOrConnectWithoutWatchlistInput[]
    createMany?: WatchlistCoinCreateManyWatchlistInputEnvelope
    connect?: WatchlistCoinWhereUniqueInput | WatchlistCoinWhereUniqueInput[]
  }

  export type WatchlistCoinUncheckedCreateNestedManyWithoutWatchlistInput = {
    create?: XOR<WatchlistCoinCreateWithoutWatchlistInput, WatchlistCoinUncheckedCreateWithoutWatchlistInput> | WatchlistCoinCreateWithoutWatchlistInput[] | WatchlistCoinUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: WatchlistCoinCreateOrConnectWithoutWatchlistInput | WatchlistCoinCreateOrConnectWithoutWatchlistInput[]
    createMany?: WatchlistCoinCreateManyWatchlistInputEnvelope
    connect?: WatchlistCoinWhereUniqueInput | WatchlistCoinWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWatchlistsNestedInput = {
    create?: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistsInput
    upsert?: UserUpsertWithoutWatchlistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchlistsInput, UserUpdateWithoutWatchlistsInput>, UserUncheckedUpdateWithoutWatchlistsInput>
  }

  export type WatchlistCoinUpdateManyWithoutWatchlistNestedInput = {
    create?: XOR<WatchlistCoinCreateWithoutWatchlistInput, WatchlistCoinUncheckedCreateWithoutWatchlistInput> | WatchlistCoinCreateWithoutWatchlistInput[] | WatchlistCoinUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: WatchlistCoinCreateOrConnectWithoutWatchlistInput | WatchlistCoinCreateOrConnectWithoutWatchlistInput[]
    upsert?: WatchlistCoinUpsertWithWhereUniqueWithoutWatchlistInput | WatchlistCoinUpsertWithWhereUniqueWithoutWatchlistInput[]
    createMany?: WatchlistCoinCreateManyWatchlistInputEnvelope
    set?: WatchlistCoinWhereUniqueInput | WatchlistCoinWhereUniqueInput[]
    disconnect?: WatchlistCoinWhereUniqueInput | WatchlistCoinWhereUniqueInput[]
    delete?: WatchlistCoinWhereUniqueInput | WatchlistCoinWhereUniqueInput[]
    connect?: WatchlistCoinWhereUniqueInput | WatchlistCoinWhereUniqueInput[]
    update?: WatchlistCoinUpdateWithWhereUniqueWithoutWatchlistInput | WatchlistCoinUpdateWithWhereUniqueWithoutWatchlistInput[]
    updateMany?: WatchlistCoinUpdateManyWithWhereWithoutWatchlistInput | WatchlistCoinUpdateManyWithWhereWithoutWatchlistInput[]
    deleteMany?: WatchlistCoinScalarWhereInput | WatchlistCoinScalarWhereInput[]
  }

  export type WatchlistCoinUncheckedUpdateManyWithoutWatchlistNestedInput = {
    create?: XOR<WatchlistCoinCreateWithoutWatchlistInput, WatchlistCoinUncheckedCreateWithoutWatchlistInput> | WatchlistCoinCreateWithoutWatchlistInput[] | WatchlistCoinUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: WatchlistCoinCreateOrConnectWithoutWatchlistInput | WatchlistCoinCreateOrConnectWithoutWatchlistInput[]
    upsert?: WatchlistCoinUpsertWithWhereUniqueWithoutWatchlistInput | WatchlistCoinUpsertWithWhereUniqueWithoutWatchlistInput[]
    createMany?: WatchlistCoinCreateManyWatchlistInputEnvelope
    set?: WatchlistCoinWhereUniqueInput | WatchlistCoinWhereUniqueInput[]
    disconnect?: WatchlistCoinWhereUniqueInput | WatchlistCoinWhereUniqueInput[]
    delete?: WatchlistCoinWhereUniqueInput | WatchlistCoinWhereUniqueInput[]
    connect?: WatchlistCoinWhereUniqueInput | WatchlistCoinWhereUniqueInput[]
    update?: WatchlistCoinUpdateWithWhereUniqueWithoutWatchlistInput | WatchlistCoinUpdateWithWhereUniqueWithoutWatchlistInput[]
    updateMany?: WatchlistCoinUpdateManyWithWhereWithoutWatchlistInput | WatchlistCoinUpdateManyWithWhereWithoutWatchlistInput[]
    deleteMany?: WatchlistCoinScalarWhereInput | WatchlistCoinScalarWhereInput[]
  }

  export type WatchlistCreateNestedOneWithoutCoinsInput = {
    create?: XOR<WatchlistCreateWithoutCoinsInput, WatchlistUncheckedCreateWithoutCoinsInput>
    connectOrCreate?: WatchlistCreateOrConnectWithoutCoinsInput
    connect?: WatchlistWhereUniqueInput
  }

  export type WatchlistUpdateOneRequiredWithoutCoinsNestedInput = {
    create?: XOR<WatchlistCreateWithoutCoinsInput, WatchlistUncheckedCreateWithoutCoinsInput>
    connectOrCreate?: WatchlistCreateOrConnectWithoutCoinsInput
    upsert?: WatchlistUpsertWithoutCoinsInput
    connect?: WatchlistWhereUniqueInput
    update?: XOR<XOR<WatchlistUpdateToOneWithWhereWithoutCoinsInput, WatchlistUpdateWithoutCoinsInput>, WatchlistUncheckedUpdateWithoutCoinsInput>
  }

  export type UserCreateNestedOneWithoutAlertsInput = {
    create?: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertsInput
    connect?: UserWhereUniqueInput
  }

  export type AlertEventCreateNestedManyWithoutAlertInput = {
    create?: XOR<AlertEventCreateWithoutAlertInput, AlertEventUncheckedCreateWithoutAlertInput> | AlertEventCreateWithoutAlertInput[] | AlertEventUncheckedCreateWithoutAlertInput[]
    connectOrCreate?: AlertEventCreateOrConnectWithoutAlertInput | AlertEventCreateOrConnectWithoutAlertInput[]
    createMany?: AlertEventCreateManyAlertInputEnvelope
    connect?: AlertEventWhereUniqueInput | AlertEventWhereUniqueInput[]
  }

  export type AlertEventUncheckedCreateNestedManyWithoutAlertInput = {
    create?: XOR<AlertEventCreateWithoutAlertInput, AlertEventUncheckedCreateWithoutAlertInput> | AlertEventCreateWithoutAlertInput[] | AlertEventUncheckedCreateWithoutAlertInput[]
    connectOrCreate?: AlertEventCreateOrConnectWithoutAlertInput | AlertEventCreateOrConnectWithoutAlertInput[]
    createMany?: AlertEventCreateManyAlertInputEnvelope
    connect?: AlertEventWhereUniqueInput | AlertEventWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertsInput
    upsert?: UserUpsertWithoutAlertsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlertsInput, UserUpdateWithoutAlertsInput>, UserUncheckedUpdateWithoutAlertsInput>
  }

  export type AlertEventUpdateManyWithoutAlertNestedInput = {
    create?: XOR<AlertEventCreateWithoutAlertInput, AlertEventUncheckedCreateWithoutAlertInput> | AlertEventCreateWithoutAlertInput[] | AlertEventUncheckedCreateWithoutAlertInput[]
    connectOrCreate?: AlertEventCreateOrConnectWithoutAlertInput | AlertEventCreateOrConnectWithoutAlertInput[]
    upsert?: AlertEventUpsertWithWhereUniqueWithoutAlertInput | AlertEventUpsertWithWhereUniqueWithoutAlertInput[]
    createMany?: AlertEventCreateManyAlertInputEnvelope
    set?: AlertEventWhereUniqueInput | AlertEventWhereUniqueInput[]
    disconnect?: AlertEventWhereUniqueInput | AlertEventWhereUniqueInput[]
    delete?: AlertEventWhereUniqueInput | AlertEventWhereUniqueInput[]
    connect?: AlertEventWhereUniqueInput | AlertEventWhereUniqueInput[]
    update?: AlertEventUpdateWithWhereUniqueWithoutAlertInput | AlertEventUpdateWithWhereUniqueWithoutAlertInput[]
    updateMany?: AlertEventUpdateManyWithWhereWithoutAlertInput | AlertEventUpdateManyWithWhereWithoutAlertInput[]
    deleteMany?: AlertEventScalarWhereInput | AlertEventScalarWhereInput[]
  }

  export type AlertEventUncheckedUpdateManyWithoutAlertNestedInput = {
    create?: XOR<AlertEventCreateWithoutAlertInput, AlertEventUncheckedCreateWithoutAlertInput> | AlertEventCreateWithoutAlertInput[] | AlertEventUncheckedCreateWithoutAlertInput[]
    connectOrCreate?: AlertEventCreateOrConnectWithoutAlertInput | AlertEventCreateOrConnectWithoutAlertInput[]
    upsert?: AlertEventUpsertWithWhereUniqueWithoutAlertInput | AlertEventUpsertWithWhereUniqueWithoutAlertInput[]
    createMany?: AlertEventCreateManyAlertInputEnvelope
    set?: AlertEventWhereUniqueInput | AlertEventWhereUniqueInput[]
    disconnect?: AlertEventWhereUniqueInput | AlertEventWhereUniqueInput[]
    delete?: AlertEventWhereUniqueInput | AlertEventWhereUniqueInput[]
    connect?: AlertEventWhereUniqueInput | AlertEventWhereUniqueInput[]
    update?: AlertEventUpdateWithWhereUniqueWithoutAlertInput | AlertEventUpdateWithWhereUniqueWithoutAlertInput[]
    updateMany?: AlertEventUpdateManyWithWhereWithoutAlertInput | AlertEventUpdateManyWithWhereWithoutAlertInput[]
    deleteMany?: AlertEventScalarWhereInput | AlertEventScalarWhereInput[]
  }

  export type AlertCreateNestedOneWithoutAlertEventsInput = {
    create?: XOR<AlertCreateWithoutAlertEventsInput, AlertUncheckedCreateWithoutAlertEventsInput>
    connectOrCreate?: AlertCreateOrConnectWithoutAlertEventsInput
    connect?: AlertWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AlertUpdateOneRequiredWithoutAlertEventsNestedInput = {
    create?: XOR<AlertCreateWithoutAlertEventsInput, AlertUncheckedCreateWithoutAlertEventsInput>
    connectOrCreate?: AlertCreateOrConnectWithoutAlertEventsInput
    upsert?: AlertUpsertWithoutAlertEventsInput
    connect?: AlertWhereUniqueInput
    update?: XOR<XOR<AlertUpdateToOneWithWhereWithoutAlertEventsInput, AlertUpdateWithoutAlertEventsInput>, AlertUncheckedUpdateWithoutAlertEventsInput>
  }

  export type SentimentScoreCreateNestedManyWithoutTweetInput = {
    create?: XOR<SentimentScoreCreateWithoutTweetInput, SentimentScoreUncheckedCreateWithoutTweetInput> | SentimentScoreCreateWithoutTweetInput[] | SentimentScoreUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: SentimentScoreCreateOrConnectWithoutTweetInput | SentimentScoreCreateOrConnectWithoutTweetInput[]
    createMany?: SentimentScoreCreateManyTweetInputEnvelope
    connect?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
  }

  export type SentimentScoreUncheckedCreateNestedManyWithoutTweetInput = {
    create?: XOR<SentimentScoreCreateWithoutTweetInput, SentimentScoreUncheckedCreateWithoutTweetInput> | SentimentScoreCreateWithoutTweetInput[] | SentimentScoreUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: SentimentScoreCreateOrConnectWithoutTweetInput | SentimentScoreCreateOrConnectWithoutTweetInput[]
    createMany?: SentimentScoreCreateManyTweetInputEnvelope
    connect?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
  }

  export type SentimentScoreUpdateManyWithoutTweetNestedInput = {
    create?: XOR<SentimentScoreCreateWithoutTweetInput, SentimentScoreUncheckedCreateWithoutTweetInput> | SentimentScoreCreateWithoutTweetInput[] | SentimentScoreUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: SentimentScoreCreateOrConnectWithoutTweetInput | SentimentScoreCreateOrConnectWithoutTweetInput[]
    upsert?: SentimentScoreUpsertWithWhereUniqueWithoutTweetInput | SentimentScoreUpsertWithWhereUniqueWithoutTweetInput[]
    createMany?: SentimentScoreCreateManyTweetInputEnvelope
    set?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
    disconnect?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
    delete?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
    connect?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
    update?: SentimentScoreUpdateWithWhereUniqueWithoutTweetInput | SentimentScoreUpdateWithWhereUniqueWithoutTweetInput[]
    updateMany?: SentimentScoreUpdateManyWithWhereWithoutTweetInput | SentimentScoreUpdateManyWithWhereWithoutTweetInput[]
    deleteMany?: SentimentScoreScalarWhereInput | SentimentScoreScalarWhereInput[]
  }

  export type SentimentScoreUncheckedUpdateManyWithoutTweetNestedInput = {
    create?: XOR<SentimentScoreCreateWithoutTweetInput, SentimentScoreUncheckedCreateWithoutTweetInput> | SentimentScoreCreateWithoutTweetInput[] | SentimentScoreUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: SentimentScoreCreateOrConnectWithoutTweetInput | SentimentScoreCreateOrConnectWithoutTweetInput[]
    upsert?: SentimentScoreUpsertWithWhereUniqueWithoutTweetInput | SentimentScoreUpsertWithWhereUniqueWithoutTweetInput[]
    createMany?: SentimentScoreCreateManyTweetInputEnvelope
    set?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
    disconnect?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
    delete?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
    connect?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
    update?: SentimentScoreUpdateWithWhereUniqueWithoutTweetInput | SentimentScoreUpdateWithWhereUniqueWithoutTweetInput[]
    updateMany?: SentimentScoreUpdateManyWithWhereWithoutTweetInput | SentimentScoreUpdateManyWithWhereWithoutTweetInput[]
    deleteMany?: SentimentScoreScalarWhereInput | SentimentScoreScalarWhereInput[]
  }

  export type RawTweetCreateNestedOneWithoutSentimentScoresInput = {
    create?: XOR<RawTweetCreateWithoutSentimentScoresInput, RawTweetUncheckedCreateWithoutSentimentScoresInput>
    connectOrCreate?: RawTweetCreateOrConnectWithoutSentimentScoresInput
    connect?: RawTweetWhereUniqueInput
  }

  export type RawTweetUpdateOneRequiredWithoutSentimentScoresNestedInput = {
    create?: XOR<RawTweetCreateWithoutSentimentScoresInput, RawTweetUncheckedCreateWithoutSentimentScoresInput>
    connectOrCreate?: RawTweetCreateOrConnectWithoutSentimentScoresInput
    upsert?: RawTweetUpsertWithoutSentimentScoresInput
    connect?: RawTweetWhereUniqueInput
    update?: XOR<XOR<RawTweetUpdateToOneWithWhereWithoutSentimentScoresInput, RawTweetUpdateWithoutSentimentScoresInput>, RawTweetUncheckedUpdateWithoutSentimentScoresInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type WatchlistCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    coins?: WatchlistCoinCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    coins?: WatchlistCoinUncheckedCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistCreateOrConnectWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    create: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput>
  }

  export type WatchlistCreateManyUserInputEnvelope = {
    data: WatchlistCreateManyUserInput | WatchlistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AlertCreateWithoutUserInput = {
    id?: string
    type: string
    coinSymbol: string
    threshold: number
    condition: string
    channels: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    alertEvents?: AlertEventCreateNestedManyWithoutAlertInput
  }

  export type AlertUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    coinSymbol: string
    threshold: number
    condition: string
    channels: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    alertEvents?: AlertEventUncheckedCreateNestedManyWithoutAlertInput
  }

  export type AlertCreateOrConnectWithoutUserInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput>
  }

  export type AlertCreateManyUserInputEnvelope = {
    data: AlertCreateManyUserInput | AlertCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WatchlistUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    update: XOR<WatchlistUpdateWithoutUserInput, WatchlistUncheckedUpdateWithoutUserInput>
    create: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput>
  }

  export type WatchlistUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    data: XOR<WatchlistUpdateWithoutUserInput, WatchlistUncheckedUpdateWithoutUserInput>
  }

  export type WatchlistUpdateManyWithWhereWithoutUserInput = {
    where: WatchlistScalarWhereInput
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchlistScalarWhereInput = {
    AND?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
    OR?: WatchlistScalarWhereInput[]
    NOT?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
    id?: StringFilter<"Watchlist"> | string
    name?: StringFilter<"Watchlist"> | string
    userId?: StringFilter<"Watchlist"> | string
    createdAt?: DateTimeFilter<"Watchlist"> | Date | string
    updatedAt?: DateTimeFilter<"Watchlist"> | Date | string
  }

  export type AlertUpsertWithWhereUniqueWithoutUserInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutUserInput, AlertUncheckedUpdateWithoutUserInput>
    create: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutUserInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutUserInput, AlertUncheckedUpdateWithoutUserInput>
  }

  export type AlertUpdateManyWithWhereWithoutUserInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutUserInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: StringFilter<"Alert"> | string
    userId?: StringFilter<"Alert"> | string
    type?: StringFilter<"Alert"> | string
    coinSymbol?: StringFilter<"Alert"> | string
    threshold?: FloatFilter<"Alert"> | number
    condition?: StringFilter<"Alert"> | string
    channels?: StringFilter<"Alert"> | string
    isActive?: BoolFilter<"Alert"> | boolean
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
  }

  export type UserCreateWithoutWatchlistsInput = {
    id?: string
    email: string
    clerkId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    alerts?: AlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWatchlistsInput = {
    id?: string
    email: string
    clerkId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    alerts?: AlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWatchlistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
  }

  export type WatchlistCoinCreateWithoutWatchlistInput = {
    id?: string
    coinSymbol: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistCoinUncheckedCreateWithoutWatchlistInput = {
    id?: string
    coinSymbol: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistCoinCreateOrConnectWithoutWatchlistInput = {
    where: WatchlistCoinWhereUniqueInput
    create: XOR<WatchlistCoinCreateWithoutWatchlistInput, WatchlistCoinUncheckedCreateWithoutWatchlistInput>
  }

  export type WatchlistCoinCreateManyWatchlistInputEnvelope = {
    data: WatchlistCoinCreateManyWatchlistInput | WatchlistCoinCreateManyWatchlistInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWatchlistsInput = {
    update: XOR<UserUpdateWithoutWatchlistsInput, UserUncheckedUpdateWithoutWatchlistsInput>
    create: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchlistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchlistsInput, UserUncheckedUpdateWithoutWatchlistsInput>
  }

  export type UserUpdateWithoutWatchlistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchlistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WatchlistCoinUpsertWithWhereUniqueWithoutWatchlistInput = {
    where: WatchlistCoinWhereUniqueInput
    update: XOR<WatchlistCoinUpdateWithoutWatchlistInput, WatchlistCoinUncheckedUpdateWithoutWatchlistInput>
    create: XOR<WatchlistCoinCreateWithoutWatchlistInput, WatchlistCoinUncheckedCreateWithoutWatchlistInput>
  }

  export type WatchlistCoinUpdateWithWhereUniqueWithoutWatchlistInput = {
    where: WatchlistCoinWhereUniqueInput
    data: XOR<WatchlistCoinUpdateWithoutWatchlistInput, WatchlistCoinUncheckedUpdateWithoutWatchlistInput>
  }

  export type WatchlistCoinUpdateManyWithWhereWithoutWatchlistInput = {
    where: WatchlistCoinScalarWhereInput
    data: XOR<WatchlistCoinUpdateManyMutationInput, WatchlistCoinUncheckedUpdateManyWithoutWatchlistInput>
  }

  export type WatchlistCoinScalarWhereInput = {
    AND?: WatchlistCoinScalarWhereInput | WatchlistCoinScalarWhereInput[]
    OR?: WatchlistCoinScalarWhereInput[]
    NOT?: WatchlistCoinScalarWhereInput | WatchlistCoinScalarWhereInput[]
    id?: StringFilter<"WatchlistCoin"> | string
    watchlistId?: StringFilter<"WatchlistCoin"> | string
    coinSymbol?: StringFilter<"WatchlistCoin"> | string
    createdAt?: DateTimeFilter<"WatchlistCoin"> | Date | string
    updatedAt?: DateTimeFilter<"WatchlistCoin"> | Date | string
  }

  export type WatchlistCreateWithoutCoinsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWatchlistsInput
  }

  export type WatchlistUncheckedCreateWithoutCoinsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistCreateOrConnectWithoutCoinsInput = {
    where: WatchlistWhereUniqueInput
    create: XOR<WatchlistCreateWithoutCoinsInput, WatchlistUncheckedCreateWithoutCoinsInput>
  }

  export type WatchlistUpsertWithoutCoinsInput = {
    update: XOR<WatchlistUpdateWithoutCoinsInput, WatchlistUncheckedUpdateWithoutCoinsInput>
    create: XOR<WatchlistCreateWithoutCoinsInput, WatchlistUncheckedCreateWithoutCoinsInput>
    where?: WatchlistWhereInput
  }

  export type WatchlistUpdateToOneWithWhereWithoutCoinsInput = {
    where?: WatchlistWhereInput
    data: XOR<WatchlistUpdateWithoutCoinsInput, WatchlistUncheckedUpdateWithoutCoinsInput>
  }

  export type WatchlistUpdateWithoutCoinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchlistsNestedInput
  }

  export type WatchlistUncheckedUpdateWithoutCoinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAlertsInput = {
    id?: string
    email: string
    clerkId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watchlists?: WatchlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAlertsInput = {
    id?: string
    email: string
    clerkId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watchlists?: WatchlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAlertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
  }

  export type AlertEventCreateWithoutAlertInput = {
    id?: string
    triggeredAt?: Date | string
    details?: string | null
  }

  export type AlertEventUncheckedCreateWithoutAlertInput = {
    id?: string
    triggeredAt?: Date | string
    details?: string | null
  }

  export type AlertEventCreateOrConnectWithoutAlertInput = {
    where: AlertEventWhereUniqueInput
    create: XOR<AlertEventCreateWithoutAlertInput, AlertEventUncheckedCreateWithoutAlertInput>
  }

  export type AlertEventCreateManyAlertInputEnvelope = {
    data: AlertEventCreateManyAlertInput | AlertEventCreateManyAlertInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAlertsInput = {
    update: XOR<UserUpdateWithoutAlertsInput, UserUncheckedUpdateWithoutAlertsInput>
    create: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAlertsInput, UserUncheckedUpdateWithoutAlertsInput>
  }

  export type UserUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlists?: WatchlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlists?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AlertEventUpsertWithWhereUniqueWithoutAlertInput = {
    where: AlertEventWhereUniqueInput
    update: XOR<AlertEventUpdateWithoutAlertInput, AlertEventUncheckedUpdateWithoutAlertInput>
    create: XOR<AlertEventCreateWithoutAlertInput, AlertEventUncheckedCreateWithoutAlertInput>
  }

  export type AlertEventUpdateWithWhereUniqueWithoutAlertInput = {
    where: AlertEventWhereUniqueInput
    data: XOR<AlertEventUpdateWithoutAlertInput, AlertEventUncheckedUpdateWithoutAlertInput>
  }

  export type AlertEventUpdateManyWithWhereWithoutAlertInput = {
    where: AlertEventScalarWhereInput
    data: XOR<AlertEventUpdateManyMutationInput, AlertEventUncheckedUpdateManyWithoutAlertInput>
  }

  export type AlertEventScalarWhereInput = {
    AND?: AlertEventScalarWhereInput | AlertEventScalarWhereInput[]
    OR?: AlertEventScalarWhereInput[]
    NOT?: AlertEventScalarWhereInput | AlertEventScalarWhereInput[]
    id?: StringFilter<"AlertEvent"> | string
    alertId?: StringFilter<"AlertEvent"> | string
    triggeredAt?: DateTimeFilter<"AlertEvent"> | Date | string
    details?: StringNullableFilter<"AlertEvent"> | string | null
  }

  export type AlertCreateWithoutAlertEventsInput = {
    id?: string
    type: string
    coinSymbol: string
    threshold: number
    condition: string
    channels: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateWithoutAlertEventsInput = {
    id?: string
    userId: string
    type: string
    coinSymbol: string
    threshold: number
    condition: string
    channels: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertCreateOrConnectWithoutAlertEventsInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutAlertEventsInput, AlertUncheckedCreateWithoutAlertEventsInput>
  }

  export type AlertUpsertWithoutAlertEventsInput = {
    update: XOR<AlertUpdateWithoutAlertEventsInput, AlertUncheckedUpdateWithoutAlertEventsInput>
    create: XOR<AlertCreateWithoutAlertEventsInput, AlertUncheckedCreateWithoutAlertEventsInput>
    where?: AlertWhereInput
  }

  export type AlertUpdateToOneWithWhereWithoutAlertEventsInput = {
    where?: AlertWhereInput
    data: XOR<AlertUpdateWithoutAlertEventsInput, AlertUncheckedUpdateWithoutAlertEventsInput>
  }

  export type AlertUpdateWithoutAlertEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    channels?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateWithoutAlertEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    channels?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentimentScoreCreateWithoutTweetInput = {
    id?: string
    coinSymbol: string
    score: number
    window?: string | null
    calculatedAt?: Date | string
  }

  export type SentimentScoreUncheckedCreateWithoutTweetInput = {
    id?: string
    coinSymbol: string
    score: number
    window?: string | null
    calculatedAt?: Date | string
  }

  export type SentimentScoreCreateOrConnectWithoutTweetInput = {
    where: SentimentScoreWhereUniqueInput
    create: XOR<SentimentScoreCreateWithoutTweetInput, SentimentScoreUncheckedCreateWithoutTweetInput>
  }

  export type SentimentScoreCreateManyTweetInputEnvelope = {
    data: SentimentScoreCreateManyTweetInput | SentimentScoreCreateManyTweetInput[]
    skipDuplicates?: boolean
  }

  export type SentimentScoreUpsertWithWhereUniqueWithoutTweetInput = {
    where: SentimentScoreWhereUniqueInput
    update: XOR<SentimentScoreUpdateWithoutTweetInput, SentimentScoreUncheckedUpdateWithoutTweetInput>
    create: XOR<SentimentScoreCreateWithoutTweetInput, SentimentScoreUncheckedCreateWithoutTweetInput>
  }

  export type SentimentScoreUpdateWithWhereUniqueWithoutTweetInput = {
    where: SentimentScoreWhereUniqueInput
    data: XOR<SentimentScoreUpdateWithoutTweetInput, SentimentScoreUncheckedUpdateWithoutTweetInput>
  }

  export type SentimentScoreUpdateManyWithWhereWithoutTweetInput = {
    where: SentimentScoreScalarWhereInput
    data: XOR<SentimentScoreUpdateManyMutationInput, SentimentScoreUncheckedUpdateManyWithoutTweetInput>
  }

  export type SentimentScoreScalarWhereInput = {
    AND?: SentimentScoreScalarWhereInput | SentimentScoreScalarWhereInput[]
    OR?: SentimentScoreScalarWhereInput[]
    NOT?: SentimentScoreScalarWhereInput | SentimentScoreScalarWhereInput[]
    id?: StringFilter<"SentimentScore"> | string
    tweetId?: StringFilter<"SentimentScore"> | string
    coinSymbol?: StringFilter<"SentimentScore"> | string
    score?: FloatFilter<"SentimentScore"> | number
    window?: StringNullableFilter<"SentimentScore"> | string | null
    calculatedAt?: DateTimeFilter<"SentimentScore"> | Date | string
  }

  export type RawTweetCreateWithoutSentimentScoresInput = {
    id?: string
    scraperJobId?: string | null
    influencer: string
    content: string
    fetchedAt?: Date | string
  }

  export type RawTweetUncheckedCreateWithoutSentimentScoresInput = {
    id?: string
    scraperJobId?: string | null
    influencer: string
    content: string
    fetchedAt?: Date | string
  }

  export type RawTweetCreateOrConnectWithoutSentimentScoresInput = {
    where: RawTweetWhereUniqueInput
    create: XOR<RawTweetCreateWithoutSentimentScoresInput, RawTweetUncheckedCreateWithoutSentimentScoresInput>
  }

  export type RawTweetUpsertWithoutSentimentScoresInput = {
    update: XOR<RawTweetUpdateWithoutSentimentScoresInput, RawTweetUncheckedUpdateWithoutSentimentScoresInput>
    create: XOR<RawTweetCreateWithoutSentimentScoresInput, RawTweetUncheckedCreateWithoutSentimentScoresInput>
    where?: RawTweetWhereInput
  }

  export type RawTweetUpdateToOneWithWhereWithoutSentimentScoresInput = {
    where?: RawTweetWhereInput
    data: XOR<RawTweetUpdateWithoutSentimentScoresInput, RawTweetUncheckedUpdateWithoutSentimentScoresInput>
  }

  export type RawTweetUpdateWithoutSentimentScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    scraperJobId?: NullableStringFieldUpdateOperationsInput | string | null
    influencer?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawTweetUncheckedUpdateWithoutSentimentScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    scraperJobId?: NullableStringFieldUpdateOperationsInput | string | null
    influencer?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistCreateManyUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertCreateManyUserInput = {
    id?: string
    type: string
    coinSymbol: string
    threshold: number
    condition: string
    channels: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coins?: WatchlistCoinUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coins?: WatchlistCoinUncheckedUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    channels?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alertEvents?: AlertEventUpdateManyWithoutAlertNestedInput
  }

  export type AlertUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    channels?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alertEvents?: AlertEventUncheckedUpdateManyWithoutAlertNestedInput
  }

  export type AlertUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    channels?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistCoinCreateManyWatchlistInput = {
    id?: string
    coinSymbol: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistCoinUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistCoinUncheckedUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistCoinUncheckedUpdateManyWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertEventCreateManyAlertInput = {
    id?: string
    triggeredAt?: Date | string
    details?: string | null
  }

  export type AlertEventUpdateWithoutAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlertEventUncheckedUpdateWithoutAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlertEventUncheckedUpdateManyWithoutAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SentimentScoreCreateManyTweetInput = {
    id?: string
    coinSymbol: string
    score: number
    window?: string | null
    calculatedAt?: Date | string
  }

  export type SentimentScoreUpdateWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    window?: NullableStringFieldUpdateOperationsInput | string | null
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentimentScoreUncheckedUpdateWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    window?: NullableStringFieldUpdateOperationsInput | string | null
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentimentScoreUncheckedUpdateManyWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinSymbol?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    window?: NullableStringFieldUpdateOperationsInput | string | null
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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