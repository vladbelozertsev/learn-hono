import DOMPurify from "isomorphic-dompurify";
import { Context } from "hono";
import { CookieOptions } from "hono/utils/cookie";
import { setCookie } from "hono/cookie";

export const withset = <T>(prams: T) => {
  const arr = Object.entries(!!prams && typeof prams === "object" ? prams : {});
  const entries = arr.map((el) => [el[0], { set: el[1] }]);
  return Object.fromEntries(entries) as { [Key in keyof T]: { set: T[Key] } };
};

export const delkeys = <T extends { [key: string]: any }, Keys extends keyof T>(obj: T, keys: Keys[]) => {
  keys.forEach((key) => delete obj[key]);
  return obj as Omit<T, (typeof keys)[number]>;
};

export const numberWithSpaces = (x: number) => {
  const parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
};

export const capitalize = (s: string) => {
  return (s && s[0].toUpperCase() + s.slice(1)) || "";
};

export const sanitize = (text?: unknown) => {
  if (typeof text !== "string") return text;
  return DOMPurify.sanitize(text);
};

export const setSecureCookie = (c: Context<any, any, any>, name: string, value: string, options?: CookieOptions) => {
  setCookie(c, name, value, {
    // secure: true,
    httpOnly: true,
    sameSite: "lax",
    ...options,
  });
};

export const isPrimitive = (val: unknown) => {
  if (val === null) return true;
  if (typeof val === "object" || typeof val === "function") return false;
  return true;
};

export const isStringOrNumber = (val: unknown) => {
  return typeof val === "string" || typeof val === "number";
};

export const btoaURL = (encode?: string) => {
  if (!encode || typeof encode !== "string") return "";
  const chars: { [key: string]: string } = { "+": "-", "/": "_", "=": "." };
  return btoa(encode).replace(/[\+/=]/g, (s) => chars[s] || s);
};

export const atobURL = (decode?: string) => {
  if (!decode || typeof decode !== "string") return "";
  const chars: { [key: string]: string } = { "-": "+", _: "/", ".": "=" };
  return atob(decode.replace(/[\-_\.]/g, (s) => chars[s] || s));
};

export const safeParseJSON = <T>(json: string) => {
  try {
    return JSON.parse(json) as T;
  } catch (err) {
    return null;
  }
};

export const groupBy = <T extends { [key: string]: unknown }>(field?: string | number, arr?: T[]) => {
  if (!field || !arr?.length) return {};
  return arr.reduce((acc, cur) => {
    const key = cur[field] as string | number;
    if (!isStringOrNumber(cur[field])) return acc;
    return { ...acc, [key]: (acc[key] || []).concat(cur) };
  }, {} as { [key: string]: T[] });
};

export const fileURL = (name: string, type?: "public" | "private") => {
  const folder = type ? type : "public";
  return `${process.env.URL}/${folder}/${name}`;
};

export const queryIds = (c: Context<any, any, any>, name: string) => {
  const str = c.req.query(name);
  if (!c || !name || !str) return [];
  return str.split(".").map((id) => +id);
};

export const langx = (val: unknown) => {
  if (typeof val !== "object" || val === null) return {};
  const arr = Object.entries(val).map((item) => {
    if (!item[0].includes("_")) return item;
    const prop = item[0].substring(0, item[0].indexOf("_"));
    return [prop, item[1]];
  });
  return Object.fromEntries(arr);
};
