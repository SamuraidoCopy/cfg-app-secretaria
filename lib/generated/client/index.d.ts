
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Payroll
 * 
 */
export type Payroll = $Result.DefaultSelection<Prisma.$PayrollPayload>
/**
 * Model PayrollAdvance
 * 
 */
export type PayrollAdvance = $Result.DefaultSelection<Prisma.$PayrollAdvancePayload>
/**
 * Model FinancialTransaction
 * 
 */
export type FinancialTransaction = $Result.DefaultSelection<Prisma.$FinancialTransactionPayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
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
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payroll`: Exposes CRUD operations for the **Payroll** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payrolls
    * const payrolls = await prisma.payroll.findMany()
    * ```
    */
  get payroll(): Prisma.PayrollDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payrollAdvance`: Exposes CRUD operations for the **PayrollAdvance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayrollAdvances
    * const payrollAdvances = await prisma.payrollAdvance.findMany()
    * ```
    */
  get payrollAdvance(): Prisma.PayrollAdvanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financialTransaction`: Exposes CRUD operations for the **FinancialTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancialTransactions
    * const financialTransactions = await prisma.financialTransaction.findMany()
    * ```
    */
  get financialTransaction(): Prisma.FinancialTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Employee: 'Employee',
    Payroll: 'Payroll',
    PayrollAdvance: 'PayrollAdvance',
    FinancialTransaction: 'FinancialTransaction',
    Contract: 'Contract'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "employee" | "payroll" | "payrollAdvance" | "financialTransaction" | "contract"
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
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Payroll: {
        payload: Prisma.$PayrollPayload<ExtArgs>
        fields: Prisma.PayrollFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayrollFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayrollFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          findFirst: {
            args: Prisma.PayrollFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayrollFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          findMany: {
            args: Prisma.PayrollFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>[]
          }
          create: {
            args: Prisma.PayrollCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          createMany: {
            args: Prisma.PayrollCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayrollCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>[]
          }
          delete: {
            args: Prisma.PayrollDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          update: {
            args: Prisma.PayrollUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          deleteMany: {
            args: Prisma.PayrollDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayrollUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayrollUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>[]
          }
          upsert: {
            args: Prisma.PayrollUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          aggregate: {
            args: Prisma.PayrollAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayroll>
          }
          groupBy: {
            args: Prisma.PayrollGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayrollGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayrollCountArgs<ExtArgs>
            result: $Utils.Optional<PayrollCountAggregateOutputType> | number
          }
        }
      }
      PayrollAdvance: {
        payload: Prisma.$PayrollAdvancePayload<ExtArgs>
        fields: Prisma.PayrollAdvanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayrollAdvanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollAdvancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayrollAdvanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollAdvancePayload>
          }
          findFirst: {
            args: Prisma.PayrollAdvanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollAdvancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayrollAdvanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollAdvancePayload>
          }
          findMany: {
            args: Prisma.PayrollAdvanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollAdvancePayload>[]
          }
          create: {
            args: Prisma.PayrollAdvanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollAdvancePayload>
          }
          createMany: {
            args: Prisma.PayrollAdvanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayrollAdvanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollAdvancePayload>[]
          }
          delete: {
            args: Prisma.PayrollAdvanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollAdvancePayload>
          }
          update: {
            args: Prisma.PayrollAdvanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollAdvancePayload>
          }
          deleteMany: {
            args: Prisma.PayrollAdvanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayrollAdvanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayrollAdvanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollAdvancePayload>[]
          }
          upsert: {
            args: Prisma.PayrollAdvanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollAdvancePayload>
          }
          aggregate: {
            args: Prisma.PayrollAdvanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayrollAdvance>
          }
          groupBy: {
            args: Prisma.PayrollAdvanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayrollAdvanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayrollAdvanceCountArgs<ExtArgs>
            result: $Utils.Optional<PayrollAdvanceCountAggregateOutputType> | number
          }
        }
      }
      FinancialTransaction: {
        payload: Prisma.$FinancialTransactionPayload<ExtArgs>
        fields: Prisma.FinancialTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          findFirst: {
            args: Prisma.FinancialTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          findMany: {
            args: Prisma.FinancialTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>[]
          }
          create: {
            args: Prisma.FinancialTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          createMany: {
            args: Prisma.FinancialTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancialTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>[]
          }
          delete: {
            args: Prisma.FinancialTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          update: {
            args: Prisma.FinancialTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          deleteMany: {
            args: Prisma.FinancialTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinancialTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>[]
          }
          upsert: {
            args: Prisma.FinancialTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          aggregate: {
            args: Prisma.FinancialTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancialTransaction>
          }
          groupBy: {
            args: Prisma.FinancialTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialTransactionCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    employee?: EmployeeOmit
    payroll?: PayrollOmit
    payrollAdvance?: PayrollAdvanceOmit
    financialTransaction?: FinancialTransactionOmit
    contract?: ContractOmit
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
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    payrolls: number
    advances: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payrolls?: boolean | EmployeeCountOutputTypeCountPayrollsArgs
    advances?: boolean | EmployeeCountOutputTypeCountAdvancesArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountPayrollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountAdvancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollAdvanceWhereInput
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
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
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
    password: string
    name: string
    role: string
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
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: string
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
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
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
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    baseSalary: number | null
    transportDaily: number | null
    gasAssistance: number | null
    recurringDeductions: number | null
    temporaryDeductions: number | null
    hourlyRate: number | null
    cestaBasica: number | null
    salaryAdvance: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    baseSalary: number | null
    transportDaily: number | null
    gasAssistance: number | null
    recurringDeductions: number | null
    temporaryDeductions: number | null
    hourlyRate: number | null
    cestaBasica: number | null
    salaryAdvance: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    type: string | null
    role: string | null
    baseSalary: number | null
    transportDaily: number | null
    gasAssistance: number | null
    pixKey: string | null
    paymentMethod: string | null
    bankName: string | null
    accountType: string | null
    agency: string | null
    accountNumber: string | null
    recurringDeductions: number | null
    temporaryDeductions: number | null
    temporaryDeductionsDesc: string | null
    temporaryDeductionsExpiration: string | null
    hourlyRate: number | null
    cestaBasica: number | null
    isAulista: boolean | null
    salaryAdvance: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    type: string | null
    role: string | null
    baseSalary: number | null
    transportDaily: number | null
    gasAssistance: number | null
    pixKey: string | null
    paymentMethod: string | null
    bankName: string | null
    accountType: string | null
    agency: string | null
    accountNumber: string | null
    recurringDeductions: number | null
    temporaryDeductions: number | null
    temporaryDeductionsDesc: string | null
    temporaryDeductionsExpiration: string | null
    hourlyRate: number | null
    cestaBasica: number | null
    isAulista: boolean | null
    salaryAdvance: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    name: number
    cpf: number
    type: number
    role: number
    baseSalary: number
    transportDaily: number
    gasAssistance: number
    pixKey: number
    paymentMethod: number
    bankName: number
    accountType: number
    agency: number
    accountNumber: number
    recurringDeductions: number
    temporaryDeductions: number
    temporaryDeductionsDesc: number
    temporaryDeductionsExpiration: number
    hourlyRate: number
    cestaBasica: number
    isAulista: number
    salaryAdvance: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    baseSalary?: true
    transportDaily?: true
    gasAssistance?: true
    recurringDeductions?: true
    temporaryDeductions?: true
    hourlyRate?: true
    cestaBasica?: true
    salaryAdvance?: true
  }

  export type EmployeeSumAggregateInputType = {
    baseSalary?: true
    transportDaily?: true
    gasAssistance?: true
    recurringDeductions?: true
    temporaryDeductions?: true
    hourlyRate?: true
    cestaBasica?: true
    salaryAdvance?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    type?: true
    role?: true
    baseSalary?: true
    transportDaily?: true
    gasAssistance?: true
    pixKey?: true
    paymentMethod?: true
    bankName?: true
    accountType?: true
    agency?: true
    accountNumber?: true
    recurringDeductions?: true
    temporaryDeductions?: true
    temporaryDeductionsDesc?: true
    temporaryDeductionsExpiration?: true
    hourlyRate?: true
    cestaBasica?: true
    isAulista?: true
    salaryAdvance?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    type?: true
    role?: true
    baseSalary?: true
    transportDaily?: true
    gasAssistance?: true
    pixKey?: true
    paymentMethod?: true
    bankName?: true
    accountType?: true
    agency?: true
    accountNumber?: true
    recurringDeductions?: true
    temporaryDeductions?: true
    temporaryDeductionsDesc?: true
    temporaryDeductionsExpiration?: true
    hourlyRate?: true
    cestaBasica?: true
    isAulista?: true
    salaryAdvance?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    type?: true
    role?: true
    baseSalary?: true
    transportDaily?: true
    gasAssistance?: true
    pixKey?: true
    paymentMethod?: true
    bankName?: true
    accountType?: true
    agency?: true
    accountNumber?: true
    recurringDeductions?: true
    temporaryDeductions?: true
    temporaryDeductionsDesc?: true
    temporaryDeductionsExpiration?: true
    hourlyRate?: true
    cestaBasica?: true
    isAulista?: true
    salaryAdvance?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    transportDaily: number | null
    gasAssistance: number | null
    pixKey: string | null
    paymentMethod: string
    bankName: string | null
    accountType: string | null
    agency: string | null
    accountNumber: string | null
    recurringDeductions: number
    temporaryDeductions: number
    temporaryDeductionsDesc: string | null
    temporaryDeductionsExpiration: string | null
    hourlyRate: number | null
    cestaBasica: number | null
    isAulista: boolean
    salaryAdvance: number
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    type?: boolean
    role?: boolean
    baseSalary?: boolean
    transportDaily?: boolean
    gasAssistance?: boolean
    pixKey?: boolean
    paymentMethod?: boolean
    bankName?: boolean
    accountType?: boolean
    agency?: boolean
    accountNumber?: boolean
    recurringDeductions?: boolean
    temporaryDeductions?: boolean
    temporaryDeductionsDesc?: boolean
    temporaryDeductionsExpiration?: boolean
    hourlyRate?: boolean
    cestaBasica?: boolean
    isAulista?: boolean
    salaryAdvance?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payrolls?: boolean | Employee$payrollsArgs<ExtArgs>
    advances?: boolean | Employee$advancesArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    type?: boolean
    role?: boolean
    baseSalary?: boolean
    transportDaily?: boolean
    gasAssistance?: boolean
    pixKey?: boolean
    paymentMethod?: boolean
    bankName?: boolean
    accountType?: boolean
    agency?: boolean
    accountNumber?: boolean
    recurringDeductions?: boolean
    temporaryDeductions?: boolean
    temporaryDeductionsDesc?: boolean
    temporaryDeductionsExpiration?: boolean
    hourlyRate?: boolean
    cestaBasica?: boolean
    isAulista?: boolean
    salaryAdvance?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    type?: boolean
    role?: boolean
    baseSalary?: boolean
    transportDaily?: boolean
    gasAssistance?: boolean
    pixKey?: boolean
    paymentMethod?: boolean
    bankName?: boolean
    accountType?: boolean
    agency?: boolean
    accountNumber?: boolean
    recurringDeductions?: boolean
    temporaryDeductions?: boolean
    temporaryDeductionsDesc?: boolean
    temporaryDeductionsExpiration?: boolean
    hourlyRate?: boolean
    cestaBasica?: boolean
    isAulista?: boolean
    salaryAdvance?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    name?: boolean
    cpf?: boolean
    type?: boolean
    role?: boolean
    baseSalary?: boolean
    transportDaily?: boolean
    gasAssistance?: boolean
    pixKey?: boolean
    paymentMethod?: boolean
    bankName?: boolean
    accountType?: boolean
    agency?: boolean
    accountNumber?: boolean
    recurringDeductions?: boolean
    temporaryDeductions?: boolean
    temporaryDeductionsDesc?: boolean
    temporaryDeductionsExpiration?: boolean
    hourlyRate?: boolean
    cestaBasica?: boolean
    isAulista?: boolean
    salaryAdvance?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cpf" | "type" | "role" | "baseSalary" | "transportDaily" | "gasAssistance" | "pixKey" | "paymentMethod" | "bankName" | "accountType" | "agency" | "accountNumber" | "recurringDeductions" | "temporaryDeductions" | "temporaryDeductionsDesc" | "temporaryDeductionsExpiration" | "hourlyRate" | "cestaBasica" | "isAulista" | "salaryAdvance" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payrolls?: boolean | Employee$payrollsArgs<ExtArgs>
    advances?: boolean | Employee$advancesArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      payrolls: Prisma.$PayrollPayload<ExtArgs>[]
      advances: Prisma.$PayrollAdvancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cpf: string
      type: string
      role: string
      baseSalary: number
      transportDaily: number | null
      gasAssistance: number | null
      pixKey: string | null
      paymentMethod: string
      bankName: string | null
      accountType: string | null
      agency: string | null
      accountNumber: string | null
      recurringDeductions: number
      temporaryDeductions: number
      temporaryDeductionsDesc: string | null
      temporaryDeductionsExpiration: string | null
      hourlyRate: number | null
      cestaBasica: number | null
      isAulista: boolean
      salaryAdvance: number
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payrolls<T extends Employee$payrollsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$payrollsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    advances<T extends Employee$advancesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$advancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollAdvancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly cpf: FieldRef<"Employee", 'String'>
    readonly type: FieldRef<"Employee", 'String'>
    readonly role: FieldRef<"Employee", 'String'>
    readonly baseSalary: FieldRef<"Employee", 'Float'>
    readonly transportDaily: FieldRef<"Employee", 'Float'>
    readonly gasAssistance: FieldRef<"Employee", 'Float'>
    readonly pixKey: FieldRef<"Employee", 'String'>
    readonly paymentMethod: FieldRef<"Employee", 'String'>
    readonly bankName: FieldRef<"Employee", 'String'>
    readonly accountType: FieldRef<"Employee", 'String'>
    readonly agency: FieldRef<"Employee", 'String'>
    readonly accountNumber: FieldRef<"Employee", 'String'>
    readonly recurringDeductions: FieldRef<"Employee", 'Float'>
    readonly temporaryDeductions: FieldRef<"Employee", 'Float'>
    readonly temporaryDeductionsDesc: FieldRef<"Employee", 'String'>
    readonly temporaryDeductionsExpiration: FieldRef<"Employee", 'String'>
    readonly hourlyRate: FieldRef<"Employee", 'Float'>
    readonly cestaBasica: FieldRef<"Employee", 'Float'>
    readonly isAulista: FieldRef<"Employee", 'Boolean'>
    readonly salaryAdvance: FieldRef<"Employee", 'Float'>
    readonly active: FieldRef<"Employee", 'Boolean'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.payrolls
   */
  export type Employee$payrollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    where?: PayrollWhereInput
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    cursor?: PayrollWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Employee.advances
   */
  export type Employee$advancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollAdvance
     */
    select?: PayrollAdvanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollAdvance
     */
    omit?: PayrollAdvanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollAdvanceInclude<ExtArgs> | null
    where?: PayrollAdvanceWhereInput
    orderBy?: PayrollAdvanceOrderByWithRelationInput | PayrollAdvanceOrderByWithRelationInput[]
    cursor?: PayrollAdvanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayrollAdvanceScalarFieldEnum | PayrollAdvanceScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Payroll
   */

  export type AggregatePayroll = {
    _count: PayrollCountAggregateOutputType | null
    _avg: PayrollAvgAggregateOutputType | null
    _sum: PayrollSumAggregateOutputType | null
    _min: PayrollMinAggregateOutputType | null
    _max: PayrollMaxAggregateOutputType | null
  }

  export type PayrollAvgAggregateOutputType = {
    month: number | null
    year: number | null
    baseSalary: number | null
    workingDays: number | null
    transportTotal: number | null
    absences: number | null
    absenceDeduction: number | null
    absencesVT: number | null
    transportDeduction: number | null
    otherDeductions: number | null
    bonuses: number | null
    grossEarnings: number | null
    inssDeduction: number | null
    irrfDeduction: number | null
    fgtsValue: number | null
    salaryAdvance: number | null
    hoursAulista: number | null
    netTotal: number | null
  }

  export type PayrollSumAggregateOutputType = {
    month: number | null
    year: number | null
    baseSalary: number | null
    workingDays: number | null
    transportTotal: number | null
    absences: number | null
    absenceDeduction: number | null
    absencesVT: number | null
    transportDeduction: number | null
    otherDeductions: number | null
    bonuses: number | null
    grossEarnings: number | null
    inssDeduction: number | null
    irrfDeduction: number | null
    fgtsValue: number | null
    salaryAdvance: number | null
    hoursAulista: number | null
    netTotal: number | null
  }

  export type PayrollMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    month: number | null
    year: number | null
    baseSalary: number | null
    workingDays: number | null
    transportTotal: number | null
    absences: number | null
    absenceDeduction: number | null
    absencesVT: number | null
    transportDeduction: number | null
    otherDeductions: number | null
    bonuses: number | null
    grossEarnings: number | null
    inssDeduction: number | null
    irrfDeduction: number | null
    fgtsValue: number | null
    salaryAdvance: number | null
    hoursAulista: number | null
    netTotal: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayrollMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    month: number | null
    year: number | null
    baseSalary: number | null
    workingDays: number | null
    transportTotal: number | null
    absences: number | null
    absenceDeduction: number | null
    absencesVT: number | null
    transportDeduction: number | null
    otherDeductions: number | null
    bonuses: number | null
    grossEarnings: number | null
    inssDeduction: number | null
    irrfDeduction: number | null
    fgtsValue: number | null
    salaryAdvance: number | null
    hoursAulista: number | null
    netTotal: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayrollCountAggregateOutputType = {
    id: number
    employeeId: number
    month: number
    year: number
    baseSalary: number
    workingDays: number
    transportTotal: number
    absences: number
    absenceDeduction: number
    absencesVT: number
    transportDeduction: number
    otherDeductions: number
    bonuses: number
    grossEarnings: number
    inssDeduction: number
    irrfDeduction: number
    fgtsValue: number
    salaryAdvance: number
    hoursAulista: number
    netTotal: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayrollAvgAggregateInputType = {
    month?: true
    year?: true
    baseSalary?: true
    workingDays?: true
    transportTotal?: true
    absences?: true
    absenceDeduction?: true
    absencesVT?: true
    transportDeduction?: true
    otherDeductions?: true
    bonuses?: true
    grossEarnings?: true
    inssDeduction?: true
    irrfDeduction?: true
    fgtsValue?: true
    salaryAdvance?: true
    hoursAulista?: true
    netTotal?: true
  }

  export type PayrollSumAggregateInputType = {
    month?: true
    year?: true
    baseSalary?: true
    workingDays?: true
    transportTotal?: true
    absences?: true
    absenceDeduction?: true
    absencesVT?: true
    transportDeduction?: true
    otherDeductions?: true
    bonuses?: true
    grossEarnings?: true
    inssDeduction?: true
    irrfDeduction?: true
    fgtsValue?: true
    salaryAdvance?: true
    hoursAulista?: true
    netTotal?: true
  }

  export type PayrollMinAggregateInputType = {
    id?: true
    employeeId?: true
    month?: true
    year?: true
    baseSalary?: true
    workingDays?: true
    transportTotal?: true
    absences?: true
    absenceDeduction?: true
    absencesVT?: true
    transportDeduction?: true
    otherDeductions?: true
    bonuses?: true
    grossEarnings?: true
    inssDeduction?: true
    irrfDeduction?: true
    fgtsValue?: true
    salaryAdvance?: true
    hoursAulista?: true
    netTotal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayrollMaxAggregateInputType = {
    id?: true
    employeeId?: true
    month?: true
    year?: true
    baseSalary?: true
    workingDays?: true
    transportTotal?: true
    absences?: true
    absenceDeduction?: true
    absencesVT?: true
    transportDeduction?: true
    otherDeductions?: true
    bonuses?: true
    grossEarnings?: true
    inssDeduction?: true
    irrfDeduction?: true
    fgtsValue?: true
    salaryAdvance?: true
    hoursAulista?: true
    netTotal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayrollCountAggregateInputType = {
    id?: true
    employeeId?: true
    month?: true
    year?: true
    baseSalary?: true
    workingDays?: true
    transportTotal?: true
    absences?: true
    absenceDeduction?: true
    absencesVT?: true
    transportDeduction?: true
    otherDeductions?: true
    bonuses?: true
    grossEarnings?: true
    inssDeduction?: true
    irrfDeduction?: true
    fgtsValue?: true
    salaryAdvance?: true
    hoursAulista?: true
    netTotal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayrollAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payroll to aggregate.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payrolls
    **/
    _count?: true | PayrollCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayrollAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayrollSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayrollMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayrollMaxAggregateInputType
  }

  export type GetPayrollAggregateType<T extends PayrollAggregateArgs> = {
        [P in keyof T & keyof AggregatePayroll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayroll[P]>
      : GetScalarType<T[P], AggregatePayroll[P]>
  }




  export type PayrollGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollWhereInput
    orderBy?: PayrollOrderByWithAggregationInput | PayrollOrderByWithAggregationInput[]
    by: PayrollScalarFieldEnum[] | PayrollScalarFieldEnum
    having?: PayrollScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayrollCountAggregateInputType | true
    _avg?: PayrollAvgAggregateInputType
    _sum?: PayrollSumAggregateInputType
    _min?: PayrollMinAggregateInputType
    _max?: PayrollMaxAggregateInputType
  }

  export type PayrollGroupByOutputType = {
    id: string
    employeeId: string
    month: number
    year: number
    baseSalary: number
    workingDays: number | null
    transportTotal: number | null
    absences: number
    absenceDeduction: number
    absencesVT: number
    transportDeduction: number
    otherDeductions: number
    bonuses: number
    grossEarnings: number
    inssDeduction: number
    irrfDeduction: number
    fgtsValue: number
    salaryAdvance: number
    hoursAulista: number | null
    netTotal: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: PayrollCountAggregateOutputType | null
    _avg: PayrollAvgAggregateOutputType | null
    _sum: PayrollSumAggregateOutputType | null
    _min: PayrollMinAggregateOutputType | null
    _max: PayrollMaxAggregateOutputType | null
  }

  type GetPayrollGroupByPayload<T extends PayrollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayrollGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayrollGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayrollGroupByOutputType[P]>
            : GetScalarType<T[P], PayrollGroupByOutputType[P]>
        }
      >
    >


  export type PayrollSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    month?: boolean
    year?: boolean
    baseSalary?: boolean
    workingDays?: boolean
    transportTotal?: boolean
    absences?: boolean
    absenceDeduction?: boolean
    absencesVT?: boolean
    transportDeduction?: boolean
    otherDeductions?: boolean
    bonuses?: boolean
    grossEarnings?: boolean
    inssDeduction?: boolean
    irrfDeduction?: boolean
    fgtsValue?: boolean
    salaryAdvance?: boolean
    hoursAulista?: boolean
    netTotal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payroll"]>

  export type PayrollSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    month?: boolean
    year?: boolean
    baseSalary?: boolean
    workingDays?: boolean
    transportTotal?: boolean
    absences?: boolean
    absenceDeduction?: boolean
    absencesVT?: boolean
    transportDeduction?: boolean
    otherDeductions?: boolean
    bonuses?: boolean
    grossEarnings?: boolean
    inssDeduction?: boolean
    irrfDeduction?: boolean
    fgtsValue?: boolean
    salaryAdvance?: boolean
    hoursAulista?: boolean
    netTotal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payroll"]>

  export type PayrollSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    month?: boolean
    year?: boolean
    baseSalary?: boolean
    workingDays?: boolean
    transportTotal?: boolean
    absences?: boolean
    absenceDeduction?: boolean
    absencesVT?: boolean
    transportDeduction?: boolean
    otherDeductions?: boolean
    bonuses?: boolean
    grossEarnings?: boolean
    inssDeduction?: boolean
    irrfDeduction?: boolean
    fgtsValue?: boolean
    salaryAdvance?: boolean
    hoursAulista?: boolean
    netTotal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payroll"]>

  export type PayrollSelectScalar = {
    id?: boolean
    employeeId?: boolean
    month?: boolean
    year?: boolean
    baseSalary?: boolean
    workingDays?: boolean
    transportTotal?: boolean
    absences?: boolean
    absenceDeduction?: boolean
    absencesVT?: boolean
    transportDeduction?: boolean
    otherDeductions?: boolean
    bonuses?: boolean
    grossEarnings?: boolean
    inssDeduction?: boolean
    irrfDeduction?: boolean
    fgtsValue?: boolean
    salaryAdvance?: boolean
    hoursAulista?: boolean
    netTotal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayrollOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "month" | "year" | "baseSalary" | "workingDays" | "transportTotal" | "absences" | "absenceDeduction" | "absencesVT" | "transportDeduction" | "otherDeductions" | "bonuses" | "grossEarnings" | "inssDeduction" | "irrfDeduction" | "fgtsValue" | "salaryAdvance" | "hoursAulista" | "netTotal" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["payroll"]>
  export type PayrollInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type PayrollIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type PayrollIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $PayrollPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payroll"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      month: number
      year: number
      baseSalary: number
      workingDays: number | null
      transportTotal: number | null
      absences: number
      absenceDeduction: number
      absencesVT: number
      transportDeduction: number
      otherDeductions: number
      bonuses: number
      grossEarnings: number
      inssDeduction: number
      irrfDeduction: number
      fgtsValue: number
      salaryAdvance: number
      hoursAulista: number | null
      netTotal: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payroll"]>
    composites: {}
  }

  type PayrollGetPayload<S extends boolean | null | undefined | PayrollDefaultArgs> = $Result.GetResult<Prisma.$PayrollPayload, S>

  type PayrollCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayrollFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayrollCountAggregateInputType | true
    }

  export interface PayrollDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payroll'], meta: { name: 'Payroll' } }
    /**
     * Find zero or one Payroll that matches the filter.
     * @param {PayrollFindUniqueArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayrollFindUniqueArgs>(args: SelectSubset<T, PayrollFindUniqueArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payroll that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayrollFindUniqueOrThrowArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayrollFindUniqueOrThrowArgs>(args: SelectSubset<T, PayrollFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payroll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollFindFirstArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayrollFindFirstArgs>(args?: SelectSubset<T, PayrollFindFirstArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payroll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollFindFirstOrThrowArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayrollFindFirstOrThrowArgs>(args?: SelectSubset<T, PayrollFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payrolls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payrolls
     * const payrolls = await prisma.payroll.findMany()
     * 
     * // Get first 10 Payrolls
     * const payrolls = await prisma.payroll.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payrollWithIdOnly = await prisma.payroll.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayrollFindManyArgs>(args?: SelectSubset<T, PayrollFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payroll.
     * @param {PayrollCreateArgs} args - Arguments to create a Payroll.
     * @example
     * // Create one Payroll
     * const Payroll = await prisma.payroll.create({
     *   data: {
     *     // ... data to create a Payroll
     *   }
     * })
     * 
     */
    create<T extends PayrollCreateArgs>(args: SelectSubset<T, PayrollCreateArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payrolls.
     * @param {PayrollCreateManyArgs} args - Arguments to create many Payrolls.
     * @example
     * // Create many Payrolls
     * const payroll = await prisma.payroll.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayrollCreateManyArgs>(args?: SelectSubset<T, PayrollCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payrolls and returns the data saved in the database.
     * @param {PayrollCreateManyAndReturnArgs} args - Arguments to create many Payrolls.
     * @example
     * // Create many Payrolls
     * const payroll = await prisma.payroll.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payrolls and only return the `id`
     * const payrollWithIdOnly = await prisma.payroll.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayrollCreateManyAndReturnArgs>(args?: SelectSubset<T, PayrollCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payroll.
     * @param {PayrollDeleteArgs} args - Arguments to delete one Payroll.
     * @example
     * // Delete one Payroll
     * const Payroll = await prisma.payroll.delete({
     *   where: {
     *     // ... filter to delete one Payroll
     *   }
     * })
     * 
     */
    delete<T extends PayrollDeleteArgs>(args: SelectSubset<T, PayrollDeleteArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payroll.
     * @param {PayrollUpdateArgs} args - Arguments to update one Payroll.
     * @example
     * // Update one Payroll
     * const payroll = await prisma.payroll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayrollUpdateArgs>(args: SelectSubset<T, PayrollUpdateArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payrolls.
     * @param {PayrollDeleteManyArgs} args - Arguments to filter Payrolls to delete.
     * @example
     * // Delete a few Payrolls
     * const { count } = await prisma.payroll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayrollDeleteManyArgs>(args?: SelectSubset<T, PayrollDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payrolls
     * const payroll = await prisma.payroll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayrollUpdateManyArgs>(args: SelectSubset<T, PayrollUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payrolls and returns the data updated in the database.
     * @param {PayrollUpdateManyAndReturnArgs} args - Arguments to update many Payrolls.
     * @example
     * // Update many Payrolls
     * const payroll = await prisma.payroll.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payrolls and only return the `id`
     * const payrollWithIdOnly = await prisma.payroll.updateManyAndReturn({
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
    updateManyAndReturn<T extends PayrollUpdateManyAndReturnArgs>(args: SelectSubset<T, PayrollUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payroll.
     * @param {PayrollUpsertArgs} args - Arguments to update or create a Payroll.
     * @example
     * // Update or create a Payroll
     * const payroll = await prisma.payroll.upsert({
     *   create: {
     *     // ... data to create a Payroll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payroll we want to update
     *   }
     * })
     */
    upsert<T extends PayrollUpsertArgs>(args: SelectSubset<T, PayrollUpsertArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollCountArgs} args - Arguments to filter Payrolls to count.
     * @example
     * // Count the number of Payrolls
     * const count = await prisma.payroll.count({
     *   where: {
     *     // ... the filter for the Payrolls we want to count
     *   }
     * })
    **/
    count<T extends PayrollCountArgs>(
      args?: Subset<T, PayrollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayrollCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayrollAggregateArgs>(args: Subset<T, PayrollAggregateArgs>): Prisma.PrismaPromise<GetPayrollAggregateType<T>>

    /**
     * Group by Payroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollGroupByArgs} args - Group by arguments.
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
      T extends PayrollGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayrollGroupByArgs['orderBy'] }
        : { orderBy?: PayrollGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayrollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payroll model
   */
  readonly fields: PayrollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payroll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayrollClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payroll model
   */
  interface PayrollFieldRefs {
    readonly id: FieldRef<"Payroll", 'String'>
    readonly employeeId: FieldRef<"Payroll", 'String'>
    readonly month: FieldRef<"Payroll", 'Int'>
    readonly year: FieldRef<"Payroll", 'Int'>
    readonly baseSalary: FieldRef<"Payroll", 'Float'>
    readonly workingDays: FieldRef<"Payroll", 'Int'>
    readonly transportTotal: FieldRef<"Payroll", 'Float'>
    readonly absences: FieldRef<"Payroll", 'Int'>
    readonly absenceDeduction: FieldRef<"Payroll", 'Float'>
    readonly absencesVT: FieldRef<"Payroll", 'Int'>
    readonly transportDeduction: FieldRef<"Payroll", 'Float'>
    readonly otherDeductions: FieldRef<"Payroll", 'Float'>
    readonly bonuses: FieldRef<"Payroll", 'Float'>
    readonly grossEarnings: FieldRef<"Payroll", 'Float'>
    readonly inssDeduction: FieldRef<"Payroll", 'Float'>
    readonly irrfDeduction: FieldRef<"Payroll", 'Float'>
    readonly fgtsValue: FieldRef<"Payroll", 'Float'>
    readonly salaryAdvance: FieldRef<"Payroll", 'Float'>
    readonly hoursAulista: FieldRef<"Payroll", 'Float'>
    readonly netTotal: FieldRef<"Payroll", 'Float'>
    readonly status: FieldRef<"Payroll", 'String'>
    readonly createdAt: FieldRef<"Payroll", 'DateTime'>
    readonly updatedAt: FieldRef<"Payroll", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payroll findUnique
   */
  export type PayrollFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll findUniqueOrThrow
   */
  export type PayrollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll findFirst
   */
  export type PayrollFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payrolls.
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payrolls.
     */
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Payroll findFirstOrThrow
   */
  export type PayrollFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payrolls.
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payrolls.
     */
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Payroll findMany
   */
  export type PayrollFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payrolls to fetch.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payrolls.
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Payroll create
   */
  export type PayrollCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * The data needed to create a Payroll.
     */
    data: XOR<PayrollCreateInput, PayrollUncheckedCreateInput>
  }

  /**
   * Payroll createMany
   */
  export type PayrollCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payrolls.
     */
    data: PayrollCreateManyInput | PayrollCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payroll createManyAndReturn
   */
  export type PayrollCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * The data used to create many Payrolls.
     */
    data: PayrollCreateManyInput | PayrollCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payroll update
   */
  export type PayrollUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * The data needed to update a Payroll.
     */
    data: XOR<PayrollUpdateInput, PayrollUncheckedUpdateInput>
    /**
     * Choose, which Payroll to update.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll updateMany
   */
  export type PayrollUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payrolls.
     */
    data: XOR<PayrollUpdateManyMutationInput, PayrollUncheckedUpdateManyInput>
    /**
     * Filter which Payrolls to update
     */
    where?: PayrollWhereInput
    /**
     * Limit how many Payrolls to update.
     */
    limit?: number
  }

  /**
   * Payroll updateManyAndReturn
   */
  export type PayrollUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * The data used to update Payrolls.
     */
    data: XOR<PayrollUpdateManyMutationInput, PayrollUncheckedUpdateManyInput>
    /**
     * Filter which Payrolls to update
     */
    where?: PayrollWhereInput
    /**
     * Limit how many Payrolls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payroll upsert
   */
  export type PayrollUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * The filter to search for the Payroll to update in case it exists.
     */
    where: PayrollWhereUniqueInput
    /**
     * In case the Payroll found by the `where` argument doesn't exist, create a new Payroll with this data.
     */
    create: XOR<PayrollCreateInput, PayrollUncheckedCreateInput>
    /**
     * In case the Payroll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayrollUpdateInput, PayrollUncheckedUpdateInput>
  }

  /**
   * Payroll delete
   */
  export type PayrollDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter which Payroll to delete.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll deleteMany
   */
  export type PayrollDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payrolls to delete
     */
    where?: PayrollWhereInput
    /**
     * Limit how many Payrolls to delete.
     */
    limit?: number
  }

  /**
   * Payroll without action
   */
  export type PayrollDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
  }


  /**
   * Model PayrollAdvance
   */

  export type AggregatePayrollAdvance = {
    _count: PayrollAdvanceCountAggregateOutputType | null
    _avg: PayrollAdvanceAvgAggregateOutputType | null
    _sum: PayrollAdvanceSumAggregateOutputType | null
    _min: PayrollAdvanceMinAggregateOutputType | null
    _max: PayrollAdvanceMaxAggregateOutputType | null
  }

  export type PayrollAdvanceAvgAggregateOutputType = {
    month: number | null
    year: number | null
    amount: number | null
  }

  export type PayrollAdvanceSumAggregateOutputType = {
    month: number | null
    year: number | null
    amount: number | null
  }

  export type PayrollAdvanceMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    month: number | null
    year: number | null
    amount: number | null
    status: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayrollAdvanceMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    month: number | null
    year: number | null
    amount: number | null
    status: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayrollAdvanceCountAggregateOutputType = {
    id: number
    employeeId: number
    month: number
    year: number
    amount: number
    status: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayrollAdvanceAvgAggregateInputType = {
    month?: true
    year?: true
    amount?: true
  }

  export type PayrollAdvanceSumAggregateInputType = {
    month?: true
    year?: true
    amount?: true
  }

  export type PayrollAdvanceMinAggregateInputType = {
    id?: true
    employeeId?: true
    month?: true
    year?: true
    amount?: true
    status?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayrollAdvanceMaxAggregateInputType = {
    id?: true
    employeeId?: true
    month?: true
    year?: true
    amount?: true
    status?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayrollAdvanceCountAggregateInputType = {
    id?: true
    employeeId?: true
    month?: true
    year?: true
    amount?: true
    status?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayrollAdvanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayrollAdvance to aggregate.
     */
    where?: PayrollAdvanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollAdvances to fetch.
     */
    orderBy?: PayrollAdvanceOrderByWithRelationInput | PayrollAdvanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayrollAdvanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollAdvances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollAdvances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayrollAdvances
    **/
    _count?: true | PayrollAdvanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayrollAdvanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayrollAdvanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayrollAdvanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayrollAdvanceMaxAggregateInputType
  }

  export type GetPayrollAdvanceAggregateType<T extends PayrollAdvanceAggregateArgs> = {
        [P in keyof T & keyof AggregatePayrollAdvance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayrollAdvance[P]>
      : GetScalarType<T[P], AggregatePayrollAdvance[P]>
  }




  export type PayrollAdvanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollAdvanceWhereInput
    orderBy?: PayrollAdvanceOrderByWithAggregationInput | PayrollAdvanceOrderByWithAggregationInput[]
    by: PayrollAdvanceScalarFieldEnum[] | PayrollAdvanceScalarFieldEnum
    having?: PayrollAdvanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayrollAdvanceCountAggregateInputType | true
    _avg?: PayrollAdvanceAvgAggregateInputType
    _sum?: PayrollAdvanceSumAggregateInputType
    _min?: PayrollAdvanceMinAggregateInputType
    _max?: PayrollAdvanceMaxAggregateInputType
  }

  export type PayrollAdvanceGroupByOutputType = {
    id: string
    employeeId: string
    month: number
    year: number
    amount: number
    status: string
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PayrollAdvanceCountAggregateOutputType | null
    _avg: PayrollAdvanceAvgAggregateOutputType | null
    _sum: PayrollAdvanceSumAggregateOutputType | null
    _min: PayrollAdvanceMinAggregateOutputType | null
    _max: PayrollAdvanceMaxAggregateOutputType | null
  }

  type GetPayrollAdvanceGroupByPayload<T extends PayrollAdvanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayrollAdvanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayrollAdvanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayrollAdvanceGroupByOutputType[P]>
            : GetScalarType<T[P], PayrollAdvanceGroupByOutputType[P]>
        }
      >
    >


  export type PayrollAdvanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    month?: boolean
    year?: boolean
    amount?: boolean
    status?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollAdvance"]>

  export type PayrollAdvanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    month?: boolean
    year?: boolean
    amount?: boolean
    status?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollAdvance"]>

  export type PayrollAdvanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    month?: boolean
    year?: boolean
    amount?: boolean
    status?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollAdvance"]>

  export type PayrollAdvanceSelectScalar = {
    id?: boolean
    employeeId?: boolean
    month?: boolean
    year?: boolean
    amount?: boolean
    status?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayrollAdvanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "month" | "year" | "amount" | "status" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payrollAdvance"]>
  export type PayrollAdvanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type PayrollAdvanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type PayrollAdvanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $PayrollAdvancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayrollAdvance"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      month: number
      year: number
      amount: number
      status: string
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payrollAdvance"]>
    composites: {}
  }

  type PayrollAdvanceGetPayload<S extends boolean | null | undefined | PayrollAdvanceDefaultArgs> = $Result.GetResult<Prisma.$PayrollAdvancePayload, S>

  type PayrollAdvanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayrollAdvanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayrollAdvanceCountAggregateInputType | true
    }

  export interface PayrollAdvanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayrollAdvance'], meta: { name: 'PayrollAdvance' } }
    /**
     * Find zero or one PayrollAdvance that matches the filter.
     * @param {PayrollAdvanceFindUniqueArgs} args - Arguments to find a PayrollAdvance
     * @example
     * // Get one PayrollAdvance
     * const payrollAdvance = await prisma.payrollAdvance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayrollAdvanceFindUniqueArgs>(args: SelectSubset<T, PayrollAdvanceFindUniqueArgs<ExtArgs>>): Prisma__PayrollAdvanceClient<$Result.GetResult<Prisma.$PayrollAdvancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayrollAdvance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayrollAdvanceFindUniqueOrThrowArgs} args - Arguments to find a PayrollAdvance
     * @example
     * // Get one PayrollAdvance
     * const payrollAdvance = await prisma.payrollAdvance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayrollAdvanceFindUniqueOrThrowArgs>(args: SelectSubset<T, PayrollAdvanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayrollAdvanceClient<$Result.GetResult<Prisma.$PayrollAdvancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollAdvance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollAdvanceFindFirstArgs} args - Arguments to find a PayrollAdvance
     * @example
     * // Get one PayrollAdvance
     * const payrollAdvance = await prisma.payrollAdvance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayrollAdvanceFindFirstArgs>(args?: SelectSubset<T, PayrollAdvanceFindFirstArgs<ExtArgs>>): Prisma__PayrollAdvanceClient<$Result.GetResult<Prisma.$PayrollAdvancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollAdvance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollAdvanceFindFirstOrThrowArgs} args - Arguments to find a PayrollAdvance
     * @example
     * // Get one PayrollAdvance
     * const payrollAdvance = await prisma.payrollAdvance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayrollAdvanceFindFirstOrThrowArgs>(args?: SelectSubset<T, PayrollAdvanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayrollAdvanceClient<$Result.GetResult<Prisma.$PayrollAdvancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayrollAdvances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollAdvanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayrollAdvances
     * const payrollAdvances = await prisma.payrollAdvance.findMany()
     * 
     * // Get first 10 PayrollAdvances
     * const payrollAdvances = await prisma.payrollAdvance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payrollAdvanceWithIdOnly = await prisma.payrollAdvance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayrollAdvanceFindManyArgs>(args?: SelectSubset<T, PayrollAdvanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollAdvancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayrollAdvance.
     * @param {PayrollAdvanceCreateArgs} args - Arguments to create a PayrollAdvance.
     * @example
     * // Create one PayrollAdvance
     * const PayrollAdvance = await prisma.payrollAdvance.create({
     *   data: {
     *     // ... data to create a PayrollAdvance
     *   }
     * })
     * 
     */
    create<T extends PayrollAdvanceCreateArgs>(args: SelectSubset<T, PayrollAdvanceCreateArgs<ExtArgs>>): Prisma__PayrollAdvanceClient<$Result.GetResult<Prisma.$PayrollAdvancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayrollAdvances.
     * @param {PayrollAdvanceCreateManyArgs} args - Arguments to create many PayrollAdvances.
     * @example
     * // Create many PayrollAdvances
     * const payrollAdvance = await prisma.payrollAdvance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayrollAdvanceCreateManyArgs>(args?: SelectSubset<T, PayrollAdvanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayrollAdvances and returns the data saved in the database.
     * @param {PayrollAdvanceCreateManyAndReturnArgs} args - Arguments to create many PayrollAdvances.
     * @example
     * // Create many PayrollAdvances
     * const payrollAdvance = await prisma.payrollAdvance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayrollAdvances and only return the `id`
     * const payrollAdvanceWithIdOnly = await prisma.payrollAdvance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayrollAdvanceCreateManyAndReturnArgs>(args?: SelectSubset<T, PayrollAdvanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollAdvancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayrollAdvance.
     * @param {PayrollAdvanceDeleteArgs} args - Arguments to delete one PayrollAdvance.
     * @example
     * // Delete one PayrollAdvance
     * const PayrollAdvance = await prisma.payrollAdvance.delete({
     *   where: {
     *     // ... filter to delete one PayrollAdvance
     *   }
     * })
     * 
     */
    delete<T extends PayrollAdvanceDeleteArgs>(args: SelectSubset<T, PayrollAdvanceDeleteArgs<ExtArgs>>): Prisma__PayrollAdvanceClient<$Result.GetResult<Prisma.$PayrollAdvancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayrollAdvance.
     * @param {PayrollAdvanceUpdateArgs} args - Arguments to update one PayrollAdvance.
     * @example
     * // Update one PayrollAdvance
     * const payrollAdvance = await prisma.payrollAdvance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayrollAdvanceUpdateArgs>(args: SelectSubset<T, PayrollAdvanceUpdateArgs<ExtArgs>>): Prisma__PayrollAdvanceClient<$Result.GetResult<Prisma.$PayrollAdvancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayrollAdvances.
     * @param {PayrollAdvanceDeleteManyArgs} args - Arguments to filter PayrollAdvances to delete.
     * @example
     * // Delete a few PayrollAdvances
     * const { count } = await prisma.payrollAdvance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayrollAdvanceDeleteManyArgs>(args?: SelectSubset<T, PayrollAdvanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollAdvances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollAdvanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayrollAdvances
     * const payrollAdvance = await prisma.payrollAdvance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayrollAdvanceUpdateManyArgs>(args: SelectSubset<T, PayrollAdvanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollAdvances and returns the data updated in the database.
     * @param {PayrollAdvanceUpdateManyAndReturnArgs} args - Arguments to update many PayrollAdvances.
     * @example
     * // Update many PayrollAdvances
     * const payrollAdvance = await prisma.payrollAdvance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayrollAdvances and only return the `id`
     * const payrollAdvanceWithIdOnly = await prisma.payrollAdvance.updateManyAndReturn({
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
    updateManyAndReturn<T extends PayrollAdvanceUpdateManyAndReturnArgs>(args: SelectSubset<T, PayrollAdvanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollAdvancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayrollAdvance.
     * @param {PayrollAdvanceUpsertArgs} args - Arguments to update or create a PayrollAdvance.
     * @example
     * // Update or create a PayrollAdvance
     * const payrollAdvance = await prisma.payrollAdvance.upsert({
     *   create: {
     *     // ... data to create a PayrollAdvance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayrollAdvance we want to update
     *   }
     * })
     */
    upsert<T extends PayrollAdvanceUpsertArgs>(args: SelectSubset<T, PayrollAdvanceUpsertArgs<ExtArgs>>): Prisma__PayrollAdvanceClient<$Result.GetResult<Prisma.$PayrollAdvancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayrollAdvances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollAdvanceCountArgs} args - Arguments to filter PayrollAdvances to count.
     * @example
     * // Count the number of PayrollAdvances
     * const count = await prisma.payrollAdvance.count({
     *   where: {
     *     // ... the filter for the PayrollAdvances we want to count
     *   }
     * })
    **/
    count<T extends PayrollAdvanceCountArgs>(
      args?: Subset<T, PayrollAdvanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayrollAdvanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayrollAdvance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollAdvanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayrollAdvanceAggregateArgs>(args: Subset<T, PayrollAdvanceAggregateArgs>): Prisma.PrismaPromise<GetPayrollAdvanceAggregateType<T>>

    /**
     * Group by PayrollAdvance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollAdvanceGroupByArgs} args - Group by arguments.
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
      T extends PayrollAdvanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayrollAdvanceGroupByArgs['orderBy'] }
        : { orderBy?: PayrollAdvanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayrollAdvanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollAdvanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayrollAdvance model
   */
  readonly fields: PayrollAdvanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayrollAdvance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayrollAdvanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PayrollAdvance model
   */
  interface PayrollAdvanceFieldRefs {
    readonly id: FieldRef<"PayrollAdvance", 'String'>
    readonly employeeId: FieldRef<"PayrollAdvance", 'String'>
    readonly month: FieldRef<"PayrollAdvance", 'Int'>
    readonly year: FieldRef<"PayrollAdvance", 'Int'>
    readonly amount: FieldRef<"PayrollAdvance", 'Float'>
    readonly status: FieldRef<"PayrollAdvance", 'String'>
    readonly paidAt: FieldRef<"PayrollAdvance", 'DateTime'>
    readonly createdAt: FieldRef<"PayrollAdvance", 'DateTime'>
    readonly updatedAt: FieldRef<"PayrollAdvance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PayrollAdvance findUnique
   */
  export type PayrollAdvanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollAdvance
     */
    select?: PayrollAdvanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollAdvance
     */
    omit?: PayrollAdvanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollAdvanceInclude<ExtArgs> | null
    /**
     * Filter, which PayrollAdvance to fetch.
     */
    where: PayrollAdvanceWhereUniqueInput
  }

  /**
   * PayrollAdvance findUniqueOrThrow
   */
  export type PayrollAdvanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollAdvance
     */
    select?: PayrollAdvanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollAdvance
     */
    omit?: PayrollAdvanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollAdvanceInclude<ExtArgs> | null
    /**
     * Filter, which PayrollAdvance to fetch.
     */
    where: PayrollAdvanceWhereUniqueInput
  }

  /**
   * PayrollAdvance findFirst
   */
  export type PayrollAdvanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollAdvance
     */
    select?: PayrollAdvanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollAdvance
     */
    omit?: PayrollAdvanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollAdvanceInclude<ExtArgs> | null
    /**
     * Filter, which PayrollAdvance to fetch.
     */
    where?: PayrollAdvanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollAdvances to fetch.
     */
    orderBy?: PayrollAdvanceOrderByWithRelationInput | PayrollAdvanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayrollAdvances.
     */
    cursor?: PayrollAdvanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollAdvances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollAdvances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayrollAdvances.
     */
    distinct?: PayrollAdvanceScalarFieldEnum | PayrollAdvanceScalarFieldEnum[]
  }

  /**
   * PayrollAdvance findFirstOrThrow
   */
  export type PayrollAdvanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollAdvance
     */
    select?: PayrollAdvanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollAdvance
     */
    omit?: PayrollAdvanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollAdvanceInclude<ExtArgs> | null
    /**
     * Filter, which PayrollAdvance to fetch.
     */
    where?: PayrollAdvanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollAdvances to fetch.
     */
    orderBy?: PayrollAdvanceOrderByWithRelationInput | PayrollAdvanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayrollAdvances.
     */
    cursor?: PayrollAdvanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollAdvances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollAdvances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayrollAdvances.
     */
    distinct?: PayrollAdvanceScalarFieldEnum | PayrollAdvanceScalarFieldEnum[]
  }

  /**
   * PayrollAdvance findMany
   */
  export type PayrollAdvanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollAdvance
     */
    select?: PayrollAdvanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollAdvance
     */
    omit?: PayrollAdvanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollAdvanceInclude<ExtArgs> | null
    /**
     * Filter, which PayrollAdvances to fetch.
     */
    where?: PayrollAdvanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollAdvances to fetch.
     */
    orderBy?: PayrollAdvanceOrderByWithRelationInput | PayrollAdvanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayrollAdvances.
     */
    cursor?: PayrollAdvanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollAdvances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollAdvances.
     */
    skip?: number
    distinct?: PayrollAdvanceScalarFieldEnum | PayrollAdvanceScalarFieldEnum[]
  }

  /**
   * PayrollAdvance create
   */
  export type PayrollAdvanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollAdvance
     */
    select?: PayrollAdvanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollAdvance
     */
    omit?: PayrollAdvanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollAdvanceInclude<ExtArgs> | null
    /**
     * The data needed to create a PayrollAdvance.
     */
    data: XOR<PayrollAdvanceCreateInput, PayrollAdvanceUncheckedCreateInput>
  }

  /**
   * PayrollAdvance createMany
   */
  export type PayrollAdvanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayrollAdvances.
     */
    data: PayrollAdvanceCreateManyInput | PayrollAdvanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayrollAdvance createManyAndReturn
   */
  export type PayrollAdvanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollAdvance
     */
    select?: PayrollAdvanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollAdvance
     */
    omit?: PayrollAdvanceOmit<ExtArgs> | null
    /**
     * The data used to create many PayrollAdvances.
     */
    data: PayrollAdvanceCreateManyInput | PayrollAdvanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollAdvanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayrollAdvance update
   */
  export type PayrollAdvanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollAdvance
     */
    select?: PayrollAdvanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollAdvance
     */
    omit?: PayrollAdvanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollAdvanceInclude<ExtArgs> | null
    /**
     * The data needed to update a PayrollAdvance.
     */
    data: XOR<PayrollAdvanceUpdateInput, PayrollAdvanceUncheckedUpdateInput>
    /**
     * Choose, which PayrollAdvance to update.
     */
    where: PayrollAdvanceWhereUniqueInput
  }

  /**
   * PayrollAdvance updateMany
   */
  export type PayrollAdvanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayrollAdvances.
     */
    data: XOR<PayrollAdvanceUpdateManyMutationInput, PayrollAdvanceUncheckedUpdateManyInput>
    /**
     * Filter which PayrollAdvances to update
     */
    where?: PayrollAdvanceWhereInput
    /**
     * Limit how many PayrollAdvances to update.
     */
    limit?: number
  }

  /**
   * PayrollAdvance updateManyAndReturn
   */
  export type PayrollAdvanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollAdvance
     */
    select?: PayrollAdvanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollAdvance
     */
    omit?: PayrollAdvanceOmit<ExtArgs> | null
    /**
     * The data used to update PayrollAdvances.
     */
    data: XOR<PayrollAdvanceUpdateManyMutationInput, PayrollAdvanceUncheckedUpdateManyInput>
    /**
     * Filter which PayrollAdvances to update
     */
    where?: PayrollAdvanceWhereInput
    /**
     * Limit how many PayrollAdvances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollAdvanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayrollAdvance upsert
   */
  export type PayrollAdvanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollAdvance
     */
    select?: PayrollAdvanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollAdvance
     */
    omit?: PayrollAdvanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollAdvanceInclude<ExtArgs> | null
    /**
     * The filter to search for the PayrollAdvance to update in case it exists.
     */
    where: PayrollAdvanceWhereUniqueInput
    /**
     * In case the PayrollAdvance found by the `where` argument doesn't exist, create a new PayrollAdvance with this data.
     */
    create: XOR<PayrollAdvanceCreateInput, PayrollAdvanceUncheckedCreateInput>
    /**
     * In case the PayrollAdvance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayrollAdvanceUpdateInput, PayrollAdvanceUncheckedUpdateInput>
  }

  /**
   * PayrollAdvance delete
   */
  export type PayrollAdvanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollAdvance
     */
    select?: PayrollAdvanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollAdvance
     */
    omit?: PayrollAdvanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollAdvanceInclude<ExtArgs> | null
    /**
     * Filter which PayrollAdvance to delete.
     */
    where: PayrollAdvanceWhereUniqueInput
  }

  /**
   * PayrollAdvance deleteMany
   */
  export type PayrollAdvanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayrollAdvances to delete
     */
    where?: PayrollAdvanceWhereInput
    /**
     * Limit how many PayrollAdvances to delete.
     */
    limit?: number
  }

  /**
   * PayrollAdvance without action
   */
  export type PayrollAdvanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollAdvance
     */
    select?: PayrollAdvanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollAdvance
     */
    omit?: PayrollAdvanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollAdvanceInclude<ExtArgs> | null
  }


  /**
   * Model FinancialTransaction
   */

  export type AggregateFinancialTransaction = {
    _count: FinancialTransactionCountAggregateOutputType | null
    _avg: FinancialTransactionAvgAggregateOutputType | null
    _sum: FinancialTransactionSumAggregateOutputType | null
    _min: FinancialTransactionMinAggregateOutputType | null
    _max: FinancialTransactionMaxAggregateOutputType | null
  }

  export type FinancialTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type FinancialTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type FinancialTransactionMinAggregateOutputType = {
    id: string | null
    title: string | null
    type: string | null
    amount: number | null
    category: string | null
    date: Date | null
    status: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinancialTransactionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    type: string | null
    amount: number | null
    category: string | null
    date: Date | null
    status: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinancialTransactionCountAggregateOutputType = {
    id: number
    title: number
    type: number
    amount: number
    category: number
    date: number
    status: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FinancialTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type FinancialTransactionSumAggregateInputType = {
    amount?: true
  }

  export type FinancialTransactionMinAggregateInputType = {
    id?: true
    title?: true
    type?: true
    amount?: true
    category?: true
    date?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinancialTransactionMaxAggregateInputType = {
    id?: true
    title?: true
    type?: true
    amount?: true
    category?: true
    date?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinancialTransactionCountAggregateInputType = {
    id?: true
    title?: true
    type?: true
    amount?: true
    category?: true
    date?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FinancialTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialTransaction to aggregate.
     */
    where?: FinancialTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialTransactions to fetch.
     */
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancialTransactions
    **/
    _count?: true | FinancialTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinancialTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinancialTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialTransactionMaxAggregateInputType
  }

  export type GetFinancialTransactionAggregateType<T extends FinancialTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancialTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancialTransaction[P]>
      : GetScalarType<T[P], AggregateFinancialTransaction[P]>
  }




  export type FinancialTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialTransactionWhereInput
    orderBy?: FinancialTransactionOrderByWithAggregationInput | FinancialTransactionOrderByWithAggregationInput[]
    by: FinancialTransactionScalarFieldEnum[] | FinancialTransactionScalarFieldEnum
    having?: FinancialTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialTransactionCountAggregateInputType | true
    _avg?: FinancialTransactionAvgAggregateInputType
    _sum?: FinancialTransactionSumAggregateInputType
    _min?: FinancialTransactionMinAggregateInputType
    _max?: FinancialTransactionMaxAggregateInputType
  }

  export type FinancialTransactionGroupByOutputType = {
    id: string
    title: string
    type: string
    amount: number
    category: string
    date: Date
    status: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: FinancialTransactionCountAggregateOutputType | null
    _avg: FinancialTransactionAvgAggregateOutputType | null
    _sum: FinancialTransactionSumAggregateOutputType | null
    _min: FinancialTransactionMinAggregateOutputType | null
    _max: FinancialTransactionMaxAggregateOutputType | null
  }

  type GetFinancialTransactionGroupByPayload<T extends FinancialTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialTransactionGroupByOutputType[P]>
        }
      >
    >


  export type FinancialTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    amount?: boolean
    category?: boolean
    date?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["financialTransaction"]>

  export type FinancialTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    amount?: boolean
    category?: boolean
    date?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["financialTransaction"]>

  export type FinancialTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    amount?: boolean
    category?: boolean
    date?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["financialTransaction"]>

  export type FinancialTransactionSelectScalar = {
    id?: boolean
    title?: boolean
    type?: boolean
    amount?: boolean
    category?: boolean
    date?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FinancialTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type" | "amount" | "category" | "date" | "status" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["financialTransaction"]>

  export type $FinancialTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancialTransaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      type: string
      amount: number
      category: string
      date: Date
      status: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["financialTransaction"]>
    composites: {}
  }

  type FinancialTransactionGetPayload<S extends boolean | null | undefined | FinancialTransactionDefaultArgs> = $Result.GetResult<Prisma.$FinancialTransactionPayload, S>

  type FinancialTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinancialTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinancialTransactionCountAggregateInputType | true
    }

  export interface FinancialTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialTransaction'], meta: { name: 'FinancialTransaction' } }
    /**
     * Find zero or one FinancialTransaction that matches the filter.
     * @param {FinancialTransactionFindUniqueArgs} args - Arguments to find a FinancialTransaction
     * @example
     * // Get one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialTransactionFindUniqueArgs>(args: SelectSubset<T, FinancialTransactionFindUniqueArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinancialTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinancialTransactionFindUniqueOrThrowArgs} args - Arguments to find a FinancialTransaction
     * @example
     * // Get one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionFindFirstArgs} args - Arguments to find a FinancialTransaction
     * @example
     * // Get one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialTransactionFindFirstArgs>(args?: SelectSubset<T, FinancialTransactionFindFirstArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionFindFirstOrThrowArgs} args - Arguments to find a FinancialTransaction
     * @example
     * // Get one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinancialTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancialTransactions
     * const financialTransactions = await prisma.financialTransaction.findMany()
     * 
     * // Get first 10 FinancialTransactions
     * const financialTransactions = await prisma.financialTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financialTransactionWithIdOnly = await prisma.financialTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinancialTransactionFindManyArgs>(args?: SelectSubset<T, FinancialTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinancialTransaction.
     * @param {FinancialTransactionCreateArgs} args - Arguments to create a FinancialTransaction.
     * @example
     * // Create one FinancialTransaction
     * const FinancialTransaction = await prisma.financialTransaction.create({
     *   data: {
     *     // ... data to create a FinancialTransaction
     *   }
     * })
     * 
     */
    create<T extends FinancialTransactionCreateArgs>(args: SelectSubset<T, FinancialTransactionCreateArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinancialTransactions.
     * @param {FinancialTransactionCreateManyArgs} args - Arguments to create many FinancialTransactions.
     * @example
     * // Create many FinancialTransactions
     * const financialTransaction = await prisma.financialTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialTransactionCreateManyArgs>(args?: SelectSubset<T, FinancialTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinancialTransactions and returns the data saved in the database.
     * @param {FinancialTransactionCreateManyAndReturnArgs} args - Arguments to create many FinancialTransactions.
     * @example
     * // Create many FinancialTransactions
     * const financialTransaction = await prisma.financialTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinancialTransactions and only return the `id`
     * const financialTransactionWithIdOnly = await prisma.financialTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancialTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancialTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinancialTransaction.
     * @param {FinancialTransactionDeleteArgs} args - Arguments to delete one FinancialTransaction.
     * @example
     * // Delete one FinancialTransaction
     * const FinancialTransaction = await prisma.financialTransaction.delete({
     *   where: {
     *     // ... filter to delete one FinancialTransaction
     *   }
     * })
     * 
     */
    delete<T extends FinancialTransactionDeleteArgs>(args: SelectSubset<T, FinancialTransactionDeleteArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinancialTransaction.
     * @param {FinancialTransactionUpdateArgs} args - Arguments to update one FinancialTransaction.
     * @example
     * // Update one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialTransactionUpdateArgs>(args: SelectSubset<T, FinancialTransactionUpdateArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinancialTransactions.
     * @param {FinancialTransactionDeleteManyArgs} args - Arguments to filter FinancialTransactions to delete.
     * @example
     * // Delete a few FinancialTransactions
     * const { count } = await prisma.financialTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialTransactionDeleteManyArgs>(args?: SelectSubset<T, FinancialTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancialTransactions
     * const financialTransaction = await prisma.financialTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialTransactionUpdateManyArgs>(args: SelectSubset<T, FinancialTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialTransactions and returns the data updated in the database.
     * @param {FinancialTransactionUpdateManyAndReturnArgs} args - Arguments to update many FinancialTransactions.
     * @example
     * // Update many FinancialTransactions
     * const financialTransaction = await prisma.financialTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinancialTransactions and only return the `id`
     * const financialTransactionWithIdOnly = await prisma.financialTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends FinancialTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, FinancialTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinancialTransaction.
     * @param {FinancialTransactionUpsertArgs} args - Arguments to update or create a FinancialTransaction.
     * @example
     * // Update or create a FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.upsert({
     *   create: {
     *     // ... data to create a FinancialTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancialTransaction we want to update
     *   }
     * })
     */
    upsert<T extends FinancialTransactionUpsertArgs>(args: SelectSubset<T, FinancialTransactionUpsertArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinancialTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionCountArgs} args - Arguments to filter FinancialTransactions to count.
     * @example
     * // Count the number of FinancialTransactions
     * const count = await prisma.financialTransaction.count({
     *   where: {
     *     // ... the filter for the FinancialTransactions we want to count
     *   }
     * })
    **/
    count<T extends FinancialTransactionCountArgs>(
      args?: Subset<T, FinancialTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancialTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinancialTransactionAggregateArgs>(args: Subset<T, FinancialTransactionAggregateArgs>): Prisma.PrismaPromise<GetFinancialTransactionAggregateType<T>>

    /**
     * Group by FinancialTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionGroupByArgs} args - Group by arguments.
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
      T extends FinancialTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialTransactionGroupByArgs['orderBy'] }
        : { orderBy?: FinancialTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinancialTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancialTransaction model
   */
  readonly fields: FinancialTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancialTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FinancialTransaction model
   */
  interface FinancialTransactionFieldRefs {
    readonly id: FieldRef<"FinancialTransaction", 'String'>
    readonly title: FieldRef<"FinancialTransaction", 'String'>
    readonly type: FieldRef<"FinancialTransaction", 'String'>
    readonly amount: FieldRef<"FinancialTransaction", 'Float'>
    readonly category: FieldRef<"FinancialTransaction", 'String'>
    readonly date: FieldRef<"FinancialTransaction", 'DateTime'>
    readonly status: FieldRef<"FinancialTransaction", 'String'>
    readonly description: FieldRef<"FinancialTransaction", 'String'>
    readonly createdAt: FieldRef<"FinancialTransaction", 'DateTime'>
    readonly updatedAt: FieldRef<"FinancialTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinancialTransaction findUnique
   */
  export type FinancialTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Filter, which FinancialTransaction to fetch.
     */
    where: FinancialTransactionWhereUniqueInput
  }

  /**
   * FinancialTransaction findUniqueOrThrow
   */
  export type FinancialTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Filter, which FinancialTransaction to fetch.
     */
    where: FinancialTransactionWhereUniqueInput
  }

  /**
   * FinancialTransaction findFirst
   */
  export type FinancialTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Filter, which FinancialTransaction to fetch.
     */
    where?: FinancialTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialTransactions to fetch.
     */
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialTransactions.
     */
    cursor?: FinancialTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialTransactions.
     */
    distinct?: FinancialTransactionScalarFieldEnum | FinancialTransactionScalarFieldEnum[]
  }

  /**
   * FinancialTransaction findFirstOrThrow
   */
  export type FinancialTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Filter, which FinancialTransaction to fetch.
     */
    where?: FinancialTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialTransactions to fetch.
     */
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialTransactions.
     */
    cursor?: FinancialTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialTransactions.
     */
    distinct?: FinancialTransactionScalarFieldEnum | FinancialTransactionScalarFieldEnum[]
  }

  /**
   * FinancialTransaction findMany
   */
  export type FinancialTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Filter, which FinancialTransactions to fetch.
     */
    where?: FinancialTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialTransactions to fetch.
     */
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancialTransactions.
     */
    cursor?: FinancialTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialTransactions.
     */
    skip?: number
    distinct?: FinancialTransactionScalarFieldEnum | FinancialTransactionScalarFieldEnum[]
  }

  /**
   * FinancialTransaction create
   */
  export type FinancialTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * The data needed to create a FinancialTransaction.
     */
    data: XOR<FinancialTransactionCreateInput, FinancialTransactionUncheckedCreateInput>
  }

  /**
   * FinancialTransaction createMany
   */
  export type FinancialTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancialTransactions.
     */
    data: FinancialTransactionCreateManyInput | FinancialTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialTransaction createManyAndReturn
   */
  export type FinancialTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many FinancialTransactions.
     */
    data: FinancialTransactionCreateManyInput | FinancialTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialTransaction update
   */
  export type FinancialTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * The data needed to update a FinancialTransaction.
     */
    data: XOR<FinancialTransactionUpdateInput, FinancialTransactionUncheckedUpdateInput>
    /**
     * Choose, which FinancialTransaction to update.
     */
    where: FinancialTransactionWhereUniqueInput
  }

  /**
   * FinancialTransaction updateMany
   */
  export type FinancialTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancialTransactions.
     */
    data: XOR<FinancialTransactionUpdateManyMutationInput, FinancialTransactionUncheckedUpdateManyInput>
    /**
     * Filter which FinancialTransactions to update
     */
    where?: FinancialTransactionWhereInput
    /**
     * Limit how many FinancialTransactions to update.
     */
    limit?: number
  }

  /**
   * FinancialTransaction updateManyAndReturn
   */
  export type FinancialTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * The data used to update FinancialTransactions.
     */
    data: XOR<FinancialTransactionUpdateManyMutationInput, FinancialTransactionUncheckedUpdateManyInput>
    /**
     * Filter which FinancialTransactions to update
     */
    where?: FinancialTransactionWhereInput
    /**
     * Limit how many FinancialTransactions to update.
     */
    limit?: number
  }

  /**
   * FinancialTransaction upsert
   */
  export type FinancialTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * The filter to search for the FinancialTransaction to update in case it exists.
     */
    where: FinancialTransactionWhereUniqueInput
    /**
     * In case the FinancialTransaction found by the `where` argument doesn't exist, create a new FinancialTransaction with this data.
     */
    create: XOR<FinancialTransactionCreateInput, FinancialTransactionUncheckedCreateInput>
    /**
     * In case the FinancialTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialTransactionUpdateInput, FinancialTransactionUncheckedUpdateInput>
  }

  /**
   * FinancialTransaction delete
   */
  export type FinancialTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Filter which FinancialTransaction to delete.
     */
    where: FinancialTransactionWhereUniqueInput
  }

  /**
   * FinancialTransaction deleteMany
   */
  export type FinancialTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialTransactions to delete
     */
    where?: FinancialTransactionWhereInput
    /**
     * Limit how many FinancialTransactions to delete.
     */
    limit?: number
  }

  /**
   * FinancialTransaction without action
   */
  export type FinancialTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
  }


  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractMinAggregateOutputType = {
    id: string | null
    clientName: string | null
    document: string | null
    title: string | null
    content: string | null
    status: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractMaxAggregateOutputType = {
    id: string | null
    clientName: string | null
    document: string | null
    title: string | null
    content: string | null
    status: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    clientName: number
    document: number
    title: number
    content: number
    status: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContractMinAggregateInputType = {
    id?: true
    clientName?: true
    document?: true
    title?: true
    content?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    clientName?: true
    document?: true
    title?: true
    content?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    clientName?: true
    document?: true
    title?: true
    content?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: string
    clientName: string
    document: string
    title: string
    content: string
    status: string
    startDate: Date
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ContractCountAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientName?: boolean
    document?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientName?: boolean
    document?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientName?: boolean
    document?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectScalar = {
    id?: boolean
    clientName?: boolean
    document?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientName" | "document" | "title" | "content" | "status" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["contract"]>

  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientName: string
      document: string
      title: string
      content: string
      status: string
      startDate: Date
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }

  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractFindUniqueArgs>(args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractFindFirstArgs>(args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractFindManyArgs>(args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
     */
    create<T extends ContractCreateArgs>(args: SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contracts.
     * @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractCreateManyArgs>(args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contracts and returns the data saved in the database.
     * @param {ContractCreateManyAndReturnArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
     */
    delete<T extends ContractDeleteArgs>(args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractUpdateArgs>(args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDeleteManyArgs>(args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractUpdateManyArgs>(args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts and returns the data updated in the database.
     * @param {ContractUpdateManyAndReturnArgs} args - Arguments to update many Contracts.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContractUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     */
    upsert<T extends ContractUpsertArgs>(args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
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
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Contract model
   */
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'String'>
    readonly clientName: FieldRef<"Contract", 'String'>
    readonly document: FieldRef<"Contract", 'String'>
    readonly title: FieldRef<"Contract", 'String'>
    readonly content: FieldRef<"Contract", 'String'>
    readonly status: FieldRef<"Contract", 'String'>
    readonly startDate: FieldRef<"Contract", 'DateTime'>
    readonly endDate: FieldRef<"Contract", 'DateTime'>
    readonly createdAt: FieldRef<"Contract", 'DateTime'>
    readonly updatedAt: FieldRef<"Contract", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }

  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract createManyAndReturn
   */
  export type ContractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
  }

  /**
   * Contract updateManyAndReturn
   */
  export type ContractUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
  }

  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }

  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to delete.
     */
    limit?: number
  }

  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
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
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cpf: 'cpf',
    type: 'type',
    role: 'role',
    baseSalary: 'baseSalary',
    transportDaily: 'transportDaily',
    gasAssistance: 'gasAssistance',
    pixKey: 'pixKey',
    paymentMethod: 'paymentMethod',
    bankName: 'bankName',
    accountType: 'accountType',
    agency: 'agency',
    accountNumber: 'accountNumber',
    recurringDeductions: 'recurringDeductions',
    temporaryDeductions: 'temporaryDeductions',
    temporaryDeductionsDesc: 'temporaryDeductionsDesc',
    temporaryDeductionsExpiration: 'temporaryDeductionsExpiration',
    hourlyRate: 'hourlyRate',
    cestaBasica: 'cestaBasica',
    isAulista: 'isAulista',
    salaryAdvance: 'salaryAdvance',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const PayrollScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    month: 'month',
    year: 'year',
    baseSalary: 'baseSalary',
    workingDays: 'workingDays',
    transportTotal: 'transportTotal',
    absences: 'absences',
    absenceDeduction: 'absenceDeduction',
    absencesVT: 'absencesVT',
    transportDeduction: 'transportDeduction',
    otherDeductions: 'otherDeductions',
    bonuses: 'bonuses',
    grossEarnings: 'grossEarnings',
    inssDeduction: 'inssDeduction',
    irrfDeduction: 'irrfDeduction',
    fgtsValue: 'fgtsValue',
    salaryAdvance: 'salaryAdvance',
    hoursAulista: 'hoursAulista',
    netTotal: 'netTotal',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayrollScalarFieldEnum = (typeof PayrollScalarFieldEnum)[keyof typeof PayrollScalarFieldEnum]


  export const PayrollAdvanceScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    month: 'month',
    year: 'year',
    amount: 'amount',
    status: 'status',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayrollAdvanceScalarFieldEnum = (typeof PayrollAdvanceScalarFieldEnum)[keyof typeof PayrollAdvanceScalarFieldEnum]


  export const FinancialTransactionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    type: 'type',
    amount: 'amount',
    category: 'category',
    date: 'date',
    status: 'status',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FinancialTransactionScalarFieldEnum = (typeof FinancialTransactionScalarFieldEnum)[keyof typeof FinancialTransactionScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    id: 'id',
    clientName: 'clientName',
    document: 'document',
    title: 'title',
    content: 'content',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


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
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
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
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    name?: StringFilter<"Employee"> | string
    cpf?: StringFilter<"Employee"> | string
    type?: StringFilter<"Employee"> | string
    role?: StringFilter<"Employee"> | string
    baseSalary?: FloatFilter<"Employee"> | number
    transportDaily?: FloatNullableFilter<"Employee"> | number | null
    gasAssistance?: FloatNullableFilter<"Employee"> | number | null
    pixKey?: StringNullableFilter<"Employee"> | string | null
    paymentMethod?: StringFilter<"Employee"> | string
    bankName?: StringNullableFilter<"Employee"> | string | null
    accountType?: StringNullableFilter<"Employee"> | string | null
    agency?: StringNullableFilter<"Employee"> | string | null
    accountNumber?: StringNullableFilter<"Employee"> | string | null
    recurringDeductions?: FloatFilter<"Employee"> | number
    temporaryDeductions?: FloatFilter<"Employee"> | number
    temporaryDeductionsDesc?: StringNullableFilter<"Employee"> | string | null
    temporaryDeductionsExpiration?: StringNullableFilter<"Employee"> | string | null
    hourlyRate?: FloatNullableFilter<"Employee"> | number | null
    cestaBasica?: FloatNullableFilter<"Employee"> | number | null
    isAulista?: BoolFilter<"Employee"> | boolean
    salaryAdvance?: FloatFilter<"Employee"> | number
    active?: BoolFilter<"Employee"> | boolean
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    payrolls?: PayrollListRelationFilter
    advances?: PayrollAdvanceListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    type?: SortOrder
    role?: SortOrder
    baseSalary?: SortOrder
    transportDaily?: SortOrderInput | SortOrder
    gasAssistance?: SortOrderInput | SortOrder
    pixKey?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    bankName?: SortOrderInput | SortOrder
    accountType?: SortOrderInput | SortOrder
    agency?: SortOrderInput | SortOrder
    accountNumber?: SortOrderInput | SortOrder
    recurringDeductions?: SortOrder
    temporaryDeductions?: SortOrder
    temporaryDeductionsDesc?: SortOrderInput | SortOrder
    temporaryDeductionsExpiration?: SortOrderInput | SortOrder
    hourlyRate?: SortOrderInput | SortOrder
    cestaBasica?: SortOrderInput | SortOrder
    isAulista?: SortOrder
    salaryAdvance?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payrolls?: PayrollOrderByRelationAggregateInput
    advances?: PayrollAdvanceOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    type?: StringFilter<"Employee"> | string
    role?: StringFilter<"Employee"> | string
    baseSalary?: FloatFilter<"Employee"> | number
    transportDaily?: FloatNullableFilter<"Employee"> | number | null
    gasAssistance?: FloatNullableFilter<"Employee"> | number | null
    pixKey?: StringNullableFilter<"Employee"> | string | null
    paymentMethod?: StringFilter<"Employee"> | string
    bankName?: StringNullableFilter<"Employee"> | string | null
    accountType?: StringNullableFilter<"Employee"> | string | null
    agency?: StringNullableFilter<"Employee"> | string | null
    accountNumber?: StringNullableFilter<"Employee"> | string | null
    recurringDeductions?: FloatFilter<"Employee"> | number
    temporaryDeductions?: FloatFilter<"Employee"> | number
    temporaryDeductionsDesc?: StringNullableFilter<"Employee"> | string | null
    temporaryDeductionsExpiration?: StringNullableFilter<"Employee"> | string | null
    hourlyRate?: FloatNullableFilter<"Employee"> | number | null
    cestaBasica?: FloatNullableFilter<"Employee"> | number | null
    isAulista?: BoolFilter<"Employee"> | boolean
    salaryAdvance?: FloatFilter<"Employee"> | number
    active?: BoolFilter<"Employee"> | boolean
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    payrolls?: PayrollListRelationFilter
    advances?: PayrollAdvanceListRelationFilter
  }, "id" | "cpf">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    type?: SortOrder
    role?: SortOrder
    baseSalary?: SortOrder
    transportDaily?: SortOrderInput | SortOrder
    gasAssistance?: SortOrderInput | SortOrder
    pixKey?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    bankName?: SortOrderInput | SortOrder
    accountType?: SortOrderInput | SortOrder
    agency?: SortOrderInput | SortOrder
    accountNumber?: SortOrderInput | SortOrder
    recurringDeductions?: SortOrder
    temporaryDeductions?: SortOrder
    temporaryDeductionsDesc?: SortOrderInput | SortOrder
    temporaryDeductionsExpiration?: SortOrderInput | SortOrder
    hourlyRate?: SortOrderInput | SortOrder
    cestaBasica?: SortOrderInput | SortOrder
    isAulista?: SortOrder
    salaryAdvance?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    name?: StringWithAggregatesFilter<"Employee"> | string
    cpf?: StringWithAggregatesFilter<"Employee"> | string
    type?: StringWithAggregatesFilter<"Employee"> | string
    role?: StringWithAggregatesFilter<"Employee"> | string
    baseSalary?: FloatWithAggregatesFilter<"Employee"> | number
    transportDaily?: FloatNullableWithAggregatesFilter<"Employee"> | number | null
    gasAssistance?: FloatNullableWithAggregatesFilter<"Employee"> | number | null
    pixKey?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    paymentMethod?: StringWithAggregatesFilter<"Employee"> | string
    bankName?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    accountType?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    agency?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    accountNumber?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    recurringDeductions?: FloatWithAggregatesFilter<"Employee"> | number
    temporaryDeductions?: FloatWithAggregatesFilter<"Employee"> | number
    temporaryDeductionsDesc?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    temporaryDeductionsExpiration?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    hourlyRate?: FloatNullableWithAggregatesFilter<"Employee"> | number | null
    cestaBasica?: FloatNullableWithAggregatesFilter<"Employee"> | number | null
    isAulista?: BoolWithAggregatesFilter<"Employee"> | boolean
    salaryAdvance?: FloatWithAggregatesFilter<"Employee"> | number
    active?: BoolWithAggregatesFilter<"Employee"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type PayrollWhereInput = {
    AND?: PayrollWhereInput | PayrollWhereInput[]
    OR?: PayrollWhereInput[]
    NOT?: PayrollWhereInput | PayrollWhereInput[]
    id?: StringFilter<"Payroll"> | string
    employeeId?: StringFilter<"Payroll"> | string
    month?: IntFilter<"Payroll"> | number
    year?: IntFilter<"Payroll"> | number
    baseSalary?: FloatFilter<"Payroll"> | number
    workingDays?: IntNullableFilter<"Payroll"> | number | null
    transportTotal?: FloatNullableFilter<"Payroll"> | number | null
    absences?: IntFilter<"Payroll"> | number
    absenceDeduction?: FloatFilter<"Payroll"> | number
    absencesVT?: IntFilter<"Payroll"> | number
    transportDeduction?: FloatFilter<"Payroll"> | number
    otherDeductions?: FloatFilter<"Payroll"> | number
    bonuses?: FloatFilter<"Payroll"> | number
    grossEarnings?: FloatFilter<"Payroll"> | number
    inssDeduction?: FloatFilter<"Payroll"> | number
    irrfDeduction?: FloatFilter<"Payroll"> | number
    fgtsValue?: FloatFilter<"Payroll"> | number
    salaryAdvance?: FloatFilter<"Payroll"> | number
    hoursAulista?: FloatNullableFilter<"Payroll"> | number | null
    netTotal?: FloatFilter<"Payroll"> | number
    status?: StringFilter<"Payroll"> | string
    createdAt?: DateTimeFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeFilter<"Payroll"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type PayrollOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    baseSalary?: SortOrder
    workingDays?: SortOrderInput | SortOrder
    transportTotal?: SortOrderInput | SortOrder
    absences?: SortOrder
    absenceDeduction?: SortOrder
    absencesVT?: SortOrder
    transportDeduction?: SortOrder
    otherDeductions?: SortOrder
    bonuses?: SortOrder
    grossEarnings?: SortOrder
    inssDeduction?: SortOrder
    irrfDeduction?: SortOrder
    fgtsValue?: SortOrder
    salaryAdvance?: SortOrder
    hoursAulista?: SortOrderInput | SortOrder
    netTotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type PayrollWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeId_month_year?: PayrollEmployeeIdMonthYearCompoundUniqueInput
    AND?: PayrollWhereInput | PayrollWhereInput[]
    OR?: PayrollWhereInput[]
    NOT?: PayrollWhereInput | PayrollWhereInput[]
    employeeId?: StringFilter<"Payroll"> | string
    month?: IntFilter<"Payroll"> | number
    year?: IntFilter<"Payroll"> | number
    baseSalary?: FloatFilter<"Payroll"> | number
    workingDays?: IntNullableFilter<"Payroll"> | number | null
    transportTotal?: FloatNullableFilter<"Payroll"> | number | null
    absences?: IntFilter<"Payroll"> | number
    absenceDeduction?: FloatFilter<"Payroll"> | number
    absencesVT?: IntFilter<"Payroll"> | number
    transportDeduction?: FloatFilter<"Payroll"> | number
    otherDeductions?: FloatFilter<"Payroll"> | number
    bonuses?: FloatFilter<"Payroll"> | number
    grossEarnings?: FloatFilter<"Payroll"> | number
    inssDeduction?: FloatFilter<"Payroll"> | number
    irrfDeduction?: FloatFilter<"Payroll"> | number
    fgtsValue?: FloatFilter<"Payroll"> | number
    salaryAdvance?: FloatFilter<"Payroll"> | number
    hoursAulista?: FloatNullableFilter<"Payroll"> | number | null
    netTotal?: FloatFilter<"Payroll"> | number
    status?: StringFilter<"Payroll"> | string
    createdAt?: DateTimeFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeFilter<"Payroll"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id" | "employeeId_month_year">

  export type PayrollOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    baseSalary?: SortOrder
    workingDays?: SortOrderInput | SortOrder
    transportTotal?: SortOrderInput | SortOrder
    absences?: SortOrder
    absenceDeduction?: SortOrder
    absencesVT?: SortOrder
    transportDeduction?: SortOrder
    otherDeductions?: SortOrder
    bonuses?: SortOrder
    grossEarnings?: SortOrder
    inssDeduction?: SortOrder
    irrfDeduction?: SortOrder
    fgtsValue?: SortOrder
    salaryAdvance?: SortOrder
    hoursAulista?: SortOrderInput | SortOrder
    netTotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayrollCountOrderByAggregateInput
    _avg?: PayrollAvgOrderByAggregateInput
    _max?: PayrollMaxOrderByAggregateInput
    _min?: PayrollMinOrderByAggregateInput
    _sum?: PayrollSumOrderByAggregateInput
  }

  export type PayrollScalarWhereWithAggregatesInput = {
    AND?: PayrollScalarWhereWithAggregatesInput | PayrollScalarWhereWithAggregatesInput[]
    OR?: PayrollScalarWhereWithAggregatesInput[]
    NOT?: PayrollScalarWhereWithAggregatesInput | PayrollScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payroll"> | string
    employeeId?: StringWithAggregatesFilter<"Payroll"> | string
    month?: IntWithAggregatesFilter<"Payroll"> | number
    year?: IntWithAggregatesFilter<"Payroll"> | number
    baseSalary?: FloatWithAggregatesFilter<"Payroll"> | number
    workingDays?: IntNullableWithAggregatesFilter<"Payroll"> | number | null
    transportTotal?: FloatNullableWithAggregatesFilter<"Payroll"> | number | null
    absences?: IntWithAggregatesFilter<"Payroll"> | number
    absenceDeduction?: FloatWithAggregatesFilter<"Payroll"> | number
    absencesVT?: IntWithAggregatesFilter<"Payroll"> | number
    transportDeduction?: FloatWithAggregatesFilter<"Payroll"> | number
    otherDeductions?: FloatWithAggregatesFilter<"Payroll"> | number
    bonuses?: FloatWithAggregatesFilter<"Payroll"> | number
    grossEarnings?: FloatWithAggregatesFilter<"Payroll"> | number
    inssDeduction?: FloatWithAggregatesFilter<"Payroll"> | number
    irrfDeduction?: FloatWithAggregatesFilter<"Payroll"> | number
    fgtsValue?: FloatWithAggregatesFilter<"Payroll"> | number
    salaryAdvance?: FloatWithAggregatesFilter<"Payroll"> | number
    hoursAulista?: FloatNullableWithAggregatesFilter<"Payroll"> | number | null
    netTotal?: FloatWithAggregatesFilter<"Payroll"> | number
    status?: StringWithAggregatesFilter<"Payroll"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payroll"> | Date | string
  }

  export type PayrollAdvanceWhereInput = {
    AND?: PayrollAdvanceWhereInput | PayrollAdvanceWhereInput[]
    OR?: PayrollAdvanceWhereInput[]
    NOT?: PayrollAdvanceWhereInput | PayrollAdvanceWhereInput[]
    id?: StringFilter<"PayrollAdvance"> | string
    employeeId?: StringFilter<"PayrollAdvance"> | string
    month?: IntFilter<"PayrollAdvance"> | number
    year?: IntFilter<"PayrollAdvance"> | number
    amount?: FloatFilter<"PayrollAdvance"> | number
    status?: StringFilter<"PayrollAdvance"> | string
    paidAt?: DateTimeNullableFilter<"PayrollAdvance"> | Date | string | null
    createdAt?: DateTimeFilter<"PayrollAdvance"> | Date | string
    updatedAt?: DateTimeFilter<"PayrollAdvance"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type PayrollAdvanceOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type PayrollAdvanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeId_month_year?: PayrollAdvanceEmployeeIdMonthYearCompoundUniqueInput
    AND?: PayrollAdvanceWhereInput | PayrollAdvanceWhereInput[]
    OR?: PayrollAdvanceWhereInput[]
    NOT?: PayrollAdvanceWhereInput | PayrollAdvanceWhereInput[]
    employeeId?: StringFilter<"PayrollAdvance"> | string
    month?: IntFilter<"PayrollAdvance"> | number
    year?: IntFilter<"PayrollAdvance"> | number
    amount?: FloatFilter<"PayrollAdvance"> | number
    status?: StringFilter<"PayrollAdvance"> | string
    paidAt?: DateTimeNullableFilter<"PayrollAdvance"> | Date | string | null
    createdAt?: DateTimeFilter<"PayrollAdvance"> | Date | string
    updatedAt?: DateTimeFilter<"PayrollAdvance"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id" | "employeeId_month_year">

  export type PayrollAdvanceOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayrollAdvanceCountOrderByAggregateInput
    _avg?: PayrollAdvanceAvgOrderByAggregateInput
    _max?: PayrollAdvanceMaxOrderByAggregateInput
    _min?: PayrollAdvanceMinOrderByAggregateInput
    _sum?: PayrollAdvanceSumOrderByAggregateInput
  }

  export type PayrollAdvanceScalarWhereWithAggregatesInput = {
    AND?: PayrollAdvanceScalarWhereWithAggregatesInput | PayrollAdvanceScalarWhereWithAggregatesInput[]
    OR?: PayrollAdvanceScalarWhereWithAggregatesInput[]
    NOT?: PayrollAdvanceScalarWhereWithAggregatesInput | PayrollAdvanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PayrollAdvance"> | string
    employeeId?: StringWithAggregatesFilter<"PayrollAdvance"> | string
    month?: IntWithAggregatesFilter<"PayrollAdvance"> | number
    year?: IntWithAggregatesFilter<"PayrollAdvance"> | number
    amount?: FloatWithAggregatesFilter<"PayrollAdvance"> | number
    status?: StringWithAggregatesFilter<"PayrollAdvance"> | string
    paidAt?: DateTimeNullableWithAggregatesFilter<"PayrollAdvance"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PayrollAdvance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PayrollAdvance"> | Date | string
  }

  export type FinancialTransactionWhereInput = {
    AND?: FinancialTransactionWhereInput | FinancialTransactionWhereInput[]
    OR?: FinancialTransactionWhereInput[]
    NOT?: FinancialTransactionWhereInput | FinancialTransactionWhereInput[]
    id?: StringFilter<"FinancialTransaction"> | string
    title?: StringFilter<"FinancialTransaction"> | string
    type?: StringFilter<"FinancialTransaction"> | string
    amount?: FloatFilter<"FinancialTransaction"> | number
    category?: StringFilter<"FinancialTransaction"> | string
    date?: DateTimeFilter<"FinancialTransaction"> | Date | string
    status?: StringFilter<"FinancialTransaction"> | string
    description?: StringNullableFilter<"FinancialTransaction"> | string | null
    createdAt?: DateTimeFilter<"FinancialTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"FinancialTransaction"> | Date | string
  }

  export type FinancialTransactionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    date?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinancialTransactionWhereInput | FinancialTransactionWhereInput[]
    OR?: FinancialTransactionWhereInput[]
    NOT?: FinancialTransactionWhereInput | FinancialTransactionWhereInput[]
    title?: StringFilter<"FinancialTransaction"> | string
    type?: StringFilter<"FinancialTransaction"> | string
    amount?: FloatFilter<"FinancialTransaction"> | number
    category?: StringFilter<"FinancialTransaction"> | string
    date?: DateTimeFilter<"FinancialTransaction"> | Date | string
    status?: StringFilter<"FinancialTransaction"> | string
    description?: StringNullableFilter<"FinancialTransaction"> | string | null
    createdAt?: DateTimeFilter<"FinancialTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"FinancialTransaction"> | Date | string
  }, "id">

  export type FinancialTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    date?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FinancialTransactionCountOrderByAggregateInput
    _avg?: FinancialTransactionAvgOrderByAggregateInput
    _max?: FinancialTransactionMaxOrderByAggregateInput
    _min?: FinancialTransactionMinOrderByAggregateInput
    _sum?: FinancialTransactionSumOrderByAggregateInput
  }

  export type FinancialTransactionScalarWhereWithAggregatesInput = {
    AND?: FinancialTransactionScalarWhereWithAggregatesInput | FinancialTransactionScalarWhereWithAggregatesInput[]
    OR?: FinancialTransactionScalarWhereWithAggregatesInput[]
    NOT?: FinancialTransactionScalarWhereWithAggregatesInput | FinancialTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    title?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    type?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    amount?: FloatWithAggregatesFilter<"FinancialTransaction"> | number
    category?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    date?: DateTimeWithAggregatesFilter<"FinancialTransaction"> | Date | string
    status?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    description?: StringNullableWithAggregatesFilter<"FinancialTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FinancialTransaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FinancialTransaction"> | Date | string
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: StringFilter<"Contract"> | string
    clientName?: StringFilter<"Contract"> | string
    document?: StringFilter<"Contract"> | string
    title?: StringFilter<"Contract"> | string
    content?: StringFilter<"Contract"> | string
    status?: StringFilter<"Contract"> | string
    startDate?: DateTimeFilter<"Contract"> | Date | string
    endDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    clientName?: SortOrder
    document?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    clientName?: StringFilter<"Contract"> | string
    document?: StringFilter<"Contract"> | string
    title?: StringFilter<"Contract"> | string
    content?: StringFilter<"Contract"> | string
    status?: StringFilter<"Contract"> | string
    startDate?: DateTimeFilter<"Contract"> | Date | string
    endDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
  }, "id">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    clientName?: SortOrder
    document?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contract"> | string
    clientName?: StringWithAggregatesFilter<"Contract"> | string
    document?: StringWithAggregatesFilter<"Contract"> | string
    title?: StringWithAggregatesFilter<"Contract"> | string
    content?: StringWithAggregatesFilter<"Contract"> | string
    status?: StringWithAggregatesFilter<"Contract"> | string
    startDate?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Contract"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    transportDaily?: number | null
    gasAssistance?: number | null
    pixKey?: string | null
    paymentMethod?: string
    bankName?: string | null
    accountType?: string | null
    agency?: string | null
    accountNumber?: string | null
    recurringDeductions?: number
    temporaryDeductions?: number
    temporaryDeductionsDesc?: string | null
    temporaryDeductionsExpiration?: string | null
    hourlyRate?: number | null
    cestaBasica?: number | null
    isAulista?: boolean
    salaryAdvance?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payrolls?: PayrollCreateNestedManyWithoutEmployeeInput
    advances?: PayrollAdvanceCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    transportDaily?: number | null
    gasAssistance?: number | null
    pixKey?: string | null
    paymentMethod?: string
    bankName?: string | null
    accountType?: string | null
    agency?: string | null
    accountNumber?: string | null
    recurringDeductions?: number
    temporaryDeductions?: number
    temporaryDeductionsDesc?: string | null
    temporaryDeductionsExpiration?: string | null
    hourlyRate?: number | null
    cestaBasica?: number | null
    isAulista?: boolean
    salaryAdvance?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payrolls?: PayrollUncheckedCreateNestedManyWithoutEmployeeInput
    advances?: PayrollAdvanceUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    transportDaily?: NullableFloatFieldUpdateOperationsInput | number | null
    gasAssistance?: NullableFloatFieldUpdateOperationsInput | number | null
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    agency?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    recurringDeductions?: FloatFieldUpdateOperationsInput | number
    temporaryDeductions?: FloatFieldUpdateOperationsInput | number
    temporaryDeductionsDesc?: NullableStringFieldUpdateOperationsInput | string | null
    temporaryDeductionsExpiration?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cestaBasica?: NullableFloatFieldUpdateOperationsInput | number | null
    isAulista?: BoolFieldUpdateOperationsInput | boolean
    salaryAdvance?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payrolls?: PayrollUpdateManyWithoutEmployeeNestedInput
    advances?: PayrollAdvanceUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    transportDaily?: NullableFloatFieldUpdateOperationsInput | number | null
    gasAssistance?: NullableFloatFieldUpdateOperationsInput | number | null
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    agency?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    recurringDeductions?: FloatFieldUpdateOperationsInput | number
    temporaryDeductions?: FloatFieldUpdateOperationsInput | number
    temporaryDeductionsDesc?: NullableStringFieldUpdateOperationsInput | string | null
    temporaryDeductionsExpiration?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cestaBasica?: NullableFloatFieldUpdateOperationsInput | number | null
    isAulista?: BoolFieldUpdateOperationsInput | boolean
    salaryAdvance?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payrolls?: PayrollUncheckedUpdateManyWithoutEmployeeNestedInput
    advances?: PayrollAdvanceUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    transportDaily?: number | null
    gasAssistance?: number | null
    pixKey?: string | null
    paymentMethod?: string
    bankName?: string | null
    accountType?: string | null
    agency?: string | null
    accountNumber?: string | null
    recurringDeductions?: number
    temporaryDeductions?: number
    temporaryDeductionsDesc?: string | null
    temporaryDeductionsExpiration?: string | null
    hourlyRate?: number | null
    cestaBasica?: number | null
    isAulista?: boolean
    salaryAdvance?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    transportDaily?: NullableFloatFieldUpdateOperationsInput | number | null
    gasAssistance?: NullableFloatFieldUpdateOperationsInput | number | null
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    agency?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    recurringDeductions?: FloatFieldUpdateOperationsInput | number
    temporaryDeductions?: FloatFieldUpdateOperationsInput | number
    temporaryDeductionsDesc?: NullableStringFieldUpdateOperationsInput | string | null
    temporaryDeductionsExpiration?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cestaBasica?: NullableFloatFieldUpdateOperationsInput | number | null
    isAulista?: BoolFieldUpdateOperationsInput | boolean
    salaryAdvance?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    transportDaily?: NullableFloatFieldUpdateOperationsInput | number | null
    gasAssistance?: NullableFloatFieldUpdateOperationsInput | number | null
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    agency?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    recurringDeductions?: FloatFieldUpdateOperationsInput | number
    temporaryDeductions?: FloatFieldUpdateOperationsInput | number
    temporaryDeductionsDesc?: NullableStringFieldUpdateOperationsInput | string | null
    temporaryDeductionsExpiration?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cestaBasica?: NullableFloatFieldUpdateOperationsInput | number | null
    isAulista?: BoolFieldUpdateOperationsInput | boolean
    salaryAdvance?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollCreateInput = {
    id?: string
    month: number
    year: number
    baseSalary: number
    workingDays?: number | null
    transportTotal?: number | null
    absences?: number
    absenceDeduction?: number
    absencesVT?: number
    transportDeduction?: number
    otherDeductions?: number
    bonuses?: number
    grossEarnings?: number
    inssDeduction?: number
    irrfDeduction?: number
    fgtsValue?: number
    salaryAdvance?: number
    hoursAulista?: number | null
    netTotal: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutPayrollsInput
  }

  export type PayrollUncheckedCreateInput = {
    id?: string
    employeeId: string
    month: number
    year: number
    baseSalary: number
    workingDays?: number | null
    transportTotal?: number | null
    absences?: number
    absenceDeduction?: number
    absencesVT?: number
    transportDeduction?: number
    otherDeductions?: number
    bonuses?: number
    grossEarnings?: number
    inssDeduction?: number
    irrfDeduction?: number
    fgtsValue?: number
    salaryAdvance?: number
    hoursAulista?: number | null
    netTotal: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    baseSalary?: FloatFieldUpdateOperationsInput | number
    workingDays?: NullableIntFieldUpdateOperationsInput | number | null
    transportTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    absences?: IntFieldUpdateOperationsInput | number
    absenceDeduction?: FloatFieldUpdateOperationsInput | number
    absencesVT?: IntFieldUpdateOperationsInput | number
    transportDeduction?: FloatFieldUpdateOperationsInput | number
    otherDeductions?: FloatFieldUpdateOperationsInput | number
    bonuses?: FloatFieldUpdateOperationsInput | number
    grossEarnings?: FloatFieldUpdateOperationsInput | number
    inssDeduction?: FloatFieldUpdateOperationsInput | number
    irrfDeduction?: FloatFieldUpdateOperationsInput | number
    fgtsValue?: FloatFieldUpdateOperationsInput | number
    salaryAdvance?: FloatFieldUpdateOperationsInput | number
    hoursAulista?: NullableFloatFieldUpdateOperationsInput | number | null
    netTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutPayrollsNestedInput
  }

  export type PayrollUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    baseSalary?: FloatFieldUpdateOperationsInput | number
    workingDays?: NullableIntFieldUpdateOperationsInput | number | null
    transportTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    absences?: IntFieldUpdateOperationsInput | number
    absenceDeduction?: FloatFieldUpdateOperationsInput | number
    absencesVT?: IntFieldUpdateOperationsInput | number
    transportDeduction?: FloatFieldUpdateOperationsInput | number
    otherDeductions?: FloatFieldUpdateOperationsInput | number
    bonuses?: FloatFieldUpdateOperationsInput | number
    grossEarnings?: FloatFieldUpdateOperationsInput | number
    inssDeduction?: FloatFieldUpdateOperationsInput | number
    irrfDeduction?: FloatFieldUpdateOperationsInput | number
    fgtsValue?: FloatFieldUpdateOperationsInput | number
    salaryAdvance?: FloatFieldUpdateOperationsInput | number
    hoursAulista?: NullableFloatFieldUpdateOperationsInput | number | null
    netTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollCreateManyInput = {
    id?: string
    employeeId: string
    month: number
    year: number
    baseSalary: number
    workingDays?: number | null
    transportTotal?: number | null
    absences?: number
    absenceDeduction?: number
    absencesVT?: number
    transportDeduction?: number
    otherDeductions?: number
    bonuses?: number
    grossEarnings?: number
    inssDeduction?: number
    irrfDeduction?: number
    fgtsValue?: number
    salaryAdvance?: number
    hoursAulista?: number | null
    netTotal: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    baseSalary?: FloatFieldUpdateOperationsInput | number
    workingDays?: NullableIntFieldUpdateOperationsInput | number | null
    transportTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    absences?: IntFieldUpdateOperationsInput | number
    absenceDeduction?: FloatFieldUpdateOperationsInput | number
    absencesVT?: IntFieldUpdateOperationsInput | number
    transportDeduction?: FloatFieldUpdateOperationsInput | number
    otherDeductions?: FloatFieldUpdateOperationsInput | number
    bonuses?: FloatFieldUpdateOperationsInput | number
    grossEarnings?: FloatFieldUpdateOperationsInput | number
    inssDeduction?: FloatFieldUpdateOperationsInput | number
    irrfDeduction?: FloatFieldUpdateOperationsInput | number
    fgtsValue?: FloatFieldUpdateOperationsInput | number
    salaryAdvance?: FloatFieldUpdateOperationsInput | number
    hoursAulista?: NullableFloatFieldUpdateOperationsInput | number | null
    netTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    baseSalary?: FloatFieldUpdateOperationsInput | number
    workingDays?: NullableIntFieldUpdateOperationsInput | number | null
    transportTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    absences?: IntFieldUpdateOperationsInput | number
    absenceDeduction?: FloatFieldUpdateOperationsInput | number
    absencesVT?: IntFieldUpdateOperationsInput | number
    transportDeduction?: FloatFieldUpdateOperationsInput | number
    otherDeductions?: FloatFieldUpdateOperationsInput | number
    bonuses?: FloatFieldUpdateOperationsInput | number
    grossEarnings?: FloatFieldUpdateOperationsInput | number
    inssDeduction?: FloatFieldUpdateOperationsInput | number
    irrfDeduction?: FloatFieldUpdateOperationsInput | number
    fgtsValue?: FloatFieldUpdateOperationsInput | number
    salaryAdvance?: FloatFieldUpdateOperationsInput | number
    hoursAulista?: NullableFloatFieldUpdateOperationsInput | number | null
    netTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollAdvanceCreateInput = {
    id?: string
    month: number
    year: number
    amount: number
    status?: string
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutAdvancesInput
  }

  export type PayrollAdvanceUncheckedCreateInput = {
    id?: string
    employeeId: string
    month: number
    year: number
    amount: number
    status?: string
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollAdvanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutAdvancesNestedInput
  }

  export type PayrollAdvanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollAdvanceCreateManyInput = {
    id?: string
    employeeId: string
    month: number
    year: number
    amount: number
    status?: string
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollAdvanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollAdvanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialTransactionCreateInput = {
    id?: string
    title: string
    type: string
    amount: number
    category: string
    date: Date | string
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialTransactionUncheckedCreateInput = {
    id?: string
    title: string
    type: string
    amount: number
    category: string
    date: Date | string
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialTransactionCreateManyInput = {
    id?: string
    title: string
    type: string
    amount: number
    category: string
    date: Date | string
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateInput = {
    id?: string
    clientName: string
    document: string
    title: string
    content: string
    status?: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUncheckedCreateInput = {
    id?: string
    clientName: string
    document: string
    title: string
    content: string
    status?: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateManyInput = {
    id?: string
    clientName: string
    document: string
    title: string
    content: string
    status?: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PayrollListRelationFilter = {
    every?: PayrollWhereInput
    some?: PayrollWhereInput
    none?: PayrollWhereInput
  }

  export type PayrollAdvanceListRelationFilter = {
    every?: PayrollAdvanceWhereInput
    some?: PayrollAdvanceWhereInput
    none?: PayrollAdvanceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PayrollOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayrollAdvanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    type?: SortOrder
    role?: SortOrder
    baseSalary?: SortOrder
    transportDaily?: SortOrder
    gasAssistance?: SortOrder
    pixKey?: SortOrder
    paymentMethod?: SortOrder
    bankName?: SortOrder
    accountType?: SortOrder
    agency?: SortOrder
    accountNumber?: SortOrder
    recurringDeductions?: SortOrder
    temporaryDeductions?: SortOrder
    temporaryDeductionsDesc?: SortOrder
    temporaryDeductionsExpiration?: SortOrder
    hourlyRate?: SortOrder
    cestaBasica?: SortOrder
    isAulista?: SortOrder
    salaryAdvance?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    baseSalary?: SortOrder
    transportDaily?: SortOrder
    gasAssistance?: SortOrder
    recurringDeductions?: SortOrder
    temporaryDeductions?: SortOrder
    hourlyRate?: SortOrder
    cestaBasica?: SortOrder
    salaryAdvance?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    type?: SortOrder
    role?: SortOrder
    baseSalary?: SortOrder
    transportDaily?: SortOrder
    gasAssistance?: SortOrder
    pixKey?: SortOrder
    paymentMethod?: SortOrder
    bankName?: SortOrder
    accountType?: SortOrder
    agency?: SortOrder
    accountNumber?: SortOrder
    recurringDeductions?: SortOrder
    temporaryDeductions?: SortOrder
    temporaryDeductionsDesc?: SortOrder
    temporaryDeductionsExpiration?: SortOrder
    hourlyRate?: SortOrder
    cestaBasica?: SortOrder
    isAulista?: SortOrder
    salaryAdvance?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    type?: SortOrder
    role?: SortOrder
    baseSalary?: SortOrder
    transportDaily?: SortOrder
    gasAssistance?: SortOrder
    pixKey?: SortOrder
    paymentMethod?: SortOrder
    bankName?: SortOrder
    accountType?: SortOrder
    agency?: SortOrder
    accountNumber?: SortOrder
    recurringDeductions?: SortOrder
    temporaryDeductions?: SortOrder
    temporaryDeductionsDesc?: SortOrder
    temporaryDeductionsExpiration?: SortOrder
    hourlyRate?: SortOrder
    cestaBasica?: SortOrder
    isAulista?: SortOrder
    salaryAdvance?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    baseSalary?: SortOrder
    transportDaily?: SortOrder
    gasAssistance?: SortOrder
    recurringDeductions?: SortOrder
    temporaryDeductions?: SortOrder
    hourlyRate?: SortOrder
    cestaBasica?: SortOrder
    salaryAdvance?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type PayrollEmployeeIdMonthYearCompoundUniqueInput = {
    employeeId: string
    month: number
    year: number
  }

  export type PayrollCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    baseSalary?: SortOrder
    workingDays?: SortOrder
    transportTotal?: SortOrder
    absences?: SortOrder
    absenceDeduction?: SortOrder
    absencesVT?: SortOrder
    transportDeduction?: SortOrder
    otherDeductions?: SortOrder
    bonuses?: SortOrder
    grossEarnings?: SortOrder
    inssDeduction?: SortOrder
    irrfDeduction?: SortOrder
    fgtsValue?: SortOrder
    salaryAdvance?: SortOrder
    hoursAulista?: SortOrder
    netTotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollAvgOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
    baseSalary?: SortOrder
    workingDays?: SortOrder
    transportTotal?: SortOrder
    absences?: SortOrder
    absenceDeduction?: SortOrder
    absencesVT?: SortOrder
    transportDeduction?: SortOrder
    otherDeductions?: SortOrder
    bonuses?: SortOrder
    grossEarnings?: SortOrder
    inssDeduction?: SortOrder
    irrfDeduction?: SortOrder
    fgtsValue?: SortOrder
    salaryAdvance?: SortOrder
    hoursAulista?: SortOrder
    netTotal?: SortOrder
  }

  export type PayrollMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    baseSalary?: SortOrder
    workingDays?: SortOrder
    transportTotal?: SortOrder
    absences?: SortOrder
    absenceDeduction?: SortOrder
    absencesVT?: SortOrder
    transportDeduction?: SortOrder
    otherDeductions?: SortOrder
    bonuses?: SortOrder
    grossEarnings?: SortOrder
    inssDeduction?: SortOrder
    irrfDeduction?: SortOrder
    fgtsValue?: SortOrder
    salaryAdvance?: SortOrder
    hoursAulista?: SortOrder
    netTotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    baseSalary?: SortOrder
    workingDays?: SortOrder
    transportTotal?: SortOrder
    absences?: SortOrder
    absenceDeduction?: SortOrder
    absencesVT?: SortOrder
    transportDeduction?: SortOrder
    otherDeductions?: SortOrder
    bonuses?: SortOrder
    grossEarnings?: SortOrder
    inssDeduction?: SortOrder
    irrfDeduction?: SortOrder
    fgtsValue?: SortOrder
    salaryAdvance?: SortOrder
    hoursAulista?: SortOrder
    netTotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollSumOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
    baseSalary?: SortOrder
    workingDays?: SortOrder
    transportTotal?: SortOrder
    absences?: SortOrder
    absenceDeduction?: SortOrder
    absencesVT?: SortOrder
    transportDeduction?: SortOrder
    otherDeductions?: SortOrder
    bonuses?: SortOrder
    grossEarnings?: SortOrder
    inssDeduction?: SortOrder
    irrfDeduction?: SortOrder
    fgtsValue?: SortOrder
    salaryAdvance?: SortOrder
    hoursAulista?: SortOrder
    netTotal?: SortOrder
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

  export type PayrollAdvanceEmployeeIdMonthYearCompoundUniqueInput = {
    employeeId: string
    month: number
    year: number
  }

  export type PayrollAdvanceCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollAdvanceAvgOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
    amount?: SortOrder
  }

  export type PayrollAdvanceMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollAdvanceMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollAdvanceSumOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
    amount?: SortOrder
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

  export type FinancialTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    date?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FinancialTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    date?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    date?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    clientName?: SortOrder
    document?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    clientName?: SortOrder
    document?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    clientName?: SortOrder
    document?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PayrollCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayrollCreateWithoutEmployeeInput, PayrollUncheckedCreateWithoutEmployeeInput> | PayrollCreateWithoutEmployeeInput[] | PayrollUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutEmployeeInput | PayrollCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayrollCreateManyEmployeeInputEnvelope
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
  }

  export type PayrollAdvanceCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayrollAdvanceCreateWithoutEmployeeInput, PayrollAdvanceUncheckedCreateWithoutEmployeeInput> | PayrollAdvanceCreateWithoutEmployeeInput[] | PayrollAdvanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollAdvanceCreateOrConnectWithoutEmployeeInput | PayrollAdvanceCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayrollAdvanceCreateManyEmployeeInputEnvelope
    connect?: PayrollAdvanceWhereUniqueInput | PayrollAdvanceWhereUniqueInput[]
  }

  export type PayrollUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayrollCreateWithoutEmployeeInput, PayrollUncheckedCreateWithoutEmployeeInput> | PayrollCreateWithoutEmployeeInput[] | PayrollUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutEmployeeInput | PayrollCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayrollCreateManyEmployeeInputEnvelope
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
  }

  export type PayrollAdvanceUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayrollAdvanceCreateWithoutEmployeeInput, PayrollAdvanceUncheckedCreateWithoutEmployeeInput> | PayrollAdvanceCreateWithoutEmployeeInput[] | PayrollAdvanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollAdvanceCreateOrConnectWithoutEmployeeInput | PayrollAdvanceCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayrollAdvanceCreateManyEmployeeInputEnvelope
    connect?: PayrollAdvanceWhereUniqueInput | PayrollAdvanceWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PayrollUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayrollCreateWithoutEmployeeInput, PayrollUncheckedCreateWithoutEmployeeInput> | PayrollCreateWithoutEmployeeInput[] | PayrollUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutEmployeeInput | PayrollCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayrollUpsertWithWhereUniqueWithoutEmployeeInput | PayrollUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayrollCreateManyEmployeeInputEnvelope
    set?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    disconnect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    delete?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    update?: PayrollUpdateWithWhereUniqueWithoutEmployeeInput | PayrollUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayrollUpdateManyWithWhereWithoutEmployeeInput | PayrollUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
  }

  export type PayrollAdvanceUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayrollAdvanceCreateWithoutEmployeeInput, PayrollAdvanceUncheckedCreateWithoutEmployeeInput> | PayrollAdvanceCreateWithoutEmployeeInput[] | PayrollAdvanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollAdvanceCreateOrConnectWithoutEmployeeInput | PayrollAdvanceCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayrollAdvanceUpsertWithWhereUniqueWithoutEmployeeInput | PayrollAdvanceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayrollAdvanceCreateManyEmployeeInputEnvelope
    set?: PayrollAdvanceWhereUniqueInput | PayrollAdvanceWhereUniqueInput[]
    disconnect?: PayrollAdvanceWhereUniqueInput | PayrollAdvanceWhereUniqueInput[]
    delete?: PayrollAdvanceWhereUniqueInput | PayrollAdvanceWhereUniqueInput[]
    connect?: PayrollAdvanceWhereUniqueInput | PayrollAdvanceWhereUniqueInput[]
    update?: PayrollAdvanceUpdateWithWhereUniqueWithoutEmployeeInput | PayrollAdvanceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayrollAdvanceUpdateManyWithWhereWithoutEmployeeInput | PayrollAdvanceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayrollAdvanceScalarWhereInput | PayrollAdvanceScalarWhereInput[]
  }

  export type PayrollUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayrollCreateWithoutEmployeeInput, PayrollUncheckedCreateWithoutEmployeeInput> | PayrollCreateWithoutEmployeeInput[] | PayrollUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutEmployeeInput | PayrollCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayrollUpsertWithWhereUniqueWithoutEmployeeInput | PayrollUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayrollCreateManyEmployeeInputEnvelope
    set?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    disconnect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    delete?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    update?: PayrollUpdateWithWhereUniqueWithoutEmployeeInput | PayrollUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayrollUpdateManyWithWhereWithoutEmployeeInput | PayrollUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
  }

  export type PayrollAdvanceUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayrollAdvanceCreateWithoutEmployeeInput, PayrollAdvanceUncheckedCreateWithoutEmployeeInput> | PayrollAdvanceCreateWithoutEmployeeInput[] | PayrollAdvanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollAdvanceCreateOrConnectWithoutEmployeeInput | PayrollAdvanceCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayrollAdvanceUpsertWithWhereUniqueWithoutEmployeeInput | PayrollAdvanceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayrollAdvanceCreateManyEmployeeInputEnvelope
    set?: PayrollAdvanceWhereUniqueInput | PayrollAdvanceWhereUniqueInput[]
    disconnect?: PayrollAdvanceWhereUniqueInput | PayrollAdvanceWhereUniqueInput[]
    delete?: PayrollAdvanceWhereUniqueInput | PayrollAdvanceWhereUniqueInput[]
    connect?: PayrollAdvanceWhereUniqueInput | PayrollAdvanceWhereUniqueInput[]
    update?: PayrollAdvanceUpdateWithWhereUniqueWithoutEmployeeInput | PayrollAdvanceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayrollAdvanceUpdateManyWithWhereWithoutEmployeeInput | PayrollAdvanceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayrollAdvanceScalarWhereInput | PayrollAdvanceScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutPayrollsInput = {
    create?: XOR<EmployeeCreateWithoutPayrollsInput, EmployeeUncheckedCreateWithoutPayrollsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayrollsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeeUpdateOneRequiredWithoutPayrollsNestedInput = {
    create?: XOR<EmployeeCreateWithoutPayrollsInput, EmployeeUncheckedCreateWithoutPayrollsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayrollsInput
    upsert?: EmployeeUpsertWithoutPayrollsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutPayrollsInput, EmployeeUpdateWithoutPayrollsInput>, EmployeeUncheckedUpdateWithoutPayrollsInput>
  }

  export type EmployeeCreateNestedOneWithoutAdvancesInput = {
    create?: XOR<EmployeeCreateWithoutAdvancesInput, EmployeeUncheckedCreateWithoutAdvancesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAdvancesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EmployeeUpdateOneRequiredWithoutAdvancesNestedInput = {
    create?: XOR<EmployeeCreateWithoutAdvancesInput, EmployeeUncheckedCreateWithoutAdvancesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAdvancesInput
    upsert?: EmployeeUpsertWithoutAdvancesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAdvancesInput, EmployeeUpdateWithoutAdvancesInput>, EmployeeUncheckedUpdateWithoutAdvancesInput>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PayrollCreateWithoutEmployeeInput = {
    id?: string
    month: number
    year: number
    baseSalary: number
    workingDays?: number | null
    transportTotal?: number | null
    absences?: number
    absenceDeduction?: number
    absencesVT?: number
    transportDeduction?: number
    otherDeductions?: number
    bonuses?: number
    grossEarnings?: number
    inssDeduction?: number
    irrfDeduction?: number
    fgtsValue?: number
    salaryAdvance?: number
    hoursAulista?: number | null
    netTotal: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollUncheckedCreateWithoutEmployeeInput = {
    id?: string
    month: number
    year: number
    baseSalary: number
    workingDays?: number | null
    transportTotal?: number | null
    absences?: number
    absenceDeduction?: number
    absencesVT?: number
    transportDeduction?: number
    otherDeductions?: number
    bonuses?: number
    grossEarnings?: number
    inssDeduction?: number
    irrfDeduction?: number
    fgtsValue?: number
    salaryAdvance?: number
    hoursAulista?: number | null
    netTotal: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollCreateOrConnectWithoutEmployeeInput = {
    where: PayrollWhereUniqueInput
    create: XOR<PayrollCreateWithoutEmployeeInput, PayrollUncheckedCreateWithoutEmployeeInput>
  }

  export type PayrollCreateManyEmployeeInputEnvelope = {
    data: PayrollCreateManyEmployeeInput | PayrollCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type PayrollAdvanceCreateWithoutEmployeeInput = {
    id?: string
    month: number
    year: number
    amount: number
    status?: string
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollAdvanceUncheckedCreateWithoutEmployeeInput = {
    id?: string
    month: number
    year: number
    amount: number
    status?: string
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollAdvanceCreateOrConnectWithoutEmployeeInput = {
    where: PayrollAdvanceWhereUniqueInput
    create: XOR<PayrollAdvanceCreateWithoutEmployeeInput, PayrollAdvanceUncheckedCreateWithoutEmployeeInput>
  }

  export type PayrollAdvanceCreateManyEmployeeInputEnvelope = {
    data: PayrollAdvanceCreateManyEmployeeInput | PayrollAdvanceCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type PayrollUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: PayrollWhereUniqueInput
    update: XOR<PayrollUpdateWithoutEmployeeInput, PayrollUncheckedUpdateWithoutEmployeeInput>
    create: XOR<PayrollCreateWithoutEmployeeInput, PayrollUncheckedCreateWithoutEmployeeInput>
  }

  export type PayrollUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: PayrollWhereUniqueInput
    data: XOR<PayrollUpdateWithoutEmployeeInput, PayrollUncheckedUpdateWithoutEmployeeInput>
  }

  export type PayrollUpdateManyWithWhereWithoutEmployeeInput = {
    where: PayrollScalarWhereInput
    data: XOR<PayrollUpdateManyMutationInput, PayrollUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type PayrollScalarWhereInput = {
    AND?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
    OR?: PayrollScalarWhereInput[]
    NOT?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
    id?: StringFilter<"Payroll"> | string
    employeeId?: StringFilter<"Payroll"> | string
    month?: IntFilter<"Payroll"> | number
    year?: IntFilter<"Payroll"> | number
    baseSalary?: FloatFilter<"Payroll"> | number
    workingDays?: IntNullableFilter<"Payroll"> | number | null
    transportTotal?: FloatNullableFilter<"Payroll"> | number | null
    absences?: IntFilter<"Payroll"> | number
    absenceDeduction?: FloatFilter<"Payroll"> | number
    absencesVT?: IntFilter<"Payroll"> | number
    transportDeduction?: FloatFilter<"Payroll"> | number
    otherDeductions?: FloatFilter<"Payroll"> | number
    bonuses?: FloatFilter<"Payroll"> | number
    grossEarnings?: FloatFilter<"Payroll"> | number
    inssDeduction?: FloatFilter<"Payroll"> | number
    irrfDeduction?: FloatFilter<"Payroll"> | number
    fgtsValue?: FloatFilter<"Payroll"> | number
    salaryAdvance?: FloatFilter<"Payroll"> | number
    hoursAulista?: FloatNullableFilter<"Payroll"> | number | null
    netTotal?: FloatFilter<"Payroll"> | number
    status?: StringFilter<"Payroll"> | string
    createdAt?: DateTimeFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeFilter<"Payroll"> | Date | string
  }

  export type PayrollAdvanceUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: PayrollAdvanceWhereUniqueInput
    update: XOR<PayrollAdvanceUpdateWithoutEmployeeInput, PayrollAdvanceUncheckedUpdateWithoutEmployeeInput>
    create: XOR<PayrollAdvanceCreateWithoutEmployeeInput, PayrollAdvanceUncheckedCreateWithoutEmployeeInput>
  }

  export type PayrollAdvanceUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: PayrollAdvanceWhereUniqueInput
    data: XOR<PayrollAdvanceUpdateWithoutEmployeeInput, PayrollAdvanceUncheckedUpdateWithoutEmployeeInput>
  }

  export type PayrollAdvanceUpdateManyWithWhereWithoutEmployeeInput = {
    where: PayrollAdvanceScalarWhereInput
    data: XOR<PayrollAdvanceUpdateManyMutationInput, PayrollAdvanceUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type PayrollAdvanceScalarWhereInput = {
    AND?: PayrollAdvanceScalarWhereInput | PayrollAdvanceScalarWhereInput[]
    OR?: PayrollAdvanceScalarWhereInput[]
    NOT?: PayrollAdvanceScalarWhereInput | PayrollAdvanceScalarWhereInput[]
    id?: StringFilter<"PayrollAdvance"> | string
    employeeId?: StringFilter<"PayrollAdvance"> | string
    month?: IntFilter<"PayrollAdvance"> | number
    year?: IntFilter<"PayrollAdvance"> | number
    amount?: FloatFilter<"PayrollAdvance"> | number
    status?: StringFilter<"PayrollAdvance"> | string
    paidAt?: DateTimeNullableFilter<"PayrollAdvance"> | Date | string | null
    createdAt?: DateTimeFilter<"PayrollAdvance"> | Date | string
    updatedAt?: DateTimeFilter<"PayrollAdvance"> | Date | string
  }

  export type EmployeeCreateWithoutPayrollsInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    transportDaily?: number | null
    gasAssistance?: number | null
    pixKey?: string | null
    paymentMethod?: string
    bankName?: string | null
    accountType?: string | null
    agency?: string | null
    accountNumber?: string | null
    recurringDeductions?: number
    temporaryDeductions?: number
    temporaryDeductionsDesc?: string | null
    temporaryDeductionsExpiration?: string | null
    hourlyRate?: number | null
    cestaBasica?: number | null
    isAulista?: boolean
    salaryAdvance?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    advances?: PayrollAdvanceCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutPayrollsInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    transportDaily?: number | null
    gasAssistance?: number | null
    pixKey?: string | null
    paymentMethod?: string
    bankName?: string | null
    accountType?: string | null
    agency?: string | null
    accountNumber?: string | null
    recurringDeductions?: number
    temporaryDeductions?: number
    temporaryDeductionsDesc?: string | null
    temporaryDeductionsExpiration?: string | null
    hourlyRate?: number | null
    cestaBasica?: number | null
    isAulista?: boolean
    salaryAdvance?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    advances?: PayrollAdvanceUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutPayrollsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPayrollsInput, EmployeeUncheckedCreateWithoutPayrollsInput>
  }

  export type EmployeeUpsertWithoutPayrollsInput = {
    update: XOR<EmployeeUpdateWithoutPayrollsInput, EmployeeUncheckedUpdateWithoutPayrollsInput>
    create: XOR<EmployeeCreateWithoutPayrollsInput, EmployeeUncheckedCreateWithoutPayrollsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutPayrollsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutPayrollsInput, EmployeeUncheckedUpdateWithoutPayrollsInput>
  }

  export type EmployeeUpdateWithoutPayrollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    transportDaily?: NullableFloatFieldUpdateOperationsInput | number | null
    gasAssistance?: NullableFloatFieldUpdateOperationsInput | number | null
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    agency?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    recurringDeductions?: FloatFieldUpdateOperationsInput | number
    temporaryDeductions?: FloatFieldUpdateOperationsInput | number
    temporaryDeductionsDesc?: NullableStringFieldUpdateOperationsInput | string | null
    temporaryDeductionsExpiration?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cestaBasica?: NullableFloatFieldUpdateOperationsInput | number | null
    isAulista?: BoolFieldUpdateOperationsInput | boolean
    salaryAdvance?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advances?: PayrollAdvanceUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutPayrollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    transportDaily?: NullableFloatFieldUpdateOperationsInput | number | null
    gasAssistance?: NullableFloatFieldUpdateOperationsInput | number | null
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    agency?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    recurringDeductions?: FloatFieldUpdateOperationsInput | number
    temporaryDeductions?: FloatFieldUpdateOperationsInput | number
    temporaryDeductionsDesc?: NullableStringFieldUpdateOperationsInput | string | null
    temporaryDeductionsExpiration?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cestaBasica?: NullableFloatFieldUpdateOperationsInput | number | null
    isAulista?: BoolFieldUpdateOperationsInput | boolean
    salaryAdvance?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advances?: PayrollAdvanceUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateWithoutAdvancesInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    transportDaily?: number | null
    gasAssistance?: number | null
    pixKey?: string | null
    paymentMethod?: string
    bankName?: string | null
    accountType?: string | null
    agency?: string | null
    accountNumber?: string | null
    recurringDeductions?: number
    temporaryDeductions?: number
    temporaryDeductionsDesc?: string | null
    temporaryDeductionsExpiration?: string | null
    hourlyRate?: number | null
    cestaBasica?: number | null
    isAulista?: boolean
    salaryAdvance?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payrolls?: PayrollCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutAdvancesInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    transportDaily?: number | null
    gasAssistance?: number | null
    pixKey?: string | null
    paymentMethod?: string
    bankName?: string | null
    accountType?: string | null
    agency?: string | null
    accountNumber?: string | null
    recurringDeductions?: number
    temporaryDeductions?: number
    temporaryDeductionsDesc?: string | null
    temporaryDeductionsExpiration?: string | null
    hourlyRate?: number | null
    cestaBasica?: number | null
    isAulista?: boolean
    salaryAdvance?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payrolls?: PayrollUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutAdvancesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAdvancesInput, EmployeeUncheckedCreateWithoutAdvancesInput>
  }

  export type EmployeeUpsertWithoutAdvancesInput = {
    update: XOR<EmployeeUpdateWithoutAdvancesInput, EmployeeUncheckedUpdateWithoutAdvancesInput>
    create: XOR<EmployeeCreateWithoutAdvancesInput, EmployeeUncheckedCreateWithoutAdvancesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAdvancesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAdvancesInput, EmployeeUncheckedUpdateWithoutAdvancesInput>
  }

  export type EmployeeUpdateWithoutAdvancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    transportDaily?: NullableFloatFieldUpdateOperationsInput | number | null
    gasAssistance?: NullableFloatFieldUpdateOperationsInput | number | null
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    agency?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    recurringDeductions?: FloatFieldUpdateOperationsInput | number
    temporaryDeductions?: FloatFieldUpdateOperationsInput | number
    temporaryDeductionsDesc?: NullableStringFieldUpdateOperationsInput | string | null
    temporaryDeductionsExpiration?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cestaBasica?: NullableFloatFieldUpdateOperationsInput | number | null
    isAulista?: BoolFieldUpdateOperationsInput | boolean
    salaryAdvance?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payrolls?: PayrollUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAdvancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    transportDaily?: NullableFloatFieldUpdateOperationsInput | number | null
    gasAssistance?: NullableFloatFieldUpdateOperationsInput | number | null
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    agency?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    recurringDeductions?: FloatFieldUpdateOperationsInput | number
    temporaryDeductions?: FloatFieldUpdateOperationsInput | number
    temporaryDeductionsDesc?: NullableStringFieldUpdateOperationsInput | string | null
    temporaryDeductionsExpiration?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cestaBasica?: NullableFloatFieldUpdateOperationsInput | number | null
    isAulista?: BoolFieldUpdateOperationsInput | boolean
    salaryAdvance?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payrolls?: PayrollUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type PayrollCreateManyEmployeeInput = {
    id?: string
    month: number
    year: number
    baseSalary: number
    workingDays?: number | null
    transportTotal?: number | null
    absences?: number
    absenceDeduction?: number
    absencesVT?: number
    transportDeduction?: number
    otherDeductions?: number
    bonuses?: number
    grossEarnings?: number
    inssDeduction?: number
    irrfDeduction?: number
    fgtsValue?: number
    salaryAdvance?: number
    hoursAulista?: number | null
    netTotal: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollAdvanceCreateManyEmployeeInput = {
    id?: string
    month: number
    year: number
    amount: number
    status?: string
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    baseSalary?: FloatFieldUpdateOperationsInput | number
    workingDays?: NullableIntFieldUpdateOperationsInput | number | null
    transportTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    absences?: IntFieldUpdateOperationsInput | number
    absenceDeduction?: FloatFieldUpdateOperationsInput | number
    absencesVT?: IntFieldUpdateOperationsInput | number
    transportDeduction?: FloatFieldUpdateOperationsInput | number
    otherDeductions?: FloatFieldUpdateOperationsInput | number
    bonuses?: FloatFieldUpdateOperationsInput | number
    grossEarnings?: FloatFieldUpdateOperationsInput | number
    inssDeduction?: FloatFieldUpdateOperationsInput | number
    irrfDeduction?: FloatFieldUpdateOperationsInput | number
    fgtsValue?: FloatFieldUpdateOperationsInput | number
    salaryAdvance?: FloatFieldUpdateOperationsInput | number
    hoursAulista?: NullableFloatFieldUpdateOperationsInput | number | null
    netTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    baseSalary?: FloatFieldUpdateOperationsInput | number
    workingDays?: NullableIntFieldUpdateOperationsInput | number | null
    transportTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    absences?: IntFieldUpdateOperationsInput | number
    absenceDeduction?: FloatFieldUpdateOperationsInput | number
    absencesVT?: IntFieldUpdateOperationsInput | number
    transportDeduction?: FloatFieldUpdateOperationsInput | number
    otherDeductions?: FloatFieldUpdateOperationsInput | number
    bonuses?: FloatFieldUpdateOperationsInput | number
    grossEarnings?: FloatFieldUpdateOperationsInput | number
    inssDeduction?: FloatFieldUpdateOperationsInput | number
    irrfDeduction?: FloatFieldUpdateOperationsInput | number
    fgtsValue?: FloatFieldUpdateOperationsInput | number
    salaryAdvance?: FloatFieldUpdateOperationsInput | number
    hoursAulista?: NullableFloatFieldUpdateOperationsInput | number | null
    netTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    baseSalary?: FloatFieldUpdateOperationsInput | number
    workingDays?: NullableIntFieldUpdateOperationsInput | number | null
    transportTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    absences?: IntFieldUpdateOperationsInput | number
    absenceDeduction?: FloatFieldUpdateOperationsInput | number
    absencesVT?: IntFieldUpdateOperationsInput | number
    transportDeduction?: FloatFieldUpdateOperationsInput | number
    otherDeductions?: FloatFieldUpdateOperationsInput | number
    bonuses?: FloatFieldUpdateOperationsInput | number
    grossEarnings?: FloatFieldUpdateOperationsInput | number
    inssDeduction?: FloatFieldUpdateOperationsInput | number
    irrfDeduction?: FloatFieldUpdateOperationsInput | number
    fgtsValue?: FloatFieldUpdateOperationsInput | number
    salaryAdvance?: FloatFieldUpdateOperationsInput | number
    hoursAulista?: NullableFloatFieldUpdateOperationsInput | number | null
    netTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollAdvanceUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollAdvanceUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollAdvanceUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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