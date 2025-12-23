import { describe } from "vitest";
import { testQueue } from "./queue";
import { StackQueue } from "../stack_queue";

describe("Stack Queue", () => testQueue(StackQueue));
