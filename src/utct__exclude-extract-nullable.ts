export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Exclude<対象にする型, 除外したい型>

type FunctionType = Exclude<SomeTypes, string | number>;
// 「type FunctionType = () => void」

type TypeExcludingFunction = Exclude<SomeTypes, Function>;
//「Function」関数型の総称

// Exract<対象にする型,抽出したい型>
type ExtractType = Extract<SomeTypes, DebugType>;
//「type ExtractType = () => void」

// NunNullable<対象にする型> null, undefinedを除去する
type NullableTypes = string | number | null | undefined;
type NonNull = NonNullable<NullableTypes>;
