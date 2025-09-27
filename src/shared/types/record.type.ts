export type RecordMark = {
  text: string;
};

export const RecordType = {
  local: 'local',
  ldap: 'LDAP',
} as const;

export type RecordTypeValue = (typeof RecordType)[keyof typeof RecordType];

type CommonRecord = {
  id: string;
  marks: RecordMark[];
  login: string;
};

type LocalRecord = CommonRecord & {
  type: typeof RecordType.local;
  password: string;
};

type LDAPRecord = CommonRecord & {
  type: typeof RecordType.ldap;
  password: null;
};

export type Record = LocalRecord | LDAPRecord;
