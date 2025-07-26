export interface SingleFilter {
  field: FieldOption;
  columnsType: "string" | "date" | "number";
  operator: Operator;
  value: FilterValue;
}

export interface FilterGroup {
  logic: LogicType;
  filters: Filter[];
}

export interface FieldOption {
  value: string;
  type: "string" | "date" | "number";
}

export type FilterValue = string | number | Date | null;

export type LogicType = "and" | "or";

export type Filter = SingleFilter | FilterGroup;

export interface Operator {
  value: string;
}
