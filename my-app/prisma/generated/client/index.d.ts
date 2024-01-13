
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Stack
 * 
 */
export type Stack = $Result.DefaultSelection<Prisma.$StackPayload>
/**
 * Model stacks
 * 
 */
export type stacks = $Result.DefaultSelection<Prisma.$stacksPayload>
/**
 * Model projects
 * 
 */
export type projects = $Result.DefaultSelection<Prisma.$projectsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Stacks
 * const stacks = await prisma.stacks.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Stacks
   * const stacks = await prisma.stacks.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.stacks`: Exposes CRUD operations for the **stacks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stacks
    * const stacks = await prisma.stacks.findMany()
    * ```
    */
  get stacks(): Prisma.stacksDelegate<ExtArgs>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.projectsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.8.0
   * Query Engine version: 0a83d8541752d7582de2ebc1ece46519ce72a848
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    stacks: 'stacks',
    projects: 'projects'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'stacks' | 'projects'
      txIsolationLevel: never
    },
    model: {
      stacks: {
        payload: Prisma.$stacksPayload<ExtArgs>
        fields: Prisma.stacksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stacksFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stacksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stacksFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stacksPayload>
          }
          findFirst: {
            args: Prisma.stacksFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stacksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stacksFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stacksPayload>
          }
          findMany: {
            args: Prisma.stacksFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stacksPayload>[]
          }
          create: {
            args: Prisma.stacksCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stacksPayload>
          }
          createMany: {
            args: Prisma.stacksCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.stacksDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stacksPayload>
          }
          update: {
            args: Prisma.stacksUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stacksPayload>
          }
          deleteMany: {
            args: Prisma.stacksDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.stacksUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.stacksUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stacksPayload>
          }
          aggregate: {
            args: Prisma.StacksAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStacks>
          }
          groupBy: {
            args: Prisma.stacksGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StacksGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.stacksFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.stacksAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.stacksCountArgs<ExtArgs>,
            result: $Utils.Optional<StacksCountAggregateOutputType> | number
          }
        }
      }
      projects: {
        payload: Prisma.$projectsPayload<ExtArgs>
        fields: Prisma.projectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findFirst: {
            args: Prisma.projectsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findMany: {
            args: Prisma.projectsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          create: {
            args: Prisma.projectsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          createMany: {
            args: Prisma.projectsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.projectsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          update: {
            args: Prisma.projectsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          deleteMany: {
            args: Prisma.projectsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.projectsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.projectsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.projectsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.projectsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.projectsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.projectsCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Models
   */

  /**
   * Model Stack
   */





  export type StackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    srcImg?: boolean
    srcDocumentation?: boolean
  }, ExtArgs["result"]["stack"]>

  export type StackSelectScalar = {
    name?: boolean
    srcImg?: boolean
    srcDocumentation?: boolean
  }


  export type $StackPayload = {
    name: "Stack"
    objects: {}
    scalars: {
      name: string
      srcImg: string
      srcDocumentation: string
    }
    composites: {}
  }


  type StackGetPayload<S extends boolean | null | undefined | StackDefaultArgs> = $Result.GetResult<Prisma.$StackPayload, S>





  /**
   * Fields of the Stack model
   */ 
  interface StackFieldRefs {
    readonly name: FieldRef<"Stack", 'String'>
    readonly srcImg: FieldRef<"Stack", 'String'>
    readonly srcDocumentation: FieldRef<"Stack", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Stack without action
   */
  export type StackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stack
     */
    select?: StackSelect<ExtArgs> | null
  }



  /**
   * Model stacks
   */

  export type AggregateStacks = {
    _count: StacksCountAggregateOutputType | null
    _min: StacksMinAggregateOutputType | null
    _max: StacksMaxAggregateOutputType | null
  }

  export type StacksMinAggregateOutputType = {
    id: string | null
  }

  export type StacksMaxAggregateOutputType = {
    id: string | null
  }

  export type StacksCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type StacksMinAggregateInputType = {
    id?: true
  }

  export type StacksMaxAggregateInputType = {
    id?: true
  }

  export type StacksCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type StacksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stacks to aggregate.
     */
    where?: stacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stacks to fetch.
     */
    orderBy?: stacksOrderByWithRelationInput | stacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stacks
    **/
    _count?: true | StacksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StacksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StacksMaxAggregateInputType
  }

  export type GetStacksAggregateType<T extends StacksAggregateArgs> = {
        [P in keyof T & keyof AggregateStacks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStacks[P]>
      : GetScalarType<T[P], AggregateStacks[P]>
  }




  export type stacksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stacksWhereInput
    orderBy?: stacksOrderByWithAggregationInput | stacksOrderByWithAggregationInput[]
    by: StacksScalarFieldEnum[] | StacksScalarFieldEnum
    having?: stacksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StacksCountAggregateInputType | true
    _min?: StacksMinAggregateInputType
    _max?: StacksMaxAggregateInputType
  }

  export type StacksGroupByOutputType = {
    id: string
    _count: StacksCountAggregateOutputType | null
    _min: StacksMinAggregateOutputType | null
    _max: StacksMaxAggregateOutputType | null
  }

  type GetStacksGroupByPayload<T extends stacksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StacksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StacksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StacksGroupByOutputType[P]>
            : GetScalarType<T[P], StacksGroupByOutputType[P]>
        }
      >
    >


  export type stacksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    frontEnd?: boolean | StackDefaultArgs<ExtArgs>
    backEnd?: boolean | StackDefaultArgs<ExtArgs>
    tools?: boolean | StackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stacks"]>

  export type stacksSelectScalar = {
    id?: boolean
  }

  export type stacksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}


  export type $stacksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stacks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["stacks"]>
    composites: {
      frontEnd: Prisma.$StackPayload[]
      backEnd: Prisma.$StackPayload[]
      tools: Prisma.$StackPayload[]
    }
  }


  type stacksGetPayload<S extends boolean | null | undefined | stacksDefaultArgs> = $Result.GetResult<Prisma.$stacksPayload, S>

  type stacksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<stacksFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StacksCountAggregateInputType | true
    }

  export interface stacksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stacks'], meta: { name: 'stacks' } }
    /**
     * Find zero or one Stacks that matches the filter.
     * @param {stacksFindUniqueArgs} args - Arguments to find a Stacks
     * @example
     * // Get one Stacks
     * const stacks = await prisma.stacks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends stacksFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, stacksFindUniqueArgs<ExtArgs>>
    ): Prisma__stacksClient<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Stacks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {stacksFindUniqueOrThrowArgs} args - Arguments to find a Stacks
     * @example
     * // Get one Stacks
     * const stacks = await prisma.stacks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends stacksFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, stacksFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__stacksClient<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Stacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stacksFindFirstArgs} args - Arguments to find a Stacks
     * @example
     * // Get one Stacks
     * const stacks = await prisma.stacks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends stacksFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, stacksFindFirstArgs<ExtArgs>>
    ): Prisma__stacksClient<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Stacks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stacksFindFirstOrThrowArgs} args - Arguments to find a Stacks
     * @example
     * // Get one Stacks
     * const stacks = await prisma.stacks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends stacksFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, stacksFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__stacksClient<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Stacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stacksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stacks
     * const stacks = await prisma.stacks.findMany()
     * 
     * // Get first 10 Stacks
     * const stacks = await prisma.stacks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stacksWithIdOnly = await prisma.stacks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends stacksFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stacksFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Stacks.
     * @param {stacksCreateArgs} args - Arguments to create a Stacks.
     * @example
     * // Create one Stacks
     * const Stacks = await prisma.stacks.create({
     *   data: {
     *     // ... data to create a Stacks
     *   }
     * })
     * 
    **/
    create<T extends stacksCreateArgs<ExtArgs>>(
      args: SelectSubset<T, stacksCreateArgs<ExtArgs>>
    ): Prisma__stacksClient<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Stacks.
     *     @param {stacksCreateManyArgs} args - Arguments to create many Stacks.
     *     @example
     *     // Create many Stacks
     *     const stacks = await prisma.stacks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends stacksCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stacksCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stacks.
     * @param {stacksDeleteArgs} args - Arguments to delete one Stacks.
     * @example
     * // Delete one Stacks
     * const Stacks = await prisma.stacks.delete({
     *   where: {
     *     // ... filter to delete one Stacks
     *   }
     * })
     * 
    **/
    delete<T extends stacksDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, stacksDeleteArgs<ExtArgs>>
    ): Prisma__stacksClient<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Stacks.
     * @param {stacksUpdateArgs} args - Arguments to update one Stacks.
     * @example
     * // Update one Stacks
     * const stacks = await prisma.stacks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends stacksUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, stacksUpdateArgs<ExtArgs>>
    ): Prisma__stacksClient<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Stacks.
     * @param {stacksDeleteManyArgs} args - Arguments to filter Stacks to delete.
     * @example
     * // Delete a few Stacks
     * const { count } = await prisma.stacks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends stacksDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stacksDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stacksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stacks
     * const stacks = await prisma.stacks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends stacksUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, stacksUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stacks.
     * @param {stacksUpsertArgs} args - Arguments to update or create a Stacks.
     * @example
     * // Update or create a Stacks
     * const stacks = await prisma.stacks.upsert({
     *   create: {
     *     // ... data to create a Stacks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stacks we want to update
     *   }
     * })
    **/
    upsert<T extends stacksUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, stacksUpsertArgs<ExtArgs>>
    ): Prisma__stacksClient<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Stacks that matches the filter.
     * @param {stacksFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const stacks = await prisma.stacks.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: stacksFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Stacks.
     * @param {stacksAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const stacks = await prisma.stacks.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: stacksAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Stacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stacksCountArgs} args - Arguments to filter Stacks to count.
     * @example
     * // Count the number of Stacks
     * const count = await prisma.stacks.count({
     *   where: {
     *     // ... the filter for the Stacks we want to count
     *   }
     * })
    **/
    count<T extends stacksCountArgs>(
      args?: Subset<T, stacksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StacksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StacksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StacksAggregateArgs>(args: Subset<T, StacksAggregateArgs>): Prisma.PrismaPromise<GetStacksAggregateType<T>>

    /**
     * Group by Stacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stacksGroupByArgs} args - Group by arguments.
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
      T extends stacksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stacksGroupByArgs['orderBy'] }
        : { orderBy?: stacksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, stacksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStacksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stacks model
   */
  readonly fields: stacksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stacks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stacksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the stacks model
   */ 
  interface stacksFieldRefs {
    readonly id: FieldRef<"stacks", 'String'>
  }
    

  // Custom InputTypes

  /**
   * stacks findUnique
   */
  export type stacksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stacksInclude<ExtArgs> | null
    /**
     * Filter, which stacks to fetch.
     */
    where: stacksWhereUniqueInput
  }


  /**
   * stacks findUniqueOrThrow
   */
  export type stacksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stacksInclude<ExtArgs> | null
    /**
     * Filter, which stacks to fetch.
     */
    where: stacksWhereUniqueInput
  }


  /**
   * stacks findFirst
   */
  export type stacksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stacksInclude<ExtArgs> | null
    /**
     * Filter, which stacks to fetch.
     */
    where?: stacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stacks to fetch.
     */
    orderBy?: stacksOrderByWithRelationInput | stacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stacks.
     */
    cursor?: stacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stacks.
     */
    distinct?: StacksScalarFieldEnum | StacksScalarFieldEnum[]
  }


  /**
   * stacks findFirstOrThrow
   */
  export type stacksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stacksInclude<ExtArgs> | null
    /**
     * Filter, which stacks to fetch.
     */
    where?: stacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stacks to fetch.
     */
    orderBy?: stacksOrderByWithRelationInput | stacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stacks.
     */
    cursor?: stacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stacks.
     */
    distinct?: StacksScalarFieldEnum | StacksScalarFieldEnum[]
  }


  /**
   * stacks findMany
   */
  export type stacksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stacksInclude<ExtArgs> | null
    /**
     * Filter, which stacks to fetch.
     */
    where?: stacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stacks to fetch.
     */
    orderBy?: stacksOrderByWithRelationInput | stacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stacks.
     */
    cursor?: stacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stacks.
     */
    skip?: number
    distinct?: StacksScalarFieldEnum | StacksScalarFieldEnum[]
  }


  /**
   * stacks create
   */
  export type stacksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stacksInclude<ExtArgs> | null
    /**
     * The data needed to create a stacks.
     */
    data?: XOR<stacksCreateInput, stacksUncheckedCreateInput>
  }


  /**
   * stacks createMany
   */
  export type stacksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stacks.
     */
    data: stacksCreateManyInput | stacksCreateManyInput[]
  }


  /**
   * stacks update
   */
  export type stacksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stacksInclude<ExtArgs> | null
    /**
     * The data needed to update a stacks.
     */
    data: XOR<stacksUpdateInput, stacksUncheckedUpdateInput>
    /**
     * Choose, which stacks to update.
     */
    where: stacksWhereUniqueInput
  }


  /**
   * stacks updateMany
   */
  export type stacksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stacks.
     */
    data: XOR<stacksUpdateManyMutationInput, stacksUncheckedUpdateManyInput>
    /**
     * Filter which stacks to update
     */
    where?: stacksWhereInput
  }


  /**
   * stacks upsert
   */
  export type stacksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stacksInclude<ExtArgs> | null
    /**
     * The filter to search for the stacks to update in case it exists.
     */
    where: stacksWhereUniqueInput
    /**
     * In case the stacks found by the `where` argument doesn't exist, create a new stacks with this data.
     */
    create: XOR<stacksCreateInput, stacksUncheckedCreateInput>
    /**
     * In case the stacks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stacksUpdateInput, stacksUncheckedUpdateInput>
  }


  /**
   * stacks delete
   */
  export type stacksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stacksInclude<ExtArgs> | null
    /**
     * Filter which stacks to delete.
     */
    where: stacksWhereUniqueInput
  }


  /**
   * stacks deleteMany
   */
  export type stacksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stacks to delete
     */
    where?: stacksWhereInput
  }


  /**
   * stacks findRaw
   */
  export type stacksFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * stacks aggregateRaw
   */
  export type stacksAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * stacks without action
   */
  export type stacksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stacksInclude<ExtArgs> | null
  }



  /**
   * Model projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    linkPage: string | null
    linkRepo: string | null
    srcImg: string | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    linkPage: string | null
    linkRepo: string | null
    srcImg: string | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    linkPage: number
    linkRepo: number
    srcImg: number
    _all: number
  }


  export type ProjectsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    linkPage?: true
    linkRepo?: true
    srcImg?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    linkPage?: true
    linkRepo?: true
    srcImg?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    linkPage?: true
    linkRepo?: true
    srcImg?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to aggregate.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type projectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithAggregationInput | projectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: projectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: string
    name: string
    description: string
    linkPage: string
    linkRepo: string
    srcImg: string
    _count: ProjectsCountAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends projectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type projectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    linkPage?: boolean
    linkRepo?: boolean
    srcImg?: boolean
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    linkPage?: boolean
    linkRepo?: boolean
    srcImg?: boolean
  }


  export type $projectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projects"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      linkPage: string
      linkRepo: string
      srcImg: string
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }


  type projectsGetPayload<S extends boolean | null | undefined | projectsDefaultArgs> = $Result.GetResult<Prisma.$projectsPayload, S>

  type projectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<projectsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface projectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projects'], meta: { name: 'projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {projectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends projectsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, projectsFindUniqueArgs<ExtArgs>>
    ): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Projects that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {projectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends projectsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, projectsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends projectsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, projectsFindFirstArgs<ExtArgs>>
    ): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends projectsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, projectsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends projectsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Projects.
     * @param {projectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
    **/
    create<T extends projectsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, projectsCreateArgs<ExtArgs>>
    ): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Projects.
     *     @param {projectsCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const projects = await prisma.projects.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends projectsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Projects.
     * @param {projectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
    **/
    delete<T extends projectsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, projectsDeleteArgs<ExtArgs>>
    ): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Projects.
     * @param {projectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends projectsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, projectsUpdateArgs<ExtArgs>>
    ): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {projectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends projectsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends projectsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, projectsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Projects.
     * @param {projectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
    **/
    upsert<T extends projectsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, projectsUpsertArgs<ExtArgs>>
    ): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * @param {projectsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const projects = await prisma.projects.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: projectsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Projects.
     * @param {projectsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const projects = await prisma.projects.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: projectsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectsCountArgs>(
      args?: Subset<T, projectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsGroupByArgs} args - Group by arguments.
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
      T extends projectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectsGroupByArgs['orderBy'] }
        : { orderBy?: projectsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, projectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projects model
   */
  readonly fields: projectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the projects model
   */ 
  interface projectsFieldRefs {
    readonly id: FieldRef<"projects", 'String'>
    readonly name: FieldRef<"projects", 'String'>
    readonly description: FieldRef<"projects", 'String'>
    readonly linkPage: FieldRef<"projects", 'String'>
    readonly linkRepo: FieldRef<"projects", 'String'>
    readonly srcImg: FieldRef<"projects", 'String'>
  }
    

  // Custom InputTypes

  /**
   * projects findUnique
   */
  export type projectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }


  /**
   * projects findUniqueOrThrow
   */
  export type projectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }


  /**
   * projects findFirst
   */
  export type projectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * projects findFirstOrThrow
   */
  export type projectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * projects findMany
   */
  export type projectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * projects create
   */
  export type projectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * The data needed to create a projects.
     */
    data: XOR<projectsCreateInput, projectsUncheckedCreateInput>
  }


  /**
   * projects createMany
   */
  export type projectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
  }


  /**
   * projects update
   */
  export type projectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * The data needed to update a projects.
     */
    data: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
    /**
     * Choose, which projects to update.
     */
    where: projectsWhereUniqueInput
  }


  /**
   * projects updateMany
   */
  export type projectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
  }


  /**
   * projects upsert
   */
  export type projectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * The filter to search for the projects to update in case it exists.
     */
    where: projectsWhereUniqueInput
    /**
     * In case the projects found by the `where` argument doesn't exist, create a new projects with this data.
     */
    create: XOR<projectsCreateInput, projectsUncheckedCreateInput>
    /**
     * In case the projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
  }


  /**
   * projects delete
   */
  export type projectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Filter which projects to delete.
     */
    where: projectsWhereUniqueInput
  }


  /**
   * projects deleteMany
   */
  export type projectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectsWhereInput
  }


  /**
   * projects findRaw
   */
  export type projectsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * projects aggregateRaw
   */
  export type projectsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * projects without action
   */
  export type projectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const StacksScalarFieldEnum: {
    id: 'id'
  };

  export type StacksScalarFieldEnum = (typeof StacksScalarFieldEnum)[keyof typeof StacksScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    linkPage: 'linkPage',
    linkRepo: 'linkRepo',
    srcImg: 'srcImg'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


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


  export type stacksWhereInput = {
    AND?: stacksWhereInput | stacksWhereInput[]
    OR?: stacksWhereInput[]
    NOT?: stacksWhereInput | stacksWhereInput[]
    id?: StringFilter<"stacks"> | string
    frontEnd?: StackCompositeListFilter | StackObjectEqualityInput[]
    backEnd?: StackCompositeListFilter | StackObjectEqualityInput[]
    tools?: StackCompositeListFilter | StackObjectEqualityInput[]
  }

  export type stacksOrderByWithRelationInput = {
    id?: SortOrder
    frontEnd?: StackOrderByCompositeAggregateInput
    backEnd?: StackOrderByCompositeAggregateInput
    tools?: StackOrderByCompositeAggregateInput
  }

  export type stacksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: stacksWhereInput | stacksWhereInput[]
    OR?: stacksWhereInput[]
    NOT?: stacksWhereInput | stacksWhereInput[]
    frontEnd?: StackCompositeListFilter | StackObjectEqualityInput[]
    backEnd?: StackCompositeListFilter | StackObjectEqualityInput[]
    tools?: StackCompositeListFilter | StackObjectEqualityInput[]
  }, "id">

  export type stacksOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: stacksCountOrderByAggregateInput
    _max?: stacksMaxOrderByAggregateInput
    _min?: stacksMinOrderByAggregateInput
  }

  export type stacksScalarWhereWithAggregatesInput = {
    AND?: stacksScalarWhereWithAggregatesInput | stacksScalarWhereWithAggregatesInput[]
    OR?: stacksScalarWhereWithAggregatesInput[]
    NOT?: stacksScalarWhereWithAggregatesInput | stacksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"stacks"> | string
  }

  export type projectsWhereInput = {
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    id?: StringFilter<"projects"> | string
    name?: StringFilter<"projects"> | string
    description?: StringFilter<"projects"> | string
    linkPage?: StringFilter<"projects"> | string
    linkRepo?: StringFilter<"projects"> | string
    srcImg?: StringFilter<"projects"> | string
  }

  export type projectsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    linkPage?: SortOrder
    linkRepo?: SortOrder
    srcImg?: SortOrder
  }

  export type projectsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    name?: StringFilter<"projects"> | string
    description?: StringFilter<"projects"> | string
    linkPage?: StringFilter<"projects"> | string
    linkRepo?: StringFilter<"projects"> | string
    srcImg?: StringFilter<"projects"> | string
  }, "id">

  export type projectsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    linkPage?: SortOrder
    linkRepo?: SortOrder
    srcImg?: SortOrder
    _count?: projectsCountOrderByAggregateInput
    _max?: projectsMaxOrderByAggregateInput
    _min?: projectsMinOrderByAggregateInput
  }

  export type projectsScalarWhereWithAggregatesInput = {
    AND?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    OR?: projectsScalarWhereWithAggregatesInput[]
    NOT?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"projects"> | string
    name?: StringWithAggregatesFilter<"projects"> | string
    description?: StringWithAggregatesFilter<"projects"> | string
    linkPage?: StringWithAggregatesFilter<"projects"> | string
    linkRepo?: StringWithAggregatesFilter<"projects"> | string
    srcImg?: StringWithAggregatesFilter<"projects"> | string
  }

  export type stacksCreateInput = {
    id?: string
    frontEnd?: XOR<StackListCreateEnvelopeInput, StackCreateInput> | StackCreateInput[]
    backEnd?: XOR<StackListCreateEnvelopeInput, StackCreateInput> | StackCreateInput[]
    tools?: XOR<StackListCreateEnvelopeInput, StackCreateInput> | StackCreateInput[]
  }

  export type stacksUncheckedCreateInput = {
    id?: string
    frontEnd?: XOR<StackListCreateEnvelopeInput, StackCreateInput> | StackCreateInput[]
    backEnd?: XOR<StackListCreateEnvelopeInput, StackCreateInput> | StackCreateInput[]
    tools?: XOR<StackListCreateEnvelopeInput, StackCreateInput> | StackCreateInput[]
  }

  export type stacksUpdateInput = {
    frontEnd?: XOR<StackListUpdateEnvelopeInput, StackCreateInput> | StackCreateInput[]
    backEnd?: XOR<StackListUpdateEnvelopeInput, StackCreateInput> | StackCreateInput[]
    tools?: XOR<StackListUpdateEnvelopeInput, StackCreateInput> | StackCreateInput[]
  }

  export type stacksUncheckedUpdateInput = {
    frontEnd?: XOR<StackListUpdateEnvelopeInput, StackCreateInput> | StackCreateInput[]
    backEnd?: XOR<StackListUpdateEnvelopeInput, StackCreateInput> | StackCreateInput[]
    tools?: XOR<StackListUpdateEnvelopeInput, StackCreateInput> | StackCreateInput[]
  }

  export type stacksCreateManyInput = {
    id?: string
    frontEnd?: XOR<StackListCreateEnvelopeInput, StackCreateInput> | StackCreateInput[]
    backEnd?: XOR<StackListCreateEnvelopeInput, StackCreateInput> | StackCreateInput[]
    tools?: XOR<StackListCreateEnvelopeInput, StackCreateInput> | StackCreateInput[]
  }

  export type stacksUpdateManyMutationInput = {
    frontEnd?: XOR<StackListUpdateEnvelopeInput, StackCreateInput> | StackCreateInput[]
    backEnd?: XOR<StackListUpdateEnvelopeInput, StackCreateInput> | StackCreateInput[]
    tools?: XOR<StackListUpdateEnvelopeInput, StackCreateInput> | StackCreateInput[]
  }

  export type stacksUncheckedUpdateManyInput = {
    frontEnd?: XOR<StackListUpdateEnvelopeInput, StackCreateInput> | StackCreateInput[]
    backEnd?: XOR<StackListUpdateEnvelopeInput, StackCreateInput> | StackCreateInput[]
    tools?: XOR<StackListUpdateEnvelopeInput, StackCreateInput> | StackCreateInput[]
  }

  export type projectsCreateInput = {
    id?: string
    name: string
    description: string
    linkPage: string
    linkRepo: string
    srcImg: string
  }

  export type projectsUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    linkPage: string
    linkRepo: string
    srcImg: string
  }

  export type projectsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    linkPage?: StringFieldUpdateOperationsInput | string
    linkRepo?: StringFieldUpdateOperationsInput | string
    srcImg?: StringFieldUpdateOperationsInput | string
  }

  export type projectsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    linkPage?: StringFieldUpdateOperationsInput | string
    linkRepo?: StringFieldUpdateOperationsInput | string
    srcImg?: StringFieldUpdateOperationsInput | string
  }

  export type projectsCreateManyInput = {
    id?: string
    name: string
    description: string
    linkPage: string
    linkRepo: string
    srcImg: string
  }

  export type projectsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    linkPage?: StringFieldUpdateOperationsInput | string
    linkRepo?: StringFieldUpdateOperationsInput | string
    srcImg?: StringFieldUpdateOperationsInput | string
  }

  export type projectsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    linkPage?: StringFieldUpdateOperationsInput | string
    linkRepo?: StringFieldUpdateOperationsInput | string
    srcImg?: StringFieldUpdateOperationsInput | string
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

  export type StackCompositeListFilter = {
    equals?: StackObjectEqualityInput[]
    every?: StackWhereInput
    some?: StackWhereInput
    none?: StackWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type StackObjectEqualityInput = {
    name: string
    srcImg: string
    srcDocumentation: string
  }

  export type StackOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type stacksCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type stacksMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type stacksMinOrderByAggregateInput = {
    id?: SortOrder
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

  export type projectsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    linkPage?: SortOrder
    linkRepo?: SortOrder
    srcImg?: SortOrder
  }

  export type projectsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    linkPage?: SortOrder
    linkRepo?: SortOrder
    srcImg?: SortOrder
  }

  export type projectsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    linkPage?: SortOrder
    linkRepo?: SortOrder
    srcImg?: SortOrder
  }

  export type StackListCreateEnvelopeInput = {
    set?: StackCreateInput | StackCreateInput[]
  }

  export type StackCreateInput = {
    name: string
    srcImg: string
    srcDocumentation: string
  }

  export type StackListUpdateEnvelopeInput = {
    set?: StackCreateInput | StackCreateInput[]
    push?: StackCreateInput | StackCreateInput[]
    updateMany?: StackUpdateManyInput
    deleteMany?: StackDeleteManyInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type StackWhereInput = {
    AND?: StackWhereInput | StackWhereInput[]
    OR?: StackWhereInput[]
    NOT?: StackWhereInput | StackWhereInput[]
    name?: StringFilter<"Stack"> | string
    srcImg?: StringFilter<"Stack"> | string
    srcDocumentation?: StringFilter<"Stack"> | string
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

  export type StackUpdateManyInput = {
    where: StackWhereInput
    data: StackUpdateInput
  }

  export type StackDeleteManyInput = {
    where: StackWhereInput
  }

  export type StackUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    srcImg?: StringFieldUpdateOperationsInput | string
    srcDocumentation?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StackDefaultArgs instead
     */
    export type StackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use stacksDefaultArgs instead
     */
    export type stacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = stacksDefaultArgs<ExtArgs>
    /**
     * @deprecated Use projectsDefaultArgs instead
     */
    export type projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = projectsDefaultArgs<ExtArgs>

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