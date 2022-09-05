/* eslint-disable @typescript-eslint/no-unused-vars */

/**TypeScriptの基本形 */

// boolean
let bool: boolean = true;

// numbers 数値
let num: number = 0;

// string 文字
let str: string = "s";

// Array 配列
let arr1: Array<number> = [0, 8, 4];
let arr2: number[] = [0, 8, 4];

// tuple
let tuple: [number, string] = [0, "s"];

// any
let any1: any = false;

// void 　　: voidは略可
const funcA = (): void => {
  const test = "Test";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "asdf" };
