export {};

type cExclude<string | number | DebugType> = 
|(string extends string | number ? never : string)
|(T extends string | number ? never : number)
|(DebugType extends string | number ? never : DebugType)

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude<SomeTypes>;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
