import type { RecordMark } from '../types/record.type';

export function marksToString(marks: RecordMark[]): string {
  return marks.map((mark) => mark.text).join('; ');
}
