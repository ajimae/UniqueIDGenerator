import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { generateID } from "./mod.ts";

const id = generateID();

Deno.test("returned type", function testType(): void {
  assertEquals(typeof id, "string");
});

Deno.test("string lenght", function testLength(): void {
  assertEquals(id.length, 20);
});

Deno.test("starts with", function startsWith(): void {
  assertEquals(id.startsWith("-"), true);
});
