import type React from "react";
import styles from "./filter-builder.module.css";
import { Ref } from "react";
import { Button } from "../button/button";
import { SingleFilter, FieldOption, FilterValue, FilterGroup, Filter, LogicType } from "./filter-builder-types";
import { Input } from "../input/input";
import Select from "../select/select";

const FilterEditor: React.FC<{
  readonly filter: SingleFilter;
  readonly onChange: (f: SingleFilter) => void;
  readonly onDelete: () => void;
  readonly fieldOptions: FieldOption[];
}> = ({ filter, onChange, onDelete, fieldOptions }) => {
  /**
   * Operators Map
   * For each id ( code operator ) --> the relative string that will be displayed
   * TODO: Finish the Mapping and sets the correct value --> Remember the translation inside translation.json file
   */
  const operatorOptionsMap = {
    string: [
      { value: "starts with" },
      {
        value: "contains",
      },
      { value: "equals" },
    ],
    number: [
      { value: "equals" },
      { value: "greater" },
      {
        value: "greater and equals",
      },
      { value: "less than" },
      {
        value: "less and equals than",
      },
    ],
    date: [{ value: "Prima di" }, { value: "Dopo il" }, { value: "Il giorno" }],
  };

  const handleFieldChange = (value: string) => {
    const selectedField = fieldOptions.find((f) => f.value === value);
    if (!selectedField) return;

    const defaultOperator = operatorOptionsMap[selectedField.type]?.[0] || {
      value: "",
    };

    onChange({
      ...filter,
      field: selectedField,
      columnsType: selectedField.type,
      operator: defaultOperator, // reset operator
      value: "", // reset value
    });
  };

  const handleOperatorChange = (value: string) => {
    const selectedOperator = operatorOptionsMap[filter.columnsType]?.find((op) => op.value === value);
    if (selectedOperator) {
      onChange({ ...filter, operator: selectedOperator });
    }
  };

  const handleValueChange = (val: FilterValue) => {
    onChange({ ...filter, value: val });
  };

  const renderInput = () => {
    switch (filter.columnsType) {
      case "string":
        return <Input value={filter.value as string} onChange={handleValueChange} />;
      //   case "number":
      //     return <InputNumber bindValue={filter.value as number} onChange={handleValueChange} />;
      //   case "date":
      //     return <DatePicker bindValue={filter.value as string} onChange={handleValueChange} />;
    }
  };

  const filterEditorClass = {
    row: `${styles["rst-filter-row"]}`,
    filterToolbar: `${styles["rst-filter-toolbar"]}`,
  };

  return (
    <div className={filterEditorClass.row}>
      <Select value={filter.field.value} options={fieldOptions.map((f) => ({ value: f.value }))} onChange={handleFieldChange} />
      <Select value={filter.operator.value} options={operatorOptionsMap[filter.columnsType]} onChange={handleOperatorChange} />
      {renderInput()}
      <Button value="Delete" onClick={onDelete} variant="base" leadingVisual="delete"></Button>
    </div>
  );
};

const FilterGroupEditor: React.FC<{
  readonly group: FilterGroup;
  readonly onChange: (g: FilterGroup) => void;
  readonly fieldOptions: FieldOption[];
  readonly onDelete?: () => void;
  readonly level?: number;
  readonly onClose?: () => void;
}> = ({ group, onChange, onDelete, onClose, level = 0, fieldOptions }) => {
  const updateFilter = (index: number, updated: Filter) => {
    const updatedFilters = [...group.filters];
    updatedFilters[index] = updated;
    onChange({ ...group, filters: updatedFilters });
  };

  const deleteFilter = (index: number) => {
    const updatedFilters = [...group.filters];
    updatedFilters.splice(index, 1);
    onChange({ ...group, filters: updatedFilters });
  };

  const addSingleFilter = () => {
    const firstField = fieldOptions[0];
    const defaultOperator = { value: "" };

    const newFilter: SingleFilter = {
      field: firstField,
      columnsType: firstField?.type || "string",
      operator: defaultOperator,
      value: "",
    };
    onChange({ ...group, filters: [...group.filters, newFilter] });
  };

  const addSubGroup = () => {
    const defaultOperator = { id: "", value: "" };

    const defaultFilter = {
      field: fieldOptions[0] || "",
      columnsType: fieldOptions[0]?.type || "string",
      operator: defaultOperator,
      value: "",
    };

    const newGroup: FilterGroup = {
      logic: "and",
      filters: [defaultFilter],
    };

    onChange({ ...group, filters: [...group.filters, newGroup] });
  };

  const handleLogicChange = (val: string) => {
    onChange({ ...group, logic: val as LogicType });
  };

  const filterBuilderClass = {
    filterGroup: `${styles["rst-filter-group"]}`,
    filterToolbar: `${styles["rst-filter-toolbar"]}`,
    filterList: `${styles["rst-filter-list"]}`,
    actionButtons: `${styles["rst-filter-actionButtons"]}`,
  };

  return (
    <div className={filterBuilderClass.filterGroup} style={level != 0 ? { marginLeft: 20 } : undefined} data-component={level === 0 ? "filter" : undefined}>
      <div className={filterBuilderClass.filterToolbar}>
        {/* <ButtonGroup
          options={[
            { id: "and", value: "AND" },
            { id: "or", value: "OR" },
          ]}
          bindValue={group.logic}
          onChange={handleLogicChange}
        /> */}
        <div className={filterBuilderClass.actionButtons}>
          <Button onClick={addSingleFilter} value={"add filter"} leadingVisual="plus" variant="base" />
          <Button onClick={addSubGroup} value={"add sub group"} leadingVisual="plus" variant="base" />
          {onDelete && <Button value="Delete" onClick={onDelete} variant="danger" leadingVisual="delete"></Button>}
          {onClose && <Button value="Close" onClick={onClose} leadingVisual="close" variant="base"></Button>}
        </div>
      </div>

      <div className={filterBuilderClass.filterList}>
        {group.filters
          .map((f, i) => ({ filter: f, index: i }))

          .map(({ filter, index }) =>
            "logic" in filter ? (
              <FilterGroupEditor
                key={index}
                group={filter}
                onChange={(updated) => updateFilter(index, updated)}
                onDelete={() => deleteFilter(index)}
                level={level + 1}
                fieldOptions={fieldOptions}
              />
            ) : (
              <FilterEditor
                key={index}
                filter={filter}
                onChange={(updated) => updateFilter(index, updated)}
                onDelete={() => deleteFilter(index)}
                fieldOptions={fieldOptions}
              />
            )
          )}
      </div>
    </div>
  );
};

interface FilterBuilderProps {
  readonly filters: FilterGroup;
  readonly onChange: (filters: FilterGroup) => void;
  readonly fieldOptions: FieldOption[];
  readonly ref: Ref<HTMLDivElement>;
  readonly onClose?: () => void;
}

export const FilterBuilder: React.FC<FilterBuilderProps> = ({ filters, onChange, fieldOptions, ref, onClose }) => {
  const filterBuilderClass = {
    filterWrapper: `${styles["rst-filter-wrapper"]}`,
  };
  return (
    <div className={filterBuilderClass.filterWrapper} ref={ref}>
      <FilterGroupEditor group={filters} onChange={onChange} fieldOptions={fieldOptions} onClose={onClose} />
    </div>
  );
};
