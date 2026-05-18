
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
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model EmployeeSubject
 * 
 */
export type EmployeeSubject = $Result.DefaultSelection<Prisma.$EmployeeSubjectPayload>
/**
 * Model TeachingAssignment
 * 
 */
export type TeachingAssignment = $Result.DefaultSelection<Prisma.$TeachingAssignmentPayload>
/**
 * Model SalaryAdjustment
 * 
 */
export type SalaryAdjustment = $Result.DefaultSelection<Prisma.$SalaryAdjustmentPayload>
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
 * Model Rescisao
 * 
 */
export type Rescisao = $Result.DefaultSelection<Prisma.$RescisaoPayload>

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
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeSubject`: Exposes CRUD operations for the **EmployeeSubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeSubjects
    * const employeeSubjects = await prisma.employeeSubject.findMany()
    * ```
    */
  get employeeSubject(): Prisma.EmployeeSubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teachingAssignment`: Exposes CRUD operations for the **TeachingAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeachingAssignments
    * const teachingAssignments = await prisma.teachingAssignment.findMany()
    * ```
    */
  get teachingAssignment(): Prisma.TeachingAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salaryAdjustment`: Exposes CRUD operations for the **SalaryAdjustment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalaryAdjustments
    * const salaryAdjustments = await prisma.salaryAdjustment.findMany()
    * ```
    */
  get salaryAdjustment(): Prisma.SalaryAdjustmentDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.rescisao`: Exposes CRUD operations for the **Rescisao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rescisaos
    * const rescisaos = await prisma.rescisao.findMany()
    * ```
    */
  get rescisao(): Prisma.RescisaoDelegate<ExtArgs, ClientOptions>;
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
    Subject: 'Subject',
    EmployeeSubject: 'EmployeeSubject',
    TeachingAssignment: 'TeachingAssignment',
    SalaryAdjustment: 'SalaryAdjustment',
    Payroll: 'Payroll',
    PayrollAdvance: 'PayrollAdvance',
    FinancialTransaction: 'FinancialTransaction',
    Contract: 'Contract',
    Rescisao: 'Rescisao'
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
      modelProps: "user" | "employee" | "subject" | "employeeSubject" | "teachingAssignment" | "salaryAdjustment" | "payroll" | "payrollAdvance" | "financialTransaction" | "contract" | "rescisao"
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
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      EmployeeSubject: {
        payload: Prisma.$EmployeeSubjectPayload<ExtArgs>
        fields: Prisma.EmployeeSubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeSubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeSubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSubjectPayload>
          }
          findFirst: {
            args: Prisma.EmployeeSubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeSubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSubjectPayload>
          }
          findMany: {
            args: Prisma.EmployeeSubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSubjectPayload>[]
          }
          create: {
            args: Prisma.EmployeeSubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSubjectPayload>
          }
          createMany: {
            args: Prisma.EmployeeSubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeSubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSubjectPayload>[]
          }
          delete: {
            args: Prisma.EmployeeSubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSubjectPayload>
          }
          update: {
            args: Prisma.EmployeeSubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSubjectPayload>
          }
          deleteMany: {
            args: Prisma.EmployeeSubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeSubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeSubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSubjectPayload>[]
          }
          upsert: {
            args: Prisma.EmployeeSubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSubjectPayload>
          }
          aggregate: {
            args: Prisma.EmployeeSubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeSubject>
          }
          groupBy: {
            args: Prisma.EmployeeSubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeSubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeSubjectCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeSubjectCountAggregateOutputType> | number
          }
        }
      }
      TeachingAssignment: {
        payload: Prisma.$TeachingAssignmentPayload<ExtArgs>
        fields: Prisma.TeachingAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeachingAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeachingAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>
          }
          findFirst: {
            args: Prisma.TeachingAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeachingAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>
          }
          findMany: {
            args: Prisma.TeachingAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>[]
          }
          create: {
            args: Prisma.TeachingAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>
          }
          createMany: {
            args: Prisma.TeachingAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeachingAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>[]
          }
          delete: {
            args: Prisma.TeachingAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>
          }
          update: {
            args: Prisma.TeachingAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.TeachingAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeachingAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeachingAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.TeachingAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>
          }
          aggregate: {
            args: Prisma.TeachingAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeachingAssignment>
          }
          groupBy: {
            args: Prisma.TeachingAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeachingAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeachingAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<TeachingAssignmentCountAggregateOutputType> | number
          }
        }
      }
      SalaryAdjustment: {
        payload: Prisma.$SalaryAdjustmentPayload<ExtArgs>
        fields: Prisma.SalaryAdjustmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaryAdjustmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryAdjustmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaryAdjustmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryAdjustmentPayload>
          }
          findFirst: {
            args: Prisma.SalaryAdjustmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryAdjustmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaryAdjustmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryAdjustmentPayload>
          }
          findMany: {
            args: Prisma.SalaryAdjustmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryAdjustmentPayload>[]
          }
          create: {
            args: Prisma.SalaryAdjustmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryAdjustmentPayload>
          }
          createMany: {
            args: Prisma.SalaryAdjustmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalaryAdjustmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryAdjustmentPayload>[]
          }
          delete: {
            args: Prisma.SalaryAdjustmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryAdjustmentPayload>
          }
          update: {
            args: Prisma.SalaryAdjustmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryAdjustmentPayload>
          }
          deleteMany: {
            args: Prisma.SalaryAdjustmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaryAdjustmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalaryAdjustmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryAdjustmentPayload>[]
          }
          upsert: {
            args: Prisma.SalaryAdjustmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryAdjustmentPayload>
          }
          aggregate: {
            args: Prisma.SalaryAdjustmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalaryAdjustment>
          }
          groupBy: {
            args: Prisma.SalaryAdjustmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaryAdjustmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalaryAdjustmentCountArgs<ExtArgs>
            result: $Utils.Optional<SalaryAdjustmentCountAggregateOutputType> | number
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
      Rescisao: {
        payload: Prisma.$RescisaoPayload<ExtArgs>
        fields: Prisma.RescisaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RescisaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescisaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RescisaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescisaoPayload>
          }
          findFirst: {
            args: Prisma.RescisaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescisaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RescisaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescisaoPayload>
          }
          findMany: {
            args: Prisma.RescisaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescisaoPayload>[]
          }
          create: {
            args: Prisma.RescisaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescisaoPayload>
          }
          createMany: {
            args: Prisma.RescisaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RescisaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescisaoPayload>[]
          }
          delete: {
            args: Prisma.RescisaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescisaoPayload>
          }
          update: {
            args: Prisma.RescisaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescisaoPayload>
          }
          deleteMany: {
            args: Prisma.RescisaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RescisaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RescisaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescisaoPayload>[]
          }
          upsert: {
            args: Prisma.RescisaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescisaoPayload>
          }
          aggregate: {
            args: Prisma.RescisaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRescisao>
          }
          groupBy: {
            args: Prisma.RescisaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RescisaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RescisaoCountArgs<ExtArgs>
            result: $Utils.Optional<RescisaoCountAggregateOutputType> | number
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
    subject?: SubjectOmit
    employeeSubject?: EmployeeSubjectOmit
    teachingAssignment?: TeachingAssignmentOmit
    salaryAdjustment?: SalaryAdjustmentOmit
    payroll?: PayrollOmit
    payrollAdvance?: PayrollAdvanceOmit
    financialTransaction?: FinancialTransactionOmit
    contract?: ContractOmit
    rescisao?: RescisaoOmit
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
    rescisoes: number
    employeeSubjects: number
    teachingAssignments: number
    salaryAdjustments: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payrolls?: boolean | EmployeeCountOutputTypeCountPayrollsArgs
    advances?: boolean | EmployeeCountOutputTypeCountAdvancesArgs
    rescisoes?: boolean | EmployeeCountOutputTypeCountRescisoesArgs
    employeeSubjects?: boolean | EmployeeCountOutputTypeCountEmployeeSubjectsArgs
    teachingAssignments?: boolean | EmployeeCountOutputTypeCountTeachingAssignmentsArgs
    salaryAdjustments?: boolean | EmployeeCountOutputTypeCountSalaryAdjustmentsArgs
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
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountRescisoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RescisaoWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountEmployeeSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeSubjectWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountTeachingAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingAssignmentWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountSalaryAdjustmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaryAdjustmentWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    employeeSubjects: number
    teachingAssignments: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employeeSubjects?: boolean | SubjectCountOutputTypeCountEmployeeSubjectsArgs
    teachingAssignments?: boolean | SubjectCountOutputTypeCountTeachingAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountEmployeeSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeSubjectWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountTeachingAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingAssignmentWhereInput
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
    profilePhotoUrl: string | null
    startDate: Date | null
    eatsAtSchool: boolean | null
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
    profilePhotoUrl: string | null
    startDate: Date | null
    eatsAtSchool: boolean | null
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
    profilePhotoUrl: number
    startDate: number
    eatsAtSchool: number
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
    profilePhotoUrl?: true
    startDate?: true
    eatsAtSchool?: true
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
    profilePhotoUrl?: true
    startDate?: true
    eatsAtSchool?: true
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
    profilePhotoUrl?: true
    startDate?: true
    eatsAtSchool?: true
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
    profilePhotoUrl: string | null
    startDate: Date | null
    eatsAtSchool: boolean
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
    profilePhotoUrl?: boolean
    startDate?: boolean
    eatsAtSchool?: boolean
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
    rescisoes?: boolean | Employee$rescisoesArgs<ExtArgs>
    employeeSubjects?: boolean | Employee$employeeSubjectsArgs<ExtArgs>
    teachingAssignments?: boolean | Employee$teachingAssignmentsArgs<ExtArgs>
    salaryAdjustments?: boolean | Employee$salaryAdjustmentsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    type?: boolean
    role?: boolean
    baseSalary?: boolean
    profilePhotoUrl?: boolean
    startDate?: boolean
    eatsAtSchool?: boolean
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
    profilePhotoUrl?: boolean
    startDate?: boolean
    eatsAtSchool?: boolean
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
    profilePhotoUrl?: boolean
    startDate?: boolean
    eatsAtSchool?: boolean
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

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cpf" | "type" | "role" | "baseSalary" | "profilePhotoUrl" | "startDate" | "eatsAtSchool" | "transportDaily" | "gasAssistance" | "pixKey" | "paymentMethod" | "bankName" | "accountType" | "agency" | "accountNumber" | "recurringDeductions" | "temporaryDeductions" | "temporaryDeductionsDesc" | "temporaryDeductionsExpiration" | "hourlyRate" | "cestaBasica" | "isAulista" | "salaryAdvance" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payrolls?: boolean | Employee$payrollsArgs<ExtArgs>
    advances?: boolean | Employee$advancesArgs<ExtArgs>
    rescisoes?: boolean | Employee$rescisoesArgs<ExtArgs>
    employeeSubjects?: boolean | Employee$employeeSubjectsArgs<ExtArgs>
    teachingAssignments?: boolean | Employee$teachingAssignmentsArgs<ExtArgs>
    salaryAdjustments?: boolean | Employee$salaryAdjustmentsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      payrolls: Prisma.$PayrollPayload<ExtArgs>[]
      advances: Prisma.$PayrollAdvancePayload<ExtArgs>[]
      rescisoes: Prisma.$RescisaoPayload<ExtArgs>[]
      employeeSubjects: Prisma.$EmployeeSubjectPayload<ExtArgs>[]
      teachingAssignments: Prisma.$TeachingAssignmentPayload<ExtArgs>[]
      salaryAdjustments: Prisma.$SalaryAdjustmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cpf: string
      type: string
      role: string
      baseSalary: number
      profilePhotoUrl: string | null
      startDate: Date | null
      eatsAtSchool: boolean
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
    rescisoes<T extends Employee$rescisoesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$rescisoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RescisaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employeeSubjects<T extends Employee$employeeSubjectsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$employeeSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachingAssignments<T extends Employee$teachingAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$teachingAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    salaryAdjustments<T extends Employee$salaryAdjustmentsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$salaryAdjustmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryAdjustmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly profilePhotoUrl: FieldRef<"Employee", 'String'>
    readonly startDate: FieldRef<"Employee", 'DateTime'>
    readonly eatsAtSchool: FieldRef<"Employee", 'Boolean'>
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
   * Employee.rescisoes
   */
  export type Employee$rescisoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rescisao
     */
    select?: RescisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rescisao
     */
    omit?: RescisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescisaoInclude<ExtArgs> | null
    where?: RescisaoWhereInput
    orderBy?: RescisaoOrderByWithRelationInput | RescisaoOrderByWithRelationInput[]
    cursor?: RescisaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RescisaoScalarFieldEnum | RescisaoScalarFieldEnum[]
  }

  /**
   * Employee.employeeSubjects
   */
  export type Employee$employeeSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSubject
     */
    select?: EmployeeSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSubject
     */
    omit?: EmployeeSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSubjectInclude<ExtArgs> | null
    where?: EmployeeSubjectWhereInput
    orderBy?: EmployeeSubjectOrderByWithRelationInput | EmployeeSubjectOrderByWithRelationInput[]
    cursor?: EmployeeSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeSubjectScalarFieldEnum | EmployeeSubjectScalarFieldEnum[]
  }

  /**
   * Employee.teachingAssignments
   */
  export type Employee$teachingAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    where?: TeachingAssignmentWhereInput
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    cursor?: TeachingAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeachingAssignmentScalarFieldEnum | TeachingAssignmentScalarFieldEnum[]
  }

  /**
   * Employee.salaryAdjustments
   */
  export type Employee$salaryAdjustmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryAdjustment
     */
    select?: SalaryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryAdjustment
     */
    omit?: SalaryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryAdjustmentInclude<ExtArgs> | null
    where?: SalaryAdjustmentWhereInput
    orderBy?: SalaryAdjustmentOrderByWithRelationInput | SalaryAdjustmentOrderByWithRelationInput[]
    cursor?: SalaryAdjustmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalaryAdjustmentScalarFieldEnum | SalaryAdjustmentScalarFieldEnum[]
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
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubjectMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employeeSubjects?: boolean | Subject$employeeSubjectsArgs<ExtArgs>
    teachingAssignments?: boolean | Subject$teachingAssignmentsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employeeSubjects?: boolean | Subject$employeeSubjectsArgs<ExtArgs>
    teachingAssignments?: boolean | Subject$teachingAssignmentsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      employeeSubjects: Prisma.$EmployeeSubjectPayload<ExtArgs>[]
      teachingAssignments: Prisma.$TeachingAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employeeSubjects<T extends Subject$employeeSubjectsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$employeeSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachingAssignments<T extends Subject$teachingAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$teachingAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'String'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly createdAt: FieldRef<"Subject", 'DateTime'>
    readonly updatedAt: FieldRef<"Subject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.employeeSubjects
   */
  export type Subject$employeeSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSubject
     */
    select?: EmployeeSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSubject
     */
    omit?: EmployeeSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSubjectInclude<ExtArgs> | null
    where?: EmployeeSubjectWhereInput
    orderBy?: EmployeeSubjectOrderByWithRelationInput | EmployeeSubjectOrderByWithRelationInput[]
    cursor?: EmployeeSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeSubjectScalarFieldEnum | EmployeeSubjectScalarFieldEnum[]
  }

  /**
   * Subject.teachingAssignments
   */
  export type Subject$teachingAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    where?: TeachingAssignmentWhereInput
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    cursor?: TeachingAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeachingAssignmentScalarFieldEnum | TeachingAssignmentScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model EmployeeSubject
   */

  export type AggregateEmployeeSubject = {
    _count: EmployeeSubjectCountAggregateOutputType | null
    _min: EmployeeSubjectMinAggregateOutputType | null
    _max: EmployeeSubjectMaxAggregateOutputType | null
  }

  export type EmployeeSubjectMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    subjectId: string | null
    createdAt: Date | null
  }

  export type EmployeeSubjectMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    subjectId: string | null
    createdAt: Date | null
  }

  export type EmployeeSubjectCountAggregateOutputType = {
    id: number
    employeeId: number
    subjectId: number
    createdAt: number
    _all: number
  }


  export type EmployeeSubjectMinAggregateInputType = {
    id?: true
    employeeId?: true
    subjectId?: true
    createdAt?: true
  }

  export type EmployeeSubjectMaxAggregateInputType = {
    id?: true
    employeeId?: true
    subjectId?: true
    createdAt?: true
  }

  export type EmployeeSubjectCountAggregateInputType = {
    id?: true
    employeeId?: true
    subjectId?: true
    createdAt?: true
    _all?: true
  }

  export type EmployeeSubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeSubject to aggregate.
     */
    where?: EmployeeSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeSubjects to fetch.
     */
    orderBy?: EmployeeSubjectOrderByWithRelationInput | EmployeeSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeSubjects
    **/
    _count?: true | EmployeeSubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeSubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeSubjectMaxAggregateInputType
  }

  export type GetEmployeeSubjectAggregateType<T extends EmployeeSubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeSubject[P]>
      : GetScalarType<T[P], AggregateEmployeeSubject[P]>
  }




  export type EmployeeSubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeSubjectWhereInput
    orderBy?: EmployeeSubjectOrderByWithAggregationInput | EmployeeSubjectOrderByWithAggregationInput[]
    by: EmployeeSubjectScalarFieldEnum[] | EmployeeSubjectScalarFieldEnum
    having?: EmployeeSubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeSubjectCountAggregateInputType | true
    _min?: EmployeeSubjectMinAggregateInputType
    _max?: EmployeeSubjectMaxAggregateInputType
  }

  export type EmployeeSubjectGroupByOutputType = {
    id: string
    employeeId: string
    subjectId: string
    createdAt: Date
    _count: EmployeeSubjectCountAggregateOutputType | null
    _min: EmployeeSubjectMinAggregateOutputType | null
    _max: EmployeeSubjectMaxAggregateOutputType | null
  }

  type GetEmployeeSubjectGroupByPayload<T extends EmployeeSubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeSubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeSubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeSubjectGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeSubjectGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    subjectId?: boolean
    createdAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeSubject"]>

  export type EmployeeSubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    subjectId?: boolean
    createdAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeSubject"]>

  export type EmployeeSubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    subjectId?: boolean
    createdAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeSubject"]>

  export type EmployeeSubjectSelectScalar = {
    id?: boolean
    employeeId?: boolean
    subjectId?: boolean
    createdAt?: boolean
  }

  export type EmployeeSubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "subjectId" | "createdAt", ExtArgs["result"]["employeeSubject"]>
  export type EmployeeSubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type EmployeeSubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type EmployeeSubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $EmployeeSubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeSubject"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      subjectId: string
      createdAt: Date
    }, ExtArgs["result"]["employeeSubject"]>
    composites: {}
  }

  type EmployeeSubjectGetPayload<S extends boolean | null | undefined | EmployeeSubjectDefaultArgs> = $Result.GetResult<Prisma.$EmployeeSubjectPayload, S>

  type EmployeeSubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeSubjectCountAggregateInputType | true
    }

  export interface EmployeeSubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeSubject'], meta: { name: 'EmployeeSubject' } }
    /**
     * Find zero or one EmployeeSubject that matches the filter.
     * @param {EmployeeSubjectFindUniqueArgs} args - Arguments to find a EmployeeSubject
     * @example
     * // Get one EmployeeSubject
     * const employeeSubject = await prisma.employeeSubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeSubjectFindUniqueArgs>(args: SelectSubset<T, EmployeeSubjectFindUniqueArgs<ExtArgs>>): Prisma__EmployeeSubjectClient<$Result.GetResult<Prisma.$EmployeeSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployeeSubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeSubjectFindUniqueOrThrowArgs} args - Arguments to find a EmployeeSubject
     * @example
     * // Get one EmployeeSubject
     * const employeeSubject = await prisma.employeeSubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeSubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeSubjectClient<$Result.GetResult<Prisma.$EmployeeSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeSubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSubjectFindFirstArgs} args - Arguments to find a EmployeeSubject
     * @example
     * // Get one EmployeeSubject
     * const employeeSubject = await prisma.employeeSubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeSubjectFindFirstArgs>(args?: SelectSubset<T, EmployeeSubjectFindFirstArgs<ExtArgs>>): Prisma__EmployeeSubjectClient<$Result.GetResult<Prisma.$EmployeeSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeSubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSubjectFindFirstOrThrowArgs} args - Arguments to find a EmployeeSubject
     * @example
     * // Get one EmployeeSubject
     * const employeeSubject = await prisma.employeeSubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeSubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeSubjectClient<$Result.GetResult<Prisma.$EmployeeSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployeeSubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeSubjects
     * const employeeSubjects = await prisma.employeeSubject.findMany()
     * 
     * // Get first 10 EmployeeSubjects
     * const employeeSubjects = await prisma.employeeSubject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeSubjectWithIdOnly = await prisma.employeeSubject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeSubjectFindManyArgs>(args?: SelectSubset<T, EmployeeSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployeeSubject.
     * @param {EmployeeSubjectCreateArgs} args - Arguments to create a EmployeeSubject.
     * @example
     * // Create one EmployeeSubject
     * const EmployeeSubject = await prisma.employeeSubject.create({
     *   data: {
     *     // ... data to create a EmployeeSubject
     *   }
     * })
     * 
     */
    create<T extends EmployeeSubjectCreateArgs>(args: SelectSubset<T, EmployeeSubjectCreateArgs<ExtArgs>>): Prisma__EmployeeSubjectClient<$Result.GetResult<Prisma.$EmployeeSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployeeSubjects.
     * @param {EmployeeSubjectCreateManyArgs} args - Arguments to create many EmployeeSubjects.
     * @example
     * // Create many EmployeeSubjects
     * const employeeSubject = await prisma.employeeSubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeSubjectCreateManyArgs>(args?: SelectSubset<T, EmployeeSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeeSubjects and returns the data saved in the database.
     * @param {EmployeeSubjectCreateManyAndReturnArgs} args - Arguments to create many EmployeeSubjects.
     * @example
     * // Create many EmployeeSubjects
     * const employeeSubject = await prisma.employeeSubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeeSubjects and only return the `id`
     * const employeeSubjectWithIdOnly = await prisma.employeeSubject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeSubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmployeeSubject.
     * @param {EmployeeSubjectDeleteArgs} args - Arguments to delete one EmployeeSubject.
     * @example
     * // Delete one EmployeeSubject
     * const EmployeeSubject = await prisma.employeeSubject.delete({
     *   where: {
     *     // ... filter to delete one EmployeeSubject
     *   }
     * })
     * 
     */
    delete<T extends EmployeeSubjectDeleteArgs>(args: SelectSubset<T, EmployeeSubjectDeleteArgs<ExtArgs>>): Prisma__EmployeeSubjectClient<$Result.GetResult<Prisma.$EmployeeSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployeeSubject.
     * @param {EmployeeSubjectUpdateArgs} args - Arguments to update one EmployeeSubject.
     * @example
     * // Update one EmployeeSubject
     * const employeeSubject = await prisma.employeeSubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeSubjectUpdateArgs>(args: SelectSubset<T, EmployeeSubjectUpdateArgs<ExtArgs>>): Prisma__EmployeeSubjectClient<$Result.GetResult<Prisma.$EmployeeSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployeeSubjects.
     * @param {EmployeeSubjectDeleteManyArgs} args - Arguments to filter EmployeeSubjects to delete.
     * @example
     * // Delete a few EmployeeSubjects
     * const { count } = await prisma.employeeSubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeSubjectDeleteManyArgs>(args?: SelectSubset<T, EmployeeSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeSubjects
     * const employeeSubject = await prisma.employeeSubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeSubjectUpdateManyArgs>(args: SelectSubset<T, EmployeeSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeSubjects and returns the data updated in the database.
     * @param {EmployeeSubjectUpdateManyAndReturnArgs} args - Arguments to update many EmployeeSubjects.
     * @example
     * // Update many EmployeeSubjects
     * const employeeSubject = await prisma.employeeSubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployeeSubjects and only return the `id`
     * const employeeSubjectWithIdOnly = await prisma.employeeSubject.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeSubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmployeeSubject.
     * @param {EmployeeSubjectUpsertArgs} args - Arguments to update or create a EmployeeSubject.
     * @example
     * // Update or create a EmployeeSubject
     * const employeeSubject = await prisma.employeeSubject.upsert({
     *   create: {
     *     // ... data to create a EmployeeSubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeSubject we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeSubjectUpsertArgs>(args: SelectSubset<T, EmployeeSubjectUpsertArgs<ExtArgs>>): Prisma__EmployeeSubjectClient<$Result.GetResult<Prisma.$EmployeeSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployeeSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSubjectCountArgs} args - Arguments to filter EmployeeSubjects to count.
     * @example
     * // Count the number of EmployeeSubjects
     * const count = await prisma.employeeSubject.count({
     *   where: {
     *     // ... the filter for the EmployeeSubjects we want to count
     *   }
     * })
    **/
    count<T extends EmployeeSubjectCountArgs>(
      args?: Subset<T, EmployeeSubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeSubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeSubjectAggregateArgs>(args: Subset<T, EmployeeSubjectAggregateArgs>): Prisma.PrismaPromise<GetEmployeeSubjectAggregateType<T>>

    /**
     * Group by EmployeeSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSubjectGroupByArgs} args - Group by arguments.
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
      T extends EmployeeSubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeSubjectGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeSubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeSubject model
   */
  readonly fields: EmployeeSubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeSubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeSubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmployeeSubject model
   */
  interface EmployeeSubjectFieldRefs {
    readonly id: FieldRef<"EmployeeSubject", 'String'>
    readonly employeeId: FieldRef<"EmployeeSubject", 'String'>
    readonly subjectId: FieldRef<"EmployeeSubject", 'String'>
    readonly createdAt: FieldRef<"EmployeeSubject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeSubject findUnique
   */
  export type EmployeeSubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSubject
     */
    select?: EmployeeSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSubject
     */
    omit?: EmployeeSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSubjectInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeSubject to fetch.
     */
    where: EmployeeSubjectWhereUniqueInput
  }

  /**
   * EmployeeSubject findUniqueOrThrow
   */
  export type EmployeeSubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSubject
     */
    select?: EmployeeSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSubject
     */
    omit?: EmployeeSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSubjectInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeSubject to fetch.
     */
    where: EmployeeSubjectWhereUniqueInput
  }

  /**
   * EmployeeSubject findFirst
   */
  export type EmployeeSubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSubject
     */
    select?: EmployeeSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSubject
     */
    omit?: EmployeeSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSubjectInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeSubject to fetch.
     */
    where?: EmployeeSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeSubjects to fetch.
     */
    orderBy?: EmployeeSubjectOrderByWithRelationInput | EmployeeSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeSubjects.
     */
    cursor?: EmployeeSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeSubjects.
     */
    distinct?: EmployeeSubjectScalarFieldEnum | EmployeeSubjectScalarFieldEnum[]
  }

  /**
   * EmployeeSubject findFirstOrThrow
   */
  export type EmployeeSubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSubject
     */
    select?: EmployeeSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSubject
     */
    omit?: EmployeeSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSubjectInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeSubject to fetch.
     */
    where?: EmployeeSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeSubjects to fetch.
     */
    orderBy?: EmployeeSubjectOrderByWithRelationInput | EmployeeSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeSubjects.
     */
    cursor?: EmployeeSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeSubjects.
     */
    distinct?: EmployeeSubjectScalarFieldEnum | EmployeeSubjectScalarFieldEnum[]
  }

  /**
   * EmployeeSubject findMany
   */
  export type EmployeeSubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSubject
     */
    select?: EmployeeSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSubject
     */
    omit?: EmployeeSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSubjectInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeSubjects to fetch.
     */
    where?: EmployeeSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeSubjects to fetch.
     */
    orderBy?: EmployeeSubjectOrderByWithRelationInput | EmployeeSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeSubjects.
     */
    cursor?: EmployeeSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeSubjects.
     */
    skip?: number
    distinct?: EmployeeSubjectScalarFieldEnum | EmployeeSubjectScalarFieldEnum[]
  }

  /**
   * EmployeeSubject create
   */
  export type EmployeeSubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSubject
     */
    select?: EmployeeSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSubject
     */
    omit?: EmployeeSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeeSubject.
     */
    data: XOR<EmployeeSubjectCreateInput, EmployeeSubjectUncheckedCreateInput>
  }

  /**
   * EmployeeSubject createMany
   */
  export type EmployeeSubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeSubjects.
     */
    data: EmployeeSubjectCreateManyInput | EmployeeSubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeSubject createManyAndReturn
   */
  export type EmployeeSubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSubject
     */
    select?: EmployeeSubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSubject
     */
    omit?: EmployeeSubjectOmit<ExtArgs> | null
    /**
     * The data used to create many EmployeeSubjects.
     */
    data: EmployeeSubjectCreateManyInput | EmployeeSubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeSubject update
   */
  export type EmployeeSubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSubject
     */
    select?: EmployeeSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSubject
     */
    omit?: EmployeeSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeeSubject.
     */
    data: XOR<EmployeeSubjectUpdateInput, EmployeeSubjectUncheckedUpdateInput>
    /**
     * Choose, which EmployeeSubject to update.
     */
    where: EmployeeSubjectWhereUniqueInput
  }

  /**
   * EmployeeSubject updateMany
   */
  export type EmployeeSubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeSubjects.
     */
    data: XOR<EmployeeSubjectUpdateManyMutationInput, EmployeeSubjectUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeSubjects to update
     */
    where?: EmployeeSubjectWhereInput
    /**
     * Limit how many EmployeeSubjects to update.
     */
    limit?: number
  }

  /**
   * EmployeeSubject updateManyAndReturn
   */
  export type EmployeeSubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSubject
     */
    select?: EmployeeSubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSubject
     */
    omit?: EmployeeSubjectOmit<ExtArgs> | null
    /**
     * The data used to update EmployeeSubjects.
     */
    data: XOR<EmployeeSubjectUpdateManyMutationInput, EmployeeSubjectUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeSubjects to update
     */
    where?: EmployeeSubjectWhereInput
    /**
     * Limit how many EmployeeSubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeSubject upsert
   */
  export type EmployeeSubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSubject
     */
    select?: EmployeeSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSubject
     */
    omit?: EmployeeSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeeSubject to update in case it exists.
     */
    where: EmployeeSubjectWhereUniqueInput
    /**
     * In case the EmployeeSubject found by the `where` argument doesn't exist, create a new EmployeeSubject with this data.
     */
    create: XOR<EmployeeSubjectCreateInput, EmployeeSubjectUncheckedCreateInput>
    /**
     * In case the EmployeeSubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeSubjectUpdateInput, EmployeeSubjectUncheckedUpdateInput>
  }

  /**
   * EmployeeSubject delete
   */
  export type EmployeeSubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSubject
     */
    select?: EmployeeSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSubject
     */
    omit?: EmployeeSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSubjectInclude<ExtArgs> | null
    /**
     * Filter which EmployeeSubject to delete.
     */
    where: EmployeeSubjectWhereUniqueInput
  }

  /**
   * EmployeeSubject deleteMany
   */
  export type EmployeeSubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeSubjects to delete
     */
    where?: EmployeeSubjectWhereInput
    /**
     * Limit how many EmployeeSubjects to delete.
     */
    limit?: number
  }

  /**
   * EmployeeSubject without action
   */
  export type EmployeeSubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSubject
     */
    select?: EmployeeSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSubject
     */
    omit?: EmployeeSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSubjectInclude<ExtArgs> | null
  }


  /**
   * Model TeachingAssignment
   */

  export type AggregateTeachingAssignment = {
    _count: TeachingAssignmentCountAggregateOutputType | null
    _avg: TeachingAssignmentAvgAggregateOutputType | null
    _sum: TeachingAssignmentSumAggregateOutputType | null
    _min: TeachingAssignmentMinAggregateOutputType | null
    _max: TeachingAssignmentMaxAggregateOutputType | null
  }

  export type TeachingAssignmentAvgAggregateOutputType = {
    weekday: number | null
    lessonStart: number | null
    lessonEnd: number | null
    hours: number | null
  }

  export type TeachingAssignmentSumAggregateOutputType = {
    weekday: number | null
    lessonStart: number | null
    lessonEnd: number | null
    hours: number | null
  }

  export type TeachingAssignmentMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    subjectId: string | null
    weekday: number | null
    startTime: string | null
    endTime: string | null
    classGroup: string | null
    lessonStart: number | null
    lessonEnd: number | null
    fullDay: boolean | null
    hours: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeachingAssignmentMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    subjectId: string | null
    weekday: number | null
    startTime: string | null
    endTime: string | null
    classGroup: string | null
    lessonStart: number | null
    lessonEnd: number | null
    fullDay: boolean | null
    hours: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeachingAssignmentCountAggregateOutputType = {
    id: number
    employeeId: number
    subjectId: number
    weekday: number
    startTime: number
    endTime: number
    classGroup: number
    lessonStart: number
    lessonEnd: number
    fullDay: number
    hours: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeachingAssignmentAvgAggregateInputType = {
    weekday?: true
    lessonStart?: true
    lessonEnd?: true
    hours?: true
  }

  export type TeachingAssignmentSumAggregateInputType = {
    weekday?: true
    lessonStart?: true
    lessonEnd?: true
    hours?: true
  }

  export type TeachingAssignmentMinAggregateInputType = {
    id?: true
    employeeId?: true
    subjectId?: true
    weekday?: true
    startTime?: true
    endTime?: true
    classGroup?: true
    lessonStart?: true
    lessonEnd?: true
    fullDay?: true
    hours?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeachingAssignmentMaxAggregateInputType = {
    id?: true
    employeeId?: true
    subjectId?: true
    weekday?: true
    startTime?: true
    endTime?: true
    classGroup?: true
    lessonStart?: true
    lessonEnd?: true
    fullDay?: true
    hours?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeachingAssignmentCountAggregateInputType = {
    id?: true
    employeeId?: true
    subjectId?: true
    weekday?: true
    startTime?: true
    endTime?: true
    classGroup?: true
    lessonStart?: true
    lessonEnd?: true
    fullDay?: true
    hours?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeachingAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingAssignment to aggregate.
     */
    where?: TeachingAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAssignments to fetch.
     */
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeachingAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeachingAssignments
    **/
    _count?: true | TeachingAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeachingAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeachingAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeachingAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeachingAssignmentMaxAggregateInputType
  }

  export type GetTeachingAssignmentAggregateType<T extends TeachingAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTeachingAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeachingAssignment[P]>
      : GetScalarType<T[P], AggregateTeachingAssignment[P]>
  }




  export type TeachingAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingAssignmentWhereInput
    orderBy?: TeachingAssignmentOrderByWithAggregationInput | TeachingAssignmentOrderByWithAggregationInput[]
    by: TeachingAssignmentScalarFieldEnum[] | TeachingAssignmentScalarFieldEnum
    having?: TeachingAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeachingAssignmentCountAggregateInputType | true
    _avg?: TeachingAssignmentAvgAggregateInputType
    _sum?: TeachingAssignmentSumAggregateInputType
    _min?: TeachingAssignmentMinAggregateInputType
    _max?: TeachingAssignmentMaxAggregateInputType
  }

  export type TeachingAssignmentGroupByOutputType = {
    id: string
    employeeId: string
    subjectId: string
    weekday: number
    startTime: string
    endTime: string
    classGroup: string | null
    lessonStart: number | null
    lessonEnd: number | null
    fullDay: boolean
    hours: number
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: TeachingAssignmentCountAggregateOutputType | null
    _avg: TeachingAssignmentAvgAggregateOutputType | null
    _sum: TeachingAssignmentSumAggregateOutputType | null
    _min: TeachingAssignmentMinAggregateOutputType | null
    _max: TeachingAssignmentMaxAggregateOutputType | null
  }

  type GetTeachingAssignmentGroupByPayload<T extends TeachingAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeachingAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeachingAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeachingAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], TeachingAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type TeachingAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    subjectId?: boolean
    weekday?: boolean
    startTime?: boolean
    endTime?: boolean
    classGroup?: boolean
    lessonStart?: boolean
    lessonEnd?: boolean
    fullDay?: boolean
    hours?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachingAssignment"]>

  export type TeachingAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    subjectId?: boolean
    weekday?: boolean
    startTime?: boolean
    endTime?: boolean
    classGroup?: boolean
    lessonStart?: boolean
    lessonEnd?: boolean
    fullDay?: boolean
    hours?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachingAssignment"]>

  export type TeachingAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    subjectId?: boolean
    weekday?: boolean
    startTime?: boolean
    endTime?: boolean
    classGroup?: boolean
    lessonStart?: boolean
    lessonEnd?: boolean
    fullDay?: boolean
    hours?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachingAssignment"]>

  export type TeachingAssignmentSelectScalar = {
    id?: boolean
    employeeId?: boolean
    subjectId?: boolean
    weekday?: boolean
    startTime?: boolean
    endTime?: boolean
    classGroup?: boolean
    lessonStart?: boolean
    lessonEnd?: boolean
    fullDay?: boolean
    hours?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeachingAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "subjectId" | "weekday" | "startTime" | "endTime" | "classGroup" | "lessonStart" | "lessonEnd" | "fullDay" | "hours" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["teachingAssignment"]>
  export type TeachingAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type TeachingAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type TeachingAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $TeachingAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeachingAssignment"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      subjectId: string
      weekday: number
      startTime: string
      endTime: string
      classGroup: string | null
      lessonStart: number | null
      lessonEnd: number | null
      fullDay: boolean
      hours: number
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teachingAssignment"]>
    composites: {}
  }

  type TeachingAssignmentGetPayload<S extends boolean | null | undefined | TeachingAssignmentDefaultArgs> = $Result.GetResult<Prisma.$TeachingAssignmentPayload, S>

  type TeachingAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeachingAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeachingAssignmentCountAggregateInputType | true
    }

  export interface TeachingAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeachingAssignment'], meta: { name: 'TeachingAssignment' } }
    /**
     * Find zero or one TeachingAssignment that matches the filter.
     * @param {TeachingAssignmentFindUniqueArgs} args - Arguments to find a TeachingAssignment
     * @example
     * // Get one TeachingAssignment
     * const teachingAssignment = await prisma.teachingAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeachingAssignmentFindUniqueArgs>(args: SelectSubset<T, TeachingAssignmentFindUniqueArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeachingAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeachingAssignmentFindUniqueOrThrowArgs} args - Arguments to find a TeachingAssignment
     * @example
     * // Get one TeachingAssignment
     * const teachingAssignment = await prisma.teachingAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeachingAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TeachingAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentFindFirstArgs} args - Arguments to find a TeachingAssignment
     * @example
     * // Get one TeachingAssignment
     * const teachingAssignment = await prisma.teachingAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeachingAssignmentFindFirstArgs>(args?: SelectSubset<T, TeachingAssignmentFindFirstArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentFindFirstOrThrowArgs} args - Arguments to find a TeachingAssignment
     * @example
     * // Get one TeachingAssignment
     * const teachingAssignment = await prisma.teachingAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeachingAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TeachingAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeachingAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeachingAssignments
     * const teachingAssignments = await prisma.teachingAssignment.findMany()
     * 
     * // Get first 10 TeachingAssignments
     * const teachingAssignments = await prisma.teachingAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teachingAssignmentWithIdOnly = await prisma.teachingAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeachingAssignmentFindManyArgs>(args?: SelectSubset<T, TeachingAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeachingAssignment.
     * @param {TeachingAssignmentCreateArgs} args - Arguments to create a TeachingAssignment.
     * @example
     * // Create one TeachingAssignment
     * const TeachingAssignment = await prisma.teachingAssignment.create({
     *   data: {
     *     // ... data to create a TeachingAssignment
     *   }
     * })
     * 
     */
    create<T extends TeachingAssignmentCreateArgs>(args: SelectSubset<T, TeachingAssignmentCreateArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeachingAssignments.
     * @param {TeachingAssignmentCreateManyArgs} args - Arguments to create many TeachingAssignments.
     * @example
     * // Create many TeachingAssignments
     * const teachingAssignment = await prisma.teachingAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeachingAssignmentCreateManyArgs>(args?: SelectSubset<T, TeachingAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeachingAssignments and returns the data saved in the database.
     * @param {TeachingAssignmentCreateManyAndReturnArgs} args - Arguments to create many TeachingAssignments.
     * @example
     * // Create many TeachingAssignments
     * const teachingAssignment = await prisma.teachingAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeachingAssignments and only return the `id`
     * const teachingAssignmentWithIdOnly = await prisma.teachingAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeachingAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, TeachingAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeachingAssignment.
     * @param {TeachingAssignmentDeleteArgs} args - Arguments to delete one TeachingAssignment.
     * @example
     * // Delete one TeachingAssignment
     * const TeachingAssignment = await prisma.teachingAssignment.delete({
     *   where: {
     *     // ... filter to delete one TeachingAssignment
     *   }
     * })
     * 
     */
    delete<T extends TeachingAssignmentDeleteArgs>(args: SelectSubset<T, TeachingAssignmentDeleteArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeachingAssignment.
     * @param {TeachingAssignmentUpdateArgs} args - Arguments to update one TeachingAssignment.
     * @example
     * // Update one TeachingAssignment
     * const teachingAssignment = await prisma.teachingAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeachingAssignmentUpdateArgs>(args: SelectSubset<T, TeachingAssignmentUpdateArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeachingAssignments.
     * @param {TeachingAssignmentDeleteManyArgs} args - Arguments to filter TeachingAssignments to delete.
     * @example
     * // Delete a few TeachingAssignments
     * const { count } = await prisma.teachingAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeachingAssignmentDeleteManyArgs>(args?: SelectSubset<T, TeachingAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeachingAssignments
     * const teachingAssignment = await prisma.teachingAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeachingAssignmentUpdateManyArgs>(args: SelectSubset<T, TeachingAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingAssignments and returns the data updated in the database.
     * @param {TeachingAssignmentUpdateManyAndReturnArgs} args - Arguments to update many TeachingAssignments.
     * @example
     * // Update many TeachingAssignments
     * const teachingAssignment = await prisma.teachingAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeachingAssignments and only return the `id`
     * const teachingAssignmentWithIdOnly = await prisma.teachingAssignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeachingAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, TeachingAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeachingAssignment.
     * @param {TeachingAssignmentUpsertArgs} args - Arguments to update or create a TeachingAssignment.
     * @example
     * // Update or create a TeachingAssignment
     * const teachingAssignment = await prisma.teachingAssignment.upsert({
     *   create: {
     *     // ... data to create a TeachingAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeachingAssignment we want to update
     *   }
     * })
     */
    upsert<T extends TeachingAssignmentUpsertArgs>(args: SelectSubset<T, TeachingAssignmentUpsertArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeachingAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentCountArgs} args - Arguments to filter TeachingAssignments to count.
     * @example
     * // Count the number of TeachingAssignments
     * const count = await prisma.teachingAssignment.count({
     *   where: {
     *     // ... the filter for the TeachingAssignments we want to count
     *   }
     * })
    **/
    count<T extends TeachingAssignmentCountArgs>(
      args?: Subset<T, TeachingAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeachingAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeachingAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeachingAssignmentAggregateArgs>(args: Subset<T, TeachingAssignmentAggregateArgs>): Prisma.PrismaPromise<GetTeachingAssignmentAggregateType<T>>

    /**
     * Group by TeachingAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentGroupByArgs} args - Group by arguments.
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
      T extends TeachingAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeachingAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: TeachingAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeachingAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeachingAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeachingAssignment model
   */
  readonly fields: TeachingAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeachingAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeachingAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeachingAssignment model
   */
  interface TeachingAssignmentFieldRefs {
    readonly id: FieldRef<"TeachingAssignment", 'String'>
    readonly employeeId: FieldRef<"TeachingAssignment", 'String'>
    readonly subjectId: FieldRef<"TeachingAssignment", 'String'>
    readonly weekday: FieldRef<"TeachingAssignment", 'Int'>
    readonly startTime: FieldRef<"TeachingAssignment", 'String'>
    readonly endTime: FieldRef<"TeachingAssignment", 'String'>
    readonly classGroup: FieldRef<"TeachingAssignment", 'String'>
    readonly lessonStart: FieldRef<"TeachingAssignment", 'Int'>
    readonly lessonEnd: FieldRef<"TeachingAssignment", 'Int'>
    readonly fullDay: FieldRef<"TeachingAssignment", 'Boolean'>
    readonly hours: FieldRef<"TeachingAssignment", 'Float'>
    readonly active: FieldRef<"TeachingAssignment", 'Boolean'>
    readonly createdAt: FieldRef<"TeachingAssignment", 'DateTime'>
    readonly updatedAt: FieldRef<"TeachingAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeachingAssignment findUnique
   */
  export type TeachingAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssignment to fetch.
     */
    where: TeachingAssignmentWhereUniqueInput
  }

  /**
   * TeachingAssignment findUniqueOrThrow
   */
  export type TeachingAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssignment to fetch.
     */
    where: TeachingAssignmentWhereUniqueInput
  }

  /**
   * TeachingAssignment findFirst
   */
  export type TeachingAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssignment to fetch.
     */
    where?: TeachingAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAssignments to fetch.
     */
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingAssignments.
     */
    cursor?: TeachingAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingAssignments.
     */
    distinct?: TeachingAssignmentScalarFieldEnum | TeachingAssignmentScalarFieldEnum[]
  }

  /**
   * TeachingAssignment findFirstOrThrow
   */
  export type TeachingAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssignment to fetch.
     */
    where?: TeachingAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAssignments to fetch.
     */
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingAssignments.
     */
    cursor?: TeachingAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingAssignments.
     */
    distinct?: TeachingAssignmentScalarFieldEnum | TeachingAssignmentScalarFieldEnum[]
  }

  /**
   * TeachingAssignment findMany
   */
  export type TeachingAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssignments to fetch.
     */
    where?: TeachingAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAssignments to fetch.
     */
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeachingAssignments.
     */
    cursor?: TeachingAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAssignments.
     */
    skip?: number
    distinct?: TeachingAssignmentScalarFieldEnum | TeachingAssignmentScalarFieldEnum[]
  }

  /**
   * TeachingAssignment create
   */
  export type TeachingAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a TeachingAssignment.
     */
    data: XOR<TeachingAssignmentCreateInput, TeachingAssignmentUncheckedCreateInput>
  }

  /**
   * TeachingAssignment createMany
   */
  export type TeachingAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeachingAssignments.
     */
    data: TeachingAssignmentCreateManyInput | TeachingAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeachingAssignment createManyAndReturn
   */
  export type TeachingAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many TeachingAssignments.
     */
    data: TeachingAssignmentCreateManyInput | TeachingAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeachingAssignment update
   */
  export type TeachingAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a TeachingAssignment.
     */
    data: XOR<TeachingAssignmentUpdateInput, TeachingAssignmentUncheckedUpdateInput>
    /**
     * Choose, which TeachingAssignment to update.
     */
    where: TeachingAssignmentWhereUniqueInput
  }

  /**
   * TeachingAssignment updateMany
   */
  export type TeachingAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeachingAssignments.
     */
    data: XOR<TeachingAssignmentUpdateManyMutationInput, TeachingAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which TeachingAssignments to update
     */
    where?: TeachingAssignmentWhereInput
    /**
     * Limit how many TeachingAssignments to update.
     */
    limit?: number
  }

  /**
   * TeachingAssignment updateManyAndReturn
   */
  export type TeachingAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update TeachingAssignments.
     */
    data: XOR<TeachingAssignmentUpdateManyMutationInput, TeachingAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which TeachingAssignments to update
     */
    where?: TeachingAssignmentWhereInput
    /**
     * Limit how many TeachingAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeachingAssignment upsert
   */
  export type TeachingAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the TeachingAssignment to update in case it exists.
     */
    where: TeachingAssignmentWhereUniqueInput
    /**
     * In case the TeachingAssignment found by the `where` argument doesn't exist, create a new TeachingAssignment with this data.
     */
    create: XOR<TeachingAssignmentCreateInput, TeachingAssignmentUncheckedCreateInput>
    /**
     * In case the TeachingAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeachingAssignmentUpdateInput, TeachingAssignmentUncheckedUpdateInput>
  }

  /**
   * TeachingAssignment delete
   */
  export type TeachingAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * Filter which TeachingAssignment to delete.
     */
    where: TeachingAssignmentWhereUniqueInput
  }

  /**
   * TeachingAssignment deleteMany
   */
  export type TeachingAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingAssignments to delete
     */
    where?: TeachingAssignmentWhereInput
    /**
     * Limit how many TeachingAssignments to delete.
     */
    limit?: number
  }

  /**
   * TeachingAssignment without action
   */
  export type TeachingAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model SalaryAdjustment
   */

  export type AggregateSalaryAdjustment = {
    _count: SalaryAdjustmentCountAggregateOutputType | null
    _avg: SalaryAdjustmentAvgAggregateOutputType | null
    _sum: SalaryAdjustmentSumAggregateOutputType | null
    _min: SalaryAdjustmentMinAggregateOutputType | null
    _max: SalaryAdjustmentMaxAggregateOutputType | null
  }

  export type SalaryAdjustmentAvgAggregateOutputType = {
    previousSalary: number | null
    newSalary: number | null
    adjustmentValue: number | null
  }

  export type SalaryAdjustmentSumAggregateOutputType = {
    previousSalary: number | null
    newSalary: number | null
    adjustmentValue: number | null
  }

  export type SalaryAdjustmentMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    effectiveDate: Date | null
    previousSalary: number | null
    newSalary: number | null
    adjustmentValue: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type SalaryAdjustmentMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    effectiveDate: Date | null
    previousSalary: number | null
    newSalary: number | null
    adjustmentValue: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type SalaryAdjustmentCountAggregateOutputType = {
    id: number
    employeeId: number
    effectiveDate: number
    previousSalary: number
    newSalary: number
    adjustmentValue: number
    notes: number
    createdAt: number
    _all: number
  }


  export type SalaryAdjustmentAvgAggregateInputType = {
    previousSalary?: true
    newSalary?: true
    adjustmentValue?: true
  }

  export type SalaryAdjustmentSumAggregateInputType = {
    previousSalary?: true
    newSalary?: true
    adjustmentValue?: true
  }

  export type SalaryAdjustmentMinAggregateInputType = {
    id?: true
    employeeId?: true
    effectiveDate?: true
    previousSalary?: true
    newSalary?: true
    adjustmentValue?: true
    notes?: true
    createdAt?: true
  }

  export type SalaryAdjustmentMaxAggregateInputType = {
    id?: true
    employeeId?: true
    effectiveDate?: true
    previousSalary?: true
    newSalary?: true
    adjustmentValue?: true
    notes?: true
    createdAt?: true
  }

  export type SalaryAdjustmentCountAggregateInputType = {
    id?: true
    employeeId?: true
    effectiveDate?: true
    previousSalary?: true
    newSalary?: true
    adjustmentValue?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type SalaryAdjustmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalaryAdjustment to aggregate.
     */
    where?: SalaryAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryAdjustments to fetch.
     */
    orderBy?: SalaryAdjustmentOrderByWithRelationInput | SalaryAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaryAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalaryAdjustments
    **/
    _count?: true | SalaryAdjustmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalaryAdjustmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalaryAdjustmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaryAdjustmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaryAdjustmentMaxAggregateInputType
  }

  export type GetSalaryAdjustmentAggregateType<T extends SalaryAdjustmentAggregateArgs> = {
        [P in keyof T & keyof AggregateSalaryAdjustment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalaryAdjustment[P]>
      : GetScalarType<T[P], AggregateSalaryAdjustment[P]>
  }




  export type SalaryAdjustmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaryAdjustmentWhereInput
    orderBy?: SalaryAdjustmentOrderByWithAggregationInput | SalaryAdjustmentOrderByWithAggregationInput[]
    by: SalaryAdjustmentScalarFieldEnum[] | SalaryAdjustmentScalarFieldEnum
    having?: SalaryAdjustmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaryAdjustmentCountAggregateInputType | true
    _avg?: SalaryAdjustmentAvgAggregateInputType
    _sum?: SalaryAdjustmentSumAggregateInputType
    _min?: SalaryAdjustmentMinAggregateInputType
    _max?: SalaryAdjustmentMaxAggregateInputType
  }

  export type SalaryAdjustmentGroupByOutputType = {
    id: string
    employeeId: string
    effectiveDate: Date
    previousSalary: number
    newSalary: number
    adjustmentValue: number
    notes: string | null
    createdAt: Date
    _count: SalaryAdjustmentCountAggregateOutputType | null
    _avg: SalaryAdjustmentAvgAggregateOutputType | null
    _sum: SalaryAdjustmentSumAggregateOutputType | null
    _min: SalaryAdjustmentMinAggregateOutputType | null
    _max: SalaryAdjustmentMaxAggregateOutputType | null
  }

  type GetSalaryAdjustmentGroupByPayload<T extends SalaryAdjustmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaryAdjustmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaryAdjustmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaryAdjustmentGroupByOutputType[P]>
            : GetScalarType<T[P], SalaryAdjustmentGroupByOutputType[P]>
        }
      >
    >


  export type SalaryAdjustmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    effectiveDate?: boolean
    previousSalary?: boolean
    newSalary?: boolean
    adjustmentValue?: boolean
    notes?: boolean
    createdAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salaryAdjustment"]>

  export type SalaryAdjustmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    effectiveDate?: boolean
    previousSalary?: boolean
    newSalary?: boolean
    adjustmentValue?: boolean
    notes?: boolean
    createdAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salaryAdjustment"]>

  export type SalaryAdjustmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    effectiveDate?: boolean
    previousSalary?: boolean
    newSalary?: boolean
    adjustmentValue?: boolean
    notes?: boolean
    createdAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salaryAdjustment"]>

  export type SalaryAdjustmentSelectScalar = {
    id?: boolean
    employeeId?: boolean
    effectiveDate?: boolean
    previousSalary?: boolean
    newSalary?: boolean
    adjustmentValue?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type SalaryAdjustmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "effectiveDate" | "previousSalary" | "newSalary" | "adjustmentValue" | "notes" | "createdAt", ExtArgs["result"]["salaryAdjustment"]>
  export type SalaryAdjustmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type SalaryAdjustmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type SalaryAdjustmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $SalaryAdjustmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalaryAdjustment"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      effectiveDate: Date
      previousSalary: number
      newSalary: number
      adjustmentValue: number
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["salaryAdjustment"]>
    composites: {}
  }

  type SalaryAdjustmentGetPayload<S extends boolean | null | undefined | SalaryAdjustmentDefaultArgs> = $Result.GetResult<Prisma.$SalaryAdjustmentPayload, S>

  type SalaryAdjustmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalaryAdjustmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalaryAdjustmentCountAggregateInputType | true
    }

  export interface SalaryAdjustmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalaryAdjustment'], meta: { name: 'SalaryAdjustment' } }
    /**
     * Find zero or one SalaryAdjustment that matches the filter.
     * @param {SalaryAdjustmentFindUniqueArgs} args - Arguments to find a SalaryAdjustment
     * @example
     * // Get one SalaryAdjustment
     * const salaryAdjustment = await prisma.salaryAdjustment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaryAdjustmentFindUniqueArgs>(args: SelectSubset<T, SalaryAdjustmentFindUniqueArgs<ExtArgs>>): Prisma__SalaryAdjustmentClient<$Result.GetResult<Prisma.$SalaryAdjustmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalaryAdjustment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalaryAdjustmentFindUniqueOrThrowArgs} args - Arguments to find a SalaryAdjustment
     * @example
     * // Get one SalaryAdjustment
     * const salaryAdjustment = await prisma.salaryAdjustment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaryAdjustmentFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaryAdjustmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaryAdjustmentClient<$Result.GetResult<Prisma.$SalaryAdjustmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalaryAdjustment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryAdjustmentFindFirstArgs} args - Arguments to find a SalaryAdjustment
     * @example
     * // Get one SalaryAdjustment
     * const salaryAdjustment = await prisma.salaryAdjustment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaryAdjustmentFindFirstArgs>(args?: SelectSubset<T, SalaryAdjustmentFindFirstArgs<ExtArgs>>): Prisma__SalaryAdjustmentClient<$Result.GetResult<Prisma.$SalaryAdjustmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalaryAdjustment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryAdjustmentFindFirstOrThrowArgs} args - Arguments to find a SalaryAdjustment
     * @example
     * // Get one SalaryAdjustment
     * const salaryAdjustment = await prisma.salaryAdjustment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaryAdjustmentFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaryAdjustmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaryAdjustmentClient<$Result.GetResult<Prisma.$SalaryAdjustmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalaryAdjustments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryAdjustmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalaryAdjustments
     * const salaryAdjustments = await prisma.salaryAdjustment.findMany()
     * 
     * // Get first 10 SalaryAdjustments
     * const salaryAdjustments = await prisma.salaryAdjustment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salaryAdjustmentWithIdOnly = await prisma.salaryAdjustment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalaryAdjustmentFindManyArgs>(args?: SelectSubset<T, SalaryAdjustmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryAdjustmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalaryAdjustment.
     * @param {SalaryAdjustmentCreateArgs} args - Arguments to create a SalaryAdjustment.
     * @example
     * // Create one SalaryAdjustment
     * const SalaryAdjustment = await prisma.salaryAdjustment.create({
     *   data: {
     *     // ... data to create a SalaryAdjustment
     *   }
     * })
     * 
     */
    create<T extends SalaryAdjustmentCreateArgs>(args: SelectSubset<T, SalaryAdjustmentCreateArgs<ExtArgs>>): Prisma__SalaryAdjustmentClient<$Result.GetResult<Prisma.$SalaryAdjustmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalaryAdjustments.
     * @param {SalaryAdjustmentCreateManyArgs} args - Arguments to create many SalaryAdjustments.
     * @example
     * // Create many SalaryAdjustments
     * const salaryAdjustment = await prisma.salaryAdjustment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaryAdjustmentCreateManyArgs>(args?: SelectSubset<T, SalaryAdjustmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalaryAdjustments and returns the data saved in the database.
     * @param {SalaryAdjustmentCreateManyAndReturnArgs} args - Arguments to create many SalaryAdjustments.
     * @example
     * // Create many SalaryAdjustments
     * const salaryAdjustment = await prisma.salaryAdjustment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalaryAdjustments and only return the `id`
     * const salaryAdjustmentWithIdOnly = await prisma.salaryAdjustment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalaryAdjustmentCreateManyAndReturnArgs>(args?: SelectSubset<T, SalaryAdjustmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryAdjustmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalaryAdjustment.
     * @param {SalaryAdjustmentDeleteArgs} args - Arguments to delete one SalaryAdjustment.
     * @example
     * // Delete one SalaryAdjustment
     * const SalaryAdjustment = await prisma.salaryAdjustment.delete({
     *   where: {
     *     // ... filter to delete one SalaryAdjustment
     *   }
     * })
     * 
     */
    delete<T extends SalaryAdjustmentDeleteArgs>(args: SelectSubset<T, SalaryAdjustmentDeleteArgs<ExtArgs>>): Prisma__SalaryAdjustmentClient<$Result.GetResult<Prisma.$SalaryAdjustmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalaryAdjustment.
     * @param {SalaryAdjustmentUpdateArgs} args - Arguments to update one SalaryAdjustment.
     * @example
     * // Update one SalaryAdjustment
     * const salaryAdjustment = await prisma.salaryAdjustment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaryAdjustmentUpdateArgs>(args: SelectSubset<T, SalaryAdjustmentUpdateArgs<ExtArgs>>): Prisma__SalaryAdjustmentClient<$Result.GetResult<Prisma.$SalaryAdjustmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalaryAdjustments.
     * @param {SalaryAdjustmentDeleteManyArgs} args - Arguments to filter SalaryAdjustments to delete.
     * @example
     * // Delete a few SalaryAdjustments
     * const { count } = await prisma.salaryAdjustment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaryAdjustmentDeleteManyArgs>(args?: SelectSubset<T, SalaryAdjustmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalaryAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryAdjustmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalaryAdjustments
     * const salaryAdjustment = await prisma.salaryAdjustment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaryAdjustmentUpdateManyArgs>(args: SelectSubset<T, SalaryAdjustmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalaryAdjustments and returns the data updated in the database.
     * @param {SalaryAdjustmentUpdateManyAndReturnArgs} args - Arguments to update many SalaryAdjustments.
     * @example
     * // Update many SalaryAdjustments
     * const salaryAdjustment = await prisma.salaryAdjustment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalaryAdjustments and only return the `id`
     * const salaryAdjustmentWithIdOnly = await prisma.salaryAdjustment.updateManyAndReturn({
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
    updateManyAndReturn<T extends SalaryAdjustmentUpdateManyAndReturnArgs>(args: SelectSubset<T, SalaryAdjustmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryAdjustmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalaryAdjustment.
     * @param {SalaryAdjustmentUpsertArgs} args - Arguments to update or create a SalaryAdjustment.
     * @example
     * // Update or create a SalaryAdjustment
     * const salaryAdjustment = await prisma.salaryAdjustment.upsert({
     *   create: {
     *     // ... data to create a SalaryAdjustment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalaryAdjustment we want to update
     *   }
     * })
     */
    upsert<T extends SalaryAdjustmentUpsertArgs>(args: SelectSubset<T, SalaryAdjustmentUpsertArgs<ExtArgs>>): Prisma__SalaryAdjustmentClient<$Result.GetResult<Prisma.$SalaryAdjustmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalaryAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryAdjustmentCountArgs} args - Arguments to filter SalaryAdjustments to count.
     * @example
     * // Count the number of SalaryAdjustments
     * const count = await prisma.salaryAdjustment.count({
     *   where: {
     *     // ... the filter for the SalaryAdjustments we want to count
     *   }
     * })
    **/
    count<T extends SalaryAdjustmentCountArgs>(
      args?: Subset<T, SalaryAdjustmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaryAdjustmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalaryAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryAdjustmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalaryAdjustmentAggregateArgs>(args: Subset<T, SalaryAdjustmentAggregateArgs>): Prisma.PrismaPromise<GetSalaryAdjustmentAggregateType<T>>

    /**
     * Group by SalaryAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryAdjustmentGroupByArgs} args - Group by arguments.
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
      T extends SalaryAdjustmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaryAdjustmentGroupByArgs['orderBy'] }
        : { orderBy?: SalaryAdjustmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalaryAdjustmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaryAdjustmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalaryAdjustment model
   */
  readonly fields: SalaryAdjustmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalaryAdjustment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaryAdjustmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SalaryAdjustment model
   */
  interface SalaryAdjustmentFieldRefs {
    readonly id: FieldRef<"SalaryAdjustment", 'String'>
    readonly employeeId: FieldRef<"SalaryAdjustment", 'String'>
    readonly effectiveDate: FieldRef<"SalaryAdjustment", 'DateTime'>
    readonly previousSalary: FieldRef<"SalaryAdjustment", 'Float'>
    readonly newSalary: FieldRef<"SalaryAdjustment", 'Float'>
    readonly adjustmentValue: FieldRef<"SalaryAdjustment", 'Float'>
    readonly notes: FieldRef<"SalaryAdjustment", 'String'>
    readonly createdAt: FieldRef<"SalaryAdjustment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalaryAdjustment findUnique
   */
  export type SalaryAdjustmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryAdjustment
     */
    select?: SalaryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryAdjustment
     */
    omit?: SalaryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which SalaryAdjustment to fetch.
     */
    where: SalaryAdjustmentWhereUniqueInput
  }

  /**
   * SalaryAdjustment findUniqueOrThrow
   */
  export type SalaryAdjustmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryAdjustment
     */
    select?: SalaryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryAdjustment
     */
    omit?: SalaryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which SalaryAdjustment to fetch.
     */
    where: SalaryAdjustmentWhereUniqueInput
  }

  /**
   * SalaryAdjustment findFirst
   */
  export type SalaryAdjustmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryAdjustment
     */
    select?: SalaryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryAdjustment
     */
    omit?: SalaryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which SalaryAdjustment to fetch.
     */
    where?: SalaryAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryAdjustments to fetch.
     */
    orderBy?: SalaryAdjustmentOrderByWithRelationInput | SalaryAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalaryAdjustments.
     */
    cursor?: SalaryAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalaryAdjustments.
     */
    distinct?: SalaryAdjustmentScalarFieldEnum | SalaryAdjustmentScalarFieldEnum[]
  }

  /**
   * SalaryAdjustment findFirstOrThrow
   */
  export type SalaryAdjustmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryAdjustment
     */
    select?: SalaryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryAdjustment
     */
    omit?: SalaryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which SalaryAdjustment to fetch.
     */
    where?: SalaryAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryAdjustments to fetch.
     */
    orderBy?: SalaryAdjustmentOrderByWithRelationInput | SalaryAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalaryAdjustments.
     */
    cursor?: SalaryAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalaryAdjustments.
     */
    distinct?: SalaryAdjustmentScalarFieldEnum | SalaryAdjustmentScalarFieldEnum[]
  }

  /**
   * SalaryAdjustment findMany
   */
  export type SalaryAdjustmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryAdjustment
     */
    select?: SalaryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryAdjustment
     */
    omit?: SalaryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which SalaryAdjustments to fetch.
     */
    where?: SalaryAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryAdjustments to fetch.
     */
    orderBy?: SalaryAdjustmentOrderByWithRelationInput | SalaryAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalaryAdjustments.
     */
    cursor?: SalaryAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryAdjustments.
     */
    skip?: number
    distinct?: SalaryAdjustmentScalarFieldEnum | SalaryAdjustmentScalarFieldEnum[]
  }

  /**
   * SalaryAdjustment create
   */
  export type SalaryAdjustmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryAdjustment
     */
    select?: SalaryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryAdjustment
     */
    omit?: SalaryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryAdjustmentInclude<ExtArgs> | null
    /**
     * The data needed to create a SalaryAdjustment.
     */
    data: XOR<SalaryAdjustmentCreateInput, SalaryAdjustmentUncheckedCreateInput>
  }

  /**
   * SalaryAdjustment createMany
   */
  export type SalaryAdjustmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalaryAdjustments.
     */
    data: SalaryAdjustmentCreateManyInput | SalaryAdjustmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalaryAdjustment createManyAndReturn
   */
  export type SalaryAdjustmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryAdjustment
     */
    select?: SalaryAdjustmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryAdjustment
     */
    omit?: SalaryAdjustmentOmit<ExtArgs> | null
    /**
     * The data used to create many SalaryAdjustments.
     */
    data: SalaryAdjustmentCreateManyInput | SalaryAdjustmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryAdjustmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalaryAdjustment update
   */
  export type SalaryAdjustmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryAdjustment
     */
    select?: SalaryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryAdjustment
     */
    omit?: SalaryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryAdjustmentInclude<ExtArgs> | null
    /**
     * The data needed to update a SalaryAdjustment.
     */
    data: XOR<SalaryAdjustmentUpdateInput, SalaryAdjustmentUncheckedUpdateInput>
    /**
     * Choose, which SalaryAdjustment to update.
     */
    where: SalaryAdjustmentWhereUniqueInput
  }

  /**
   * SalaryAdjustment updateMany
   */
  export type SalaryAdjustmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalaryAdjustments.
     */
    data: XOR<SalaryAdjustmentUpdateManyMutationInput, SalaryAdjustmentUncheckedUpdateManyInput>
    /**
     * Filter which SalaryAdjustments to update
     */
    where?: SalaryAdjustmentWhereInput
    /**
     * Limit how many SalaryAdjustments to update.
     */
    limit?: number
  }

  /**
   * SalaryAdjustment updateManyAndReturn
   */
  export type SalaryAdjustmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryAdjustment
     */
    select?: SalaryAdjustmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryAdjustment
     */
    omit?: SalaryAdjustmentOmit<ExtArgs> | null
    /**
     * The data used to update SalaryAdjustments.
     */
    data: XOR<SalaryAdjustmentUpdateManyMutationInput, SalaryAdjustmentUncheckedUpdateManyInput>
    /**
     * Filter which SalaryAdjustments to update
     */
    where?: SalaryAdjustmentWhereInput
    /**
     * Limit how many SalaryAdjustments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryAdjustmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalaryAdjustment upsert
   */
  export type SalaryAdjustmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryAdjustment
     */
    select?: SalaryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryAdjustment
     */
    omit?: SalaryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryAdjustmentInclude<ExtArgs> | null
    /**
     * The filter to search for the SalaryAdjustment to update in case it exists.
     */
    where: SalaryAdjustmentWhereUniqueInput
    /**
     * In case the SalaryAdjustment found by the `where` argument doesn't exist, create a new SalaryAdjustment with this data.
     */
    create: XOR<SalaryAdjustmentCreateInput, SalaryAdjustmentUncheckedCreateInput>
    /**
     * In case the SalaryAdjustment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaryAdjustmentUpdateInput, SalaryAdjustmentUncheckedUpdateInput>
  }

  /**
   * SalaryAdjustment delete
   */
  export type SalaryAdjustmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryAdjustment
     */
    select?: SalaryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryAdjustment
     */
    omit?: SalaryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryAdjustmentInclude<ExtArgs> | null
    /**
     * Filter which SalaryAdjustment to delete.
     */
    where: SalaryAdjustmentWhereUniqueInput
  }

  /**
   * SalaryAdjustment deleteMany
   */
  export type SalaryAdjustmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalaryAdjustments to delete
     */
    where?: SalaryAdjustmentWhereInput
    /**
     * Limit how many SalaryAdjustments to delete.
     */
    limit?: number
  }

  /**
   * SalaryAdjustment without action
   */
  export type SalaryAdjustmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryAdjustment
     */
    select?: SalaryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryAdjustment
     */
    omit?: SalaryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryAdjustmentInclude<ExtArgs> | null
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
   * Model Rescisao
   */

  export type AggregateRescisao = {
    _count: RescisaoCountAggregateOutputType | null
    _avg: RescisaoAvgAggregateOutputType | null
    _sum: RescisaoSumAggregateOutputType | null
    _min: RescisaoMinAggregateOutputType | null
    _max: RescisaoMaxAggregateOutputType | null
  }

  export type RescisaoAvgAggregateOutputType = {
    month: number | null
    year: number | null
    saldoSalario: number | null
    decimoTerceiroProp: number | null
    decimoTerceiroInd: number | null
    feriasProp: number | null
    feriasInd: number | null
    tercoFeriasProp: number | null
    tercoFeriasInd: number | null
    feriasVencidas: number | null
    avisoPrevioIndeniz: number | null
    fgtsRescisorio: number | null
    multaFgts: number | null
    inss: number | null
    inss13: number | null
    irrf: number | null
    totalBruto: number | null
    totalLiquido: number | null
  }

  export type RescisaoSumAggregateOutputType = {
    month: number | null
    year: number | null
    saldoSalario: number | null
    decimoTerceiroProp: number | null
    decimoTerceiroInd: number | null
    feriasProp: number | null
    feriasInd: number | null
    tercoFeriasProp: number | null
    tercoFeriasInd: number | null
    feriasVencidas: number | null
    avisoPrevioIndeniz: number | null
    fgtsRescisorio: number | null
    multaFgts: number | null
    inss: number | null
    inss13: number | null
    irrf: number | null
    totalBruto: number | null
    totalLiquido: number | null
  }

  export type RescisaoMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    month: number | null
    year: number | null
    tipoRescisao: string | null
    dataAdmissao: Date | null
    dataDemissao: Date | null
    avisoPrevio: string | null
    saldoSalario: number | null
    decimoTerceiroProp: number | null
    decimoTerceiroInd: number | null
    feriasProp: number | null
    feriasInd: number | null
    tercoFeriasProp: number | null
    tercoFeriasInd: number | null
    feriasVencidas: number | null
    avisoPrevioIndeniz: number | null
    fgtsRescisorio: number | null
    multaFgts: number | null
    inss: number | null
    inss13: number | null
    irrf: number | null
    totalBruto: number | null
    totalLiquido: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RescisaoMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    month: number | null
    year: number | null
    tipoRescisao: string | null
    dataAdmissao: Date | null
    dataDemissao: Date | null
    avisoPrevio: string | null
    saldoSalario: number | null
    decimoTerceiroProp: number | null
    decimoTerceiroInd: number | null
    feriasProp: number | null
    feriasInd: number | null
    tercoFeriasProp: number | null
    tercoFeriasInd: number | null
    feriasVencidas: number | null
    avisoPrevioIndeniz: number | null
    fgtsRescisorio: number | null
    multaFgts: number | null
    inss: number | null
    inss13: number | null
    irrf: number | null
    totalBruto: number | null
    totalLiquido: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RescisaoCountAggregateOutputType = {
    id: number
    employeeId: number
    month: number
    year: number
    tipoRescisao: number
    dataAdmissao: number
    dataDemissao: number
    avisoPrevio: number
    saldoSalario: number
    decimoTerceiroProp: number
    decimoTerceiroInd: number
    feriasProp: number
    feriasInd: number
    tercoFeriasProp: number
    tercoFeriasInd: number
    feriasVencidas: number
    avisoPrevioIndeniz: number
    fgtsRescisorio: number
    multaFgts: number
    inss: number
    inss13: number
    irrf: number
    totalBruto: number
    totalLiquido: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RescisaoAvgAggregateInputType = {
    month?: true
    year?: true
    saldoSalario?: true
    decimoTerceiroProp?: true
    decimoTerceiroInd?: true
    feriasProp?: true
    feriasInd?: true
    tercoFeriasProp?: true
    tercoFeriasInd?: true
    feriasVencidas?: true
    avisoPrevioIndeniz?: true
    fgtsRescisorio?: true
    multaFgts?: true
    inss?: true
    inss13?: true
    irrf?: true
    totalBruto?: true
    totalLiquido?: true
  }

  export type RescisaoSumAggregateInputType = {
    month?: true
    year?: true
    saldoSalario?: true
    decimoTerceiroProp?: true
    decimoTerceiroInd?: true
    feriasProp?: true
    feriasInd?: true
    tercoFeriasProp?: true
    tercoFeriasInd?: true
    feriasVencidas?: true
    avisoPrevioIndeniz?: true
    fgtsRescisorio?: true
    multaFgts?: true
    inss?: true
    inss13?: true
    irrf?: true
    totalBruto?: true
    totalLiquido?: true
  }

  export type RescisaoMinAggregateInputType = {
    id?: true
    employeeId?: true
    month?: true
    year?: true
    tipoRescisao?: true
    dataAdmissao?: true
    dataDemissao?: true
    avisoPrevio?: true
    saldoSalario?: true
    decimoTerceiroProp?: true
    decimoTerceiroInd?: true
    feriasProp?: true
    feriasInd?: true
    tercoFeriasProp?: true
    tercoFeriasInd?: true
    feriasVencidas?: true
    avisoPrevioIndeniz?: true
    fgtsRescisorio?: true
    multaFgts?: true
    inss?: true
    inss13?: true
    irrf?: true
    totalBruto?: true
    totalLiquido?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RescisaoMaxAggregateInputType = {
    id?: true
    employeeId?: true
    month?: true
    year?: true
    tipoRescisao?: true
    dataAdmissao?: true
    dataDemissao?: true
    avisoPrevio?: true
    saldoSalario?: true
    decimoTerceiroProp?: true
    decimoTerceiroInd?: true
    feriasProp?: true
    feriasInd?: true
    tercoFeriasProp?: true
    tercoFeriasInd?: true
    feriasVencidas?: true
    avisoPrevioIndeniz?: true
    fgtsRescisorio?: true
    multaFgts?: true
    inss?: true
    inss13?: true
    irrf?: true
    totalBruto?: true
    totalLiquido?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RescisaoCountAggregateInputType = {
    id?: true
    employeeId?: true
    month?: true
    year?: true
    tipoRescisao?: true
    dataAdmissao?: true
    dataDemissao?: true
    avisoPrevio?: true
    saldoSalario?: true
    decimoTerceiroProp?: true
    decimoTerceiroInd?: true
    feriasProp?: true
    feriasInd?: true
    tercoFeriasProp?: true
    tercoFeriasInd?: true
    feriasVencidas?: true
    avisoPrevioIndeniz?: true
    fgtsRescisorio?: true
    multaFgts?: true
    inss?: true
    inss13?: true
    irrf?: true
    totalBruto?: true
    totalLiquido?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RescisaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rescisao to aggregate.
     */
    where?: RescisaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rescisaos to fetch.
     */
    orderBy?: RescisaoOrderByWithRelationInput | RescisaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RescisaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rescisaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rescisaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rescisaos
    **/
    _count?: true | RescisaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RescisaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RescisaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RescisaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RescisaoMaxAggregateInputType
  }

  export type GetRescisaoAggregateType<T extends RescisaoAggregateArgs> = {
        [P in keyof T & keyof AggregateRescisao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRescisao[P]>
      : GetScalarType<T[P], AggregateRescisao[P]>
  }




  export type RescisaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RescisaoWhereInput
    orderBy?: RescisaoOrderByWithAggregationInput | RescisaoOrderByWithAggregationInput[]
    by: RescisaoScalarFieldEnum[] | RescisaoScalarFieldEnum
    having?: RescisaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RescisaoCountAggregateInputType | true
    _avg?: RescisaoAvgAggregateInputType
    _sum?: RescisaoSumAggregateInputType
    _min?: RescisaoMinAggregateInputType
    _max?: RescisaoMaxAggregateInputType
  }

  export type RescisaoGroupByOutputType = {
    id: string
    employeeId: string
    month: number
    year: number
    tipoRescisao: string
    dataAdmissao: Date
    dataDemissao: Date
    avisoPrevio: string
    saldoSalario: number
    decimoTerceiroProp: number
    decimoTerceiroInd: number
    feriasProp: number
    feriasInd: number
    tercoFeriasProp: number
    tercoFeriasInd: number
    feriasVencidas: number
    avisoPrevioIndeniz: number
    fgtsRescisorio: number
    multaFgts: number
    inss: number
    inss13: number
    irrf: number
    totalBruto: number
    totalLiquido: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: RescisaoCountAggregateOutputType | null
    _avg: RescisaoAvgAggregateOutputType | null
    _sum: RescisaoSumAggregateOutputType | null
    _min: RescisaoMinAggregateOutputType | null
    _max: RescisaoMaxAggregateOutputType | null
  }

  type GetRescisaoGroupByPayload<T extends RescisaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RescisaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RescisaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RescisaoGroupByOutputType[P]>
            : GetScalarType<T[P], RescisaoGroupByOutputType[P]>
        }
      >
    >


  export type RescisaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    month?: boolean
    year?: boolean
    tipoRescisao?: boolean
    dataAdmissao?: boolean
    dataDemissao?: boolean
    avisoPrevio?: boolean
    saldoSalario?: boolean
    decimoTerceiroProp?: boolean
    decimoTerceiroInd?: boolean
    feriasProp?: boolean
    feriasInd?: boolean
    tercoFeriasProp?: boolean
    tercoFeriasInd?: boolean
    feriasVencidas?: boolean
    avisoPrevioIndeniz?: boolean
    fgtsRescisorio?: boolean
    multaFgts?: boolean
    inss?: boolean
    inss13?: boolean
    irrf?: boolean
    totalBruto?: boolean
    totalLiquido?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rescisao"]>

  export type RescisaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    month?: boolean
    year?: boolean
    tipoRescisao?: boolean
    dataAdmissao?: boolean
    dataDemissao?: boolean
    avisoPrevio?: boolean
    saldoSalario?: boolean
    decimoTerceiroProp?: boolean
    decimoTerceiroInd?: boolean
    feriasProp?: boolean
    feriasInd?: boolean
    tercoFeriasProp?: boolean
    tercoFeriasInd?: boolean
    feriasVencidas?: boolean
    avisoPrevioIndeniz?: boolean
    fgtsRescisorio?: boolean
    multaFgts?: boolean
    inss?: boolean
    inss13?: boolean
    irrf?: boolean
    totalBruto?: boolean
    totalLiquido?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rescisao"]>

  export type RescisaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    month?: boolean
    year?: boolean
    tipoRescisao?: boolean
    dataAdmissao?: boolean
    dataDemissao?: boolean
    avisoPrevio?: boolean
    saldoSalario?: boolean
    decimoTerceiroProp?: boolean
    decimoTerceiroInd?: boolean
    feriasProp?: boolean
    feriasInd?: boolean
    tercoFeriasProp?: boolean
    tercoFeriasInd?: boolean
    feriasVencidas?: boolean
    avisoPrevioIndeniz?: boolean
    fgtsRescisorio?: boolean
    multaFgts?: boolean
    inss?: boolean
    inss13?: boolean
    irrf?: boolean
    totalBruto?: boolean
    totalLiquido?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rescisao"]>

  export type RescisaoSelectScalar = {
    id?: boolean
    employeeId?: boolean
    month?: boolean
    year?: boolean
    tipoRescisao?: boolean
    dataAdmissao?: boolean
    dataDemissao?: boolean
    avisoPrevio?: boolean
    saldoSalario?: boolean
    decimoTerceiroProp?: boolean
    decimoTerceiroInd?: boolean
    feriasProp?: boolean
    feriasInd?: boolean
    tercoFeriasProp?: boolean
    tercoFeriasInd?: boolean
    feriasVencidas?: boolean
    avisoPrevioIndeniz?: boolean
    fgtsRescisorio?: boolean
    multaFgts?: boolean
    inss?: boolean
    inss13?: boolean
    irrf?: boolean
    totalBruto?: boolean
    totalLiquido?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RescisaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "month" | "year" | "tipoRescisao" | "dataAdmissao" | "dataDemissao" | "avisoPrevio" | "saldoSalario" | "decimoTerceiroProp" | "decimoTerceiroInd" | "feriasProp" | "feriasInd" | "tercoFeriasProp" | "tercoFeriasInd" | "feriasVencidas" | "avisoPrevioIndeniz" | "fgtsRescisorio" | "multaFgts" | "inss" | "inss13" | "irrf" | "totalBruto" | "totalLiquido" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["rescisao"]>
  export type RescisaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type RescisaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type RescisaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $RescisaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rescisao"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      month: number
      year: number
      tipoRescisao: string
      dataAdmissao: Date
      dataDemissao: Date
      avisoPrevio: string
      saldoSalario: number
      decimoTerceiroProp: number
      decimoTerceiroInd: number
      feriasProp: number
      feriasInd: number
      tercoFeriasProp: number
      tercoFeriasInd: number
      feriasVencidas: number
      avisoPrevioIndeniz: number
      fgtsRescisorio: number
      multaFgts: number
      inss: number
      inss13: number
      irrf: number
      totalBruto: number
      totalLiquido: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rescisao"]>
    composites: {}
  }

  type RescisaoGetPayload<S extends boolean | null | undefined | RescisaoDefaultArgs> = $Result.GetResult<Prisma.$RescisaoPayload, S>

  type RescisaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RescisaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RescisaoCountAggregateInputType | true
    }

  export interface RescisaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rescisao'], meta: { name: 'Rescisao' } }
    /**
     * Find zero or one Rescisao that matches the filter.
     * @param {RescisaoFindUniqueArgs} args - Arguments to find a Rescisao
     * @example
     * // Get one Rescisao
     * const rescisao = await prisma.rescisao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RescisaoFindUniqueArgs>(args: SelectSubset<T, RescisaoFindUniqueArgs<ExtArgs>>): Prisma__RescisaoClient<$Result.GetResult<Prisma.$RescisaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rescisao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RescisaoFindUniqueOrThrowArgs} args - Arguments to find a Rescisao
     * @example
     * // Get one Rescisao
     * const rescisao = await prisma.rescisao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RescisaoFindUniqueOrThrowArgs>(args: SelectSubset<T, RescisaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RescisaoClient<$Result.GetResult<Prisma.$RescisaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rescisao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RescisaoFindFirstArgs} args - Arguments to find a Rescisao
     * @example
     * // Get one Rescisao
     * const rescisao = await prisma.rescisao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RescisaoFindFirstArgs>(args?: SelectSubset<T, RescisaoFindFirstArgs<ExtArgs>>): Prisma__RescisaoClient<$Result.GetResult<Prisma.$RescisaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rescisao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RescisaoFindFirstOrThrowArgs} args - Arguments to find a Rescisao
     * @example
     * // Get one Rescisao
     * const rescisao = await prisma.rescisao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RescisaoFindFirstOrThrowArgs>(args?: SelectSubset<T, RescisaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RescisaoClient<$Result.GetResult<Prisma.$RescisaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rescisaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RescisaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rescisaos
     * const rescisaos = await prisma.rescisao.findMany()
     * 
     * // Get first 10 Rescisaos
     * const rescisaos = await prisma.rescisao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rescisaoWithIdOnly = await prisma.rescisao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RescisaoFindManyArgs>(args?: SelectSubset<T, RescisaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RescisaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rescisao.
     * @param {RescisaoCreateArgs} args - Arguments to create a Rescisao.
     * @example
     * // Create one Rescisao
     * const Rescisao = await prisma.rescisao.create({
     *   data: {
     *     // ... data to create a Rescisao
     *   }
     * })
     * 
     */
    create<T extends RescisaoCreateArgs>(args: SelectSubset<T, RescisaoCreateArgs<ExtArgs>>): Prisma__RescisaoClient<$Result.GetResult<Prisma.$RescisaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rescisaos.
     * @param {RescisaoCreateManyArgs} args - Arguments to create many Rescisaos.
     * @example
     * // Create many Rescisaos
     * const rescisao = await prisma.rescisao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RescisaoCreateManyArgs>(args?: SelectSubset<T, RescisaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rescisaos and returns the data saved in the database.
     * @param {RescisaoCreateManyAndReturnArgs} args - Arguments to create many Rescisaos.
     * @example
     * // Create many Rescisaos
     * const rescisao = await prisma.rescisao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rescisaos and only return the `id`
     * const rescisaoWithIdOnly = await prisma.rescisao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RescisaoCreateManyAndReturnArgs>(args?: SelectSubset<T, RescisaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RescisaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rescisao.
     * @param {RescisaoDeleteArgs} args - Arguments to delete one Rescisao.
     * @example
     * // Delete one Rescisao
     * const Rescisao = await prisma.rescisao.delete({
     *   where: {
     *     // ... filter to delete one Rescisao
     *   }
     * })
     * 
     */
    delete<T extends RescisaoDeleteArgs>(args: SelectSubset<T, RescisaoDeleteArgs<ExtArgs>>): Prisma__RescisaoClient<$Result.GetResult<Prisma.$RescisaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rescisao.
     * @param {RescisaoUpdateArgs} args - Arguments to update one Rescisao.
     * @example
     * // Update one Rescisao
     * const rescisao = await prisma.rescisao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RescisaoUpdateArgs>(args: SelectSubset<T, RescisaoUpdateArgs<ExtArgs>>): Prisma__RescisaoClient<$Result.GetResult<Prisma.$RescisaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rescisaos.
     * @param {RescisaoDeleteManyArgs} args - Arguments to filter Rescisaos to delete.
     * @example
     * // Delete a few Rescisaos
     * const { count } = await prisma.rescisao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RescisaoDeleteManyArgs>(args?: SelectSubset<T, RescisaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rescisaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RescisaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rescisaos
     * const rescisao = await prisma.rescisao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RescisaoUpdateManyArgs>(args: SelectSubset<T, RescisaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rescisaos and returns the data updated in the database.
     * @param {RescisaoUpdateManyAndReturnArgs} args - Arguments to update many Rescisaos.
     * @example
     * // Update many Rescisaos
     * const rescisao = await prisma.rescisao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rescisaos and only return the `id`
     * const rescisaoWithIdOnly = await prisma.rescisao.updateManyAndReturn({
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
    updateManyAndReturn<T extends RescisaoUpdateManyAndReturnArgs>(args: SelectSubset<T, RescisaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RescisaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rescisao.
     * @param {RescisaoUpsertArgs} args - Arguments to update or create a Rescisao.
     * @example
     * // Update or create a Rescisao
     * const rescisao = await prisma.rescisao.upsert({
     *   create: {
     *     // ... data to create a Rescisao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rescisao we want to update
     *   }
     * })
     */
    upsert<T extends RescisaoUpsertArgs>(args: SelectSubset<T, RescisaoUpsertArgs<ExtArgs>>): Prisma__RescisaoClient<$Result.GetResult<Prisma.$RescisaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rescisaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RescisaoCountArgs} args - Arguments to filter Rescisaos to count.
     * @example
     * // Count the number of Rescisaos
     * const count = await prisma.rescisao.count({
     *   where: {
     *     // ... the filter for the Rescisaos we want to count
     *   }
     * })
    **/
    count<T extends RescisaoCountArgs>(
      args?: Subset<T, RescisaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RescisaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rescisao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RescisaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RescisaoAggregateArgs>(args: Subset<T, RescisaoAggregateArgs>): Prisma.PrismaPromise<GetRescisaoAggregateType<T>>

    /**
     * Group by Rescisao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RescisaoGroupByArgs} args - Group by arguments.
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
      T extends RescisaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RescisaoGroupByArgs['orderBy'] }
        : { orderBy?: RescisaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RescisaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRescisaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rescisao model
   */
  readonly fields: RescisaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rescisao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RescisaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Rescisao model
   */
  interface RescisaoFieldRefs {
    readonly id: FieldRef<"Rescisao", 'String'>
    readonly employeeId: FieldRef<"Rescisao", 'String'>
    readonly month: FieldRef<"Rescisao", 'Int'>
    readonly year: FieldRef<"Rescisao", 'Int'>
    readonly tipoRescisao: FieldRef<"Rescisao", 'String'>
    readonly dataAdmissao: FieldRef<"Rescisao", 'DateTime'>
    readonly dataDemissao: FieldRef<"Rescisao", 'DateTime'>
    readonly avisoPrevio: FieldRef<"Rescisao", 'String'>
    readonly saldoSalario: FieldRef<"Rescisao", 'Float'>
    readonly decimoTerceiroProp: FieldRef<"Rescisao", 'Float'>
    readonly decimoTerceiroInd: FieldRef<"Rescisao", 'Float'>
    readonly feriasProp: FieldRef<"Rescisao", 'Float'>
    readonly feriasInd: FieldRef<"Rescisao", 'Float'>
    readonly tercoFeriasProp: FieldRef<"Rescisao", 'Float'>
    readonly tercoFeriasInd: FieldRef<"Rescisao", 'Float'>
    readonly feriasVencidas: FieldRef<"Rescisao", 'Float'>
    readonly avisoPrevioIndeniz: FieldRef<"Rescisao", 'Float'>
    readonly fgtsRescisorio: FieldRef<"Rescisao", 'Float'>
    readonly multaFgts: FieldRef<"Rescisao", 'Float'>
    readonly inss: FieldRef<"Rescisao", 'Float'>
    readonly inss13: FieldRef<"Rescisao", 'Float'>
    readonly irrf: FieldRef<"Rescisao", 'Float'>
    readonly totalBruto: FieldRef<"Rescisao", 'Float'>
    readonly totalLiquido: FieldRef<"Rescisao", 'Float'>
    readonly status: FieldRef<"Rescisao", 'String'>
    readonly createdAt: FieldRef<"Rescisao", 'DateTime'>
    readonly updatedAt: FieldRef<"Rescisao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rescisao findUnique
   */
  export type RescisaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rescisao
     */
    select?: RescisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rescisao
     */
    omit?: RescisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescisaoInclude<ExtArgs> | null
    /**
     * Filter, which Rescisao to fetch.
     */
    where: RescisaoWhereUniqueInput
  }

  /**
   * Rescisao findUniqueOrThrow
   */
  export type RescisaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rescisao
     */
    select?: RescisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rescisao
     */
    omit?: RescisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescisaoInclude<ExtArgs> | null
    /**
     * Filter, which Rescisao to fetch.
     */
    where: RescisaoWhereUniqueInput
  }

  /**
   * Rescisao findFirst
   */
  export type RescisaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rescisao
     */
    select?: RescisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rescisao
     */
    omit?: RescisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescisaoInclude<ExtArgs> | null
    /**
     * Filter, which Rescisao to fetch.
     */
    where?: RescisaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rescisaos to fetch.
     */
    orderBy?: RescisaoOrderByWithRelationInput | RescisaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rescisaos.
     */
    cursor?: RescisaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rescisaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rescisaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rescisaos.
     */
    distinct?: RescisaoScalarFieldEnum | RescisaoScalarFieldEnum[]
  }

  /**
   * Rescisao findFirstOrThrow
   */
  export type RescisaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rescisao
     */
    select?: RescisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rescisao
     */
    omit?: RescisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescisaoInclude<ExtArgs> | null
    /**
     * Filter, which Rescisao to fetch.
     */
    where?: RescisaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rescisaos to fetch.
     */
    orderBy?: RescisaoOrderByWithRelationInput | RescisaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rescisaos.
     */
    cursor?: RescisaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rescisaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rescisaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rescisaos.
     */
    distinct?: RescisaoScalarFieldEnum | RescisaoScalarFieldEnum[]
  }

  /**
   * Rescisao findMany
   */
  export type RescisaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rescisao
     */
    select?: RescisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rescisao
     */
    omit?: RescisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescisaoInclude<ExtArgs> | null
    /**
     * Filter, which Rescisaos to fetch.
     */
    where?: RescisaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rescisaos to fetch.
     */
    orderBy?: RescisaoOrderByWithRelationInput | RescisaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rescisaos.
     */
    cursor?: RescisaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rescisaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rescisaos.
     */
    skip?: number
    distinct?: RescisaoScalarFieldEnum | RescisaoScalarFieldEnum[]
  }

  /**
   * Rescisao create
   */
  export type RescisaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rescisao
     */
    select?: RescisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rescisao
     */
    omit?: RescisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescisaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Rescisao.
     */
    data: XOR<RescisaoCreateInput, RescisaoUncheckedCreateInput>
  }

  /**
   * Rescisao createMany
   */
  export type RescisaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rescisaos.
     */
    data: RescisaoCreateManyInput | RescisaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rescisao createManyAndReturn
   */
  export type RescisaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rescisao
     */
    select?: RescisaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rescisao
     */
    omit?: RescisaoOmit<ExtArgs> | null
    /**
     * The data used to create many Rescisaos.
     */
    data: RescisaoCreateManyInput | RescisaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescisaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rescisao update
   */
  export type RescisaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rescisao
     */
    select?: RescisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rescisao
     */
    omit?: RescisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescisaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Rescisao.
     */
    data: XOR<RescisaoUpdateInput, RescisaoUncheckedUpdateInput>
    /**
     * Choose, which Rescisao to update.
     */
    where: RescisaoWhereUniqueInput
  }

  /**
   * Rescisao updateMany
   */
  export type RescisaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rescisaos.
     */
    data: XOR<RescisaoUpdateManyMutationInput, RescisaoUncheckedUpdateManyInput>
    /**
     * Filter which Rescisaos to update
     */
    where?: RescisaoWhereInput
    /**
     * Limit how many Rescisaos to update.
     */
    limit?: number
  }

  /**
   * Rescisao updateManyAndReturn
   */
  export type RescisaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rescisao
     */
    select?: RescisaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rescisao
     */
    omit?: RescisaoOmit<ExtArgs> | null
    /**
     * The data used to update Rescisaos.
     */
    data: XOR<RescisaoUpdateManyMutationInput, RescisaoUncheckedUpdateManyInput>
    /**
     * Filter which Rescisaos to update
     */
    where?: RescisaoWhereInput
    /**
     * Limit how many Rescisaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescisaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rescisao upsert
   */
  export type RescisaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rescisao
     */
    select?: RescisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rescisao
     */
    omit?: RescisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescisaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Rescisao to update in case it exists.
     */
    where: RescisaoWhereUniqueInput
    /**
     * In case the Rescisao found by the `where` argument doesn't exist, create a new Rescisao with this data.
     */
    create: XOR<RescisaoCreateInput, RescisaoUncheckedCreateInput>
    /**
     * In case the Rescisao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RescisaoUpdateInput, RescisaoUncheckedUpdateInput>
  }

  /**
   * Rescisao delete
   */
  export type RescisaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rescisao
     */
    select?: RescisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rescisao
     */
    omit?: RescisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescisaoInclude<ExtArgs> | null
    /**
     * Filter which Rescisao to delete.
     */
    where: RescisaoWhereUniqueInput
  }

  /**
   * Rescisao deleteMany
   */
  export type RescisaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rescisaos to delete
     */
    where?: RescisaoWhereInput
    /**
     * Limit how many Rescisaos to delete.
     */
    limit?: number
  }

  /**
   * Rescisao without action
   */
  export type RescisaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rescisao
     */
    select?: RescisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rescisao
     */
    omit?: RescisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescisaoInclude<ExtArgs> | null
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
    profilePhotoUrl: 'profilePhotoUrl',
    startDate: 'startDate',
    eatsAtSchool: 'eatsAtSchool',
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


  export const SubjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const EmployeeSubjectScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    subjectId: 'subjectId',
    createdAt: 'createdAt'
  };

  export type EmployeeSubjectScalarFieldEnum = (typeof EmployeeSubjectScalarFieldEnum)[keyof typeof EmployeeSubjectScalarFieldEnum]


  export const TeachingAssignmentScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    subjectId: 'subjectId',
    weekday: 'weekday',
    startTime: 'startTime',
    endTime: 'endTime',
    classGroup: 'classGroup',
    lessonStart: 'lessonStart',
    lessonEnd: 'lessonEnd',
    fullDay: 'fullDay',
    hours: 'hours',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeachingAssignmentScalarFieldEnum = (typeof TeachingAssignmentScalarFieldEnum)[keyof typeof TeachingAssignmentScalarFieldEnum]


  export const SalaryAdjustmentScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    effectiveDate: 'effectiveDate',
    previousSalary: 'previousSalary',
    newSalary: 'newSalary',
    adjustmentValue: 'adjustmentValue',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type SalaryAdjustmentScalarFieldEnum = (typeof SalaryAdjustmentScalarFieldEnum)[keyof typeof SalaryAdjustmentScalarFieldEnum]


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


  export const RescisaoScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    month: 'month',
    year: 'year',
    tipoRescisao: 'tipoRescisao',
    dataAdmissao: 'dataAdmissao',
    dataDemissao: 'dataDemissao',
    avisoPrevio: 'avisoPrevio',
    saldoSalario: 'saldoSalario',
    decimoTerceiroProp: 'decimoTerceiroProp',
    decimoTerceiroInd: 'decimoTerceiroInd',
    feriasProp: 'feriasProp',
    feriasInd: 'feriasInd',
    tercoFeriasProp: 'tercoFeriasProp',
    tercoFeriasInd: 'tercoFeriasInd',
    feriasVencidas: 'feriasVencidas',
    avisoPrevioIndeniz: 'avisoPrevioIndeniz',
    fgtsRescisorio: 'fgtsRescisorio',
    multaFgts: 'multaFgts',
    inss: 'inss',
    inss13: 'inss13',
    irrf: 'irrf',
    totalBruto: 'totalBruto',
    totalLiquido: 'totalLiquido',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RescisaoScalarFieldEnum = (typeof RescisaoScalarFieldEnum)[keyof typeof RescisaoScalarFieldEnum]


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
    profilePhotoUrl?: StringNullableFilter<"Employee"> | string | null
    startDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    eatsAtSchool?: BoolFilter<"Employee"> | boolean
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
    rescisoes?: RescisaoListRelationFilter
    employeeSubjects?: EmployeeSubjectListRelationFilter
    teachingAssignments?: TeachingAssignmentListRelationFilter
    salaryAdjustments?: SalaryAdjustmentListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    type?: SortOrder
    role?: SortOrder
    baseSalary?: SortOrder
    profilePhotoUrl?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    eatsAtSchool?: SortOrder
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
    rescisoes?: RescisaoOrderByRelationAggregateInput
    employeeSubjects?: EmployeeSubjectOrderByRelationAggregateInput
    teachingAssignments?: TeachingAssignmentOrderByRelationAggregateInput
    salaryAdjustments?: SalaryAdjustmentOrderByRelationAggregateInput
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
    profilePhotoUrl?: StringNullableFilter<"Employee"> | string | null
    startDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    eatsAtSchool?: BoolFilter<"Employee"> | boolean
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
    rescisoes?: RescisaoListRelationFilter
    employeeSubjects?: EmployeeSubjectListRelationFilter
    teachingAssignments?: TeachingAssignmentListRelationFilter
    salaryAdjustments?: SalaryAdjustmentListRelationFilter
  }, "id" | "cpf">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    type?: SortOrder
    role?: SortOrder
    baseSalary?: SortOrder
    profilePhotoUrl?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    eatsAtSchool?: SortOrder
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
    profilePhotoUrl?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    eatsAtSchool?: BoolWithAggregatesFilter<"Employee"> | boolean
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

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    employeeSubjects?: EmployeeSubjectListRelationFilter
    teachingAssignments?: TeachingAssignmentListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employeeSubjects?: EmployeeSubjectOrderByRelationAggregateInput
    teachingAssignments?: TeachingAssignmentOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    employeeSubjects?: EmployeeSubjectListRelationFilter
    teachingAssignments?: TeachingAssignmentListRelationFilter
  }, "id" | "name">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subject"> | string
    name?: StringWithAggregatesFilter<"Subject"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
  }

  export type EmployeeSubjectWhereInput = {
    AND?: EmployeeSubjectWhereInput | EmployeeSubjectWhereInput[]
    OR?: EmployeeSubjectWhereInput[]
    NOT?: EmployeeSubjectWhereInput | EmployeeSubjectWhereInput[]
    id?: StringFilter<"EmployeeSubject"> | string
    employeeId?: StringFilter<"EmployeeSubject"> | string
    subjectId?: StringFilter<"EmployeeSubject"> | string
    createdAt?: DateTimeFilter<"EmployeeSubject"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type EmployeeSubjectOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
  }

  export type EmployeeSubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeId_subjectId?: EmployeeSubjectEmployeeIdSubjectIdCompoundUniqueInput
    AND?: EmployeeSubjectWhereInput | EmployeeSubjectWhereInput[]
    OR?: EmployeeSubjectWhereInput[]
    NOT?: EmployeeSubjectWhereInput | EmployeeSubjectWhereInput[]
    employeeId?: StringFilter<"EmployeeSubject"> | string
    subjectId?: StringFilter<"EmployeeSubject"> | string
    createdAt?: DateTimeFilter<"EmployeeSubject"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "id" | "employeeId_subjectId">

  export type EmployeeSubjectOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
    _count?: EmployeeSubjectCountOrderByAggregateInput
    _max?: EmployeeSubjectMaxOrderByAggregateInput
    _min?: EmployeeSubjectMinOrderByAggregateInput
  }

  export type EmployeeSubjectScalarWhereWithAggregatesInput = {
    AND?: EmployeeSubjectScalarWhereWithAggregatesInput | EmployeeSubjectScalarWhereWithAggregatesInput[]
    OR?: EmployeeSubjectScalarWhereWithAggregatesInput[]
    NOT?: EmployeeSubjectScalarWhereWithAggregatesInput | EmployeeSubjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmployeeSubject"> | string
    employeeId?: StringWithAggregatesFilter<"EmployeeSubject"> | string
    subjectId?: StringWithAggregatesFilter<"EmployeeSubject"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EmployeeSubject"> | Date | string
  }

  export type TeachingAssignmentWhereInput = {
    AND?: TeachingAssignmentWhereInput | TeachingAssignmentWhereInput[]
    OR?: TeachingAssignmentWhereInput[]
    NOT?: TeachingAssignmentWhereInput | TeachingAssignmentWhereInput[]
    id?: StringFilter<"TeachingAssignment"> | string
    employeeId?: StringFilter<"TeachingAssignment"> | string
    subjectId?: StringFilter<"TeachingAssignment"> | string
    weekday?: IntFilter<"TeachingAssignment"> | number
    startTime?: StringFilter<"TeachingAssignment"> | string
    endTime?: StringFilter<"TeachingAssignment"> | string
    classGroup?: StringNullableFilter<"TeachingAssignment"> | string | null
    lessonStart?: IntNullableFilter<"TeachingAssignment"> | number | null
    lessonEnd?: IntNullableFilter<"TeachingAssignment"> | number | null
    fullDay?: BoolFilter<"TeachingAssignment"> | boolean
    hours?: FloatFilter<"TeachingAssignment"> | number
    active?: BoolFilter<"TeachingAssignment"> | boolean
    createdAt?: DateTimeFilter<"TeachingAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"TeachingAssignment"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type TeachingAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    subjectId?: SortOrder
    weekday?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    classGroup?: SortOrderInput | SortOrder
    lessonStart?: SortOrderInput | SortOrder
    lessonEnd?: SortOrderInput | SortOrder
    fullDay?: SortOrder
    hours?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
  }

  export type TeachingAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeachingAssignmentWhereInput | TeachingAssignmentWhereInput[]
    OR?: TeachingAssignmentWhereInput[]
    NOT?: TeachingAssignmentWhereInput | TeachingAssignmentWhereInput[]
    employeeId?: StringFilter<"TeachingAssignment"> | string
    subjectId?: StringFilter<"TeachingAssignment"> | string
    weekday?: IntFilter<"TeachingAssignment"> | number
    startTime?: StringFilter<"TeachingAssignment"> | string
    endTime?: StringFilter<"TeachingAssignment"> | string
    classGroup?: StringNullableFilter<"TeachingAssignment"> | string | null
    lessonStart?: IntNullableFilter<"TeachingAssignment"> | number | null
    lessonEnd?: IntNullableFilter<"TeachingAssignment"> | number | null
    fullDay?: BoolFilter<"TeachingAssignment"> | boolean
    hours?: FloatFilter<"TeachingAssignment"> | number
    active?: BoolFilter<"TeachingAssignment"> | boolean
    createdAt?: DateTimeFilter<"TeachingAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"TeachingAssignment"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "id">

  export type TeachingAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    subjectId?: SortOrder
    weekday?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    classGroup?: SortOrderInput | SortOrder
    lessonStart?: SortOrderInput | SortOrder
    lessonEnd?: SortOrderInput | SortOrder
    fullDay?: SortOrder
    hours?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeachingAssignmentCountOrderByAggregateInput
    _avg?: TeachingAssignmentAvgOrderByAggregateInput
    _max?: TeachingAssignmentMaxOrderByAggregateInput
    _min?: TeachingAssignmentMinOrderByAggregateInput
    _sum?: TeachingAssignmentSumOrderByAggregateInput
  }

  export type TeachingAssignmentScalarWhereWithAggregatesInput = {
    AND?: TeachingAssignmentScalarWhereWithAggregatesInput | TeachingAssignmentScalarWhereWithAggregatesInput[]
    OR?: TeachingAssignmentScalarWhereWithAggregatesInput[]
    NOT?: TeachingAssignmentScalarWhereWithAggregatesInput | TeachingAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeachingAssignment"> | string
    employeeId?: StringWithAggregatesFilter<"TeachingAssignment"> | string
    subjectId?: StringWithAggregatesFilter<"TeachingAssignment"> | string
    weekday?: IntWithAggregatesFilter<"TeachingAssignment"> | number
    startTime?: StringWithAggregatesFilter<"TeachingAssignment"> | string
    endTime?: StringWithAggregatesFilter<"TeachingAssignment"> | string
    classGroup?: StringNullableWithAggregatesFilter<"TeachingAssignment"> | string | null
    lessonStart?: IntNullableWithAggregatesFilter<"TeachingAssignment"> | number | null
    lessonEnd?: IntNullableWithAggregatesFilter<"TeachingAssignment"> | number | null
    fullDay?: BoolWithAggregatesFilter<"TeachingAssignment"> | boolean
    hours?: FloatWithAggregatesFilter<"TeachingAssignment"> | number
    active?: BoolWithAggregatesFilter<"TeachingAssignment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TeachingAssignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeachingAssignment"> | Date | string
  }

  export type SalaryAdjustmentWhereInput = {
    AND?: SalaryAdjustmentWhereInput | SalaryAdjustmentWhereInput[]
    OR?: SalaryAdjustmentWhereInput[]
    NOT?: SalaryAdjustmentWhereInput | SalaryAdjustmentWhereInput[]
    id?: StringFilter<"SalaryAdjustment"> | string
    employeeId?: StringFilter<"SalaryAdjustment"> | string
    effectiveDate?: DateTimeFilter<"SalaryAdjustment"> | Date | string
    previousSalary?: FloatFilter<"SalaryAdjustment"> | number
    newSalary?: FloatFilter<"SalaryAdjustment"> | number
    adjustmentValue?: FloatFilter<"SalaryAdjustment"> | number
    notes?: StringNullableFilter<"SalaryAdjustment"> | string | null
    createdAt?: DateTimeFilter<"SalaryAdjustment"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type SalaryAdjustmentOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    effectiveDate?: SortOrder
    previousSalary?: SortOrder
    newSalary?: SortOrder
    adjustmentValue?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type SalaryAdjustmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalaryAdjustmentWhereInput | SalaryAdjustmentWhereInput[]
    OR?: SalaryAdjustmentWhereInput[]
    NOT?: SalaryAdjustmentWhereInput | SalaryAdjustmentWhereInput[]
    employeeId?: StringFilter<"SalaryAdjustment"> | string
    effectiveDate?: DateTimeFilter<"SalaryAdjustment"> | Date | string
    previousSalary?: FloatFilter<"SalaryAdjustment"> | number
    newSalary?: FloatFilter<"SalaryAdjustment"> | number
    adjustmentValue?: FloatFilter<"SalaryAdjustment"> | number
    notes?: StringNullableFilter<"SalaryAdjustment"> | string | null
    createdAt?: DateTimeFilter<"SalaryAdjustment"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type SalaryAdjustmentOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    effectiveDate?: SortOrder
    previousSalary?: SortOrder
    newSalary?: SortOrder
    adjustmentValue?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SalaryAdjustmentCountOrderByAggregateInput
    _avg?: SalaryAdjustmentAvgOrderByAggregateInput
    _max?: SalaryAdjustmentMaxOrderByAggregateInput
    _min?: SalaryAdjustmentMinOrderByAggregateInput
    _sum?: SalaryAdjustmentSumOrderByAggregateInput
  }

  export type SalaryAdjustmentScalarWhereWithAggregatesInput = {
    AND?: SalaryAdjustmentScalarWhereWithAggregatesInput | SalaryAdjustmentScalarWhereWithAggregatesInput[]
    OR?: SalaryAdjustmentScalarWhereWithAggregatesInput[]
    NOT?: SalaryAdjustmentScalarWhereWithAggregatesInput | SalaryAdjustmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalaryAdjustment"> | string
    employeeId?: StringWithAggregatesFilter<"SalaryAdjustment"> | string
    effectiveDate?: DateTimeWithAggregatesFilter<"SalaryAdjustment"> | Date | string
    previousSalary?: FloatWithAggregatesFilter<"SalaryAdjustment"> | number
    newSalary?: FloatWithAggregatesFilter<"SalaryAdjustment"> | number
    adjustmentValue?: FloatWithAggregatesFilter<"SalaryAdjustment"> | number
    notes?: StringNullableWithAggregatesFilter<"SalaryAdjustment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SalaryAdjustment"> | Date | string
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

  export type RescisaoWhereInput = {
    AND?: RescisaoWhereInput | RescisaoWhereInput[]
    OR?: RescisaoWhereInput[]
    NOT?: RescisaoWhereInput | RescisaoWhereInput[]
    id?: StringFilter<"Rescisao"> | string
    employeeId?: StringFilter<"Rescisao"> | string
    month?: IntFilter<"Rescisao"> | number
    year?: IntFilter<"Rescisao"> | number
    tipoRescisao?: StringFilter<"Rescisao"> | string
    dataAdmissao?: DateTimeFilter<"Rescisao"> | Date | string
    dataDemissao?: DateTimeFilter<"Rescisao"> | Date | string
    avisoPrevio?: StringFilter<"Rescisao"> | string
    saldoSalario?: FloatFilter<"Rescisao"> | number
    decimoTerceiroProp?: FloatFilter<"Rescisao"> | number
    decimoTerceiroInd?: FloatFilter<"Rescisao"> | number
    feriasProp?: FloatFilter<"Rescisao"> | number
    feriasInd?: FloatFilter<"Rescisao"> | number
    tercoFeriasProp?: FloatFilter<"Rescisao"> | number
    tercoFeriasInd?: FloatFilter<"Rescisao"> | number
    feriasVencidas?: FloatFilter<"Rescisao"> | number
    avisoPrevioIndeniz?: FloatFilter<"Rescisao"> | number
    fgtsRescisorio?: FloatFilter<"Rescisao"> | number
    multaFgts?: FloatFilter<"Rescisao"> | number
    inss?: FloatFilter<"Rescisao"> | number
    inss13?: FloatFilter<"Rescisao"> | number
    irrf?: FloatFilter<"Rescisao"> | number
    totalBruto?: FloatFilter<"Rescisao"> | number
    totalLiquido?: FloatFilter<"Rescisao"> | number
    status?: StringFilter<"Rescisao"> | string
    createdAt?: DateTimeFilter<"Rescisao"> | Date | string
    updatedAt?: DateTimeFilter<"Rescisao"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type RescisaoOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    tipoRescisao?: SortOrder
    dataAdmissao?: SortOrder
    dataDemissao?: SortOrder
    avisoPrevio?: SortOrder
    saldoSalario?: SortOrder
    decimoTerceiroProp?: SortOrder
    decimoTerceiroInd?: SortOrder
    feriasProp?: SortOrder
    feriasInd?: SortOrder
    tercoFeriasProp?: SortOrder
    tercoFeriasInd?: SortOrder
    feriasVencidas?: SortOrder
    avisoPrevioIndeniz?: SortOrder
    fgtsRescisorio?: SortOrder
    multaFgts?: SortOrder
    inss?: SortOrder
    inss13?: SortOrder
    irrf?: SortOrder
    totalBruto?: SortOrder
    totalLiquido?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type RescisaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    rescisao_identifier?: RescisaoRescisao_identifierCompoundUniqueInput
    AND?: RescisaoWhereInput | RescisaoWhereInput[]
    OR?: RescisaoWhereInput[]
    NOT?: RescisaoWhereInput | RescisaoWhereInput[]
    employeeId?: StringFilter<"Rescisao"> | string
    month?: IntFilter<"Rescisao"> | number
    year?: IntFilter<"Rescisao"> | number
    tipoRescisao?: StringFilter<"Rescisao"> | string
    dataAdmissao?: DateTimeFilter<"Rescisao"> | Date | string
    dataDemissao?: DateTimeFilter<"Rescisao"> | Date | string
    avisoPrevio?: StringFilter<"Rescisao"> | string
    saldoSalario?: FloatFilter<"Rescisao"> | number
    decimoTerceiroProp?: FloatFilter<"Rescisao"> | number
    decimoTerceiroInd?: FloatFilter<"Rescisao"> | number
    feriasProp?: FloatFilter<"Rescisao"> | number
    feriasInd?: FloatFilter<"Rescisao"> | number
    tercoFeriasProp?: FloatFilter<"Rescisao"> | number
    tercoFeriasInd?: FloatFilter<"Rescisao"> | number
    feriasVencidas?: FloatFilter<"Rescisao"> | number
    avisoPrevioIndeniz?: FloatFilter<"Rescisao"> | number
    fgtsRescisorio?: FloatFilter<"Rescisao"> | number
    multaFgts?: FloatFilter<"Rescisao"> | number
    inss?: FloatFilter<"Rescisao"> | number
    inss13?: FloatFilter<"Rescisao"> | number
    irrf?: FloatFilter<"Rescisao"> | number
    totalBruto?: FloatFilter<"Rescisao"> | number
    totalLiquido?: FloatFilter<"Rescisao"> | number
    status?: StringFilter<"Rescisao"> | string
    createdAt?: DateTimeFilter<"Rescisao"> | Date | string
    updatedAt?: DateTimeFilter<"Rescisao"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id" | "rescisao_identifier">

  export type RescisaoOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    tipoRescisao?: SortOrder
    dataAdmissao?: SortOrder
    dataDemissao?: SortOrder
    avisoPrevio?: SortOrder
    saldoSalario?: SortOrder
    decimoTerceiroProp?: SortOrder
    decimoTerceiroInd?: SortOrder
    feriasProp?: SortOrder
    feriasInd?: SortOrder
    tercoFeriasProp?: SortOrder
    tercoFeriasInd?: SortOrder
    feriasVencidas?: SortOrder
    avisoPrevioIndeniz?: SortOrder
    fgtsRescisorio?: SortOrder
    multaFgts?: SortOrder
    inss?: SortOrder
    inss13?: SortOrder
    irrf?: SortOrder
    totalBruto?: SortOrder
    totalLiquido?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RescisaoCountOrderByAggregateInput
    _avg?: RescisaoAvgOrderByAggregateInput
    _max?: RescisaoMaxOrderByAggregateInput
    _min?: RescisaoMinOrderByAggregateInput
    _sum?: RescisaoSumOrderByAggregateInput
  }

  export type RescisaoScalarWhereWithAggregatesInput = {
    AND?: RescisaoScalarWhereWithAggregatesInput | RescisaoScalarWhereWithAggregatesInput[]
    OR?: RescisaoScalarWhereWithAggregatesInput[]
    NOT?: RescisaoScalarWhereWithAggregatesInput | RescisaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rescisao"> | string
    employeeId?: StringWithAggregatesFilter<"Rescisao"> | string
    month?: IntWithAggregatesFilter<"Rescisao"> | number
    year?: IntWithAggregatesFilter<"Rescisao"> | number
    tipoRescisao?: StringWithAggregatesFilter<"Rescisao"> | string
    dataAdmissao?: DateTimeWithAggregatesFilter<"Rescisao"> | Date | string
    dataDemissao?: DateTimeWithAggregatesFilter<"Rescisao"> | Date | string
    avisoPrevio?: StringWithAggregatesFilter<"Rescisao"> | string
    saldoSalario?: FloatWithAggregatesFilter<"Rescisao"> | number
    decimoTerceiroProp?: FloatWithAggregatesFilter<"Rescisao"> | number
    decimoTerceiroInd?: FloatWithAggregatesFilter<"Rescisao"> | number
    feriasProp?: FloatWithAggregatesFilter<"Rescisao"> | number
    feriasInd?: FloatWithAggregatesFilter<"Rescisao"> | number
    tercoFeriasProp?: FloatWithAggregatesFilter<"Rescisao"> | number
    tercoFeriasInd?: FloatWithAggregatesFilter<"Rescisao"> | number
    feriasVencidas?: FloatWithAggregatesFilter<"Rescisao"> | number
    avisoPrevioIndeniz?: FloatWithAggregatesFilter<"Rescisao"> | number
    fgtsRescisorio?: FloatWithAggregatesFilter<"Rescisao"> | number
    multaFgts?: FloatWithAggregatesFilter<"Rescisao"> | number
    inss?: FloatWithAggregatesFilter<"Rescisao"> | number
    inss13?: FloatWithAggregatesFilter<"Rescisao"> | number
    irrf?: FloatWithAggregatesFilter<"Rescisao"> | number
    totalBruto?: FloatWithAggregatesFilter<"Rescisao"> | number
    totalLiquido?: FloatWithAggregatesFilter<"Rescisao"> | number
    status?: StringWithAggregatesFilter<"Rescisao"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Rescisao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rescisao"> | Date | string
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
    profilePhotoUrl?: string | null
    startDate?: Date | string | null
    eatsAtSchool?: boolean
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
    rescisoes?: RescisaoCreateNestedManyWithoutEmployeeInput
    employeeSubjects?: EmployeeSubjectCreateNestedManyWithoutEmployeeInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutEmployeeInput
    salaryAdjustments?: SalaryAdjustmentCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    profilePhotoUrl?: string | null
    startDate?: Date | string | null
    eatsAtSchool?: boolean
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
    rescisoes?: RescisaoUncheckedCreateNestedManyWithoutEmployeeInput
    employeeSubjects?: EmployeeSubjectUncheckedCreateNestedManyWithoutEmployeeInput
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutEmployeeInput
    salaryAdjustments?: SalaryAdjustmentUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eatsAtSchool?: BoolFieldUpdateOperationsInput | boolean
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
    rescisoes?: RescisaoUpdateManyWithoutEmployeeNestedInput
    employeeSubjects?: EmployeeSubjectUpdateManyWithoutEmployeeNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutEmployeeNestedInput
    salaryAdjustments?: SalaryAdjustmentUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eatsAtSchool?: BoolFieldUpdateOperationsInput | boolean
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
    rescisoes?: RescisaoUncheckedUpdateManyWithoutEmployeeNestedInput
    employeeSubjects?: EmployeeSubjectUncheckedUpdateManyWithoutEmployeeNestedInput
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput
    salaryAdjustments?: SalaryAdjustmentUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    profilePhotoUrl?: string | null
    startDate?: Date | string | null
    eatsAtSchool?: boolean
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
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eatsAtSchool?: BoolFieldUpdateOperationsInput | boolean
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
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eatsAtSchool?: BoolFieldUpdateOperationsInput | boolean
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

  export type SubjectCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employeeSubjects?: EmployeeSubjectCreateNestedManyWithoutSubjectInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employeeSubjects?: EmployeeSubjectUncheckedCreateNestedManyWithoutSubjectInput
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeSubjects?: EmployeeSubjectUpdateManyWithoutSubjectNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeSubjects?: EmployeeSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeSubjectCreateInput = {
    id?: string
    createdAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutEmployeeSubjectsInput
    subject: SubjectCreateNestedOneWithoutEmployeeSubjectsInput
  }

  export type EmployeeSubjectUncheckedCreateInput = {
    id?: string
    employeeId: string
    subjectId: string
    createdAt?: Date | string
  }

  export type EmployeeSubjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutEmployeeSubjectsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutEmployeeSubjectsNestedInput
  }

  export type EmployeeSubjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeSubjectCreateManyInput = {
    id?: string
    employeeId: string
    subjectId: string
    createdAt?: Date | string
  }

  export type EmployeeSubjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeSubjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssignmentCreateInput = {
    id?: string
    weekday: number
    startTime: string
    endTime: string
    classGroup?: string | null
    lessonStart?: number | null
    lessonEnd?: number | null
    fullDay?: boolean
    hours: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutTeachingAssignmentsInput
    subject: SubjectCreateNestedOneWithoutTeachingAssignmentsInput
  }

  export type TeachingAssignmentUncheckedCreateInput = {
    id?: string
    employeeId: string
    subjectId: string
    weekday: number
    startTime: string
    endTime: string
    classGroup?: string | null
    lessonStart?: number | null
    lessonEnd?: number | null
    fullDay?: boolean
    hours: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeachingAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    lessonStart?: NullableIntFieldUpdateOperationsInput | number | null
    lessonEnd?: NullableIntFieldUpdateOperationsInput | number | null
    fullDay?: BoolFieldUpdateOperationsInput | boolean
    hours?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutTeachingAssignmentsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutTeachingAssignmentsNestedInput
  }

  export type TeachingAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    lessonStart?: NullableIntFieldUpdateOperationsInput | number | null
    lessonEnd?: NullableIntFieldUpdateOperationsInput | number | null
    fullDay?: BoolFieldUpdateOperationsInput | boolean
    hours?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssignmentCreateManyInput = {
    id?: string
    employeeId: string
    subjectId: string
    weekday: number
    startTime: string
    endTime: string
    classGroup?: string | null
    lessonStart?: number | null
    lessonEnd?: number | null
    fullDay?: boolean
    hours: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeachingAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    lessonStart?: NullableIntFieldUpdateOperationsInput | number | null
    lessonEnd?: NullableIntFieldUpdateOperationsInput | number | null
    fullDay?: BoolFieldUpdateOperationsInput | boolean
    hours?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    lessonStart?: NullableIntFieldUpdateOperationsInput | number | null
    lessonEnd?: NullableIntFieldUpdateOperationsInput | number | null
    fullDay?: BoolFieldUpdateOperationsInput | boolean
    hours?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryAdjustmentCreateInput = {
    id?: string
    effectiveDate: Date | string
    previousSalary: number
    newSalary: number
    adjustmentValue: number
    notes?: string | null
    createdAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutSalaryAdjustmentsInput
  }

  export type SalaryAdjustmentUncheckedCreateInput = {
    id?: string
    employeeId: string
    effectiveDate: Date | string
    previousSalary: number
    newSalary: number
    adjustmentValue: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type SalaryAdjustmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSalary?: FloatFieldUpdateOperationsInput | number
    newSalary?: FloatFieldUpdateOperationsInput | number
    adjustmentValue?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutSalaryAdjustmentsNestedInput
  }

  export type SalaryAdjustmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSalary?: FloatFieldUpdateOperationsInput | number
    newSalary?: FloatFieldUpdateOperationsInput | number
    adjustmentValue?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryAdjustmentCreateManyInput = {
    id?: string
    employeeId: string
    effectiveDate: Date | string
    previousSalary: number
    newSalary: number
    adjustmentValue: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type SalaryAdjustmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSalary?: FloatFieldUpdateOperationsInput | number
    newSalary?: FloatFieldUpdateOperationsInput | number
    adjustmentValue?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryAdjustmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSalary?: FloatFieldUpdateOperationsInput | number
    newSalary?: FloatFieldUpdateOperationsInput | number
    adjustmentValue?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type RescisaoCreateInput = {
    id?: string
    month: number
    year: number
    tipoRescisao: string
    dataAdmissao: Date | string
    dataDemissao: Date | string
    avisoPrevio: string
    saldoSalario?: number
    decimoTerceiroProp?: number
    decimoTerceiroInd?: number
    feriasProp?: number
    feriasInd?: number
    tercoFeriasProp?: number
    tercoFeriasInd?: number
    feriasVencidas?: number
    avisoPrevioIndeniz?: number
    fgtsRescisorio?: number
    multaFgts?: number
    inss?: number
    inss13?: number
    irrf?: number
    totalBruto?: number
    totalLiquido?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutRescisoesInput
  }

  export type RescisaoUncheckedCreateInput = {
    id?: string
    employeeId: string
    month: number
    year: number
    tipoRescisao: string
    dataAdmissao: Date | string
    dataDemissao: Date | string
    avisoPrevio: string
    saldoSalario?: number
    decimoTerceiroProp?: number
    decimoTerceiroInd?: number
    feriasProp?: number
    feriasInd?: number
    tercoFeriasProp?: number
    tercoFeriasInd?: number
    feriasVencidas?: number
    avisoPrevioIndeniz?: number
    fgtsRescisorio?: number
    multaFgts?: number
    inss?: number
    inss13?: number
    irrf?: number
    totalBruto?: number
    totalLiquido?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RescisaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    tipoRescisao?: StringFieldUpdateOperationsInput | string
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDemissao?: DateTimeFieldUpdateOperationsInput | Date | string
    avisoPrevio?: StringFieldUpdateOperationsInput | string
    saldoSalario?: FloatFieldUpdateOperationsInput | number
    decimoTerceiroProp?: FloatFieldUpdateOperationsInput | number
    decimoTerceiroInd?: FloatFieldUpdateOperationsInput | number
    feriasProp?: FloatFieldUpdateOperationsInput | number
    feriasInd?: FloatFieldUpdateOperationsInput | number
    tercoFeriasProp?: FloatFieldUpdateOperationsInput | number
    tercoFeriasInd?: FloatFieldUpdateOperationsInput | number
    feriasVencidas?: FloatFieldUpdateOperationsInput | number
    avisoPrevioIndeniz?: FloatFieldUpdateOperationsInput | number
    fgtsRescisorio?: FloatFieldUpdateOperationsInput | number
    multaFgts?: FloatFieldUpdateOperationsInput | number
    inss?: FloatFieldUpdateOperationsInput | number
    inss13?: FloatFieldUpdateOperationsInput | number
    irrf?: FloatFieldUpdateOperationsInput | number
    totalBruto?: FloatFieldUpdateOperationsInput | number
    totalLiquido?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutRescisoesNestedInput
  }

  export type RescisaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    tipoRescisao?: StringFieldUpdateOperationsInput | string
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDemissao?: DateTimeFieldUpdateOperationsInput | Date | string
    avisoPrevio?: StringFieldUpdateOperationsInput | string
    saldoSalario?: FloatFieldUpdateOperationsInput | number
    decimoTerceiroProp?: FloatFieldUpdateOperationsInput | number
    decimoTerceiroInd?: FloatFieldUpdateOperationsInput | number
    feriasProp?: FloatFieldUpdateOperationsInput | number
    feriasInd?: FloatFieldUpdateOperationsInput | number
    tercoFeriasProp?: FloatFieldUpdateOperationsInput | number
    tercoFeriasInd?: FloatFieldUpdateOperationsInput | number
    feriasVencidas?: FloatFieldUpdateOperationsInput | number
    avisoPrevioIndeniz?: FloatFieldUpdateOperationsInput | number
    fgtsRescisorio?: FloatFieldUpdateOperationsInput | number
    multaFgts?: FloatFieldUpdateOperationsInput | number
    inss?: FloatFieldUpdateOperationsInput | number
    inss13?: FloatFieldUpdateOperationsInput | number
    irrf?: FloatFieldUpdateOperationsInput | number
    totalBruto?: FloatFieldUpdateOperationsInput | number
    totalLiquido?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RescisaoCreateManyInput = {
    id?: string
    employeeId: string
    month: number
    year: number
    tipoRescisao: string
    dataAdmissao: Date | string
    dataDemissao: Date | string
    avisoPrevio: string
    saldoSalario?: number
    decimoTerceiroProp?: number
    decimoTerceiroInd?: number
    feriasProp?: number
    feriasInd?: number
    tercoFeriasProp?: number
    tercoFeriasInd?: number
    feriasVencidas?: number
    avisoPrevioIndeniz?: number
    fgtsRescisorio?: number
    multaFgts?: number
    inss?: number
    inss13?: number
    irrf?: number
    totalBruto?: number
    totalLiquido?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RescisaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    tipoRescisao?: StringFieldUpdateOperationsInput | string
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDemissao?: DateTimeFieldUpdateOperationsInput | Date | string
    avisoPrevio?: StringFieldUpdateOperationsInput | string
    saldoSalario?: FloatFieldUpdateOperationsInput | number
    decimoTerceiroProp?: FloatFieldUpdateOperationsInput | number
    decimoTerceiroInd?: FloatFieldUpdateOperationsInput | number
    feriasProp?: FloatFieldUpdateOperationsInput | number
    feriasInd?: FloatFieldUpdateOperationsInput | number
    tercoFeriasProp?: FloatFieldUpdateOperationsInput | number
    tercoFeriasInd?: FloatFieldUpdateOperationsInput | number
    feriasVencidas?: FloatFieldUpdateOperationsInput | number
    avisoPrevioIndeniz?: FloatFieldUpdateOperationsInput | number
    fgtsRescisorio?: FloatFieldUpdateOperationsInput | number
    multaFgts?: FloatFieldUpdateOperationsInput | number
    inss?: FloatFieldUpdateOperationsInput | number
    inss13?: FloatFieldUpdateOperationsInput | number
    irrf?: FloatFieldUpdateOperationsInput | number
    totalBruto?: FloatFieldUpdateOperationsInput | number
    totalLiquido?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RescisaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    tipoRescisao?: StringFieldUpdateOperationsInput | string
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDemissao?: DateTimeFieldUpdateOperationsInput | Date | string
    avisoPrevio?: StringFieldUpdateOperationsInput | string
    saldoSalario?: FloatFieldUpdateOperationsInput | number
    decimoTerceiroProp?: FloatFieldUpdateOperationsInput | number
    decimoTerceiroInd?: FloatFieldUpdateOperationsInput | number
    feriasProp?: FloatFieldUpdateOperationsInput | number
    feriasInd?: FloatFieldUpdateOperationsInput | number
    tercoFeriasProp?: FloatFieldUpdateOperationsInput | number
    tercoFeriasInd?: FloatFieldUpdateOperationsInput | number
    feriasVencidas?: FloatFieldUpdateOperationsInput | number
    avisoPrevioIndeniz?: FloatFieldUpdateOperationsInput | number
    fgtsRescisorio?: FloatFieldUpdateOperationsInput | number
    multaFgts?: FloatFieldUpdateOperationsInput | number
    inss?: FloatFieldUpdateOperationsInput | number
    inss13?: FloatFieldUpdateOperationsInput | number
    irrf?: FloatFieldUpdateOperationsInput | number
    totalBruto?: FloatFieldUpdateOperationsInput | number
    totalLiquido?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type RescisaoListRelationFilter = {
    every?: RescisaoWhereInput
    some?: RescisaoWhereInput
    none?: RescisaoWhereInput
  }

  export type EmployeeSubjectListRelationFilter = {
    every?: EmployeeSubjectWhereInput
    some?: EmployeeSubjectWhereInput
    none?: EmployeeSubjectWhereInput
  }

  export type TeachingAssignmentListRelationFilter = {
    every?: TeachingAssignmentWhereInput
    some?: TeachingAssignmentWhereInput
    none?: TeachingAssignmentWhereInput
  }

  export type SalaryAdjustmentListRelationFilter = {
    every?: SalaryAdjustmentWhereInput
    some?: SalaryAdjustmentWhereInput
    none?: SalaryAdjustmentWhereInput
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

  export type RescisaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeSubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeachingAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalaryAdjustmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    type?: SortOrder
    role?: SortOrder
    baseSalary?: SortOrder
    profilePhotoUrl?: SortOrder
    startDate?: SortOrder
    eatsAtSchool?: SortOrder
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
    profilePhotoUrl?: SortOrder
    startDate?: SortOrder
    eatsAtSchool?: SortOrder
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
    profilePhotoUrl?: SortOrder
    startDate?: SortOrder
    eatsAtSchool?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type EmployeeSubjectEmployeeIdSubjectIdCompoundUniqueInput = {
    employeeId: string
    subjectId: string
  }

  export type EmployeeSubjectCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
  }

  export type EmployeeSubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
  }

  export type EmployeeSubjectMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
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

  export type TeachingAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    subjectId?: SortOrder
    weekday?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    classGroup?: SortOrder
    lessonStart?: SortOrder
    lessonEnd?: SortOrder
    fullDay?: SortOrder
    hours?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeachingAssignmentAvgOrderByAggregateInput = {
    weekday?: SortOrder
    lessonStart?: SortOrder
    lessonEnd?: SortOrder
    hours?: SortOrder
  }

  export type TeachingAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    subjectId?: SortOrder
    weekday?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    classGroup?: SortOrder
    lessonStart?: SortOrder
    lessonEnd?: SortOrder
    fullDay?: SortOrder
    hours?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeachingAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    subjectId?: SortOrder
    weekday?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    classGroup?: SortOrder
    lessonStart?: SortOrder
    lessonEnd?: SortOrder
    fullDay?: SortOrder
    hours?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeachingAssignmentSumOrderByAggregateInput = {
    weekday?: SortOrder
    lessonStart?: SortOrder
    lessonEnd?: SortOrder
    hours?: SortOrder
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

  export type SalaryAdjustmentCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    effectiveDate?: SortOrder
    previousSalary?: SortOrder
    newSalary?: SortOrder
    adjustmentValue?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SalaryAdjustmentAvgOrderByAggregateInput = {
    previousSalary?: SortOrder
    newSalary?: SortOrder
    adjustmentValue?: SortOrder
  }

  export type SalaryAdjustmentMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    effectiveDate?: SortOrder
    previousSalary?: SortOrder
    newSalary?: SortOrder
    adjustmentValue?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SalaryAdjustmentMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    effectiveDate?: SortOrder
    previousSalary?: SortOrder
    newSalary?: SortOrder
    adjustmentValue?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SalaryAdjustmentSumOrderByAggregateInput = {
    previousSalary?: SortOrder
    newSalary?: SortOrder
    adjustmentValue?: SortOrder
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

  export type RescisaoRescisao_identifierCompoundUniqueInput = {
    employeeId: string
    month: number
    year: number
  }

  export type RescisaoCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    tipoRescisao?: SortOrder
    dataAdmissao?: SortOrder
    dataDemissao?: SortOrder
    avisoPrevio?: SortOrder
    saldoSalario?: SortOrder
    decimoTerceiroProp?: SortOrder
    decimoTerceiroInd?: SortOrder
    feriasProp?: SortOrder
    feriasInd?: SortOrder
    tercoFeriasProp?: SortOrder
    tercoFeriasInd?: SortOrder
    feriasVencidas?: SortOrder
    avisoPrevioIndeniz?: SortOrder
    fgtsRescisorio?: SortOrder
    multaFgts?: SortOrder
    inss?: SortOrder
    inss13?: SortOrder
    irrf?: SortOrder
    totalBruto?: SortOrder
    totalLiquido?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RescisaoAvgOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
    saldoSalario?: SortOrder
    decimoTerceiroProp?: SortOrder
    decimoTerceiroInd?: SortOrder
    feriasProp?: SortOrder
    feriasInd?: SortOrder
    tercoFeriasProp?: SortOrder
    tercoFeriasInd?: SortOrder
    feriasVencidas?: SortOrder
    avisoPrevioIndeniz?: SortOrder
    fgtsRescisorio?: SortOrder
    multaFgts?: SortOrder
    inss?: SortOrder
    inss13?: SortOrder
    irrf?: SortOrder
    totalBruto?: SortOrder
    totalLiquido?: SortOrder
  }

  export type RescisaoMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    tipoRescisao?: SortOrder
    dataAdmissao?: SortOrder
    dataDemissao?: SortOrder
    avisoPrevio?: SortOrder
    saldoSalario?: SortOrder
    decimoTerceiroProp?: SortOrder
    decimoTerceiroInd?: SortOrder
    feriasProp?: SortOrder
    feriasInd?: SortOrder
    tercoFeriasProp?: SortOrder
    tercoFeriasInd?: SortOrder
    feriasVencidas?: SortOrder
    avisoPrevioIndeniz?: SortOrder
    fgtsRescisorio?: SortOrder
    multaFgts?: SortOrder
    inss?: SortOrder
    inss13?: SortOrder
    irrf?: SortOrder
    totalBruto?: SortOrder
    totalLiquido?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RescisaoMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    tipoRescisao?: SortOrder
    dataAdmissao?: SortOrder
    dataDemissao?: SortOrder
    avisoPrevio?: SortOrder
    saldoSalario?: SortOrder
    decimoTerceiroProp?: SortOrder
    decimoTerceiroInd?: SortOrder
    feriasProp?: SortOrder
    feriasInd?: SortOrder
    tercoFeriasProp?: SortOrder
    tercoFeriasInd?: SortOrder
    feriasVencidas?: SortOrder
    avisoPrevioIndeniz?: SortOrder
    fgtsRescisorio?: SortOrder
    multaFgts?: SortOrder
    inss?: SortOrder
    inss13?: SortOrder
    irrf?: SortOrder
    totalBruto?: SortOrder
    totalLiquido?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RescisaoSumOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
    saldoSalario?: SortOrder
    decimoTerceiroProp?: SortOrder
    decimoTerceiroInd?: SortOrder
    feriasProp?: SortOrder
    feriasInd?: SortOrder
    tercoFeriasProp?: SortOrder
    tercoFeriasInd?: SortOrder
    feriasVencidas?: SortOrder
    avisoPrevioIndeniz?: SortOrder
    fgtsRescisorio?: SortOrder
    multaFgts?: SortOrder
    inss?: SortOrder
    inss13?: SortOrder
    irrf?: SortOrder
    totalBruto?: SortOrder
    totalLiquido?: SortOrder
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

  export type RescisaoCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<RescisaoCreateWithoutEmployeeInput, RescisaoUncheckedCreateWithoutEmployeeInput> | RescisaoCreateWithoutEmployeeInput[] | RescisaoUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: RescisaoCreateOrConnectWithoutEmployeeInput | RescisaoCreateOrConnectWithoutEmployeeInput[]
    createMany?: RescisaoCreateManyEmployeeInputEnvelope
    connect?: RescisaoWhereUniqueInput | RescisaoWhereUniqueInput[]
  }

  export type EmployeeSubjectCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeSubjectCreateWithoutEmployeeInput, EmployeeSubjectUncheckedCreateWithoutEmployeeInput> | EmployeeSubjectCreateWithoutEmployeeInput[] | EmployeeSubjectUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeSubjectCreateOrConnectWithoutEmployeeInput | EmployeeSubjectCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeSubjectCreateManyEmployeeInputEnvelope
    connect?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
  }

  export type TeachingAssignmentCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<TeachingAssignmentCreateWithoutEmployeeInput, TeachingAssignmentUncheckedCreateWithoutEmployeeInput> | TeachingAssignmentCreateWithoutEmployeeInput[] | TeachingAssignmentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutEmployeeInput | TeachingAssignmentCreateOrConnectWithoutEmployeeInput[]
    createMany?: TeachingAssignmentCreateManyEmployeeInputEnvelope
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
  }

  export type SalaryAdjustmentCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<SalaryAdjustmentCreateWithoutEmployeeInput, SalaryAdjustmentUncheckedCreateWithoutEmployeeInput> | SalaryAdjustmentCreateWithoutEmployeeInput[] | SalaryAdjustmentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SalaryAdjustmentCreateOrConnectWithoutEmployeeInput | SalaryAdjustmentCreateOrConnectWithoutEmployeeInput[]
    createMany?: SalaryAdjustmentCreateManyEmployeeInputEnvelope
    connect?: SalaryAdjustmentWhereUniqueInput | SalaryAdjustmentWhereUniqueInput[]
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

  export type RescisaoUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<RescisaoCreateWithoutEmployeeInput, RescisaoUncheckedCreateWithoutEmployeeInput> | RescisaoCreateWithoutEmployeeInput[] | RescisaoUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: RescisaoCreateOrConnectWithoutEmployeeInput | RescisaoCreateOrConnectWithoutEmployeeInput[]
    createMany?: RescisaoCreateManyEmployeeInputEnvelope
    connect?: RescisaoWhereUniqueInput | RescisaoWhereUniqueInput[]
  }

  export type EmployeeSubjectUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeSubjectCreateWithoutEmployeeInput, EmployeeSubjectUncheckedCreateWithoutEmployeeInput> | EmployeeSubjectCreateWithoutEmployeeInput[] | EmployeeSubjectUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeSubjectCreateOrConnectWithoutEmployeeInput | EmployeeSubjectCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeSubjectCreateManyEmployeeInputEnvelope
    connect?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
  }

  export type TeachingAssignmentUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<TeachingAssignmentCreateWithoutEmployeeInput, TeachingAssignmentUncheckedCreateWithoutEmployeeInput> | TeachingAssignmentCreateWithoutEmployeeInput[] | TeachingAssignmentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutEmployeeInput | TeachingAssignmentCreateOrConnectWithoutEmployeeInput[]
    createMany?: TeachingAssignmentCreateManyEmployeeInputEnvelope
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
  }

  export type SalaryAdjustmentUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<SalaryAdjustmentCreateWithoutEmployeeInput, SalaryAdjustmentUncheckedCreateWithoutEmployeeInput> | SalaryAdjustmentCreateWithoutEmployeeInput[] | SalaryAdjustmentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SalaryAdjustmentCreateOrConnectWithoutEmployeeInput | SalaryAdjustmentCreateOrConnectWithoutEmployeeInput[]
    createMany?: SalaryAdjustmentCreateManyEmployeeInputEnvelope
    connect?: SalaryAdjustmentWhereUniqueInput | SalaryAdjustmentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type RescisaoUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<RescisaoCreateWithoutEmployeeInput, RescisaoUncheckedCreateWithoutEmployeeInput> | RescisaoCreateWithoutEmployeeInput[] | RescisaoUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: RescisaoCreateOrConnectWithoutEmployeeInput | RescisaoCreateOrConnectWithoutEmployeeInput[]
    upsert?: RescisaoUpsertWithWhereUniqueWithoutEmployeeInput | RescisaoUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: RescisaoCreateManyEmployeeInputEnvelope
    set?: RescisaoWhereUniqueInput | RescisaoWhereUniqueInput[]
    disconnect?: RescisaoWhereUniqueInput | RescisaoWhereUniqueInput[]
    delete?: RescisaoWhereUniqueInput | RescisaoWhereUniqueInput[]
    connect?: RescisaoWhereUniqueInput | RescisaoWhereUniqueInput[]
    update?: RescisaoUpdateWithWhereUniqueWithoutEmployeeInput | RescisaoUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: RescisaoUpdateManyWithWhereWithoutEmployeeInput | RescisaoUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: RescisaoScalarWhereInput | RescisaoScalarWhereInput[]
  }

  export type EmployeeSubjectUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeSubjectCreateWithoutEmployeeInput, EmployeeSubjectUncheckedCreateWithoutEmployeeInput> | EmployeeSubjectCreateWithoutEmployeeInput[] | EmployeeSubjectUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeSubjectCreateOrConnectWithoutEmployeeInput | EmployeeSubjectCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeSubjectUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeSubjectUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeSubjectCreateManyEmployeeInputEnvelope
    set?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
    disconnect?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
    delete?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
    connect?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
    update?: EmployeeSubjectUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeSubjectUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeSubjectUpdateManyWithWhereWithoutEmployeeInput | EmployeeSubjectUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeSubjectScalarWhereInput | EmployeeSubjectScalarWhereInput[]
  }

  export type TeachingAssignmentUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<TeachingAssignmentCreateWithoutEmployeeInput, TeachingAssignmentUncheckedCreateWithoutEmployeeInput> | TeachingAssignmentCreateWithoutEmployeeInput[] | TeachingAssignmentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutEmployeeInput | TeachingAssignmentCreateOrConnectWithoutEmployeeInput[]
    upsert?: TeachingAssignmentUpsertWithWhereUniqueWithoutEmployeeInput | TeachingAssignmentUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: TeachingAssignmentCreateManyEmployeeInputEnvelope
    set?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    disconnect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    delete?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    update?: TeachingAssignmentUpdateWithWhereUniqueWithoutEmployeeInput | TeachingAssignmentUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: TeachingAssignmentUpdateManyWithWhereWithoutEmployeeInput | TeachingAssignmentUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
  }

  export type SalaryAdjustmentUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<SalaryAdjustmentCreateWithoutEmployeeInput, SalaryAdjustmentUncheckedCreateWithoutEmployeeInput> | SalaryAdjustmentCreateWithoutEmployeeInput[] | SalaryAdjustmentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SalaryAdjustmentCreateOrConnectWithoutEmployeeInput | SalaryAdjustmentCreateOrConnectWithoutEmployeeInput[]
    upsert?: SalaryAdjustmentUpsertWithWhereUniqueWithoutEmployeeInput | SalaryAdjustmentUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: SalaryAdjustmentCreateManyEmployeeInputEnvelope
    set?: SalaryAdjustmentWhereUniqueInput | SalaryAdjustmentWhereUniqueInput[]
    disconnect?: SalaryAdjustmentWhereUniqueInput | SalaryAdjustmentWhereUniqueInput[]
    delete?: SalaryAdjustmentWhereUniqueInput | SalaryAdjustmentWhereUniqueInput[]
    connect?: SalaryAdjustmentWhereUniqueInput | SalaryAdjustmentWhereUniqueInput[]
    update?: SalaryAdjustmentUpdateWithWhereUniqueWithoutEmployeeInput | SalaryAdjustmentUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: SalaryAdjustmentUpdateManyWithWhereWithoutEmployeeInput | SalaryAdjustmentUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: SalaryAdjustmentScalarWhereInput | SalaryAdjustmentScalarWhereInput[]
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

  export type RescisaoUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<RescisaoCreateWithoutEmployeeInput, RescisaoUncheckedCreateWithoutEmployeeInput> | RescisaoCreateWithoutEmployeeInput[] | RescisaoUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: RescisaoCreateOrConnectWithoutEmployeeInput | RescisaoCreateOrConnectWithoutEmployeeInput[]
    upsert?: RescisaoUpsertWithWhereUniqueWithoutEmployeeInput | RescisaoUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: RescisaoCreateManyEmployeeInputEnvelope
    set?: RescisaoWhereUniqueInput | RescisaoWhereUniqueInput[]
    disconnect?: RescisaoWhereUniqueInput | RescisaoWhereUniqueInput[]
    delete?: RescisaoWhereUniqueInput | RescisaoWhereUniqueInput[]
    connect?: RescisaoWhereUniqueInput | RescisaoWhereUniqueInput[]
    update?: RescisaoUpdateWithWhereUniqueWithoutEmployeeInput | RescisaoUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: RescisaoUpdateManyWithWhereWithoutEmployeeInput | RescisaoUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: RescisaoScalarWhereInput | RescisaoScalarWhereInput[]
  }

  export type EmployeeSubjectUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeSubjectCreateWithoutEmployeeInput, EmployeeSubjectUncheckedCreateWithoutEmployeeInput> | EmployeeSubjectCreateWithoutEmployeeInput[] | EmployeeSubjectUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeSubjectCreateOrConnectWithoutEmployeeInput | EmployeeSubjectCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeSubjectUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeSubjectUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeSubjectCreateManyEmployeeInputEnvelope
    set?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
    disconnect?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
    delete?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
    connect?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
    update?: EmployeeSubjectUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeSubjectUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeSubjectUpdateManyWithWhereWithoutEmployeeInput | EmployeeSubjectUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeSubjectScalarWhereInput | EmployeeSubjectScalarWhereInput[]
  }

  export type TeachingAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<TeachingAssignmentCreateWithoutEmployeeInput, TeachingAssignmentUncheckedCreateWithoutEmployeeInput> | TeachingAssignmentCreateWithoutEmployeeInput[] | TeachingAssignmentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutEmployeeInput | TeachingAssignmentCreateOrConnectWithoutEmployeeInput[]
    upsert?: TeachingAssignmentUpsertWithWhereUniqueWithoutEmployeeInput | TeachingAssignmentUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: TeachingAssignmentCreateManyEmployeeInputEnvelope
    set?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    disconnect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    delete?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    update?: TeachingAssignmentUpdateWithWhereUniqueWithoutEmployeeInput | TeachingAssignmentUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: TeachingAssignmentUpdateManyWithWhereWithoutEmployeeInput | TeachingAssignmentUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
  }

  export type SalaryAdjustmentUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<SalaryAdjustmentCreateWithoutEmployeeInput, SalaryAdjustmentUncheckedCreateWithoutEmployeeInput> | SalaryAdjustmentCreateWithoutEmployeeInput[] | SalaryAdjustmentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SalaryAdjustmentCreateOrConnectWithoutEmployeeInput | SalaryAdjustmentCreateOrConnectWithoutEmployeeInput[]
    upsert?: SalaryAdjustmentUpsertWithWhereUniqueWithoutEmployeeInput | SalaryAdjustmentUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: SalaryAdjustmentCreateManyEmployeeInputEnvelope
    set?: SalaryAdjustmentWhereUniqueInput | SalaryAdjustmentWhereUniqueInput[]
    disconnect?: SalaryAdjustmentWhereUniqueInput | SalaryAdjustmentWhereUniqueInput[]
    delete?: SalaryAdjustmentWhereUniqueInput | SalaryAdjustmentWhereUniqueInput[]
    connect?: SalaryAdjustmentWhereUniqueInput | SalaryAdjustmentWhereUniqueInput[]
    update?: SalaryAdjustmentUpdateWithWhereUniqueWithoutEmployeeInput | SalaryAdjustmentUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: SalaryAdjustmentUpdateManyWithWhereWithoutEmployeeInput | SalaryAdjustmentUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: SalaryAdjustmentScalarWhereInput | SalaryAdjustmentScalarWhereInput[]
  }

  export type EmployeeSubjectCreateNestedManyWithoutSubjectInput = {
    create?: XOR<EmployeeSubjectCreateWithoutSubjectInput, EmployeeSubjectUncheckedCreateWithoutSubjectInput> | EmployeeSubjectCreateWithoutSubjectInput[] | EmployeeSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: EmployeeSubjectCreateOrConnectWithoutSubjectInput | EmployeeSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: EmployeeSubjectCreateManySubjectInputEnvelope
    connect?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
  }

  export type TeachingAssignmentCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TeachingAssignmentCreateWithoutSubjectInput, TeachingAssignmentUncheckedCreateWithoutSubjectInput> | TeachingAssignmentCreateWithoutSubjectInput[] | TeachingAssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutSubjectInput | TeachingAssignmentCreateOrConnectWithoutSubjectInput[]
    createMany?: TeachingAssignmentCreateManySubjectInputEnvelope
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
  }

  export type EmployeeSubjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<EmployeeSubjectCreateWithoutSubjectInput, EmployeeSubjectUncheckedCreateWithoutSubjectInput> | EmployeeSubjectCreateWithoutSubjectInput[] | EmployeeSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: EmployeeSubjectCreateOrConnectWithoutSubjectInput | EmployeeSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: EmployeeSubjectCreateManySubjectInputEnvelope
    connect?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
  }

  export type TeachingAssignmentUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TeachingAssignmentCreateWithoutSubjectInput, TeachingAssignmentUncheckedCreateWithoutSubjectInput> | TeachingAssignmentCreateWithoutSubjectInput[] | TeachingAssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutSubjectInput | TeachingAssignmentCreateOrConnectWithoutSubjectInput[]
    createMany?: TeachingAssignmentCreateManySubjectInputEnvelope
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
  }

  export type EmployeeSubjectUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<EmployeeSubjectCreateWithoutSubjectInput, EmployeeSubjectUncheckedCreateWithoutSubjectInput> | EmployeeSubjectCreateWithoutSubjectInput[] | EmployeeSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: EmployeeSubjectCreateOrConnectWithoutSubjectInput | EmployeeSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: EmployeeSubjectUpsertWithWhereUniqueWithoutSubjectInput | EmployeeSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: EmployeeSubjectCreateManySubjectInputEnvelope
    set?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
    disconnect?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
    delete?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
    connect?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
    update?: EmployeeSubjectUpdateWithWhereUniqueWithoutSubjectInput | EmployeeSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: EmployeeSubjectUpdateManyWithWhereWithoutSubjectInput | EmployeeSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: EmployeeSubjectScalarWhereInput | EmployeeSubjectScalarWhereInput[]
  }

  export type TeachingAssignmentUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TeachingAssignmentCreateWithoutSubjectInput, TeachingAssignmentUncheckedCreateWithoutSubjectInput> | TeachingAssignmentCreateWithoutSubjectInput[] | TeachingAssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutSubjectInput | TeachingAssignmentCreateOrConnectWithoutSubjectInput[]
    upsert?: TeachingAssignmentUpsertWithWhereUniqueWithoutSubjectInput | TeachingAssignmentUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TeachingAssignmentCreateManySubjectInputEnvelope
    set?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    disconnect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    delete?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    update?: TeachingAssignmentUpdateWithWhereUniqueWithoutSubjectInput | TeachingAssignmentUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TeachingAssignmentUpdateManyWithWhereWithoutSubjectInput | TeachingAssignmentUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
  }

  export type EmployeeSubjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<EmployeeSubjectCreateWithoutSubjectInput, EmployeeSubjectUncheckedCreateWithoutSubjectInput> | EmployeeSubjectCreateWithoutSubjectInput[] | EmployeeSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: EmployeeSubjectCreateOrConnectWithoutSubjectInput | EmployeeSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: EmployeeSubjectUpsertWithWhereUniqueWithoutSubjectInput | EmployeeSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: EmployeeSubjectCreateManySubjectInputEnvelope
    set?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
    disconnect?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
    delete?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
    connect?: EmployeeSubjectWhereUniqueInput | EmployeeSubjectWhereUniqueInput[]
    update?: EmployeeSubjectUpdateWithWhereUniqueWithoutSubjectInput | EmployeeSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: EmployeeSubjectUpdateManyWithWhereWithoutSubjectInput | EmployeeSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: EmployeeSubjectScalarWhereInput | EmployeeSubjectScalarWhereInput[]
  }

  export type TeachingAssignmentUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TeachingAssignmentCreateWithoutSubjectInput, TeachingAssignmentUncheckedCreateWithoutSubjectInput> | TeachingAssignmentCreateWithoutSubjectInput[] | TeachingAssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutSubjectInput | TeachingAssignmentCreateOrConnectWithoutSubjectInput[]
    upsert?: TeachingAssignmentUpsertWithWhereUniqueWithoutSubjectInput | TeachingAssignmentUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TeachingAssignmentCreateManySubjectInputEnvelope
    set?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    disconnect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    delete?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    update?: TeachingAssignmentUpdateWithWhereUniqueWithoutSubjectInput | TeachingAssignmentUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TeachingAssignmentUpdateManyWithWhereWithoutSubjectInput | TeachingAssignmentUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutEmployeeSubjectsInput = {
    create?: XOR<EmployeeCreateWithoutEmployeeSubjectsInput, EmployeeUncheckedCreateWithoutEmployeeSubjectsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeSubjectsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutEmployeeSubjectsInput = {
    create?: XOR<SubjectCreateWithoutEmployeeSubjectsInput, SubjectUncheckedCreateWithoutEmployeeSubjectsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutEmployeeSubjectsInput
    connect?: SubjectWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutEmployeeSubjectsNestedInput = {
    create?: XOR<EmployeeCreateWithoutEmployeeSubjectsInput, EmployeeUncheckedCreateWithoutEmployeeSubjectsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeSubjectsInput
    upsert?: EmployeeUpsertWithoutEmployeeSubjectsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutEmployeeSubjectsInput, EmployeeUpdateWithoutEmployeeSubjectsInput>, EmployeeUncheckedUpdateWithoutEmployeeSubjectsInput>
  }

  export type SubjectUpdateOneRequiredWithoutEmployeeSubjectsNestedInput = {
    create?: XOR<SubjectCreateWithoutEmployeeSubjectsInput, SubjectUncheckedCreateWithoutEmployeeSubjectsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutEmployeeSubjectsInput
    upsert?: SubjectUpsertWithoutEmployeeSubjectsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutEmployeeSubjectsInput, SubjectUpdateWithoutEmployeeSubjectsInput>, SubjectUncheckedUpdateWithoutEmployeeSubjectsInput>
  }

  export type EmployeeCreateNestedOneWithoutTeachingAssignmentsInput = {
    create?: XOR<EmployeeCreateWithoutTeachingAssignmentsInput, EmployeeUncheckedCreateWithoutTeachingAssignmentsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTeachingAssignmentsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutTeachingAssignmentsInput = {
    create?: XOR<SubjectCreateWithoutTeachingAssignmentsInput, SubjectUncheckedCreateWithoutTeachingAssignmentsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeachingAssignmentsInput
    connect?: SubjectWhereUniqueInput
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

  export type EmployeeUpdateOneRequiredWithoutTeachingAssignmentsNestedInput = {
    create?: XOR<EmployeeCreateWithoutTeachingAssignmentsInput, EmployeeUncheckedCreateWithoutTeachingAssignmentsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTeachingAssignmentsInput
    upsert?: EmployeeUpsertWithoutTeachingAssignmentsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutTeachingAssignmentsInput, EmployeeUpdateWithoutTeachingAssignmentsInput>, EmployeeUncheckedUpdateWithoutTeachingAssignmentsInput>
  }

  export type SubjectUpdateOneRequiredWithoutTeachingAssignmentsNestedInput = {
    create?: XOR<SubjectCreateWithoutTeachingAssignmentsInput, SubjectUncheckedCreateWithoutTeachingAssignmentsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeachingAssignmentsInput
    upsert?: SubjectUpsertWithoutTeachingAssignmentsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutTeachingAssignmentsInput, SubjectUpdateWithoutTeachingAssignmentsInput>, SubjectUncheckedUpdateWithoutTeachingAssignmentsInput>
  }

  export type EmployeeCreateNestedOneWithoutSalaryAdjustmentsInput = {
    create?: XOR<EmployeeCreateWithoutSalaryAdjustmentsInput, EmployeeUncheckedCreateWithoutSalaryAdjustmentsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSalaryAdjustmentsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutSalaryAdjustmentsNestedInput = {
    create?: XOR<EmployeeCreateWithoutSalaryAdjustmentsInput, EmployeeUncheckedCreateWithoutSalaryAdjustmentsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSalaryAdjustmentsInput
    upsert?: EmployeeUpsertWithoutSalaryAdjustmentsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutSalaryAdjustmentsInput, EmployeeUpdateWithoutSalaryAdjustmentsInput>, EmployeeUncheckedUpdateWithoutSalaryAdjustmentsInput>
  }

  export type EmployeeCreateNestedOneWithoutPayrollsInput = {
    create?: XOR<EmployeeCreateWithoutPayrollsInput, EmployeeUncheckedCreateWithoutPayrollsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayrollsInput
    connect?: EmployeeWhereUniqueInput
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

  export type EmployeeUpdateOneRequiredWithoutAdvancesNestedInput = {
    create?: XOR<EmployeeCreateWithoutAdvancesInput, EmployeeUncheckedCreateWithoutAdvancesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAdvancesInput
    upsert?: EmployeeUpsertWithoutAdvancesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAdvancesInput, EmployeeUpdateWithoutAdvancesInput>, EmployeeUncheckedUpdateWithoutAdvancesInput>
  }

  export type EmployeeCreateNestedOneWithoutRescisoesInput = {
    create?: XOR<EmployeeCreateWithoutRescisoesInput, EmployeeUncheckedCreateWithoutRescisoesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutRescisoesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutRescisoesNestedInput = {
    create?: XOR<EmployeeCreateWithoutRescisoesInput, EmployeeUncheckedCreateWithoutRescisoesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutRescisoesInput
    upsert?: EmployeeUpsertWithoutRescisoesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutRescisoesInput, EmployeeUpdateWithoutRescisoesInput>, EmployeeUncheckedUpdateWithoutRescisoesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type RescisaoCreateWithoutEmployeeInput = {
    id?: string
    month: number
    year: number
    tipoRescisao: string
    dataAdmissao: Date | string
    dataDemissao: Date | string
    avisoPrevio: string
    saldoSalario?: number
    decimoTerceiroProp?: number
    decimoTerceiroInd?: number
    feriasProp?: number
    feriasInd?: number
    tercoFeriasProp?: number
    tercoFeriasInd?: number
    feriasVencidas?: number
    avisoPrevioIndeniz?: number
    fgtsRescisorio?: number
    multaFgts?: number
    inss?: number
    inss13?: number
    irrf?: number
    totalBruto?: number
    totalLiquido?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RescisaoUncheckedCreateWithoutEmployeeInput = {
    id?: string
    month: number
    year: number
    tipoRescisao: string
    dataAdmissao: Date | string
    dataDemissao: Date | string
    avisoPrevio: string
    saldoSalario?: number
    decimoTerceiroProp?: number
    decimoTerceiroInd?: number
    feriasProp?: number
    feriasInd?: number
    tercoFeriasProp?: number
    tercoFeriasInd?: number
    feriasVencidas?: number
    avisoPrevioIndeniz?: number
    fgtsRescisorio?: number
    multaFgts?: number
    inss?: number
    inss13?: number
    irrf?: number
    totalBruto?: number
    totalLiquido?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RescisaoCreateOrConnectWithoutEmployeeInput = {
    where: RescisaoWhereUniqueInput
    create: XOR<RescisaoCreateWithoutEmployeeInput, RescisaoUncheckedCreateWithoutEmployeeInput>
  }

  export type RescisaoCreateManyEmployeeInputEnvelope = {
    data: RescisaoCreateManyEmployeeInput | RescisaoCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeSubjectCreateWithoutEmployeeInput = {
    id?: string
    createdAt?: Date | string
    subject: SubjectCreateNestedOneWithoutEmployeeSubjectsInput
  }

  export type EmployeeSubjectUncheckedCreateWithoutEmployeeInput = {
    id?: string
    subjectId: string
    createdAt?: Date | string
  }

  export type EmployeeSubjectCreateOrConnectWithoutEmployeeInput = {
    where: EmployeeSubjectWhereUniqueInput
    create: XOR<EmployeeSubjectCreateWithoutEmployeeInput, EmployeeSubjectUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeSubjectCreateManyEmployeeInputEnvelope = {
    data: EmployeeSubjectCreateManyEmployeeInput | EmployeeSubjectCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type TeachingAssignmentCreateWithoutEmployeeInput = {
    id?: string
    weekday: number
    startTime: string
    endTime: string
    classGroup?: string | null
    lessonStart?: number | null
    lessonEnd?: number | null
    fullDay?: boolean
    hours: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subject: SubjectCreateNestedOneWithoutTeachingAssignmentsInput
  }

  export type TeachingAssignmentUncheckedCreateWithoutEmployeeInput = {
    id?: string
    subjectId: string
    weekday: number
    startTime: string
    endTime: string
    classGroup?: string | null
    lessonStart?: number | null
    lessonEnd?: number | null
    fullDay?: boolean
    hours: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeachingAssignmentCreateOrConnectWithoutEmployeeInput = {
    where: TeachingAssignmentWhereUniqueInput
    create: XOR<TeachingAssignmentCreateWithoutEmployeeInput, TeachingAssignmentUncheckedCreateWithoutEmployeeInput>
  }

  export type TeachingAssignmentCreateManyEmployeeInputEnvelope = {
    data: TeachingAssignmentCreateManyEmployeeInput | TeachingAssignmentCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type SalaryAdjustmentCreateWithoutEmployeeInput = {
    id?: string
    effectiveDate: Date | string
    previousSalary: number
    newSalary: number
    adjustmentValue: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type SalaryAdjustmentUncheckedCreateWithoutEmployeeInput = {
    id?: string
    effectiveDate: Date | string
    previousSalary: number
    newSalary: number
    adjustmentValue: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type SalaryAdjustmentCreateOrConnectWithoutEmployeeInput = {
    where: SalaryAdjustmentWhereUniqueInput
    create: XOR<SalaryAdjustmentCreateWithoutEmployeeInput, SalaryAdjustmentUncheckedCreateWithoutEmployeeInput>
  }

  export type SalaryAdjustmentCreateManyEmployeeInputEnvelope = {
    data: SalaryAdjustmentCreateManyEmployeeInput | SalaryAdjustmentCreateManyEmployeeInput[]
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

  export type RescisaoUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: RescisaoWhereUniqueInput
    update: XOR<RescisaoUpdateWithoutEmployeeInput, RescisaoUncheckedUpdateWithoutEmployeeInput>
    create: XOR<RescisaoCreateWithoutEmployeeInput, RescisaoUncheckedCreateWithoutEmployeeInput>
  }

  export type RescisaoUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: RescisaoWhereUniqueInput
    data: XOR<RescisaoUpdateWithoutEmployeeInput, RescisaoUncheckedUpdateWithoutEmployeeInput>
  }

  export type RescisaoUpdateManyWithWhereWithoutEmployeeInput = {
    where: RescisaoScalarWhereInput
    data: XOR<RescisaoUpdateManyMutationInput, RescisaoUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type RescisaoScalarWhereInput = {
    AND?: RescisaoScalarWhereInput | RescisaoScalarWhereInput[]
    OR?: RescisaoScalarWhereInput[]
    NOT?: RescisaoScalarWhereInput | RescisaoScalarWhereInput[]
    id?: StringFilter<"Rescisao"> | string
    employeeId?: StringFilter<"Rescisao"> | string
    month?: IntFilter<"Rescisao"> | number
    year?: IntFilter<"Rescisao"> | number
    tipoRescisao?: StringFilter<"Rescisao"> | string
    dataAdmissao?: DateTimeFilter<"Rescisao"> | Date | string
    dataDemissao?: DateTimeFilter<"Rescisao"> | Date | string
    avisoPrevio?: StringFilter<"Rescisao"> | string
    saldoSalario?: FloatFilter<"Rescisao"> | number
    decimoTerceiroProp?: FloatFilter<"Rescisao"> | number
    decimoTerceiroInd?: FloatFilter<"Rescisao"> | number
    feriasProp?: FloatFilter<"Rescisao"> | number
    feriasInd?: FloatFilter<"Rescisao"> | number
    tercoFeriasProp?: FloatFilter<"Rescisao"> | number
    tercoFeriasInd?: FloatFilter<"Rescisao"> | number
    feriasVencidas?: FloatFilter<"Rescisao"> | number
    avisoPrevioIndeniz?: FloatFilter<"Rescisao"> | number
    fgtsRescisorio?: FloatFilter<"Rescisao"> | number
    multaFgts?: FloatFilter<"Rescisao"> | number
    inss?: FloatFilter<"Rescisao"> | number
    inss13?: FloatFilter<"Rescisao"> | number
    irrf?: FloatFilter<"Rescisao"> | number
    totalBruto?: FloatFilter<"Rescisao"> | number
    totalLiquido?: FloatFilter<"Rescisao"> | number
    status?: StringFilter<"Rescisao"> | string
    createdAt?: DateTimeFilter<"Rescisao"> | Date | string
    updatedAt?: DateTimeFilter<"Rescisao"> | Date | string
  }

  export type EmployeeSubjectUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeSubjectWhereUniqueInput
    update: XOR<EmployeeSubjectUpdateWithoutEmployeeInput, EmployeeSubjectUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EmployeeSubjectCreateWithoutEmployeeInput, EmployeeSubjectUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeSubjectUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeSubjectWhereUniqueInput
    data: XOR<EmployeeSubjectUpdateWithoutEmployeeInput, EmployeeSubjectUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeeSubjectUpdateManyWithWhereWithoutEmployeeInput = {
    where: EmployeeSubjectScalarWhereInput
    data: XOR<EmployeeSubjectUpdateManyMutationInput, EmployeeSubjectUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EmployeeSubjectScalarWhereInput = {
    AND?: EmployeeSubjectScalarWhereInput | EmployeeSubjectScalarWhereInput[]
    OR?: EmployeeSubjectScalarWhereInput[]
    NOT?: EmployeeSubjectScalarWhereInput | EmployeeSubjectScalarWhereInput[]
    id?: StringFilter<"EmployeeSubject"> | string
    employeeId?: StringFilter<"EmployeeSubject"> | string
    subjectId?: StringFilter<"EmployeeSubject"> | string
    createdAt?: DateTimeFilter<"EmployeeSubject"> | Date | string
  }

  export type TeachingAssignmentUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: TeachingAssignmentWhereUniqueInput
    update: XOR<TeachingAssignmentUpdateWithoutEmployeeInput, TeachingAssignmentUncheckedUpdateWithoutEmployeeInput>
    create: XOR<TeachingAssignmentCreateWithoutEmployeeInput, TeachingAssignmentUncheckedCreateWithoutEmployeeInput>
  }

  export type TeachingAssignmentUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: TeachingAssignmentWhereUniqueInput
    data: XOR<TeachingAssignmentUpdateWithoutEmployeeInput, TeachingAssignmentUncheckedUpdateWithoutEmployeeInput>
  }

  export type TeachingAssignmentUpdateManyWithWhereWithoutEmployeeInput = {
    where: TeachingAssignmentScalarWhereInput
    data: XOR<TeachingAssignmentUpdateManyMutationInput, TeachingAssignmentUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type TeachingAssignmentScalarWhereInput = {
    AND?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
    OR?: TeachingAssignmentScalarWhereInput[]
    NOT?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
    id?: StringFilter<"TeachingAssignment"> | string
    employeeId?: StringFilter<"TeachingAssignment"> | string
    subjectId?: StringFilter<"TeachingAssignment"> | string
    weekday?: IntFilter<"TeachingAssignment"> | number
    startTime?: StringFilter<"TeachingAssignment"> | string
    endTime?: StringFilter<"TeachingAssignment"> | string
    classGroup?: StringNullableFilter<"TeachingAssignment"> | string | null
    lessonStart?: IntNullableFilter<"TeachingAssignment"> | number | null
    lessonEnd?: IntNullableFilter<"TeachingAssignment"> | number | null
    fullDay?: BoolFilter<"TeachingAssignment"> | boolean
    hours?: FloatFilter<"TeachingAssignment"> | number
    active?: BoolFilter<"TeachingAssignment"> | boolean
    createdAt?: DateTimeFilter<"TeachingAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"TeachingAssignment"> | Date | string
  }

  export type SalaryAdjustmentUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: SalaryAdjustmentWhereUniqueInput
    update: XOR<SalaryAdjustmentUpdateWithoutEmployeeInput, SalaryAdjustmentUncheckedUpdateWithoutEmployeeInput>
    create: XOR<SalaryAdjustmentCreateWithoutEmployeeInput, SalaryAdjustmentUncheckedCreateWithoutEmployeeInput>
  }

  export type SalaryAdjustmentUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: SalaryAdjustmentWhereUniqueInput
    data: XOR<SalaryAdjustmentUpdateWithoutEmployeeInput, SalaryAdjustmentUncheckedUpdateWithoutEmployeeInput>
  }

  export type SalaryAdjustmentUpdateManyWithWhereWithoutEmployeeInput = {
    where: SalaryAdjustmentScalarWhereInput
    data: XOR<SalaryAdjustmentUpdateManyMutationInput, SalaryAdjustmentUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type SalaryAdjustmentScalarWhereInput = {
    AND?: SalaryAdjustmentScalarWhereInput | SalaryAdjustmentScalarWhereInput[]
    OR?: SalaryAdjustmentScalarWhereInput[]
    NOT?: SalaryAdjustmentScalarWhereInput | SalaryAdjustmentScalarWhereInput[]
    id?: StringFilter<"SalaryAdjustment"> | string
    employeeId?: StringFilter<"SalaryAdjustment"> | string
    effectiveDate?: DateTimeFilter<"SalaryAdjustment"> | Date | string
    previousSalary?: FloatFilter<"SalaryAdjustment"> | number
    newSalary?: FloatFilter<"SalaryAdjustment"> | number
    adjustmentValue?: FloatFilter<"SalaryAdjustment"> | number
    notes?: StringNullableFilter<"SalaryAdjustment"> | string | null
    createdAt?: DateTimeFilter<"SalaryAdjustment"> | Date | string
  }

  export type EmployeeSubjectCreateWithoutSubjectInput = {
    id?: string
    createdAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutEmployeeSubjectsInput
  }

  export type EmployeeSubjectUncheckedCreateWithoutSubjectInput = {
    id?: string
    employeeId: string
    createdAt?: Date | string
  }

  export type EmployeeSubjectCreateOrConnectWithoutSubjectInput = {
    where: EmployeeSubjectWhereUniqueInput
    create: XOR<EmployeeSubjectCreateWithoutSubjectInput, EmployeeSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type EmployeeSubjectCreateManySubjectInputEnvelope = {
    data: EmployeeSubjectCreateManySubjectInput | EmployeeSubjectCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type TeachingAssignmentCreateWithoutSubjectInput = {
    id?: string
    weekday: number
    startTime: string
    endTime: string
    classGroup?: string | null
    lessonStart?: number | null
    lessonEnd?: number | null
    fullDay?: boolean
    hours: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutTeachingAssignmentsInput
  }

  export type TeachingAssignmentUncheckedCreateWithoutSubjectInput = {
    id?: string
    employeeId: string
    weekday: number
    startTime: string
    endTime: string
    classGroup?: string | null
    lessonStart?: number | null
    lessonEnd?: number | null
    fullDay?: boolean
    hours: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeachingAssignmentCreateOrConnectWithoutSubjectInput = {
    where: TeachingAssignmentWhereUniqueInput
    create: XOR<TeachingAssignmentCreateWithoutSubjectInput, TeachingAssignmentUncheckedCreateWithoutSubjectInput>
  }

  export type TeachingAssignmentCreateManySubjectInputEnvelope = {
    data: TeachingAssignmentCreateManySubjectInput | TeachingAssignmentCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeSubjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: EmployeeSubjectWhereUniqueInput
    update: XOR<EmployeeSubjectUpdateWithoutSubjectInput, EmployeeSubjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<EmployeeSubjectCreateWithoutSubjectInput, EmployeeSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type EmployeeSubjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: EmployeeSubjectWhereUniqueInput
    data: XOR<EmployeeSubjectUpdateWithoutSubjectInput, EmployeeSubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type EmployeeSubjectUpdateManyWithWhereWithoutSubjectInput = {
    where: EmployeeSubjectScalarWhereInput
    data: XOR<EmployeeSubjectUpdateManyMutationInput, EmployeeSubjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type TeachingAssignmentUpsertWithWhereUniqueWithoutSubjectInput = {
    where: TeachingAssignmentWhereUniqueInput
    update: XOR<TeachingAssignmentUpdateWithoutSubjectInput, TeachingAssignmentUncheckedUpdateWithoutSubjectInput>
    create: XOR<TeachingAssignmentCreateWithoutSubjectInput, TeachingAssignmentUncheckedCreateWithoutSubjectInput>
  }

  export type TeachingAssignmentUpdateWithWhereUniqueWithoutSubjectInput = {
    where: TeachingAssignmentWhereUniqueInput
    data: XOR<TeachingAssignmentUpdateWithoutSubjectInput, TeachingAssignmentUncheckedUpdateWithoutSubjectInput>
  }

  export type TeachingAssignmentUpdateManyWithWhereWithoutSubjectInput = {
    where: TeachingAssignmentScalarWhereInput
    data: XOR<TeachingAssignmentUpdateManyMutationInput, TeachingAssignmentUncheckedUpdateManyWithoutSubjectInput>
  }

  export type EmployeeCreateWithoutEmployeeSubjectsInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    profilePhotoUrl?: string | null
    startDate?: Date | string | null
    eatsAtSchool?: boolean
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
    rescisoes?: RescisaoCreateNestedManyWithoutEmployeeInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutEmployeeInput
    salaryAdjustments?: SalaryAdjustmentCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutEmployeeSubjectsInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    profilePhotoUrl?: string | null
    startDate?: Date | string | null
    eatsAtSchool?: boolean
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
    rescisoes?: RescisaoUncheckedCreateNestedManyWithoutEmployeeInput
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutEmployeeInput
    salaryAdjustments?: SalaryAdjustmentUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutEmployeeSubjectsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutEmployeeSubjectsInput, EmployeeUncheckedCreateWithoutEmployeeSubjectsInput>
  }

  export type SubjectCreateWithoutEmployeeSubjectsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutEmployeeSubjectsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutEmployeeSubjectsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutEmployeeSubjectsInput, SubjectUncheckedCreateWithoutEmployeeSubjectsInput>
  }

  export type EmployeeUpsertWithoutEmployeeSubjectsInput = {
    update: XOR<EmployeeUpdateWithoutEmployeeSubjectsInput, EmployeeUncheckedUpdateWithoutEmployeeSubjectsInput>
    create: XOR<EmployeeCreateWithoutEmployeeSubjectsInput, EmployeeUncheckedCreateWithoutEmployeeSubjectsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutEmployeeSubjectsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutEmployeeSubjectsInput, EmployeeUncheckedUpdateWithoutEmployeeSubjectsInput>
  }

  export type EmployeeUpdateWithoutEmployeeSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eatsAtSchool?: BoolFieldUpdateOperationsInput | boolean
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
    rescisoes?: RescisaoUpdateManyWithoutEmployeeNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutEmployeeNestedInput
    salaryAdjustments?: SalaryAdjustmentUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutEmployeeSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eatsAtSchool?: BoolFieldUpdateOperationsInput | boolean
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
    rescisoes?: RescisaoUncheckedUpdateManyWithoutEmployeeNestedInput
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput
    salaryAdjustments?: SalaryAdjustmentUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type SubjectUpsertWithoutEmployeeSubjectsInput = {
    update: XOR<SubjectUpdateWithoutEmployeeSubjectsInput, SubjectUncheckedUpdateWithoutEmployeeSubjectsInput>
    create: XOR<SubjectCreateWithoutEmployeeSubjectsInput, SubjectUncheckedCreateWithoutEmployeeSubjectsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutEmployeeSubjectsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutEmployeeSubjectsInput, SubjectUncheckedUpdateWithoutEmployeeSubjectsInput>
  }

  export type SubjectUpdateWithoutEmployeeSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutEmployeeSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type EmployeeCreateWithoutTeachingAssignmentsInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    profilePhotoUrl?: string | null
    startDate?: Date | string | null
    eatsAtSchool?: boolean
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
    rescisoes?: RescisaoCreateNestedManyWithoutEmployeeInput
    employeeSubjects?: EmployeeSubjectCreateNestedManyWithoutEmployeeInput
    salaryAdjustments?: SalaryAdjustmentCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutTeachingAssignmentsInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    profilePhotoUrl?: string | null
    startDate?: Date | string | null
    eatsAtSchool?: boolean
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
    rescisoes?: RescisaoUncheckedCreateNestedManyWithoutEmployeeInput
    employeeSubjects?: EmployeeSubjectUncheckedCreateNestedManyWithoutEmployeeInput
    salaryAdjustments?: SalaryAdjustmentUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutTeachingAssignmentsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutTeachingAssignmentsInput, EmployeeUncheckedCreateWithoutTeachingAssignmentsInput>
  }

  export type SubjectCreateWithoutTeachingAssignmentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employeeSubjects?: EmployeeSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutTeachingAssignmentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employeeSubjects?: EmployeeSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutTeachingAssignmentsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTeachingAssignmentsInput, SubjectUncheckedCreateWithoutTeachingAssignmentsInput>
  }

  export type EmployeeUpsertWithoutTeachingAssignmentsInput = {
    update: XOR<EmployeeUpdateWithoutTeachingAssignmentsInput, EmployeeUncheckedUpdateWithoutTeachingAssignmentsInput>
    create: XOR<EmployeeCreateWithoutTeachingAssignmentsInput, EmployeeUncheckedCreateWithoutTeachingAssignmentsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutTeachingAssignmentsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutTeachingAssignmentsInput, EmployeeUncheckedUpdateWithoutTeachingAssignmentsInput>
  }

  export type EmployeeUpdateWithoutTeachingAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eatsAtSchool?: BoolFieldUpdateOperationsInput | boolean
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
    rescisoes?: RescisaoUpdateManyWithoutEmployeeNestedInput
    employeeSubjects?: EmployeeSubjectUpdateManyWithoutEmployeeNestedInput
    salaryAdjustments?: SalaryAdjustmentUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutTeachingAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eatsAtSchool?: BoolFieldUpdateOperationsInput | boolean
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
    rescisoes?: RescisaoUncheckedUpdateManyWithoutEmployeeNestedInput
    employeeSubjects?: EmployeeSubjectUncheckedUpdateManyWithoutEmployeeNestedInput
    salaryAdjustments?: SalaryAdjustmentUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type SubjectUpsertWithoutTeachingAssignmentsInput = {
    update: XOR<SubjectUpdateWithoutTeachingAssignmentsInput, SubjectUncheckedUpdateWithoutTeachingAssignmentsInput>
    create: XOR<SubjectCreateWithoutTeachingAssignmentsInput, SubjectUncheckedCreateWithoutTeachingAssignmentsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutTeachingAssignmentsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutTeachingAssignmentsInput, SubjectUncheckedUpdateWithoutTeachingAssignmentsInput>
  }

  export type SubjectUpdateWithoutTeachingAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeSubjects?: EmployeeSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutTeachingAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeSubjects?: EmployeeSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type EmployeeCreateWithoutSalaryAdjustmentsInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    profilePhotoUrl?: string | null
    startDate?: Date | string | null
    eatsAtSchool?: boolean
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
    rescisoes?: RescisaoCreateNestedManyWithoutEmployeeInput
    employeeSubjects?: EmployeeSubjectCreateNestedManyWithoutEmployeeInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutSalaryAdjustmentsInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    profilePhotoUrl?: string | null
    startDate?: Date | string | null
    eatsAtSchool?: boolean
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
    rescisoes?: RescisaoUncheckedCreateNestedManyWithoutEmployeeInput
    employeeSubjects?: EmployeeSubjectUncheckedCreateNestedManyWithoutEmployeeInput
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutSalaryAdjustmentsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutSalaryAdjustmentsInput, EmployeeUncheckedCreateWithoutSalaryAdjustmentsInput>
  }

  export type EmployeeUpsertWithoutSalaryAdjustmentsInput = {
    update: XOR<EmployeeUpdateWithoutSalaryAdjustmentsInput, EmployeeUncheckedUpdateWithoutSalaryAdjustmentsInput>
    create: XOR<EmployeeCreateWithoutSalaryAdjustmentsInput, EmployeeUncheckedCreateWithoutSalaryAdjustmentsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutSalaryAdjustmentsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutSalaryAdjustmentsInput, EmployeeUncheckedUpdateWithoutSalaryAdjustmentsInput>
  }

  export type EmployeeUpdateWithoutSalaryAdjustmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eatsAtSchool?: BoolFieldUpdateOperationsInput | boolean
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
    rescisoes?: RescisaoUpdateManyWithoutEmployeeNestedInput
    employeeSubjects?: EmployeeSubjectUpdateManyWithoutEmployeeNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutSalaryAdjustmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eatsAtSchool?: BoolFieldUpdateOperationsInput | boolean
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
    rescisoes?: RescisaoUncheckedUpdateManyWithoutEmployeeNestedInput
    employeeSubjects?: EmployeeSubjectUncheckedUpdateManyWithoutEmployeeNestedInput
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateWithoutPayrollsInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    profilePhotoUrl?: string | null
    startDate?: Date | string | null
    eatsAtSchool?: boolean
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
    rescisoes?: RescisaoCreateNestedManyWithoutEmployeeInput
    employeeSubjects?: EmployeeSubjectCreateNestedManyWithoutEmployeeInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutEmployeeInput
    salaryAdjustments?: SalaryAdjustmentCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutPayrollsInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    profilePhotoUrl?: string | null
    startDate?: Date | string | null
    eatsAtSchool?: boolean
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
    rescisoes?: RescisaoUncheckedCreateNestedManyWithoutEmployeeInput
    employeeSubjects?: EmployeeSubjectUncheckedCreateNestedManyWithoutEmployeeInput
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutEmployeeInput
    salaryAdjustments?: SalaryAdjustmentUncheckedCreateNestedManyWithoutEmployeeInput
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
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eatsAtSchool?: BoolFieldUpdateOperationsInput | boolean
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
    rescisoes?: RescisaoUpdateManyWithoutEmployeeNestedInput
    employeeSubjects?: EmployeeSubjectUpdateManyWithoutEmployeeNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutEmployeeNestedInput
    salaryAdjustments?: SalaryAdjustmentUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutPayrollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eatsAtSchool?: BoolFieldUpdateOperationsInput | boolean
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
    rescisoes?: RescisaoUncheckedUpdateManyWithoutEmployeeNestedInput
    employeeSubjects?: EmployeeSubjectUncheckedUpdateManyWithoutEmployeeNestedInput
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput
    salaryAdjustments?: SalaryAdjustmentUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateWithoutAdvancesInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    profilePhotoUrl?: string | null
    startDate?: Date | string | null
    eatsAtSchool?: boolean
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
    rescisoes?: RescisaoCreateNestedManyWithoutEmployeeInput
    employeeSubjects?: EmployeeSubjectCreateNestedManyWithoutEmployeeInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutEmployeeInput
    salaryAdjustments?: SalaryAdjustmentCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutAdvancesInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    profilePhotoUrl?: string | null
    startDate?: Date | string | null
    eatsAtSchool?: boolean
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
    rescisoes?: RescisaoUncheckedCreateNestedManyWithoutEmployeeInput
    employeeSubjects?: EmployeeSubjectUncheckedCreateNestedManyWithoutEmployeeInput
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutEmployeeInput
    salaryAdjustments?: SalaryAdjustmentUncheckedCreateNestedManyWithoutEmployeeInput
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
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eatsAtSchool?: BoolFieldUpdateOperationsInput | boolean
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
    rescisoes?: RescisaoUpdateManyWithoutEmployeeNestedInput
    employeeSubjects?: EmployeeSubjectUpdateManyWithoutEmployeeNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutEmployeeNestedInput
    salaryAdjustments?: SalaryAdjustmentUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAdvancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eatsAtSchool?: BoolFieldUpdateOperationsInput | boolean
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
    rescisoes?: RescisaoUncheckedUpdateManyWithoutEmployeeNestedInput
    employeeSubjects?: EmployeeSubjectUncheckedUpdateManyWithoutEmployeeNestedInput
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput
    salaryAdjustments?: SalaryAdjustmentUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateWithoutRescisoesInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    profilePhotoUrl?: string | null
    startDate?: Date | string | null
    eatsAtSchool?: boolean
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
    employeeSubjects?: EmployeeSubjectCreateNestedManyWithoutEmployeeInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutEmployeeInput
    salaryAdjustments?: SalaryAdjustmentCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutRescisoesInput = {
    id?: string
    name: string
    cpf: string
    type: string
    role: string
    baseSalary: number
    profilePhotoUrl?: string | null
    startDate?: Date | string | null
    eatsAtSchool?: boolean
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
    employeeSubjects?: EmployeeSubjectUncheckedCreateNestedManyWithoutEmployeeInput
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutEmployeeInput
    salaryAdjustments?: SalaryAdjustmentUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutRescisoesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutRescisoesInput, EmployeeUncheckedCreateWithoutRescisoesInput>
  }

  export type EmployeeUpsertWithoutRescisoesInput = {
    update: XOR<EmployeeUpdateWithoutRescisoesInput, EmployeeUncheckedUpdateWithoutRescisoesInput>
    create: XOR<EmployeeCreateWithoutRescisoesInput, EmployeeUncheckedCreateWithoutRescisoesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutRescisoesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutRescisoesInput, EmployeeUncheckedUpdateWithoutRescisoesInput>
  }

  export type EmployeeUpdateWithoutRescisoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eatsAtSchool?: BoolFieldUpdateOperationsInput | boolean
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
    employeeSubjects?: EmployeeSubjectUpdateManyWithoutEmployeeNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutEmployeeNestedInput
    salaryAdjustments?: SalaryAdjustmentUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutRescisoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eatsAtSchool?: BoolFieldUpdateOperationsInput | boolean
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
    employeeSubjects?: EmployeeSubjectUncheckedUpdateManyWithoutEmployeeNestedInput
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput
    salaryAdjustments?: SalaryAdjustmentUncheckedUpdateManyWithoutEmployeeNestedInput
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

  export type RescisaoCreateManyEmployeeInput = {
    id?: string
    month: number
    year: number
    tipoRescisao: string
    dataAdmissao: Date | string
    dataDemissao: Date | string
    avisoPrevio: string
    saldoSalario?: number
    decimoTerceiroProp?: number
    decimoTerceiroInd?: number
    feriasProp?: number
    feriasInd?: number
    tercoFeriasProp?: number
    tercoFeriasInd?: number
    feriasVencidas?: number
    avisoPrevioIndeniz?: number
    fgtsRescisorio?: number
    multaFgts?: number
    inss?: number
    inss13?: number
    irrf?: number
    totalBruto?: number
    totalLiquido?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeSubjectCreateManyEmployeeInput = {
    id?: string
    subjectId: string
    createdAt?: Date | string
  }

  export type TeachingAssignmentCreateManyEmployeeInput = {
    id?: string
    subjectId: string
    weekday: number
    startTime: string
    endTime: string
    classGroup?: string | null
    lessonStart?: number | null
    lessonEnd?: number | null
    fullDay?: boolean
    hours: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryAdjustmentCreateManyEmployeeInput = {
    id?: string
    effectiveDate: Date | string
    previousSalary: number
    newSalary: number
    adjustmentValue: number
    notes?: string | null
    createdAt?: Date | string
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

  export type RescisaoUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    tipoRescisao?: StringFieldUpdateOperationsInput | string
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDemissao?: DateTimeFieldUpdateOperationsInput | Date | string
    avisoPrevio?: StringFieldUpdateOperationsInput | string
    saldoSalario?: FloatFieldUpdateOperationsInput | number
    decimoTerceiroProp?: FloatFieldUpdateOperationsInput | number
    decimoTerceiroInd?: FloatFieldUpdateOperationsInput | number
    feriasProp?: FloatFieldUpdateOperationsInput | number
    feriasInd?: FloatFieldUpdateOperationsInput | number
    tercoFeriasProp?: FloatFieldUpdateOperationsInput | number
    tercoFeriasInd?: FloatFieldUpdateOperationsInput | number
    feriasVencidas?: FloatFieldUpdateOperationsInput | number
    avisoPrevioIndeniz?: FloatFieldUpdateOperationsInput | number
    fgtsRescisorio?: FloatFieldUpdateOperationsInput | number
    multaFgts?: FloatFieldUpdateOperationsInput | number
    inss?: FloatFieldUpdateOperationsInput | number
    inss13?: FloatFieldUpdateOperationsInput | number
    irrf?: FloatFieldUpdateOperationsInput | number
    totalBruto?: FloatFieldUpdateOperationsInput | number
    totalLiquido?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RescisaoUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    tipoRescisao?: StringFieldUpdateOperationsInput | string
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDemissao?: DateTimeFieldUpdateOperationsInput | Date | string
    avisoPrevio?: StringFieldUpdateOperationsInput | string
    saldoSalario?: FloatFieldUpdateOperationsInput | number
    decimoTerceiroProp?: FloatFieldUpdateOperationsInput | number
    decimoTerceiroInd?: FloatFieldUpdateOperationsInput | number
    feriasProp?: FloatFieldUpdateOperationsInput | number
    feriasInd?: FloatFieldUpdateOperationsInput | number
    tercoFeriasProp?: FloatFieldUpdateOperationsInput | number
    tercoFeriasInd?: FloatFieldUpdateOperationsInput | number
    feriasVencidas?: FloatFieldUpdateOperationsInput | number
    avisoPrevioIndeniz?: FloatFieldUpdateOperationsInput | number
    fgtsRescisorio?: FloatFieldUpdateOperationsInput | number
    multaFgts?: FloatFieldUpdateOperationsInput | number
    inss?: FloatFieldUpdateOperationsInput | number
    inss13?: FloatFieldUpdateOperationsInput | number
    irrf?: FloatFieldUpdateOperationsInput | number
    totalBruto?: FloatFieldUpdateOperationsInput | number
    totalLiquido?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RescisaoUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    tipoRescisao?: StringFieldUpdateOperationsInput | string
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDemissao?: DateTimeFieldUpdateOperationsInput | Date | string
    avisoPrevio?: StringFieldUpdateOperationsInput | string
    saldoSalario?: FloatFieldUpdateOperationsInput | number
    decimoTerceiroProp?: FloatFieldUpdateOperationsInput | number
    decimoTerceiroInd?: FloatFieldUpdateOperationsInput | number
    feriasProp?: FloatFieldUpdateOperationsInput | number
    feriasInd?: FloatFieldUpdateOperationsInput | number
    tercoFeriasProp?: FloatFieldUpdateOperationsInput | number
    tercoFeriasInd?: FloatFieldUpdateOperationsInput | number
    feriasVencidas?: FloatFieldUpdateOperationsInput | number
    avisoPrevioIndeniz?: FloatFieldUpdateOperationsInput | number
    fgtsRescisorio?: FloatFieldUpdateOperationsInput | number
    multaFgts?: FloatFieldUpdateOperationsInput | number
    inss?: FloatFieldUpdateOperationsInput | number
    inss13?: FloatFieldUpdateOperationsInput | number
    irrf?: FloatFieldUpdateOperationsInput | number
    totalBruto?: FloatFieldUpdateOperationsInput | number
    totalLiquido?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeSubjectUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutEmployeeSubjectsNestedInput
  }

  export type EmployeeSubjectUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeSubjectUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssignmentUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    lessonStart?: NullableIntFieldUpdateOperationsInput | number | null
    lessonEnd?: NullableIntFieldUpdateOperationsInput | number | null
    fullDay?: BoolFieldUpdateOperationsInput | boolean
    hours?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutTeachingAssignmentsNestedInput
  }

  export type TeachingAssignmentUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    lessonStart?: NullableIntFieldUpdateOperationsInput | number | null
    lessonEnd?: NullableIntFieldUpdateOperationsInput | number | null
    fullDay?: BoolFieldUpdateOperationsInput | boolean
    hours?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssignmentUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    lessonStart?: NullableIntFieldUpdateOperationsInput | number | null
    lessonEnd?: NullableIntFieldUpdateOperationsInput | number | null
    fullDay?: BoolFieldUpdateOperationsInput | boolean
    hours?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryAdjustmentUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSalary?: FloatFieldUpdateOperationsInput | number
    newSalary?: FloatFieldUpdateOperationsInput | number
    adjustmentValue?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryAdjustmentUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSalary?: FloatFieldUpdateOperationsInput | number
    newSalary?: FloatFieldUpdateOperationsInput | number
    adjustmentValue?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryAdjustmentUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSalary?: FloatFieldUpdateOperationsInput | number
    newSalary?: FloatFieldUpdateOperationsInput | number
    adjustmentValue?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeSubjectCreateManySubjectInput = {
    id?: string
    employeeId: string
    createdAt?: Date | string
  }

  export type TeachingAssignmentCreateManySubjectInput = {
    id?: string
    employeeId: string
    weekday: number
    startTime: string
    endTime: string
    classGroup?: string | null
    lessonStart?: number | null
    lessonEnd?: number | null
    fullDay?: boolean
    hours: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeSubjectUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutEmployeeSubjectsNestedInput
  }

  export type EmployeeSubjectUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeSubjectUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssignmentUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    lessonStart?: NullableIntFieldUpdateOperationsInput | number | null
    lessonEnd?: NullableIntFieldUpdateOperationsInput | number | null
    fullDay?: BoolFieldUpdateOperationsInput | boolean
    hours?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutTeachingAssignmentsNestedInput
  }

  export type TeachingAssignmentUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    lessonStart?: NullableIntFieldUpdateOperationsInput | number | null
    lessonEnd?: NullableIntFieldUpdateOperationsInput | number | null
    fullDay?: BoolFieldUpdateOperationsInput | boolean
    hours?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssignmentUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    lessonStart?: NullableIntFieldUpdateOperationsInput | number | null
    lessonEnd?: NullableIntFieldUpdateOperationsInput | number | null
    fullDay?: BoolFieldUpdateOperationsInput | boolean
    hours?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
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