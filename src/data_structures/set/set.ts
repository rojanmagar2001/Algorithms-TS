/**
 * This interface is a representation of the Set data structure.
 */
export interface Set<K> {
  getSize(): number;
  add(value: K): void;
  delete(value: K): void;
  has(value: K): void;
  clear(): void;
  values(): K[];
}
