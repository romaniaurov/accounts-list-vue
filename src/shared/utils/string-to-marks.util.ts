import type { RecordMark } from '../types/record.type';

export function stringToMarks(str: string): RecordMark[] {
  return str
    .split(';')
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .map((text) => ({ text }));
}
