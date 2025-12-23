import { Set } from "./set";

/**
 * This class is a representation of the Set data structure based on a hash map.
 *
 * @template K The value type.
 * @implements Set<K>
 * @property {Map<K, null>} map The map used to store the set.
 */
export abstract class MapSet<K> implements Set<K> {
  getSize(): number {
    throw new Error("Method not implemented.");
  }
  add(value: K): void {
    throw new Error("Method not implemented.");
  }
  delete(value: K): void {
    throw new Error("Method not implemented.");
  }
  has(value: K): void {
    throw new Error("Method not implemented.");
  }
  clear(): void {
    throw new Error("Method not implemented.");
  }
  values(): K[] {
    throw new Error("Method not implemented.");
  }
}
